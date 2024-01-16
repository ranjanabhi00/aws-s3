import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileObject } from './object.entity';
import { createWriteStream, existsSync, mkdirSync } from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { BucketService } from 'src/bucket/bucket.service';


@Injectable()
export class FileObjectService {
    private readonly storagePath = path.join(__dirname, '../../storage');
  constructor(
    @InjectRepository(FileObject)
    private fileObjectRepository: Repository<FileObject>,
    private bucketService:BucketService
   
  ) { this.initializeStorage();}

  private initializeStorage() {
    if (!existsSync(this.storagePath)) {
      mkdirSync(this.storagePath);
    }
  }

  async uploadFile(file: Express.Multer.File,bucketName:string): Promise<string> {
    if(!bucketName?.length){
        throw new BadRequestException('Bucket name must be passed to create object');
    }
    const fileObject=new FileObject()
    const bucket=await this.bucketService.createBucket(bucketName)
    const fileId = uuidv4();
    const filePath = path.join(this.storagePath, fileId + path.extname(file.originalname));
    const url=fileId+path.extname(file.originalname)
    fileObject.url=url;
    fileObject.bucket=bucket;
    this.fileObjectRepository.save(fileObject)
    const writeStream = createWriteStream(filePath);

    return new Promise((resolve, reject) => {
      writeStream.on('finish', () => resolve(url));
      writeStream.on('error', (error) => reject(error));

      writeStream.write(file.buffer);
      writeStream.end();
    });
  }

  async getFile(id: number): Promise<any> {
    const file=await this.fileObjectRepository.findOne({where:{id:id}})
    const filePath = path.join(this.storagePath, file.url);

    if (existsSync(filePath)) {
        return filePath
    } else {
      throw new NotFoundException('File not found');
    }
  }
  
  deleteFile(id:number){
      this.fileObjectRepository.delete({id})
  }
}
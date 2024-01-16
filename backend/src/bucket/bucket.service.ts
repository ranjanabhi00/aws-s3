import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bucket } from './bucket.entity';
import { FileObject } from 'src/object/object.entity';

@Injectable()
export class BucketService {
  constructor(
    @InjectRepository(Bucket)
    private bucketRepository: Repository<Bucket>,
  ) {}

  async findAll(): Promise<Bucket[]> {
    const buckets = await this.bucketRepository.find()
    return buckets
  }

  async findFiles(id:number):Promise<FileObject[] |[]>{
    const bucket =await this.bucketRepository.find({where:{id:id}, relations: {
        fileObjects: true,
    },})
    return bucket[0].fileObjects;
  }

 async  createBucket(name:string) :Promise<Bucket |null>{
    let existing=await this.bucketRepository.findOne({where:{name:name}})

    if(existing)
     return existing

    let bucket=new Bucket();
    bucket.name=name
    let savedBucket= await this.bucketRepository.save(bucket)

    return Object.assign(savedBucket)
  }
  
}
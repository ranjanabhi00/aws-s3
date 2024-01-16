import {  Controller, Delete, Get, Param, Post, Query, Res, StreamableFile, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileObjectService } from './object.service';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { BucketService } from 'src/bucket/bucket.service';




@Controller('object')
export class FileObjectController {
  constructor(
    private fileObjectService:FileObjectService,
    private bucketService:BucketService
    ) {}


  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File ,@Query('bucket') bucketName:any): Promise<any> {
    const fileId = await this.fileObjectService.uploadFile(file,bucketName);
    return {fileId,bucketName};
  }

  @Get(':fileId')
 async  getFile(@Param('fileId') fileId: number, @Res({passthrough:true}) res:Response):Promise< StreamableFile >{
    const filePath = await this.fileObjectService.getFile(fileId);
    const file=createReadStream(filePath)
    res.set({
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename=${fileId}`
    })
    return new StreamableFile(file)
  }

  @Delete(':id')
  deleteFile(@Param('id') id:number){
    this.fileObjectService.deleteFile(id)
  }
}
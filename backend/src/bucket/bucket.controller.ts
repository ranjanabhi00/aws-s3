import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { BucketService } from './bucket.service';
import { Bucket } from './bucket.entity';
import { FileObject } from 'src/object/object.entity';



@Controller('bucket')
export class BucketController {
  constructor(private bucketService:BucketService) {}

  @Get()
  async getBuckets(): Promise<any> {
    let buckets=await this.bucketService.findAll()
    return buckets
  }
 
  @Get(':id')
  async getObjects(@Param('id') id:number):Promise<FileObject[] | []>{
      return this.bucketService.findFiles(id)
  }

}
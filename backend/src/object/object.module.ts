import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileObject } from './object.entity';
import { FileObjectService } from './object.service';
import { FileObjectController } from './object.controller';
import { BucketModule } from 'src/bucket/bucket.module';

@Module({
    imports: [
      TypeOrmModule.forFeature([FileObject]),
      BucketModule
    ],
    providers: [FileObjectService],
    controllers: [FileObjectController],
})
export class ObjectModule {}

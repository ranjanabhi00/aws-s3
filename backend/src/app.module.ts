import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BucketModule } from './bucket/bucket.module';
import { ObjectModule } from './object/object.module';
import { Bucket } from './bucket/bucket.entity';
import { FileObject } from './object/object.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './storage',
    }),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'db_new',
    synchronize: true,
    entities:[Bucket,FileObject]
  }),
   BucketModule,
    ObjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

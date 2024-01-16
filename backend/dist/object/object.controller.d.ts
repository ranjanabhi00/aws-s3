/// <reference types="multer" />
import { StreamableFile } from '@nestjs/common';
import { FileObjectService } from './object.service';
import { Response } from 'express';
import { BucketService } from 'src/bucket/bucket.service';
export declare class FileObjectController {
    private fileObjectService;
    private bucketService;
    constructor(fileObjectService: FileObjectService, bucketService: BucketService);
    uploadFile(file: Express.Multer.File, bucketName: any): Promise<any>;
    getFile(fileId: number, res: Response): Promise<StreamableFile>;
    deleteFile(id: number): void;
}

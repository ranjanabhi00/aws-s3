/// <reference types="multer" />
import { Repository } from 'typeorm';
import { FileObject } from './object.entity';
import { BucketService } from 'src/bucket/bucket.service';
export declare class FileObjectService {
    private fileObjectRepository;
    private bucketService;
    private readonly storagePath;
    constructor(fileObjectRepository: Repository<FileObject>, bucketService: BucketService);
    private initializeStorage;
    uploadFile(file: Express.Multer.File, bucketName: string): Promise<string>;
    getFile(id: number): Promise<any>;
    deleteFile(id: number): void;
}

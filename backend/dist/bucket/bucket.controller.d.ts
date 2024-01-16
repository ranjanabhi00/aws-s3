import { BucketService } from './bucket.service';
import { FileObject } from 'src/object/object.entity';
export declare class BucketController {
    private bucketService;
    constructor(bucketService: BucketService);
    getBuckets(): Promise<any>;
    getObjects(id: number): Promise<FileObject[] | []>;
}

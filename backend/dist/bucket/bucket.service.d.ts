import { Repository } from 'typeorm';
import { Bucket } from './bucket.entity';
import { FileObject } from 'src/object/object.entity';
export declare class BucketService {
    private bucketRepository;
    constructor(bucketRepository: Repository<Bucket>);
    findAll(): Promise<Bucket[]>;
    findFiles(id: number): Promise<FileObject[] | []>;
    createBucket(name: string): Promise<Bucket | null>;
}

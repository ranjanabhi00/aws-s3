import { Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bucket } from './bucket.entity';
import { BucketService } from './bucket.service';
import { BucketController } from './bucket.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Bucket])
    ],
    providers: [BucketService],
    controllers: [BucketController],
    exports:[BucketService]
})
export class BucketModule {}

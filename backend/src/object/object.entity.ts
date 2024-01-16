import { Bucket } from 'src/bucket/bucket.entity';
import { Entity, Column, PrimaryGeneratedColumn,  ManyToOne } from 'typeorm';

@Entity('file_object')
export class FileObject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(()=>Bucket,(bucket)=>bucket.fileObjects)
   bucket:Bucket

  
}
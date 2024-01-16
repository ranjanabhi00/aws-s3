import { FileObject } from 'src/object/object.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Bucket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(()=>FileObject,(fileObject)=>fileObject.bucket)
   fileObjects:FileObject[]
  
}
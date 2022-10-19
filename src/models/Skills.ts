import { Field, ObjectType } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export default class Skills {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Field()
  @Column({ length: 50, type: "varchar" })
  name: string;
}

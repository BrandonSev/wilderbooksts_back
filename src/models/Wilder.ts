import { Field, ObjectType } from "type-graphql";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Grade from "./Grade";

@ObjectType()
@Entity()
export default class Wilder {
  @PrimaryGeneratedColumn()
  @Field()
  id?: number;

  @Field()
  @Column({ length: 50, type: "varchar" })
  firstname: string;

  @Field()
  @Column({ length: 50, type: "varchar" })
  lastname: string;

  @Field()
  @Column({ type: "text" })
  description: string;

  @Field()
  @Column({ type: "varchar" })
  avatar: string;

  @Field(() => [Grade])
  @OneToMany(() => Grade, (grade) => grade.wilder, {
    eager: true,
  })
  grades: Grade[];
}

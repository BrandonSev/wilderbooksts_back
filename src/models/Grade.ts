import { Field, ObjectType } from "type-graphql";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Skills from "./Skills";
import Wilder from "./Wilder";

@ObjectType()
@Entity()
export default class Grade {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Field()
  @Column({ default: 0 })
  vote: number;

  @ManyToOne(() => Wilder, { onDelete: "CASCADE" })
  @JoinColumn({ name: "wilder_id" })
  wilder!: Wilder;

  @Field(() => Skills)
  @ManyToOne(() => Skills, { eager: true })
  @JoinColumn({ name: "skill_id" })
  skill!: Skills;
}

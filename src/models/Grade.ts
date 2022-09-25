import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Skills from "./Skills";
import Wilder from "./Wilder";

@Entity()
export default class Grade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  vote: number;

  @ManyToOne(() => Wilder, { onDelete: "CASCADE" })
  @JoinColumn({ name: "wilder_id" })
  wilder!: Wilder;

  @ManyToOne(() => Skills, { eager: true })
  @JoinColumn({ name: "skill_id" })
  skill!: Skills;
}

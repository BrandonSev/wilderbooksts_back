import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Grade from "./Grade";

@Entity()
export default class Skills {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, type: "varchar" })
  name: string;

  @OneToMany(() => Grade, (grade) => grade.skill)
  grades: Grade[];
}

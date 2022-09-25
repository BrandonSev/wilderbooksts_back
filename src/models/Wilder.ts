import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Grade from "./Grade";

@Entity()
export default class Wilder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, type: "varchar" })
  firstname: string;

  @Column({ length: 50, type: "varchar" })
  lastname: string;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "varchar" })
  avatar: string;

  @OneToMany(() => Grade, (grade) => grade.wilder, {
    eager: true,
  })
  grades: Grade[];
}

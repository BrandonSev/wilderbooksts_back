import { DeleteResult } from "typeorm";
import Grade from "../models/Grade";
import Skills from "../models/Skills";
import Wilder from "../models/Wilder";
import datasource from "../utils";

const repository = datasource.getRepository(Wilder);

/**
 * Find all wilders from db
 * @return Wilder[]
 */
const getAll = async (): Promise<Wilder[]> => {
  return await repository.find();
};
/**
 * Find one wilder from db or fail if not found
 * @param {int} id
 * @return Wilder
 */
const findOneOrFail = async (id: number): Promise<Wilder> => {
  return await repository.findOneByOrFail({
    id,
  });
};
/**
 * Create wilder in db
 * @param {Wilder} wilder
 * @return Wilder
 */
const create = async (wilder: WilderType): Promise<Wilder | null> => {
  const newWilder: Wilder = await repository.save(wilder);
  if (wilder.skills.length > 0) {
    await Promise.all(
      wilder.skills.map(async (skill: Skills) => {
        const grade = new Grade();
        grade.skill = skill;
        grade.wilder = newWilder;
        await datasource.getRepository(Grade).save(grade);
      })
    );
  }
  return await repository.findOneBy({ id: newWilder.id });
};
/**
 * Update wilder in db
 * @param {int} id
 * @param {Wilder} data
 * @returns
 */
const update = async (id: number, data: WilderType): Promise<Wilder | null> => {
  const wilder = await findOneOrFail(id);

  if (wilder !== null) {
    wilder.firstname = data.firstname;
    wilder.lastname = data.lastname;
    wilder.description = data.description;
    wilder.avatar = data.avatar;

    await repository.save(wilder);

    const newSkill: Skills[] = [];

    const array = wilder.grades.map((grade: Grade) => grade.skill.id);

    for await (const skill of data.skills) {
      if (!array.includes(skill.id)) {
        newSkill.push(skill);
      }
    }

    if (newSkill.length > 0) {
      for await (const skill of newSkill) {
        const grade = new Grade();
        grade.skill = skill;
        grade.wilder = wilder;
        await datasource.getRepository(Grade).save(grade);
      }
    }

    // Suppression

    const skillData = data.skills.map((skill: Skills) => skill.id);
    const wilderGrades = wilder.grades.map((grade: Grade) => {
      return {
        gradeId: grade.id,
        skillId: grade.skill.id,
      };
    });
    const gradesToDelete = wilderGrades.filter(
      (el) => !skillData.includes(el.skillId)
    );

    if (gradesToDelete.length > 0) {
      for await (const grade of gradesToDelete) {
        await datasource.getRepository(Grade).delete({
          skill: { id: grade.skillId },
          id: grade.gradeId,
        });
      }
    }
  }

  return await repository.findOneBy({ id });
};
/**
 * Delete wilder in db or fail if not found
 * @param {int} id
 * @return Promise<DeleteResult>
 */
const remove = async (id: number): Promise<DeleteResult> => {
  return await repository.delete(id);
};

export default {
  getAll,
  findOneOrFail,
  create,
  update,
  remove,
};

export interface WilderType {
  firstname: string;
  lastname: string;
  description: string;
  avatar: string;
  skills: Skills[];
}

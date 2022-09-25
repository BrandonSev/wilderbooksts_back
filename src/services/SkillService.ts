import { DeleteResult } from "typeorm";
import Skills from "../models/Skills";
import datasource from "../utils";

const repository = datasource.getRepository(Skills);

/**
 * Find all skills from db
 * @return Wilder[]
 */
const getAll = async (): Promise<Skills[]> => {
  return await repository.find();
};
/**
 * Create skill in db
 * @param {Skills} skill
 * @return Wilder
 */
const create = async (skill: SkillType): Promise<Skills> => {
  return await repository.save(skill);
};
/**
 * Delete skill in db or fail if not found
 * @param {int} id
 * @return void
 */
const remove = async (id: number): Promise<DeleteResult> => {
  return await repository.delete(id);
};

export default { getAll, create, remove };

export interface SkillType {
  name: string;
}

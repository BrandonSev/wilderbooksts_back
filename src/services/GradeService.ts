import Grade from "../models/Grade";
import datasource from "../utils";

const repository = datasource.getRepository(Grade);

const increment = async (id: number): Promise<Grade> => {
  const grade = await repository.findOneByOrFail({ id });
  grade.vote += 1;
  return await repository.save(grade);
};

export default { increment };

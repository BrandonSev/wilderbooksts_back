import { Arg, Mutation, Resolver } from "type-graphql";
import Grade from "../models/Grade";
import GradeService from "../services/GradeService";

@Resolver(Grade)
export default class GradeResolver {
  @Mutation(() => Grade)
  async incrementGrade(@Arg("id") id: number): Promise<Grade> {
    return await GradeService.increment(id);
  }
}

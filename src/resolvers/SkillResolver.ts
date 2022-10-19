import { DeleteResult } from "typeorm";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import Skills from "../models/Skills";
import SkillService from "../services/SkillService";
import CreateSkillInput from "../inputs/CreateSkillInput";

@Resolver(Skills)
export default class SkillResolver {
  @Query(() => [Skills])
  async getAll(): Promise<Skills[]> {
    return await SkillService.getAll();
  }

  @Mutation(() => Skills)
  async createSkill(
    @Arg("skill") skill: CreateSkillInput
  ): Promise<Skills | null> {
    return await SkillService.create(skill);
  }

  @Mutation(() => Skills)
  async removeSkill(@Arg("id") id: number): Promise<DeleteResult> {
    return await SkillService.remove(id);
  }
}

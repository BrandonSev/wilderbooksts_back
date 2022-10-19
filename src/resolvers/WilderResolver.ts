import { CreateWilderInput } from "./../inputs/createWilderInput";
import { Resolver, Query, Mutation, Arg } from "type-graphql";
import Wilder from "../models/Wilder";
import WilderService from "../services/WilderService";
import UpdateWilderInput from "../inputs/UpdateWilderInput";

@Resolver(Wilder)
export default class WilderResolver {
  @Query(() => [Wilder])
  async getAllWilders(): Promise<Wilder[]> {
    return await WilderService.getAll();
  }

  @Query(() => Wilder)
  async findOne(@Arg("id") id: number): Promise<Wilder> {
    return await WilderService.findOneOrFail(id);
  }

  @Mutation(() => Wilder)
  async createWilder(
    @Arg("wilder") wilder: CreateWilderInput
  ): Promise<Wilder | null> {
    return await WilderService.create(wilder);
  }

  @Mutation(() => Wilder)
  async updateWilder(
    @Arg("id") id: number,
    @Arg("wilder") wilder: UpdateWilderInput
  ): Promise<Wilder | null> {
    return await WilderService.update(id, wilder);
  }

  @Mutation(() => Boolean)
  async deleteWilder(@Arg("id") id: number): Promise<Boolean> {
    await WilderService.remove(id);
    return true;
  }
}

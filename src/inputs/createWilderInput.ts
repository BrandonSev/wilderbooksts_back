import { Field, InputType } from "type-graphql";
import Skills from "../models/Skills";
import CreateWilderSkillInput from "./CreateWilderSkillInput";

@InputType()
export class CreateWilderInput {
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  description: string;

  @Field()
  avatar: string;

  @Field(() => [CreateWilderSkillInput], { nullable: true })
  skills?: Skills[];
}

import { Field, InputType } from "type-graphql";
import CreateSkillInput from "./CreateSkillInput";

@InputType()
export default class CreateWilderSkillInput extends CreateSkillInput {
  @Field()
  id: number;
}

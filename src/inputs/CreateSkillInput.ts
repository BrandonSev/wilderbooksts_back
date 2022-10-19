import { Field, InputType } from "type-graphql";

@InputType()
export default class CreateSkillInput {
  @Field()
  name: string;
}

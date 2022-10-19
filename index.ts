import "reflect-metadata";
import WilderResolver from "./src/resolvers/WilderResolver";
import SkillResolver from "./src/resolvers/SkillResolver";
import { ApolloServer } from "apollo-server";
import datasource from "./src/utils";
import { buildSchema } from "type-graphql";
import GradeResolver from "./src/resolvers/GradeResolver";

const init = async (): Promise<void> => {
  await datasource.initialize();
  const schema = await buildSchema({
    resolvers: [WilderResolver, SkillResolver, GradeResolver],
  });
  const server = new ApolloServer({
    schema,
  });
  // Ecoute du serveur
  await server
    .listen({ port: 8000 })
    .then(async ({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

void init();

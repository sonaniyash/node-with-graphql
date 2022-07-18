import { makeExecutableSchema } from "@graphql-tools/schema";

import typeDefs from "./types/index";
import resolvers from "./resolvers/index";

const combineTypeDefs = [typeDefs.author, typeDefs.blog, typeDefs.comment];

const combineResolvers = [resolvers.author, resolvers.blog, resolvers.comment];

const schema = makeExecutableSchema({
  typeDefs: combineTypeDefs,
  resolvers: combineResolvers,
});

export default schema;

import { ApolloServer, gql } from "apollo-server";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import { join } from "path";

// Construct a schema, using GraphQL schema language
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];
// const typeDefs: any = gql`
//   type Author {
//     name: String
//     id: ID
//   }
//   type Book {
//     title: String
//     author: String
//   }
//   type Query {
//     books: [Book!]!
//     getAuthor(id: Int!): Author
//     hello: String
//   }
// `;

// スキーマの定義
const schema = loadSchemaSync(join(__dirname, "../schema.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

// リゾルバーの定義
const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getAuthor: (id: number) => ({ name: "nakanishi", id: "123" }),
    books: () => books,
  },
};

const schemaWithResolvers = addResolversToSchema({ schema, resolvers });
// const server = new ApolloServer({ typeDefs, resolvers });
// サーバーの起動
const server = new ApolloServer({ schema: schemaWithResolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

import { Book, User } from "./types/generated/graphql";

// Construct a schema, using GraphQL schema language
const books: Book[] = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];
const users: User[] = [
  {
    id: 1,
    tokenId: "jfsadwewex223ndsdj",
    name: "jabelic",
  },
];
// リゾルバーの定義
export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getAuthor: (id: number) => ({ name: "nakanishi", id: "123" }),
    getAllBooks: () => books,
    getUser: (id: number) => users[0],
  },
};

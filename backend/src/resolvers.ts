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
    name: "jabelic1",
  },
  {
    id: 2,
    tokenId: "3ddg4xsxzoo9gdddd",
    name: "jabelic2",
  },
  {
    id: 3,
    tokenId: "jfsadwd2g4dd21sdj",
    name: "jabelic3",
  },
];
const getUser = (id: number) => {
  console.debug(
    users.find((item: User) => item.id === id),
    id
  );
  return users.find((item: User) => item.id === id);
};
// リゾルバーの定義
export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    getAuthor: (id: number) => ({ name: "nakanishi", id: "123" }),
    getAllBooks: () => books,
    getUser: (id: number) => getUser(id),
  },
};

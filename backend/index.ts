import express from "express";
import { ApolloServer, gql } from "apollo-server-express";

// Construct a schema, using GraphQL schema language
const typeDefs: any = gql`
  type Query {
    hello: String
  }
`;

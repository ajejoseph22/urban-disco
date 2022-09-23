import { FC } from "react";
import { client } from "./client";
import { ApolloProvider as LibraryProvider } from "@apollo/client";

export const ApolloProvider: FC = ({ children }) => {
  return <LibraryProvider client={client}>{children}</LibraryProvider>;
};

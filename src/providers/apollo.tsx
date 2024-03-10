"use client";
// ^ this file needs the "use client" pragma

import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";
import { makeApolloClient } from "./apollo-client";

export function ApolloProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeApolloClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

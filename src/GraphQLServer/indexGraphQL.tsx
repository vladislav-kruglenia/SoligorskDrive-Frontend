import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";

const link = createHttpLink({
    credentials: 'include',
    uri: "http://localhost:5000/graphql",
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions:{
        mutate: {errorPolicy: "all"}
    },
    link
});
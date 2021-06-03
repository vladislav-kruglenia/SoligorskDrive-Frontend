import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";

const link = createHttpLink({
    // uri: "http://localhost:5000/graphql",
    credentials: 'include',
    uri: "https://soligorsk-drive-api.herokuapp.com/graphql",
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions:{
        mutate: {errorPolicy: "all"}
    },
    link
});
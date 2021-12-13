import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://samahan-cloud.addu.edu.ph/graphql",
    cache: new InMemoryCache(),
});

export default client;
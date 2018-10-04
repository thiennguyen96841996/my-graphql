import { GraphQLServer } from 'graphql-yoga';
import { typeDefs, resolvers } from './schemas';

const server = new GraphQLServer({
    typeDefs,
    resolvers,
})

server.start(() => console.log('Server is running....'))

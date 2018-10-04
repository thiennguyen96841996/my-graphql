export const typeDef = `
    extend type Query {
        getAllPersons: [Person]
        findPerson(id: ID!): Person
    }

    extend type Mutation {
        createPerson(input: PersonInput): Person
        deletePerson(id: ID!): Boolean
        updatePerson(id: ID!, input: PersonInput): Person
        insertPersons(input: [PersonInput]): Boolean
    }

    input PersonInput {
        name: String,
        age: String,
        gender: String,
    }

    type Person {
        id: ID,
        name: String,
        age: String,
        gender: String,
    }
`;

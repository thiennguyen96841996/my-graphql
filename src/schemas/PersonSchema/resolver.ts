import { PersonModel } from '../../models/person';

export const resolver = {
    Query: {
        getAllPersons: () => PersonModel.getAllPersons(),
        findPerson(_, { id }) {
            return PersonModel.findPerson(id);
        }
    },
    Mutation: {
        createPerson(root, { input }) {
            return PersonModel.createPerson(input);
        },
        deletePerson(root, { id }) {
            return PersonModel.deletePerson(id);
        },
        updatePerson(root, { id, input }) {
            if (id) {
                return PersonModel.updatePerson(id, input);
            }
            return false;
        },
        insertPersons(root, { input }) {
            return PersonModel.insertPersons(input);
        }
    }
}

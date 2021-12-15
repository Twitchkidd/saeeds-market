export const schema = gql`
  type NewItem {
    id: Int!
    title: String!
    description: String!
    createdAt: DateTime!
  }

  type Query {
    newItems: [NewItem!]! @requireAuth
    newItem(id: Int!): NewItem @requireAuth
  }

  input CreateNewItemInput {
    title: String!
    description: String!
  }

  input UpdateNewItemInput {
    title: String
    description: String
  }

  type Mutation {
    createNewItem(input: CreateNewItemInput!): NewItem! @requireAuth
    updateNewItem(id: Int!, input: UpdateNewItemInput!): NewItem! @requireAuth
    deleteNewItem(id: Int!): NewItem! @requireAuth
  }
`;

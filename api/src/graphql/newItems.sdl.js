export const schema = gql`
  type NewItem {
    id: Int!
    title: String!
    description: String!
    imageUrl: String!
    createdAt: DateTime!
  }

  type Query {
    newItems: [NewItem!]! @skipAuth
    newItem(id: Int!): NewItem @skipAuth
  }

  input CreateNewItemInput {
    title: String!
    description: String!
    imageUrl: String!
  }

  input UpdateNewItemInput {
    title: String
    description: String
    imageUrl: String
  }

  type Mutation {
    createNewItem(input: CreateNewItemInput!): NewItem! @requireAuth
    updateNewItem(id: Int!, input: UpdateNewItemInput!): NewItem! @requireAuth
    deleteNewItem(id: Int!): NewItem! @requireAuth
  }
`;

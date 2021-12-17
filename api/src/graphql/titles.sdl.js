export const schema = gql`
  type Title {
    id: Int!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    titles: [Title!]! @skipAuth
    title(id: Int!): Title @requireAuth
  }

  input CreateTitleInput {
    text: String!
  }

  input UpdateTitleInput {
    text: String
  }

  type Mutation {
    createTitle(input: CreateTitleInput!): Title! @requireAuth
    updateTitle(id: Int!, input: UpdateTitleInput!): Title! @requireAuth
    deleteTitle(id: Int!): Title! @requireAuth
  }
`;

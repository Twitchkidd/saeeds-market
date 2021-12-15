export const schema = gql`
  type TagLine {
    id: Int!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    tagLines: [TagLine!]! @requireAuth
    tagLine(id: Int!): TagLine @requireAuth
  }

  input CreateTagLineInput {
    text: String!
  }

  input UpdateTagLineInput {
    text: String
  }

  type Mutation {
    createTagLine(input: CreateTagLineInput!): TagLine! @requireAuth
    updateTagLine(id: Int!, input: UpdateTagLineInput!): TagLine! @requireAuth
    deleteTagLine(id: Int!): TagLine! @requireAuth
  }
`;

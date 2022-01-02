export const schema = gql`
  type WeCarryText {
    id: Int!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    weCarryTexts: [WeCarryText!]! @skipAuth
    weCarryText(id: Int!): WeCarryText @skipAuth
  }

  input CreateWeCarryTextInput {
    text: String!
  }

  input UpdateWeCarryTextInput {
    text: String
  }

  type Mutation {
    createWeCarryText(input: CreateWeCarryTextInput!): WeCarryText! @requireAuth
    updateWeCarryText(id: Int!, input: UpdateWeCarryTextInput!): WeCarryText!
      @requireAuth
    deleteWeCarryText(id: Int!): WeCarryText! @requireAuth
  }
`;

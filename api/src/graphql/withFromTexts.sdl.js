export const schema = gql`
  type WithFromText {
    id: Int!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    withFromTexts: [WithFromText!]! @skipAuth
    withFromText(id: Int!): WithFromText @skipAuth
  }

  input CreateWithFromTextInput {
    text: String!
  }

  input UpdateWithFromTextInput {
    text: String
  }

  type Mutation {
    createWithFromText(input: CreateWithFromTextInput!): WithFromText!
      @requireAuth
    updateWithFromText(
      id: Int!
      input: UpdateWithFromTextInput!
    ): WithFromText! @requireAuth
    deleteWithFromText(id: Int!): WithFromText! @requireAuth
  }
`;

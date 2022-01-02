export const schema = gql`
  type TagLineText {
    id: Int!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    tagLineTexts: [TagLineText!]! @skipAuth
    tagLineText(id: Int!): TagLineText @skipAuth
  }

  input CreateTagLineTextInput {
    text: String!
  }

  input UpdateTagLineTextInput {
    text: String
  }

  type Mutation {
    createTagLineText(input: CreateTagLineTextInput!): TagLineText! @requireAuth
    updateTagLineText(id: Int!, input: UpdateTagLineTextInput!): TagLineText!
      @requireAuth
    deleteTagLineText(id: Int!): TagLineText! @requireAuth
  }
`;

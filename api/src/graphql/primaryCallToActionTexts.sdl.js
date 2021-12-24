export const schema = gql`
  type PrimaryCallToActionText {
    id: Int!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    primaryCallToActionTexts: [PrimaryCallToActionText!]! @skipAuth
    primaryCallToActionText(id: Int!): PrimaryCallToActionText @skipAuth
  }

  input CreatePrimaryCallToActionTextInput {
    text: String!
  }

  input UpdatePrimaryCallToActionTextInput {
    text: String
  }

  type Mutation {
    createPrimaryCallToActionText(
      input: CreatePrimaryCallToActionTextInput!
    ): PrimaryCallToActionText! @requireAuth
    updatePrimaryCallToActionText(
      id: Int!
      input: UpdatePrimaryCallToActionTextInput!
    ): PrimaryCallToActionText! @requireAuth
    deletePrimaryCallToActionText(id: Int!): PrimaryCallToActionText!
      @requireAuth
  }
`;

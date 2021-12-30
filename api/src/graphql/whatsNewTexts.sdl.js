export const schema = gql`
  type WhatsNewText {
    id: Int!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    whatsNewTexts: [WhatsNewText!]! @requireAuth
    whatsNewText(id: Int!): WhatsNewText @requireAuth
  }

  input CreateWhatsNewTextInput {
    text: String!
  }

  input UpdateWhatsNewTextInput {
    text: String
  }

  type Mutation {
    createWhatsNewText(input: CreateWhatsNewTextInput!): WhatsNewText!
      @requireAuth
    updateWhatsNewText(
      id: Int!
      input: UpdateWhatsNewTextInput!
    ): WhatsNewText! @requireAuth
    deleteWhatsNewText(id: Int!): WhatsNewText! @requireAuth
  }
`;

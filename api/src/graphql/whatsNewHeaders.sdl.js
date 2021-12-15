export const schema = gql`
  type WhatsNewHeader {
    id: Int!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    whatsNewHeaders: [WhatsNewHeader!]! @requireAuth
    whatsNewHeader(id: Int!): WhatsNewHeader @requireAuth
  }

  input CreateWhatsNewHeaderInput {
    text: String!
  }

  input UpdateWhatsNewHeaderInput {
    text: String
  }

  type Mutation {
    createWhatsNewHeader(input: CreateWhatsNewHeaderInput!): WhatsNewHeader!
      @requireAuth
    updateWhatsNewHeader(
      id: Int!
      input: UpdateWhatsNewHeaderInput!
    ): WhatsNewHeader! @requireAuth
    deleteWhatsNewHeader(id: Int!): WhatsNewHeader! @requireAuth
  }
`;

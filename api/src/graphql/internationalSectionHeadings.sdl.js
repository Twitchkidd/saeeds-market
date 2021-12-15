export const schema = gql`
  type InternationalSectionHeading {
    id: Int!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    internationalSectionHeadings: [InternationalSectionHeading!]! @requireAuth
    internationalSectionHeading(id: Int!): InternationalSectionHeading
      @requireAuth
  }

  input CreateInternationalSectionHeadingInput {
    text: String!
  }

  input UpdateInternationalSectionHeadingInput {
    text: String
  }

  type Mutation {
    createInternationalSectionHeading(
      input: CreateInternationalSectionHeadingInput!
    ): InternationalSectionHeading! @requireAuth
    updateInternationalSectionHeading(
      id: Int!
      input: UpdateInternationalSectionHeadingInput!
    ): InternationalSectionHeading! @requireAuth
    deleteInternationalSectionHeading(id: Int!): InternationalSectionHeading!
      @requireAuth
  }
`;

export const schema = gql`
  type InternationalSectionHeader {
    id: Int!
    text: String!
    withFrom: String!
    createdAt: DateTime!
  }

  type Query {
    internationalSectionHeaders: [InternationalSectionHeader!]! @skipAuth
    internationalSectionHeader(id: Int!): InternationalSectionHeader @skipAuth
  }

  input CreateInternationalSectionHeaderInput {
    text: String!
    withFrom: String!
  }

  input UpdateInternationalSectionHeaderInput {
    text: String
    withFrom: String
  }

  type Mutation {
    createInternationalSectionHeader(
      input: CreateInternationalSectionHeaderInput!
    ): InternationalSectionHeader! @requireAuth
    updateInternationalSectionHeader(
      id: Int!
      input: UpdateInternationalSectionHeaderInput!
    ): InternationalSectionHeader! @requireAuth
    deleteInternationalSectionHeader(id: Int!): InternationalSectionHeader!
      @requireAuth
  }
`;

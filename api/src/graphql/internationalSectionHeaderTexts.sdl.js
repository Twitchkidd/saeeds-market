export const schema = gql`
  type InternationalSectionHeaderText {
    id: Int!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    internationalSectionHeaderTexts: [InternationalSectionHeaderText!]!
      @skipAuth
    internationalSectionHeaderText(id: Int!): InternationalSectionHeaderText
      @skipAuth
  }

  input CreateInternationalSectionHeaderTextInput {
    text: String!
  }

  input UpdateInternationalSectionHeaderTextInput {
    text: String
  }

  type Mutation {
    createInternationalSectionHeaderText(
      input: CreateInternationalSectionHeaderTextInput!
    ): InternationalSectionHeaderText! @requireAuth
    updateInternationalSectionHeaderText(
      id: Int!
      input: UpdateInternationalSectionHeaderTextInput!
    ): InternationalSectionHeaderText! @requireAuth
    deleteInternationalSectionHeaderText(
      id: Int!
    ): InternationalSectionHeaderText! @requireAuth
  }
`;

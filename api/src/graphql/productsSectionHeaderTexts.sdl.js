export const schema = gql`
  type ProductsSectionHeaderText {
    id: Int!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    productsSectionHeaderTexts: [ProductsSectionHeaderText!]! @skipAuth
    productsSectionHeaderText(id: Int!): ProductsSectionHeaderText @skipAuth
  }

  input CreateProductsSectionHeaderTextInput {
    text: String!
  }

  input UpdateProductsSectionHeaderTextInput {
    text: String
  }

  type Mutation {
    createProductsSectionHeaderText(
      input: CreateProductsSectionHeaderTextInput!
    ): ProductsSectionHeaderText! @requireAuth
    updateProductsSectionHeaderText(
      id: Int!
      input: UpdateProductsSectionHeaderTextInput!
    ): ProductsSectionHeaderText! @requireAuth
    deleteProductsSectionHeaderText(id: Int!): ProductsSectionHeaderText!
      @requireAuth
  }
`;

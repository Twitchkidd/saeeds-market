export const schema = gql`
  type ProductsSectionHeaderImage {
    id: Int!
    url: String!
    description: String!
    createdAt: DateTime!
  }

  type Query {
    productsSectionHeaderImages: [ProductsSectionHeaderImage!]! @skipAuth
    productsSectionHeaderImage(id: Int!): ProductsSectionHeaderImage @skipAuth
  }

  input CreateProductsSectionHeaderImageInput {
    url: String!
    description: String!
  }

  input UpdateProductsSectionHeaderImageInput {
    url: String
    description: String
  }

  type Mutation {
    createProductsSectionHeaderImage(
      input: CreateProductsSectionHeaderImageInput!
    ): ProductsSectionHeaderImage! @requireAuth
    updateProductsSectionHeaderImage(
      id: Int!
      input: UpdateProductsSectionHeaderImageInput!
    ): ProductsSectionHeaderImage! @requireAuth
    deleteProductsSectionHeaderImage(id: Int!): ProductsSectionHeaderImage!
      @requireAuth
  }
`;

export const schema = gql`
  type ProductsSectionHeader {
    id: Int!
    text: String!
    imageUrls: [String]!
    createdAt: DateTime!
  }

  type Query {
    productsSectionHeaders: [ProductsSectionHeader!]! @requireAuth
    productsSectionHeader(id: Int!): ProductsSectionHeader @requireAuth
  }

  input CreateProductsSectionHeaderInput {
    text: String!
    imageUrls: [String]!
  }

  input UpdateProductsSectionHeaderInput {
    text: String
    imageUrls: [String]!
  }

  type Mutation {
    createProductsSectionHeader(
      input: CreateProductsSectionHeaderInput!
    ): ProductsSectionHeader! @requireAuth
    updateProductsSectionHeader(
      id: Int!
      input: UpdateProductsSectionHeaderInput!
    ): ProductsSectionHeader! @requireAuth
    deleteProductsSectionHeader(id: Int!): ProductsSectionHeader! @requireAuth
  }
`;

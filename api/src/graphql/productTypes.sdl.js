export const schema = gql`
  type ProductType {
    id: Int!
    name: String!
    important: Boolean!
    imageUrl: String
    products: [Product]!
    createdAt: DateTime!
  }

  type Query {
    productTypes: [ProductType!]! @skipAuth
    productType(id: Int!): ProductType @skipAuth
  }

  input CreateProductTypeInput {
    name: String!
    important: Boolean!
    imageUrl: String
  }

  input UpdateProductTypeInput {
    name: String
    important: Boolean
    imageUrl: String
  }

  type Mutation {
    createProductType(input: CreateProductTypeInput!): ProductType! @requireAuth
    updateProductType(id: Int!, input: UpdateProductTypeInput!): ProductType!
      @requireAuth
    deleteProductType(id: Int!): ProductType! @requireAuth
  }
`;

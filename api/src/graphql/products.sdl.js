export const schema = gql`
  type Product {
    id: Int!
    name: String!
    createdAt: DateTime!
  }

  type Query {
    products: [Product!]! @skipAuth
    product(id: Int!): Product @requireAuth
  }

  input CreateProductInput {
    name: String!
  }

  input UpdateProductInput {
    name: String
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @requireAuth
    deleteProduct(id: Int!): Product! @requireAuth
  }
`;

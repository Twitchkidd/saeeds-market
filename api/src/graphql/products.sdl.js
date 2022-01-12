export const schema = gql`
  type Product {
    id: Int!
    name: String!
    country: Country
    countryId: Int
    type: ProductType
    typeId: Int
    createdAt: DateTime!
  }

  type Query {
    products: [Product!]! @skipAuth
    product(id: Int!): Product @skipAuth
  }

  input CreateProductInput {
    name: String!
    countryId: Int
    typeId: Int
  }

  input UpdateProductInput {
    name: String
    countryId: Int
    typeId: Int
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @requireAuth
    deleteProduct(id: Int!): Product! @requireAuth
  }
`;

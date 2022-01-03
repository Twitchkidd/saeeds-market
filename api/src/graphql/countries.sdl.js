export const schema = gql`
  type Country {
    id: Int!
    name: String!
    abbr: String!
    flagUrl: String!
    imageUrl: String!
    products: [Product]!
    createdAt: DateTime!
  }

  type Query {
    countries: [Country!]! @skipAuth
    country(id: Int!): Country @skipAuth
  }

  input CreateCountryInput {
    name: String!
    abbr: String!
    flagUrl: String!
    imageUrl: String!
  }

  input UpdateCountryInput {
    name: String
    abbr: String
    flagUrl: String
    imageUrl: String
  }

  type Mutation {
    createCountry(input: CreateCountryInput!): Country! @requireAuth
    updateCountry(id: Int!, input: UpdateCountryInput!): Country! @requireAuth
    deleteCountry(id: Int!): Country! @requireAuth
  }
`;

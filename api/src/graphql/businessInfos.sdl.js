export const schema = gql`
  type BusinessInfo {
    id: Int!
    name: String!
    address: String!
    hours: String!
    number: String!
    createdAt: DateTime!
  }

  type Query {
    businessInfos: [BusinessInfo!]! @skipAuth
    businessInfo(id: Int!): BusinessInfo @skipAuth
  }

  input CreateBusinessInfoInput {
    name: String!
    address: String!
    hours: String!
    number: String!
  }

  input UpdateBusinessInfoInput {
    name: String
    address: String
    hours: String
    number: String
  }

  type Mutation {
    createBusinessInfo(input: CreateBusinessInfoInput!): BusinessInfo!
      @requireAuth
    updateBusinessInfo(
      id: Int!
      input: UpdateBusinessInfoInput!
    ): BusinessInfo! @requireAuth
    deleteBusinessInfo(id: Int!): BusinessInfo! @requireAuth
  }
`;

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
    businessInfos: [BusinessInfo!]! @requireAuth
    businessInfo(id: Int!): BusinessInfo @requireAuth
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

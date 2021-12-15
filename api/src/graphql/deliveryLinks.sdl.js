export const schema = gql`
  type DeliveryLink {
    id: Int!
    name: String!
    url: String!
    createdAt: DateTime!
  }

  type Query {
    deliveryLinks: [DeliveryLink!]! @requireAuth
    deliveryLink(id: Int!): DeliveryLink @requireAuth
  }

  input CreateDeliveryLinkInput {
    name: String!
    url: String!
  }

  input UpdateDeliveryLinkInput {
    name: String
    url: String
  }

  type Mutation {
    createDeliveryLink(input: CreateDeliveryLinkInput!): DeliveryLink!
      @requireAuth
    updateDeliveryLink(
      id: Int!
      input: UpdateDeliveryLinkInput!
    ): DeliveryLink! @requireAuth
    deleteDeliveryLink(id: Int!): DeliveryLink! @requireAuth
  }
`;

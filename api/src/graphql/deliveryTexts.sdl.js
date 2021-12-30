export const schema = gql`
  type DeliveryText {
    id: Int!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    deliveryTexts: [DeliveryText!]! @requireAuth
    deliveryText(id: Int!): DeliveryText @requireAuth
  }

  input CreateDeliveryTextInput {
    text: String!
  }

  input UpdateDeliveryTextInput {
    text: String
  }

  type Mutation {
    createDeliveryText(input: CreateDeliveryTextInput!): DeliveryText!
      @requireAuth
    updateDeliveryText(
      id: Int!
      input: UpdateDeliveryTextInput!
    ): DeliveryText! @requireAuth
    deleteDeliveryText(id: Int!): DeliveryText! @requireAuth
  }
`;

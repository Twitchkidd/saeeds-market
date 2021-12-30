export const schema = gql`
  type DeliveryText {
    id: Int!
    text: String!
    createdAt: DateTime!
  }

  type Query {
    deliveryTexts: [DeliveryText!]! @skipAuth
    deliveryText(id: Int!): DeliveryText @skipAuth
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

export const schema = gql`
  type MenuLink {
    id: Int!
    name: String!
    text: String!
    url: String!
    createdAt: DateTime!
  }

  type Query {
    menuLinks: [MenuLink!]! @skipAuth
    menuLink(id: Int!): MenuLink @requireAuth
  }

  input CreateMenuLinkInput {
    name: String!
    text: String!
    url: String!
  }

  input UpdateMenuLinkInput {
    name: String
    text: String
    url: String
  }

  type Mutation {
    createMenuLink(input: CreateMenuLinkInput!): MenuLink! @requireAuth
    updateMenuLink(id: Int!, input: UpdateMenuLinkInput!): MenuLink!
      @requireAuth
    deleteMenuLink(id: Int!): MenuLink! @requireAuth
  }
`;

export const schema = gql`
  type HeroImage {
    id: Int!
    title: String!
    url: String!
  }

  type Query {
    heroImages: [HeroImage!]! @skipAuth
    heroImage(id: Int!): HeroImage @skipAuth
  }

  input CreateHeroImageInput {
    title: String!
    url: String!
  }

  input UpdateHeroImageInput {
    title: String
    url: String
  }

  type Mutation {
    createHeroImage(input: CreateHeroImageInput!): HeroImage! @requireAuth
    updateHeroImage(id: Int!, input: UpdateHeroImageInput!): HeroImage!
      @requireAuth
    deleteHeroImage(id: Int!): HeroImage! @requireAuth
  }
`;

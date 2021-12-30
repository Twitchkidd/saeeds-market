import BusinessInfo from 'src/components/BusinessInfo/BusinessInfo';

export const QUERY = gql`
  query FindBusinessInfoById($id: Int!) {
    businessInfo: businessInfo(id: $id) {
      id
      name
      address
      hours
      number
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>BusinessInfo not found</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ businessInfo }) => {
  return <BusinessInfo businessInfo={businessInfo} />;
};

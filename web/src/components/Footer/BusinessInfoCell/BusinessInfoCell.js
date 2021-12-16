import styled from 'styled-components';

const HoursPhoneWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`;

export const QUERY = gql`
  query FindBusinessInfosQuery {
    businessInfos {
      name
      address
      hours
      phone
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ businessInfos }) => {
  const info = businessInfos[0];
  return (
    <>
      <h2>{info.name}</h2>
      <h3>{info.address}</h3>
      <HoursPhoneWrapper>
        <h3>{info.hours}</h3>
        <h3>{info.phone}</h3>
      </HoursPhoneWrapper>
    </>
  );
};

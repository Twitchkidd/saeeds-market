import styled from 'styled-components';

const HoursAndNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  margin-left: 4.1vw;
  margin-right: 4.1vw;
`;

export const QUERY = gql`
  query FindBusinessInfosQuery {
    businessInfos {
      name
      address
      hours
      number
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
      <strong>{info.name}</strong>
      <strong>{info.address}</strong>
      <HoursAndNumberWrapper>
        <strong>{info.hours}</strong>
        <strong>{info.number}</strong>
      </HoursAndNumberWrapper>
    </>
  );
};

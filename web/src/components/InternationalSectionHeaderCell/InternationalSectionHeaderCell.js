import styled from 'styled-components';
import SectionHeader from 'src/components/SectionHeader/SectionHeader';
import InternationalSectionHeaderTextCell from 'src/components/InternationalSectionHeaderTextCell/InternationalSectionHeaderTextCell';
import Flag from 'src/components/Flag';

const Button = styled.button`
  max-width: 80px;
`;

const Wrapper = styled.header``;

export const QUERY = gql`
  query FindCountriesQuery {
    countries {
      name
      abbr
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Empty</div>;

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
);

export const Success = ({ countries, onUpdate }) => {
  const setNextSelected = (input) => {
    // if input was all, return all
    // if input was already input and selected !== 1 (can't unselect last country) return selected minus input
    // if input was not already selected, return selected plus input
  };
  return (
    <Wrapper>
      <SectionHeader>
        <InternationalSectionHeaderTextCell />
      </SectionHeader>
      {countries.map((country, i) => (
        <Button key={i}>
          <Flag abbr={country.abbr} />
        </Button>
      ))}
    </Wrapper>
  );
};

import SectionHeader from 'src/components/SectionHeader/SectionHeader';
import InternationalSectionHeaderTextCell from 'src/components/InternationalSectionHeaderTextCell/InternationalSectionHeaderTextCell';
import GR from 'src/assets/svg/gr.svg';
import LB from 'src/assets/svg/lb.svg';
import IT from 'src/assets/svg/it.svg';
import DE from 'src/assets/svg/de.svg';
import TR from 'src/assets/svg/tr.svg';
import US from 'src/assets/svg/us.svg';
import RU from 'src/assets/svg/ru.svg';
import FR from 'src/assets/svg/fr.svg';
import AL from 'src/assets/svg/al.svg';

const Flag = ({ abbr }) => {
  switch (abbr) {
    case 'gr':
      return <GR />;
    case 'lb':
      return <LB />;
    case 'it':
      return <IT />;
    case 'de':
      return <DE />;
    case 'tr':
      return <TR />;
    case 'us':
      return <US />;
    case 'ru':
      return <RU />;
    case 'fr':
      return <FR />;
    case 'al':
      return <AL />;
    default:
      return null;
  }
};

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
    <SectionHeader>
      <InternationalSectionHeaderTextCell />
      <CountrySelector></CountrySelector>
    </SectionHeader>
  );
};

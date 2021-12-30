import { Link, routes } from '@redwoodjs/router';

import WhatsNewTexts from 'src/components/WhatsNewText/WhatsNewTexts';

export const QUERY = gql`
  query FindWhatsNewTexts {
    whatsNewTexts {
      id
      text
      createdAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No whatsNewTexts yet. '}
      <Link to={routes.newWhatsNewText()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ whatsNewTexts }) => {
  return <WhatsNewTexts whatsNewTexts={whatsNewTexts} />;
};

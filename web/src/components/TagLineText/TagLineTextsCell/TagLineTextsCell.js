import { Link, routes } from '@redwoodjs/router';

import TagLineTexts from 'src/components/TagLineText/TagLineTexts';

export const QUERY = gql`
  query FindTagLineTexts {
    tagLineTexts {
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
      {'No tagLineTexts yet. '}
      <Link to={routes.newTagLineText()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ tagLineTexts }) => {
  return <TagLineTexts tagLineTexts={tagLineTexts} />;
};

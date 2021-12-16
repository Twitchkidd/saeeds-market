import { Link, routes } from '@redwoodjs/router';

import TagLines from 'src/components/TagLine/TagLines';

export const QUERY = gql`
  query FindTagLines {
    tagLines {
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
      {'No tagLines yet. '}
      <Link to={routes.newTagLine()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  );
};

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ tagLines }) => {
  return <TagLines tagLines={tagLines} />;
};

import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';

import HeroImageForm from 'src/components/HeroImage/HeroImageForm';

export const QUERY = gql`
  query EditHeroImageById($id: Int!) {
    heroImage: heroImage(id: $id) {
      id
      title
      url
    }
  }
`;
const UPDATE_HERO_IMAGE_MUTATION = gql`
  mutation UpdateHeroImageMutation($id: Int!, $input: UpdateHeroImageInput!) {
    updateHeroImage(id: $id, input: $input) {
      id
      title
      url
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
);

export const Success = ({ heroImage }) => {
  const [updateHeroImage, { loading, error }] = useMutation(
    UPDATE_HERO_IMAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('HeroImage updated');
        navigate(routes.heroImages());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = (input, id) => {
    updateHeroImage({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit HeroImage {heroImage.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <HeroImageForm
          heroImage={heroImage}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};

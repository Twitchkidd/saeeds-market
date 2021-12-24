import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';
import { navigate, routes } from '@redwoodjs/router';
import HeroImageForm from 'src/components/HeroImage/HeroImageForm';

const CREATE_HERO_IMAGE_MUTATION = gql`
  mutation CreateHeroImageMutation($input: CreateHeroImageInput!) {
    createHeroImage(input: $input) {
      id
    }
  }
`;

const NewHeroImage = () => {
  const [createHeroImage, { loading, error }] = useMutation(
    CREATE_HERO_IMAGE_MUTATION,
    {
      onCompleted: () => {
        toast.success('HeroImage created');
        navigate(routes.heroImages());
      },
      onError: error => {
        toast.error(error.message);
      },
    }
  );

  const onSave = input => {
    createHeroImage({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New HeroImage</h2>
      </header>
      <div className="rw-segment-main">
        <HeroImageForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewHeroImage;

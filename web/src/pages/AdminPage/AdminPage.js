import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import UserAuthTools from 'src/components/UserAuthTools/UserAuthTools';

const AdminPage = () => {
  return (
    <>
      <MetaTags
        title="Admin"
        // description="Admin description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>Admin Page</h1>
      <Link to={routes.tagLines()}>Tag Line</Link>
      <Link to={routes.primaryCallToActionTexts()}>CTA Button Text</Link>
      <Link to={routes.heroImages()}>Hero Image</Link>
      <UserAuthTools />
    </>
  );
};

export default AdminPage;

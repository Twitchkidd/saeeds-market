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
      <Link to={routes.tagLineTexts()}>Tag Line</Link>
      <Link to={routes.primaryCallToActionTexts()}>Call To Action Button</Link>
      <Link to={routes.heroImages()}>Hero Image</Link>
      <Link to={routes.deliveryTexts()}>Delivery Text</Link>
      <Link to={routes.whatsNewTexts()}>What's New Section Header</Link>
      <Link to={routes.newItems()}>New Item Posts</Link>
      <Link to={routes.countries()}>Countries</Link>
      <Link to={routes.productTypes()}>Product Types</Link>
      <Link to={routes.products()}>Products</Link>
      <Link to={routes.internationalSectionHeaderTexts()}>
        International Section Header
      </Link>
      <Link to={routes.withFromTexts()}>With From Text</Link>
      <Link to={routes.productsSectionHeaderTexts()}>
        Products Section Header
      </Link>
      <Link to={routes.productsSectionHeaderImages()}>
        Products Section Images
      </Link>
      <Link to={routes.weCarryTexts()}>We Carry Text</Link>
      <Link to={routes.businessInfos()}>Business Info</Link>
      <UserAuthTools />
    </>
  );
};

export default AdminPage;

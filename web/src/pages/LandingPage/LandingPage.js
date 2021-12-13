import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import Logo from 'src/components/Logo/Logo';
import ProductsCell from 'src/components/ProductsCell';

const LandingPage = () => {
  return (
    <>
      <MetaTags
        title="Landing"
        // description="Landing description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <Logo />
      <h1>Saeed's International Market and Cafe</h1>
      <p>Come on in for these fine foods!</p>
      <ProductsCell />
      {/* <h1>LandingPage</h1>
      <p>
        Find me in <code>./web/src/pages/LandingPage/LandingPage.js</code>
      </p>
      <p>
        My default route is named <code>landing</code>, link to me with `
        <Link to={routes.landing()}>Landing</Link>`
      </p> */}
    </>
  );
};

export default LandingPage;

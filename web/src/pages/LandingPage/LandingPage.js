import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import Logo from 'src/components/Logo/Logo';
import Title from 'src/components/Title/Title';
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
      <Title>Saeed's International Market</Title>
      <h3>
        <em>
          Fine foods, gifts, lunch, and catering ... serving beautiful New
          London since 1903!
        </em>
      </h3>
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

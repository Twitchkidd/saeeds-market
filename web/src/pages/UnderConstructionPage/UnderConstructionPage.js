import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

/*
 * Under construction page!
 * First, we'll want to see if we can just display the boat!
 * Here we go!
 */

const UnderConstructionPage = () => {
  return (
    <>
      <MetaTags
        title="UnderConstruction"
        // description="UnderConstruction description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>UnderConstructionPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/UnderConstructionPage/UnderConstructionPage.js
        </code>
      </p>
      <p>
        My default route is named <code>underConstruction</code>, link to me
        with `<Link to={routes.underConstruction()}>UnderConstruction</Link>`
      </p>
    </>
  );
};

export default UnderConstructionPage;

import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';

const FaqPage = () => {
  return (
    <>
      <MetaTags
        title="Faq"
        // description="Faq description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>FaqPage</h1>
      <p>
        Find me in <code>./web/src/pages/FaqPage/FaqPage.js</code>
      </p>
      <p>
        My default route is named <code>faq</code>, link to me with `
        <Link to={routes.faq()}>Faq</Link>`
      </p>
    </>
  );
};

export default FaqPage;

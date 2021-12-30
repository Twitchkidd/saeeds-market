import { MetaTags } from '@redwoodjs/web';
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

const LandingPage = () => (
  <>
    <MetaTags
      title="Landing"
      // description="Landing description"
      /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
    />
    <Header />
    <Main />
    <Footer />
  </>
);

export default LandingPage;

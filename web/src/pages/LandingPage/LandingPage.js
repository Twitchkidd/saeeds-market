import { MetaTags } from '@redwoodjs/web';
import Nav from 'src/components/Nav';
import HorizontalBreak from 'src/components/HorizontalBreak';
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
    <Nav />
    <HorizontalBreak />
    <Main />
    <Footer />
  </>
);

export default LandingPage;

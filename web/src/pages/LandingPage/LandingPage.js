import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import Logo from 'src/components/Logo/Logo';
import TitleCell from 'src/components/TitleCell/TitleCell';
import TagLineCell from 'src/components/TagLineCell/TagLineCell';

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
      <TitleCell />
      <TagLineCell />
    </>
  );
};

export default LandingPage;

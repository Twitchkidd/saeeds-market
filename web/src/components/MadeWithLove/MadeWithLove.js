import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  &:visited {
    color: #bf4722;
  }
`;

const MadeWithLove = () => (
  <p>
    Made with{' '}
    <Link
      href="https://gitlab.com/twitchkidd/saeeds-market"
      alt="The code repository for the website"
    >
      ❤️
    </Link>{' '}
    and <Link href="https://redwoodjs.com">RedwoodJS</Link>
  </p>
);

export default MadeWithLove;

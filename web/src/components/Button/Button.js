import styled from 'styled-components';
import { saeedsBlue, blue400, saeedsWhite } from 'src/utils/colors';
import { verticalSpace1, verticalKeyline2 } from 'src/utils/spacing';
import { fontSize1 } from 'src/utils/typography';

const Button = styled.button`
  display: grid;
  place-items: center;

  ${(props) => (props.big ? 'width: 100%;' : null)}
  ${(props) => (props.big ? null : `max-width: ${verticalKeyline2};`)}
  padding: ${(props) => (props.big ? `${verticalSpace1} 0` : verticalSpace1)};
  ${(props) => (props.dark ? null : `border: 2px solid ${blue400};`)}
  border-radius: 1px;
  background: ${(props) => (props.dark ? saeedsBlue : saeedsWhite)};

  text-align: center;
  color: ${(props) => (props.dark ? saeedsWhite : blue400)};
  font-size: ${fontSize1};
  text-decoration: none;
  font-weight: 700;
`;

export default Button;

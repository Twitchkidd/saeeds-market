import styled from 'styled-components';
import { saeedsBlue, blue400, saeedsWhite } from 'src/utils/colors';
import {
  verticalSpace1,
  verticalSpace2,
  verticalKeyline2,
  verticalKeyline3,
} from 'src/utils/spacing';
import { fontSize1 } from 'src/utils/typography';

const Button = styled.button`
  display: grid;
  place-items: center;

  /* ${(props) => (props.big ? 'width: 100%;' : null)} */
  ${(props) => (props.big ? `width: ${verticalKeyline3};` : null)}
  ${(props) => (props.big ? null : `max-width: ${verticalKeyline2};`)}
  padding: ${(props) => (props.big ? `${verticalSpace2}` : verticalSpace2)};
  ${(props) => (props.dark ? null : `border: 6px solid ${blue400};`)}
  border-radius: 24px;
  background: ${(props) => (props.dark ? saeedsBlue : saeedsWhite)};

  text-align: center;
  color: ${(props) => (props.dark ? saeedsWhite : blue400)};
  font-size: ${fontSize1};
  text-decoration: none;
  font-weight: 700;
`;

export default Button;

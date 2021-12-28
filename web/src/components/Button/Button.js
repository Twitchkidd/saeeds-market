import styled from 'styled-components';
import { saeedsBlue, blue400, saeedsWhite } from 'src/utils/colors';
import { verticalSpace1, verticalKeyline2 } from 'src/utils/spacing';
import { fontSize1 } from 'src/utils/typography';

const Button = styled.button`
  display: grid;
  place-items: center;
  text-align: center;
  color: ${(props) => (props.dark ? saeedsWhite : blue400)};
  background: ${(props) => (props.dark ? saeedsBlue : saeedsWhite)};
  ${(props) => (props.dark ? null : `border: 2px solid ${blue400};`)}
  font-size: ${fontSize1};
  border-radius: 1px;
  text-decoration: none;
  ${(props) => (props.big ? 'width: 100%;' : null)}
  ${(props) => (props.big ? null : `max-width: ${verticalKeyline2};`)}
  padding: ${(props) => (props.big ? `${verticalSpace1} 0` : verticalSpace1)};
  font-weight: 700;
`;

export default Button;

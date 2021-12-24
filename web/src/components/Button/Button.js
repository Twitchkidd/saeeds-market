import styled from 'styled-components';
import { saeedsBlue, blue400, saeedsWhite } from 'src/utils/colors';
import { spacing1, verticalKeyline2 } from 'src/utils/spacing';
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
  width: ${(props) => (props.big ? '100%' : 'none')};
  max-width: ${(props) => (props.big ? 'none' : verticalKeyline2)};
  padding: ${(props) => (props.big ? `${spacing1} 0` : spacing1)};
`;

export default Button;

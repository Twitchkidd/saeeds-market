import styled from 'styled-components';
import { grayscaleDesaturated } from 'src/utils/colors';

const HorizontalBreak = styled.div`
  width: 100%;
  height: 1px;
  flex-shrink: 0;
  background: ${grayscaleDesaturated};
  margin: 42px 0;
`;

export default HorizontalBreak;

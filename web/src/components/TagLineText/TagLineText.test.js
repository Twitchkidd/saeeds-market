import { render } from '@redwoodjs/testing/web';

import TagLineText from './TagLineText';

describe('TagLineText', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TagLineText />);
    }).not.toThrow();
  });
});

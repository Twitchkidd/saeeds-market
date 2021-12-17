import { render } from '@redwoodjs/testing/web';

import HorizontalBreak from './HorizontalBreak';

describe('HorizontalBreak', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HorizontalBreak />);
    }).not.toThrow();
  });
});

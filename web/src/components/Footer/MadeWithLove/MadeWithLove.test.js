import { render } from '@redwoodjs/testing/web';

import MadeWithLove from './MadeWithLove';

describe('MadeWithLove', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MadeWithLove />);
    }).not.toThrow();
  });
});

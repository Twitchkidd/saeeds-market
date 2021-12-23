import { render } from '@redwoodjs/testing/web';

import Nav from './Nav';

describe('Nav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Nav />);
    }).not.toThrow();
  });
});

import { render } from '@redwoodjs/testing/web';

import MenuLink from './MenuLink';

describe('MenuLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MenuLink />);
    }).not.toThrow();
  });
});

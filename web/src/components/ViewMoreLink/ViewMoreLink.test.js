import { render } from '@redwoodjs/testing/web';

import ViewMoreLink from './ViewMoreLink';

describe('ViewMoreLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ViewMoreLink />);
    }).not.toThrow();
  });
});

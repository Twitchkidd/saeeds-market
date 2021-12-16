import { render } from '@redwoodjs/testing/web';

import MenuLinks from './MenuLinks';

describe('MenuLinks', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MenuLinks />);
    }).not.toThrow();
  });
});

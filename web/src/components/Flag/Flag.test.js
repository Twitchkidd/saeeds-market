import { render } from '@redwoodjs/testing/web';

import Flag from './Flag';

describe('Flag', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Flag />);
    }).not.toThrow();
  });
});

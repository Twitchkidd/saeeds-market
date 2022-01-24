import { render } from '@redwoodjs/testing/web';

import LogoDoorknock from './LogoDoorknock';

describe('LogoDoorknock', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LogoDoorknock />);
    }).not.toThrow();
  });
});

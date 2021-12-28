import { render } from '@redwoodjs/testing/web';

import DisplayText from './DisplayText';

describe('DisplayText', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisplayText />);
    }).not.toThrow();
  });
});

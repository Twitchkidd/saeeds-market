import { render } from '@redwoodjs/testing/web';

import Title from './Title';

describe('Title', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Title />);
    }).not.toThrow();
  });
});

import { render } from '@redwoodjs/testing/web';

import Main from './Main';

describe('Main', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Main />);
    }).not.toThrow();
  });
});

import { render } from '@redwoodjs/testing/web';

import FaqPage from './FaqPage';

describe('FaqPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FaqPage />);
    }).not.toThrow();
  });
});

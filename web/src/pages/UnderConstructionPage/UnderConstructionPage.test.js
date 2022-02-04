import { render } from '@redwoodjs/testing/web';

import UnderConstructionPage from './UnderConstructionPage';

describe('UnderConstructionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UnderConstructionPage />);
    }).not.toThrow();
  });
});

import { render } from '@redwoodjs/testing/web';

import UnderConstructionLayout from './UnderConstructionLayout';

describe('UnderConstructionLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UnderConstructionLayout />);
    }).not.toThrow();
  });
});

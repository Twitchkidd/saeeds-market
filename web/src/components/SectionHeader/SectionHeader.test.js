import { render } from '@redwoodjs/testing/web';

import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SectionHeader />);
    }).not.toThrow();
  });
});

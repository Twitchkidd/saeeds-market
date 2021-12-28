import { render } from '@redwoodjs/testing/web';

import DeliveryButtons from './DeliveryButtons';

describe('DeliveryButtons', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeliveryButtons />);
    }).not.toThrow();
  });
});

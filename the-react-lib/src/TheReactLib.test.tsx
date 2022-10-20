import { render } from '@testing-library/react';
import { TheReactLib } from './TheReactLib';

describe('TheReactLib', () => {
  it('renders correctly', () => {
    const { container } = render(<TheReactLib />);
    expect(container.textContent).toBe('the-react-lib');
  });
});

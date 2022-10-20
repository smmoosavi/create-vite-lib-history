import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TheReactLib } from './TheReactLib';

describe('TheReactLib', () => {
  it('renders correctly', () => {
    render(<TheReactLib />);
    expect(screen.getByText('the-react-lib')).toBeInTheDocument();
  });
});

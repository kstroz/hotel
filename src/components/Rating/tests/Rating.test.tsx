import React from 'react';
import { render, screen } from '@testing-library/react-native';

import Rating from '../Rating';

describe('Rating', () => {
  it('renders correctly', () => {
    render(<Rating rate={3} totalStars={5} />);
    expect(screen).toMatchSnapshot();
  });
});

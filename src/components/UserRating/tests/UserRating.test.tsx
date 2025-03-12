import React from 'react';
import { render, screen } from '@testing-library/react-native';

import UserRating from '../UserRating';

describe('UserRating', () => {
  it('renders correctly low rating', () => {
    render(<UserRating rate={1} />);
    expect(screen).toMatchSnapshot();
  });
  it('renders correctly medium rating', () => {
    render(<UserRating rate={5} />);
    expect(screen).toMatchSnapshot();
  });
  it('renders correctly high rating', () => {
    render(<UserRating rate={9} />);
    expect(screen).toMatchSnapshot();
  });
});

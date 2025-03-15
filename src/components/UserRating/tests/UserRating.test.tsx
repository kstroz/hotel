import React from 'react';
import { render, screen } from '@testing-library/react-native';

import UserRating from '../UserRating';
import { Rating } from '../UserRating.types';

describe('UserRating', () => {
  it('renders correctly okay rating', () => {
    render(<UserRating rate={Rating.Okay} />);
    expect(screen).toMatchSnapshot();
  });
  it('renders correctly good rating', () => {
    render(<UserRating rate={Rating.Good} />);
    expect(screen).toMatchSnapshot();
  });
  it('renders correctly very good rating', () => {
    render(<UserRating rate={Rating['Very good']} />);
    expect(screen).toMatchSnapshot();
  });
  it('renders correctly excellent rating', () => {
    render(<UserRating rate={Rating.Excellent} />);
    expect(screen).toMatchSnapshot();
  });
});

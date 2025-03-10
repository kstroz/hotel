import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { RootNavigation } from '@navigation/RootNavigation';

describe('Hotels', () => {
  it('should check list of hotels', async () => {
    render(<RootNavigation />);

    for (let i = 1; i <= 3; i++) {
      const hotelEl = await screen.findByTestId(`hotel-${i}`);
      expect(hotelEl).toBeTruthy();
    }
  });
});

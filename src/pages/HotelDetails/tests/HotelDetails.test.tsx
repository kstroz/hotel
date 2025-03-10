import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { RootNavigation } from '@navigation/RootNavigation';

describe('Hotel details', () => {
  it('should navigate to first hotel', async () => {
    render(<RootNavigation />);

    const listItem = await screen.findByTestId('hotel-1');
    expect(listItem).toBeTruthy();

    fireEvent.press(listItem);
    expect(screen.getByText('Detail of hotel with id: 1')).toBeTruthy();
  });
});

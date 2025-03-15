import React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';
import { RootNavigation } from '@navigation/RootNavigation';
import { renderWithProviders, setupAxios } from '@tests/tests.helpers';
import { HttpStatusCode } from 'axios';
import { API_URLS } from '@api/api.consts';
import { mockHotels } from '@tests/hotelMocks';

// w/o node cannot process lengthy snapshot
jest.mock('react-native-reanimated-carousel');
jest.mock('@gorhom/bottom-sheet');
jest.mock('@miblanchard/react-native-slider', () => ({
  Slider: jest.fn(),
}));

describe('Hotel details', () => {
  const axios = setupAxios();

  it('should navigate to first hotel', async () => {
    axios.onGet(API_URLS.HOTELS).replyOnce(HttpStatusCode.Ok, mockHotels);
    renderWithProviders(<RootNavigation />);

    const hotel = mockHotels[0];

    const listItem = await screen.findByTestId(`hotel-${hotel.id}`);
    expect(listItem).toBeTruthy();

    fireEvent.press(listItem);

    expect(screen).toMatchSnapshot();
  });
});

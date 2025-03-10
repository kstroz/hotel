import React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';
import { RootNavigation } from '@navigation/RootNavigation';
import { renderWithProviders, setupAxios } from '@tests/tests.helpers';
import { HttpStatusCode } from 'axios';
import { API_URLS } from '@api/api.consts';
import { mockHotels } from '@tests/hotelMocks';

describe('Hotel details', () => {
  const axios = setupAxios();

  it('should navigate to first hotel', async () => {
    axios.onGet(API_URLS.HOTELS).replyOnce(HttpStatusCode.Ok, mockHotels);
    renderWithProviders(<RootNavigation />);

    const hotel = mockHotels[0];
    const { id, price, currency } = hotel;

    const listItem = await screen.findByTestId(`hotel-${id}`);
    expect(listItem).toBeTruthy();

    fireEvent.press(listItem);

    expect(screen.getByText(`Price: ${price} ${currency}`)).toBeTruthy();
  });
});

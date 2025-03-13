import React from 'react';
import { screen } from '@testing-library/react-native';
import { RootNavigation } from '@navigation/RootNavigation';
import { renderWithProviders, setupAxios } from '@tests/tests.helpers';

import { mockHotels } from '@tests/hotelMocks';
import { API_URLS } from '@api/api.consts';
import { HttpStatusCode } from 'axios';

describe('Hotels', () => {
  const axios = setupAxios();

  it('should check list of hotels', async () => {
    axios.onGet(API_URLS.HOTELS).replyOnce(HttpStatusCode.Ok, mockHotels);

    renderWithProviders(<RootNavigation />);

    for (let i = 0; i < mockHotels.length; i++) {
      expect(
        await screen.findByTestId(`hotel-${mockHotels[i].id}`),
      ).toBeTruthy();
    }

    expect(screen).toMatchSnapshot();
  });
});

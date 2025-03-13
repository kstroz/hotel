import { API_URLS } from '@api/api.consts';
import { apiGet } from '@api/axios';
import { Hotel } from '@api/types/hotel';
import { useQuery } from '@tanstack/react-query';
import { sleep } from '@utils/promises';
import { HttpStatusCode } from 'axios';

const fetchHotels = async (): Promise<Array<Hotel>> => {
  const response = await apiGet(API_URLS.HOTELS);
  if (response.status !== HttpStatusCode.Ok) {
    throw new Error('Network response status was not 200');
  }

  // Just a trick to make loader looks more natural
  await sleep(1000);

  return response.data;
};

export const useHotels = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['hotels'],
    queryFn: fetchHotels,
  });

  return {
    hotels: data ?? [],
    areHotelsLoading: isFetching,
  };
};

import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { Car, Filter } from '@/types/typeList';

export const useFetchCars = (filter: Filter = {}) => {
  const url = 'https://66ff850d2b9aac9c997f84c6.mockapi.io/api/morent/cars';

  const { data, error, isLoading } = useSWR<Car[]>(
    [url, filter],
    ([url, filter]) => fetcher(url, filter!),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error, isLoading };
};

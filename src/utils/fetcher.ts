import { Filter } from '@/types/typeList';

export const fetcher = async (url: string, filters: Filter = {}) => {
  const params = new URLSearchParams();

  // Add type filters
  if (filters.type && filters.type.length > 0) {
    params.append('carType', filters.type.join('|'));
  }

  // Add capacity filters
  if (filters.capacity && filters.capacity.length > 0) {
    params.append('capacity', filters.capacity.join('|'));
  }

  const finalUrl = `${url}${params.toString() ? '?' + params.toString() : ''}`;
  const response = await fetch(finalUrl);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

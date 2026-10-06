import { useQuery } from '@tanstack/react-query';
import { fetchItems } from '../api';

export const useItems = () =>
  useQuery({
    queryKey: ['items'],
    queryFn: ({ signal }) => fetchItems(signal),
  });
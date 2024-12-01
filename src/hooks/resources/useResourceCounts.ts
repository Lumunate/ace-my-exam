import { useQuery } from 'react-query';

import { IResourceCounts } from 'app/api/resources/stats/count/route';

const fetchResourceCounts = async () => {
  const response = await fetch('/api/resources/stats/count');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();

  return data;
};

const useResourceCounts = (onSuccess: (data: IResourceCounts) => void, onError: (error: unknown) => void) => {
  return useQuery('resourceCounts', fetchResourceCounts, {
    onSuccess,
    onError,
  });
};

export default useResourceCounts;
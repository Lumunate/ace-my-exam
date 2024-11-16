import { useQuery } from 'react-query';

import { IResourceData } from '@/app/api/resources/route';

const fetchResources = async (subjectId: number) => {
  const response = await fetch(`/api/resources?subjectId=${subjectId}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data: IResourceData = await response.json();

  return data;
};

export const useGetResources = (subjectId: number) => {
  return useQuery<IResourceData, Error>({
    queryKey: ['resources', subjectId],
    queryFn: async () => {
      return await fetchResources(subjectId);
    },
  });
};

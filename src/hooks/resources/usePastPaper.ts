import { useMutation } from 'react-query';

import { IPastPaperData, IPastPaperResourcesData, IPastPaperUpdateData } from 'types/past-paper';

export const useUploadPastPapers = () => {
  return useMutation({
    mutationFn: async (data: IPastPaperData) => {
      const response = await fetch('/api/resources/upload/past-paper', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    },
    onSuccess: () => {},
    onError: () => {},
  });
};

export const useUploadPastPaperResources = () => {
  return useMutation({
    mutationFn: async (data: IPastPaperResourcesData) => {
      const response = await fetch('/api/resources/upload/past-paper', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    },
    onSuccess: () => {},
    onError: () => {},
  });
};

export const useUpdatePastPapers = () => {
  return useMutation({
    mutationFn: async (data: IPastPaperUpdateData) => {
      const response = await fetch('/api/resources/upload/past-paper', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    },
    onSuccess: () => {},
    onError: () => {},
  });
};
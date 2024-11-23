import { useMutation } from 'react-query';

import { IContact } from '../types/contact'; // Import your form input type

export const useSubmitContactForm = () => {
  return useMutation({
    mutationFn: async (formData: IContact) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      return response.json();
    },
    onSuccess: () => {},
    onError: () => {},
  });
};

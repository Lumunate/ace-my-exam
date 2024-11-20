import { useMutation } from "react-query";
import { IRevisionNoteData } from '@/types/revision-note';

export const useUploadRevisionNotes = () => {
  return useMutation({
    mutationFn: async (data: IRevisionNoteData) => {
      const response = await fetch("/api/resources/upload/revision-note", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
    onSuccess: () => {},
    onError: () => {},
  });
};

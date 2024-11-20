import { useMutation } from "react-query";
import { IRevisionNoteData } from '@/types/revision-note';
import { ITopicalQuestionData } from "@/types/topical-qeustion";
import { IPastPaperData } from "@/types/past-paper";

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

export const useUploadTopicalQuestions = () => {
  return useMutation({
    mutationFn: async (data: ITopicalQuestionData) => {
      const response = await fetch("/api/resources/upload/topical-question", {
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

export const useUploadPastPapers = () => {
  return useMutation({
    mutationFn: async (data: IPastPaperData) => {
      const response = await fetch("/api/resources/upload/past-paper", {
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

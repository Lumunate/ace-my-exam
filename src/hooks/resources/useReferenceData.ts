import { useQuery } from 'react-query';

import { IReferenceData } from '@/services/subject';

// ============================== GET ==============================

const fetchReferenceData = async (params: {
  educationLevel: string;
  examBoard: string | null;
  subject: string | null;
  meta: string | null;
}): Promise<Partial<IReferenceData>> => {
  const queryParams = new URLSearchParams();

  queryParams.append('educationLevel', params.educationLevel);

  if (params.examBoard) queryParams.append('examBoard', params.examBoard);
  if (params.subject) queryParams.append('subject', params.subject);
  if (params.meta) queryParams.append('meta', params.meta);

  const response = await fetch(`/api/resources/reference-data?${queryParams.toString()}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  return data;
};

export const useGetExamBoards = (educationLevel: string) => {
  return useQuery<string[], Error>({
    queryKey: ["examBoards", educationLevel],
    queryFn: async () => {
      const data = await fetchReferenceData({ educationLevel, examBoard: null, subject: null, meta: null });
      return data.examBoards || [];
    },
  });
};

export const useGetSubjects = (educationLevel: string, examBoard: string) => {
  return useQuery<
    {
      id: number;
      subject: string;
      tags: string[];
    }[],
    Error
  >({
    queryKey: ["subjects", educationLevel, examBoard],
    queryFn: async () => {
      const data = await fetchReferenceData({ educationLevel, examBoard: null, subject: null, meta: null });
      return data.subjects || [];
    },
  });
};

export const useGetValidResources = (educationLevel: string, examBoard: string, subject: string) => {
  return useQuery<
    {
      pastPapers: boolean;
      topicalQuestions: boolean;
      revisionNotes: boolean;
    },
    Error
  >({
    queryKey: ["validResources", educationLevel, examBoard, subject],
    queryFn: async () => {
      const data = await fetchReferenceData({ educationLevel, examBoard: null, subject: null, meta: null });
      return (
        data.validResources || {
          pastPapers: false,
          topicalQuestions: false,
          revisionNotes: false,
        }
      );
    },
  });
};

// ============================== POST ==============================

// interface INewSubject {
//   // TODO Define the structure of your new subject here
// }

// const createSubject = async (newSubject: INewSubject): Promise<IReferenceData> => {
//   const response = await fetch('/api/resources/reference-data', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newSubject),
//   });

//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }

//   const data = await response.json();

//   return data;
// };

// export const useCreateSubject = () => {
//   const queryClient = useQueryClient();

//   return useMutation<IReferenceData, Error, INewSubject>({
//     mutationFn: createSubject,
//     onSuccess: () => {
//       queryClient.invalidateQueries('referenceData');
//     },
//   });
// };

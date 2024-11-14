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
  return useQuery<Partial<IReferenceData>, Error>({
    queryKey: ['examBoards', educationLevel],
    queryFn: () => fetchReferenceData({ educationLevel, examBoard: null, subject: null, meta: null }),
  });
};

export const useGetSubjects = (educationLevel: string, examBoard: string) => {
  return useQuery<Partial<IReferenceData>, Error>({
    queryKey: ['subjects', educationLevel, examBoard],
    queryFn: () => fetchReferenceData({ educationLevel, examBoard, subject: null, meta: null }),
  });
};

export const useGetValidResources = (educationLevel: string, examBoard: string, subject: string) => {
  return useQuery<Partial<IReferenceData>, Error>({
    queryKey: ['validResources', educationLevel, examBoard, subject],
    queryFn: () => fetchReferenceData({ educationLevel, examBoard, subject, meta: null }),
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

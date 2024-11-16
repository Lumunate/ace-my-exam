'use client';
import { useQuery } from 'react-query';

import { IStepOption } from '@/contexts/MultiStepperContext';
import { IReferenceData } from '@/services/subject';
import { EducationLevel, ExamBoards, Subjects } from '@/types/resources';


export const educationLevelOptions: IStepOption[] = [
  { name: 'A levels', icon: '/resources/ALevels.svg', value: EducationLevel.A_LEVEL },
  { name: 'GCSE', icon: '/resources/GCSE.svg', value: EducationLevel.GCSE },
  { name: 'IGCSE', icon: '/resources/IGCSE.svg', value: EducationLevel.IGCSE },
  { name: 'KS3', icon: '/resources/KS3.svg', value: EducationLevel.KS3 },
  { name: 'Entrance Exam', icon: '/resources/EntranceExam.svg', value: EducationLevel.ENTRANCE_EXAMS },
];

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

const boardData: Record<string, IStepOption> = {
  AQA: { name: 'AQA', icon: '/resources/AQA-LOGO.svg', value: ExamBoards.AQA },
  CAMBRIDGE: { name: 'Cambridge', icon: '/resources/CIE.svg', value: ExamBoards.CAMBRIDGE },
  EDEXCEL: { name: 'Edexcel', icon: '/resources/edexcel-Logo.svg', value: ExamBoards.EDEXCEL },
  EDEXCEL_INTERNATIONAL: {
    name: 'Edexcel International',
    icon: '/resources/edexcel-internationnal.png',
    value: ExamBoards.EDEXCEL_INTERNATIONAL,
  },
  ISEB: { name: 'ISEB', icon: '/resources/ISEB.svg', value: ExamBoards.ISEB },
  OCR: { name: 'OCR', icon: '/resources/OCR-logo.svg', value: ExamBoards.OCR },
  OCR_21: { name: 'OCR-21', icon: '/resources/ocr-21st.png', value: ExamBoards.OCR_21 },
  OCR_A: { name: 'OCR-A', icon: '/resources/ocr-a.png', value: ExamBoards.OCR_A },
  OCR_B: { name: 'OCR-B', icon: '/resources/ocr-b.png', value: ExamBoards.OCR_B },
  OCR_GATEWAY: { name: 'OCR-Gateway', icon: '/resources/ocr-gateway.png', value: ExamBoards.OCR_GATEWAY },
  SCHOOL: { name: 'School', icon: '/resources/school.svg', value: ExamBoards.SCHOOL },
};

export const useGetExamBoards = (educationLevel: string) => {
  return useQuery<IStepOption[], Error>({
    queryKey: ['examBoards', educationLevel],
    queryFn: async () => {
      const data = await fetchReferenceData({ educationLevel, examBoard: null, subject: null, meta: null });

      return (
        data.examBoards?.map((board) => {
          return boardData[board];
        }) || []
      );
    },
  });
};

const subjectsData: Record<string, IStepOption> = {
  Math: { name: 'Maths', icon: '/resources/math.svg', value: Subjects.MATH },
  Physics: { name: 'Chemistry', icon: '/resources/chemistry.svg', value: Subjects.CHEMISTRY },
  Chemistry: { name: 'Physics', icon: '/resources/Physics.svg', value: Subjects.PHYSICS },
  Biology: { name: 'Biology', icon: '/resources/biology.svg', value: Subjects.BIOLOGY },
  'Further Math': { name: 'Further Maths', icon: '/resources/Furthermaths.svg', value: Subjects.FURTHER_MATH },
};

export const useGetUniqueSubjects = (educationLevel: string, examBoard: string) => {
  return useQuery<IStepOption[], Error>({
    queryKey: ['subjects', educationLevel, examBoard],
    queryFn: async () => {
      const data = await fetchReferenceData({ educationLevel, examBoard: examBoard, subject: null, meta: null });
      
      const uniqueSubjects: IStepOption[] = [];

      data.subjects?.map((subject) => {
        const data = subjectsData[subject.subject];

        if (!uniqueSubjects.includes(data)) {
          uniqueSubjects.push(data);
        }
      });

      return uniqueSubjects;
    },
  });
};

export const useGetSubjects = (educationLevel: string, examBoard: string, subject: string) => {
  return useQuery<
    {
      id: number;
      subject: string;
      tags: string[];
    }[],
    Error
  >({
    queryKey: ['subjects', educationLevel, examBoard],
    queryFn: async () => {
      const data = await fetchReferenceData({ educationLevel, examBoard: examBoard, subject: null, meta: null });

      return data.subjects?.filter((s) => subjectsData[s.subject]?.value === subject) || [];
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
    queryKey: ['validResources', educationLevel, examBoard, subject],
    queryFn: async () => {
      const data = await fetchReferenceData({ educationLevel, examBoard: examBoard, subject: subject, meta: null });

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

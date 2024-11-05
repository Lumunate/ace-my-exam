interface OptionData {
    name?: string;
    topic?: string;
    downloadLink?: string;
    exam?: string;
    year?: string;
    questionPaper?: string;
    markingScheme?: string;
    answer?: string;
    question?: string;
}

export interface Option {
    name?: string;
    icon?: string;
    imageUrl?: string;
    age?: string;
    headings?: string[];
    data?: OptionData[];
}

export interface StepOptions {
    step: number;
    stepName: string;
    stepHeading: string;
    options?: Option[] | Record<string, Option[]>;
}

export const optionsData: StepOptions[] = [
  {
    step: 1,
    stepName: 'Educational Resources',
    stepHeading: 'Choose Your Resource',
    options: [
      { name: 'A levels', icon: '/resources/ALevels.svg' },
      { name: 'GCSE', icon: '/resources/GCSE.svg' },
      { name: 'IGCSE', icon: '/resources/IGCSE.svg' },
      { name: 'KS3', icon: '/resources/KS3.svg' },
      { name: 'Entrance Exam', icon: '/resources/EntranceExam.svg' },
    ],
  },
  {
    step: 1.5,
    stepName: 'Age Group',
    stepHeading: 'Select Age Group',
    options: {
      'Entrance Exam': [
        { name: 'Primary School', age: '11+' },
        { name: 'Secondary School', age: '13+' },
        { name: 'Higher Secondary', age: '16+' },
        { name: 'Scholarship', age: '13+' },
      ]
    }
  },
  {
    step: 2,
    stepName: 'Examination Board',
    stepHeading: 'Select the Examination Boeard',
    options: {
      'A levels': [
        {  name: 'Edexcel', imageUrl: '/resources/edexcel-Logo.svg' },
        { name: 'AQA', imageUrl: '/resources/AQA-LOGO.svg' },
        { name: 'OCR', imageUrl: '/resources/ocr-a.png' },
        { name: 'OCR', imageUrl: '/resources/ocr-b.png' },
        { name: 'Cambridge', imageUrl: '/resources/CIE.svg' },
        { name: 'Edexcel', imageUrl: '/resources/edexcel-internationnal.png' },
      ],
      'GCSE': [
        {  name: 'Edexcel', imageUrl: '/resources/edexcel-Logo.svg' },
        { name: 'AQA', imageUrl: '/resources/AQA-LOGO.svg' },
        { name: 'OCR-A', imageUrl: '/resources/OCR-logo.svg' },
        { name: 'OCR', imageUrl: '/resources/wjec.svg' },
        { name: 'Wjec', imageUrl: '/resources/ocr-gateway.png' },
        { name: 'OCR', imageUrl: '/resources/ocr-21st.png' },
      ],
      'IGCSE': [
        { name: 'Edexcel', imageUrl: '/resources/edexcel-Logo.svg' },
        { name: 'Cambridge', imageUrl: '/resources/CIE.svg' },
        { name: 'OxfordAQA', imageUrl: '/resources/OxfordAQA.svg' },
      ],
      'KS3': [
        {  name: 'Edexcel', imageUrl: '/resources/edexcel-Logo.svg' },
        { name: 'Cambridge', imageUrl: '/resources/CIE.svg' },
        { name: 'OxfordAQA', imageUrl: '/resources/OxfordAQA.svg' },
      ],
      'Primary School': [
        { name: 'ISEB', imageUrl: '/resources/ISEB.svg' },
        { name: 'School', imageUrl:  '/resources/school.svg' }
      ],
      'Secondary School': [
        { name: 'ISEB', imageUrl: '/resources/ISEB.svg' },
        { name: 'School', imageUrl:  '/resources/school.svg' }
      ],
      'Higher Secondary': [
        { name: 'ISEB', imageUrl: '/resources/ISEB.svg' },
        { name: 'School', imageUrl:  '/resources/school.svg' }
      ],
      'Scholarship': [
        { name: 'ISEB', imageUrl: '/resources/ISEB.svg' },
        { name: 'School', imageUrl:  '/resources/school.svg' }
      ],
    },
  },
  {
    step: 3,
    stepName: 'Subject',
    stepHeading: 'Select Subject',
    options: {
      'Edexcel': [
        { name: 'Maths', icon: '/resources/math.svg' },
        { name: 'Chemistry', icon: '/resources/chemistry.svg'},
        { name: 'Physics', icon: '/resources/Physics.svg' },
        { name: 'Biology', icon: '/resources/Physics.svg' },
        { name: 'Further Maths', icon: '/resources/Furthermaths.svg' },
      ],
      'AQA': [
        { name: 'Maths', icon: '/resources/math.svg' },
        { name: 'Chemistry', icon: '/resources/chemistry.svg'},
        { name: 'Physics', icon: '/resources/Physics.svg' },
        { name: 'Biology', icon: '/resources/Physics.svg' },
        { name: 'Further Maths', icon: '/resources/Furthermaths.svg' },
      ],
      'OCR': [
        { name: 'Maths', icon: '/resources/math.svg' },
        { name: 'Chemistry', icon: '/resources/chemistry.svg'},
        { name: 'Physics', icon: '/resources/Physics.svg' },
        { name: 'Biology', icon: '/resources/Physics.svg' },
        { name: 'Further Maths', icon: '/resources/Furthermaths.svg' },
      ],
      'OCR-A': [
        { name: 'Maths', icon: '/resources/math.svg' },
        { name: 'Chemistry', icon: '/resources/chemistry.svg'},
        { name: 'Physics', icon: '/resources/Physics.svg' },
        { name: 'Biology', icon: '/resources/Physics.svg' },
        { name: 'Further Maths', icon: '/resources/Furthermaths.svg' },
      ],
      'OCR-B': [
        { name: 'Maths', icon: '/resources/math.svg' },
        { name: 'Chemistry', icon: '/resources/chemistry.svg'},
        { name: 'Physics', icon: '/resources/Physics.svg' },
        { name: 'Biology', icon: '/resources/Physics.svg' },
        { name: 'Further Maths', icon: '/resources/Furthermaths.svg' },
      ],
      'Wjec': [
        { name: 'Maths', icon: '/resources/math.svg' },
        { name: 'Chemistry', icon: '/resources/chemistry.svg'},
        { name: 'Physics', icon: '/resources/Physics.svg' },
        { name: 'Biology', icon: '/resources/Physics.svg' },
        { name: 'Further Maths', icon: '/resources/Furthermaths.svg' },
      ],
      'Cambridge': [
        { name: 'Maths', icon: '/resources/math.svg' },
        { name: 'Chemistry', icon: '/resources/chemistry.svg'},
        { name: 'Physics', icon: '/resources/Physics.svg' },
        { name: 'Biology', icon: '/resources/Physics.svg' },
        { name: 'Further Maths', icon: '/resources/Furthermaths.svg' },
      ],
      'OxfordAQA': [
        { name: 'Maths', icon: '/resources/math.svg' },
        { name: 'Chemistry', icon: '/resources/chemistry.svg'},
        { name: 'Physics', icon: '/resources/Physics.svg' },
        { name: 'Biology', icon: '/resources/Physics.svg' },
        { name: 'Further Maths', icon: '/resources/Furthermaths.svg' },
      ],
      
      'ISEB': [
        { name: 'Maths', icon: '/resources/math.svg' },
        { name: 'Chemistry', icon: '/resources/chemistry.svg'},
        { name: 'Physics', icon: '/resources/Physics.svg' },
        { name: 'Biology', icon: '/resources/Physics.svg' },
        { name: 'Science', icon: '/resources/Science.svg' },
      ],
      'School': [
        { name: 'Maths', icon: '/resources/math.svg' },
        { name: 'Chemistry', icon: '/resources/chemistry.svg'},
        { name: 'Physics', icon: '/resources/Physics.svg' },
        { name: 'Biology', icon: '/resources/Physics.svg' },
        { name: 'Science', icon: '/resources/Science.svg' },
      ]
    },
  },
  {
    step: 4,
    stepName: 'Resource Type',
    stepHeading: 'Pick Your Resource Type',
    options: [
      { name: 'Revision Notes', icon: '/resources/RevisionNotesImg.svg' },
      { name: 'Topic Questions', icon: '/resources/TopicQuestionsImg.svg'},
      { name: 'Past Papers', icon: '/resources/PastPapersImg.svg' },
    ],
  },
  {
    step: 5,
    stepName: 'Download Material',
    stepHeading: 'Select the Content Type',
    options: {
      'Revision Notes': [
        {
          name: 'Revision Notes',
          headings: ['Name', 'Topic/ Type', ''],
          data: [
            { name: 'Chapter 1: Introduction to Algebra', topic: 'Number Toolkit', downloadLink: '/materials/algebra.pdf' },
            { name: 'Chapter 1: Introduction to Algebra', topic: 'Number Toolkit', downloadLink: '/materials/algebra.pdf' },
            { name: 'Chapter 1: Introduction to Algebra', topic: 'Number Toolkit', downloadLink: '/materials/algebra.pdf' },
            { name: 'Chapter 1: Introduction to Algebra', topic: 'Number Toolkit', downloadLink: '/materials/algebra.pdf' },
            { name: 'Chapter 1: Introduction to Algebra', topic: 'Number Toolkit', downloadLink: '/materials/algebra.pdf' },
            { name: 'Chapter 1: Introduction to Algebra', topic: 'Number Toolkit', downloadLink: '/materials/algebra.pdf' },
          ],}
      ],
      'Topic Questions': [
        {
          name: 'Topic Questions',
          headings: ['Topics', 'Question', 'Marking scheme', 'Answer'],
          data: [
            { topic: '2.1 Algebra & Functions', question: 'Question 01', markingScheme: 'Question 01', answer: 'Question 01' },
            { topic: '2.1 Algebra & Functions', question: 'Question 01', markingScheme: 'Question 01', answer: 'Question 01' },
            { topic: '2.1 Algebra & Functions', question: 'Question 01', markingScheme: 'Question 01', answer: 'Question 01' },
            { topic: '2.1 Algebra & Functions', question: 'Question 01', markingScheme: 'Question 01', answer: 'Question 01' },
            { topic: '2.1 Algebra & Functions', question: 'Question 01', markingScheme: 'Question 01', answer: 'Question 01' },
            { topic: '2.1 Algebra & Functions', question: 'Question 01', markingScheme: 'Question 01', answer: 'Question 01' },
          ],
        }
      ],
      'Past Papers': [
        {
          name: 'Past Papers',
          headings: ['Exam', 'Year', 'Question Paper', 'Marking scheme', 'Answer'],
          data: [
            { exam: 'Mathematics — 9709 — Oct & Nov', year: '2001', questionPaper: '9709_s02_er', markingScheme: '9709_s02_er', answer: '9709_s02_er' },
            { exam: 'Mathematics — 9709 — May & June', year: '2001', questionPaper: '9709_s02_er', markingScheme: '9709_s02_er', answer: '9709_s02_er' },
            { exam: 'Mathematics — 9709 — Oct & Nov', year: '2001', questionPaper: '9709_s02_er', markingScheme: '9709_s02_er', answer: '9709_s02_er' },
            { exam: 'Mathematics — 9709 — Oct & Nov', year: '2001', questionPaper: '9709_s02_er', markingScheme: '9709_s02_er', answer: '9709_s02_er' },
            { exam: 'Mathematics — 9709 — May & June', year: '2001', questionPaper: '9709_s02_er', markingScheme: '9709_s02_er', answer: '9709_s02_er' },
            { exam: 'Mathematics — 9709 — Oct & Nov', year: '2001', questionPaper: '9709_s02_er', markingScheme: '9709_s02_er', answer: '9709_s02_er' },
          ],
        }
      ]
    }
  },
];

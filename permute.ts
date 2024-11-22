 enum Subjects {
  MATH = "MATH",
  PHYSICS = "PHYSICS",
  CHEMISTRY = "CHEMISTRY",
  BIOLOGY = "BIOLOGY",
  FURTHER_MATH = "FURTHER_MATH",
}

 enum EducationLevel {
  A_LEVEL = "A_LEVEL",
  GCSE = "GCSE",
  IGCSE = "IGCSE",
  KS3 = "KS3",
  ENTRANCE_EXAMS = "ENTRANCE_EXAMS",
}

 enum ExamBoards {
  AQA = "AQA",
  EDEXCEL = "EDEXCEL",
  EDEXCEL_INTERNATIONAL = "EDEXCEL_INTERNATIONAL",
  CAMBRIDGE = "CAMBRIDGE",
  OCR_A = "OCR_A",
  OCR_B = "OCR_B",
  OCR = "OCR",
  OCR_21 = "OCR_21",
  OCR_GATEWAY = "OCR_GATEWAY",
  ISEB = "ISEB",
  SCHOOL = "SCHOOL",
}

// Exam board data
const examBoards = [
  ExamBoards.AQA,
  ExamBoards.EDEXCEL,
  ExamBoards.EDEXCEL_INTERNATIONAL,
  ExamBoards.CAMBRIDGE,
  ExamBoards.OCR_A,
  ExamBoards.OCR_B,
  ExamBoards.OCR,
  ExamBoards.OCR_21,
  ExamBoards.OCR_GATEWAY,
  ExamBoards.ISEB,
  ExamBoards.SCHOOL,
];

// Subjects data
const subjects = [
  Subjects.MATH,
  Subjects.PHYSICS,
  Subjects.CHEMISTRY,
  Subjects.BIOLOGY,
  Subjects.FURTHER_MATH,
];

// Education levels data
const educationLevels = [
  EducationLevel.A_LEVEL,
  EducationLevel.GCSE,
  EducationLevel.IGCSE,
  EducationLevel.KS3,
  EducationLevel.ENTRANCE_EXAMS,
];

// Meta data for A_LEVEL and ENTRANCE_EXAMS
const entranceExamMeta = [
  "PRIMARY_SCHOOL",
  "SECONDARY_SCHOOL",
  "HIGHER_SECONDARY",
  "SCHOLARSHIP",
];

const aLevelMeta = ["YEAR_1", "YEAR_2"];

// Function to generate permutations
function generatePermutations(
  educationLevels: EducationLevel[],
  subjects: Subjects[],
  examBoards: ExamBoards[],
  entranceExamMeta: string[],
  aLevelMeta: string[]
) {
  let permutations: any[] = [];

  educationLevels.forEach((educationLevel) => {
    subjects.forEach((subject) => {
      examBoards.forEach((examBoard) => {
        // Add the permutations for regular education levels (excluding ENTRANCE_EXAMS)
        if (educationLevel !== EducationLevel.ENTRANCE_EXAMS) {
          if (educationLevel === EducationLevel.A_LEVEL) {
            // For A_LEVEL, include the YEAR_1 and YEAR_2 meta values
            aLevelMeta.forEach((meta) => {
              permutations.push({
                educationLevel,
                examBoard,
                subject,
                meta,
              });
            });
          } else {
            permutations.push({
              educationLevel,
              examBoard,
              subject,
            });
          }
        } else {
          // Add the permutations for ENTRANCE_EXAMS with meta field
          if (
            examBoard === ExamBoards.ISEB ||
            examBoard === ExamBoards.SCHOOL
          ) {
            entranceExamMeta.forEach((meta) => {
              permutations.push({
                educationLevel,
                examBoard,
                subject,
                meta, // Add meta field for entrance exams
              });
            });
          }
        }
      });
    });
  });

  return permutations;
}

// Function to convert array of objects to CSV format
function convertToCSV(data: any[]) {
  const headers = Object.keys(data[0]);
  const rows = data.map(row => headers.map(header => row[header]).join(','));
  return [headers.join(','), ...rows].join('\n');
}

// Generate permutations
const permutations = generatePermutations(
  educationLevels,
  subjects,
  examBoards,
  entranceExamMeta,
  aLevelMeta
);

// Convert permutations to CSV format
const csv = convertToCSV(permutations);

// Log CSV to the console
console.log(csv);

import pandas as pd
import requests
import json

sss = {
  'MATH': "Math",
  'SCIENCE': "Science",
  'BIOLOGY': "Biology",
  'CHEMISTRY': "Chemistry",
  'PHYSICS': "Physics",
  'FURTHER_MATH': "Further Math",
  'NONE': "NONE",
}


def transform_subject_data(row):
    # Extract key components from the row
    education_level = row['educationLevel']
    exam_board = row['examBoard']
    subject = row['subject']
    meta = row['meta']
    meta2 = row['meta2']

    # Generate a standardized subject name and code
    subject_name = sss[subject]
    subject_code = f'{education_level}-{exam_board}-{subject}'

    # Construct the metadata dictionary
    metadata = {
      "educationLevel": education_level,
      "examBoard": exam_board,
      "tags": [] if pd.isna(meta) else [meta] if pd.isna(meta2) else [meta, meta2],
      "prerequisites": [],
    }

    # Construct the full subject dictionary
    subject_data = {
        "name": subject_name,
        "description": "",
        "code": subject_code,
        "metadata": metadata
    }

    return subject_data
  
def process_excel_and_post(file_path):
    # Read the Excel file
    df = pd.read_excel(file_path)
    
    # Transform each row
    subjects = df.apply(transform_subject_data, axis=1).tolist()

    # Optional: POST each subject
    for subject in subjects:
        try:
            response = requests.post('http://localhost:3000/api/resources/reference-data/subject', json=subject)
            response.raise_for_status()
            print(f"Successfully posted subject: {subject['name']}")
        except requests.exceptions.RequestException as e:
            print(subject)
            print(f"Error posting subject: {e}")

    return subjects


# Uncomment and modify as needed
result = process_excel_and_post('~/Downloads/subjects-data.xlsx')

# print(json.dumps(result, indent=2))
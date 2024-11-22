import csv
import requests
import json

# Define the CSV file path and the target API URL
csv_file_path = './data.csv'  # Replace with your CSV file path
api_url = 'http://localhost:3000/api/resources/subjects'

# Function to send the data to the API
def send_data_to_api(data):
    print(data)
    try:
        response = requests.post(api_url, json=data)
        if response.status_code == 200:
            print(f"Successfully sent data for {data['name']}")
        else:
            print(f"Failed to send data for {data['name']}: {response.status_code}")
    except Exception as e:
        print(f"Error sending data for {data['name']}: {str(e)}")

import re

def camel_case_to_snake_case_and_title(camel_case_str):
    # Convert camelCase to snake_case
    snake_case_str = re.sub(r'([a-z])([A-Z])', r'\1_\2', camel_case_str).lower()
    # Capitalize the first letter of each word
    return snake_case_str.replace('_', ' ').title()
  
# Example usage
camel_case_example = "examBoard"
formatted_example = camel_case_to_snake_case_and_title(camel_case_example)
print(formatted_example)  # Output: "Exam_Board"


# Function to process the CSV and create the data structure
def process_csv_and_send_data():
    with open(csv_file_path, mode='r') as file:
        csv_reader = csv.DictReader(file)
        for row in csv_reader:
            subject_data = {
                "name": camel_case_to_snake_case_and_title(row['subject']),  # Subject name
                "description": f"{camel_case_to_snake_case_and_title(row['educationLevel'])} {camel_case_to_snake_case_and_title(row['subject'])} covering key topics.",
                "code": row['educationLevel'] + '-' + row['examBoard']+ '-' + row['subject']+ '-' + row['meta'],  # Assuming code is derived from subject (adjust if needed)  "code
                "metadata": {
                    "educationLevel": row['educationLevel'],
                    "examBoard": row['examBoard'],  # Append _21 to the exam board value
                    "tags": [row['meta'], "STEM"] if row['meta'] else ["STEM"],
                }
            }

            # Send the data to the API
            send_data_to_api(subject_data)

# Call the function to process the CSV and send the data
process_csv_and_send_data()

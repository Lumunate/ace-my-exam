import os
import sys

def read_files_in_folder(folder_path):
    try:
        # Check if the provided path is a valid directory
        if not os.path.isdir(folder_path):
            print(f"Error: '{folder_path}' is not a valid directory.")
            return

        # Iterate over all files in the folder
        for file_name in os.listdir(folder_path):
            file_path = os.path.join(folder_path, file_name)

            # Skip directories, only process files
            if os.path.isfile(file_path):
                print(f"\n--- File: {file_name} ---")
                try:
                    with open(file_path, 'r', encoding='utf-8') as file:
                        print(file.read())
                except Exception as e:
                    print(f"Error reading file '{file_name}': {e}")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    # Check for command-line arguments
    if len(sys.argv) != 2:
        print("Usage: python read_folder_files.py <folder_path>")
    else:
        folder_path = sys.argv[1]
        read_files_in_folder(folder_path)

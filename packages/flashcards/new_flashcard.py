import pandas as pd

def add_qa_to_excel(question, answer):

    file_path = "../data/raw/qa.xlsx"

    # Load the existing Excel file
    try:
        # Read the Excel file into a DataFrame
        df = pd.read_excel(file_path, engine='openpyxl')
    except FileNotFoundError:
        # If the file doesn't exist, create a new DataFrame with the required columns
        df = pd.DataFrame(columns=['Question', 'Answer'])
    
    # Create a DataFrame for the new question and answer
    new_data = pd.DataFrame({'Question': [question], 'Answer': [answer]})
    
    # Concatenate the new row with the existing DataFrame
    df = pd.concat([df, new_data], ignore_index=True)
    
    # Write the updated DataFrame back to the Excel file
    df.to_excel(file_path, index=False, engine='openpyxl')
    print("Question and answer added successfully!")
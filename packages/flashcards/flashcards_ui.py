import tkinter as tk
import random
import pandas as pd

def load_flashcards(file_path):
    df = pd.read_excel(file_path)
    return dict(zip(df['Question'], df['Answer']))

# Path to your Excel file
file_path = 'file_path'

# Load flashcards
flashcards = load_flashcards("data/raw/qa.xlsx")

class FlashcardApp:
    def __init__(self, master):
        self.master = master
        master.title("Flashcard App")
        master.geometry("500x300")  # Set a fixed window size

        self.question_label = tk.Label(master, text="", font=("Helvetica", 16), wraplength=400)
        self.question_label.pack(pady=20)

        self.reveal_button = tk.Button(master, text="Reveal Answer", command=self.reveal_answer)
        self.reveal_button.pack()

        self.answer_label = tk.Label(master, text="", font=("Helvetica", 16), wraplength=400)
        self.answer_label.pack(pady=20)

        self.next_button = tk.Button(master, text="Next", command=self.next_flashcard)
        self.next_button.pack()

        self.flashcard_list = list(flashcards.items())
        random.shuffle(self.flashcard_list)
        self.current_flashcard_index = -1
        self.next_flashcard()

    def next_flashcard(self):
        self.answer_label.config(text="")
        self.current_flashcard_index += 1
        if self.current_flashcard_index >= len(self.flashcard_list):
            random.shuffle(self.flashcard_list)
            self.current_flashcard_index = 0

        self.current_question, self.current_answer = self.flashcard_list[self.current_flashcard_index]
        self.question_label.config(text=self.current_question)

    def reveal_answer(self):
        self.answer_label.config(text=self.current_answer)


def open_flashcards():
    root = tk.Tk()
    app = FlashcardApp(root)
    root.mainloop()

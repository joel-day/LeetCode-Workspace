# LeetCode Workspace

- This is a mono-repo for LeetCode practice.
- Scroll down to see my LeetCode journal - I fill this out when i practice.

## Flashcards

- I used 'tkinter' to create a flashcard app for practicing.
- Flashcards are stored in the 'data/raw/qa.xlsx' file
- Use the "add_flashcard.ipynb" notebook to add cards.
- Run the bash shortcut below in the terminal to open the flashcard UI.
```bash
flashcards
```

#### Load Relevant Sites

- I used 'webbrowser' to pull up sites in the browser.
- Run the bash shortcut below in the terminal to open leetcode and chatgpt.
```bash
browser
```

#### Check PEP8 compliance

- I used 'Flake8' to check code compliance with PEP8 standards.
- Run the bash shortcut below in the terminal check the pep8 compliance of .py files.
```bash
flake8 .
```

## Installation

```bash
# Clone the repository
git clone https://github.com/joel-day/LeetCode-Workspace.git

# Move into the local repository
cd LeetCode-Workspace

# Create the virtual environment
uv venv .venv

# Activate the virtual environment
source .venv\bin\activate # Mac/Linux
.venv\Scripts\activate   # Windows

# Sync environment based on dependencies in top-level pyproject.toml file
uv sync

# (OPTIONAL) Sync environment based on dependencies across all packages' pyproject.toml files
uv sync --all-packages
```

# Jounal

- **04/09/24**:


- **04/01/24**:

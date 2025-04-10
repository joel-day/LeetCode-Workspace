# LeetCode Workspace

This mono-repo makes LeetCode practice easy. Scroll down to see my LeetCode journal - I fill this out when i practice.

## Flashcards

- I used 'tkinter' to create a flashcard app for practicing.
- Use the "add_flashcard.ipynb" notebook to add cards.
- Run the bash shortcut below in the terminal to open the flashcard UI.
```bash
flashcards
```

## Other tools

- **Load Sites**: Used 'webbrowser' to pull up leetcode and chatgpt in the browser to begin working.
```bash
browser
```

- **PEP8 Compliance**: Used 'Flake8' for checking code compliance with PEP8 standards. It helps maintain a clean and consistent code style across the project by enforcing formatting and style guidelines.
```bash
flake8 .
```

## Installation

- **UV**: Used for package management and virtual environment creation. Configured to manage environments in a monorepo setup, ensuring consistency across the project.

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

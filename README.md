# LeetCode Workspace

This template builds a mono-repo with its own virtual environment designed to fascilitate LeetCode practice.

## Custom Tools

- **tkinter**: Used to create a flashcard app for practicing. Use the "add_flashcard.ipynb" notebook to add cards
```bash
flashcards
```

- **webbrowser**: Used to pull up leetcode and chatgpt for working
```bash
browser
```

## Installation

 On Github, manually create a new repository 'new-repo-name'

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

## Included Packages

- **UV**: Used for package management and virtual environment creation. Configured to manage environments in a monorepo setup, ensuring consistency across the project.

- **Pytest**: Configured to run tests and verify the correctness of code execution. It ensures that the codebase remains functional and that new changes don’t introduce unexpected behavior.
```bash
pytest
```
- **Flake8**: Used for checking code compliance with PEP8 standards. It helps maintain a clean and consistent code style across the project by enforcing formatting and style guidelines.
```bash
flake8 .
```


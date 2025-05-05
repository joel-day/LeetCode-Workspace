# LeetCode Workspace

- This is a mono-repo for LeetCode practice.
- Scroll down for Leetcode Solutions

### Set-up

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
### Custom CLI Scripts
#### Flashcards

- I use 'tkinter' to create a flashcard app for practicing.
- Flashcards are stored in the 'data/raw/qa.xlsx' file
- Use the "add_flashcard.ipynb" notebook to add cards.
- Run the bash shortcut below in the terminal to open the flashcard UI.
```bash
flashcards
```

#### Check PEP8 compliance

- I use 'Flake8' to check code compliance with PEP8 standards.
- Run the bash shortcut below in the terminal check the pep8 compliance of .py files.
```bash
flake8 .
```

# Solutions
    1) Python Solution
    2) Javascript Solution
    3) Time/Space complexity & Notes
    4) Solutions are saved in the helpers.py and helper.js files respectively. 

## Top Interview 150. 12. Integer to Roman
### Notes:
- Dictionary iteration order is not guaranteed. When the order is importaint, use a list > dict.

#### Python 
```python
class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        roman_dict = [
            (1000, 'M'), (900, 'CM'),
            (500, 'D'), (400, 'CD'),
            (100, 'C'), (90, 'XC'),
            (50, 'L'), (40, 'XL'),
            (10, 'X'), (9, 'IX'),
            (5, 'V'), (4, 'IV'),
            (1, 'I')
        ]

        results = []

        for value, symbol in roman_dict:
            while num >= value:
                results.append(symbol)
                num -= value

        return ''.join(results)
```
#### Javascript
```javascript
var intToRoman = function(num) {
    const values = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];
    let result = '';
    for (const [value, symbol] of values) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
};
```
#### Complexity
 - Time Complexity: ( O(n) ) — Depends on the number size.
 - Space Complexity: ( O(1) ) — Output grows linearly with digit size


## Top Interview 150. 58. Length of Last Word
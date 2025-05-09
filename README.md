# LeetCode Workspace

This is a mono-repo for LeetCode practice.

- Part I outlines the mono-repo set-up
- Part II contains my LeetCode solutions w/ notes

# Part I: Set-up

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
### Custom CLI Commands
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
# Part II: Solutions

![Solution Image](data/raw/sol.jpg)

Photo by <a href="https://unsplash.com/@olav_ahrens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Olav Ahrens Røtne</a> on <a href="https://unsplash.com/photos/person-playing-magic-cube-4Ennrbj1svk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

For each problem I provide the below. All problems were found in the 'Top Interview 150' LeetCode playlist.
      
1) Notes
2) Time/Space Complexity
3) Python Solution
4) Javascript Solution


## 12. Integer to Roman
#### Notes:
- Dictionary iteration order is not guaranteed. When the order is importaint, use a list > dict.

#### Complexity:
 - Time Complexity: ( O(n) ) — Linear growth dependent on the input number size.
 - Space Complexity: ( O(n) ) — Linear growth dependent on the input number size.

#### Python Solution: 
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
#### Javascript Solution:
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


## 58. Length of Last Word
#### Notes:
- rsplit and rstrip begin at the end of the list - minimizing processing requirments

#### Complexity:
- Time Complexity: ( O(n) ) — Depends on the string size (characters).
- Space Complexity: ( O(n) ) — Depends on the string size (characters).

#### Python Solution:     
```python
class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """

        s = s.rstrip()

        last_word = s.rsplit(' ', 1)[-1]

        word_length = len(last_word)


        return word_length
```
#### Javascript Solution:
```javascript
    var lengthoflastword = function(s) {
        s = s.trimEnd();

        const lastSpaceIndex = s.lastIndexOf(' ');
        const lastword = lastSpaceIndex === -1 ? s : s.slice(lastSpaceIndex + 1);

        return lastword.length;
    }
```
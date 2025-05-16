# LeetCode Workspace

**Welcome to my custom mono-repo for practicing LeetCode, which doubles as a journal for my solutions.**

- The repo includes a custom flashcard UI and bash scripts for taking practice to the next level. 

- To setup for yourself, see the 'Workspace Set-up' section at the bottom of this ReadMe. 


# My Solutions

![Solution Image](data/raw/sol.jpg)

Photo by <a href="https://unsplash.com/@olav_ahrens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Olav Ahrens Røtne</a> on <a href="https://unsplash.com/photos/person-playing-magic-cube-4Ennrbj1svk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

- For each solution, I provide the Intuition, Approach, and Code in Python and Javascript. Source: 'Top Interview 150' list on LeetCode.

- I try to go beyond just finding a solution that works and instead find one that is optimized to minimize both time and space complexity. For example, avoiding nested loops with n^2 time complexity, and creating new variables only when necessary. 

- I prioritize understanding the logic over memorization of specific functions. Instead of using LLM models like ChatGPT to help work through problems, I use them only to find isolated code or functions that can get me through each logical step of a problem. 

- I am stronger with python, so after initially solving the problem with python, I then convert it to JavaScript.

## 73. Set Matrix Zeroes
### Input/Output
```python
# Input
matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]

# Output
output = [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
```

#### Intuition:
The goal here is to zero out the values that share a row or a column with an existing zero. To do this first save the indexes of the rows and columns that contain a zero, then cancel those out. Make sure to zero out only after the indices for both rows and columns have been stored. 

#### Approach:
- save the row numbers that contain zeros in a dict
- save the columns with zeros in a dict
- zero out all values in the rows and columns that contain a zero

#### Code:
```python
class Solution:
    def setZeroes(self, matrix: list[list[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        
        # Get all the rows with a zero
        rows_with_zero = {
            i for i in range(len(matrix))
            if any(matrix[i][j] == 0 for j in range(len(matrix[i])))
        }

        # Get all the columns with zero
        cols_with_zero = {
            j for j in range(len(matrix[0]))
            if any(matrix[i][j] == 0 for i in range(len(matrix)))
        }

        # Zero out rows
        for i in rows_with_zero:
            matrix[i] = [0 for _ in matrix[i]]

        # Zero out columns
        for row in matrix:
            for i in cols_with_zero:
                row[i] = 0

        return matrix
```
```javascript
var setZeroes = function(matrix) {
    const rowsWithZero = new Set();
    const colsWithZero = new Set();

    // Find all rows and columns that contain a zero
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rowsWithZero.add(i);
                colsWithZero.add(j);
            }
        }
    }

    // Zero out the rows
    for (let i of rowsWithZero) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] = 0;
        }
    }

    // Zero out the columns
    for (let j of colsWithZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][j] = 0;
        }
    }
};
```

# 12. Integer to Roman
#### Intuition:
The goal is to convert an integer to roman numerals. First, create a list pairing each unique roman numeral and its value - sorted from highest to lowest. Then, iterate through this list, if the integer is greater than the value of the roman numeral, add the roman numeral to the output string and subtract the value of the roman numeral from the integer. Continue this process until the integer is 0.

Note: To avoid creating new variables, the input integer is reused by subtracting the value of each output roman numeral as we go.

Note: Use a list as opposed to a dict for the roman numerals. Dictionary iteration order is not guaranteed. Because the order is important, use a list.

#### Approach:
- Create a list of each unique pair of roman numerals and their values, ordered from largest to smallest.
- Iterate through the list, if the target integer is greater than the value of the roman numeral, append that numeral to the results list and subtract the value of that numeral from the target integer.
- Advance to the next (lower) roman numeral only when the input is less than the numeral value. 

#### Complexity:
 - Time Complexity: ( O(n) ) — Linear growth dependent on the input number size.
 - Space Complexity: ( O(n) ) — Linear growth dependent on the input number size.

#### Code: 
```python
# Python
class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        roman_list = [
            (1000, 'M'), (900, 'CM'),
            (500, 'D'), (400, 'CD'),
            (100, 'C'), (90, 'XC'),
            (50, 'L'), (40, 'XL'),
            (10, 'X'), (9, 'IX'),
            (5, 'V'), (4, 'IV'),
            (1, 'I')
        ]

        results = []

        for value, symbol in roman_list:
            while num >= value:
                results.append(symbol)
                num -= value

        return ''.join(results)
```
```javascript
// JavaScript
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

# 58. Length of Last Word
#### Intuition:
The goal here is to find the length of the last word. To do this, first 'clean up' any extra white spaces in the string, then isolate the word by splitting on the last white space. Once the word is isolated into its own variable, simply count the letters with len().  

Note: To avoid processing the entire sting, 'rsplit' and 'rstrip' are used to begin at the end of the list.

#### Approach:
- Remove the leading and trailing whitespaces with 'rstrip'
- Use rsplit(' ', 1)[-1] to begin splitting from the end, split only once, and save the last chunk as a variable (last_word). 
- Use len() to get the length of the word

#### Complexity:
- Time Complexity: ( O(n) ) — Depends on the string size (characters).
- Space Complexity: ( O(n) ) — Depends on the string size (characters).

#### Code:   
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
```javascript
    var lengthoflastword = function(s) {
        s = s.trimEnd();

        const lastSpaceIndex = s.lastIndexOf(' ');
        const lastword = lastSpaceIndex === -1 ? s : s.slice(lastSpaceIndex + 1);

        return lastword.length;
    }
```

# 14. Longest Common Prefix
#### Intuition:
The goal is to find the longest common prefix across ALL the words in a list. To do this, compare the first word to the remaining words to see if they match, beginning with the first letter, then the first two letters, ect. to find the longest common prefix. At each iteration, see if all the other words begin with the same prefix, if so, the 'longest_prefix' variable is updated, if not, the current 'longest_prefix' variable is returned. 

Note: Using the first word to iterate over avoids needing to sort the list.

#### Approach:
- Iterate over each incrementing prefix in the first word.
- For each prefix, iterate over all remaining words to see if they contain the prefix. If not, it returns the current longest prefix, if so, it updates the ‘longest_prefix’ variable and repeats the process with the next (longer) prefix.

#### Complexity:
 - Time Complexity: ( O(n*m) )
 - Space Complexity: ( O(n) )

#### Code: 
```python
class Solution(object):
    def longestCommonPrefix(self, strs: list = []) -> str:
        """
        :type strs: List[str]
        :rtype: str
        """

        longest_prefix = ''

        # Loop over each letter in the first word
        for i in range(0, len(strs[0])):
            #  Prefix is a str = to the first letter through the current letter
            prefix = strs[0][0:i+1]

            # Loop over the remaining words
            for j in range(1, len(strs)):

                # See if the word shares the prefix
                if strs[j][0:i+1] != prefix:

                    # Exit the loop if it doesnt match
                    return longest_prefix
            
            # If if gets through each word, update the longest_prefix string
            longest_prefix = prefix

        return longest_prefix
```
```javascript
longestCommonPrefix(strs = []) {
    let longest_prefix = '';

    if strs.length === 0 return longest_prefix;

    for (let i = 0; i < strs[0].length; i++) {

        const prefix = strs[0].substring(0, i+1);

        for (let j = 0; j < strs.length; j++) {
            if (strs[j].substring(0, i+1) !== prefix) {
                return longest_prefix;
            }
        }

    longest_prefix = prefix;
    }

    return longestPrefix;
}
```

# 151. Reverse Words in a String
#### Intuition:
The goal is to return all the words in the list without the extra whitespaces and in reverse order; this is in three steps. First remove leading and trailing whitespaces, then split the string at each internal space and return non-empty words as a list in reverse order, then rejoin these words into a string.

Note: Use [::-1] to reverse sort the list without creating an additional variable. 

#### Approach:
- Use 'strip' to remove leading and trailing spaces.
- Use 'split()[::-1]' to create a list of words in reverse order. The trick is to sort by '-1' to easily satisfy the reverse order constraint. This will also handle any repeated space between words.
- Simply use join with ' ' to create the output string. 

#### Complexity:
 - Time Complexity: ( O(n) )
 - Space Complexity: ( O(n) )

#### Code:
```python
class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """

        s = s.strip()

        word_list = s.split()[::-1]

        reverse_string = ' '.join(word_list)

        return reverse_string

```
```javascript
reverseWords(s) {

    s = String(s).trim();

    const word_list = s.split(/\s+/).reverse();

    const reverse_string = word_list.join(' ');

    return reverse_string;
}
```
## 6. Zigzag Conversion
#### Intuition:
The goal is to rearrange the string. This will be done by iterating over the string in a specific way and adding each letter to a new string as we go. To do this loop iterate by row adding the letters needed beofre moving onto the next row.

#### Approach:
- Iterate one row at a time
- For each row, iterate over the string begining with the index where (index = row number - 1) and skipping over indexes with an interval equal to 2(n-1) where n is the number of rows. For the middle rows, also add the indexes  (2(n-1) - (2i)) greater than the index at each interval, this adds the diagnal letters. 
#### Complexity:
 - Time Complexity: ( O(n*m) ) — Linear growth dependent on the input number size.
 - Space Complexity: ( O(n) ) — Linear growth dependent on the input number size.

#### Code:
```python
def convert(self, s, numRows):
    """
    :type s: str
    :type numRows: int
    :rtype: str
    """
    if numRows == 1:
        return s

    final_string = ''

    for i in range(numRows):
        for j in range(i, len(s), 2*(numRows-1)):
            final_string+=s[j]
            if (i>0 and i<numRows-1 and j + 2*(numRows-1) - (2*i) < len(s)):
                final_string+=s[j + 2*(numRows-1) - (2*i)]

    return final_string
```
```javascript
var convert = function(s, numRows) {
    if (numRows === 1) return s;

    let finalString = '';

    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < s.length; j += 2 * (numRows - 1)) {
            finalString += s[j];
            let diag = j + 2 * (numRows - 1) - 2 * i;
            if (i > 0 && i < numRows - 1 && diag < s.length) {
                finalString += s[diag];
            }
        }
    }

    return finalString;
};
```
## 36. Valid Sudoku
#### Intuition:
The goal is to check if the sudoku board is valid. To check, handle each of the three features seperately (rows, columns, squares). As soon as a a duplicate is found, exit. 
#### Approach:
- For each row check if the len of the values is equal to the set (check for duplicates) if so exit, if not continue.
- Next do the same for each column
- Finally check the squares.
#### Complexity:
 - Time Complexity: ( O(1) )
 - Space Complexity: ( O(n) )

#### Code:
```python
def isValidSudoku(self, board):

    # Check rows
    for row in board:
        values = [num for num in row if num != "."]
        if len(values) != len(set(values)):  # Ignore empty cells
            return False

    # Check columns
    for i in range(9):  # Since it's a 9x9 board
        col = [board[row][i] for row in range(9) if board[row][i] != "."]
        if len(col) != len(set(col)):
            return False

    # Check 3x3 sub-boxes
    for row_start in [0, 3, 6]:  
        for col_start in [0, 3, 6]:  
            square = [
                board[i][j] for i in range(row_start, row_start + 3)
                            for j in range(col_start, col_start + 3) 
                            if board[i][j] != "."
            ]
            if len(square) != len(set(square)):
                return False

    return True  # If no duplicates found, the Sudoku board is valid
```
```javascript
var isValidSudoku = function(board) {

    // Check rows
    for (let row of board) {
        let values = row.filter(num => num !== ".");
        if (new Set(values).size !== values.length) {
            return false;
        }
    }

    // Check columns
    for (let i = 0; i < 9; i++) {
        let col = [];
        for (let row = 0; row < 9; row++) {
            if (board[row][i] !== ".") {
                col.push(board[row][i]);
            }
        }
        if (new Set(col).size !== col.length) {
            return false;
        }
    }

    // Check 3x3 sub-boxes
    for (let rowStart of [0, 3, 6]) {
        for (let colStart of [0, 3, 6]) {
            let square = [];
            for (let i = rowStart; i < rowStart + 3; i++) {
                for (let j = colStart; j < colStart + 3; j++) {
                    if (board[i][j] !== ".") {
                        square.push(board[i][j]);
                    }
                }
            }
            if (new Set(square).size !== square.length) {
                return false;
            }
        }
    }
    return true;
};
```
## 28. Find the Index of the First Occurrence in a String
#### Intuition:
My favorite solution so far. The goal here is to find the first occurance of a substring in a main string. .find() and .index() and both return the first occurance of the input, but .find() returns -1 when not found while .index() return an error messge. Using find me to avoid if then logic for when the needle doesnt exist in the haystack.
HINT: Use .find() when you're not sure if the string exists, and use .index() when you're sure it does and want an error otherwise.

#### Approach:
- use haystack.find(needle) in the return statement and we good.

#### Complexity:
 - Time Complexity: ( O(n*m) ) — Worst case when they represent length of strings
 - Space Complexity: ( O(1) )

#### Code:
```python
def strStr(self, haystack: str, needle: str) -> int:
    return haystack.find(needle)
```
```javascript
function strStr (haystack, needle) {
    return haystack.indexOf(needle);
}
```
## 54. Spiral Matrix
#### Intuition:
Break the issue into 4 parts, the top row, the last column, the last row, and the first column. One at a time, extract the numbers as a string and remove them from the matrix. Rotate through each step until the matrix is empty. 

#### Approach:
- iterate over values in the first row, append them to results and remove them from the matrix. 
- iterate over the last column, append them to results and remove them from the matrix.
- iterate over last row in reverse order, append them to results and remove them from the matrix.
- iterate over the first column in reverse order, append them to results and remove them from the matrix.
- repeat

#### Complexity:
 - Time Complexity: ( O(n) ) — The size of the matrix
 - Space Complexity: ( O(1) ) — the results list

#### Code:
```python
class Solution(object):
    def spiralOrder(self, matrix):
        output_list = []
        step = 1

        while matrix and matrix[0]:

            if step == 1:

                for i in matrix[0]:
                    output_list.append(i)

                del(matrix[0])
                step += 1
                continue

            if step == 2:

                j = len(matrix[0]) -1

                for i in range(0, len(matrix)):
                    output_list.append(matrix[i][j])

                    del(matrix[i][j])

                step += 1
                continue

            if step == 3:

                for i in matrix[-1][::-1]:
                    output_list.append(i)

                del(matrix[-1])
                step += 1
                continue

            if step == 4:

                for i in range(len(matrix) - 1, -1, -1):

                    output_list.append(matrix[i][0])

                    del(matrix[i][0])
                step = 1
                continue

        return output_list
```
```javascript
function spiralOrder(matrix) {
    let outputList = [];
    let step = 1;

    while (matrix.length && matrix[0].length) {
        if (step === 1) {
            // Traverse top row
            outputList.push(...matrix[0]);
            matrix.shift();
            step++;
            continue;
        }

        if (step === 2) {
            // Traverse right column
            for (let i = 0; i < matrix.length; i++) {
                outputList.push(matrix[i][matrix[i].length - 1]);
                matrix[i].splice(matrix[i].length - 1, 1);
            }
            step++;
            continue;
        }

        if (step === 3) {
            // Traverse bottom row in reverse
            outputList.push(...matrix[matrix.length - 1].reverse());
            matrix.pop();
            step++;
            continue;
        }

        if (step === 4) {
            // Traverse left column bottom to top
            for (let i = matrix.length - 1; i >= 0; i--) {
                outputList.push(matrix[i][0]);
                matrix[i].splice(0, 1);
            }
            step = 1;
            continue;
        }
    }

    return outputList;
}
```

## 48. Rotate Image
#### Intuition:
The goal is to rotate the matrix. To do this reverse the order of the rows and then transpose the matrix so each row becomes a column

#### Approach:
- A[::-1] to reverse column order
- zip(*A[::-1]) to transposes the rows into columns
- map(list, ) to convert tuples back to list

#### Complexity:
 - Time Complexity: ( O(1) ) — 
 - Space Complexity: ( O(0) ) — 

#### Code:
```python
def rotate(A):
    A[:] = map(list, zip(*A[::-1]))

    return A
```
```javascript
function rotate(A) {
    const n = A.length;

    // Reverse the rows
    A.reverse();

    // Transpose: create a new array with rotated values
    const rotated = [];

    for (let i = 0; i < n; i++) {
        rotated.push([]);
        for (let j = 0; j < n; j++) {
            rotated[i].push(A[j][i]);
        }
    }

    // Copy back into A (in-place)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            A[i][j] = rotated[i][j];
        }
    }

    return A;
}
```

## 68. Text Justification
#### Intuition:
Loop through each word counting the letters as you go. Add each word to a list until the count is greater than 16. Before adding this word, for each space needed to add loop through each word adding a space until no more are needed. 

#### Approach:
- Iterate over each word
- Count the amount of letters of each word until you go over 16, 
- For each of these words loop through and add a space to the end, 
- iterate once for each space needed to add
- Join the edited words into a string and add to the results list. 
- repeat until you run out of words and line join the strings together


#### Code:
```python
def fullJustify(self, words, maxWidth):
    res, cur, num_of_letters = [], [], 0
    for w in words:
        if num_of_letters + len(w) + len(cur) > maxWidth:
            for i in range(maxWidth - num_of_letters):
                cur[i%(len(cur)-1 or 1)] += ' '
            res.append(''.join(cur))
            cur, num_of_letters = [], 0
        cur += [w]
        num_of_letters += len(w)
    return res + [' '.join(cur).ljust(maxWidth)]
```
```javascript
var fullJustify = function(words, maxWidth) {

    const res = [];
    let cur = [];
    let numOfLetters = 0;

    for (const w of words) {
        if (numOfLetters + w.length + cur.length > maxWidth) {
            for (let i = 0; i < maxWidth - numOfLetters; i++) {
                // Add space to word at index i % (cur.length - 1 or 1)
                const index = cur.length > 1 ? i % (cur.length - 1) : 0;
                cur[index] += ' ';
            }
            res.push(cur.join(''));
            cur = [];
            numOfLetters = 0;
        }
        cur.push(w);
        numOfLetters += w.length;
    }

    // Last line: join with single spaces, then pad right with spaces to maxWidth
    res.push(cur.join(' ').padEnd(maxWidth, ' '));
    return res;
};
```

# Workspace Set-up

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
## Flashcards
- Flashcards are stored in the 'data/raw/qa.xlsx' excel file.
- Use the "add_flashcard.ipynb" notebook to add cards.
- Run the bash shortcut below in the terminal to open the flashcard UI.
```bash
flashcards
``` 

## Bash Scripts
- 'flake8 .'  Use for:   PEP8 compliance.  Python solutions are added to 'helpers/helper.py' to use with flake8. 
- 'browser'   Use for:   Saving time.      Loads ChatGPT and LeetCode in the browser. 
```bash
flake8 .
browser
```
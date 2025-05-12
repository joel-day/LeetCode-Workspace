# LeetCode Workspace

Welcome to my custom mono-repo for practicing LeetCode, which doubles as a journal for my solutions.

The repo includes a custom flashcard UI and bash scripts for taking practice to the next level. 

To setup for yourself, see the 'Workspace Set-up' section at the bottom of this ReadMe. 


# My Solutions

![Solution Image](data/raw/sol.jpg)

Photo by <a href="https://unsplash.com/@olav_ahrens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Olav Ahrens Røtne</a> on <a href="https://unsplash.com/photos/person-playing-magic-cube-4Ennrbj1svk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

- For each solution, I provide the Intuition, Approach, Complexity, and Code. Source: 'Top Interview 150' list on LeetCode.

- I try to go beyond just finding a solution that works and instead find one that is optimized to minimize both time and space complexity. For example, avoiding nested loops with n^2 time complexity, and creating new variables only when necessary. 

- I prioritize understanding the logic over memorization of specific functions. Instead of using LLM models like ChatGPT to help work through problems, I use them only to find isolated code or functions that can get me through each logical step of a problem. 

- I am stronger with python, so after initially solving the problem with python, I then convert it to JavaScript.


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
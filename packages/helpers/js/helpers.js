// main.js
export function intToRoman(num) {
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
  }
  
export class Solution {
    lengthOfLastWord(s) {
        s = s.trimEnd();
        const lastSpaceIndex = s.lastIndexOf(' ');
        const lastWord = lastSpaceIndex === -1 ? s : s.slice(lastSpaceIndex + 1);
        return lastWord.length;
    }


    longestCommonPrefix(strs = []) {
        let longest_prefix = '';

        if (strs.length === 0) return longest_prefix;

        for (let i = 0; i < strs[0].length; i++) {

            const prefix = strs[0].substring(0, i+1);

            for (let j = 0; j < strs.length; j++) {
                if (strs[j].substring(0, i+1) !== prefix) {
                    return longest_prefix;
                }
            }

        longest_prefix = prefix;
        }

        return longest_prefix;
    }

    reverseWords(s) {

        s = String(s).trim();

        const word_list = s.split(/\s+/).reverse();

        const reverse_string = word_list.join(' ');

        return reverse_string;
    }

    convert_string(s, numRows) {
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
    }

    strStr(haystack, needle) {
        return haystack.indexOf(needle);
    }  

    spiralOrder(matrix) {
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

    rotate(A) {
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

}
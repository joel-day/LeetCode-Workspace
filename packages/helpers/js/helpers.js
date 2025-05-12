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


    
}
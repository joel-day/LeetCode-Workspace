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
}
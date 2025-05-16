// app.js
import { intToRoman } from './helpers.js';
import { Solution } from './helpers.js';

console.log(intToRoman(1000));

const sol = new Solution();

console.log(sol.lengthOfLastWord("hello world  "));

console.log(sol.longestCommonPrefix(["fl66ower","fl666ow","fl66ight"]));

console.log(sol.reverseWords(["    a good   example  foodbanana "]));

console.log(sol.convert_string('PAYPALISHIRING', 3));

console.log(sol.strStr("sadbutsad", "adb"));

console.log(sol.spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));

console.log(sol.rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));
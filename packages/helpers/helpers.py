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

    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        s = s.rstrip()

        last_word = s.rsplit(' ', 1)[-1]

        word_length = len(last_word)

        return word_length

    def longestCommonPrefix(self, strs: list = []) -> str:
        """
        :type strs: List[str]
        :rtype: str
        """

        longest_prefix = ''

        # Loop over each letter in the first word
        for i in range(0, len(strs[0])):
            #  Prefix is a str = to the first letter through the current letter
            prefix = strs[0][0:i + 1]

            # Loop over the remaining words
            for j in range(1, len(strs)):

                # See if the word shares the prefix
                if strs[j][0:i + 1] != prefix:

                    # Exit the loop if it doesnt match
                    return longest_prefix

            # If if gets through each word, update the longest_prefix string
            longest_prefix = prefix

        return longest_prefix

    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """

        s = s.strip()

        word_list = s.split()[::-1]

        reverse_string = ' '.join(word_list)

        return reverse_string

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
            for j in range(i, len(s), 2 * (numRows - 1)):
                final_string += s[j]
                if (i > 0 and i < numRows - 1 and j + 2 * (numRows - 1) - (2 * i) < len(s)):
                    final_string += s[j + 2 * (numRows - 1) - (2 * i)]

        return final_string

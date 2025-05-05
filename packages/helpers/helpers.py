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
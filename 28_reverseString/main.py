def reverseString(s):
    return "".join(reversed(s))
# time complexity:  O(n), reversed returns a generator starting at the input
# space complexity: O(n) for the new string we build up
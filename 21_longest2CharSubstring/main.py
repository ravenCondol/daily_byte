from collections import defaultdict

def longestSubstring(s):
    window = defaultdict(int)
    longest_seen = 0

    i = 0
    while i < len(s):
        char = s[i]
        if char not in window:
            if len(window) <= 1:
                window[char] += 1
            else:
                substring_length = get_substring_length(window)
                longest_seen = max(substring_length, longest_seen)
                del window[list(window.keys())[0]]
                window[char] += 1
        else:
            window[char] += 1
        i += 1
        if (substring_length := get_substring_length(window)) > longest_seen:
            longest_seen = substring_length
        # print(f"i: {i}, sublength: {substring_length}, window: {window}")
    return longest_seen

# time complexity: O(n)?
# space complexity: O(1!)

def get_substring_length(window):
    return sum(window.values())

example1 = "aba"
example2 = "abca"
example3 = "abccc"
example4 = "abccdcb"

check_expect = lambda i, j: print(f"Expected {i}, got {j}! {'PASSED' if i == j else 'FAILED'}")
check_expect(3, longestSubstring(example1))
check_expect(2, longestSubstring(example2))
check_expect(4, longestSubstring(example3))
check_expect(4, longestSubstring(example4))
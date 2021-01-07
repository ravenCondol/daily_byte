

def stringRepetition(s):
    # repeat 10 times, add repeating substrings to set
    memo = set()
    for i in range(10):
        substring = s[i:]
        if len(substring) < 10:
            break
        stringRepetition_helper(s[i:], memo)
    return list(memo)


def stringRepetition_helper(s, memo):
    i = 0
    while i < len(s) - (len(s) % 10):
        substring = s[i:i+10]
        if isRepeating(substring):
            memo.add(substring)
        i += 10
    return memo


def isRepeating(s):
    # print(f"Checking string: {s}")
    if len(s) < 5:
        return False
    for i, num in enumerate(reversed(s)): # THIS ONE IS SUPPOSED TO BE THE BBBBBBBB
        if s[i] != num:
            break
        if i == 4:
            return True
    if s[0:5] == s[5:10]: # ABCDEABCDE
        return True
    elif isRepeating(s[0:10:2]) and isRepeating(s[1:10:2]): # ABABABABAB
        return True
    return False

check_expect = lambda i, j: print(f"Expected {i}, got {j}! {'PASSED' if i == j else 'FAILED'}")
check_expect(["BBBBBBBBBB"], stringRepetition("BBBBBBBBBBB"))
check_expect(["BBBBBBBBBB","BABABABABA","ABABABABAB"], stringRepetition("ABABABABABABBBBBBBBBBB"))
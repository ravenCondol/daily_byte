// cannot use split() method :(

// time complexity:  O(n)
// space complexity: O(1)
function lengthLastWord(s) {
    let result = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " ") {
            continue;
        } else {
            while (i >= 0 && s[i] !== " ") {
                result += 1;
                i--;
            }
            return result;
        }
    }
    return result;
}

check_expect = (i, j) => console.log(`Expected ${i}, got ${j}! ${i == j ? 'PASSED' : 'FAILED'}`)

check_expect(4, lengthLastWord("The Daily Byte"));
check_expect(4, lengthLastWord("Byte"));
check_expect(0, lengthLastWord(" "));
check_expect(0, lengthLastWord(""));
check_expect(4, lengthLastWord("Byte "));
check_expect(4, lengthLastWord(" Byte"));
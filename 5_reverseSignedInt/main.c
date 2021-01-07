/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>
int main()
{
    printf("%d, reversed: %d\n", 1, reverseIterative(1));
    printf("%d, reversed: %d\n", -1, reverseIterative(-1));
    printf("%d, reversed: %d\n", -123, reverseIterative(-123));
    printf("%d, reversed: %d\n", 123, reverseIterative(123));
    printf("%d, reversed: %d\n", 0, reverseIterative(0));
    
    printf("%d, reversed: %d\n", 1, reverseRecursive(1));
    printf("%d, reversed: %d\n", -1, reverseRecursive(-1));
    printf("%d, reversed: %d\n", -123, reverseRecursive(-123));
    printf("%d, reversed: %d\n", 123, reverseRecursive(123));
    printf("%d, reversed: %d\n", 0, reverseRecursive(0));
}

signed int reverseIterative(signed int input) {
    int negative = input < 0;
    int magnitude = input * (negative ? -1:1);
    signed int ret = 0;
    while (magnitude > 0) {
        int digit = magnitude % 10;
        ret = ret * 10 + digit;
        magnitude = magnitude / 10;
    }
    ret = ret * (negative ? -1:1);
    return ret;
}
// time: O(log_10(input))
// space: O(1)

signed int reverseRecursive(signed int input) {
    int negative = input < 0;
    int magnitude = input * (negative ? -1:1);
    signed int ret = 0;
    ret = reverseRecursive_helper(input, ret) * (negative ? -1:1);
    return ret;
}

signed int reverseRecursive_helper(signed int input,
                                   signed int ret) {
    if (input == 0) {
        return ret;
    }
    int digit = input % 10;
    ret = ret * 10 + digit;
    input = input / 10;
    return reverseRecursive_helper(input, ret);
}
// time: O(log_10(input))
// space: O(log_10(input))

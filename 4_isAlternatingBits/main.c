/******************************************************************************

                            Online C Compiler.
                Code, Compile, Run and Debug C program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <stdio.h>

// int isAlternating(int integer)
// {
//     int isOdd = (integer % 2) == 1;
//     while (integer >= 2) {
//         integer = integer << 1;
//         int nowOdd = 
//     }

//     return 0;
// }
int isAlternating(int input){
    int oddness = input % 2;
    while (input >= 2) {
        input = input / 2;
        int newOddness = input % 2;
        if (newOddness == oddness) {
            return 0;
        }
        oddness = newOddness;
    }
    return 1;
}
// time complexity: O(log(N))
// space complexity: O(1)

int isAlternating_recursive(int input){
    int oddness = input % 2;
    if (input < 2) {
        return 1;
    }
    input = input / 2;
    int newOddness = input % 2;
    if (newOddness == oddness) {
            return 0;
    }
    return isAlternating_recursive(input);
}
// time complexity: O(log(N))
// space complexity: O(log(N))

int main(){
    printf("%s\n", isAlternating(5) ? "true" : "false");
    printf("%s\n", isAlternating(8) ? "true" : "false");
    printf("%s\n", isAlternating(6) ? "true" : "false");

    printf("%s\n", isAlternating_recursive(5) ? "true" : "false");
    printf("%s\n", isAlternating_recursive(8) ? "true" : "false");
    printf("%s\n", isAlternating_recursive(6) ? "true" : "false");
}


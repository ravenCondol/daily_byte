function thirdLargest(nums) {
    function sortDecreasing(prev, next) {
        return prev > next ? -1 : 1;
    }
    const largests = [];
    for (var i = 0; i < nums.length; i++) {
        if (!largests.includes(nums[i])) {
            largests.push(nums[i]);
            largests.sort(sortDecreasing);
            if (largests.length > 3) {
                largests.pop();
            }
        }
    }
    console.log(largests)
    return largests[largests.length === 3 ? 2 : 0];
}

check_expect = (i, j) => console.log(`Expected ${i}, got ${j}! ${i == j ? 'PASSED' : 'FAILED'}`)
check_expect(3, thirdLargest([1, 4, 2, 3, 5]));
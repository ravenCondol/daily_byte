"""
Given an array of integers, nums, each element in the array either appears once or twice. Return a list containing all the numbers that appear twice. 
Note: Each element in nums is between one and nums.length (inclusive). 
"""

# time complexity:  O(n)
# space complexity: O(n)
def takeTwo(nums):
    table = {}
    result = []
    for num in nums:
        if table.get(num, None) is None:
            table[num] = 0
        table[num] += 1
        if table[num] == 2: # entries only show up once or twice
            result.append(num)
    return result

check_expect = lambda i, j: print(f"Expected {i}, got {j}! {'PASSED' if i == j else 'FAILED'}")

example1 = [2, 3, 1, 5, 5]
example2 = [1, 2, 3]
example3 = [7, 2, 2, 3, 3, 4, 4]
example4 = []

check_expect([5], takeTwo(example1))
check_expect([], takeTwo(example2))
check_expect([2, 3, 4], takeTwo(example3))
check_expect([], takeTwo(example4))
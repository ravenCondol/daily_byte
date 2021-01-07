def self_divisible_iterative(N):
    result = 0
    for i in range(1, N):
        if all([int(j) != 0 and i % int(j) == 0 for j in str(i)]):
            result += 1
    return result
# time complexity: O(N log_10 N), because we have to do line 4 N times, and line 4 takes log N
# space complexity: O(log_10 N) because have to convert N to a string

# space could be O(1) if we just divided by 10 instead of converting to string

def self_divisible_recursive_memoization(N):
    memo = {1: 0, 2: 1}
    def _self_divisible_recursive_memoization(N):
        if memo.get(N) != None:
            return memo[N]
        result = _self_divisible_recursive_memoization(N-1)
        if helper(N-1):
            result += 1
        memo[N] = result
        return result
    return _self_divisible_recursive_memoization(N)

def helper(i):
    return all([int(j) != 0 and i % int(j) == 0 for j in str(i)])

# time complexity: O(N log_10 N)
# space complexity: O(N) because we have to keep the memo


check_expect = lambda i, j: print(f"Expected {i}, got {j}! {'PASSED' if i == j else 'FAILED'}")

check_expect(12, self_divisible_iterative(17))
check_expect(8, self_divisible_iterative(9))


check_expect(12, self_divisible_recursive_memoization(17))
check_expect(8, self_divisible_recursive_memoization(9))
check_expect(2, self_divisible_recursive_memoization(3))
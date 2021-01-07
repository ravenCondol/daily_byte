def kthLargest(arr, k):
    arr.sort(reverse=True)
    result = 0
    seenSoFar = set()
    for num in arr:
        if num in seenSoFar:
            continue
        else:
            result += 1
        if result == k:
            return num
    raise RuntimeError("This should not be reached!")

check_expect = lambda i, j: print(f"Expected {i}, got {j}! {'PASSED' if i == j else 'FAILED'}")

check_expect(3, kthLargest([1,2,3], 1))
check_expect(2, kthLargest([9, 2, 1, 7, 3, 2], 5))
check_expect(2, kthLargest([1,2,3], 2))

# time complexity: O(nlogn) due to sorting, better when k BIG. Hers is O(kn), so better when k << n
# space complexity: O(k),                 so worse when k BIG
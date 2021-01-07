def identical_elements(nums, k):
    num_count_map = {}
    for i, num in enumerate(nums):
        j = num_count_map.get(num)
        if j != None:
            if i - j <= k:
                return True
        else:
            num_count_map[num] = i
    return False

# time: O(n)
# space: O(m)
def cake_for_none_iterative(appetites, cakes):
    cakes.sort()
    appetites.sort()
    result = 0
    idx = 0
    for i in range(len(cakes)):
        cake = cakes[i]
        while cake >= appetites[idx]:
            idx += 1
            result += 1
            if idx >= len(appetites):
                return result
    return result        

print(cake_for_none_iterative([3, 2, 1], [1, 2, 3])) # 3
print(cake_for_none_iterative([3, 4, 5], [2, 3])) # 1
print(cake_for_none_iterative([2, 3, 4, 5], [6, 4, 4, 2])) # 4

# time complexity: O(klogk), where k is max(appetites, cakes)
# space complexity: O(1)
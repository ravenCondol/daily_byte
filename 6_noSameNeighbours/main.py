
def hasSameNeighbours(s: str):
    if not isPossible(s):
        return ""
    s_copy = list(sorted(s))
    print(f"""Before swaps!: {"".join(s_copy)}""")
    i = 0
    for letter in s_copy:
        if i == 0:
            i += 1
            continue
        nearby_letters = ["".join(s_copy[i-1:i]),
                          "".join(s_copy[i+1:i+2])]
        print(f"l:{letter}, i:{i}: {nearby_letters}")
        if letter in nearby_letters:
            j = i + 1
            while j < len(s):
                if s_copy[j] != letter:
                    break
                j += 1
            if j >= len(s):
                temp = s_copy[len(s) - 1]
                s_copy[len(s) - 1] = s_copy[0]
                s_copy[0] = temp
                break
            print(f"Swapping {s_copy[i]} with {s_copy[j]}")
            temp = s_copy[i]
            s_copy[i] = s_copy[j]
            s_copy[j] = temp
            i = j
            print(f"""After swap!: {"".join(s_copy)}""")
        else:
            i += 1
    return "".join(s_copy)

def isPossible(s):
    letter_count_map = {}
    for letter in s:
        letter_count_map.setdefault(letter, 0)
        letter_count_map[letter] = letter_count_map[letter]+1
        if letter_count_map[letter] > round(len(s)/2):
            return False
    return True

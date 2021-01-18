"""
Given an undirected graph determine whether it is bipartite. 
Note: A bipartite graph, also called a bigraph, is a set of graph vertices decomposed into two disjoint sets such 
that no two graph vertices within the same set are adjacent
"""

def isBipartite(graph):
    if len(graph) == 0:
        return True
    node__set_num_map = {}
    points_to_look_at_queue = [0]
    while len(points_to_look_at_queue) != 0:
        cur_node = points_to_look_at_queue.pop(0)
        if node__set_num_map.get(cur_node, None) is None:
            node__set_num_map[cur_node] = 0
        cur_set_num = node__set_num_map[cur_node]
        adj_vertices = graph[cur_node]
        for adj_vertice in adj_vertices:
            if node__set_num_map.get(adj_vertice, None) is not None:
                if node__set_num_map[adj_vertice] == cur_set_num:
                    return False
                continue
            else:
                node__set_num_map[adj_vertice] = (node__set_num_map[cur_node] + 1) % 2
            points_to_look_at_queue.append(adj_vertice)
    return True

example1 = [[1, 3], [0, 2], [1, 3], [0, 2]]
example2 = [[1, 3], [0, 2, 3], [1, 3], [0, 2]]

check_expect = lambda i, j: print(f"Expected {i}, got {j}! {'PASSED' if i == j else 'FAILED'}")
check_expect(True, isBipartite(example1))
check_expect(False, isBipartite(example2))
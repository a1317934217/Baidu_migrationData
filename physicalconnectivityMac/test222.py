# This is a sample Python script.

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.

# eval() 去掉字符串最外层的引号
import networkx as nx
import matplotlib.pyplot as plt

g = nx.Graph()
g.add_node(1)
g.add_node(2)
g.add_node(3)
g.add_node(4)
g.add_node(5)
g.add_edge(1, 2)
g.add_edge(1, 4)
g.add_edge(2, 3)
g.add_edge(4, 3)

# g.add_edge(4, 5)

g.add_edge(2, 4)
fig, ax = plt.subplots()
nx.draw(g, ax=ax)
plt.show()
sunmm=0
for i in range(1):
    print(i)

#     for j in range(0,5):
#         try:
#             n = nx.shortest_path_length(g, i, j+1)
#             sunmm=sunmm+n
#             print(j)
#         except nx.NetworkXNoPath:
#             print('No path')
#
# print(sunmm)

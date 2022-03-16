#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2021/11/14 10:39
# @Author  : wuhao
# @Email   : guess?????
# @File    : test2222.py
from math import e
from math import log
from networkx.algorithms.connectivity import minimum_st_node_cut, minimum_node_cut
from networkx.algorithms.flow import shortest_augmenting_path
from networkx.algorithms.flow import shortest_augmenting_path
from networkx.algorithms.connectivity import minimum_st_node_cut

from networkx.algorithms.connectivity import local_edge_connectivity
from networkx.algorithms.connectivity import local_node_connectivity
import networkx as nx
import matplotlib.pyplot as plt
from networkx import laplacian_matrix
from numpy import array
import numpy as np
from networkx.algorithms import approximation as approx
from networkx.algorithms.connectivity import minimum_st_node_cut

G = nx.Graph()
G.add_node("A",desc="A")
G.add_node("B",desc="B")
G.add_node("C",desc="C")
G.add_node("D",desc="D")
G.add_node("E",desc="E")
G.add_edges_from([("A","B") ,("A" ,"D") ,("C" ,"B") ,("C" ,"D"),("E" ,"D"),("B" ,"D")])

# G.add_node("E")
# - `node_size`: 指定节点的尺寸大小(默认是300，单位未知，就是上图中那么大的点)
# - `node_color`: 指定节点的颜色 (默认是红色，可以用字符串简单标识颜色，例如'r'为红色，'b'为绿色等，具体可查看手册)
# - `node_shape`: 节点的形状（默认是圆形，用字符串'o'标识，具体可查看手册）
# - `alpha`: 透明度 (默认是1.0，不透明，0为完全透明)
# - `width`: 边的宽度 (默认为1.0)
# - `edge_color`: 边的颜色(默认为黑色)
# - `style`: 边的样式(默认为实现，可选： solid|dashed|dotted,dashdot)
# - `with_labels`: 节点是否带标签（默认为True）
# - `font_size`: 节点标签字体大小 (默认为12)
# - `font_color`: 节点标签字体颜色（默认为黑色）


# pos = nx.spectral_layout(G)
# nx.draw(G,pos,node_size=200, node_color="red", edge_color="black")
# # mode_labels = nx.get_node_attributes(G,'desc')
# # nx.draw_networkx_nodes(G,pos,label=mode_labels)
# plt.show()
c = sum(range(1, 10))
print(c)








# print(nx.average_shortest_path_length(G))
#
# for C in (G.subgraph(c).copy() for c in nx.connected_components(G)):
#     print(nx.average_shortest_path_length(C))

# print(len(nx.minimum_edge_cut(G)))
# allNodes = np.array(G.nodes())
# length  = dict(nx.all_pairs_dijkstra_path_length(G))
# indexColMoveIn =0.073898088
# indexColMoveOut = 0.07026073488
# valueColThree = (indexColMoveIn + indexColMoveOut) / 2

# print(valueColThree)

# sum = 0
# for i in range(G.number_of_nodes()):
#     for j in range(G.number_of_nodes()):
#         sum =sum  + length[allNodes[i]][allNodes[j]]
# print(sum)

# thresholdValue = np.arange(0, 0.25, 0.01)
# print(thresholdValue)


# allNodes = np.array(G.nodes())
# AEC_LastValue = []
# for i in range(0, G.number_of_nodes()):
#     for j in range(i + 1, G.number_of_nodes()):
#         print(allNodes[i], allNodes[j])
#         AEC_EveryValue = nx.edge_connectivity(G, allNodes[i], allNodes[j])
#         AEC_LastValue.append(AEC_EveryValue)
#
# AEC_LastValue.sort()
#
# print(AEC_LastValue[0])
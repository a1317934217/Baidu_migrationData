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
import  pandas as pd
G = nx.Graph()
G.add_node("A",desc="A")
G.add_node("B",desc="B")
G.add_node("C",desc="C")
G.add_node("D",desc="D")
G.add_node("E",desc="E")
# G.add_node("F",desc="F")
# G.add_node("G",desc="G")
G.add_edges_from([("A","B") ,("A" ,"D") ,("C" ,"B") ,("C" ,"D"),("B" ,"D")])

pos = nx.circular_layout(G)
nx.draw(G,pos)
mode_labels = nx.get_node_attributes(G,'desc')
nx.draw_networkx_nodes(G,pos,label=mode_labels)
plt.show()
number_one = nx.number_connected_components(G)
S = [G.subgraph(c).copy() for c in nx.connected_components(G)]

short_length = nx.global_efficiency(G)
print("最短路径：", short_length)
# print("连通分量：", len(S))
# print("连通分量_one：", number_one)
# for subgraphValue in S:
#     print(len(subgraphValue.nodes()))
# listnodes=[]
# for subgraphValue in S:
#     listnodes.append(len(subgraphValue.nodes()))
# print(listnodes)



# S = [G.subgraph(c).copy() for c in nx.connected_components(G)]
# print(S)









dl = {'city_name': ["陵水黎族自治县",
"三亚",
"乌鲁木齐",
"乌鲁木齐",
"塔城地区",
"塔城地区",
"塔城地区23"
],'city_id_name': ["三亚",
"陵水黎族自治县",
"伊犁哈萨克自治州",
"伊犁哈萨克自治州",
"伊犁哈萨克自治州",
"伊犁哈萨克自治州",
"伊犁哈萨克自治州2"
], 'num': ["0.072079412",
"0.073874935",
"0.063966713",
"0.061093335",
"0.057984026",
"0.052908595",
"0.052908595"
]}

def average_data(df):
    """
    :param df:
    :return:
    """
    if len(df.values) > 1:
        numValue = 0
        for i in df.values:
            numValue += float(i)
        return numValue/2
    else:
        return float(df.values)
# dataframe1 = pd.DataFrame(dl, index=[0,1,2,3,4,5,6])  # 这里注意后加的索引值得跟字典里的值数一样
#
# print(dataframe1)
# print("===========================================")
#
# dataframe4 = dataframe1.groupby(['city_id_name','city_name'])['num'].apply(average_data)
# dataframe4 = dataframe4.reset_index()
# print(dataframe4)
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

# pos = nx.circular_layout(G)
# nx.draw(G,pos)
# mode_labels = nx.get_node_attributes(G,'desc')
# nx.draw_networkx_nodes(G,pos,label=mode_labels)
# plt.show()
#
# S = [G.subgraph(c).copy() for c in nx.connected_components(G)]
# print(S)



# print(nx.closeness_centrality(G))  #贴近中心度
# n=0
# for val in nx.closeness_centrality(G).values():
#     n += val
# print(n)
# print(nx.betweenness_centrality(G))  #介数中心性
# print(nx.eigenvector_centrality(G))  #特征向量中心性
# print(nx.diameter(G))  #直径



# for xxxx in S:
#     print(xxxx)
#     nx.draw_spectral(xxxx)
# degreeValue= G.degree()
# print(degreeValue)
# for i in degreeValue:
#     print(i[1])

# S = [G.subgraph(c).copy() for c in nx.connected_components(G)]
#
# for i in S:
#     print(i)







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
# AEC_LastValue.sort()
# print(AEC_LastValue[0])
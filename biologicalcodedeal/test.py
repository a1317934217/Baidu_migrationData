#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2021/11/26 11:16 下午
# @Author  : wuhao
# @Site    : 
# @File    : test.py
# @Software: PyCharm
from math import sqrt

import networkx as nx
import pandas as pd

# x1 =1054.084961
# x2 =1056.914185
# z1 =1004.233154
# y1 = 962.598572
# y2 =973.142578
# z2 = 1000.299438
# d = sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) + (z1 - z2)*(z1-z2))
# # print(d)
# list = []
# numberRow = pd.read_csv("/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/biologicalnetworks/biologicaldata/[3]BLOCKCNT/(a) BRCRCNT-cp5/three.csv")
# list.append([x1, x2])
# list.append([y1, y2])
#
# print(list)
from matplotlib import pyplot as plt

datarow = pd.read_csv("/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/biologicalnetworks/biologicaldata/[3]BLOCKCNT/(a) BRCRCNT-cp5/nodelist.csv")
G = nx.Graph()
# pos = nx.kamada_kawai_layout(G)
# nx.draw(G, pos, node_size=6, node_color="red", edge_color="black",width=0.5, style="dashdot")
# plt.show()
# G.add_nodes_from([range(23050)])
for i in range(len(datarow)):
    indexColFirst = datarow.loc[i]
    # G.add_node(i+1, desc=i+1)
    G.add_edges_from([(indexColFirst[0], indexColFirst[1])])
# plt.figure(13, figsize=(120, 120))
# pos = nx.random_layout(G)
# nx.draw(G, pos, node_size=20, node_color="b", edge_color="r",width=0.5)
# plt.show()
# print(nx.connected_components(G))

S = [G.subgraph(c).copy() for c in nx.connected_components(G)]
print(len(S))
# Gra = nx.Graph()
#
# Gra.add_edges_from(S[10].edges())
# pos = nx.random_layout(Gra)
# nx.draw(Gra, pos, node_size=20, node_color="red", edge_color="black", width=0.5)
# plt.show()

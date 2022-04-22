# 代表threeAAAAA材料
#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2021/11/26 4:47 下午
# @Author  : wuhao
# @Site    : 
# @File    : dealdata.py
# @Software: PyCharm
import math
from math import e
from math import sqrt
import csv
from math import e

# 定义两点之间是否有边的阈值
import networkx as nx
import numpy as np
import pandas as pd
from matplotlib import pyplot as plt
from networkx import laplacian_matrix
from numpy import array


# 15detnal
def dtunnelvalue():
    hc = 6.626069e-34 / (2 * 3.1416)
    masse = 9.109e-31
    eV = 1.6021764e-19
    dE = 1.0
    dtunnel = (1e+10) * hc / sqrt(8 * masse * dE * eV)
    return 15 * dtunnel


#  读取.xyz文件 并直接生成csv文件的xyz坐标。
def read_one_xyz(filename):
    """
    输入文件路径
    """
    xyz = []
    with open(filename, 'r') as f:
        content = f.read()
        contact = content.split('\n')
        # 创建处理完的数据csv
        # 表头
        field_order_move_in = ["X", "Y", "Z"]
        # 开始写入整理完的数据csv
        with open(filename + "/three.csv", 'w',
                  encoding="utf-8", newline='') as csvfile:
            writer = csv.DictWriter(csvfile, field_order_move_in)
            writer.writeheader()
            for line in contact:
                if line == '' or line.isdigit():
                    continue
                else:
                    atom = line.split()
                    row = {"X": atom[1], "Y": atom[2], "Z": atom[3]}
                    writer.writerow(row)
    return xyz


# 计算三维中两点之间的距离
def distance_finder(x1, y1, z1, x2, y2, z2):
    d = sqrt((float(x1) - float(x2)) * (float(x1) - float(x2)) + (float(y1) - float(y2)) * (float(y1) - float(y2)) + (float(z1) - float(z2)) * (float(z1) - float(z2)))
    # print(d)
    return d



# 根据只包含xyz坐标的csv文件
def drawpicbyXyz(filepath):
    # 直接生成只包含xyz坐标的csv文件
    # read_one_xyz(filepath+"/cp5.xyz")
    field_order_move_in = ["nodeone", 'nodetwo']
    # 判断中介值
    # 14
    dtunnel = dtunnelvalue()
    # 读csv文件
    numberRow = pd.read_csv(filepath + "/three.csv")
    # 返回长度
    lengthCsv = len(numberRow)
    # 画图 无向无权
    G = nx.Graph()
    # 定义存放图的边的列表
    listEdge = []
    with open("/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/biologicalnetworks/biologicaldata/["
              "3]BLOCKCNT/(a) BRCRCNT-cp5/nodelist.csv", 'w', encoding="utf-8", newline='') as csvfile:
        writer = csv.DictWriter(csvfile, field_order_move_in)
        writer.writeheader()
        for row_first in range(0, lengthCsv):
            print("开始第,"+str(row_first)+",行的比较：")
            for row_second in range(row_first + 1, lengthCsv):
                indexColFirst = numberRow.loc[row_first]
                indexColSecond = numberRow.loc[row_second]
                absoluteLength = distance_finder(indexColFirst[0], indexColFirst[1], indexColFirst[2], indexColSecond[0], indexColSecond[1], indexColSecond[2])
                if absoluteLength < dtunnel:
                    # 取到索引
                    indexRow_first = numberRow[(numberRow.X == indexColFirst[0]) & (numberRow.Y == indexColFirst[1]) & (
                            numberRow.Z == indexColFirst[2])].index.tolist()[0]
                    indexRow_seconed = numberRow[(numberRow.X == indexColSecond[0]) & (numberRow.Y == indexColSecond[1]) & (
                            numberRow.Z == indexColSecond[2])].index.tolist()[0]
                    G.add_edges_from([(indexRow_first, indexRow_seconed)])
                    # 将边存放到列表里
                    listEdge.append([indexRow_first, indexRow_seconed])
                    row = {"nodeone": indexRow_first +1 , "nodetwo": indexRow_seconed +1 }
                    writer.writerow(row)
    return listEdge

drawpicbyXyz("/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/biologicalnetworks/biologicaldata/[3]BLOCKCNT/(a) BRCRCNT-cp5")



# datarow = pd.read_csv("/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/biologicalnetworks/biologicaldata/[3]BLOCKCNT/(a) BRCRCNT-cp5/nodelist.csv")


#
# G = nx.Graph()
# for i in range(len(datarow)):
#     indexColFirst = datarow.loc[i]
#     G.add_edges_from([(indexColFirst[0], indexColFirst[1])])
# n = len(G.nodes())
# # print("全球效应：", nx.global_efficiency(G))
# # print("密度：", 2*e/n*(n-1))
#
# # print("密度：", nx.density(G))
# S = [G.subgraph(c).copy() for c in nx.connected_components(G)]
# print("连通分量：", len(S))
# for subgraphValue in S:
#     print(subgraphValue)

# print(S)
# # listnodes=[]
# for subgraphValue in S:
#     print(subgraphValue.edges())

    # listnodes.append(len(subgraphValue.nodes()))

# [20200, 20199]



# Gra = nx.Graph()
# Gra.add_edges_from(S[10].edges())
# pos = nx.spring_layout(G)
# nx.draw(Gra, pos, node_size=20, node_color="red", edge_color="black", width=0.5)
# plt.show()



print("边数：", len(datarow))
degreeValue = G.degree()
avergerDegree = 0
for degreeEvery in degreeValue:
    # print(degreeEvery)
    # print(type(degreeEvery))
    avergerDegree = avergerDegree + degreeEvery[1]
print("平均度为：", avergerDegree/23050)
print("点数题目已给出")
print("平均聚类稀系数：", nx.average_clustering(G))

closeness_centralityValue = nx.closeness_centrality(G)
closeness_centralityValueNum = 0
for i in closeness_centralityValue.values():
    closeness_centralityValueNum += i
print("平均贴近中心度：", closeness_centralityValueNum/n)


eigenvector_centralityValue = nx.eigenvector_centrality(G)
eigenvector_centralityValueNum = 0
for i in eigenvector_centralityValue.values():
    eigenvector_centralityValueNum += i
print("平均特征向量中心性：", eigenvector_centralityValueNum/n)










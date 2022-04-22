from math import e
from math import log

import networkx as nx
import matplotlib.pyplot as plt
from networkx import laplacian_matrix
from numpy import array
import numpy as np
def whetherConnectivity(graph):
    """
    # 判断一个网络是否是连通网络 返回值false或者true
    """
    allNodes = array(graph.nodes())
    connectiveOrNone = "true"
    for i in range(0, graph.number_of_nodes()):
        for j in range(i + 1, graph.number_of_nodes()):
            connectiveOrNone = nx.has_path(graph, allNodes[i], allNodes[j])
            if connectiveOrNone == "false":
                return connectiveOrNone
    return connectiveOrNone
#
# G = nx.Graph()
# G.add_node("A",desc="A")
# G.add_node("B",desc="B")
# G.add_node("C",desc="C")
# G.add_node("D",desc="D")
# G.add_node("E",desc="E")
# G.add_edges_from([("A","B") ,("A" ,"D") ,("C" ,"B") ,("C" ,"D") ,("B" ,"D")])
# # G.add_node("E")
# pos = nx.spring_layout(G)
# nx.draw(G,pos)
# mode_labels = nx.get_node_attributes(G,'desc')
# nx.draw_networkx_nodes(G,pos,label=mode_labels)
# plt.show()


print(whetherConnectivity(G))
print(len(list(nx.all_node_cuts(G))))

allNodes = array(G.nodes())
# length = 0
# for i in range(0, G.number_of_nodes()):
#     for j in range(0, G.number_of_nodes()):
#         print(allNodes[i], allNodes[j])
#         connectiveOrNone = nx.dijkstra_path_length(G, allNodes[i], allNodes[j])
#         num = 0
#         # 去掉是否是邻居
#         if connectiveOrNone == 1:
#             break
#         else:
#             lsitEdgeNumber=[]
#             lengthNode = 0
#
#             for path in map(nx.utils.pairwise, nx.all_simple_paths(G, allNodes[i], allNodes[j])):
#                 print(list(path))
#                 lengthNode = lengthNode + len(list(path))
#                 lsitEdgeNumber.append(list(path))
#
#                 set_lst = set(lsitEdgeNumber)
#                 if len(set_lst) < lengthNode:
#                     print("有重复遍")
#                     lengthNode = len(set(lsitEdgeNumber))
#                 else:
#                     num = num + 1
#         print("有简单路径",num)



#               i
#
#
#
# # print(dict(nx.all_pairs_dijkstra_path_length(G),source=i, target=j))
# # allNodes = array(G.nodes())
#
# # list = ['三亚' '陵水黎族自治县' '海口' '万宁' '保亭黎族苗族自治县']
#
#
# #
# # # 生成邻接矩阵 直接转为稠密矩阵
# # Gadjacency = np.array(nx.adjacency_matrix(G).todense())
# # # 求特征值和特征向量
# # eigenvalue, featurevector = np.linalg.eig(Gadjacency)
# # # 取到所有点
# # nodes = len(G.nodes())
# # # 定义分子
# # molecular = 0
# # for eigenvalueNeed in eigenvalue:
# #     # 开始求自然连通度 ln()里的分子
# #     molecular = molecular + e ** eigenvalueNeed
# # # 自然连通度的值
# # algebraicConnectivityValue = log(molecular/nodes,e)
# #
# # print(algebraicConnectivityValue)
#
#
#
#
#
# def connectivityloss(G):
#     """
#     连通性损失指标计算
#     输入为图
#     """
#     # 定义分母
#     deniminator = 0
#     for i in range(0, G.number_of_nodes()):
#         # 定义Ni
#         numnumber = 0
#         for j in range(0, G.number_of_nodes()):
#             connectiveOrNone = nx.has_path(G, allNodes[i], allNodes[j])
#             if connectiveOrNone:
#                 numnumber += 1
#         twoNodesLoss =1 - (numnumber / len(allNodes))
#         deniminator = deniminator + twoNodesLoss
#     connectivityLoss = deniminator / len(allNodes)
#     return connectivityLoss
#coding=utf-8
'''
language python
Created on 2017年10月24日
@author: NoTomatoTHX
@parameter: table 二维邻接矩阵
'''

#输入邻接矩阵table，输出所有连通子图的平均最短路径长度vaspl(列表格式)
# def GetAverageShortest(table):
#
#     #获取结点个数
#     length = len(table[0])
#
#     #设置最短路径矩阵，lenMax[i][j]为i到j的最短路径值，同样等于lenMax[j][i]
#     lenMax = range(length)
#     for i in range(length):
#         lenMax[i] = range(length)
#         lenMax[i][i] = 0
#         for k in range(i,length):
#             if(table[i][k] == 1):
#                 lenMax[i][k] = 1
#             elif(table[i][k] == '-1'):
#                 lenMax[i][k] = 10000
#
#     #Floyed算法获得最短路径矩阵
#     for k in range(1,length):
#         for i in range(1,length):
#             for j in range(1,length):
#                 if(lenMax[i][k] + lenMax[k][j] < lenMax[i][j]):
#                     lenMax[i][j] = lenMax[i][k] + lenMax[k][j]
#
#     #ssp set_of_start_points 起始结点列表
#     ssp = range(length)
#     #ss set_of_subgraph 连通子图结点列表的列表
#     ss = []
#     while len(ssp)>0:
#         templist = [ssp[0]]
#         for i in ssp:
#             if(lenMax[templist[0]][i] < 100):
#                 templist.append(i)
#         ss.append(templist)
#         ssp = list(set(ssp).difference(set(templist)))
#
#     #value_of_average_shortest_path_length 每个连通子图的平均最短路径长度
#     vaspl = []
#     for subGraphlist in ss:
#         value = 0
#         for i in subGraphlist:
#             for j in subGraphlist[i:]:
#                 value += lenMax[i][j]
#         vaspl.append(value*2.0/(len(subGraphlist)*(len(subGraphlist)-1)))
#     return vaspl




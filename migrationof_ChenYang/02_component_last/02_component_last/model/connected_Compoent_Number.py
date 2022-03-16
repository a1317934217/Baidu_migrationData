import networkx as nx
import pandas as pd
import os
import matplotlib.pyplot as plt
import matplotlib

from matplotlib import font_manager
my_font = font_manager.FontProperties(fname="/Library/Fonts/Songti.ttc")  # 设置汉语字体
matplotlib.rcParams['font.sans-serif'] = ['SimHei']
matplotlib.rcParams['font.family']='sans-serif'
#解决负号'-'显示为方块的问题
matplotlib.rcParams['axes.unicode_minus'] = False

# G = nx.DiGraph()
# G.add_node(1) # 添加节点１
# G.add_edge(2,3) #　添加节点２，３并链接２３节点
# G.add_edge(2,4)
# G.add_edge(3,4)
# # nx.weakly_connected_components
# print(nx.number_weakly_connected_components(G))
# print(nx.number_strongly_connected_components(G))
# # list(nx.weakly_connected_component(G))

def get_all_addr(path):

    files = os.listdir(path)

    # 用set可以很好的去重，在数据处理的时候经常会被使用到。这里做初始化
    datas = set()
    path_list = []
    for file in files:
        # 准确获取一个txt的位置，利用字符串的拼接\
        txt_path = path + file
        path_list.append(txt_path)
        # 读取文件 固定时间的数据
    print("path_list", path_list)  # 所有文件名称列表
    return path_list

def get_addr(addr):
    """获取读取数据地址"""
    return pd.read_csv(addr)

# def get_number_connected_components(single_path):
#     G = nx.DiGraph()
#     GX=nx.Graph()
#     single_path_list = get_addr(single_path)
#     for row in single_path_list.itertuples():
#         data = row[1:3]
#         data_list = list(data)
#         # print(data_list)
#         G.add_edge(data_list[0], data_list[1])
#
#         nx.draw_networkx(GX)
#
#         plt.show()
#     nx.draw_networkx(G)
#
#     plt.show()
#     # number_weakly_connected_component=nx.number_weakly_connected_components(G)
#     number_weakly_connected_component=nx.number_connected_components(GX)
#
#     number_strongly_connected_component=nx.number_strongly_connected_components(G)
#     print(single_path,number_weakly_connected_component,number_strongly_connected_component)
#     return number_weakly_connected_component,number_strongly_connected_component
def get_number_weakly_connected_components(single_path):
    GX = nx.Graph()
    single_path_list = get_addr(single_path)
    for row in single_path_list.itertuples():
        data = row[1:3]
        data_list = list(data)
        # print(data_list)
        GX.add_edge(data_list[0], data_list[1])
    nx.draw_networkx(GX)

    number_weakly_connected_component=nx.number_connected_components(GX)
    print(single_path, number_weakly_connected_component)
    return number_weakly_connected_component



def get_size_of_the_giant_connected_component(single_path):
    G = nx.path_graph(4)
    single_path_list = get_addr(single_path)
    for row in single_path_list.itertuples():
        data = row[1:3]
        data_list = list(data)
        # print(data_list)
        G.add_edge(data_list[0], data_list[1])
    nx.draw_networkx(G)
    # number_weakly_connected_component=nx.number_weakly_connected_components(G)

    number_strongly_connected_component=max(nx.connected_component_subgraphs(G), key=len)
    print(single_path,number_strongly_connected_component)
    return number_strongly_connected_component
all_path = "D:/workspace/python/test/02_新冠/net_data/move_new_single/1/"
all_addr = get_all_addr(all_path)
number_weakly_connected_component_list=[]
number_strongly_connected_component_list=[]
for each_path in all_addr:
    # print(each_path)
    i=get_number_weakly_connected_components(each_path)
    j=get_size_of_the_giant_connected_component(each_path)
    number_weakly_connected_component_list.append(i)
    number_strongly_connected_component_list.append(j)

print(number_weakly_connected_component_list)
print(number_strongly_connected_component_list)
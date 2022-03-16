import networkx as nx
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
import os
import os.path
import re
import sys
import codecs
import math
matplotlib.rcParams['font.sans-serif'] = ['SimHei']
matplotlib.rcParams['font.family']='sans-serif'
#解决负号'-'显示为方块的问题
matplotlib.rcParams['axes.unicode_minus'] = False

def get_addr(addr):
    """获取读取数据地址"""
    return pd.read_csv(addr)

# 这里放着你要操作的文件夹名称
# path = 'D:/workspace/python/test/02_新冠/data/move_out'
path = 'D:/workspace/python/test/02_新冠/data/move_in'

# 把e:\get_key\目录下的文件名全部获取保存在files中
files = os.listdir(path)

# 用set可以很好的去重，在数据处理的时候经常会被使用到。这里做初始化
datas = set()
path_list=[]
for file in files:
    # 准确获取一个txt的位置，利用字符串的拼接\
    # txt_path = 'D:/workspace/python/test/02_新冠/data/move_out/' + file
    txt_path = 'D:/workspace/python/test/02_新冠/data/move_in/' + file

    path_list.append(txt_path)
    # 读取文件 固定时间的数据
print("path_list",path_list)#所有文件名称列表

# print(single_g)# 读取文件名称 固定时间的数据mb vcbvn
# 根据文件名称读取里面的数据
for path_each in path_list:
    a_addr=get_addr(path_each)
    # print(a_addr)
    m=a_addr.groupby(['date'])
    start_id=[]

    for x,y in m:
        # print("x",x,"y",y)
        order = ['city_name', 'citye_id_name', 'value', ]
        y = y[order]
        x=str(x)
        # y.to_csv('D:/workspace/python/test/02_新冠/net_data/move_out/{}.csv'.format(x), index=False,encoding="utf-8-sig")
        y.to_csv('D:/workspace/python/test/02_新冠/net_data/move_in/{}.csv'.format(x), index=False,encoding="utf-8-sig")

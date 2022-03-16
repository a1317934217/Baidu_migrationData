#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2021/11/13 22:37
# @Author  : wuhao
# @Email   : guess?????
# @File    : averagenodeconnectivity.py
# 平均点连通性

import datetime
from networkx.algorithms import approximation as approx
import networkx as nx
import numpy as np
import pandas as pd
# coding=utf-8
from matplotlib import pyplot as plt
from matplotlib.font_manager import FontProperties
from matplotlib.ticker import FuncFormatter, MaxNLocator
from networkx.algorithms.connectivity import local_node_connectivity

# 多重边无向图
# coding=utf-8
# 多重边无向图
listDelCtiyName = ['昌吉回族自治州', '万宁', '昌都地区', '克拉玛依', '吉林市', '海口', '临高', '东方', '宁夏回族自治区', '莱芜', '果洛藏族自治州', '石嘴山', '阿拉善盟', '神农架林区', '五家渠', '三亚', '吴忠', '内蒙古自治区', '定安', '北屯', '白沙黎族自治县', '乌鲁木齐', '拉萨', '阿里地区', '香港', '昌江黎族自治县', '广西壮族自治区', '阿拉尔', '阿克苏地区', '日喀则地区', '甘南藏族自治州', '保亭黎族苗族自治县', '酒泉', '山南地区', '琼海', '海东地区', '可克达拉', '黄南藏族自治州', '图木舒克', '固原', '阿勒泰地区', '西藏自治区', '双河', '澳门', '中卫', '文昌', '迪庆藏族自治州', '陵水黎族自治县', '喀什地区', '大兴安岭地区', '银川', '屯昌', '克孜勒苏柯尔克孜自治州', '儋州', '塔城地区', '那曲地区', '黄山', '玉树藏族自治州', '昆玉', '石河子', '林芝地区', '铜仁地区', '七台河', '吐鲁番地区', '琼中黎族苗族自治县', '博尔塔拉蒙古自治州', '毕节地区', '伊犁哈萨克自治州', '澄迈', '五指山', '乐东黎族自治县', '嘉峪关', '铁门关', '新疆维吾尔自治区', '哈密地区', '浙江', '怒江傈僳族自治州', '和田地区', '巴音郭楞蒙古自治州']


# 根据路径画图
def drawpicture(filePath):
    """
    输入文件路径最后绘制成图G
    """
    G = nx.Graph()
    try:
        dataMiga = pd.read_csv(filePath)
    except Exception as problem:
        print("error根据路径画图出现问题：", problem)
    # 得到每一行的数据
    for row in dataMiga.itertuples():
        city_name = getattr(row, "city_name")
        city_id_name = getattr(row, "city_id_name")
        G.add_edges_from([(city_name, city_id_name)])
    return G


# 获取时间列表
def getdaylist(begin, end):
    """
    获取时间列表
    """
    beginDate = datetime.datetime.strptime(str(begin), "%Y%m%d")
    endDate = datetime.datetime.strptime(str(end), "%Y%m%d")
    dayList = []
    while beginDate <= endDate:
        dayList.append(datetime.datetime.strftime(beginDate, "%Y%m%d"))
        beginDate += datetime.timedelta(days=+1)
    return dayList


# 计算平均点连通性
def averagenodeconnectivity(allFilePath, begindata, enddata):
    """
    返回绘制图表的
    X轴：日期
    Y轴：平均点连通性
    """
    # 时间列表

    listData20_21 = getdaylist(begindata, enddata)
    listAverageNodeConnectivity = []
    listXdata = []
    for i in range(len(listData20_21)):
        # 循环画图
        try:
            filePathInMethon = allFilePath + listData20_21[i] + "physical.csv"
            print(filePathInMethon)
            G = drawpicture(filePathInMethon)
            G.remove_nodes_from(listDelCtiyName)

        except Exception as problem:
            print("((平均点连通性) error打开迁徙文件出问题：", problem)
        else:
            # allNodes = np.array(G.nodes())
            # numberNodes = G.number_of_nodes()
            # ANC_LastValue = 0
            # for K in range(numberNodes):
            #     for j in range(K + 1, numberNodes):
                    # print(allNodes[i], allNodes[j])
                    # ANC_EveryValue = approx.local_node_connectivity(G, allNodes[K], allNodes[j])
                    # ANC_LastValue = ANC_LastValue + ANC_EveryValue
            listXdata.append(listData20_21[i])
            listAverageNodeConnectivity.append((nx.average_node_connectivity(G)))
    print("(平均点连通性)X轴数值： ", listXdata)
    print("(平均点连通性)Y轴数值： ", listAverageNodeConnectivity)

    # 画图 设置X轴显示效果
    fig = plt.figure()
    ax = fig.add_subplot(111)
    # 为了设置x轴时间的显示
    def format_fn(tick_val, tick_pos):
        if int(tick_val) in range(len(listXdata)):
            return listXdata[int(tick_val)]
        else:
            return ''
    ax.xaxis.set_major_formatter(FuncFormatter(format_fn))
    ax.xaxis.set_major_locator(MaxNLocator(integer=True))

    # plt.ylim((-5, 40))
    # 横坐标每个值旋转90度
    # plt.xticks(rotation=90)
    # 设置Mac上的字体
    font = FontProperties(fname='/Library/Fonts/Arial Unicode.ttf')
    # 坐标轴ticks的字体大小
    plt.tick_params(labelsize=5)
    plt.xlabel('日期', FontProperties=font)
    plt.ylabel('平均点连通性', FontProperties=font)
    plt.title('百度迁徙2020-2021平均点连通性折线图', FontProperties=font)
    ax.plot(listXdata, listAverageNodeConnectivity)
    plt.show()


# 直接调用函数画图
averagenodeconnectivity("/Users/wuhao/百度迁徙数据爬取/物理联通指标所需数据/", 20200101, 20211028)



#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2021/11/14 19:31
# @Author  : wuhao
# @Email   : guess?????
# @File    : edgeconnectivity.py
# 边连通性

import datetime

import networkx as nx
import numpy as np
import pandas as pd
# coding=utf-8
from matplotlib import pyplot as plt
from matplotlib.font_manager import FontProperties
from matplotlib.ticker import FuncFormatter, MaxNLocator
# 根据路径画图
from numpy import array

listDelCtiyName = ['昌吉回族自治州', '万宁', '昌都地区', '克拉玛依', '吉林市', '海口', '临高', '东方', '宁夏回族自治区', '莱芜', '果洛藏族自治州', '石嘴山', '阿拉善盟', '神农架林区', '五家渠', '三亚', '吴忠', '内蒙古自治区', '定安', '北屯', '白沙黎族自治县', '乌鲁木齐', '拉萨', '阿里地区', '香港', '昌江黎族自治县', '广西壮族自治区', '阿拉尔', '阿克苏地区', '日喀则地区', '甘南藏族自治州', '保亭黎族苗族自治县', '酒泉', '山南地区', '琼海', '海东地区', '可克达拉', '黄南藏族自治州', '图木舒克', '固原', '阿勒泰地区', '西藏自治区', '双河', '澳门', '中卫', '文昌', '迪庆藏族自治州', '陵水黎族自治县', '喀什地区', '大兴安岭地区', '银川', '屯昌', '克孜勒苏柯尔克孜自治州', '儋州', '塔城地区', '那曲地区', '黄山', '玉树藏族自治州', '昆玉', '石河子', '林芝地区', '铜仁地区', '七台河', '吐鲁番地区', '琼中黎族苗族自治县', '博尔塔拉蒙古自治州', '毕节地区', '伊犁哈萨克自治州', '澄迈', '五指山', '乐东黎族自治县', '嘉峪关', '铁门关', '新疆维吾尔自治区', '哈密地区', '浙江', '怒江傈僳族自治州', '和田地区', '巴音郭楞蒙古自治州']

# 多重边无向图
# coding=utf-8
# 多重边无向图


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


def whetherConnectivity(graph):
    """
    # 判断一个网络是否是连通网络 返回值false或者true
    """
    allNodes = array(graph.nodes())
    connectiveOrNone = "true"
    for i in range(0, graph.number_of_nodes()):
        for j in range(i + 1, graph.number_of_nodes()):
            connectiveOrNone = nx.has_path(graph, allNodes[i], allNodes[j])
            if connectiveOrNone == "False":
                return connectiveOrNone
    return connectiveOrNone


# 计算边连通性
def edgecconnectivity(allFilePath, begindata, enddata):
    """
    返回绘制图表的
    X轴：日期
    Y轴：边连通性
    """

    # 时间列表
    global G
    listData20_21 = getdaylist(begindata, enddata)
    listEdgeConnectivityEveryDay = []
    # Y轴数值
    listEdgeConnectivity = []
    listXdata = []
    for i in range(len(listData20_21)):
        # 循环画图
        try:
            filePathInMethon = allFilePath + listData20_21[i] + "physical.csv"
            print(filePathInMethon)
            G = drawpicture(filePathInMethon)
            G.remove_nodes_from(listDelCtiyName)
        except Exception as problem:
            print("(边连通性) error打开迁徙文件出问题：", problem)
        else:
            allNodes = np.array(G.nodes())
            # for k in range(0, G.number_of_nodes()):
            #     # 看一半时间，节约运算时间
            #     for j in range(k + 1, G.number_of_nodes()):
            #         # print(allNodes[i], allNodes[j])
            listXdata.append(listData20_21[i])
            listEdgeConnectivityEveryDay.append(nx.edge_connectivity(G))
        # print(listData20_21[i], "这天的边连通性列表为：", listEdgeConnectivityEveryDay)
            # 排序 为了取第一个值
            # listEdgeConnectivityEveryDay.sort()
            # Y轴最终的数值
            # listEdgeConnectivity.append(listEdgeConnectivityEveryDay[0])
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

    # 设置Mac上的字体（Mac上跑数据的时候）
    font = FontProperties(fname='/Library/Fonts/Arial Unicode.ttf')
    # win（大壳子上跑数据的字体）
    # font = FontProperties(fname='C:\\Windows\\WinSxS\\amd64_microsoft-windows-font-truetype-arial_31bf3856ad364e35_10.0.19041.1_none_28747db34cb89a67\\arial.ttf')
    # 坐标轴ticks的字体大小
    plt.tick_params(labelsize=5)
    plt.xlabel('日期', FontProperties=font)
    plt.ylabel('边连通性数值', FontProperties=font)
    plt.title('百度迁徙2020-2021边连通性折线图', FontProperties=font)
    ax.plot(listXdata, listEdgeConnectivityEveryDay)
    plt.show()


# Mac 上跑数据的地址
edgecconnectivity("/Users/wuhao/百度迁徙数据爬取/物理联通指标所需数据/", 20200101, 20211028)
# win大壳子上跑数据的地址
# edgecconnectivity("F:\\01大连民族\\百度迁徙爬取和数据\\百度迁徙数据-final\\in\\", 20200101, 20211028)





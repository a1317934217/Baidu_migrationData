#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2022/3/19 15:09
# @Author  : wuhao
# @Email   : guess?????
# @File    : makebar.py
# -*- coding: utf-8 -*-
# import matplotlib.pyplot as plt
import csv
from matplotlib.font_manager import FontProperties

import matplotlib
from matplotlib import pyplot as plt
from collections import Counter
import os
import pandas as pd
#
# filepath_front ="D:\\04python project\\01-爬虫-爬取百度迁徙数据\\physicalconnecitvity\\indicators\\data\\"
filepath_front ="/Users/wuhao/PycharmProjects/Baidu_migrationData/physicalconnecitvity/indicators/data/"
filelist =['0101-0104data.csv', '0104-0106data.csv', '0106-0111data.csv', '0106-0116data.csv', '0111-0116data.csv', '0116-0121data.csv', '0204-0207data.csv', '0207-0209data.csv', '0209-0212data.csv', '0212-0213data.csv', '0221-0222data.csv', '0222-0224data.csv', '0224-0227data.csv', '0227-0307data.csv', '0307-0315data.csv', '0315-0316data.csv']
# with open(filepath_front + "Counterdata.csv", 'r', encoding='utf-8')as f:
#     read = csv.reader(f)
#     for index, info in enumerate(read):

# 将全局的字体设置为黑体
# matplotlib.rcParams['font.family'] = '/Library/Fonts/Arial Unicode.ttf'

# 设置Mac上的字体（Mac上跑数据的时候）
font = FontProperties(fname='/Library/Fonts/Arial Unicode.ttf')




data0101_0104data= [('济南', 4), ('烟台', 2), ('石家庄', 6), ('唐山', 4), ('武汉', 10), ('十堰', 1), ('深圳', 8), ('上海', 15), ('沈阳', 2), ('长春', 5), ('重庆', 7), ('湘西土家族苗族自治州', 3), ('长沙', 6), ('北京', 15)]
data0104_0106data= [('榆林', 1), ('吕梁', 2), ('鄂尔多斯', 2), ('巴彦淖尔', 2), ('长治', 3), ('晋中', 1), ('张家口', 4), ('大同', 2), ('菏泽', 6), ('青岛', 1), ('乌兰察布', 4), ('包头', 1), ('忻州', 2), ('朔州', 1)]
data0106_0111data= [('乌兰察布', 3), ('包头', 2), ('鄂尔多斯', 1), ('巴彦淖尔', 2), ('榆林', 1), ('吕梁', 1), ('保定', 1), ('邯郸', 2), ('张家口', 4), ('大同', 2), ('佛山', 1), ('茂名', 1), ('济南', 3), ('日照', 2)]
data0111_0116data= [('清远', 2), ('东莞', 3), ('深圳', 8), ('湛江', 2), ('恩施土家族苗族自治州', 1), ('武汉', 5), ('茂名', 2), ('河源', 2), ('广州', 2), ('南宁', 1), ('苏州', 2), ('宿迁', 1), ('佛山', 2), ('厦门', 2)]
data0116_0121data= [('阜阳', 1), ('上海', 1), ('重庆', 8), ('深圳', 2), ('宿迁', 3), ('苏州', 1), ('恩施土家族苗族自治州', 1), ('武汉', 4), ('龙岩', 2), ('泉州', 1), ('自贡', 2), ('平凉', 2), ('兰州', 1), ('蚌埠', 2)]
data0204_0207data= [('上海', 1), ('南通', 2), ('张家口', 1), ('北京', 1), ('深圳', 2), ('梅州', 1), ('绍兴', 1), ('杭州', 2), ('成都', 2), ('自贡', 1), ('广元', 1), ('佛山', 1), ('肇庆', 1), ('南宁', 4)]

data0207_0209data= [('淄博', 2), ('滨州', 1), ('株洲', 2), ('湘潭', 2), ('衡阳', 2), ('郴州', 1), ('广州', 1), ('中山', 1), ('益阳', 2), ('常德', 1), ('岳阳', 1), ('南通', 1), ('盐城', 1), ('烟台', 1)]
data0209_0212data= [('广州', 3), ('湛江', 1), ('南充', 1), ('成都', 4), ('遂宁', 1), ('惠州', 1), ('乐山', 1), ('重庆', 4), ('达州', 2), ('宜春', 1), ('南昌', 1), ('株洲', 2), ('湘潭', 2), ('中山', 1)]
data0212_0213data= [('绍兴', 1), ('杭州', 1), ('宜春', 1), ('南昌', 1), ('南通', 1), ('盐城', 1), ('唐山', 1), ('秦皇岛', 1), ('淄博', 1), ('潍坊', 1), ('永州', 1), ('郴州', 1)]
data0221_0222data= [('杭州', 6), ('绍兴', 1), ('长春', 3), ('四平', 1), ('嘉兴', 1), ('郑州', 5), ('开封', 2), ('湖州', 1), ('镇江', 1), ('南京', 3), ('松原', 1), ('周口', 4), ('太原', 3), ('晋中', 1)]
data0222_0224data= [('苏州', 6), ('上海', 3), ('无锡', 2), ('长沙', 1), ('邵阳', 2), ('盐城', 1), ('西安', 2), ('宝鸡', 2), ('郑州', 2), ('商丘', 1), ('南通', 1), ('成都', 4), ('巴中', 1), ('娄底', 1)]
data0224_0227data= [('鞍山', 2), ('营口', 2), ('泉州', 1), ('三明', 1), ('周口', 3), ('开封', 1), ('广州', 1), ('珠海', 1), ('漯河', 2), ('邯郸', 1), ('石家庄', 1), ('洛阳', 2), ('三门峡', 1), ('宁波', 1)]

data0227_0307data= [('邯郸', 2), ('石家庄', 1), ('厦门', 2), ('龙岩', 2), ('济南', 3), ('菏泽', 3), ('郑州', 3), ('驻马店', 5), ('西安', 3), ('安康', 1), ('济宁', 2), ('保定', 3), ('廊坊', 2), ('茂名', 2)]
data0307_0315data= [('四平', 2), ('长春', 4), ('潍坊', 3), ('青岛', 5), ('郑州', 3), ('新乡', 4), ('济南', 3), ('泰安', 3), ('烟台', 1), ('嘉兴', 3), ('上海', 6), ('吉林', 1), ('松原', 1), ('临沂', 9)]
data0315_0316data= [('上海', 4), ('常州', 1), ('徐州', 2), ('南京', 3), ('南昌', 1), ('吉安', 1), ('泰州', 1), ('大庆', 1), ('哈尔滨', 2), ('北海', 1), ('南宁', 1), ('广州', 1), ('河源', 1), ('沈阳', 2)]




list_name_Y = [data0101_0104data,data0104_0106data,data0106_0111data,data0111_0116data,data0116_0121data,data0204_0207data,
               data0207_0209data,data0209_0212data,data0212_0213data,data0221_0222data,data0222_0224data,data0224_0227data,
               data0227_0307data,data0307_0315data,data0315_0316data]

for i  in list_name_Y:
    list_cityname = []
    list_cityvalue=[]
    for j in i:
        list_cityname.append(j[0])
        list_cityvalue.append(j[1])
    plt.bar(list_cityname, list_cityvalue,  tick_label = list_cityname, fc='r') #label='边数量'
    plt.xticks(list_cityname, rotation=45, fontproperties=font)
    plt.ylabel("数值", fontproperties=font)
    # plt.title(fontproperties=font)


    plt.legend()
    plt.show()


# from matplotlib.font_manager import FontManager
# fm = FontManager()
# mat_fonts = set(f.name for f in fm.ttflist)
# print(mat_fonts)









# print(os.listdir("D:\\04python project\\01-爬虫-爬取百度迁徙数据\\physicalconnecitvity\\indicators\\data"))


# 输出前十四个城市的增加或减少的 连边
# for file_name in filelist:
#     list_value =[]
#     with open(filepath_front + file_name, 'r', encoding='utf-8')as f:
#         read = csv.reader(f)
#         for index, info in enumerate(read):
#             if index != 0:  # 这里加判断
#                 # print(info[:2])
#                 list_value.append(info[0])
#                 list_value.append(info[1])
#         counter_value = Counter(list_value)
#         print(counter_value)
#         print(file_name,list(dict(counter_value).items())[:14])


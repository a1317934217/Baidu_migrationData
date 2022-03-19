#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2022/3/19 15:09
# @Author  : wuhao
# @Email   : guess?????
# @File    : makebar.py
# -*- coding: utf-8 -*-
# import matplotlib.pyplot as plt
import csv
from matplotlib import pyplot as plt
from collections import Counter
import os
import pandas as pd
#
filepath_front ="D:\\04python project\\01-爬虫-爬取百度迁徙数据\\physicalconnecitvity\\indicators\\data\\"
filelist =['0101-0104data.csv', '0104-0106data.csv', '0106-0111data.csv', '0106-0116data.csv', '0111-0116data.csv', '0116-0121data.csv', '0204-0207data.csv', '0207-0209data.csv', '0209-0212data.csv', '0212-0213data.csv', '0221-0222data.csv', '0222-0224data.csv', '0224-0227data.csv', '0227-0307data.csv', '0307-0315data.csv', '0315-0316data.csv']
with open(filepath_front + "Counterdata.csv", 'r', encoding='utf-8')as f:
    read = csv.reader(f)
    for index, info in enumerate(read):
        print(info[0])
        print(info[1])
        list_cityname=[]
        list_cityvalue=[]
        # for i in info[1]:
        #     list_cityname.append(i[0])
        #     list_cityvalue.append(i[1])
        # print("list_cityname",list_cityname)
        # print("list_cityvalue",list_cityvalue)
        # plt.bar(list_cityname, list_cityvalue,  fc='r')
        # plt.legend()
        # plt.show()

# aaaa = ["0101-0104data.csv",[('济南', 4), ('烟台', 2), ('石家庄', 6), ('唐山', 4)]]
# print(aaaa[1])
# for i in aaaa[1]:
#     print(i[0])
#     print(i[1])



# name_list = ['Monday', 'Tuesday', 'Friday', 'Sunday']
# num_list = [1.5, 0.6, 7.8, 6]
# num_list1 = [1, 2, 3, 1]
#
# x = list(range(len(num_list)))
#
#
# plt.bar(x, num_list1,  label='girl', tick_label=name_list, fc='r')
# plt.legend()
# plt.show()

# "0101-0104data.csv",


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


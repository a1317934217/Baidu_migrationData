#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2022/3/19 15:09
# @Author  : wuhao
# @Email   : guess?????
# @File    : makebar.py
# -*- coding: utf-8 -*-
# import matplotlib.pyplot as plt
import csv
from collections import Counter
import os
import pandas as pd
#
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


filepath_front ="D:\\04python project\\01-爬虫-爬取百度迁徙数据\\physicalconnecitvity\\indicators\\data\\"
filelist =['0101-0104data.csv', '0104-0106data.csv', '0106-0111data.csv', '0106-0116data.csv', '0111-0116data.csv', '0116-0121data.csv', '0204-0207data.csv', '0207-0209data.csv', '0209-0212data.csv', '0212-0213data.csv', '0221-0222data.csv', '0222-0224data.csv', '0224-0227data.csv', '0227-0307data.csv', '0307-0315data.csv', '0315-0316data.csv']
with open(filepath_front + "Counterdata.csv", 'r', encoding='utf-8')as f:
    for file_name in filelist:
        list_value =[]
        field_order_move_in = ["时间","数值"]
        with open(filepath_front + "0101-0104data.csv", 'r', encoding='utf-8')as csvfile:
            writer = csv.DictWriter(csvfile,field_order_move_in)
            read = csv.reader(f)
            for index, info in enumerate(read):
                if index != 0:  # 这里加判断
                    # print(info[:2])
                    list_value.append(info[0])
                    list_value.append(info[1])
            row = {"时间": file_name,"数值":list(dict(list_value).items())[:14]}
            writer.writerow(row)



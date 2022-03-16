#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2021/12/12 3:13 下午
# @Author  : wuhao
# @Site    : 
# @File    : maptestlocation.py
# @Software: PyCharm
import csv

import numpy as np
import pandas as pd


fileNameout = "/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/"

def trans(path):

    # train_sample_metadata = pd.read_json(path + 'city_coordinates.json').T
    # train_sample_metadata.to_csv(path + 'city_loc_simple.csv')

    train_sample_metadata = pd.read_json(path + 'nameMap.json').T
    train_sample_metadata.to_csv(path + 'city_loc_simple1.csv')
    # print(train_sample_metadata.head())

    # jsonData = codecs.open(path + 'city_coordinates.json', 'r', 'utf-8')
    # csvfile = open(path + '.csv', 'w')  # 此处这样写会导致写出来的文件会有空行
    # csvfile = open(path + '.csv', 'wb')  # python2下
    # csvfile = open(path + 'city_loc_simple.csv', 'w',encoding="utf-8", newline='')  # python3下
    # writer = csv.writer(csvfile, delimiter=',')
    # keys = ['city_name', 'longitude', 'latitude']
    # writer.writerow(keys)
    # print(jsonData)
    # for line in jsonData:
    #     print(line)
    #     dic = json.loads(line)
    #     x = dic['coordinates'][0]
    #     y = dic['coordinates'][1]
    #     writer.writerow([dic['name'],dic['category'],dic['price'],dic['count'],dic['type'],dic['address'],dic['link'],x,y])
    #
    # jsonData.close()
    # csvfile.close()


def transformat(filepath):
    field_order_move_in = ["城市名称", 'longitude', 'latitude']
    with open("/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/physicalconnectivity/data/finall_city_loc"
              ".csv", 'w', encoding="utf-8", newline='') as csvfile:
        writer = csv.DictWriter(csvfile, field_order_move_in)
        writer.writeheader()
        cityInfoRow = pd.read_csv(filepath + "locationJR.csv")
        lengthCsv = len(cityInfoRow)
        for locNumber in range(lengthCsv):
            # 第几行
            indexColFirst = cityInfoRow.loc[locNumber]
            print(indexColFirst)
            print(len(indexColFirst))
            # 循环次数
            forNumber = int(len(indexColFirst)/3)
            for locEveryNum in range(forNumber-2):
                cityName = indexColFirst["children/"+str(locEveryNum)+"/name"]
                longitudeValue = indexColFirst["children/"+str(locEveryNum)+"/log"]
                latitudeValue = indexColFirst["children/"+str(locEveryNum)+"/lat"]
                row = {"城市名称": cityName, "longitude": longitudeValue, "latitude": latitudeValue}
                writer.writerow(row)

# transformat("/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/physicalconnectivity/data/")

# 5849


# 两个csv取城市的交集，输出新的csv
def findcitynamebyTwocsv(fileName1, fileName2, outfileName):
    f1=pd.read_csv(fileName1,encoding='utf-8') #多的
    f2=pd.read_csv(fileName2, encoding='utf-8') #少的
    # 根据列比较
    index=f1['城市名称'].isin(f2['name'])
    outfile=f1[index]
    outfile.to_csv(outfileName, index=False) #多的根据少的筛选完保存的结果

# findcitynamebyTwocsv("/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/physicalconnectivity/data/finall_city_loc.csv","/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/qianxi/ChinaAreaCodes.csv","/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/physicalconnectivity/data/finall_city_loc_screening.csv")


# 两个城市寻找差集
def find_diffset_bycsv(fileName1, fileName2,outfileName):
    df1 = pd.read_csv(fileName1, encoding='utf-8')
    df2 = pd.read_csv(fileName2, encoding='utf-8')

    df1=df1.append(df2)
    df1=df1.drop_duplicates(subset=['name'],keep=False)
    df1.to_csv(outfileName, index=False)  # 多的根据少的筛选完保存的结果

find_diffset_bycsv("/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/qianxi/ChinaAreaCodes.csv",fileNameout+"physicalconnectivity/data/finall_city_loc_screening.csv",fileNameout+"physicalconnectivity/data/diffset.csv")



# cityInfoRow = pd.read_csv("/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/physicalconnectivity/data"
#                           "/finall_city_loc.csv")
# index=cityInfoRow['城市名称'].notnull()
#
# df=cityInfoRow[index]
#
# df.to_csv("/Users/wuhao/PycharmProjects/BaiduMove/百度迁徙数据/01-爬虫-爬取百度迁徙数据/physicalconnectivity/data"
#                           "/finall_city_location.csv", index=0)


# cityInfoRow.replace("nan", np.nan, inplace=True)
# # print(type(cityInfoRow))
# aresult.dropna(axis=0, how='any', inplace=True)

#
# print(cityInfoRow[pd.isna(cityInfoRow).T.any()])
#
#
# cityInfoRow.dropna(axis=0, how='all', inplace=True)

# df1=pd.DataFrame([[1,2,3],["NaN","NaN",2],["NaN","NaN","NaN"],[8,8,"NaN"]])
# print(df1)

#
# df1.dropna()
# print(df1)




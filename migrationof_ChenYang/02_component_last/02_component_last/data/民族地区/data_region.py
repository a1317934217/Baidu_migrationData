# coding:utf_8
import pandas as pd
import os
yuzhi_num=0
path = '/Users/yc/python/finalTest/源数据处理/民族地区/百度迁徙数据/in'
# 把e:/get_key/目录下的文件名全部获取保存在files中
files = os.listdir(path)
# 用set可以很好的去重，在数据处理的时候经常会被使用到。这里做初始化
datas = set()
path_list = []
# print(files)
dd = pd.read_excel('./民族表.xlsx')
city = list(dd['citye_id_name'])
print(city)
for file in files:
    # print(file)
    # 准确获取一个txt的位置，利用字符的拼接/
    txt_path = '/Users/yc/python/finalTest/源数据处理/民族地区/百度迁徙数据/in/' + file
    df = pd.read_csv(txt_path,names=['city_name','city_id_name','value'],header=0)
    # print(df['value'])非
    # df = df[[(x in city) for x in df['city_name']]]#流出
    df = df[[(x in city) for x in df['city_id_name']]]#  流入
    df2 = df[[(x > yuzhi_num) for x in df['value']]]

    df2.to_csv('/Users/yc/python/finalTest/源数据处理/民族地区/民族地区原始数据/in/' + file,
               index=None, encoding="utf_8_sig")




# df1 = df1[df1['citye_id_name'].isin(city)]
# df = df[df['citye_id_name'].isin(city)]
# df2 = df2[df2['citye_id_name'].isin(city)]
# df.head()
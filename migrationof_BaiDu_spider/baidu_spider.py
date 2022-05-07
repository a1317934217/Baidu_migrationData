#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2022/1/13 14:09
# @Author  : wuhao
# @Email   : guess?????
# @File    : baidu_spider.py
# coding:utf-8
import csv
import datetime
import json


import re

import requests

#json解析
from tqdm import tqdm


def loads_jsonp(_jsonp):
    try:
        return json.loads(re.match(".*?({.*}).*", _jsonp, re.S).group(1))
    except:
        raise ValueError('Invalid Input')

#  获取时间列表
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


# 城市迁徙比例数据保存路径 in
migration_proportion_in = 'F:\\01大连民族\\百度迁徙爬取和数据\\百度迁徙数据更新_经常运行\\迁徙比例\\in\\'
# 城市迁徙比例数据保存路径 out
migration_proportion_out = 'F:\\01大连民族\\百度迁徙爬取和数据\百度迁徙数据更新_经常运行\迁徙比例\\out\\'

# 城市迁徙指数数据保存路径 in
migration_index_in = 'F:\\01大连民族\\百度迁徙爬取和数据\百度迁徙数据更新_经常运行\迁徙指数\\in\\'
# 城市迁徙指数数据保存路径 out
migration_index_out = 'F:\\01大连民族\\百度迁徙爬取和数据\百度迁徙数据更新_经常运行\迁徙指数\\out\\'


# 爬取迁徙指数 文件
def get_city_migration_index(file_save_location,task_type):
    """
    爬取迁徙指数 文件
    :param file_save_location:  文件保存位置
    :param task_type:  迁徙类型 in or out
    :return:
    """
    global text
    file = csv.reader(open('ChinaAreaCodes.csv',encoding="utf-8"))
    for row in tqdm(file,desc="迁徙指数进度条和类型："+task_type,total=375):
        if row[0] != 'code':
            code = row[0]
            name = row[1]
            try:
                # url = "https://huiyan.baidu.com/migration/historycurve.jsonp?dt=city&id=110000&type=move_in"
                url = 'https://huiyan.baidu.com/migration/historycurve.jsonp?dt=city&id={}&type={}'.format(code, task_type)
                try:
                    # https://huiyan.baidu.com/migration/historycurve.jsonp?dt=city&id=110000&type=move_in
                    text = loads_jsonp(requests.get(url).text)
                except:
                    print(name+"：no data")
                # print(text)
                data = text['data']['list']
                #生成excel的头部
                header = ['date', 'index']
                with open(file_save_location + '{}_{}_{}.csv'.format(code, name, task_type), "w+", newline="",encoding='utf_8_sig') as csv_file:
                    writer=csv.writer(csv_file)
                    writer.writerow(header)
                    for key, values in data.items():
                        row = [key, values]
                        writer.writerow(row)
                # print(code + 'is OK')
            except Exception as why:
                print(why)
                print(code + ' No Data')
# 爬取城市迁徙比例 文件
def get_city_migration_proportion(file_save_location,task_type,beginTime,endTime):
    """
    爬取城市迁徙比例 文件
    :param file_save_location: 文件保存路径
    :param task_type:
    :param beginTime:
    :param endTime:
    :return:
    """

    # 获得时间列表
    timeList = getdaylist(beginTime,endTime)
    file = csv.reader(open('ChinaAreaCodes.csv',encoding="utf-8"))
    for row in tqdm(file,desc="迁徙比例进度条和类型"+task_type,total=375):
        if row[0] != 'code':
            code = row[0]
            name = row[1]
            try:
                for t in timeList:
                    # 迁徙比例
                    # url = 'https://huiyan.baidu.com/migration/cityrank.jsonp?dt=city&id=110000&type=move_in&date=20211029'
                    url = 'https://huiyan.baidu.com/migration/cityrank.jsonp?dt=city&id={}&type={}&date={}'.format(code,task_type,t)
                    try:
                        # requests.adapters.DEFAULT_RETRIES = 5
                        data = loads_jsonp(requests.get(url).text)['data']["list"]
                        header = ['city_name', 'value']
                        with open(file_save_location + '{}_{}_{}_{}.csv'.format(code,name, task_type, t,encoding="utf_8_sig"), "w+",
                                  newline="") as csv_file:
                            writer = csv.writer(csv_file)
                            writer.writerow(header)
                            for text_val in data:
                                row = [text_val['city_name'],text_val['value']/100]
                                writer.writerow(row)
                    except Exception as reason:
                        print(code,name,t,reason,"no data")
            except Exception as why:
                print(why)
                print(code + ' No Data')



# 两个迁徙指数 爬取
# get_city_migration_index(migration_index_in,"move_in")
# get_city_migration_index(migration_index_out,"move_out")

# 两个迁徙比例 爬取
get_city_migration_proportion(migration_proportion_in,"move_in",20220210,20220416)
get_city_migration_proportion(migration_proportion_out,"move_out",20220210,20220416)









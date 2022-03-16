import datetime
'''
Author: your name
Date: 2021-03-17 10:37:29
LastEditTime: 2021-03-17 10:38:39
LastEditors: Please set LastEditors
Description: In User Settings Edit
FilePath: \Baidu_migration_crawler\test.py
'''
# import pymongo
# connect_str = "mongodb://localhost"
# client = pymongo.MongoClient(connect_str)
# print(client)
# print(client.qianxi.province_flow)

def getdaylist(begin,end):
    beginDate = datetime.datetime.strptime(str(begin), "%Y%m%d")
    endDate = datetime.datetime.strptime(str(end), "%Y%m%d")
    dayList = []
    while beginDate <= endDate:
        dayList.append(datetime.datetime.strftime(beginDate, "%Y%m%d"))
        beginDate += datetime.timedelta(days=+1)
    return dayList

print(getdaylist(20200901,20201026))
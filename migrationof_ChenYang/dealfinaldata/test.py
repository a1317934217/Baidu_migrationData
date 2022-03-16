import datetime
import pandas as pd
import csv
import datetime
from collections import Counter

baiduMigrationIndex = pd.read_csv("F:\\01大连民族\\百度迁徙爬取和数据\\百度迁徙数据-final\\in\\20200101.csv")
# 示例：F:\01大连民族\百度迁徙爬取和数据\21年7月1日开始的前夕数据处理\百度迁徙数据爬取\迁徙比例\in\110000_北京_move_in_20210701.csv
# baiduMigrationProportion = pd.read_csv("F:\\01大连民族\百度迁徙爬取和数据\\21年7月1日开始的前夕数据处理\百度迁徙数据爬取\迁徙比例\in\\110000_北京_move_in_20210701.csv")
# pddata = pd.read_csv("20210701.csv")
# citynum =  pddata['city_name']
# result = Counter(citynum)
# print(result)
def getdaylist(beginDate,endDate):
    beginDate = datetime.datetime.strptime(str(beginDate), "%Y%m%d")
    endDate = datetime.datetime.strptime(str(endDate), "%Y%m%d")
    dayList = []
    while beginDate <= endDate:
        dayList.append(datetime.datetime.strftime(beginDate, "%Y%m%d"))
        beginDate += datetime.timedelta(days=+1)
    return dayList
 #判断2个字符串字符是否完全一样 顺序可不同
def compare_two_str(a,b):
    if len(a) != len(b):
        return False
    return sorted(a) == sorted(b)

listMove_out = ["北京","朝阳"]
listMove_in  = ["nanjing","北京"]
resulttttt = compare_two_str(listMove_out,listMove_in)
if resulttttt:
    print("相等")
else:
    print("不相等")

print(baiduMigrationIndex)
# dayList = getdaylist(20210701,20211028)
# print(dayList)
# print(dayList[0],dayList[1],dayList[2])
index = baiduMigrationIndex[(baiduMigrationIndex.city_name == "三亚") &  (baiduMigrationIndex.city_id_name == "陵水黎族自治县")].index.tolist()[0]
print("行数", baiduMigrationIndex["city_name"].count())
baiduMigrationIndex.drop(index, axis=0, inplace=True)
print("移除数据", index)

baiduMigrationIndex = baiduMigrationIndex.reset_index(drop=True)

print(baiduMigrationIndex)

# print(baiduMigrationIndex)
# print(baiduMigrationProportion)
# 定位到某天的一整行
# migrationIndexDataCol1 = baiduMigrationIndex.loc[0]
# print(migrationIndexDataCol1[1])
# migrationIndexDataCol2 = baiduMigrationIndex.loc[1]
# print(migrationIndexDataCol1.size)
# print(baiduMigrationIndex)
#
# baiduMigrationIndex.drop(1,axis=0,inplace=True)
# print(baiduMigrationIndex)
# # print(int(baiduMigrationIndex.size/3))
# print(type(baiduMigrationIndex.size/3))

# # 定位到某天的前夕规模指数
# migrationIndexData = float(migrationIndexDataCol["index"])
# # # 取到某一天的所有城市名称
# migrationProportionCity = baiduMigrationProportion['city_name']
# # # 取到某一天的此城市的迁徙比例
# migrationProportion = baiduMigrationProportion['value']
# field_order = ["city_name", 'city_id_name', 'num']
# with open("test.csv", 'w', encoding="utf-8", newline='') as csvfile:
#     writer = csv.DictWriter(csvfile, field_order)
#     writer.writeheader()
#     for Proportion,cityName in zip(migrationProportion,migrationProportionCity):
#         lastValue = float(Proportion) / 100 * migrationIndexData
#         writer.writerow(dict(zip(field_order, [""+cityName+"", "北京", ""+str(lastValue)+""])))


# # 循环取值进行相乘得到最终结果




# rslt_df = baiduMigrationProportion['value']
# print(type(rslt_df))
# for i in rslt_df:
#     print(i)
# rslt_df = baiduMigrationIndex.loc[baiduMigrationIndex['date'] == 20190112]
# aaaa = rslt_df['index'].astype('float')
# print(type(aaaa))
# print(float(aaaa))
# rslt_df = baiduMigrationIndex[baiduMigrationIndex['date'].isin(['20190112'])]
# data = baiduMigrationIndex[baiduMigrationIndex['date'].str.contains('20190112')]
# print('\nResult dataframe :\n', rslt_df)
# icao = "20190114"
# print(baiduMigrationIndex[baiduMigrationIndex["date"] == "20190114"])
# print(baiduMigrationIndex.loc[3:6])
# print(type(baiduMigrationIndex.loc[3:6]))
# for i in baiduMigrationIndex.loc[3:6]:
#     print(i)
# print(baiduMigrationIndex.loc[(baiduMigrationIndex.date=='20190112')])
# print(baiduMigrationIndex[(baiduMigrationIndex['date'] == '20190112')])
# print(baiduMigrationProportion)
# print(baiduMigrationIndex['date'])
# datecityName ="浙江市"
# if cityName.endswith("市"):
#     cityName = cityName[:-1]
# print(cityName)

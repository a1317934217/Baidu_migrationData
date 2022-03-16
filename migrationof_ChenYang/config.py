'''
城市迁徙排名数据只能一个城市一爬，需要给出城市的code
单次任务只能抓取迁入或者迁出数据选其一
中国所有省市级行政区划代码在文件ChinaAreaCode.csv中
依赖库: requests、json、time、csv
'''
import csv
# 指定抓取任务的抓取数据类型'move_in'or'move_out'即抓取迁入还是迁出数据
# 获取时间列表
import datetime


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
task_type = 'move_in'
# 要抓取的时间列表
# time_list = [str(t) for t in range(20210101, 20210132)] + [str(t) for t in range(20210201, 20210229)]+ [str(t) for t in range(20210301, 20210332) ]+ [str(t) for t in range(20210401, 20210431)]+ [str(t) for t in range(20210501, 20210517)]+[str(t)for t in range(20200101,20200132)] +[str(t) for t in range(20200201, 20200230)]+[str(t) for t in range(20200301, 20200332)]+[str(t) for t in range(20200401, 20200431)]+[str(t) for t in range(20200501, 20200531)]+[str(t)for t in range(20190101,20190132)] +[str(t) for t in range(20190201, 20190229)]+[str(t) for t in range(20190301, 20190332)]+[str(t) for t in range(20190401, 20190431)]+[str(t) for t in range(20190501, 20190532)]
# time_list = [str(t) for t in range(20200901, 20200931)] +[str(t) for t in range(20201101, 20201032)]+[str(t) for t in range(20201101, 20201131) ]+[str(t) for t in range(20201201, 20201232)]+[str(t) for t in range(20210101, 20210132)]
time_list = getdaylist(2020)
# 城市迁徙排名数据保存路径
paiming_path = 'F:\01大连民族\百度迁徙爬取和数据\百度迁徙数据-final\newCodeIn'
# 全国各城市迁徙指数数据保存路径
zhishu_path = 'F:\01大连民族\百度迁徙爬取和数据\百度迁徙数据-final\newCodeIn'
# 是否抓取迁徙排名数据
paiming = True
# 是否抓取全国各城市指数数据
zhishu = True
# 城市迁徙排名数据要抓取的城市citycode
file = csv.reader(open('ChinaAreaCodes.csv', 'r'))
code_list=[]
for row in file:
    if row[0] != 'code':
        code = row[0]
        name = row[1]
        code_list.append(code)

paiming_citycode = code_list
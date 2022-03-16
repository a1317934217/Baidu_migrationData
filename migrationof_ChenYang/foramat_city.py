import  pandas as pd

df=pd.read_csv("/Users/yc/python/百度迁徙数据/01-爬虫-爬取百度迁徙数据/qianxi/Baidu_migration_crawler/location_ids.txt",header=None,names=['name','code'])
print(df)
df.to_csv("/Users/yc/python/百度迁徙数据/01-爬虫-爬取百度迁徙数据/qianxi/ChinaAreaCodes.csv",encoding="utf_8_sig",index=None,columns=['code','name'])

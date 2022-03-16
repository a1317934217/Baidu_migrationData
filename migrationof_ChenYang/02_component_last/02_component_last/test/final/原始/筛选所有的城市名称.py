import os
import pandas as pd
# /Users/yc/python/test/03_权重_新冠/data/move_out
# /Users/yc/python/test/03_权重_新冠/data/move_in

path = '/Users/chenyang/PycharmProjects/pythonProject/02_component_last/data/data互惠'

# 把e:/get_key/目录下的文件名全部获取保存在files中
files = os.listdir(path)
citylist=[]

# 用set可以很好的去重，在数据处理的时候经常会被使用到。这里做初始化
path_list=[]
path_name_list=[]
for file in files:
    # 准确获取一个txt的位置，利用字符串的拼接/
    txt_path = '/Users/chenyang/PycharmProjects/pythonProject/02_component_last/data/data互惠/' + file
    path_list.append(txt_path)
    path_name_list.append(txt_path)
    # 读取文件 固定时间的数据
print("path_list",path_list)#所有文件名称列表
for i in path_list:
    df=pd.read_csv(i)
    citylist=list(set(df['city_name']).union(set(df['city_id_name'])))
print("citylist=",citylist)

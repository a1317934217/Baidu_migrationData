import os
import pandas as pd

path = '/Users/chenyang/PycharmProjects/pythonProject/02_component_last/data/data互惠'

files = os.listdir(path)
path_list=[]
path_name_list=[]
for file in files:
    txt_path = '/Users/chenyang/PycharmProjects/pythonProject/02_component_last/data/data互惠/' + file
    path_list.append(txt_path)
    path_name_list.append(txt_path)
print("path_list",path_list)#所有文件名称列表
dateList=[]
path_list.sort()
for i in path_list:
    dateList.append(i.split('/')[-1].split('.')[0])

df=pd.DataFrame({
    'date':dateList
})
df.to_excel('./dateList.xlsx')

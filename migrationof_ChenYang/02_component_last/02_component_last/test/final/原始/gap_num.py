import pandas as pd
import os
yuzhi_num=0.045
path = '/Users/yc/python/finalTest/02_component_last/data/data互惠'
# 把e:/get_key/目录下的文件名全部获取保存在files中
files = os.listdir(path)
# 用set可以很好的去重，在数据处理的时候经常会被使用到。这里做初始化
datas = set()
path_list = []
# print(files)
for file in files:
    # print(file)
    # 准确获取一个txt的位置，利用字符的拼接/
    txt_path = '/Users/yc/python/finalTest/02_component_last/data/data互惠/' + file
    df = pd.read_csv(txt_path)
    # print(df['value'])
    df2 = df[df['value'] >= yuzhi_num]

    df2.to_csv('/Users/yc/python/finalTest/02_component_last/net_data/gap_num_互惠性/' + file,
               index=None, encoding="utf_8_sig")

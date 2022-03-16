import os
import pandas as pd
def get_yuzhi(yuzhi_num):
    path = '/Users/chenyang/PycharmProjects/pythonProject/02_component_last/data/data互惠'
    # 把e:/get_key/目录下的文件名全部获取保存在files中
    files = os.listdir(path)
    # 用set可以很好的去重，在数据处理的时候经常会被使用到。这里做初始化
    datas = set()
    path_list = []
    # print(files)
    for file in files:
        # print(file)
        # 准确获取一个txt的位置，利用字符的拼接/
        txt_path = '/Users/chenyang/PycharmProjects/pythonProject/02_component_last/data/data互惠/' + file
        df = pd.read_csv(txt_path)
        # print(df['value'])
        df2 = df[df['value']>=yuzhi_num]

        df2.to_csv('/Users/chenyang/PycharmProjects/pythonProject/02_component_last/net_data/gap_num_互惠性/' + file, index=None, encoding="utf_8_sig")



def get_jizhu_yuzhi(yuzhi_num):
    jizhu_path='/Users/chenyang/PycharmProjects/pythonProject/02_component_last/data/基准_dta_互惠.csv'
    df = pd.read_csv(jizhu_path)
    # print(jizhu_path.split('/')[-1])
    # print(df['value'])
    df2 = df[df['value']>=yuzhi_num]
    df2.to_csv('/Users/chenyang/PycharmProjects/pythonProject/02_component_last/net_data/gap_num_互惠性/basics/' + jizhu_path.split('/')[-1], index=None, encoding="utf_8_sig")

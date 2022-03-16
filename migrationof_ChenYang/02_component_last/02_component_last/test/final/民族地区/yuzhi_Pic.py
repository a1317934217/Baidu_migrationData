import matplotlib
from matplotlib import font_manager
my_font = font_manager.FontProperties(fname="/Library/Fonts/Songti.ttc")  # 设置汉语字体
matplotlib.rcParams['font.sans-serif'] = ['SimHei']
matplotlib.rcParams['font.family']='sans-serif'
import numpy as np
import matplotlib.pyplot as plt
# #防止中文乱码问题
import matplotlib.ticker as ticker
# plt.rcParams['font.sans-serif']=['SimHei']
# plt.rcParams['axes.unicode_minus'] = False
#解决负号'-'显示为方块的问题
matplotlib.rcParams['axes.unicode_minus'] = False
"""画图
"""
# plt.ion() #开启interactive mode
"""组件阈值_all"""
yuzhi_list= [0.0, 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.05, 0.055, 0.06, 0.065, 0.07, 0.075, 0.08, 0.085, 0.09, 0.095, 0.1, 0.105, 0.11, 0.115, 0.12, 0.125, 0.13, 0.135, 0.14, 0.145, 0.15, 0.155, 0.16, 0.165, 0.17, 0.17500000000000002, 0.18, 0.185, 0.19, 0.195, 0.2, 0.20500000000000002, 0.21, 0.215, 0.22, 0.225, 0.23, 0.23500000000000001, 0.24, 0.245, 0.25]
number_weakly_connected_component_list= [1, 2, 11, 19, 26, 36, 48, 65, 78, 92, 104, 111, 122, 133, 139, 152, 161, 170, 182, 187, 193, 198, 206, 217, 225, 230, 231, 236, 239, 245, 251, 255, 260, 264, 271, 273, 274, 277, 281, 283, 286, 286, 288, 289, 290, 293, 300, 303, 303, 307, 309]
size_of_the_giant_connected_component_list= [350, 349, 321, 316, 314, 295, 286, 260, 229, 160, 137, 135, 83, 83, 83, 82, 43, 42, 40, 40, 38, 38, 35, 22, 21, 17, 17, 17, 16, 16, 12, 12, 11, 11, 11, 11, 11, 11, 11, 11, 10, 10, 10, 10, 10, 10, 9, 9, 9, 8, 8]

plt.subplots(figsize=(8 ,6))
num_tp = len(yuzhi_list)
print(num_tp)
plt.plot(yuzhi_list,number_weakly_connected_component_list , "m.-", linewidth=2,  color='blue', label='弱连接组件数量')
plt.plot(yuzhi_list,size_of_the_giant_connected_component_list , "g*-", linewidth=2,  color='red', label='最大连通组件内城市数量')
#用需要的数据将x轴替换为需要的数据
# plt.grid()  # 生成网格444444444.44444444

plt.legend(fontsize=18, loc=2)
plt.xticks(np.arange(0,0.2525,0.01),np.arange(0,0.2525,0.01),fontsize=18, rotation=60)
"""设置x坐标轴的精度  保留小数点的位数"""
plt.gca().xaxis.set_major_formatter(ticker.FormatStrFormatter('%.2f'))
plt.yticks(fontsize=18)
plt.xlabel('阈值', fontsize=18)
plt.ylabel('节点个数(城市数量)', fontsize=18)
plt.ylim(0)
plt.xlim(0,0.25)#三个月
plt.tight_layout()
plt.savefig('./组件阈值_all_.png')
# import matplotlib
# print(matplotlib.matplotlib_fname())

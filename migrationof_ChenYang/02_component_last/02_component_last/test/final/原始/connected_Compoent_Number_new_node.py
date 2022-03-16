#coding:utf-8
import networkx as nx
import pandas as pd
import os
import numpy as np
import matplotlib.pyplot as plt
import matplotlib

from matplotlib import font_manager
# my_font = font_manager.FontProperties(fname="/Library/Fonts/Songti.ttc")  # 设置汉语字体
# from matplotlib.font_manager import _rebuild
matplotlib.rcParams['font.sans-serif'] = ['SimHei']
matplotlib.rcParams['font.family']='sans-serif'
#解决负号'-'显示为方块的问题
matplotlib.rcParams['axes.unicode_minus'] = False
"""295个城市"""
nodeList=['舟山', '贵阳', '黄石', '昭通', '焦作', '南通', '丽水', '晋城', '巴中', '阜新', '合肥', '威海', '宿州', '德阳', '白山', '延安', '攀枝花', '佛山', '亳州', '天门', '濮阳', '池州', '漯河', '盐城', '厦门', '丹东', '保山', '贵港', '南昌', '绵阳', '黄冈', '廊坊', '鄂州', '渭南', '宣城', '乐山', '昆明', '淮安', '云浮', '南京', '长治', '防城港', '鞍山', '泸州', '大连', '阳泉', '盘锦', '温州', '赣州', '荆门', '西宁', '湘西土家族苗族自治州', '吉安', '开封', '铜陵', '孝感', '呼和浩特', '佳木斯', '枣庄', '眉山', '遂宁', '武汉', '许昌', '达州', '青岛', '承德', '咸阳', '驻马店', '天水', '苏州', '长春', '黑河', '连云港', '红河哈尼族彝族自治州', '辽阳', '六安', '菏泽', '衡水', '营口', '兴安盟', '岳阳', '黔南布依族苗族自治州', '湘潭', '泉州', '齐齐哈尔', '平顶山', '武威', '宜昌', '滁州', '江门', '临沧', '玉溪', '郴州', '葫芦岛', '沈阳', '商丘', '潜江', '南充', '嘉兴', '东莞', '广安', '恩施土家族苗族自治州', '乌兰察布', '潍坊', '襄阳', '天津', '茂名', '大庆', '邢台', '镇江', '张掖', '河源', '东营', '绥化', '马鞍山', '台州', '抚顺', '柳州', '西双版纳傣族自治州', '西安', '白银', '蚌埠', '揭阳', '宜春', '九江', '邵阳', '阜阳', '四平', '张家口', '湛江', '铁岭', '德宏傣族景颇族自治州', '普洱', '荆州', '伊春', '济宁', '烟台', '珠海', '太原', '本溪', '惠州', '无锡', '双鸭山', '安阳', '运城', '衡阳', '广州', '玉林', '淮北', '凉山彝族自治州', '自贡', '常德', '海南藏族自治州', '长沙', '宁德', '呼伦贝尔', '百色', '新乡', '包头', '甘孜藏族自治州', '朔州', '辽源', '海西蒙古族藏族自治州', '张家界', '重庆', '庆阳', '聊城', '泰州', '上饶', '曲靖', '郑州', '中山', '安顺', '白城', '漳州', '淮南', '桂林', '南宁', '益阳', '济源', '文山壮族苗族自治州', '北海', '抚州', '阳江', '秦皇岛', '梅州', '成都', '德州', '锦州', '安康', '巴彦淖尔', '河池', '汕头', '通化', '龙岩', '梧州', '宜宾', '莆田', '济南', '安庆', '萍乡', '深圳', '日照', '赤峰', '宁波', '平凉', '邯郸', '丽江', '大同', '汕尾', '株洲', '宿迁', '怀化', '钦州', '哈尔滨', '南平', '宝鸡', '鹤岗', '榆林', '通辽', '随州', '泰安', '鹤壁', '朝阳', '资阳', '雅安', '仙桃', '信阳', '楚雄彝族自治州', '潮州', '绍兴', '周口', '常州', '吕梁', '忻州', '景德镇', '三明', '鹰潭', '杭州', '金华', '鄂尔多斯', '衢州', '牡丹江', '陇南', '铜川', '扬州', '临夏回族自治州', '阿坝藏族羌族自治州', '芜湖', '清远', '来宾', '石家庄', '定西', '福州', '黔东南苗族侗族自治州', '广元', '洛阳', '淄博', '临汾', '娄底', '鸡西', '北京', '沧州', '崇左', '海北藏族自治州', '贺州', '湖州', '三门峡', '临沂', '肇庆', '大理白族自治州', '咸宁', '徐州', '内江', '兰州', '唐山', '永州', '黔西南布依族苗族自治州', '韶关', '晋中', '遵义', '松原', '上海', '十堰', '乌海', '金昌', '商洛', '南阳', '六盘水', '汉中', '延边朝鲜族自治州', '锡林郭勒盟', '保定', '新余', '滨州']
def get_all_addr(path):
    files = os.listdir(path)
    # 用set可以很好的去重，在数据处理的时候经常会被使用到。这里做初始化
    path_list = []
    for file in files:
        # 准确获取一个txt的位置，利用字符串的拼接/
        txt_path = path + file
        path_list.append(txt_path)
        # 读取文件 固定时间的数据
    print("path_list", path_list)  # 所有文件名称列表
    return path_list
def get_addr(addr):
    """获取读取数据地址"""
    return pd.read_csv(addr)

def get_number_weakly_connected_components(single_path,node_list):
    GX = nx.DiGraph()
    GX.add_nodes_from(node_list)
    single_path_list = get_addr(single_path)
    for row in single_path_list.itertuples():
        data = row[1:3]
        data_list = list(data)
        if (data_list[0] in node_list) and (data_list[1] in node_list):
            GX.add_edge(data_list[0], data_list[1])
    number_weakly_connected_component=nx.number_weakly_connected_components(GX)
    print("number_weakly_connected_component",number_weakly_connected_component)
    return number_weakly_connected_component
def get_size_of_the_giant_connected_component(single_path,node_list,p_data):
    plt.subplots(figsize=(16, 10))
    G = nx.Graph()
    G.add_nodes_from(node_list)
    single_path_list = get_addr(single_path)
    for row in single_path_list.itertuples():
        data = row[1:3]
        data_list = list(data)
        if (data_list[0] in node_list) and (data_list[1] in node_list):
            G.add_edge(data_list[0], data_list[1])
    nx.draw_networkx(G,pos=nx.spring_layout(G),with_labels=True,font_size=8,node_size=180)#nx.spring_layout(G）
    plt.savefig("/Users/yc/python/finalTest/02_component_last/result/pic_互惠性/295_0.0_0.045/"+p_data+".png")
    Gc = max(nx.connected_components(G), key=len)#最大连通子图
    size_of_the_giant_connected_component=len(Gc)
    sub_graph_list=[]
    large_citylist = []
    i = 0
    print( "size_of_the_giant_connected_component",size_of_the_giant_connected_component)
    for sub_graph in sorted(nx.connected_components(G), key=len, reverse=True):
        print(list(sub_graph))
        if i == 0:
            large_citylist.append(sub_graph)
            i = i + 1
    return size_of_the_giant_connected_component,sub_graph_list,large_citylist

all_path = "/Users/yc/python/finalTest/02_component_last/net_data/gap_num_互惠性/"
all_addr = get_all_addr(all_path)
all_addr.sort(reverse=False)
print(all_addr)
number_weakly_connected_component_list=[]
size_of_the_giant_connected_component=[]
sub_graph_list=[]
large_city={}
for each_path in all_addr:
    data=each_path.split(".")[0].split('/')[-1]
    print(data)
    i=get_number_weakly_connected_components(each_path,nodeList)
    j,nnnn,large_c=get_size_of_the_giant_connected_component(each_path,nodeList,data)
    large_city[data]=large_c
    number_weakly_connected_component_list.append(i)
    sub_graph_list.append(list(nnnn))
    size_of_the_giant_connected_component.append(j)

print("number_weakly_connected_component_list=",number_weakly_connected_component_list)
print("size_of_the_giant_connected_component=",size_of_the_giant_connected_component)

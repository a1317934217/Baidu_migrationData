#coding:utf-8
import networkx as nx
import pandas as pd
import os
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
import move_all_format_functions
from matplotlib import font_manager
my_font = font_manager.FontProperties(fname="/Library/Fonts/Songti.ttc")  # 设置汉语字体
matplotlib.rcParams['font.sans-serif'] = ['SimHei']
matplotlib.rcParams['font.family']='sans-serif'
#解决负号'-'显示为方块的问题
matplotlib.rcParams['axes.unicode_minus'] = False
# 所有城市
nodeList= ['儋州', '潍坊', '厦门', '辽源', '果洛藏族自治州', '恩施土家族苗族自治州', '红河哈尼族彝族自治州', '伊犁哈萨克自治州', '重庆', '凉山彝族自治州', '攀枝花', '乌鲁木齐', '西安', '安阳', '襄阳', '湘潭', '呼伦贝尔', '西双版纳傣族自治州', '清远', '宣城', '可克达拉', '阿勒泰地区', '洛阳', '丹东', '天门', '德州', '乌兰察布', '南平', '昆玉', '黄石', '贵港', '肇庆', '泰州', '本溪', '徐州', '菏泽', '鹤岗', '阳江', '辽阳', '乌海', '许昌', '德宏傣族景颇族自治州', '石嘴山', '荆门', '河池', '防城港', '阜新', '曲靖', '嘉兴', '保山', '南充', '巴中', '来宾', '海南藏族自治州', '昌江黎族自治县', '佳木斯', '葫芦岛', '咸阳', '七台河', '株洲', '塔城地区', '邯郸', '泰安', '张家界', '廊坊', '内江', '包头', '咸宁', '广安', '甘孜藏族自治州', '北京', '玉林', '四平', '淄博', '烟台', '萍乡', '福州', '双鸭山', '吕梁', '三明', '岳阳', '揭阳', '黄冈', '阿拉尔', '桂林', '兰州', '榆林', '枣庄', '宁波', '保定', '舟山', '固原', '临沧', '台州', '迪庆藏族自治州', '仙桃', '庆阳', '达州', '怒江傈僳族自治州', '博尔塔拉蒙古自治州', '成都', '鄂尔多斯', '赤峰', '河源', '邢台', '延边朝鲜族自治州', '日照', '渭南', '铜陵', '天津', '南京', '宝鸡', '荆州', '龙岩', '淮安', '江门', '张掖', '乐山', '滨州', '三门峡', '海北藏族自治州', '铜川', '双河', '忻州', '平顶山', '琼海', '锦州', '哈尔滨', '濮阳', '运城', '文山壮族苗族自治州', '梅州', '延安', '和田地区', '金华', '白银', '深圳', '安庆', '合肥', '乐东黎族自治县', '阿里地区', '益阳', '上饶', '安顺', '珠海', '湘西土家族苗族自治州', '唐山', '九江', '东莞', '汉中', '绍兴', '抚顺', '宜宾', '黑河', '克拉玛依', '聊城', '新乡', '保亭黎族苗族自治县', '铁门关', '周口', '池州', '酒泉', '临夏回族自治州', '阳泉', '湖州', '商洛', '玉树藏族自治州', '宜昌', '无锡', '临沂', '湛江', '贵阳', '六盘水', '松原', '牡丹江', '宁德', '潮州', '齐齐哈尔', '青岛', '平凉', '景德镇', '梧州', '中山', '漳州', '衡阳', '汕尾', '衢州', '镇江', '宿迁', '孝感', '惠州', '大庆', '阿克苏地区', '遵义', '喀什地区', '海口', '鄂州', '琼中黎族苗族自治县', '长春', '马鞍山', '昌吉回族自治州', '济源', '天水', '巴彦淖尔', '莆田', '石河子', '沧州', '昭通', '滁州', '大兴安岭地区', '扬州', '常德', '南通', '佛山', '太原', '东营', '楚雄彝族自治州', '娄底', '海西蒙古族藏族自治州', '黔西南布依族苗族自治州', '潜江', '上海', '黄南藏族自治州', '云浮', '白城', '呼和浩特', '贺州', '钦州', '北海', '郑州', '巴音郭楞蒙古自治州', '金昌', '通化', '陇南', '温州', '定西', '阿拉善盟', '黄山', '绵阳', '资阳', '拉萨', '普洱', '鞍山', '丽水', '邵阳', '汕头', '承德', '晋城', '临汾', '五家渠', '长沙', '南阳', '德阳', '柳州', '吴忠', '宜春', '泉州', '衡水', '晋中', '淮南', '崇左', '宿州', '文昌', '东方', '随州', '五指山', '长治', '苏州', '济宁', '武汉', '阿坝藏族羌族自治州', '吉安', '玉溪', '茂名', '眉山', '大同', '亳州', '朔州', '丽江', '三亚', '雅安', '铁岭', '淮北', '韶关', '常州', '信阳', '新余', '通辽', '克孜勒苏柯尔克孜自治州', '广州', '武威', '南昌', '焦作', '威海', '沈阳', '连云港', '图木舒克', '万宁', '开封', '朝阳', '商丘', '鹤壁', '黔南布依族苗族自治州', '怀化', '北屯', '杭州', '盘锦', '银川', '南宁', '营口', '蚌埠', '十堰', '阜阳', '赣州', '驻马店', '自贡', '郴州', '秦皇岛', '盐城', '锡林郭勒盟', '伊春', '白沙黎族自治县', '黔东南苗族侗族自治州', '昆明', '鸡西', '漯河', '广元', '白山', '嘉峪关', '绥化', '安康', '泸州', '芜湖', '遂宁', '济南', '石家庄', '六安', '抚州', '大理白族自治州', '西宁', '兴安盟', '中卫', '神农架林区', '甘南藏族自治州', '百色', '永州', '陵水黎族自治县', '鹰潭', '张家口', '大连']

def get_all_addr(path):

    files = os.listdir(path)

    # 用set可以很好的去重，在数据处理的时候经常会被使用到。这里做初始化
    datas = set()
    path_list = []
    for file in files:
        # 准确获取一个txt的位置，利用字符串的拼接\
        txt_path = path + file
        path_list.append(txt_path)
        # 读取文件 固定时间的数据
    print("path_list", path_list)  # 所有文件名称列表
    return path_list
# /Users/yc/python/test/02_component
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
            # print(data_list)data_list
            # print("hhi呼呼")
            GX.add_edge(data_list[0], data_list[1])
    number_weakly_connected_component=nx.number_weakly_connected_components(GX)
    print("number_weakly_connected_component",number_weakly_connected_component)
    return number_weakly_connected_component


def get_size_of_the_giant_connected_component(single_path,node_list):
    plt.subplots(figsize=(16, 10))
    G = nx.Graph()
    G.add_nodes_from(node_list)
    single_path_list = get_addr(single_path)
    for row in single_path_list.itertuples():
        data = row[1:3]
        data_list = list(data)
        if (data_list[0] in node_list) and (data_list[1] in node_list):
            # print(data_list)
            # print("hhi嘻嘻")
            G.add_edge(data_list[0], data_list[1])

    Gc = max(nx.connected_components(G), key=len)#最大连通子图
    size_of_the_giant_connected_component=len(Gc)
    sub_graph_list=[]
    print( "size_of_the_giant_connected_component",size_of_the_giant_connected_component)
    for sub_graph in sorted(nx.connected_components(G), key=len, reverse=True):
        print(list(sub_graph))

    return size_of_the_giant_connected_component,sub_graph_list


yuzhi_number=np.arange(0,0.2525,0.005)
number_weakly_connected_component_list =[]
size_of_the_giant_connected_component = []
sub_graph_list = []
city_list=[]
for m in yuzhi_number:
    city_list.append(m)
    print(m)
    move_all_format_functions.get_jizhu_yuzhi(m)
    path= "/02_component_last/net_data/basics/基准_dta_互惠.csv"
    i=get_number_weakly_connected_components(path,nodeList)
    j,nnnn=get_size_of_the_giant_connected_component(path,nodeList)
    number_weakly_connected_component_list.append(i)
    sub_graph_list.append(list(nnnn))
    size_of_the_giant_connected_component.append(j)
    # print("sub_graph_list",sub_graph_list)
print("yuzhi_list=",city_list)
print("number_weakly_connected_component_list=",number_weakly_connected_component_list)
print("size_of_the_giant_connected_component_list=",size_of_the_giant_connected_component)
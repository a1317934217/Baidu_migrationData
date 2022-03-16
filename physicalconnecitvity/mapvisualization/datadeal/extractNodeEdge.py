#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2022/3/8 11:01
# @Author  : wuhao
# @Email   : guess?????
# @File    : extractNodeEdge.py
import pandas as pd
import networkx as nx
from matplotlib import pyplot as plt

fileNamePath_one = "F:\\01大连民族\\百度迁徙爬取和数据\\百度迁徙数据-final\\03将两个In和Out相同行合并_最终数据\\20200306finalData.csv"
fileNamePath_two = "F:\\01大连民族\\百度迁徙爬取和数据\\百度迁徙数据-final\\03将两个In和Out相同行合并_最终数据\\20200227finalData.csv"
#awdawdawdawdawd
#  09   12  13

# 根据路径画图
def drawpicture(filePath):
    """
    输入文件路径最后绘制成图G
    """
    G = nx.Graph()
    try:
        dataMiga = pd.read_csv(filePath)
    except Exception as problem:
        print("error根据路径画图出现问题：", problem)
    # 得到每一行的数据
    for row in dataMiga.itertuples():
        city_name = getattr(row, "city_name")
        city_id_name = getattr(row, "city_id_name")
        G.add_edges_from([(city_name, city_id_name)])
    return G
Gdemo_one =  drawpicture(fileNamePath_one)
Gdemo_two =  drawpicture(fileNamePath_two)

# print(Gdemo.edges())
# alledges = Gdemo.edges()
# edge_datas_one = []
# for i in alledges:
#     edge_datas_two=[]
#     for j in i:
#         dict_use_one = {}
#         dict_use_one["name"] = j
#         edge_datas_two.append(dict_use_one)
#     edge_datas_one.append(edge_datas_two)
# print(edge_datas_one)

name_node = ['白城', '兴安盟', '齐齐哈尔', '曲靖', '昆明', '楚雄彝族自治州', '大理白族自治州', '红河哈尼族彝族自治州', '玉溪', '昭通', '西双版纳傣族自治州', '重庆', '丽江', '鄂尔多斯', '榆林',
 '延安', '吕梁', '张家口', '北京', '通辽', '赤峰', '郑州', '驻马店', '信阳', '周口', '漯河', '南阳', '阜阳', '遵义', '铜仁', '晋城', '长治', '辽阳', '鞍山',
 '沈阳', '哈尔滨', '牡丹江', '泸州', '毕节', '贵阳', '黔南布依族苗族自治州', '新乡', '安阳', '焦作', '开封', '淮北', '宿州', '徐州', '蚌埠', '商丘', '合肥', '清远',
 '广州', '韶关', '佛山', '文山壮族苗族自治州', '张家界', '湘西土家族苗族自治州', '怀化', '恩施土家族苗族自治州', '抚顺', '凉山彝族自治州', '攀枝花', '成都', '益阳', '长沙', '常德',
 '岳阳', '娄底', '呼和浩特', '乌兰察布', '包头', '保山', '德宏傣族景颇族自治州', '德州', '济南', '衡水', '沧州', '聊城', '濮阳', '鹤壁', '邯郸', '渭南', '西安', '咸阳',
 '湖州', '杭州', '嘉兴', '葫芦岛', '锦州', '北海', '钦州', '南宁', '邵阳', '衡阳', '黄冈', '武汉', '荆州', '宜昌', '承德', '邢台', '石家庄', '保定', '镇江',
 '南京', '滁州', '盐城', '马鞍山', '扬州', '南通', '常州', '无锡', '宣城', '苏州', '上海', '九江', '南昌', '金华', '衢州', '绍兴', '潜江', '潮州', '汕头',
 '揭阳', '铁岭', '四平', '辽源', '通化', '淄博', '滨州', '东营', '盘锦', '营口', '宁波', '阜新', '泰安', '济宁', '永州', '郴州', '菏泽', '天津', '廊坊', '潍坊',
 '抚州', '乌海', '宿迁', '连云港', '商洛', '武威', '兰州', '六盘水', '肇庆', '云浮', '株洲', '湘潭', '安顺', '枣庄', '临沂', '本溪', '晋中', '阳泉', '亳州',
 '长春', '吉林', '大同', '朔州', '忻州', '太原', '达州', '巴中', '广安', '南充', '宜春', '新余', '萍乡', '青岛', '日照', '烟台', '来宾', '柳州', '河池', '桂林',
 '黔东南苗族侗族自治州', '安庆', '铜陵', '池州', '许昌', '洛阳', '平顶山', '泰州', '绥化', '大庆', '三门峡', '自贡', '内江', '唐山', '秦皇岛', '安康', '汉中', '广元',
 '绵阳', '遂宁', '宝鸡', '芜湖', '厦门', '漳州', '泉州', '乐山', '湛江', '茂名', '玉林', '台州', '大连', '鄂州', '黄石', '孝感', '雅安', '定西', '临夏回族自治州',
 '防城港', '温州', '眉山', '莆田', '福州', '黔西南布依族苗族自治州', '资阳', '德阳', '汕尾', '佳木斯', '临汾', '运城', '巴彦淖尔', '景德镇', '上饶', '鹰潭', '铜川',
 '松原', '呼伦贝尔', '朝阳', '东莞', '深圳', '惠州', '舟山', '河源', '崇左', '贵港', '鹤岗', '三明', '百色', '威海', '六安', '淮南', '白银', '宁德', '中山',
 '珠海', '江门', '吉安', '赣州', '白山', '咸宁', '南平']
# allnodes = Gdemo.nodes()
# print(allnodes)
# node_datas_one = []
# for i in allnodes:
#         dict_use_one = {}
#         dict_use_two = []
#         dict_use_one["name"] = i
#         dict_use_two.append(dict_use_one)
#         node_datas_one.append(dict_use_two)
# print(node_datas_one)

# Gra = nx.Graph()
# Gra.add_edges_from(S[10].edges())
pos = nx.spring_layout(Gdemo_one)
nx.draw(Gdemo_one, pos, node_size=20, node_color="red", edge_color="black", width=0.5)
plt.show()

pos = nx.spring_layout(Gdemo_two)
nx.draw(Gdemo_two, pos, node_size=20, node_color="red", edge_color="black", width=0.5)
plt.show()

print("平均聚类稀系数Gdemo_one：", nx.average_clustering(Gdemo_one))
print("平均聚类稀系数Gdemo_two：", nx.average_clustering(Gdemo_two))

print("点数量Gdemo_one：", nx.number_of_nodes(Gdemo_one))
print("点数量Gdemo_two：", nx.number_of_nodes(Gdemo_two))

print("边数量Gdemo_one：", nx.number_of_edges(Gdemo_one))
print("边数量Gdemo_two：", nx.number_of_edges(Gdemo_two))

print("图密度Gdemo_one：", nx.density(Gdemo_one))
print("图密度Gdemo_two：", nx.density(Gdemo_two))



average_degree_one =0
for i in Gdemo_one.degree():
    average_degree_one += int(i[1])
print("平均度 Gdemo_one：", average_degree_one/nx.number_of_nodes(Gdemo_one))


average_degree_two =0
for i in Gdemo_two.degree():
    average_degree_two += int(i[1])
print("平均度 Gdemo_two：", average_degree_two/nx.number_of_nodes(Gdemo_two))


S_one = [Gdemo_one.subgraph(c).copy() for c in nx.connected_components(Gdemo_one)]
S_two = [Gdemo_two.subgraph(c).copy() for c in nx.connected_components(Gdemo_two)]
print("连通分量数量Gdemo_one：", len(S_one))
print("连通分量数量Gdemo_two：", len(S_two))



# print("度分布序列Gdemo_one：",nx.degree_histogram(Gdemo_one))
# print("度分布序列Gde                                                                                                                                      mo_two：", nx.degree_histogram(Gdemo_two))



import networkx as nx
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
import math
import time
import scipy.stats
matplotlib.rcParams['font.sans-serif'] = ['SimHei']
matplotlib.rcParams['font.family']='sans-serif'
#解决负号'-'显示为方块的问题
matplotlib.rcParams['axes.unicode_minus'] = False


# my_font = font_manager.FontProperties(fname="/Library/Fonts/Songti.ttc")  # 设置汉语字体
# pandas.set_option("display.max_columns", 1000)  # 最大量度显示信息
# pandas.set_option('float_format', lambda x: '%.3f' % x)  # 取消科学计数


def get_addr(addr):
    """获取读取数据地址"""
    return pd.read_csv(addr)


def get_cities_num(net1, net2,n1,n2):
    """获取双层网络总城市结点数"""
    name1=str(n1)
    name2=str(n2)
    # print(name2,type(name2))
    net1_depart = net1["city_name"].tolist()
    net1_dest = net1["citye_id_name"].tolist()
    net2_depart = net2["city_name"].tolist()
    net2_dest = net2["citye_id_name"].tolist()
    total_cities_nodes = set(net1_depart + net1_dest + net2_depart + net2_dest)
    # print("total_cities_nodes",total_cities_nodes)

    file = open("D:/workspace/python/test/04/net_data/city_list_in/"+name1+"_"+name2+"_nodes_list.txt", "w")
    # file = open("D:/workspace/python/test/04/net_data/city_list_out/" + name1 + "_" + name2 + "_nodes_list.txt", "w")

    # file = open("/home/myWork/results/03/net_data/city_list/"+name1+"_"+name2+"_nodes_list.txt", "w")
    for i in total_cities_nodes:
        file.write(i)
        file.write("\n")
    file.close()#节点数

def get_single_cities_num(net, name):
    name=str(name)
    """创建每个网络总城市结点数"""
    net1_depart = net["city_name"].tolist()
    net1_dest = net["citye_id_name"].tolist()
    total_cities_nodes = set(net1_depart + net1_dest )
    file = open("D:/workspace/python/test/04/net_data/city_list_in/"+name+"_nodes_list.txt", "w")
    # file = open("D:/workspace/python/test/04/net_data/city_list_out/"+name+"_nodes_list.txt", "w")

    # file = open("/home/myWork/results/03/net_data/city_list/"+name+"_nodes_list.txt", "w")

    for i in total_cities_nodes:
        file.write(i)
        file.write("\n")
    file.close()

def links_weighted(networks):
    """链路结点与权重三元祖"""
    # print("list(networks)++++++",networks)
    weighted_lines = [tuple(i) for i in networks.values[:, :3]]
    # print("weighted_lines",weighted_lines)
    return weighted_lines

def create_adjacency_matrix(total_nodes):
    """建立邻接矩阵"""
    array = pd.DataFrame(np.zeros((len(total_nodes), len(total_nodes))),
                             index=total_nodes, columns=total_nodes)
    return array

def read_total_cities(strs):
    """读取每个多层网络中的结点数据"""
    file = open("D:/workspace/python/test/04/net_data/city_list_in/"+strs+"_nodes_list.txt", "r")
    # file = open("D:/workspace/python/test/04/net_data/city_list_out/"+strs+"_nodes_list.txt", "r")

    # file = open("/home/myWork/results/03/net_data/city_list/"+strs+"_nodes_list.txt", "r")
    nodes_data = file.readlines()
    lists = []
    for i in nodes_data:
        i = i.strip("\n")
        lists.append(i)
    file.close()
    return lists

def create_network_graph(cities_nodes, weighted_link, adj_matrix):
    """绘制网络"""
    # plt.ion()  # 开启interactive mode
    net = nx.DiGraph()
    net.add_nodes_from(cities_nodes)
    net.add_weighted_edges_from(weighted_link)
    nx.draw_networkx(net)
    # plt.show()
    # time.sleep(15)
    # plt.close(1)
    # A=nx.to_numpy_matrix(net,weight="weight")  # 图转换成邻接矩阵
    # plt.savefig("weighted_graph.png")
    return net

def net_nodes_to_number(total_city,weighted_net1_lines):
    # print("total_city",total_city,"weighted_net1_lines",weighted_net1_lines)
    # 从总的节点的列表中的文字转换成数字
    nodes_map = {}
    nodes_list_old = []
    index = 0
    for i in total_city:
        # print(i)
        if i in nodes_list_old:
            pass
        else:
            # index += 1  # 起始节点从1开始
            nodes_list_old.append(i)
            nodes_map[i] = index
            index += 1  # 起始节点从0开始
    # print("nodes_map",nodes_map)
    nodes_list_all=[]
    for i,k in nodes_map.items():
        nodes_list_all.append(k)
    # print("nodes_list_all",nodes_list_all)
    # 从边的对应关系中找到用数字代表的关系
    nodes_list = []
    nodes_list_weight = []
    for i in weighted_net1_lines:
        for j in i:
            if j in nodes_map.keys():
                j = nodes_map[j]
                nodes_list.append(j)
                nodes_list_weight.append(j)
            else:
                nodes_list_weight.append(j)
    # print("nodes_list_weight", nodes_list_weight)
    # print("nodes_list", nodes_list)
    edges_list_weight = []
    m = 0
    for j in range(0, len(nodes_list_weight)):
        if j >= m:
            edges_list_weight.append(nodes_list_weight[j:j + 3])
            m = j + 3
    # print("edges_list_weight", edges_list_weight)
    return nodes_list_all,edges_list_weight

    # total_city_a,g_a_G=read_csv(a_addr,b_addr,net_type1,net_type2)
    # total_city_b,g_b_G=read_csv(b_addr,a_addr,net_type1,net_type2)#读取出图
def read_csv(a_addr,b_addr,net_type1,net_type2):
    a = get_addr(a_addr)
    b = get_addr(b_addr)

    get_single_cities_num(a,net_type1)
    get_single_cities_num(b,net_type2)#创建每个网络总城市结点数文件

    # total_city=get_cities_num(a, b,net_type1,net_type2)  # 将不同网络的城市结点写入文件
    #
    # total_cities = read_total_cities(net_type1+"_"+net_type2)
    # weighted_net1_lines = links_weighted(a)
    # net1_array = create_adjacency_matrix(total_cities)
    # net1_weighted_array = create_network_graph(total_cities, weighted_net1_lines, net1_array)
    # return total_cities,net1_weighted_array
    get_cities_num(a, b, net_type1, net_type2)  # 将不同网络的城市结点写入文件 创建

    total_cities = read_total_cities(net_type1 + "_" + net_type2)#读取两个网络中的总节点
    weighted_net1_lines = links_weighted(a)
    weighted_net2_lines = links_weighted(b)

    net1_array = create_adjacency_matrix(total_cities)#邻接矩阵

    nodes_list_all_01, edges_list_weight_01 = net_nodes_to_number(total_cities, weighted_net1_lines)
    nodes_list_all_02, edges_list_weight_02 = net_nodes_to_number(total_cities, weighted_net2_lines)
    # print("nodes_list_all_01",nodes_list_all_01,"edges_list_weight_01",edges_list_weight_01,"net1_array",net1_array)
    net1_weighted_array_01 = create_network_graph(nodes_list_all_01, edges_list_weight_01, net1_array)
    net1_weighted_array_02 = create_network_graph(nodes_list_all_02, edges_list_weight_02, net1_array)

    return total_cities, net1_weighted_array_01,net1_weighted_array_02

"""第一项

"""
def G_D(G):
    # 打印连通子图
    d_all=[]
    for c in nx.connected_components(G):
        # 得到不连通的子集
        # nodeSet = G.subgraph(c).nodes()
        # print("nodeSet",nodeSet)
        # 绘制子图
        subgraph = G.subgraph(c)
        nx.draw_networkx(subgraph, with_labels=True)
        d_single=nx.diameter(subgraph)#连通图的直径
        d_all.append(d_single)
    d = max(d_all)
    print(d, "网络直径")
    return d

def N_I_J(G):
    sub_node_list = []
    for c in nx.weakly_connected_components(G):#弱连通  有向图内https://www.cnblogs.com/wushaogui/p/9204797.html#81%E8%BF%9E%E9%80%9A%E5%AD%90%E5%9B%BE
        # 得到不连通的子集
        nodeSet = G.subgraph(c).nodes()
        # print("nodeSet", nodeSet)
        # 绘制子图
        a = []
        subgraph = G.subgraph(c)
        if (len(subgraph) > 1):
            for pp in subgraph:
                a.append(pp)
            # nx.draw_networkx(subgraph)
            sub_node_list.append(a)
    # plt.show()#显示不连通的子图
    # print("sub_node_list", sub_node_list)
    n_i_list = {}
    for i in sub_node_list:
        for n in i:
            j = 0
            mm = i.copy()
            for u in range(0, len(mm)):
                if mm[j] == n:
                    mm.pop(j)
                else:
                    j += 1
            # print("i",i,"n",n,"mm",mm)
            shortest_number_list = []

            # 依次获得任意两节点之间的最短路径
            for target in mm:
                shortest_path= nx.shortest_path(G, target=n, source=target)
                shortest_path_len=len(shortest_path)-1
                shortest_number_list.append(shortest_path_len)
                n_i_list[n] = shortest_number_list
    # print("n_i_list", n_i_list)
    n_i_j_list = {}
    for k, v in n_i_list.items():
        a = {}
        # print("k",k,"v",v)
        # print(max(v))
        for v_index in range(1, max(v) + 1):
            # print("k",k,"v",v,"v_index",v_index,"count",v.count(v_index))
            a[v_index] = v.count(v_index)
            # print(a)
        n_i_j_list[k+1] = a
    # print("n_i_j_list", n_i_j_list)  # nij：n_i_j_list
    return n_i_j_list
def P_I_J(G):
    N = len(G.nodes)
    p_i_j = {}
    n_i_j=N_I_J(G)
    # p_i_j=n_i_j/(N-1)
    j_value_max=[]#j的最大值
    for i, v in n_i_j.items():
        # print("i",i,"v",v)
        p_j = {}
        j_value=[]
        for j, value in v.items():
            # print("j",j,"value",value)
            value = value / (N - 1)
            p_j[j] = value
            j_value.append(j)# 每个图的j的值
        p_i_j[i] = p_j
        j_value_max.append(max(j_value))
    j_value_max=max(j_value_max)
    # print("j_value_max",j_value_max)
    # print("p_i_j", p_i_j)
    return j_value_max,p_i_j
def P_I(p_i_j,j,N):
    miu_j_each = []
    for i in p_i_j:
        # 判断内部的key是否存在j值 has_key
        single = j in p_i_j[i].keys()
        if (single):
            pass
        else:
            p_i_j[i][j] = 0
        miu_j_each.append(p_i_j[i][j])
    miu_j=sum(miu_j_each)/N
    return miu_j
def MIU_J(G):
    N=len(G.nodes)
    j_value_max,p_i_j=P_I_J(G)
    miu_j_list = {}
    for j in range(1, j_value_max + 1):
        miu_j = P_I(p_i_j, j,N)
        # print(miu_j)
        miu_j_list[j] = miu_j

    # print("miu_j_list",miu_j_list)
    return miu_j_list
"""两个图的miu_j格式化

"""
def D_JS(P1, P2):
    P3_0 = np.sum([P1, P2], axis=0)
    P3 = list(P3_0)
    P5=[]
    for i in P3:
        p4 = i * 0.5
        P5.append(p4)
    # print("p5", P5)
    n = 0.5 * D_KL(P1, P5)
    m = 0.5 * D_KL(P2, P5)
    js_value = n + m
    return js_value

def D_KL(p, q):
    sum = 0
    for i, j in zip(p, q):
        m = i / j
        # print("m", m)
        if (m > 0):
            n = i * math.log(m)
        sum = sum + n
        # print("sum_one", sum)
        # print(i, j)
    # print("sum", sum)
    return sum
def JS_divergence(p,q):
    p=np.asarray(p)
    q=np.asarray(q)
    M=(p+q)*0.5
    return 0.5*scipy.stats.entropy(p, M)+0.5*scipy.stats.entropy(q, M)
def first(Ga,Gb):

    # miu_j
    miu_j_a=MIU_J(Ga)
    miu_j_b=MIU_J(Gb)
    # print("miu_j_a",miu_j_a,"miu_j_b",miu_j_b)

    # # 将miu_j_a和miu_j_b格式化？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
    a_len=len(miu_j_a)
    b_len=len(miu_j_b)
    max_v=max(a_len,b_len)
    # print("max_v",max_v)
    if(a_len!=max_v):
        adj=b_len-a_len
        for adi_index in range(0,adj):
            # miu_j_a.append(0)
            miu_j_a[a_len+1]=0
            a_len+=1
    else:
        adj = a_len - b_len
        for adi_index in range(0, adj):
            miu_j_b[b_len + 1] = 0
            b_len += 1
    # print("miu_j_a",miu_j_a)
    miu_j_a_list=[]
    for i,v in miu_j_a.items():
        miu_j_a_list.append(v)
    miu_j_b_list=[]
    for i,v in miu_j_b.items():
        miu_j_b_list.append(v)
    print("miu_j_a_list",miu_j_a_list,"miu_j_b_list",miu_j_b_list)

    """js散度"""
    # d_js_value = D_JS(miu_j_a_list, miu_j_b_list)????????????????????????????????????????????????????????
    # print("d_js_value最后值", d_js_value)
    # d_js_value=D_JS(miu_j_a_list, miu_j_b_list)
    d_js_value = JS_divergence(miu_j_a_list, miu_j_b_list)

    print("d_js_value最后值", d_js_value)

    o = d_js_value / math.log(2)
    print("o", o)
    # first = cmath.sqrt(o)
    # print(first)
    first = math.sqrt(o)
    print(first.real)  # first.ima
    return first.real
    # return d_js_value
"""第二项

"""

# NND
def NND(G,N):
    d=G_D(G)
    j_p=J_P(G,N)
    nnd = j_p / math.log(d + 1)
    print("NND", nnd)
    # print(J_G)
    return nnd

def J_P(G,N):
# MIU_J
# j_value_max,p_i_j
    j_value_max,p_i_j=P_I_J(G)
    miu_j=MIU_J(G)
    # print("p_i_j",p_i_j)
    # print("miu_j",miu_j)
    sum=0
    for i,v in p_i_j.items():
        for j,i_v in v.items():
            # print('i', i, 'v', v,"j",j,"i_v",i_v)
            m=i_v/miu_j[j]
            i_j=i_v*math.log(m)
            sum+=i_j
            # print("i",i,"j",j,"i_v",i_v,"miu_j[j]",miu_j[j],"m",m,"i_j",i_j,"sum",sum)
    j_p_value=sum/N
    # print("j_p_value",j_p_value)
    return j_p_value


def second(GA,GB,n_a,n_b):
    nnd_sub = math.sqrt(NND(GA, n_a)) - math.sqrt(NND(GB, n_b))
    # print(nnd_sub,"nnd_sub")
    second_value = abs(nnd_sub)
    # print("second_value",second_value)
    return second_value

"""阿尔法中心性Pa
    # D(G;G0;w1;w2;w3)
"""
# 补图
def G_C(G):
    GC = nx.complement(G)#补图
    return GC
def P_a(G,N):
    # # 拉姆达最大值分之一
    N=len(N)
    n=1/N
    centrality = nx.katz_centrality_numpy(G,n)
    c = []
    for n, c_each in sorted(centrality.items()):
        # print(n, c_each)
        c.append(c_each)
    c.sort()
    V = np.sum(c)
    # print(V)

    p = []
    for v_i in c:
        p_each = v_i + V / N
        # print("p_each", p_each)
        p.append(p_each)
    # print(p, 'p')# p_a
    return p
def J_P_a(GA,GB):
    jS_divergence=D_JS(GA, GB)
    JS_divergence_formula = math.sqrt(jS_divergence / math.log(2))
    return JS_divergence_formula

def third(GA,GB,GA_N,GB_N):
    # FIRST
    p_a=P_a(GA,GA_N)
    p_b=P_a(GB,GB_N)
    first_value=J_P_a(p_a,p_b)
    # SECOND

    a=G_C(GA)
    b=G_C(GB)
    p_c_a = P_a(a, GA_N)
    p_c_b = P_a(b, GB_N)
    second_value = J_P_a(p_c_a, p_c_b)
    third_value=first_value+second_value
    return  third_value

def D_value(W1,W2,W3,a_addr,b_addr,net_type1,net_type2):

    total_city,g_a_G,g_b_G=read_csv(a_addr,b_addr,net_type1,net_type2)#读取出图
    # total_city_b=total_city_a
    # print("total_city",total_city)
    n_a=len(total_city)
    n_b=len(total_city)
    print("N为：",n_a)
    # n_a=len(a_node)
    # n_b=len(b_node)
    a_node=range(0,n_a)
    b_node=range(0,n_b)

    first_value=first(g_a_G, g_b_G)
    print("first_value",first_value)
    second_value=second(g_a_G,g_b_G,n_a,n_b)
    print("second_value",second_value)
    third_value=third(g_a_G,g_b_G,a_node,b_node)
    print("third_value",third_value)
    d_value=W1*first_value+W2*second_value+W3*third_value*0.5

    return d_value
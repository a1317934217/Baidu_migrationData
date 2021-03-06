import networkx as nx
import copy
import random

def dict_degree_nodes(degree_node_list):
#返回的字典为{度：[节点1，节点2，..]}，其中节点1和节点2有相同的度
    D = {}
    for degree_node_i in degree_node_list:
        if degree_node_i[0] not in D:
            D[degree_node_i[0]] = [degree_node_i[1]]
        else:
            if degree_node_i[1] in D[degree_node_i[0]]:
                continue
            D[degree_node_i[0]].append(degree_node_i[1])
    return D

#0阶零模型
def random_0k(G0, nswap=1, max_tries=100, connected=1):
    if G0.is_directed():
        raise nx.NetworkXError("它只允许用于无向网络")
    if nswap > max_tries:
        raise nx.NetworkXError("交换次数大于允许的交换次数")
    if len(G0) < 3:
        raise nx.NetworkXError("该图少于三个节点")
    G = copy.deepcopy(G0)
    n = 0
    swapacount = 0
    edges = list(G.edges())
    nodes = G.nodes()

    while swapacount < nswap:

        if n >= max_tries:
            e = ('尝试次数 (%s) 已超过允许的最大次数，' % n + '有效交换次数为（%s)' % swapacount)
            print(e)
            break
        n = n + 1
        u,v= random.choice(edges)
        x, y = random.sample(nodes, 2)
        if len({u, v, x, y}) < 4:
            continue
        if (x, y) not in edges and (y, x) not in edges:
            G.remove_edge(u, v)
            G.add_edge(x, y)
            edges.remove((u, v))
            edges.append((x, y))
            if connected == 1:
                if not nx.is_connected(G):
                    G.add_edge(u, v)
                    G.remove_edge(x, y)
                    edges.remove((x, y))
                    edges.append((u, v))
                    continue
            swapacount = swapacount + 1
    return G


def  random_1k(G0,nswap=1,max_tries=100,connected=1):
# 保证度分度特性不变的情况下随机交换连边

    if not nx.is_connected(G0):
        raise nx.NetworkXError("非连通图，必须为连通图")
    if G0.is_directed():
        raise nx.NetworkXError("仅适用于无向图")
    if nswap > max_tries:
        raise nx.NetworkXError("交换次数超过允许的最大次数")
    if len(G0) < 4:
        raise nx.NetworkXError("节点数太少，至少要含四个节点")

    tn = 0 #尝试次数
    swapcount = 0 #有效交换次数

    G = copy.deepcopy(G0)
    # keys,deges =zip(*G.degree().items())
    keys,edges =zip(*dict(G.degree()).items())
    cdf = nx.utils.cumulative_distribution(edges)# 计算度的累积分布
    while swapcount < nswap:
        if tn >= max_tries:
            e = ('尝试次数 (%s) 已超过允许的最大次数，' % tn + '有效交换次数为（%s)' % swapcount)
            print(e)
            break
        tn += 1

        #保证度分布不变的情况下，随机选取两条边u-v,x-y
        (ui,xi) = nx.utils.discrete_sequence(2,cdistribution=cdf) #返回长度为2的采样序列
        if ui == xi:
            continue
        u = keys[ui]
        x = keys[xi]
        v = random.choice(list(G[u]))
        y = random.choice(list(G[x]))

        if len({u, v, x, y}) == 4:
            if(y not in G[u]) and (v not in G[x]):
                G.add_edge(u,y)
                G.add_edge(v,x)
                G.remove_edge(u,v)
                G.remove_edge(x,y)

        if connected==1:
            if not nx.is_connected(G):
                G.add_edge(u,v)
                G.add_edge(x,y)
                G.remove_edge(u,y)
                G.remove_edge(x,v)
                continue
        swapcount = swapcount + 1
    print(swapcount)
    return G


def random_2k(G0,nswap=1,max_tries=100,connected=1):

    if not nx.is_connected(G0):
        raise nx.NetworkXError("非连通图，必须为连通图")
    if G0.is_directed():
        raise nx.NetworkXError("仅适用于无向图")
    if nswap > max_tries:
        raise nx.NetworkXError("交换次数超过允许的最大次数")
    if len(G0) < 3:
        raise nx.NetworkXError("节点数太少，至少要含三个节点")

    tn = 0 #尝试次数
    swapcount = 0 #有效交换次数

    G = copy.deepcopy(G0)
    keys,degrees = zip(*G.degree())
    cdf = nx.utils.cumulative_distribution(degrees)
    while swapcount < nswap:  # 有效交换次数小于规定交换次数
        if tn >= max_tries:
            e = ('尝试次数 (%s) 已超过允许的最大次数，' % tn + '有效交换次数为（%s)' % swapcount)
            print(e)
            break
        tn += 1

        # 在保证度分布不变的情况下，随机选取两条连边u-v，x-y
        (ui, xi) = nx.utils.discrete_sequence(2, cdistribution=cdf)
        if ui == xi:
            continue
        u = keys[ui]
        x = keys[xi]
        v = random.choice(list(G[u]))
        y = random.choice(list(G[x]))

        if len({u, v, x, y}) == 4:  # 保证是四个独立节点
            if G.degree(v) == G.degree(y):  # 保证节点的度匹配特性不变
                if (y not in G[u]) and (v not in G[x]):  # 保证新生成的连边是原网络中不存在的边
                    G.add_edge(u, y)  # 增加两条新连边
                    G.add_edge(v, x)
                    G.remove_edge(u, v)  # 删除两条旧连边
                    G.remove_edge(x, y)
                    if connected == 1:  # 判断是否需要保持联通特性，为1的话则需要保持该特性
                        if not nx.is_connected(G):  # 保证网络是全联通的:若网络不是全联通网络，则撤回交换边的操作
                            G.add_edge(u, v)
                            G.add_edge(x, y)
                            G.remove_edge(u, y)
                            G.remove_edge(x, v)
                            continue
                    swapcount = swapcount + 1
    print(swapcount)
    return G


def random_25k(G0,nswap=1,max_tries=100,connected=1):
# 保证2.5k特性不变和网络联通的情况下，交换社团内部的连边
#G0:待改变的网络
#nswap:是改变成功的系数，默认值为1
#max_tries:是尝试改变的最大值，默认值为100
#connected:是否需要保证网络的联通性，参数为1需要保持，参数为0不需要保持

    if not nx.is_connected(G0):
        raise nx.NetworkXError("非连通图，必须为连通图")
    if G0.is_directed():
        raise nx.NetworkXError("仅适用于无向图")
    if nswap > max_tries:
        raise nx.NetworkXError("交换次数超过允许的最大次数")
    if len(G0) < 3:
        raise nx.NetworkXError("节点数太少，至少要含三个节点")

    tn = 0
    swapcount = 0

    G = copy.deepcopy(G0)
    keys,degrees = zip(*G.degree())
    cdf = nx.utils.cumulative_distribution(degrees)
    while swapcount < nswap :
        if tn >= max_tries :
            e = ('尝试次数'+str(tn)+'已超过允许的最大次数，有效次数'+str(swapcount))
            print(e)
            break
        tn += 1
        #在保证度分布不变的情况下，随机选取两条连边u-v,x-y
        (ui,xi) = nx.utils.discrete_sequence(2,cdistribution=cdf)
        if ui==xi:
            continue
        u = keys[ui]
        x = keys[xi]
        v = random.choice(list(G[u]))
        y = random.choice(list(G[x]))

        if len({u, v, x, y}) == 4 :
            if G.degree(v) == G.degree(y):
                if (y not in G[u]) and (v not in G[x]):
                    G.add_edge(u,y)
                    G.add_edge(v,x)
                    G.remove_edge(u,v)
                    G.remove_edge(x,y)
                    degree_node_list = map(lambda t:(t[1],t[0]),G0.degree([u,v,x,y]+list(G[u])+list(G[v])+list(G[x])+list(G[y])))
                    D = dict_degree_nodes(degree_node_list)
                    for i in range(len(D)):
                        avcG0 = nx.average_clustering(G0, nodes=list(D.values())[i], weight=None, count_zeros=True)
                        avcG = nx.average_clustering(G, nodes=list(D.values())[i], weight=None, count_zeros=True)
                        if avcG0 != avcG:  # 若置乱前后度相关的聚类系数不同，则撤销此次置乱操作
                            G.add_edge(u, v)
                            G.add_edge(x, y)
                            G.remove_edge(u, y)
                            G.remove_edge(x, v)
                            break
                    if connected == 1:  # 判断是否需要保持联通特性，为1的话则需要保持该特性
                        if not nx.is_connected(G):  # 保证网络是全联通的:若网络不是全联通网络，则撤回交换边的操作
                            G.add_edge(u, v)
                            G.add_edge(x, y)
                            G.remove_edge(u, y)
                            G.remove_edge(x, v)
                            continue
                    swapcount = swapcount + 1
    print(swapcount)
    return G

def random_3k(G0, nswap=1, max_tries=100, connected=1):
    # 保证3k特性不变和网络联通的情况下，交换社团内部的连边
    # G0：待改变结构的网络
    # nswap：是改变成功的系数，默认值为1
    # max_tries：是尝试改变的次数，默认值为100
    # connected：是否需要保证网络的联通特性，参数为1需要保持，参数为0不需要保持

    if not nx.is_connected(G0):
        raise nx.NetworkXError("非连通图，必须为连通图")
    if G0.is_directed():
        raise nx.NetworkXError("仅适用于无向图")
    if nswap > max_tries:
        raise nx.NetworkXError("交换次数超过允许的最大次数")
    if len(G0) < 3:
        raise nx.NetworkXError("节点数太少，至少要含三个节点")

    tn = 0  # 尝试次数
    swapcount = 0  # 有效交换次数

    G = copy.deepcopy(G0)
    keys, degrees = zip(*G.degree())
    cdf = nx.utils.cumulative_distribution(degrees)

    while swapcount < nswap:  # 有效交换次数小于规定交换次数
        if tn >= max_tries:
            e = ('尝试次数 (%s) 已超过允许的最大次数' % tn + '有效交换次数（%s)' % swapcount)
            print(e)
            break
        tn += 1

        # 在保证度分布不变的情况下，随机选取两条连边u-v，x-y
        (ui, xi) = nx.utils.discrete_sequence(2, cdistribution=cdf)
        if ui == xi:
            continue
        u = keys[ui]
        x = keys[xi]
        v = random.choice(list(G[u]))
        y = random.choice(list(G[x]))

        if len({u, v, x, y}) == 4:  # 保证是四个独立节点
            if G.degree(v) == G.degree(y):  # 保证节点的度匹配特性不变
                if (y not in G[u]) and (v not in G[x]):  # 保证新生成的连边是原网络中不存在的边
                    G.add_edge(u, y) # 增加两条新连边
                    G.add_edge(v, x)
                    G.remove_edge(u, v) # 删除两条旧连边
                    G.remove_edge(x, y)
                    node_list = [u, v, x, y] + list(G[u]) + list(G[v]) + list(G[x]) + list(G[y])  # 找到四个节点以及他们邻居节点的集合
                    avcG0 = nx.clustering(G0, nodes=node_list)  # 计算旧网络中4个节点以及他们邻居节点的聚类系数
                    avcG = nx.clustering(G, nodes=node_list)  # 计算新网络中4个节点以及他们邻居节点的聚类系数
                    if avcG0 != avcG:  # 保证涉及到的四个节点聚类系数相同:若聚类系数不同，则撤回交换边的操作
                        G.add_edge(u, v)
                        G.add_edge(x, y)
                        G.remove_edge(u, y)
                        G.remove_edge(x, v)
                        continue
                    if connected == 1:  # 判断是否需要保持联通特性，为1的话则需要保持该特性
                        if not nx.is_connected(G):  # 保证网络是全联通的:若网络不是全联通网络，则撤回交换边的操作
                            G.add_edge(u, v)
                            G.add_edge(x, y)
                            G.remove_edge(u, y)
                            G.remove_edge(x, v)
                            continue
                    swapcount = swapcount + 1

    print(swapcount)
    return G





#输入原始网络
fh = open("../network/twitter/twitter_3k.txt",'rb')
g = nx.read_edgelist(fh)
fh.close()
g0 =g.to_undirected()

edges = len(g0.edges())

nswap= edges*10
max_tries = 1000000
g1 = random_2k(g0, nswap, max_tries)
#输出网络
fh = open("../network/twitter/twitter_2k_2.txt", 'wb')
nx.write_edgelist(g1,fh,data=False)
fh.close()

fh = open("../network/twitter/twitter_2k_2.txt", 'rb')
G1 = nx.read_edgelist(fh)
fh.close()
G1 = G1.to_undirected()

short = nx.average_shortest_path_length(G1)

print(short)












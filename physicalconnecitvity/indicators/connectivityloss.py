#-*- coding:utf-8 -*-
import datetime

import matplotlib
import matplotlib.pyplot as plt
import networkx as nx
import pandas as pd
# coding=utf-8
from matplotlib.font_manager import FontProperties
from matplotlib.ticker import FuncFormatter, MaxNLocator
# 多重边无向图
from numpy import array

# listXData = ['20200101', '20200102', '20200103', '20200104', '20200105', '20200106', '20200107', '20200108', '20200109', '20200110', '20200111', '20200112', '20200113', '20200114', '20200115', '20200116', '20200117', '20200118', '20200119', '20200120', '20200121', '20200122', '20200123', '20200124', '20200125', '20200126', '20200127', '20200128', '20200129', '20200130', '20200131', '20200201', '20200202', '20200203', '20200204', '20200205', '20200206', '20200207', '20200208', '20200209', '20200210', '20200211', '20200212', '20200213', '20200214', '20200215', '20200216', '20200217', '20200218', '20200219', '20200220', '20200221', '20200222', '20200223', '20200224', '20200225', '20200226', '20200227', '20200228', '20200229', '20200301', '20200302', '20200303', '20200304', '20200305', '20200306', '20200307', '20200308', '20200309', '20200310', '20200311', '20200312', '20200313', '20200314', '20200315', '20200316', '20200317', '20200318', '20200319', '20200320', '20200321', '20200322', '20200323', '20200324', '20200325', '20200326', '20200327', '20200328', '20200329', '20200330', '20200331', '20200401', '20200402', '20200403', '20200404', '20200405', '20200406', '20200407', '20200408', '20200409', '20200410', '20200411', '20200412', '20200413', '20200414', '20200415', '20200416', '20200417', '20200418', '20200419', '20200420', '20200421', '20200422', '20200423', '20200424', '20200425', '20200426', '20200427', '20200428', '20200429', '20200430', '20200501', '20200502', '20200503', '20201001', '20201002', '20201003', '20201004', '20201005', '20201006', '20201007', '20201008', '20201009', '20201010', '20201011', '20201012', '20201013', '20201014', '20201015', '20201016', '20201017', '20201018', '20201019', '20201020', '20201021', '20201022', '20201023', '20201024', '20201025', '20201026', '20201027', '20201028', '20201029', '20201030', '20201031', '20201101', '20201102', '20201103', '20201104', '20201105', '20201106', '20201107', '20201108', '20201109', '20201110', '20201111', '20201112', '20201113', '20201114', '20201115', '20201116', '20201117', '20201118', '20201119', '20201120', '20201121', '20201122', '20201123', '20201124', '20201125', '20201126', '20201127', '20201128', '20201129', '20201130', '20201201', '20201202', '20201203', '20201204', '20201205', '20201206', '20201207', '20201208', '20201209', '20201210', '20201211', '20201212', '20201213', '20201214', '20201215', '20201216', '20201217', '20201218', '20201219', '20201220', '20201221', '20201222', '20201223', '20201224', '20201225', '20201226', '20201227', '20201228', '20201229', '20201230', '20201231', '20210101', '20210102', '20210103', '20210104', '20210105', '20210106', '20210107', '20210108', '20210109', '20210110', '20210111', '20210112', '20210113', '20210114', '20210115', '20210116', '20210117', '20210118', '20210119', '20210120', '20210121', '20210122', '20210123', '20210124', '20210125', '20210126', '20210127', '20210128', '20210129', '20210130', '20210131', '20210201', '20210202', '20210203', '20210204', '20210205', '20210206', '20210207', '20210208', '20210209', '20210210', '20210211', '20210212', '20210213', '20210214', '20210215', '20210216', '20210217', '20210218', '20210219', '20210220', '20210221', '20210222', '20210223', '20210224', '20210225', '20210226', '20210227', '20210228', '20210301', '20210302', '20210303', '20210304', '20210305', '20210306', '20210307', '20210308', '20210309', '20210310', '20210311', '20210312', '20210313', '20210314', '20210315', '20210316', '20210317', '20210318', '20210319', '20210320', '20210321', '20210322', '20210323', '20210324', '20210325', '20210326', '20210327', '20210328', '20210329', '20210330', '20210331', '20210401', '20210402', '20210403', '20210404', '20210405', '20210406', '20210407', '20210408', '20210409', '20210410', '20210411', '20210412', '20210413', '20210414', '20210415', '20210416', '20210417', '20210418', '20210419', '20210420', '20210421', '20210422', '20210423', '20210424', '20210425', '20210426', '20210427', '20210428', '20210429', '20210430', '20210501', '20210502', '20210503', '20210504', '20210505', '20210506', '20210507', '20210508', '20210509', '20210510', '20210511', '20210512', '20210513', '20210514', '20210515', '20210516', '20210517', '20210518', '20210519', '20210520', '20210521', '20210522', '20210523', '20210524', '20210525', '20210526', '20210527', '20210528', '20210529', '20210530', '20210531', '20210601', '20210602', '20210603', '20210604', '20210605', '20210606', '20210607', '20210608', '20210609', '20210610', '20210611', '20210612', '20210613', '20210614', '20210615', '20210616', '20210617', '20210618', '20210619', '20210620', '20210621', '20210622', '20210623', '20210624', '20210625', '20210626', '20210627', '20210628', '20210629', '20210630', '20210701', '20210702', '20210703', '20210704', '20210705', '20210706', '20210707', '20210709', '20210710', '20210711', '20210712', '20210713', '20210714', '20210715', '20210716', '20210717', '20210718', '20210719', '20210720', '20210721', '20210722', '20210723', '20210724', '20210725', '20210726', '20210727', '20210728', '20210729', '20210730', '20210801', '20210802', '20210803', '20210804', '20210805', '20210806', '20210807', '20210808', '20210809', '20210810', '20210811', '20210813', '20210814', '20210815', '20210816', '20210817', '20210818', '20210819', '20210820', '20210821', '20210822', '20210823', '20210824', '20210826', '20210827', '20210828', '20210829', '20210830', '20210901', '20210902', '20210903', '20210904', '20210905', '20210906', '20210907', '20210908', '20210909', '20210910', '20210911', '20210912', '20210913', '20210914', '20210915', '20210916', '20210917', '20210918', '20210919', '20210920', '20210921', '20210922', '20210923', '20210924', '20210925', '20210926', '20210927', '20210928', '20210929', '20211001', '20211002', '20211003', '20211004', '20211005', '20211006', '20211007', '20211008', '20211009', '20211010', '20211011', '20211012', '20211013', '20211014', '20211015', '20211016', '20211017', '20211018', '20211019', '20211020', '20211021', '20211022', '20211023', '20211024', '20211025', '20211026', '20211027', '20211028']

listXData = ['20200101', '20200102', '20200103', '20200104', '20200105', '20200106', '20200107', '20200108', '20200109', '20200110', '20200111', '20200112', '20200113', '20200114', '20200115', '20200116', '20200117', '20200118', '20200119', '20200120', '20200121', '20200122', '20200123', '20200124', '20200125', '20200126', '20200127', '20200128', '20200129', '20200130', '20200131', '20200201', '20200202', '20200203', '20200204', '20200205', '20200206', '20200207', '20200208', '20200209', '20200210', '20200211', '20200212', '20200213', '20200214', '20200215', '20200216', '20200217', '20200218', '20200219', '20200220', '20200221', '20200222', '20200223', '20200224', '20200225', '20200226', '20200227', '20200228', '20200229', '20200301', '20200302', '20200303', '20200304', '20200305', '20200306', '20200307', '20200308', '20200309', '20200310', '20200311', '20200312', '20200313', '20200314', '20200315', '20200316', '20200317', '20200318', '20200319', '20200320', '20200321', '20200322', '20200323', '20200324', '20200325', '20200326', '20200327', '20200328', '20200329', '20200330', '20200331', '20200401', '20200402', '20200403', '20200404', '20200405', '20200406', '20200407', '20200408', '20200409', '20200410', '20200411', '20200412', '20200413', '20200414', '20200415', '20200416', '20200417', '20200418', '20200419', '20200420', '20200421', '20200422', '20200423', '20200424', '20200425', '20200426', '20200427', '20200428', '20200429', '20200430', '20200501', '20200502', '20200503']

fileNamePath = "F:\\01大连民族\\百度迁徙爬取和数据\\百度迁徙数据-final\\03将两个In和Out相同行合并_最终数据\\"

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


# 获取连通性损失指标
def connectivityloss(G):
    """
    连通性损失指标计算
    输入为图
    """
    # 获取到所有节点信息
    allNodes = array(G.nodes())
    # 定义分母
    deniminator = 0
    for i in range(0, G.number_of_nodes()):
        # 定义Ni
        numnumber = 0
        for j in range(0, G.number_of_nodes()):
            connectiveOrNone = nx.has_path(G, allNodes[i], allNodes[j])
            if connectiveOrNone:
                numnumber += 1
        twoNodesLoss = 1 - (numnumber / len(allNodes))
        deniminator = deniminator + twoNodesLoss
    connectivityLoss = deniminator / len(allNodes)
    return connectivityLoss

# 获取时间列表
def getdaylist(begin, end):
    """
    获取时间列表
    """
    beginDate = datetime.datetime.strptime(str(begin), "%Y%m%d")
    endDate = datetime.datetime.strptime(str(end), "%Y%m%d")
    dayList = []
    while beginDate <= endDate:
        dayList.append(datetime.datetime.strftime(beginDate, "%Y%m%d"))
        beginDate += datetime.timedelta(days=+1)
    return dayList

# 画出连通性损失的图像
def showconnectivitylosspic():
    """
    " /Users/wuhao/百度迁徙数据爬取/百度迁徙数据-final/in/20200101.csv"
    1.csv文件路径,写到文件前的一个。
    2.开始时间
    3.结束时间
    """
    # 时间列表，定义X轴
    # global G

    # 连通性损失，定义Y轴
    listConnectLoss =[]

    for i in range(len(listXData)):
        # 循环画图
        try:
            filePathInMethon = fileNamePath + listXData[i] + "finalData.csv"
            print(filePathInMethon)
            G = drawpicture(filePathInMethon)
        except Exception as problem:
            print("(连通性损失) error打开迁徙文件出问题：", problem)
        else:
            # 得到每一天的连通性损失并加入列表中
            connectLoss = connectivityloss(G)
            listConnectLoss.append(connectLoss)
    print("X轴数值： ", listXData)
    print("连通性损失列表： ", listConnectLoss)

    # 画图 设置X轴显示效果
    fig = plt.figure()
    ax = fig.add_subplot(111)

    # 为了设置x轴时间的显示
    def format_fn(tick_val, tick_pos):
        if int(tick_val) in range(len(listXData)):
            return listXData[int(tick_val)]
        else:
            return ''

    ax.xaxis.set_major_formatter(FuncFormatter(format_fn))
    ax.xaxis.set_major_locator(MaxNLocator(integer=True))

    # plt.ylim((-5, 40))
    # 横坐标每个值旋转90度
    # plt.xticks(rotation=90)
    # 设置Mac上的字体
    # font = FontProperties(fname='/Library/Fonts/Arial Unicode.ttf')
    font = matplotlib.font_manager.FontProperties(
        fname='C:\\Windows\\Fonts\\SimHei.ttf')
    # 坐标轴ticks的字体大小
    plt.tick_params(labelsize=5)
    plt.yticks(fontsize=10)
    plt.xticks(fontsize=7)
    plt.xlabel('日期', FontProperties=font)
    plt.ylabel('连通性损失', FontProperties=font)
    plt.title('百度迁徙2020上半年连通性损失折线图', FontProperties=font)
    ax.plot(listXData, listConnectLoss,"m.-", linewidth=1, color='blue')
    plt.show()


# 直接调用
showconnectivitylosspic()
#最新数据
# Y轴数值：  [0.07158304498269887, 0.07262196480285141, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.013888209692405536, 0.01393659587565407, 0.013888209692405536, 0.01393659587565407, 0.013888209692405536, 0.013840158311986305, 0.013840158311986305, 0.01393659587565407, 0.11890247933884322, 0.6439310063516119, 0.14550588736746745, 0.5710939871907948, 0.5988168418269545, 0.8352479338842979, 0.834790809327847, 0.8408152531229452, 0.9066260563169984, 0.8311396796245283, 0.9126178780164211, 0.9434482758620687, 0.9415306122448975, 0.9334911242603532, 0.9310595544979835, 0.9312205450447372, 0.9490966796875, 0.9460987121962608, 0.9504166666666667, 0.948137888581101, 0.9540331944539299, 0.957234450393284, 0.956147164748251, 0.9524751076901338, 0.9413670229996772, 0.9429333333333327, 0.9294275533342599, 0.9205246913580244, 0.9160188995579941, 0.8563420115653646, 0.8615477071005924, 0.7794172839506167, 0.7907160493827169, 0.7871492346938785, 0.7702885841836734, 0.7770472642267525, 0.7736909367833197, 0.7909521935495953, 0.8246219561030499, 0.809115739871978, 0.7615941419072444, 0.7790205112960739, 0.7634597121776614, 0.7776188320507008, 0.8127258808239419, 0.7955558858501768, 0.7595518529158278, 0.7593363738515441, 0.704051768990637, 0.67284646275456, 0.6439516855958178, 0.4010275824770163, 0.6177904324622471, 0.6399855777897968, 0.6395857988165675, 0.6823611677641179, 0.29945163661032126, 0.10642556610067908, 0.12891189384056453, 0.27938473183390894, 0.27569272976680426, 0.10604995674740453, 0.10795494396049908, 0.2765854534901401, 0.2696021947873806, 0.10604995674740453, 0.11160330578512424, 0.06482853223593966, 0.17166095088173006, 0.6604667554232915, 0.5835686682520781, 0.10337408646950315, 0.09730951204011003, 0.5143995978167201, 0.5807987106688415, 0.29435060509495414, 0.8237001784651994, 0.32497608418367363, 0.09691707077957301, 0.04710400000000002, 0.053293766748928745, 0.046737213403880006, 0.046919890160473626, 0.046919890160473626, 0.04710400000000002, 0.07079214360041668, 0.07107148125686322, 0.07809551458847477, 0.07870969856906396, 0.07221121441514634, 0.21295138888888934, 0.07107148125686322, 0.07163681799250368, 0.10354018943118852, 0.10372425842422424, 0.09551550765567841, 0.10318469701057331, 0.10283163265306133, 0.02061631944444461, 0.020758961318402113, 0.020758961318402113, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0607766243752402, 0.04666592593768351, 0.136739073881374, 0.0, 0.0, 0.04560250722948108, 0.0, 0.04648526077097499, 0.04648526077097499, 0.04612809225618447, 0.0, 0.0, 0.053192138671875, 0.0, 0.0, 0.03904699925397977, 0.040143778554151896, 0.0, 0.0, 0.0457763671875, 0.0, 0.03982417872959199, 0.0, 0.0, 0.04648526077097499, 0.0, 0.03919999999999974, 0.0, 0.04648526077097499, 0.03919999999999975, 0.03919999999999975, 0.03935420396445235, 0.03844675124951937, 0.03950962539021838, 0.03874455154743882, 0.03859507719015402, 0.03919999999999975, 0.11741774260724716, 0.11098293762159726, 0.03874455154743881, 0.040143778554151896, 0.03935420396445235, 0.03935420396445234, 0.1337152777777774, 0.13267536370466443, 0.03982417872959199, 0.038299560546875, 0.032119950020824774, 0.03859507719015402, 0.03982417872959199, 0.1266084277236039, 0.032777777777777746, 0.040143778554151896, 0.03874455154743882, 0.040143778554151896, 0.03919999999999974, 0.04030550898406396, 0.131145356101625, 0.17754934772215172, 0.08676384839650086, 0.038008533141036915, 0.10222386455253918, 0.1006438605619141, 0.040632909212995595, 0.18621527777777844, 0.1854995609579722, 0.03982417872959199, 0.03904699925397977, 0.2363754727509446, 0.03844675124951937, 0.24392164273116523, 0.24131763787721244, 0.03966627874575899, 0.4430260682612217, 0.33008999857145105, 0.3133698639729698, 0.023073778558343007, 0.33627470421045613, 0.5069537758667035, 0.34060453097770477, 0.12390989997167637, 0.34820556640625, 0.3727639203829663, 0.15825145632608995, 0.9108067145185731, 0.8701095461658837, 0.8266432752998603, 0.5003524070219142, 0.660777273872512, 0.7049723379550582, 0.5644102514475582, 0.5914583333333346, 0.6291928536120311, 0.6363541666666666, 0.47147094131770184, 0.3674881717392839, 0.6673231272294883, 0.44362548736847823, 0.3350830078125, 0.35258671592302604, 0.35612871225742565, 0.3313502794303222, 0.3331390944583655, 0.5147996184650782, 0.3481462709261934, 0.5229988465974622, 0.3302065442374589, 0.32330322265625, 0.5597662341594865, 0.3750375578390705, 0.7786422324031645, 0.3575668494544624, 0.40953067724295567, 0.4299112426035509, 0.42557505105767646, 0.4297879107692777, 0.41897066868661403, 0.4229832680669253, 0.3457840452188102, 0.5260560146923781, 0.5766037735849082, 0.6187239854318423, 0.5705894406119782, 0.11244605466460675, 0.24444979166930483, 0.10948979591836723, 0.10354018943118852, 0.042142857142857364, 0.09642857142857189, 0.09676134684806167, 0.09107855492543643, 0.08425225792900622, 0.06368264462809939, 0.06390857264638496, 0.06390857264638496, 0.057008897650380724, 0.056806611570248064, 0.06193110164941519, 0.07775206611570204, 0.0, 0.13826115702479388, 0.056806611570248064, 0.05804231561200103, 0.028877404230379752, 0.014183673469387731, 0.06390857264638496, 0.06243496357960451, 0.05762448768399107, 0.057832647462277335, 0.07262196480285141, 0.07082314049586774, 0.0, 0.0771025296823887, 0.0, 0.05729769474816504, 0.05729769474816504, 0.014651216622867292, 0.014491981458788366, 0.0, 0.057417820069204074, 0.05570329260929352, 0.0566892215887898, 0.056890606341155704, 0.029087370242214482, 0.0, 0.0, 0.014133559605374784, 0.0, 0.0, 0.028982007003984976, 0.014597750865051877, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0566892215887898, 0.12030178326474648, 0.014651216622867292, 0.0, 0.057832647462277335, 0.0, 0.05709342560553625, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0141335596053748, 0.028066998641919333, 0.014133559605374796, 0.01433617015730693, 0.014439669421487649, 0.0, 0.014183673469387731, 0.0, 0.014133559605374784, 0.01379243827160493, 0.04244086744992511, 0.028565427431211973, 0.0, 0.0, 0.0, 0.027868995742236842, 0.0, 0.014133559605374796, 0.02846381420323492, 0.028565427431211973, 0.014183673469387731, 0.0, 0.013985320372941883, 0.01393659587565407, 0.014284974897779574, 0.0, 0.0, 0.014034386744746519, 0.0, 0.0, 0.0, 0.19753086419753113, 0.2041420118343193, 0.2069447739389933, 0.0, 0.0, 0.0, 0.0, 0.11036860879904839, 0.0, 0.0, 0.20290798611111135, 0.0, 0.2035231701246827, 0.20699167657550482, 0.2041420118343193, 0.20338514159247484, 0.20274944124661357, 0.20168846611177133, 0.20699167657550482, 0.20414201183431932, 0.0, 0.01393659587565407, 0.0, 0.013888209692405536, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.07986111111111098, 0.08012723233255235, 0.07497107791358582, 0.08260442006107319, 0.07679999999999987, 0.38291344785174314, 0.3829202261218421, 0.39549906856559075, 0.3961307616106288, 0.39456776136312716, 0.3879657759315521, 0.386260986328125, 0.37926111531962003, 0.3851383064088772, 0.07262370950516223, 0.07443786982248508, 0.07471564228320987, 0.07361679365033466, 0.41591220850480126, 0.41935867768595136, 0.6119871201337752, 0.07706857051521109, 0.07176954732510289, 0.07075496829879044, 0.06976864551524246, 0.073717053745948, 0.0688094160253509, 0.07497107791358582, 0.06959558967274428, 0.0566892215887898, 0.05570329260929352, 0.0, 0.06179266636487076, 0.06158149059171688, 0.06243496357960451, 0.0566892215887898, 0.06959558967274428, 0.0, 0.0, 0.06748496258985774, 0.0, 0.06959558967274428, 0.0, 0.04788209156357324, 0.04788209156357324, 0.047556901857017886, 0.04755690185701789, 0.041273411902782865, 0.041415820252384924, 0.020831024930747732, 0.12071017655227108, 0.08310431732120876, 0.06996312997006743, 0.06996312997006744, 0.04246674602763868, 0.07045575988218297, 0.08308673469387834, 0.020903590557428995, 0.021050248981439448, 0.02090359055742899, 0.02090359055742899, 0.02090359055742899, 0.027580810797594144, 0.02758081079759414, 0.03447214527546974, 0.028163265306122398, 0.021426057944193323, 0.02796640008047871, 0.04121883656509644, 0.034832251898797656, 0.04808073794881987, 0.060751010695771754, 0.0, 0.0, 0.0, 0.06193110164941519, 0.05601161341709403, 0.05621716062229437, 0.0419954154582642, 0.014284974897779574, 0.014387733669397218, 0.014284974897779574, 0.0145446738853332, 0.014597750865051877, 0.01470507544581625]

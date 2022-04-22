var edges = [[{'name': '曲靖'}, {'name': '昆明'}], [{'name': '曲靖'}, {'name': '毕节'}], [{'name': '曲靖'}, {'name': '六盘水'}], [{'name': '昆明'}, {'name': '玉溪'}], [{'name': '昆明'}, {'name': '楚雄彝族自治州'}], [{'name': '昆明'}, {'name': '红河哈尼族彝族自治州'}], [{'name': '昆明'}, {'name': '昭通'}], [{'name': '昆明'}, {'name': '大理白族自治州'}], [{'name': '玉溪'}, {'name': '红河哈尼族彝族自治州'}], [{'name': '红河哈尼族彝族自治州'}, {'name': '文山壮族苗族自治州'}], [{'name': '昭通'}, {'name': '凉山彝族自治州'}], [{'name': '昭通'}, {'name': '毕节'}], [{'name': '鄂尔多斯'}, {'name': '榆林'}], [{'name': '鄂尔多斯'}, {'name': '包头'}], [{'name': '鄂尔多斯'}, {'name': '呼和浩特'}], [{'name': '榆林'}, {'name': '吕梁'}], [{'name': '榆林'}, {'name': '延安'}], [{'name': '榆林'}, {'name': '忻州'}], [{'name': '吕梁'}, {'name': '晋中'}], [{'name': '吕梁'}, {'name': '太原'}], [{'name': '遵义'}, {'name': '铜仁'}], [{'name': '遵义'}, {'name': '贵阳'}], [{'name': '遵义'}, {'name': '毕节'}], [{'name': '遵义'}, {'name': '重庆'}], [{'name': '遵义'}, {'name': '泸州'}], [{'name': '遵义'}, {'name': '黔南布依族苗族自治州'}], [{'name': '铜仁'}, {'name': '贵阳'}], [{'name': '铜仁'}, {'name': '重庆'}], [{'name': '铜仁'}, {'name': '黔东南苗族侗族自治州'}], [{'name': '贵阳'}, {'name': '毕节'}], [{'name': '贵阳'}, {'name': '黔南布依族苗族自治州'}], [{'name': '贵阳'}, {'name': '安顺'}], [{'name': '贵阳'}, {'name': '黔东南苗族侗族自治州'}], [{'name': '重庆'}, {'name': '达州'}], [{'name': '重庆'}, {'name': '泸州'}], [{'name': '重庆'}, {'name': '广安'}], [{'name': '重庆'}, {'name': '成都'}], [{'name': '辽阳'}, {'name': '鞍山'}], [{'name': '辽阳'}, {'name': '沈阳'}], [{'name': '鞍山'}, {'name': '营口'}], [{'name': '鞍山'}, {'name': '沈阳'}], [{'name': '沈阳'}, {'name': '抚顺'}], [{'name': '沈阳'}, {'name': '铁岭'}], [{'name': '沈阳'}, {'name': '锦州'}], [{'name': '毕节'}, {'name': '六盘水'}], [{'name': '毕节'}, {'name': '安顺'}], [{'name': '黔南布依族苗族自治州'}, {'name': '黔东南苗族侗族自治州'}], [{'name': '黔南布依族苗族自治州'}, {'name': '安顺'}], [{'name': '宿州'}, {'name': '徐州'}], [{'name': '宿州'}, {'name': '淮北'}], [{'name': '宿州'}, {'name': '商丘'}], [{'name': '徐州'}, {'name': '宿迁'}], [{'name': '徐州'}, {'name': '临沂'}], [{'name': '清远'}, {'name': '广州'}], [{'name': '清远'}, {'name': '佛山'}], [{'name': '广州'}, {'name': '湛江'}], [{'name': '广州'}, {'name': '东莞'}], [{'name': '广州'}, {'name': '惠州'}], [{'name': '广州'}, {'name': '中山'}], [{'name': '广州'}, {'name': '佛山'}], [{'name': '广州'}, {'name': '深圳'}], [{'name': '广州'}, {'name': '江门'}], [{'name': '广州'}, {'name': '韶关'}], [{'name': '广州'}, {'name': '肇庆'}], [{'name': '广州'}, {'name': '茂名'}], [{'name': '佛山'}, {'name': '东莞'}], [{'name': '佛山'}, {'name': '中山'}], [{'name': '佛山'}, {'name': '肇庆'}], [{'name': '佛山'}, {'name': '江门'}], [{'name': '佛山'}, {'name': '深圳'}], [{'name': '益阳'}, {'name': '长沙'}], [{'name': '益阳'}, {'name': '岳阳'}], [{'name': '益阳'}, {'name': '常德'}], [{'name': '长沙'}, {'name': '邵阳'}], [{'name': '长沙'}, {'name': '衡阳'}], [{'name': '长沙'}, {'name': '株洲'}], [{'name': '长沙'}, {'name': '湘潭'}], [{'name': '长沙'}, {'name': '岳阳'}], [{'name': '长沙'}, {'name': '常德'}], [{'name': '长沙'}, {'name': '娄底'}], [{'name': '常德'}, {'name': '张家界'}], [{'name': '德州'}, {'name': '济南'}], [{'name': '德州'}, {'name': '聊城'}], [{'name': '济南'}, {'name': '泰安'}], [{'name': '济南'}, {'name': '聊城'}], [{'name': '聊城'}, {'name': '濮阳'}], [{'name': '邯郸'}, {'name': '安阳'}], [{'name': '邯郸'}, {'name': '石家庄'}], [{'name': '邯郸'}, {'name': '邢台'}], [{'name': '安阳'}, {'name': '濮阳'}], [{'name': '安阳'}, {'name': '新乡'}], [{'name': '安阳'}, {'name': '鹤壁'}], [{'name': '渭南'}, {'name': '西安'}], [{'name': '西安'}, {'name': '咸阳'}], [{'name': '湖州'}, {'name': '嘉兴'}], [{'name': '湖州'}, {'name': '杭州'}], [{'name': '嘉兴'}, {'name': '上海'}], [{'name': '嘉兴'}, {'name': '苏州'}], [{'name': '嘉兴'}, {'name': '杭州'}], [{'name': '葫芦岛'}, {'name': '锦州'}], [{'name': '锦州'}, {'name': '盘锦'}], [{'name': '邵阳'}, {'name': '娄底'}], [{'name': '娄底'}, {'name': '湘潭'}], [{'name': '黄冈'}, {'name': '武汉'}], [{'name': '武汉'}, {'name': '孝感'}], [{'name': '邢台'}, {'name': '石家庄'}], [{'name': '石家庄'}, {'name': '保定'}], [{'name': '石家庄'}, {'name': '衡水'}], [{'name': '保定'}, {'name': '北京'}], [{'name': '金华'}, {'name': '丽水'}], [{'name': '金华'}, {'name': '衢州'}], [{'name': '金华'}, {'name': '杭州'}], [{'name': '衢州'}, {'name': '杭州'}], [{'name': '潮州'}, {'name': '汕头'}], [{'name': '汕头'}, {'name': '揭阳'}], [{'name': '淄博'}, {'name': '滨州'}], [{'name': '淄博'}, {'name': '潍坊'}], [{'name': '上海'}, {'name': '苏州'}], [{'name': '上海'}, {'name': '南通'}], [{'name': '苏州'}, {'name': '无锡'}], [{'name': '苏州'}, {'name': '南通'}], [{'name': '南通'}, {'name': '盐城'}], [{'name': '南通'}, {'name': '泰州'}], [{'name': '泰安'}, {'name': '济宁'}], [{'name': '济宁'}, {'name': '枣庄'}], [{'name': '济宁'}, {'name': '菏泽'}], [{'name': '永州'}, {'name': '衡阳'}], [{'name': '永州'}, {'name': '郴州'}], [{'name': '衡阳'}, {'name': '郴州'}], [{'name': '商丘'}, {'name': '开封'}], [{'name': '商丘'}, {'name': '周口'}], [{'name': '商丘'}, {'name': '亳州'}], [{'name': '开封'}, {'name': '周口'}], [{'name': '开封'}, {'name': '郑州'}], [{'name': '沧州'}, {'name': '天津'}], [{'name': '天津'}, {'name': '唐山'}], [{'name': '天津'}, {'name': '廊坊'}], [{'name': '天津'}, {'name': '北京'}], [{'name': '六盘水'}, {'name': '黔西南布依族苗族自治州'}], [{'name': '六盘水'}, {'name': '安顺'}], [{'name': '北京'}, {'name': '廊坊'}], [{'name': '安顺'}, {'name': '黔西南布依族苗族自治州'}], [{'name': '大同'}, {'name': '朔州'}], [{'name': '达州'}, {'name': '巴中'}], [{'name': '巴中'}, {'name': '南充'}], [{'name': '青岛'}, {'name': '潍坊'}], [{'name': '青岛'}, {'name': '烟台'}], [{'name': '来宾'}, {'name': '柳州'}], [{'name': '泰州'}, {'name': '盐城'}], [{'name': '泰州'}, {'name': '扬州'}], [{'name': '泰州'}, {'name': '无锡'}], [{'name': '株洲'}, {'name': '湘潭'}], [{'name': '南充'}, {'name': '成都'}], [{'name': '南充'}, {'name': '广元'}], [{'name': '成都'}, {'name': '雅安'}], [{'name': '成都'}, {'name': '眉山'}], [{'name': '成都'}, {'name': '德阳'}], [{'name': '成都'}, {'name': '绵阳'}], [{'name': '成都'}, {'name': '资阳'}], [{'name': '成都'}, {'name': '内江'}], [{'name': '成都'}, {'name': '广元'}], [{'name': '成都'}, {'name': '乐山'}], [{'name': '无锡'}, {'name': '常州'}], [{'name': '芜湖'}, {'name': '马鞍山'}], [{'name': '马鞍山'}, {'name': '南京'}], [{'name': '周口'}, {'name': '阜阳'}], [{'name': '周口'}, {'name': '驻马店'}], [{'name': '周口'}, {'name': '郑州'}], [{'name': '周口'}, {'name': '亳州'}], [{'name': '亳州'}, {'name': '阜阳'}], [{'name': '厦门'}, {'name': '漳州'}], [{'name': '厦门'}, {'name': '泉州'}], [{'name': '厦门'}, {'name': '龙岩'}], [{'name': '漳州'}, {'name': '泉州'}], [{'name': '泉州'}, {'name': '莆田'}], [{'name': '泉州'}, {'name': '福州'}], [{'name': '泉州'}, {'name': '三明'}], [{'name': '内江'}, {'name': '自贡'}], [{'name': '内江'}, {'name': '资阳'}], [{'name': '湛江'}, {'name': '茂名'}], [{'name': '湛江'}, {'name': '玉林'}], [{'name': '茂名'}, {'name': '玉林'}], [{'name': '定西'}, {'name': '兰州'}], [{'name': '兰州'}, {'name': '白银'}], [{'name': '兰州'}, {'name': '临夏回族自治州'}], [{'name': '南宁'}, {'name': '钦州'}], [{'name': '南宁'}, {'name': '崇左'}], [{'name': '南宁'}, {'name': '河池'}], [{'name': '南宁'}, {'name': '百色'}], [{'name': '南宁'}, {'name': '贵港'}], [{'name': '南宁'}, {'name': '玉林'}], [{'name': '眉山'}, {'name': '乐山'}], [{'name': '莆田'}, {'name': '福州'}], [{'name': '福州'}, {'name': '三明'}], [{'name': '福州'}, {'name': '宁德'}], [{'name': '福州'}, {'name': '南平'}], [{'name': '黔西南布依族苗族自治州'}, {'name': '百色'}], [{'name': '平顶山'}, {'name': '许昌'}], [{'name': '许昌'}, {'name': '郑州'}], [{'name': '许昌'}, {'name': '漯河'}], [{'name': '临沂'}, {'name': '日照'}], [{'name': '德阳'}, {'name': '绵阳'}], [{'name': '绵阳'}, {'name': '广元'}], [{'name': '临汾'}, {'name': '运城'}], [{'name': '绍兴'}, {'name': '宁波'}], [{'name': '绍兴'}, {'name': '杭州'}], [{'name': '宁波'}, {'name': '台州'}], [{'name': '宁波'}, {'name': '杭州'}], [{'name': '镇江'}, {'name': '常州'}], [{'name': '镇江'}, {'name': '南京'}], [{'name': '上饶'}, {'name': '鹰潭'}], [{'name': '上饶'}, {'name': '南昌'}], [{'name': '上饶'}, {'name': '景德镇'}], [{'name': '东莞'}, {'name': '深圳'}], [{'name': '东莞'}, {'name': '惠州'}], [{'name': '深圳'}, {'name': '惠州'}], [{'name': '深圳'}, {'name': '汕尾'}], [{'name': '惠州'}, {'name': '河源'}], [{'name': '晋中'}, {'name': '太原'}], [{'name': '玉林'}, {'name': '贵港'}], [{'name': '贵港'}, {'name': '梧州'}], [{'name': '六安'}, {'name': '合肥'}], [{'name': '合肥'}, {'name': '淮南'}], [{'name': '合肥'}, {'name': '安庆'}], [{'name': '中山'}, {'name': '珠海'}], [{'name': '中山'}, {'name': '江门'}], [{'name': '阜阳'}, {'name': '驻马店'}], [{'name': '肇庆'}, {'name': '云浮'}], [{'name': '吉安'}, {'name': '赣州'}], [{'name': '太原'}, {'name': '忻州'}], [{'name': '南昌'}, {'name': '抚州'}], [{'name': '南昌'}, {'name': '宜春'}], [{'name': '南昌'}, {'name': '九江'}], [{'name': '郑州'}, {'name': '新乡'}], [{'name': '郑州'}, {'name': '洛阳'}], [{'name': '南京'}, {'name': '滁州'}], [{'name': '大理白族自治州'}, {'name': '丽江'}], [{'name': '新乡'}, {'name': '焦作'}], [{'name': '朝阳'}, {'name': '赤峰'}], [{'name': '长春'}, {'name': '松原'}], [{'name': '长春'}, {'name': '四平'}], [{'name': '长春'}, {'name': '吉林'}], [{'name': '保山'}, {'name': '德宏傣族景颇族自治州'}]]
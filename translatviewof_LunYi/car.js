var carData = [
  { "dep_city": "北京", "arr_city": "廊坊", "number": 33465 }
  ,
  { "dep_city": "北京", "arr_city": "保定", "number": 10446 }
  ,
  { "dep_city": "北京", "arr_city": "天津", "number": 7957 }
  ,
  { "dep_city": "北京", "arr_city": "张家口", "number": 4036 }
  ,
  { "dep_city": "北京", "arr_city": "承德", "number": 2358 }
  ,
  { "dep_city": "北京", "arr_city": "沧州", "number": 1920 }
  ,
  { "dep_city": "北京", "arr_city": "唐山", "number": 1834 }
  ,
  { "dep_city": "北京", "arr_city": "石家庄", "number": 1719 }
  ,
  { "dep_city": "北京", "arr_city": "邯郸", "number": 1664 }
  ,
  { "dep_city": "北京", "arr_city": "衡水", "number": 1139 }
  ,
  { "dep_city": "天津", "arr_city": "廊坊", "number": 11588 }
  ,
  { "dep_city": "天津", "arr_city": "北京", "number": 10695 }
  ,
  { "dep_city": "天津", "arr_city": "沧州", "number": 5544 }
  ,
  { "dep_city": "天津", "arr_city": "唐山", "number": 5495 }
  ,
  { "dep_city": "天津", "arr_city": "保定", "number": 1693 }
  ,
  { "dep_city": "天津", "arr_city": "德州", "number": 1001 }
  ,
  { "dep_city": "天津", "arr_city": "邯郸", "number": 1000 }
  ,
  { "dep_city": "天津", "arr_city": "石家庄", "number": 667 }
  ,
  { "dep_city": "天津", "arr_city": "衡水", "number": 632 }
  ,
  { "dep_city": "天津", "arr_city": "滨州", "number": 618 }
  ,
  { "dep_city": "石家庄", "arr_city": "邢台", "number": 10743 }
  ,
  { "dep_city": "石家庄", "arr_city": "保定", "number": 8914 }
  ,
  { "dep_city": "石家庄", "arr_city": "衡水", "number": 4458 }
  ,
  { "dep_city": "石家庄", "arr_city": "邯郸", "number": 2937 }
  ,
  { "dep_city": "石家庄", "arr_city": "沧州", "number": 2417 }
  ,
  { "dep_city": "石家庄", "arr_city": "北京", "number": 2142 }
  ,
  { "dep_city": "石家庄", "arr_city": "廊坊", "number": 1232 }
  ,
  { "dep_city": "石家庄", "arr_city": "天津", "number": 681 }
  ,
  { "dep_city": "石家庄", "arr_city": "张家口", "number": 452 }
  ,
  { "dep_city": "石家庄", "arr_city": "唐山", "number": 452 }
  ,
  { "dep_city": "唐山", "arr_city": "天津", "number": 5873 }
  ,
  { "dep_city": "唐山", "arr_city": "秦皇岛", "number": 3029 }
  ,
  { "dep_city": "唐山", "arr_city": "北京", "number": 2668 }
  ,
  { "dep_city": "唐山", "arr_city": "承德", "number": 1535 }
  ,
  { "dep_city": "唐山", "arr_city": "廊坊", "number": 1139 }
  ,
  { "dep_city": "唐山", "arr_city": "沧州", "number": 607 }
  ,
  { "dep_city": "唐山", "arr_city": "保定", "number": 541 }
  ,
  { "dep_city": "唐山", "arr_city": "石家庄", "number": 343 }
  ,
  { "dep_city": "唐山", "arr_city": "葫芦岛", "number": 176 }
  ,
  { "dep_city": "唐山", "arr_city": "张家口", "number": 167 }
  ,
  { "dep_city": "秦皇岛", "arr_city": "唐山", "number": 3306 }
  ,
  { "dep_city": "秦皇岛", "arr_city": "葫芦岛", "number": 918 }
  ,
  { "dep_city": "秦皇岛", "arr_city": "北京", "number": 746 }
  ,
  { "dep_city": "秦皇岛", "arr_city": "天津", "number": 455 }
  ,
  { "dep_city": "秦皇岛", "arr_city": "承德", "number": 303 }
  ,
  { "dep_city": "秦皇岛", "arr_city": "廊坊", "number": 187 }
  ,
  { "dep_city": "秦皇岛", "arr_city": "沧州", "number": 108 }
  ,
  { "dep_city": "秦皇岛", "arr_city": "保定", "number": 90 }
  ,
  { "dep_city": "秦皇岛", "arr_city": "沈阳", "number": 89 }
  ,
  { "dep_city": "秦皇岛", "arr_city": "锦州", "number": 75 }
  ,
  { "dep_city": "邯郸", "arr_city": "邢台", "number": 8312 }
  ,
  { "dep_city": "邯郸", "arr_city": "安阳", "number": 3605 }
  ,
  { "dep_city": "邯郸", "arr_city": "聊城", "number": 2463 }
  ,
  { "dep_city": "邯郸", "arr_city": "濮阳", "number": 2197 }
  ,
  { "dep_city": "邯郸", "arr_city": "石家庄", "number": 2067 }
  ,
  { "dep_city": "邯郸", "arr_city": "北京", "number": 875 }
  ,
  { "dep_city": "邯郸", "arr_city": "衡水", "number": 483 }
  ,
  { "dep_city": "邯郸", "arr_city": "保定", "number": 472 }
  ,
  { "dep_city": "邯郸", "arr_city": "长治", "number": 358 }
  ,
  { "dep_city": "邯郸", "arr_city": "天津", "number": 346 }
  ,
  { "dep_city": "邢台", "arr_city": "石家庄", "number": 10417 }
  ,
  { "dep_city": "邢台", "arr_city": "邯郸", "number": 7234 }
  ,
  { "dep_city": "邢台", "arr_city": "聊城", "number": 2760 }
  ,
  { "dep_city": "邢台", "arr_city": "衡水", "number": 2696 }
  ,
  { "dep_city": "邢台", "arr_city": "北京", "number": 768 }
  ,
  { "dep_city": "邢台", "arr_city": "保定", "number": 624 }
  ,
  { "dep_city": "邢台", "arr_city": "德州", "number": 616 }
  ,
  { "dep_city": "邢台", "arr_city": "沧州", "number": 451 }
  ,
  { "dep_city": "邢台", "arr_city": "晋中", "number": 427 }
  ,
  { "dep_city": "邢台", "arr_city": "济南", "number": 294 }
  ,
  { "dep_city": "保定", "arr_city": "北京", "number": 14897 }
  ,
  { "dep_city": "保定", "arr_city": "石家庄", "number": 7682 }
  ,
  { "dep_city": "保定", "arr_city": "廊坊", "number": 5589 }
  ,
  { "dep_city": "保定", "arr_city": "沧州", "number": 5044 }
  ,
  { "dep_city": "保定", "arr_city": "衡水", "number": 2722 }
  ,
  { "dep_city": "保定", "arr_city": "天津", "number": 1804 }
  ,
  { "dep_city": "保定", "arr_city": "邢台", "number": 648 }
  ,
  { "dep_city": "保定", "arr_city": "忻州", "number": 627 }
  ,
  { "dep_city": "保定", "arr_city": "张家口", "number": 619 }
  ,
  { "dep_city": "保定", "arr_city": "邯郸", "number": 592 }
  ,
  { "dep_city": "张家口", "arr_city": "北京", "number": 6113 }
  ,
  { "dep_city": "张家口", "arr_city": "大同", "number": 1236 }
  ,
  { "dep_city": "张家口", "arr_city": "乌兰察布", "number": 1091 }
  ,
  { "dep_city": "张家口", "arr_city": "锡盟", "number": 857 }
  ,
  { "dep_city": "张家口", "arr_city": "保定", "number": 848 }
  ,
  { "dep_city": "张家口", "arr_city": "承德", "number": 407 }
  ,
  { "dep_city": "张家口", "arr_city": "廊坊", "number": 351 }
  ,
  { "dep_city": "张家口", "arr_city": "天津", "number": 309 }
  ,
  { "dep_city": "张家口", "arr_city": "石家庄", "number": 299 }
  ,
  { "dep_city": "张家口", "arr_city": "呼和浩特", "number": 249 }
  ,
  { "dep_city": "承德", "arr_city": "北京", "number": 3105 }
  ,
  { "dep_city": "承德", "arr_city": "唐山", "number": 1668 }
  ,
  { "dep_city": "承德", "arr_city": "赤峰", "number": 767 }
  ,
  { "dep_city": "承德", "arr_city": "廊坊", "number": 427 }
  ,
  { "dep_city": "承德", "arr_city": "张家口", "number": 391 }
  ,
  { "dep_city": "承德", "arr_city": "秦皇岛", "number": 369 }
  ,
  { "dep_city": "承德", "arr_city": "朝阳", "number": 349 }
  ,
  { "dep_city": "承德", "arr_city": "天津", "number": 331 }
  ,
  { "dep_city": "承德", "arr_city": "锡盟", "number": 305 }
  ,
  { "dep_city": "承德", "arr_city": "保定", "number": 161 }
  ,
  { "dep_city": "沧州", "arr_city": "天津", "number": 5811 }
  ,
  { "dep_city": "沧州", "arr_city": "廊坊", "number": 5064 }
  ,
  { "dep_city": "沧州", "arr_city": "保定", "number": 4529 }
  ,
  { "dep_city": "沧州", "arr_city": "德州", "number": 3897 }
  ,
  { "dep_city": "沧州", "arr_city": "衡水", "number": 3686 }
  ,
  { "dep_city": "沧州", "arr_city": "北京", "number": 2349 }
  ,
  { "dep_city": "沧州", "arr_city": "滨州", "number": 1660 }
  ,
  { "dep_city": "沧州", "arr_city": "石家庄", "number": 1632 }
  ,
  { "dep_city": "沧州", "arr_city": "唐山", "number": 576 }
  ,
  { "dep_city": "沧州", "arr_city": "邢台", "number": 540 }
  ,
  { "dep_city": "廊坊", "arr_city": "北京", "number": 44906 }
  ,
  { "dep_city": "廊坊", "arr_city": "天津", "number": 11777 }
  ,
  { "dep_city": "廊坊", "arr_city": "保定", "number": 5626 }
  ,
  { "dep_city": "廊坊", "arr_city": "沧州", "number": 5293 }
  ,
  { "dep_city": "廊坊", "arr_city": "唐山", "number": 1002 }
  ,
  { "dep_city": "廊坊", "arr_city": "石家庄", "number": 830 }
  ,
  { "dep_city": "廊坊", "arr_city": "衡水", "number": 608 }
  ,
  { "dep_city": "廊坊", "arr_city": "邯郸", "number": 466 }
  ,
  { "dep_city": "廊坊", "arr_city": "张家口", "number": 357 }
  ,
  { "dep_city": "廊坊", "arr_city": "承德", "number": 329 }
  ,
  { "dep_city": "衡水", "arr_city": "石家庄", "number": 4219 }
  ,
  { "dep_city": "衡水", "arr_city": "沧州", "number": 3980 }
  ,
  { "dep_city": "衡水", "arr_city": "德州", "number": 3720 }
  ,
  { "dep_city": "衡水", "arr_city": "邢台", "number": 2790 }
  ,
  { "dep_city": "衡水", "arr_city": "保定", "number": 2292 }
  ,
  { "dep_city": "衡水", "arr_city": "北京", "number": 1205 }
  ,
  { "dep_city": "衡水", "arr_city": "邯郸", "number": 625 }
  ,
  { "dep_city": "衡水", "arr_city": "天津", "number": 570 }
  ,
  { "dep_city": "衡水", "arr_city": "廊坊", "number": 455 }
  ,
  { "dep_city": "衡水", "arr_city": "聊城", "number": 213 }
  ,
  { "dep_city": "太原", "arr_city": "晋中", "number": 10194 }
  ,
  { "dep_city": "太原", "arr_city": "吕梁", "number": 7720 }
  ,
  { "dep_city": "太原", "arr_city": "忻州", "number": 3505 }
  ,
  { "dep_city": "太原", "arr_city": "长治", "number": 1766 }
  ,
  { "dep_city": "太原", "arr_city": "临汾", "number": 1293 }
  ,
  { "dep_city": "太原", "arr_city": "大同", "number": 808 }
  ,
  { "dep_city": "太原", "arr_city": "阳泉", "number": 684 }
  ,
  { "dep_city": "太原", "arr_city": "朔州", "number": 654 }
  ,
  { "dep_city": "太原", "arr_city": "晋城", "number": 590 }
  ,
  { "dep_city": "太原", "arr_city": "运城", "number": 496 }
  ,
  { "dep_city": "大同", "arr_city": "朔州", "number": 3675 }
  ,
  { "dep_city": "大同", "arr_city": "张家口", "number": 1249 }
  ,
  { "dep_city": "大同", "arr_city": "乌兰察布", "number": 683 }
  ,
  { "dep_city": "大同", "arr_city": "太原", "number": 553 }
  ,
  { "dep_city": "大同", "arr_city": "保定", "number": 470 }
  ,
  { "dep_city": "大同", "arr_city": "忻州", "number": 424 }
  ,
  { "dep_city": "大同", "arr_city": "北京", "number": 417 }
  ,
  { "dep_city": "大同", "arr_city": "鄂尔多斯", "number": 356 }
  ,
  { "dep_city": "大同", "arr_city": "呼和浩特", "number": 286 }
  ,
  { "dep_city": "大同", "arr_city": "天津", "number": 80 }
  ,
  { "dep_city": "阳泉", "arr_city": "晋中", "number": 791 }
  ,
  { "dep_city": "阳泉", "arr_city": "太原", "number": 601 }
  ,
  { "dep_city": "阳泉", "arr_city": "石家庄", "number": 521 }
  ,
  { "dep_city": "阳泉", "arr_city": "忻州", "number": 125 }
  ,
  { "dep_city": "阳泉", "arr_city": "吕梁", "number": 86 }
  ,
  { "dep_city": "阳泉", "arr_city": "邢台", "number": 72 }
  ,
  { "dep_city": "阳泉", "arr_city": "北京", "number": 65 }
  ,
  { "dep_city": "阳泉", "arr_city": "保定", "number": 60 }
  ,
  { "dep_city": "阳泉", "arr_city": "榆林", "number": 51 }
  ,
  { "dep_city": "阳泉", "arr_city": "邯郸", "number": 45 }
  ,
  { "dep_city": "长治", "arr_city": "晋城", "number": 1670 }
  ,
  { "dep_city": "长治", "arr_city": "太原", "number": 1051 }
  ,
  { "dep_city": "长治", "arr_city": "晋中", "number": 700 }
  ,
  { "dep_city": "长治", "arr_city": "临汾", "number": 549 }
  ,
  { "dep_city": "长治", "arr_city": "安阳", "number": 532 }
  ,
  { "dep_city": "长治", "arr_city": "邯郸", "number": 423 }
  ,
  { "dep_city": "长治", "arr_city": "吕梁", "number": 154 }
  ,
  { "dep_city": "长治", "arr_city": "焦作", "number": 149 }
  ,
  { "dep_city": "长治", "arr_city": "郑州", "number": 136 }
  ,
  { "dep_city": "长治", "arr_city": "新乡", "number": 115 }
  ,
  { "dep_city": "晋城", "arr_city": "长治", "number": 1897 }
  ,
  { "dep_city": "晋城", "arr_city": "焦作", "number": 667 }
  ,
  { "dep_city": "晋城", "arr_city": "郑州", "number": 439 }
  ,
  { "dep_city": "晋城", "arr_city": "太原", "number": 355 }
  ,
  { "dep_city": "晋城", "arr_city": "临汾", "number": 319 }
  ,
  { "dep_city": "晋城", "arr_city": "新乡", "number": 312 }
  ,
  { "dep_city": "晋城", "arr_city": "运城", "number": 160 }
  ,
  { "dep_city": "晋城", "arr_city": "晋中", "number": 145 }
  ,
  { "dep_city": "晋城", "arr_city": "安阳", "number": 117 }
  ,
  { "dep_city": "晋城", "arr_city": "洛阳", "number": 92 }
  ,
  { "dep_city": "朔州", "arr_city": "大同", "number": 3815 }
  ,
  { "dep_city": "朔州", "arr_city": "太原", "number": 640 }
  ,
  { "dep_city": "朔州", "arr_city": "忻州", "number": 618 }
  ,
  { "dep_city": "朔州", "arr_city": "鄂尔多斯", "number": 382 }
  ,
  { "dep_city": "朔州", "arr_city": "呼和浩特", "number": 323 }
  ,
  { "dep_city": "朔州", "arr_city": "张家口", "number": 159 }
  ,
  { "dep_city": "朔州", "arr_city": "保定", "number": 148 }
  ,
  { "dep_city": "朔州", "arr_city": "乌兰察布", "number": 99 }
  ,
  { "dep_city": "朔州", "arr_city": "北京", "number": 86 }
  ,
  { "dep_city": "朔州", "arr_city": "石家庄", "number": 49 }
  ,
  { "dep_city": "晋中", "arr_city": "太原", "number": 9916 }
  ,
  { "dep_city": "晋中", "arr_city": "吕梁", "number": 2865 }
  ,
  { "dep_city": "晋中", "arr_city": "长治", "number": 925 }
  ,
  { "dep_city": "晋中", "arr_city": "阳泉", "number": 726 }
  ,
  { "dep_city": "晋中", "arr_city": "临汾", "number": 665 }
  ,
  { "dep_city": "晋中", "arr_city": "邢台", "number": 447 }
  ,
  { "dep_city": "晋中", "arr_city": "忻州", "number": 378 }
  ,
  { "dep_city": "晋中", "arr_city": "石家庄", "number": 368 }
  ,
  { "dep_city": "晋中", "arr_city": "邯郸", "number": 232 }
  ,
  { "dep_city": "晋中", "arr_city": "运城", "number": 211 }
  ,
  { "dep_city": "运城", "arr_city": "临汾", "number": 2803 }
  ,
  { "dep_city": "运城", "arr_city": "三门峡", "number": 1236 }
  ,
  { "dep_city": "运城", "arr_city": "渭南", "number": 915 }
  ,
  { "dep_city": "运城", "arr_city": "西安", "number": 547 }
  ,
  { "dep_city": "运城", "arr_city": "太原", "number": 313 }
  ,
  { "dep_city": "运城", "arr_city": "济源", "number": 163 }
  ,
  { "dep_city": "运城", "arr_city": "郑州", "number": 137 }
  ,
  { "dep_city": "运城", "arr_city": "延安", "number": 122 }
  ,
  { "dep_city": "运城", "arr_city": "洛阳", "number": 113 }
  ,
  { "dep_city": "运城", "arr_city": "晋中", "number": 109 }
  ,
  { "dep_city": "忻州", "arr_city": "太原", "number": 3062 }
  ,
  { "dep_city": "忻州", "arr_city": "榆林", "number": 1731 }
  ,
  { "dep_city": "忻州", "arr_city": "鄂尔多斯", "number": 1088 }
  ,
  { "dep_city": "忻州", "arr_city": "保定", "number": 955 }
  ,
  { "dep_city": "忻州", "arr_city": "朔州", "number": 627 }
  ,
  { "dep_city": "忻州", "arr_city": "石家庄", "number": 523 }
  ,
  { "dep_city": "忻州", "arr_city": "天津", "number": 515 }
  ,
  { "dep_city": "忻州", "arr_city": "吕梁", "number": 514 }
  ,
  { "dep_city": "忻州", "arr_city": "大同", "number": 461 }
  ,
  { "dep_city": "忻州", "arr_city": "北京", "number": 356 }
  ,
  { "dep_city": "临汾", "arr_city": "运城", "number": 2915 }
  ,
  { "dep_city": "临汾", "arr_city": "太原", "number": 921 }
  ,
  { "dep_city": "临汾", "arr_city": "吕梁", "number": 696 }
  ,
  { "dep_city": "临汾", "arr_city": "延安", "number": 674 }
  ,
  { "dep_city": "临汾", "arr_city": "长治", "number": 576 }
  ,
  { "dep_city": "临汾", "arr_city": "晋中", "number": 574 }
  ,
  { "dep_city": "临汾", "arr_city": "晋城", "number": 264 }
  ,
  { "dep_city": "临汾", "arr_city": "渭南", "number": 208 }
  ,
  { "dep_city": "临汾", "arr_city": "西安", "number": 190 }
  ,
  { "dep_city": "临汾", "arr_city": "榆林", "number": 141 }
  ,
  { "dep_city": "吕梁", "arr_city": "太原", "number": 6721 }
  ,
  { "dep_city": "吕梁", "arr_city": "晋中", "number": 2758 }
  ,
  { "dep_city": "吕梁", "arr_city": "榆林", "number": 1841 }
  ,
  { "dep_city": "吕梁", "arr_city": "临汾", "number": 669 }
  ,
  { "dep_city": "吕梁", "arr_city": "忻州", "number": 581 }
  ,
  { "dep_city": "吕梁", "arr_city": "长治", "number": 212 }
  ,
  { "dep_city": "吕梁", "arr_city": "鄂尔多斯", "number": 198 }
  ,
  { "dep_city": "吕梁", "arr_city": "石家庄", "number": 174 }
  ,
  { "dep_city": "吕梁", "arr_city": "邢台", "number": 123 }
  ,
  { "dep_city": "吕梁", "arr_city": "运城", "number": 122 }
  ,
  { "dep_city": "呼和浩特", "arr_city": "乌兰察布", "number": 4690 }
  ,
  { "dep_city": "呼和浩特", "arr_city": "鄂尔多斯", "number": 4043 }
  ,
  { "dep_city": "呼和浩特", "arr_city": "包头", "number": 3202 }
  ,
  { "dep_city": "呼和浩特", "arr_city": "巴彦淖尔", "number": 950 }
  ,
  { "dep_city": "呼和浩特", "arr_city": "锡盟", "number": 593 }
  ,
  { "dep_city": "呼和浩特", "arr_city": "赤峰", "number": 400 }
  ,
  { "dep_city": "呼和浩特", "arr_city": "朔州", "number": 371 }
  ,
  { "dep_city": "呼和浩特", "arr_city": "大同", "number": 330 }
  ,
  { "dep_city": "呼和浩特", "arr_city": "张家口", "number": 300 }
  ,
  { "dep_city": "呼和浩特", "arr_city": "北京", "number": 205 }
  ,
  { "dep_city": "包头", "arr_city": "鄂尔多斯", "number": 3247 }
  ,
  { "dep_city": "包头", "arr_city": "呼和浩特", "number": 3088 }
  ,
  { "dep_city": "包头", "arr_city": "巴彦淖尔", "number": 1763 }
  ,
  { "dep_city": "包头", "arr_city": "乌兰察布", "number": 736 }
  ,
  { "dep_city": "包头", "arr_city": "榆林", "number": 118 }
  ,
  { "dep_city": "包头", "arr_city": "张家口", "number": 110 }
  ,
  { "dep_city": "包头", "arr_city": "锡盟", "number": 76 }
  ,
  { "dep_city": "包头", "arr_city": "乌海", "number": 74 }
  ,
  { "dep_city": "包头", "arr_city": "北京", "number": 61 }
  ,
  { "dep_city": "包头", "arr_city": "大同", "number": 59 }
  ,
  { "dep_city": "乌海", "arr_city": "鄂尔多斯", "number": 2797 }
  ,
  { "dep_city": "乌海", "arr_city": "阿拉善盟", "number": 984 }
  ,
  { "dep_city": "乌海", "arr_city": "石嘴山", "number": 470 }
  ,
  { "dep_city": "乌海", "arr_city": "巴彦淖尔", "number": 408 }
  ,
  { "dep_city": "乌海", "arr_city": "银川", "number": 294 }
  ,
  { "dep_city": "乌海", "arr_city": "包头", "number": 62 }
  ,
  { "dep_city": "乌海", "arr_city": "呼和浩特", "number": 51 }
  ,
  { "dep_city": "乌海", "arr_city": "榆林", "number": 44 }
  ,
  { "dep_city": "乌海", "arr_city": "吴忠", "number": 34 }
  ,
  { "dep_city": "乌海", "arr_city": "庆阳", "number": 20 }
  ,
  { "dep_city": "赤峰", "arr_city": "通辽", "number": 1719 }
  ,
  { "dep_city": "赤峰", "arr_city": "朝阳", "number": 1595 }
  ,
  { "dep_city": "赤峰", "arr_city": "锡盟", "number": 973 }
  ,
  { "dep_city": "赤峰", "arr_city": "承德", "number": 773 }
  ,
  { "dep_city": "赤峰", "arr_city": "北京", "number": 434 }
  ,
  { "dep_city": "赤峰", "arr_city": "兴安盟", "number": 161 }
  ,
  { "dep_city": "赤峰", "arr_city": "唐山", "number": 111 }
  ,
  { "dep_city": "赤峰", "arr_city": "呼和浩特", "number": 100 }
  ,
  { "dep_city": "赤峰", "arr_city": "沈阳", "number": 97 }
  ,
  { "dep_city": "赤峰", "arr_city": "天津", "number": 84 }
  ,
  { "dep_city": "通辽", "arr_city": "赤峰", "number": 1533 }
  ,
  { "dep_city": "通辽", "arr_city": "阜新", "number": 978 }
  ,
  { "dep_city": "通辽", "arr_city": "沈阳", "number": 881 }
  ,
  { "dep_city": "通辽", "arr_city": "兴安盟", "number": 665 }
  ,
  { "dep_city": "通辽", "arr_city": "四平", "number": 606 }
  ,
  { "dep_city": "通辽", "arr_city": "锡盟", "number": 292 }
  ,
  { "dep_city": "通辽", "arr_city": "松原", "number": 274 }
  ,
  { "dep_city": "通辽", "arr_city": "铁岭", "number": 254 }
  ,
  { "dep_city": "通辽", "arr_city": "长春", "number": 189 }
  ,
  { "dep_city": "通辽", "arr_city": "朝阳", "number": 136 }
  ,
  { "dep_city": "鄂尔多斯", "arr_city": "榆林", "number": 5238 }
  ,
  { "dep_city": "鄂尔多斯", "arr_city": "乌海", "number": 2881 }
  ,
  { "dep_city": "鄂尔多斯", "arr_city": "包头", "number": 2819 }
  ,
  { "dep_city": "鄂尔多斯", "arr_city": "呼和浩特", "number": 2800 }
  ,
  { "dep_city": "鄂尔多斯", "arr_city": "巴彦淖尔", "number": 1151 }
  ,
  { "dep_city": "鄂尔多斯", "arr_city": "银川", "number": 1040 }
  ,
  { "dep_city": "鄂尔多斯", "arr_city": "忻州", "number": 1029 }
  ,
  { "dep_city": "鄂尔多斯", "arr_city": "朔州", "number": 440 }
  ,
  { "dep_city": "鄂尔多斯", "arr_city": "大同", "number": 401 }
  ,
  { "dep_city": "鄂尔多斯", "arr_city": "石嘴山", "number": 370 }
  ,
  { "dep_city": "呼伦贝尔", "arr_city": "齐齐哈尔", "number": 1932 }
  ,
  { "dep_city": "呼伦贝尔", "arr_city": "黑河", "number": 327 }
  ,
  { "dep_city": "呼伦贝尔", "arr_city": "兴安盟", "number": 327 }
  ,
  { "dep_city": "呼伦贝尔", "arr_city": "哈尔滨", "number": 77 }
  ,
  { "dep_city": "呼伦贝尔", "arr_city": "大庆", "number": 54 }
  ,
  { "dep_city": "呼伦贝尔", "arr_city": "大兴安岭", "number": 50 }
  ,
  { "dep_city": "呼伦贝尔", "arr_city": "绥化", "number": 49 }
  ,
  { "dep_city": "呼伦贝尔", "arr_city": "呼和浩特", "number": 43 }
  ,
  { "dep_city": "呼伦贝尔", "arr_city": "通辽", "number": 21 }
  ,
  { "dep_city": "呼伦贝尔", "arr_city": "北京", "number": 19 }
  ,
  { "dep_city": "巴彦淖尔", "arr_city": "包头", "number": 1472 }
  ,
  { "dep_city": "巴彦淖尔", "arr_city": "鄂尔多斯", "number": 1122 }
  ,
  { "dep_city": "巴彦淖尔", "arr_city": "呼和浩特", "number": 463 }
  ,
  { "dep_city": "巴彦淖尔", "arr_city": "乌海", "number": 424 }
  ,
  { "dep_city": "巴彦淖尔", "arr_city": "阿拉善盟", "number": 322 }
  ,
  { "dep_city": "巴彦淖尔", "arr_city": "银川", "number": 90 }
  ,
  { "dep_city": "巴彦淖尔", "arr_city": "石嘴山", "number": 70 }
  ,
  { "dep_city": "巴彦淖尔", "arr_city": "乌兰察布", "number": 61 }
  ,
  { "dep_city": "巴彦淖尔", "arr_city": "榆林", "number": 39 }
  ,
  { "dep_city": "巴彦淖尔", "arr_city": "张家口", "number": 32 }
  ,
  { "dep_city": "乌兰察布", "arr_city": "呼和浩特", "number": 3658 }
  ,
  { "dep_city": "乌兰察布", "arr_city": "张家口", "number": 1098 }
  ,
  { "dep_city": "乌兰察布", "arr_city": "大同", "number": 681 }
  ,
  { "dep_city": "乌兰察布", "arr_city": "包头", "number": 494 }
  ,
  { "dep_city": "乌兰察布", "arr_city": "锡盟", "number": 470 }
  ,
  { "dep_city": "乌兰察布", "arr_city": "鄂尔多斯", "number": 331 }
  ,
  { "dep_city": "乌兰察布", "arr_city": "北京", "number": 220 }
  ,
  { "dep_city": "乌兰察布", "arr_city": "赤峰", "number": 150 }
  ,
  { "dep_city": "乌兰察布", "arr_city": "朔州", "number": 107 }
  ,
  { "dep_city": "乌兰察布", "arr_city": "巴彦淖尔", "number": 103 }
  ,
  { "dep_city": "兴安盟", "arr_city": "齐齐哈尔", "number": 1099 }
  ,
  { "dep_city": "兴安盟", "arr_city": "白城", "number": 1053 }
  ,
  { "dep_city": "兴安盟", "arr_city": "通辽", "number": 670 }
  ,
  { "dep_city": "兴安盟", "arr_city": "呼伦贝尔", "number": 317 }
  ,
  { "dep_city": "兴安盟", "arr_city": "赤峰", "number": 101 }
  ,
  { "dep_city": "兴安盟", "arr_city": "锡盟", "number": 64 }
  ,
  { "dep_city": "兴安盟", "arr_city": "长春", "number": 52 }
  ,
  { "dep_city": "兴安盟", "arr_city": "哈尔滨", "number": 41 }
  ,
  { "dep_city": "兴安盟", "arr_city": "松原", "number": 35 }
  ,
  { "dep_city": "兴安盟", "arr_city": "沈阳", "number": 25 }
  ,
  { "dep_city": "锡盟", "arr_city": "张家口", "number": 979 }
  ,
  { "dep_city": "锡盟", "arr_city": "赤峰", "number": 911 }
  ,
  { "dep_city": "锡盟", "arr_city": "乌兰察布", "number": 462 }
  ,
  { "dep_city": "锡盟", "arr_city": "承德", "number": 342 }
  ,
  { "dep_city": "锡盟", "arr_city": "通辽", "number": 277 }
  ,
  { "dep_city": "锡盟", "arr_city": "呼和浩特", "number": 250 }
  ,
  { "dep_city": "锡盟", "arr_city": "北京", "number": 201 }
  ,
  { "dep_city": "锡盟", "arr_city": "兴安盟", "number": 83 }
  ,
  { "dep_city": "锡盟", "arr_city": "廊坊", "number": 26 }
  ,
  { "dep_city": "锡盟", "arr_city": "保定", "number": 25 }
  ,
  { "dep_city": "阿拉善盟", "arr_city": "乌海", "number": 889 }
  ,
  { "dep_city": "阿拉善盟", "arr_city": "银川", "number": 681 }
  ,
  { "dep_city": "阿拉善盟", "arr_city": "巴彦淖尔", "number": 332 }
  ,
  { "dep_city": "阿拉善盟", "arr_city": "中卫", "number": 321 }
  ,
  { "dep_city": "阿拉善盟", "arr_city": "武威", "number": 230 }
  ,
  { "dep_city": "阿拉善盟", "arr_city": "酒泉", "number": 179 }
  ,
  { "dep_city": "阿拉善盟", "arr_city": "石嘴山", "number": 167 }
  ,
  { "dep_city": "阿拉善盟", "arr_city": "吴忠", "number": 118 }
  ,
  { "dep_city": "阿拉善盟", "arr_city": "金昌", "number": 110 }
  ,
  { "dep_city": "阿拉善盟", "arr_city": "哈密", "number": 89 }
  ,
  { "dep_city": "沈阳", "arr_city": "铁岭", "number": 3793 }
  ,
  { "dep_city": "沈阳", "arr_city": "抚顺", "number": 3286 }
  ,
  { "dep_city": "沈阳", "arr_city": "辽阳", "number": 3157 }
  ,
  { "dep_city": "沈阳", "arr_city": "鞍山", "number": 2613 }
  ,
  { "dep_city": "沈阳", "arr_city": "锦州", "number": 1890 }
  ,
  { "dep_city": "沈阳", "arr_city": "阜新", "number": 1552 }
  ,
  { "dep_city": "沈阳", "arr_city": "盘锦", "number": 1404 }
  ,
  { "dep_city": "沈阳", "arr_city": "本溪", "number": 1263 }
  ,
  { "dep_city": "沈阳", "arr_city": "朝阳", "number": 1069 }
  ,
  { "dep_city": "沈阳", "arr_city": "通辽", "number": 964 }
  ,
  { "dep_city": "大连", "arr_city": "营口", "number": 1464 }
  ,
  { "dep_city": "大连", "arr_city": "沈阳", "number": 1032 }
  ,
  { "dep_city": "大连", "arr_city": "丹东", "number": 955 }
  ,
  { "dep_city": "大连", "arr_city": "鞍山", "number": 885 }
  ,
  { "dep_city": "大连", "arr_city": "盘锦", "number": 498 }
  ,
  { "dep_city": "大连", "arr_city": "锦州", "number": 289 }
  ,
  { "dep_city": "大连", "arr_city": "烟台", "number": 234 }
  ,
  { "dep_city": "大连", "arr_city": "朝阳", "number": 222 }
  ,
  { "dep_city": "大连", "arr_city": "辽阳", "number": 217 }
  ,
  { "dep_city": "大连", "arr_city": "青岛", "number": 165 }
  ,
  { "dep_city": "鞍山", "arr_city": "辽阳", "number": 3006 }
  ,
  { "dep_city": "鞍山", "arr_city": "沈阳", "number": 2330 }
  ,
  { "dep_city": "鞍山", "arr_city": "盘锦", "number": 1666 }
  ,
  { "dep_city": "鞍山", "arr_city": "营口", "number": 1296 }
  ,
  { "dep_city": "鞍山", "arr_city": "大连", "number": 628 }
  ,
  { "dep_city": "鞍山", "arr_city": "锦州", "number": 379 }
  ,
  { "dep_city": "鞍山", "arr_city": "丹东", "number": 367 }
  ,
  { "dep_city": "鞍山", "arr_city": "葫芦岛", "number": 119 }
  ,
  { "dep_city": "鞍山", "arr_city": "铁岭", "number": 94 }
  ,
  { "dep_city": "鞍山", "arr_city": "本溪", "number": 87 }
  ,
  { "dep_city": "抚顺", "arr_city": "沈阳", "number": 3532 }
  ,
  { "dep_city": "抚顺", "arr_city": "本溪", "number": 340 }
  ,
  { "dep_city": "抚顺", "arr_city": "铁岭", "number": 273 }
  ,
  { "dep_city": "抚顺", "arr_city": "通化", "number": 174 }
  ,
  { "dep_city": "抚顺", "arr_city": "辽阳", "number": 135 }
  ,
  { "dep_city": "抚顺", "arr_city": "辽源", "number": 131 }
  ,
  { "dep_city": "抚顺", "arr_city": "盘锦", "number": 105 }
  ,
  { "dep_city": "抚顺", "arr_city": "鞍山", "number": 104 }
  ,
  { "dep_city": "抚顺", "arr_city": "大连", "number": 73 }
  ,
  { "dep_city": "抚顺", "arr_city": "营口", "number": 70 }
  ,
  { "dep_city": "本溪", "arr_city": "沈阳", "number": 1659 }
  ,
  { "dep_city": "本溪", "arr_city": "抚顺", "number": 376 }
  ,
  { "dep_city": "本溪", "arr_city": "丹东", "number": 322 }
  ,
  { "dep_city": "本溪", "arr_city": "辽阳", "number": 259 }
  ,
  { "dep_city": "本溪", "arr_city": "通化", "number": 139 }
  ,
  { "dep_city": "本溪", "arr_city": "大连", "number": 94 }
  ,
  { "dep_city": "本溪", "arr_city": "鞍山", "number": 81 }
  ,
  { "dep_city": "本溪", "arr_city": "营口", "number": 62 }
  ,
  { "dep_city": "本溪", "arr_city": "锦州", "number": 59 }
  ,
  { "dep_city": "本溪", "arr_city": "铁岭", "number": 50 }
  ,
  { "dep_city": "丹东", "arr_city": "大连", "number": 712 }
  ,
  { "dep_city": "丹东", "arr_city": "沈阳", "number": 542 }
  ,
  { "dep_city": "丹东", "arr_city": "鞍山", "number": 446 }
  ,
  { "dep_city": "丹东", "arr_city": "本溪", "number": 287 }
  ,
  { "dep_city": "丹东", "arr_city": "通化", "number": 91 }
  ,
  { "dep_city": "丹东", "arr_city": "营口", "number": 88 }
  ,
  { "dep_city": "丹东", "arr_city": "辽阳", "number": 55 }
  ,
  { "dep_city": "丹东", "arr_city": "抚顺", "number": 53 }
  ,
  { "dep_city": "丹东", "arr_city": "锦州", "number": 49 }
  ,
  { "dep_city": "丹东", "arr_city": "盘锦", "number": 49 }
  ,
  { "dep_city": "锦州", "arr_city": "盘锦", "number": 2412 }
  ,
  { "dep_city": "锦州", "arr_city": "沈阳", "number": 1644 }
  ,
  { "dep_city": "锦州", "arr_city": "葫芦岛", "number": 1428 }
  ,
  { "dep_city": "锦州", "arr_city": "阜新", "number": 917 }
  ,
  { "dep_city": "锦州", "arr_city": "朝阳", "number": 556 }
  ,
  { "dep_city": "锦州", "arr_city": "鞍山", "number": 412 }
  ,
  { "dep_city": "锦州", "arr_city": "营口", "number": 188 }
  ,
  { "dep_city": "锦州", "arr_city": "大连", "number": 179 }
  ,
  { "dep_city": "锦州", "arr_city": "北京", "number": 120 }
  ,
  { "dep_city": "锦州", "arr_city": "辽阳", "number": 108 }
  ,
  { "dep_city": "营口", "arr_city": "盘锦", "number": 1973 }
  ,
  { "dep_city": "营口", "arr_city": "鞍山", "number": 1452 }
  ,
  { "dep_city": "营口", "arr_city": "大连", "number": 1290 }
  ,
  { "dep_city": "营口", "arr_city": "沈阳", "number": 921 }
  ,
  { "dep_city": "营口", "arr_city": "锦州", "number": 229 }
  ,
  { "dep_city": "营口", "arr_city": "辽阳", "number": 228 }
  ,
  { "dep_city": "营口", "arr_city": "朝阳", "number": 138 }
  ,
  { "dep_city": "营口", "arr_city": "葫芦岛", "number": 113 }
  ,
  { "dep_city": "营口", "arr_city": "铁岭", "number": 94 }
  ,
  { "dep_city": "营口", "arr_city": "阜新", "number": 85 }
  ,
  { "dep_city": "阜新", "arr_city": "沈阳", "number": 1334 }
  ,
  { "dep_city": "阜新", "arr_city": "锦州", "number": 952 }
  ,
  { "dep_city": "阜新", "arr_city": "通辽", "number": 861 }
  ,
  { "dep_city": "阜新", "arr_city": "朝阳", "number": 505 }
  ,
  { "dep_city": "阜新", "arr_city": "盘锦", "number": 123 }
  ,
  { "dep_city": "阜新", "arr_city": "葫芦岛", "number": 88 }
  ,
  { "dep_city": "阜新", "arr_city": "鞍山", "number": 87 }
  ,
  { "dep_city": "阜新", "arr_city": "大连", "number": 69 }
  ,
  { "dep_city": "阜新", "arr_city": "铁岭", "number": 61 }
  ,
  { "dep_city": "阜新", "arr_city": "营口", "number": 57 }
  ,
  { "dep_city": "辽阳", "arr_city": "沈阳", "number": 3314 }
  ,
  { "dep_city": "辽阳", "arr_city": "鞍山", "number": 3183 }
  ,
  { "dep_city": "辽阳", "arr_city": "营口", "number": 192 }
  ,
  { "dep_city": "辽阳", "arr_city": "本溪", "number": 191 }
  ,
  { "dep_city": "辽阳", "arr_city": "盘锦", "number": 148 }
  ,
  { "dep_city": "辽阳", "arr_city": "大连", "number": 129 }
  ,
  { "dep_city": "辽阳", "arr_city": "锦州", "number": 102 }
  ,
  { "dep_city": "辽阳", "arr_city": "铁岭", "number": 85 }
  ,
  { "dep_city": "辽阳", "arr_city": "朝阳", "number": 80 }
  ,
  { "dep_city": "辽阳", "arr_city": "抚顺", "number": 77 }
  ,
  { "dep_city": "盘锦", "arr_city": "锦州", "number": 2250 }
  ,
  { "dep_city": "盘锦", "arr_city": "营口", "number": 1934 }
  ,
  { "dep_city": "盘锦", "arr_city": "鞍山", "number": 1542 }
  ,
  { "dep_city": "盘锦", "arr_city": "沈阳", "number": 1019 }
  ,
  { "dep_city": "盘锦", "arr_city": "大连", "number": 190 }
  ,
  { "dep_city": "盘锦", "arr_city": "葫芦岛", "number": 166 }
  ,
  { "dep_city": "盘锦", "arr_city": "朝阳", "number": 145 }
  ,
  { "dep_city": "盘锦", "arr_city": "辽阳", "number": 126 }
  ,
  { "dep_city": "盘锦", "arr_city": "阜新", "number": 98 }
  ,
  { "dep_city": "盘锦", "arr_city": "北京", "number": 59 }
  ,
  { "dep_city": "铁岭", "arr_city": "沈阳", "number": 3792 }
  ,
  { "dep_city": "铁岭", "arr_city": "四平", "number": 1009 }
  ,
  { "dep_city": "铁岭", "arr_city": "抚顺", "number": 278 }
  ,
  { "dep_city": "铁岭", "arr_city": "辽源", "number": 240 }
  ,
  { "dep_city": "铁岭", "arr_city": "通辽", "number": 206 }
  ,
  { "dep_city": "铁岭", "arr_city": "长春", "number": 148 }
  ,
  { "dep_city": "铁岭", "arr_city": "鞍山", "number": 94 }
  ,
  { "dep_city": "铁岭", "arr_city": "朝阳", "number": 83 }
  ,
  { "dep_city": "铁岭", "arr_city": "阜新", "number": 81 }
  ,
  { "dep_city": "铁岭", "arr_city": "辽阳", "number": 78 }
  ,
  { "dep_city": "朝阳", "arr_city": "赤峰", "number": 1691 }
  ,
  { "dep_city": "朝阳", "arr_city": "葫芦岛", "number": 728 }
  ,
  { "dep_city": "朝阳", "arr_city": "锦州", "number": 455 }
  ,
  { "dep_city": "朝阳", "arr_city": "沈阳", "number": 412 }
  ,
  { "dep_city": "朝阳", "arr_city": "承德", "number": 372 }
  ,
  { "dep_city": "朝阳", "arr_city": "阜新", "number": 311 }
  ,
  { "dep_city": "朝阳", "arr_city": "盘锦", "number": 121 }
  ,
  { "dep_city": "朝阳", "arr_city": "通辽", "number": 107 }
  ,
  { "dep_city": "朝阳", "arr_city": "北京", "number": 105 }
  ,
  { "dep_city": "朝阳", "arr_city": "唐山", "number": 68 }
  ,
  { "dep_city": "葫芦岛", "arr_city": "锦州", "number": 1581 }
  ,
  { "dep_city": "葫芦岛", "arr_city": "秦皇岛", "number": 906 }
  ,
  { "dep_city": "葫芦岛", "arr_city": "朝阳", "number": 750 }
  ,
  { "dep_city": "葫芦岛", "arr_city": "沈阳", "number": 467 }
  ,
  { "dep_city": "葫芦岛", "arr_city": "盘锦", "number": 194 }
  ,
  { "dep_city": "葫芦岛", "arr_city": "天津", "number": 188 }
  ,
  { "dep_city": "葫芦岛", "arr_city": "北京", "number": 183 }
  ,
  { "dep_city": "葫芦岛", "arr_city": "唐山", "number": 163 }
  ,
  { "dep_city": "葫芦岛", "arr_city": "鞍山", "number": 95 }
  ,
  { "dep_city": "葫芦岛", "arr_city": "营口", "number": 80 }
  ,
  { "dep_city": "长春", "arr_city": "四平", "number": 6928 }
  ,
  { "dep_city": "长春", "arr_city": "松原", "number": 4790 }
  ,
  { "dep_city": "长春", "arr_city": "吉林", "number": 4516 }
  ,
  { "dep_city": "长春", "arr_city": "哈尔滨", "number": 1810 }
  ,
  { "dep_city": "长春", "arr_city": "通化", "number": 1266 }
  ,
  { "dep_city": "长春", "arr_city": "白城", "number": 1014 }
  ,
  { "dep_city": "长春", "arr_city": "延边", "number": 882 }
  ,
  { "dep_city": "长春", "arr_city": "白山", "number": 860 }
  ,
  { "dep_city": "长春", "arr_city": "辽源", "number": 782 }
  ,
  { "dep_city": "长春", "arr_city": "沈阳", "number": 617 }
  ,
  { "dep_city": "吉林", "arr_city": "长春", "number": 4040 }
  ,
  { "dep_city": "吉林", "arr_city": "通化", "number": 351 }
  ,
  { "dep_city": "吉林", "arr_city": "哈尔滨", "number": 336 }
  ,
  { "dep_city": "吉林", "arr_city": "延边", "number": 335 }
  ,
  { "dep_city": "吉林", "arr_city": "四平", "number": 254 }
  ,
  { "dep_city": "吉林", "arr_city": "松原", "number": 166 }
  ,
  { "dep_city": "吉林", "arr_city": "辽源", "number": 121 }
  ,
  { "dep_city": "吉林", "arr_city": "白山", "number": 97 }
  ,
  { "dep_city": "吉林", "arr_city": "沈阳", "number": 77 }
  ,
  { "dep_city": "吉林", "arr_city": "白城", "number": 53 }
  ,
  { "dep_city": "四平", "arr_city": "长春", "number": 6722 }
  ,
  { "dep_city": "四平", "arr_city": "铁岭", "number": 839 }
  ,
  { "dep_city": "四平", "arr_city": "松原", "number": 803 }
  ,
  { "dep_city": "四平", "arr_city": "辽源", "number": 578 }
  ,
  { "dep_city": "四平", "arr_city": "通辽", "number": 564 }
  ,
  { "dep_city": "四平", "arr_city": "沈阳", "number": 259 }
  ,
  { "dep_city": "四平", "arr_city": "吉林", "number": 232 }
  ,
  { "dep_city": "四平", "arr_city": "哈尔滨", "number": 99 }
  ,
  { "dep_city": "四平", "arr_city": "通化", "number": 73 }
  ,
  { "dep_city": "四平", "arr_city": "白城", "number": 53 }
  ,
  { "dep_city": "辽源", "arr_city": "通化", "number": 732 }
  ,
  { "dep_city": "辽源", "arr_city": "四平", "number": 623 }
  ,
  { "dep_city": "辽源", "arr_city": "长春", "number": 473 }
  ,
  { "dep_city": "辽源", "arr_city": "铁岭", "number": 211 }
  ,
  { "dep_city": "辽源", "arr_city": "抚顺", "number": 113 }
  ,
  { "dep_city": "辽源", "arr_city": "吉林", "number": 110 }
  ,
  { "dep_city": "辽源", "arr_city": "沈阳", "number": 61 }
  ,
  { "dep_city": "辽源", "arr_city": "哈尔滨", "number": 18 }
  ,
  { "dep_city": "辽源", "arr_city": "白山", "number": 11 }
  ,
  { "dep_city": "辽源", "arr_city": "松原", "number": 10 }
  ,
  { "dep_city": "通化", "arr_city": "长春", "number": 685 }
  ,
  { "dep_city": "通化", "arr_city": "辽源", "number": 680 }
  ,
  { "dep_city": "通化", "arr_city": "吉林", "number": 339 }
  ,
  { "dep_city": "通化", "arr_city": "白山", "number": 302 }
  ,
  { "dep_city": "通化", "arr_city": "抚顺", "number": 180 }
  ,
  { "dep_city": "通化", "arr_city": "沈阳", "number": 152 }
  ,
  { "dep_city": "通化", "arr_city": "本溪", "number": 117 }
  ,
  { "dep_city": "通化", "arr_city": "四平", "number": 99 }
  ,
  { "dep_city": "通化", "arr_city": "丹东", "number": 84 }
  ,
  { "dep_city": "通化", "arr_city": "延边", "number": 38 }
  ,
  { "dep_city": "白山", "arr_city": "长春", "number": 430 }
  ,
  { "dep_city": "白山", "arr_city": "通化", "number": 301 }
  ,
  { "dep_city": "白山", "arr_city": "延边", "number": 291 }
  ,
  { "dep_city": "白山", "arr_city": "吉林", "number": 95 }
  ,
  { "dep_city": "白山", "arr_city": "沈阳", "number": 33 }
  ,
  { "dep_city": "白山", "arr_city": "辽源", "number": 29 }
  ,
  { "dep_city": "白山", "arr_city": "四平", "number": 29 }
  ,
  { "dep_city": "白山", "arr_city": "上海", "number": 19 }
  ,
  { "dep_city": "白山", "arr_city": "丹东", "number": 16 }
  ,
  { "dep_city": "白山", "arr_city": "抚顺", "number": 13 }
  ,
  { "dep_city": "白城", "arr_city": "兴安盟", "number": 1058 }
  ,
  { "dep_city": "白城", "arr_city": "松原", "number": 1045 }
  ,
  { "dep_city": "白城", "arr_city": "长春", "number": 641 }
  ,
  { "dep_city": "白城", "arr_city": "齐齐哈尔", "number": 276 }
  ,
  { "dep_city": "白城", "arr_city": "通辽", "number": 170 }
  ,
  { "dep_city": "白城", "arr_city": "大庆", "number": 127 }
  ,
  { "dep_city": "白城", "arr_city": "四平", "number": 69 }
  ,
  { "dep_city": "白城", "arr_city": "吉林", "number": 38 }
  ,
  { "dep_city": "白城", "arr_city": "沈阳", "number": 30 }
  ,
  { "dep_city": "白城", "arr_city": "哈尔滨", "number": 28 }
  ,
  { "dep_city": "松原", "arr_city": "长春", "number": 4065 }
  ,
  { "dep_city": "松原", "arr_city": "白城", "number": 1071 }
  ,
  { "dep_city": "松原", "arr_city": "四平", "number": 865 }
  ,
  { "dep_city": "松原", "arr_city": "大庆", "number": 740 }
  ,
  { "dep_city": "松原", "arr_city": "哈尔滨", "number": 497 }
  ,
  { "dep_city": "松原", "arr_city": "通辽", "number": 286 }
  ,
  { "dep_city": "松原", "arr_city": "绥化", "number": 243 }
  ,
  { "dep_city": "松原", "arr_city": "沈阳", "number": 137 }
  ,
  { "dep_city": "松原", "arr_city": "吉林", "number": 118 }
  ,
  { "dep_city": "松原", "arr_city": "铁岭", "number": 55 }
  ,
  { "dep_city": "延边", "arr_city": "长春", "number": 392 }
  ,
  { "dep_city": "延边", "arr_city": "吉林", "number": 287 }
  ,
  { "dep_city": "延边", "arr_city": "牡丹江", "number": 244 }
  ,
  { "dep_city": "延边", "arr_city": "白山", "number": 223 }
  ,
  { "dep_city": "延边", "arr_city": "哈尔滨", "number": 103 }
  ,
  { "dep_city": "延边", "arr_city": "通化", "number": 35 }
  ,
  { "dep_city": "延边", "arr_city": "松原", "number": 25 }
  ,
  { "dep_city": "延边", "arr_city": "四平", "number": 23 }
  ,
  { "dep_city": "延边", "arr_city": "鸡西", "number": 22 }
  ,
  { "dep_city": "延边", "arr_city": "沈阳", "number": 22 }
  ,
  { "dep_city": "哈尔滨", "arr_city": "绥化", "number": 9275 }
  ,
  { "dep_city": "哈尔滨", "arr_city": "大庆", "number": 3205 }
  ,
  { "dep_city": "哈尔滨", "arr_city": "长春", "number": 1765 }
  ,
  { "dep_city": "哈尔滨", "arr_city": "齐齐哈尔", "number": 1758 }
  ,
  { "dep_city": "哈尔滨", "arr_city": "佳木斯", "number": 1530 }
  ,
  { "dep_city": "哈尔滨", "arr_city": "牡丹江", "number": 1008 }
  ,
  { "dep_city": "哈尔滨", "arr_city": "七台河", "number": 927 }
  ,
  { "dep_city": "哈尔滨", "arr_city": "黑河", "number": 563 }
  ,
  { "dep_city": "哈尔滨", "arr_city": "松原", "number": 524 }
  ,
  { "dep_city": "哈尔滨", "arr_city": "双鸭山", "number": 496 }
  ,
  { "dep_city": "齐齐哈尔", "arr_city": "呼伦贝尔", "number": 1668 }
  ,
  { "dep_city": "齐齐哈尔", "arr_city": "大庆", "number": 1365 }
  ,
  { "dep_city": "齐齐哈尔", "arr_city": "兴安盟", "number": 1181 }
  ,
  { "dep_city": "齐齐哈尔", "arr_city": "绥化", "number": 1157 }
  ,
  { "dep_city": "齐齐哈尔", "arr_city": "哈尔滨", "number": 978 }
  ,
  { "dep_city": "齐齐哈尔", "arr_city": "黑河", "number": 778 }
  ,
  { "dep_city": "齐齐哈尔", "arr_city": "白城", "number": 249 }
  ,
  { "dep_city": "齐齐哈尔", "arr_city": "松原", "number": 62 }
  ,
  { "dep_city": "齐齐哈尔", "arr_city": "长春", "number": 55 }
  ,
  { "dep_city": "齐齐哈尔", "arr_city": "沈阳", "number": 38 }
  ,
  { "dep_city": "牡丹江", "arr_city": "哈尔滨", "number": 778 }
  ,
  { "dep_city": "牡丹江", "arr_city": "鸡西", "number": 282 }
  ,
  { "dep_city": "牡丹江", "arr_city": "延边", "number": 260 }
  ,
  { "dep_city": "牡丹江", "arr_city": "绥化", "number": 149 }
  ,
  { "dep_city": "牡丹江", "arr_city": "七台河", "number": 132 }
  ,
  { "dep_city": "牡丹江", "arr_city": "大庆", "number": 75 }
  ,
  { "dep_city": "牡丹江", "arr_city": "佳木斯", "number": 67 }
  ,
  { "dep_city": "牡丹江", "arr_city": "双鸭山", "number": 50 }
  ,
  { "dep_city": "牡丹江", "arr_city": "长春", "number": 37 }
  ,
  { "dep_city": "牡丹江", "arr_city": "齐齐哈尔", "number": 33 }
  ,
  { "dep_city": "佳木斯", "arr_city": "双鸭山", "number": 1809 }
  ,
  { "dep_city": "佳木斯", "arr_city": "哈尔滨", "number": 1099 }
  ,
  { "dep_city": "佳木斯", "arr_city": "鹤岗", "number": 906 }
  ,
  { "dep_city": "佳木斯", "arr_city": "七台河", "number": 421 }
  ,
  { "dep_city": "佳木斯", "arr_city": "绥化", "number": 118 }
  ,
  { "dep_city": "佳木斯", "arr_city": "伊春", "number": 65 }
  ,
  { "dep_city": "佳木斯", "arr_city": "鸡西", "number": 55 }
  ,
  { "dep_city": "佳木斯", "arr_city": "长春", "number": 38 }
  ,
  { "dep_city": "佳木斯", "arr_city": "牡丹江", "number": 33 }
  ,
  { "dep_city": "佳木斯", "arr_city": "大庆", "number": 22 }
  ,
  { "dep_city": "大庆", "arr_city": "绥化", "number": 5358 }
  ,
  { "dep_city": "大庆", "arr_city": "哈尔滨", "number": 2674 }
  ,
  { "dep_city": "大庆", "arr_city": "齐齐哈尔", "number": 1409 }
  ,
  { "dep_city": "大庆", "arr_city": "松原", "number": 739 }
  ,
  { "dep_city": "大庆", "arr_city": "长春", "number": 166 }
  ,
  { "dep_city": "大庆", "arr_city": "白城", "number": 136 }
  ,
  { "dep_city": "大庆", "arr_city": "黑河", "number": 105 }
  ,
  { "dep_city": "大庆", "arr_city": "沈阳", "number": 75 }
  ,
  { "dep_city": "大庆", "arr_city": "呼伦贝尔", "number": 68 }
  ,
  { "dep_city": "大庆", "arr_city": "牡丹江", "number": 55 }
  ,
  { "dep_city": "伊春", "arr_city": "绥化", "number": 460 }
  ,
  { "dep_city": "伊春", "arr_city": "哈尔滨", "number": 209 }
  ,
  { "dep_city": "伊春", "arr_city": "佳木斯", "number": 55 }
  ,
  { "dep_city": "伊春", "arr_city": "黑河", "number": 38 }
  ,
  { "dep_city": "伊春", "arr_city": "鹤岗", "number": 36 }
  ,
  { "dep_city": "伊春", "arr_city": "大庆", "number": 11 }
  ,
  { "dep_city": "伊春", "arr_city": "双鸭山", "number": 11 }
  ,
  { "dep_city": "伊春", "arr_city": "齐齐哈尔", "number": 9 }
  ,
  { "dep_city": "伊春", "arr_city": "牡丹江", "number": 8 }
  ,
  { "dep_city": "伊春", "arr_city": "七台河", "number": 5 }
  ,
  { "dep_city": "鸡西", "arr_city": "七台河", "number": 243 }
  ,
  { "dep_city": "鸡西", "arr_city": "牡丹江", "number": 201 }
  ,
  { "dep_city": "鸡西", "arr_city": "哈尔滨", "number": 180 }
  ,
  { "dep_city": "鸡西", "arr_city": "双鸭山", "number": 161 }
  ,
  { "dep_city": "鸡西", "arr_city": "佳木斯", "number": 78 }
  ,
  { "dep_city": "鸡西", "arr_city": "鹤岗", "number": 15 }
  ,
  { "dep_city": "鸡西", "arr_city": "通化", "number": 5 }
  ,
  { "dep_city": "鸡西", "arr_city": "北京", "number": 5 }
  ,
  { "dep_city": "鸡西", "arr_city": "青岛", "number": 4 }
  ,
  { "dep_city": "鸡西", "arr_city": "绥化", "number": 4 }
  ,
  { "dep_city": "鹤岗", "arr_city": "佳木斯", "number": 894 }
  ,
  { "dep_city": "鹤岗", "arr_city": "哈尔滨", "number": 159 }
  ,
  { "dep_city": "鹤岗", "arr_city": "双鸭山", "number": 52 }
  ,
  { "dep_city": "鹤岗", "arr_city": "伊春", "number": 47 }
  ,
  { "dep_city": "鹤岗", "arr_city": "绥化", "number": 36 }
  ,
  { "dep_city": "鹤岗", "arr_city": "七台河", "number": 29 }
  ,
  { "dep_city": "鹤岗", "arr_city": "长春", "number": 14 }
  ,
  { "dep_city": "鹤岗", "arr_city": "鸡西", "number": 10 }
  ,
  { "dep_city": "鹤岗", "arr_city": "牡丹江", "number": 7 }
  ,
  { "dep_city": "鹤岗", "arr_city": "齐齐哈尔", "number": 5 }
  ,
  { "dep_city": "双鸭山", "arr_city": "佳木斯", "number": 1671 }
  ,
  { "dep_city": "双鸭山", "arr_city": "哈尔滨", "number": 265 }
  ,
  { "dep_city": "双鸭山", "arr_city": "七台河", "number": 221 }
  ,
  { "dep_city": "双鸭山", "arr_city": "鸡西", "number": 169 }
  ,
  { "dep_city": "双鸭山", "arr_city": "鹤岗", "number": 78 }
  ,
  { "dep_city": "双鸭山", "arr_city": "绥化", "number": 38 }
  ,
  { "dep_city": "双鸭山", "arr_city": "牡丹江", "number": 16 }
  ,
  { "dep_city": "双鸭山", "arr_city": "长春", "number": 15 }
  ,
  { "dep_city": "双鸭山", "arr_city": "伊春", "number": 14 }
  ,
  { "dep_city": "双鸭山", "arr_city": "大庆", "number": 9 }
  ,
  { "dep_city": "七台河", "arr_city": "哈尔滨", "number": 514 }
  ,
  { "dep_city": "七台河", "arr_city": "佳木斯", "number": 405 }
  ,
  { "dep_city": "七台河", "arr_city": "鸡西", "number": 303 }
  ,
  { "dep_city": "七台河", "arr_city": "双鸭山", "number": 270 }
  ,
  { "dep_city": "七台河", "arr_city": "牡丹江", "number": 100 }
  ,
  { "dep_city": "七台河", "arr_city": "绥化", "number": 28 }
  ,
  { "dep_city": "七台河", "arr_city": "鹤岗", "number": 19 }
  ,
  { "dep_city": "七台河", "arr_city": "长春", "number": 14 }
  ,
  { "dep_city": "七台河", "arr_city": "齐齐哈尔", "number": 13 }
  ,
  { "dep_city": "七台河", "arr_city": "大庆", "number": 13 }
  ,
  { "dep_city": "绥化", "arr_city": "哈尔滨", "number": 6500 }
  ,
  { "dep_city": "绥化", "arr_city": "大庆", "number": 5079 }
  ,
  { "dep_city": "绥化", "arr_city": "齐齐哈尔", "number": 992 }
  ,
  { "dep_city": "绥化", "arr_city": "伊春", "number": 395 }
  ,
  { "dep_city": "绥化", "arr_city": "黑河", "number": 385 }
  ,
  { "dep_city": "绥化", "arr_city": "松原", "number": 121 }
  ,
  { "dep_city": "绥化", "arr_city": "长春", "number": 109 }
  ,
  { "dep_city": "绥化", "arr_city": "佳木斯", "number": 65 }
  ,
  { "dep_city": "绥化", "arr_city": "牡丹江", "number": 44 }
  ,
  { "dep_city": "绥化", "arr_city": "呼伦贝尔", "number": 33 }
  ,
  { "dep_city": "黑河", "arr_city": "齐齐哈尔", "number": 661 }
  ,
  { "dep_city": "黑河", "arr_city": "绥化", "number": 375 }
  ,
  { "dep_city": "黑河", "arr_city": "哈尔滨", "number": 337 }
  ,
  { "dep_city": "黑河", "arr_city": "呼伦贝尔", "number": 294 }
  ,
  { "dep_city": "黑河", "arr_city": "大兴安岭", "number": 67 }
  ,
  { "dep_city": "黑河", "arr_city": "大庆", "number": 55 }
  ,
  { "dep_city": "黑河", "arr_city": "伊春", "number": 42 }
  ,
  { "dep_city": "黑河", "arr_city": "兴安盟", "number": 7 }
  ,
  { "dep_city": "黑河", "arr_city": "长春", "number": 6 }
  ,
  { "dep_city": "黑河", "arr_city": "牡丹江", "number": 5 }
  ,
  { "dep_city": "大兴安岭", "arr_city": "黑河", "number": 79 }
  ,
  { "dep_city": "大兴安岭", "arr_city": "呼伦贝尔", "number": 47 }
  ,
  { "dep_city": "大兴安岭", "arr_city": "绥化", "number": 6 }
  ,
  { "dep_city": "大兴安岭", "arr_city": "齐齐哈尔", "number": 2 }
  ,
  { "dep_city": "大兴安岭", "arr_city": "哈尔滨", "number": 2 }
  ,
  { "dep_city": "大兴安岭", "arr_city": "大庆", "number": 1 }
  ,
  { "dep_city": "大兴安岭", "arr_city": "阜新", "number": 0 }
  ,
  { "dep_city": "大兴安岭", "arr_city": "通辽", "number": 0 }
  ,
  { "dep_city": "大兴安岭", "arr_city": "西安", "number": 0 }
  ,
  { "dep_city": "大兴安岭", "arr_city": "白城", "number": 0 }
  ,
  { "dep_city": "上海", "arr_city": "苏州", "number": 42061 }
  ,
  { "dep_city": "上海", "arr_city": "嘉兴", "number": 8280 }
  ,
  { "dep_city": "上海", "arr_city": "南通", "number": 8196 }
  ,
  { "dep_city": "上海", "arr_city": "无锡", "number": 4518 }
  ,
  { "dep_city": "上海", "arr_city": "杭州", "number": 4314 }
  ,
  { "dep_city": "上海", "arr_city": "宁波", "number": 2295 }
  ,
  { "dep_city": "上海", "arr_city": "舟山", "number": 2118 }
  ,
  { "dep_city": "上海", "arr_city": "盐城", "number": 1832 }
  ,
  { "dep_city": "上海", "arr_city": "常州", "number": 1780 }
  ,
  { "dep_city": "上海", "arr_city": "湖州", "number": 1741 }
  ,
  { "dep_city": "南京", "arr_city": "镇江", "number": 7710 }
  ,
  { "dep_city": "南京", "arr_city": "马鞍山", "number": 5086 }
  ,
  { "dep_city": "南京", "arr_city": "滁州", "number": 4704 }
  ,
  { "dep_city": "南京", "arr_city": "扬州", "number": 3606 }
  ,
  { "dep_city": "南京", "arr_city": "常州", "number": 3509 }
  ,
  { "dep_city": "南京", "arr_city": "淮安", "number": 2911 }
  ,
  { "dep_city": "南京", "arr_city": "苏州", "number": 2348 }
  ,
  { "dep_city": "南京", "arr_city": "无锡", "number": 2235 }
  ,
  { "dep_city": "南京", "arr_city": "上海", "number": 1808 }
  ,
  { "dep_city": "南京", "arr_city": "泰州", "number": 1753 }
  ,
  { "dep_city": "无锡", "arr_city": "苏州", "number": 26132 }
  ,
  { "dep_city": "无锡", "arr_city": "常州", "number": 17844 }
  ,
  { "dep_city": "无锡", "arr_city": "上海", "number": 4991 }
  ,
  { "dep_city": "无锡", "arr_city": "泰州", "number": 4859 }
  ,
  { "dep_city": "无锡", "arr_city": "南通", "number": 2274 }
  ,
  { "dep_city": "无锡", "arr_city": "南京", "number": 2194 }
  ,
  { "dep_city": "无锡", "arr_city": "镇江", "number": 1427 }
  ,
  { "dep_city": "无锡", "arr_city": "盐城", "number": 1360 }
  ,
  { "dep_city": "无锡", "arr_city": "扬州", "number": 1339 }
  ,
  { "dep_city": "无锡", "arr_city": "杭州", "number": 885 }
  ,
  { "dep_city": "徐州", "arr_city": "宿迁", "number": 7633 }
  ,
  { "dep_city": "徐州", "arr_city": "宿州", "number": 6305 }
  ,
  { "dep_city": "徐州", "arr_city": "临沂", "number": 3049 }
  ,
  { "dep_city": "徐州", "arr_city": "济宁", "number": 2678 }
  ,
  { "dep_city": "徐州", "arr_city": "枣庄", "number": 2476 }
  ,
  { "dep_city": "徐州", "arr_city": "连云港", "number": 1158 }
  ,
  { "dep_city": "徐州", "arr_city": "菏泽", "number": 964 }
  ,
  { "dep_city": "徐州", "arr_city": "淮安", "number": 797 }
  ,
  { "dep_city": "徐州", "arr_city": "南京", "number": 779 }
  ,
  { "dep_city": "徐州", "arr_city": "商丘", "number": 603 }
  ,
  { "dep_city": "常州", "arr_city": "无锡", "number": 17158 }
  ,
  { "dep_city": "常州", "arr_city": "镇江", "number": 8134 }
  ,
  { "dep_city": "常州", "arr_city": "苏州", "number": 4695 }
  ,
  { "dep_city": "常州", "arr_city": "南京", "number": 3715 }
  ,
  { "dep_city": "常州", "arr_city": "泰州", "number": 2072 }
  ,
  { "dep_city": "常州", "arr_city": "上海", "number": 2055 }
  ,
  { "dep_city": "常州", "arr_city": "扬州", "number": 1335 }
  ,
  { "dep_city": "常州", "arr_city": "南通", "number": 994 }
  ,
  { "dep_city": "常州", "arr_city": "宣城", "number": 922 }
  ,
  { "dep_city": "常州", "arr_city": "盐城", "number": 871 }
  ,
  { "dep_city": "苏州", "arr_city": "上海", "number": 49454 }
  ,
  { "dep_city": "苏州", "arr_city": "无锡", "number": 25955 }
  ,
  { "dep_city": "苏州", "arr_city": "嘉兴", "number": 8499 }
  ,
  { "dep_city": "苏州", "arr_city": "南通", "number": 8406 }
  ,
  { "dep_city": "苏州", "arr_city": "湖州", "number": 5539 }
  ,
  { "dep_city": "苏州", "arr_city": "常州", "number": 4910 }
  ,
  { "dep_city": "苏州", "arr_city": "泰州", "number": 3893 }
  ,
  { "dep_city": "苏州", "arr_city": "盐城", "number": 2926 }
  ,
  { "dep_city": "苏州", "arr_city": "杭州", "number": 2518 }
  ,
  { "dep_city": "苏州", "arr_city": "南京", "number": 2431 }
  ,
  { "dep_city": "南通", "arr_city": "苏州", "number": 10066 }
  ,
  { "dep_city": "南通", "arr_city": "上海", "number": 9676 }
  ,
  { "dep_city": "南通", "arr_city": "泰州", "number": 4866 }
  ,
  { "dep_city": "南通", "arr_city": "盐城", "number": 4661 }
  ,
  { "dep_city": "南通", "arr_city": "无锡", "number": 2539 }
  ,
  { "dep_city": "南通", "arr_city": "常州", "number": 1217 }
  ,
  { "dep_city": "南通", "arr_city": "南京", "number": 1195 }
  ,
  { "dep_city": "南通", "arr_city": "扬州", "number": 1120 }
  ,
  { "dep_city": "南通", "arr_city": "镇江", "number": 581 }
  ,
  { "dep_city": "南通", "arr_city": "连云港", "number": 544 }
  ,
  { "dep_city": "连云港", "arr_city": "临沂", "number": 3700 }
  ,
  { "dep_city": "连云港", "arr_city": "盐城", "number": 3651 }
  ,
  { "dep_city": "连云港", "arr_city": "宿迁", "number": 2517 }
  ,
  { "dep_city": "连云港", "arr_city": "淮安", "number": 2250 }
  ,
  { "dep_city": "连云港", "arr_city": "日照", "number": 1387 }
  ,
  { "dep_city": "连云港", "arr_city": "徐州", "number": 1153 }
  ,
  { "dep_city": "连云港", "arr_city": "苏州", "number": 758 }
  ,
  { "dep_city": "连云港", "arr_city": "南京", "number": 737 }
  ,
  { "dep_city": "连云港", "arr_city": "青岛", "number": 612 }
  ,
  { "dep_city": "连云港", "arr_city": "南通", "number": 538 }
  ,
  { "dep_city": "淮安", "arr_city": "宿迁", "number": 5485 }
  ,
  { "dep_city": "淮安", "arr_city": "扬州", "number": 3081 }
  ,
  { "dep_city": "淮安", "arr_city": "南京", "number": 3069 }
  ,
  { "dep_city": "淮安", "arr_city": "连云港", "number": 2305 }
  ,
  { "dep_city": "淮安", "arr_city": "盐城", "number": 2104 }
  ,
  { "dep_city": "淮安", "arr_city": "滁州", "number": 1425 }
  ,
  { "dep_city": "淮安", "arr_city": "苏州", "number": 1205 }
  ,
  { "dep_city": "淮安", "arr_city": "徐州", "number": 805 }
  ,
  { "dep_city": "淮安", "arr_city": "无锡", "number": 754 }
  ,
  { "dep_city": "淮安", "arr_city": "泰州", "number": 732 }
  ,
  { "dep_city": "盐城", "arr_city": "泰州", "number": 6239 }
  ,
  { "dep_city": "盐城", "arr_city": "南通", "number": 4945 }
  ,
  { "dep_city": "盐城", "arr_city": "连云港", "number": 3425 }
  ,
  { "dep_city": "盐城", "arr_city": "苏州", "number": 2999 }
  ,
  { "dep_city": "盐城", "arr_city": "淮安", "number": 2115 }
  ,
  { "dep_city": "盐城", "arr_city": "上海", "number": 1906 }
  ,
  { "dep_city": "盐城", "arr_city": "无锡", "number": 1478 }
  ,
  { "dep_city": "盐城", "arr_city": "南京", "number": 1204 }
  ,
  { "dep_city": "盐城", "arr_city": "扬州", "number": 1133 }
  ,
  { "dep_city": "盐城", "arr_city": "常州", "number": 720 }
  ,
  { "dep_city": "扬州", "arr_city": "泰州", "number": 8452 }
  ,
  { "dep_city": "扬州", "arr_city": "南京", "number": 4606 }
  ,
  { "dep_city": "扬州", "arr_city": "镇江", "number": 3319 }
  ,
  { "dep_city": "扬州", "arr_city": "淮安", "number": 2903 }
  ,
  { "dep_city": "扬州", "arr_city": "苏州", "number": 1870 }
  ,
  { "dep_city": "扬州", "arr_city": "滁州", "number": 1742 }
  ,
  { "dep_city": "扬州", "arr_city": "无锡", "number": 1476 }
  ,
  { "dep_city": "扬州", "arr_city": "上海", "number": 1255 }
  ,
  { "dep_city": "扬州", "arr_city": "盐城", "number": 1209 }
  ,
  { "dep_city": "扬州", "arr_city": "常州", "number": 1136 }
  ,
  { "dep_city": "镇江", "arr_city": "南京", "number": 9717 }
  ,
  { "dep_city": "镇江", "arr_city": "常州", "number": 9456 }
  ,
  { "dep_city": "镇江", "arr_city": "扬州", "number": 2850 }
  ,
  { "dep_city": "镇江", "arr_city": "无锡", "number": 1605 }
  ,
  { "dep_city": "镇江", "arr_city": "泰州", "number": 1484 }
  ,
  { "dep_city": "镇江", "arr_city": "苏州", "number": 1407 }
  ,
  { "dep_city": "镇江", "arr_city": "上海", "number": 712 }
  ,
  { "dep_city": "镇江", "arr_city": "南通", "number": 495 }
  ,
  { "dep_city": "镇江", "arr_city": "淮安", "number": 449 }
  ,
  { "dep_city": "镇江", "arr_city": "滁州", "number": 342 }
  ,
  { "dep_city": "泰州", "arr_city": "扬州", "number": 8126 }
  ,
  { "dep_city": "泰州", "arr_city": "无锡", "number": 5711 }
  ,
  { "dep_city": "泰州", "arr_city": "盐城", "number": 5675 }
  ,
  { "dep_city": "泰州", "arr_city": "南通", "number": 4798 }
  ,
  { "dep_city": "泰州", "arr_city": "苏州", "number": 4120 }
  ,
  { "dep_city": "泰州", "arr_city": "常州", "number": 2536 }
  ,
  { "dep_city": "泰州", "arr_city": "上海", "number": 1818 }
  ,
  { "dep_city": "泰州", "arr_city": "南京", "number": 1816 }
  ,
  { "dep_city": "泰州", "arr_city": "镇江", "number": 1623 }
  ,
  { "dep_city": "泰州", "arr_city": "淮安", "number": 799 }
  ,
  { "dep_city": "宿迁", "arr_city": "徐州", "number": 5870 }
  ,
  { "dep_city": "宿迁", "arr_city": "淮安", "number": 5811 }
  ,
  { "dep_city": "宿迁", "arr_city": "连云港", "number": 2410 }
  ,
  { "dep_city": "宿迁", "arr_city": "南京", "number": 1609 }
  ,
  { "dep_city": "宿迁", "arr_city": "宿州", "number": 1284 }
  ,
  { "dep_city": "宿迁", "arr_city": "苏州", "number": 969 }
  ,
  { "dep_city": "宿迁", "arr_city": "扬州", "number": 900 }
  ,
  { "dep_city": "宿迁", "arr_city": "临沂", "number": 694 }
  ,
  { "dep_city": "宿迁", "arr_city": "盐城", "number": 648 }
  ,
  { "dep_city": "宿迁", "arr_city": "无锡", "number": 545 }
  ,
  { "dep_city": "杭州", "arr_city": "嘉兴", "number": 16392 }
  ,
  { "dep_city": "杭州", "arr_city": "绍兴", "number": 13258 }
  ,
  { "dep_city": "杭州", "arr_city": "湖州", "number": 9902 }
  ,
  { "dep_city": "杭州", "arr_city": "金华", "number": 5128 }
  ,
  { "dep_city": "杭州", "arr_city": "上海", "number": 5074 }
  ,
  { "dep_city": "杭州", "arr_city": "宁波", "number": 3733 }
  ,
  { "dep_city": "杭州", "arr_city": "苏州", "number": 2913 }
  ,
  { "dep_city": "杭州", "arr_city": "衢州", "number": 1809 }
  ,
  { "dep_city": "杭州", "arr_city": "台州", "number": 1630 }
  ,
  { "dep_city": "杭州", "arr_city": "温州", "number": 1143 }
  ,
  { "dep_city": "宁波", "arr_city": "绍兴", "number": 4578 }
  ,
  { "dep_city": "宁波", "arr_city": "杭州", "number": 3969 }
  ,
  { "dep_city": "宁波", "arr_city": "舟山", "number": 3633 }
  ,
  { "dep_city": "宁波", "arr_city": "台州", "number": 3100 }
  ,
  { "dep_city": "宁波", "arr_city": "上海", "number": 2625 }
  ,
  { "dep_city": "宁波", "arr_city": "嘉兴", "number": 1876 }
  ,
  { "dep_city": "宁波", "arr_city": "金华", "number": 1836 }
  ,
  { "dep_city": "宁波", "arr_city": "苏州", "number": 1220 }
  ,
  { "dep_city": "宁波", "arr_city": "温州", "number": 726 }
  ,
  { "dep_city": "宁波", "arr_city": "湖州", "number": 639 }
  ,
  { "dep_city": "温州", "arr_city": "台州", "number": 3707 }
  ,
  { "dep_city": "温州", "arr_city": "丽水", "number": 1772 }
  ,
  { "dep_city": "温州", "arr_city": "宁德", "number": 1766 }
  ,
  { "dep_city": "温州", "arr_city": "金华", "number": 1299 }
  ,
  { "dep_city": "温州", "arr_city": "杭州", "number": 967 }
  ,
  { "dep_city": "温州", "arr_city": "宁波", "number": 624 }
  ,
  { "dep_city": "温州", "arr_city": "上饶", "number": 534 }
  ,
  { "dep_city": "温州", "arr_city": "绍兴", "number": 511 }
  ,
  { "dep_city": "温州", "arr_city": "衢州", "number": 452 }
  ,
  { "dep_city": "温州", "arr_city": "上海", "number": 349 }
  ,
  { "dep_city": "绍兴", "arr_city": "杭州", "number": 14302 }
  ,
  { "dep_city": "绍兴", "arr_city": "宁波", "number": 4833 }
  ,
  { "dep_city": "绍兴", "arr_city": "金华", "number": 3112 }
  ,
  { "dep_city": "绍兴", "arr_city": "嘉兴", "number": 1501 }
  ,
  { "dep_city": "绍兴", "arr_city": "上海", "number": 1365 }
  ,
  { "dep_city": "绍兴", "arr_city": "台州", "number": 1090 }
  ,
  { "dep_city": "绍兴", "arr_city": "苏州", "number": 703 }
  ,
  { "dep_city": "绍兴", "arr_city": "湖州", "number": 554 }
  ,
  { "dep_city": "绍兴", "arr_city": "温州", "number": 443 }
  ,
  { "dep_city": "绍兴", "arr_city": "衢州", "number": 276 }
  ,
  { "dep_city": "湖州", "arr_city": "杭州", "number": 10024 }
  ,
  { "dep_city": "湖州", "arr_city": "苏州", "number": 6324 }
  ,
  { "dep_city": "湖州", "arr_city": "嘉兴", "number": 4621 }
  ,
  { "dep_city": "湖州", "arr_city": "上海", "number": 2392 }
  ,
  { "dep_city": "湖州", "arr_city": "宣城", "number": 1563 }
  ,
  { "dep_city": "湖州", "arr_city": "无锡", "number": 921 }
  ,
  { "dep_city": "湖州", "arr_city": "安庆", "number": 619 }
  ,
  { "dep_city": "湖州", "arr_city": "绍兴", "number": 531 }
  ,
  { "dep_city": "湖州", "arr_city": "宁波", "number": 486 }
  ,
  { "dep_city": "湖州", "arr_city": "常州", "number": 412 }
  ,
  { "dep_city": "嘉兴", "arr_city": "杭州", "number": 19215 }
  ,
  { "dep_city": "嘉兴", "arr_city": "上海", "number": 9368 }
  ,
  { "dep_city": "嘉兴", "arr_city": "苏州", "number": 8697 }
  ,
  { "dep_city": "嘉兴", "arr_city": "湖州", "number": 4373 }
  ,
  { "dep_city": "嘉兴", "arr_city": "宁波", "number": 1869 }
  ,
  { "dep_city": "嘉兴", "arr_city": "绍兴", "number": 1356 }
  ,
  { "dep_city": "嘉兴", "arr_city": "无锡", "number": 833 }
  ,
  { "dep_city": "嘉兴", "arr_city": "金华", "number": 722 }
  ,
  { "dep_city": "嘉兴", "arr_city": "台州", "number": 437 }
  ,
  { "dep_city": "嘉兴", "arr_city": "南通", "number": 437 }
  ,
  { "dep_city": "金华", "arr_city": "杭州", "number": 5347 }
  ,
  { "dep_city": "金华", "arr_city": "绍兴", "number": 2777 }
  ,
  { "dep_city": "金华", "arr_city": "衢州", "number": 2080 }
  ,
  { "dep_city": "金华", "arr_city": "丽水", "number": 1827 }
  ,
  { "dep_city": "金华", "arr_city": "台州", "number": 1712 }
  ,
  { "dep_city": "金华", "arr_city": "宁波", "number": 1656 }
  ,
  { "dep_city": "金华", "arr_city": "温州", "number": 1380 }
  ,
  { "dep_city": "金华", "arr_city": "上饶", "number": 1281 }
  ,
  { "dep_city": "金华", "arr_city": "上海", "number": 754 }
  ,
  { "dep_city": "金华", "arr_city": "嘉兴", "number": 630 }
  ,
  { "dep_city": "衢州", "arr_city": "金华", "number": 1884 }
  ,
  { "dep_city": "衢州", "arr_city": "杭州", "number": 1752 }
  ,
  { "dep_city": "衢州", "arr_city": "上饶", "number": 1266 }
  ,
  { "dep_city": "衢州", "arr_city": "丽水", "number": 426 }
  ,
  { "dep_city": "衢州", "arr_city": "宁波", "number": 242 }
  ,
  { "dep_city": "衢州", "arr_city": "温州", "number": 212 }
  ,
  { "dep_city": "衢州", "arr_city": "绍兴", "number": 180 }
  ,
  { "dep_city": "衢州", "arr_city": "南平", "number": 168 }
  ,
  { "dep_city": "衢州", "arr_city": "嘉兴", "number": 141 }
  ,
  { "dep_city": "衢州", "arr_city": "台州", "number": 135 }
  ,
  { "dep_city": "舟山", "arr_city": "宁波", "number": 3621 }
  ,
  { "dep_city": "舟山", "arr_city": "上海", "number": 2309 }
  ,
  { "dep_city": "舟山", "arr_city": "杭州", "number": 660 }
  ,
  { "dep_city": "舟山", "arr_city": "苏州", "number": 489 }
  ,
  { "dep_city": "舟山", "arr_city": "嘉兴", "number": 444 }
  ,
  { "dep_city": "舟山", "arr_city": "台州", "number": 302 }
  ,
  { "dep_city": "舟山", "arr_city": "绍兴", "number": 204 }
  ,
  { "dep_city": "舟山", "arr_city": "南通", "number": 158 }
  ,
  { "dep_city": "舟山", "arr_city": "金华", "number": 152 }
  ,
  { "dep_city": "舟山", "arr_city": "无锡", "number": 145 }
  ,
  { "dep_city": "台州", "arr_city": "温州", "number": 3722 }
  ,
  { "dep_city": "台州", "arr_city": "宁波", "number": 2974 }
  ,
  { "dep_city": "台州", "arr_city": "金华", "number": 2050 }
  ,
  { "dep_city": "台州", "arr_city": "杭州", "number": 1717 }
  ,
  { "dep_city": "台州", "arr_city": "绍兴", "number": 1462 }
  ,
  { "dep_city": "台州", "arr_city": "上海", "number": 499 }
  ,
  { "dep_city": "台州", "arr_city": "嘉兴", "number": 440 }
  ,
  { "dep_city": "台州", "arr_city": "丽水", "number": 377 }
  ,
  { "dep_city": "台州", "arr_city": "苏州", "number": 370 }
  ,
  { "dep_city": "台州", "arr_city": "衢州", "number": 357 }
  ,
  { "dep_city": "丽水", "arr_city": "金华", "number": 1830 }
  ,
  { "dep_city": "丽水", "arr_city": "温州", "number": 1743 }
  ,
  { "dep_city": "丽水", "arr_city": "杭州", "number": 685 }
  ,
  { "dep_city": "丽水", "arr_city": "衢州", "number": 537 }
  ,
  { "dep_city": "丽水", "arr_city": "南平", "number": 415 }
  ,
  { "dep_city": "丽水", "arr_city": "台州", "number": 319 }
  ,
  { "dep_city": "丽水", "arr_city": "绍兴", "number": 179 }
  ,
  { "dep_city": "丽水", "arr_city": "宁波", "number": 174 }
  ,
  { "dep_city": "丽水", "arr_city": "上饶", "number": 165 }
  ,
  { "dep_city": "丽水", "arr_city": "上海", "number": 109 }
  ,
  { "dep_city": "合肥", "arr_city": "六安", "number": 10341 }
  ,
  { "dep_city": "合肥", "arr_city": "安庆", "number": 3480 }
  ,
  { "dep_city": "合肥", "arr_city": "马鞍山", "number": 3180 }
  ,
  { "dep_city": "合肥", "arr_city": "滁州", "number": 2732 }
  ,
  { "dep_city": "合肥", "arr_city": "阜阳", "number": 2505 }
  ,
  { "dep_city": "合肥", "arr_city": "芜湖", "number": 2379 }
  ,
  { "dep_city": "合肥", "arr_city": "淮南", "number": 2067 }
  ,
  { "dep_city": "合肥", "arr_city": "亳州", "number": 1450 }
  ,
  { "dep_city": "合肥", "arr_city": "南京", "number": 1135 }
  ,
  { "dep_city": "合肥", "arr_city": "蚌埠", "number": 1088 }
  ,
  { "dep_city": "芜湖", "arr_city": "马鞍山", "number": 3007 }
  ,
  { "dep_city": "芜湖", "arr_city": "合肥", "number": 2464 }
  ,
  { "dep_city": "芜湖", "arr_city": "宣城", "number": 1898 }
  ,
  { "dep_city": "芜湖", "arr_city": "南京", "number": 991 }
  ,
  { "dep_city": "芜湖", "arr_city": "铜陵", "number": 613 }
  ,
  { "dep_city": "芜湖", "arr_city": "池州", "number": 493 }
  ,
  { "dep_city": "芜湖", "arr_city": "安庆", "number": 396 }
  ,
  { "dep_city": "芜湖", "arr_city": "上海", "number": 357 }
  ,
  { "dep_city": "芜湖", "arr_city": "苏州", "number": 294 }
  ,
  { "dep_city": "芜湖", "arr_city": "滁州", "number": 199 }
  ,
  { "dep_city": "蚌埠", "arr_city": "滁州", "number": 2507 }
  ,
  { "dep_city": "蚌埠", "arr_city": "宿州", "number": 1909 }
  ,
  { "dep_city": "蚌埠", "arr_city": "合肥", "number": 1109 }
  ,
  { "dep_city": "蚌埠", "arr_city": "亳州", "number": 1089 }
  ,
  { "dep_city": "蚌埠", "arr_city": "淮南", "number": 888 }
  ,
  { "dep_city": "蚌埠", "arr_city": "南京", "number": 315 }
  ,
  { "dep_city": "蚌埠", "arr_city": "宿迁", "number": 253 }
  ,
  { "dep_city": "蚌埠", "arr_city": "淮北", "number": 247 }
  ,
  { "dep_city": "蚌埠", "arr_city": "阜阳", "number": 235 }
  ,
  { "dep_city": "蚌埠", "arr_city": "徐州", "number": 194 }
  ,
  { "dep_city": "马鞍山", "arr_city": "南京", "number": 6616 }
  ,
  { "dep_city": "马鞍山", "arr_city": "芜湖", "number": 3191 }
  ,
  { "dep_city": "马鞍山", "arr_city": "合肥", "number": 3079 }
  ,
  { "dep_city": "马鞍山", "arr_city": "滁州", "number": 571 }
  ,
  { "dep_city": "马鞍山", "arr_city": "常州", "number": 264 }
  ,
  { "dep_city": "马鞍山", "arr_city": "苏州", "number": 233 }
  ,
  { "dep_city": "马鞍山", "arr_city": "宣城", "number": 210 }
  ,
  { "dep_city": "马鞍山", "arr_city": "无锡", "number": 187 }
  ,
  { "dep_city": "马鞍山", "arr_city": "上海", "number": 172 }
  ,
  { "dep_city": "马鞍山", "arr_city": "镇江", "number": 136 }
  ,
  { "dep_city": "宿州", "arr_city": "徐州", "number": 6880 }
  ,
  { "dep_city": "宿州", "arr_city": "淮北", "number": 5401 }
  ,
  { "dep_city": "宿州", "arr_city": "商丘", "number": 2018 }
  ,
  { "dep_city": "宿州", "arr_city": "蚌埠", "number": 1820 }
  ,
  { "dep_city": "宿州", "arr_city": "宿迁", "number": 1395 }
  ,
  { "dep_city": "宿州", "arr_city": "合肥", "number": 845 }
  ,
  { "dep_city": "宿州", "arr_city": "亳州", "number": 561 }
  ,
  { "dep_city": "宿州", "arr_city": "菏泽", "number": 542 }
  ,
  { "dep_city": "宿州", "arr_city": "滁州", "number": 381 }
  ,
  { "dep_city": "宿州", "arr_city": "南京", "number": 347 }
  ,
  { "dep_city": "安庆", "arr_city": "合肥", "number": 4013 }
  ,
  { "dep_city": "安庆", "arr_city": "池州", "number": 2109 }
  ,
  { "dep_city": "安庆", "arr_city": "黄冈", "number": 765 }
  ,
  { "dep_city": "安庆", "arr_city": "铜陵", "number": 628 }
  ,
  { "dep_city": "安庆", "arr_city": "九江", "number": 593 }
  ,
  { "dep_city": "安庆", "arr_city": "六安", "number": 543 }
  ,
  { "dep_city": "安庆", "arr_city": "芜湖", "number": 394 }
  ,
  { "dep_city": "安庆", "arr_city": "武汉", "number": 169 }
  ,
  { "dep_city": "安庆", "arr_city": "上海", "number": 154 }
  ,
  { "dep_city": "安庆", "arr_city": "南京", "number": 143 }
  ,
  { "dep_city": "淮南", "arr_city": "合肥", "number": 2130 }
  ,
  { "dep_city": "淮南", "arr_city": "阜阳", "number": 1617 }
  ,
  { "dep_city": "淮南", "arr_city": "六安", "number": 1376 }
  ,
  { "dep_city": "淮南", "arr_city": "亳州", "number": 947 }
  ,
  { "dep_city": "淮南", "arr_city": "蚌埠", "number": 893 }
  ,
  { "dep_city": "淮南", "arr_city": "滁州", "number": 340 }
  ,
  { "dep_city": "淮南", "arr_city": "宿州", "number": 134 }
  ,
  { "dep_city": "淮南", "arr_city": "驻马店", "number": 85 }
  ,
  { "dep_city": "淮南", "arr_city": "南京", "number": 85 }
  ,
  { "dep_city": "淮南", "arr_city": "上海", "number": 65 }
  ,
  { "dep_city": "铜陵", "arr_city": "芜湖", "number": 707 }
  ,
  { "dep_city": "铜陵", "arr_city": "安庆", "number": 529 }
  ,
  { "dep_city": "铜陵", "arr_city": "池州", "number": 370 }
  ,
  { "dep_city": "铜陵", "arr_city": "合肥", "number": 288 }
  ,
  { "dep_city": "铜陵", "arr_city": "淮安", "number": 86 }
  ,
  { "dep_city": "铜陵", "arr_city": "南京", "number": 75 }
  ,
  { "dep_city": "铜陵", "arr_city": "宣城", "number": 71 }
  ,
  { "dep_city": "铜陵", "arr_city": "马鞍山", "number": 68 }
  ,
  { "dep_city": "铜陵", "arr_city": "黄山", "number": 57 }
  ,
  { "dep_city": "铜陵", "arr_city": "上海", "number": 48 }
  ,
  { "dep_city": "黄山", "arr_city": "杭州", "number": 730 }
  ,
  { "dep_city": "黄山", "arr_city": "合肥", "number": 590 }
  ,
  { "dep_city": "黄山", "arr_city": "池州", "number": 554 }
  ,
  { "dep_city": "黄山", "arr_city": "宣城", "number": 530 }
  ,
  { "dep_city": "黄山", "arr_city": "上饶", "number": 301 }
  ,
  { "dep_city": "黄山", "arr_city": "芜湖", "number": 224 }
  ,
  { "dep_city": "黄山", "arr_city": "南京", "number": 158 }
  ,
  { "dep_city": "黄山", "arr_city": "安庆", "number": 145 }
  ,
  { "dep_city": "黄山", "arr_city": "衢州", "number": 115 }
  ,
  { "dep_city": "黄山", "arr_city": "上海", "number": 111 }
  ,
  { "dep_city": "宣城", "arr_city": "芜湖", "number": 2156 }
  ,
  { "dep_city": "宣城", "arr_city": "湖州", "number": 1633 }
  ,
  { "dep_city": "宣城", "arr_city": "南京", "number": 1585 }
  ,
  { "dep_city": "宣城", "arr_city": "常州", "number": 1097 }
  ,
  { "dep_city": "宣城", "arr_city": "杭州", "number": 822 }
  ,
  { "dep_city": "宣城", "arr_city": "合肥", "number": 541 }
  ,
  { "dep_city": "宣城", "arr_city": "上海", "number": 528 }
  ,
  { "dep_city": "宣城", "arr_city": "黄山", "number": 487 }
  ,
  { "dep_city": "宣城", "arr_city": "无锡", "number": 402 }
  ,
  { "dep_city": "宣城", "arr_city": "苏州", "number": 353 }
  ,
  { "dep_city": "池州", "arr_city": "安庆", "number": 2159 }
  ,
  { "dep_city": "池州", "arr_city": "合肥", "number": 1256 }
  ,
  { "dep_city": "池州", "arr_city": "芜湖", "number": 479 }
  ,
  { "dep_city": "池州", "arr_city": "铜陵", "number": 448 }
  ,
  { "dep_city": "池州", "arr_city": "黄山", "number": 363 }
  ,
  { "dep_city": "池州", "arr_city": "上饶", "number": 257 }
  ,
  { "dep_city": "池州", "arr_city": "上海", "number": 249 }
  ,
  { "dep_city": "池州", "arr_city": "南京", "number": 232 }
  ,
  { "dep_city": "池州", "arr_city": "阜阳", "number": 205 }
  ,
  { "dep_city": "池州", "arr_city": "宣城", "number": 205 }
  ,
  { "dep_city": "滁州", "arr_city": "南京", "number": 5874 }
  ,
  { "dep_city": "滁州", "arr_city": "合肥", "number": 2878 }
  ,
  { "dep_city": "滁州", "arr_city": "蚌埠", "number": 2868 }
  ,
  { "dep_city": "滁州", "arr_city": "扬州", "number": 1930 }
  ,
  { "dep_city": "滁州", "arr_city": "淮安", "number": 1361 }
  ,
  { "dep_city": "滁州", "arr_city": "马鞍山", "number": 528 }
  ,
  { "dep_city": "滁州", "arr_city": "宿州", "number": 493 }
  ,
  { "dep_city": "滁州", "arr_city": "苏州", "number": 491 }
  ,
  { "dep_city": "滁州", "arr_city": "亳州", "number": 461 }
  ,
  { "dep_city": "滁州", "arr_city": "宿迁", "number": 451 }
  ,
  { "dep_city": "淮北", "arr_city": "宿州", "number": 5176 }
  ,
  { "dep_city": "淮北", "arr_city": "亳州", "number": 1548 }
  ,
  { "dep_city": "淮北", "arr_city": "商丘", "number": 989 }
  ,
  { "dep_city": "淮北", "arr_city": "徐州", "number": 439 }
  ,
  { "dep_city": "淮北", "arr_city": "蚌埠", "number": 233 }
  ,
  { "dep_city": "淮北", "arr_city": "合肥", "number": 220 }
  ,
  { "dep_city": "淮北", "arr_city": "阜阳", "number": 165 }
  ,
  { "dep_city": "淮北", "arr_city": "滁州", "number": 100 }
  ,
  { "dep_city": "淮北", "arr_city": "南京", "number": 61 }
  ,
  { "dep_city": "淮北", "arr_city": "周口", "number": 57 }
  ,
  { "dep_city": "阜阳", "arr_city": "亳州", "number": 4559 }
  ,
  { "dep_city": "阜阳", "arr_city": "周口", "number": 3596 }
  ,
  { "dep_city": "阜阳", "arr_city": "合肥", "number": 2363 }
  ,
  { "dep_city": "阜阳", "arr_city": "驻马店", "number": 1981 }
  ,
  { "dep_city": "阜阳", "arr_city": "淮南", "number": 1754 }
  ,
  { "dep_city": "阜阳", "arr_city": "六安", "number": 1691 }
  ,
  { "dep_city": "阜阳", "arr_city": "信阳", "number": 1136 }
  ,
  { "dep_city": "阜阳", "arr_city": "蚌埠", "number": 281 }
  ,
  { "dep_city": "阜阳", "arr_city": "滁州", "number": 267 }
  ,
  { "dep_city": "阜阳", "arr_city": "商丘", "number": 236 }
  ,
  { "dep_city": "六安", "arr_city": "合肥", "number": 12313 }
  ,
  { "dep_city": "六安", "arr_city": "阜阳", "number": 1844 }
  ,
  { "dep_city": "六安", "arr_city": "信阳", "number": 1548 }
  ,
  { "dep_city": "六安", "arr_city": "淮南", "number": 1453 }
  ,
  { "dep_city": "六安", "arr_city": "安庆", "number": 545 }
  ,
  { "dep_city": "六安", "arr_city": "亳州", "number": 391 }
  ,
  { "dep_city": "六安", "arr_city": "上海", "number": 278 }
  ,
  { "dep_city": "六安", "arr_city": "苏州", "number": 261 }
  ,
  { "dep_city": "六安", "arr_city": "黄冈", "number": 258 }
  ,
  { "dep_city": "六安", "arr_city": "滁州", "number": 232 }
  ,
  { "dep_city": "亳州", "arr_city": "阜阳", "number": 4951 }
  ,
  { "dep_city": "亳州", "arr_city": "商丘", "number": 2330 }
  ,
  { "dep_city": "亳州", "arr_city": "周口", "number": 1989 }
  ,
  { "dep_city": "亳州", "arr_city": "淮北", "number": 1449 }
  ,
  { "dep_city": "亳州", "arr_city": "合肥", "number": 1195 }
  ,
  { "dep_city": "亳州", "arr_city": "蚌埠", "number": 1111 }
  ,
  { "dep_city": "亳州", "arr_city": "淮南", "number": 908 }
  ,
  { "dep_city": "亳州", "arr_city": "宿州", "number": 600 }
  ,
  { "dep_city": "亳州", "arr_city": "滁州", "number": 329 }
  ,
  { "dep_city": "亳州", "arr_city": "六安", "number": 248 }
  ,
  { "dep_city": "福州", "arr_city": "宁德", "number": 4177 }
  ,
  { "dep_city": "福州", "arr_city": "莆田", "number": 3517 }
  ,
  { "dep_city": "福州", "arr_city": "泉州", "number": 2727 }
  ,
  { "dep_city": "福州", "arr_city": "厦门", "number": 1313 }
  ,
  { "dep_city": "福州", "arr_city": "南平", "number": 1293 }
  ,
  { "dep_city": "福州", "arr_city": "三明", "number": 1020 }
  ,
  { "dep_city": "福州", "arr_city": "漳州", "number": 519 }
  ,
  { "dep_city": "福州", "arr_city": "温州", "number": 275 }
  ,
  { "dep_city": "福州", "arr_city": "龙岩", "number": 233 }
  ,
  { "dep_city": "福州", "arr_city": "上饶", "number": 128 }
  ,
  { "dep_city": "厦门", "arr_city": "泉州", "number": 11304 }
  ,
  { "dep_city": "厦门", "arr_city": "漳州", "number": 11239 }
  ,
  { "dep_city": "厦门", "arr_city": "龙岩", "number": 1367 }
  ,
  { "dep_city": "厦门", "arr_city": "福州", "number": 1330 }
  ,
  { "dep_city": "厦门", "arr_city": "莆田", "number": 854 }
  ,
  { "dep_city": "厦门", "arr_city": "三明", "number": 541 }
  ,
  { "dep_city": "厦门", "arr_city": "赣州", "number": 350 }
  ,
  { "dep_city": "厦门", "arr_city": "汕头", "number": 196 }
  ,
  { "dep_city": "厦门", "arr_city": "南平", "number": 180 }
  ,
  { "dep_city": "厦门", "arr_city": "宁德", "number": 178 }
  ,
  { "dep_city": "漳州", "arr_city": "厦门", "number": 14168 }
  ,
  { "dep_city": "漳州", "arr_city": "泉州", "number": 2812 }
  ,
  { "dep_city": "漳州", "arr_city": "汕头", "number": 1418 }
  ,
  { "dep_city": "漳州", "arr_city": "潮州", "number": 1417 }
  ,
  { "dep_city": "漳州", "arr_city": "龙岩", "number": 1305 }
  ,
  { "dep_city": "漳州", "arr_city": "福州", "number": 621 }
  ,
  { "dep_city": "漳州", "arr_city": "揭阳", "number": 297 }
  ,
  { "dep_city": "漳州", "arr_city": "莆田", "number": 280 }
  ,
  { "dep_city": "漳州", "arr_city": "赣州", "number": 270 }
  ,
  { "dep_city": "漳州", "arr_city": "梅州", "number": 163 }
  ,
  { "dep_city": "泉州", "arr_city": "厦门", "number": 15069 }
  ,
  { "dep_city": "泉州", "arr_city": "莆田", "number": 3835 }
  ,
  { "dep_city": "泉州", "arr_city": "福州", "number": 3168 }
  ,
  { "dep_city": "泉州", "arr_city": "漳州", "number": 3006 }
  ,
  { "dep_city": "泉州", "arr_city": "三明", "number": 1590 }
  ,
  { "dep_city": "泉州", "arr_city": "赣州", "number": 798 }
  ,
  { "dep_city": "泉州", "arr_city": "龙岩", "number": 708 }
  ,
  { "dep_city": "泉州", "arr_city": "吉安", "number": 337 }
  ,
  { "dep_city": "泉州", "arr_city": "宁德", "number": 256 }
  ,
  { "dep_city": "泉州", "arr_city": "南平", "number": 231 }
  ,
  { "dep_city": "三明", "arr_city": "泉州", "number": 1222 }
  ,
  { "dep_city": "三明", "arr_city": "福州", "number": 1180 }
  ,
  { "dep_city": "三明", "arr_city": "龙岩", "number": 789 }
  ,
  { "dep_city": "三明", "arr_city": "厦门", "number": 518 }
  ,
  { "dep_city": "三明", "arr_city": "南平", "number": 458 }
  ,
  { "dep_city": "三明", "arr_city": "赣州", "number": 445 }
  ,
  { "dep_city": "三明", "arr_city": "抚州", "number": 176 }
  ,
  { "dep_city": "三明", "arr_city": "莆田", "number": 144 }
  ,
  { "dep_city": "三明", "arr_city": "漳州", "number": 130 }
  ,
  { "dep_city": "三明", "arr_city": "宁德", "number": 71 }
  ,
  { "dep_city": "莆田", "arr_city": "福州", "number": 4304 }
  ,
  { "dep_city": "莆田", "arr_city": "泉州", "number": 3766 }
  ,
  { "dep_city": "莆田", "arr_city": "厦门", "number": 979 }
  ,
  { "dep_city": "莆田", "arr_city": "漳州", "number": 305 }
  ,
  { "dep_city": "莆田", "arr_city": "宁德", "number": 200 }
  ,
  { "dep_city": "莆田", "arr_city": "三明", "number": 165 }
  ,
  { "dep_city": "莆田", "arr_city": "南平", "number": 152 }
  ,
  { "dep_city": "莆田", "arr_city": "龙岩", "number": 115 }
  ,
  { "dep_city": "莆田", "arr_city": "汕头", "number": 94 }
  ,
  { "dep_city": "莆田", "arr_city": "赣州", "number": 63 }
  ,
  { "dep_city": "南平", "arr_city": "福州", "number": 1089 }
  ,
  { "dep_city": "南平", "arr_city": "宁德", "number": 492 }
  ,
  { "dep_city": "南平", "arr_city": "三明", "number": 491 }
  ,
  { "dep_city": "南平", "arr_city": "丽水", "number": 394 }
  ,
  { "dep_city": "南平", "arr_city": "上饶", "number": 324 }
  ,
  { "dep_city": "南平", "arr_city": "泉州", "number": 190 }
  ,
  { "dep_city": "南平", "arr_city": "厦门", "number": 173 }
  ,
  { "dep_city": "南平", "arr_city": "抚州", "number": 169 }
  ,
  { "dep_city": "南平", "arr_city": "衢州", "number": 159 }
  ,
  { "dep_city": "南平", "arr_city": "南昌", "number": 135 }
  ,
  { "dep_city": "龙岩", "arr_city": "厦门", "number": 1215 }
  ,
  { "dep_city": "龙岩", "arr_city": "漳州", "number": 1193 }
  ,
  { "dep_city": "龙岩", "arr_city": "梅州", "number": 1042 }
  ,
  { "dep_city": "龙岩", "arr_city": "赣州", "number": 909 }
  ,
  { "dep_city": "龙岩", "arr_city": "三明", "number": 771 }
  ,
  { "dep_city": "龙岩", "arr_city": "泉州", "number": 453 }
  ,
  { "dep_city": "龙岩", "arr_city": "福州", "number": 255 }
  ,
  { "dep_city": "龙岩", "arr_city": "莆田", "number": 81 }
  ,
  { "dep_city": "龙岩", "arr_city": "汕头", "number": 75 }
  ,
  { "dep_city": "龙岩", "arr_city": "深圳", "number": 60 }
  ,
  { "dep_city": "宁德", "arr_city": "福州", "number": 4302 }
  ,
  { "dep_city": "宁德", "arr_city": "温州", "number": 1676 }
  ,
  { "dep_city": "宁德", "arr_city": "南平", "number": 468 }
  ,
  { "dep_city": "宁德", "arr_city": "泉州", "number": 269 }
  ,
  { "dep_city": "宁德", "arr_city": "莆田", "number": 179 }
  ,
  { "dep_city": "宁德", "arr_city": "厦门", "number": 148 }
  ,
  { "dep_city": "宁德", "arr_city": "台州", "number": 137 }
  ,
  { "dep_city": "宁德", "arr_city": "丽水", "number": 86 }
  ,
  { "dep_city": "宁德", "arr_city": "漳州", "number": 70 }
  ,
  { "dep_city": "宁德", "arr_city": "三明", "number": 68 }
  ,
  { "dep_city": "南昌", "arr_city": "宜春", "number": 4451 }
  ,
  { "dep_city": "南昌", "arr_city": "九江", "number": 2843 }
  ,
  { "dep_city": "南昌", "arr_city": "上饶", "number": 2578 }
  ,
  { "dep_city": "南昌", "arr_city": "抚州", "number": 2028 }
  ,
  { "dep_city": "南昌", "arr_city": "吉安", "number": 881 }
  ,
  { "dep_city": "南昌", "arr_city": "赣州", "number": 675 }
  ,
  { "dep_city": "南昌", "arr_city": "景德镇", "number": 505 }
  ,
  { "dep_city": "南昌", "arr_city": "鹰潭", "number": 247 }
  ,
  { "dep_city": "南昌", "arr_city": "长沙", "number": 246 }
  ,
  { "dep_city": "南昌", "arr_city": "新余", "number": 238 }
  ,
  { "dep_city": "九江", "arr_city": "南昌", "number": 3397 }
  ,
  { "dep_city": "九江", "arr_city": "黄冈", "number": 1372 }
  ,
  { "dep_city": "九江", "arr_city": "上饶", "number": 647 }
  ,
  { "dep_city": "九江", "arr_city": "安庆", "number": 593 }
  ,
  { "dep_city": "九江", "arr_city": "宜春", "number": 421 }
  ,
  { "dep_city": "九江", "arr_city": "黄石", "number": 364 }
  ,
  { "dep_city": "九江", "arr_city": "景德镇", "number": 319 }
  ,
  { "dep_city": "九江", "arr_city": "武汉", "number": 284 }
  ,
  { "dep_city": "九江", "arr_city": "咸宁", "number": 242 }
  ,
  { "dep_city": "九江", "arr_city": "岳阳", "number": 210 }
  ,
  { "dep_city": "上饶", "arr_city": "南昌", "number": 2961 }
  ,
  { "dep_city": "上饶", "arr_city": "景德镇", "number": 2109 }
  ,
  { "dep_city": "上饶", "arr_city": "衢州", "number": 1246 }
  ,
  { "dep_city": "上饶", "arr_city": "鹰潭", "number": 962 }
  ,
  { "dep_city": "上饶", "arr_city": "九江", "number": 765 }
  ,
  { "dep_city": "上饶", "arr_city": "金华", "number": 736 }
  ,
  { "dep_city": "上饶", "arr_city": "杭州", "number": 585 }
  ,
  { "dep_city": "上饶", "arr_city": "抚州", "number": 434 }
  ,
  { "dep_city": "上饶", "arr_city": "黄山", "number": 324 }
  ,
  { "dep_city": "上饶", "arr_city": "池州", "number": 318 }
  ,
  { "dep_city": "抚州", "arr_city": "南昌", "number": 2334 }
  ,
  { "dep_city": "抚州", "arr_city": "赣州", "number": 771 }
  ,
  { "dep_city": "抚州", "arr_city": "鹰潭", "number": 393 }
  ,
  { "dep_city": "抚州", "arr_city": "上饶", "number": 376 }
  ,
  { "dep_city": "抚州", "arr_city": "宜春", "number": 326 }
  ,
  { "dep_city": "抚州", "arr_city": "吉安", "number": 311 }
  ,
  { "dep_city": "抚州", "arr_city": "三明", "number": 148 }
  ,
  { "dep_city": "抚州", "arr_city": "泉州", "number": 132 }
  ,
  { "dep_city": "抚州", "arr_city": "九江", "number": 116 }
  ,
  { "dep_city": "抚州", "arr_city": "南平", "number": 114 }
  ,
  { "dep_city": "宜春", "arr_city": "南昌", "number": 6143 }
  ,
  { "dep_city": "宜春", "arr_city": "长沙", "number": 1229 }
  ,
  { "dep_city": "宜春", "arr_city": "吉安", "number": 913 }
  ,
  { "dep_city": "宜春", "arr_city": "萍乡", "number": 897 }
  ,
  { "dep_city": "宜春", "arr_city": "新余", "number": 895 }
  ,
  { "dep_city": "宜春", "arr_city": "九江", "number": 444 }
  ,
  { "dep_city": "宜春", "arr_city": "抚州", "number": 298 }
  ,
  { "dep_city": "宜春", "arr_city": "赣州", "number": 255 }
  ,
  { "dep_city": "宜春", "arr_city": "上饶", "number": 184 }
  ,
  { "dep_city": "宜春", "arr_city": "株洲", "number": 182 }
  ,
  { "dep_city": "吉安", "arr_city": "赣州", "number": 2111 }
  ,
  { "dep_city": "吉安", "arr_city": "南昌", "number": 1074 }
  ,
  { "dep_city": "吉安", "arr_city": "宜春", "number": 923 }
  ,
  { "dep_city": "吉安", "arr_city": "新余", "number": 435 }
  ,
  { "dep_city": "吉安", "arr_city": "抚州", "number": 365 }
  ,
  { "dep_city": "吉安", "arr_city": "萍乡", "number": 274 }
  ,
  { "dep_city": "吉安", "arr_city": "郴州", "number": 184 }
  ,
  { "dep_city": "吉安", "arr_city": "株洲", "number": 174 }
  ,
  { "dep_city": "吉安", "arr_city": "九江", "number": 131 }
  ,
  { "dep_city": "吉安", "arr_city": "东莞", "number": 129 }
  ,
  { "dep_city": "赣州", "arr_city": "吉安", "number": 1957 }
  ,
  { "dep_city": "赣州", "arr_city": "河源", "number": 1084 }
  ,
  { "dep_city": "赣州", "arr_city": "抚州", "number": 895 }
  ,
  { "dep_city": "赣州", "arr_city": "广州", "number": 864 }
  ,
  { "dep_city": "赣州", "arr_city": "梅州", "number": 770 }
  ,
  { "dep_city": "赣州", "arr_city": "龙岩", "number": 738 }
  ,
  { "dep_city": "赣州", "arr_city": "韶关", "number": 732 }
  ,
  { "dep_city": "赣州", "arr_city": "南昌", "number": 582 }
  ,
  { "dep_city": "赣州", "arr_city": "深圳", "number": 514 }
  ,
  { "dep_city": "赣州", "arr_city": "东莞", "number": 450 }
  ,
  { "dep_city": "景德镇", "arr_city": "上饶", "number": 1921 }
  ,
  { "dep_city": "景德镇", "arr_city": "南昌", "number": 496 }
  ,
  { "dep_city": "景德镇", "arr_city": "九江", "number": 344 }
  ,
  { "dep_city": "景德镇", "arr_city": "池州", "number": 106 }
  ,
  { "dep_city": "景德镇", "arr_city": "黄山", "number": 100 }
  ,
  { "dep_city": "景德镇", "arr_city": "金华", "number": 95 }
  ,
  { "dep_city": "景德镇", "arr_city": "杭州", "number": 95 }
  ,
  { "dep_city": "景德镇", "arr_city": "抚州", "number": 86 }
  ,
  { "dep_city": "景德镇", "arr_city": "衢州", "number": 58 }
  ,
  { "dep_city": "景德镇", "arr_city": "安庆", "number": 52 }
  ,
  { "dep_city": "萍乡", "arr_city": "长沙", "number": 1468 }
  ,
  { "dep_city": "萍乡", "arr_city": "株洲", "number": 987 }
  ,
  { "dep_city": "萍乡", "arr_city": "宜春", "number": 814 }
  ,
  { "dep_city": "萍乡", "arr_city": "吉安", "number": 253 }
  ,
  { "dep_city": "萍乡", "arr_city": "南昌", "number": 167 }
  ,
  { "dep_city": "萍乡", "arr_city": "黔东南", "number": 67 }
  ,
  { "dep_city": "萍乡", "arr_city": "邵阳", "number": 57 }
  ,
  { "dep_city": "萍乡", "arr_city": "湘潭", "number": 51 }
  ,
  { "dep_city": "萍乡", "arr_city": "赣州", "number": 50 }
  ,
  { "dep_city": "萍乡", "arr_city": "湘西", "number": 47 }
  ,
  { "dep_city": "新余", "arr_city": "宜春", "number": 946 }
  ,
  { "dep_city": "新余", "arr_city": "吉安", "number": 378 }
  ,
  { "dep_city": "新余", "arr_city": "南昌", "number": 276 }
  ,
  { "dep_city": "新余", "arr_city": "长沙", "number": 86 }
  ,
  { "dep_city": "新余", "arr_city": "赣州", "number": 70 }
  ,
  { "dep_city": "新余", "arr_city": "萍乡", "number": 49 }
  ,
  { "dep_city": "新余", "arr_city": "上饶", "number": 36 }
  ,
  { "dep_city": "新余", "arr_city": "湘潭", "number": 34 }
  ,
  { "dep_city": "新余", "arr_city": "怀化", "number": 33 }
  ,
  { "dep_city": "新余", "arr_city": "抚州", "number": 32 }
  ,
  { "dep_city": "鹰潭", "arr_city": "上饶", "number": 913 }
  ,
  { "dep_city": "鹰潭", "arr_city": "抚州", "number": 356 }
  ,
  { "dep_city": "鹰潭", "arr_city": "南昌", "number": 215 }
  ,
  { "dep_city": "鹰潭", "arr_city": "金华", "number": 63 }
  ,
  { "dep_city": "鹰潭", "arr_city": "宜春", "number": 63 }
  ,
  { "dep_city": "鹰潭", "arr_city": "赣州", "number": 57 }
  ,
  { "dep_city": "鹰潭", "arr_city": "杭州", "number": 37 }
  ,
  { "dep_city": "鹰潭", "arr_city": "衢州", "number": 34 }
  ,
  { "dep_city": "鹰潭", "arr_city": "景德镇", "number": 32 }
  ,
  { "dep_city": "鹰潭", "arr_city": "台州", "number": 25 }
  ,
  { "dep_city": "济南", "arr_city": "德州", "number": 8804 }
  ,
  { "dep_city": "济南", "arr_city": "滨州", "number": 5811 }
  ,
  { "dep_city": "济南", "arr_city": "泰安", "number": 5688 }
  ,
  { "dep_city": "济南", "arr_city": "聊城", "number": 4625 }
  ,
  { "dep_city": "济南", "arr_city": "淄博", "number": 4085 }
  ,
  { "dep_city": "济南", "arr_city": "济宁", "number": 3944 }
  ,
  { "dep_city": "济南", "arr_city": "菏泽", "number": 3570 }
  ,
  { "dep_city": "济南", "arr_city": "临沂", "number": 3150 }
  ,
  { "dep_city": "济南", "arr_city": "潍坊", "number": 3103 }
  ,
  { "dep_city": "济南", "arr_city": "莱芜", "number": 2011 }
  ,
  { "dep_city": "青岛", "arr_city": "潍坊", "number": 9634 }
  ,
  { "dep_city": "青岛", "arr_city": "烟台", "number": 8661 }
  ,
  { "dep_city": "青岛", "arr_city": "日照", "number": 3227 }
  ,
  { "dep_city": "青岛", "arr_city": "临沂", "number": 3136 }
  ,
  { "dep_city": "青岛", "arr_city": "东营", "number": 1446 }
  ,
  { "dep_city": "青岛", "arr_city": "济南", "number": 1394 }
  ,
  { "dep_city": "青岛", "arr_city": "威海", "number": 1334 }
  ,
  { "dep_city": "青岛", "arr_city": "淄博", "number": 1104 }
  ,
  { "dep_city": "青岛", "arr_city": "济宁", "number": 890 }
  ,
  { "dep_city": "青岛", "arr_city": "连云港", "number": 858 }
  ,
  { "dep_city": "淄博", "arr_city": "滨州", "number": 9142 }
  ,
  { "dep_city": "淄博", "arr_city": "济南", "number": 3408 }
  ,
  { "dep_city": "淄博", "arr_city": "潍坊", "number": 3366 }
  ,
  { "dep_city": "淄博", "arr_city": "东营", "number": 1842 }
  ,
  { "dep_city": "淄博", "arr_city": "临沂", "number": 1352 }
  ,
  { "dep_city": "淄博", "arr_city": "莱芜", "number": 956 }
  ,
  { "dep_city": "淄博", "arr_city": "青岛", "number": 815 }
  ,
  { "dep_city": "淄博", "arr_city": "泰安", "number": 497 }
  ,
  { "dep_city": "淄博", "arr_city": "德州", "number": 392 }
  ,
  { "dep_city": "淄博", "arr_city": "济宁", "number": 334 }
  ,
  { "dep_city": "枣庄", "arr_city": "济宁", "number": 5343 }
  ,
  { "dep_city": "枣庄", "arr_city": "临沂", "number": 3344 }
  ,
  { "dep_city": "枣庄", "arr_city": "徐州", "number": 2939 }
  ,
  { "dep_city": "枣庄", "arr_city": "济南", "number": 594 }
  ,
  { "dep_city": "枣庄", "arr_city": "菏泽", "number": 308 }
  ,
  { "dep_city": "枣庄", "arr_city": "青岛", "number": 211 }
  ,
  { "dep_city": "枣庄", "arr_city": "泰安", "number": 201 }
  ,
  { "dep_city": "枣庄", "arr_city": "宿州", "number": 160 }
  ,
  { "dep_city": "枣庄", "arr_city": "宿迁", "number": 136 }
  ,
  { "dep_city": "枣庄", "arr_city": "日照", "number": 117 }
  ,
  { "dep_city": "东营", "arr_city": "滨州", "number": 5427 }
  ,
  { "dep_city": "东营", "arr_city": "潍坊", "number": 3889 }
  ,
  { "dep_city": "东营", "arr_city": "淄博", "number": 1628 }
  ,
  { "dep_city": "东营", "arr_city": "济南", "number": 1267 }
  ,
  { "dep_city": "东营", "arr_city": "青岛", "number": 705 }
  ,
  { "dep_city": "东营", "arr_city": "烟台", "number": 487 }
  ,
  { "dep_city": "东营", "arr_city": "临沂", "number": 483 }
  ,
  { "dep_city": "东营", "arr_city": "德州", "number": 441 }
  ,
  { "dep_city": "东营", "arr_city": "沧州", "number": 255 }
  ,
  { "dep_city": "东营", "arr_city": "菏泽", "number": 246 }
  ,
  { "dep_city": "烟台", "arr_city": "青岛", "number": 10143 }
  ,
  { "dep_city": "烟台", "arr_city": "威海", "number": 4426 }
  ,
  { "dep_city": "烟台", "arr_city": "潍坊", "number": 2408 }
  ,
  { "dep_city": "烟台", "arr_city": "东营", "number": 894 }
  ,
  { "dep_city": "烟台", "arr_city": "滨州", "number": 737 }
  ,
  { "dep_city": "烟台", "arr_city": "济南", "number": 731 }
  ,
  { "dep_city": "烟台", "arr_city": "临沂", "number": 669 }
  ,
  { "dep_city": "烟台", "arr_city": "淄博", "number": 526 }
  ,
  { "dep_city": "烟台", "arr_city": "日照", "number": 308 }
  ,
  { "dep_city": "烟台", "arr_city": "德州", "number": 229 }
  ,
  { "dep_city": "潍坊", "arr_city": "青岛", "number": 10062 }
  ,
  { "dep_city": "潍坊", "arr_city": "东营", "number": 4601 }
  ,
  { "dep_city": "潍坊", "arr_city": "淄博", "number": 3683 }
  ,
  { "dep_city": "潍坊", "arr_city": "临沂", "number": 3266 }
  ,
  { "dep_city": "潍坊", "arr_city": "济南", "number": 2323 }
  ,
  { "dep_city": "潍坊", "arr_city": "日照", "number": 2115 }
  ,
  { "dep_city": "潍坊", "arr_city": "烟台", "number": 2053 }
  ,
  { "dep_city": "潍坊", "arr_city": "滨州", "number": 1926 }
  ,
  { "dep_city": "潍坊", "arr_city": "济宁", "number": 626 }
  ,
  { "dep_city": "潍坊", "arr_city": "菏泽", "number": 488 }
  ,
  { "dep_city": "济宁", "arr_city": "菏泽", "number": 8084 }
  ,
  { "dep_city": "济宁", "arr_city": "枣庄", "number": 4596 }
  ,
  { "dep_city": "济宁", "arr_city": "泰安", "number": 4258 }
  ,
  { "dep_city": "济宁", "arr_city": "济南", "number": 2995 }
  ,
  { "dep_city": "济宁", "arr_city": "徐州", "number": 2881 }
  ,
  { "dep_city": "济宁", "arr_city": "临沂", "number": 2183 }
  ,
  { "dep_city": "济宁", "arr_city": "聊城", "number": 520 }
  ,
  { "dep_city": "济宁", "arr_city": "青岛", "number": 483 }
  ,
  { "dep_city": "济宁", "arr_city": "濮阳", "number": 436 }
  ,
  { "dep_city": "济宁", "arr_city": "商丘", "number": 394 }
  ,
  { "dep_city": "泰安", "arr_city": "济南", "number": 5543 }
  ,
  { "dep_city": "泰安", "arr_city": "济宁", "number": 4738 }
  ,
  { "dep_city": "泰安", "arr_city": "临沂", "number": 2160 }
  ,
  { "dep_city": "泰安", "arr_city": "莱芜", "number": 1208 }
  ,
  { "dep_city": "泰安", "arr_city": "聊城", "number": 904 }
  ,
  { "dep_city": "泰安", "arr_city": "菏泽", "number": 818 }
  ,
  { "dep_city": "泰安", "arr_city": "淄博", "number": 532 }
  ,
  { "dep_city": "泰安", "arr_city": "潍坊", "number": 461 }
  ,
  { "dep_city": "泰安", "arr_city": "德州", "number": 422 }
  ,
  { "dep_city": "泰安", "arr_city": "青岛", "number": 405 }
  ,
  { "dep_city": "威海", "arr_city": "烟台", "number": 5142 }
  ,
  { "dep_city": "威海", "arr_city": "青岛", "number": 1661 }
  ,
  { "dep_city": "威海", "arr_city": "潍坊", "number": 496 }
  ,
  { "dep_city": "威海", "arr_city": "淄博", "number": 273 }
  ,
  { "dep_city": "威海", "arr_city": "临沂", "number": 249 }
  ,
  { "dep_city": "威海", "arr_city": "日照", "number": 223 }
  ,
  { "dep_city": "威海", "arr_city": "东营", "number": 202 }
  ,
  { "dep_city": "威海", "arr_city": "济南", "number": 197 }
  ,
  { "dep_city": "威海", "arr_city": "滨州", "number": 183 }
  ,
  { "dep_city": "威海", "arr_city": "大连", "number": 89 }
  ,
  { "dep_city": "日照", "arr_city": "临沂", "number": 5646 }
  ,
  { "dep_city": "日照", "arr_city": "青岛", "number": 3011 }
  ,
  { "dep_city": "日照", "arr_city": "潍坊", "number": 2276 }
  ,
  { "dep_city": "日照", "arr_city": "连云港", "number": 1652 }
  ,
  { "dep_city": "日照", "arr_city": "济南", "number": 428 }
  ,
  { "dep_city": "日照", "arr_city": "济宁", "number": 259 }
  ,
  { "dep_city": "日照", "arr_city": "烟台", "number": 232 }
  ,
  { "dep_city": "日照", "arr_city": "淄博", "number": 178 }
  ,
  { "dep_city": "日照", "arr_city": "泰安", "number": 156 }
  ,
  { "dep_city": "日照", "arr_city": "菏泽", "number": 137 }
  ,
  { "dep_city": "滨州", "arr_city": "淄博", "number": 8758 }
  ,
  { "dep_city": "滨州", "arr_city": "东营", "number": 5448 }
  ,
  { "dep_city": "滨州", "arr_city": "济南", "number": 4738 }
  ,
  { "dep_city": "滨州", "arr_city": "德州", "number": 2268 }
  ,
  { "dep_city": "滨州", "arr_city": "潍坊", "number": 1466 }
  ,
  { "dep_city": "滨州", "arr_city": "沧州", "number": 1419 }
  ,
  { "dep_city": "滨州", "arr_city": "天津", "number": 583 }
  ,
  { "dep_city": "滨州", "arr_city": "青岛", "number": 462 }
  ,
  { "dep_city": "滨州", "arr_city": "临沂", "number": 337 }
  ,
  { "dep_city": "滨州", "arr_city": "聊城", "number": 329 }
  ,
  { "dep_city": "德州", "arr_city": "济南", "number": 9652 }
  ,
  { "dep_city": "德州", "arr_city": "沧州", "number": 3938 }
  ,
  { "dep_city": "德州", "arr_city": "聊城", "number": 3660 }
  ,
  { "dep_city": "德州", "arr_city": "衡水", "number": 2992 }
  ,
  { "dep_city": "德州", "arr_city": "滨州", "number": 2402 }
  ,
  { "dep_city": "德州", "arr_city": "天津", "number": 855 }
  ,
  { "dep_city": "德州", "arr_city": "邢台", "number": 650 }
  ,
  { "dep_city": "德州", "arr_city": "东营", "number": 507 }
  ,
  { "dep_city": "德州", "arr_city": "北京", "number": 501 }
  ,
  { "dep_city": "德州", "arr_city": "泰安", "number": 424 }
  ,
  { "dep_city": "聊城", "arr_city": "濮阳", "number": 4729 }
  ,
  { "dep_city": "聊城", "arr_city": "济南", "number": 4357 }
  ,
  { "dep_city": "聊城", "arr_city": "德州", "number": 3449 }
  ,
  { "dep_city": "聊城", "arr_city": "邢台", "number": 2311 }
  ,
  { "dep_city": "聊城", "arr_city": "邯郸", "number": 2177 }
  ,
  { "dep_city": "聊城", "arr_city": "泰安", "number": 681 }
  ,
  { "dep_city": "聊城", "arr_city": "菏泽", "number": 661 }
  ,
  { "dep_city": "聊城", "arr_city": "济宁", "number": 533 }
  ,
  { "dep_city": "聊城", "arr_city": "滨州", "number": 282 }
  ,
  { "dep_city": "聊城", "arr_city": "潍坊", "number": 265 }
  ,
  { "dep_city": "临沂", "arr_city": "日照", "number": 5931 }
  ,
  { "dep_city": "临沂", "arr_city": "连云港", "number": 3799 }
  ,
  { "dep_city": "临沂", "arr_city": "徐州", "number": 3134 }
  ,
  { "dep_city": "临沂", "arr_city": "潍坊", "number": 2896 }
  ,
  { "dep_city": "临沂", "arr_city": "枣庄", "number": 2868 }
  ,
  { "dep_city": "临沂", "arr_city": "青岛", "number": 2748 }
  ,
  { "dep_city": "临沂", "arr_city": "济宁", "number": 2421 }
  ,
  { "dep_city": "临沂", "arr_city": "济南", "number": 2012 }
  ,
  { "dep_city": "临沂", "arr_city": "泰安", "number": 1995 }
  ,
  { "dep_city": "临沂", "arr_city": "淄博", "number": 1426 }
  ,
  { "dep_city": "菏泽", "arr_city": "济宁", "number": 7952 }
  ,
  { "dep_city": "菏泽", "arr_city": "商丘", "number": 2465 }
  ,
  { "dep_city": "菏泽", "arr_city": "开封", "number": 2329 }
  ,
  { "dep_city": "菏泽", "arr_city": "济南", "number": 2094 }
  ,
  { "dep_city": "菏泽", "arr_city": "濮阳", "number": 1494 }
  ,
  { "dep_city": "菏泽", "arr_city": "徐州", "number": 891 }
  ,
  { "dep_city": "菏泽", "arr_city": "泰安", "number": 565 }
  ,
  { "dep_city": "菏泽", "arr_city": "聊城", "number": 520 }
  ,
  { "dep_city": "菏泽", "arr_city": "宿州", "number": 504 }
  ,
  { "dep_city": "菏泽", "arr_city": "临沂", "number": 504 }
  ,
  { "dep_city": "莱芜", "arr_city": "济南", "number": 1925 }
  ,
  { "dep_city": "莱芜", "arr_city": "泰安", "number": 1087 }
  ,
  { "dep_city": "莱芜", "arr_city": "淄博", "number": 812 }
  ,
  { "dep_city": "莱芜", "arr_city": "临沂", "number": 325 }
  ,
  { "dep_city": "莱芜", "arr_city": "潍坊", "number": 181 }
  ,
  { "dep_city": "莱芜", "arr_city": "青岛", "number": 152 }
  ,
  { "dep_city": "莱芜", "arr_city": "济宁", "number": 116 }
  ,
  { "dep_city": "莱芜", "arr_city": "滨州", "number": 103 }
  ,
  { "dep_city": "莱芜", "arr_city": "日照", "number": 93 }
  ,
  { "dep_city": "莱芜", "arr_city": "德州", "number": 62 }
  ,
  { "dep_city": "郑州", "arr_city": "开封", "number": 11533 }
  ,
  { "dep_city": "郑州", "arr_city": "新乡", "number": 10154 }
  ,
  { "dep_city": "郑州", "arr_city": "周口", "number": 6003 }
  ,
  { "dep_city": "郑州", "arr_city": "许昌", "number": 5430 }
  ,
  { "dep_city": "郑州", "arr_city": "洛阳", "number": 5407 }
  ,
  { "dep_city": "郑州", "arr_city": "焦作", "number": 4882 }
  ,
  { "dep_city": "郑州", "arr_city": "商丘", "number": 3875 }
  ,
  { "dep_city": "郑州", "arr_city": "平顶山", "number": 3030 }
  ,
  { "dep_city": "郑州", "arr_city": "南阳", "number": 2432 }
  ,
  { "dep_city": "郑州", "arr_city": "驻马店", "number": 2260 }
  ,
  { "dep_city": "开封", "arr_city": "郑州", "number": 14146 }
  ,
  { "dep_city": "开封", "arr_city": "商丘", "number": 2845 }
  ,
  { "dep_city": "开封", "arr_city": "菏泽", "number": 2263 }
  ,
  { "dep_city": "开封", "arr_city": "周口", "number": 2133 }
  ,
  { "dep_city": "开封", "arr_city": "新乡", "number": 1684 }
  ,
  { "dep_city": "开封", "arr_city": "许昌", "number": 1375 }
  ,
  { "dep_city": "开封", "arr_city": "濮阳", "number": 391 }
  ,
  { "dep_city": "开封", "arr_city": "安阳", "number": 366 }
  ,
  { "dep_city": "开封", "arr_city": "焦作", "number": 346 }
  ,
  { "dep_city": "开封", "arr_city": "洛阳", "number": 284 }
  ,
  { "dep_city": "洛阳", "arr_city": "郑州", "number": 6220 }
  ,
  { "dep_city": "洛阳", "arr_city": "三门峡", "number": 1926 }
  ,
  { "dep_city": "洛阳", "arr_city": "焦作", "number": 1538 }
  ,
  { "dep_city": "洛阳", "arr_city": "平顶山", "number": 1494 }
  ,
  { "dep_city": "洛阳", "arr_city": "济源", "number": 943 }
  ,
  { "dep_city": "洛阳", "arr_city": "南阳", "number": 502 }
  ,
  { "dep_city": "洛阳", "arr_city": "新乡", "number": 356 }
  ,
  { "dep_city": "洛阳", "arr_city": "开封", "number": 324 }
  ,
  { "dep_city": "洛阳", "arr_city": "许昌", "number": 241 }
  ,
  { "dep_city": "洛阳", "arr_city": "周口", "number": 234 }
  ,
  { "dep_city": "平顶山", "arr_city": "郑州", "number": 3354 }
  ,
  { "dep_city": "平顶山", "arr_city": "许昌", "number": 2276 }
  ,
  { "dep_city": "平顶山", "arr_city": "洛阳", "number": 1647 }
  ,
  { "dep_city": "平顶山", "arr_city": "南阳", "number": 1597 }
  ,
  { "dep_city": "平顶山", "arr_city": "漯河", "number": 1420 }
  ,
  { "dep_city": "平顶山", "arr_city": "驻马店", "number": 920 }
  ,
  { "dep_city": "平顶山", "arr_city": "周口", "number": 347 }
  ,
  { "dep_city": "平顶山", "arr_city": "开封", "number": 159 }
  ,
  { "dep_city": "平顶山", "arr_city": "焦作", "number": 124 }
  ,
  { "dep_city": "平顶山", "arr_city": "新乡", "number": 98 }
  ,
  { "dep_city": "安阳", "arr_city": "濮阳", "number": 5195 }
  ,
  { "dep_city": "安阳", "arr_city": "新乡", "number": 5039 }
  ,
  { "dep_city": "安阳", "arr_city": "鹤壁", "number": 4451 }
  ,
  { "dep_city": "安阳", "arr_city": "邯郸", "number": 3136 }
  ,
  { "dep_city": "安阳", "arr_city": "郑州", "number": 2855 }
  ,
  { "dep_city": "安阳", "arr_city": "长治", "number": 452 }
  ,
  { "dep_city": "安阳", "arr_city": "开封", "number": 393 }
  ,
  { "dep_city": "安阳", "arr_city": "焦作", "number": 277 }
  ,
  { "dep_city": "安阳", "arr_city": "菏泽", "number": 253 }
  ,
  { "dep_city": "安阳", "arr_city": "聊城", "number": 197 }
  ,
  { "dep_city": "鹤壁", "arr_city": "安阳", "number": 4081 }
  ,
  { "dep_city": "鹤壁", "arr_city": "新乡", "number": 1444 }
  ,
  { "dep_city": "鹤壁", "arr_city": "郑州", "number": 812 }
  ,
  { "dep_city": "鹤壁", "arr_city": "濮阳", "number": 518 }
  ,
  { "dep_city": "鹤壁", "arr_city": "焦作", "number": 118 }
  ,
  { "dep_city": "鹤壁", "arr_city": "邯郸", "number": 114 }
  ,
  { "dep_city": "鹤壁", "arr_city": "开封", "number": 68 }
  ,
  { "dep_city": "鹤壁", "arr_city": "菏泽", "number": 55 }
  ,
  { "dep_city": "鹤壁", "arr_city": "周口", "number": 35 }
  ,
  { "dep_city": "鹤壁", "arr_city": "长治", "number": 32 }
  ,
  { "dep_city": "新乡", "arr_city": "郑州", "number": 12959 }
  ,
  { "dep_city": "新乡", "arr_city": "安阳", "number": 3956 }
  ,
  { "dep_city": "新乡", "arr_city": "焦作", "number": 2871 }
  ,
  { "dep_city": "新乡", "arr_city": "开封", "number": 1806 }
  ,
  { "dep_city": "新乡", "arr_city": "鹤壁", "number": 1225 }
  ,
  { "dep_city": "新乡", "arr_city": "濮阳", "number": 866 }
  ,
  { "dep_city": "新乡", "arr_city": "菏泽", "number": 467 }
  ,
  { "dep_city": "新乡", "arr_city": "周口", "number": 416 }
  ,
  { "dep_city": "新乡", "arr_city": "商丘", "number": 404 }
  ,
  { "dep_city": "新乡", "arr_city": "洛阳", "number": 317 }
  ,
  { "dep_city": "焦作", "arr_city": "郑州", "number": 6960 }
  ,
  { "dep_city": "焦作", "arr_city": "新乡", "number": 3042 }
  ,
  { "dep_city": "焦作", "arr_city": "洛阳", "number": 1839 }
  ,
  { "dep_city": "焦作", "arr_city": "济源", "number": 1686 }
  ,
  { "dep_city": "焦作", "arr_city": "开封", "number": 550 }
  ,
  { "dep_city": "焦作", "arr_city": "晋城", "number": 469 }
  ,
  { "dep_city": "焦作", "arr_city": "安阳", "number": 300 }
  ,
  { "dep_city": "焦作", "arr_city": "商丘", "number": 203 }
  ,
  { "dep_city": "焦作", "arr_city": "濮阳", "number": 186 }
  ,
  { "dep_city": "焦作", "arr_city": "周口", "number": 174 }
  ,
  { "dep_city": "濮阳", "arr_city": "聊城", "number": 4613 }
  ,
  { "dep_city": "濮阳", "arr_city": "安阳", "number": 4393 }
  ,
  { "dep_city": "濮阳", "arr_city": "邯郸", "number": 1916 }
  ,
  { "dep_city": "濮阳", "arr_city": "郑州", "number": 1415 }
  ,
  { "dep_city": "濮阳", "arr_city": "菏泽", "number": 1256 }
  ,
  { "dep_city": "濮阳", "arr_city": "新乡", "number": 957 }
  ,
  { "dep_city": "濮阳", "arr_city": "鹤壁", "number": 531 }
  ,
  { "dep_city": "濮阳", "arr_city": "开封", "number": 442 }
  ,
  { "dep_city": "濮阳", "arr_city": "济宁", "number": 341 }
  ,
  { "dep_city": "濮阳", "arr_city": "周口", "number": 274 }
  ,
  { "dep_city": "许昌", "arr_city": "郑州", "number": 6126 }
  ,
  { "dep_city": "许昌", "arr_city": "漯河", "number": 2164 }
  ,
  { "dep_city": "许昌", "arr_city": "平顶山", "number": 2116 }
  ,
  { "dep_city": "许昌", "arr_city": "周口", "number": 1558 }
  ,
  { "dep_city": "许昌", "arr_city": "开封", "number": 1351 }
  ,
  { "dep_city": "许昌", "arr_city": "南阳", "number": 470 }
  ,
  { "dep_city": "许昌", "arr_city": "驻马店", "number": 326 }
  ,
  { "dep_city": "许昌", "arr_city": "新乡", "number": 257 }
  ,
  { "dep_city": "许昌", "arr_city": "洛阳", "number": 232 }
  ,
  { "dep_city": "许昌", "arr_city": "商丘", "number": 217 }
  ,
  { "dep_city": "漯河", "arr_city": "许昌", "number": 2392 }
  ,
  { "dep_city": "漯河", "arr_city": "驻马店", "number": 2107 }
  ,
  { "dep_city": "漯河", "arr_city": "周口", "number": 2094 }
  ,
  { "dep_city": "漯河", "arr_city": "郑州", "number": 1478 }
  ,
  { "dep_city": "漯河", "arr_city": "平顶山", "number": 1358 }
  ,
  { "dep_city": "漯河", "arr_city": "南阳", "number": 214 }
  ,
  { "dep_city": "漯河", "arr_city": "信阳", "number": 133 }
  ,
  { "dep_city": "漯河", "arr_city": "开封", "number": 127 }
  ,
  { "dep_city": "漯河", "arr_city": "商丘", "number": 88 }
  ,
  { "dep_city": "漯河", "arr_city": "新乡", "number": 82 }
  ,
  { "dep_city": "三门峡", "arr_city": "洛阳", "number": 1870 }
  ,
  { "dep_city": "三门峡", "arr_city": "运城", "number": 1089 }
  ,
  { "dep_city": "三门峡", "arr_city": "郑州", "number": 503 }
  ,
  { "dep_city": "三门峡", "arr_city": "渭南", "number": 319 }
  ,
  { "dep_city": "三门峡", "arr_city": "西安", "number": 232 }
  ,
  { "dep_city": "三门峡", "arr_city": "商洛", "number": 143 }
  ,
  { "dep_city": "三门峡", "arr_city": "南阳", "number": 123 }
  ,
  { "dep_city": "三门峡", "arr_city": "焦作", "number": 104 }
  ,
  { "dep_city": "三门峡", "arr_city": "开封", "number": 73 }
  ,
  { "dep_city": "三门峡", "arr_city": "平顶山", "number": 71 }
  ,
  { "dep_city": "商丘", "arr_city": "周口", "number": 4808 }
  ,
  { "dep_city": "商丘", "arr_city": "郑州", "number": 3559 }
  ,
  { "dep_city": "商丘", "arr_city": "开封", "number": 2802 }
  ,
  { "dep_city": "商丘", "arr_city": "亳州", "number": 2518 }
  ,
  { "dep_city": "商丘", "arr_city": "菏泽", "number": 2336 }
  ,
  { "dep_city": "商丘", "arr_city": "宿州", "number": 1960 }
  ,
  { "dep_city": "商丘", "arr_city": "淮北", "number": 972 }
  ,
  { "dep_city": "商丘", "arr_city": "徐州", "number": 554 }
  ,
  { "dep_city": "商丘", "arr_city": "新乡", "number": 339 }
  ,
  { "dep_city": "商丘", "arr_city": "济宁", "number": 300 }
  ,
  { "dep_city": "周口", "arr_city": "郑州", "number": 5564 }
  ,
  { "dep_city": "周口", "arr_city": "商丘", "number": 4528 }
  ,
  { "dep_city": "周口", "arr_city": "阜阳", "number": 3819 }
  ,
  { "dep_city": "周口", "arr_city": "驻马店", "number": 2839 }
  ,
  { "dep_city": "周口", "arr_city": "亳州", "number": 2257 }
  ,
  { "dep_city": "周口", "arr_city": "漯河", "number": 2063 }
  ,
  { "dep_city": "周口", "arr_city": "开封", "number": 1938 }
  ,
  { "dep_city": "周口", "arr_city": "许昌", "number": 1453 }
  ,
  { "dep_city": "周口", "arr_city": "信阳", "number": 345 }
  ,
  { "dep_city": "周口", "arr_city": "平顶山", "number": 315 }
  ,
  { "dep_city": "驻马店", "arr_city": "周口", "number": 3056 }
  ,
  { "dep_city": "驻马店", "arr_city": "信阳", "number": 2997 }
  ,
  { "dep_city": "驻马店", "arr_city": "漯河", "number": 2396 }
  ,
  { "dep_city": "驻马店", "arr_city": "郑州", "number": 2197 }
  ,
  { "dep_city": "驻马店", "arr_city": "南阳", "number": 2165 }
  ,
  { "dep_city": "驻马店", "arr_city": "阜阳", "number": 2070 }
  ,
  { "dep_city": "驻马店", "arr_city": "平顶山", "number": 855 }
  ,
  { "dep_city": "驻马店", "arr_city": "许昌", "number": 312 }
  ,
  { "dep_city": "驻马店", "arr_city": "商丘", "number": 206 }
  ,
  { "dep_city": "驻马店", "arr_city": "开封", "number": 196 }
  ,
  { "dep_city": "南阳", "arr_city": "襄阳", "number": 2379 }
  ,
  { "dep_city": "南阳", "arr_city": "郑州", "number": 2244 }
  ,
  { "dep_city": "南阳", "arr_city": "驻马店", "number": 2214 }
  ,
  { "dep_city": "南阳", "arr_city": "平顶山", "number": 1617 }
  ,
  { "dep_city": "南阳", "arr_city": "十堰", "number": 620 }
  ,
  { "dep_city": "南阳", "arr_city": "许昌", "number": 482 }
  ,
  { "dep_city": "南阳", "arr_city": "洛阳", "number": 475 }
  ,
  { "dep_city": "南阳", "arr_city": "信阳", "number": 440 }
  ,
  { "dep_city": "南阳", "arr_city": "随州", "number": 389 }
  ,
  { "dep_city": "南阳", "arr_city": "周口", "number": 364 }
  ,
  { "dep_city": "信阳", "arr_city": "驻马店", "number": 2984 }
  ,
  { "dep_city": "信阳", "arr_city": "六安", "number": 1407 }
  ,
  { "dep_city": "信阳", "arr_city": "阜阳", "number": 1115 }
  ,
  { "dep_city": "信阳", "arr_city": "郑州", "number": 772 }
  ,
  { "dep_city": "信阳", "arr_city": "武汉", "number": 578 }
  ,
  { "dep_city": "信阳", "arr_city": "南阳", "number": 462 }
  ,
  { "dep_city": "信阳", "arr_city": "周口", "number": 428 }
  ,
  { "dep_city": "信阳", "arr_city": "黄冈", "number": 358 }
  ,
  { "dep_city": "信阳", "arr_city": "孝感", "number": 339 }
  ,
  { "dep_city": "信阳", "arr_city": "合肥", "number": 304 }
  ,
  { "dep_city": "济源", "arr_city": "焦作", "number": 1378 }
  ,
  { "dep_city": "济源", "arr_city": "洛阳", "number": 925 }
  ,
  { "dep_city": "济源", "arr_city": "郑州", "number": 578 }
  ,
  { "dep_city": "济源", "arr_city": "运城", "number": 199 }
  ,
  { "dep_city": "济源", "arr_city": "新乡", "number": 116 }
  ,
  { "dep_city": "济源", "arr_city": "晋城", "number": 85 }
  ,
  { "dep_city": "济源", "arr_city": "临汾", "number": 65 }
  ,
  { "dep_city": "济源", "arr_city": "安阳", "number": 58 }
  ,
  { "dep_city": "济源", "arr_city": "商丘", "number": 35 }
  ,
  { "dep_city": "济源", "arr_city": "平顶山", "number": 30 }
  ,
  { "dep_city": "武汉", "arr_city": "孝感", "number": 10856 }
  ,
  { "dep_city": "武汉", "arr_city": "黄冈", "number": 6929 }
  ,
  { "dep_city": "武汉", "arr_city": "鄂州", "number": 3394 }
  ,
  { "dep_city": "武汉", "arr_city": "咸宁", "number": 2915 }
  ,
  { "dep_city": "武汉", "arr_city": "荆州", "number": 2683 }
  ,
  { "dep_city": "武汉", "arr_city": "仙桃", "number": 2347 }
  ,
  { "dep_city": "武汉", "arr_city": "黄石", "number": 1585 }
  ,
  { "dep_city": "武汉", "arr_city": "随州", "number": 1244 }
  ,
  { "dep_city": "武汉", "arr_city": "荆门", "number": 1085 }
  ,
  { "dep_city": "武汉", "arr_city": "襄阳", "number": 939 }
  ,
  { "dep_city": "黄石", "arr_city": "鄂州", "number": 3236 }
  ,
  { "dep_city": "黄石", "arr_city": "武汉", "number": 1749 }
  ,
  { "dep_city": "黄石", "arr_city": "黄冈", "number": 1586 }
  ,
  { "dep_city": "黄石", "arr_city": "咸宁", "number": 518 }
  ,
  { "dep_city": "黄石", "arr_city": "九江", "number": 330 }
  ,
  { "dep_city": "黄石", "arr_city": "孝感", "number": 80 }
  ,
  { "dep_city": "黄石", "arr_city": "南昌", "number": 54 }
  ,
  { "dep_city": "黄石", "arr_city": "宜春", "number": 35 }
  ,
  { "dep_city": "黄石", "arr_city": "岳阳", "number": 33 }
  ,
  { "dep_city": "黄石", "arr_city": "安庆", "number": 31 }
  ,
  { "dep_city": "十堰", "arr_city": "襄阳", "number": 914 }
  ,
  { "dep_city": "十堰", "arr_city": "南阳", "number": 639 }
  ,
  { "dep_city": "十堰", "arr_city": "安康", "number": 358 }
  ,
  { "dep_city": "十堰", "arr_city": "武汉", "number": 207 }
  ,
  { "dep_city": "十堰", "arr_city": "商洛", "number": 195 }
  ,
  { "dep_city": "十堰", "arr_city": "西安", "number": 147 }
  ,
  { "dep_city": "十堰", "arr_city": "神农架", "number": 103 }
  ,
  { "dep_city": "十堰", "arr_city": "荆门", "number": 83 }
  ,
  { "dep_city": "十堰", "arr_city": "重庆", "number": 65 }
  ,
  { "dep_city": "十堰", "arr_city": "随州", "number": 60 }
  ,
  { "dep_city": "荆州", "arr_city": "武汉", "number": 2908 }
  ,
  { "dep_city": "荆州", "arr_city": "宜昌", "number": 2219 }
  ,
  { "dep_city": "荆州", "arr_city": "潜江", "number": 1699 }
  ,
  { "dep_city": "荆州", "arr_city": "岳阳", "number": 1629 }
  ,
  { "dep_city": "荆州", "arr_city": "常德", "number": 1518 }
  ,
  { "dep_city": "荆州", "arr_city": "仙桃", "number": 1093 }
  ,
  { "dep_city": "荆州", "arr_city": "荆门", "number": 876 }
  ,
  { "dep_city": "荆州", "arr_city": "咸宁", "number": 423 }
  ,
  { "dep_city": "荆州", "arr_city": "长沙", "number": 288 }
  ,
  { "dep_city": "荆州", "arr_city": "孝感", "number": 256 }
  ,
  { "dep_city": "宜昌", "arr_city": "荆州", "number": 2134 }
  ,
  { "dep_city": "宜昌", "arr_city": "恩施州", "number": 1608 }
  ,
  { "dep_city": "宜昌", "arr_city": "重庆", "number": 1373 }
  ,
  { "dep_city": "宜昌", "arr_city": "武汉", "number": 603 }
  ,
  { "dep_city": "宜昌", "arr_city": "荆门", "number": 594 }
  ,
  { "dep_city": "宜昌", "arr_city": "襄阳", "number": 534 }
  ,
  { "dep_city": "宜昌", "arr_city": "神农架", "number": 350 }
  ,
  { "dep_city": "宜昌", "arr_city": "孝感", "number": 131 }
  ,
  { "dep_city": "宜昌", "arr_city": "常德", "number": 115 }
  ,
  { "dep_city": "宜昌", "arr_city": "仙桃", "number": 78 }
  ,
  { "dep_city": "襄阳", "arr_city": "南阳", "number": 2328 }
  ,
  { "dep_city": "襄阳", "arr_city": "武汉", "number": 982 }
  ,
  { "dep_city": "襄阳", "arr_city": "十堰", "number": 935 }
  ,
  { "dep_city": "襄阳", "arr_city": "随州", "number": 797 }
  ,
  { "dep_city": "襄阳", "arr_city": "荆门", "number": 754 }
  ,
  { "dep_city": "襄阳", "arr_city": "宜昌", "number": 557 }
  ,
  { "dep_city": "襄阳", "arr_city": "孝感", "number": 253 }
  ,
  { "dep_city": "襄阳", "arr_city": "荆州", "number": 228 }
  ,
  { "dep_city": "襄阳", "arr_city": "重庆", "number": 157 }
  ,
  { "dep_city": "襄阳", "arr_city": "神农架", "number": 147 }
  ,
  { "dep_city": "鄂州", "arr_city": "武汉", "number": 4262 }
  ,
  { "dep_city": "鄂州", "arr_city": "黄石", "number": 3757 }
  ,
  { "dep_city": "鄂州", "arr_city": "黄冈", "number": 1651 }
  ,
  { "dep_city": "鄂州", "arr_city": "咸宁", "number": 138 }
  ,
  { "dep_city": "鄂州", "arr_city": "孝感", "number": 107 }
  ,
  { "dep_city": "鄂州", "arr_city": "重庆", "number": 73 }
  ,
  { "dep_city": "鄂州", "arr_city": "九江", "number": 36 }
  ,
  { "dep_city": "鄂州", "arr_city": "荆州", "number": 33 }
  ,
  { "dep_city": "鄂州", "arr_city": "宜昌", "number": 32 }
  ,
  { "dep_city": "鄂州", "arr_city": "仙桃", "number": 28 }
  ,
  { "dep_city": "黄冈", "arr_city": "武汉", "number": 8108 }
  ,
  { "dep_city": "黄冈", "arr_city": "鄂州", "number": 1852 }
  ,
  { "dep_city": "黄冈", "arr_city": "黄石", "number": 1764 }
  ,
  { "dep_city": "黄冈", "arr_city": "九江", "number": 1513 }
  ,
  { "dep_city": "黄冈", "arr_city": "安庆", "number": 737 }
  ,
  { "dep_city": "黄冈", "arr_city": "孝感", "number": 662 }
  ,
  { "dep_city": "黄冈", "arr_city": "信阳", "number": 435 }
  ,
  { "dep_city": "黄冈", "arr_city": "六安", "number": 282 }
  ,
  { "dep_city": "黄冈", "arr_city": "重庆", "number": 195 }
  ,
  { "dep_city": "黄冈", "arr_city": "恩施州", "number": 133 }
  ,
  { "dep_city": "孝感", "arr_city": "武汉", "number": 12723 }
  ,
  { "dep_city": "孝感", "arr_city": "随州", "number": 987 }
  ,
  { "dep_city": "孝感", "arr_city": "仙桃", "number": 772 }
  ,
  { "dep_city": "孝感", "arr_city": "天门", "number": 739 }
  ,
  { "dep_city": "孝感", "arr_city": "黄冈", "number": 632 }
  ,
  { "dep_city": "孝感", "arr_city": "荆门", "number": 476 }
  ,
  { "dep_city": "孝感", "arr_city": "信阳", "number": 286 }
  ,
  { "dep_city": "孝感", "arr_city": "荆州", "number": 246 }
  ,
  { "dep_city": "孝感", "arr_city": "襄阳", "number": 240 }
  ,
  { "dep_city": "孝感", "arr_city": "驻马店", "number": 157 }
  ,
  { "dep_city": "咸宁", "arr_city": "武汉", "number": 3720 }
  ,
  { "dep_city": "咸宁", "arr_city": "岳阳", "number": 739 }
  ,
  { "dep_city": "咸宁", "arr_city": "黄石", "number": 559 }
  ,
  { "dep_city": "咸宁", "arr_city": "荆州", "number": 422 }
  ,
  { "dep_city": "咸宁", "arr_city": "九江", "number": 234 }
  ,
  { "dep_city": "咸宁", "arr_city": "孝感", "number": 190 }
  ,
  { "dep_city": "咸宁", "arr_city": "长沙", "number": 183 }
  ,
  { "dep_city": "咸宁", "arr_city": "黄冈", "number": 132 }
  ,
  { "dep_city": "咸宁", "arr_city": "鄂州", "number": 97 }
  ,
  { "dep_city": "咸宁", "arr_city": "驻马店", "number": 74 }
  ,
  { "dep_city": "仙桃", "arr_city": "武汉", "number": 2695 }
  ,
  { "dep_city": "仙桃", "arr_city": "天门", "number": 1147 }
  ,
  { "dep_city": "仙桃", "arr_city": "荆州", "number": 989 }
  ,
  { "dep_city": "仙桃", "arr_city": "潜江", "number": 727 }
  ,
  { "dep_city": "仙桃", "arr_city": "孝感", "number": 630 }
  ,
  { "dep_city": "仙桃", "arr_city": "荆门", "number": 143 }
  ,
  { "dep_city": "仙桃", "arr_city": "宜昌", "number": 76 }
  ,
  { "dep_city": "仙桃", "arr_city": "黄冈", "number": 65 }
  ,
  { "dep_city": "仙桃", "arr_city": "恩施州", "number": 56 }
  ,
  { "dep_city": "仙桃", "arr_city": "随州", "number": 49 }
  ,
  { "dep_city": "潜江", "arr_city": "荆州", "number": 1677 }
  ,
  { "dep_city": "潜江", "arr_city": "仙桃", "number": 702 }
  ,
  { "dep_city": "潜江", "arr_city": "武汉", "number": 643 }
  ,
  { "dep_city": "潜江", "arr_city": "荆门", "number": 486 }
  ,
  { "dep_city": "潜江", "arr_city": "天门", "number": 313 }
  ,
  { "dep_city": "潜江", "arr_city": "宜昌", "number": 79 }
  ,
  { "dep_city": "潜江", "arr_city": "孝感", "number": 69 }
  ,
  { "dep_city": "潜江", "arr_city": "襄阳", "number": 35 }
  ,
  { "dep_city": "潜江", "arr_city": "重庆", "number": 30 }
  ,
  { "dep_city": "潜江", "arr_city": "岳阳", "number": 24 }
  ,
  { "dep_city": "神农架", "arr_city": "宜昌", "number": 341 }
  ,
  { "dep_city": "神农架", "arr_city": "襄阳", "number": 170 }
  ,
  { "dep_city": "神农架", "arr_city": "十堰", "number": 125 }
  ,
  { "dep_city": "神农架", "arr_city": "恩施州", "number": 83 }
  ,
  { "dep_city": "神农架", "arr_city": "武汉", "number": 37 }
  ,
  { "dep_city": "神农架", "arr_city": "重庆", "number": 33 }
  ,
  { "dep_city": "神农架", "arr_city": "荆门", "number": 17 }
  ,
  { "dep_city": "神农架", "arr_city": "荆州", "number": 9 }
  ,
  { "dep_city": "神农架", "arr_city": "随州", "number": 8 }
  ,
  { "dep_city": "神农架", "arr_city": "孝感", "number": 6 }
  ,
  { "dep_city": "恩施州", "arr_city": "重庆", "number": 3638 }
  ,
  { "dep_city": "恩施州", "arr_city": "湘西", "number": 2610 }
  ,
  { "dep_city": "恩施州", "arr_city": "宜昌", "number": 1370 }
  ,
  { "dep_city": "恩施州", "arr_city": "武汉", "number": 252 }
  ,
  { "dep_city": "恩施州", "arr_city": "张家界", "number": 223 }
  ,
  { "dep_city": "恩施州", "arr_city": "常德", "number": 150 }
  ,
  { "dep_city": "恩施州", "arr_city": "宜宾", "number": 115 }
  ,
  { "dep_city": "恩施州", "arr_city": "荆州", "number": 101 }
  ,
  { "dep_city": "恩施州", "arr_city": "达州", "number": 86 }
  ,
  { "dep_city": "恩施州", "arr_city": "神农架", "number": 68 }
  ,
  { "dep_city": "天门", "arr_city": "荆门", "number": 1331 }
  ,
  { "dep_city": "天门", "arr_city": "仙桃", "number": 1022 }
  ,
  { "dep_city": "天门", "arr_city": "武汉", "number": 927 }
  ,
  { "dep_city": "天门", "arr_city": "孝感", "number": 660 }
  ,
  { "dep_city": "天门", "arr_city": "潜江", "number": 370 }
  ,
  { "dep_city": "天门", "arr_city": "荆州", "number": 192 }
  ,
  { "dep_city": "天门", "arr_city": "重庆", "number": 59 }
  ,
  { "dep_city": "天门", "arr_city": "随州", "number": 56 }
  ,
  { "dep_city": "天门", "arr_city": "襄阳", "number": 55 }
  ,
  { "dep_city": "天门", "arr_city": "宜昌", "number": 49 }
  ,
  { "dep_city": "随州", "arr_city": "武汉", "number": 1286 }
  ,
  { "dep_city": "随州", "arr_city": "孝感", "number": 1140 }
  ,
  { "dep_city": "随州", "arr_city": "襄阳", "number": 766 }
  ,
  { "dep_city": "随州", "arr_city": "南阳", "number": 394 }
  ,
  { "dep_city": "随州", "arr_city": "信阳", "number": 311 }
  ,
  { "dep_city": "随州", "arr_city": "荆门", "number": 202 }
  ,
  { "dep_city": "随州", "arr_city": "驻马店", "number": 110 }
  ,
  { "dep_city": "随州", "arr_city": "十堰", "number": 81 }
  ,
  { "dep_city": "随州", "arr_city": "荆州", "number": 78 }
  ,
  { "dep_city": "随州", "arr_city": "宜昌", "number": 61 }
  ,
  { "dep_city": "长沙", "arr_city": "湘潭", "number": 9382 }
  ,
  { "dep_city": "长沙", "arr_city": "益阳", "number": 7808 }
  ,
  { "dep_city": "长沙", "arr_city": "岳阳", "number": 7642 }
  ,
  { "dep_city": "长沙", "arr_city": "株洲", "number": 5969 }
  ,
  { "dep_city": "长沙", "arr_city": "常德", "number": 3570 }
  ,
  { "dep_city": "长沙", "arr_city": "衡阳", "number": 3039 }
  ,
  { "dep_city": "长沙", "arr_city": "娄底", "number": 2870 }
  ,
  { "dep_city": "长沙", "arr_city": "邵阳", "number": 2835 }
  ,
  { "dep_city": "长沙", "arr_city": "萍乡", "number": 1178 }
  ,
  { "dep_city": "长沙", "arr_city": "怀化", "number": 1138 }
  ,
  { "dep_city": "株洲", "arr_city": "长沙", "number": 5798 }
  ,
  { "dep_city": "株洲", "arr_city": "湘潭", "number": 2063 }
  ,
  { "dep_city": "株洲", "arr_city": "萍乡", "number": 965 }
  ,
  { "dep_city": "株洲", "arr_city": "衡阳", "number": 836 }
  ,
  { "dep_city": "株洲", "arr_city": "郴州", "number": 540 }
  ,
  { "dep_city": "株洲", "arr_city": "岳阳", "number": 235 }
  ,
  { "dep_city": "株洲", "arr_city": "邵阳", "number": 198 }
  ,
  { "dep_city": "株洲", "arr_city": "益阳", "number": 158 }
  ,
  { "dep_city": "株洲", "arr_city": "娄底", "number": 142 }
  ,
  { "dep_city": "株洲", "arr_city": "荆州", "number": 128 }
  ,
  { "dep_city": "湘潭", "arr_city": "长沙", "number": 10063 }
  ,
  { "dep_city": "湘潭", "arr_city": "株洲", "number": 2285 }
  ,
  { "dep_city": "湘潭", "arr_city": "娄底", "number": 1301 }
  ,
  { "dep_city": "湘潭", "arr_city": "衡阳", "number": 889 }
  ,
  { "dep_city": "湘潭", "arr_city": "邵阳", "number": 444 }
  ,
  { "dep_city": "湘潭", "arr_city": "益阳", "number": 322 }
  ,
  { "dep_city": "湘潭", "arr_city": "岳阳", "number": 257 }
  ,
  { "dep_city": "湘潭", "arr_city": "怀化", "number": 239 }
  ,
  { "dep_city": "湘潭", "arr_city": "常德", "number": 232 }
  ,
  { "dep_city": "湘潭", "arr_city": "永州", "number": 137 }
  ,
  { "dep_city": "衡阳", "arr_city": "长沙", "number": 2533 }
  ,
  { "dep_city": "衡阳", "arr_city": "永州", "number": 1499 }
  ,
  { "dep_city": "衡阳", "arr_city": "郴州", "number": 1325 }
  ,
  { "dep_city": "衡阳", "arr_city": "邵阳", "number": 906 }
  ,
  { "dep_city": "衡阳", "arr_city": "株洲", "number": 885 }
  ,
  { "dep_city": "衡阳", "arr_city": "湘潭", "number": 832 }
  ,
  { "dep_city": "衡阳", "arr_city": "娄底", "number": 490 }
  ,
  { "dep_city": "衡阳", "arr_city": "广州", "number": 403 }
  ,
  { "dep_city": "衡阳", "arr_city": "岳阳", "number": 275 }
  ,
  { "dep_city": "衡阳", "arr_city": "清远", "number": 208 }
  ,
  { "dep_city": "邵阳", "arr_city": "长沙", "number": 2172 }
  ,
  { "dep_city": "邵阳", "arr_city": "娄底", "number": 1687 }
  ,
  { "dep_city": "邵阳", "arr_city": "怀化", "number": 1669 }
  ,
  { "dep_city": "邵阳", "arr_city": "衡阳", "number": 756 }
  ,
  { "dep_city": "邵阳", "arr_city": "永州", "number": 751 }
  ,
  { "dep_city": "邵阳", "arr_city": "黔东南", "number": 633 }
  ,
  { "dep_city": "邵阳", "arr_city": "铜仁", "number": 511 }
  ,
  { "dep_city": "邵阳", "arr_city": "桂林", "number": 480 }
  ,
  { "dep_city": "邵阳", "arr_city": "重庆", "number": 326 }
  ,
  { "dep_city": "邵阳", "arr_city": "湘潭", "number": 305 }
  ,
  { "dep_city": "岳阳", "arr_city": "长沙", "number": 9578 }
  ,
  { "dep_city": "岳阳", "arr_city": "益阳", "number": 2217 }
  ,
  { "dep_city": "岳阳", "arr_city": "荆州", "number": 1591 }
  ,
  { "dep_city": "岳阳", "arr_city": "咸宁", "number": 733 }
  ,
  { "dep_city": "岳阳", "arr_city": "常德", "number": 353 }
  ,
  { "dep_city": "岳阳", "arr_city": "武汉", "number": 277 }
  ,
  { "dep_city": "岳阳", "arr_city": "株洲", "number": 233 }
  ,
  { "dep_city": "岳阳", "arr_city": "湘潭", "number": 223 }
  ,
  { "dep_city": "岳阳", "arr_city": "九江", "number": 203 }
  ,
  { "dep_city": "岳阳", "arr_city": "南阳", "number": 202 }
  ,
  { "dep_city": "常德", "arr_city": "长沙", "number": 3233 }
  ,
  { "dep_city": "常德", "arr_city": "益阳", "number": 2436 }
  ,
  { "dep_city": "常德", "arr_city": "荆州", "number": 1454 }
  ,
  { "dep_city": "常德", "arr_city": "张家界", "number": 1174 }
  ,
  { "dep_city": "常德", "arr_city": "怀化", "number": 834 }
  ,
  { "dep_city": "常德", "arr_city": "湘西", "number": 573 }
  ,
  { "dep_city": "常德", "arr_city": "岳阳", "number": 446 }
  ,
  { "dep_city": "常德", "arr_city": "重庆", "number": 241 }
  ,
  { "dep_city": "常德", "arr_city": "铜仁", "number": 166 }
  ,
  { "dep_city": "常德", "arr_city": "湘潭", "number": 150 }
  ,
  { "dep_city": "张家界", "arr_city": "湘西", "number": 1383 }
  ,
  { "dep_city": "张家界", "arr_city": "常德", "number": 1289 }
  ,
  { "dep_city": "张家界", "arr_city": "长沙", "number": 723 }
  ,
  { "dep_city": "张家界", "arr_city": "恩施州", "number": 250 }
  ,
  { "dep_city": "张家界", "arr_city": "重庆", "number": 112 }
  ,
  { "dep_city": "张家界", "arr_city": "怀化", "number": 107 }
  ,
  { "dep_city": "张家界", "arr_city": "益阳", "number": 101 }
  ,
  { "dep_city": "张家界", "arr_city": "湘潭", "number": 69 }
  ,
  { "dep_city": "张家界", "arr_city": "荆州", "number": 65 }
  ,
  { "dep_city": "张家界", "arr_city": "铜仁", "number": 36 }
  ,
  { "dep_city": "益阳", "arr_city": "长沙", "number": 8768 }
  ,
  { "dep_city": "益阳", "arr_city": "常德", "number": 2296 }
  ,
  { "dep_city": "益阳", "arr_city": "岳阳", "number": 2056 }
  ,
  { "dep_city": "益阳", "arr_city": "娄底", "number": 558 }
  ,
  { "dep_city": "益阳", "arr_city": "湘潭", "number": 316 }
  ,
  { "dep_city": "益阳", "arr_city": "怀化", "number": 208 }
  ,
  { "dep_city": "益阳", "arr_city": "荆州", "number": 183 }
  ,
  { "dep_city": "益阳", "arr_city": "株洲", "number": 183 }
  ,
  { "dep_city": "益阳", "arr_city": "邵阳", "number": 159 }
  ,
  { "dep_city": "益阳", "arr_city": "衡阳", "number": 148 }
  ,
  { "dep_city": "娄底", "arr_city": "长沙", "number": 2436 }
  ,
  { "dep_city": "娄底", "arr_city": "邵阳", "number": 1560 }
  ,
  { "dep_city": "娄底", "arr_city": "湘潭", "number": 1207 }
  ,
  { "dep_city": "娄底", "arr_city": "益阳", "number": 548 }
  ,
  { "dep_city": "娄底", "arr_city": "衡阳", "number": 460 }
  ,
  { "dep_city": "娄底", "arr_city": "怀化", "number": 297 }
  ,
  { "dep_city": "娄底", "arr_city": "常德", "number": 118 }
  ,
  { "dep_city": "娄底", "arr_city": "遵义", "number": 100 }
  ,
  { "dep_city": "娄底", "arr_city": "株洲", "number": 92 }
  ,
  { "dep_city": "娄底", "arr_city": "铜仁", "number": 88 }
  ,
  { "dep_city": "郴州", "arr_city": "永州", "number": 1717 }
  ,
  { "dep_city": "郴州", "arr_city": "衡阳", "number": 1396 }
  ,
  { "dep_city": "郴州", "arr_city": "韶关", "number": 883 }
  ,
  { "dep_city": "郴州", "arr_city": "长沙", "number": 760 }
  ,
  { "dep_city": "郴州", "arr_city": "株洲", "number": 641 }
  ,
  { "dep_city": "郴州", "arr_city": "清远", "number": 610 }
  ,
  { "dep_city": "郴州", "arr_city": "广州", "number": 404 }
  ,
  { "dep_city": "郴州", "arr_city": "东莞", "number": 359 }
  ,
  { "dep_city": "郴州", "arr_city": "赣州", "number": 318 }
  ,
  { "dep_city": "郴州", "arr_city": "深圳", "number": 241 }
  ,
  { "dep_city": "永州", "arr_city": "郴州", "number": 1704 }
  ,
  { "dep_city": "永州", "arr_city": "衡阳", "number": 1529 }
  ,
  { "dep_city": "永州", "arr_city": "贺州", "number": 1074 }
  ,
  { "dep_city": "永州", "arr_city": "邵阳", "number": 1003 }
  ,
  { "dep_city": "永州", "arr_city": "桂林", "number": 833 }
  ,
  { "dep_city": "永州", "arr_city": "长沙", "number": 746 }
  ,
  { "dep_city": "永州", "arr_city": "清远", "number": 605 }
  ,
  { "dep_city": "永州", "arr_city": "东莞", "number": 384 }
  ,
  { "dep_city": "永州", "arr_city": "广州", "number": 290 }
  ,
  { "dep_city": "永州", "arr_city": "深圳", "number": 186 }
  ,
  { "dep_city": "怀化", "arr_city": "湘西", "number": 1434 }
  ,
  { "dep_city": "怀化", "arr_city": "黔东南", "number": 1368 }
  ,
  { "dep_city": "怀化", "arr_city": "铜仁", "number": 1282 }
  ,
  { "dep_city": "怀化", "arr_city": "邵阳", "number": 1259 }
  ,
  { "dep_city": "怀化", "arr_city": "重庆", "number": 802 }
  ,
  { "dep_city": "怀化", "arr_city": "长沙", "number": 692 }
  ,
  { "dep_city": "怀化", "arr_city": "常德", "number": 634 }
  ,
  { "dep_city": "怀化", "arr_city": "遵义", "number": 427 }
  ,
  { "dep_city": "怀化", "arr_city": "毕节", "number": 414 }
  ,
  { "dep_city": "怀化", "arr_city": "黔南", "number": 370 }
  ,
  { "dep_city": "湘西", "arr_city": "恩施州", "number": 2728 }
  ,
  { "dep_city": "湘西", "arr_city": "铜仁", "number": 1840 }
  ,
  { "dep_city": "湘西", "arr_city": "张家界", "number": 1437 }
  ,
  { "dep_city": "湘西", "arr_city": "怀化", "number": 1352 }
  ,
  { "dep_city": "湘西", "arr_city": "重庆", "number": 1287 }
  ,
  { "dep_city": "湘西", "arr_city": "长沙", "number": 602 }
  ,
  { "dep_city": "湘西", "arr_city": "常德", "number": 388 }
  ,
  { "dep_city": "湘西", "arr_city": "邵阳", "number": 168 }
  ,
  { "dep_city": "湘西", "arr_city": "毕节", "number": 167 }
  ,
  { "dep_city": "湘西", "arr_city": "遵义", "number": 148 }
  ,
  { "dep_city": "广州", "arr_city": "佛山", "number": 64743 }
  ,
  { "dep_city": "广州", "arr_city": "东莞", "number": 36168 }
  ,
  { "dep_city": "广州", "arr_city": "深圳", "number": 19886 }
  ,
  { "dep_city": "广州", "arr_city": "清远", "number": 12823 }
  ,
  { "dep_city": "广州", "arr_city": "惠州", "number": 12680 }
  ,
  { "dep_city": "广州", "arr_city": "中山", "number": 10610 }
  ,
  { "dep_city": "广州", "arr_city": "江门", "number": 6643 }
  ,
  { "dep_city": "广州", "arr_city": "肇庆", "number": 5083 }
  ,
  { "dep_city": "广州", "arr_city": "珠海", "number": 3888 }
  ,
  { "dep_city": "广州", "arr_city": "韶关", "number": 2887 }
  ,
  { "dep_city": "深圳", "arr_city": "东莞", "number": 33682 }
  ,
  { "dep_city": "深圳", "arr_city": "惠州", "number": 34100 }
  ,
  { "dep_city": "深圳", "arr_city": "广州", "number": 18177 }
  ,
  { "dep_city": "深圳", "arr_city": "香港", "number": 14256 }
  ,
  { "dep_city": "深圳", "arr_city": "佛山", "number": 4706 }
  ,
  { "dep_city": "深圳", "arr_city": "中山", "number": 3430 }
  ,
  { "dep_city": "深圳", "arr_city": "珠海", "number": 2399 }
  ,
  { "dep_city": "深圳", "arr_city": "汕尾", "number": 2174 }
  ,
  { "dep_city": "深圳", "arr_city": "江门", "number": 1791 }
  ,
  { "dep_city": "深圳", "arr_city": "河源", "number": 1678 }
  ,
  { "dep_city": "珠海", "arr_city": "中山", "number": 21156 }
  ,
  { "dep_city": "珠海", "arr_city": "澳门", "number": 5972 }
  ,
  { "dep_city": "珠海", "arr_city": "广州", "number": 4393 }
  ,
  { "dep_city": "珠海", "arr_city": "江门", "number": 3380 }
  ,
  { "dep_city": "珠海", "arr_city": "深圳", "number": 2807 }
  ,
  { "dep_city": "珠海", "arr_city": "佛山", "number": 1914 }
  ,
  { "dep_city": "珠海", "arr_city": "东莞", "number": 1843 }
  ,
  { "dep_city": "珠海", "arr_city": "香港", "number": 893 }
  ,
  { "dep_city": "珠海", "arr_city": "阳江", "number": 651 }
  ,
  { "dep_city": "珠海", "arr_city": "惠州", "number": 418 }
  ,
  { "dep_city": "汕头", "arr_city": "揭阳", "number": 13677 }
  ,
  { "dep_city": "汕头", "arr_city": "潮州", "number": 8925 }
  ,
  { "dep_city": "汕头", "arr_city": "漳州", "number": 1155 }
  ,
  { "dep_city": "汕头", "arr_city": "深圳", "number": 975 }
  ,
  { "dep_city": "汕头", "arr_city": "广州", "number": 938 }
  ,
  { "dep_city": "汕头", "arr_city": "惠州", "number": 786 }
  ,
  { "dep_city": "汕头", "arr_city": "梅州", "number": 776 }
  ,
  { "dep_city": "汕头", "arr_city": "汕尾", "number": 770 }
  ,
  { "dep_city": "汕头", "arr_city": "东莞", "number": 476 }
  ,
  { "dep_city": "汕头", "arr_city": "赣州", "number": 409 }
  ,
  { "dep_city": "佛山", "arr_city": "广州", "number": 65836 }
  ,
  { "dep_city": "佛山", "arr_city": "中山", "number": 19418 }
  ,
  { "dep_city": "佛山", "arr_city": "江门", "number": 11522 }
  ,
  { "dep_city": "佛山", "arr_city": "肇庆", "number": 9877 }
  ,
  { "dep_city": "佛山", "arr_city": "东莞", "number": 7119 }
  ,
  { "dep_city": "佛山", "arr_city": "深圳", "number": 4946 }
  ,
  { "dep_city": "佛山", "arr_city": "清远", "number": 4605 }
  ,
  { "dep_city": "佛山", "arr_city": "云浮", "number": 2403 }
  ,
  { "dep_city": "佛山", "arr_city": "惠州", "number": 1911 }
  ,
  { "dep_city": "佛山", "arr_city": "珠海", "number": 1761 }
  ,
  { "dep_city": "韶关", "arr_city": "广州", "number": 3386 }
  ,
  { "dep_city": "韶关", "arr_city": "清远", "number": 2028 }
  ,
  { "dep_city": "韶关", "arr_city": "郴州", "number": 942 }
  ,
  { "dep_city": "韶关", "arr_city": "东莞", "number": 872 }
  ,
  { "dep_city": "韶关", "arr_city": "河源", "number": 782 }
  ,
  { "dep_city": "韶关", "arr_city": "赣州", "number": 753 }
  ,
  { "dep_city": "韶关", "arr_city": "深圳", "number": 738 }
  ,
  { "dep_city": "韶关", "arr_city": "佛山", "number": 668 }
  ,
  { "dep_city": "韶关", "arr_city": "惠州", "number": 566 }
  ,
  { "dep_city": "韶关", "arr_city": "衡阳", "number": 274 }
  ,
  { "dep_city": "湛江", "arr_city": "茂名", "number": 7500 }
  ,
  { "dep_city": "湛江", "arr_city": "阳江", "number": 1630 }
  ,
  { "dep_city": "湛江", "arr_city": "广州", "number": 1523 }
  ,
  { "dep_city": "湛江", "arr_city": "玉林", "number": 1515 }
  ,
  { "dep_city": "湛江", "arr_city": "江门", "number": 1403 }
  ,
  { "dep_city": "湛江", "arr_city": "北海", "number": 1230 }
  ,
  { "dep_city": "湛江", "arr_city": "海口", "number": 1021 }
  ,
  { "dep_city": "湛江", "arr_city": "佛山", "number": 907 }
  ,
  { "dep_city": "湛江", "arr_city": "中山", "number": 515 }
  ,
  { "dep_city": "湛江", "arr_city": "东莞", "number": 501 }
  ,
  { "dep_city": "肇庆", "arr_city": "佛山", "number": 10542 }
  ,
  { "dep_city": "肇庆", "arr_city": "广州", "number": 5033 }
  ,
  { "dep_city": "肇庆", "arr_city": "云浮", "number": 3114 }
  ,
  { "dep_city": "肇庆", "arr_city": "清远", "number": 1342 }
  ,
  { "dep_city": "肇庆", "arr_city": "梧州", "number": 1226 }
  ,
  { "dep_city": "肇庆", "arr_city": "贺州", "number": 1048 }
  ,
  { "dep_city": "肇庆", "arr_city": "东莞", "number": 985 }
  ,
  { "dep_city": "肇庆", "arr_city": "江门", "number": 830 }
  ,
  { "dep_city": "肇庆", "arr_city": "深圳", "number": 780 }
  ,
  { "dep_city": "肇庆", "arr_city": "中山", "number": 713 }
  ,
  { "dep_city": "江门", "arr_city": "佛山", "number": 12576 }
  ,
  { "dep_city": "江门", "arr_city": "中山", "number": 9344 }
  ,
  { "dep_city": "江门", "arr_city": "广州", "number": 7097 }
  ,
  { "dep_city": "江门", "arr_city": "珠海", "number": 3535 }
  ,
  { "dep_city": "江门", "arr_city": "阳江", "number": 2288 }
  ,
  { "dep_city": "江门", "arr_city": "东莞", "number": 2148 }
  ,
  { "dep_city": "江门", "arr_city": "深圳", "number": 1609 }
  ,
  { "dep_city": "江门", "arr_city": "云浮", "number": 1347 }
  ,
  { "dep_city": "江门", "arr_city": "茂名", "number": 988 }
  ,
  { "dep_city": "江门", "arr_city": "湛江", "number": 938 }
  ,
  { "dep_city": "茂名", "arr_city": "湛江", "number": 6898 }
  ,
  { "dep_city": "茂名", "arr_city": "阳江", "number": 2695 }
  ,
  { "dep_city": "茂名", "arr_city": "玉林", "number": 2574 }
  ,
  { "dep_city": "茂名", "arr_city": "广州", "number": 1547 }
  ,
  { "dep_city": "茂名", "arr_city": "云浮", "number": 1233 }
  ,
  { "dep_city": "茂名", "arr_city": "江门", "number": 1109 }
  ,
  { "dep_city": "茂名", "arr_city": "佛山", "number": 816 }
  ,
  { "dep_city": "茂名", "arr_city": "东莞", "number": 816 }
  ,
  { "dep_city": "茂名", "arr_city": "深圳", "number": 715 }
  ,
  { "dep_city": "茂名", "arr_city": "中山", "number": 412 }
  ,
  { "dep_city": "惠州", "arr_city": "深圳", "number": 43845 }
  ,
  { "dep_city": "惠州", "arr_city": "东莞", "number": 32160 }
  ,
  { "dep_city": "惠州", "arr_city": "广州", "number": 13912 }
  ,
  { "dep_city": "惠州", "arr_city": "河源", "number": 3700 }
  ,
  { "dep_city": "惠州", "arr_city": "汕尾", "number": 3000 }
  ,
  { "dep_city": "惠州", "arr_city": "佛山", "number": 2103 }
  ,
  { "dep_city": "惠州", "arr_city": "揭阳", "number": 1092 }
  ,
  { "dep_city": "惠州", "arr_city": "梅州", "number": 853 }
  ,
  { "dep_city": "惠州", "arr_city": "汕头", "number": 797 }
  ,
  { "dep_city": "惠州", "arr_city": "中山", "number": 772 }
  ,
  { "dep_city": "梅州", "arr_city": "河源", "number": 1515 }
  ,
  { "dep_city": "梅州", "arr_city": "揭阳", "number": 1422 }
  ,
  { "dep_city": "梅州", "arr_city": "广州", "number": 1277 }
  ,
  { "dep_city": "梅州", "arr_city": "深圳", "number": 1243 }
  ,
  { "dep_city": "梅州", "arr_city": "赣州", "number": 1033 }
  ,
  { "dep_city": "梅州", "arr_city": "惠州", "number": 975 }
  ,
  { "dep_city": "梅州", "arr_city": "龙岩", "number": 880 }
  ,
  { "dep_city": "梅州", "arr_city": "潮州", "number": 827 }
  ,
  { "dep_city": "梅州", "arr_city": "汕头", "number": 695 }
  ,
  { "dep_city": "梅州", "arr_city": "东莞", "number": 509 }
  ,
  { "dep_city": "汕尾", "arr_city": "惠州", "number": 2761 }
  ,
  { "dep_city": "汕尾", "arr_city": "揭阳", "number": 2262 }
  ,
  { "dep_city": "汕尾", "arr_city": "深圳", "number": 2259 }
  ,
  { "dep_city": "汕尾", "arr_city": "广州", "number": 979 }
  ,
  { "dep_city": "汕尾", "arr_city": "东莞", "number": 703 }
  ,
  { "dep_city": "汕尾", "arr_city": "汕头", "number": 576 }
  ,
  { "dep_city": "汕尾", "arr_city": "梅州", "number": 206 }
  ,
  { "dep_city": "汕尾", "arr_city": "潮州", "number": 133 }
  ,
  { "dep_city": "汕尾", "arr_city": "佛山", "number": 133 }
  ,
  { "dep_city": "汕尾", "arr_city": "河源", "number": 113 }
  ,
  { "dep_city": "河源", "arr_city": "惠州", "number": 4583 }
  ,
  { "dep_city": "河源", "arr_city": "深圳", "number": 2875 }
  ,
  { "dep_city": "河源", "arr_city": "广州", "number": 2073 }
  ,
  { "dep_city": "河源", "arr_city": "东莞", "number": 1487 }
  ,
  { "dep_city": "河源", "arr_city": "梅州", "number": 1391 }
  ,
  { "dep_city": "河源", "arr_city": "赣州", "number": 1085 }
  ,
  { "dep_city": "河源", "arr_city": "韶关", "number": 748 }
  ,
  { "dep_city": "河源", "arr_city": "佛山", "number": 343 }
  ,
  { "dep_city": "河源", "arr_city": "揭阳", "number": 287 }
  ,
  { "dep_city": "河源", "arr_city": "汕头", "number": 165 }
  ,
  { "dep_city": "阳江", "arr_city": "江门", "number": 2568 }
  ,
  { "dep_city": "阳江", "arr_city": "茂名", "number": 2324 }
  ,
  { "dep_city": "阳江", "arr_city": "广州", "number": 1651 }
  ,
  { "dep_city": "阳江", "arr_city": "佛山", "number": 1078 }
  ,
  { "dep_city": "阳江", "arr_city": "湛江", "number": 913 }
  ,
  { "dep_city": "阳江", "arr_city": "云浮", "number": 692 }
  ,
  { "dep_city": "阳江", "arr_city": "中山", "number": 600 }
  ,
  { "dep_city": "阳江", "arr_city": "东莞", "number": 547 }
  ,
  { "dep_city": "阳江", "arr_city": "深圳", "number": 478 }
  ,
  { "dep_city": "阳江", "arr_city": "珠海", "number": 420 }
  ,
  { "dep_city": "清远", "arr_city": "广州", "number": 15442 }
  ,
  { "dep_city": "清远", "arr_city": "佛山", "number": 5252 }
  ,
  { "dep_city": "清远", "arr_city": "东莞", "number": 2047 }
  ,
  { "dep_city": "清远", "arr_city": "韶关", "number": 1893 }
  ,
  { "dep_city": "清远", "arr_city": "肇庆", "number": 1460 }
  ,
  { "dep_city": "清远", "arr_city": "深圳", "number": 1357 }
  ,
  { "dep_city": "清远", "arr_city": "永州", "number": 1122 }
  ,
  { "dep_city": "清远", "arr_city": "惠州", "number": 711 }
  ,
  { "dep_city": "清远", "arr_city": "郴州", "number": 660 }
  ,
  { "dep_city": "清远", "arr_city": "邵阳", "number": 524 }
  ,
  { "dep_city": "东莞", "arr_city": "深圳", "number": 94967 }
  ,
  { "dep_city": "东莞", "arr_city": "广州", "number": 33990 }
  ,
  { "dep_city": "东莞", "arr_city": "惠州", "number": 25107 }
  ,
  { "dep_city": "东莞", "arr_city": "佛山", "number": 6860 }
  ,
  { "dep_city": "东莞", "arr_city": "中山", "number": 3969 }
  ,
  { "dep_city": "东莞", "arr_city": "清远", "number": 2060 }
  ,
  { "dep_city": "东莞", "arr_city": "江门", "number": 1868 }
  ,
  { "dep_city": "东莞", "arr_city": "肇庆", "number": 1329 }
  ,
  { "dep_city": "东莞", "arr_city": "珠海", "number": 1288 }
  ,
  { "dep_city": "东莞", "arr_city": "茂名", "number": 1227 }
  ,
  { "dep_city": "中山", "arr_city": "珠海", "number": 25300 }
  ,
  { "dep_city": "中山", "arr_city": "佛山", "number": 19360 }
  ,
  { "dep_city": "中山", "arr_city": "广州", "number": 11096 }
  ,
  { "dep_city": "中山", "arr_city": "江门", "number": 8694 }
  ,
  { "dep_city": "中山", "arr_city": "东莞", "number": 4558 }
  ,
  { "dep_city": "中山", "arr_city": "深圳", "number": 3726 }
  ,
  { "dep_city": "中山", "arr_city": "澳门", "number": 1304 }
  ,
  { "dep_city": "中山", "arr_city": "肇庆", "number": 891 }
  ,
  { "dep_city": "中山", "arr_city": "惠州", "number": 720 }
  ,
  { "dep_city": "中山", "arr_city": "阳江", "number": 599 }
  ,
  { "dep_city": "潮州", "arr_city": "汕头", "number": 11250 }
  ,
  { "dep_city": "潮州", "arr_city": "揭阳", "number": 2739 }
  ,
  { "dep_city": "潮州", "arr_city": "漳州", "number": 1395 }
  ,
  { "dep_city": "潮州", "arr_city": "梅州", "number": 769 }
  ,
  { "dep_city": "潮州", "arr_city": "广州", "number": 356 }
  ,
  { "dep_city": "潮州", "arr_city": "汕尾", "number": 250 }
  ,
  { "dep_city": "潮州", "arr_city": "惠州", "number": 246 }
  ,
  { "dep_city": "潮州", "arr_city": "深圳", "number": 241 }
  ,
  { "dep_city": "潮州", "arr_city": "赣州", "number": 193 }
  ,
  { "dep_city": "潮州", "arr_city": "厦门", "number": 158 }
  ,
  { "dep_city": "揭阳", "arr_city": "汕头", "number": 14246 }
  ,
  { "dep_city": "揭阳", "arr_city": "潮州", "number": 2861 }
  ,
  { "dep_city": "揭阳", "arr_city": "汕尾", "number": 2428 }
  ,
  { "dep_city": "揭阳", "arr_city": "梅州", "number": 1502 }
  ,
  { "dep_city": "揭阳", "arr_city": "深圳", "number": 1427 }
  ,
  { "dep_city": "揭阳", "arr_city": "广州", "number": 1275 }
  ,
  { "dep_city": "揭阳", "arr_city": "惠州", "number": 1043 }
  ,
  { "dep_city": "揭阳", "arr_city": "东莞", "number": 652 }
  ,
  { "dep_city": "揭阳", "arr_city": "赣州", "number": 388 }
  ,
  { "dep_city": "揭阳", "arr_city": "河源", "number": 269 }
  ,
  { "dep_city": "云浮", "arr_city": "肇庆", "number": 3045 }
  ,
  { "dep_city": "云浮", "arr_city": "佛山", "number": 2465 }
  ,
  { "dep_city": "云浮", "arr_city": "广州", "number": 1630 }
  ,
  { "dep_city": "云浮", "arr_city": "江门", "number": 1337 }
  ,
  { "dep_city": "云浮", "arr_city": "梧州", "number": 926 }
  ,
  { "dep_city": "云浮", "arr_city": "茂名", "number": 827 }
  ,
  { "dep_city": "云浮", "arr_city": "阳江", "number": 589 }
  ,
  { "dep_city": "云浮", "arr_city": "东莞", "number": 553 }
  ,
  { "dep_city": "云浮", "arr_city": "玉林", "number": 511 }
  ,
  { "dep_city": "云浮", "arr_city": "中山", "number": 442 }
  ,
  { "dep_city": "南宁", "arr_city": "河池", "number": 5916 }
  ,
  { "dep_city": "南宁", "arr_city": "崇左", "number": 5770 }
  ,
  { "dep_city": "南宁", "arr_city": "钦州", "number": 5322 }
  ,
  { "dep_city": "南宁", "arr_city": "百色", "number": 4383 }
  ,
  { "dep_city": "南宁", "arr_city": "玉林", "number": 3286 }
  ,
  { "dep_city": "南宁", "arr_city": "贵港", "number": 2354 }
  ,
  { "dep_city": "南宁", "arr_city": "来宾", "number": 2162 }
  ,
  { "dep_city": "南宁", "arr_city": "防城港", "number": 1902 }
  ,
  { "dep_city": "南宁", "arr_city": "柳州", "number": 1295 }
  ,
  { "dep_city": "南宁", "arr_city": "北海", "number": 1207 }
  ,
  { "dep_city": "柳州", "arr_city": "来宾", "number": 4640 }
  ,
  { "dep_city": "柳州", "arr_city": "桂林", "number": 1417 }
  ,
  { "dep_city": "柳州", "arr_city": "河池", "number": 1402 }
  ,
  { "dep_city": "柳州", "arr_city": "黔东南", "number": 1322 }
  ,
  { "dep_city": "柳州", "arr_city": "南宁", "number": 1277 }
  ,
  { "dep_city": "柳州", "arr_city": "贵港", "number": 649 }
  ,
  { "dep_city": "柳州", "arr_city": "玉林", "number": 321 }
  ,
  { "dep_city": "柳州", "arr_city": "贺州", "number": 262 }
  ,
  { "dep_city": "柳州", "arr_city": "梧州", "number": 253 }
  ,
  { "dep_city": "柳州", "arr_city": "怀化", "number": 173 }
  ,
  { "dep_city": "桂林", "arr_city": "贺州", "number": 2118 }
  ,
  { "dep_city": "桂林", "arr_city": "柳州", "number": 1681 }
  ,
  { "dep_city": "桂林", "arr_city": "梧州", "number": 1110 }
  ,
  { "dep_city": "桂林", "arr_city": "永州", "number": 915 }
  ,
  { "dep_city": "桂林", "arr_city": "南宁", "number": 723 }
  ,
  { "dep_city": "桂林", "arr_city": "来宾", "number": 691 }
  ,
  { "dep_city": "桂林", "arr_city": "黔东南", "number": 673 }
  ,
  { "dep_city": "桂林", "arr_city": "邵阳", "number": 573 }
  ,
  { "dep_city": "桂林", "arr_city": "黔南", "number": 450 }
  ,
  { "dep_city": "桂林", "arr_city": "广州", "number": 325 }
  ,
  { "dep_city": "梧州", "arr_city": "贺州", "number": 1766 }
  ,
  { "dep_city": "梧州", "arr_city": "玉林", "number": 1749 }
  ,
  { "dep_city": "梧州", "arr_city": "贵港", "number": 1441 }
  ,
  { "dep_city": "梧州", "arr_city": "肇庆", "number": 1165 }
  ,
  { "dep_city": "梧州", "arr_city": "云浮", "number": 867 }
  ,
  { "dep_city": "梧州", "arr_city": "南宁", "number": 709 }
  ,
  { "dep_city": "梧州", "arr_city": "佛山", "number": 687 }
  ,
  { "dep_city": "梧州", "arr_city": "桂林", "number": 654 }
  ,
  { "dep_city": "梧州", "arr_city": "钦州", "number": 524 }
  ,
  { "dep_city": "梧州", "arr_city": "广州", "number": 480 }
  ,
  { "dep_city": "北海", "arr_city": "钦州", "number": 2823 }
  ,
  { "dep_city": "北海", "arr_city": "玉林", "number": 1554 }
  ,
  { "dep_city": "北海", "arr_city": "湛江", "number": 1277 }
  ,
  { "dep_city": "北海", "arr_city": "南宁", "number": 1248 }
  ,
  { "dep_city": "北海", "arr_city": "防城港", "number": 574 }
  ,
  { "dep_city": "北海", "arr_city": "崇左", "number": 230 }
  ,
  { "dep_city": "北海", "arr_city": "茂名", "number": 163 }
  ,
  { "dep_city": "北海", "arr_city": "梧州", "number": 139 }
  ,
  { "dep_city": "北海", "arr_city": "桂林", "number": 122 }
  ,
  { "dep_city": "北海", "arr_city": "贵港", "number": 114 }
  ,
  { "dep_city": "防城港", "arr_city": "南宁", "number": 1864 }
  ,
  { "dep_city": "防城港", "arr_city": "钦州", "number": 1788 }
  ,
  { "dep_city": "防城港", "arr_city": "崇左", "number": 638 }
  ,
  { "dep_city": "防城港", "arr_city": "北海", "number": 440 }
  ,
  { "dep_city": "防城港", "arr_city": "湛江", "number": 152 }
  ,
  { "dep_city": "防城港", "arr_city": "玉林", "number": 133 }
  ,
  { "dep_city": "防城港", "arr_city": "百色", "number": 82 }
  ,
  { "dep_city": "防城港", "arr_city": "河池", "number": 68 }
  ,
  { "dep_city": "防城港", "arr_city": "茂名", "number": 46 }
  ,
  { "dep_city": "防城港", "arr_city": "柳州", "number": 41 }
  ,
  { "dep_city": "钦州", "arr_city": "南宁", "number": 4534 }
  ,
  { "dep_city": "钦州", "arr_city": "北海", "number": 2351 }
  ,
  { "dep_city": "钦州", "arr_city": "防城港", "number": 1521 }
  ,
  { "dep_city": "钦州", "arr_city": "玉林", "number": 1502 }
  ,
  { "dep_city": "钦州", "arr_city": "贵港", "number": 286 }
  ,
  { "dep_city": "钦州", "arr_city": "湛江", "number": 227 }
  ,
  { "dep_city": "钦州", "arr_city": "崇左", "number": 193 }
  ,
  { "dep_city": "钦州", "arr_city": "梧州", "number": 142 }
  ,
  { "dep_city": "钦州", "arr_city": "百色", "number": 109 }
  ,
  { "dep_city": "钦州", "arr_city": "东莞", "number": 106 }
  ,
  { "dep_city": "贵港", "arr_city": "玉林", "number": 2707 }
  ,
  { "dep_city": "贵港", "arr_city": "南宁", "number": 1922 }
  ,
  { "dep_city": "贵港", "arr_city": "梧州", "number": 1369 }
  ,
  { "dep_city": "贵港", "arr_city": "来宾", "number": 1292 }
  ,
  { "dep_city": "贵港", "arr_city": "柳州", "number": 478 }
  ,
  { "dep_city": "贵港", "arr_city": "佛山", "number": 395 }
  ,
  { "dep_city": "贵港", "arr_city": "钦州", "number": 390 }
  ,
  { "dep_city": "贵港", "arr_city": "广州", "number": 204 }
  ,
  { "dep_city": "贵港", "arr_city": "中山", "number": 181 }
  ,
  { "dep_city": "贵港", "arr_city": "河池", "number": 166 }
  ,
  { "dep_city": "玉林", "arr_city": "贵港", "number": 2873 }
  ,
  { "dep_city": "玉林", "arr_city": "茂名", "number": 2494 }
  ,
  { "dep_city": "玉林", "arr_city": "南宁", "number": 2305 }
  ,
  { "dep_city": "玉林", "arr_city": "钦州", "number": 1802 }
  ,
  { "dep_city": "玉林", "arr_city": "梧州", "number": 1657 }
  ,
  { "dep_city": "玉林", "arr_city": "湛江", "number": 1430 }
  ,
  { "dep_city": "玉林", "arr_city": "北海", "number": 1349 }
  ,
  { "dep_city": "玉林", "arr_city": "云浮", "number": 396 }
  ,
  { "dep_city": "玉林", "arr_city": "佛山", "number": 384 }
  ,
  { "dep_city": "玉林", "arr_city": "广州", "number": 311 }
  ,
  { "dep_city": "百色", "arr_city": "南宁", "number": 3413 }
  ,
  { "dep_city": "百色", "arr_city": "文山", "number": 3260 }
  ,
  { "dep_city": "百色", "arr_city": "黔西南", "number": 2259 }
  ,
  { "dep_city": "百色", "arr_city": "河池", "number": 1731 }
  ,
  { "dep_city": "百色", "arr_city": "崇左", "number": 1088 }
  ,
  { "dep_city": "百色", "arr_city": "曲靖", "number": 431 }
  ,
  { "dep_city": "百色", "arr_city": "红河", "number": 264 }
  ,
  { "dep_city": "百色", "arr_city": "玉林", "number": 159 }
  ,
  { "dep_city": "百色", "arr_city": "钦州", "number": 136 }
  ,
  { "dep_city": "百色", "arr_city": "昆明", "number": 106 }
  ,
  { "dep_city": "贺州", "arr_city": "梧州", "number": 2056 }
  ,
  { "dep_city": "贺州", "arr_city": "桂林", "number": 1962 }
  ,
  { "dep_city": "贺州", "arr_city": "永州", "number": 999 }
  ,
  { "dep_city": "贺州", "arr_city": "肇庆", "number": 840 }
  ,
  { "dep_city": "贺州", "arr_city": "佛山", "number": 470 }
  ,
  { "dep_city": "贺州", "arr_city": "广州", "number": 401 }
  ,
  { "dep_city": "贺州", "arr_city": "黔东南", "number": 379 }
  ,
  { "dep_city": "贺州", "arr_city": "柳州", "number": 289 }
  ,
  { "dep_city": "贺州", "arr_city": "清远", "number": 275 }
  ,
  { "dep_city": "贺州", "arr_city": "玉林", "number": 270 }
  ,
  { "dep_city": "河池", "arr_city": "南宁", "number": 4690 }
  ,
  { "dep_city": "河池", "arr_city": "百色", "number": 1539 }
  ,
  { "dep_city": "河池", "arr_city": "柳州", "number": 1266 }
  ,
  { "dep_city": "河池", "arr_city": "黔南", "number": 1007 }
  ,
  { "dep_city": "河池", "arr_city": "来宾", "number": 559 }
  ,
  { "dep_city": "河池", "arr_city": "贵港", "number": 148 }
  ,
  { "dep_city": "河池", "arr_city": "桂林", "number": 140 }
  ,
  { "dep_city": "河池", "arr_city": "崇左", "number": 104 }
  ,
  { "dep_city": "河池", "arr_city": "钦州", "number": 95 }
  ,
  { "dep_city": "河池", "arr_city": "黔东南", "number": 93 }
  ,
  { "dep_city": "来宾", "arr_city": "柳州", "number": 4479 }
  ,
  { "dep_city": "来宾", "arr_city": "南宁", "number": 1974 }
  ,
  { "dep_city": "来宾", "arr_city": "贵港", "number": 1361 }
  ,
  { "dep_city": "来宾", "arr_city": "桂林", "number": 613 }
  ,
  { "dep_city": "来宾", "arr_city": "河池", "number": 584 }
  ,
  { "dep_city": "来宾", "arr_city": "梧州", "number": 241 }
  ,
  { "dep_city": "来宾", "arr_city": "玉林", "number": 132 }
  ,
  { "dep_city": "来宾", "arr_city": "贺州", "number": 119 }
  ,
  { "dep_city": "来宾", "arr_city": "百色", "number": 80 }
  ,
  { "dep_city": "来宾", "arr_city": "文山", "number": 62 }
  ,
  { "dep_city": "崇左", "arr_city": "南宁", "number": 5667 }
  ,
  { "dep_city": "崇左", "arr_city": "百色", "number": 1141 }
  ,
  { "dep_city": "崇左", "arr_city": "防城港", "number": 645 }
  ,
  { "dep_city": "崇左", "arr_city": "钦州", "number": 271 }
  ,
  { "dep_city": "崇左", "arr_city": "文山", "number": 239 }
  ,
  { "dep_city": "崇左", "arr_city": "河池", "number": 171 }
  ,
  { "dep_city": "崇左", "arr_city": "玉林", "number": 170 }
  ,
  { "dep_city": "崇左", "arr_city": "北海", "number": 158 }
  ,
  { "dep_city": "崇左", "arr_city": "梧州", "number": 77 }
  ,
  { "dep_city": "崇左", "arr_city": "贵港", "number": 64 }
  ,
  { "dep_city": "海口", "arr_city": "澄迈县", "number": 5657 }
  ,
  { "dep_city": "海口", "arr_city": "文昌", "number": 5049 }
  ,
  { "dep_city": "海口", "arr_city": "定安县", "number": 3238 }
  ,
  { "dep_city": "海口", "arr_city": "儋州", "number": 2555 }
  ,
  { "dep_city": "海口", "arr_city": "琼海", "number": 2208 }
  ,
  { "dep_city": "海口", "arr_city": "临高县", "number": 1802 }
  ,
  { "dep_city": "海口", "arr_city": "三亚", "number": 1730 }
  ,
  { "dep_city": "海口", "arr_city": "屯昌县", "number": 1201 }
  ,
  { "dep_city": "海口", "arr_city": "湛江", "number": 1119 }
  ,
  { "dep_city": "海口", "arr_city": "万宁", "number": 968 }
  ,
  { "dep_city": "三亚", "arr_city": "陵水", "number": 2901 }
  ,
  { "dep_city": "三亚", "arr_city": "海口", "number": 1764 }
  ,
  { "dep_city": "三亚", "arr_city": "保亭", "number": 1587 }
  ,
  { "dep_city": "三亚", "arr_city": "乐东", "number": 1444 }
  ,
  { "dep_city": "三亚", "arr_city": "万宁", "number": 687 }
  ,
  { "dep_city": "三亚", "arr_city": "琼海", "number": 544 }
  ,
  { "dep_city": "三亚", "arr_city": "五指山", "number": 384 }
  ,
  { "dep_city": "三亚", "arr_city": "儋州", "number": 294 }
  ,
  { "dep_city": "三亚", "arr_city": "东方", "number": 262 }
  ,
  { "dep_city": "三亚", "arr_city": "澄迈县", "number": 173 }
  ,
  { "dep_city": "儋州", "arr_city": "海口", "number": 2112 }
  ,
  { "dep_city": "儋州", "arr_city": "临高县", "number": 946 }
  ,
  { "dep_city": "儋州", "arr_city": "澄迈县", "number": 559 }
  ,
  { "dep_city": "儋州", "arr_city": "白沙", "number": 554 }
  ,
  { "dep_city": "儋州", "arr_city": "昌江", "number": 435 }
  ,
  { "dep_city": "儋州", "arr_city": "琼中", "number": 364 }
  ,
  { "dep_city": "儋州", "arr_city": "三亚", "number": 264 }
  ,
  { "dep_city": "儋州", "arr_city": "东方", "number": 140 }
  ,
  { "dep_city": "儋州", "arr_city": "琼海", "number": 113 }
  ,
  { "dep_city": "儋州", "arr_city": "乐东", "number": 103 }
  ,
  { "dep_city": "五指山", "arr_city": "保亭", "number": 729 }
  ,
  { "dep_city": "五指山", "arr_city": "海口", "number": 336 }
  ,
  { "dep_city": "五指山", "arr_city": "三亚", "number": 334 }
  ,
  { "dep_city": "五指山", "arr_city": "乐东", "number": 217 }
  ,
  { "dep_city": "五指山", "arr_city": "琼中", "number": 139 }
  ,
  { "dep_city": "五指山", "arr_city": "陵水", "number": 87 }
  ,
  { "dep_city": "五指山", "arr_city": "琼海", "number": 50 }
  ,
  { "dep_city": "五指山", "arr_city": "屯昌县", "number": 41 }
  ,
  { "dep_city": "五指山", "arr_city": "白沙", "number": 35 }
  ,
  { "dep_city": "五指山", "arr_city": "万宁", "number": 35 }
  ,
  { "dep_city": "文昌", "arr_city": "海口", "number": 5589 }
  ,
  { "dep_city": "文昌", "arr_city": "琼海", "number": 633 }
  ,
  { "dep_city": "文昌", "arr_city": "定安县", "number": 222 }
  ,
  { "dep_city": "文昌", "arr_city": "三亚", "number": 144 }
  ,
  { "dep_city": "文昌", "arr_city": "澄迈县", "number": 100 }
  ,
  { "dep_city": "文昌", "arr_city": "湛江", "number": 84 }
  ,
  { "dep_city": "文昌", "arr_city": "万宁", "number": 77 }
  ,
  { "dep_city": "文昌", "arr_city": "儋州", "number": 74 }
  ,
  { "dep_city": "文昌", "arr_city": "陵水", "number": 59 }
  ,
  { "dep_city": "文昌", "arr_city": "临高县", "number": 42 }
  ,
  { "dep_city": "琼海", "arr_city": "海口", "number": 2337 }
  ,
  { "dep_city": "琼海", "arr_city": "定安县", "number": 792 }
  ,
  { "dep_city": "琼海", "arr_city": "文昌", "number": 645 }
  ,
  { "dep_city": "琼海", "arr_city": "万宁", "number": 595 }
  ,
  { "dep_city": "琼海", "arr_city": "三亚", "number": 572 }
  ,
  { "dep_city": "琼海", "arr_city": "陵水", "number": 185 }
  ,
  { "dep_city": "琼海", "arr_city": "澄迈县", "number": 175 }
  ,
  { "dep_city": "琼海", "arr_city": "屯昌县", "number": 165 }
  ,
  { "dep_city": "琼海", "arr_city": "琼中", "number": 86 }
  ,
  { "dep_city": "琼海", "arr_city": "儋州", "number": 80 }
  ,
  { "dep_city": "万宁", "arr_city": "海口", "number": 1087 }
  ,
  { "dep_city": "万宁", "arr_city": "琼海", "number": 768 }
  ,
  { "dep_city": "万宁", "arr_city": "三亚", "number": 624 }
  ,
  { "dep_city": "万宁", "arr_city": "陵水", "number": 481 }
  ,
  { "dep_city": "万宁", "arr_city": "琼中", "number": 157 }
  ,
  { "dep_city": "万宁", "arr_city": "文昌", "number": 90 }
  ,
  { "dep_city": "万宁", "arr_city": "定安县", "number": 87 }
  ,
  { "dep_city": "万宁", "arr_city": "澄迈县", "number": 79 }
  ,
  { "dep_city": "万宁", "arr_city": "保亭", "number": 78 }
  ,
  { "dep_city": "万宁", "arr_city": "儋州", "number": 56 }
  ,
  { "dep_city": "东方", "arr_city": "昌江", "number": 440 }
  ,
  { "dep_city": "东方", "arr_city": "乐东", "number": 307 }
  ,
  { "dep_city": "东方", "arr_city": "海口", "number": 273 }
  ,
  { "dep_city": "东方", "arr_city": "三亚", "number": 265 }
  ,
  { "dep_city": "东方", "arr_city": "儋州", "number": 166 }
  ,
  { "dep_city": "东方", "arr_city": "澄迈县", "number": 49 }
  ,
  { "dep_city": "东方", "arr_city": "临高县", "number": 41 }
  ,
  { "dep_city": "东方", "arr_city": "湛江", "number": 33 }
  ,
  { "dep_city": "东方", "arr_city": "白沙", "number": 25 }
  ,
  { "dep_city": "东方", "arr_city": "陵水", "number": 18 }
  ,
  { "dep_city": "定安县", "arr_city": "海口", "number": 3595 }
  ,
  { "dep_city": "定安县", "arr_city": "琼海", "number": 762 }
  ,
  { "dep_city": "定安县", "arr_city": "屯昌县", "number": 532 }
  ,
  { "dep_city": "定安县", "arr_city": "澄迈县", "number": 355 }
  ,
  { "dep_city": "定安县", "arr_city": "文昌", "number": 221 }
  ,
  { "dep_city": "定安县", "arr_city": "三亚", "number": 126 }
  ,
  { "dep_city": "定安县", "arr_city": "儋州", "number": 111 }
  ,
  { "dep_city": "定安县", "arr_city": "万宁", "number": 72 }
  ,
  { "dep_city": "定安县", "arr_city": "陵水", "number": 60 }
  ,
  { "dep_city": "定安县", "arr_city": "琼中", "number": 52 }
  ,
  { "dep_city": "屯昌县", "arr_city": "海口", "number": 1177 }
  ,
  { "dep_city": "屯昌县", "arr_city": "琼中", "number": 557 }
  ,
  { "dep_city": "屯昌县", "arr_city": "定安县", "number": 518 }
  ,
  { "dep_city": "屯昌县", "arr_city": "澄迈县", "number": 273 }
  ,
  { "dep_city": "屯昌县", "arr_city": "琼海", "number": 203 }
  ,
  { "dep_city": "屯昌县", "arr_city": "儋州", "number": 86 }
  ,
  { "dep_city": "屯昌县", "arr_city": "三亚", "number": 58 }
  ,
  { "dep_city": "屯昌县", "arr_city": "文昌", "number": 33 }
  ,
  { "dep_city": "屯昌县", "arr_city": "五指山", "number": 32 }
  ,
  { "dep_city": "屯昌县", "arr_city": "乐东", "number": 31 }
  ,
  { "dep_city": "澄迈县", "arr_city": "海口", "number": 5915 }
  ,
  { "dep_city": "澄迈县", "arr_city": "临高县", "number": 695 }
  ,
  { "dep_city": "澄迈县", "arr_city": "儋州", "number": 513 }
  ,
  { "dep_city": "澄迈县", "arr_city": "定安县", "number": 387 }
  ,
  { "dep_city": "澄迈县", "arr_city": "屯昌县", "number": 329 }
  ,
  { "dep_city": "澄迈县", "arr_city": "三亚", "number": 166 }
  ,
  { "dep_city": "澄迈县", "arr_city": "琼海", "number": 150 }
  ,
  { "dep_city": "澄迈县", "arr_city": "湛江", "number": 118 }
  ,
  { "dep_city": "澄迈县", "arr_city": "文昌", "number": 98 }
  ,
  { "dep_city": "澄迈县", "arr_city": "琼中", "number": 69 }
  ,
  { "dep_city": "临高县", "arr_city": "海口", "number": 1822 }
  ,
  { "dep_city": "临高县", "arr_city": "儋州", "number": 1148 }
  ,
  { "dep_city": "临高县", "arr_city": "澄迈县", "number": 732 }
  ,
  { "dep_city": "临高县", "arr_city": "三亚", "number": 89 }
  ,
  { "dep_city": "临高县", "arr_city": "昌江", "number": 76 }
  ,
  { "dep_city": "临高县", "arr_city": "湛江", "number": 46 }
  ,
  { "dep_city": "临高县", "arr_city": "文昌", "number": 38 }
  ,
  { "dep_city": "临高县", "arr_city": "东方", "number": 34 }
  ,
  { "dep_city": "临高县", "arr_city": "琼海", "number": 28 }
  ,
  { "dep_city": "临高县", "arr_city": "屯昌县", "number": 18 }
  ,
  { "dep_city": "琼中", "arr_city": "海口", "number": 616 }
  ,
  { "dep_city": "琼中", "arr_city": "屯昌县", "number": 603 }
  ,
  { "dep_city": "琼中", "arr_city": "儋州", "number": 369 }
  ,
  { "dep_city": "琼中", "arr_city": "五指山", "number": 173 }
  ,
  { "dep_city": "琼中", "arr_city": "万宁", "number": 115 }
  ,
  { "dep_city": "琼中", "arr_city": "三亚", "number": 80 }
  ,
  { "dep_city": "琼中", "arr_city": "琼海", "number": 78 }
  ,
  { "dep_city": "琼中", "arr_city": "澄迈县", "number": 77 }
  ,
  { "dep_city": "琼中", "arr_city": "陵水", "number": 63 }
  ,
  { "dep_city": "琼中", "arr_city": "乐东", "number": 59 }
  ,
  { "dep_city": "保亭", "arr_city": "三亚", "number": 1349 }
  ,
  { "dep_city": "保亭", "arr_city": "五指山", "number": 868 }
  ,
  { "dep_city": "保亭", "arr_city": "陵水", "number": 456 }
  ,
  { "dep_city": "保亭", "arr_city": "海口", "number": 240 }
  ,
  { "dep_city": "保亭", "arr_city": "万宁", "number": 68 }
  ,
  { "dep_city": "保亭", "arr_city": "琼海", "number": 67 }
  ,
  { "dep_city": "保亭", "arr_city": "乐东", "number": 59 }
  ,
  { "dep_city": "保亭", "arr_city": "琼中", "number": 45 }
  ,
  { "dep_city": "保亭", "arr_city": "澄迈县", "number": 29 }
  ,
  { "dep_city": "保亭", "arr_city": "屯昌县", "number": 29 }
  ,
  { "dep_city": "白沙", "arr_city": "儋州", "number": 526 }
  ,
  { "dep_city": "白沙", "arr_city": "海口", "number": 214 }
  ,
  { "dep_city": "白沙", "arr_city": "昌江", "number": 180 }
  ,
  { "dep_city": "白沙", "arr_city": "琼中", "number": 53 }
  ,
  { "dep_city": "白沙", "arr_city": "东方", "number": 47 }
  ,
  { "dep_city": "白沙", "arr_city": "三亚", "number": 46 }
  ,
  { "dep_city": "白沙", "arr_city": "五指山", "number": 31 }
  ,
  { "dep_city": "白沙", "arr_city": "澄迈县", "number": 24 }
  ,
  { "dep_city": "白沙", "arr_city": "乐东", "number": 23 }
  ,
  { "dep_city": "白沙", "arr_city": "临高县", "number": 18 }
  ,
  { "dep_city": "昌江", "arr_city": "海口", "number": 580 }
  ,
  { "dep_city": "昌江", "arr_city": "儋州", "number": 468 }
  ,
  { "dep_city": "昌江", "arr_city": "东方", "number": 442 }
  ,
  { "dep_city": "昌江", "arr_city": "白沙", "number": 222 }
  ,
  { "dep_city": "昌江", "arr_city": "三亚", "number": 127 }
  ,
  { "dep_city": "昌江", "arr_city": "临高县", "number": 78 }
  ,
  { "dep_city": "昌江", "arr_city": "澄迈县", "number": 70 }
  ,
  { "dep_city": "昌江", "arr_city": "乐东", "number": 45 }
  ,
  { "dep_city": "昌江", "arr_city": "琼中", "number": 15 }
  ,
  { "dep_city": "昌江", "arr_city": "湛江", "number": 14 }
  ,
  { "dep_city": "乐东", "arr_city": "三亚", "number": 1570 }
  ,
  { "dep_city": "乐东", "arr_city": "海口", "number": 472 }
  ,
  { "dep_city": "乐东", "arr_city": "东方", "number": 346 }
  ,
  { "dep_city": "乐东", "arr_city": "五指山", "number": 255 }
  ,
  { "dep_city": "乐东", "arr_city": "儋州", "number": 99 }
  ,
  { "dep_city": "乐东", "arr_city": "琼中", "number": 69 }
  ,
  { "dep_city": "乐东", "arr_city": "保亭", "number": 69 }
  ,
  { "dep_city": "乐东", "arr_city": "陵水", "number": 64 }
  ,
  { "dep_city": "乐东", "arr_city": "昌江", "number": 59 }
  ,
  { "dep_city": "乐东", "arr_city": "屯昌县", "number": 52 }
  ,
  { "dep_city": "陵水", "arr_city": "三亚", "number": 2583 }
  ,
  { "dep_city": "陵水", "arr_city": "海口", "number": 561 }
  ,
  { "dep_city": "陵水", "arr_city": "保亭", "number": 433 }
  ,
  { "dep_city": "陵水", "arr_city": "万宁", "number": 428 }
  ,
  { "dep_city": "陵水", "arr_city": "琼海", "number": 253 }
  ,
  { "dep_city": "陵水", "arr_city": "五指山", "number": 103 }
  ,
  { "dep_city": "陵水", "arr_city": "湛江", "number": 60 }
  ,
  { "dep_city": "陵水", "arr_city": "文昌", "number": 59 }
  ,
  { "dep_city": "陵水", "arr_city": "定安县", "number": 54 }
  ,
  { "dep_city": "陵水", "arr_city": "乐东", "number": 49 }
  ,
  { "dep_city": "重庆", "arr_city": "广安", "number": 7625 }
  ,
  { "dep_city": "重庆", "arr_city": "泸州", "number": 4658 }
  ,
  { "dep_city": "重庆", "arr_city": "成都", "number": 4504 }
  ,
  { "dep_city": "重庆", "arr_city": "遵义", "number": 4169 }
  ,
  { "dep_city": "重庆", "arr_city": "达州", "number": 3856 }
  ,
  { "dep_city": "重庆", "arr_city": "恩施州", "number": 3309 }
  ,
  { "dep_city": "重庆", "arr_city": "铜仁", "number": 2978 }
  ,
  { "dep_city": "重庆", "arr_city": "资阳", "number": 2330 }
  ,
  { "dep_city": "重庆", "arr_city": "南充", "number": 2201 }
  ,
  { "dep_city": "重庆", "arr_city": "遂宁", "number": 2157 }
  ,
  { "dep_city": "成都", "arr_city": "德阳", "number": 16110 }
  ,
  { "dep_city": "成都", "arr_city": "眉山", "number": 15618 }
  ,
  { "dep_city": "成都", "arr_city": "资阳", "number": 11655 }
  ,
  { "dep_city": "成都", "arr_city": "雅安", "number": 5839 }
  ,
  { "dep_city": "成都", "arr_city": "绵阳", "number": 5694 }
  ,
  { "dep_city": "成都", "arr_city": "重庆", "number": 5253 }
  ,
  { "dep_city": "成都", "arr_city": "乐山", "number": 5051 }
  ,
  { "dep_city": "成都", "arr_city": "南充", "number": 3806 }
  ,
  { "dep_city": "成都", "arr_city": "内江", "number": 3761 }
  ,
  { "dep_city": "成都", "arr_city": "遂宁", "number": 3704 }
  ,
  { "dep_city": "绵阳", "arr_city": "成都", "number": 7092 }
  ,
  { "dep_city": "绵阳", "arr_city": "德阳", "number": 5150 }
  ,
  { "dep_city": "绵阳", "arr_city": "遂宁", "number": 2257 }
  ,
  { "dep_city": "绵阳", "arr_city": "南充", "number": 1628 }
  ,
  { "dep_city": "绵阳", "arr_city": "广元", "number": 1390 }
  ,
  { "dep_city": "绵阳", "arr_city": "重庆", "number": 515 }
  ,
  { "dep_city": "绵阳", "arr_city": "坝州", "number": 331 }
  ,
  { "dep_city": "绵阳", "arr_city": "巴中", "number": 328 }
  ,
  { "dep_city": "绵阳", "arr_city": "资阳", "number": 274 }
  ,
  { "dep_city": "绵阳", "arr_city": "广安", "number": 213 }
  ,
  { "dep_city": "自贡", "arr_city": "内江", "number": 3846 }
  ,
  { "dep_city": "自贡", "arr_city": "成都", "number": 2271 }
  ,
  { "dep_city": "自贡", "arr_city": "宜宾", "number": 2069 }
  ,
  { "dep_city": "自贡", "arr_city": "泸州", "number": 1931 }
  ,
  { "dep_city": "自贡", "arr_city": "乐山", "number": 1139 }
  ,
  { "dep_city": "自贡", "arr_city": "重庆", "number": 669 }
  ,
  { "dep_city": "自贡", "arr_city": "眉山", "number": 370 }
  ,
  { "dep_city": "自贡", "arr_city": "资阳", "number": 137 }
  ,
  { "dep_city": "自贡", "arr_city": "遵义", "number": 76 }
  ,
  { "dep_city": "自贡", "arr_city": "昭通", "number": 73 }
  ,
  { "dep_city": "攀枝花", "arr_city": "凉山", "number": 1341 }
  ,
  { "dep_city": "攀枝花", "arr_city": "丽江", "number": 564 }
  ,
  { "dep_city": "攀枝花", "arr_city": "楚雄", "number": 377 }
  ,
  { "dep_city": "攀枝花", "arr_city": "昆明", "number": 132 }
  ,
  { "dep_city": "攀枝花", "arr_city": "成都", "number": 95 }
  ,
  { "dep_city": "攀枝花", "arr_city": "雅安", "number": 65 }
  ,
  { "dep_city": "攀枝花", "arr_city": "大理", "number": 35 }
  ,
  { "dep_city": "攀枝花", "arr_city": "昭通", "number": 19 }
  ,
  { "dep_city": "攀枝花", "arr_city": "眉山", "number": 16 }
  ,
  { "dep_city": "攀枝花", "arr_city": "泸州", "number": 15 }
  ,
  { "dep_city": "泸州", "arr_city": "遵义", "number": 7156 }
  ,
  { "dep_city": "泸州", "arr_city": "重庆", "number": 4500 }
  ,
  { "dep_city": "泸州", "arr_city": "宜宾", "number": 3851 }
  ,
  { "dep_city": "泸州", "arr_city": "自贡", "number": 1906 }
  ,
  { "dep_city": "泸州", "arr_city": "成都", "number": 1540 }
  ,
  { "dep_city": "泸州", "arr_city": "毕节", "number": 1462 }
  ,
  { "dep_city": "泸州", "arr_city": "内江", "number": 854 }
  ,
  { "dep_city": "泸州", "arr_city": "昭通", "number": 776 }
  ,
  { "dep_city": "泸州", "arr_city": "眉山", "number": 213 }
  ,
  { "dep_city": "泸州", "arr_city": "乐山", "number": 190 }
  ,
  { "dep_city": "德阳", "arr_city": "成都", "number": 17920 }
  ,
  { "dep_city": "德阳", "arr_city": "绵阳", "number": 4991 }
  ,
  { "dep_city": "德阳", "arr_city": "遂宁", "number": 599 }
  ,
  { "dep_city": "德阳", "arr_city": "资阳", "number": 479 }
  ,
  { "dep_city": "德阳", "arr_city": "重庆", "number": 331 }
  ,
  { "dep_city": "德阳", "arr_city": "南充", "number": 307 }
  ,
  { "dep_city": "德阳", "arr_city": "眉山", "number": 291 }
  ,
  { "dep_city": "德阳", "arr_city": "巴中", "number": 219 }
  ,
  { "dep_city": "德阳", "arr_city": "泸州", "number": 199 }
  ,
  { "dep_city": "德阳", "arr_city": "内江", "number": 147 }
  ,
  { "dep_city": "广元", "arr_city": "南充", "number": 1794 }
  ,
  { "dep_city": "广元", "arr_city": "绵阳", "number": 1354 }
  ,
  { "dep_city": "广元", "arr_city": "巴中", "number": 877 }
  ,
  { "dep_city": "广元", "arr_city": "成都", "number": 848 }
  ,
  { "dep_city": "广元", "arr_city": "汉中", "number": 429 }
  ,
  { "dep_city": "广元", "arr_city": "陇南", "number": 247 }
  ,
  { "dep_city": "广元", "arr_city": "重庆", "number": 205 }
  ,
  { "dep_city": "广元", "arr_city": "德阳", "number": 152 }
  ,
  { "dep_city": "广元", "arr_city": "遂宁", "number": 90 }
  ,
  { "dep_city": "广元", "arr_city": "广安", "number": 75 }
  ,
  { "dep_city": "遂宁", "arr_city": "成都", "number": 3468 }
  ,
  { "dep_city": "遂宁", "arr_city": "重庆", "number": 2052 }
  ,
  { "dep_city": "遂宁", "arr_city": "绵阳", "number": 1971 }
  ,
  { "dep_city": "遂宁", "arr_city": "南充", "number": 1347 }
  ,
  { "dep_city": "遂宁", "arr_city": "资阳", "number": 1091 }
  ,
  { "dep_city": "遂宁", "arr_city": "德阳", "number": 607 }
  ,
  { "dep_city": "遂宁", "arr_city": "广安", "number": 546 }
  ,
  { "dep_city": "遂宁", "arr_city": "巴中", "number": 191 }
  ,
  { "dep_city": "遂宁", "arr_city": "内江", "number": 161 }
  ,
  { "dep_city": "遂宁", "arr_city": "泸州", "number": 155 }
  ,
  { "dep_city": "内江", "arr_city": "自贡", "number": 3835 }
  ,
  { "dep_city": "内江", "arr_city": "成都", "number": 3083 }
  ,
  { "dep_city": "内江", "arr_city": "资阳", "number": 2069 }
  ,
  { "dep_city": "内江", "arr_city": "重庆", "number": 1609 }
  ,
  { "dep_city": "内江", "arr_city": "眉山", "number": 1235 }
  ,
  { "dep_city": "内江", "arr_city": "泸州", "number": 772 }
  ,
  { "dep_city": "内江", "arr_city": "宜宾", "number": 298 }
  ,
  { "dep_city": "内江", "arr_city": "乐山", "number": 180 }
  ,
  { "dep_city": "内江", "arr_city": "南充", "number": 106 }
  ,
  { "dep_city": "内江", "arr_city": "遂宁", "number": 102 }
  ,
  { "dep_city": "乐山", "arr_city": "成都", "number": 5896 }
  ,
  { "dep_city": "乐山", "arr_city": "眉山", "number": 4027 }
  ,
  { "dep_city": "乐山", "arr_city": "自贡", "number": 1159 }
  ,
  { "dep_city": "乐山", "arr_city": "宜宾", "number": 990 }
  ,
  { "dep_city": "乐山", "arr_city": "雅安", "number": 464 }
  ,
  { "dep_city": "乐山", "arr_city": "重庆", "number": 383 }
  ,
  { "dep_city": "乐山", "arr_city": "凉山", "number": 273 }
  ,
  { "dep_city": "乐山", "arr_city": "内江", "number": 236 }
  ,
  { "dep_city": "乐山", "arr_city": "资阳", "number": 208 }
  ,
  { "dep_city": "乐山", "arr_city": "泸州", "number": 194 }
  ,
  { "dep_city": "资阳", "arr_city": "成都", "number": 11948 }
  ,
  { "dep_city": "资阳", "arr_city": "重庆", "number": 2364 }
  ,
  { "dep_city": "资阳", "arr_city": "内江", "number": 2115 }
  ,
  { "dep_city": "资阳", "arr_city": "遂宁", "number": 976 }
  ,
  { "dep_city": "资阳", "arr_city": "眉山", "number": 919 }
  ,
  { "dep_city": "资阳", "arr_city": "德阳", "number": 438 }
  ,
  { "dep_city": "资阳", "arr_city": "泸州", "number": 207 }
  ,
  { "dep_city": "资阳", "arr_city": "南充", "number": 178 }
  ,
  { "dep_city": "资阳", "arr_city": "乐山", "number": 162 }
  ,
  { "dep_city": "资阳", "arr_city": "绵阳", "number": 160 }
  ,
  { "dep_city": "南充", "arr_city": "成都", "number": 3439 }
  ,
  { "dep_city": "南充", "arr_city": "广安", "number": 3207 }
  ,
  { "dep_city": "南充", "arr_city": "重庆", "number": 1979 }
  ,
  { "dep_city": "南充", "arr_city": "广元", "number": 1733 }
  ,
  { "dep_city": "南充", "arr_city": "巴中", "number": 1724 }
  ,
  { "dep_city": "南充", "arr_city": "绵阳", "number": 1465 }
  ,
  { "dep_city": "南充", "arr_city": "遂宁", "number": 1340 }
  ,
  { "dep_city": "南充", "arr_city": "达州", "number": 866 }
  ,
  { "dep_city": "南充", "arr_city": "德阳", "number": 304 }
  ,
  { "dep_city": "南充", "arr_city": "资阳", "number": 179 }
  ,
  { "dep_city": "达州", "arr_city": "重庆", "number": 3619 }
  ,
  { "dep_city": "达州", "arr_city": "巴中", "number": 1719 }
  ,
  { "dep_city": "达州", "arr_city": "广安", "number": 1535 }
  ,
  { "dep_city": "达州", "arr_city": "南充", "number": 818 }
  ,
  { "dep_city": "达州", "arr_city": "成都", "number": 807 }
  ,
  { "dep_city": "达州", "arr_city": "遂宁", "number": 110 }
  ,
  { "dep_city": "达州", "arr_city": "绵阳", "number": 73 }
  ,
  { "dep_city": "达州", "arr_city": "安康", "number": 73 }
  ,
  { "dep_city": "达州", "arr_city": "德阳", "number": 49 }
  ,
  { "dep_city": "达州", "arr_city": "汉中", "number": 46 }
  ,
  { "dep_city": "雅安", "arr_city": "成都", "number": 6464 }
  ,
  { "dep_city": "雅安", "arr_city": "甘孜", "number": 880 }
  ,
  { "dep_city": "雅安", "arr_city": "眉山", "number": 869 }
  ,
  { "dep_city": "雅安", "arr_city": "凉山", "number": 861 }
  ,
  { "dep_city": "雅安", "arr_city": "乐山", "number": 408 }
  ,
  { "dep_city": "雅安", "arr_city": "德阳", "number": 115 }
  ,
  { "dep_city": "雅安", "arr_city": "重庆", "number": 107 }
  ,
  { "dep_city": "雅安", "arr_city": "资阳", "number": 91 }
  ,
  { "dep_city": "雅安", "arr_city": "绵阳", "number": 84 }
  ,
  { "dep_city": "雅安", "arr_city": "自贡", "number": 61 }
  ,
  { "dep_city": "甘孜", "arr_city": "成都", "number": 2713 }
  ,
  { "dep_city": "甘孜", "arr_city": "雅安", "number": 1709 }
  ,
  { "dep_city": "甘孜", "arr_city": "昌都", "number": 580 }
  ,
  { "dep_city": "甘孜", "arr_city": "坝州", "number": 507 }
  ,
  { "dep_city": "甘孜", "arr_city": "迪庆", "number": 352 }
  ,
  { "dep_city": "甘孜", "arr_city": "凉山", "number": 332 }
  ,
  { "dep_city": "甘孜", "arr_city": "眉山", "number": 247 }
  ,
  { "dep_city": "甘孜", "arr_city": "遂宁", "number": 136 }
  ,
  { "dep_city": "甘孜", "arr_city": "玉树州", "number": 114 }
  ,
  { "dep_city": "甘孜", "arr_city": "乐山", "number": 113 }
  ,
  { "dep_city": "凉山", "arr_city": "昭通", "number": 7055 }
  ,
  { "dep_city": "凉山", "arr_city": "攀枝花", "number": 1395 }
  ,
  { "dep_city": "凉山", "arr_city": "昆明", "number": 1143 }
  ,
  { "dep_city": "凉山", "arr_city": "丽江", "number": 995 }
  ,
  { "dep_city": "凉山", "arr_city": "成都", "number": 985 }
  ,
  { "dep_city": "凉山", "arr_city": "雅安", "number": 979 }
  ,
  { "dep_city": "凉山", "arr_city": "甘孜", "number": 313 }
  ,
  { "dep_city": "凉山", "arr_city": "乐山", "number": 280 }
  ,
  { "dep_city": "凉山", "arr_city": "宜宾", "number": 263 }
  ,
  { "dep_city": "凉山", "arr_city": "楚雄", "number": 182 }
  ,
  { "dep_city": "广安", "arr_city": "重庆", "number": 7202 }
  ,
  { "dep_city": "广安", "arr_city": "南充", "number": 2813 }
  ,
  { "dep_city": "广安", "arr_city": "达州", "number": 1398 }
  ,
  { "dep_city": "广安", "arr_city": "成都", "number": 972 }
  ,
  { "dep_city": "广安", "arr_city": "遂宁", "number": 457 }
  ,
  { "dep_city": "广安", "arr_city": "绵阳", "number": 120 }
  ,
  { "dep_city": "广安", "arr_city": "资阳", "number": 106 }
  ,
  { "dep_city": "广安", "arr_city": "巴中", "number": 103 }
  ,
  { "dep_city": "广安", "arr_city": "眉山", "number": 63 }
  ,
  { "dep_city": "广安", "arr_city": "内江", "number": 57 }
  ,
  { "dep_city": "巴中", "arr_city": "南充", "number": 1644 }
  ,
  { "dep_city": "巴中", "arr_city": "达州", "number": 1643 }
  ,
  { "dep_city": "巴中", "arr_city": "成都", "number": 1221 }
  ,
  { "dep_city": "巴中", "arr_city": "广元", "number": 868 }
  ,
  { "dep_city": "巴中", "arr_city": "重庆", "number": 466 }
  ,
  { "dep_city": "巴中", "arr_city": "汉中", "number": 418 }
  ,
  { "dep_city": "巴中", "arr_city": "绵阳", "number": 206 }
  ,
  { "dep_city": "巴中", "arr_city": "广安", "number": 97 }
  ,
  { "dep_city": "巴中", "arr_city": "西安", "number": 87 }
  ,
  { "dep_city": "巴中", "arr_city": "遂宁", "number": 86 }
  ,
  { "dep_city": "眉山", "arr_city": "成都", "number": 18531 }
  ,
  { "dep_city": "眉山", "arr_city": "乐山", "number": 3913 }
  ,
  { "dep_city": "眉山", "arr_city": "内江", "number": 1204 }
  ,
  { "dep_city": "眉山", "arr_city": "资阳", "number": 1047 }
  ,
  { "dep_city": "眉山", "arr_city": "雅安", "number": 988 }
  ,
  { "dep_city": "眉山", "arr_city": "自贡", "number": 457 }
  ,
  { "dep_city": "眉山", "arr_city": "德阳", "number": 265 }
  ,
  { "dep_city": "眉山", "arr_city": "重庆", "number": 254 }
  ,
  { "dep_city": "眉山", "arr_city": "宜宾", "number": 243 }
  ,
  { "dep_city": "眉山", "arr_city": "泸州", "number": 240 }
  ,
  { "dep_city": "贵阳", "arr_city": "毕节", "number": 11353 }
  ,
  { "dep_city": "贵阳", "arr_city": "黔南", "number": 9321 }
  ,
  { "dep_city": "贵阳", "arr_city": "安顺", "number": 7177 }
  ,
  { "dep_city": "贵阳", "arr_city": "遵义", "number": 6453 }
  ,
  { "dep_city": "贵阳", "arr_city": "铜仁", "number": 2793 }
  ,
  { "dep_city": "贵阳", "arr_city": "黔东南", "number": 2676 }
  ,
  { "dep_city": "贵阳", "arr_city": "黔西南", "number": 2346 }
  ,
  { "dep_city": "贵阳", "arr_city": "六盘水", "number": 876 }
  ,
  { "dep_city": "贵阳", "arr_city": "重庆", "number": 557 }
  ,
  { "dep_city": "贵阳", "arr_city": "泸州", "number": 361 }
  ,
  { "dep_city": "六盘水", "arr_city": "毕节", "number": 3168 }
  ,
  { "dep_city": "六盘水", "arr_city": "黔西南", "number": 3061 }
  ,
  { "dep_city": "六盘水", "arr_city": "曲靖", "number": 1942 }
  ,
  { "dep_city": "六盘水", "arr_city": "安顺", "number": 1264 }
  ,
  { "dep_city": "六盘水", "arr_city": "贵阳", "number": 585 }
  ,
  { "dep_city": "六盘水", "arr_city": "昆明", "number": 387 }
  ,
  { "dep_city": "六盘水", "arr_city": "遵义", "number": 110 }
  ,
  { "dep_city": "六盘水", "arr_city": "重庆", "number": 104 }
  ,
  { "dep_city": "六盘水", "arr_city": "泸州", "number": 94 }
  ,
  { "dep_city": "六盘水", "arr_city": "昭通", "number": 80 }
  ,
  { "dep_city": "遵义", "arr_city": "泸州", "number": 7125 }
  ,
  { "dep_city": "遵义", "arr_city": "贵阳", "number": 4148 }
  ,
  { "dep_city": "遵义", "arr_city": "毕节", "number": 4061 }
  ,
  { "dep_city": "遵义", "arr_city": "重庆", "number": 3867 }
  ,
  { "dep_city": "遵义", "arr_city": "铜仁", "number": 2968 }
  ,
  { "dep_city": "遵义", "arr_city": "黔南", "number": 1437 }
  ,
  { "dep_city": "遵义", "arr_city": "黔东南", "number": 945 }
  ,
  { "dep_city": "遵义", "arr_city": "成都", "number": 252 }
  ,
  { "dep_city": "遵义", "arr_city": "昭通", "number": 249 }
  ,
  { "dep_city": "遵义", "arr_city": "安顺", "number": 249 }
  ,
  { "dep_city": "铜仁", "arr_city": "遵义", "number": 3422 }
  ,
  { "dep_city": "铜仁", "arr_city": "重庆", "number": 2722 }
  ,
  { "dep_city": "铜仁", "arr_city": "贵阳", "number": 1668 }
  ,
  { "dep_city": "铜仁", "arr_city": "湘西", "number": 1512 }
  ,
  { "dep_city": "铜仁", "arr_city": "黔东南", "number": 1504 }
  ,
  { "dep_city": "铜仁", "arr_city": "怀化", "number": 888 }
  ,
  { "dep_city": "铜仁", "arr_city": "毕节", "number": 707 }
  ,
  { "dep_city": "铜仁", "arr_city": "黔南", "number": 481 }
  ,
  { "dep_city": "铜仁", "arr_city": "昭通", "number": 306 }
  ,
  { "dep_city": "铜仁", "arr_city": "安顺", "number": 201 }
  ,
  { "dep_city": "黔西南", "arr_city": "六盘水", "number": 3231 }
  ,
  { "dep_city": "黔西南", "arr_city": "安顺", "number": 3082 }
  ,
  { "dep_city": "黔西南", "arr_city": "百色", "number": 1974 }
  ,
  { "dep_city": "黔西南", "arr_city": "贵阳", "number": 1396 }
  ,
  { "dep_city": "黔西南", "arr_city": "曲靖", "number": 1243 }
  ,
  { "dep_city": "黔西南", "arr_city": "黔南", "number": 451 }
  ,
  { "dep_city": "黔西南", "arr_city": "毕节", "number": 307 }
  ,
  { "dep_city": "黔西南", "arr_city": "昆明", "number": 286 }
  ,
  { "dep_city": "黔西南", "arr_city": "遵义", "number": 179 }
  ,
  { "dep_city": "黔西南", "arr_city": "黔东南", "number": 106 }
  ,
  { "dep_city": "毕节", "arr_city": "贵阳", "number": 8333 }
  ,
  { "dep_city": "毕节", "arr_city": "昭通", "number": 4332 }
  ,
  { "dep_city": "毕节", "arr_city": "遵义", "number": 3720 }
  ,
  { "dep_city": "毕节", "arr_city": "六盘水", "number": 2805 }
  ,
  { "dep_city": "毕节", "arr_city": "曲靖", "number": 1985 }
  ,
  { "dep_city": "毕节", "arr_city": "安顺", "number": 1910 }
  ,
  { "dep_city": "毕节", "arr_city": "泸州", "number": 1609 }
  ,
  { "dep_city": "毕节", "arr_city": "黔南", "number": 454 }
  ,
  { "dep_city": "毕节", "arr_city": "重庆", "number": 397 }
  ,
  { "dep_city": "毕节", "arr_city": "昆明", "number": 244 }
  ,
  { "dep_city": "安顺", "arr_city": "贵阳", "number": 5984 }
  ,
  { "dep_city": "安顺", "arr_city": "黔西南", "number": 3136 }
  ,
  { "dep_city": "安顺", "arr_city": "毕节", "number": 2115 }
  ,
  { "dep_city": "安顺", "arr_city": "黔南", "number": 1933 }
  ,
  { "dep_city": "安顺", "arr_city": "六盘水", "number": 1263 }
  ,
  { "dep_city": "安顺", "arr_city": "黔东南", "number": 330 }
  ,
  { "dep_city": "安顺", "arr_city": "遵义", "number": 320 }
  ,
  { "dep_city": "安顺", "arr_city": "昆明", "number": 121 }
  ,
  { "dep_city": "安顺", "arr_city": "铜仁", "number": 108 }
  ,
  { "dep_city": "安顺", "arr_city": "重庆", "number": 106 }
  ,
  { "dep_city": "黔东南", "arr_city": "黔南", "number": 4171 }
  ,
  { "dep_city": "黔东南", "arr_city": "贵阳", "number": 1929 }
  ,
  { "dep_city": "黔东南", "arr_city": "铜仁", "number": 1746 }
  ,
  { "dep_city": "黔东南", "arr_city": "柳州", "number": 1201 }
  ,
  { "dep_city": "黔东南", "arr_city": "遵义", "number": 1184 }
  ,
  { "dep_city": "黔东南", "arr_city": "怀化", "number": 966 }
  ,
  { "dep_city": "黔东南", "arr_city": "毕节", "number": 396 }
  ,
  { "dep_city": "黔东南", "arr_city": "安顺", "number": 384 }
  ,
  { "dep_city": "黔东南", "arr_city": "黔西南", "number": 322 }
  ,
  { "dep_city": "黔东南", "arr_city": "重庆", "number": 250 }
  ,
  { "dep_city": "黔南", "arr_city": "贵阳", "number": 9588 }
  ,
  { "dep_city": "黔南", "arr_city": "黔东南", "number": 3724 }
  ,
  { "dep_city": "黔南", "arr_city": "安顺", "number": 2173 }
  ,
  { "dep_city": "黔南", "arr_city": "遵义", "number": 2099 }
  ,
  { "dep_city": "黔南", "arr_city": "毕节", "number": 1239 }
  ,
  { "dep_city": "黔南", "arr_city": "河池", "number": 993 }
  ,
  { "dep_city": "黔南", "arr_city": "黔西南", "number": 950 }
  ,
  { "dep_city": "黔南", "arr_city": "铜仁", "number": 602 }
  ,
  { "dep_city": "黔南", "arr_city": "重庆", "number": 276 }
  ,
  { "dep_city": "黔南", "arr_city": "泸州", "number": 234 }
  ,
  { "dep_city": "昆明", "arr_city": "曲靖", "number": 8559 }
  ,
  { "dep_city": "昆明", "arr_city": "玉溪", "number": 8517 }
  ,
  { "dep_city": "昆明", "arr_city": "红河", "number": 5522 }
  ,
  { "dep_city": "昆明", "arr_city": "楚雄", "number": 5023 }
  ,
  { "dep_city": "昆明", "arr_city": "昭通", "number": 4646 }
  ,
  { "dep_city": "昆明", "arr_city": "文山", "number": 3098 }
  ,
  { "dep_city": "昆明", "arr_city": "大理", "number": 1970 }
  ,
  { "dep_city": "昆明", "arr_city": "普洱", "number": 1581 }
  ,
  { "dep_city": "昆明", "arr_city": "凉山", "number": 1399 }
  ,
  { "dep_city": "昆明", "arr_city": "丽江", "number": 837 }
  ,
  { "dep_city": "曲靖", "arr_city": "昆明", "number": 7305 }
  ,
  { "dep_city": "曲靖", "arr_city": "毕节", "number": 1936 }
  ,
  { "dep_city": "曲靖", "arr_city": "昭通", "number": 1906 }
  ,
  { "dep_city": "曲靖", "arr_city": "六盘水", "number": 1867 }
  ,
  { "dep_city": "曲靖", "arr_city": "红河", "number": 1335 }
  ,
  { "dep_city": "曲靖", "arr_city": "黔西南", "number": 1110 }
  ,
  { "dep_city": "曲靖", "arr_city": "文山", "number": 530 }
  ,
  { "dep_city": "曲靖", "arr_city": "百色", "number": 323 }
  ,
  { "dep_city": "曲靖", "arr_city": "玉溪", "number": 275 }
  ,
  { "dep_city": "曲靖", "arr_city": "重庆", "number": 116 }
  ,
  { "dep_city": "玉溪", "arr_city": "昆明", "number": 7780 }
  ,
  { "dep_city": "玉溪", "arr_city": "红河", "number": 2647 }
  ,
  { "dep_city": "玉溪", "arr_city": "普洱", "number": 1293 }
  ,
  { "dep_city": "玉溪", "arr_city": "楚雄", "number": 869 }
  ,
  { "dep_city": "玉溪", "arr_city": "西双版纳", "number": 429 }
  ,
  { "dep_city": "玉溪", "arr_city": "曲靖", "number": 353 }
  ,
  { "dep_city": "玉溪", "arr_city": "文山", "number": 193 }
  ,
  { "dep_city": "玉溪", "arr_city": "云南个旧市", "number": 117 }
  ,
  { "dep_city": "玉溪", "arr_city": "昭通", "number": 115 }
  ,
  { "dep_city": "玉溪", "arr_city": "大理", "number": 92 }
  ,
  { "dep_city": "保山", "arr_city": "德宏", "number": 5230 }
  ,
  { "dep_city": "保山", "arr_city": "临沧", "number": 2034 }
  ,
  { "dep_city": "保山", "arr_city": "大理", "number": 1832 }
  ,
  { "dep_city": "保山", "arr_city": "怒江", "number": 732 }
  ,
  { "dep_city": "保山", "arr_city": "昆明", "number": 320 }
  ,
  { "dep_city": "保山", "arr_city": "丽江", "number": 105 }
  ,
  { "dep_city": "保山", "arr_city": "楚雄", "number": 101 }
  ,
  { "dep_city": "保山", "arr_city": "普洱", "number": 30 }
  ,
  { "dep_city": "保山", "arr_city": "曲靖", "number": 20 }
  ,
  { "dep_city": "保山", "arr_city": "玉溪", "number": 17 }
  ,
  { "dep_city": "昭通", "arr_city": "凉山", "number": 6714 }
  ,
  { "dep_city": "昭通", "arr_city": "毕节", "number": 4009 }
  ,
  { "dep_city": "昭通", "arr_city": "宜宾", "number": 2971 }
  ,
  { "dep_city": "昭通", "arr_city": "昆明", "number": 1938 }
  ,
  { "dep_city": "昭通", "arr_city": "曲靖", "number": 1364 }
  ,
  { "dep_city": "昭通", "arr_city": "泸州", "number": 819 }
  ,
  { "dep_city": "昭通", "arr_city": "重庆", "number": 246 }
  ,
  { "dep_city": "昭通", "arr_city": "贵阳", "number": 153 }
  ,
  { "dep_city": "昭通", "arr_city": "成都", "number": 150 }
  ,
  { "dep_city": "昭通", "arr_city": "自贡", "number": 112 }
  ,
  { "dep_city": "丽江", "arr_city": "大理", "number": 5080 }
  ,
  { "dep_city": "丽江", "arr_city": "迪庆", "number": 2470 }
  ,
  { "dep_city": "丽江", "arr_city": "凉山", "number": 1167 }
  ,
  { "dep_city": "丽江", "arr_city": "攀枝花", "number": 593 }
  ,
  { "dep_city": "丽江", "arr_city": "昆明", "number": 539 }
  ,
  { "dep_city": "丽江", "arr_city": "楚雄", "number": 261 }
  ,
  { "dep_city": "丽江", "arr_city": "怒江", "number": 174 }
  ,
  { "dep_city": "丽江", "arr_city": "保山", "number": 112 }
  ,
  { "dep_city": "丽江", "arr_city": "西双版纳", "number": 109 }
  ,
  { "dep_city": "丽江", "arr_city": "重庆", "number": 71 }
  ,
  { "dep_city": "普洱", "arr_city": "西双版纳", "number": 4322 }
  ,
  { "dep_city": "普洱", "arr_city": "临沧", "number": 2034 }
  ,
  { "dep_city": "普洱", "arr_city": "昆明", "number": 1480 }
  ,
  { "dep_city": "普洱", "arr_city": "玉溪", "number": 1400 }
  ,
  { "dep_city": "普洱", "arr_city": "红河", "number": 1075 }
  ,
  { "dep_city": "普洱", "arr_city": "大理", "number": 380 }
  ,
  { "dep_city": "普洱", "arr_city": "楚雄", "number": 161 }
  ,
  { "dep_city": "普洱", "arr_city": "曲靖", "number": 72 }
  ,
  { "dep_city": "普洱", "arr_city": "文山", "number": 44 }
  ,
  { "dep_city": "普洱", "arr_city": "保山", "number": 40 }
  ,
  { "dep_city": "临沧", "arr_city": "普洱", "number": 2181 }
  ,
  { "dep_city": "临沧", "arr_city": "保山", "number": 1921 }
  ,
  { "dep_city": "临沧", "arr_city": "大理", "number": 1745 }
  ,
  { "dep_city": "临沧", "arr_city": "昆明", "number": 396 }
  ,
  { "dep_city": "临沧", "arr_city": "楚雄", "number": 152 }
  ,
  { "dep_city": "临沧", "arr_city": "西双版纳", "number": 141 }
  ,
  { "dep_city": "临沧", "arr_city": "德宏", "number": 141 }
  ,
  { "dep_city": "临沧", "arr_city": "丽江", "number": 40 }
  ,
  { "dep_city": "临沧", "arr_city": "曲靖", "number": 32 }
  ,
  { "dep_city": "临沧", "arr_city": "玉溪", "number": 29 }
  ,
  { "dep_city": "德宏", "arr_city": "保山", "number": 5504 }
  ,
  { "dep_city": "德宏", "arr_city": "大理", "number": 862 }
  ,
  { "dep_city": "德宏", "arr_city": "昆明", "number": 191 }
  ,
  { "dep_city": "德宏", "arr_city": "临沧", "number": 179 }
  ,
  { "dep_city": "德宏", "arr_city": "楚雄", "number": 64 }
  ,
  { "dep_city": "德宏", "arr_city": "丽江", "number": 60 }
  ,
  { "dep_city": "德宏", "arr_city": "怒江", "number": 40 }
  ,
  { "dep_city": "德宏", "arr_city": "玉溪", "number": 19 }
  ,
  { "dep_city": "德宏", "arr_city": "普洱", "number": 13 }
  ,
  { "dep_city": "德宏", "arr_city": "重庆", "number": 9 }
  ,
  { "dep_city": "怒江", "arr_city": "大理", "number": 1487 }
  ,
  { "dep_city": "怒江", "arr_city": "保山", "number": 790 }
  ,
  { "dep_city": "怒江", "arr_city": "丽江", "number": 147 }
  ,
  { "dep_city": "怒江", "arr_city": "迪庆", "number": 131 }
  ,
  { "dep_city": "怒江", "arr_city": "昆明", "number": 94 }
  ,
  { "dep_city": "怒江", "arr_city": "德宏", "number": 33 }
  ,
  { "dep_city": "怒江", "arr_city": "楚雄", "number": 15 }
  ,
  { "dep_city": "怒江", "arr_city": "临沧", "number": 7 }
  ,
  { "dep_city": "怒江", "arr_city": "玉溪", "number": 6 }
  ,
  { "dep_city": "怒江", "arr_city": "林芝", "number": 5 }
  ,
  { "dep_city": "迪庆", "arr_city": "丽江", "number": 2393 }
  ,
  { "dep_city": "迪庆", "arr_city": "大理", "number": 600 }
  ,
  { "dep_city": "迪庆", "arr_city": "甘孜", "number": 289 }
  ,
  { "dep_city": "迪庆", "arr_city": "怒江", "number": 188 }
  ,
  { "dep_city": "迪庆", "arr_city": "昌都", "number": 71 }
  ,
  { "dep_city": "迪庆", "arr_city": "昆明", "number": 54 }
  ,
  { "dep_city": "迪庆", "arr_city": "凉山", "number": 22 }
  ,
  { "dep_city": "迪庆", "arr_city": "保山", "number": 20 }
  ,
  { "dep_city": "迪庆", "arr_city": "楚雄", "number": 18 }
  ,
  { "dep_city": "迪庆", "arr_city": "成都", "number": 11 }
  ,
  { "dep_city": "大理", "arr_city": "丽江", "number": 4231 }
  ,
  { "dep_city": "大理", "arr_city": "保山", "number": 2662 }
  ,
  { "dep_city": "大理", "arr_city": "临沧", "number": 1741 }
  ,
  { "dep_city": "大理", "arr_city": "昆明", "number": 1643 }
  ,
  { "dep_city": "大理", "arr_city": "怒江", "number": 1410 }
  ,
  { "dep_city": "大理", "arr_city": "楚雄", "number": 1309 }
  ,
  { "dep_city": "大理", "arr_city": "德宏", "number": 549 }
  ,
  { "dep_city": "大理", "arr_city": "迪庆", "number": 456 }
  ,
  { "dep_city": "大理", "arr_city": "普洱", "number": 400 }
  ,
  { "dep_city": "大理", "arr_city": "曲靖", "number": 163 }
  ,
  { "dep_city": "楚雄", "arr_city": "昆明", "number": 4714 }
  ,
  { "dep_city": "楚雄", "arr_city": "大理", "number": 1135 }
  ,
  { "dep_city": "楚雄", "arr_city": "玉溪", "number": 845 }
  ,
  { "dep_city": "楚雄", "arr_city": "攀枝花", "number": 444 }
  ,
  { "dep_city": "楚雄", "arr_city": "丽江", "number": 298 }
  ,
  { "dep_city": "楚雄", "arr_city": "保山", "number": 235 }
  ,
  { "dep_city": "楚雄", "arr_city": "凉山", "number": 203 }
  ,
  { "dep_city": "楚雄", "arr_city": "临沧", "number": 192 }
  ,
  { "dep_city": "楚雄", "arr_city": "曲靖", "number": 160 }
  ,
  { "dep_city": "楚雄", "arr_city": "普洱", "number": 156 }
  ,
  { "dep_city": "红河", "arr_city": "昆明", "number": 4374 }
  ,
  { "dep_city": "红河", "arr_city": "文山", "number": 3785 }
  ,
  { "dep_city": "红河", "arr_city": "玉溪", "number": 2786 }
  ,
  { "dep_city": "红河", "arr_city": "曲靖", "number": 1346 }
  ,
  { "dep_city": "红河", "arr_city": "普洱", "number": 900 }
  ,
  { "dep_city": "红河", "arr_city": "西双版纳", "number": 132 }
  ,
  { "dep_city": "红河", "arr_city": "百色", "number": 126 }
  ,
  { "dep_city": "红河", "arr_city": "黔西南", "number": 79 }
  ,
  { "dep_city": "红河", "arr_city": "楚雄", "number": 71 }
  ,
  { "dep_city": "红河", "arr_city": "昭通", "number": 68 }
  ,
  { "dep_city": "文山", "arr_city": "红河", "number": 3492 }
  ,
  { "dep_city": "文山", "arr_city": "百色", "number": 1947 }
  ,
  { "dep_city": "文山", "arr_city": "昆明", "number": 1514 }
  ,
  { "dep_city": "文山", "arr_city": "曲靖", "number": 609 }
  ,
  { "dep_city": "文山", "arr_city": "玉溪", "number": 152 }
  ,
  { "dep_city": "文山", "arr_city": "南宁", "number": 142 }
  ,
  { "dep_city": "文山", "arr_city": "云南个旧市", "number": 130 }
  ,
  { "dep_city": "文山", "arr_city": "崇左", "number": 81 }
  ,
  { "dep_city": "文山", "arr_city": "黔西南", "number": 49 }
  ,
  { "dep_city": "文山", "arr_city": "玉林", "number": 44 }
  ,
  { "dep_city": "西双版纳", "arr_city": "普洱", "number": 5077 }
  ,
  { "dep_city": "西双版纳", "arr_city": "昆明", "number": 516 }
  ,
  { "dep_city": "西双版纳", "arr_city": "玉溪", "number": 421 }
  ,
  { "dep_city": "西双版纳", "arr_city": "红河", "number": 197 }
  ,
  { "dep_city": "西双版纳", "arr_city": "临沧", "number": 193 }
  ,
  { "dep_city": "西双版纳", "arr_city": "丽江", "number": 133 }
  ,
  { "dep_city": "西双版纳", "arr_city": "大理", "number": 121 }
  ,
  { "dep_city": "西双版纳", "arr_city": "曲靖", "number": 51 }
  ,
  { "dep_city": "西双版纳", "arr_city": "文山", "number": 32 }
  ,
  { "dep_city": "西双版纳", "arr_city": "重庆", "number": 31 }
  ,
  { "dep_city": "拉萨", "arr_city": "林芝", "number": 2070 }
  ,
  { "dep_city": "拉萨", "arr_city": "山南", "number": 1487 }
  ,
  { "dep_city": "拉萨", "arr_city": "日喀则", "number": 799 }
  ,
  { "dep_city": "拉萨", "arr_city": "那曲", "number": 544 }
  ,
  { "dep_city": "拉萨", "arr_city": "昌都", "number": 216 }
  ,
  { "dep_city": "拉萨", "arr_city": "成都", "number": 80 }
  ,
  { "dep_city": "拉萨", "arr_city": "迪庆", "number": 20 }
  ,
  { "dep_city": "拉萨", "arr_city": "绵阳", "number": 16 }
  ,
  { "dep_city": "拉萨", "arr_city": "海西州", "number": 15 }
  ,
  { "dep_city": "拉萨", "arr_city": "玉树州", "number": 14 }
  ,
  { "dep_city": "昌都", "arr_city": "甘孜", "number": 2381 }
  ,
  { "dep_city": "昌都", "arr_city": "林芝", "number": 268 }
  ,
  { "dep_city": "昌都", "arr_city": "迪庆", "number": 241 }
  ,
  { "dep_city": "昌都", "arr_city": "玉树州", "number": 142 }
  ,
  { "dep_city": "昌都", "arr_city": "那曲", "number": 112 }
  ,
  { "dep_city": "昌都", "arr_city": "拉萨", "number": 100 }
  ,
  { "dep_city": "昌都", "arr_city": "成都", "number": 57 }
  ,
  { "dep_city": "昌都", "arr_city": "雅安", "number": 20 }
  ,
  { "dep_city": "昌都", "arr_city": "坝州", "number": 18 }
  ,
  { "dep_city": "昌都", "arr_city": "重庆", "number": 12 }
  ,
  { "dep_city": "日喀则", "arr_city": "拉萨", "number": 503 }
  ,
  { "dep_city": "日喀则", "arr_city": "山南", "number": 65 }
  ,
  { "dep_city": "日喀则", "arr_city": "那曲", "number": 36 }
  ,
  { "dep_city": "日喀则", "arr_city": "阿里", "number": 28 }
  ,
  { "dep_city": "日喀则", "arr_city": "林芝", "number": 23 }
  ,
  { "dep_city": "日喀则", "arr_city": "昌都", "number": 3 }
  ,
  { "dep_city": "日喀则", "arr_city": "迪庆", "number": 1 }
  ,
  { "dep_city": "日喀则", "arr_city": "玉树州", "number": 1 }
  ,
  { "dep_city": "日喀则", "arr_city": "海西州", "number": 1 }
  ,
  { "dep_city": "日喀则", "arr_city": "果洛", "number": 1 }
  ,
  { "dep_city": "山南", "arr_city": "拉萨", "number": 1008 }
  ,
  { "dep_city": "山南", "arr_city": "林芝", "number": 126 }
  ,
  { "dep_city": "山南", "arr_city": "日喀则", "number": 40 }
  ,
  { "dep_city": "山南", "arr_city": "成都", "number": 12 }
  ,
  { "dep_city": "山南", "arr_city": "昌都", "number": 8 }
  ,
  { "dep_city": "山南", "arr_city": "那曲", "number": 7 }
  ,
  { "dep_city": "山南", "arr_city": "绵阳", "number": 2 }
  ,
  { "dep_city": "山南", "arr_city": "海东", "number": 2 }
  ,
  { "dep_city": "山南", "arr_city": "迪庆", "number": 1 }
  ,
  { "dep_city": "山南", "arr_city": "西宁", "number": 1 }
  ,
  { "dep_city": "那曲", "arr_city": "拉萨", "number": 302 }
  ,
  { "dep_city": "那曲", "arr_city": "昌都", "number": 95 }
  ,
  { "dep_city": "那曲", "arr_city": "海西州", "number": 41 }
  ,
  { "dep_city": "那曲", "arr_city": "日喀则", "number": 18 }
  ,
  { "dep_city": "那曲", "arr_city": "阿里", "number": 17 }
  ,
  { "dep_city": "那曲", "arr_city": "玉树州", "number": 13 }
  ,
  { "dep_city": "那曲", "arr_city": "山南", "number": 7 }
  ,
  { "dep_city": "那曲", "arr_city": "巴州", "number": 3 }
  ,
  { "dep_city": "那曲", "arr_city": "林芝", "number": 2 }
  ,
  { "dep_city": "那曲", "arr_city": "成都", "number": 2 }
  ,
  { "dep_city": "阿里", "arr_city": "日喀则", "number": 88 }
  ,
  { "dep_city": "阿里", "arr_city": "那曲", "number": 49 }
  ,
  { "dep_city": "阿里", "arr_city": "拉萨", "number": 4 }
  ,
  { "dep_city": "阿里", "arr_city": "喀什", "number": 3 }
  ,
  { "dep_city": "阿里", "arr_city": "和田", "number": 3 }
  ,
  { "dep_city": "阿里", "arr_city": "海西州", "number": 1 }
  ,
  { "dep_city": "阿里", "arr_city": "黄冈", "number": 0 }
  ,
  { "dep_city": "阿里", "arr_city": "甘孜", "number": 0 }
  ,
  { "dep_city": "阿里", "arr_city": "烟台", "number": 0 }
  ,
  { "dep_city": "阿里", "arr_city": "滨州", "number": 0 }
  ,
  { "dep_city": "林芝", "arr_city": "昌都", "number": 1371 }
  ,
  { "dep_city": "林芝", "arr_city": "拉萨", "number": 1328 }
  ,
  { "dep_city": "林芝", "arr_city": "山南", "number": 94 }
  ,
  { "dep_city": "林芝", "arr_city": "成都", "number": 31 }
  ,
  { "dep_city": "林芝", "arr_city": "重庆", "number": 25 }
  ,
  { "dep_city": "林芝", "arr_city": "怒江", "number": 15 }
  ,
  { "dep_city": "林芝", "arr_city": "日喀则", "number": 12 }
  ,
  { "dep_city": "林芝", "arr_city": "兰州", "number": 8 }
  ,
  { "dep_city": "林芝", "arr_city": "那曲", "number": 7 }
  ,
  { "dep_city": "林芝", "arr_city": "绵阳", "number": 3 }
  ,
  { "dep_city": "西安", "arr_city": "咸阳", "number": 27619 }
  ,
  { "dep_city": "西安", "arr_city": "渭南", "number": 10867 }
  ,
  { "dep_city": "西安", "arr_city": "商洛", "number": 4133 }
  ,
  { "dep_city": "西安", "arr_city": "宝鸡", "number": 3789 }
  ,
  { "dep_city": "西安", "arr_city": "汉中", "number": 2226 }
  ,
  { "dep_city": "西安", "arr_city": "延安", "number": 1930 }
  ,
  { "dep_city": "西安", "arr_city": "安康", "number": 1897 }
  ,
  { "dep_city": "西安", "arr_city": "铜川", "number": 1668 }
  ,
  { "dep_city": "西安", "arr_city": "庆阳", "number": 975 }
  ,
  { "dep_city": "西安", "arr_city": "榆林", "number": 927 }
  ,
  { "dep_city": "宝鸡", "arr_city": "西安", "number": 3699 }
  ,
  { "dep_city": "宝鸡", "arr_city": "咸阳", "number": 1557 }
  ,
  { "dep_city": "宝鸡", "arr_city": "平凉", "number": 316 }
  ,
  { "dep_city": "宝鸡", "arr_city": "汉中", "number": 269 }
  ,
  { "dep_city": "宝鸡", "arr_city": "天水", "number": 210 }
  ,
  { "dep_city": "宝鸡", "arr_city": "陇南", "number": 94 }
  ,
  { "dep_city": "宝鸡", "arr_city": "渭南", "number": 76 }
  ,
  { "dep_city": "宝鸡", "arr_city": "巴中", "number": 46 }
  ,
  { "dep_city": "宝鸡", "arr_city": "商洛", "number": 42 }
  ,
  { "dep_city": "宝鸡", "arr_city": "庆阳", "number": 40 }
  ,
  { "dep_city": "咸阳", "arr_city": "西安", "number": 30501 }
  ,
  { "dep_city": "咸阳", "arr_city": "宝鸡", "number": 1610 }
  ,
  { "dep_city": "咸阳", "arr_city": "渭南", "number": 1300 }
  ,
  { "dep_city": "咸阳", "arr_city": "庆阳", "number": 1022 }
  ,
  { "dep_city": "咸阳", "arr_city": "平凉", "number": 1015 }
  ,
  { "dep_city": "咸阳", "arr_city": "铜川", "number": 641 }
  ,
  { "dep_city": "咸阳", "arr_city": "商洛", "number": 349 }
  ,
  { "dep_city": "咸阳", "arr_city": "汉中", "number": 323 }
  ,
  { "dep_city": "咸阳", "arr_city": "延安", "number": 267 }
  ,
  { "dep_city": "咸阳", "arr_city": "安康", "number": 224 }
  ,
  { "dep_city": "渭南", "arr_city": "西安", "number": 10919 }
  ,
  { "dep_city": "渭南", "arr_city": "咸阳", "number": 1178 }
  ,
  { "dep_city": "渭南", "arr_city": "运城", "number": 900 }
  ,
  { "dep_city": "渭南", "arr_city": "铜川", "number": 686 }
  ,
  { "dep_city": "渭南", "arr_city": "延安", "number": 644 }
  ,
  { "dep_city": "渭南", "arr_city": "三门峡", "number": 342 }
  ,
  { "dep_city": "渭南", "arr_city": "临汾", "number": 246 }
  ,
  { "dep_city": "渭南", "arr_city": "商洛", "number": 218 }
  ,
  { "dep_city": "渭南", "arr_city": "汉中", "number": 161 }
  ,
  { "dep_city": "渭南", "arr_city": "宝鸡", "number": 115 }
  ,
  { "dep_city": "铜川", "arr_city": "西安", "number": 1495 }
  ,
  { "dep_city": "铜川", "arr_city": "渭南", "number": 644 }
  ,
  { "dep_city": "铜川", "arr_city": "咸阳", "number": 629 }
  ,
  { "dep_city": "铜川", "arr_city": "延安", "number": 484 }
  ,
  { "dep_city": "铜川", "arr_city": "榆林", "number": 100 }
  ,
  { "dep_city": "铜川", "arr_city": "汉中", "number": 26 }
  ,
  { "dep_city": "铜川", "arr_city": "商洛", "number": 26 }
  ,
  { "dep_city": "铜川", "arr_city": "十堰", "number": 18 }
  ,
  { "dep_city": "铜川", "arr_city": "鄂尔多斯", "number": 16 }
  ,
  { "dep_city": "铜川", "arr_city": "巴中", "number": 16 }
  ,
  { "dep_city": "延安", "arr_city": "榆林", "number": 2424 }
  ,
  { "dep_city": "延安", "arr_city": "西安", "number": 1593 }
  ,
  { "dep_city": "延安", "arr_city": "庆阳", "number": 716 }
  ,
  { "dep_city": "延安", "arr_city": "临汾", "number": 655 }
  ,
  { "dep_city": "延安", "arr_city": "渭南", "number": 646 }
  ,
  { "dep_city": "延安", "arr_city": "铜川", "number": 489 }
  ,
  { "dep_city": "延安", "arr_city": "咸阳", "number": 268 }
  ,
  { "dep_city": "延安", "arr_city": "运城", "number": 140 }
  ,
  { "dep_city": "延安", "arr_city": "鄂尔多斯", "number": 136 }
  ,
  { "dep_city": "延安", "arr_city": "银川", "number": 109 }
  ,
  { "dep_city": "榆林", "arr_city": "鄂尔多斯", "number": 4742 }
  ,
  { "dep_city": "榆林", "arr_city": "延安", "number": 2404 }
  ,
  { "dep_city": "榆林", "arr_city": "吕梁", "number": 1966 }
  ,
  { "dep_city": "榆林", "arr_city": "忻州", "number": 1747 }
  ,
  { "dep_city": "榆林", "arr_city": "吴忠", "number": 1120 }
  ,
  { "dep_city": "榆林", "arr_city": "西安", "number": 681 }
  ,
  { "dep_city": "榆林", "arr_city": "银川", "number": 610 }
  ,
  { "dep_city": "榆林", "arr_city": "庆阳", "number": 442 }
  ,
  { "dep_city": "榆林", "arr_city": "石家庄", "number": 224 }
  ,
  { "dep_city": "榆林", "arr_city": "太原", "number": 145 }
  ,
  { "dep_city": "安康", "arr_city": "西安", "number": 1298 }
  ,
  { "dep_city": "安康", "arr_city": "汉中", "number": 820 }
  ,
  { "dep_city": "安康", "arr_city": "十堰", "number": 357 }
  ,
  { "dep_city": "安康", "arr_city": "重庆", "number": 198 }
  ,
  { "dep_city": "安康", "arr_city": "商洛", "number": 156 }
  ,
  { "dep_city": "安康", "arr_city": "巴中", "number": 132 }
  ,
  { "dep_city": "安康", "arr_city": "咸阳", "number": 93 }
  ,
  { "dep_city": "安康", "arr_city": "达州", "number": 88 }
  ,
  { "dep_city": "安康", "arr_city": "广元", "number": 76 }
  ,
  { "dep_city": "安康", "arr_city": "绵阳", "number": 67 }
  ,
  { "dep_city": "汉中", "arr_city": "西安", "number": 1319 }
  ,
  { "dep_city": "汉中", "arr_city": "安康", "number": 810 }
  ,
  { "dep_city": "汉中", "arr_city": "巴中", "number": 585 }
  ,
  { "dep_city": "汉中", "arr_city": "广元", "number": 473 }
  ,
  { "dep_city": "汉中", "arr_city": "陇南", "number": 328 }
  ,
  { "dep_city": "汉中", "arr_city": "成都", "number": 246 }
  ,
  { "dep_city": "汉中", "arr_city": "咸阳", "number": 216 }
  ,
  { "dep_city": "汉中", "arr_city": "宝鸡", "number": 205 }
  ,
  { "dep_city": "汉中", "arr_city": "南充", "number": 182 }
  ,
  { "dep_city": "汉中", "arr_city": "绵阳", "number": 143 }
  ,
  { "dep_city": "商洛", "arr_city": "西安", "number": 3045 }
  ,
  { "dep_city": "商洛", "arr_city": "十堰", "number": 251 }
  ,
  { "dep_city": "商洛", "arr_city": "南阳", "number": 248 }
  ,
  { "dep_city": "商洛", "arr_city": "咸阳", "number": 193 }
  ,
  { "dep_city": "商洛", "arr_city": "渭南", "number": 184 }
  ,
  { "dep_city": "商洛", "arr_city": "安康", "number": 149 }
  ,
  { "dep_city": "商洛", "arr_city": "三门峡", "number": 91 }
  ,
  { "dep_city": "商洛", "arr_city": "襄阳", "number": 30 }
  ,
  { "dep_city": "商洛", "arr_city": "延安", "number": 28 }
  ,
  { "dep_city": "商洛", "arr_city": "重庆", "number": 24 }
  ,
  { "dep_city": "兰州", "arr_city": "白银", "number": 3492 }
  ,
  { "dep_city": "兰州", "arr_city": "定西", "number": 3020 }
  ,
  { "dep_city": "兰州", "arr_city": "临夏", "number": 1761 }
  ,
  { "dep_city": "兰州", "arr_city": "天水", "number": 1413 }
  ,
  { "dep_city": "兰州", "arr_city": "武威", "number": 1234 }
  ,
  { "dep_city": "兰州", "arr_city": "平凉", "number": 1160 }
  ,
  { "dep_city": "兰州", "arr_city": "陇南", "number": 772 }
  ,
  { "dep_city": "兰州", "arr_city": "甘南", "number": 645 }
  ,
  { "dep_city": "兰州", "arr_city": "庆阳", "number": 533 }
  ,
  { "dep_city": "兰州", "arr_city": "海东", "number": 318 }
  ,
  { "dep_city": "嘉峪关", "arr_city": "酒泉", "number": 1687 }
  ,
  { "dep_city": "嘉峪关", "arr_city": "张掖", "number": 168 }
  ,
  { "dep_city": "嘉峪关", "arr_city": "武威", "number": 35 }
  ,
  { "dep_city": "嘉峪关", "arr_city": "兰州", "number": 22 }
  ,
  { "dep_city": "嘉峪关", "arr_city": "阿拉善盟", "number": 15 }
  ,
  { "dep_city": "嘉峪关", "arr_city": "哈密", "number": 12 }
  ,
  { "dep_city": "嘉峪关", "arr_city": "金昌", "number": 8 }
  ,
  { "dep_city": "嘉峪关", "arr_city": "西宁", "number": 8 }
  ,
  { "dep_city": "嘉峪关", "arr_city": "天水", "number": 8 }
  ,
  { "dep_city": "嘉峪关", "arr_city": "西安", "number": 7 }
  ,
  { "dep_city": "金昌", "arr_city": "武威", "number": 1106 }
  ,
  { "dep_city": "金昌", "arr_city": "兰州", "number": 197 }
  ,
  { "dep_city": "金昌", "arr_city": "张掖", "number": 174 }
  ,
  { "dep_city": "金昌", "arr_city": "阿拉善盟", "number": 98 }
  ,
  { "dep_city": "金昌", "arr_city": "酒泉", "number": 29 }
  ,
  { "dep_city": "金昌", "arr_city": "白银", "number": 19 }
  ,
  { "dep_city": "金昌", "arr_city": "平凉", "number": 17 }
  ,
  { "dep_city": "金昌", "arr_city": "定西", "number": 12 }
  ,
  { "dep_city": "金昌", "arr_city": "天水", "number": 10 }
  ,
  { "dep_city": "金昌", "arr_city": "临夏", "number": 8 }
  ,
  { "dep_city": "白银", "arr_city": "兰州", "number": 2908 }
  ,
  { "dep_city": "白银", "arr_city": "中卫", "number": 611 }
  ,
  { "dep_city": "白银", "arr_city": "定西", "number": 527 }
  ,
  { "dep_city": "白银", "arr_city": "平凉", "number": 263 }
  ,
  { "dep_city": "白银", "arr_city": "武威", "number": 215 }
  ,
  { "dep_city": "白银", "arr_city": "固原", "number": 113 }
  ,
  { "dep_city": "白银", "arr_city": "银川", "number": 92 }
  ,
  { "dep_city": "白银", "arr_city": "庆阳", "number": 74 }
  ,
  { "dep_city": "白银", "arr_city": "吴忠", "number": 73 }
  ,
  { "dep_city": "白银", "arr_city": "天水", "number": 70 }
  ,
  { "dep_city": "天水", "arr_city": "陇南", "number": 2156 }
  ,
  { "dep_city": "天水", "arr_city": "定西", "number": 1206 }
  ,
  { "dep_city": "天水", "arr_city": "平凉", "number": 1023 }
  ,
  { "dep_city": "天水", "arr_city": "兰州", "number": 629 }
  ,
  { "dep_city": "天水", "arr_city": "西安", "number": 346 }
  ,
  { "dep_city": "天水", "arr_city": "宝鸡", "number": 160 }
  ,
  { "dep_city": "天水", "arr_city": "甘南", "number": 105 }
  ,
  { "dep_city": "天水", "arr_city": "庆阳", "number": 105 }
  ,
  { "dep_city": "天水", "arr_city": "白银", "number": 104 }
  ,
  { "dep_city": "天水", "arr_city": "临夏", "number": 49 }
  ,
  { "dep_city": "酒泉", "arr_city": "嘉峪关", "number": 1807 }
  ,
  { "dep_city": "酒泉", "arr_city": "张掖", "number": 548 }
  ,
  { "dep_city": "酒泉", "arr_city": "海西州", "number": 287 }
  ,
  { "dep_city": "酒泉", "arr_city": "哈密", "number": 280 }
  ,
  { "dep_city": "酒泉", "arr_city": "阿拉善盟", "number": 177 }
  ,
  { "dep_city": "酒泉", "arr_city": "武威", "number": 119 }
  ,
  { "dep_city": "酒泉", "arr_city": "兰州", "number": 99 }
  ,
  { "dep_city": "酒泉", "arr_city": "金昌", "number": 59 }
  ,
  { "dep_city": "酒泉", "arr_city": "吐鲁番", "number": 59 }
  ,
  { "dep_city": "酒泉", "arr_city": "昌吉", "number": 33 }
  ,
  { "dep_city": "张掖", "arr_city": "酒泉", "number": 415 }
  ,
  { "dep_city": "张掖", "arr_city": "武威", "number": 215 }
  ,
  { "dep_city": "张掖", "arr_city": "金昌", "number": 180 }
  ,
  { "dep_city": "张掖", "arr_city": "兰州", "number": 154 }
  ,
  { "dep_city": "张掖", "arr_city": "嘉峪关", "number": 145 }
  ,
  { "dep_city": "张掖", "arr_city": "海北", "number": 113 }
  ,
  { "dep_city": "张掖", "arr_city": "阿拉善盟", "number": 67 }
  ,
  { "dep_city": "张掖", "arr_city": "西宁", "number": 58 }
  ,
  { "dep_city": "张掖", "arr_city": "定西", "number": 30 }
  ,
  { "dep_city": "张掖", "arr_city": "白银", "number": 28 }
  ,
  { "dep_city": "武威", "arr_city": "金昌", "number": 1089 }
  ,
  { "dep_city": "武威", "arr_city": "兰州", "number": 776 }
  ,
  { "dep_city": "武威", "arr_city": "白银", "number": 238 }
  ,
  { "dep_city": "武威", "arr_city": "张掖", "number": 177 }
  ,
  { "dep_city": "武威", "arr_city": "阿拉善盟", "number": 174 }
  ,
  { "dep_city": "武威", "arr_city": "海东", "number": 123 }
  ,
  { "dep_city": "武威", "arr_city": "酒泉", "number": 58 }
  ,
  { "dep_city": "武威", "arr_city": "定西", "number": 54 }
  ,
  { "dep_city": "武威", "arr_city": "中卫", "number": 41 }
  ,
  { "dep_city": "武威", "arr_city": "陇南", "number": 40 }
  ,
  { "dep_city": "定西", "arr_city": "临夏", "number": 2802 }
  ,
  { "dep_city": "定西", "arr_city": "兰州", "number": 2042 }
  ,
  { "dep_city": "定西", "arr_city": "天水", "number": 1148 }
  ,
  { "dep_city": "定西", "arr_city": "陇南", "number": 652 }
  ,
  { "dep_city": "定西", "arr_city": "甘南", "number": 566 }
  ,
  { "dep_city": "定西", "arr_city": "白银", "number": 565 }
  ,
  { "dep_city": "定西", "arr_city": "平凉", "number": 247 }
  ,
  { "dep_city": "定西", "arr_city": "西安", "number": 66 }
  ,
  { "dep_city": "定西", "arr_city": "广元", "number": 48 }
  ,
  { "dep_city": "定西", "arr_city": "南充", "number": 47 }
  ,
  { "dep_city": "陇南", "arr_city": "天水", "number": 1778 }
  ,
  { "dep_city": "陇南", "arr_city": "甘南", "number": 746 }
  ,
  { "dep_city": "陇南", "arr_city": "定西", "number": 543 }
  ,
  { "dep_city": "陇南", "arr_city": "汉中", "number": 379 }
  ,
  { "dep_city": "陇南", "arr_city": "广元", "number": 324 }
  ,
  { "dep_city": "陇南", "arr_city": "兰州", "number": 234 }
  ,
  { "dep_city": "陇南", "arr_city": "坝州", "number": 136 }
  ,
  { "dep_city": "陇南", "arr_city": "南充", "number": 113 }
  ,
  { "dep_city": "陇南", "arr_city": "重庆", "number": 101 }
  ,
  { "dep_city": "陇南", "arr_city": "西安", "number": 99 }
  ,
  { "dep_city": "平凉", "arr_city": "固原", "number": 1221 }
  ,
  { "dep_city": "平凉", "arr_city": "庆阳", "number": 1214 }
  ,
  { "dep_city": "平凉", "arr_city": "咸阳", "number": 1192 }
  ,
  { "dep_city": "平凉", "arr_city": "天水", "number": 800 }
  ,
  { "dep_city": "平凉", "arr_city": "兰州", "number": 481 }
  ,
  { "dep_city": "平凉", "arr_city": "西安", "number": 403 }
  ,
  { "dep_city": "平凉", "arr_city": "宝鸡", "number": 329 }
  ,
  { "dep_city": "平凉", "arr_city": "白银", "number": 208 }
  ,
  { "dep_city": "平凉", "arr_city": "定西", "number": 205 }
  ,
  { "dep_city": "平凉", "arr_city": "银川", "number": 80 }
  ,
  { "dep_city": "庆阳", "arr_city": "平凉", "number": 1289 }
  ,
  { "dep_city": "庆阳", "arr_city": "咸阳", "number": 1171 }
  ,
  { "dep_city": "庆阳", "arr_city": "西安", "number": 710 }
  ,
  { "dep_city": "庆阳", "arr_city": "延安", "number": 592 }
  ,
  { "dep_city": "庆阳", "arr_city": "吴忠", "number": 588 }
  ,
  { "dep_city": "庆阳", "arr_city": "固原", "number": 371 }
  ,
  { "dep_city": "庆阳", "arr_city": "榆林", "number": 350 }
  ,
  { "dep_city": "庆阳", "arr_city": "银川", "number": 295 }
  ,
  { "dep_city": "庆阳", "arr_city": "兰州", "number": 246 }
  ,
  { "dep_city": "庆阳", "arr_city": "鄂尔多斯", "number": 72 }
  ,
  { "dep_city": "临夏", "arr_city": "定西", "number": 2884 }
  ,
  { "dep_city": "临夏", "arr_city": "兰州", "number": 1429 }
  ,
  { "dep_city": "临夏", "arr_city": "海东", "number": 1069 }
  ,
  { "dep_city": "临夏", "arr_city": "甘南", "number": 1019 }
  ,
  { "dep_city": "临夏", "arr_city": "西宁", "number": 97 }
  ,
  { "dep_city": "临夏", "arr_city": "天水", "number": 55 }
  ,
  { "dep_city": "临夏", "arr_city": "坝州", "number": 47 }
  ,
  { "dep_city": "临夏", "arr_city": "黄南州", "number": 42 }
  ,
  { "dep_city": "临夏", "arr_city": "白银", "number": 41 }
  ,
  { "dep_city": "临夏", "arr_city": "武威", "number": 31 }
  ,
  { "dep_city": "甘南", "arr_city": "临夏", "number": 1720 }
  ,
  { "dep_city": "甘南", "arr_city": "陇南", "number": 772 }
  ,
  { "dep_city": "甘南", "arr_city": "定西", "number": 605 }
  ,
  { "dep_city": "甘南", "arr_city": "兰州", "number": 592 }
  ,
  { "dep_city": "甘南", "arr_city": "坝州", "number": 371 }
  ,
  { "dep_city": "甘南", "arr_city": "黄南州", "number": 185 }
  ,
  { "dep_city": "甘南", "arr_city": "天水", "number": 67 }
  ,
  { "dep_city": "甘南", "arr_city": "果洛", "number": 37 }
  ,
  { "dep_city": "甘南", "arr_city": "海东", "number": 30 }
  ,
  { "dep_city": "甘南", "arr_city": "西宁", "number": 29 }
  ,
  { "dep_city": "西宁", "arr_city": "海东", "number": 3948 }
  ,
  { "dep_city": "西宁", "arr_city": "海南州", "number": 1644 }
  ,
  { "dep_city": "西宁", "arr_city": "海北", "number": 792 }
  ,
  { "dep_city": "西宁", "arr_city": "黄南州", "number": 566 }
  ,
  { "dep_city": "西宁", "arr_city": "海西州", "number": 389 }
  ,
  { "dep_city": "西宁", "arr_city": "兰州", "number": 268 }
  ,
  { "dep_city": "西宁", "arr_city": "果洛", "number": 154 }
  ,
  { "dep_city": "西宁", "arr_city": "临夏", "number": 126 }
  ,
  { "dep_city": "西宁", "arr_city": "玉树州", "number": 79 }
  ,
  { "dep_city": "西宁", "arr_city": "天水", "number": 55 }
  ,
  { "dep_city": "海东", "arr_city": "西宁", "number": 4485 }
  ,
  { "dep_city": "海东", "arr_city": "黄南州", "number": 1225 }
  ,
  { "dep_city": "海东", "arr_city": "临夏", "number": 1038 }
  ,
  { "dep_city": "海东", "arr_city": "兰州", "number": 275 }
  ,
  { "dep_city": "海东", "arr_city": "武威", "number": 188 }
  ,
  { "dep_city": "海东", "arr_city": "海南州", "number": 130 }
  ,
  { "dep_city": "海东", "arr_city": "海北", "number": 64 }
  ,
  { "dep_city": "海东", "arr_city": "海西州", "number": 62 }
  ,
  { "dep_city": "海东", "arr_city": "天水", "number": 30 }
  ,
  { "dep_city": "海东", "arr_city": "定西", "number": 25 }
  ,
  { "dep_city": "海北", "arr_city": "西宁", "number": 657 }
  ,
  { "dep_city": "海北", "arr_city": "张掖", "number": 162 }
  ,
  { "dep_city": "海北", "arr_city": "海南州", "number": 69 }
  ,
  { "dep_city": "海北", "arr_city": "海西州", "number": 66 }
  ,
  { "dep_city": "海北", "arr_city": "海东", "number": 52 }
  ,
  { "dep_city": "海北", "arr_city": "武威", "number": 9 }
  ,
  { "dep_city": "海北", "arr_city": "临夏", "number": 8 }
  ,
  { "dep_city": "海北", "arr_city": "定西", "number": 6 }
  ,
  { "dep_city": "海北", "arr_city": "金昌", "number": 4 }
  ,
  { "dep_city": "海北", "arr_city": "黄南州", "number": 3 }
  ,
  { "dep_city": "黄南州", "arr_city": "海东", "number": 1324 }
  ,
  { "dep_city": "黄南州", "arr_city": "西宁", "number": 398 }
  ,
  { "dep_city": "黄南州", "arr_city": "海南州", "number": 345 }
  ,
  { "dep_city": "黄南州", "arr_city": "甘南", "number": 180 }
  ,
  { "dep_city": "黄南州", "arr_city": "临夏", "number": 89 }
  ,
  { "dep_city": "黄南州", "arr_city": "果洛", "number": 20 }
  ,
  { "dep_city": "黄南州", "arr_city": "坝州", "number": 12 }
  ,
  { "dep_city": "黄南州", "arr_city": "兰州", "number": 10 }
  ,
  { "dep_city": "黄南州", "arr_city": "海北", "number": 7 }
  ,
  { "dep_city": "黄南州", "arr_city": "海西州", "number": 3 }
  ,
  { "dep_city": "海南州", "arr_city": "西宁", "number": 1456 }
  ,
  { "dep_city": "海南州", "arr_city": "黄南州", "number": 355 }
  ,
  { "dep_city": "海南州", "arr_city": "海西州", "number": 182 }
  ,
  { "dep_city": "海南州", "arr_city": "果洛", "number": 170 }
  ,
  { "dep_city": "海南州", "arr_city": "海东", "number": 149 }
  ,
  { "dep_city": "海南州", "arr_city": "海北", "number": 86 }
  ,
  { "dep_city": "海南州", "arr_city": "玉树州", "number": 64 }
  ,
  { "dep_city": "海南州", "arr_city": "临夏", "number": 27 }
  ,
  { "dep_city": "海南州", "arr_city": "兰州", "number": 21 }
  ,
  { "dep_city": "海南州", "arr_city": "天水", "number": 8 }
  ,
  { "dep_city": "果洛", "arr_city": "海南州", "number": 256 }
  ,
  { "dep_city": "果洛", "arr_city": "西宁", "number": 222 }
  ,
  { "dep_city": "果洛", "arr_city": "玉树州", "number": 210 }
  ,
  { "dep_city": "果洛", "arr_city": "坝州", "number": 200 }
  ,
  { "dep_city": "果洛", "arr_city": "甘南", "number": 53 }
  ,
  { "dep_city": "果洛", "arr_city": "甘孜", "number": 51 }
  ,
  { "dep_city": "果洛", "arr_city": "黄南州", "number": 43 }
  ,
  { "dep_city": "果洛", "arr_city": "海西州", "number": 43 }
  ,
  { "dep_city": "果洛", "arr_city": "海东", "number": 32 }
  ,
  { "dep_city": "果洛", "arr_city": "成都", "number": 30 }
  ,
  { "dep_city": "玉树州", "arr_city": "甘孜", "number": 160 }
  ,
  { "dep_city": "玉树州", "arr_city": "西宁", "number": 116 }
  ,
  { "dep_city": "玉树州", "arr_city": "果洛", "number": 115 }
  ,
  { "dep_city": "玉树州", "arr_city": "海西州", "number": 97 }
  ,
  { "dep_city": "玉树州", "arr_city": "昌都", "number": 66 }
  ,
  { "dep_city": "玉树州", "arr_city": "海南州", "number": 55 }
  ,
  { "dep_city": "玉树州", "arr_city": "海东", "number": 16 }
  ,
  { "dep_city": "玉树州", "arr_city": "那曲", "number": 7 }
  ,
  { "dep_city": "玉树州", "arr_city": "拉萨", "number": 7 }
  ,
  { "dep_city": "玉树州", "arr_city": "山南", "number": 2 }
  ,
  { "dep_city": "海西州", "arr_city": "西宁", "number": 468 }
  ,
  { "dep_city": "海西州", "arr_city": "巴州", "number": 277 }
  ,
  { "dep_city": "海西州", "arr_city": "海南州", "number": 267 }
  ,
  { "dep_city": "海西州", "arr_city": "酒泉", "number": 209 }
  ,
  { "dep_city": "海西州", "arr_city": "果洛", "number": 112 }
  ,
  { "dep_city": "海西州", "arr_city": "海北", "number": 69 }
  ,
  { "dep_city": "海西州", "arr_city": "海东", "number": 63 }
  ,
  { "dep_city": "海西州", "arr_city": "坝州", "number": 40 }
  ,
  { "dep_city": "海西州", "arr_city": "兰州", "number": 26 }
  ,
  { "dep_city": "海西州", "arr_city": "那曲", "number": 14 }
  ,
  { "dep_city": "银川", "arr_city": "吴忠", "number": 11836 }
  ,
  { "dep_city": "银川", "arr_city": "石嘴山", "number": 5743 }
  ,
  { "dep_city": "银川", "arr_city": "中卫", "number": 3028 }
  ,
  { "dep_city": "银川", "arr_city": "固原", "number": 2226 }
  ,
  { "dep_city": "银川", "arr_city": "鄂尔多斯", "number": 1229 }
  ,
  { "dep_city": "银川", "arr_city": "榆林", "number": 696 }
  ,
  { "dep_city": "银川", "arr_city": "阿拉善盟", "number": 688 }
  ,
  { "dep_city": "银川", "arr_city": "庆阳", "number": 433 }
  ,
  { "dep_city": "银川", "arr_city": "乌海", "number": 353 }
  ,
  { "dep_city": "银川", "arr_city": "平凉", "number": 210 }
  ,
  { "dep_city": "石嘴山", "arr_city": "银川", "number": 5789 }
  ,
  { "dep_city": "石嘴山", "arr_city": "乌海", "number": 462 }
  ,
  { "dep_city": "石嘴山", "arr_city": "吴忠", "number": 390 }
  ,
  { "dep_city": "石嘴山", "arr_city": "鄂尔多斯", "number": 388 }
  ,
  { "dep_city": "石嘴山", "arr_city": "阿拉善盟", "number": 212 }
  ,
  { "dep_city": "石嘴山", "arr_city": "中卫", "number": 148 }
  ,
  { "dep_city": "石嘴山", "arr_city": "固原", "number": 109 }
  ,
  { "dep_city": "石嘴山", "arr_city": "榆林", "number": 58 }
  ,
  { "dep_city": "石嘴山", "arr_city": "巴彦淖尔", "number": 54 }
  ,
  { "dep_city": "石嘴山", "arr_city": "庆阳", "number": 26 }
  ,
  { "dep_city": "吴忠", "arr_city": "银川", "number": 9821 }
  ,
  { "dep_city": "吴忠", "arr_city": "中卫", "number": 2610 }
  ,
  { "dep_city": "吴忠", "arr_city": "榆林", "number": 1097 }
  ,
  { "dep_city": "吴忠", "arr_city": "固原", "number": 607 }
  ,
  { "dep_city": "吴忠", "arr_city": "庆阳", "number": 594 }
  ,
  { "dep_city": "吴忠", "arr_city": "鄂尔多斯", "number": 325 }
  ,
  { "dep_city": "吴忠", "arr_city": "石嘴山", "number": 287 }
  ,
  { "dep_city": "吴忠", "arr_city": "阿拉善盟", "number": 136 }
  ,
  { "dep_city": "吴忠", "arr_city": "白银", "number": 104 }
  ,
  { "dep_city": "吴忠", "arr_city": "兰州", "number": 82 }
  ,
  { "dep_city": "固原", "arr_city": "中卫", "number": 1276 }
  ,
  { "dep_city": "固原", "arr_city": "平凉", "number": 1200 }
  ,
  { "dep_city": "固原", "arr_city": "银川", "number": 792 }
  ,
  { "dep_city": "固原", "arr_city": "吴忠", "number": 588 }
  ,
  { "dep_city": "固原", "arr_city": "庆阳", "number": 375 }
  ,
  { "dep_city": "固原", "arr_city": "白银", "number": 125 }
  ,
  { "dep_city": "固原", "arr_city": "咸阳", "number": 100 }
  ,
  { "dep_city": "固原", "arr_city": "石嘴山", "number": 86 }
  ,
  { "dep_city": "固原", "arr_city": "兰州", "number": 64 }
  ,
  { "dep_city": "固原", "arr_city": "西安", "number": 55 }
  ,
  { "dep_city": "中卫", "arr_city": "吴忠", "number": 2583 }
  ,
  { "dep_city": "中卫", "arr_city": "银川", "number": 1718 }
  ,
  { "dep_city": "中卫", "arr_city": "固原", "number": 1120 }
  ,
  { "dep_city": "中卫", "arr_city": "白银", "number": 568 }
  ,
  { "dep_city": "中卫", "arr_city": "阿拉善盟", "number": 416 }
  ,
  { "dep_city": "中卫", "arr_city": "石嘴山", "number": 109 }
  ,
  { "dep_city": "中卫", "arr_city": "榆林", "number": 81 }
  ,
  { "dep_city": "中卫", "arr_city": "兰州", "number": 77 }
  ,
  { "dep_city": "中卫", "arr_city": "平凉", "number": 67 }
  ,
  { "dep_city": "中卫", "arr_city": "咸阳", "number": 57 }
  ,
  { "dep_city": "乌鲁木齐", "arr_city": "昌吉", "number": 11775 }
  ,
  { "dep_city": "乌鲁木齐", "arr_city": "五家渠", "number": 2189 }
  ,
  { "dep_city": "乌鲁木齐", "arr_city": "吐鲁番", "number": 1473 }
  ,
  { "dep_city": "乌鲁木齐", "arr_city": "石河子", "number": 950 }
  ,
  { "dep_city": "乌鲁木齐", "arr_city": "塔城", "number": 868 }
  ,
  { "dep_city": "乌鲁木齐", "arr_city": "巴州", "number": 824 }
  ,
  { "dep_city": "乌鲁木齐", "arr_city": "伊犁", "number": 664 }
  ,
  { "dep_city": "乌鲁木齐", "arr_city": "克拉玛依", "number": 590 }
  ,
  { "dep_city": "乌鲁木齐", "arr_city": "哈密", "number": 390 }
  ,
  { "dep_city": "乌鲁木齐", "arr_city": "喀什", "number": 236 }
  ,
  { "dep_city": "克拉玛依", "arr_city": "塔城", "number": 1492 }
  ,
  { "dep_city": "克拉玛依", "arr_city": "伊犁", "number": 1364 }
  ,
  { "dep_city": "克拉玛依", "arr_city": "乌鲁木齐", "number": 447 }
  ,
  { "dep_city": "克拉玛依", "arr_city": "昌吉", "number": 238 }
  ,
  { "dep_city": "克拉玛依", "arr_city": "石河子", "number": 212 }
  ,
  { "dep_city": "克拉玛依", "arr_city": "阿勒泰", "number": 117 }
  ,
  { "dep_city": "克拉玛依", "arr_city": "博州", "number": 45 }
  ,
  { "dep_city": "克拉玛依", "arr_city": "巴州", "number": 29 }
  ,
  { "dep_city": "克拉玛依", "arr_city": "吐鲁番", "number": 26 }
  ,
  { "dep_city": "克拉玛依", "arr_city": "北屯", "number": 25 }
  ,
  { "dep_city": "吐鲁番", "arr_city": "乌鲁木齐", "number": 1100 }
  ,
  { "dep_city": "吐鲁番", "arr_city": "哈密", "number": 411 }
  ,
  { "dep_city": "吐鲁番", "arr_city": "巴州", "number": 213 }
  ,
  { "dep_city": "吐鲁番", "arr_city": "昌吉", "number": 186 }
  ,
  { "dep_city": "吐鲁番", "arr_city": "酒泉", "number": 145 }
  ,
  { "dep_city": "吐鲁番", "arr_city": "石河子", "number": 45 }
  ,
  { "dep_city": "吐鲁番", "arr_city": "阿拉善盟", "number": 42 }
  ,
  { "dep_city": "吐鲁番", "arr_city": "张掖", "number": 28 }
  ,
  { "dep_city": "吐鲁番", "arr_city": "阿克苏", "number": 27 }
  ,
  { "dep_city": "吐鲁番", "arr_city": "塔城", "number": 25 }
  ,
  { "dep_city": "哈密", "arr_city": "酒泉", "number": 396 }
  ,
  { "dep_city": "哈密", "arr_city": "吐鲁番", "number": 283 }
  ,
  { "dep_city": "哈密", "arr_city": "昌吉", "number": 213 }
  ,
  { "dep_city": "哈密", "arr_city": "乌鲁木齐", "number": 135 }
  ,
  { "dep_city": "哈密", "arr_city": "阿拉善盟", "number": 125 }
  ,
  { "dep_city": "哈密", "arr_city": "张掖", "number": 85 }
  ,
  { "dep_city": "哈密", "arr_city": "巴州", "number": 65 }
  ,
  { "dep_city": "哈密", "arr_city": "武威", "number": 61 }
  ,
  { "dep_city": "哈密", "arr_city": "兰州", "number": 28 }
  ,
  { "dep_city": "哈密", "arr_city": "嘉峪关", "number": 27 }
  ,
  { "dep_city": "昌吉", "arr_city": "乌鲁木齐", "number": 12675 }
  ,
  { "dep_city": "昌吉", "arr_city": "石河子", "number": 2744 }
  ,
  { "dep_city": "昌吉", "arr_city": "五家渠", "number": 1615 }
  ,
  { "dep_city": "昌吉", "arr_city": "塔城", "number": 589 }
  ,
  { "dep_city": "昌吉", "arr_city": "哈密", "number": 260 }
  ,
  { "dep_city": "昌吉", "arr_city": "克拉玛依", "number": 233 }
  ,
  { "dep_city": "昌吉", "arr_city": "阿勒泰", "number": 228 }
  ,
  { "dep_city": "昌吉", "arr_city": "吐鲁番", "number": 199 }
  ,
  { "dep_city": "昌吉", "arr_city": "伊犁", "number": 134 }
  ,
  { "dep_city": "昌吉", "arr_city": "巴州", "number": 70 }
  ,
  { "dep_city": "博州", "arr_city": "双河", "number": 1404 }
  ,
  { "dep_city": "博州", "arr_city": "伊犁", "number": 349 }
  ,
  { "dep_city": "博州", "arr_city": "乌鲁木齐", "number": 116 }
  ,
  { "dep_city": "博州", "arr_city": "塔城", "number": 97 }
  ,
  { "dep_city": "博州", "arr_city": "石河子", "number": 43 }
  ,
  { "dep_city": "博州", "arr_city": "克拉玛依", "number": 41 }
  ,
  { "dep_city": "博州", "arr_city": "昌吉", "number": 39 }
  ,
  { "dep_city": "博州", "arr_city": "可克达拉", "number": 16 }
  ,
  { "dep_city": "博州", "arr_city": "巴州", "number": 11 }
  ,
  { "dep_city": "博州", "arr_city": "吐鲁番", "number": 5 }
  ,
  { "dep_city": "巴州", "arr_city": "阿克苏", "number": 1031 }
  ,
  { "dep_city": "巴州", "arr_city": "乌鲁木齐", "number": 605 }
  ,
  { "dep_city": "巴州", "arr_city": "海西州", "number": 392 }
  ,
  { "dep_city": "巴州", "arr_city": "吐鲁番", "number": 297 }
  ,
  { "dep_city": "巴州", "arr_city": "和田", "number": 191 }
  ,
  { "dep_city": "巴州", "arr_city": "哈密", "number": 118 }
  ,
  { "dep_city": "巴州", "arr_city": "伊犁", "number": 102 }
  ,
  { "dep_city": "巴州", "arr_city": "昌吉", "number": 60 }
  ,
  { "dep_city": "巴州", "arr_city": "喀什", "number": 45 }
  ,
  { "dep_city": "巴州", "arr_city": "克拉玛依", "number": 30 }
  ,
  { "dep_city": "阿克苏", "arr_city": "阿拉尔", "number": 2028 }
  ,
  { "dep_city": "阿克苏", "arr_city": "巴州", "number": 1105 }
  ,
  { "dep_city": "阿克苏", "arr_city": "喀什", "number": 196 }
  ,
  { "dep_city": "阿克苏", "arr_city": "和田", "number": 154 }
  ,
  { "dep_city": "阿克苏", "arr_city": "乌鲁木齐", "number": 132 }
  ,
  { "dep_city": "阿克苏", "arr_city": "克州", "number": 120 }
  ,
  { "dep_city": "阿克苏", "arr_city": "吐鲁番", "number": 94 }
  ,
  { "dep_city": "阿克苏", "arr_city": "图木舒克", "number": 88 }
  ,
  { "dep_city": "阿克苏", "arr_city": "伊犁", "number": 39 }
  ,
  { "dep_city": "阿克苏", "arr_city": "哈密", "number": 38 }
  ,
  { "dep_city": "克州", "arr_city": "喀什", "number": 2340 }
  ,
  { "dep_city": "克州", "arr_city": "阿克苏", "number": 108 }
  ,
  { "dep_city": "克州", "arr_city": "和田", "number": 50 }
  ,
  { "dep_city": "克州", "arr_city": "新疆墨玉县", "number": 15 }
  ,
  { "dep_city": "克州", "arr_city": "乌鲁木齐", "number": 14 }
  ,
  { "dep_city": "克州", "arr_city": "巴州", "number": 4 }
  ,
  { "dep_city": "克州", "arr_city": "图木舒克", "number": 3 }
  ,
  { "dep_city": "克州", "arr_city": "新疆于田县", "number": 2 }
  ,
  { "dep_city": "克州", "arr_city": "塔城", "number": 2 }
  ,
  { "dep_city": "克州", "arr_city": "伊犁", "number": 2 }
  ,
  { "dep_city": "喀什", "arr_city": "克州", "number": 2714 }
  ,
  { "dep_city": "喀什", "arr_city": "和田", "number": 699 }
  ,
  { "dep_city": "喀什", "arr_city": "图木舒克", "number": 648 }
  ,
  { "dep_city": "喀什", "arr_city": "阿克苏", "number": 345 }
  ,
  { "dep_city": "喀什", "arr_city": "乌鲁木齐", "number": 145 }
  ,
  { "dep_city": "喀什", "arr_city": "新疆墨玉县", "number": 137 }
  ,
  { "dep_city": "喀什", "arr_city": "巴州", "number": 102 }
  ,
  { "dep_city": "喀什", "arr_city": "新疆和田县", "number": 46 }
  ,
  { "dep_city": "喀什", "arr_city": "伊犁", "number": 38 }
  ,
  { "dep_city": "喀什", "arr_city": "阿拉尔", "number": 27 }
  ,
  { "dep_city": "和田", "arr_city": "喀什", "number": 632 }
  ,
  { "dep_city": "和田", "arr_city": "巴州", "number": 426 }
  ,
  { "dep_city": "和田", "arr_city": "阿克苏", "number": 302 }
  ,
  { "dep_city": "和田", "arr_city": "阿拉尔", "number": 152 }
  ,
  { "dep_city": "和田", "arr_city": "乌鲁木齐", "number": 129 }
  ,
  { "dep_city": "和田", "arr_city": "克州", "number": 73 }
  ,
  { "dep_city": "和田", "arr_city": "昌吉", "number": 15 }
  ,
  { "dep_city": "和田", "arr_city": "海西州", "number": 7 }
  ,
  { "dep_city": "和田", "arr_city": "吐鲁番", "number": 7 }
  ,
  { "dep_city": "和田", "arr_city": "图木舒克", "number": 5 }
  ,
  { "dep_city": "伊犁", "arr_city": "可克达拉", "number": 2745 }
  ,
  { "dep_city": "伊犁", "arr_city": "塔城", "number": 1727 }
  ,
  { "dep_city": "伊犁", "arr_city": "克拉玛依", "number": 1506 }
  ,
  { "dep_city": "伊犁", "arr_city": "乌鲁木齐", "number": 472 }
  ,
  { "dep_city": "伊犁", "arr_city": "博州", "number": 362 }
  ,
  { "dep_city": "伊犁", "arr_city": "石河子", "number": 173 }
  ,
  { "dep_city": "伊犁", "arr_city": "昌吉", "number": 131 }
  ,
  { "dep_city": "伊犁", "arr_city": "巴州", "number": 94 }
  ,
  { "dep_city": "伊犁", "arr_city": "喀什", "number": 31 }
  ,
  { "dep_city": "伊犁", "arr_city": "吐鲁番", "number": 30 }
  ,
  { "dep_city": "塔城", "arr_city": "石河子", "number": 2968 }
  ,
  { "dep_city": "塔城", "arr_city": "伊犁", "number": 1676 }
  ,
  { "dep_city": "塔城", "arr_city": "克拉玛依", "number": 1600 }
  ,
  { "dep_city": "塔城", "arr_city": "乌鲁木齐", "number": 712 }
  ,
  { "dep_city": "塔城", "arr_city": "昌吉", "number": 546 }
  ,
  { "dep_city": "塔城", "arr_city": "阿勒泰", "number": 141 }
  ,
  { "dep_city": "塔城", "arr_city": "博州", "number": 107 }
  ,
  { "dep_city": "塔城", "arr_city": "北屯", "number": 43 }
  ,
  { "dep_city": "塔城", "arr_city": "吐鲁番", "number": 26 }
  ,
  { "dep_city": "塔城", "arr_city": "哈密", "number": 18 }
  ,
  { "dep_city": "阿勒泰", "arr_city": "北屯", "number": 2069 }
  ,
  { "dep_city": "阿勒泰", "arr_city": "乌鲁木齐", "number": 170 }
  ,
  { "dep_city": "阿勒泰", "arr_city": "昌吉", "number": 158 }
  ,
  { "dep_city": "阿勒泰", "arr_city": "塔城", "number": 122 }
  ,
  { "dep_city": "阿勒泰", "arr_city": "克拉玛依", "number": 109 }
  ,
  { "dep_city": "阿勒泰", "arr_city": "伊犁", "number": 34 }
  ,
  { "dep_city": "阿勒泰", "arr_city": "哈密", "number": 10 }
  ,
  { "dep_city": "阿勒泰", "arr_city": "巴州", "number": 7 }
  ,
  { "dep_city": "阿勒泰", "arr_city": "酒泉", "number": 5 }
  ,
  { "dep_city": "阿勒泰", "arr_city": "吐鲁番", "number": 5 }
  ,
  { "dep_city": "石河子", "arr_city": "塔城", "number": 2658 }
  ,
  { "dep_city": "石河子", "arr_city": "昌吉", "number": 2595 }
  ,
  { "dep_city": "石河子", "arr_city": "乌鲁木齐", "number": 1300 }
  ,
  { "dep_city": "石河子", "arr_city": "克拉玛依", "number": 254 }
  ,
  { "dep_city": "石河子", "arr_city": "伊犁", "number": 215 }
  ,
  { "dep_city": "石河子", "arr_city": "吐鲁番", "number": 63 }
  ,
  { "dep_city": "石河子", "arr_city": "五家渠", "number": 62 }
  ,
  { "dep_city": "石河子", "arr_city": "博州", "number": 44 }
  ,
  { "dep_city": "石河子", "arr_city": "哈密", "number": 34 }
  ,
  { "dep_city": "石河子", "arr_city": "巴州", "number": 18 }
  ,
  { "dep_city": "阿拉尔", "arr_city": "阿克苏", "number": 2417 }
  ,
  { "dep_city": "阿拉尔", "arr_city": "巴州", "number": 78 }
  ,
  { "dep_city": "阿拉尔", "arr_city": "和田", "number": 64 }
  ,
  { "dep_city": "阿拉尔", "arr_city": "喀什", "number": 45 }
  ,
  { "dep_city": "阿拉尔", "arr_city": "乌鲁木齐", "number": 33 }
  ,
  { "dep_city": "阿拉尔", "arr_city": "图木舒克", "number": 28 }
  ,
  { "dep_city": "阿拉尔", "arr_city": "新疆墨玉县", "number": 16 }
  ,
  { "dep_city": "阿拉尔", "arr_city": "吐鲁番", "number": 10 }
  ,
  { "dep_city": "阿拉尔", "arr_city": "克州", "number": 9 }
  ,
  { "dep_city": "阿拉尔", "arr_city": "伊犁", "number": 9 }
  ,
  { "dep_city": "图木舒克", "arr_city": "喀什", "number": 667 }
  ,
  { "dep_city": "图木舒克", "arr_city": "阿克苏", "number": 70 }
  ,
  { "dep_city": "图木舒克", "arr_city": "阿拉尔", "number": 27 }
  ,
  { "dep_city": "图木舒克", "arr_city": "巴州", "number": 16 }
  ,
  { "dep_city": "图木舒克", "arr_city": "乌鲁木齐", "number": 10 }
  ,
  { "dep_city": "图木舒克", "arr_city": "克州", "number": 7 }
  ,
  { "dep_city": "图木舒克", "arr_city": "和田", "number": 3 }
  ,
  { "dep_city": "图木舒克", "arr_city": "吐鲁番", "number": 1 }
  ,
  { "dep_city": "图木舒克", "arr_city": "长沙", "number": 0 }
  ,
  { "dep_city": "图木舒克", "arr_city": "郑州", "number": 0 }
  ,
  { "dep_city": "五家渠", "arr_city": "乌鲁木齐", "number": 2493 }
  ,
  { "dep_city": "五家渠", "arr_city": "昌吉", "number": 1611 }
  ,
  { "dep_city": "五家渠", "arr_city": "石河子", "number": 62 }
  ,
  { "dep_city": "五家渠", "arr_city": "吐鲁番", "number": 33 }
  ,
  { "dep_city": "五家渠", "arr_city": "塔城", "number": 24 }
  ,
  { "dep_city": "五家渠", "arr_city": "哈密", "number": 14 }
  ,
  { "dep_city": "五家渠", "arr_city": "巴州", "number": 12 }
  ,
  { "dep_city": "五家渠", "arr_city": "伊犁", "number": 12 }
  ,
  { "dep_city": "五家渠", "arr_city": "阿勒泰", "number": 10 }
  ,
  { "dep_city": "五家渠", "arr_city": "克拉玛依", "number": 10 }
  ,
  { "dep_city": "香港", "arr_city": "深圳", "number": 12079 }
  ,
  { "dep_city": "香港", "arr_city": "广州", "number": 1350 }
  ,
  { "dep_city": "香港", "arr_city": "东莞", "number": 1187 }
  ,
  { "dep_city": "香港", "arr_city": "珠海", "number": 945 }
  ,
  { "dep_city": "香港", "arr_city": "澳门", "number": 827 }
  ,
  { "dep_city": "香港", "arr_city": "惠州", "number": 427 }
  ,
  { "dep_city": "香港", "arr_city": "佛山", "number": 404 }
  ,
  { "dep_city": "香港", "arr_city": "中山", "number": 357 }
  ,
  { "dep_city": "香港", "arr_city": "江门", "number": 261 }
  ,
  { "dep_city": "香港", "arr_city": "上海", "number": 120 }
  ,
  { "dep_city": "台湾", "arr_city": "泉州", "number": 90 }
  ,
  { "dep_city": "台湾", "arr_city": "厦门", "number": 82 }
  ,
  { "dep_city": "台湾", "arr_city": "香港", "number": 77 }
  ,
  { "dep_city": "台湾", "arr_city": "上海", "number": 51 }
  ,
  { "dep_city": "台湾", "arr_city": "深圳", "number": 48 }
  ,
  { "dep_city": "台湾", "arr_city": "福州", "number": 38 }
  ,
  { "dep_city": "台湾", "arr_city": "澳门", "number": 21 }
  ,
  { "dep_city": "台湾", "arr_city": "宁波", "number": 17 }
  ,
  { "dep_city": "台湾", "arr_city": "广州", "number": 13 }
  ,
  { "dep_city": "台湾", "arr_city": "无锡", "number": 12 }

]

import requests
import json
import time
import csv
from configs import time_list, paiming_path, zhishu_path, paiming, zhishu, paiming_citycode, task_type
import re
# now = time.strftime('%Y-%m-%d-%H-%M-%S')

# for t in time_list:
#     print(t)

def get_city_moveinout():
    '''
    获取指定城市迁徙规模排名数据
    http://huiyan.baidu.com/migration/cityrank.jsonp?dt=province&id=110000&type=move_in&callback=jsonp_1616638416186_6578071
    '''
    # print(paiming_citycode)
    # for i in paiming_citycode:
    #     print(i)
    file = csv.reader(open('ChinaAreaCodes.csv', 'r'))
    for row in file:
        if row[0] != 'code':
            code = row[0]
            name = row[1]
            print(code)
            try:
                for t in time_list:
                   # url = 'http://huiyan.baidu.com/migration/cityrank.jsonp?dt=city&id={}&type={}&date={}'.format(move_in code, task_type, t)

                    # print(requests.get(url).text)
                    # url = 'https://huiyan.baidu.com/migration/cityrank.jsonp?dt=city&id={}&type={}&date={}'.format(code,task_type,t)
                   # 春运实时
                    url='https://huiyan.baidu.com/migration/cityrank.jsonp?dt=city&id={}&type={}&date={}'.format(code,task_type,t)
                    try:

                        data = loads_jsonp(requests.get(url).text)['data']
                        header = data['list'][0].keys()
                        with open(paiming_path + '{}_{}_{}_{}.csv'.format(code,name, task_type, t,encoding="utf_8_sig"), "w+",
                                  newline="") as csv_file:
                            writer = csv.writer(csv_file)
                            writer.writerow(header)
                            for city in data['list']:
                                row = [city[h] for h in header]
                                writer.writerow(row)
                        # print(t + ' OK')
                    except:
                        print(code,t,"no data")
            except Exception as why:
                print(why)
                print(code + ' No Data')


def loads_jsonp(_jsonp):
    try:
        return json.loads(re.match(".*?({.*}).*", _jsonp, re.S).group(1))
    except:
        raise ValueError('Invalid Input')
def get_city_migrationIndex():
    file = csv.reader(open('ChinaAreaCodes.csv', 'r'))
    for row in file:
        if row[0] != 'code':
            code = row[0]
            name = row[1]
            try:
                #http://huiyan.baidu.com/migration/historycurve.jsonp?dt=province&id=110000&type=move_in&callback=jsonp_1616638416187_3981844
                # url = 'http://huiyan.baidu.com/migration/historycurve.jsonp?dt=city&id={}&type={}'.format(code, task_type)

                # url = "https://huiyan.baidu.com/migration/historycurve.jsonp?dt=city&id={}&startDate=20200922&endDate=20210118&type={}".format(
                #     code, task_type)

                # 春运实时
                url = 'https://huiyan.baidu.com/migration/historycurve.jsonp?dt=city&id={}&type={}'.format(code, task_type)
                try:

                    text = loads_jsonp(requests.get(url).text)
                except:
                    print("no data")
                # print(text)
                data = text['data']['list']
                keys = data.keys()
                header = ['date', 'index']
                with open(zhishu_path + '{}_{}_{}.csv'.format(code, name, task_type), "w+", newline="",encoding="utf_8_sig") as csv_file:
                    writer=csv.writer(csv_file)
                    writer.writerow(header)
                    for day in data.keys():
                        row = [day, data[day]]
                        writer.writerow(row)
                print(code + ' OK')
            except Exception as why:
                print(why)
                print(code + ' No Data')

def main():
    if paiming == True:
        get_city_moveinout()
    if zhishu == True:
        get_city_migrationIndex()

    
if __name__ == '__main__':
    main()
import requests
import json
import time
import csv
from configshinei import time_list, zhishu_path,task_type
import re


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
                for t in time_list:
                    url = 'http://huiyan.baidu.com/migration/internalflowhistory.jsonp?dt=city&id={}&date={}'.format(
                        code, t)
                    try:

                        text = loads_jsonp(requests.get(url).text)
                        data = text['data']['list']
                        keys = data.keys()
                        header = ['date', 'index']
                        with open(zhishu_path + '{}_{}_{}.csv'.format(code, name, task_type), "w+",
                                  newline="") as csv_file:
                            writer = csv.writer(csv_file)
                            writer.writerow(header)
                            for day in data.keys():
                                row = [day, data[day]]
                                writer.writerow(row)
                        print(code + ' OK')
                    except:
                        print(code + "no data")
                    # print(text)

            except Exception as why:
                print(why)
                print(code + ' No Data')


def main():
    get_city_migrationIndex()

    
if __name__ == '__main__':
    main()
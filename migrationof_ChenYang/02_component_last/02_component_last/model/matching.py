#Header
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit

plt.rcParams['font.family'] = ['sans-serif']
plt.rcParams['font.sans-serif'] = ['SimHei']
 

#Define a function(here a exponential function is used)
def func(x, a, b, c):
 # return a * np.exp(-b * x) + c

 # return a * np.exp(-(x-b)**2 / c)
 return (a / (np.sqrt(2*np.pi) * c)) * np.exp(-(x-b)**2 / (2*c**2))
#Create the data to be fit with some noise

ydata1=[35, 17, 25, 24, 28, 24, 21, 19, 18, 22, 25, 25, 24, 20, 19, 19, 20, 20, 18, 19, 17, 18, 20, 19, 25, 26, 23, 17, 18, 19, 19, 24, 22, 24, 29, 29, 25, 27, 26, 25, 28, 29, 30, 31, 32, 33, 29, 33, 31, 30, 25, 27, 25, 26, 32, 26, 26, 28, 34, 31, 29, 32, 31, 29, 33, 32, 33, 35, 34, 32, 32, 32, 31, 32, 33, 33, 28, 28, 27, 29, 35, 36, 37, 31, 30, 27, 34, 38, 34, 35, 34]
filename_list=[20200101,20200102,20200103,20200104,20200105,20200106,20200107,20200108,20200109,20200110,20200111,20200112,20200113,20200114,20200115,20200116,20200117,20200118,20200119,20200120,20200121,20200122,20200123,20200124,20200125,20200126,20200127,20200128,20200129,20200130,20200131,20200201,20200202,20200203,20200204,20200205,20200206,20200207,20200208,20200209,20200210,20200211,20200212,20200213,20200214,20200215,20200216,20200217,20200218,20200219,20200220,20200221,20200222,20200223,20200224,20200225,20200226,20200227,20200228,20200229,20200301,20200302,20200303,20200304,20200305,20200306,20200307,20200308,20200309,20200310,20200311,20200312,20200313,20200314,20200315,20200316,20200317,20200318,20200319,20200320,20200321,20200322,20200323,20200324,20200325,20200326,20200327,20200328,20200329,20200330,20200331]

ydata2=np.array(ydata1)

plt.subplots(figsize=(16 ,10))

num_tp = len(filename_list)
xx = range(0, num_tp, 1)
# xdata = np.linspace(0, 4, 50)
y = func(ydata2, 15, 2.3, 0.5)
# np.random.seed(1729)
y_noise = 0.2 * np.random.normal(size=ydata2.size)
# ydata = y + y_noise
ydata=np.array(ydata1)

plt.xticks(xx, [xx[i] for i in xx])
#用需要的数据将x轴替换为需要的数据
plt.xticks((0, 4, 8, 12, 16, 22,24, 28, 32, 36, 40, 44, 48, 52, 56, 60,64,68,72,76,80,84,88,90),('腊月初七', '腊月十一', '腊月十五', '腊月十九', '腊月廿三',"腊月廿九", "正月初一", "正月初五", "正月初九", "正月十三", "正月十七", "正月廿一","正月廿五", "正月廿九", "贰月初四","贰月初八","贰月十二","贰月十六","贰月廿十","贰月廿四","贰月廿八","三月初二","三月初六","三月初八"))

plt.xticks(fontsize=15, rotation=20)
plt.yticks(fontsize=15)
plt.xlim(0,90)#三个月
plt.plot(xx, ydata, 'bo', label='data')
# plt.show()

#Fit for the parameters a, b, c of the function func:
popt, pcov = curve_fit(func, xx, ydata)
print("popt",popt) #output: array([ 2.55423706, 1.35190947, 0.47450618])
plt.plot(xx, func(xx, *popt), 'r-',label='fit: a=%1.3f, b=%5.3f, c=%4.3f' % tuple(popt))

# #In the case of parameters a,b,c need be constrainted
# #Constrain the optimization to the region of
# #0 <= a <= 3, 0 <= b <= 1 and 0 <= c <= 0.5
# popt, pcov = curve_fit(func, xx, ydata, bounds=(0, [3., 1., 0.5]))
# popt #output: array([ 2.43708906, 1. , 0.35015434])
# plt.plot(xx, func(xx, *popt), 'g--',label='fit: a=%5.3f, b=%5.3f, c=%5.3f' % tuple(popt))

#Labels
plt.title("Exponential Function Fitting")
plt.xlabel('x coordinate')
plt.ylabel('y coordinate')
plt.legend()
leg = plt.legend()  # remove the frame of Legend, personal choice
leg.get_frame().set_linewidth(0.0) # remove the frame of Legend, personal choice
#leg.get_frame().set_edgecolor('b') # change the color of Legend frame
#plt.show()

#Export figure
#plt.savefig('fit1.eps', format='eps', dpi=1000)
plt.savefig('fit12.pdf', format='pdf', dpi=1000, figsize=(16, 10), facecolor='w', edgecolor='k')
plt.savefig('fit1.png', format='png', dpi=1000, figsize=(16, 10), facecolor='w', edgecolor='k')
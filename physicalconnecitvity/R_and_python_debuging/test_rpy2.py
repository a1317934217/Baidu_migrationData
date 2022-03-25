#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time    : 2022/3/25 20:16
# @Author  : wuhao
# @Email   : guess?????
# @File    : test_rpy2.py
import rpy2.robjects as robjects
#‘pi’为R的内置变量
# 第一种
t0=robjects.r['pi']
print(t0[0])
# 第二种

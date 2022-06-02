---
order: -2
icon: function
---
# 函数与函数蒙版

::: warning
由基岩版的一些限制，函数蒙版或函数在某些时候可能需要使用双引号括起来。
::: 
## 函数蒙版

```
/gmask [表达式…]
```
&emsp;&emsp;此命令可设置全局函数蒙版，影响绝大多数方块操作。当参数为空时清空蒙版，蒙版与玩家绑定。

## 表达式格式

&emsp;&emsp;所有括号均为小括号。赋值与函数定义语句需要以分号结尾，唯一没有分号结尾的语句在末尾作为输出函数。若函数有任何错误，返回值或部分返回值都会为 0 。

## 常量

 `pi/π` : 3.141592653589793238462643383279

`phi/φ` : 0.618033988749894848204586834365

  `γ`   : 0.577215664901532860606512090082

  `e`   : 2.718281828459045235360287471352

## 变量

 `x/y/z` : 选区相对归一化坐标，均介于 -1~1 。

`rx/ry/rz` : 世界坐标。

  `cx/cy/cz`   : 相对选区中心方块坐标取整。

  `ox/oy/oz`   : 相对玩家方块坐标取整。

## 运算符

`+`, `-`, `*`, `/` : 基本四则运算符。

`%/mod` : 取余数。

`^` : 次幂。

`<`, `>`, `<=`, `>=`, `==`, `!=` : 基本比较运算符。

`&`, `^^`, `|` : 长整型数值与，异或，或。

`&&/and`, `||/or` : 逻辑与，逻辑或。

## 内置函数

&emsp;&emsp;函数由字母开头，内部可含有数字，下划线，冒号。尾部必须带有完整括号。截至目前，内置函数总共有这么几个：

`rand`, `sin`, `abs`, `cos`, `sign`, `lg`, `ln`, `log2`, `round`, `floor`, `ceil`, `exp`, `exp2`, `sqrt`, `tan`, `atan`, `atan2`, `asin`, `acos`, `sinh`, `cosh`, `tanh`, `gamma`, `isslimechunk`, `sum`, `min`, `max`, `id`, `data`, `issolid`, `iswaterblocking`, `issbblock`, `istop`, `normalx`, `normaly`, `normalz`, `angle`, `issurface`, `issurfacesmooth`, `is_xxxx`, `has_xxxx`

&emsp;&emsp;大多为普通的数学函数，接下来介绍部分自定义的函数：

### rand
&emsp;&emsp; 当函数内无参数时，此函数返回 0~1 的真随机数（若系统支持），每次运行结果不一致。当函数内有两个参数时，返回两个参数之间的随机数。

### isslimechunk

&emsp;&emsp;输入参数为区块的 x ，z 坐标，而非方块坐标，返回是否为史莱姆区块。

### sum

&emsp;&emsp;支持多个参数，返回所有参数总和。

### min

&emsp;&emsp;支持多个参数，返回所有参数中的最小值。

### max

&emsp;&emsp;支持多个参数，返回所有参数中的最大值。

### id

&emsp;&emsp;若无参数，返回当前方块的 `方块Id`，若有三个参数，则为相对坐标偏移量位置的 `方块Id`。

::: info
&emsp;&emsp;偏移量含义下同。
:::

### data

&emsp;&emsp;返回方块的 `方块数据值`。

### issolid

&emsp;&emsp;返回方块是否为固体方块。

### iswaterblocking

&emsp;&emsp;返回方块是否为挡水方块。

### issbblock

&emsp;&emsp;返回方块是否为固体阻挡方块。

### istop

&emsp;&emsp;返回方块是否为游戏高度图最高点。

### is_xxxx

&emsp;&emsp;xxxx可替换为任意方块名称，可省略 `minecraft:` 前缀，返回是否为此方块。

### has_xxxx

&emsp;&emsp;xxxx可替换为任意字符串，返回方块名称中是否含有此字符串。

### normalx

::: warning
&emsp;&emsp;以下函数不支持偏移量。
:::
&emsp;&emsp;返回当前位置方块归一化法线的 x 分量。

### normaly

&emsp;&emsp;返回当前位置方块归一化法线的 y 分量。

### normalz

&emsp;&emsp;返回当前位置方块归一化法线的 z 分量。

### issurface

&emsp;&emsp;返回当前位置方块是否与空气接触。

### issurfacesmooth

&emsp;&emsp;返回平滑过渡的表面函数，值域为 0~1 。

### angle

&emsp;&emsp;返回当前位置方块倾斜角，值域为 0~180 。
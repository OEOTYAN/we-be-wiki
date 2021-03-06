---
order: -1
icon: module
---

# 方块图案与方块蒙版
::: warning
由基岩版的一些限制，方块蒙版或方块图案在某些时候可能需要使用双引号括起来。
::: 
## 方块蒙版

&emsp;&emsp;方块蒙版主要用于替换指令，格式通常为：
```
名称\Id[:数据值][,...]
```
::: tip
&emsp;&emsp;匹配所有种类的混凝土
```
concrete
```
&emsp;&emsp;匹配所有种类沙子和草方块
```
sand,grass
```
&emsp;&emsp;匹配红色染色玻璃和白色羊毛
```
stained_glass:14,wool:0
```
:::
## 方块图案
&emsp;&emsp;方块图案通常用在所有需要放置方块的地方，格式通常为：
```
占比(小数或函数)%(名称\Id(整数或函数)[:数据值(整数或函数)])\SNBT[,...]
```
或
```
#clipboard
#clipboard@[x,y,z]
#clipboard@c[x,y,z]
```
::: info
&emsp;&emsp;不填数据值默认为 0 ，函数向整数舍入为四舍五入，函数必须用单引号括起来，SNBT 后不可加特殊值，SNBT中的 `"` 可能需要用 `\"` 代替。

&emsp;&emsp;当占比总和为 0 时，此处不进行任何操作。

&emsp;&emsp;SNBT 可直接使用方块的，也可以再套一层大括号，那么会根据顺序获取方块，额外方块，方块实体。方块实体（如定义容器内物品）和额外方块（如水）不是必须的。

&emsp;&emsp;当图案为剪贴板时，会平铺剪贴板内容，加上@可控制偏移，加上@c可以中心偏移而非角落。
:::
::: danger
**非专业人士请不要尝试使用 SNBT ，任何一点语法错误就极有可能导致客户端崩溃。**
:::
::: tip
&emsp;&emsp;白色混凝土
```
concrete
```
&emsp;&emsp;随机颜色混凝土
```
"concrete:'rand()*16'"
```
&emsp;&emsp;随机 10% 的含水水草与 90% 水
```
"10%{{ \"name\":\"minecraft:seagrass\", 
\"states\":{ \"sea_grass_type\":\"default\" }, 
\"version\":17959425 },{ \"name\":\"minecraft:water\",
\"states\":{ \"liquid_depth\":0 }, 
\"version\":17959425 }},90%water"
```
&emsp;&emsp;随机 1 比 3 红色染色玻璃和白色羊毛
```
1%stained_glass:14,3%wool:0
```
:::
---
order: 5
icon: linter
---

# 选区操作

&emsp;&emsp;选择了选区之后，真正有趣的部分就要开始了。现在，你可以对你的选区进行各种功能各样的操作。

## 设置选区内所有方块

```text
/set <方块图案>
```

## 绘制绳索

```text
/rope <方块图案> [额外长度百分比] [粗细] [-h]
```

&emsp;&emsp;`-h` ：仅生成外表

&emsp;&emsp;在长方体选区的两个顶点之间，或凸多面体选区顶点之间绘制绳索。只能与长方体选区或凸多面体选区一起使用。

## 绘制直线

```text
/line <方块图案> [粗细] [-hcr] 
```

&emsp;&emsp;`-h` ：仅生成外表

&emsp;&emsp;在长方体选区的两个顶点之间，或凸多面体选区顶点之间绘制线段。只能与长方体选区或凸多面体选区一起使用。

## 绘制曲线

```text
/curve <方块图案> [粗细] [-hcr]
```

&emsp;&emsp;`-h` ：仅生成外表

&emsp;&emsp;`-c` ：针对凸多面体选区，生成连接首尾的环形曲线。

&emsp;&emsp;`-r` ：给曲线添加一些随机变化

&emsp;&emsp;通过选择的点绘制曲线。只能用于凸多面体或曲面选区。

::: tip

&emsp;&emsp;对于曲面选区，`粗细` 选项被替换为了数目，意味着会在某个方向上在曲面上放置 设置数目的曲线。

&emsp;&emsp;`-h` ：此选项对于曲面选区意味着换个轴向生成曲线。
:::

## 生成尖刺

```text
/spike <方块图案> <半径1> <半径2> [半径3] [-hcr] 
```

&emsp;&emsp;`-h` ：仅生成外表

&emsp;&emsp;`-c` ：针对凸多面体选区，生成连接首尾的环形曲线。

&emsp;&emsp;`-r` ：给曲线添加一些随机变化

&emsp;&emsp;通过选择的点绘制按半径变换粗细的尖刺。只能用于凸多面体选区。

## 替换方块

```text
/rep <要替换掉的方块> <用于替换的方块图案>
```

::: tip

&emsp;&emsp;将所有原石方块替换为白色羊毛方块

```text
/rep stone wool
```

&emsp;&emsp;将泥土和草方块都替换为钻石矿

```text
/rep grass_block,dirt diamond_ore
```

&emsp;&emsp;将空气方块替换为红石矿

```text
/rep air redstone_ore
```

:::

## 表面覆盖

```text
/overlay <方块图案>
```

&emsp;&emsp;该命令允许你在选区内的方块表面覆盖一层另一种方块。

::: tip
&emsp;&emsp;在选区上覆盖草方块

```text
/overlay grass_block
```

:::

## 设置中心方块

```text
/center
```

&emsp;&emsp;设置中心方块，根据选区中心的位置确定轴向上有几个方块，一般每轴一到两个。

## 自然化

```text
/naturalize
```

&emsp;&emsp;这个指令会使用泥土与草方块“自然化”选区内容，以顶层草方块，下方 3 格泥土方块替换选区中的石头方块，其他方块不会进行改变。这个命令是一个需要使一个区域“看起来自然”时可以使用的简单指令。

## 建立墙壁

```text
/walls <方块图案>
```

&emsp;&emsp;`/walls` 命令只会在你的选区四周创建墙壁，即会忽略房顶与地板。

::: tip
&emsp;&emsp;对于曲面选区，此命令会对曲面描边。
:::

## 建立表面

```text
/faces <方块图案>
```

&emsp;&emsp;为选区建造表面方块。

::: tip
&emsp;&emsp;对于曲面选区，此命令一般与 `/set` 相同，因为曲面本身就是表面。
:::

## 平滑化

```text
/smooth [模糊半径] [高度图蒙版]
```

&emsp;&emsp;如果你需要使一个粗糙的物体（如粗糙的山）更加平滑，这个指令可以做到。首先确认你选择了整个区域的选区，之后再使用命令。此外可以额外注明模糊半径，默认为 5 。

## 移动

```text
/move [距离] [方向] [填充方块图案] [-as]
```

&emsp;&emsp;`-s` 表示将选区连同其内容移动到被移动的位置（默认情况下，选区的内容被移动后，选区仍留在原处）

&emsp;&emsp;`-a` 忽略空气方块

&emsp;&emsp;如果你建了一些东西，然后发现你需要把它向一边移动一点，这个命令十分好用，因为它可以移动整个选区的内容。

&emsp;&emsp;这个命令接受一个需要移动的距离，一个可选的方向，和一个填充移动后留下的空白的方块图案。

::: tip

&emsp;&emsp;将选区向上移动2格

```text
/move 2 up
```

&emsp;&emsp;默认情况下，你不需要提供一个填充用方块，留下的区域将会是空气方块。如果你需要，可以指定另一种方块（方块样式）。

&emsp;&emsp;将选择区域内容向朝向方向移动 2 方块，原位置留下石头

```text
/move 2 me stone
```

&emsp;&emsp;将选区内容向下移动 2 方块，复制空气方块

```text
/move 2 down
```

&emsp;&emsp;将选区内容向下移动 2 方块，同时移动选区，复制空气方块

```text
/move 2 down air -s
```

:::

## 堆叠

```text
/stack <次数> [方向] [-asl]
```

&emsp;&emsp;`-s` 表示将选区移动到最后一个被堆叠的位置

&emsp;&emsp;`-a` 忽略空气方块

&emsp;&emsp;`-l` 每次只平移一个方块

&emsp;&emsp;这个命令会向你所看的方向重复放置你的选区内容。你可以用这个命令延长桥梁、建造隧道或地铁，以及其他重复同一种结构的操作。

::: tip

&emsp;&emsp;将选区内容堆叠 50 次

```text
/stack 50
```

&emsp;&emsp;将选区内容向上堆叠 5 次

```text
/stack 5 up
```

:::

## 变形

```text
/deform <表达式…>
```

## 任意表达式图像生成

```text
/gen <方块图案> <表达式…> [-h]
```

&emsp;&emsp;`-h` 会生成空心形状。只有与不属于形状的方块相邻的方块会被放置。

::: tip

例子：生成一个外半径0.75，内半径0.25的环面

```text
/gen stone "(0.75-sqrt(x^2+y^2))^2+z^2<0.25^2"
```

例子：粗糙的空心树

```text
/gen log "(0.5+sin(atan2(x,z)*8)*0.2)*(sqrt(x*x+z*z)/0.5)^(-2)-1.2<y" -h
```

例子：彩虹环面

```text
/gen "wool:'(32+16/2/pi*atan2(x,y))%16'" "(0.75-sqrt(x^2+y^2))^2+z^2<0.25^2"
```

例子：彩虹蛋

```text
/gen "wool:'(32+y*16+1)%16'" "y^2/9+x^2/6*(1/(1-0.4*y))+z^2/6*(1/(1-0.4*y))<0.08"
```

例子：心形

```text
/gen "wool:14" "(z/2)^2+x^2+(5*y/4-sqrt(abs(x)))^2<0.6"
```

例子：正弦波

```text
/gen stained_glass "sin(x*5)/2<y" -h
```

例子：环形余弦波

```text
/gen stained_glass "cos(sqrt(x^2+z^2)*5)/2<y" -h
```

例子：圆形双曲面

```text
/gen stone "-(z^2/12)+(y^2/4)-(x^2/12)>-0.03"
```

例子：选区方块内容法线

```text
/gen "'abs(normalx())'%concrete:'14+(normalx()<0)',
'abs(normaly())'%concrete:'5+10*(normaly()<0)',
'abs(normalz())'%concrete:'11+4*(normalz()<0)'" "issurface()"
```

:::

## 挖空

```text
/hollow [粗细]
```

&emsp;&emsp;清空此选区中包含的物体。厚度是以曼哈顿距离来测量的。

## 移除选区内指定数量的指定物品

```text
/removeitem <物品> [数量] [数据值]
```

&emsp;&emsp;不填则移除所有物品。

## 放置图片

```text
/image file [文件名] [翻转类型] [旋转类型]
/image link [链接] [翻转类型] [旋转类型]
```

&emsp;&emsp;将图片放置到片形选区中，包括曲面。图片可使用服务器内的，也可用链接指向其他网站图床的图片。
&emsp;&emsp;翻转类型有 `none`，`filpu`，`filpv`，`filpuv`。
&emsp;&emsp;旋转类型有 `none`，`rotate90`，`rotate180`，`rotate270`。

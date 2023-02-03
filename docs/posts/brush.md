---
order: 7
icon: decorate
---
# 笔刷

::: tip
笔刷默认为无蒙版，默认大小为 2，默认高度为 1 。
:::

## 笔刷蒙版

```text
/bmask [函数蒙版]
```

&emsp;&emsp;设置当前手持笔刷的蒙版。当蒙版为空时，会取消笔刷蒙版。

## 笔刷大小

```text
/bsize <大小>
```

&emsp;&emsp;设置当前手持笔刷的大小。

## 颜色笔刷

```text
/brush color <方块图案> [半径] [密度] [不透明度] [是否使用真实颜料混合]
/brush color <R> <G> <B> [半径] [密度] [不透明度] [是否使用真实颜料混合]
```

&emsp;&emsp;可以通过方块，或者浮点颜色指定笔刷的颜色，密度控制笔刷平滑过渡的范围，是否使用真实颜料混合控制笔刷的颜色混合方式。

## 混合笔刷

```text
/brush mix [半径] [密度] [不透明度] [是否使用真实颜料混合]
```

&emsp;&emsp;密度控制笔刷平滑过渡的范围，是否使用真实颜料混合控制笔刷的颜色混合方式。

## 平地笔刷

```text
/brush flat [半径] [密度]
```

&emsp;&emsp;密度控制笔刷平滑过渡的范围

## 球形笔刷

```text
/brush sphere <方块图案> [半径] [-h]
```

&emsp;&emsp;`-h` 会生成空心形状。

## 圆柱形笔刷

```text
/brush cyl <方块图案> [半径] [高度] [-h]
```

&emsp;&emsp;`-h` 会生成空心形状。

## 立方体笔刷

```text
/brush cube <方块图案> [半径] [-h]
```

&emsp;&emsp;`-h` 会生成空心形状。

## 平滑笔刷

```text
/brush smooth [半径] [模糊半径] [密度]
```

&emsp;&emsp;模糊半径越大越平滑，密度控制平滑过渡的范围

## 剪贴板笔刷

```text
/brush gravity [-oa]
```

&emsp;&emsp;`-o` 会使用玩家复制时的坐标而非剪贴板中心。
&emsp;&emsp;`-a` 会忽略空气方块。

## 高度图笔刷

```text
/brush heightmap file [文件名] [半径] [高度] [-r]
/brush heightmap link [链接] [半径] [高度] [-r]
```

&emsp;&emsp;`-r` 会让高度图随玩家视角旋转 90 度的整数倍。

## 设置笔刷或工具右键是否使用表面的方块

```text
/ruseface <true|false>
```

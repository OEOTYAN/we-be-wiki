---
order: 7
icon: decorate
---
# 笔刷

::: tip
笔刷默认为无蒙版，默认大小为 2，默认高度为 1 。
:::

## 笔刷蒙版

```
/bmask [函数蒙版]
```

&emsp;&emsp;设置当前手持笔刷的蒙版。当蒙版为空时，会取消笔刷蒙版。

## 笔刷大小

```
/bsize <大小>
```

&emsp;&emsp;设置当前手持笔刷的大小。

## 球形笔刷

```
/brush sphere <方块图案> [半径] [-h]
```
&emsp;&emsp;`-h` 会生成空心形状。

## 圆柱形笔刷

```
/brush cyl <方块图案> [半径] [高度] [-h]
```
&emsp;&emsp;`-h` 会生成空心形状。

## 立方体笔刷

```
/brush cube <方块图案> [半径] [-h]
```
&emsp;&emsp;`-h` 会生成空心形状。

## 平滑笔刷
```
/brush smooth [半径] [模糊半径]
```

## 重力笔刷

```
/brush gravity [半径] [-h]
```
&emsp;&emsp;`-h` 会干扰整个维度的高度，而非笔刷半径内。

## 剪贴板笔刷

```
/brush gravity [-oa]
```
&emsp;&emsp;`-o` 会使用玩家复制时的坐标而非剪贴板中心。
&emsp;&emsp;`-a` 会忽略空气方块。

## 高度图笔刷

```
/brush heightmap file [文件名] [半径] [高度] [-r]
/brush heightmap link [链接] [半径] [高度] [-r]
```
&emsp;&emsp;`-r` 会让高度图随玩家视角旋转 90 度的整数倍。
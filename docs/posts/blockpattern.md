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

```text
名称\Id[:数据值][,...]
```

::: tip
&emsp;&emsp;匹配所有种类的混凝土

```text
concrete
```

&emsp;&emsp;匹配所有种类沙子和草方块

```text
sand,grass
```

&emsp;&emsp;匹配红色染色玻璃和白色羊毛

```text
stained_glass:14,wool:0
```

:::

## 方块图案

&emsp;&emsp;方块图案有许多种，分别有着不同的作用。

### 方块列表

格式通常为：

```text
占比(小数或函数)%(名称\Id(整数或函数)[:数据值(整数或函数)])\SNBT[,...]
```

::: info
&emsp;&emsp;方块支持 JE 的命名。

&emsp;&emsp;不填数据值默认为 0 ，函数向整数舍入为四舍五入，函数必须用单引号括起来，SNBT 后不可加特殊值，SNBT中的 `"` 可能需要用 `\"` 代替。

&emsp;&emsp;当占比总和为 0 时，此处不进行任何操作。

&emsp;&emsp;SNBT 可直接使用方块的，也可以再套一层大括号，那么会根据顺序获取方块，额外方块，方块实体。方块实体（如定义容器内物品）和额外方块（如水）不是必须的。

:::
::: danger
**非专业人士请不要尝试使用 SNBT ，任何一点语法错误就极有可能导致客户端崩溃。**
:::
::: tip
&emsp;&emsp;白色混凝土

```text
concrete
```

&emsp;&emsp;随机颜色混凝土

```text
"concrete:'rand()*16'"
```

&emsp;&emsp;随机 1 比 3 红色染色玻璃和白色羊毛

```text
1%stained_glass:14,3%wool:0
```

:::

### 剪贴板图案

```text
#clipboard
```

&emsp;&emsp;当图案为剪贴板时，会平铺剪贴板内容，加上@可控制偏移，加上@c可以中心偏移而非角落。

::: tip

```text
#clipboard@c[1,0,0]
```

&emsp;&emsp;已作用点或选区中心向x轴正方向偏移1格为起点，循环平铺剪贴板中的内容。

:::

### 手持方块图案

```text
#hand
```

&emsp;&emsp;放置手持的方块。

### 变亮图案

```text
#lighten
#lighten[需要/不需要的列表]
```

&emsp;&emsp;首先会获取当前方块所在的方块梯度列表，随后按列表的先后顺序选择更亮的方块进行放置，
可以在后面加上中括号，屏蔽方块梯度组或者调用方块梯度组，默认的组是`[nc]`，在文件夹的`mappings\block_gradient.json`中可以添加或删除方块梯度组，
如果有自定义的组，例如`"aa"`，那么默认不会调用，需要写`#lighten[aa]` 才可使用，如果要在使用`aa`时屏蔽`nc`，需要写`#lighten[!nc,aa]`，只想屏蔽某个小类，需要写：
`#lighten[!nc:grey,aa]`以此类推。

### 变暗图案

```text
#darken
#darken[需要/不需要的列表]
```

&emsp;&emsp;首先会获取当前方块所在的方块梯度列表，随后按列表的先后顺序选择更暗的方块进行放置，
可以在后面加上中括号，屏蔽方块梯度组或者调用方块梯度组，默认的组是`[nc]`，在文件夹的`mappings\block_gradient.json`中可以添加或删除方块梯度组，
如果有自定义的组，例如`"aa"`，那么默认不会调用，需要写`#darken[aa]` 才可使用，如果要在使用`aa`时屏蔽`nc`，需要写`#darken[!nc,aa]`，只想屏蔽某个小类，需要写：
`#darken[!nc:grey,aa]`以此类推。

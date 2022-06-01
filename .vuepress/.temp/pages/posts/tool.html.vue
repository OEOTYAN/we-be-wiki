<template><div><h1 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h1>
<h2 id="按键" tabindex="-1"><a class="header-anchor" href="#按键" aria-hidden="true">#</a> 按键</h2>
<p>工具通常有左键和右键两个触发选项，对应了不同的触发内容。</p>
<h2 id="木斧" tabindex="-1"><a class="header-anchor" href="#木斧" aria-hidden="true">#</a> 木斧</h2>
<p>  众所周知，WorldEdit 中使用木斧进行选区的设置，在 WorldEdit-BE 中也是如此。你可以从背包中掏出一把木斧进行选区的选择。</p>
<h2 id="远程法杖" tabindex="-1"><a class="header-anchor" href="#远程法杖" aria-hidden="true">#</a> 远程法杖</h2>
<p>  小木斧只能选择玩家平常可使用、可破坏的方块，对于稍远一些的方块小木斧就无能为力了，这时可以在手上拿着其他工具，例如 <code v-pre>钻石斧</code>
接着输入：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/tool farwand
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>便可将钻石斧绑定为远程法杖工具，这时你就可以选择非常远的点啦。其他用法与普通木斧一致。</p>
<h2 id="方块信息工具" tabindex="-1"><a class="header-anchor" href="#方块信息工具" aria-hidden="true">#</a> 方块信息工具</h2>
<p>  有时我们会需要方块的 <code v-pre>SNBT</code>，<code v-pre>方块 Id</code>，<code v-pre>方块数据值</code>，<code v-pre>方块实体 SNBT</code> 等内容，这时我们可以给手上的工具绑定为:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/tool info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>便可右键方块，获取方块的这些信息啦，为了方便复制，在后台也会输出相同内容。</p>
</div></template>

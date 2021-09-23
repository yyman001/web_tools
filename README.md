# 个人前端工程师开发工具记录

[github地址](https://github.com/yyman001/web_tools)
我们前端,每个人都有自己的开发工作环境,工具等,所以我写了这一篇文章,为自己方便把自己常用的**`前端工具`**记录下来,以便到时候在新的电脑上可以快速搭建自己熟悉的工作环境和使用自己熟悉的工具,同时可能也会对你有少少的帮助吧!

## 前端环境需要的软件
- [nvm](https://github.com/nvm-sh/nvm) 管理node 版本, [nvm-windows](https://github.com/coreybutler/nvm-windows)
- [node][1] 如果不需要多个node版本管理，直接下载这个（不推荐）
- [npm][2] , [cnpm][3] ,nrm 包镜像地址管理, [spm][4] 安装可以更换淘宝的安装包地址([淘宝镜像][5])
- [pnpm 全新包管理](https://github.com/pnpm/pnpm)
- [nrm 包链接管理](https://github.com/Pana/nrm)

- [Ruby][6](git依赖)
- [git-ssh 配置和使用](https://segmentfault.com/a/1190000002645623) [coding](https://coding.net/help/doc/git/ssh-key.html)
- [gulp][10] 下面会列出常用插件 , [ F.I.S (百度前端工具框架)][11]
- [sass][12] [教程][13]/ [less][14]
- [sass文件编译方案](https://github.com/yyman001/any_question/issues/10) 
- `git`还有另外一个工具(在xp,win7上可用还是图形的哦,还有文章) [点我][15]

### 安装顺序

1.安装`node环境`,安装完成就即可使用 `npm`

方法一： nvm 安装（官网默认下载安装即可）， 找node 官网找到需要安装的 [node version](https://nodejs.org/en/download/releases/)，
使用命令行
```cmd
#查看安装node 12.22.6, 64位版本
nvm install 12.22.6 64
#查看已安装的node版本列表
nvm list
#使用某版本
nvm use 12.22.6
#后面直接使用npm即可
```

方法二： 直接下载 node 应用程序安装即可

2.安装依赖包管理,更多用法请移步到nrm包官网
```js
// 全局安装
npm i nrm - g

// 参考说明文章  https://juejin.cn/post/6969450118839795749
npm i pnpm -g

// 帮助
nrm help

// 查看列表
nrm ls
// eg:
// # 带有 * 为当前安装依赖源
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/

// 切换源(镜像)
nrm use taobao

// 添加源
// eg:
nrm add taobao https://registry.npm.taobao.org/

// yarn
npm install --global yarn 或 npm i -g yarn

// 快速删除 node_modules
npm i -g npkill
```

### npm 常用工具包（可选）
```js
// gulp [使用 gulp 构建工程][16]
npm i gulp 

//Webpack
npm i -g webpack

//Browsersync
npm i -g browser-sync

// Debug log输出
npm i debug

```
3.安装`ruby`,`（win7-8,win10选择 2.0以上的版本）` [window 安装 sass compass 记录][17]
安装注意:`全部打钩`,安装在哪里都可以 [根据需求,一般默认C盘]，安装完毕, 重启 `cmd` , 输入 `gem` 命令
```cmd
如果提示"RubyGems is a sophisticated package manager for Ruby. This is a basic help message containing pointers to more information. ",即安装成功.
```

3.1更换淘宝镜像，(使用`nrm`或`代理`)可以跳过这步骤
```cmd
#删除默认
gem sources --remove https://rubygems.org/
#添加镜像
gem sources --add https://gems.ruby-china.org/
#or
gem sources --add http://gems.ruby-china.org/

#winodws 添加会因为SSL证书问题出错
Error fetching https://gems.ruby-china.org/:
SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: sslv3 alert handshake failure (https://gems-ruby-china.b0.aicdn.com/specs.4.8.gz)
#解决办法？FUCK,翻墙吧or洗洗睡
#查看列表
gem sources -l
#正常情况会输入如下信息
*** CURRENT SOURCES ***
https://gems.ruby-china.org/
# 请确保只有 gems.ruby-china.org

```
3.2 安装sass  （可选）
```cmd
gem install sass
#是否安装成功
sass -v
#输出信息
Sass 3.4.9 (Selective Steve)
```
3.3 安装`compass` （可选）
```cmd
gem install compass
#是否安装成功
compass -v
#输出信息
Compass 1.0.1 (Polaris)
Copyright (c) 2008-2014 Chris Eppstein
Released under the MIT License.
Compass is charityware.
Please make a tax deductable donation for a worthy cause: http://umdf.org/compass
```

## git 工具
- [git-for-windows][7]
- [TortoiseGit][8] 乌龟
- [SourceTree][9] / [SourceTree 证书下载](https://my.atlassian.com/products/index?sen=4337761#license_4337761)
- [Git Extensions](https://github.com/gitextensions/gitextensions) 缺点: 需要自己定义第三方differ工具
- [Sublime Merge](https://www.sublimemerge.com/) 优点: 自动隐藏交叉合并,分支更清晰 缺点:只支持x64

## 编辑器IDE
- [WebStrom](https://www.jetbrains.com/webstorm/) `推荐` [配置在底部](#webstorm配置)
- [vs code](http://www.vscode.org/) `推荐` [配置在底部](#user-content-vscode%E9%85%8D%E7%BD%AE)
- [ATOM](http://www.atom.io)
- [sublime_text][20]([文章介绍][21])
- [HBuilder][22]

## 尝试工作流工具/手架
- [tmt-workflow](https://github.com/Tencent/tmt-workflow) 感觉不好用
- [WeFlow](https://weflow.io/) tmt-workflow的桌面版 ，也感觉不好用
- [iview](https://www.iviewui.com/cli) iview ui自己的手架开发工具
- [vue-cli](https://github.com/vuejs/vue-cli/) vue spa 方式的手架
- [Amazing-Windows-Apps](https://github.com/AmazingApps/Amazing-Windows-Apps)

## 常用工具列表：
- [github start收藏项目管理工具-AStral](https://app.astralapp.com/dashboard/untagged)
- [jsinspect 重构,检测相似的代码片](https://github.com/danielstjules/jsinspect)
- [Shadowsocks 科学上网 带有一个免费账号 https://github.com/yyman001/software]   (https://github.com/shadowsocks/shadowsocks-windows)
- [Beyond Compare 4](http://www.cr173.com/soft/20948.html) 文件对比
- [cmder(类似cmd的命令提示符,有自带git版本)][23]  [配置教程][24]
- [WeChatPlugin-MacOS 微信小助手-调试开发](https://github.com/TKkk-iOSer/WeChatPlugin-MacOS)
- [Notepad++][29] 不解释
- 计算器 不解释
- 右键助手1.0 ([我自己开发的,详细点这里][31]) ,彗星小助手（取色） , W3Cfuns前端开发工具箱 ([到百度分享查看下载地址][32])
- AdobeDreamweaverCS4 写表格,热点图
- FlashFXP (ftp上传工具)
- [Markdown Pad 2][35] (写Markdown格式文档必备的软件,我文章是用在线版)
- [Winmerge][36] 开源的文件比较工具(如果你不能使用Beyond Compare)
- [DocBlockr](http://pythonhackers.com/os/spadgos/sublime-jsdocs) Sublime Text 2/3-注释生成插件
- [JSDOC 注释文档生成工具](http://www.html-js.com/article/JSDOC-introduction-JSDOC-entry)
- [字体解决方案1-字蛛是一个中文字体压缩器,让网页自由引入中文字体成为可能](http://font-spider.org/)
- [字体解决方案2-Fontmin,第一个纯 JavaScript 字体子集化方案](http://ecomfe.github.io/fontmin/)
- [docker GUI - Now part of the Docker Toolbox](https://github.com/docker/kitematic)

## 模拟数据/请求工具
- [Easy Moc](https://www.easy-mock.com/) 模拟数据最好方案,提供的功能非常强大
- [postwoman 在线](https://postwoman.io/?ref=producthunt)
- [postman 测试请求接口](https://www.getpostman.com/)

## css 工具
- [把CSS代码转成SASS的应用](http://css2sass.herokuapp.com/)
- [CSS Sprites 样式生成工具][33]
- [koala考拉][25](Less、Sass、Compass、CoffeeScript编译) ----免费

## 设计
- [Mark 马克鳗][26] (设计图测量)
- [PxCook 像素大厨 智能标注绝对可以解放双手了，强烈推荐。](http://www.fancynode.com.cn/pxcook)
- [Assistor PS](https://en.freedownloadmanager.org/Windows-PC/Assistor-PS.html) \(切图工具\)

## 正则
- [在线正则regex pal][73]
- [正则图形显示][74]
- [Expresso][37]是一个.NET版本的正则表达式编辑器。可以测试你的正则表达式。
- Regex Match Tracer 2.1 (正则工具)
	
## 服务器
- [nginx]
- [brower-sync 自动刷新页面-多端同步,支持gulp](http://www.browsersync.cn/)
- WampServer 搭建PHP环境服务器
- [phpStudy php搭建环境,包含多个版本随便切换](http://www.phpstudy.net/a.php/211.html)
- MyWebServer 迷你型服务器
- [F5][28] 自动刷新浏览器(本地开发)
- [小苹果服务器][27](手机调试专用win7以上)
	
## 抓包/数据拦截
- [whistle](https://github.com/avwo/whistle/blob/master/README-zh_CN.md)
- [Fiddler2 数据拦截](https://www.telerik.com/fiddler) 或 360管理软件下载
	
## 图片处理
- Photoshop CS4/CS6 不解释,PS插件?建议去 [设计优][30]
- [如此简单的到达 PNG 无损压缩的极限](http://nullice.com/limitPNG/)
- [APNG Software 转APNG软件](http://littlesvr.ca/apng/)
- [iSparta 图片压缩](http://isparta.github.io/)
- [limitPNG 图片压缩](http://nullice.com/limitPNG/)
- [智图客户端](https://zhitu.isux.us/index.php/preview/download)
- [雪碧图合并 Cyotek Spriter ](http://www.ouyaoxiazai.com/soft/hyrj/146/47002.html)
- [雪碧图合并 TexturePackerGUI - 这个厉害点,支持生成雪碧图后的坐标值文件](https://www.codeandweb.com/texturepacker)
- [gka 是一款简单的、高效的帧动画生成工具，图片处理工具,快速制作高性能帧动画解决方案](https://github.com/gkajs/gka)
- [熊猫png压缩][67]
- [智图(多种图片压缩)][68]
- [雪碧图坐标查询][69]
- [在线切图工具][71] (最近找到的,不知道如何,欢迎大家测试)	
- [SETUNA2][34] (图片裁剪对比)

## 页面性能分析工具 
- [gtmetrix 网站性能分析 - 推荐][38] 不想用插件工具就直接访问网页吧
- [WebPagetest][39] 一款非常优秀的网页前端性能测试工具 [国外在线地址][40] [国内阿里在线地址][41]
- 谷歌插件 [PageSpeed][42] (页面性能检测优化 - 我自己测试卡到一半?我浏览器逗比?)
- 谷歌插件 [Google Web Tracing Framework][43] (持移动、PC，性能分析的神器,又一个鸡文,反正我是不懂怎么用~)
- 火狐请参考 `YSlow`
- [web应用性能检测][44]-百度只支持移动端页面
- [性能检测工具Tracker.js][45]
- 他的谷歌插件, `WEB前端助手(FeHelper)`

## 火狐浏览器插件
- Firebug
- YSlow 性能检测
- JSONView 在页面查看那json数据
- CSSUsage 检测无效css
- Dust-Me Selectors 检测页面css沉余
- FireQuery jq语法高亮
- FireRainbow js语法高亮
- HtmlValidator html文档标准检测
- NoScript 控制页面和浏览器js
- [FireGestures][46] 用鼠标手势命令
- [Adblock Edge][47] 广告过滤
- webDeveloper1.2.2-(zh-cn) 中文版,[点我][48] （除了最后一个网上可能找不到中文版）

## 谷歌浏览器插件
- [Sight](https://chrome.google.com/webstore/detail/sight/epmaefhielclhlnmjofcdapbeepkmggh) 通过各种主题和字体选项，Sight将网站的源代码以更为视觉舒适的形式强调。
- [海淘访问助手](http://www.haitaojiasu.pw/) -免费翻墙谷歌插件-强烈推荐
- [octotree ](https://github.com/buunguyen/octotree) 看github的时候生成项目tree 推荐
- [Awesome Autocomplete for GitHub](https://chrome.google.com/webstore/detail/awesome-autocomplete-for/djkfdjpoelphhdclfjhnffmnlnoknfnd)  - github搜索异步查询结果
- [Quick CSS 快速在 Chrome 开发环境检测 CSS 代码的规范性](http://ued.qunar.com/mobile/devtools/css-extensions/)
- [AlloyDesigner ](http://alloyteam.github.io/AlloyDesigner/) 嵌入式开发插件-详情自己看连接
- [Web Developer][49] (居然被我找到谷歌版的,不过是英文的,不错了)
- [Window Resizer][50] (允许你快速调整浏览器窗口分辨率)
- [CSSViewer][51] (浮动面板简单显示CSS属性)
- [Wappalyze][52] (分析网站使用什么技术,优化的时候可以看人家网站使用什么技术)
- [IE Tab][53] (直接在Chrome中使用IE渲染引擎模仿IE,IE6、IE7、IE8和IE9,扩展目前仅适用于Windows系统,感觉有点不靠谱)
- [Clear Cache][54](能让你从工具栏中清除缓存)
- [Image Downloader][55] (批量下载图片)
- 谷歌加速插件 替换一些需要翻墙才能链接的js替换为国内链接
- JetBrains IDE Suport (配合WS 在浏览器同步刷新,似乎在谷歌高版本已经无效,如果你不使用ws,可以配合gulp的插件,也可以实现同步更新)
- [ReRes][56] 开发的时候替换测试路径为本地,实际是上线后的地址
- Enable Copy 去除右键限制
- ~~JSON View 查看json格式数据~~
- WEB前端助手(FeHelper)_v5.8
- 有道云笔记网页剪报 (保存页面到有道笔记本)
- Firebug Lite 谷歌用火狐插件(哈哈,开发者用火狐提供的ie火狐js搞的吧)
- [网址转二维码][57] (手机测试中有用,扫描就打开测试地址了)
- ScriptSafe汉化版 (可以控制页面的js脚本)
- Word Count 是一款用来统计选中网页的字数，支持中文的扩展。
- Chrono下载管理器(https://chrome.google.com/webstore/detail/chrono-download-manager/mciiogijehkdemklbdcbfkefimifhecn)
- [ShoeBox 雪碧图-支持多款游戏js框架](http://renderhjs.net/shoebox/)

### 其他软件工具
- [Flux][59] 调整屏幕亮度,暖色调
- [ADSafe][60] 过滤广告
- [Everything][61] 快速查询
- [Wise Registry Cleaner][62] 注册表清理
- [Clover][63] 让你的Windows资源管理器拥有像谷歌浏览器一样好用的多标签页
- [360云盘][64] 同步数据文件
- [有道云笔记][65] 协作同步开发
- Proxy SwitchySharp 代理工具,翻墙用的,需要自己找账号信息填写哦
- [Snipaste 截图工具](https://zh.snipaste.com/)
- [Q-Dir 多窗口文件夹管理]
- [Xmanager Enterprise 5 远程服务器连接xshell]
- [自同步（zisync） 多电脑同步数据](https://baike.baidu.com/item/%E8%87%AA%E5%90%8C%E6%AD%A5/12732326)

### 其他一些网上工具
- [使用GUI快速创建SVG path](http://anthonydugois.com/svg-path-builder/)
- [resizr 测试  CSS media queries 的轻量级应用-需要线上地址,没有线上地址,可以搞个coding-git](http://resizr.co/)
- [中国开源在线工具][66]
- [cssanimate动画制作工具][70]
- [配色方案][72](美工的工具)
- [CSS3/HTML5/SVG 兼容性查询表][75]
- [WhatTheFont-字体查询1][76] [求字体网-字体查询2][77] [What Font is-字体查询3][78]
- [运同步多人办公](https://yiqixie.com/)
- [Google 镜像站搜集](https://github.com/sxyx2008/DevArticles/issues/99)

### gulp常用插件
- 编译Sass (gulp-ruby-sass || gulp-sass)
- 编译Map文件          (gulp-sourcemaps)
- 自动添加css前缀            （gulp-autoprefixer）
- 压缩css                    （gulp-minify-css）
- 压缩css使用的                gulp-mini-css[国产.配合清除沉余css插件后的压缩插件,跟上面的不一样哦]
- js代码校验                  （gulp-jshint）
- 合并js文件                  （gulp-concat）
- 压缩js代码                  （gulp-uglify）
- PreCSS预处理1--处理CSS优化   (cssnano)
- BASE64编码图片               (gulp-base64)
- 压缩图片                    （gulp-imagemin）
- 雪碧图 (gulp.spritesmith) https://github.com/twolfson/gulp.spritesmith
- 自动刷新页面                 （gulp-livereload）//不建议配合WS一起用(WS的自动保存,然后你懂的,但如果你不是用less或者sass开发,还是建议使用的)
- 图片缓存，只有图片替换了才压缩  （gulp-cache） //我也没用过
- 更改提醒                    （gulp-notify） //我也没用过
- 外链文件合并                  （gulp-htmlone）https://github.com/amfe/or.htmlone.gulp  //我也没用过
- 清除文件                    （del）
- 替换内容,需自定义范围内容,支持正则[常用于替换上线后的js,css文件路径]                    （gulp-replace）
- 同上,更加智能 ([gulp-rev-collector][79])
- 智图图片处理插件     ([gulp-imageisux][80])
- 将文件转成utf8编码的gulp插件([gulp-utf8-convert][81])
- 合并按模块引入的html文件([gulp-content-includer][82])
- [提取html标记内容合并到指定位置 gulp-html-merge](https://github.com/yyman001/gulp-html-merge)
- 压缩html ([gulp-minify-html][83])

### 帮助文档
- [css手册][84] 在线(里面可以下载,感谢作者:飘零雾雨)
- [jQuery手册][85] ，　[其他版本][86]
- [Zepto手册][87]
- [Less.js 中文文档][88]
- [Bootstrap 中文文档][89]
- [Underscore.js (1.8.2) 中文文档][90]
- [Backbone.js(1.1.2) API中文文档][91]
- [Vue.js 2.0 中文文档](https://cn.vuejs.org/v2/guide/)
- [avalon.js](http://avalonjs.coding.me/)
- [其他在线手册][92] 自己看吧,应该有的都有了

### WebStorm配置
- [在 WebStorm/PhpStorm 中开启对 Vue.js 的完美支持](http://lightcss.com/get-vuejs-support-in-webstorm-and-phpstorm/)
- [在WebStorm中添加Vue.js单文件组件的高亮及语法支持](http://www.itdadao.com/articles/c15a743377p0.html)
- [在webstorm中配置sass的自动编译](http://jinyanhuan.github.io/2015/04/03/sass-in-webstorm/)

### VsCode配置
- [VSCode拓展推荐（前端开发）](https://github.com/varHarrie/varharrie.github.io/issues/10)
- [Visual Studio Code 最好的功能、插件和设置](http://www.css88.com/archives/8144)
- [VS Code折腾记](http://blog.csdn.net/crper/article/details/55509477)

### Sublime Text 3配置
- [Sublime Text 3 代码片段插件](https://packagecontrol.io/packages/JavaScript%20Completions)

### webpack常用插件
- [Webpack Monitor 使用图表显示打包后文件包含内容百分比](https://github.com/webpackmonitor/webpackmonitor) 如果页面打开一直load，请修改`node_modules\_webpack-monitor@1.0.13@webpack-monitor\build\index.html` 里面js的链接
- [webpack进阶面板](https://github.com/FormidableLabs/webpack-dashboard)
- [webpack-dev-server 实时重新加载](https://github.com/webpack/webpack-dev-server/)

再一次感谢您花费时间阅读这篇文章,如果你有更好的工具,可以给我留言,其他资料还在整理当中,感谢你的阅读!

作者 [@黑色技术][96]
创建时间: 2015 年 3月 15日
更新时间: 2020 年 1月 18日

  [1]: https://nodejs.org/download/
  [2]: https://www.npmjs.com/
  [3]: https://cnpmjs.org/
  [4]: http://docs.spmjs.org/doc/
  [5]: http://npm.taobao.org/
  [6]: https://www.ruby-lang.org/zh_cn/downloads/
  [7]: https://git-for-windows.github.io
  [8]: http://download.tortoisegit.org/
  [9]: http://www.sourcetreeapp.com/
  [10]: http://gulpjs.com/
  [11]: http://fis.baidu.com/
  [12]: http://www.w3cplus.com/sassguide/install.html
  [13]: http://www.w3cplus.com/sassguide/
  [14]: http://lesscss.net/
  [15]: http://backlogtool.com/git-guide/tw/intro/intro1_1.html
  [16]: http://www.u396.com/getting-started-with-gulp.html
  [17]: http://www.cnblogs.com/yyman001/p/install_sass_compass_for_window.html
  [18]: https://www.jetbrains.com/webstorm/
  [19]: http://pan.baidu.com/s/1iVZ20#path=%252Fwebstorm
  [20]: http://www.sublimetext.com/
  [21]: http://www.codeceo.com/article/sublime-text-usage.html
  [22]: http://www.dcloud.io/
  [23]: http://bliker.github.io/cmder/
  [24]: http://bg.biedalian.com/2014/09/11/cmder.html
  [25]: http://koala-app.com/index-zh.html
  [26]: http://www.getmarkman.com/
  [27]: http://www.xbole.com/
  [28]: http://getf5.com/
  [29]: http://notepad-plus-plus.org/
  [30]: http://www.uisdc.com/
  [31]: https://www.zybuluo.com/yyman001/note/78390
  [32]: http://pan.baidu.com/s/1pJFmnAN
  [33]: http://www.cssforest.org/blog/index.php?id=129
  [34]: http://www.clearunit.com/clearup/setuna2/
  [35]: http://markdownpad.com/
  [36]: http://winmerge.org/
  [37]: http://www.ultrapico.com/Expresso.htm
  [38]: http://gtmetrix.com/
  [39]: https://github.com/WPO-Foundation/webpagetest
  [40]: http://www.webpagetest.org/
  [41]: http://alibench.com/
  [42]: https://developers.google.com/speed/pagespeed/insights_extensions
  [43]: http://google.github.io/tracing-framework/
  [44]: http://developer.baidu.com/apm/index
  [45]: http://ucren.com/tracker/docs/#quickstart
  [46]: http://www.xuldev.org/firegestures/
  [47]: https://bitbucket.org/adstomper/adblockedge/downloads
  [48]: http://pan.baidu.com/s/1pJFmnAN#path=%252F%25E5%2589%258D%25E7%25AB%25AF%25E5%25B7%25A5%25E5%2585%25B7%252F%25E7%2581%25AB%25E7%258B%2590%25E6%258F%2592%25E4%25BB%25B6
  [49]: https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm
  [50]: https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en%20
  [51]: https://chrome.google.com/webstore/detail/cssviewer/ggfgijbpiheegefliciemofobhmofgce?hl=en
  [52]: https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg?hl=en%20
  [53]: https://chrome.google.com/webstore/detail/ie-tab/hehijbfgiekmjfkfjpbkbammjbdenadd?hl=en%20
  [54]: https://chrome.google.com/webstore/detail/clear-cache/cppjkneekbjaeellbfkmgnhonkkjfpdn?hl=en%20
  [55]: https://chrome.google.com/webstore/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj%20
  [56]: https://github.com/hanan198501/ReRes
  [57]: https://chrome.google.com/webstore/detail/%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%94%9F%E6%88%90%E5%99%A8/ajaomcmkalmeeahjfdklkcjbljhbokjl?utm_source=chrome-ntp-icon
  [58]: http://yunpan.cn/cZdfChwFmEpYF
  [59]: http://www.iplaysoft.com/flux.html
  [60]: http://www.ad-safe.com/
  [61]: http://www.voidtools.com/
  [62]: http://www.wisecleaner.com/download.html
  [63]: http://clover.softonic.cn/
  [64]: http://yunpan.360.cn/
  [65]: http://note.youdao.com/
  [66]: http://tool.oschina.net/
  [67]: https://tinypng.com/
  [68]: http://image.tencent.com/
  [69]: http://www.spritecow.com/
  [70]: http://cssanimate.com/
  [71]: http://card.qdsay.com/
  [72]: http://card.qdsay.com/
  [73]: http://regexpal.com/
  [74]: http://jex.im/regulex/#!embed=false&flags=&re=%5E%28a%7Cb%29*?$
  [75]: http://caniuse.com/
  [76]: http://www.myfonts.com/WhatTheFont/
  [77]: http://www.qiuziti.com/
  [78]: http://www.whatfontis.com/
  [79]: https://github.com/shonny-ua/gulp-rev-collector
  [80]: https://www.npmjs.com/package/gulp-imageisux
  [81]: http://segmentfault.com/blog/paopao/1190000000763005
  [82]: http://segmentfault.com/blog/paopao/1190000001500298
  [83]: https://www.npmjs.com/package/gulp-minify-html
  [84]: http://css.doyoe.com/
  [85]: http://hemin.cn/jq/
  [86]: http://jquery.js-ku.com/
  [87]: http://www.css88.com/doc/zeptojs_api/
  [88]: http://www.css88.com/doc/less/
  [89]: http://bootstrap.css88.com/
  [90]: http://www.css88.com/doc/underscore/
  [91]: http://www.css88.com/doc/backbone/
  [92]: http://www.css88.com/jqueryapi
  [93]: http://www.clonegoogle.com/?gws_rd=ssl
  [94]: http://ggss.so/
  [95]: http://www.gfsswy.com/
  [96]: http://weibo.com/yyman001

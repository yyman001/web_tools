# 个人前端工程师开发工具记录


------
[github地址](https://github.com/yyman001/web_tools)
我们前端,每个人都有自己的开发工作环境,工具等,所以我写了这一篇文章,为自己方便把自己常用的**`前端工具`**记录下来,以便到时候在新的电脑上可以快速搭建自己熟悉的工作环境和使用自己熟悉的工具,同时可能也会对你有少少的帮助吧!

前端环境软件安装
> *  [node.js][1]  很多东西都需要它
> *  [npm][2] , [cnpm][3] , [spm][4] 安装可以更换淘宝的安装包地址([淘宝镜像][5])
> *  [Ruby][6](git依赖) , [msysgit][7] / [TortoiseGit][8] / [SourceTree][9][win7以上]
> *  [gulp][10] 下面会列出常用插件 , [ F.I.S (百度前端工具框架)][11]
> *  [sass][12] [教程][13]/ [less][14]
> * [sass文件编译方案](https://github.com/yyman001/any_question/issues/10) 
> * `git`还有另外一个工具(在xp,win7上可用还是图形的哦,还有文章) [点我][15]

安装顺序
先安装`node` --> `npm ` --> `gulp`
[使用 gulp 构建工程][16]
先安装`ruby` --> `git`,`sass`,`compass`
[window 安装 sass compass 记录][17]


Sublime Text 3 代码片段插件
https://packagecontrol.io/packages/JavaScript%20Completions

尝试工作流工具/手架
> * [tmt-workflow](https://github.com/Tencent/tmt-workflow)
> * [WeFlow](https://weflow.io/) tmt-workflow的桌面版
> * [iview](https://www.iviewui.com/cli) iview ui自己的手架开发工具
> * [vue-cli](https://github.com/vuejs/vue-cli/) vue spa 方式的手架


常用工具列表：

> * [Easy Moc](https://www.easy-mock.com/) 模拟数据最好方案,提供的功能非常强大
> * [WebStrom](https://www.jetbrains.com/webstorm/) 我个人比较喜欢这个软件,功能非常强大 ,[sublime_text][20]([文章介绍][21]),[HBuilder][22]
> * [vs code](http://www.vscode.org/) 和 [ATOM](http://www.atom.io)
> * [Shadowsocks 科学上网 带有一个免费账号 https://github.com/yyman001/software]   (https://github.com/shadowsocks/shadowsocks-windows)
> * [cmder(类似cmd的命令提示符,有自带git版本)][23]  [配置教程][24]
> * [koala考拉][25](Less、Sass、Compass、CoffeeScript编译) ----免费
> * [Mark 马克鳗][26] (设计图测量)
> * [PxCook 像素大厨 智能标注绝对可以解放双手了，强烈推荐。](http://www.fancynode.com.cn/pxcook)
> * [Assistor PS]() \(切图工具\)
> * [小苹果服务器][27](手机调试专用win7以上)
> * [brower-sync 自动刷新页面-多端同步,支持gulp](http://www.browsersync.cn/)
> * [F5][28] 自动刷新浏览器
> * [Notepad++][29] 不解释
> * Photoshop CS4/CS6 不解释,PS插件?建议去 [设计优][30]
> * 计算器 不解释
> * 右键助手1.0 ([我自己开发的,详细点这里][31]) ,彗星小助手（取色） , W3Cfuns前端开发工具箱 ([到百度分享查看下载地址][32])
> * AdobeDreamweaverCS4 写表格,热点图
> * [CSS Sprites 样式生成工具][33]
> * WampServer 搭建PHP环境服务器
> * MyWebServer 迷你型服务器
> * FlashFXP (ftp上传工具)
> * Regex Match Tracer 2.1 (正则工具)
> * [SETUNA2][34] (图片裁剪对比)
> * [Markdown Pad 2][35] (写Markdown格式文档必备的软件,我文章是用在线版)
> * [Winmerge][36] 开源的文件比较工具(如果你不能使用Beyond Compare)
> * [Expresso][37]是一个.NET版本的正则表达式编辑器。可以测试你的正则表达式。
> * [DocBlockr](http://pythonhackers.com/os/spadgos/sublime-jsdocs) Sublime Text 2/3-注释生成插件
> * [JSDOC 注释文档生成工具](http://www.html-js.com/article/JSDOC-introduction-JSDOC-entry)
> * [如此简单的到达 PNG 无损压缩的极限](http://nullice.com/limitPNG/)
> * [APNG Software 转APNG软件](http://littlesvr.ca/apng/)
> * [iSparta 图片压缩](http://isparta.github.io/)
> * [limitPNG 图片压缩](http://nullice.com/limitPNG/)
> * [智图客户端](https://zhitu.isux.us/index.php/preview/download)
> * [phpStudy php搭建环境,包含多个版本随便切换](http://www.phpstudy.net/a.php/211.html)
> * [字体解决方案1-字蛛是一个中文字体压缩器,让网页自由引入中文字体成为可能](http://font-spider.org/)
> * [字体解决方案2-Fontmin,第一个纯 JavaScript 字体子集化方案](http://ecomfe.github.io/fontmin/)
> * [雪碧图合并 Cyotek Spriter ]
> * [雪碧图合并 TexturePackerGUI - 这个厉害点,支持生成雪碧图后的坐标值文件]

页面性能分析工具(比较重要就不分类,直接一个大类)
> * [gtmetrix 网站性能分析 - 推荐][38] 不想用插件工具就直接访问网页吧
> * [WebPagetest][39] 一款非常优秀的网页前端性能测试工具 [国外在线地址][40] [国内阿里在线地址][41]
> * 谷歌插件 [PageSpeed][42] (页面性能检测优化 - 我自己测试卡到一半?我浏览器逗比?)
> * 谷歌插件 [Google Web Tracing Framework][43] (持移动、PC，性能分析的神器,又一个鸡文,反正我是不懂怎么用~)
> * 火狐请参考 `YSlow`
> * [web应用性能检测][44]-百度只支持移动端页面
> * [性能检测工具Tracker.js][45] - 他的谷歌插件, `WEB前端助手(FeHelper)`

火狐浏览器插件
> * Firebug
> * YSlow 性能检测
> * JSONView 在页面查看那json数据
> * CSSUsage 检测无效css
> * Dust-Me Selectors 检测页面css沉余
> * FireQuery jq语法高亮
> * FireRainbow js语法高亮
> * HtmlValidator html文档标准检测
> * NoScript 控制页面和浏览器js
> * [FireGestures][46] 用鼠标手势命令
> * [Adblock Edge][47] 广告过滤
> * webDeveloper1.2.2-(zh-cn) 中文版,[点我][48]

除了最后一个网上可能找不到中文版
[Google 镜像站搜集](https://github.com/sxyx2008/DevArticles/issues/99)
谷歌浏览器插件 --用到谷歌插件其实很少(其实我自己用的蛮多),为了方便,因为谷歌插件下载很多问题,我直接发到网盘,有需要的可以自己下载(360,猎豹应用市场也有好多应用)
> * [海淘访问助手](http://www.haitaojiasu.pw/) -免费翻墙谷歌插件-强烈推荐
> * [octotree ](https://github.com/buunguyen/octotree) 看github的时候生成项目tree 推荐
> * [Awesome Autocomplete for GitHub](https://chrome.google.com/webstore/detail/awesome-autocomplete-for/djkfdjpoelphhdclfjhnffmnlnoknfnd)  - github搜索异步查询结果
> * [Quick CSS 快速在 Chrome 开发环境检测 CSS 代码的规范性](http://ued.qunar.com/mobile/devtools/css-extensions/)
> * [AlloyDesigner ](http://alloyteam.github.io/AlloyDesigner/) 嵌入式开发插件-详情自己看连接
> * [Web Developer][49] (居然被我找到谷歌版的,不过是英文的,不错了)
> * [Window Resizer][50] (允许你快速调整浏览器窗口分辨率)
> * [CSSViewer][51] (浮动面板简单显示CSS属性)
> * [Wappalyze][52] (分析网站使用什么技术,优化的时候可以看人家网站使用什么技术)
> * [IE Tab][53] (直接在Chrome中使用IE渲染引擎模仿IE,IE6、IE7、IE8和IE9,扩展目前仅适用于Windows系统,感觉有点不靠谱)
> * [Clear Cache][54](能让你从工具栏中清除缓存)
> * [Image Downloader][55] (批量下载图片)
> * 谷歌加速插件 替换一些需要翻墙才能链接的js替换为国内链接
> * JetBrains IDE Suport (配合WS 在浏览器同步刷新,似乎在谷歌高版本已经无效,如果你不使用ws,可以配合gulp的插件,也可以实现同步更新)
> * [ReRes][56] 开发的时候替换测试路径为本地,实际是上线后的地址
> * Enable Copy 去除右键限制
> * JSON View 查看json格式数据
> * WEB前端助手(FeHelper)_v5.8
> * 有道云笔记网页剪报 (保存页面到有道笔记本)
> * Firebug Lite 谷歌用火狐插件(哈哈,开发者用火狐提供的ie火狐js搞的吧)
> * [网址转二维码][57] (手机测试中有用,扫描就打开测试地址了)
> * ScriptSafe汉化版 (可以控制页面的js脚本)
> * Word Count 是一款用来统计选中网页的字数，支持中文的扩展。
> * Chrono下载管理器(https://chrome.google.com/webstore/detail/chrono-download-manager/mciiogijehkdemklbdcbfkefimifhecn)
建议访问 [360云盘共享][58] 文件多,有点乱,自己翻  
访问密码 a505

其他软件工具
> * [Flux][59] 调整屏幕亮度,暖色调
> * [ADSafe][60] 过滤广告
> * [Everything][61] 快速查询
> * [Wise Registry Cleaner][62] 注册表清理
> * [Clover][63] 让你的Windows资源管理器拥有像谷歌浏览器一样好用的多标签页
> * [360云盘][64] 同步数据文件
> * [有道云笔记][65] 协作同步开发
> * Proxy SwitchySharp 代理工具,翻墙用的,需要自己找账号信息填写哦

其他一些网上工具
> * [使用GUI快速创建SVG path](http://anthonydugois.com/svg-path-builder/)
> * [把CSS代码转成SASS的应用](http://css2sass.herokuapp.com/)
> * [resizr 测试  CSS media queries 的轻量级应用-需要线上地址,没有线上地址,可以搞个coding-git](http://resizr.co/)
> * [中国开源在线工具][66]
> * [熊猫png压缩][67]
> * [智图(多种图片压缩)][68]
> * [雪碧图坐标查询][69]
> * [cssanimate动画制作工具][70]
> * [在线切图工具][71] (最近找到的,不知道如何,欢迎大家测试)
> * [配色方案][72](美工的工具)
> * [在线正则regex pal][73]
> * [正则图形显示][74]
> * [CSS3/HTML5/SVG 兼容性查询表][75]
> * [WhatTheFont-字体查询1][76] [求字体网-字体查询2][77] [What Font is-字体查询3][78]
> * [运同步多人办公](https://yiqixie.com/)

gulp常用插件 整理了在自己工作当中常用的一些gulp 插件
> * 编译Sass (gulp-ruby-sass || gulp-sass)
> * 编译Map文件          (gulp-sourcemaps)
> * 自动添加css前缀            （gulp-autoprefixer）
> * 压缩css                    （gulp-minify-css）
> * 压缩css使用的                gulp-mini-css[国产.配合清除沉余css插件后的压缩插件,跟上面的不一样哦]
> * js代码校验                  （gulp-jshint）
> * 合并js文件                  （gulp-concat）
> * 压缩js代码                  （gulp-uglify）
> * PreCSS预处理1--处理CSS优化   (cssnano)
> * BASE64编码图片               (gulp-base64)
> * 压缩图片                    （gulp-imagemin）
> * 雪碧图 (gulp.spritesmith) https://github.com/twolfson/gulp.spritesmith
> * 自动刷新页面                 （gulp-livereload）//不建议配合WS一起用(WS的自动保存,然后你懂的,但如果你不是用less或者sass开发,还是建议使用的)
> * 图片缓存，只有图片替换了才压缩  （gulp-cache） //我也没用过
> * 更改提醒                    （gulp-notify） //我也没用过
> * 外链文件合并                  （gulp-htmlone）https://github.com/amfe/or.htmlone.gulp  //我也没用过
> * 清除文件                    （del）
> * 替换内容,需自定义范围内容,支持正则[常用于替换上线后的js,css文件路径]                    （gulp-replace）
> * 同上,更加智能 ([gulp-rev-collector][79])
> * 智图图片处理插件     ([gulp-imageisux][80])
> * 将文件转成utf8编码的gulp插件([gulp-utf8-convert][81])
> * 合并按模块引入的html文件([gulp-content-includer][82])
> * [提取html标记内容合并到指定位置 gulp-html-merge](https://github.com/yyman001/gulp-html-merge)
> * 压缩html ([gulp-minify-html][83])

帮助文档
> * [css手册][84] 在线(里面可以下载,感谢作者:飘零雾雨)
> * [jQuery手册][85] ，　[其他版本][86]
> * [Zepto手册][87]
> * [Less.js 中文文档][88]
> * [Bootstrap 中文文档][89]
> * [Underscore.js (1.8.2) 中文文档][90]
> * [Backbone.js(1.1.2) API中文文档][91]
> * [Vue.js 2.0 中文文档](https://cn.vuejs.org/v2/guide/)
> * [avalon.js](http://avalonjs.coding.me/)
> * [其他在线手册][92] 自己看吧,应该有的都有了


在 WebStorm/PhpStorm 中开启对 Vue.js 的完美支持
http://lightcss.com/get-vuejs-support-in-webstorm-and-phpstorm/

在WebStorm中添加Vue.js单文件组件的高亮及语法支持
http://www.itdadao.com/articles/c15a743377p0.html

在webstorm中配置sass的自动编译
http://jinyanhuan.github.io/2015/04/03/sass-in-webstorm/


------

再一次感谢您花费时间阅读这篇文章,如果你有更好的工具,可以给我留言,其他资料还在整理当中,感谢你的阅读!

作者 [@黑色技术][96]
创建时间: 2015 年 3月 15日
更新时间: 2017 年 6月 22日





  [1]: https://nodejs.org/download/
  [2]: https://www.npmjs.com/
  [3]: https://cnpmjs.org/
  [4]: http://docs.spmjs.org/doc/
  [5]: http://npm.taobao.org/
  [6]: https://www.ruby-lang.org/zh_cn/downloads/
  [7]: https://msysgit.github.io/
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

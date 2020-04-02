(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{325:function(s,t,a){"use strict";a.r(t);var e=a(11),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"oh-my-zsh-应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh-应用"}},[s._v("#")]),s._v(" oh-my-zsh 应用")]),s._v(" "),a("h2",{attrs:{id:"_1-zsh-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-zsh-简介"}},[s._v("#")]),s._v(" 1. Zsh 简介")]),s._v(" "),a("h3",{attrs:{id:"_1-1-zsh-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-zsh-是什么"}},[s._v("#")]),s._v(" 1.1. Zsh 是什么")]),s._v(" "),a("p",[s._v("使用 Linux 的人都知道：*"),a("strong",[s._v("Shell_ 是一个用 C 语言编写的程序,它是用户使用 Linux 的桥梁。"),a("em",[s._v("Shell")]),s._v(" 既是一种命令语言,又是一种程序设计语言")]),s._v("。")]),s._v(" "),a("p",[s._v("Shell 的类型有很多种，linux 下默认的是 bash，虽然 bash 的功能已经很强大，但对于以懒惰为美德的程序员来说，bash 的提示功能不够强大，界面也不够炫，并非理想工具。")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://www.zsh.org/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[s._v("Zsh")]),a("OutboundLink")],1),s._v(" 也是一种 Shell（据传说 99% 的 Bash 操作 和 Zsh 是相同的），它的功能极其强大，只是配置过于复杂，起初只有极客才在用。后来，出现了一个名叫 "),a("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[s._v("oh-my-zsh")]),a("OutboundLink")],1),s._v(" 的开源项目，使用 zsh 就变得十分简易了。")]),s._v(" "),a("h2",{attrs:{id:"_2-zsh-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-zsh-安装"}},[s._v("#")]),s._v(" 2. Zsh 安装")]),s._v(" "),a("h3",{attrs:{id:"_2-1-环境要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-环境要求"}},[s._v("#")]),s._v(" 2.1. 环境要求")]),s._v(" "),a("ul",[a("li",[s._v("CentOS 6.7 64 bit")]),s._v(" "),a("li",[s._v("root 用户")])]),s._v(" "),a("h3",{attrs:{id:"_2-2-安装-zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-安装-zsh"}},[s._v("#")]),s._v(" 2.2. 安装 zsh")]),s._v(" "),a("ul",[a("li",[s._v("先看下你的 CentOS 支持哪些 shell："),a("code",[s._v("cat /etc/shells")]),s._v("，正常结果应该是这样的：")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/bin/sh\n/bin/bash\n/sbin/nologin\n/bin/dash\n/bin/tcsh\n/bin/csh\n")])])]),a("p",[s._v("如果已经有 zsh ，那么我们就不必安装了。")]),s._v(" "),a("ul",[a("li",[s._v("CentOS 安装："),a("code",[s._v("sudo yum install -y zsh")])]),s._v(" "),a("li",[s._v("Ubuntu 安装："),a("code",[s._v("sudo apt-get install -y zsh")])]),s._v(" "),a("li",[s._v("检查系统的 shell："),a("code",[s._v("cat /etc/shells")]),s._v("，你会发现多了一个："),a("code",[s._v("/bin/zsh")])])]),s._v(" "),a("h3",{attrs:{id:"_2-3-安装-oh-my-zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-安装-oh-my-zsh"}},[s._v("#")]),s._v(" 2.3. 安装 oh-my-zsh")]),s._v(" "),a("p",[s._v("使用 "),a("a",{attrs:{href:"http://www.zsh.org/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[s._v("Zsh")]),a("OutboundLink")],1),s._v("，怎么能离开灵魂伴侣 "),a("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[s._v("oh-my-zsh")]),a("OutboundLink")],1),s._v("？")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 oh-my-zsh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-4-配置-oh-my-zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-配置-oh-my-zsh"}},[s._v("#")]),s._v(" 2.4. 配置 oh-my-zsh")]),s._v(" "),a("h4",{attrs:{id:"_2-4-1-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-插件"}},[s._v("#")]),s._v(" 2.4.1. 插件")]),s._v(" "),a("blockquote",[a("p",[s._v("oh-my-zsh 插件太多，不一一列举，请参考："),a("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh-my-zsh 插件列表"),a("OutboundLink")],1)])]),s._v(" "),a("ul",[a("li",[s._v("启用 oh-my-zsh 中自带的插件。")]),s._v(" "),a("li",[s._v("查看 oh-my-zsh 插件数："),a("code",[s._v('ls -l /root/.oh-my-zsh/plugins |grep "^d"|wc -l')])]),s._v(" "),a("li",[s._v("编辑配置文件："),a("code",[s._v("vim /root/.zshrc")])]),s._v(" "),a("li",[s._v("插件推荐：\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/zsh-users/zsh-autosuggestions",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("zsh-autosuggestions")]),a("OutboundLink")],1),s._v(" "),a("ul",[a("li",[s._v("这个插件会对历史命令一些补全，类似 fish 终端")]),s._v(" "),a("li",[s._v("安装，复制该命令："),a("code",[s._v("git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-\\~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions")]),s._v(" - 编辑："),a("code",[s._v("vim \\~/.zshrc")]),s._v("，找到这一行，后括号里面的后面添加："),a("code",[s._v("plugins=( 前面的一些插件名称，换行，加上：zsh-autosuggestions)")]),s._v(" - 刷新下配置："),a("code",[s._v("source \\~/.zshrc")])])])]),s._v(" "),a("li",[s._v("extract\n"),a("ul",[a("li",[s._v("功能强大的解压插件，所有类型的文件解压一个命令 x 全搞定，再也不需要去记 tar 后面到底是哪几个参数了。")])])]),s._v(" "),a("li",[s._v("z\n"),a("ul",[a("li",[s._v("强大的目录自动跳转命令，会记忆你曾经进入过的目录，用模糊匹配快速进入你想要的目录。")])])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/zsh-users/zsh-syntax-highlighting",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("zsh-syntax-highlighting")]),a("OutboundLink")],1),s._v(" "),a("ul",[a("li",[s._v("这个插件会对终端命令高亮显示,比如正确的拼写会是绿色标识,否则是红色,另外对于一些 shell 输出语句也会有高亮显示,算是不错的辅助插件")]),s._v(" "),a("li",[s._v("安装，复制该命令："),a("code",[s._v("git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-\\~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting")])]),s._v(" "),a("li",[s._v("编辑："),a("code",[s._v("vim \\~/.zshrc")]),s._v("，找到这一行，后括号里面的后面添加："),a("code",[s._v("plugins=( 前面的一些插件名称，换行，加上：zsh-syntax-highlighting)")]),s._v(" - 刷新下配置："),a("code",[s._v("source \\~/.zshrc")])])])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mfaerevaag/wd",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("wd")]),a("OutboundLink")],1),s._v(" "),a("ul",[a("li",[s._v("简单地讲就是给指定目录映射一个全局的名字，以后方便直接跳转到这个目录，比如：")]),s._v(" "),a("li",[s._v("编辑配置文件，添加上 wd 的名字："),a("code",[s._v("vim /root/.zshrc")])]),s._v(" "),a("li",[s._v("我常去目录："),a("strong",[s._v("/opt/setups")]),s._v("，每次进入该目录下都需要这样："),a("code",[s._v("cd /opt/setups")])]),s._v(" "),a("li",[s._v("现在用 wd 给他映射一个快捷方式："),a("code",[s._v("cd /opt/setups ; wd add setups")])]),s._v(" "),a("li",[s._v("以后我在任何目录下只要运行："),a("code",[s._v("wd setups")]),s._v(" 就自动跑到 /opt/setups 目录下了")])])]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/wting/autojump",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("autojump")]),a("OutboundLink")],1),s._v(" "),a("ul",[a("li",[s._v("这个插件会记录你常去的那些目录，然后做一下权重记录，你可以用这个命令看到你的习惯："),a("code",[s._v("j --stat")]),s._v("，如果这个里面有你的记录，那你就只要敲最后一个文件夹名字即可进入，比如我个人习惯的 program："),a("code",[s._v("j program")]),s._v("，就可以直接到："),a("code",[s._v("/usr/program")])]),s._v(" "),a("li",[s._v("插件下载："),a("code",[s._v("wget https://github.com/downloads/wting/autojump/autojump_v21.1.2.tar.gz")])]),s._v(" "),a("li",[s._v("解压："),a("code",[s._v("tar zxvf autojump_v21.1.2.tar.gz")])]),s._v(" "),a("li",[s._v("进入解压后目录并安装："),a("code",[s._v("cd autojump_v21.1.2/ ; ./install.sh")])]),s._v(" "),a("li",[s._v("再执行下这个："),a("code",[s._v("source /etc/profile.d/autojump.sh")])]),s._v(" "),a("li",[s._v("编辑配置文件，添加上 autojump 的名字："),a("code",[s._v("vim /root/.zshrc")])])])])])])]),s._v(" "),a("h4",{attrs:{id:"_2-4-2-主题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-主题"}},[s._v("#")]),s._v(" 2.4.2. 主题")]),s._v(" "),a("blockquote",[a("p",[s._v("oh-my-zsh 主题太多，不一一列举，请参考："),a("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh/wiki/Themes",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh-my-zsh 主题列表"),a("OutboundLink")],1)])]),s._v(" "),a("ul",[a("li",[s._v("查看 oh-my-zsh 主题数："),a("code",[s._v('ls -l /root/.oh-my-zsh/themes |grep "^-"|wc -l')])]),s._v(" "),a("li",[s._v("个人比较推荐的是（排名有先后）：\n"),a("ul",[a("li",[a("code",[s._v("ys")])]),s._v(" "),a("li",[a("code",[s._v("agnoster")])]),s._v(" "),a("li",[a("code",[s._v("avit")])]),s._v(" "),a("li",[a("code",[s._v("blinks")])])])]),s._v(" "),a("li",[s._v("编辑配置文件："),a("code",[s._v("vim /root/.zshrc")])]),s._v(" "),a("li",[s._v("配置好新主题需要重新连接 shell 才能看到效果")])]),s._v(" "),a("p",[s._v("zsh 效果如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cloud.githubusercontent.com/assets/2618447/6316862/70f58fb6-ba03-11e4-82c9-c083bf9a6574.png",alt:"img"}})]),s._v(" "),a("h2",{attrs:{id:"_3-快捷键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-快捷键"}},[s._v("#")]),s._v(" 3. 快捷键")]),s._v(" "),a("ul",[a("li",[s._v("呃，这个其实可以不用讲的，你自己用的时候你自己会发现的，各种便捷，特别是用 Tab 多的人一定会有各种惊喜的。")]),s._v(" "),a("li",[s._v("使用 ctrl-r 来搜索命令历史记录。按完此快捷键后，可以输入关键命令词语，如果历史记录有含有此词语会显示出来。")]),s._v(" "),a("li",[s._v("命令别名： - 在命令行中输入 alias 可以查看已经有的命令别名 - 自己新增一些别名，编辑文件："),a("code",[s._v("vim \\~/.zshrc")]),s._v("，在文件加入下面格式的命令，比如以下是网友提供的一些思路：")])]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cls")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'clear'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ll")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -l'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("la")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -a'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("grep")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"grep --color=auto"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("html")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim'")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在命令行直接输入后缀为 html 的文件名，会在 Vim 中打开")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rb")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim'")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在命令行直接输入 ruby 文件，会在 Vim 中打开")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("py")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim'")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在命令行直接输入 python 文件，会用 vim 中打开，以下类似")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("js")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("c")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("java")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("txt")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'vim'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gz")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tar -xzvf'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在命令行直接输入后缀为 gz 的文件名，会自动解压打开")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("tgz")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tar -xzvf'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("zip")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'unzip'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bz2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tar -xjvf'")]),s._v("\n")])])]),a("h2",{attrs:{id:"_4-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考资料"}},[s._v("#")]),s._v(" 4. 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh-my-zsh Github"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);
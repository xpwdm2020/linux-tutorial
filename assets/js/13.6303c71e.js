(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{293:function(e,a,t){"use strict";t.r(a);var r=t(11),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"docker-快速入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-快速入门"}},[e._v("#")]),e._v(" Docker 快速入门")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E4%B8%80docker-%E7%9A%84%E7%AE%80%E4%BB%8B"}},[e._v("一、Docker 的简介")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E4%BA%8Cdocker-%E7%9A%84%E8%BF%90%E7%BB%B4"}},[e._v("二、Docker 的运维")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E4%B8%89hello-world-%E5%AE%9E%E4%BE%8B"}},[e._v("三、hello world 实例")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E5%9B%9B%E5%88%B6%E4%BD%9C-docker-%E5%AE%B9%E5%99%A8"}},[e._v("四、制作 Docker 容器")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[e._v("参考资料")])])]),e._v(" "),t("h2",{attrs:{id:"一、docker-的简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、docker-的简介"}},[e._v("#")]),e._v(" 一、Docker 的简介")]),e._v(" "),t("h3",{attrs:{id:"什么是-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-docker"}},[e._v("#")]),e._v(" 什么是 Docker")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口。")])])]),e._v(" "),t("p",[e._v("它是目前最流行的 Linux 容器解决方案。")]),e._v(" "),t("p",[e._v("Docker 将应用程序与该程序的依赖，打包在一个文件里面。运行这个文件，就会生成一个虚拟容器。程序在这个虚拟容器里运行，就好像在真实的物理机上运行一样。有了 Docker，就不用担心环境问题。")]),e._v(" "),t("p",[e._v("总体来说，Docker 的接口相当简单，用户可以方便地创建和使用容器，把自己的应用放入容器。容器还可以进行版本管理、复制、分享、修改，就像管理普通的代码一样。")]),e._v(" "),t("h3",{attrs:{id:"为什么需要-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要-docker"}},[e._v("#")]),e._v(" 为什么需要 Docker")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("更高效的利用系统资源")]),e._v(" - 由于容器不需要进行硬件虚拟以及运行完整操作系统等额外开销，"),t("code",[e._v("Docker")]),e._v(" 对系统资源的利用率更高。无论是应用执行速度、内存损耗或者文件存储速度，都要比传统虚拟机技术更高效。因此，相比虚拟机技术，一个相同配置的主机，往往可以运行更多数量的应用。")]),e._v(" "),t("li",[t("strong",[e._v("更快速的启动时间")]),e._v(" - 传统的虚拟机技术启动应用服务往往需要数分钟，而 "),t("code",[e._v("Docker")]),e._v(" 容器应用，由于直接运行于宿主内核，无需启动完整的操作系统，因此可以做到秒级、甚至毫秒级的启动时间。大大的节约了开发、测试、部署的时间。")]),e._v(" "),t("li",[t("strong",[e._v("一致的运行环境")]),e._v(" - 开发过程中一个常见的问题是环境一致性问题。由于开发环境、测试环境、生产环境不一致，导致有些 bug 并未在开发过程中被发现。而 "),t("code",[e._v("Docker")]),e._v(" 的镜像提供了除内核外完整的运行时环境，确保了应用运行环境一致性，从而不会再出现 "),t("em",[e._v("「这段代码在我机器上没问题啊」")]),e._v(" 这类问题。")]),e._v(" "),t("li",[t("strong",[e._v("持续交付和部署")]),e._v(" - 对开发和运维（"),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/DevOps",target:"_blank",rel:"noopener noreferrer"}},[e._v("DevOps"),t("OutboundLink")],1),e._v("）人员来说，最希望的就是一次创建或配置，可以在任意地方正常运行。使用 "),t("code",[e._v("Docker")]),e._v(" 可以通过定制应用镜像来实现持续集成、持续交付、部署。开发人员可以通过 "),t("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/image/dockerfile",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dockerfile"),t("OutboundLink")],1),e._v(" 来进行镜像构建，并结合 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Continuous_integration",target:"_blank",rel:"noopener noreferrer"}},[e._v("持续集成(Continuous Integration)"),t("OutboundLink")],1),e._v(" 系统进行集成测试，而运维人员则可以直接在生产环境中快速部署该镜像，甚至结合 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Continuous_delivery",target:"_blank",rel:"noopener noreferrer"}},[e._v("持续部署(Continuous Delivery/Deployment)"),t("OutboundLink")],1),e._v(" 系统进行自动部署。而且使用 "),t("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/image/build.html",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("Dockerfile")]),t("OutboundLink")],1),e._v(" 使镜像构建透明化，不仅仅开发团队可以理解应用运行环境，也方便运维团队理解应用运行所需条件，帮助更好的生产环境中部署该镜像。")]),e._v(" "),t("li",[t("strong",[e._v("更轻松的迁移")]),e._v(" - 由于 "),t("code",[e._v("Docker")]),e._v(" 确保了执行环境的一致性，使得应用的迁移更加容易。"),t("code",[e._v("Docker")]),e._v(" 可以在很多平台上运行，无论是物理机、虚拟机、公有云、私有云，甚至是笔记本，其运行结果是一致的。因此用户可以很轻易的将在一个平台上运行的应用，迁移到另一个平台上，而不用担心运行环境的变化导致应用无法正常运行的情况。")]),e._v(" "),t("li",[t("strong",[e._v("更轻松的维护和扩展")]),e._v(" - "),t("code",[e._v("Docker")]),e._v(" 使用的分层存储以及镜像的技术，使得应用重复部分的复用更为容易，也使得应用的维护更新更加简单，基于基础镜像进一步扩展镜像也变得非常简单。此外，"),t("code",[e._v("Docker")]),e._v(" 团队同各个开源项目团队一起维护了一大批高质量的 "),t("a",{attrs:{href:"https://hub.docker.com/search/?type=image&image_filter=official",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方镜像"),t("OutboundLink")],1),e._v("，既可以直接在生产环境使用，又可以作为基础进一步定制，大大的降低了应用服务的镜像制作成本。")])]),e._v(" "),t("p",[t("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/os/docker/containers-and-vm.png",alt:"img"}})]),e._v(" "),t("h3",{attrs:{id:"docker-的主要用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-的主要用途"}},[e._v("#")]),e._v(" Docker 的主要用途")]),e._v(" "),t("p",[e._v("Docker 提供了被称为容器的松散隔离环境，在环境中可以打包和运行应用程序。隔离和安全性允许您在给定主机上同时运行多个容器。容器是轻量级的，因为它们不需要管理程序的额外负载，而是直接在主机的内核中运行。这意味着您可以在给定的硬件组合上运行更多容器，而不是使用虚拟机。你甚至可以在实际上是虚拟机的主机中运行 Docker 容器！")]),e._v(" "),t("p",[e._v("Docker 的主要用途，目前有三大类。")]),e._v(" "),t("ul",[t("li",[e._v("**提供一次性的环境。**比如，本地测试他人的软件、持续集成的时候提供单元测试和构建的环境。")]),e._v(" "),t("li",[e._v("**提供弹性的云服务。**因为 Docker 容器可以随开随关，很适合动态扩容和缩容。")]),e._v(" "),t("li",[e._v("**组建微服务架构。**通过多个容器，一台机器可以跑多个服务，因此在本机就可以模拟出微服务架构。")])]),e._v(" "),t("h3",{attrs:{id:"docker-的核心概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-的核心概念"}},[e._v("#")]),e._v(" Docker 的核心概念")]),e._v(" "),t("h4",{attrs:{id:"镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像"}},[e._v("#")]),e._v(" 镜像")]),e._v(" "),t("p",[e._v("Docker 把应用程序及其依赖，打包在镜像（Image）文件里面。")]),e._v(" "),t("p",[e._v("我们都知道，操作系统分为内核和用户空间。对于 Linux 而言，内核启动后，会挂载 root 文件系统为其提供用户空间支持。而 Docker 镜像（Image），就相当于是一个 root 文件系统。比如官方镜像 ubuntu:18.04 就包含了完整的一套 Ubuntu 18.04 最小系统的 root 文件系统。")]),e._v(" "),t("p",[e._v("Docker 镜像是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像不包含任何动态数据，其内容在构建之后也不会被改变。")]),e._v(" "),t("p",[t("strong",[e._v("分层存储")])]),e._v(" "),t("p",[e._v("因为镜像包含操作系统完整的 root 文件系统，其体积往往是庞大的，因此在 Docker 设计时，就充分利用 Union FS 的技术，将其设计为分层存储的架构。所以严格来说，镜像并非是像一个 ISO 那样的打包文件，镜像只是一个虚拟的概念，其实际体现并非由一个文件组成，而是由一组文件系统组成，或者说，由多层文件系统联合组成。")]),e._v(" "),t("p",[e._v("镜像构建时，会一层层构建，前一层是后一层的基础。每一层构建完就不会再发生改变，后一层上的任何改变只发生在自己这一层。比如，删除前一层文件的操作，实际不是真的删除前一层的文件，而是仅在当前层标记为该文件已删除。在最终容器运行的时候，虽然不会看到这个文件，但是实际上该文件会一直跟随镜像。因此，在构建镜像的时候，需要额外小心，每一层尽量只包含该层需要添加的东西，任何额外的东西应该在该层构建结束前清理掉。")]),e._v(" "),t("p",[e._v("分层存储的特征还使得镜像的复用、定制变的更为容易。甚至可以用之前构建好的镜像作为基础层，然后进一步添加新的层，以定制自己所需的内容，构建新的镜像。")]),e._v(" "),t("h4",{attrs:{id:"容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[e._v("#")]),e._v(" 容器")]),e._v(" "),t("p",[e._v("镜像（"),t("code",[e._v("Image")]),e._v("）和容器（"),t("code",[e._v("Container")]),e._v("）的关系，就像是面向对象程序设计中的 "),t("code",[e._v("类")]),e._v(" 和 "),t("code",[e._v("实例")]),e._v(" 一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。")]),e._v(" "),t("p",[e._v("容器的实质是进程，但与直接在宿主执行的进程不同，容器进程运行于属于自己的独立的 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Linux_namespaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("命名空间"),t("OutboundLink")],1),e._v("。因此容器可以拥有自己的 "),t("code",[e._v("root")]),e._v(" 文件系统、自己的网络配置、自己的进程空间，甚至自己的用户 ID 空间。容器内的进程是运行在一个隔离的环境里，使用起来，就好像是在一个独立于宿主的系统下操作一样。这种特性使得容器封装的应用比直接在宿主运行更加安全。也因为这种隔离的特性，很多人初学 Docker 时常常会混淆容器和虚拟机。")]),e._v(" "),t("p",[e._v("前面讲过镜像使用的是分层存储，容器也是如此。每一个容器运行时，是以镜像为基础层，在其上创建一个当前容器的存储层，我们可以称这个为容器运行时读写而准备的存储层为"),t("strong",[e._v("容器存储层")]),e._v("。")]),e._v(" "),t("p",[e._v("容器存储层的生存周期和容器一样，容器消亡时，容器存储层也随之消亡。因此，任何保存于容器存储层的信息都会随容器删除而丢失。")]),e._v(" "),t("p",[e._v("按照 Docker 最佳实践的要求，容器不应该向其存储层内写入任何数据，容器存储层要保持无状态化。所有的文件写入操作，都应该使用 "),t("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/content/data_management/volume.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("数据卷（Volume）"),t("OutboundLink")],1),e._v("、或者绑定宿主目录，在这些位置的读写会跳过容器存储层，直接对宿主（或网络存储）发生读写，其性能和稳定性更高。")]),e._v(" "),t("p",[e._v("数据卷的生存周期独立于容器，容器消亡，数据卷不会消亡。因此，使用数据卷后，容器删除或者重新运行之后，数据却不会丢失。")]),e._v(" "),t("h4",{attrs:{id:"仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#仓库"}},[e._v("#")]),e._v(" 仓库")]),e._v(" "),t("p",[e._v("镜像构建完成后，可以很容易的在当前宿主机上运行，但是，如果需要在其它服务器上使用这个镜像，我们就需要一个集中的存储、分发镜像的服务，"),t("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/content/repository/registry.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Registry"),t("OutboundLink")],1),e._v(" 就是这样的服务。")]),e._v(" "),t("p",[e._v("一个 "),t("strong",[e._v("Docker Registry")]),e._v(" 中可以包含多个"),t("strong",[e._v("仓库")]),e._v("（"),t("code",[e._v("Repository")]),e._v("）；每个仓库可以包含多个"),t("strong",[e._v("标签")]),e._v("（"),t("code",[e._v("Tag")]),e._v("）；每个标签对应一个镜像。")]),e._v(" "),t("p",[e._v("通常，一个仓库会包含同一个软件不同版本的镜像，而标签就常用于对应该软件的各个版本。我们可以通过 "),t("code",[e._v("<仓库名>:<标签>")]),e._v(" 的格式来指定具体是这个软件哪个版本的镜像。如果不给出标签，将以 "),t("code",[e._v("latest")]),e._v(" 作为默认标签。")]),e._v(" "),t("p",[e._v("以 "),t("a",{attrs:{href:"https://store.docker.com/images/ubuntu",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ubuntu 镜像"),t("OutboundLink")],1),e._v(" 为例，"),t("code",[e._v("ubuntu")]),e._v(" 是仓库的名字，其内包含有不同的版本标签，如，"),t("code",[e._v("16.04")]),e._v(", "),t("code",[e._v("18.04")]),e._v("。我们可以通过 "),t("code",[e._v("ubuntu:14.04")]),e._v("，或者 "),t("code",[e._v("ubuntu:18.04")]),e._v(" 来具体指定所需哪个版本的镜像。如果忽略了标签，比如 "),t("code",[e._v("ubuntu")]),e._v("，那将视为 "),t("code",[e._v("ubuntu:latest")]),e._v("。")]),e._v(" "),t("p",[e._v("仓库名经常以 "),t("em",[e._v("两段式路径")]),e._v(" 形式出现，比如 "),t("code",[e._v("jwilder/nginx-proxy")]),e._v("，前者往往意味着 Docker Registry 多用户环境下的用户名，后者则往往是对应的软件名。但这并非绝对，取决于所使用的具体 Docker Registry 的软件或服务。")]),e._v(" "),t("h2",{attrs:{id:"二、docker-的运维"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、docker-的运维"}},[e._v("#")]),e._v(" 二、Docker 的运维")]),e._v(" "),t("p",[e._v("不同操作系统环境下安装 Docker 的方式有所不同，详情可以参：")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.docker.com/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker 官方安装指南"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docker_practice.gitee.io/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装 Docker（中文）"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("国内访问 Docker 比较慢，如果需要提速，可以参考 "),t("a",{attrs:{href:"https://docker_practice.gitee.io/install/mirror.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("镜像加速器"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("安装完成后，运行下面的命令，验证是否安装成功。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("docker version")])]),e._v(" "),t("li",[t("code",[e._v("docker info")])])]),e._v(" "),t("p",[e._v("Docker 需要用户具有 sudo 权限，为了避免每次命令都输入"),t("code",[e._v("sudo")]),e._v("，可以把用户加入 Docker 用户组（"),t("a",{attrs:{href:"https://docs.docker.com/install/linux/linux-postinstall/#manage-docker-as-a-non-root-user",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),t("OutboundLink")],1),e._v("）。")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -aG docker "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$USER")]),e._v("\n")])])]),t("p",[e._v("Docker 是服务器----客户端架构。命令行运行"),t("code",[e._v("docker")]),e._v("命令的时候，需要本机有 Docker 服务。如果这项服务没有启动，可以用下面的命令启动（"),t("a",{attrs:{href:"https://docs.docker.com/config/daemon/systemd/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方文档"),t("OutboundLink")],1),e._v("）。")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# service 命令的用法")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" docker start\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# systemctl 命令的用法")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl start docker\n")])])]),t("h2",{attrs:{id:"三、hello-world-实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、hello-world-实例"}},[e._v("#")]),e._v(" 三、Hello World 实例")]),e._v(" "),t("p",[e._v('下面，我们通过最简单的 image 文件"'),t("a",{attrs:{href:"https://hub.docker.com/r/library/hello-world/",target:"_blank",rel:"noopener noreferrer"}},[e._v('hello world"'),t("OutboundLink")],1),e._v("，感受一下 Docker。")]),e._v(" "),t("p",[e._v("需要说明的是，国内连接 Docker 的官方仓库很慢，还会断线，需要将默认仓库改成国内的镜像网站，具体的修改方法在"),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/02/docker-wordpress-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("下一篇文章"),t("OutboundLink")],1),e._v("的第一节。有需要的朋友，可以先看一下。")]),e._v(" "),t("p",[e._v("首先，运行下面的命令，将 image 文件从仓库抓取到本地。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker image pull library/hello-world\n")])])])]),e._v(" "),t("p",[e._v("上面代码中，"),t("code",[e._v("docker image pull")]),e._v("是抓取 image 文件的命令。"),t("code",[e._v("library/hello-world")]),e._v("是 image 文件在仓库里面的位置，其中"),t("code",[e._v("library")]),e._v("是 image 文件所在的组，"),t("code",[e._v("hello-world")]),e._v("是 image 文件的名字。")]),e._v(" "),t("p",[e._v("由于 Docker 官方提供的 image 文件，都放在"),t("a",{attrs:{href:"https://hub.docker.com/r/library/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("library")]),t("OutboundLink")],1),e._v("组里面，所以它的是默认组，可以省略。因此，上面的命令可以写成下面这样。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker image pull hello-world\n")])])])]),e._v(" "),t("p",[e._v("抓取成功以后，就可以在本机看到这个 image 文件了。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker image "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n")])])])]),e._v(" "),t("p",[e._v("现在，运行这个 image 文件。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker container run hello-world\n")])])])]),e._v(" "),t("p",[t("code",[e._v("docker container run")]),e._v("命令会从 image 文件，生成一个正在运行的容器实例。")]),e._v(" "),t("p",[e._v("注意，"),t("code",[e._v("docker container run")]),e._v("命令具有自动抓取 image 文件的功能。如果发现本地没有指定的 image 文件，就会从仓库自动抓取。因此，前面的"),t("code",[e._v("docker image pull")]),e._v("命令并不是必需的步骤。")]),e._v(" "),t("p",[e._v("如果运行成功，你会在屏幕上读到下面的输出。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker container run hello-world\n\nHello from Docker"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\nThis message shows that your installation appears to be working correctly.\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])])]),e._v(" "),t("p",[e._v("输出这段提示以后，"),t("code",[e._v("hello world")]),e._v("就会停止运行，容器自动终止。")]),e._v(" "),t("p",[e._v("有些容器不会自动终止，因为提供的是服务。比如，安装运行 Ubuntu 的 image，就可以在命令行体验 Ubuntu 系统。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker container run -it ubuntu "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n")])])])]),e._v(" "),t("p",[e._v("对于那些不会自动终止的容器，必须使用"),t("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/container_kill/",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("docker container kill")]),t("OutboundLink")],1),e._v(" 命令手动终止。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("kill")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("containID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])]),e._v(" "),t("h2",{attrs:{id:"四、制作-docker-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、制作-docker-容器"}},[e._v("#")]),e._v(" 四、制作 Docker 容器")]),e._v(" "),t("p",[e._v("下面我以 "),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/08/koa.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("koa-demos"),t("OutboundLink")],1),e._v(" 项目为例，介绍怎么写 Dockerfile 文件，实现让用户在 Docker 容器里面运行 Koa 框架。")]),e._v(" "),t("p",[e._v("作为准备工作，请先"),t("a",{attrs:{href:"https://github.com/ruanyf/koa-demos/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载源码"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/ruanyf/koa-demos.git\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" koa-demos\n")])])])]),e._v(" "),t("h3",{attrs:{id:"编写-dockerfile-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写-dockerfile-文件"}},[e._v("#")]),e._v(" 编写 Dockerfile 文件")]),e._v(" "),t("p",[e._v("首先，在项目的根目录下，新建一个文本文件"),t("code",[e._v(".dockerignore")]),e._v("，写入下面的"),t("a",{attrs:{href:"https://github.com/ruanyf/koa-demos/blob/master/.dockerignore",target:"_blank",rel:"noopener noreferrer"}},[e._v("内容"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v(".git\nnode_modules\nnpm-debug.log\n")])])])]),e._v(" "),t("p",[e._v("上面代码表示，这三个路径要排除，不要打包进入 image 文件。如果你没有路径要排除，这个文件可以不新建。")]),e._v(" "),t("p",[e._v("然后，在项目的根目录下，新建一个文本文件 Dockerfile，写入下面的"),t("a",{attrs:{href:"https://github.com/ruanyf/koa-demos/blob/master/Dockerfile",target:"_blank",rel:"noopener noreferrer"}},[e._v("内容"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("FROM node:8.4\nCOPY "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" /app\nWORKDIR /app\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://registry.npm.taobao.org\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3000")]),e._v("\n")])])])]),e._v(" "),t("p",[e._v("上面代码一共五行，含义如下。")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[e._v("FROM node:8.4")]),e._v("：该 image 文件继承官方的 node image，冒号表示标签，这里标签是"),t("code",[e._v("8.4")]),e._v("，即 8.4 版本的 node。")]),e._v(" "),t("li",[t("code",[e._v("COPY . /app")]),e._v("：将当前目录下的所有文件（除了"),t("code",[e._v(".dockerignore")]),e._v("排除的路径），都拷贝进入 image 文件的"),t("code",[e._v("/app")]),e._v("目录。")]),e._v(" "),t("li",[t("code",[e._v("WORKDIR /app")]),e._v("：指定接下来的工作路径为"),t("code",[e._v("/app")]),e._v("。")]),e._v(" "),t("li",[t("code",[e._v("RUN npm install")]),e._v("：在"),t("code",[e._v("/app")]),e._v("目录下，运行"),t("code",[e._v("npm install")]),e._v("命令安装依赖。注意，安装后所有的依赖，都将打包进入 image 文件。")]),e._v(" "),t("li",[t("code",[e._v("EXPOSE 3000")]),e._v("：将容器 3000 端口暴露出来， 允许外部连接这个端口。")])])]),e._v(" "),t("h3",{attrs:{id:"创建-image-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-image-文件"}},[e._v("#")]),e._v(" 创建 image 文件")]),e._v(" "),t("p",[e._v("有了 Dockerfile 文件以后，就可以使用"),t("code",[e._v("docker image build")]),e._v("命令创建 image 文件了。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker image build -t koa-demo "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 或者")]),e._v("\n$ docker image build -t koa-demo:0.0.1 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])])]),e._v(" "),t("p",[e._v("上面代码中，"),t("code",[e._v("-t")]),e._v("参数用来指定 image 文件的名字，后面还可以用冒号指定标签。如果不指定，默认的标签就是"),t("code",[e._v("latest")]),e._v("。最后的那个点表示 Dockerfile 文件所在的路径，上例是当前路径，所以是一个点。")]),e._v(" "),t("p",[e._v("如果运行成功，就可以看到新生成的 image 文件"),t("code",[e._v("koa-demo")]),e._v("了。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker image "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n")])])])]),e._v(" "),t("h3",{attrs:{id:"生成容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成容器"}},[e._v("#")]),e._v(" 生成容器")]),e._v(" "),t("p",[t("code",[e._v("docker container run")]),e._v("命令会从 image 文件生成容器。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker container run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),e._v(":3000 -it koa-demo /bin/bash\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 或者")]),e._v("\n$ docker container run -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),e._v(":3000 -it koa-demo:0.0.1 /bin/bash\n")])])])]),e._v(" "),t("p",[e._v("上面命令的各个参数含义如下：")]),e._v(" "),t("blockquote",[t("ul",[t("li",[t("code",[e._v("-p")]),e._v("参数：容器的 3000 端口映射到本机的 8000 端口。")]),e._v(" "),t("li",[t("code",[e._v("-it")]),e._v("参数：容器的 Shell 映射到当前的 Shell，然后你在本机窗口输入的命令，就会传入容器。")]),e._v(" "),t("li",[t("code",[e._v("koa-demo:0.0.1")]),e._v("：image 文件的名字（如果有标签，还需要提供标签，默认是 latest 标签）。")]),e._v(" "),t("li",[t("code",[e._v("/bin/bash")]),e._v("：容器启动以后，内部第一个执行的命令。这里是启动 Bash，保证用户可以使用 Shell。")])])]),e._v(" "),t("p",[e._v("如果一切正常，运行上面的命令以后，就会返回一个命令行提示符。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("root@66d80f4aaf1e:/app"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#")]),e._v("\n")])])])]),e._v(" "),t("p",[e._v("这表示你已经在容器里面了，返回的提示符就是容器内部的 Shell 提示符。执行下面的命令。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("root@66d80f4aaf1e:/app"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# node demos/01.js")]),e._v("\n")])])])]),e._v(" "),t("p",[e._v('这时，Koa 框架已经运行起来了。打开本机的浏览器，访问 http://127.0.0.1:8000，网页显示"Not Found"，这是因为这个 '),t("a",{attrs:{href:"https://github.com/ruanyf/koa-demos/blob/master/demos/01.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo"),t("OutboundLink")],1),e._v(" 没有写路由。")]),e._v(" "),t("p",[e._v("这个例子中，Node 进程运行在 Docker 容器的虚拟环境里面，进程接触到的文件系统和网络接口都是虚拟的，与本机的文件系统和网络接口是隔离的，因此需要定义容器与物理机的端口映射（map）。")]),e._v(" "),t("p",[e._v("现在，在容器的命令行，按下 Ctrl + c 停止 Node 进程，然后按下 Ctrl + d （或者输入 exit）退出容器。此外，也可以用"),t("code",[e._v("docker container kill")]),e._v("终止容器运行。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 在本机的另一个终端窗口，查出容器的 ID")]),e._v("\n$ docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 停止指定的容器运行")]),e._v("\n$ docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("kill")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("containerID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])]),e._v(" "),t("p",[e._v("容器停止运行之后，并不会消失，用下面的命令删除容器文件。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查出容器的 ID")]),e._v("\n$ docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" --all\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 删除指定的容器文件")]),e._v("\n$ docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("containerID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])]),e._v(" "),t("p",[e._v("也可以使用"),t("code",[e._v("docker container run")]),e._v("命令的"),t("code",[e._v("--rm")]),e._v("参数，在容器终止运行后自动删除容器文件。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker container run --rm -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),e._v(":3000 -it koa-demo /bin/bash\n")])])])]),e._v(" "),t("h3",{attrs:{id:"cmd-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmd-命令"}},[e._v("#")]),e._v(" CMD 命令")]),e._v(" "),t("p",[e._v("上一节的例子里面，容器启动以后，需要手动输入命令"),t("code",[e._v("node demos/01.js")]),e._v("。我们可以把这个命令写在 Dockerfile 里面，这样容器启动以后，这个命令就已经执行了，不用再手动输入了。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("FROM node:8.4\nCOPY "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" /app\nWORKDIR /app\nRUN "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --registry"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://registry.npm.taobao.org\nEXPOSE "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3000")]),e._v("\nCMD node demos/01.js\n")])])])]),e._v(" "),t("p",[e._v("上面的 Dockerfile 里面，多了最后一行"),t("code",[e._v("CMD node demos/01.js")]),e._v("，它表示容器启动后自动执行"),t("code",[e._v("node demos/01.js")]),e._v("。")]),e._v(" "),t("p",[e._v("你可能会问，"),t("code",[e._v("RUN")]),e._v("命令与"),t("code",[e._v("CMD")]),e._v("命令的区别在哪里？简单说，"),t("code",[e._v("RUN")]),e._v("命令在 image 文件的构建阶段执行，执行结果都会打包进入 image 文件；"),t("code",[e._v("CMD")]),e._v("命令则是在容器启动后执行。另外，一个 Dockerfile 可以包含多个"),t("code",[e._v("RUN")]),e._v("命令，但是只能有一个"),t("code",[e._v("CMD")]),e._v("命令。")]),e._v(" "),t("p",[e._v("注意，指定了"),t("code",[e._v("CMD")]),e._v("命令以后，"),t("code",[e._v("docker container run")]),e._v("命令就不能附加命令了（比如前面的"),t("code",[e._v("/bin/bash")]),e._v("），否则它会覆盖"),t("code",[e._v("CMD")]),e._v("命令。现在，启动容器可以使用下面的命令。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker container run --rm -p "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),e._v(":3000 -it koa-demo:0.0.1\n")])])])]),e._v(" "),t("h3",{attrs:{id:"发布-image-文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布-image-文件"}},[e._v("#")]),e._v(" 发布 image 文件")]),e._v(" "),t("p",[e._v("容器运行成功后，就确认了 image 文件的有效性。这时，我们就可以考虑把 image 文件分享到网上，让其他人使用。")]),e._v(" "),t("p",[e._v("首先，去 "),t("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("hub.docker.com"),t("OutboundLink")],1),e._v(" 或 "),t("a",{attrs:{href:"https://cloud.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cloud.docker.com"),t("OutboundLink")],1),e._v(" 注册一个账户。然后，用下面的命令登录。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker login\n")])])])]),e._v(" "),t("p",[e._v("接着，为本地的 image 标注用户名和版本。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker image tag "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("imageName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("repository"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("tag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 实例")]),e._v("\n$ docker image tag koa-demos:0.0.1 ruanyf/koa-demos:0.0.1\n")])])])]),e._v(" "),t("p",[e._v("也可以不标注用户名，重新构建一下 image 文件。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker image build -t "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("repository"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("tag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])])]),e._v(" "),t("p",[e._v("最后，发布 image 文件。")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ docker image push "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("username"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("repository"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("tag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])]),e._v(" "),t("p",[e._v("发布成功以后，登录 hub.docker.com，就可以看到已经发布的 image 文件。")]),e._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker 入门教程"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/yeasy/docker_practice",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker — 从入门到实践"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=s.exports}}]);
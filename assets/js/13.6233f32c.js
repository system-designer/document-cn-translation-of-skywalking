(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{219:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"服务直连-direct-uplink"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务直连-direct-uplink"}},[t._v("#")]),t._v(" 服务直连(Direct uplink)")]),t._v(" "),r("h2",{attrs:{id:"版本支持"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#版本支持"}},[t._v("#")]),t._v(" 版本支持")]),t._v(" "),r("p",[t._v("5.0.0-beta +")]),t._v(" "),r("h2",{attrs:{id:"什么是服务直连-direct-uplink"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务直连-direct-uplink"}},[t._v("#")]),t._v(" 什么是服务直连(Direct uplink)?")]),t._v(" "),r("p",[t._v("默认情况下, "),r("code",[t._v("SkyWalking")]),t._v("探针使用 名称服务(naming service,即通过名称获取服务地址)的形式获取 "),r("code",[t._v("collector")]),t._v("的地址连接gRPC服务.")]),t._v(" "),r("p",[r("strong",[t._v("服务直连")]),t._v(" 意味着在名称服务不可用或者低可用的情况下,在探针端直接使用设置的gRPC的地址进行连接.")]),t._v(" "),r("h2",{attrs:{id:"为什么需要这样做"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要这样做"}},[t._v("#")]),t._v(" 为什么需要这样做?")]),t._v(" "),r("p",[t._v("如果探针通过以下代理上报数据:")]),t._v(" "),r("ol",[r("li",[t._v("私有云(VPCs)")]),t._v(" "),r("li",[t._v("公网(Internet)")]),t._v(" "),r("li",[t._v("不同的子网(subnet).")]),t._v(" "),r("li",[t._v("Ip,Port代理")])]),t._v(" "),r("h2",{attrs:{id:"探针配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#探针配置"}},[t._v("#")]),t._v(" 探针配置")]),t._v(" "),r("ol",[r("li",[t._v("去掉配置 "),r("code",[t._v("collector.servers")]),t._v(" .")]),t._v(" "),r("li",[t._v("在 "),r("code",[t._v("agent.config")]),t._v("中按照如下配置")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('# Collector agent_gRPC/grpc 地址.\n# 仅仅当不配置的"collector.servers"的时候生效,作为第二种配置地址选择.\n# 如果使用此配置,自动发现服务将无法使用,探针将直接使用此地址进行数据上报.\n# 仅仅当探针端无法连接到`collector`的集群 ip地址时,我们才推荐使用这种配置,比如:\n#   1. 探针和 `collector`在不同的私有云当中.\n#   2. 探针通过外网上报数据到 `collector`.\n# collector.direct_servers=www.skywalking.service.io\n')])])]),r("ol",{attrs:{start:"3"}},[r("li",[t._v("可以只用域名或者IP:PORT形式(逗号分割) 来设置"),r("code",[t._v("collector.direct_servers")]),t._v(".")])])])}],!1,null,null,null);e.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{205:function(t,e,r){"use strict";r.r(e);var n={props:{toc:{type:Array,required:!0}}},o=r(3),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full bg-white dark:bg-gray-900 lg:w-1/4 py-4 lg:p-8"},[r("div",{staticClass:"lg:sticky lg:top-0 lg:pt-24 lg:-mt-24"},[r("h3",{staticClass:"mb-3 lg:mb-2 text-gray-500 dark:text-gray-600 uppercase tracking-wide font-bold text-sm lg:text-xs"},[t._v(t._s(t.$t("toc.title")))]),t._v(" "),r("nav",[r("scrollactive",{attrs:{modifyUrl:!1,"highlight-first-item":"","active-class":"text-green-500",offset:0,tag:"ul"}},t._l(t.toc,(function(link){return r("li",{key:link.id,staticClass:"text-gray-600 dark:text-gray-500",class:{"border-t border-dashed dark:border-gray-800 first:border-t-0 font-semibold":2===link.depth}},[r("a",{staticClass:"block text-sm scrollactive-item transition-transform ease-in-out duration-300 transform hover:translate-x-1",class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth},attrs:{href:"#"+link.id}},[t._v(t._s(link.text))])])})),0)],1)])])}),[],!1,null,null,null);e.default=component.exports},217:function(t,e,r){"use strict";r.r(e);r(104),r(105),r(106),r(107),r(108);var n=r(77),o=r(33);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={computed:l({},Object(o.c)({skip:function(t){return t.skip}})),methods:l({},Object(o.b)({next:"skip/next",previous:"skip/previous",start:"skip/start"}))},f=r(3),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[this.$store.state.skip.value>0?r("button",{on:{click:function(e){return t.start()}}},[t._v("Now")]):r("button",{staticClass:"text-gray-500",attrs:{disabled:""}},[t._v("Now")]),t._v("\n  |\n  "),this.$store.state.skip.value>0?r("button",{on:{click:function(e){return t.previous()}}},[t._v("Previous")]):r("button",{staticClass:"text-gray-500",attrs:{disabled:""}},[t._v("Previous")]),t._v("\n  |\n  "),this.$store.state.skip.more?r("button",{on:{click:function(e){return t.next()}}},[t._v("Older")]):r("button",{staticClass:"text-gray-500",attrs:{disabled:""}},[t._v("Older")])])}),[],!1,null,null,null);e.default=component.exports},220:function(t,e,r){"use strict";r.r(e);var n=r(203),o=(r(38),r(16)),c={name:"NewsPageSlug",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,d,f,v,h,m,x,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.store,o=t.app,t.params,c=t.error,l="news",e.prev=2,e.next=5,r(o.i18n.locale,l).fetch();case 5:d=e.sent,e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",c({statusCode:404,message:"Page not found"}));case 11:return e.prev=11,e.next=14,r(o.i18n.locale+"/articles").sortBy("createdAt","asc").fetch();case 14:f=e.sent,e.next=20;break;case 17:return e.prev=17,e.t1=e.catch(11),e.abrupt("return",c({statusCode:404,message:"Page not found"}));case 20:return v=f.map((function(t){var e={};return e.id=t.toc[0].id,e.depth=t.toc[0].depth,e.text=t.toc[0].text,e})),e.next=23,r(o.i18n.locale).only(["title","slug"]).sortBy("position","asc").surround(l,{before:1,after:1}).fetch();case 23:return h=e.sent,m=Object(n.a)(h,2),x=m[0],y=m[1],e.abrupt("return",{articles:f,news_toc:v,doc:d,prev:x,next:y});case 28:case"end":return e.stop()}}),e,null,[[2,8],[11,17]])})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}},mounted:function(){},head:function(){return{title:this.doc.title,meta:[{hid:"description",name:"description",content:this.doc.description},{hid:"og:title",property:"og:title",content:this.doc.title},{hid:"og:description",property:"og:description",content:this.doc.description},{hid:"twitter:title",name:"twitter:title",content:this.doc.title},{hid:"twitter:description",name:"twitter:description",content:this.doc.description}]}}},l=r(3),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap-reverse"},[r("div",{staticClass:"w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:border-l lg:border-r",class:{"":t.news_toc&&t.news_toc.length,"lg:w-3/4":!t.doc.fullscreen}},[r("article",{staticClass:"prose max-w-none lg:px-8 dark:text-gray-100 dark:prose-dark"},[r("nuxt-content",{attrs:{document:t.doc}}),t._v(" "),r("div",{staticClass:"float-right"},[this.$store.state.skip.jump<=t.articles.length?r("NextArticle"):t._e()],1),t._v(" "),t._l(t.articles.slice(this.$store.state.skip.value,this.$store.state.skip.value+this.$store.state.skip.jump),(function(article){return r("div",{key:article.slug},[r("div",[r("nuxt-content",{attrs:{document:article}}),t._v(" "),r("p",[r("small",[t._v("Article from: "+t._s(t.formatDate(article.createdAt)))])])],1)])})),t._v(" "),r("div",{staticClass:"float-right"},[this.$store.state.skip.jump<=t.articles.length?r("NextArticle"):t._e()],1)],2)]),t._v(" "),r("ArticleToc",{attrs:{toc:t.news_toc.slice(this.$store.state.skip.value,this.$store.state.skip.value+this.$store.state.skip.jump)}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NextArticle:r(217).default,ArticleToc:r(205).default})}}]);
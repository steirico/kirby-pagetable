(function () {function d(a){return a&&a.__esModule?{d:a.default}:{d:a}}var b,c={};!function(t,e){"object"==typeof c?c=e():"function"==typeof b&&b.amd?b(e):(t=t||self).Tbl=e()}(c,function(){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}return function(t,e,n,r,s,o,i,a,c,l){"boolean"!=typeof i&&(a,a=i,i=!1);var d,u="function"==typeof n?n.options:n;if(t&&t.render&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),d)if(u.functional){var f=u.render;u.render=function(t,e){return d.call(e),f(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,d):[d]}return n}({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"tbl",attrs:{"data-version":"1.0.1"}},[n("header",{staticClass:"k-section-header"},[n("k-headline",[t._v(t._s(t.headline))]),t._v(" "),t._t("filter",[n("k-button-group",[n("k-button",{attrs:{disbaled:!0,icon:"cirle"}}),t._v(" "),t.showReset?n("button",{staticClass:"tbl-reset",on:{click:t.reset}},[t._v("\n          "+t._s(t.config.labels.reset)+"\n        ")]):t._e(),t._v(" "),t.showSearch?n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],ref:"search",staticClass:"tbl-search",attrs:{type:"text",placeholder:t.config.labels.filter},domProps:{value:t.searchTerm},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.reset(e)},input:function(e){e.target.composing||(t.searchTerm=e.target.value)}}}):t._e(),t._v(" "),t.showAdd?n("k-button",{attrs:{icon:"add"},on:{click:function(e){return t.$emit("add")}}},[t._v("\n          "+t._s(t.$t("add"))+"\n        ")]):t._e()],1)])],2),t._v(" "),t._t("table",[n("table",[n("thead",[0===t.rowsFiltered.length?n("th",{attrs:{colspan:t.widthLoading}}):[t._l(t.columns,function(e){return n("th",{key:e.field,class:"head-"+e.class,attrs:{"data-align":t.getAlign(e),"data-width":e.width,"data-responsive":!1!==e.responsive,"data-sortable":t.config.sort.enabled&&!1!==e.sort,"data-sorted":t.sortBy===e&&(1===t.sortOrder?"asc":"desc")},on:{click:function(n){return t.setSort(e)}}},[t._v("\n            "+t._s(e.label)+"\n          ")])}),t._v(" "),t.showActions?n("th",{attrs:{"data-width":t.widthActions}}):t._e()]],2),t._v(" "),n("tbody",[0===t.rowsFiltered.length?n("tr",[n("td",{attrs:{colspan:t.widthLoading,"data-align":"center"}},[t._t("empty-row",[n("p",[this.isLoading?n("k-icon",{attrs:{type:"loader"}}):n("span",[t._v(t._s(t.config.labels.empty))])],1)])],2)]):t._l(t.rowsPaginated,function(e,r){return n("tr",{key:"row_"+r},[t._l(t.columns,function(s){return n("td",{key:s.field,class:"row-"+s.class,attrs:{"data-width":s.width,"data-align":t.getAlign(s),"data-responsive":!1!==s.responsive},on:{click:function(n){return t.$emit("action",[t.config.actions.onRow,e,s.field])}}},[t._t("column-"+(s.name||s.field),[t._t("column-$default",["url"===s.type?n("k-url-field-preview",{attrs:{value:e[s.field]}}):n("p",{domProps:{innerHTML:t._s(t.getValue(e[s.field],s.type))}})],{index:r,column:s,field:s.field,row:e,value:t.getValue(e[s.field],s.type)})],{index:r,column:s,field:s.field,row:e,value:t.getValue(e[s.field],s.type)})],2)}),t._v(" "),t.showActions?n("td",{staticClass:"tbl-options",attrs:{"data-width":t.widthActions,"data-align":"center"}},[t._t("column-$actions",[t.config.actions.inline?t._l(t.config.actions.items,function(r){return n("k-button",{key:r.click,attrs:{tooltip:r.text,icon:r.icon},on:{click:function(n){return n.stopPropagation(),t.$emit("action",[r.click,e])}}})}):[n("k-button",{attrs:{tooltip:t.$t("options"),icon:"dots"},on:{click:function(e){e.stopPropagation(),t.$refs["options-"+r][0].toggle()}}}),t._v(" "),n("k-dropdown-content",{ref:"options-"+r,refInFor:!0,attrs:{options:t.config.actions.items,align:"right"},on:{action:function(n){return t.$emit("action",[n,e])}}})]],{row:e,index:r})],2):t._e()],2)})],2)])]),t._v(" "),n("footer",{staticClass:"tbl-footer"},[t._t("footer",[t.rowsFiltered.length>0?[n("div",{staticClass:"tbl-perPage"},[t._t("footer-before-perPage"),t._v(" "),n("span",[t._v(t._s(t.config.labels.perPage))]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.perPage,expression:"perPage"}],attrs:{autocomplete:"off"},on:{input:t.onPerPage,change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.perPage=e.target.multiple?n:n[0]}}},[t._l(t.config.pagination.perPageOptions,function(e){return n("option",{key:e,domProps:{value:e,textContent:t._s(e)}})}),t._v(" "),n("option",{domProps:{value:this.rowsFiltered.length}},[t._v("\n              "+t._s(t.config.labels.all)+"\n            ")])],2),t._v(" "),t._t("footer-after-perPage")],2),t._v(" "),t._t("footer-center"),t._v(" "),n("div",{staticClass:"tbl-navigation"},[t._t("footer-before-pagination"),t._v(" "),n("div",{staticClass:"btn btn-prev",attrs:{"data-disabled":t.page<=1},on:{click:function(e){return t.navigate(-1)}}},[n("span",{staticClass:"chevron"}),t._v(" "),n("span",[t._v(t._s(t.$t("prev")))])]),t._v(" "),n("div",{staticClass:"info"},[t._v("\n            "+t._s(this.pageRowFirst)+" - "+t._s(Math.min(this.pageRowLast,this.rowsFiltered.length))+" of "+t._s(this.rowsFiltered.length)+"\n          ")]),t._v(" "),n("div",{staticClass:"btn btn-next",attrs:{"data-disabled":t.page*t.perPage>=t.rowsFiltered.length},on:{click:function(e){return t.navigate(1)}}},[n("span",[t._v(t._s(t.$t("next")))]),t._v(" "),n("span",{staticClass:"chevron"})]),t._v(" "),t._t("footer-after-pagination")],2)]:t._e()])],2),t._v(" "),t._t("dialogs")],2)},staticRenderFns:[]},0,{props:{headline:String,columns:Array,rows:Array,options:Object,actions:Object,labels:Object,pagination:{type:[Boolean,Object],default:function(){return{}}},search:{type:[Boolean,Object],default:function(){return{}}},sort:{type:[Boolean,Object],default:function(){return{}}},store:{type:[Boolean,Object],default:function(){return{}}},isLoading:{type:Boolean,default:!1}},data:function(){return{searchTerm:"",sortBy:null,sortOrder:1,page:1,perPage:10}},computed:{config:function(){return Object.assign({actions:Object.assign({inline:!1,items:[],onRow:!1},this.actions),labels:Object.assign({all:"All",empty:"No rows available",perPage:"Rows displayed",reset:"Reset",filter:"Filter items..."},this.labels),pagination:Object.assign({enabled:!0,page:1,perPage:10,perPageOptions:[5,10,25,50,100]},this.resolveOptions(this.pagination)),search:Object.assign({enabled:!0},this.resolveOptions(this.search)),sort:Object.assign({enabled:!0,initialBy:null},this.resolveOptions(this.sort)),store:Object.assign({enabled:!1,name:""},this.resolveOptions(this.store)),add:!1},this.options)},pageOffset:function(){return(this.page-1)*this.perPage},pageRowFirst:function(){return this.pageOffset+1},pageRowLast:function(){return this.pageOffset+this.perPage},rowsFiltered:function(){var t=this;if(""===this.searchTerm)return this.rows;var e=this.searchTerm.toLowerCase();return this.rows.slice().filter(function(n){var r=!1;return Object.keys(n).forEach(function(s){var o=t.columns.find(function(t){return t.field===s});o&&!1!==o.search&&String(n[s]).toLowerCase().includes(e)&&(r=!0)}),r})},rowsPaginated:function(){return this.rowsSorted.slice(this.pageOffset,this.pageOffset+this.perPage)},rowsSorted:function(){var t=this;return this.sortBy&&!1!==this.config.sort.enabled?this.rowsFiltered.slice().sort(function(e,n){if(t.sortBy.field&&(e=e[t.sortBy.field],n=n[t.sortBy.field]),t.sortBy.sort&&t.sortBy.sort.field&&(e=e[t.sortBy.sort.field],n=n[t.sortBy.sort.field]),t.sortBy.sort&&t.sortBy.sort.value&&(e=e[t.sortBy.sort.value],n=n[t.sortBy.sort.value]),t.sortBy.callback)return t.sortBy.callback(e,n,t.sortOrder,t.sortBy);switch(t.sortBy.type){case"number":return(e-n)*t.sortOrder;case"date":return(new Date(e)-new Date(n))*t.sortOrder;default:return e=(""+e).toLowerCase(),n=(""+n).toLowerCase(),e.localeCompare(n)*t.sortOrder;}}):this.rowsFiltered},showActions:function(){return!!this.$scopedSlots["column-$actions"]||!!this.config.actions.items&&this.config.actions.items.length>0},showAdd:function(){return this.config.add},showReset:function(){return""!==this.searchTerm||null!==this.sortBy},showSearch:function(){return this.columns.filter(function(t){return!1!==t.search}).length>0&&this.config.search.enabled},storeName:function(){return"kirby$plugin$tbl$"+this.config.store.name},widthActions:function(){return this.config.actions.width?this.config.actions.width:(this.config.actions.inline?this.config.actions.items.length:1)+"fr"},widthLoading:function(){return Math.max(this.columns.length,1)+(this.showActions?1:0)}},watch:{config:function(){this.load()},searchTerm:function(t){this.setStore(),this.$emit("onFilter",t)}},created:function(){this.load()},methods:{getAlign:function(t){if(t.align)return t.align;switch(t.type){case"number":case"decimal":case"percentage":case"boolean":case"date":return"right";default:return"left";}},getValue:function(t,e){switch(e){case"date":return t?new Date(t).toLocaleString(this.$user.language,{year:"numeric",month:"long",day:"numeric"}):"\u2013";case"number":return t?1*t:"\u2013";case"decimals":return t?Number(t).toFixed(2):"\u2013";case"percentage":return t?Number(100*t).toFixed(2)+" %":"\u2013 %";default:return t||null;}},load:function(){this.page=this.config.pagination.page,this.perPage=this.config.pagination.perPage,this.loadStore(),this.loadSort()},loadSort:function(){if(!0===this.config.sort.enabled&&null===this.sortBy){var t=this.config.sort.initialBy;if(t){var e=this.columns.find(function(e){return e.name===t});e||(e=this.columns.find(function(e){return e.field===t})),this.setSort(e)}}},loadStore:function(){if(!0===this.config.store.enabled){var t=JSON.parse(sessionStorage.getItem(this.storeName));null!==t&&(this.page=t.page,this.perPage=t.perPage,this.searchTerm=t.searchTerm,this.sortBy=t.sortBy,this.sortOrder=t.sortOrder),this.$emit("onLoadStore",t)}},navigate:function(t){this.page+=t,this.setStore(),this.$emit("onPage",this.page)},onPerPage:function(){this.page=1,this.setStore(),this.$emit("onPerPage",this.perPage)},reset:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.$refs.search.blur(),this.setStore(),this.$emit("onReset")},resolveOptions:function(e){return 0===Object.keys(e).length?e:t(e)==t(!0)?{enabled:e}:Object.assign({enabled:!0},e)},setSort:function(t){!1!==this.config.sort.enabled&&!1!==t.sort&&(this.sortBy===t?this.sortOrder*=-1:(this.sortBy=t,this.sortOrder="desc"===(t.sort&&t.sort.order?t.sort.order:t.sort)?-1:1),this.setStore(),this.$emit("onSort",Object.assign({},t,{currentDirection:this.sortOrder})))},setStore:function(){var t=this;!0===this.config.store.enabled&&this.$nextTick(function(){var e={page:t.page,perPage:t.perPage,searchTerm:t.searchTerm,sortBy:t.sortBy,sortOrder:t.sortOrder};sessionStorage.setItem(t.storeName,JSON.stringify(e)),t.$emit("onLoadStore",e)})}}},0,0,0,void 0,void 0)});var e=d(c);var a={extends:"k-pages-section",components:{Tbl:e.d},data:function(){return{rows:[],columns:[],isLoading:!1,options:{empty:null,headline:null,layout:"list",link:null,max:null,min:null,size:null,sortable:null,limit:10,limitOptions:[],translations:{perPage:this.$t("pagetable.rowsPerPage"),of:this.$t("pagetable.of"),all:this.$t("pagetable.all"),empty:this.$t("pages.empty"),filter:this.$t("pagetable.filter-pages"),reset:this.$t("pagetable.reset")},search:!0}}},props:{parent:String,blueprint:String,name:String},computed:{table:function(){return{actions:{width:"2fr"},pagination:{perPage:this.options.limit,perPageOptions:this.options.limitOptions},labels:this.options.translations,store:{enabled:!0,name:this.parent+"-"+this.name},options:{add:this.add}}},language:function(){return this.$store.state.languages.current}},watch:{language:function(){this.reload()}},created:function(){this.load()},methods:{load:function(t){var e=this;t||(this.isLoading=!0),this.$api.get(this.parent+"/sections/"+this.name).then(function(t){e.isLoading=!1,e.options=t.options,e.columns=t.data.columns,e.rows=e.items(t.data.rows)}).catch(function(t){e.isLoading=!1,e.error=t.message})},addWrapper:function(){try{this.create()}catch(t){this.action(null,"create")}}}};if(typeof a==="function"){a=a.options}Object.assign(a,function(){var render=function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("tbl",_vm._b({attrs:{"rows":_vm.rows,"columns":_vm.columns,"type":"pagetable","isLoading":_vm.isLoading},on:{"add":_vm.addWrapper},scopedSlots:_vm._u([{key:"column-image",fn:function(props){return[_c("k-link",{attrs:{"to":props.row.link}},[_c("figure",{staticClass:"k-list-item-image"},[props.row.image&&props.row.image.url?_c("k-image",{attrs:{"src":props.row.image.url,"back":props.row.image.back||"pattern","cover":props.row.image.cover}}):_c("k-icon",_vm._b({},"k-icon",props.row.icon,false))],1)])]}},{key:"column-$default",fn:function(props){return[_c("k-link",{attrs:{"to":props.row.link},domProps:{"innerHTML":_vm._s(props.value)}})]}},{key:"column-$actions",fn:function(props){return[props.row.flag?_c("k-button",_vm._b({on:{"click":props.row.flag.click}},"k-button",props.row.flag,false)):_vm._e(),_vm._v(" "),props.row.options?_c("k-button",{staticClass:"k-list-item-toggle",attrs:{"tooltip":_vm.$t("options"),"icon":"dots","alt":"Options"},on:{"click":function($event){$event.stopPropagation();_vm.$refs["options-"+props.index].toggle()}}}):_vm._e(),_vm._v(" "),_c("k-dropdown-content",{ref:"options-"+props.index,attrs:{"options":props.row.options,"align":"right"},on:{"action":function($event){return _vm.action(props.row,$event)}}})]}}])},"tbl",_vm.table,false),[_vm._v(" "),_vm._v(" "),_vm._v(" "),_c("template",{slot:"dialogs"},[_c("k-page-create-dialog",{ref:"create"}),_vm._v(" "),_c("k-page-duplicate-dialog",{ref:"duplicate"}),_vm._v(" "),_c("k-page-rename-dialog",{ref:"rename",on:{"success":_vm.update}}),_vm._v(" "),_c("k-page-url-dialog",{ref:"url",on:{"success":_vm.update}}),_vm._v(" "),_c("k-page-status-dialog",{ref:"status",on:{"success":_vm.update}}),_vm._v(" "),_c("k-page-template-dialog",{ref:"template",on:{"success":_vm.update}}),_vm._v(" "),_c("k-page-remove-dialog",{ref:"remove",on:{"success":_vm.update}})],1)],2)};var staticRenderFns=[];return{render:render,staticRenderFns:staticRenderFns,_compiled:true,_scopeId:null,functional:undefined}}());panel.plugin("sylvainjule/pagetable",{sections:{pagetable:a}});})();
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["cbi-charts"]=t():e["cbi-charts"]=t()}("undefined"!=typeof self?self:this,function(){return webpackJsonpcbi_charts([15],{101:function(e,t,n){var r=n(0).createHashMap;e.exports=function(e){return{getTargetSeries:function(t){var n={},i=r();return t.eachSeriesByType(e,function(e){e.__paletteScope=n,i.set(e.uid,e)}),i},reset:function(e,t){var n=e.getRawData(),r={},i=e.getData();i.each(function(e){var t=i.getRawIndex(e);r[t]=e}),n.each(function(t){var o=r[t],a=null!=o&&i.getItemVisual(o,"color",!0);if(a)n.setItemVisual(t,"color",a);else{var s=n.getItemModel(t).get("itemStyle.color")||e.getColorFromPalette(n.getName(t)||t+"",e.__paletteScope,n.count());n.setItemVisual(t,"color",s),null!=o&&i.setItemVisual(o,"color",s)}})}}}},111:function(e,t){e.exports=function(e){return{seriesType:e,reset:function(e,t){var n=t.findComponents({mainType:"legend"});if(n&&n.length){var r=e.getData();r.filterSelf(function(e){for(var t=r.getName(e),i=0;i<n.length;i++)if(!n[i].isSelected(t))return!1;return!0})}}}}},15:function(e,t,n){var r=n(16).f,i=n(36),o=n(2)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,o)&&r(e,o,{configurable:!0,value:t})}},17:function(e,t,n){"use strict";var r=n(21);e.exports.f=function(e){return new function(e){var t,n;this.promise=new e(function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r}),this.resolve=r(t),this.reject=r(n)}(e)}},18:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"e",function(){return l}),n.d(t,"f",function(){return f}),n.d(t,"d",function(){return h}),n.d(t,"b",function(){return g}),n.d(t,"a",function(){return m}),t.g=function(e,t,n){void 0!==e[t]?e[t].push(n):e[t]=[n]};var r=n(55),i=n.n(r),o=n(40),a=n.n(o),s=n(107),c=n(24);s.a.setOptions({defaultFormat:"0,0",scalePercentBy100:!0,abbrLabel:{th:"K",mi:"M",bi:"B",tr:"T"}});var u=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-";if(isNaN(e))return r;if(!t)return e;if(Object(c.h)(t))return t(e,s.a);n=isNaN(n)?0:++n;var i=".["+new Array(n).join(0)+"]",o=t;switch(t){case"KMB":o=n?"0,0"+i+"a":"0,0a";break;case"normal":o=n?"0,0"+i:"0,0";break;case"percent":o=n?"0,0"+i+"%":"0,0.[00]%"}return Object(s.a)(e,o)},l=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-";if(isNaN(e))return r;if(!t)return e;if(Object(c.h)(t))return t(e,s.a);n=isNaN(n)?0:++n;var i=".["+new Array(n).join(0)+"]",o=t;switch(t){case"KMB":o=n?"0,0"+i+"a":"0,0a";break;case"normal":o=n?"0,0"+i:"0,0";break;case"percent":o=""}return Object(s.a)(e,o)},f=function(e){var t={};return a()(e).forEach(function(n){e[n].forEach(function(e){t[e]=n})}),t},p={},h=function(e){var t,n=e.position,r=e.positionJsonLink,o=e.beforeRegisterMapOnce,a=e.mapURLProfix,s=r||""+a+n+".json";return p[s]||(p[s]=(t=s,new i.a(function(e,n){var r=new XMLHttpRequest;r.open("GET",t),r.send(null),r.onload=function(){e(JSON.parse(r.responseText))},r.onerror=function(){n(JSON.parse(r.responseText))}})).then(function(e){return o&&(e=o(e)),e})),p[s]},d=null,v=null,g=function(e,t){return d||(d=new i.a(function(n,r){var i="bmap"+Date.now();window[i]=n;var o=document.createElement("script");o.src=["https://api.map.baidu.com/api?v="+(t||"2.0"),"ak="+e,"callback="+i].join("&"),document.body.appendChild(o)})),d},m=function(e,t){return v||(v=new i.a(function(n,r){var i="amap"+Date.now();window[i]=n;var o=document.createElement("script");o.src=["https://webapi.amap.com/maps?v="+(t||"1.4.3"),"key="+e,"callback="+i].join("&"),document.body.appendChild(o)})),v}},2:function(e,t,n){var r=n(95)("wks"),i=n(87),o=n(3).Symbol,a="function"==typeof o;(e.exports=function(e){return r[e]||(r[e]=a&&o[e]||(a?o:i)("Symbol."+e))}).store=r},212:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(74),i=n(18);var o=function(e,t,n,o){var a=e.slice(),s=t.slice(),c=n.dataType,u=void 0===c?"normal":c,l=n.dimension,f=void 0===l?a[0]:l,p=n.sequence,h=void 0===p?s.map(function(e){return e[f]}):p,d=n.digit,v=void 0===d?2:d,g=n.ascending,m=n.label,y=n.labelLine,x=n.legendName,b=void 0===x?{}:x,w=n.itemStyle,S=n.filterZero,_=n.useDefaultOrder,L=o.tooltipVisible,P=o.legendVisible,M=void 0;if(n.measures)M=n.measures;else{var I=a.slice();I.splice(a.indexOf(f),1),M=I[0]}return{tooltip:L&&function(e,t){return{trigger:"item",formatter:function(n){var o=[];return o.push(Object(r.g)(n.color)),o.push(n.name+": "+Object(i.c)(n.data.realValue,e,t)),o.join("")}}}(u,v),legend:P&&function(e){var t=e.data,n=e.legendName;return{data:t,formatter:function(e){return null!=n[e]?n[e]:e}}}({data:h,legendName:b}),series:function(e){var t=e.dimension,n=e.measures,r=e.rows,i=e.sequence,o=e.ascending,a=e.label,s=e.labelLine,c=e.itemStyle,u=e.filterZero,l=e.useDefaultOrder,f={type:"funnel"},p=r.sort(function(e,n){return i.indexOf(e[t])-i.indexOf(n[t])});u&&(p=p.filter(function(e){return e[n]}));var h=!1;p.some(function(e,t){if(t&&e[n]>p[t-1][n])return h=!0,!0});var d=100/p.length;return f.data=h&&!l?p.slice().reverse().map(function(e,r){return{name:e[t],value:(r+1)*d,realValue:e[n]}}):p.map(function(e){return{name:e[t],value:e[n],realValue:e[n]}}),o&&(f.sort="ascending"),a&&(f.label=a),s&&(f.labelLine=s),c&&(f.itemStyle=c),f}({dimension:f,measures:M,rows:s,sequence:h,ascending:g,label:m,labelLine:y,itemStyle:w,filterZero:S,useDefaultOrder:_})}}},246:function(e,t,n){var r=n(1);n(247),n(248);var i=n(101),o=n(249),a=n(111);r.registerVisual(i("funnel")),r.registerLayout(o),r.registerProcessor(a("funnel"))},247:function(e,t,n){var r=n(1),i=n(75),o=n(10).defaultEmphasis,a=r.extendSeriesModel({type:"series.funnel",init:function(e){a.superApply(this,"init",arguments),this.legendDataProvider=function(){return this.getRawData()},this._defaultLabelLine(e)},getInitialData:function(e,t){return i(this,["value"])},_defaultLabelLine:function(e){o(e,"labelLine",["show"]);var t=e.labelLine,n=e.emphasis.labelLine;t.show=t.show&&e.label.show,n.show=n.show&&e.emphasis.label.show},getDataParams:function(e){var t=this.getData(),n=a.superCall(this,"getDataParams",e),r=t.mapDimension("value"),i=t.getSum(r);return n.percent=i?+(t.get(r,e)/i*100).toFixed(2):0,n.$vars.push("percent"),n},defaultOption:{zlevel:0,z:2,legendHoverLink:!0,left:80,top:60,right:80,bottom:60,minSize:"0%",maxSize:"100%",sort:"descending",gap:0,funnelAlign:"center",label:{show:!0,position:"outer"},labelLine:{show:!0,length:20,lineStyle:{width:1,type:"solid"}},itemStyle:{borderColor:"#fff",borderWidth:1},emphasis:{label:{show:!0}}}}),s=a;e.exports=s},248:function(e,t,n){var r=n(4),i=n(0),o=n(83);function a(e,t){r.Group.call(this);var n=new r.Polygon,i=new r.Polyline,o=new r.Text;function a(){i.ignore=i.hoverIgnore,o.ignore=o.hoverIgnore}function s(){i.ignore=i.normalIgnore,o.ignore=o.normalIgnore}this.add(n),this.add(i),this.add(o),this.updateData(e,t,!0),this.on("emphasis",a).on("normal",s).on("mouseover",a).on("mouseout",s)}var s=a.prototype,c=["itemStyle","opacity"];s.updateData=function(e,t,n){var o=this.childAt(0),a=e.hostModel,s=e.getItemModel(t),u=e.getItemLayout(t),l=e.getItemModel(t).get(c);l=null==l?1:l,o.useStyle({}),n?(o.setShape({points:u.points}),o.setStyle({opacity:0}),r.initProps(o,{style:{opacity:l}},a,t)):r.updateProps(o,{style:{opacity:l},shape:{points:u.points}},a,t);var f=s.getModel("itemStyle"),p=e.getItemVisual(t,"color");o.setStyle(i.defaults({lineJoin:"round",fill:p},f.getItemStyle(["opacity"]))),o.hoverStyle=f.getModel("emphasis").getItemStyle(),this._updateLabel(e,t),r.setHoverStyle(this)},s._updateLabel=function(e,t){var n=this.childAt(1),i=this.childAt(2),o=e.hostModel,a=e.getItemModel(t),s=e.getItemLayout(t).label,c=e.getItemVisual(t,"color");r.updateProps(n,{shape:{points:s.linePoints||s.linePoints}},o,t),r.updateProps(i,{style:{x:s.x,y:s.y}},o,t),i.attr({rotation:s.rotation,origin:[s.x,s.y],z2:10});var u=a.getModel("label"),l=a.getModel("emphasis.label"),f=a.getModel("labelLine"),p=a.getModel("emphasis.labelLine");c=e.getItemVisual(t,"color");r.setLabelStyle(i.style,i.hoverStyle={},u,l,{labelFetcher:e.hostModel,labelDataIndex:t,defaultText:e.getName(t),autoColor:c,useInsideStyle:!!s.inside},{textAlign:s.textAlign,textVerticalAlign:s.verticalAlign}),i.ignore=i.normalIgnore=!u.get("show"),i.hoverIgnore=!l.get("show"),n.ignore=n.normalIgnore=!f.get("show"),n.hoverIgnore=!p.get("show"),n.setStyle({stroke:c}),n.setStyle(f.getModel("lineStyle").getLineStyle()),n.hoverStyle=p.getModel("lineStyle").getLineStyle()},i.inherits(a,r.Group);var u=o.extend({type:"funnel",render:function(e,t,n){var r=e.getData(),i=this._data,o=this.group;r.diff(i).add(function(e){var t=new a(r,e);r.setItemGraphicEl(e,t),o.add(t)}).update(function(e,t){var n=i.getItemGraphicEl(t);n.updateData(r,e),o.add(n),r.setItemGraphicEl(e,n)}).remove(function(e){var t=i.getItemGraphicEl(e);o.remove(t)}).execute(),this._data=r},remove:function(){this.group.removeAll(),this._data=null},dispose:function(){}});e.exports=u},249:function(e,t,n){var r=n(14),i=n(7),o=i.parsePercent,a=i.linearMap;e.exports=function(e,t,n){e.eachSeriesByType("funnel",function(e){var n=e.getData(),i=n.mapDimension("value"),s=e.get("sort"),c=function(e,t){return r.getLayoutRect(e.getBoxLayoutParams(),{width:t.getWidth(),height:t.getHeight()})}(e,t),u=function(e,t){for(var n=e.mapDimension("value"),r=e.mapArray(n,function(e){return e}),i=[],o="ascending"===t,a=0,s=e.count();a<s;a++)i[a]=a;return"function"==typeof t?i.sort(t):"none"!==t&&i.sort(function(e,t){return o?r[e]-r[t]:r[t]-r[e]}),i}(n,s),l=[o(e.get("minSize"),c.width),o(e.get("maxSize"),c.width)],f=n.getDataExtent(i),p=e.get("min"),h=e.get("max");null==p&&(p=Math.min(f[0],0)),null==h&&(h=f[1]);var d=e.get("funnelAlign"),v=e.get("gap"),g=(c.height-v*(n.count()-1))/n.count(),m=c.y,y=function(e,t){var r,o=n.get(i,e)||0,s=a(o,[p,h],l,!0);switch(d){case"left":r=c.x;break;case"center":r=c.x+(c.width-s)/2;break;case"right":r=c.x+c.width-s}return[[r,t],[r+s,t]]};"ascending"===s&&(g=-g,v=-v,m+=c.height,u=u.reverse());for(var x=0;x<u.length;x++){var b=u[x],w=u[x+1],S=n.getItemModel(b).get("itemStyle.height");null==S?S=g:(S=o(S,c.height),"ascending"===s&&(S=-S));var _=y(b,m),L=y(w,m+S);m+=S+v,n.setItemLayout(b,{points:_.concat(L.slice().reverse())})}!function(e){e.each(function(t){var n,r,i,o,a=e.getItemModel(t),s=a.getModel("label").get("position"),c=a.getModel("labelLine"),u=e.getItemLayout(t),l=u.points,f="inner"===s||"inside"===s||"center"===s;if(f)n="center",o=[[r=(l[0][0]+l[1][0]+l[2][0]+l[3][0])/4,i=(l[0][1]+l[1][1]+l[2][1]+l[3][1])/4],[r,i]];else{var p,h,d,v=c.get("length");"left"===s?(p=(l[3][0]+l[0][0])/2,h=(l[3][1]+l[0][1])/2,r=(d=p-v)-5,n="right"):(p=(l[1][0]+l[2][0])/2,h=(l[1][1]+l[2][1])/2,r=(d=p+v)+5,n="left"),o=[[p,h],[d,h]],i=h}u.label={linePoints:o,x:r,y:i,verticalAlign:"middle",textAlign:n,inside:f}})}(n)})}},26:function(e,t,n){"use strict";var r=n(41),i=n(13),o=n(48),a=n(9),s=n(8),c=n(58),u=n(15),l=n(60),f=n(2)("iterator"),p=!([].keys&&"next"in[].keys()),h=function(){return this};e.exports=function(e,t,n,d,v,g,m){c(n,t,d);var y,x,b,w=function(e){if(!p&&e in P)return P[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},S=t+" Iterator",_="values"==v,L=!1,P=e.prototype,M=P[f]||P["@@iterator"]||v&&P[v],I=M||w(v),j=v?_?w("entries"):I:void 0,O="Array"==t&&P.entries||M;if(O&&(b=l(O.call(new e)))!==Object.prototype&&b.next&&(u(b,S,!0),r||"function"==typeof b[f]||a(b,f,h)),_&&M&&"values"!==M.name&&(L=!0,I=function(){return M.call(this)}),r&&!m||!p&&!L&&P[f]||a(P,f,I),s[t]=I,s[S]=h,v)if(y={values:_?I:w("values"),keys:g?I:w("keys"),entries:j},m)for(x in y)x in P||o(P,x,y[x]);else i(i.P+i.F*(p||L),t,y);return y}},27:function(e,t,n){var r=n(3).document;e.exports=r&&r.documentElement},28:function(e,t,n){var r=n(19),i=n(2)("toStringTag"),o="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),i))?n:o?r(t):"Object"==(a=r(t))&&"function"==typeof t.callee?"Arguments":a}},29:function(e,t,n){var r=n(5),i=n(21),o=n(2)("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||void 0==(n=r(a)[o])?t:i(n)}},30:function(e,t,n){var r,i,o,a=n(20),s=n(67),c=n(27),u=n(43),l=n(3),f=l.process,p=l.setImmediate,h=l.clearImmediate,d=l.MessageChannel,v=l.Dispatch,g=0,m={},y=function(){var e=+this;if(m.hasOwnProperty(e)){var t=m[e];delete m[e],t()}},x=function(e){y.call(e.data)};p&&h||(p=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return m[++g]=function(){s("function"==typeof e?e:Function(e),t)},r(g),g},h=function(e){delete m[e]},"process"==n(19)(f)?r=function(e){f.nextTick(a(y,e,1))}:v&&v.now?r=function(e){v.now(a(y,e,1))}:d?(o=(i=new d).port2,i.port1.onmessage=x,r=a(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(e){l.postMessage(e+"","*")},l.addEventListener("message",x,!1)):r="onreadystatechange"in u("script")?function(e){c.appendChild(u("script")).onreadystatechange=function(){c.removeChild(this),y.call(e)}}:function(e){setTimeout(a(y,e,1),0)}),e.exports={set:p,clear:h}},31:function(e,t){e.exports=function(e){try{return{e:!1,v:e()}}catch(e){return{e:!0,v:e}}}},32:function(e,t,n){var r=n(5),i=n(37),o=n(17);e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e);return(0,n.resolve)(t),n.promise}},355:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),i=n.n(r),o=n(246),a=(n.n(o),n(212)),s=n(33);t.default=i()({},s.a,{name:"CbiFunnelChart",data:function(){return this.chartHandler=a.a,{}}})},46:function(e,t,n){"use strict";var r=n(57)(!0);n(26)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=r(t,n),this._i+=e.length,{value:e,done:!1})})},47:function(e,t){},48:function(e,t,n){e.exports=n(9)},49:function(e,t,n){var r=n(5),i=n(59),o=n(96),a=n(44)("IE_PROTO"),s=function(){},c=function(){var e,t=n(43)("iframe"),r=o.length;for(t.style.display="none",n(27).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;r--;)delete c.prototype[o[r]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(s.prototype=r(e),n=new s,s.prototype=null,n[a]=e):n=c(),void 0===t?n:i(n,t)}},50:function(e,t,n){n(61);for(var r=n(3),i=n(9),o=n(8),a=n(2)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var u=s[c],l=r[u],f=l&&l.prototype;f&&!f[a]&&i(f,a,u),o[u]=o.Array}},51:function(e,t,n){var r=n(5);e.exports=function(e,t,n,i){try{return i?t(r(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&r(o.call(e)),t}}},52:function(e,t,n){var r=n(8),i=n(2)("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[i]===e)}},53:function(e,t,n){var r=n(28),i=n(2)("iterator"),o=n(8);e.exports=n(6).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||o[r(e)]}},54:function(e,t,n){var r=n(2)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var o=[7],a=o[r]();a.next=function(){return{done:n=!0}},o[r]=function(){return a},e(o)}catch(e){}return n}},55:function(e,t,n){e.exports={default:n(56),__esModule:!0}},56:function(e,t,n){n(47),n(46),n(50),n(64),n(72),n(73),e.exports=n(6).Promise},57:function(e,t,n){var r=n(98),i=n(97);e.exports=function(e){return function(t,n){var o,a,s=String(i(t)),c=r(n),u=s.length;return c<0||c>=u?e?"":void 0:(o=s.charCodeAt(c))<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?e?s.charAt(c):o:e?s.slice(c,c+2):a-56320+(o-55296<<10)+65536}}},58:function(e,t,n){"use strict";var r=n(49),i=n(81),o=n(15),a={};n(9)(a,n(2)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(a,{next:i(1,n)}),o(e,t+" Iterator")}},59:function(e,t,n){var r=n(16),i=n(5),o=n(79);e.exports=n(22)?Object.defineProperties:function(e,t){i(e);for(var n,a=o(t),s=a.length,c=0;s>c;)r.f(e,n=a[c++],t[n]);return e}},60:function(e,t,n){var r=n(36),i=n(88),o=n(44)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),r(e,o)?e[o]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},61:function(e,t,n){"use strict";var r=n(62),i=n(63),o=n(8),a=n(76);e.exports=n(26)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):i(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},62:function(e,t){e.exports=function(){}},63:function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},64:function(e,t,n){"use strict";var r,i,o,a,s=n(41),c=n(3),u=n(20),l=n(28),f=n(13),p=n(37),h=n(21),d=n(65),v=n(66),g=n(29),m=n(30).set,y=n(68)(),x=n(17),b=n(31),w=n(69),S=n(32),_=c.TypeError,L=c.process,P=L&&L.versions,M=P&&P.v8||"",I=c.Promise,j="process"==l(L),O=function(){},T=i=x.f,A=!!function(){try{var e=I.resolve(1),t=(e.constructor={})[n(2)("species")]=function(e){e(O,O)};return(j||"function"==typeof PromiseRejectionEvent)&&e.then(O)instanceof t&&0!==M.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(e){}}(),D=function(e){var t;return!(!p(e)||"function"!=typeof(t=e.then))&&t},k=function(e,t){if(!e._n){e._n=!0;var n=e._c;y(function(){for(var r=e._v,i=1==e._s,o=0,a=function(t){var n,o,a,s=i?t.ok:t.fail,c=t.resolve,u=t.reject,l=t.domain;try{s?(i||(2==e._h&&N(e),e._h=1),!0===s?n=r:(l&&l.enter(),n=s(r),l&&(l.exit(),a=!0)),n===t.promise?u(_("Promise-chain cycle")):(o=D(n))?o.call(n,c,u):c(n)):u(r)}catch(e){l&&!a&&l.exit(),u(e)}};n.length>o;)a(n[o++]);e._c=[],e._n=!1,t&&!e._h&&E(e)})}},E=function(e){m.call(c,function(){var t,n,r,i=e._v,o=C(e);if(o&&(t=b(function(){j?L.emit("unhandledRejection",i,e):(n=c.onunhandledrejection)?n({promise:e,reason:i}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",i)}),e._h=j||C(e)?2:1),e._a=void 0,o&&t.e)throw t.v})},C=function(e){return 1!==e._h&&0===(e._a||e._c).length},N=function(e){m.call(c,function(){var t;j?L.emit("rejectionHandled",e):(t=c.onrejectionhandled)&&t({promise:e,reason:e._v})})},V=function(e){var t=this;t._d||(t._d=!0,(t=t._w||t)._v=e,t._s=2,t._a||(t._a=t._c.slice()),k(t,!0))},R=function(e){var t,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw _("Promise can't be resolved itself");(t=D(e))?y(function(){var r={_w:n,_d:!1};try{t.call(e,u(R,r,1),u(V,r,1))}catch(e){V.call(r,e)}}):(n._v=e,n._s=1,k(n,!1))}catch(e){V.call({_w:n,_d:!1},e)}}};A||(I=function(e){d(this,I,"Promise","_h"),h(e),r.call(this);try{e(u(R,this,1),u(V,this,1))}catch(e){V.call(this,e)}},(r=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(70)(I.prototype,{then:function(e,t){var n=T(g(this,I));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=j?L.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&k(this,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),o=function(){var e=new r;this.promise=e,this.resolve=u(R,e,1),this.reject=u(V,e,1)},x.f=T=function(e){return e===I||e===a?new o(e):i(e)}),f(f.G+f.W+f.F*!A,{Promise:I}),n(15)(I,"Promise"),n(71)("Promise"),a=n(6).Promise,f(f.S+f.F*!A,"Promise",{reject:function(e){var t=T(this);return(0,t.reject)(e),t.promise}}),f(f.S+f.F*(s||!A),"Promise",{resolve:function(e){return S(s&&this===a?I:this,e)}}),f(f.S+f.F*!(A&&n(54)(function(e){I.all(e).catch(O)})),"Promise",{all:function(e){var t=this,n=T(t),r=n.resolve,i=n.reject,o=b(function(){var n=[],o=0,a=1;v(e,!1,function(e){var s=o++,c=!1;n.push(void 0),a++,t.resolve(e).then(function(e){c||(c=!0,n[s]=e,--a||r(n))},i)}),--a||r(n)});return o.e&&i(o.v),n.promise},race:function(e){var t=this,n=T(t),r=n.reject,i=b(function(){v(e,!1,function(e){t.resolve(e).then(n.resolve,r)})});return i.e&&r(i.v),n.promise}})},65:function(e,t){e.exports=function(e,t,n,r){if(!(e instanceof t)||void 0!==r&&r in e)throw TypeError(n+": incorrect invocation!");return e}},66:function(e,t,n){var r=n(20),i=n(51),o=n(52),a=n(5),s=n(102),c=n(53),u={},l={};(t=e.exports=function(e,t,n,f,p){var h,d,v,g,m=p?function(){return e}:c(e),y=r(n,f,t?2:1),x=0;if("function"!=typeof m)throw TypeError(e+" is not iterable!");if(o(m)){for(h=s(e.length);h>x;x++)if((g=t?y(a(d=e[x])[0],d[1]):y(e[x]))===u||g===l)return g}else for(v=m.call(e);!(d=v.next()).done;)if((g=i(v,y,d.value,t))===u||g===l)return g}).BREAK=u,t.RETURN=l},67:function(e,t){e.exports=function(e,t,n){var r=void 0===n;switch(t.length){case 0:return r?e():e.call(n);case 1:return r?e(t[0]):e.call(n,t[0]);case 2:return r?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return r?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return r?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)}},68:function(e,t,n){var r=n(3),i=n(30).set,o=r.MutationObserver||r.WebKitMutationObserver,a=r.process,s=r.Promise,c="process"==n(19)(a);e.exports=function(){var e,t,n,u=function(){var r,i;for(c&&(r=a.domain)&&r.exit();e;){i=e.fn,e=e.next;try{i()}catch(r){throw e?n():t=void 0,r}}t=void 0,r&&r.enter()};if(c)n=function(){a.nextTick(u)};else if(!o||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var l=s.resolve(void 0);n=function(){l.then(u)}}else n=function(){i.call(r,u)};else{var f=!0,p=document.createTextNode("");new o(u).observe(p,{characterData:!0}),n=function(){p.data=f=!f}}return function(r){var i={fn:r,next:void 0};t&&(t.next=i),e||(e=i,n()),t=i}}},69:function(e,t,n){var r=n(3).navigator;e.exports=r&&r.userAgent||""},70:function(e,t,n){var r=n(9);e.exports=function(e,t,n){for(var i in t)n&&e[i]?e[i]=t[i]:r(e,i,t[i]);return e}},71:function(e,t,n){"use strict";var r=n(3),i=n(6),o=n(16),a=n(22),s=n(2)("species");e.exports=function(e){var t="function"==typeof i[e]?i[e]:r[e];a&&t&&!t[s]&&o.f(t,s,{configurable:!0,get:function(){return this}})}},72:function(e,t,n){"use strict";var r=n(13),i=n(6),o=n(3),a=n(29),s=n(32);r(r.P+r.R,"Promise",{finally:function(e){var t=a(this,i.Promise||o.Promise),n="function"==typeof e;return this.then(n?function(n){return s(t,e()).then(function(){return n})}:e,n?function(n){return s(t,e()).then(function(){throw n})}:e)}})},73:function(e,t,n){"use strict";var r=n(13),i=n(17),o=n(31);r(r.S,"Promise",{try:function(e){var t=i.f(this),n=o(e);return(n.e?t.reject:t.resolve)(n.v),t.promise}})},75:function(e,t,n){var r=n(99),i=n(77),o=n(0),a=o.extend,s=o.isArray;e.exports=function(e,t,n){t=s(t)&&{coordDimensions:t}||a({},t);var o=e.getSource(),c=r(o,t),u=new i(c,e);return u.initData(o,n),u}},8:function(e,t){e.exports={}}},[355])});
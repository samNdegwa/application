if(!_.wordtree){_.wordtree=1;(function($){var a5=function(){$.Xq.call(this);$.T(this.va,bma)},b5=function(a,b){$.Vw.call(this);$.Ut(this,this,this.pg,this.Dg,this.Dv,this.pg,null,null);this.jr=null;this.lu=[];this.hh=[];this.zN=this.KK=null;this.gg=[];this.Rs=[];$.T(this.va,[["minFontSize",4,1],["maxFontSize",4,1],["postfix",4,1],["fontFamily",4,1],["fontStyle",16,1],["fontWeight",4,1],["fontColor",16,1],["fontOpacity",16,1],["fontDecoration",16,1]]);this.data(a,b)},cma=function(a,b){var c=b.getParent();if(c){for(var d=0;d<c.Zb();d++){var e=
c.Qd(d);e!=b&&e.o("hidden",!0)}cma(a,c)}},dma=function(a){for(var b=0;b<a.hh.length;b++)a.hh[b].o("hidden",!1)},ema=function(a,b,c){if(c.length){for(var d=b.zl(),e=!1,f=0;f<b.Zb();f++)if(d[f].get("value")==c[0]){e=!0;break}e?(c.shift(),b=d[f]):(b=b.gc({value:c[0]}),c.shift());return ema(a,b,c)}return b},fma=function(a){a=a.split(/\s*(.+?(?:[?!]+|$|\.(?=\s+[A-Z]|$)))\s*/);return a=(0,$.Ye)(a,function(a){return!!a.length})},c5=function(a){a=a.split(/([!?,;:.&"-]+|\S*[A-Z]\.|\S*(?:[^!?,;:.\s&-]))/);
return a=(0,$.Ye)(a,function(a){return a.length&&" "!=a})},gma=function(a,b){null!=a.na&&($.Yq(a.na,a.Gd,a),a.na.cd());a.na=b;$.L(a.na,a.Gd,a);a.u(4100,1)},hma=function(a,b,c){if(b){var d=b.get("fontSize");if(null==d){if((d=b.getParent())&&(1==d.Zb()||c))return d=hma(a,d,c),b.o("fontSize",d),d;c=a.i("maxFontSize");a=a.i("minFontSize");d=b.o("height")/1.5;d=$.Za(d,a,c);b.o("fontSize",d)}return d}return 0},ima=function(a,b){if(b){var c=b.Zb(),d=0;if(c)for(var e=0;e<c;e++)d+=ima(a,b.Qd(e));else d=b.get("weight")||
1;b.o("leafCount",d).o("weight",d);return d}return 0},jma=function(a,b,c,d,e,f){if(b){b.o("connectorInXPosition",c[0]).o("connectorInYPosition",c[1]).o("connectorOutXPosition",c[0]+a.YU(b)).o("connectorOutYPosition",c[1]);var h=a.Sf.$a();if(d<h){c=a.ul();var k=b.Zb(),l=c.i("length"),m=c.i("offset");c=c.i("curveFactor");var p=a.i("minFontSize");if(k){if(1<k){var q=p/10;e+=q;f-=q}q=e;for(var r=!1,t,u=0;u<k;u++)if(t=b.Qd(u),t.o("hidden")){r=!0;break}if((f-e)/k<1.5*p&&1<k){k="+"+b.o("leafCount")+" "+
a.i("postfix");var v=(f+e)/2;m=d;d=a.px(m,v,k,b.o("fontSize")||p,a.i("fontFamily"),a.i("fontWeight"));v-=d.oG()/2;d.y(v);d.tag.node=b;d.tag.z1=!0;k=d.OS();m+k>=h&&d.visible(!1);a.iC(b.o("connectorOutXPosition"),b.o("connectorOutYPosition"),b.o("connectorOutXPosition")+20,(f+e)/2,c)}else for(r&&(d-=l+m),u=0;u<k;u++)if(t=b.Qd(u),!t.o("hidden")){m=t.o("leafCount");h=b.o("leafCount");h=r?f-e:(f-e)*Math.max(1,m)/Math.max(1,h);p=q;var w=0;q=p+h;m=d;v=p+h/2;var x=[m,v];t.o("height",h).o("nodePositionX",
m).o("nodePositionY",v);a.FK(t,r);v=b.o("textHeight")/2;x[1]-=v;1!=t.Zb()&&(w+=l);m=a.YU(t);v=[x[0],x[1]+v];w+=x[0]+m;jma(a,t,v,w,p,p+h);1<b.Zb()&&!r&&a.iC(b.o("connectorOutXPosition"),b.o("connectorOutYPosition"),t.o("connectorInXPosition"),t.o("connectorInYPosition"),c)}}}}},kma=function(a,b){var c=new b5(a,b);c.Fa("wordtree");return c};$.H(a5,$.Xq);var d5={};$.gq(d5,[[0,"curveFactor",$.Sq],[0,"offset",$.Pq],[0,"length",$.Pq],[1,"stroke",$.Bq]]);$.U(a5,d5);a5.prototype.pa=8201;
var bma=[["curveFactor",0,8],["offset",0,8],["length",0,8],["stroke",0,8192]];a5.prototype.F=function(){var a=a5.B.F.call(this);$.Fq(this,d5,a);return a};a5.prototype.X=function(a,b){a5.B.X.call(this,a,b);$.xq(this,d5,a,b)};$.H(b5,$.Vw);b5.prototype.pa=$.Vw.prototype.pa;b5.prototype.sa=$.Vw.prototype.sa|4112;var e5=function(){var a={};$.gq(a,[[0,"minFontSize",$.Pq],[0,"maxFontSize",$.Pq],[0,"fontFamily",$.mq],[0,"fontStyle",$.Wk],[0,"fontWeight",$.kq],[0,"fontColor",$.nq],[0,"fontOpacity",$.oq],[0,"fontDecoration",$.Vk],[0,"postfix",function(a){if($.n(a))return null===a&&(a=this.jf("postfix")),String(a)}]]);return a}();$.U(b5,e5);$.g=b5.prototype;$.g.Oa=function(){return"wordtree"};
$.g.tj=function(){return!(this.na&&(!this.na||this.na.Zb()))};$.g.Te=function(){return[]};$.g.yt=function(){return[this]};$.g.KT=function(a,b){return function(c){return a*(1-c)+b*c}};$.g.gk=function(a,b){return $.St(this.data(),b)};$.g.ul=function(a){this.um||(this.um=new a5,$.W(this,"connectors",this.um),$.L(this.um,this.eha,this));return a?(this.um.K(a),this):this.um};
$.g.YB=function(a){this.vl||(this.vl=new $.fw);var b={};a&&(b.value={value:a.get("value"),type:"string"},b.weight={value:a.o("weight"),type:"number"});this.vl.yg(a);return $.Pu(this.vl,b)};$.g.Iq=function(a){if(a){"array"==$.ka(a)&&(a=a[0]);if(!$.K(a,$.Ft)&&(a=this.data().jp("value",a)[0],!a))return;this.KK=a;cma(this,a);this.u(20,1)}};$.g.qx=function(){dma(this);this.KK&&this.KK.getParent()&&this.Iq(this.KK.getParent());return this};
$.g.eha=function(a){var b=0;$.X(a,8192)&&(b|=16);$.X(a,8)&&(b|=4);this.u(b,1)};$.g.Gd=function(a){$.X(a,16)&&this.u(4100,9)};$.g.Dv=function(a){a.button==$.Mi&&(a=a.domTarget.tag)&&a.node&&(dma(this),this.Iq(a.node))};$.g.pg=function(a){var b=a.domTarget.tag;if(b&&b.node&&!b.z1){var c=b.node;b=this.Va();$.ow(b,a.clientX,a.clientY,this.YB(c))}else this.Va().Nc()};$.g.Dg=function(){this.Va().Nc()};
$.g.eX=function(a){if("implicit"==this.me){if($.n(a)){if(this.zN!=a||this.Q_){this.Q_=!1;if(null===a||/^[\s\xa0]*$/.test(a))a=this.Mv[0][0];this.zN=a;for(var b=[],c=0;c<this.Mv.length;c++){var d=(0,$.za)(this.Mv[c],a);-1!=d&&b.push($.Ja(this.Mv[c],d))}b.length||(b[0]=[a]);a=b[0][0];$.V(this.data());this.data().Zb()&&this.data().cj(0);c={value:a};c=this.data().kg(c,0);for(d=0;d<b.length;d++){var e=b[d];e[0]==a&&(e.shift(),ema(this,c,e))}this.data().da(!0)}return this}return this.zN}return this};
$.g.data=function(a,b){if($.n(a)){if($.K(a,$.Ct)||$.K(a,$.zt))this.na!=a&&(this.na&&$.Yq(this.na,this.Gd,this),this.na=a,$.L(this.na,this.Gd,this),this.me="explicit",this.u(4100,1));else if("array"==$.ka(a)&&"object"==$.ka(a[0]))this.data($.Qt(a,b));else if(null===a)this.na&&($.Yq(this.na,this.Gd),this.na.cd()),this.na=null,this.u(4100,1);else{this.me="implicit";this.gg=a;if("array"==$.ka(a)&&a.length)if(this.Mv=[],"array"==$.ka(a[0]))for(var c=0;c<a.length;c++)this.Mv.push(c5(a[c][0]));else{if("string"==
$.ka(a[0]))for(c=0;c<a.length;c++)this.Mv.push(c5(a[c]))}else if("string"==$.ka(a)){c=fma(a);for(var d=[],e=0;e<c.length;e++)d.push(c5(c[e]));this.Mv=d}else this.Mv=[[a.toString()]];this.na||gma(this,$.Qt());this.Q_=!0;this.eX(this.Mv[0][0])}return this}return this.na};$.g.Yi=function(){var a;0<this.Rs.length?a=this.Rs.pop():a=new $.Mh;return a};$.g.YU=function(a){if(a){var b=a.o("textWidth"),c=this.ul().i("offset"),d=a.getParent();d&&1<d.Zb()&&(b+=c);1<a.Zb()&&(b+=c);return b}return 0};
$.g.depth=function(a){if(a){var b=a.Zb(),c=0,d=a.getParent();d&&(c=d.o("depth")+1);a.o("depth",c);for(c=0;c<b;c++)this.depth(a.Qd(c))}};$.g.px=function(a,b,c,d,e,f){var h=this.Yi();h.tag||(h.tag={});h.text(c);h.y(b);h.x(a);h.fontSize(d);h.fontFamily(e);h.fontWeight(f);h.width(null);h.visible(!0);this.lu.push(h);return h};$.g.iC=function(a,b,c,d,e){var f=this.VB,h=this.KT(a,c),k=h(e);e=h(1-e);f.moveTo(a,b).pk(k,b,e,d,c,d)};
$.g.FK=function(a,b){var c=0,d=a.getParent();d&&1<d.Zb()&&(c+=this.ul().i("offset"));var e=a.get("value");1==a.Zb()&&(e+=" ");c=a.o("nodePositionX")+c;d=a.o("nodePositionY");var f=a.get("fontFamily")||this.i("fontFamily");var h=a.get("fontWeight")||this.i("fontWeight");var k=hma(this,a,b);f=this.px(c,d,e,k,f,h);f.tag={node:a,type:"node",z1:!1};h=f.oG();e=f.OS();a.o("textHeight",h).o("textWidth",e);d-=h/2;h=c+e;k=this.Sf.$a();h>k&&f.width(e-(h-k)-.05*e);f.x(c).y(d)};
$.g.Ri=function(a){if(!this.bf())if(this.wa||(this.wa=this.Ma.Md(),this.VB=new $.zg,this.wa.zIndex(30)),this.tj())this.wa.Di();else{var b=this.jr=this.na.Qd(0);this.J(4096)&&(ima(this,this.jr),this.depth(this.jr),this.hh.length=0,this.hh=this.data().yv().CB(),this.I(4096));if(this.J(4)){this.wa.Di();var c=a.left;var d=a.top;a=a.height;for(var e=this.ul(),f=e.i("offset"),h=0;h<this.lu.length;h++){var k=this.lu[h];this.Rs.push(k)}this.lu.length=0;this.VB.clear();this.wa.suspend();k=[c+f,d+a/2];b.o("nodePositionX",
k[0]).o("nodePositionY",k[1]).o("height",a);this.FK(b,!1);c=c+f+this.YU(b)+(1<b.Zb()?e.i("length"):0);jma(this,b,k,c,d,d+a);this.VB.parent(this.wa);this.I(4);for(h=0;h<this.lu.length;h++)this.lu[h].parent(this.wa);this.wa.resume();this.u(16)}if(this.J(16)){this.wa.suspend();this.VB.stroke(this.ul().i("stroke"));d=this.i("fontColor");c=this.i("fontDecoration");a=this.i("fontStyle");e=this.i("fontOpacity");for(f=0;f<this.lu.length;f++){b=this.lu[f];if(b.tag&&b.tag.node){var l=b.tag.node;var m=l.get("fontColor")||
d;var p=l.get("fontDecoration")||c;var q=l.get("fontStyle")||a;l=l.get("fontOpacity")||e}b.color(m);b.Eq(p);b.fontStyle(q);b.opacity(l);b.nm(!1)}this.wa.resume();this.I(16)}}};$.g.F=function(){var a=b5.B.F.call(this);$.Fq(this,e5,a);"implicit"==this.me&&(a.wordTreeRawData=JSON.stringify(this.gg),a.word=this.zN);a.treeData=this.data().IA(["hidden"]);a.connectors=this.ul().F();return{chart:a}};
$.g.X=function(a,b){b5.B.X.call(this,a,b);$.xq(this,e5,a,b);"wordTreeRawData"in a?(this.data(JSON.parse(a.wordTreeRawData)),"word"in a&&this.eX(a.word),"treeData"in a&&gma(this,$.Et(a.treeData))):"treeData"in a&&this.data($.Et(a.treeData));"connectors"in a&&this.ul().ia(!!b,a.connectors)};$.g.R=function(){b5.B.R.call(this);$.td(this.um,this.VB,this.lu,this.Rs,this.na,this.wa);this.na=this.VB=this.um=null;this.lu.length=0;this.Rs.length=0;this.wa=null};var f5=b5.prototype;f5.connectors=f5.ul;
f5.word=f5.eX;f5.getType=f5.Oa;f5.drillTo=f5.Iq;f5.drillUp=f5.qx;f5.toCsv=f5.gk;f5.noData=f5.Lm;$.Ip.wordtree=kma;$.F("anychart.wordtree",kma);}).call(this,$)}

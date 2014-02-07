// Compiled by ClojureScript 0.0-2156
goog.provide('tailrecursion.hoplon');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.is_ie8 = cljs.core.not.call(null,(window["Node"]));
tailrecursion.hoplon.node_QMARK_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__8940_SHARP_){return (p1__8940_SHARP_ instanceof Node);
}):(function (p1__8941_SHARP_){try{return p1__8941_SHARP_.nodeType;
}catch (e8942){if((e8942 instanceof Error))
{var _ = e8942;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8942;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.vector_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.vector_QMARK_:(function (p1__8943_SHARP_){try{return cljs.core.vector_QMARK_.call(null,p1__8943_SHARP_);
}catch (e8944){if((e8944 instanceof Error))
{var _ = e8944;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8944;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.seq_QMARK__STAR_ = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?cljs.core.seq_QMARK_:(function (p1__8945_SHARP_){try{return cljs.core.seq_QMARK_.call(null,p1__8945_SHARP_);
}catch (e8946){if((e8946 instanceof Error))
{var _ = e8946;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8946;
} else
{return null;
}
}
}}));
cljs.core.set_print_fn_BANG_.call(null,(function (p1__8947_SHARP_){if(cljs.core.truth_((function (){var and__5687__auto__ = console;if(cljs.core.truth_(and__5687__auto__))
{return console.log;
} else
{return and__5687__auto__;
}
})()))
{return console.log(p1__8947_SHARP_);
} else
{return null;
}
}));
tailrecursion.hoplon.safe_nth = (function() {
var safe_nth = null;
var safe_nth__2 = (function (coll,index){return safe_nth.call(null,coll,index,null);
});
var safe_nth__3 = (function (coll,index,not_found){try{return cljs.core.nth.call(null,coll,index,not_found);
}catch (e8949){if((e8949 instanceof Error))
{var _ = e8949;return not_found;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8949;
} else
{return null;
}
}
}});
safe_nth = function(coll,index,not_found){
switch(arguments.length){
case 2:
return safe_nth__2.call(this,coll,index);
case 3:
return safe_nth__3.call(this,coll,index,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
safe_nth.cljs$core$IFn$_invoke$arity$2 = safe_nth__2;
safe_nth.cljs$core$IFn$_invoke$arity$3 = safe_nth__3;
return safe_nth;
})()
;
tailrecursion.hoplon.timeout = (function() {
var timeout = null;
var timeout__1 = (function (f){return timeout.call(null,f,0);
});
var timeout__2 = (function (f,t){return window.setTimeout(f,t);
});
timeout = function(f,t){
switch(arguments.length){
case 1:
return timeout__1.call(this,f);
case 2:
return timeout__2.call(this,f,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
timeout.cljs$core$IFn$_invoke$arity$1 = timeout__1;
timeout.cljs$core$IFn$_invoke$arity$2 = timeout__2;
return timeout;
})()
;
tailrecursion.hoplon.unsplice = (function unsplice(forms){return cljs.core.mapcat.call(null,(function (p1__8950_SHARP_){if(cljs.core.truth_((function (){var or__5699__auto__ = tailrecursion.hoplon.seq_QMARK__STAR_.call(null,p1__8950_SHARP_);if(cljs.core.truth_(or__5699__auto__))
{return or__5699__auto__;
} else
{return tailrecursion.hoplon.vector_QMARK__STAR_.call(null,p1__8950_SHARP_);
}
})()))
{return unsplice.call(null,p1__8950_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8950_SHARP_], null);
}
}),forms);
});
tailrecursion.hoplon.when_dom = (function when_dom(this$,f){return tailrecursion.hoplon.timeout.call(null,(function doit(){if(cljs.core.truth_(document.documentElement.contains(this$)))
{return f.call(null);
} else
{return tailrecursion.hoplon.timeout.call(null,doit,20);
}
}));
});
tailrecursion.hoplon.parse_args = (function parse_args(p__8953){var vec__8955 = p__8953;var head = cljs.core.nth.call(null,vec__8955,0,null);var tail = cljs.core.nthnext.call(null,vec__8955,1);var args = vec__8955;var kw1_QMARK_ = cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first);var mkkw = ((function (kw1_QMARK_){
return (function (p1__8951_SHARP_){return cljs.core.map.call(null,cljs.core.vec,cljs.core.take_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,p1__8951_SHARP_)));
});})(kw1_QMARK_))
;var drkw = ((function (kw1_QMARK_,mkkw){
return (function (p1__8952_SHARP_){return cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.drop_while.call(null,kw1_QMARK_,cljs.core.partition.call(null,2,2,cljs.core.PersistentVector.EMPTY,p1__8952_SHARP_)));
});})(kw1_QMARK_,mkkw))
;if(cljs.core.map_QMARK_.call(null,head))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,tail], null);
} else
{if((head instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,mkkw.call(null,args)),drkw.call(null,args)], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null);
} else
{return null;
}
}
}
});
tailrecursion.hoplon.add_attributes_BANG_ = (function add_attributes_BANG_(this$,attr){var prefix = (function (p1__8956_SHARP_){return p1__8956_SHARP_.substr(0,3);
});var suffix = ((function (prefix){
return (function (p1__8957_SHARP_){return cljs.core.keyword.call(null,p1__8957_SHARP_.substr(3));
});})(prefix))
;var dokey = ((function (prefix,suffix){
return (function (p1__8958_SHARP_){var p = prefix.call(null,p1__8958_SHARP_);return cljs.core.keyword.call(null,((!(cljs.core._EQ_.call(null,"do-",p)))?p1__8958_SHARP_:p1__8958_SHARP_.substr(3)));
});})(prefix,suffix))
;var dos = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ons = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var addcls = ((function (prefix,suffix,dokey,dos,ons){
return (function (p1__8959_SHARP_,p2__8960_SHARP_){return clojure.string.join.call(null," ",cljs.core.into.call(null,cljs.core.set.call(null,clojure.string.split.call(null,p1__8959_SHARP_,/ /)),clojure.string.split.call(null,p2__8960_SHARP_,/ /)));
});})(prefix,suffix,dokey,dos,ons))
;var seq__8991_9017 = cljs.core.seq.call(null,attr);var chunk__8992_9018 = null;var count__8993_9019 = 0;var i__8994_9020 = 0;while(true){
if((i__8994_9020 < count__8993_9019))
{var vec__8995_9021 = cljs.core._nth.call(null,chunk__8992_9018,i__8994_9020);var k_9022 = cljs.core.nth.call(null,vec__8995_9021,0,null);var v_9023 = cljs.core.nth.call(null,vec__8995_9021,1,null);var k_9024__$1 = cljs.core.name.call(null,k_9022);var e_9025 = jQuery(this$);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_9023)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_9024__$1),v_9023);
} else
{if(cljs.core._EQ_.call(null,k_9024__$1,"class"))
{var seq__8996_9026 = cljs.core.seq.call(null,clojure.string.split.call(null,v_9023,/ /));var chunk__8997_9027 = null;var count__8998_9028 = 0;var i__8999_9029 = 0;while(true){
if((i__8999_9029 < count__8998_9028))
{var cls_9030 = cljs.core._nth.call(null,chunk__8997_9027,i__8999_9029);e_9025.addClass(cls_9030);
{
var G__9031 = seq__8996_9026;
var G__9032 = chunk__8997_9027;
var G__9033 = count__8998_9028;
var G__9034 = (i__8999_9029 + 1);
seq__8996_9026 = G__9031;
chunk__8997_9027 = G__9032;
count__8998_9028 = G__9033;
i__8999_9029 = G__9034;
continue;
}
} else
{var temp__4092__auto___9035 = cljs.core.seq.call(null,seq__8996_9026);if(temp__4092__auto___9035)
{var seq__8996_9036__$1 = temp__4092__auto___9035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8996_9036__$1))
{var c__6447__auto___9037 = cljs.core.chunk_first.call(null,seq__8996_9036__$1);{
var G__9038 = cljs.core.chunk_rest.call(null,seq__8996_9036__$1);
var G__9039 = c__6447__auto___9037;
var G__9040 = cljs.core.count.call(null,c__6447__auto___9037);
var G__9041 = 0;
seq__8996_9026 = G__9038;
chunk__8997_9027 = G__9039;
count__8998_9028 = G__9040;
i__8999_9029 = G__9041;
continue;
}
} else
{var cls_9042 = cljs.core.first.call(null,seq__8996_9036__$1);e_9025.addClass(cls_9042);
{
var G__9043 = cljs.core.next.call(null,seq__8996_9036__$1);
var G__9044 = null;
var G__9045 = 0;
var G__9046 = 0;
seq__8996_9026 = G__9043;
chunk__8997_9027 = G__9044;
count__8998_9028 = G__9045;
i__8999_9029 = G__9046;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,k_9024__$1,"css"))
{e_9025.css(cljs.core.clj__GT_js.call(null,v_9023));
} else
{if(cljs.core._EQ_.call(null,"do-",prefix.call(null,k_9024__$1)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,suffix.call(null,k_9024__$1),v_9023);
} else
{if(cljs.core._EQ_.call(null,"on-",prefix.call(null,k_9024__$1)))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,suffix.call(null,k_9024__$1),v_9023);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,false,v_9023))
{e_9025.removeAttr(k_9024__$1);
} else
{if(cljs.core._EQ_.call(null,true,v_9023))
{e_9025.attr(k_9024__$1,k_9024__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{e_9025.attr(k_9024__$1,[cljs.core.str(v_9023)].join(''));
} else
{}
}
}
} else
{}
}
}
}
}
}
{
var G__9047 = seq__8991_9017;
var G__9048 = chunk__8992_9018;
var G__9049 = count__8993_9019;
var G__9050 = (i__8994_9020 + 1);
seq__8991_9017 = G__9047;
chunk__8992_9018 = G__9048;
count__8993_9019 = G__9049;
i__8994_9020 = G__9050;
continue;
}
} else
{var temp__4092__auto___9051 = cljs.core.seq.call(null,seq__8991_9017);if(temp__4092__auto___9051)
{var seq__8991_9052__$1 = temp__4092__auto___9051;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8991_9052__$1))
{var c__6447__auto___9053 = cljs.core.chunk_first.call(null,seq__8991_9052__$1);{
var G__9054 = cljs.core.chunk_rest.call(null,seq__8991_9052__$1);
var G__9055 = c__6447__auto___9053;
var G__9056 = cljs.core.count.call(null,c__6447__auto___9053);
var G__9057 = 0;
seq__8991_9017 = G__9054;
chunk__8992_9018 = G__9055;
count__8993_9019 = G__9056;
i__8994_9020 = G__9057;
continue;
}
} else
{var vec__9000_9058 = cljs.core.first.call(null,seq__8991_9052__$1);var k_9059 = cljs.core.nth.call(null,vec__9000_9058,0,null);var v_9060 = cljs.core.nth.call(null,vec__9000_9058,1,null);var k_9061__$1 = cljs.core.name.call(null,k_9059);var e_9062 = jQuery(this$);if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,v_9060)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,dokey.call(null,k_9061__$1),v_9060);
} else
{if(cljs.core._EQ_.call(null,k_9061__$1,"class"))
{var seq__9001_9063 = cljs.core.seq.call(null,clojure.string.split.call(null,v_9060,/ /));var chunk__9002_9064 = null;var count__9003_9065 = 0;var i__9004_9066 = 0;while(true){
if((i__9004_9066 < count__9003_9065))
{var cls_9067 = cljs.core._nth.call(null,chunk__9002_9064,i__9004_9066);e_9062.addClass(cls_9067);
{
var G__9068 = seq__9001_9063;
var G__9069 = chunk__9002_9064;
var G__9070 = count__9003_9065;
var G__9071 = (i__9004_9066 + 1);
seq__9001_9063 = G__9068;
chunk__9002_9064 = G__9069;
count__9003_9065 = G__9070;
i__9004_9066 = G__9071;
continue;
}
} else
{var temp__4092__auto___9072__$1 = cljs.core.seq.call(null,seq__9001_9063);if(temp__4092__auto___9072__$1)
{var seq__9001_9073__$1 = temp__4092__auto___9072__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9001_9073__$1))
{var c__6447__auto___9074 = cljs.core.chunk_first.call(null,seq__9001_9073__$1);{
var G__9075 = cljs.core.chunk_rest.call(null,seq__9001_9073__$1);
var G__9076 = c__6447__auto___9074;
var G__9077 = cljs.core.count.call(null,c__6447__auto___9074);
var G__9078 = 0;
seq__9001_9063 = G__9075;
chunk__9002_9064 = G__9076;
count__9003_9065 = G__9077;
i__9004_9066 = G__9078;
continue;
}
} else
{var cls_9079 = cljs.core.first.call(null,seq__9001_9073__$1);e_9062.addClass(cls_9079);
{
var G__9080 = cljs.core.next.call(null,seq__9001_9073__$1);
var G__9081 = null;
var G__9082 = 0;
var G__9083 = 0;
seq__9001_9063 = G__9080;
chunk__9002_9064 = G__9081;
count__9003_9065 = G__9082;
i__9004_9066 = G__9083;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,k_9061__$1,"css"))
{e_9062.css(cljs.core.clj__GT_js.call(null,v_9060));
} else
{if(cljs.core._EQ_.call(null,"do-",prefix.call(null,k_9061__$1)))
{cljs.core.swap_BANG_.call(null,dos,cljs.core.assoc,suffix.call(null,k_9061__$1),v_9060);
} else
{if(cljs.core._EQ_.call(null,"on-",prefix.call(null,k_9061__$1)))
{cljs.core.swap_BANG_.call(null,ons,cljs.core.assoc,suffix.call(null,k_9061__$1),v_9060);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(cljs.core._EQ_.call(null,false,v_9060))
{e_9062.removeAttr(k_9061__$1);
} else
{if(cljs.core._EQ_.call(null,true,v_9060))
{e_9062.attr(k_9061__$1,k_9061__$1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{e_9062.attr(k_9061__$1,[cljs.core.str(v_9060)].join(''));
} else
{}
}
}
} else
{}
}
}
}
}
}
{
var G__9084 = cljs.core.next.call(null,seq__8991_9052__$1);
var G__9085 = null;
var G__9086 = 0;
var G__9087 = 0;
seq__8991_9017 = G__9084;
chunk__8992_9018 = G__9085;
count__8993_9019 = G__9086;
i__8994_9020 = G__9087;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,ons)))
{tailrecursion.hoplon.timeout.call(null,(function (){var seq__9005 = cljs.core.seq.call(null,cljs.core.deref.call(null,ons));var chunk__9006 = null;var count__9007 = 0;var i__9008 = 0;while(true){
if((i__9008 < count__9007))
{var vec__9009 = cljs.core._nth.call(null,chunk__9006,i__9008);var k = cljs.core.nth.call(null,vec__9009,0,null);var v = cljs.core.nth.call(null,vec__9009,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__9088 = seq__9005;
var G__9089 = chunk__9006;
var G__9090 = count__9007;
var G__9091 = (i__9008 + 1);
seq__9005 = G__9088;
chunk__9006 = G__9089;
count__9007 = G__9090;
i__9008 = G__9091;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9005);if(temp__4092__auto__)
{var seq__9005__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9005__$1))
{var c__6447__auto__ = cljs.core.chunk_first.call(null,seq__9005__$1);{
var G__9092 = cljs.core.chunk_rest.call(null,seq__9005__$1);
var G__9093 = c__6447__auto__;
var G__9094 = cljs.core.count.call(null,c__6447__auto__);
var G__9095 = 0;
seq__9005 = G__9092;
chunk__9006 = G__9093;
count__9007 = G__9094;
i__9008 = G__9095;
continue;
}
} else
{var vec__9010 = cljs.core.first.call(null,seq__9005__$1);var k = cljs.core.nth.call(null,vec__9010,0,null);var v = cljs.core.nth.call(null,vec__9010,1,null);tailrecursion.hoplon.on_BANG_.call(null,this$,k,v);
{
var G__9096 = cljs.core.next.call(null,seq__9005__$1);
var G__9097 = null;
var G__9098 = 0;
var G__9099 = 0;
seq__9005 = G__9096;
chunk__9006 = G__9097;
count__9007 = G__9098;
i__9008 = G__9099;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
} else
{}
if(cljs.core.seq.call(null,cljs.core.deref.call(null,dos)))
{tailrecursion.hoplon.timeout.call(null,(function (){var seq__9011 = cljs.core.seq.call(null,cljs.core.deref.call(null,dos));var chunk__9012 = null;var count__9013 = 0;var i__9014 = 0;while(true){
if((i__9014 < count__9013))
{var vec__9015 = cljs.core._nth.call(null,chunk__9012,i__9014);var k = cljs.core.nth.call(null,vec__9015,0,null);var v = cljs.core.nth.call(null,vec__9015,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__9011,chunk__9012,count__9013,i__9014,vec__9015,k,v){
return (function (p1__8962_SHARP_,p2__8963_SHARP_,p3__8964_SHARP_,p4__8961_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__8961_SHARP_);
});})(seq__9011,chunk__9012,count__9013,i__9014,vec__9015,k,v))
);
{
var G__9100 = seq__9011;
var G__9101 = chunk__9012;
var G__9102 = count__9013;
var G__9103 = (i__9014 + 1);
seq__9011 = G__9100;
chunk__9012 = G__9101;
count__9013 = G__9102;
i__9014 = G__9103;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9011);if(temp__4092__auto__)
{var seq__9011__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9011__$1))
{var c__6447__auto__ = cljs.core.chunk_first.call(null,seq__9011__$1);{
var G__9104 = cljs.core.chunk_rest.call(null,seq__9011__$1);
var G__9105 = c__6447__auto__;
var G__9106 = cljs.core.count.call(null,c__6447__auto__);
var G__9107 = 0;
seq__9011 = G__9104;
chunk__9012 = G__9105;
count__9013 = G__9106;
i__9014 = G__9107;
continue;
}
} else
{var vec__9016 = cljs.core.first.call(null,seq__9011__$1);var k = cljs.core.nth.call(null,vec__9016,0,null);var v = cljs.core.nth.call(null,vec__9016,1,null);tailrecursion.hoplon.do_BANG_.call(null,this$,k,cljs.core.deref.call(null,v));
cljs.core.add_watch.call(null,v,cljs.core.gensym.call(null),((function (seq__9011,chunk__9012,count__9013,i__9014,vec__9016,k,v,seq__9011__$1,temp__4092__auto__){
return (function (p1__8962_SHARP_,p2__8963_SHARP_,p3__8964_SHARP_,p4__8961_SHARP_){return tailrecursion.hoplon.do_BANG_.call(null,this$,k,p4__8961_SHARP_);
});})(seq__9011,chunk__9012,count__9013,i__9014,vec__9016,k,v,seq__9011__$1,temp__4092__auto__))
);
{
var G__9108 = cljs.core.next.call(null,seq__9011__$1);
var G__9109 = null;
var G__9110 = 0;
var G__9111 = 0;
seq__9011 = G__9108;
chunk__9012 = G__9109;
count__9013 = G__9110;
i__9014 = G__9111;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
} else
{}
return this$;
});
tailrecursion.hoplon.append_child = ((cljs.core.not.call(null,tailrecursion.hoplon.is_ie8))?(function (p1__9112_SHARP_,p2__9113_SHARP_){return p1__9112_SHARP_.appendChild(p2__9113_SHARP_);
}):(function (p1__9114_SHARP_,p2__9115_SHARP_){try{return p1__9114_SHARP_.appendChild(p2__9115_SHARP_);
}catch (e9116){if((e9116 instanceof Error))
{var _ = e9116;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9116;
} else
{return null;
}
}
}}));
tailrecursion.hoplon.add_children_BANG_ = (function add_children_BANG_(this$,kids){var node = (function (p1__9117_SHARP_){if(typeof p1__9117_SHARP_ === 'string')
{return tailrecursion.hoplon.$text.call(null,p1__9117_SHARP_);
} else
{if(cljs.core.truth_(tailrecursion.hoplon.node_QMARK_.call(null,p1__9117_SHARP_)))
{return p1__9117_SHARP_;
} else
{return null;
}
}
});var seq__9122_9126 = cljs.core.seq.call(null,cljs.core.keep.call(null,node,tailrecursion.hoplon.unsplice.call(null,kids)));var chunk__9123_9127 = null;var count__9124_9128 = 0;var i__9125_9129 = 0;while(true){
if((i__9125_9129 < count__9124_9128))
{var x_9130 = cljs.core._nth.call(null,chunk__9123_9127,i__9125_9129);tailrecursion.hoplon.append_child.call(null,this$,x_9130);
{
var G__9131 = seq__9122_9126;
var G__9132 = chunk__9123_9127;
var G__9133 = count__9124_9128;
var G__9134 = (i__9125_9129 + 1);
seq__9122_9126 = G__9131;
chunk__9123_9127 = G__9132;
count__9124_9128 = G__9133;
i__9125_9129 = G__9134;
continue;
}
} else
{var temp__4092__auto___9135 = cljs.core.seq.call(null,seq__9122_9126);if(temp__4092__auto___9135)
{var seq__9122_9136__$1 = temp__4092__auto___9135;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9122_9136__$1))
{var c__6447__auto___9137 = cljs.core.chunk_first.call(null,seq__9122_9136__$1);{
var G__9138 = cljs.core.chunk_rest.call(null,seq__9122_9136__$1);
var G__9139 = c__6447__auto___9137;
var G__9140 = cljs.core.count.call(null,c__6447__auto___9137);
var G__9141 = 0;
seq__9122_9126 = G__9138;
chunk__9123_9127 = G__9139;
count__9124_9128 = G__9140;
i__9125_9129 = G__9141;
continue;
}
} else
{var x_9142 = cljs.core.first.call(null,seq__9122_9136__$1);tailrecursion.hoplon.append_child.call(null,this$,x_9142);
{
var G__9143 = cljs.core.next.call(null,seq__9122_9136__$1);
var G__9144 = null;
var G__9145 = 0;
var G__9146 = 0;
seq__9122_9126 = G__9143;
chunk__9123_9127 = G__9144;
count__9124_9128 = G__9145;
i__9125_9129 = G__9146;
continue;
}
}
} else
{}
}
break;
}
return this$;
});
tailrecursion.hoplon.on_append_BANG_ = (function on_append_BANG_(this$,f){return this$.hoplonIFn = f;
});
Element.prototype.cljs$core$IFn$ = true;
Element.prototype.call = (function() { 
var G__9154__delegate = function (self__,args){var self____$1 = this;var this$ = self____$1;var vec__9148 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__9148,0,null);var kids = cljs.core.nth.call(null,vec__9148,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__9149 = this$;G__9149.hoplonIFn(attr,kids);
return G__9149;
} else
{var G__9150 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__9150,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__9150,kids);
return G__9150;
}
};
var G__9154 = function (self__,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__9154__delegate.call(this,self__,args);};
G__9154.cljs$lang$maxFixedArity = 1;
G__9154.cljs$lang$applyTo = (function (arglist__9155){
var self__ = cljs.core.first(arglist__9155);
var args = cljs.core.rest(arglist__9155);
return G__9154__delegate(self__,args);
});
G__9154.cljs$core$IFn$_invoke$arity$variadic = G__9154__delegate;
return G__9154;
})()
;
Element.prototype.apply = (function (self__,args9147){var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9147)));
});
Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9156__delegate = function (args){var this$ = this;var vec__9151 = tailrecursion.hoplon.parse_args.call(null,args);var attr = cljs.core.nth.call(null,vec__9151,0,null);var kids = cljs.core.nth.call(null,vec__9151,1,null);if(cljs.core.truth_(this$.hoplonIFn))
{var G__9152 = this$;G__9152.hoplonIFn(attr,kids);
return G__9152;
} else
{var G__9153 = this$;tailrecursion.hoplon.add_attributes_BANG_.call(null,G__9153,attr);
tailrecursion.hoplon.add_children_BANG_.call(null,G__9153,kids);
return G__9153;
}
};
var G__9156 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9156__delegate.call(this,args);};
G__9156.cljs$lang$maxFixedArity = 0;
G__9156.cljs$lang$applyTo = (function (arglist__9157){
var args = cljs.core.seq(arglist__9157);
return G__9156__delegate(args);
});
G__9156.cljs$core$IFn$_invoke$arity$variadic = G__9156__delegate;
return G__9156;
})()
;
Element.prototype.cljs$core$IPrintWithWriter$ = true;
Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var this$__$1 = this;return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});
tailrecursion.hoplon.make_elem_ctor = (function make_elem_ctor(tag){return (function() { 
var G__9158__delegate = function (args){return cljs.core.apply.call(null,document.createElement(tag),args);
};
var G__9158 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9158__delegate.call(this,args);};
G__9158.cljs$lang$maxFixedArity = 0;
G__9158.cljs$lang$applyTo = (function (arglist__9159){
var args = cljs.core.seq(arglist__9159);
return G__9158__delegate(args);
});
G__9158.cljs$core$IFn$_invoke$arity$variadic = G__9158__delegate;
return G__9158;
})()
;
});
tailrecursion.hoplon.a = tailrecursion.hoplon.make_elem_ctor.call(null,"a");
tailrecursion.hoplon.abbr = tailrecursion.hoplon.make_elem_ctor.call(null,"abbr");
tailrecursion.hoplon.acronym = tailrecursion.hoplon.make_elem_ctor.call(null,"acronym");
tailrecursion.hoplon.address = tailrecursion.hoplon.make_elem_ctor.call(null,"address");
tailrecursion.hoplon.applet = tailrecursion.hoplon.make_elem_ctor.call(null,"applet");
tailrecursion.hoplon.area = tailrecursion.hoplon.make_elem_ctor.call(null,"area");
tailrecursion.hoplon.article = tailrecursion.hoplon.make_elem_ctor.call(null,"article");
tailrecursion.hoplon.aside = tailrecursion.hoplon.make_elem_ctor.call(null,"aside");
tailrecursion.hoplon.audio = tailrecursion.hoplon.make_elem_ctor.call(null,"audio");
tailrecursion.hoplon.b = tailrecursion.hoplon.make_elem_ctor.call(null,"b");
tailrecursion.hoplon.base = tailrecursion.hoplon.make_elem_ctor.call(null,"base");
tailrecursion.hoplon.basefont = tailrecursion.hoplon.make_elem_ctor.call(null,"basefont");
tailrecursion.hoplon.bdi = tailrecursion.hoplon.make_elem_ctor.call(null,"bdi");
tailrecursion.hoplon.bdo = tailrecursion.hoplon.make_elem_ctor.call(null,"bdo");
tailrecursion.hoplon.big = tailrecursion.hoplon.make_elem_ctor.call(null,"big");
tailrecursion.hoplon.blockquote = tailrecursion.hoplon.make_elem_ctor.call(null,"blockquote");
tailrecursion.hoplon.body = tailrecursion.hoplon.make_elem_ctor.call(null,"body");
tailrecursion.hoplon.br = tailrecursion.hoplon.make_elem_ctor.call(null,"br");
tailrecursion.hoplon.button = tailrecursion.hoplon.make_elem_ctor.call(null,"button");
tailrecursion.hoplon.canvas = tailrecursion.hoplon.make_elem_ctor.call(null,"canvas");
tailrecursion.hoplon.caption = tailrecursion.hoplon.make_elem_ctor.call(null,"caption");
tailrecursion.hoplon.center = tailrecursion.hoplon.make_elem_ctor.call(null,"center");
tailrecursion.hoplon.cite = tailrecursion.hoplon.make_elem_ctor.call(null,"cite");
tailrecursion.hoplon.code = tailrecursion.hoplon.make_elem_ctor.call(null,"code");
tailrecursion.hoplon.col = tailrecursion.hoplon.make_elem_ctor.call(null,"col");
tailrecursion.hoplon.colgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"colgroup");
tailrecursion.hoplon.command = tailrecursion.hoplon.make_elem_ctor.call(null,"command");
tailrecursion.hoplon.data = tailrecursion.hoplon.make_elem_ctor.call(null,"data");
tailrecursion.hoplon.datalist = tailrecursion.hoplon.make_elem_ctor.call(null,"datalist");
tailrecursion.hoplon.dd = tailrecursion.hoplon.make_elem_ctor.call(null,"dd");
tailrecursion.hoplon.del = tailrecursion.hoplon.make_elem_ctor.call(null,"del");
tailrecursion.hoplon.details = tailrecursion.hoplon.make_elem_ctor.call(null,"details");
tailrecursion.hoplon.dfn = tailrecursion.hoplon.make_elem_ctor.call(null,"dfn");
tailrecursion.hoplon.dir = tailrecursion.hoplon.make_elem_ctor.call(null,"dir");
tailrecursion.hoplon.div = tailrecursion.hoplon.make_elem_ctor.call(null,"div");
tailrecursion.hoplon.dl = tailrecursion.hoplon.make_elem_ctor.call(null,"dl");
tailrecursion.hoplon.dt = tailrecursion.hoplon.make_elem_ctor.call(null,"dt");
tailrecursion.hoplon.em = tailrecursion.hoplon.make_elem_ctor.call(null,"em");
tailrecursion.hoplon.embed = tailrecursion.hoplon.make_elem_ctor.call(null,"embed");
tailrecursion.hoplon.eventsource = tailrecursion.hoplon.make_elem_ctor.call(null,"eventsource");
tailrecursion.hoplon.fieldset = tailrecursion.hoplon.make_elem_ctor.call(null,"fieldset");
tailrecursion.hoplon.figcaption = tailrecursion.hoplon.make_elem_ctor.call(null,"figcaption");
tailrecursion.hoplon.figure = tailrecursion.hoplon.make_elem_ctor.call(null,"figure");
tailrecursion.hoplon.font = tailrecursion.hoplon.make_elem_ctor.call(null,"font");
tailrecursion.hoplon.footer = tailrecursion.hoplon.make_elem_ctor.call(null,"footer");
tailrecursion.hoplon.form = tailrecursion.hoplon.make_elem_ctor.call(null,"form");
tailrecursion.hoplon.frame = tailrecursion.hoplon.make_elem_ctor.call(null,"frame");
tailrecursion.hoplon.frameset = tailrecursion.hoplon.make_elem_ctor.call(null,"frameset");
tailrecursion.hoplon.h1 = tailrecursion.hoplon.make_elem_ctor.call(null,"h1");
tailrecursion.hoplon.h2 = tailrecursion.hoplon.make_elem_ctor.call(null,"h2");
tailrecursion.hoplon.h3 = tailrecursion.hoplon.make_elem_ctor.call(null,"h3");
tailrecursion.hoplon.h4 = tailrecursion.hoplon.make_elem_ctor.call(null,"h4");
tailrecursion.hoplon.h5 = tailrecursion.hoplon.make_elem_ctor.call(null,"h5");
tailrecursion.hoplon.h6 = tailrecursion.hoplon.make_elem_ctor.call(null,"h6");
tailrecursion.hoplon.head = tailrecursion.hoplon.make_elem_ctor.call(null,"head");
tailrecursion.hoplon.header = tailrecursion.hoplon.make_elem_ctor.call(null,"header");
tailrecursion.hoplon.hgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"hgroup");
tailrecursion.hoplon.hr = tailrecursion.hoplon.make_elem_ctor.call(null,"hr");
tailrecursion.hoplon.html = tailrecursion.hoplon.make_elem_ctor.call(null,"html");
tailrecursion.hoplon.i = tailrecursion.hoplon.make_elem_ctor.call(null,"i");
tailrecursion.hoplon.iframe = tailrecursion.hoplon.make_elem_ctor.call(null,"iframe");
tailrecursion.hoplon.img = tailrecursion.hoplon.make_elem_ctor.call(null,"img");
tailrecursion.hoplon.input = tailrecursion.hoplon.make_elem_ctor.call(null,"input");
tailrecursion.hoplon.ins = tailrecursion.hoplon.make_elem_ctor.call(null,"ins");
tailrecursion.hoplon.isindex = tailrecursion.hoplon.make_elem_ctor.call(null,"isindex");
tailrecursion.hoplon.kbd = tailrecursion.hoplon.make_elem_ctor.call(null,"kbd");
tailrecursion.hoplon.keygen = tailrecursion.hoplon.make_elem_ctor.call(null,"keygen");
tailrecursion.hoplon.label = tailrecursion.hoplon.make_elem_ctor.call(null,"label");
tailrecursion.hoplon.legend = tailrecursion.hoplon.make_elem_ctor.call(null,"legend");
tailrecursion.hoplon.li = tailrecursion.hoplon.make_elem_ctor.call(null,"li");
tailrecursion.hoplon.link = tailrecursion.hoplon.make_elem_ctor.call(null,"link");
tailrecursion.hoplon.html_map = tailrecursion.hoplon.make_elem_ctor.call(null,"map");
tailrecursion.hoplon.mark = tailrecursion.hoplon.make_elem_ctor.call(null,"mark");
tailrecursion.hoplon.menu = tailrecursion.hoplon.make_elem_ctor.call(null,"menu");
tailrecursion.hoplon.html_meta = tailrecursion.hoplon.make_elem_ctor.call(null,"meta");
tailrecursion.hoplon.meter = tailrecursion.hoplon.make_elem_ctor.call(null,"meter");
tailrecursion.hoplon.nav = tailrecursion.hoplon.make_elem_ctor.call(null,"nav");
tailrecursion.hoplon.noframes = tailrecursion.hoplon.make_elem_ctor.call(null,"noframes");
tailrecursion.hoplon.noscript = tailrecursion.hoplon.make_elem_ctor.call(null,"noscript");
tailrecursion.hoplon.object = tailrecursion.hoplon.make_elem_ctor.call(null,"object");
tailrecursion.hoplon.ol = tailrecursion.hoplon.make_elem_ctor.call(null,"ol");
tailrecursion.hoplon.optgroup = tailrecursion.hoplon.make_elem_ctor.call(null,"optgroup");
tailrecursion.hoplon.option = tailrecursion.hoplon.make_elem_ctor.call(null,"option");
tailrecursion.hoplon.output = tailrecursion.hoplon.make_elem_ctor.call(null,"output");
tailrecursion.hoplon.p = tailrecursion.hoplon.make_elem_ctor.call(null,"p");
tailrecursion.hoplon.param = tailrecursion.hoplon.make_elem_ctor.call(null,"param");
tailrecursion.hoplon.pre = tailrecursion.hoplon.make_elem_ctor.call(null,"pre");
tailrecursion.hoplon.progress = tailrecursion.hoplon.make_elem_ctor.call(null,"progress");
tailrecursion.hoplon.q = tailrecursion.hoplon.make_elem_ctor.call(null,"q");
tailrecursion.hoplon.rp = tailrecursion.hoplon.make_elem_ctor.call(null,"rp");
tailrecursion.hoplon.rt = tailrecursion.hoplon.make_elem_ctor.call(null,"rt");
tailrecursion.hoplon.ruby = tailrecursion.hoplon.make_elem_ctor.call(null,"ruby");
tailrecursion.hoplon.s = tailrecursion.hoplon.make_elem_ctor.call(null,"s");
tailrecursion.hoplon.samp = tailrecursion.hoplon.make_elem_ctor.call(null,"samp");
tailrecursion.hoplon.script = tailrecursion.hoplon.make_elem_ctor.call(null,"script");
tailrecursion.hoplon.section = tailrecursion.hoplon.make_elem_ctor.call(null,"section");
tailrecursion.hoplon.select = tailrecursion.hoplon.make_elem_ctor.call(null,"select");
tailrecursion.hoplon.small = tailrecursion.hoplon.make_elem_ctor.call(null,"small");
tailrecursion.hoplon.source = tailrecursion.hoplon.make_elem_ctor.call(null,"source");
tailrecursion.hoplon.span = tailrecursion.hoplon.make_elem_ctor.call(null,"span");
tailrecursion.hoplon.strike = tailrecursion.hoplon.make_elem_ctor.call(null,"strike");
tailrecursion.hoplon.strong = tailrecursion.hoplon.make_elem_ctor.call(null,"strong");
tailrecursion.hoplon.style = tailrecursion.hoplon.make_elem_ctor.call(null,"style");
tailrecursion.hoplon.sub = tailrecursion.hoplon.make_elem_ctor.call(null,"sub");
tailrecursion.hoplon.summary = tailrecursion.hoplon.make_elem_ctor.call(null,"summary");
tailrecursion.hoplon.sup = tailrecursion.hoplon.make_elem_ctor.call(null,"sup");
tailrecursion.hoplon.table = tailrecursion.hoplon.make_elem_ctor.call(null,"table");
tailrecursion.hoplon.tbody = tailrecursion.hoplon.make_elem_ctor.call(null,"tbody");
tailrecursion.hoplon.td = tailrecursion.hoplon.make_elem_ctor.call(null,"td");
tailrecursion.hoplon.textarea = tailrecursion.hoplon.make_elem_ctor.call(null,"textarea");
tailrecursion.hoplon.tfoot = tailrecursion.hoplon.make_elem_ctor.call(null,"tfoot");
tailrecursion.hoplon.th = tailrecursion.hoplon.make_elem_ctor.call(null,"th");
tailrecursion.hoplon.thead = tailrecursion.hoplon.make_elem_ctor.call(null,"thead");
tailrecursion.hoplon.html_time = tailrecursion.hoplon.make_elem_ctor.call(null,"time");
tailrecursion.hoplon.title = tailrecursion.hoplon.make_elem_ctor.call(null,"title");
tailrecursion.hoplon.tr = tailrecursion.hoplon.make_elem_ctor.call(null,"tr");
tailrecursion.hoplon.track = tailrecursion.hoplon.make_elem_ctor.call(null,"track");
tailrecursion.hoplon.tt = tailrecursion.hoplon.make_elem_ctor.call(null,"tt");
tailrecursion.hoplon.u = tailrecursion.hoplon.make_elem_ctor.call(null,"u");
tailrecursion.hoplon.ul = tailrecursion.hoplon.make_elem_ctor.call(null,"ul");
tailrecursion.hoplon.html_var = tailrecursion.hoplon.make_elem_ctor.call(null,"var");
tailrecursion.hoplon.video = tailrecursion.hoplon.make_elem_ctor.call(null,"video");
tailrecursion.hoplon.wbr = tailrecursion.hoplon.make_elem_ctor.call(null,"wbr");
tailrecursion.hoplon.spliced = cljs.core.vector;
tailrecursion.hoplon.$text = (function $text(p1__9160_SHARP_){return document.createTextNode(p1__9160_SHARP_);
});
tailrecursion.hoplon.$comment = (function $comment(p1__9161_SHARP_){return document.createComment(p1__9161_SHARP_);
});
tailrecursion.hoplon.initialized_QMARK_ = cljs.core.atom.call(null,false);
tailrecursion.hoplon._STAR_initfns_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
tailrecursion.hoplon.add_initfn_BANG_ = (function add_initfn_BANG_(f){if(cljs.core.truth_(cljs.core.deref.call(null,tailrecursion.hoplon.initialized_QMARK_)))
{return f.call(null);
} else
{return cljs.core.swap_BANG_.call(null,tailrecursion.hoplon._STAR_initfns_STAR_,cljs.core.conj,f);
}
});
tailrecursion.hoplon.init = (function init(html){return tailrecursion.hoplon.timeout.call(null,(function (){var body = jQuery("body");body.empty();
var seq__9170_9178 = cljs.core.seq.call(null,html);var chunk__9171_9179 = null;var count__9172_9180 = 0;var i__9173_9181 = 0;while(true){
if((i__9173_9181 < count__9172_9180))
{var x_9182 = cljs.core._nth.call(null,chunk__9171_9179,i__9173_9181);body.append(x_9182);
{
var G__9183 = seq__9170_9178;
var G__9184 = chunk__9171_9179;
var G__9185 = count__9172_9180;
var G__9186 = (i__9173_9181 + 1);
seq__9170_9178 = G__9183;
chunk__9171_9179 = G__9184;
count__9172_9180 = G__9185;
i__9173_9181 = G__9186;
continue;
}
} else
{var temp__4092__auto___9187 = cljs.core.seq.call(null,seq__9170_9178);if(temp__4092__auto___9187)
{var seq__9170_9188__$1 = temp__4092__auto___9187;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9170_9188__$1))
{var c__6447__auto___9189 = cljs.core.chunk_first.call(null,seq__9170_9188__$1);{
var G__9190 = cljs.core.chunk_rest.call(null,seq__9170_9188__$1);
var G__9191 = c__6447__auto___9189;
var G__9192 = cljs.core.count.call(null,c__6447__auto___9189);
var G__9193 = 0;
seq__9170_9178 = G__9190;
chunk__9171_9179 = G__9191;
count__9172_9180 = G__9192;
i__9173_9181 = G__9193;
continue;
}
} else
{var x_9194 = cljs.core.first.call(null,seq__9170_9188__$1);body.append(x_9194);
{
var G__9195 = cljs.core.next.call(null,seq__9170_9188__$1);
var G__9196 = null;
var G__9197 = 0;
var G__9198 = 0;
seq__9170_9178 = G__9195;
chunk__9171_9179 = G__9196;
count__9172_9180 = G__9197;
i__9173_9181 = G__9198;
continue;
}
}
} else
{}
}
break;
}
body.on("submit",(function (e){return e.preventDefault();
}));
cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.initialized_QMARK_,true);
var seq__9174 = cljs.core.seq.call(null,cljs.core.deref.call(null,tailrecursion.hoplon._STAR_initfns_STAR_));var chunk__9175 = null;var count__9176 = 0;var i__9177 = 0;while(true){
if((i__9177 < count__9176))
{var f = cljs.core._nth.call(null,chunk__9175,i__9177);f.call(null);
{
var G__9199 = seq__9174;
var G__9200 = chunk__9175;
var G__9201 = count__9176;
var G__9202 = (i__9177 + 1);
seq__9174 = G__9199;
chunk__9175 = G__9200;
count__9176 = G__9201;
i__9177 = G__9202;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9174);if(temp__4092__auto__)
{var seq__9174__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9174__$1))
{var c__6447__auto__ = cljs.core.chunk_first.call(null,seq__9174__$1);{
var G__9203 = cljs.core.chunk_rest.call(null,seq__9174__$1);
var G__9204 = c__6447__auto__;
var G__9205 = cljs.core.count.call(null,c__6447__auto__);
var G__9206 = 0;
seq__9174 = G__9203;
chunk__9175 = G__9204;
count__9176 = G__9205;
i__9177 = G__9206;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__9174__$1);f.call(null);
{
var G__9207 = cljs.core.next.call(null,seq__9174__$1);
var G__9208 = null;
var G__9209 = 0;
var G__9210 = 0;
seq__9174 = G__9207;
chunk__9175 = G__9208;
count__9176 = G__9209;
i__9177 = G__9210;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
});
tailrecursion.hoplon.by_id = (function by_id(id){return document.getElementById(cljs.core.name.call(null,id));
});
tailrecursion.hoplon.val_id = (function val_id(id){return tailrecursion.hoplon.do_BANG_.call(null,tailrecursion.hoplon.by_id.call(null,id),new cljs.core.Keyword(null,"value","value",1125876963));
});
tailrecursion.hoplon.rel = (function rel(other,event){var os = cljs.core.js__GT_clj.call(null,jQuery(other).offset());var ox = os.call(null,"left");var oy = os.call(null,"top");return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(event.pageX - ox),new cljs.core.Keyword(null,"y","y",1013904363),(event.pageY - oy)], null);
});
tailrecursion.hoplon.relx = (function relx(other,event){return new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rely = (function rely(other,event){return new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(tailrecursion.hoplon.rel.call(null,other,event));
});
tailrecursion.hoplon.rel_event = (function rel_event(rel_to,tag,handler){return (function (event){(event[[cljs.core.str(tag),cljs.core.str("X")].join('')] = tailrecursion.hoplon.relx.call(null,rel_to,event));
(event[[cljs.core.str(tag),cljs.core.str("Y")].join('')] = tailrecursion.hoplon.rely.call(null,rel_to,event));
return handler.call(null,event);
});
});
tailrecursion.hoplon.text_val_BANG_ = (function() {
var text_val_BANG_ = null;
var text_val_BANG___1 = (function (e){return e.val();
});
var text_val_BANG___2 = (function (e,v){return e.val([cljs.core.str(v)].join('')).trigger("change");
});
text_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return text_val_BANG___1.call(this,e);
case 2:
return text_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = text_val_BANG___1;
text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = text_val_BANG___2;
return text_val_BANG_;
})()
;
tailrecursion.hoplon.check_val_BANG_ = (function() {
var check_val_BANG_ = null;
var check_val_BANG___1 = (function (e){return e.is(":checked");
});
var check_val_BANG___2 = (function (e,v){return e.prop("checked",cljs.core.boolean$.call(null,v)).trigger("change");
});
check_val_BANG_ = function(e,v){
switch(arguments.length){
case 1:
return check_val_BANG___1.call(this,e);
case 2:
return check_val_BANG___2.call(this,e,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = check_val_BANG___1;
check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = check_val_BANG___2;
return check_val_BANG_;
})()
;
tailrecursion.hoplon.do_BANG_ = (function (){var method_table__6557__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__6558__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__6559__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__6560__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__6561__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",2558708147),new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("do!",(function() { 
var G__9211__delegate = function (elem,action,args){return action;
};
var G__9211 = function (elem,action,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9211__delegate.call(this,elem,action,args);};
G__9211.cljs$lang$maxFixedArity = 2;
G__9211.cljs$lang$applyTo = (function (arglist__9212){
var elem = cljs.core.first(arglist__9212);
arglist__9212 = cljs.core.next(arglist__9212);
var action = cljs.core.first(arglist__9212);
var args = cljs.core.rest(arglist__9212);
return G__9211__delegate(elem,action,args);
});
G__9211.cljs$core$IFn$_invoke$arity$variadic = G__9211__delegate;
return G__9211;
})()
,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),hierarchy__6561__auto__,method_table__6557__auto__,prefer_table__6558__auto__,method_cache__6559__auto__,cached_hierarchy__6560__auto__));
})();
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword("tailrecursion.hoplon","default","tailrecursion.hoplon/default",1265562704),(function() { 
var G__9215__delegate = function (elem,key,p__9213){var vec__9214 = p__9213;var val = cljs.core.nth.call(null,vec__9214,0,null);return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",1016909155),new cljs.core.PersistentArrayMap.fromArray([key,val], true, false));
};
var G__9215 = function (elem,key,var_args){
var p__9213 = null;if (arguments.length > 2) {
  p__9213 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9215__delegate.call(this,elem,key,p__9213);};
G__9215.cljs$lang$maxFixedArity = 2;
G__9215.cljs$lang$applyTo = (function (arglist__9216){
var elem = cljs.core.first(arglist__9216);
arglist__9216 = cljs.core.next(arglist__9216);
var key = cljs.core.first(arglist__9216);
var p__9213 = cljs.core.rest(arglist__9216);
return G__9215__delegate(elem,key,p__9213);
});
G__9215.cljs$core$IFn$_invoke$arity$variadic = G__9215__delegate;
return G__9215;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"value","value",1125876963),(function() { 
var G__9217__delegate = function (elem,_,args){var e = jQuery(elem);return cljs.core.apply.call(null,((cljs.core._EQ_.call(null,"checkbox",e.attr("type")))?tailrecursion.hoplon.check_val_BANG_:tailrecursion.hoplon.text_val_BANG_),e,args);
};
var G__9217 = function (elem,_,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__9217__delegate.call(this,elem,_,args);};
G__9217.cljs$lang$maxFixedArity = 2;
G__9217.cljs$lang$applyTo = (function (arglist__9218){
var elem = cljs.core.first(arglist__9218);
arglist__9218 = cljs.core.next(arglist__9218);
var _ = cljs.core.first(arglist__9218);
var args = cljs.core.rest(arglist__9218);
return G__9217__delegate(elem,_,args);
});
G__9217.cljs$core$IFn$_invoke$arity$variadic = G__9217__delegate;
return G__9217;
})()
);
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"attr","attr",1016909155),(function (elem,_,kvs){return elem.call(null,kvs);
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"class","class",1108647146),(function (elem,_,kvs){var elem__$1 = jQuery(elem);var seq__9219 = cljs.core.seq.call(null,kvs);var chunk__9220 = null;var count__9221 = 0;var i__9222 = 0;while(true){
if((i__9222 < count__9221))
{var vec__9223 = cljs.core._nth.call(null,chunk__9220,i__9222);var c = cljs.core.nth.call(null,vec__9223,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__9223,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__9225 = seq__9219;
var G__9226 = chunk__9220;
var G__9227 = count__9221;
var G__9228 = (i__9222 + 1);
seq__9219 = G__9225;
chunk__9220 = G__9226;
count__9221 = G__9227;
i__9222 = G__9228;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9219);if(temp__4092__auto__)
{var seq__9219__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9219__$1))
{var c__6447__auto__ = cljs.core.chunk_first.call(null,seq__9219__$1);{
var G__9229 = cljs.core.chunk_rest.call(null,seq__9219__$1);
var G__9230 = c__6447__auto__;
var G__9231 = cljs.core.count.call(null,c__6447__auto__);
var G__9232 = 0;
seq__9219 = G__9229;
chunk__9220 = G__9230;
count__9221 = G__9231;
i__9222 = G__9232;
continue;
}
} else
{var vec__9224 = cljs.core.first.call(null,seq__9219__$1);var c = cljs.core.nth.call(null,vec__9224,0,null);var p_QMARK_ = cljs.core.nth.call(null,vec__9224,1,null);elem__$1.toggleClass(cljs.core.name.call(null,c),cljs.core.boolean$.call(null,p_QMARK_));
{
var G__9233 = cljs.core.next.call(null,seq__9219__$1);
var G__9234 = null;
var G__9235 = 0;
var G__9236 = 0;
seq__9219 = G__9233;
chunk__9220 = G__9234;
count__9221 = G__9235;
i__9222 = G__9236;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"css","css",1014003061),(function (elem,_,kvs){var e = jQuery(elem);var seq__9237 = cljs.core.seq.call(null,kvs);var chunk__9238 = null;var count__9239 = 0;var i__9240 = 0;while(true){
if((i__9240 < count__9239))
{var vec__9241 = cljs.core._nth.call(null,chunk__9238,i__9240);var k = cljs.core.nth.call(null,vec__9241,0,null);var v = cljs.core.nth.call(null,vec__9241,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));
{
var G__9243 = seq__9237;
var G__9244 = chunk__9238;
var G__9245 = count__9239;
var G__9246 = (i__9240 + 1);
seq__9237 = G__9243;
chunk__9238 = G__9244;
count__9239 = G__9245;
i__9240 = G__9246;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9237);if(temp__4092__auto__)
{var seq__9237__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9237__$1))
{var c__6447__auto__ = cljs.core.chunk_first.call(null,seq__9237__$1);{
var G__9247 = cljs.core.chunk_rest.call(null,seq__9237__$1);
var G__9248 = c__6447__auto__;
var G__9249 = cljs.core.count.call(null,c__6447__auto__);
var G__9250 = 0;
seq__9237 = G__9247;
chunk__9238 = G__9248;
count__9239 = G__9249;
i__9240 = G__9250;
continue;
}
} else
{var vec__9242 = cljs.core.first.call(null,seq__9237__$1);var k = cljs.core.nth.call(null,vec__9242,0,null);var v = cljs.core.nth.call(null,vec__9242,1,null);e.css(cljs.core.name.call(null,k),[cljs.core.str(v)].join(''));
{
var G__9251 = cljs.core.next.call(null,seq__9237__$1);
var G__9252 = null;
var G__9253 = 0;
var G__9254 = 0;
seq__9237 = G__9251;
chunk__9238 = G__9252;
count__9239 = G__9253;
i__9240 = G__9254;
continue;
}
}
} else
{return null;
}
}
break;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"toggle","toggle",4440567494),(function (elem,_,v){return jQuery(elem).toggle(cljs.core.boolean$.call(null,v));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"slide-toggle","slide-toggle",3005235810),(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().slideDown("fast");
} else
{return jQuery(elem).slideUp("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"fade-toggle","fade-toggle",514539319),(function (elem,_,v){if(cljs.core.truth_(v))
{return jQuery(elem).hide().fadeIn("fast");
} else
{return jQuery(elem).fadeOut("fast");
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus","focus",1111509066),(function (elem,_,v){if(cljs.core.truth_(v))
{return tailrecursion.hoplon.timeout.call(null,(function (){return jQuery(elem).focus();
}));
} else
{return tailrecursion.hoplon.timeout.call(null,(function (){return jQuery(elem).focusout();
}));
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"select","select",4402849902),(function (elem,_,___$1){return jQuery(elem).select();
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"focus-select","focus-select",3635190531),(function (elem,_,v){if(cljs.core.truth_(v))
{tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"focus","focus",1111509066),v);
return tailrecursion.hoplon.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"select","select",4402849902),v);
} else
{return null;
}
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"text","text",1017460895),(function (elem,_,v){return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
cljs.core._add_method.call(null,tailrecursion.hoplon.do_BANG_,new cljs.core.Keyword(null,"scroll-to","scroll-to",1431647469),(function (elem,_,v){if(cljs.core.truth_(v))
{var body = jQuery("body");var elem__$1 = jQuery(elem);return body.animate(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scrollTop","scrollTop",1431684794),elem__$1.offset().top], null)));
} else
{return null;
}
}));
tailrecursion.hoplon.on_BANG_ = (function on_BANG_(elem,event,callback){return tailrecursion.hoplon.when_dom.call(null,elem,(function (){return jQuery(elem).on(cljs.core.name.call(null,event),callback);
}));
});
tailrecursion.hoplon.loop_tpl_STAR_ = (function loop_tpl_STAR_(items,reverse_QMARK_,tpl){var pool_size = tailrecursion.javelin.cell.call(null,0);var items_seq = tailrecursion.javelin.lift.call(null,((function (pool_size){
return (function (G__9281,G__9280){return G__9280.call(null,G__9281);
});})(pool_size))
).call(null,items,cljs.core.seq);var cur_count = tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq){
return (function (G__9282,G__9283){return G__9282.call(null,G__9283);
});})(pool_size,items_seq))
).call(null,cljs.core.count,items_seq);var show_ith_QMARK_ = ((function (pool_size,items_seq,cur_count){
return (function (p1__9255_SHARP_){return tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq,cur_count){
return (function (G__9285,G__9284){return (G__9284 < G__9285);
});})(pool_size,items_seq,cur_count))
).call(null,cur_count,p1__9255_SHARP_);
});})(pool_size,items_seq,cur_count))
;var ith_item = ((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (p1__9256_SHARP_){return tailrecursion.javelin.lift.call(null,((function (pool_size,items_seq,cur_count,show_ith_QMARK_){
return (function (G__9286,G__9288,G__9287){return G__9286.call(null,G__9287,G__9288);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
).call(null,tailrecursion.hoplon.safe_nth,p1__9256_SHARP_,items_seq);
});})(pool_size,items_seq,cur_count,show_ith_QMARK_))
;var d = tailrecursion.hoplon.span.call(null);tailrecursion.hoplon.when_dom.call(null,d,(function (){var p = d.parentNode;p.removeChild(d);
return tailrecursion.javelin.lift.call(null,(function (G__9302,G__9300,G__9296,G__9297,G__9294,G__9298,G__9293,G__9295,G__9301,G__9299){if(cljs.core.truth_((G__9293 < G__9294)))
{var seq__9289_9303 = cljs.core.seq.call(null,G__9295.call(null,G__9293,G__9294));var chunk__9290_9304 = null;var count__9291_9305 = 0;var i__9292_9306 = 0;while(true){
if(cljs.core.truth_((i__9292_9306 < count__9291_9305)))
{var i_9307 = cljs.core._nth.call(null,chunk__9290_9304,i__9292_9306);var e_9308 = G__9296.call(null,G__9297.call(null,i_9307)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),G__9298.call(null,i_9307));if(cljs.core.not.call(null,G__9299))
{G__9300.appendChild(e_9308);
} else
{G__9300.insertBefore(e_9308,G__9300.firstChild);
}
{
var G__9309 = seq__9289_9303;
var G__9310 = chunk__9290_9304;
var G__9311 = count__9291_9305;
var G__9312 = (i__9292_9306 + 1);
seq__9289_9303 = G__9309;
chunk__9290_9304 = G__9310;
count__9291_9305 = G__9311;
i__9292_9306 = G__9312;
continue;
}
} else
{var temp__4092__auto___9313 = cljs.core.seq.call(null,seq__9289_9303);if(temp__4092__auto___9313)
{var seq__9289_9314__$1 = temp__4092__auto___9313;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9289_9314__$1))
{var c__6447__auto___9315 = cljs.core.chunk_first.call(null,seq__9289_9314__$1);{
var G__9316 = cljs.core.chunk_rest.call(null,seq__9289_9314__$1);
var G__9317 = c__6447__auto___9315;
var G__9318 = cljs.core.count.call(null,c__6447__auto___9315);
var G__9319 = 0;
seq__9289_9303 = G__9316;
chunk__9290_9304 = G__9317;
count__9291_9305 = G__9318;
i__9292_9306 = G__9319;
continue;
}
} else
{var i_9320 = cljs.core.first.call(null,seq__9289_9314__$1);var e_9321 = G__9296.call(null,G__9297.call(null,i_9320)).call(null,new cljs.core.Keyword(null,"do-toggle","do-toggle",1250159176),G__9298.call(null,i_9320));if(cljs.core.not.call(null,G__9299))
{G__9300.appendChild(e_9321);
} else
{G__9300.insertBefore(e_9321,G__9300.firstChild);
}
{
var G__9322 = cljs.core.next.call(null,seq__9289_9314__$1);
var G__9323 = null;
var G__9324 = 0;
var G__9325 = 0;
seq__9289_9303 = G__9322;
chunk__9290_9304 = G__9323;
count__9291_9305 = G__9324;
i__9292_9306 = G__9325;
continue;
}
}
} else
{}
}
break;
}
return G__9301.call(null,G__9302,G__9294);
} else
{return null;
}
})).call(null,tailrecursion.javelin.cell.call(null,pool_size),p,tpl,ith_item,cur_count,show_ith_QMARK_,pool_size,cljs.core.range,cljs.core.reset_BANG_,reverse_QMARK_);
}));
return d;
});

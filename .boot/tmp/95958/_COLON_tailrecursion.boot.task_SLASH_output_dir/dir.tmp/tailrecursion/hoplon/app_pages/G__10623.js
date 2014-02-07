// Compiled by ClojureScript 0.0-2156
goog.provide('tailrecursion.hoplon.app_pages.G__10623');
goog.require('cljs.core');
goog.require('tailrecursion.javelin');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.hoplon');
goog.require('tailrecursion.javelin');
tailrecursion.hoplon.app_pages.G__10623.hoploninit = (function hoploninit(){tailrecursion.hoplon.app_pages.G__10623.int$ = parseInt;
tailrecursion.hoplon.app_pages.G__10623.ops = new cljs.core.PersistentArrayMap(null, 4, ["+",cljs.core._PLUS_,"-",cljs.core._,"*",cljs.core._STAR_,"/",cljs.core._SLASH_], null);
tailrecursion.hoplon.app_pages.G__10623.x = tailrecursion.javelin.cell.call(null,0);
tailrecursion.hoplon.app_pages.G__10623.y = tailrecursion.javelin.cell.call(null,0);
tailrecursion.hoplon.app_pages.G__10623.op = tailrecursion.javelin.cell.call(null,cljs.core._PLUS_);
tailrecursion.hoplon.app_pages.G__10623.result = tailrecursion.javelin.lift.call(null,(function (G__11551,G__11550,G__11549){return G__11549.call(null,G__11550,G__11551);
})).call(null,tailrecursion.hoplon.app_pages.G__10623.y,tailrecursion.hoplon.app_pages.G__10623.x,tailrecursion.hoplon.app_pages.G__10623.op);
return tailrecursion.hoplon.init.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11552 = tailrecursion.hoplon.input.call(null,new cljs.core.Keyword(null,"id","id",1013907597),"x",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),"0",new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (){return cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages.G__10623.x,tailrecursion.hoplon.app_pages.G__10623.int$.call(null,tailrecursion.hoplon.val_id.call(null,"x")));
}));return G__11552;
})(),(function (){var G__11554 = tailrecursion.hoplon.option.call(null,new cljs.core.Keyword(null,"value","value",1125876963),"+",new cljs.core.Keyword(null,"selected","selected",2205476365),true,"+");var G__11555 = tailrecursion.hoplon.option.call(null,new cljs.core.Keyword(null,"value","value",1125876963),"-","-");var G__11556 = tailrecursion.hoplon.option.call(null,new cljs.core.Keyword(null,"value","value",1125876963),"*","*");var G__11557 = tailrecursion.hoplon.option.call(null,new cljs.core.Keyword(null,"value","value",1125876963),"/","/");var G__11553 = tailrecursion.hoplon.select.call(null,new cljs.core.Keyword(null,"id","id",1013907597),"op",new cljs.core.Keyword(null,"on-change","on-change",606853840),((function (G__11554,G__11555,G__11556,G__11557){
return (function (){return cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages.G__10623.op,tailrecursion.hoplon.app_pages.G__10623.ops.call(null,tailrecursion.hoplon.val_id.call(null,"op")));
});})(G__11554,G__11555,G__11556,G__11557))
,G__11554,G__11555,G__11556,G__11557);return G__11553;
})(),(function (){var G__11558 = tailrecursion.hoplon.input.call(null,new cljs.core.Keyword(null,"id","id",1013907597),"y",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"value","value",1125876963),"0",new cljs.core.Keyword(null,"on-change","on-change",606853840),(function (){return cljs.core.reset_BANG_.call(null,tailrecursion.hoplon.app_pages.G__10623.y,tailrecursion.hoplon.app_pages.G__10623.int$.call(null,tailrecursion.hoplon.val_id.call(null,"y")));
}));return G__11558;
})(),(function (){var G__11559 = (function (){var t__1677__auto__ = document.createTextNode("");tailrecursion.javelin.lift.call(null,((function (t__1677__auto__){
return (function (G__11560,G__11561){return G__11560.nodeValue = [cljs.core.str(" = "),cljs.core.str(G__11561)].join('');
});})(t__1677__auto__))
).call(null,t__1677__auto__,tailrecursion.hoplon.app_pages.G__10623.result);
return t__1677__auto__;
})();return G__11559;
})()], null));
});
goog.exportSymbol('tailrecursion.hoplon.app_pages.G__10623.hoploninit', tailrecursion.hoplon.app_pages.G__10623.hoploninit);

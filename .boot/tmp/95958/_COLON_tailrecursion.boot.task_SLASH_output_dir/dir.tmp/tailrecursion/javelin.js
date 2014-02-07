// Compiled by ClojureScript 0.0-2156
goog.provide('tailrecursion.javelin');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');
goog.require('tailrecursion.priority_map');
/**
* Like tree-seq but traversal is breadth-first instead of depth-first.
*/
tailrecursion.javelin.bf_seq = (function bf_seq(branch_QMARK_,children,root){var walk = (function walk(queue){var temp__4092__auto__ = cljs.core.peek.call(null,queue);if(cljs.core.truth_(temp__4092__auto__))
{var node = temp__4092__auto__;return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,node,walk.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(cljs.core.truth_(branch_QMARK_.call(null,node))?children.call(null,node):null))));
}),null,null));
} else
{return null;
}
});
return walk.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,root));
});
tailrecursion.javelin.last_rank = cljs.core.atom.call(null,0);
tailrecursion.javelin.next_rank = (function next_rank(){return cljs.core.swap_BANG_.call(null,tailrecursion.javelin.last_rank,cljs.core.inc);
});
tailrecursion.javelin.deref_STAR_ = (function deref_STAR_(x){if(cljs.core.truth_(tailrecursion.javelin.cell_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
tailrecursion.javelin.propagate_BANG_ = (function propagate_BANG_(cell){var queue = tailrecursion.priority_map.priority_map.call(null,cell,cell.rank);while(true){
if(cljs.core.seq.call(null,queue))
{var next = cljs.core.key.call(null,cljs.core.peek.call(null,queue));var value = next.thunk.call(null);var continue_QMARK_ = cljs.core.not_EQ_.call(null,value,next.prev);var reducer = ((function (queue,next,value,continue_QMARK_){
return (function (p1__7568_SHARP_,p2__7569_SHARP_){return cljs.core.assoc.call(null,p1__7568_SHARP_,p2__7569_SHARP_,p2__7569_SHARP_.rank);
});})(queue,next,value,continue_QMARK_))
;var siblings = cljs.core.pop.call(null,queue);var children = next.sinks;if(continue_QMARK_)
{next.prev = value;
} else
{}
{
var G__7570 = ((continue_QMARK_)?cljs.core.reduce.call(null,reducer,siblings,children):siblings);
queue = G__7570;
continue;
}
} else
{return null;
}
break;
}
});
tailrecursion.javelin.destroy_cell_BANG_ = (function destroy_cell_BANG_(this$){var srcs = this$.sources;this$.sources = cljs.core.PersistentVector.EMPTY;
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
var seq__7575 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,srcs));var chunk__7576 = null;var count__7577 = 0;var i__7578 = 0;while(true){
if((i__7578 < count__7577))
{var src = cljs.core._nth.call(null,chunk__7576,i__7578);src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__7579 = seq__7575;
var G__7580 = chunk__7576;
var G__7581 = count__7577;
var G__7582 = (i__7578 + 1);
seq__7575 = G__7579;
chunk__7576 = G__7580;
count__7577 = G__7581;
i__7578 = G__7582;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7575);if(temp__4092__auto__)
{var seq__7575__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7575__$1))
{var c__6447__auto__ = cljs.core.chunk_first.call(null,seq__7575__$1);{
var G__7583 = cljs.core.chunk_rest.call(null,seq__7575__$1);
var G__7584 = c__6447__auto__;
var G__7585 = cljs.core.count.call(null,c__6447__auto__);
var G__7586 = 0;
seq__7575 = G__7583;
chunk__7576 = G__7584;
count__7577 = G__7585;
i__7578 = G__7586;
continue;
}
} else
{var src = cljs.core.first.call(null,seq__7575__$1);src.sinks = cljs.core.disj.call(null,src.sinks,this$);
{
var G__7587 = cljs.core.next.call(null,seq__7575__$1);
var G__7588 = null;
var G__7589 = 0;
var G__7590 = 0;
seq__7575 = G__7587;
chunk__7576 = G__7588;
count__7577 = G__7589;
i__7578 = G__7590;
continue;
}
}
} else
{return null;
}
}
break;
}
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.set_formula_BANG_ = (function() { 
var set_formula_BANG___delegate = function (this$,p__7595){var vec__7616 = p__7595;var f = cljs.core.nth.call(null,vec__7616,0,null);var sources = cljs.core.nth.call(null,vec__7616,1,null);tailrecursion.javelin.destroy_cell_BANG_.call(null,this$);
this$.sources = (cljs.core.truth_(f)?cljs.core.conj.call(null,cljs.core.vec.call(null,sources),f):cljs.core.vec.call(null,sources));
var seq__7617_7636 = cljs.core.seq.call(null,cljs.core.filter.call(null,tailrecursion.javelin.cell_QMARK_,this$.sources));var chunk__7618_7637 = null;var count__7619_7638 = 0;var i__7620_7639 = 0;while(true){
if((i__7620_7639 < count__7619_7638))
{var source_7640 = cljs.core._nth.call(null,chunk__7618_7637,i__7620_7639);source_7640.sinks = cljs.core.conj.call(null,source_7640.sinks,this$);
if((source_7640.rank > this$.rank))
{var seq__7621_7641 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7617_7636,chunk__7618_7637,count__7619_7638,i__7620_7639,source_7640){
return (function (p1__7591_SHARP_){return p1__7591_SHARP_.sinks;
});})(seq__7617_7636,chunk__7618_7637,count__7619_7638,i__7620_7639,source_7640))
,source_7640));var chunk__7622_7642 = null;var count__7623_7643 = 0;var i__7624_7644 = 0;while(true){
if((i__7624_7644 < count__7623_7643))
{var dep_7645 = cljs.core._nth.call(null,chunk__7622_7642,i__7624_7644);dep_7645.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__7646 = seq__7621_7641;
var G__7647 = chunk__7622_7642;
var G__7648 = count__7623_7643;
var G__7649 = (i__7624_7644 + 1);
seq__7621_7641 = G__7646;
chunk__7622_7642 = G__7647;
count__7623_7643 = G__7648;
i__7624_7644 = G__7649;
continue;
}
} else
{var temp__4092__auto___7650 = cljs.core.seq.call(null,seq__7621_7641);if(temp__4092__auto___7650)
{var seq__7621_7651__$1 = temp__4092__auto___7650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7621_7651__$1))
{var c__6447__auto___7652 = cljs.core.chunk_first.call(null,seq__7621_7651__$1);{
var G__7653 = cljs.core.chunk_rest.call(null,seq__7621_7651__$1);
var G__7654 = c__6447__auto___7652;
var G__7655 = cljs.core.count.call(null,c__6447__auto___7652);
var G__7656 = 0;
seq__7621_7641 = G__7653;
chunk__7622_7642 = G__7654;
count__7623_7643 = G__7655;
i__7624_7644 = G__7656;
continue;
}
} else
{var dep_7657 = cljs.core.first.call(null,seq__7621_7651__$1);dep_7657.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__7658 = cljs.core.next.call(null,seq__7621_7651__$1);
var G__7659 = null;
var G__7660 = 0;
var G__7661 = 0;
seq__7621_7641 = G__7658;
chunk__7622_7642 = G__7659;
count__7623_7643 = G__7660;
i__7624_7644 = G__7661;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__7662 = seq__7617_7636;
var G__7663 = chunk__7618_7637;
var G__7664 = count__7619_7638;
var G__7665 = (i__7620_7639 + 1);
seq__7617_7636 = G__7662;
chunk__7618_7637 = G__7663;
count__7619_7638 = G__7664;
i__7620_7639 = G__7665;
continue;
}
} else
{var temp__4092__auto___7666 = cljs.core.seq.call(null,seq__7617_7636);if(temp__4092__auto___7666)
{var seq__7617_7667__$1 = temp__4092__auto___7666;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7617_7667__$1))
{var c__6447__auto___7668 = cljs.core.chunk_first.call(null,seq__7617_7667__$1);{
var G__7669 = cljs.core.chunk_rest.call(null,seq__7617_7667__$1);
var G__7670 = c__6447__auto___7668;
var G__7671 = cljs.core.count.call(null,c__6447__auto___7668);
var G__7672 = 0;
seq__7617_7636 = G__7669;
chunk__7618_7637 = G__7670;
count__7619_7638 = G__7671;
i__7620_7639 = G__7672;
continue;
}
} else
{var source_7673 = cljs.core.first.call(null,seq__7617_7667__$1);source_7673.sinks = cljs.core.conj.call(null,source_7673.sinks,this$);
if((source_7673.rank > this$.rank))
{var seq__7625_7674 = cljs.core.seq.call(null,tailrecursion.javelin.bf_seq.call(null,cljs.core.identity,((function (seq__7617_7636,chunk__7618_7637,count__7619_7638,i__7620_7639,source_7673,seq__7617_7667__$1,temp__4092__auto___7666){
return (function (p1__7591_SHARP_){return p1__7591_SHARP_.sinks;
});})(seq__7617_7636,chunk__7618_7637,count__7619_7638,i__7620_7639,source_7673,seq__7617_7667__$1,temp__4092__auto___7666))
,source_7673));var chunk__7626_7675 = null;var count__7627_7676 = 0;var i__7628_7677 = 0;while(true){
if((i__7628_7677 < count__7627_7676))
{var dep_7678 = cljs.core._nth.call(null,chunk__7626_7675,i__7628_7677);dep_7678.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__7679 = seq__7625_7674;
var G__7680 = chunk__7626_7675;
var G__7681 = count__7627_7676;
var G__7682 = (i__7628_7677 + 1);
seq__7625_7674 = G__7679;
chunk__7626_7675 = G__7680;
count__7627_7676 = G__7681;
i__7628_7677 = G__7682;
continue;
}
} else
{var temp__4092__auto___7683__$1 = cljs.core.seq.call(null,seq__7625_7674);if(temp__4092__auto___7683__$1)
{var seq__7625_7684__$1 = temp__4092__auto___7683__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7625_7684__$1))
{var c__6447__auto___7685 = cljs.core.chunk_first.call(null,seq__7625_7684__$1);{
var G__7686 = cljs.core.chunk_rest.call(null,seq__7625_7684__$1);
var G__7687 = c__6447__auto___7685;
var G__7688 = cljs.core.count.call(null,c__6447__auto___7685);
var G__7689 = 0;
seq__7625_7674 = G__7686;
chunk__7626_7675 = G__7687;
count__7627_7676 = G__7688;
i__7628_7677 = G__7689;
continue;
}
} else
{var dep_7690 = cljs.core.first.call(null,seq__7625_7684__$1);dep_7690.rank = tailrecursion.javelin.next_rank.call(null);
{
var G__7691 = cljs.core.next.call(null,seq__7625_7684__$1);
var G__7692 = null;
var G__7693 = 0;
var G__7694 = 0;
seq__7625_7674 = G__7691;
chunk__7626_7675 = G__7692;
count__7627_7676 = G__7693;
i__7628_7677 = G__7694;
continue;
}
}
} else
{}
}
break;
}
} else
{}
{
var G__7695 = cljs.core.next.call(null,seq__7617_7667__$1);
var G__7696 = null;
var G__7697 = 0;
var G__7698 = 0;
seq__7617_7636 = G__7695;
chunk__7618_7637 = G__7696;
count__7619_7638 = G__7697;
i__7620_7639 = G__7698;
continue;
}
}
} else
{}
}
break;
}
var compute = (function (p1__7592_SHARP_){return cljs.core.apply.call(null,tailrecursion.javelin.deref_STAR_.call(null,cljs.core.peek.call(null,p1__7592_SHARP_)),cljs.core.map.call(null,tailrecursion.javelin.deref_STAR_,cljs.core.pop.call(null,p1__7592_SHARP_)));
});var thunk = ((function (compute){
return (function (){var x = this$.state;var y = compute.call(null,this$.sources);var seq__7629_7699 = cljs.core.seq.call(null,cljs.core.dissoc.call(null,this$.watches,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258)));var chunk__7630_7700 = null;var count__7631_7701 = 0;var i__7632_7702 = 0;while(true){
if((i__7632_7702 < count__7631_7701))
{var vec__7633_7703 = cljs.core._nth.call(null,chunk__7630_7700,i__7632_7702);var k_7704 = cljs.core.nth.call(null,vec__7633_7703,0,null);var f_7705__$1 = cljs.core.nth.call(null,vec__7633_7703,1,null);f_7705__$1.call(null,k_7704,this$,x,y);
{
var G__7706 = seq__7629_7699;
var G__7707 = chunk__7630_7700;
var G__7708 = count__7631_7701;
var G__7709 = (i__7632_7702 + 1);
seq__7629_7699 = G__7706;
chunk__7630_7700 = G__7707;
count__7631_7701 = G__7708;
i__7632_7702 = G__7709;
continue;
}
} else
{var temp__4092__auto___7710 = cljs.core.seq.call(null,seq__7629_7699);if(temp__4092__auto___7710)
{var seq__7629_7711__$1 = temp__4092__auto___7710;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7629_7711__$1))
{var c__6447__auto___7712 = cljs.core.chunk_first.call(null,seq__7629_7711__$1);{
var G__7713 = cljs.core.chunk_rest.call(null,seq__7629_7711__$1);
var G__7714 = c__6447__auto___7712;
var G__7715 = cljs.core.count.call(null,c__6447__auto___7712);
var G__7716 = 0;
seq__7629_7699 = G__7713;
chunk__7630_7700 = G__7714;
count__7631_7701 = G__7715;
i__7632_7702 = G__7716;
continue;
}
} else
{var vec__7634_7717 = cljs.core.first.call(null,seq__7629_7711__$1);var k_7718 = cljs.core.nth.call(null,vec__7634_7717,0,null);var f_7719__$1 = cljs.core.nth.call(null,vec__7634_7717,1,null);f_7719__$1.call(null,k_7718,this$,x,y);
{
var G__7720 = cljs.core.next.call(null,seq__7629_7711__$1);
var G__7721 = null;
var G__7722 = 0;
var G__7723 = 0;
seq__7629_7699 = G__7720;
chunk__7630_7700 = G__7721;
count__7631_7701 = G__7722;
i__7632_7702 = G__7723;
continue;
}
}
} else
{}
}
break;
}
return this$.state = y;
});})(compute))
;var err_mesg = "formula cell can't be updated via swap! or reset!";cljs.core._add_watch.call(null,this$,new cljs.core.Keyword("tailrecursion.javelin","cell","tailrecursion.javelin/cell",3109523258),(cljs.core.truth_(f)?(function (){throw (new Error(err_mesg));
}):(function (p1__7594_SHARP_,p2__7593_SHARP_){return tailrecursion.javelin.propagate_BANG_.call(null,p2__7593_SHARP_);
})));
this$.input_QMARK_ = (cljs.core.truth_(f)?false:true);
this$.thunk = (cljs.core.truth_(f)?thunk:(function (){return cljs.core.deref.call(null,this$);
}));
var G__7635 = this$;tailrecursion.javelin.propagate_BANG_.call(null,G__7635);
return G__7635;
};
var set_formula_BANG_ = function (this$,var_args){
var p__7595 = null;if (arguments.length > 1) {
  p__7595 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_formula_BANG___delegate.call(this,this$,p__7595);};
set_formula_BANG_.cljs$lang$maxFixedArity = 1;
set_formula_BANG_.cljs$lang$applyTo = (function (arglist__7724){
var this$ = cljs.core.first(arglist__7724);
var p__7595 = cljs.core.rest(arglist__7724);
return set_formula_BANG___delegate(this$,p__7595);
});
set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_formula_BANG___delegate;
return set_formula_BANG_;
})()
;

/**
* @constructor
*/
tailrecursion.javelin.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.input_QMARK_ = input_QMARK_;
this.cljs$lang$protocol_mask$partition1$ = 2;
this.cljs$lang$protocol_mask$partition0$ = 2147647488;
})
tailrecursion.javelin.Cell.cljs$lang$type = true;
tailrecursion.javelin.Cell.cljs$lang$ctorStr = "tailrecursion.javelin/Cell";
tailrecursion.javelin.Cell.cljs$lang$ctorPrWriter = (function (this__6266__auto__,writer__6267__auto__,opt__6268__auto__){return cljs.core._write.call(null,writer__6267__auto__,"tailrecursion.javelin/Cell");
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__7725 = cljs.core.seq.call(null,self__.watches);var chunk__7726 = null;var count__7727 = 0;var i__7728 = 0;while(true){
if((i__7728 < count__7727))
{var vec__7729 = cljs.core._nth.call(null,chunk__7726,i__7728);var key = cljs.core.nth.call(null,vec__7729,0,null);var f = cljs.core.nth.call(null,vec__7729,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__7731 = seq__7725;
var G__7732 = chunk__7726;
var G__7733 = count__7727;
var G__7734 = (i__7728 + 1);
seq__7725 = G__7731;
chunk__7726 = G__7732;
count__7727 = G__7733;
i__7728 = G__7734;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7725);if(temp__4092__auto__)
{var seq__7725__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7725__$1))
{var c__6447__auto__ = cljs.core.chunk_first.call(null,seq__7725__$1);{
var G__7735 = cljs.core.chunk_rest.call(null,seq__7725__$1);
var G__7736 = c__6447__auto__;
var G__7737 = cljs.core.count.call(null,c__6447__auto__);
var G__7738 = 0;
seq__7725 = G__7735;
chunk__7726 = G__7736;
count__7727 = G__7737;
i__7728 = G__7738;
continue;
}
} else
{var vec__7730 = cljs.core.first.call(null,seq__7725__$1);var key = cljs.core.nth.call(null,vec__7730,0,null);var f = cljs.core.nth.call(null,vec__7730,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__7739 = cljs.core.next.call(null,seq__7725__$1);
var G__7740 = null;
var G__7741 = 0;
var G__7742 = 0;
seq__7725 = G__7739;
chunk__7726 = G__7740;
count__7727 = G__7741;
i__7728 = G__7742;
continue;
}
}
} else
{return null;
}
}
break;
}
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
tailrecursion.javelin.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
tailrecursion.javelin.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return this$__$1.state;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.meta;
});
tailrecursion.javelin.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core.write_all.call(null,writer,"#<Cell: ",cljs.core.pr_str.call(null,self__.state),">");
});
tailrecursion.javelin.__GT_Cell = (function __GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_){return (new tailrecursion.javelin.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,input_QMARK_));
});
tailrecursion.javelin.lift = (function lift(f){return (function() { 
var G__7743__delegate = function (sources){return tailrecursion.javelin.set_formula_BANG_.call(null,tailrecursion.javelin.cell.call(null,new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)),f,sources);
};
var G__7743 = function (var_args){
var sources = null;if (arguments.length > 0) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7743__delegate.call(this,sources);};
G__7743.cljs$lang$maxFixedArity = 0;
G__7743.cljs$lang$applyTo = (function (arglist__7744){
var sources = cljs.core.seq(arglist__7744);
return G__7743__delegate(sources);
});
G__7743.cljs$core$IFn$_invoke$arity$variadic = G__7743__delegate;
return G__7743;
})()
;
});
tailrecursion.javelin.cell = (function cell(x){return tailrecursion.javelin.set_formula_BANG_.call(null,(new tailrecursion.javelin.Cell(cljs.core.PersistentArrayMap.EMPTY,x,tailrecursion.javelin.next_rank.call(null),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});
tailrecursion.javelin.cell_QMARK_ = (function cell_QMARK_(c){if(cljs.core._EQ_.call(null,cljs.core.type.call(null,c),tailrecursion.javelin.Cell))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.input_QMARK_ = (function input_QMARK_(c){if(cljs.core.truth_((function (){var and__5687__auto__ = tailrecursion.javelin.cell_QMARK_.call(null,c);if(cljs.core.truth_(and__5687__auto__))
{return c.input_QMARK_;
} else
{return and__5687__auto__;
}
})()))
{return c;
} else
{return null;
}
});
tailrecursion.javelin.set_cell_BANG_ = (function set_cell_BANG_(c,x){c.state = x;
return tailrecursion.javelin.set_formula_BANG_.call(null,c);
});
/**
* @param {...*} var_args
*/
tailrecursion.javelin.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (cells){var olds = cljs.core.atom.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cells),new cljs.core.Keyword("tailrecursion.javelin","none","tailrecursion.javelin/none",3109973412)));var tag_neq = ((function (olds){
return (function (p1__7745_SHARP_,p2__7746_SHARP_){return (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.call(null,p1__7745_SHARP_,p2__7746_SHARP_),p2__7746_SHARP_],null));
});})(olds))
;var diff = ((function (olds,tag_neq){
return (function (p1__7748_SHARP_,p2__7747_SHARP_){return cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,cljs.core.first,cljs.core.map.call(null,tag_neq,p1__7748_SHARP_,p2__7747_SHARP_))));
});})(olds,tag_neq))
;var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__7750__delegate = function (rest__7749_SHARP_){var news = diff.call(null,cljs.core.deref.call(null,olds),rest__7749_SHARP_);cljs.core.reset_BANG_.call(null,olds,rest__7749_SHARP_);
return news;
};
var G__7750 = function (var_args){
var rest__7749_SHARP_ = null;if (arguments.length > 0) {
  rest__7749_SHARP_ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__7750__delegate.call(this,rest__7749_SHARP_);};
G__7750.cljs$lang$maxFixedArity = 0;
G__7750.cljs$lang$applyTo = (function (arglist__7751){
var rest__7749_SHARP_ = cljs.core.seq(arglist__7751);
return G__7750__delegate(rest__7749_SHARP_);
});
G__7750.cljs$core$IFn$_invoke$arity$variadic = G__7750__delegate;
return G__7750;
})()
;})(olds,tag_neq,diff))
;return cljs.core.apply.call(null,tailrecursion.javelin.lift.call(null,proc),cells);
};
var alts_BANG_ = function (var_args){
var cells = null;if (arguments.length > 0) {
  cells = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return alts_BANG___delegate.call(this,cells);};
alts_BANG_.cljs$lang$maxFixedArity = 0;
alts_BANG_.cljs$lang$applyTo = (function (arglist__7752){
var cells = cljs.core.seq(arglist__7752);
return alts_BANG___delegate(cells);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
tailrecursion.javelin.cell_map = (function cell_map(f,c){var cseq = tailrecursion.javelin.lift.call(null,cljs.core.seq).call(null,c);var safe_nth = ((function (cseq){
return (function (p1__7753_SHARP_,p2__7754_SHARP_){try{return cljs.core.nth.call(null,p1__7753_SHARP_,p2__7754_SHARP_);
}catch (e7757){if((e7757 instanceof Error))
{var _ = e7757;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7757;
} else
{return null;
}
}
}});})(cseq))
;return cljs.core.map.call(null,(function (p1__7755_SHARP_){return tailrecursion.javelin.lift.call(null,cljs.core.comp.call(null,f,safe_nth)).call(null,cseq,p1__7755_SHARP_);
}),cljs.core.range.call(null,0,cljs.core.count.call(null,cljs.core.deref.call(null,cseq))));
});

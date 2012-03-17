goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____3652 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____3652))
{return or__3548__auto____3652;
} else
{var or__3548__auto____3653 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____3653))
{return or__3548__auto____3653;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3654 = coll;

if(cljs.core.truth_(and__3546__auto____3654))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3654;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3655 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3655))
{return or__3548__auto____3655;
} else
{var or__3548__auto____3656 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3656))
{return or__3548__auto____3656;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3657 = coll;

if(cljs.core.truth_(and__3546__auto____3657))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3657;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3658 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3658))
{return or__3548__auto____3658;
} else
{var or__3548__auto____3659 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3659))
{return or__3548__auto____3659;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3660 = coll;

if(cljs.core.truth_(and__3546__auto____3660))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3660;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3661 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3661))
{return or__3548__auto____3661;
} else
{var or__3548__auto____3662 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3662))
{return or__3548__auto____3662;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__3669 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3663 = coll;

if(cljs.core.truth_(and__3546__auto____3663))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3663;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3664 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3664))
{return or__3548__auto____3664;
} else
{var or__3548__auto____3665 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3665))
{return or__3548__auto____3665;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3670 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3666 = coll;

if(cljs.core.truth_(and__3546__auto____3666))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3666;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3667 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3667))
{return or__3548__auto____3667;
} else
{var or__3548__auto____3668 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3668))
{return or__3548__auto____3668;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__3669.call(this,coll,n);
case  3 :
return _nth__3670.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3672 = coll;

if(cljs.core.truth_(and__3546__auto____3672))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3672;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3673 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3673))
{return or__3548__auto____3673;
} else
{var or__3548__auto____3674 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3674))
{return or__3548__auto____3674;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3675 = coll;

if(cljs.core.truth_(and__3546__auto____3675))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3675;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3676 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3676))
{return or__3548__auto____3676;
} else
{var or__3548__auto____3677 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3677))
{return or__3548__auto____3677;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__3684 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3678 = o;

if(cljs.core.truth_(and__3546__auto____3678))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3678;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3679 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3679))
{return or__3548__auto____3679;
} else
{var or__3548__auto____3680 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3680))
{return or__3548__auto____3680;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3685 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3681 = o;

if(cljs.core.truth_(and__3546__auto____3681))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3681;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3682 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3682))
{return or__3548__auto____3682;
} else
{var or__3548__auto____3683 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3683))
{return or__3548__auto____3683;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__3684.call(this,o,k);
case  3 :
return _lookup__3685.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3687 = coll;

if(cljs.core.truth_(and__3546__auto____3687))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3687;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3688 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3688))
{return or__3548__auto____3688;
} else
{var or__3548__auto____3689 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3689))
{return or__3548__auto____3689;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3690 = coll;

if(cljs.core.truth_(and__3546__auto____3690))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3690;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3691 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3691))
{return or__3548__auto____3691;
} else
{var or__3548__auto____3692 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3692))
{return or__3548__auto____3692;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3693 = coll;

if(cljs.core.truth_(and__3546__auto____3693))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3693;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3694 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3694))
{return or__3548__auto____3694;
} else
{var or__3548__auto____3695 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3695))
{return or__3548__auto____3695;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3696 = coll;

if(cljs.core.truth_(and__3546__auto____3696))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3696;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3697 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3697))
{return or__3548__auto____3697;
} else
{var or__3548__auto____3698 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3698))
{return or__3548__auto____3698;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3699 = coll;

if(cljs.core.truth_(and__3546__auto____3699))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3699;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3700 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3700))
{return or__3548__auto____3700;
} else
{var or__3548__auto____3701 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3701))
{return or__3548__auto____3701;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3702 = coll;

if(cljs.core.truth_(and__3546__auto____3702))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3702;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3703 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3703))
{return or__3548__auto____3703;
} else
{var or__3548__auto____3704 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3704))
{return or__3548__auto____3704;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3705 = coll;

if(cljs.core.truth_(and__3546__auto____3705))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3705;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3706 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3706))
{return or__3548__auto____3706;
} else
{var or__3548__auto____3707 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3707))
{return or__3548__auto____3707;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3708 = o;

if(cljs.core.truth_(and__3546__auto____3708))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3708;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3709 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3709))
{return or__3548__auto____3709;
} else
{var or__3548__auto____3710 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3710))
{return or__3548__auto____3710;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3711 = o;

if(cljs.core.truth_(and__3546__auto____3711))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3711;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3712 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3712))
{return or__3548__auto____3712;
} else
{var or__3548__auto____3713 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3713))
{return or__3548__auto____3713;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3714 = o;

if(cljs.core.truth_(and__3546__auto____3714))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3714;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3715 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3715))
{return or__3548__auto____3715;
} else
{var or__3548__auto____3716 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3716))
{return or__3548__auto____3716;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3717 = o;

if(cljs.core.truth_(and__3546__auto____3717))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3717;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3718 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3718))
{return or__3548__auto____3718;
} else
{var or__3548__auto____3719 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3719))
{return or__3548__auto____3719;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__3726 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3720 = coll;

if(cljs.core.truth_(and__3546__auto____3720))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3720;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3721 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3721))
{return or__3548__auto____3721;
} else
{var or__3548__auto____3722 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3722))
{return or__3548__auto____3722;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3727 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3723 = coll;

if(cljs.core.truth_(and__3546__auto____3723))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3723;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3724 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3724))
{return or__3548__auto____3724;
} else
{var or__3548__auto____3725 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3725))
{return or__3548__auto____3725;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__3726.call(this,coll,f);
case  3 :
return _reduce__3727.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3729 = o;

if(cljs.core.truth_(and__3546__auto____3729))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3729;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3730 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3730))
{return or__3548__auto____3730;
} else
{var or__3548__auto____3731 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3731))
{return or__3548__auto____3731;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3732 = o;

if(cljs.core.truth_(and__3546__auto____3732))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3732;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3733 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3733))
{return or__3548__auto____3733;
} else
{var or__3548__auto____3734 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3734))
{return or__3548__auto____3734;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3735 = o;

if(cljs.core.truth_(and__3546__auto____3735))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3735;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3736 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3736))
{return or__3548__auto____3736;
} else
{var or__3548__auto____3737 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3737))
{return or__3548__auto____3737;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____3738 = o;

if(cljs.core.truth_(and__3546__auto____3738))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3738;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3739 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3739))
{return or__3548__auto____3739;
} else
{var or__3548__auto____3740 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3740))
{return or__3548__auto____3740;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3741 = d;

if(cljs.core.truth_(and__3546__auto____3741))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3741;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3742 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3742))
{return or__3548__auto____3742;
} else
{var or__3548__auto____3743 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3743))
{return or__3548__auto____3743;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3744 = this$;

if(cljs.core.truth_(and__3546__auto____3744))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3744;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3745 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3745))
{return or__3548__auto____3745;
} else
{var or__3548__auto____3746 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3746))
{return or__3548__auto____3746;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3747 = this$;

if(cljs.core.truth_(and__3546__auto____3747))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3747;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3748 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3748))
{return or__3548__auto____3748;
} else
{var or__3548__auto____3749 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3749))
{return or__3548__auto____3749;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3750 = this$;

if(cljs.core.truth_(and__3546__auto____3750))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3750;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3751 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3751))
{return or__3548__auto____3751;
} else
{var or__3548__auto____3752 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3752))
{return or__3548__auto____3752;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__3753 = null;
var G__3753__3754 = (function (o,k){
return null;
});
var G__3753__3755 = (function (o,k,not_found){
return not_found;
});
G__3753 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3753__3754.call(this,o,k);
case  3 :
return G__3753__3755.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3753;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__3757 = null;
var G__3757__3758 = (function (_,f){
return f.call(null);
});
var G__3757__3759 = (function (_,f,start){
return start;
});
G__3757 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3757__3758.call(this,_,f);
case  3 :
return G__3757__3759.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3757;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__3761 = null;
var G__3761__3762 = (function (_,n){
return null;
});
var G__3761__3763 = (function (_,n,not_found){
return not_found;
});
G__3761 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3761__3762.call(this,_,n);
case  3 :
return G__3761__3763.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3761;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__3771 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3765 = cljs.core._nth.call(null,cicoll,0);
var n__3766 = 1;

while(true){
if(cljs.core.truth_((n__3766 < cljs.core._count.call(null,cicoll))))
{{
var G__3775 = f.call(null,val__3765,cljs.core._nth.call(null,cicoll,n__3766));
var G__3776 = (n__3766 + 1);
val__3765 = G__3775;
n__3766 = G__3776;
continue;
}
} else
{return val__3765;
}
break;
}
}
});
var ci_reduce__3772 = (function (cicoll,f,val){
var val__3767 = val;
var n__3768 = 0;

while(true){
if(cljs.core.truth_((n__3768 < cljs.core._count.call(null,cicoll))))
{{
var G__3777 = f.call(null,val__3767,cljs.core._nth.call(null,cicoll,n__3768));
var G__3778 = (n__3768 + 1);
val__3767 = G__3777;
n__3768 = G__3778;
continue;
}
} else
{return val__3767;
}
break;
}
});
var ci_reduce__3773 = (function (cicoll,f,val,idx){
var val__3769 = val;
var n__3770 = idx;

while(true){
if(cljs.core.truth_((n__3770 < cljs.core._count.call(null,cicoll))))
{{
var G__3779 = f.call(null,val__3769,cljs.core._nth.call(null,cicoll,n__3770));
var G__3780 = (n__3770 + 1);
val__3769 = G__3779;
n__3770 = G__3780;
continue;
}
} else
{return val__3769;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3771.call(this,cicoll,f);
case  3 :
return ci_reduce__3772.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3773.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3781 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3794 = null;
var G__3794__3795 = (function (coll,f){
var this__3782 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__3782.a[this__3782.i]),(this__3782.i + 1));
});
var G__3794__3796 = (function (coll,f,start){
var this__3783 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__3783.i);
});
G__3794 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3794__3795.call(this,coll,f);
case  3 :
return G__3794__3796.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3794;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3784 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3785 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3798 = null;
var G__3798__3799 = (function (coll,n){
var this__3786 = this;
var i__3787 = (n + this__3786.i);

if(cljs.core.truth_((i__3787 < this__3786.a.length)))
{return (this__3786.a[i__3787]);
} else
{return null;
}
});
var G__3798__3800 = (function (coll,n,not_found){
var this__3788 = this;
var i__3789 = (n + this__3788.i);

if(cljs.core.truth_((i__3789 < this__3788.a.length)))
{return (this__3788.a[i__3789]);
} else
{return not_found;
}
});
G__3798 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3798__3799.call(this,coll,n);
case  3 :
return G__3798__3800.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3798;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3790 = this;
return (this__3790.a.length - this__3790.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3791 = this;
return (this__3791.a[this__3791.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3792 = this;
if(cljs.core.truth_(((this__3792.i + 1) < this__3792.a.length)))
{return (new cljs.core.IndexedSeq(this__3792.a,(this__3792.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3793 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__3802 = null;
var G__3802__3803 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3802__3804 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3802 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3802__3803.call(this,array,f);
case  3 :
return G__3802__3804.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3802;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3806 = null;
var G__3806__3807 = (function (array,k){
return (array[k]);
});
var G__3806__3808 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3806 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3806__3807.call(this,array,k);
case  3 :
return G__3806__3808.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3806;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3810 = null;
var G__3810__3811 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3810__3812 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3810 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3810__3811.call(this,array,n);
case  3 :
return G__3810__3812.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3810;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____3814 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3814))
{var s__3815 = temp__3698__auto____3814;

return cljs.core._first.call(null,s__3815);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__3816 = cljs.core.next.call(null,s);
s = G__3816;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__3817 = cljs.core.seq.call(null,x);
var n__3818 = 0;

while(true){
if(cljs.core.truth_(s__3817))
{{
var G__3819 = cljs.core.next.call(null,s__3817);
var G__3820 = (n__3818 + 1);
s__3817 = G__3819;
n__3818 = G__3820;
continue;
}
} else
{return n__3818;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__3821 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3822 = (function() { 
var G__3824__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3825 = conj.call(null,coll,x);
var G__3826 = cljs.core.first.call(null,xs);
var G__3827 = cljs.core.next.call(null,xs);
coll = G__3825;
x = G__3826;
xs = G__3827;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3824 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3824__delegate.call(this, coll, x, xs);
};
G__3824.cljs$lang$maxFixedArity = 2;
G__3824.cljs$lang$applyTo = (function (arglist__3828){
var coll = cljs.core.first(arglist__3828);
var x = cljs.core.first(cljs.core.next(arglist__3828));
var xs = cljs.core.rest(cljs.core.next(arglist__3828));
return G__3824__delegate.call(this, coll, x, xs);
});
return G__3824;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3821.call(this,coll,x);
default:
return conj__3822.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3822.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__3829 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3830 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3829.call(this,coll,n);
case  3 :
return nth__3830.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__3832 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3833 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3832.call(this,o,k);
case  3 :
return get__3833.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3836 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3837 = (function() { 
var G__3839__delegate = function (coll,k,v,kvs){
while(true){
var ret__3835 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3840 = ret__3835;
var G__3841 = cljs.core.first.call(null,kvs);
var G__3842 = cljs.core.second.call(null,kvs);
var G__3843 = cljs.core.nnext.call(null,kvs);
coll = G__3840;
k = G__3841;
v = G__3842;
kvs = G__3843;
continue;
}
} else
{return ret__3835;
}
break;
}
};
var G__3839 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3839__delegate.call(this, coll, k, v, kvs);
};
G__3839.cljs$lang$maxFixedArity = 3;
G__3839.cljs$lang$applyTo = (function (arglist__3844){
var coll = cljs.core.first(arglist__3844);
var k = cljs.core.first(cljs.core.next(arglist__3844));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3844)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3844)));
return G__3839__delegate.call(this, coll, k, v, kvs);
});
return G__3839;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3836.call(this,coll,k,v);
default:
return assoc__3837.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3837.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__3846 = (function (coll){
return coll;
});
var dissoc__3847 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3848 = (function() { 
var G__3850__delegate = function (coll,k,ks){
while(true){
var ret__3845 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3851 = ret__3845;
var G__3852 = cljs.core.first.call(null,ks);
var G__3853 = cljs.core.next.call(null,ks);
coll = G__3851;
k = G__3852;
ks = G__3853;
continue;
}
} else
{return ret__3845;
}
break;
}
};
var G__3850 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3850__delegate.call(this, coll, k, ks);
};
G__3850.cljs$lang$maxFixedArity = 2;
G__3850.cljs$lang$applyTo = (function (arglist__3854){
var coll = cljs.core.first(arglist__3854);
var k = cljs.core.first(cljs.core.next(arglist__3854));
var ks = cljs.core.rest(cljs.core.next(arglist__3854));
return G__3850__delegate.call(this, coll, k, ks);
});
return G__3850;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3846.call(this,coll);
case  2 :
return dissoc__3847.call(this,coll,k);
default:
return dissoc__3848.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3848.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__384__auto____3855 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3856 = x__384__auto____3855;

if(cljs.core.truth_(and__3546__auto____3856))
{var and__3546__auto____3857 = x__384__auto____3855.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3857))
{return cljs.core.not.call(null,x__384__auto____3855.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3857;
}
} else
{return and__3546__auto____3856;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__384__auto____3855);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__3859 = (function (coll){
return coll;
});
var disj__3860 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3861 = (function() { 
var G__3863__delegate = function (coll,k,ks){
while(true){
var ret__3858 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3864 = ret__3858;
var G__3865 = cljs.core.first.call(null,ks);
var G__3866 = cljs.core.next.call(null,ks);
coll = G__3864;
k = G__3865;
ks = G__3866;
continue;
}
} else
{return ret__3858;
}
break;
}
};
var G__3863 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3863__delegate.call(this, coll, k, ks);
};
G__3863.cljs$lang$maxFixedArity = 2;
G__3863.cljs$lang$applyTo = (function (arglist__3867){
var coll = cljs.core.first(arglist__3867);
var k = cljs.core.first(cljs.core.next(arglist__3867));
var ks = cljs.core.rest(cljs.core.next(arglist__3867));
return G__3863__delegate.call(this, coll, k, ks);
});
return G__3863;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3859.call(this,coll);
case  2 :
return disj__3860.call(this,coll,k);
default:
return disj__3861.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3861.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__384__auto____3868 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3869 = x__384__auto____3868;

if(cljs.core.truth_(and__3546__auto____3869))
{var and__3546__auto____3870 = x__384__auto____3868.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3870))
{return cljs.core.not.call(null,x__384__auto____3868.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3870;
}
} else
{return and__3546__auto____3869;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__384__auto____3868);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__384__auto____3871 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3872 = x__384__auto____3871;

if(cljs.core.truth_(and__3546__auto____3872))
{var and__3546__auto____3873 = x__384__auto____3871.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3873))
{return cljs.core.not.call(null,x__384__auto____3871.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3873;
}
} else
{return and__3546__auto____3872;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__384__auto____3871);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__384__auto____3874 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3875 = x__384__auto____3874;

if(cljs.core.truth_(and__3546__auto____3875))
{var and__3546__auto____3876 = x__384__auto____3874.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3876))
{return cljs.core.not.call(null,x__384__auto____3874.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3876;
}
} else
{return and__3546__auto____3875;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__384__auto____3874);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__384__auto____3877 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3878 = x__384__auto____3877;

if(cljs.core.truth_(and__3546__auto____3878))
{var and__3546__auto____3879 = x__384__auto____3877.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3879))
{return cljs.core.not.call(null,x__384__auto____3877.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3879;
}
} else
{return and__3546__auto____3878;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__384__auto____3877);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__384__auto____3880 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3881 = x__384__auto____3880;

if(cljs.core.truth_(and__3546__auto____3881))
{var and__3546__auto____3882 = x__384__auto____3880.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3882))
{return cljs.core.not.call(null,x__384__auto____3880.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3882;
}
} else
{return and__3546__auto____3881;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__384__auto____3880);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__384__auto____3883 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3884 = x__384__auto____3883;

if(cljs.core.truth_(and__3546__auto____3884))
{var and__3546__auto____3885 = x__384__auto____3883.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3885))
{return cljs.core.not.call(null,x__384__auto____3883.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3885;
}
} else
{return and__3546__auto____3884;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__384__auto____3883);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__384__auto____3886 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3887 = x__384__auto____3886;

if(cljs.core.truth_(and__3546__auto____3887))
{var and__3546__auto____3888 = x__384__auto____3886.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3888))
{return cljs.core.not.call(null,x__384__auto____3886.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3888;
}
} else
{return and__3546__auto____3887;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__384__auto____3886);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3889 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3889.push(key);
}));
return keys__3889;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__384__auto____3890 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3891 = x__384__auto____3890;

if(cljs.core.truth_(and__3546__auto____3891))
{var and__3546__auto____3892 = x__384__auto____3890.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3892))
{return cljs.core.not.call(null,x__384__auto____3890.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3892;
}
} else
{return and__3546__auto____3891;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__384__auto____3890);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____3893 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3893))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3894 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____3894))
{return or__3548__auto____3894;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____3893;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3895 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3895))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____3895;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3896 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3896))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____3896;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____3897 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3897))
{return (n == n.toFixed());
} else
{return and__3546__auto____3897;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3898 = coll;

if(cljs.core.truth_(and__3546__auto____3898))
{var and__3546__auto____3899 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3899))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3899;
}
} else
{return and__3546__auto____3898;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___3904 = (function (x){
return true;
});
var distinct_QMARK___3905 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3906 = (function() { 
var G__3908__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3900 = cljs.core.set([y,x]);
var xs__3901 = more;

while(true){
var x__3902 = cljs.core.first.call(null,xs__3901);
var etc__3903 = cljs.core.next.call(null,xs__3901);

if(cljs.core.truth_(xs__3901))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3900,x__3902)))
{return false;
} else
{{
var G__3909 = cljs.core.conj.call(null,s__3900,x__3902);
var G__3910 = etc__3903;
s__3900 = G__3909;
xs__3901 = G__3910;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__3908 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3908__delegate.call(this, x, y, more);
};
G__3908.cljs$lang$maxFixedArity = 2;
G__3908.cljs$lang$applyTo = (function (arglist__3911){
var x = cljs.core.first(arglist__3911);
var y = cljs.core.first(cljs.core.next(arglist__3911));
var more = cljs.core.rest(cljs.core.next(arglist__3911));
return G__3908__delegate.call(this, x, y, more);
});
return G__3908;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3904.call(this,x);
case  2 :
return distinct_QMARK___3905.call(this,x,y);
default:
return distinct_QMARK___3906.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3906.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__3912 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3912)))
{return r__3912;
} else
{if(cljs.core.truth_(r__3912))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__3914 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3915 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3913 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3913,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3913);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3914.call(this,comp);
case  2 :
return sort__3915.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__3917 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3918 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3917.call(this,keyfn,comp);
case  3 :
return sort_by__3918.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__3920 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3921 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3920.call(this,f,val);
case  3 :
return reduce__3921.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3927 = (function (f,coll){
var temp__3695__auto____3923 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3923))
{var s__3924 = temp__3695__auto____3923;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3924),cljs.core.next.call(null,s__3924));
} else
{return f.call(null);
}
});
var seq_reduce__3928 = (function (f,val,coll){
var val__3925 = val;
var coll__3926 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3926))
{{
var G__3930 = f.call(null,val__3925,cljs.core.first.call(null,coll__3926));
var G__3931 = cljs.core.next.call(null,coll__3926);
val__3925 = G__3930;
coll__3926 = G__3931;
continue;
}
} else
{return val__3925;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3927.call(this,f,val);
case  3 :
return seq_reduce__3928.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3932 = null;
var G__3932__3933 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3932__3934 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3932 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3932__3933.call(this,coll,f);
case  3 :
return G__3932__3934.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3932;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3936 = (function (){
return 0;
});
var _PLUS___3937 = (function (x){
return x;
});
var _PLUS___3938 = (function (x,y){
return (x + y);
});
var _PLUS___3939 = (function() { 
var G__3941__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__3941 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3941__delegate.call(this, x, y, more);
};
G__3941.cljs$lang$maxFixedArity = 2;
G__3941.cljs$lang$applyTo = (function (arglist__3942){
var x = cljs.core.first(arglist__3942);
var y = cljs.core.first(cljs.core.next(arglist__3942));
var more = cljs.core.rest(cljs.core.next(arglist__3942));
return G__3941__delegate.call(this, x, y, more);
});
return G__3941;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3936.call(this);
case  1 :
return _PLUS___3937.call(this,x);
case  2 :
return _PLUS___3938.call(this,x,y);
default:
return _PLUS___3939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3939.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___3943 = (function (x){
return (- x);
});
var ___3944 = (function (x,y){
return (x - y);
});
var ___3945 = (function() { 
var G__3947__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__3947 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3947__delegate.call(this, x, y, more);
};
G__3947.cljs$lang$maxFixedArity = 2;
G__3947.cljs$lang$applyTo = (function (arglist__3948){
var x = cljs.core.first(arglist__3948);
var y = cljs.core.first(cljs.core.next(arglist__3948));
var more = cljs.core.rest(cljs.core.next(arglist__3948));
return G__3947__delegate.call(this, x, y, more);
});
return G__3947;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3943.call(this,x);
case  2 :
return ___3944.call(this,x,y);
default:
return ___3945.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3945.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3949 = (function (){
return 1;
});
var _STAR___3950 = (function (x){
return x;
});
var _STAR___3951 = (function (x,y){
return (x * y);
});
var _STAR___3952 = (function() { 
var G__3954__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__3954 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3954__delegate.call(this, x, y, more);
};
G__3954.cljs$lang$maxFixedArity = 2;
G__3954.cljs$lang$applyTo = (function (arglist__3955){
var x = cljs.core.first(arglist__3955);
var y = cljs.core.first(cljs.core.next(arglist__3955));
var more = cljs.core.rest(cljs.core.next(arglist__3955));
return G__3954__delegate.call(this, x, y, more);
});
return G__3954;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3949.call(this);
case  1 :
return _STAR___3950.call(this,x);
case  2 :
return _STAR___3951.call(this,x,y);
default:
return _STAR___3952.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3952.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___3956 = (function (x){
return (1 / x);
});
var _SLASH___3957 = (function (x,y){
return (x / y);
});
var _SLASH___3958 = (function() { 
var G__3960__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3960 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3960__delegate.call(this, x, y, more);
};
G__3960.cljs$lang$maxFixedArity = 2;
G__3960.cljs$lang$applyTo = (function (arglist__3961){
var x = cljs.core.first(arglist__3961);
var y = cljs.core.first(cljs.core.next(arglist__3961));
var more = cljs.core.rest(cljs.core.next(arglist__3961));
return G__3960__delegate.call(this, x, y, more);
});
return G__3960;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3956.call(this,x);
case  2 :
return _SLASH___3957.call(this,x,y);
default:
return _SLASH___3958.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3958.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___3962 = (function (x){
return true;
});
var _LT___3963 = (function (x,y){
return (x < y);
});
var _LT___3964 = (function() { 
var G__3966__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3967 = y;
var G__3968 = cljs.core.first.call(null,more);
var G__3969 = cljs.core.next.call(null,more);
x = G__3967;
y = G__3968;
more = G__3969;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3966 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3966__delegate.call(this, x, y, more);
};
G__3966.cljs$lang$maxFixedArity = 2;
G__3966.cljs$lang$applyTo = (function (arglist__3970){
var x = cljs.core.first(arglist__3970);
var y = cljs.core.first(cljs.core.next(arglist__3970));
var more = cljs.core.rest(cljs.core.next(arglist__3970));
return G__3966__delegate.call(this, x, y, more);
});
return G__3966;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3962.call(this,x);
case  2 :
return _LT___3963.call(this,x,y);
default:
return _LT___3964.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3964.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___3971 = (function (x){
return true;
});
var _LT__EQ___3972 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3973 = (function() { 
var G__3975__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3976 = y;
var G__3977 = cljs.core.first.call(null,more);
var G__3978 = cljs.core.next.call(null,more);
x = G__3976;
y = G__3977;
more = G__3978;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3975 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3975__delegate.call(this, x, y, more);
};
G__3975.cljs$lang$maxFixedArity = 2;
G__3975.cljs$lang$applyTo = (function (arglist__3979){
var x = cljs.core.first(arglist__3979);
var y = cljs.core.first(cljs.core.next(arglist__3979));
var more = cljs.core.rest(cljs.core.next(arglist__3979));
return G__3975__delegate.call(this, x, y, more);
});
return G__3975;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3971.call(this,x);
case  2 :
return _LT__EQ___3972.call(this,x,y);
default:
return _LT__EQ___3973.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3973.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___3980 = (function (x){
return true;
});
var _GT___3981 = (function (x,y){
return (x > y);
});
var _GT___3982 = (function() { 
var G__3984__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3985 = y;
var G__3986 = cljs.core.first.call(null,more);
var G__3987 = cljs.core.next.call(null,more);
x = G__3985;
y = G__3986;
more = G__3987;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3984 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3984__delegate.call(this, x, y, more);
};
G__3984.cljs$lang$maxFixedArity = 2;
G__3984.cljs$lang$applyTo = (function (arglist__3988){
var x = cljs.core.first(arglist__3988);
var y = cljs.core.first(cljs.core.next(arglist__3988));
var more = cljs.core.rest(cljs.core.next(arglist__3988));
return G__3984__delegate.call(this, x, y, more);
});
return G__3984;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3980.call(this,x);
case  2 :
return _GT___3981.call(this,x,y);
default:
return _GT___3982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3982.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___3989 = (function (x){
return true;
});
var _GT__EQ___3990 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3991 = (function() { 
var G__3993__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3994 = y;
var G__3995 = cljs.core.first.call(null,more);
var G__3996 = cljs.core.next.call(null,more);
x = G__3994;
y = G__3995;
more = G__3996;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3993 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3993__delegate.call(this, x, y, more);
};
G__3993.cljs$lang$maxFixedArity = 2;
G__3993.cljs$lang$applyTo = (function (arglist__3997){
var x = cljs.core.first(arglist__3997);
var y = cljs.core.first(cljs.core.next(arglist__3997));
var more = cljs.core.rest(cljs.core.next(arglist__3997));
return G__3993__delegate.call(this, x, y, more);
});
return G__3993;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3989.call(this,x);
case  2 :
return _GT__EQ___3990.call(this,x,y);
default:
return _GT__EQ___3991.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3991.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__3998 = (function (x){
return x;
});
var max__3999 = (function (x,y){
return ((x > y) ? x : y);
});
var max__4000 = (function() { 
var G__4002__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__4002 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4002__delegate.call(this, x, y, more);
};
G__4002.cljs$lang$maxFixedArity = 2;
G__4002.cljs$lang$applyTo = (function (arglist__4003){
var x = cljs.core.first(arglist__4003);
var y = cljs.core.first(cljs.core.next(arglist__4003));
var more = cljs.core.rest(cljs.core.next(arglist__4003));
return G__4002__delegate.call(this, x, y, more);
});
return G__4002;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3998.call(this,x);
case  2 :
return max__3999.call(this,x,y);
default:
return max__4000.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__4000.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__4004 = (function (x){
return x;
});
var min__4005 = (function (x,y){
return ((x < y) ? x : y);
});
var min__4006 = (function() { 
var G__4008__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__4008 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4008__delegate.call(this, x, y, more);
};
G__4008.cljs$lang$maxFixedArity = 2;
G__4008.cljs$lang$applyTo = (function (arglist__4009){
var x = cljs.core.first(arglist__4009);
var y = cljs.core.first(cljs.core.next(arglist__4009));
var more = cljs.core.rest(cljs.core.next(arglist__4009));
return G__4008__delegate.call(this, x, y, more);
});
return G__4008;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__4004.call(this,x);
case  2 :
return min__4005.call(this,x,y);
default:
return min__4006.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__4006.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__4010 = (n % d);

return cljs.core.fix.call(null,((n - rem__4010) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__4011 = cljs.core.quot.call(null,n,d);

return (n - (d * q__4011));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4012 = (function (){
return Math.random.call(null);
});
var rand__4013 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4012.call(this);
case  1 :
return rand__4013.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___4015 = (function (x){
return true;
});
var _EQ__EQ___4016 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___4017 = (function() { 
var G__4019__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__4020 = y;
var G__4021 = cljs.core.first.call(null,more);
var G__4022 = cljs.core.next.call(null,more);
x = G__4020;
y = G__4021;
more = G__4022;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__4019 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4019__delegate.call(this, x, y, more);
};
G__4019.cljs$lang$maxFixedArity = 2;
G__4019.cljs$lang$applyTo = (function (arglist__4023){
var x = cljs.core.first(arglist__4023);
var y = cljs.core.first(cljs.core.next(arglist__4023));
var more = cljs.core.rest(cljs.core.next(arglist__4023));
return G__4019__delegate.call(this, x, y, more);
});
return G__4019;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___4015.call(this,x);
case  2 :
return _EQ__EQ___4016.call(this,x,y);
default:
return _EQ__EQ___4017.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___4017.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__4024 = n;
var xs__4025 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4026 = xs__4025;

if(cljs.core.truth_(and__3546__auto____4026))
{return (n__4024 > 0);
} else
{return and__3546__auto____4026;
}
})()))
{{
var G__4027 = (n__4024 - 1);
var G__4028 = cljs.core.next.call(null,xs__4025);
n__4024 = G__4027;
xs__4025 = G__4028;
continue;
}
} else
{return xs__4025;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__4033 = null;
var G__4033__4034 = (function (coll,n){
var temp__3695__auto____4029 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____4029))
{var xs__4030 = temp__3695__auto____4029;

return cljs.core.first.call(null,xs__4030);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__4033__4035 = (function (coll,n,not_found){
var temp__3695__auto____4031 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____4031))
{var xs__4032 = temp__3695__auto____4031;

return cljs.core.first.call(null,xs__4032);
} else
{return not_found;
}
});
G__4033 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4033__4034.call(this,coll,n);
case  3 :
return G__4033__4035.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4033;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___4037 = (function (){
return "";
});
var str_STAR___4038 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___4039 = (function() { 
var G__4041__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__4042 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__4043 = cljs.core.next.call(null,more);
sb = G__4042;
more = G__4043;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__4041 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4041__delegate.call(this, x, ys);
};
G__4041.cljs$lang$maxFixedArity = 1;
G__4041.cljs$lang$applyTo = (function (arglist__4044){
var x = cljs.core.first(arglist__4044);
var ys = cljs.core.rest(arglist__4044);
return G__4041__delegate.call(this, x, ys);
});
return G__4041;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___4037.call(this);
case  1 :
return str_STAR___4038.call(this,x);
default:
return str_STAR___4039.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___4039.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__4045 = (function (){
return "";
});
var str__4046 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__4047 = (function() { 
var G__4049__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__4049 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4049__delegate.call(this, x, ys);
};
G__4049.cljs$lang$maxFixedArity = 1;
G__4049.cljs$lang$applyTo = (function (arglist__4050){
var x = cljs.core.first(arglist__4050);
var ys = cljs.core.rest(arglist__4050);
return G__4049__delegate.call(this, x, ys);
});
return G__4049;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__4045.call(this);
case  1 :
return str__4046.call(this,x);
default:
return str__4047.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__4047.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__4051 = (function (s,start){
return s.substring(start);
});
var subs__4052 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__4051.call(this,s,start);
case  3 :
return subs__4052.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__4054 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__4055 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__4054.call(this,ns);
case  2 :
return symbol__4055.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__4057 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__4058 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__4057.call(this,ns);
case  2 :
return keyword__4058.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__4060 = cljs.core.seq.call(null,x);
var ys__4061 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__4060)))
{return cljs.core.nil_QMARK_.call(null,ys__4061);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__4061)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__4060),cljs.core.first.call(null,ys__4061))))
{{
var G__4062 = cljs.core.next.call(null,xs__4060);
var G__4063 = cljs.core.next.call(null,ys__4061);
xs__4060 = G__4062;
ys__4061 = G__4063;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__4064_SHARP_,p2__4065_SHARP_){
return cljs.core.hash_combine.call(null,p1__4064_SHARP_,cljs.core.hash.call(null,p2__4065_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__4066__4067 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__4066__4067))
{var G__4069__4071 = cljs.core.first.call(null,G__4066__4067);
var vec__4070__4072 = G__4069__4071;
var key_name__4073 = cljs.core.nth.call(null,vec__4070__4072,0,null);
var f__4074 = cljs.core.nth.call(null,vec__4070__4072,1,null);
var G__4066__4075 = G__4066__4067;

var G__4069__4076 = G__4069__4071;
var G__4066__4077 = G__4066__4075;

while(true){
var vec__4078__4079 = G__4069__4076;
var key_name__4080 = cljs.core.nth.call(null,vec__4078__4079,0,null);
var f__4081 = cljs.core.nth.call(null,vec__4078__4079,1,null);
var G__4066__4082 = G__4066__4077;

var str_name__4083 = cljs.core.name.call(null,key_name__4080);

obj[str_name__4083] = f__4081;
var temp__3698__auto____4084 = cljs.core.next.call(null,G__4066__4082);

if(cljs.core.truth_(temp__3698__auto____4084))
{var G__4066__4085 = temp__3698__auto____4084;

{
var G__4086 = cljs.core.first.call(null,G__4066__4085);
var G__4087 = G__4066__4085;
G__4069__4076 = G__4086;
G__4066__4077 = G__4087;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4088 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4089 = this;
return (new cljs.core.List(this__4089.meta,o,coll,(this__4089.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4090 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4091 = this;
return this__4091.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4092 = this;
return this__4092.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4093 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4094 = this;
return this__4094.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4095 = this;
return this__4095.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4096 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4097 = this;
return (new cljs.core.List(meta,this__4097.first,this__4097.rest,this__4097.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4098 = this;
return this__4098.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4099 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4100 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4101 = this;
return (new cljs.core.List(this__4101.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4102 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4103 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4104 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4105 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4106 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4107 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4108 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4109 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4110 = this;
return this__4110.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4111 = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__4112){
var items = cljs.core.seq( arglist__4112 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4113 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4114 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4115 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4116 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4116.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4117 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4118 = this;
return this__4118.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4119 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__4119.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__4119.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4120 = this;
return this__4120.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4121 = this;
return (new cljs.core.Cons(meta,this__4121.first,this__4121.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__4122 = null;
var G__4122__4123 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__4122__4124 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__4122 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__4122__4123.call(this,string,f);
case  3 :
return G__4122__4124.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4122;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__4126 = null;
var G__4126__4127 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__4126__4128 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__4126 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__4126__4127.call(this,string,k);
case  3 :
return G__4126__4128.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4126;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__4130 = null;
var G__4130__4131 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__4130__4132 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__4130 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__4130__4131.call(this,string,n);
case  3 :
return G__4130__4132.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4130;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__4134 = null;
var G__4134__4135 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__4134__4136 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__4134 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__4134__4135.call(this,_,coll);
case  3 :
return G__4134__4136.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4134;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__4138 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__4138;
} else
{lazy_seq.x = x__4138.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4139 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4140 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4141 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4142 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4142.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4143 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4144 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4145 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4146 = this;
return this__4146.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4147 = this;
return (new cljs.core.LazySeq(meta,this__4147.realized,this__4147.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__4148 = cljs.core.array.call(null);

var s__4149 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4149)))
{ary__4148.push(cljs.core.first.call(null,s__4149));
{
var G__4150 = cljs.core.next.call(null,s__4149);
s__4149 = G__4150;
continue;
}
} else
{return ary__4148;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__4151 = s;
var i__4152 = n;
var sum__4153 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4154 = (i__4152 > 0);

if(cljs.core.truth_(and__3546__auto____4154))
{return cljs.core.seq.call(null,s__4151);
} else
{return and__3546__auto____4154;
}
})()))
{{
var G__4155 = cljs.core.next.call(null,s__4151);
var G__4156 = (i__4152 - 1);
var G__4157 = (sum__4153 + 1);
s__4151 = G__4155;
i__4152 = G__4156;
sum__4153 = G__4157;
continue;
}
} else
{return sum__4153;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__4161 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__4162 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__4163 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4158 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__4158))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4158),concat.call(null,cljs.core.rest.call(null,s__4158),y));
} else
{return y;
}
})));
});
var concat__4164 = (function() { 
var G__4166__delegate = function (x,y,zs){
var cat__4160 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__4159 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__4159))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__4159),cat.call(null,cljs.core.rest.call(null,xys__4159),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__4160.call(null,concat.call(null,x,y),zs);
};
var G__4166 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4166__delegate.call(this, x, y, zs);
};
G__4166.cljs$lang$maxFixedArity = 2;
G__4166.cljs$lang$applyTo = (function (arglist__4167){
var x = cljs.core.first(arglist__4167);
var y = cljs.core.first(cljs.core.next(arglist__4167));
var zs = cljs.core.rest(cljs.core.next(arglist__4167));
return G__4166__delegate.call(this, x, y, zs);
});
return G__4166;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__4161.call(this);
case  1 :
return concat__4162.call(this,x);
case  2 :
return concat__4163.call(this,x,y);
default:
return concat__4164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__4164.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___4168 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___4169 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___4170 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4171 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___4172 = (function() { 
var G__4174__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__4174 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4174__delegate.call(this, a, b, c, d, more);
};
G__4174.cljs$lang$maxFixedArity = 4;
G__4174.cljs$lang$applyTo = (function (arglist__4175){
var a = cljs.core.first(arglist__4175);
var b = cljs.core.first(cljs.core.next(arglist__4175));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4175)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4175))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4175))));
return G__4174__delegate.call(this, a, b, c, d, more);
});
return G__4174;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___4168.call(this,a);
case  2 :
return list_STAR___4169.call(this,a,b);
case  3 :
return list_STAR___4170.call(this,a,b,c);
case  4 :
return list_STAR___4171.call(this,a,b,c,d);
default:
return list_STAR___4172.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___4172.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__4185 = (function (f,args){
var fixed_arity__4176 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__4176 + 1)) <= fixed_arity__4176)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__4186 = (function (f,x,args){
var arglist__4177 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__4178 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4177,fixed_arity__4178) <= fixed_arity__4178)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4177));
} else
{return f.cljs$lang$applyTo(arglist__4177);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4177));
}
});
var apply__4187 = (function (f,x,y,args){
var arglist__4179 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__4180 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4179,fixed_arity__4180) <= fixed_arity__4180)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4179));
} else
{return f.cljs$lang$applyTo(arglist__4179);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4179));
}
});
var apply__4188 = (function (f,x,y,z,args){
var arglist__4181 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__4182 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4181,fixed_arity__4182) <= fixed_arity__4182)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4181));
} else
{return f.cljs$lang$applyTo(arglist__4181);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4181));
}
});
var apply__4189 = (function() { 
var G__4191__delegate = function (f,a,b,c,d,args){
var arglist__4183 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__4184 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__4183,fixed_arity__4184) <= fixed_arity__4184)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__4183));
} else
{return f.cljs$lang$applyTo(arglist__4183);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__4183));
}
};
var G__4191 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4191__delegate.call(this, f, a, b, c, d, args);
};
G__4191.cljs$lang$maxFixedArity = 5;
G__4191.cljs$lang$applyTo = (function (arglist__4192){
var f = cljs.core.first(arglist__4192);
var a = cljs.core.first(cljs.core.next(arglist__4192));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4192)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4192))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4192)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4192)))));
return G__4191__delegate.call(this, f, a, b, c, d, args);
});
return G__4191;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__4185.call(this,f,a);
case  3 :
return apply__4186.call(this,f,a,b);
case  4 :
return apply__4187.call(this,f,a,b,c);
case  5 :
return apply__4188.call(this,f,a,b,c,d);
default:
return apply__4189.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__4189.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__4193){
var obj = cljs.core.first(arglist__4193);
var f = cljs.core.first(cljs.core.next(arglist__4193));
var args = cljs.core.rest(cljs.core.next(arglist__4193));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___4194 = (function (x){
return false;
});
var not_EQ___4195 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___4196 = (function() { 
var G__4198__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__4198 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4198__delegate.call(this, x, y, more);
};
G__4198.cljs$lang$maxFixedArity = 2;
G__4198.cljs$lang$applyTo = (function (arglist__4199){
var x = cljs.core.first(arglist__4199);
var y = cljs.core.first(cljs.core.next(arglist__4199));
var more = cljs.core.rest(cljs.core.next(arglist__4199));
return G__4198__delegate.call(this, x, y, more);
});
return G__4198;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___4194.call(this,x);
case  2 :
return not_EQ___4195.call(this,x,y);
default:
return not_EQ___4196.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___4196.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__4200 = pred;
var G__4201 = cljs.core.next.call(null,coll);
pred = G__4200;
coll = G__4201;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____4202 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____4202))
{return or__3548__auto____4202;
} else
{{
var G__4203 = pred;
var G__4204 = cljs.core.next.call(null,coll);
pred = G__4203;
coll = G__4204;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__4205 = null;
var G__4205__4206 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__4205__4207 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__4205__4208 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__4205__4209 = (function() { 
var G__4211__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__4211 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4211__delegate.call(this, x, y, zs);
};
G__4211.cljs$lang$maxFixedArity = 2;
G__4211.cljs$lang$applyTo = (function (arglist__4212){
var x = cljs.core.first(arglist__4212);
var y = cljs.core.first(cljs.core.next(arglist__4212));
var zs = cljs.core.rest(cljs.core.next(arglist__4212));
return G__4211__delegate.call(this, x, y, zs);
});
return G__4211;
})()
;
G__4205 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__4205__4206.call(this);
case  1 :
return G__4205__4207.call(this,x);
case  2 :
return G__4205__4208.call(this,x,y);
default:
return G__4205__4209.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4205.cljs$lang$maxFixedArity = 2;
G__4205.cljs$lang$applyTo = G__4205__4209.cljs$lang$applyTo;
return G__4205;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__4213__delegate = function (args){
return x;
};
var G__4213 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4213__delegate.call(this, args);
};
G__4213.cljs$lang$maxFixedArity = 0;
G__4213.cljs$lang$applyTo = (function (arglist__4214){
var args = cljs.core.seq( arglist__4214 );;
return G__4213__delegate.call(this, args);
});
return G__4213;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__4218 = (function (){
return cljs.core.identity;
});
var comp__4219 = (function (f){
return f;
});
var comp__4220 = (function (f,g){
return (function() {
var G__4224 = null;
var G__4224__4225 = (function (){
return f.call(null,g.call(null));
});
var G__4224__4226 = (function (x){
return f.call(null,g.call(null,x));
});
var G__4224__4227 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__4224__4228 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__4224__4229 = (function() { 
var G__4231__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4231 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4231__delegate.call(this, x, y, z, args);
};
G__4231.cljs$lang$maxFixedArity = 3;
G__4231.cljs$lang$applyTo = (function (arglist__4232){
var x = cljs.core.first(arglist__4232);
var y = cljs.core.first(cljs.core.next(arglist__4232));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4232)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4232)));
return G__4231__delegate.call(this, x, y, z, args);
});
return G__4231;
})()
;
G__4224 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4224__4225.call(this);
case  1 :
return G__4224__4226.call(this,x);
case  2 :
return G__4224__4227.call(this,x,y);
case  3 :
return G__4224__4228.call(this,x,y,z);
default:
return G__4224__4229.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4224.cljs$lang$maxFixedArity = 3;
G__4224.cljs$lang$applyTo = G__4224__4229.cljs$lang$applyTo;
return G__4224;
})()
});
var comp__4221 = (function (f,g,h){
return (function() {
var G__4233 = null;
var G__4233__4234 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__4233__4235 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__4233__4236 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__4233__4237 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__4233__4238 = (function() { 
var G__4240__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__4240 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4240__delegate.call(this, x, y, z, args);
};
G__4240.cljs$lang$maxFixedArity = 3;
G__4240.cljs$lang$applyTo = (function (arglist__4241){
var x = cljs.core.first(arglist__4241);
var y = cljs.core.first(cljs.core.next(arglist__4241));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4241)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4241)));
return G__4240__delegate.call(this, x, y, z, args);
});
return G__4240;
})()
;
G__4233 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4233__4234.call(this);
case  1 :
return G__4233__4235.call(this,x);
case  2 :
return G__4233__4236.call(this,x,y);
case  3 :
return G__4233__4237.call(this,x,y,z);
default:
return G__4233__4238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4233.cljs$lang$maxFixedArity = 3;
G__4233.cljs$lang$applyTo = G__4233__4238.cljs$lang$applyTo;
return G__4233;
})()
});
var comp__4222 = (function() { 
var G__4242__delegate = function (f1,f2,f3,fs){
var fs__4215 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__4243__delegate = function (args){
var ret__4216 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__4215),args);
var fs__4217 = cljs.core.next.call(null,fs__4215);

while(true){
if(cljs.core.truth_(fs__4217))
{{
var G__4244 = cljs.core.first.call(null,fs__4217).call(null,ret__4216);
var G__4245 = cljs.core.next.call(null,fs__4217);
ret__4216 = G__4244;
fs__4217 = G__4245;
continue;
}
} else
{return ret__4216;
}
break;
}
};
var G__4243 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4243__delegate.call(this, args);
};
G__4243.cljs$lang$maxFixedArity = 0;
G__4243.cljs$lang$applyTo = (function (arglist__4246){
var args = cljs.core.seq( arglist__4246 );;
return G__4243__delegate.call(this, args);
});
return G__4243;
})()
;
};
var G__4242 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4242__delegate.call(this, f1, f2, f3, fs);
};
G__4242.cljs$lang$maxFixedArity = 3;
G__4242.cljs$lang$applyTo = (function (arglist__4247){
var f1 = cljs.core.first(arglist__4247);
var f2 = cljs.core.first(cljs.core.next(arglist__4247));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4247)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4247)));
return G__4242__delegate.call(this, f1, f2, f3, fs);
});
return G__4242;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__4218.call(this);
case  1 :
return comp__4219.call(this,f1);
case  2 :
return comp__4220.call(this,f1,f2);
case  3 :
return comp__4221.call(this,f1,f2,f3);
default:
return comp__4222.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4222.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__4248 = (function (f,arg1){
return (function() { 
var G__4253__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__4253 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4253__delegate.call(this, args);
};
G__4253.cljs$lang$maxFixedArity = 0;
G__4253.cljs$lang$applyTo = (function (arglist__4254){
var args = cljs.core.seq( arglist__4254 );;
return G__4253__delegate.call(this, args);
});
return G__4253;
})()
;
});
var partial__4249 = (function (f,arg1,arg2){
return (function() { 
var G__4255__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__4255 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4255__delegate.call(this, args);
};
G__4255.cljs$lang$maxFixedArity = 0;
G__4255.cljs$lang$applyTo = (function (arglist__4256){
var args = cljs.core.seq( arglist__4256 );;
return G__4255__delegate.call(this, args);
});
return G__4255;
})()
;
});
var partial__4250 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__4257__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__4257 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4257__delegate.call(this, args);
};
G__4257.cljs$lang$maxFixedArity = 0;
G__4257.cljs$lang$applyTo = (function (arglist__4258){
var args = cljs.core.seq( arglist__4258 );;
return G__4257__delegate.call(this, args);
});
return G__4257;
})()
;
});
var partial__4251 = (function() { 
var G__4259__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__4260__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__4260 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4260__delegate.call(this, args);
};
G__4260.cljs$lang$maxFixedArity = 0;
G__4260.cljs$lang$applyTo = (function (arglist__4261){
var args = cljs.core.seq( arglist__4261 );;
return G__4260__delegate.call(this, args);
});
return G__4260;
})()
;
};
var G__4259 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4259__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__4259.cljs$lang$maxFixedArity = 4;
G__4259.cljs$lang$applyTo = (function (arglist__4262){
var f = cljs.core.first(arglist__4262);
var arg1 = cljs.core.first(cljs.core.next(arglist__4262));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4262)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4262))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4262))));
return G__4259__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__4259;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__4248.call(this,f,arg1);
case  3 :
return partial__4249.call(this,f,arg1,arg2);
case  4 :
return partial__4250.call(this,f,arg1,arg2,arg3);
default:
return partial__4251.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__4251.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__4263 = (function (f,x){
return (function() {
var G__4267 = null;
var G__4267__4268 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__4267__4269 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__4267__4270 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__4267__4271 = (function() { 
var G__4273__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__4273 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4273__delegate.call(this, a, b, c, ds);
};
G__4273.cljs$lang$maxFixedArity = 3;
G__4273.cljs$lang$applyTo = (function (arglist__4274){
var a = cljs.core.first(arglist__4274);
var b = cljs.core.first(cljs.core.next(arglist__4274));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4274)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4274)));
return G__4273__delegate.call(this, a, b, c, ds);
});
return G__4273;
})()
;
G__4267 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__4267__4268.call(this,a);
case  2 :
return G__4267__4269.call(this,a,b);
case  3 :
return G__4267__4270.call(this,a,b,c);
default:
return G__4267__4271.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4267.cljs$lang$maxFixedArity = 3;
G__4267.cljs$lang$applyTo = G__4267__4271.cljs$lang$applyTo;
return G__4267;
})()
});
var fnil__4264 = (function (f,x,y){
return (function() {
var G__4275 = null;
var G__4275__4276 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__4275__4277 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__4275__4278 = (function() { 
var G__4280__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__4280 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4280__delegate.call(this, a, b, c, ds);
};
G__4280.cljs$lang$maxFixedArity = 3;
G__4280.cljs$lang$applyTo = (function (arglist__4281){
var a = cljs.core.first(arglist__4281);
var b = cljs.core.first(cljs.core.next(arglist__4281));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4281)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4281)));
return G__4280__delegate.call(this, a, b, c, ds);
});
return G__4280;
})()
;
G__4275 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__4275__4276.call(this,a,b);
case  3 :
return G__4275__4277.call(this,a,b,c);
default:
return G__4275__4278.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4275.cljs$lang$maxFixedArity = 3;
G__4275.cljs$lang$applyTo = G__4275__4278.cljs$lang$applyTo;
return G__4275;
})()
});
var fnil__4265 = (function (f,x,y,z){
return (function() {
var G__4282 = null;
var G__4282__4283 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__4282__4284 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__4282__4285 = (function() { 
var G__4287__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__4287 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4287__delegate.call(this, a, b, c, ds);
};
G__4287.cljs$lang$maxFixedArity = 3;
G__4287.cljs$lang$applyTo = (function (arglist__4288){
var a = cljs.core.first(arglist__4288);
var b = cljs.core.first(cljs.core.next(arglist__4288));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4288)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4288)));
return G__4287__delegate.call(this, a, b, c, ds);
});
return G__4287;
})()
;
G__4282 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__4282__4283.call(this,a,b);
case  3 :
return G__4282__4284.call(this,a,b,c);
default:
return G__4282__4285.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4282.cljs$lang$maxFixedArity = 3;
G__4282.cljs$lang$applyTo = G__4282__4285.cljs$lang$applyTo;
return G__4282;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__4263.call(this,f,x);
case  3 :
return fnil__4264.call(this,f,x,y);
case  4 :
return fnil__4265.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__4291 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4289 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4289))
{var s__4290 = temp__3698__auto____4289;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__4290)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4290)));
} else
{return null;
}
})));
});

return mapi__4291.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4292 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4292))
{var s__4293 = temp__3698__auto____4292;

var x__4294 = f.call(null,cljs.core.first.call(null,s__4293));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__4294)))
{return keep.call(null,f,cljs.core.rest.call(null,s__4293));
} else
{return cljs.core.cons.call(null,x__4294,keep.call(null,f,cljs.core.rest.call(null,s__4293)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__4304 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4301 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4301))
{var s__4302 = temp__3698__auto____4301;

var x__4303 = f.call(null,idx,cljs.core.first.call(null,s__4302));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__4303)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4302));
} else
{return cljs.core.cons.call(null,x__4303,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__4302)));
}
} else
{return null;
}
})));
});

return keepi__4304.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__4349 = (function (p){
return (function() {
var ep1 = null;
var ep1__4354 = (function (){
return true;
});
var ep1__4355 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__4356 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4311 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____4311))
{return p.call(null,y);
} else
{return and__3546__auto____4311;
}
})());
});
var ep1__4357 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4312 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____4312))
{var and__3546__auto____4313 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____4313))
{return p.call(null,z);
} else
{return and__3546__auto____4313;
}
} else
{return and__3546__auto____4312;
}
})());
});
var ep1__4358 = (function() { 
var G__4360__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4314 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____4314))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____4314;
}
})());
};
var G__4360 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4360__delegate.call(this, x, y, z, args);
};
G__4360.cljs$lang$maxFixedArity = 3;
G__4360.cljs$lang$applyTo = (function (arglist__4361){
var x = cljs.core.first(arglist__4361);
var y = cljs.core.first(cljs.core.next(arglist__4361));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4361)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4361)));
return G__4360__delegate.call(this, x, y, z, args);
});
return G__4360;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__4354.call(this);
case  1 :
return ep1__4355.call(this,x);
case  2 :
return ep1__4356.call(this,x,y);
case  3 :
return ep1__4357.call(this,x,y,z);
default:
return ep1__4358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4358.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__4350 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__4362 = (function (){
return true;
});
var ep2__4363 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4315 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4315))
{return p2.call(null,x);
} else
{return and__3546__auto____4315;
}
})());
});
var ep2__4364 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4316 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4316))
{var and__3546__auto____4317 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____4317))
{var and__3546__auto____4318 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4318))
{return p2.call(null,y);
} else
{return and__3546__auto____4318;
}
} else
{return and__3546__auto____4317;
}
} else
{return and__3546__auto____4316;
}
})());
});
var ep2__4365 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4319 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4319))
{var and__3546__auto____4320 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____4320))
{var and__3546__auto____4321 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____4321))
{var and__3546__auto____4322 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4322))
{var and__3546__auto____4323 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____4323))
{return p2.call(null,z);
} else
{return and__3546__auto____4323;
}
} else
{return and__3546__auto____4322;
}
} else
{return and__3546__auto____4321;
}
} else
{return and__3546__auto____4320;
}
} else
{return and__3546__auto____4319;
}
})());
});
var ep2__4366 = (function() { 
var G__4368__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4324 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____4324))
{return cljs.core.every_QMARK_.call(null,(function (p1__4295_SHARP_){
var and__3546__auto____4325 = p1.call(null,p1__4295_SHARP_);

if(cljs.core.truth_(and__3546__auto____4325))
{return p2.call(null,p1__4295_SHARP_);
} else
{return and__3546__auto____4325;
}
}),args);
} else
{return and__3546__auto____4324;
}
})());
};
var G__4368 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4368__delegate.call(this, x, y, z, args);
};
G__4368.cljs$lang$maxFixedArity = 3;
G__4368.cljs$lang$applyTo = (function (arglist__4369){
var x = cljs.core.first(arglist__4369);
var y = cljs.core.first(cljs.core.next(arglist__4369));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4369)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4369)));
return G__4368__delegate.call(this, x, y, z, args);
});
return G__4368;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__4362.call(this);
case  1 :
return ep2__4363.call(this,x);
case  2 :
return ep2__4364.call(this,x,y);
case  3 :
return ep2__4365.call(this,x,y,z);
default:
return ep2__4366.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4366.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__4351 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__4370 = (function (){
return true;
});
var ep3__4371 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4326 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4326))
{var and__3546__auto____4327 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4327))
{return p3.call(null,x);
} else
{return and__3546__auto____4327;
}
} else
{return and__3546__auto____4326;
}
})());
});
var ep3__4372 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4328 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4328))
{var and__3546__auto____4329 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4329))
{var and__3546__auto____4330 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____4330))
{var and__3546__auto____4331 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____4331))
{var and__3546__auto____4332 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____4332))
{return p3.call(null,y);
} else
{return and__3546__auto____4332;
}
} else
{return and__3546__auto____4331;
}
} else
{return and__3546__auto____4330;
}
} else
{return and__3546__auto____4329;
}
} else
{return and__3546__auto____4328;
}
})());
});
var ep3__4373 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4333 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____4333))
{var and__3546__auto____4334 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____4334))
{var and__3546__auto____4335 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____4335))
{var and__3546__auto____4336 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____4336))
{var and__3546__auto____4337 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____4337))
{var and__3546__auto____4338 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____4338))
{var and__3546__auto____4339 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____4339))
{var and__3546__auto____4340 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____4340))
{return p3.call(null,z);
} else
{return and__3546__auto____4340;
}
} else
{return and__3546__auto____4339;
}
} else
{return and__3546__auto____4338;
}
} else
{return and__3546__auto____4337;
}
} else
{return and__3546__auto____4336;
}
} else
{return and__3546__auto____4335;
}
} else
{return and__3546__auto____4334;
}
} else
{return and__3546__auto____4333;
}
})());
});
var ep3__4374 = (function() { 
var G__4376__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4341 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____4341))
{return cljs.core.every_QMARK_.call(null,(function (p1__4296_SHARP_){
var and__3546__auto____4342 = p1.call(null,p1__4296_SHARP_);

if(cljs.core.truth_(and__3546__auto____4342))
{var and__3546__auto____4343 = p2.call(null,p1__4296_SHARP_);

if(cljs.core.truth_(and__3546__auto____4343))
{return p3.call(null,p1__4296_SHARP_);
} else
{return and__3546__auto____4343;
}
} else
{return and__3546__auto____4342;
}
}),args);
} else
{return and__3546__auto____4341;
}
})());
};
var G__4376 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4376__delegate.call(this, x, y, z, args);
};
G__4376.cljs$lang$maxFixedArity = 3;
G__4376.cljs$lang$applyTo = (function (arglist__4377){
var x = cljs.core.first(arglist__4377);
var y = cljs.core.first(cljs.core.next(arglist__4377));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4377)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4377)));
return G__4376__delegate.call(this, x, y, z, args);
});
return G__4376;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__4370.call(this);
case  1 :
return ep3__4371.call(this,x);
case  2 :
return ep3__4372.call(this,x,y);
case  3 :
return ep3__4373.call(this,x,y,z);
default:
return ep3__4374.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4374.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__4352 = (function() { 
var G__4378__delegate = function (p1,p2,p3,ps){
var ps__4344 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__4379 = (function (){
return true;
});
var epn__4380 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__4297_SHARP_){
return p1__4297_SHARP_.call(null,x);
}),ps__4344);
});
var epn__4381 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__4298_SHARP_){
var and__3546__auto____4345 = p1__4298_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____4345))
{return p1__4298_SHARP_.call(null,y);
} else
{return and__3546__auto____4345;
}
}),ps__4344);
});
var epn__4382 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__4299_SHARP_){
var and__3546__auto____4346 = p1__4299_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____4346))
{var and__3546__auto____4347 = p1__4299_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____4347))
{return p1__4299_SHARP_.call(null,z);
} else
{return and__3546__auto____4347;
}
} else
{return and__3546__auto____4346;
}
}),ps__4344);
});
var epn__4383 = (function() { 
var G__4385__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____4348 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____4348))
{return cljs.core.every_QMARK_.call(null,(function (p1__4300_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__4300_SHARP_,args);
}),ps__4344);
} else
{return and__3546__auto____4348;
}
})());
};
var G__4385 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4385__delegate.call(this, x, y, z, args);
};
G__4385.cljs$lang$maxFixedArity = 3;
G__4385.cljs$lang$applyTo = (function (arglist__4386){
var x = cljs.core.first(arglist__4386);
var y = cljs.core.first(cljs.core.next(arglist__4386));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4386)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4386)));
return G__4385__delegate.call(this, x, y, z, args);
});
return G__4385;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__4379.call(this);
case  1 :
return epn__4380.call(this,x);
case  2 :
return epn__4381.call(this,x,y);
case  3 :
return epn__4382.call(this,x,y,z);
default:
return epn__4383.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4383.cljs$lang$applyTo;
return epn;
})()
};
var G__4378 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4378__delegate.call(this, p1, p2, p3, ps);
};
G__4378.cljs$lang$maxFixedArity = 3;
G__4378.cljs$lang$applyTo = (function (arglist__4387){
var p1 = cljs.core.first(arglist__4387);
var p2 = cljs.core.first(cljs.core.next(arglist__4387));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4387)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4387)));
return G__4378__delegate.call(this, p1, p2, p3, ps);
});
return G__4378;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__4349.call(this,p1);
case  2 :
return every_pred__4350.call(this,p1,p2);
case  3 :
return every_pred__4351.call(this,p1,p2,p3);
default:
return every_pred__4352.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4352.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__4427 = (function (p){
return (function() {
var sp1 = null;
var sp1__4432 = (function (){
return null;
});
var sp1__4433 = (function (x){
return p.call(null,x);
});
var sp1__4434 = (function (x,y){
var or__3548__auto____4389 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____4389))
{return or__3548__auto____4389;
} else
{return p.call(null,y);
}
});
var sp1__4435 = (function (x,y,z){
var or__3548__auto____4390 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____4390))
{return or__3548__auto____4390;
} else
{var or__3548__auto____4391 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____4391))
{return or__3548__auto____4391;
} else
{return p.call(null,z);
}
}
});
var sp1__4436 = (function() { 
var G__4438__delegate = function (x,y,z,args){
var or__3548__auto____4392 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4392))
{return or__3548__auto____4392;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__4438 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4438__delegate.call(this, x, y, z, args);
};
G__4438.cljs$lang$maxFixedArity = 3;
G__4438.cljs$lang$applyTo = (function (arglist__4439){
var x = cljs.core.first(arglist__4439);
var y = cljs.core.first(cljs.core.next(arglist__4439));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4439)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4439)));
return G__4438__delegate.call(this, x, y, z, args);
});
return G__4438;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__4432.call(this);
case  1 :
return sp1__4433.call(this,x);
case  2 :
return sp1__4434.call(this,x,y);
case  3 :
return sp1__4435.call(this,x,y,z);
default:
return sp1__4436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4436.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__4428 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__4440 = (function (){
return null;
});
var sp2__4441 = (function (x){
var or__3548__auto____4393 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4393))
{return or__3548__auto____4393;
} else
{return p2.call(null,x);
}
});
var sp2__4442 = (function (x,y){
var or__3548__auto____4394 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4394))
{return or__3548__auto____4394;
} else
{var or__3548__auto____4395 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4395))
{return or__3548__auto____4395;
} else
{var or__3548__auto____4396 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4396))
{return or__3548__auto____4396;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__4443 = (function (x,y,z){
var or__3548__auto____4397 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4397))
{return or__3548__auto____4397;
} else
{var or__3548__auto____4398 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4398))
{return or__3548__auto____4398;
} else
{var or__3548__auto____4399 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____4399))
{return or__3548__auto____4399;
} else
{var or__3548__auto____4400 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4400))
{return or__3548__auto____4400;
} else
{var or__3548__auto____4401 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4401))
{return or__3548__auto____4401;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4444 = (function() { 
var G__4446__delegate = function (x,y,z,args){
var or__3548__auto____4402 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4402))
{return or__3548__auto____4402;
} else
{return cljs.core.some.call(null,(function (p1__4305_SHARP_){
var or__3548__auto____4403 = p1.call(null,p1__4305_SHARP_);

if(cljs.core.truth_(or__3548__auto____4403))
{return or__3548__auto____4403;
} else
{return p2.call(null,p1__4305_SHARP_);
}
}),args);
}
};
var G__4446 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4446__delegate.call(this, x, y, z, args);
};
G__4446.cljs$lang$maxFixedArity = 3;
G__4446.cljs$lang$applyTo = (function (arglist__4447){
var x = cljs.core.first(arglist__4447);
var y = cljs.core.first(cljs.core.next(arglist__4447));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4447)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4447)));
return G__4446__delegate.call(this, x, y, z, args);
});
return G__4446;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__4440.call(this);
case  1 :
return sp2__4441.call(this,x);
case  2 :
return sp2__4442.call(this,x,y);
case  3 :
return sp2__4443.call(this,x,y,z);
default:
return sp2__4444.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4444.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__4429 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__4448 = (function (){
return null;
});
var sp3__4449 = (function (x){
var or__3548__auto____4404 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4404))
{return or__3548__auto____4404;
} else
{var or__3548__auto____4405 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4405))
{return or__3548__auto____4405;
} else
{return p3.call(null,x);
}
}
});
var sp3__4450 = (function (x,y){
var or__3548__auto____4406 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4406))
{return or__3548__auto____4406;
} else
{var or__3548__auto____4407 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4407))
{return or__3548__auto____4407;
} else
{var or__3548__auto____4408 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____4408))
{return or__3548__auto____4408;
} else
{var or__3548__auto____4409 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4409))
{return or__3548__auto____4409;
} else
{var or__3548__auto____4410 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4410))
{return or__3548__auto____4410;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__4451 = (function (x,y,z){
var or__3548__auto____4411 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____4411))
{return or__3548__auto____4411;
} else
{var or__3548__auto____4412 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____4412))
{return or__3548__auto____4412;
} else
{var or__3548__auto____4413 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____4413))
{return or__3548__auto____4413;
} else
{var or__3548__auto____4414 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____4414))
{return or__3548__auto____4414;
} else
{var or__3548__auto____4415 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____4415))
{return or__3548__auto____4415;
} else
{var or__3548__auto____4416 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____4416))
{return or__3548__auto____4416;
} else
{var or__3548__auto____4417 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____4417))
{return or__3548__auto____4417;
} else
{var or__3548__auto____4418 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____4418))
{return or__3548__auto____4418;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4452 = (function() { 
var G__4454__delegate = function (x,y,z,args){
var or__3548__auto____4419 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4419))
{return or__3548__auto____4419;
} else
{return cljs.core.some.call(null,(function (p1__4306_SHARP_){
var or__3548__auto____4420 = p1.call(null,p1__4306_SHARP_);

if(cljs.core.truth_(or__3548__auto____4420))
{return or__3548__auto____4420;
} else
{var or__3548__auto____4421 = p2.call(null,p1__4306_SHARP_);

if(cljs.core.truth_(or__3548__auto____4421))
{return or__3548__auto____4421;
} else
{return p3.call(null,p1__4306_SHARP_);
}
}
}),args);
}
};
var G__4454 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4454__delegate.call(this, x, y, z, args);
};
G__4454.cljs$lang$maxFixedArity = 3;
G__4454.cljs$lang$applyTo = (function (arglist__4455){
var x = cljs.core.first(arglist__4455);
var y = cljs.core.first(cljs.core.next(arglist__4455));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4455)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4455)));
return G__4454__delegate.call(this, x, y, z, args);
});
return G__4454;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__4448.call(this);
case  1 :
return sp3__4449.call(this,x);
case  2 :
return sp3__4450.call(this,x,y);
case  3 :
return sp3__4451.call(this,x,y,z);
default:
return sp3__4452.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4452.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__4430 = (function() { 
var G__4456__delegate = function (p1,p2,p3,ps){
var ps__4422 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__4457 = (function (){
return null;
});
var spn__4458 = (function (x){
return cljs.core.some.call(null,(function (p1__4307_SHARP_){
return p1__4307_SHARP_.call(null,x);
}),ps__4422);
});
var spn__4459 = (function (x,y){
return cljs.core.some.call(null,(function (p1__4308_SHARP_){
var or__3548__auto____4423 = p1__4308_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4423))
{return or__3548__auto____4423;
} else
{return p1__4308_SHARP_.call(null,y);
}
}),ps__4422);
});
var spn__4460 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__4309_SHARP_){
var or__3548__auto____4424 = p1__4309_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4424))
{return or__3548__auto____4424;
} else
{var or__3548__auto____4425 = p1__4309_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____4425))
{return or__3548__auto____4425;
} else
{return p1__4309_SHARP_.call(null,z);
}
}
}),ps__4422);
});
var spn__4461 = (function() { 
var G__4463__delegate = function (x,y,z,args){
var or__3548__auto____4426 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____4426))
{return or__3548__auto____4426;
} else
{return cljs.core.some.call(null,(function (p1__4310_SHARP_){
return cljs.core.some.call(null,p1__4310_SHARP_,args);
}),ps__4422);
}
};
var G__4463 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4463__delegate.call(this, x, y, z, args);
};
G__4463.cljs$lang$maxFixedArity = 3;
G__4463.cljs$lang$applyTo = (function (arglist__4464){
var x = cljs.core.first(arglist__4464);
var y = cljs.core.first(cljs.core.next(arglist__4464));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4464)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4464)));
return G__4463__delegate.call(this, x, y, z, args);
});
return G__4463;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__4457.call(this);
case  1 :
return spn__4458.call(this,x);
case  2 :
return spn__4459.call(this,x,y);
case  3 :
return spn__4460.call(this,x,y,z);
default:
return spn__4461.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4461.cljs$lang$applyTo;
return spn;
})()
};
var G__4456 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4456__delegate.call(this, p1, p2, p3, ps);
};
G__4456.cljs$lang$maxFixedArity = 3;
G__4456.cljs$lang$applyTo = (function (arglist__4465){
var p1 = cljs.core.first(arglist__4465);
var p2 = cljs.core.first(cljs.core.next(arglist__4465));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4465)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4465)));
return G__4456__delegate.call(this, p1, p2, p3, ps);
});
return G__4456;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__4427.call(this,p1);
case  2 :
return some_fn__4428.call(this,p1,p2);
case  3 :
return some_fn__4429.call(this,p1,p2,p3);
default:
return some_fn__4430.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4430.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__4478 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4466 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4466))
{var s__4467 = temp__3698__auto____4466;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__4467)),map.call(null,f,cljs.core.rest.call(null,s__4467)));
} else
{return null;
}
})));
});
var map__4479 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4468 = cljs.core.seq.call(null,c1);
var s2__4469 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4470 = s1__4468;

if(cljs.core.truth_(and__3546__auto____4470))
{return s2__4469;
} else
{return and__3546__auto____4470;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4468),cljs.core.first.call(null,s2__4469)),map.call(null,f,cljs.core.rest.call(null,s1__4468),cljs.core.rest.call(null,s2__4469)));
} else
{return null;
}
})));
});
var map__4480 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4471 = cljs.core.seq.call(null,c1);
var s2__4472 = cljs.core.seq.call(null,c2);
var s3__4473 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____4474 = s1__4471;

if(cljs.core.truth_(and__3546__auto____4474))
{var and__3546__auto____4475 = s2__4472;

if(cljs.core.truth_(and__3546__auto____4475))
{return s3__4473;
} else
{return and__3546__auto____4475;
}
} else
{return and__3546__auto____4474;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__4471),cljs.core.first.call(null,s2__4472),cljs.core.first.call(null,s3__4473)),map.call(null,f,cljs.core.rest.call(null,s1__4471),cljs.core.rest.call(null,s2__4472),cljs.core.rest.call(null,s3__4473)));
} else
{return null;
}
})));
});
var map__4481 = (function() { 
var G__4483__delegate = function (f,c1,c2,c3,colls){
var step__4477 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4476 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4476)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__4476),step.call(null,map.call(null,cljs.core.rest,ss__4476)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__4388_SHARP_){
return cljs.core.apply.call(null,f,p1__4388_SHARP_);
}),step__4477.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__4483 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4483__delegate.call(this, f, c1, c2, c3, colls);
};
G__4483.cljs$lang$maxFixedArity = 4;
G__4483.cljs$lang$applyTo = (function (arglist__4484){
var f = cljs.core.first(arglist__4484);
var c1 = cljs.core.first(cljs.core.next(arglist__4484));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4484)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4484))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4484))));
return G__4483__delegate.call(this, f, c1, c2, c3, colls);
});
return G__4483;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__4478.call(this,f,c1);
case  3 :
return map__4479.call(this,f,c1,c2);
case  4 :
return map__4480.call(this,f,c1,c2,c3);
default:
return map__4481.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__4481.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____4485 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4485))
{var s__4486 = temp__3698__auto____4485;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4486),take.call(null,(n - 1),cljs.core.rest.call(null,s__4486)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__4489 = (function (n,coll){
while(true){
var s__4487 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4488 = (n > 0);

if(cljs.core.truth_(and__3546__auto____4488))
{return s__4487;
} else
{return and__3546__auto____4488;
}
})()))
{{
var G__4490 = (n - 1);
var G__4491 = cljs.core.rest.call(null,s__4487);
n = G__4490;
coll = G__4491;
continue;
}
} else
{return s__4487;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4489.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__4492 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__4493 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__4492.call(this,n);
case  2 :
return drop_last__4493.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__4495 = cljs.core.seq.call(null,coll);
var lead__4496 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__4496))
{{
var G__4497 = cljs.core.next.call(null,s__4495);
var G__4498 = cljs.core.next.call(null,lead__4496);
s__4495 = G__4497;
lead__4496 = G__4498;
continue;
}
} else
{return s__4495;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__4501 = (function (pred,coll){
while(true){
var s__4499 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____4500 = s__4499;

if(cljs.core.truth_(and__3546__auto____4500))
{return pred.call(null,cljs.core.first.call(null,s__4499));
} else
{return and__3546__auto____4500;
}
})()))
{{
var G__4502 = pred;
var G__4503 = cljs.core.rest.call(null,s__4499);
pred = G__4502;
coll = G__4503;
continue;
}
} else
{return s__4499;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__4501.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4504 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4504))
{var s__4505 = temp__3698__auto____4504;

return cljs.core.concat.call(null,s__4505,cycle.call(null,s__4505));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__4506 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__4507 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__4506.call(this,n);
case  2 :
return repeat__4507.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__4509 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__4510 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__4509.call(this,n);
case  2 :
return repeatedly__4510.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__4516 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__4512 = cljs.core.seq.call(null,c1);
var s2__4513 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____4514 = s1__4512;

if(cljs.core.truth_(and__3546__auto____4514))
{return s2__4513;
} else
{return and__3546__auto____4514;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__4512),cljs.core.cons.call(null,cljs.core.first.call(null,s2__4513),interleave.call(null,cljs.core.rest.call(null,s1__4512),cljs.core.rest.call(null,s2__4513))));
} else
{return null;
}
})));
});
var interleave__4517 = (function() { 
var G__4519__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__4515 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__4515)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__4515),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__4515)));
} else
{return null;
}
})));
};
var G__4519 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4519__delegate.call(this, c1, c2, colls);
};
G__4519.cljs$lang$maxFixedArity = 2;
G__4519.cljs$lang$applyTo = (function (arglist__4520){
var c1 = cljs.core.first(arglist__4520);
var c2 = cljs.core.first(cljs.core.next(arglist__4520));
var colls = cljs.core.rest(cljs.core.next(arglist__4520));
return G__4519__delegate.call(this, c1, c2, colls);
});
return G__4519;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__4516.call(this,c1,c2);
default:
return interleave__4517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__4517.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__4523 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4521 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4521))
{var coll__4522 = temp__3695__auto____4521;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__4522),cat.call(null,cljs.core.rest.call(null,coll__4522),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__4523.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__4524 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__4525 = (function() { 
var G__4527__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__4527 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4527__delegate.call(this, f, coll, colls);
};
G__4527.cljs$lang$maxFixedArity = 2;
G__4527.cljs$lang$applyTo = (function (arglist__4528){
var f = cljs.core.first(arglist__4528);
var coll = cljs.core.first(cljs.core.next(arglist__4528));
var colls = cljs.core.rest(cljs.core.next(arglist__4528));
return G__4527__delegate.call(this, f, coll, colls);
});
return G__4527;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__4524.call(this,f,coll);
default:
return mapcat__4525.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__4525.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4529 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4529))
{var s__4530 = temp__3698__auto____4529;

var f__4531 = cljs.core.first.call(null,s__4530);
var r__4532 = cljs.core.rest.call(null,s__4530);

if(cljs.core.truth_(pred.call(null,f__4531)))
{return cljs.core.cons.call(null,f__4531,filter.call(null,pred,r__4532));
} else
{return filter.call(null,pred,r__4532);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__4534 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__4534.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__4533_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__4533_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__4541 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4542 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4535 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4535))
{var s__4536 = temp__3698__auto____4535;

var p__4537 = cljs.core.take.call(null,n,s__4536);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4537))))
{return cljs.core.cons.call(null,p__4537,partition.call(null,n,step,cljs.core.drop.call(null,step,s__4536)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4543 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4538 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4538))
{var s__4539 = temp__3698__auto____4538;

var p__4540 = cljs.core.take.call(null,n,s__4539);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4540))))
{return cljs.core.cons.call(null,p__4540,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4539)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4540,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4541.call(this,n,step);
case  3 :
return partition__4542.call(this,n,step,pad);
case  4 :
return partition__4543.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__4549 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4550 = (function (m,ks,not_found){
var sentinel__4545 = cljs.core.lookup_sentinel;
var m__4546 = m;
var ks__4547 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4547))
{var m__4548 = cljs.core.get.call(null,m__4546,cljs.core.first.call(null,ks__4547),sentinel__4545);

if(cljs.core.truth_((sentinel__4545 === m__4548)))
{return not_found;
} else
{{
var G__4552 = sentinel__4545;
var G__4553 = m__4548;
var G__4554 = cljs.core.next.call(null,ks__4547);
sentinel__4545 = G__4552;
m__4546 = G__4553;
ks__4547 = G__4554;
continue;
}
}
} else
{return m__4546;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4549.call(this,m,ks);
case  3 :
return get_in__4550.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__4555,v){
var vec__4556__4557 = p__4555;
var k__4558 = cljs.core.nth.call(null,vec__4556__4557,0,null);
var ks__4559 = cljs.core.nthnext.call(null,vec__4556__4557,1);

if(cljs.core.truth_(ks__4559))
{return cljs.core.assoc.call(null,m,k__4558,assoc_in.call(null,cljs.core.get.call(null,m,k__4558),ks__4559,v));
} else
{return cljs.core.assoc.call(null,m,k__4558,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__4560,f,args){
var vec__4561__4562 = p__4560;
var k__4563 = cljs.core.nth.call(null,vec__4561__4562,0,null);
var ks__4564 = cljs.core.nthnext.call(null,vec__4561__4562,1);

if(cljs.core.truth_(ks__4564))
{return cljs.core.assoc.call(null,m,k__4563,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4563),ks__4564,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4563,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4563),args));
}
};
var update_in = function (m,p__4560,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4560, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4565){
var m = cljs.core.first(arglist__4565);
var p__4560 = cljs.core.first(cljs.core.next(arglist__4565));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4565)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4565)));
return update_in__delegate.call(this, m, p__4560, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4566 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4591 = null;
var G__4591__4592 = (function (coll,k){
var this__4567 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4591__4593 = (function (coll,k,not_found){
var this__4568 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4591 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4591__4592.call(this,coll,k);
case  3 :
return G__4591__4593.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4591;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4569 = this;
var new_array__4570 = cljs.core.aclone.call(null,this__4569.array);

(new_array__4570[k] = v);
return (new cljs.core.Vector(this__4569.meta,new_array__4570));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4571 = this;
var new_array__4572 = cljs.core.aclone.call(null,this__4571.array);

new_array__4572.push(o);
return (new cljs.core.Vector(this__4571.meta,new_array__4572));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4595 = null;
var G__4595__4596 = (function (v,f){
var this__4573 = this;
return cljs.core.ci_reduce.call(null,this__4573.array,f);
});
var G__4595__4597 = (function (v,f,start){
var this__4574 = this;
return cljs.core.ci_reduce.call(null,this__4574.array,f,start);
});
G__4595 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4595__4596.call(this,v,f);
case  3 :
return G__4595__4597.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4595;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4575 = this;
if(cljs.core.truth_((this__4575.array.length > 0)))
{var vector_seq__4576 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4575.array.length)))
{return cljs.core.cons.call(null,(this__4575.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4576.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4577 = this;
return this__4577.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4578 = this;
var count__4579 = this__4578.array.length;

if(cljs.core.truth_((count__4579 > 0)))
{return (this__4578.array[(count__4579 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4580 = this;
if(cljs.core.truth_((this__4580.array.length > 0)))
{var new_array__4581 = cljs.core.aclone.call(null,this__4580.array);

new_array__4581.pop();
return (new cljs.core.Vector(this__4580.meta,new_array__4581));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4582 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4583 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4584 = this;
return (new cljs.core.Vector(meta,this__4584.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4585 = this;
return this__4585.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4599 = null;
var G__4599__4600 = (function (coll,n){
var this__4586 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4587 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4587))
{return (n < this__4586.array.length);
} else
{return and__3546__auto____4587;
}
})()))
{return (this__4586.array[n]);
} else
{return null;
}
});
var G__4599__4601 = (function (coll,n,not_found){
var this__4588 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4589 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4589))
{return (n < this__4588.array.length);
} else
{return and__3546__auto____4589;
}
})()))
{return (this__4588.array[n]);
} else
{return not_found;
}
});
G__4599 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4599__4600.call(this,coll,n);
case  3 :
return G__4599__4601.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4599;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4590 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4590.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__4603 = null;
var G__4603__4604 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4603__4605 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4603 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4603__4604.call(this,_,k);
case  3 :
return G__4603__4605.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4603;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__4607){
var args = cljs.core.seq( arglist__4607 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4608 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4628 = null;
var G__4628__4629 = (function (coll,k){
var this__4609 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4628__4630 = (function (coll,k,not_found){
var this__4610 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4628 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4628__4629.call(this,coll,k);
case  3 :
return G__4628__4630.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4628;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4611 = this;
var v_pos__4612 = (this__4611.start + key);

return (new cljs.core.Subvec(this__4611.meta,cljs.core._assoc.call(null,this__4611.v,v_pos__4612,val),this__4611.start,((this__4611.end > (v_pos__4612 + 1)) ? this__4611.end : (v_pos__4612 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4613 = this;
return (new cljs.core.Subvec(this__4613.meta,cljs.core._assoc_n.call(null,this__4613.v,this__4613.end,o),this__4613.start,(this__4613.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4632 = null;
var G__4632__4633 = (function (coll,f){
var this__4614 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4632__4634 = (function (coll,f,start){
var this__4615 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4632 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4632__4633.call(this,coll,f);
case  3 :
return G__4632__4634.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4632;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4616 = this;
var subvec_seq__4617 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4616.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4616.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4617.call(null,this__4616.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4618 = this;
return (this__4618.end - this__4618.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4619 = this;
return cljs.core._nth.call(null,this__4619.v,(this__4619.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4620 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4620.start,this__4620.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4620.meta,this__4620.v,this__4620.start,(this__4620.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4621 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4622 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4623 = this;
return (new cljs.core.Subvec(meta,this__4623.v,this__4623.start,this__4623.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4624 = this;
return this__4624.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4636 = null;
var G__4636__4637 = (function (coll,n){
var this__4625 = this;
return cljs.core._nth.call(null,this__4625.v,(this__4625.start + n));
});
var G__4636__4638 = (function (coll,n,not_found){
var this__4626 = this;
return cljs.core._nth.call(null,this__4626.v,(this__4626.start + n),not_found);
});
G__4636 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4636__4637.call(this,coll,n);
case  3 :
return G__4636__4638.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4636;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4627 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4627.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__4640 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4641 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4640.call(this,v,start);
case  3 :
return subvec__4641.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__4643 = null;
var G__4643__4644 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4643__4645 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4643 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4643__4644.call(this,_,k);
case  3 :
return G__4643__4645.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4643;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4647 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4648 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4649 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4650 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4650.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4651 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4652 = this;
return cljs.core._first.call(null,this__4652.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4653 = this;
var temp__3695__auto____4654 = cljs.core.next.call(null,this__4653.front);

if(cljs.core.truth_(temp__3695__auto____4654))
{var f1__4655 = temp__3695__auto____4654;

return (new cljs.core.PersistentQueueSeq(this__4653.meta,f1__4655,this__4653.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__4653.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4653.meta,this__4653.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4656 = this;
return this__4656.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4657 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4657.front,this__4657.rear));
});

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4658 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4659 = this;
if(cljs.core.truth_(this__4659.front))
{return (new cljs.core.PersistentQueue(this__4659.meta,(this__4659.count + 1),this__4659.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4660 = this__4659.rear;

if(cljs.core.truth_(or__3548__auto____4660))
{return or__3548__auto____4660;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4659.meta,(this__4659.count + 1),cljs.core.conj.call(null,this__4659.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4661 = this;
var rear__4662 = cljs.core.seq.call(null,this__4661.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4663 = this__4661.front;

if(cljs.core.truth_(or__3548__auto____4663))
{return or__3548__auto____4663;
} else
{return rear__4662;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4661.front,cljs.core.seq.call(null,rear__4662)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4664 = this;
return this__4664.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4665 = this;
return cljs.core._first.call(null,this__4665.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4666 = this;
if(cljs.core.truth_(this__4666.front))
{var temp__3695__auto____4667 = cljs.core.next.call(null,this__4666.front);

if(cljs.core.truth_(temp__3695__auto____4667))
{var f1__4668 = temp__3695__auto____4667;

return (new cljs.core.PersistentQueue(this__4666.meta,(this__4666.count - 1),f1__4668,this__4666.rear));
} else
{return (new cljs.core.PersistentQueue(this__4666.meta,(this__4666.count - 1),cljs.core.seq.call(null,this__4666.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4669 = this;
return cljs.core.first.call(null,this__4669.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4670 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4671 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4672 = this;
return (new cljs.core.PersistentQueue(meta,this__4672.count,this__4672.front,this__4672.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4673 = this;
return this__4673.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4674 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4675 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__4676 = array.length;

var i__4677 = 0;

while(true){
if(cljs.core.truth_((i__4677 < len__4676)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4677]))))
{return i__4677;
} else
{{
var G__4678 = (i__4677 + incr);
i__4677 = G__4678;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___4680 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4681 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4679 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4679))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4679;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___4680.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4681.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4684 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4703 = null;
var G__4703__4704 = (function (coll,k){
var this__4685 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4703__4705 = (function (coll,k,not_found){
var this__4686 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4686.strobj,(this__4686.strobj[k]),not_found);
});
G__4703 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4703__4704.call(this,coll,k);
case  3 :
return G__4703__4705.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4703;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4687 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4688 = goog.object.clone.call(null,this__4687.strobj);
var overwrite_QMARK___4689 = new_strobj__4688.hasOwnProperty(k);

(new_strobj__4688[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4689))
{return (new cljs.core.ObjMap(this__4687.meta,this__4687.keys,new_strobj__4688));
} else
{var new_keys__4690 = cljs.core.aclone.call(null,this__4687.keys);

new_keys__4690.push(k);
return (new cljs.core.ObjMap(this__4687.meta,new_keys__4690,new_strobj__4688));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4687.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4691 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4691.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4692 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4693 = this;
if(cljs.core.truth_((this__4693.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4683_SHARP_){
return cljs.core.vector.call(null,p1__4683_SHARP_,(this__4693.strobj[p1__4683_SHARP_]));
}),this__4693.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4694 = this;
return this__4694.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4695 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4696 = this;
return (new cljs.core.ObjMap(meta,this__4696.keys,this__4696.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4697 = this;
return this__4697.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4698 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4698.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4699 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4700 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4700))
{return this__4699.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4700;
}
})()))
{var new_keys__4701 = cljs.core.aclone.call(null,this__4699.keys);
var new_strobj__4702 = goog.object.clone.call(null,this__4699.strobj);

new_keys__4701.splice(cljs.core.scan_array.call(null,1,k,new_keys__4701),1);
cljs.core.js_delete.call(null,new_strobj__4702,k);
return (new cljs.core.ObjMap(this__4699.meta,new_keys__4701,new_strobj__4702));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__4708 = null;
var G__4708__4709 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4708__4710 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4708 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4708__4709.call(this,_,k);
case  3 :
return G__4708__4710.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4708;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4712 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4742 = null;
var G__4742__4743 = (function (coll,k){
var this__4713 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4742__4744 = (function (coll,k,not_found){
var this__4714 = this;
var bucket__4715 = (this__4714.hashobj[cljs.core.hash.call(null,k)]);
var i__4716 = (cljs.core.truth_(bucket__4715)?cljs.core.scan_array.call(null,2,k,bucket__4715):null);

if(cljs.core.truth_(i__4716))
{return (bucket__4715[(i__4716 + 1)]);
} else
{return not_found;
}
});
G__4742 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4742__4743.call(this,coll,k);
case  3 :
return G__4742__4744.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4742;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4717 = this;
var h__4718 = cljs.core.hash.call(null,k);
var bucket__4719 = (this__4717.hashobj[h__4718]);

if(cljs.core.truth_(bucket__4719))
{var new_bucket__4720 = cljs.core.aclone.call(null,bucket__4719);
var new_hashobj__4721 = goog.object.clone.call(null,this__4717.hashobj);

(new_hashobj__4721[h__4718] = new_bucket__4720);
var temp__3695__auto____4722 = cljs.core.scan_array.call(null,2,k,new_bucket__4720);

if(cljs.core.truth_(temp__3695__auto____4722))
{var i__4723 = temp__3695__auto____4722;

(new_bucket__4720[(i__4723 + 1)] = v);
return (new cljs.core.HashMap(this__4717.meta,this__4717.count,new_hashobj__4721));
} else
{new_bucket__4720.push(k,v);
return (new cljs.core.HashMap(this__4717.meta,(this__4717.count + 1),new_hashobj__4721));
}
} else
{var new_hashobj__4724 = goog.object.clone.call(null,this__4717.hashobj);

(new_hashobj__4724[h__4718] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__4717.meta,(this__4717.count + 1),new_hashobj__4724));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4725 = this;
var bucket__4726 = (this__4725.hashobj[cljs.core.hash.call(null,k)]);
var i__4727 = (cljs.core.truth_(bucket__4726)?cljs.core.scan_array.call(null,2,k,bucket__4726):null);

if(cljs.core.truth_(i__4727))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4728 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4729 = this;
if(cljs.core.truth_((this__4729.count > 0)))
{var hashes__4730 = cljs.core.js_keys.call(null,this__4729.hashobj);

return cljs.core.mapcat.call(null,(function (p1__4707_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4729.hashobj[p1__4707_SHARP_])));
}),hashes__4730);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4731 = this;
return this__4731.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4732 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4733 = this;
return (new cljs.core.HashMap(meta,this__4733.count,this__4733.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4734 = this;
return this__4734.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4735 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4735.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4736 = this;
var h__4737 = cljs.core.hash.call(null,k);
var bucket__4738 = (this__4736.hashobj[h__4737]);
var i__4739 = (cljs.core.truth_(bucket__4738)?cljs.core.scan_array.call(null,2,k,bucket__4738):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4739)))
{return coll;
} else
{var new_hashobj__4740 = goog.object.clone.call(null,this__4736.hashobj);

if(cljs.core.truth_((3 > bucket__4738.length)))
{cljs.core.js_delete.call(null,new_hashobj__4740,h__4737);
} else
{var new_bucket__4741 = cljs.core.aclone.call(null,bucket__4738);

new_bucket__4741.splice(i__4739,2);
(new_hashobj__4740[h__4737] = new_bucket__4741);
}
return (new cljs.core.HashMap(this__4736.meta,(this__4736.count - 1),new_hashobj__4740));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4746 = ks.length;

var i__4747 = 0;
var out__4748 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4747 < len__4746)))
{{
var G__4749 = (i__4747 + 1);
var G__4750 = cljs.core.assoc.call(null,out__4748,(ks[i__4747]),(vs[i__4747]));
i__4747 = G__4749;
out__4748 = G__4750;
continue;
}
} else
{return out__4748;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__4751 = null;
var G__4751__4752 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4751__4753 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4751 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4751__4752.call(this,_,k);
case  3 :
return G__4751__4753.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4751;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__4755 = cljs.core.seq.call(null,keyvals);
var out__4756 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4755))
{{
var G__4757 = cljs.core.nnext.call(null,in$__4755);
var G__4758 = cljs.core.assoc.call(null,out__4756,cljs.core.first.call(null,in$__4755),cljs.core.second.call(null,in$__4755));
in$__4755 = G__4757;
out__4756 = G__4758;
continue;
}
} else
{return out__4756;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__4759){
var keyvals = cljs.core.seq( arglist__4759 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__4760_SHARP_,p2__4761_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4762 = p1__4760_SHARP_;

if(cljs.core.truth_(or__3548__auto____4762))
{return or__3548__auto____4762;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4761_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__4763){
var maps = cljs.core.seq( arglist__4763 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__4766 = (function (m,e){
var k__4764 = cljs.core.first.call(null,e);
var v__4765 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4764)))
{return cljs.core.assoc.call(null,m,k__4764,f.call(null,cljs.core.get.call(null,m,k__4764),v__4765));
} else
{return cljs.core.assoc.call(null,m,k__4764,v__4765);
}
});
var merge2__4768 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4766,(function (){var or__3548__auto____4767 = m1;

if(cljs.core.truth_(or__3548__auto____4767))
{return or__3548__auto____4767;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4768,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__4769){
var f = cljs.core.first(arglist__4769);
var maps = cljs.core.rest(arglist__4769);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4771 = cljs.core.ObjMap.fromObject([],{});
var keys__4772 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4772))
{var key__4773 = cljs.core.first.call(null,keys__4772);
var entry__4774 = cljs.core.get.call(null,map,key__4773,"﷐'user/not-found");

{
var G__4775 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4774,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__4771,key__4773,entry__4774):ret__4771);
var G__4776 = cljs.core.next.call(null,keys__4772);
ret__4771 = G__4775;
keys__4772 = G__4776;
continue;
}
} else
{return ret__4771;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4777 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4790 = null;
var G__4790__4791 = (function (coll,v){
var this__4778 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4790__4792 = (function (coll,v,not_found){
var this__4779 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4779.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4790 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4790__4791.call(this,coll,v);
case  3 :
return G__4790__4792.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4790;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4780 = this;
return (new cljs.core.Set(this__4780.meta,cljs.core.assoc.call(null,this__4780.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4781 = this;
return cljs.core.keys.call(null,this__4781.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4782 = this;
return (new cljs.core.Set(this__4782.meta,cljs.core.dissoc.call(null,this__4782.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4783 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4784 = this;
var and__3546__auto____4785 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4785))
{var and__3546__auto____4786 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4786))
{return cljs.core.every_QMARK_.call(null,(function (p1__4770_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4770_SHARP_);
}),other);
} else
{return and__3546__auto____4786;
}
} else
{return and__3546__auto____4785;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4787 = this;
return (new cljs.core.Set(meta,this__4787.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4788 = this;
return this__4788.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4789 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4789.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__4794 = null;
var G__4794__4795 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__4794__4796 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__4794 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__4794__4795.call(this,_,k);
case  3 :
return G__4794__4796.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4794;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4799 = cljs.core.seq.call(null,coll);
var out__4800 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4799))))
{{
var G__4801 = cljs.core.rest.call(null,in$__4799);
var G__4802 = cljs.core.conj.call(null,out__4800,cljs.core.first.call(null,in$__4799));
in$__4799 = G__4801;
out__4800 = G__4802;
continue;
}
} else
{return out__4800;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__4803 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4804 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4804))
{var e__4805 = temp__3695__auto____4804;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4805));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4803,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4798_SHARP_){
var temp__3695__auto____4806 = cljs.core.find.call(null,smap,p1__4798_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4806))
{var e__4807 = temp__3695__auto____4806;

return cljs.core.second.call(null,e__4807);
} else
{return p1__4798_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4815 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4808,seen){
while(true){
var vec__4809__4810 = p__4808;
var f__4811 = cljs.core.nth.call(null,vec__4809__4810,0,null);
var xs__4812 = vec__4809__4810;

var temp__3698__auto____4813 = cljs.core.seq.call(null,xs__4812);

if(cljs.core.truth_(temp__3698__auto____4813))
{var s__4814 = temp__3698__auto____4813;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4811)))
{{
var G__4816 = cljs.core.rest.call(null,s__4814);
var G__4817 = seen;
p__4808 = G__4816;
seen = G__4817;
continue;
}
} else
{return cljs.core.cons.call(null,f__4811,step.call(null,cljs.core.rest.call(null,s__4814),cljs.core.conj.call(null,seen,f__4811)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4815.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4818 = cljs.core.Vector.fromArray([]);
var s__4819 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4819)))
{{
var G__4820 = cljs.core.conj.call(null,ret__4818,cljs.core.first.call(null,s__4819));
var G__4821 = cljs.core.next.call(null,s__4819);
ret__4818 = G__4820;
s__4819 = G__4821;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4818);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4822 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4822))
{return or__3548__auto____4822;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4823 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4823 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4823 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____4824 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4824))
{return or__3548__auto____4824;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4825 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4825 > -1)))
{return cljs.core.subs.call(null,x,2,i__4825);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__4828 = cljs.core.ObjMap.fromObject([],{});
var ks__4829 = cljs.core.seq.call(null,keys);
var vs__4830 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4831 = ks__4829;

if(cljs.core.truth_(and__3546__auto____4831))
{return vs__4830;
} else
{return and__3546__auto____4831;
}
})()))
{{
var G__4832 = cljs.core.assoc.call(null,map__4828,cljs.core.first.call(null,ks__4829),cljs.core.first.call(null,vs__4830));
var G__4833 = cljs.core.next.call(null,ks__4829);
var G__4834 = cljs.core.next.call(null,vs__4830);
map__4828 = G__4832;
ks__4829 = G__4833;
vs__4830 = G__4834;
continue;
}
} else
{return map__4828;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__4837 = (function (k,x){
return x;
});
var max_key__4838 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4839 = (function() { 
var G__4841__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4826_SHARP_,p2__4827_SHARP_){
return max_key.call(null,k,p1__4826_SHARP_,p2__4827_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4841 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4841__delegate.call(this, k, x, y, more);
};
G__4841.cljs$lang$maxFixedArity = 3;
G__4841.cljs$lang$applyTo = (function (arglist__4842){
var k = cljs.core.first(arglist__4842);
var x = cljs.core.first(cljs.core.next(arglist__4842));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4842)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4842)));
return G__4841__delegate.call(this, k, x, y, more);
});
return G__4841;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4837.call(this,k,x);
case  3 :
return max_key__4838.call(this,k,x,y);
default:
return max_key__4839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4839.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4843 = (function (k,x){
return x;
});
var min_key__4844 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4845 = (function() { 
var G__4847__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4835_SHARP_,p2__4836_SHARP_){
return min_key.call(null,k,p1__4835_SHARP_,p2__4836_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4847 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4847__delegate.call(this, k, x, y, more);
};
G__4847.cljs$lang$maxFixedArity = 3;
G__4847.cljs$lang$applyTo = (function (arglist__4848){
var k = cljs.core.first(arglist__4848);
var x = cljs.core.first(cljs.core.next(arglist__4848));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4848)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4848)));
return G__4847__delegate.call(this, k, x, y, more);
});
return G__4847;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4843.call(this,k,x);
case  3 :
return min_key__4844.call(this,k,x,y);
default:
return min_key__4845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4845.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4851 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4852 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4849 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4849))
{var s__4850 = temp__3698__auto____4849;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4850),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4850)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4851.call(this,n,step);
case  3 :
return partition_all__4852.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4854 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4854))
{var s__4855 = temp__3698__auto____4854;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4855))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4855),take_while.call(null,pred,cljs.core.rest.call(null,s__4855)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__4856 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4857 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4873 = null;
var G__4873__4874 = (function (rng,f){
var this__4858 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4873__4875 = (function (rng,f,s){
var this__4859 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4873 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4873__4874.call(this,rng,f);
case  3 :
return G__4873__4875.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4873;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4860 = this;
var comp__4861 = (cljs.core.truth_((this__4860.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4861.call(null,this__4860.start,this__4860.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4862 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4862.end - this__4862.start) / this__4862.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4863 = this;
return this__4863.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4864 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4864.meta,(this__4864.start + this__4864.step),this__4864.end,this__4864.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4865 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4866 = this;
return (new cljs.core.Range(meta,this__4866.start,this__4866.end,this__4866.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4867 = this;
return this__4867.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4877 = null;
var G__4877__4878 = (function (rng,n){
var this__4868 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4868.start + (n * this__4868.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4869 = (this__4868.start > this__4868.end);

if(cljs.core.truth_(and__3546__auto____4869))
{return cljs.core._EQ_.call(null,this__4868.step,0);
} else
{return and__3546__auto____4869;
}
})()))
{return this__4868.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4877__4879 = (function (rng,n,not_found){
var this__4870 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4870.start + (n * this__4870.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4871 = (this__4870.start > this__4870.end);

if(cljs.core.truth_(and__3546__auto____4871))
{return cljs.core._EQ_.call(null,this__4870.step,0);
} else
{return and__3546__auto____4871;
}
})()))
{return this__4870.start;
} else
{return not_found;
}
}
});
G__4877 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4877__4878.call(this,rng,n);
case  3 :
return G__4877__4879.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4877;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4872 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4872.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4881 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4882 = (function (end){
return range.call(null,0,end,1);
});
var range__4883 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4884 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4881.call(this);
case  1 :
return range__4882.call(this,start);
case  2 :
return range__4883.call(this,start,end);
case  3 :
return range__4884.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4886 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4886))
{var s__4887 = temp__3698__auto____4886;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4887),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4887)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4889 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4889))
{var s__4890 = temp__3698__auto____4889;

var fst__4891 = cljs.core.first.call(null,s__4890);
var fv__4892 = f.call(null,fst__4891);
var run__4893 = cljs.core.cons.call(null,fst__4891,cljs.core.take_while.call(null,(function (p1__4888_SHARP_){
return cljs.core._EQ_.call(null,fv__4892,f.call(null,p1__4888_SHARP_));
}),cljs.core.next.call(null,s__4890)));

return cljs.core.cons.call(null,run__4893,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4893),s__4890))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__4908 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4904 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4904))
{var s__4905 = temp__3695__auto____4904;

return reductions.call(null,f,cljs.core.first.call(null,s__4905),cljs.core.rest.call(null,s__4905));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4909 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4906 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4906))
{var s__4907 = temp__3698__auto____4906;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4907)),cljs.core.rest.call(null,s__4907));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4908.call(this,f,init);
case  3 :
return reductions__4909.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__4912 = (function (f){
return (function() {
var G__4917 = null;
var G__4917__4918 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4917__4919 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4917__4920 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4917__4921 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4917__4922 = (function() { 
var G__4924__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4924 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4924__delegate.call(this, x, y, z, args);
};
G__4924.cljs$lang$maxFixedArity = 3;
G__4924.cljs$lang$applyTo = (function (arglist__4925){
var x = cljs.core.first(arglist__4925);
var y = cljs.core.first(cljs.core.next(arglist__4925));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4925)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4925)));
return G__4924__delegate.call(this, x, y, z, args);
});
return G__4924;
})()
;
G__4917 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4917__4918.call(this);
case  1 :
return G__4917__4919.call(this,x);
case  2 :
return G__4917__4920.call(this,x,y);
case  3 :
return G__4917__4921.call(this,x,y,z);
default:
return G__4917__4922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4917.cljs$lang$maxFixedArity = 3;
G__4917.cljs$lang$applyTo = G__4917__4922.cljs$lang$applyTo;
return G__4917;
})()
});
var juxt__4913 = (function (f,g){
return (function() {
var G__4926 = null;
var G__4926__4927 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4926__4928 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4926__4929 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4926__4930 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4926__4931 = (function() { 
var G__4933__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4933 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4933__delegate.call(this, x, y, z, args);
};
G__4933.cljs$lang$maxFixedArity = 3;
G__4933.cljs$lang$applyTo = (function (arglist__4934){
var x = cljs.core.first(arglist__4934);
var y = cljs.core.first(cljs.core.next(arglist__4934));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4934)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4934)));
return G__4933__delegate.call(this, x, y, z, args);
});
return G__4933;
})()
;
G__4926 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4926__4927.call(this);
case  1 :
return G__4926__4928.call(this,x);
case  2 :
return G__4926__4929.call(this,x,y);
case  3 :
return G__4926__4930.call(this,x,y,z);
default:
return G__4926__4931.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4926.cljs$lang$maxFixedArity = 3;
G__4926.cljs$lang$applyTo = G__4926__4931.cljs$lang$applyTo;
return G__4926;
})()
});
var juxt__4914 = (function (f,g,h){
return (function() {
var G__4935 = null;
var G__4935__4936 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4935__4937 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4935__4938 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4935__4939 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4935__4940 = (function() { 
var G__4942__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4942 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4942__delegate.call(this, x, y, z, args);
};
G__4942.cljs$lang$maxFixedArity = 3;
G__4942.cljs$lang$applyTo = (function (arglist__4943){
var x = cljs.core.first(arglist__4943);
var y = cljs.core.first(cljs.core.next(arglist__4943));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4943)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4943)));
return G__4942__delegate.call(this, x, y, z, args);
});
return G__4942;
})()
;
G__4935 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4935__4936.call(this);
case  1 :
return G__4935__4937.call(this,x);
case  2 :
return G__4935__4938.call(this,x,y);
case  3 :
return G__4935__4939.call(this,x,y,z);
default:
return G__4935__4940.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4935.cljs$lang$maxFixedArity = 3;
G__4935.cljs$lang$applyTo = G__4935__4940.cljs$lang$applyTo;
return G__4935;
})()
});
var juxt__4915 = (function() { 
var G__4944__delegate = function (f,g,h,fs){
var fs__4911 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4945 = null;
var G__4945__4946 = (function (){
return cljs.core.reduce.call(null,(function (p1__4894_SHARP_,p2__4895_SHARP_){
return cljs.core.conj.call(null,p1__4894_SHARP_,p2__4895_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4911);
});
var G__4945__4947 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4896_SHARP_,p2__4897_SHARP_){
return cljs.core.conj.call(null,p1__4896_SHARP_,p2__4897_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4911);
});
var G__4945__4948 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4898_SHARP_,p2__4899_SHARP_){
return cljs.core.conj.call(null,p1__4898_SHARP_,p2__4899_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4911);
});
var G__4945__4949 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4900_SHARP_,p2__4901_SHARP_){
return cljs.core.conj.call(null,p1__4900_SHARP_,p2__4901_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4911);
});
var G__4945__4950 = (function() { 
var G__4952__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4902_SHARP_,p2__4903_SHARP_){
return cljs.core.conj.call(null,p1__4902_SHARP_,cljs.core.apply.call(null,p2__4903_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4911);
};
var G__4952 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4952__delegate.call(this, x, y, z, args);
};
G__4952.cljs$lang$maxFixedArity = 3;
G__4952.cljs$lang$applyTo = (function (arglist__4953){
var x = cljs.core.first(arglist__4953);
var y = cljs.core.first(cljs.core.next(arglist__4953));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4953)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4953)));
return G__4952__delegate.call(this, x, y, z, args);
});
return G__4952;
})()
;
G__4945 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4945__4946.call(this);
case  1 :
return G__4945__4947.call(this,x);
case  2 :
return G__4945__4948.call(this,x,y);
case  3 :
return G__4945__4949.call(this,x,y,z);
default:
return G__4945__4950.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4945.cljs$lang$maxFixedArity = 3;
G__4945.cljs$lang$applyTo = G__4945__4950.cljs$lang$applyTo;
return G__4945;
})()
};
var G__4944 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4944__delegate.call(this, f, g, h, fs);
};
G__4944.cljs$lang$maxFixedArity = 3;
G__4944.cljs$lang$applyTo = (function (arglist__4954){
var f = cljs.core.first(arglist__4954);
var g = cljs.core.first(cljs.core.next(arglist__4954));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4954)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4954)));
return G__4944__delegate.call(this, f, g, h, fs);
});
return G__4944;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4912.call(this,f);
case  2 :
return juxt__4913.call(this,f,g);
case  3 :
return juxt__4914.call(this,f,g,h);
default:
return juxt__4915.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4915.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__4956 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4959 = cljs.core.next.call(null,coll);
coll = G__4959;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4957 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4955 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4955))
{return (n > 0);
} else
{return and__3546__auto____4955;
}
})()))
{{
var G__4960 = (n - 1);
var G__4961 = cljs.core.next.call(null,coll);
n = G__4960;
coll = G__4961;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__4956.call(this,n);
case  2 :
return dorun__4957.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__4962 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4963 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4962.call(this,n);
case  2 :
return doall__4963.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__4965 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4965),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4965),1)))
{return cljs.core.first.call(null,matches__4965);
} else
{return cljs.core.vec.call(null,matches__4965);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__4966 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__4966)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4966),1)))
{return cljs.core.first.call(null,matches__4966);
} else
{return cljs.core.vec.call(null,matches__4966);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4967 = cljs.core.re_find.call(null,re,s);
var match_idx__4968 = s.search(re);
var match_str__4969 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4967))?cljs.core.first.call(null,match_data__4967):match_data__4967);
var post_match__4970 = cljs.core.subs.call(null,s,(match_idx__4968 + cljs.core.count.call(null,match_str__4969)));

if(cljs.core.truth_(match_data__4967))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4967,re_seq.call(null,re,post_match__4970));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4971_SHARP_){
return print_one.call(null,p1__4971_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4972 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____4972))
{var and__3546__auto____4976 = (function (){var x__384__auto____4973 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4974 = x__384__auto____4973;

if(cljs.core.truth_(and__3546__auto____4974))
{var and__3546__auto____4975 = x__384__auto____4973.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4975))
{return cljs.core.not.call(null,x__384__auto____4973.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4975;
}
} else
{return and__3546__auto____4974;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__384__auto____4973);
}
})();

if(cljs.core.truth_(and__3546__auto____4976))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4976;
}
} else
{return and__3546__auto____4972;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__384__auto____4977 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4978 = x__384__auto____4977;

if(cljs.core.truth_(and__3546__auto____4978))
{var and__3546__auto____4979 = x__384__auto____4977.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4979))
{return cljs.core.not.call(null,x__384__auto____4977.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4979;
}
} else
{return and__3546__auto____4978;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__384__auto____4977);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__4980 = cljs.core.first.call(null,objs);
var sb__4981 = (new goog.string.StringBuffer());

var G__4982__4983 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4982__4983))
{var obj__4984 = cljs.core.first.call(null,G__4982__4983);
var G__4982__4985 = G__4982__4983;

while(true){
if(cljs.core.truth_((obj__4984 === first_obj__4980)))
{} else
{sb__4981.append(" ");
}
var G__4986__4987 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4984,opts));

if(cljs.core.truth_(G__4986__4987))
{var string__4988 = cljs.core.first.call(null,G__4986__4987);
var G__4986__4989 = G__4986__4987;

while(true){
sb__4981.append(string__4988);
var temp__3698__auto____4990 = cljs.core.next.call(null,G__4986__4989);

if(cljs.core.truth_(temp__3698__auto____4990))
{var G__4986__4991 = temp__3698__auto____4990;

{
var G__4994 = cljs.core.first.call(null,G__4986__4991);
var G__4995 = G__4986__4991;
string__4988 = G__4994;
G__4986__4989 = G__4995;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4992 = cljs.core.next.call(null,G__4982__4985);

if(cljs.core.truth_(temp__3698__auto____4992))
{var G__4982__4993 = temp__3698__auto____4992;

{
var G__4996 = cljs.core.first.call(null,G__4982__4993);
var G__4997 = G__4982__4993;
obj__4984 = G__4996;
G__4982__4985 = G__4997;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__4981);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4998 = cljs.core.first.call(null,objs);

var G__4999__5000 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4999__5000))
{var obj__5001 = cljs.core.first.call(null,G__4999__5000);
var G__4999__5002 = G__4999__5000;

while(true){
if(cljs.core.truth_((obj__5001 === first_obj__4998)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__5003__5004 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__5001,opts));

if(cljs.core.truth_(G__5003__5004))
{var string__5005 = cljs.core.first.call(null,G__5003__5004);
var G__5003__5006 = G__5003__5004;

while(true){
cljs.core.string_print.call(null,string__5005);
var temp__3698__auto____5007 = cljs.core.next.call(null,G__5003__5006);

if(cljs.core.truth_(temp__3698__auto____5007))
{var G__5003__5008 = temp__3698__auto____5007;

{
var G__5011 = cljs.core.first.call(null,G__5003__5008);
var G__5012 = G__5003__5008;
string__5005 = G__5011;
G__5003__5006 = G__5012;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____5009 = cljs.core.next.call(null,G__4999__5002);

if(cljs.core.truth_(temp__3698__auto____5009))
{var G__4999__5010 = temp__3698__auto____5009;

{
var G__5013 = cljs.core.first.call(null,G__4999__5010);
var G__5014 = G__4999__5010;
obj__5001 = G__5013;
G__4999__5002 = G__5014;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__5015){
var objs = cljs.core.seq( arglist__5015 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__5016){
var objs = cljs.core.seq( arglist__5016 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__5017){
var objs = cljs.core.seq( arglist__5017 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__5018){
var objs = cljs.core.seq( arglist__5018 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__5019){
var objs = cljs.core.seq( arglist__5019 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__5020 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__5020,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____5021 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____5021))
{var nspc__5022 = temp__3698__auto____5021;

return cljs.core.str.call(null,nspc__5022,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____5023 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____5023))
{var nspc__5024 = temp__3698__auto____5023;

return cljs.core.str.call(null,nspc__5024,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__5025 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__5025,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__5026 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__5027 = this;
var G__5028__5029 = cljs.core.seq.call(null,this__5027.watches);

if(cljs.core.truth_(G__5028__5029))
{var G__5031__5033 = cljs.core.first.call(null,G__5028__5029);
var vec__5032__5034 = G__5031__5033;
var key__5035 = cljs.core.nth.call(null,vec__5032__5034,0,null);
var f__5036 = cljs.core.nth.call(null,vec__5032__5034,1,null);
var G__5028__5037 = G__5028__5029;

var G__5031__5038 = G__5031__5033;
var G__5028__5039 = G__5028__5037;

while(true){
var vec__5040__5041 = G__5031__5038;
var key__5042 = cljs.core.nth.call(null,vec__5040__5041,0,null);
var f__5043 = cljs.core.nth.call(null,vec__5040__5041,1,null);
var G__5028__5044 = G__5028__5039;

f__5043.call(null,key__5042,this$,oldval,newval);
var temp__3698__auto____5045 = cljs.core.next.call(null,G__5028__5044);

if(cljs.core.truth_(temp__3698__auto____5045))
{var G__5028__5046 = temp__3698__auto____5045;

{
var G__5053 = cljs.core.first.call(null,G__5028__5046);
var G__5054 = G__5028__5046;
G__5031__5038 = G__5053;
G__5028__5039 = G__5054;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__5047 = this;
return this$.watches = cljs.core.assoc.call(null,this__5047.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__5048 = this;
return this$.watches = cljs.core.dissoc.call(null,this__5048.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__5049 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__5049.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__5050 = this;
return this__5050.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__5051 = this;
return this__5051.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__5052 = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__5061 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__5062 = (function() { 
var G__5064__delegate = function (x,p__5055){
var map__5056__5057 = p__5055;
var map__5056__5058 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5056__5057))?cljs.core.apply.call(null,cljs.core.hash_map,map__5056__5057):map__5056__5057);
var validator__5059 = cljs.core.get.call(null,map__5056__5058,"﷐'validator");
var meta__5060 = cljs.core.get.call(null,map__5056__5058,"﷐'meta");

return (new cljs.core.Atom(x,meta__5060,validator__5059,null));
};
var G__5064 = function (x,var_args){
var p__5055 = null;
if (goog.isDef(var_args)) {
  p__5055 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5064__delegate.call(this, x, p__5055);
};
G__5064.cljs$lang$maxFixedArity = 1;
G__5064.cljs$lang$applyTo = (function (arglist__5065){
var x = cljs.core.first(arglist__5065);
var p__5055 = cljs.core.rest(arglist__5065);
return G__5064__delegate.call(this, x, p__5055);
});
return G__5064;
})()
;
atom = function(x,var_args){
var p__5055 = var_args;
switch(arguments.length){
case  1 :
return atom__5061.call(this,x);
default:
return atom__5062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__5062.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____5066 = a.validator;

if(cljs.core.truth_(temp__3698__auto____5066))
{var validate__5067 = temp__3698__auto____5066;

if(cljs.core.truth_(validate__5067.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3016))))));
}
} else
{}
var old_value__5068 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__5068,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___5069 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___5070 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___5071 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5072 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___5073 = (function() { 
var G__5075__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__5075 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__5075__delegate.call(this, a, f, x, y, z, more);
};
G__5075.cljs$lang$maxFixedArity = 5;
G__5075.cljs$lang$applyTo = (function (arglist__5076){
var a = cljs.core.first(arglist__5076);
var f = cljs.core.first(cljs.core.next(arglist__5076));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__5076)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5076))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5076)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__5076)))));
return G__5075__delegate.call(this, a, f, x, y, z, more);
});
return G__5075;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___5069.call(this,a,f);
case  3 :
return swap_BANG___5070.call(this,a,f,x);
case  4 :
return swap_BANG___5071.call(this,a,f,x,y);
case  5 :
return swap_BANG___5072.call(this,a,f,x,y,z);
default:
return swap_BANG___5073.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___5073.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__5077){
var iref = cljs.core.first(arglist__5077);
var f = cljs.core.first(cljs.core.next(arglist__5077));
var args = cljs.core.rest(cljs.core.next(arglist__5077));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__5078 = (function (){
return gensym.call(null,"G__");
});
var gensym__5079 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__5078.call(this);
case  1 :
return gensym__5079.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__5081 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__5081.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__5082 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__5082.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__5082.state,this__5082.f);
}
return cljs.core.deref.call(null,this__5082.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__5083){
var body = cljs.core.seq( arglist__5083 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__5084__5085 = options;
var map__5084__5086 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__5084__5085))?cljs.core.apply.call(null,cljs.core.hash_map,map__5084__5085):map__5084__5085);
var keywordize_keys__5087 = cljs.core.get.call(null,map__5084__5086,"﷐'keywordize-keys");
var keyfn__5088 = (cljs.core.truth_(keywordize_keys__5087)?cljs.core.keyword:cljs.core.str);
var f__5094 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__448__auto____5093 = (function iter__5089(s__5090){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5090__5091 = s__5090;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5090__5091)))
{var k__5092 = cljs.core.first.call(null,s__5090__5091);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__5088.call(null,k__5092),thisfn.call(null,(x[k__5092]))]),iter__5089.call(null,cljs.core.rest.call(null,s__5090__5091)));
} else
{return null;
}
break;
}
})));
});

return iter__448__auto____5093.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__5094.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__5095){
var x = cljs.core.first(arglist__5095);
var options = cljs.core.rest(arglist__5095);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__5096 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__5100__delegate = function (args){
var temp__3695__auto____5097 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__5096),args);

if(cljs.core.truth_(temp__3695__auto____5097))
{var v__5098 = temp__3695__auto____5097;

return v__5098;
} else
{var ret__5099 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__5096,cljs.core.assoc,args,ret__5099);
return ret__5099;
}
};
var G__5100 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__5100__delegate.call(this, args);
};
G__5100.cljs$lang$maxFixedArity = 0;
G__5100.cljs$lang$applyTo = (function (arglist__5101){
var args = cljs.core.seq( arglist__5101 );;
return G__5100__delegate.call(this, args);
});
return G__5100;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__5103 = (function (f){
while(true){
var ret__5102 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__5102)))
{{
var G__5106 = ret__5102;
f = G__5106;
continue;
}
} else
{return ret__5102;
}
break;
}
});
var trampoline__5104 = (function() { 
var G__5107__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__5107 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5107__delegate.call(this, f, args);
};
G__5107.cljs$lang$maxFixedArity = 1;
G__5107.cljs$lang$applyTo = (function (arglist__5108){
var f = cljs.core.first(arglist__5108);
var args = cljs.core.rest(arglist__5108);
return G__5107__delegate.call(this, f, args);
});
return G__5107;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__5103.call(this,f);
default:
return trampoline__5104.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__5104.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__5109 = (function (){
return rand.call(null,1);
});
var rand__5110 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__5109.call(this);
case  1 :
return rand__5110.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__5112 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__5112,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__5112,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___5121 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___5122 = (function (h,child,parent){
var or__3548__auto____5113 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____5113))
{return or__3548__auto____5113;
} else
{var or__3548__auto____5114 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____5114))
{return or__3548__auto____5114;
} else
{var and__3546__auto____5115 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____5115))
{var and__3546__auto____5116 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____5116))
{var and__3546__auto____5117 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____5117))
{var ret__5118 = true;
var i__5119 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____5120 = cljs.core.not.call(null,ret__5118);

if(cljs.core.truth_(or__3548__auto____5120))
{return or__3548__auto____5120;
} else
{return cljs.core._EQ_.call(null,i__5119,cljs.core.count.call(null,parent));
}
})()))
{return ret__5118;
} else
{{
var G__5124 = isa_QMARK_.call(null,h,child.call(null,i__5119),parent.call(null,i__5119));
var G__5125 = (i__5119 + 1);
ret__5118 = G__5124;
i__5119 = G__5125;
continue;
}
}
break;
}
} else
{return and__3546__auto____5117;
}
} else
{return and__3546__auto____5116;
}
} else
{return and__3546__auto____5115;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___5121.call(this,h,child);
case  3 :
return isa_QMARK___5122.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__5126 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__5127 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__5126.call(this,h);
case  2 :
return parents__5127.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__5129 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__5130 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__5129.call(this,h);
case  2 :
return ancestors__5130.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__5132 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__5133 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__5132.call(this,h);
case  2 :
return descendants__5133.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__5143 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3308))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__5144 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3312))))));
}
var tp__5138 = "﷐'parents".call(null,h);
var td__5139 = "﷐'descendants".call(null,h);
var ta__5140 = "﷐'ancestors".call(null,h);
var tf__5141 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____5142 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__5138.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__5140.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__5140.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__5138,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__5141.call(null,"﷐'ancestors".call(null,h),tag,td__5139,parent,ta__5140),"﷐'descendants":tf__5141.call(null,"﷐'descendants".call(null,h),parent,ta__5140,tag,td__5139)});
})());

if(cljs.core.truth_(or__3548__auto____5142))
{return or__3548__auto____5142;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__5143.call(this,h,tag);
case  3 :
return derive__5144.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__5150 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__5151 = (function (h,tag,parent){
var parentMap__5146 = "﷐'parents".call(null,h);
var childsParents__5147 = (cljs.core.truth_(parentMap__5146.call(null,tag))?cljs.core.disj.call(null,parentMap__5146.call(null,tag),parent):cljs.core.set([]));
var newParents__5148 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__5147))?cljs.core.assoc.call(null,parentMap__5146,tag,childsParents__5147):cljs.core.dissoc.call(null,parentMap__5146,tag));
var deriv_seq__5149 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__5135_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__5135_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__5135_SHARP_),cljs.core.second.call(null,p1__5135_SHARP_)));
}),cljs.core.seq.call(null,newParents__5148)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__5146.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__5136_SHARP_,p2__5137_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__5136_SHARP_,p2__5137_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__5149));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__5150.call(this,h,tag);
case  3 :
return underive__5151.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__5153 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____5155 = (cljs.core.truth_((function (){var and__3546__auto____5154 = xprefs__5153;

if(cljs.core.truth_(and__3546__auto____5154))
{return xprefs__5153.call(null,y);
} else
{return and__3546__auto____5154;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____5155))
{return or__3548__auto____5155;
} else
{var or__3548__auto____5157 = (function (){var ps__5156 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__5156) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__5156),prefer_table)))
{} else
{}
{
var G__5160 = cljs.core.rest.call(null,ps__5156);
ps__5156 = G__5160;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____5157))
{return or__3548__auto____5157;
} else
{var or__3548__auto____5159 = (function (){var ps__5158 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__5158) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__5158),y,prefer_table)))
{} else
{}
{
var G__5161 = cljs.core.rest.call(null,ps__5158);
ps__5158 = G__5161;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____5159))
{return or__3548__auto____5159;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____5162 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____5162))
{return or__3548__auto____5162;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__5171 = cljs.core.reduce.call(null,(function (be,p__5163){
var vec__5164__5165 = p__5163;
var k__5166 = cljs.core.nth.call(null,vec__5164__5165,0,null);
var ___5167 = cljs.core.nth.call(null,vec__5164__5165,1,null);
var e__5168 = vec__5164__5165;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__5166)))
{var be2__5170 = (cljs.core.truth_((function (){var or__3548__auto____5169 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____5169))
{return or__3548__auto____5169;
} else
{return cljs.core.dominates.call(null,k__5166,cljs.core.first.call(null,be),prefer_table);
}
})())?e__5168:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__5170),k__5166,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__5166," and ",cljs.core.first.call(null,be2__5170),", and neither is preferred")));
}
return be2__5170;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__5171))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__5171));
return cljs.core.second.call(null,best_entry__5171);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____5172 = mf;

if(cljs.core.truth_(and__3546__auto____5172))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____5172;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____5173 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5173))
{return or__3548__auto____5173;
} else
{var or__3548__auto____5174 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____5174))
{return or__3548__auto____5174;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____5175 = mf;

if(cljs.core.truth_(and__3546__auto____5175))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____5175;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____5176 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5176))
{return or__3548__auto____5176;
} else
{var or__3548__auto____5177 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____5177))
{return or__3548__auto____5177;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____5178 = mf;

if(cljs.core.truth_(and__3546__auto____5178))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____5178;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____5179 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5179))
{return or__3548__auto____5179;
} else
{var or__3548__auto____5180 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____5180))
{return or__3548__auto____5180;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____5181 = mf;

if(cljs.core.truth_(and__3546__auto____5181))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____5181;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____5182 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5182))
{return or__3548__auto____5182;
} else
{var or__3548__auto____5183 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____5183))
{return or__3548__auto____5183;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____5184 = mf;

if(cljs.core.truth_(and__3546__auto____5184))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____5184;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____5185 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5185))
{return or__3548__auto____5185;
} else
{var or__3548__auto____5186 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____5186))
{return or__3548__auto____5186;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____5187 = mf;

if(cljs.core.truth_(and__3546__auto____5187))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____5187;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____5188 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5188))
{return or__3548__auto____5188;
} else
{var or__3548__auto____5189 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____5189))
{return or__3548__auto____5189;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____5190 = mf;

if(cljs.core.truth_(and__3546__auto____5190))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____5190;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____5191 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5191))
{return or__3548__auto____5191;
} else
{var or__3548__auto____5192 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____5192))
{return or__3548__auto____5192;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____5193 = mf;

if(cljs.core.truth_(and__3546__auto____5193))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____5193;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____5194 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____5194))
{return or__3548__auto____5194;
} else
{var or__3548__auto____5195 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5195))
{return or__3548__auto____5195;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__5196 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__5197 = cljs.core._get_method.call(null,mf,dispatch_val__5196);

if(cljs.core.truth_(target_fn__5197))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__5196)));
}
return cljs.core.apply.call(null,target_fn__5197,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__5198 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__5199 = this;
cljs.core.swap_BANG_.call(null,this__5199.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5199.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5199.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__5199.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__5200 = this;
cljs.core.swap_BANG_.call(null,this__5200.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__5200.method_cache,this__5200.method_table,this__5200.cached_hierarchy,this__5200.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__5201 = this;
cljs.core.swap_BANG_.call(null,this__5201.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__5201.method_cache,this__5201.method_table,this__5201.cached_hierarchy,this__5201.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__5202 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__5202.cached_hierarchy),cljs.core.deref.call(null,this__5202.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__5202.method_cache,this__5202.method_table,this__5202.cached_hierarchy,this__5202.hierarchy);
}
var temp__3695__auto____5203 = cljs.core.deref.call(null,this__5202.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____5203))
{var target_fn__5204 = temp__3695__auto____5203;

return target_fn__5204;
} else
{var temp__3695__auto____5205 = cljs.core.find_and_cache_best_method.call(null,this__5202.name,dispatch_val,this__5202.hierarchy,this__5202.method_table,this__5202.prefer_table,this__5202.method_cache,this__5202.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____5205))
{var target_fn__5206 = temp__3695__auto____5205;

return target_fn__5206;
} else
{return cljs.core.deref.call(null,this__5202.method_table).call(null,this__5202.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__5207 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__5207.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__5207.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__5207.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__5207.method_cache,this__5207.method_table,this__5207.cached_hierarchy,this__5207.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__5208 = this;
return cljs.core.deref.call(null,this__5208.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__5209 = this;
return cljs.core.deref.call(null,this__5209.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__5210 = this;
return cljs.core.do_invoke.call(null,mf,this__5210.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__5211__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__5211 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__5211__delegate.call(this, _, args);
};
G__5211.cljs$lang$maxFixedArity = 1;
G__5211.cljs$lang$applyTo = (function (arglist__5212){
var _ = cljs.core.first(arglist__5212);
var args = cljs.core.rest(arglist__5212);
return G__5211__delegate.call(this, _, args);
});
return G__5211;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});

goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5226){
var vec__5227__5228 = p__5226;
var k__5229 = cljs.core.nth.call(null,vec__5227__5228,0,null);
var v__5230 = cljs.core.nth.call(null,vec__5227__5228,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__5229.toLowerCase()),v__5230]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__5261 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____5231 = this$;

if(cljs.core.truth_(and__3546__auto____5231))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____5231;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____5232 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5232))
{return or__3548__auto____5232;
} else
{var or__3548__auto____5233 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____5233))
{return or__3548__auto____5233;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__5262 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____5234 = this$;

if(cljs.core.truth_(and__3546__auto____5234))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____5234;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____5235 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5235))
{return or__3548__auto____5235;
} else
{var or__3548__auto____5236 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____5236))
{return or__3548__auto____5236;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__5263 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____5237 = this$;

if(cljs.core.truth_(and__3546__auto____5237))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____5237;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____5238 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5238))
{return or__3548__auto____5238;
} else
{var or__3548__auto____5239 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____5239))
{return or__3548__auto____5239;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__5264 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____5240 = this$;

if(cljs.core.truth_(and__3546__auto____5240))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____5240;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____5241 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5241))
{return or__3548__auto____5241;
} else
{var or__3548__auto____5242 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____5242))
{return or__3548__auto____5242;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__5261.call(this,this$);
case  2 :
return connect__5262.call(this,this$,opt1);
case  3 :
return connect__5263.call(this,this$,opt1,opt2);
case  4 :
return connect__5264.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__5266 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____5243 = this$;

if(cljs.core.truth_(and__3546__auto____5243))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____5243;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____5244 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5244))
{return or__3548__auto____5244;
} else
{var or__3548__auto____5245 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____5245))
{return or__3548__auto____5245;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__5267 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____5246 = this$;

if(cljs.core.truth_(and__3546__auto____5246))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____5246;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____5247 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5247))
{return or__3548__auto____5247;
} else
{var or__3548__auto____5248 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____5248))
{return or__3548__auto____5248;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__5268 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____5249 = this$;

if(cljs.core.truth_(and__3546__auto____5249))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____5249;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____5250 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5250))
{return or__3548__auto____5250;
} else
{var or__3548__auto____5251 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____5251))
{return or__3548__auto____5251;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__5269 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____5252 = this$;

if(cljs.core.truth_(and__3546__auto____5252))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____5252;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____5253 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5253))
{return or__3548__auto____5253;
} else
{var or__3548__auto____5254 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____5254))
{return or__3548__auto____5254;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__5270 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____5255 = this$;

if(cljs.core.truth_(and__3546__auto____5255))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____5255;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____5256 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5256))
{return or__3548__auto____5256;
} else
{var or__3548__auto____5257 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____5257))
{return or__3548__auto____5257;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__5266.call(this,this$,opt);
case  3 :
return transmit__5267.call(this,this$,opt,opt2);
case  4 :
return transmit__5268.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__5269.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__5270.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____5258 = this$;

if(cljs.core.truth_(and__3546__auto____5258))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____5258;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____5259 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5259))
{return or__3548__auto____5259;
} else
{var or__3548__auto____5260 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____5260))
{return or__3548__auto____5260;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5272){
var vec__5273__5274 = p__5272;
var k__5275 = cljs.core.nth.call(null,vec__5273__5274,0,null);
var v__5276 = cljs.core.nth.call(null,vec__5273__5274,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__5275.toLowerCase()),v__5276]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__5277 = null;
var G__5277__5278 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__5277__5279 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__5277__5280 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__5277__5281 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__5277__5282 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__5277 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__5277__5278.call(this,this$,uri);
case  3 :
return G__5277__5279.call(this,this$,uri,method);
case  4 :
return G__5277__5280.call(this,this$,uri,method,content);
case  5 :
return G__5277__5281.call(this,this$,uri,method,content,headers);
case  6 :
return G__5277__5282.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5277;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__5284){
var vec__5285__5286 = p__5284;
var k__5287 = cljs.core.nth.call(null,vec__5285__5286,0,null);
var v__5288 = cljs.core.nth.call(null,vec__5285__5286,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__5287.toLowerCase()),v__5288]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__5295 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____5289 = this$;

if(cljs.core.truth_(and__3546__auto____5289))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____5289;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____5290 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5290))
{return or__3548__auto____5290;
} else
{var or__3548__auto____5291 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____5291))
{return or__3548__auto____5291;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__5296 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____5292 = this$;

if(cljs.core.truth_(and__3546__auto____5292))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____5292;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____5293 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5293))
{return or__3548__auto____5293;
} else
{var or__3548__auto____5294 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____5294))
{return or__3548__auto____5294;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__5295.call(this,this$,service_name,fn);
case  4 :
return register_service__5296.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__5298 = null;
var G__5298__5299 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__5298__5300 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__5298__5301 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__5298__5302 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__5298 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__5298__5299.call(this,this$);
case  2 :
return G__5298__5300.call(this,this$,on_connect_fn);
case  3 :
return G__5298__5301.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__5298__5302.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5298;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__5304 = null;
var G__5304__5305 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__5304__5306 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__5304 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__5304__5305.call(this,this$,service_name,fn);
case  4 :
return G__5304__5306.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__5304;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__5317 = (function (){
var temp__3698__auto____5308 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____5308))
{var config__5309 = temp__3698__auto____5308;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__5309)));
} else
{return null;
}
});
var xpc_connection__5318 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__5310){
var vec__5311__5312 = p__5310;
var k__5313 = cljs.core.nth.call(null,vec__5311__5312,0,null);
var v__5314 = cljs.core.nth.call(null,vec__5311__5312,1,null);

var temp__3695__auto____5315 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__5313);

if(cljs.core.truth_(temp__3695__auto____5315))
{var field__5316 = temp__3695__auto____5315;

return cljs.core.assoc.call(null,sum,field__5316,v__5314);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__5317.call(this);
case  1 :
return xpc_connection__5318.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;

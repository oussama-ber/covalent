(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"6ut1":function(e,t,o){"use strict";o.r(t);var n=o("ofXK"),i=o("qeof"),c=o("tyNb"),a=o("fXoL"),r=o("MJ5V"),l=o("80CR"),s=o("bTqV");function d(e,t){1&e&&(a.Yb(0,"div"),a.Yb(1,"div",3),a.Qc(2," loading content... "),a.Xb(),a.Xb())}let b=(()=>{class e{constructor(e){this._loadingService=e,this.overlayStarSyntax=!1}toggleOverlayStarSyntax(){this.overlayStarSyntax=!this.overlayStarSyntax,this.overlayStarSyntax?this._loadingService.register("overlayStarSyntax"):this._loadingService.resolve("overlayStarSyntax")}}return e.\u0275fac=function(t){return new(t||e)(a.Tb(i.d))},e.\u0275cmp=a.Nb({type:e,selectors:[["loading-demo-basic"]],decls:4,vars:5,consts:[[4,"tdLoading","tdLoadingMode","tdLoadingType","tdLoadingStrategy","tdLoadingColor"],["layout","row"],["mat-raised-button","","color","primary",1,"text-upper",3,"click"],[1,"pad","text-center"]],template:function(e,t){1&e&&(a.Oc(0,d,3,0,"div",0),a.Yb(1,"div",1),a.Yb(2,"button",2),a.gc("click",(function(e){return t.toggleOverlayStarSyntax()})),a.Qc(3,"Toggle Loader"),a.Xb(),a.Xb()),2&e&&a.qc("tdLoading","overlayStarSyntax")("tdLoadingMode","indeterminate")("tdLoadingType","circle")("tdLoadingStrategy","overlay")("tdLoadingColor","accent")},directives:[l.a,s.b],styles:[""]}),e})();function u(e,t){1&e&&(a.Yb(0,"div",3),a.Qc(1," loading content... "),a.Xb())}let m=(()=>{class e{constructor(){this.loading=!1}toggle(){this.loading=!this.loading}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Nb({type:e,selectors:[["loading-demo-replace"]],decls:4,vars:1,consts:[["tdLoading","",3,"tdLoadingUntil"],["layout","row"],["mat-raised-button","","color","primary",1,"text-upper",3,"click"],[1,"pad","text-center"]],template:function(e,t){1&e&&(a.Oc(0,u,2,0,"ng-template",0),a.Yb(1,"div",1),a.Yb(2,"button",2),a.gc("click",(function(e){return t.toggle()})),a.Qc(3,"Toggle Loader"),a.Xb(),a.Xb()),2&e&&a.qc("tdLoadingUntil",!t.loading)},directives:[l.a,s.b],styles:[""]}),e})();var g=o("2Vo4");function v(e,t){if(1&e&&(a.Yb(0,"div"),a.Yb(1,"div",3),a.Qc(2),a.Xb(),a.Xb()),2&e){const e=t.$implicit;a.Fb(2),a.Sc(" ",e.name," ")}}let p=(()=>{class e{constructor(){this._subject=new g.a({name:"I am here!"}),this.observable$=this._subject.asObservable()}toggle(){this._subject=new g.a(void 0),this.observable$=this._subject.asObservable(),setTimeout(()=>{this._subject.next({name:"I am here!"})},1e3)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Nb({type:e,selectors:[["loading-demo-observable"]],decls:5,vars:3,consts:[[4,"tdLoading","tdLoadingUntil"],["layout","row"],["mat-raised-button","","color","primary",1,"text-upper",3,"click"],[1,"pad","text-center"]],template:function(e,t){1&e&&(a.Oc(0,v,3,1,"div",0),a.lc(1,"async"),a.Yb(2,"div",1),a.Yb(3,"button",2),a.gc("click",(function(e){return t.toggle()})),a.Qc(4,"Toggle Loader"),a.Xb(),a.Xb()),2&e&&a.qc("tdLoadingUntil",a.mc(1,1,t.observable$))},directives:[l.a,s.b],pipes:[n.b],styles:[""]}),e})(),f=(()=>{class e{constructor(e){this._loadingService=e,this._loadingService.create({name:"customFullscreenDemo",mode:i.b.Indeterminate,type:i.c.Linear,color:"accent"})}toggleDefaultFullscreenDemo(){this._loadingService.register(),setTimeout(()=>this._loadingService.resolve(),1500)}toggleCustomFullscreenDemo(){this._loadingService.register("customFullscreenDemo"),setTimeout(()=>this._loadingService.resolve("customFullscreenDemo"),1500)}}return e.\u0275fac=function(t){return new(t||e)(a.Tb(i.d))},e.\u0275cmp=a.Nb({type:e,selectors:[["loading-demo-fullscreen"]],decls:4,vars:0,consts:[["mat-raised-button","","color","primary",1,"text-upper",3,"click"]],template:function(e,t){1&e&&(a.Yb(0,"button",0),a.gc("click",(function(e){return t.toggleDefaultFullscreenDemo()})),a.Qc(1,"Toggle default fullscreen Loader"),a.Xb(),a.Yb(2,"button",0),a.gc("click",(function(e){return t.toggleCustomFullscreenDemo()})),a.Qc(3,"Toggle custom Fullscreen Loader"),a.Xb())},directives:[s.b],styles:["button[_ngcontent-%COMP%]{margin-right:1em}"]}),e})();var y=o("MutI"),h=o("FKr1"),L=o("NFeN"),S=o("f0Cb");function X(e,t){1&e&&(a.Yb(0,"mat-icon",1),a.Qc(1," settings_backup_restore "),a.Xb())}function F(e,t){1&e&&a.Ub(0,"mat-divider")}function Y(e,t){if(1&e&&(a.Yb(0,"mat-list-item"),a.Yb(1,"div",1),a.Oc(2,X,2,0,"ng-template",2),a.Xb(),a.Yb(3,"h3",3),a.Qc(4),a.Xb(),a.Xb(),a.Oc(5,F,1,0,"mat-divider",4)),2&e){const e=t.$implicit,o=t.last;a.Fb(2),a.qc("tdLoadingUntil",!e.value),a.Fb(2),a.Rc(e.label),a.Fb(1),a.qc("ngIf",!o)}}let T=(()=>{class e{constructor(){this.itemList=[{label:"Light",value:!0},{label:"Console",value:!1},{label:"T.V.",value:!0}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Nb({type:e,selectors:[["loading-demo-icon"]],decls:2,vars:1,consts:[["ngFor","",3,"ngForOf"],["matListAvatar",""],["tdLoading","","tdLoadingStrategy","overlay",3,"tdLoadingUntil"],["matLine",""],[4,"ngIf"]],template:function(e,t){1&e&&(a.Yb(0,"mat-list"),a.Oc(1,Y,6,3,"ng-template",0),a.Xb()),2&e&&(a.Fb(1),a.qc("ngForOf",t.itemList))},directives:[y.a,n.s,y.d,y.b,l.a,h.h,n.t,L.a,S.a],styles:[""]}),e})();const w=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Nb({type:e,selectors:[["loading-demo"]],decls:10,vars:10,consts:[[3,"demoId","demoTitle"]],template:function(e,t){1&e&&(a.Yb(0,"demo-component",0),a.Ub(1,"loading-demo-basic"),a.Xb(),a.Yb(2,"demo-component",0),a.Ub(3,"loading-demo-replace"),a.Xb(),a.Yb(4,"demo-component",0),a.Ub(5,"loading-demo-observable"),a.Xb(),a.Yb(6,"demo-component",0),a.Ub(7,"loading-demo-fullscreen"),a.Xb(),a.Yb(8,"demo-component",0),a.Ub(9,"loading-demo-icon"),a.Xb()),2&e&&(a.qc("demoId","loading-demo-basic")("demoTitle","Basic"),a.Fb(2),a.qc("demoId","loading-demo-replace")("demoTitle","Template Until Syntax"),a.Fb(2),a.qc("demoId","loading-demo-observable")("demoTitle","Until Syntax Using Observables"),a.Fb(2),a.qc("demoId","loading-demo-fullscreen")("demoTitle","Fullscreen"),a.Fb(2),a.qc("demoId","loading-demo-icon")("demoTitle","Icon"))},directives:[r.a,b,m,p,f,T],styles:[""]}),e})()}];let x=(()=>{class e{}return e.\u0275mod=a.Rb({type:e}),e.\u0275inj=a.Qb({factory:function(t){return new(t||e)},imports:[[c.f.forChild(w)],c.f]}),e})();var _=o("Krbs");o.d(t,"LoadingDemoModule",(function(){return U}));let U=(()=>{class e{}return e.\u0275mod=a.Rb({type:e}),e.\u0275inj=a.Qb({factory:function(t){return new(t||e)},imports:[[_.a,x,i.a,n.c,s.c,L.b,y.e]]}),e})()}}]);
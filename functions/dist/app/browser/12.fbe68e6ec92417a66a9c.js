(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{WBR6:function(t,e,i){"use strict";i.r(e),i.d(e,"ThanksPageModule",function(){return x});var n=i("ofXK"),a=i("3Pt+"),r=i("TEn/"),c=i("tyNb"),o=i("Jgta"),s=(i("Zs65"),i("fXoL")),d=i("tk/3");function b(t,e){if(1&t&&(s.Pb(0,"div",2),s.Pb(1,"div",3),s.Pb(2,"div",4),s.Pb(3,"div",5),s.Pb(4,"div",6),s.Pb(5,"div",7),s.Pb(6,"div",8),s.Nb(7,"ion-icon",9),s.Ob(),s.Ob(),s.Pb(8,"div",10),s.Pb(9,"h3",11),s.nc(10,"Thank You!"),s.Ob(),s.Pb(11,"h6",12),s.nc(12,"Your purchase was successful"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(13,"div",13),s.Pb(14,"div",14),s.Nb(15,"img",15),s.Ob(),s.Pb(16,"div",16),s.Pb(17,"div",17),s.nc(18," You can redeem the product at our outlet."),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob()),2&t){const t=s.Zb();s.Cb(15),s.fc("src",t.qr,s.kc)}}function p(t,e){1&t&&(s.Pb(0,"div",25),s.Pb(1,"span",26),s.nc(2,"*"),s.Ob(),s.nc(3," Instruction:"),s.Ob())}function l(t,e){if(1&t&&(s.Pb(0,"div",27),s.nc(1),s.Ob()),2&t){const t=s.Zb(2);s.Cb(1),s.pc(" - ",t.items.aftersale,"")}}function f(t,e){if(1&t&&(s.Pb(0,"div",2),s.Pb(1,"div",18),s.Pb(2,"div",4),s.Pb(3,"div",5),s.Pb(4,"div",6),s.Pb(5,"div",7),s.Pb(6,"div",8),s.Nb(7,"ion-icon",9),s.Ob(),s.Ob(),s.Pb(8,"div",10),s.Pb(9,"h3",11),s.nc(10,"Thank You!"),s.Ob(),s.Pb(11,"h6",19),s.nc(12,"Your purchase was successful"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(13,"div",20),s.Nb(14,"img",21),s.Pb(15,"div",22),s.nc(16," Merchant will shipout your product soon."),s.Ob(),s.mc(17,p,4,0,"div",23),s.mc(18,l,2,1,"div",24),s.Ob(),s.Ob(),s.Ob()),2&t){const t=s.Zb();s.Cb(17),s.ec("ngIf",t.items.aftersale),s.Cb(1),s.ec("ngIf",t.items.aftersale)}}function h(t,e){1&t&&(s.Pb(0,"div",28),s.Pb(1,"div",29),s.Pb(2,"div",4),s.Pb(3,"div",5),s.Pb(4,"div",6),s.Pb(5,"div",7),s.Pb(6,"div",30),s.Nb(7,"ion-icon",31),s.Ob(),s.Ob(),s.Pb(8,"div",10),s.Pb(9,"h3",11),s.nc(10,"Sorry!"),s.Ob(),s.Pb(11,"h6",19),s.nc(12,"Your purchase was unsuccessful"),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Ob(),s.Pb(13,"div",32),s.Nb(14,"img",21),s.Pb(15,"div",22),s.nc(16," You have cancelled your transaction."),s.Ob(),s.Ob(),s.Ob(),s.Ob())}const g=[{path:"",component:(()=>{class t{constructor(t,e){this.actRoute=t,this.http=e,this.addresser="false",this.items=[]}ngOnInit(){}ionViewDidEnter(){this.actRoute.queryParams.subscribe(t=>{this.id=t.items,this.paid=t["billplz[paid]"],this.addresser=t.addresser,this.address=t.address,this.name=t.name,this.contact=t.contact,this.email=t.email,this.userid=t.userid,this.vendor=t.vendor,console.log(this.id),o.a.database().ref("vouchers/"+this.id).once("value",t=>{this.items=t.val()}),"true"!=this.paid&&1!=this.paid||o.a.database().ref("users/"+this.userid).once("value",e=>{if(e.exists()&&e.val().fcm){let i={title:"Ticket sold!",body:"Ticket sold to "+t.name+"!",fcmkey:e.val().fcm,path:"",type:"",id:""};this.http.post("https://us-central1-newvsnap.cloudfunctions.net/nergigante/fcm",i).subscribe(t=>{console.log(t)},t=>{console.log(t)})}o.a.database().ref("vendors/"+this.vendor).once("value",e=>{if(e.exists()&&e.val().fcm){let i={title:"Ticket sold!",body:"Ticket sold to "+t.name+" by "+e.val().name+"!",fcmkey:e.val().fcm||"",path:"",type:"",id:""};this.http.post("https://us-central1-newvsnap.cloudfunctions.net/nergigante/fcm",i).subscribe(t=>{console.log(t)},t=>{console.log(t)})}})}),this.qr="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+t.order+",consumer"})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(c.a),s.Mb(d.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-thanks"]],decls:4,vars:3,consts:[["style","width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; background: rgba(0, 0, 0, .3); position: fixed; top: 0;",4,"ngIf"],["style","width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; background: rgba(0, 0, 0, .3); ",4,"ngIf"],[2,"width","100vw","height","100vh","display","flex","align-items","center","justify-content","center","background","rgba(0, 0, 0, .3)","position","fixed","top","0"],[2,"width","calc(100% - 40px)","max-width","300px","height","calc(100vh / 1.5)","max-height","500px"],[2,"width","100%","height","100px","background","#ffffff","border-radius","10px","background-image","radial-gradient(circle at left bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0), radial-gradient(circle at right bottom, rgba(0, 0, 0, 0.3) 15px, transparent 0)"],[2,"width","100%","height","100px","display","flex","flex-direction","column","align-items","center","justify-content","center"],[2,"width","calc(100% - 50px)","height","100px","display","flex","flex-direction","column","align-items","center","border-bottom","3px dashed #eeeeee","position","relative"],[2,"width","60px","height","60px","padding","5px","background-color","#ffffff","border-radius","100%","position","absolute","top","-30px"],[2,"width","100%","height","100%","display","flex","align-items","center","justify-content","center","background-color","#ff9900","border-radius","100%"],["name","checkmark",2,"font-size","45px","color","#ffffff"],[2,"display","flex","flex-direction","column","align-items","center","margin-top","30px"],[2,"font-weight","600","margin","0px 0px 3px 0px"],[2,"font-weight","600","color","#cccccc","margin","0"],[2,"margin-top","-1px","width","100%","display","flex","flex-direction","column","align-items","center","justify-content","center","padding","20px 0px","background","#ffffff","border-radius","10px","background-image","radial-gradient(circle at left top, rgba(0, 0, 0, 0.3) 15px, transparent 0), radial-gradient(circle at right top, rgba(0, 0, 0, 0.3) 15px, transparent 0)"],[2,"width","calc(100% - 50px)","max-width","300px","max-height","300px"],["alt","",2,"width","100%","height","100%","object-fit","contain",3,"src"],[2,"width","100%","display","flex","flex-direction","column","align-items","center","margin-top","10px"],[2,"width","calc(100% - 50px)","font-size","14px","font-weight","500","color","#cccccc","text-align","center"],[2,"width","calc(100% - 40px)","max-width","400px","height","calc(100vh / 1.5)","max-height","500px"],[2,"font-weight","600","color","#d7d7d7","margin","0"],[2,"margin-top","-1px","width","100%","background","#ffffff","border-radius","10px","background-image","radial-gradient(circle at left top, rgba(0, 0, 0, 0.3) 15px, transparent 0),\n          radial-gradient(circle at right top, rgba(0, 0, 0, 0.3) 15px, transparent 0)","padding","30px","text-align","center"],["src","assets/1.png",2,"width","100%"],[2,"font-size","14px","font-weight","500","color","#cccccc","text-align","center","margin-top","20px"],["style","margin-top: 30px; font-weight: 500; font-size: 12px;",4,"ngIf"],["style"," margin-top: 5px; font-weight: 500;",4,"ngIf"],[2,"margin-top","30px","font-weight","500","font-size","12px"],[2,"color","red"],[2,"margin-top","5px","font-weight","500"],[2,"width","100vw","height","100vh","display","flex","align-items","center","justify-content","center","background","rgba(0, 0, 0, .3)"],[2,"width","calc(100% - 40px)","max-width","400px"],[2,"width","100%","height","100%","display","flex","align-items","center","justify-content","center","background-color","#e05555","border-radius","100%"],["name","close",2,"font-size","45px","color","#ffffff"],[2,"margin-top","-1px","width","100%","background","#ffffff","border-radius","10px","background-image","radial-gradient(circle at left top, rgba(0, 0, 0, 0.3) 15px, transparent 0),\n          radial-gradient(circle at right top, rgba(0, 0, 0, 0.3) 15px, transparent 0)","padding","40px 30px"]],template:function(t,e){1&t&&(s.Pb(0,"ion-content"),s.mc(1,b,19,1,"div",0),s.mc(2,f,19,2,"div",0),s.mc(3,h,17,0,"div",1),s.Ob()),2&t&&(s.Cb(1),s.ec("ngIf","true"==e.paid&&"false"==e.addresser||1==e.paid&&"true"==e.addresser),s.Cb(1),s.ec("ngIf","true"==e.paid&&"true"==e.addresser||1==e.paid&&"false"==e.addresser),s.Cb(1),s.ec("ngIf","false"==e.paid||0==e.paid))},directives:[r.d,n.k,r.e],styles:[""]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({imports:[[c.i.forChild(g)],c.i]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({imports:[[n.b,a.a,r.n,u]]}),t})()}}]);
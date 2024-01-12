import{c as a,o as _,a as I,u as m,z as J,b as y,e,p as t,w as u,t as f,f as M,i as C,h as Q,k as X,l as ee,F as A,m as B}from"./index.d7552ef0.js";import{C as te,p as le,a as ae,b as ne,L as re,c as ie,d as se,P as oe,S as ue,W as b,_ as x,F as R,e as F,f as k}from"./WeightP.609187de.js";import{u as N,_ as o,g as D,m as de,i as me,p as $,P as z,n as ce,h as pe,o as we,a as fe}from"./calculatedData.b10f8472.js";import{p as ge}from"./performance.e94c5334.js";const _e={basic:{row:[["tailNumber",[!0,"Tail_Number",0]]]},weight:{row:[["emptyWeight",[!0,"weight","EM_Mass"],[!0,"arm","EM_Arm"],[!0,"moment","EM_Moment"]],["frontSeats",[!0,"weight","Front_Mass"],[!1,"arm","Front_Arm"],[!0,"moment","Front_Moment"]],["rearSeats",[!0,"weight","Rear_Mass"],[!1,"arm","Rear_Arm"],[!0,"moment","Rear_Moment"]],["stdBaggage",[!0,"weight","STD_Baggage_Mass"],[!1,"arm","STD_Baggage_Arm"],[!0,"moment","STD_Baggage_Moment"]],["shortExtension",[!0,"weight","Short_Ext_Baggage_Mass"],[!1,"arm","Short_Ext_Baggage_Arm"],[!0,"moment","Short_Ext_Baggage_Moment"]],["forwardBaggage",[!0,"weight","Ext_FWD_Baggage_Mass"],[!1,"arm","Ext_FWD_Baggage_Arm"],[!0,"moment","Ext_FWD_Baggage_Moment"]],["afterBaggage",[!0,"weight","Ext_AFT_Baggage_Mass"],[!1,"arm","Ext_AFT_Baggage_Arm"],[!0,"moment","Ext_AFT_Baggage_Moment"]],["zfw",[!0,"weight","ZF_Mass"],[!0,"cg","ZF_Arm"],[!0,"moment","ZF_Moment"]],["usableFuel",[!0,"weight","Fuel_Mass"],[!1,"arm","Fuel_Arm"],[!0,"moment","Fuel_Moment"]],["taxiFuel",[!1,"weight",0],[!1,"arm",0],[!1,"moment",0]],["tow",[!0,"weight","TO_Mass"],[!0,"cg","TO_Arm"],[!0,"moment","TO_Moment"]],["burnFuel",[!0,"weight","Fuel_Used_Mass"],[!1,"arm","Fuel_Used_Arm"],[!0,"moment","Fuel_Used_Moment"]],["ldw",[!0,"weight","LD_Mass"],[!0,"cg","LD_Arm"],[!0,"moment","LD_Moment"]]]},airspeed:{row:[["vr",[!0,"VR",0]],["v50",[!0,"V50",0]],["vyTO",[!0,"VY_TO",0]],["vy",[!0,"VY",0]],["vrefTO",[!0,"Vref_TOW",0]],["vrefLD",[!0,"Vref_LDW",0]],["vo",[!0,"VO",0]],["vsup",[!0,"VS_UP",0]],["vsto",[!0,"VS_TO",0]],["vsldg",[!0,"VS0",0]]]},performance:{row:[["takeoff",[!0,"Takeoff_Distance",0]],["takeoff50",[!0,"Takeoff_50_Distance",0]],["initailClimb",[!0,"Initial_Climb_Rate",0]],["cruiseClimb",[!0,"Cruise_Climb_Rate",0]],["landing",[!0,"Landing_Distance",0]],["landing50",[!0,"Landing_50_Distance",0]],["accelerateStop",[!0,"AccelerateStop",0]]]}},he={basic:[],body:[]};var be={da40ng:_e,navlog:he};const xe={__name:"WeightChart",props:{zfw:{type:Object,required:!0},tow:{type:Object,required:!0},ldw:{type:Object,required:!0},chartId:{type:String,default:"scatter-chart"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>({})},plugins:Array},setup(S){const r=S;te.register(le,ae,ne,re,ie,se,oe);const n=a(()=>({datasets:[{label:"ZFW",fill:!1,borderColor:"#f87979",backgroundColor:"#f87979",data:[{x:r.zfw.cg,y:r.zfw.weight}]},{label:"TOW",fill:!1,borderColor:"#f5b642",backgroundColor:"#f5b642",data:[{x:r.tow.cg,y:r.tow.weight}]},{label:"LDW",fill:!1,borderColor:"#32CD32",backgroundColor:"#32CD32",data:[{x:r.ldw.cg,y:r.ldw.weight}]},{label:"Normal",backgroundColor:"#000000",borderColor:"#000000",pointRadius:0,data:[{x:2.4,y:940},{x:2.4,y:1080},{x:2.47,y:1310},{x:2.53,y:1310},{x:2.53,y:940},{x:2.4,y:940}]}]})),p={responsive:!0,showLine:!0,maintainAspectRatio:!1,scales:{x:{position:"bottom",min:2.4,max:2.56},y:{position:"left",min:940,max:1320}}};return(s,i)=>(_(),I(m(ue),{"chart-options":p,"chart-data":m(n),"chart-id":r.chartId,plugins:r.plugins,"css-classes":r.cssClasses,style:J(r.styles)},null,8,["chart-data","chart-id","plugins","css-classes","style"]))}};let P={940:56,1e3:58,1100:61,1200:65,1280:67},j={940:62,1e3:65,1100:67,1200:70,1280:72},U={0:101,1080:101,1081:108,1180:108,1181:113,1280:113},W={940:66,1e3:68,1100:72,1200:76,1216:76,1280:77},q={1e3:58,1100:61,1200:64,1310:66},Y={1e3:54,1100:56,1200:60,1310:62},Z={1e3:55,1100:57,1200:59,1310:60};const ye={class:"border-collapse border-black border-2 table-fixed w-full"},Ve=e("thead",null,[e("tr",{class:"h-0"},[e("th",{class:"w-1/6"}),e("th",{class:"w-2/6"}),e("th",{class:"w-1/6"}),e("th",{class:"w-2/6"})]),e("tr",null,[e("th",{colspan:"4"},"V Speed")])],-1),Se=e("span",null,[M("V"),e("sub",null,"r")],-1),Fe=e("span",null,[M("V"),e("sub",null,"o")],-1),De=e("span",null,[M("V"),e("sub",null,"50")],-1),Me=e("span",null,[M("V"),e("sub",null,"S UP")],-1),Te=e("span",null,[M("V"),e("sub",null,"Y")],-1),Ce=e("span",null,[M("V"),e("sub",null,"S T/O")],-1),ve=e("span",null,[M("V"),e("sub",null,"REF")],-1),Ae=e("span",null,[M("V"),e("sub",null,"S0")],-1),ke={__name:"Airspeed",props:{tow:{type:b,required:!0},ldw:{type:b,required:!0}},setup(S){const r=S,n=N();function p(s,i,w){return s[0]==NaN||s[1]==NaN?NaN:s[0]==s[1]&&s[1]!=NaN?i[s[0]]:de(me(s[0],i[s[0]],s[1],i[s[1]],w))}return n.airspeed.vo=a(()=>{let s=D(U,r.ldw.weight);return s[0]==NaN?NaN:s[1]==NaN?U[s[1]]:(s[0]==s[1]!=NaN,U[s[0]])}),n.airspeed.vr=a(()=>p(D(P,r.tow.weight),P,r.tow.weight)),n.airspeed.v50=a(()=>p(D(j,r.tow.weight),j,r.tow.weight)),n.airspeed.vsup=a(()=>p(D(q,r.tow.weight),q,r.tow.weight)),n.airspeed.vsto=a(()=>p(D(Y,r.tow.weight),Y,r.tow.weight)),n.airspeed.vsldg=a(()=>p(D(Z,r.tow.weight),Z,r.tow.weight)),n.airspeed.vrefTO=a(()=>p(D(W,r.tow.weight),W,r.tow.weight)),n.airspeed.vrefLD=a(()=>p(D(W,r.ldw.weight),W,r.ldw.weight)),n.airspeed.vy=88,n.airspeed.vyTO=72,(s,i)=>(_(),y("table",ye,[Ve,e("tbody",null,[e("tr",null,[t(o,null,{default:u(()=>[Se]),_:1}),t(o,null,{default:u(()=>[e("span",null,f(m(n).airspeed.vr),1)]),_:1}),t(o,null,{default:u(()=>[Fe]),_:1}),t(o,null,{default:u(()=>[e("span",null,f(m(n).airspeed.vo),1)]),_:1})]),e("tr",null,[t(o,null,{default:u(()=>[De]),_:1}),t(o,null,{default:u(()=>[e("span",null,f(m(n).airspeed.v50),1)]),_:1}),t(o,null,{default:u(()=>[Me]),_:1}),t(o,null,{default:u(()=>[e("span",null,f(m(n).airspeed.vsup),1)]),_:1})]),e("tr",null,[t(o,null,{default:u(()=>[Te]),_:1}),t(o,null,{default:u(()=>[e("span",null,f(m(n).airspeed.vyTO)+" | "+f(m(n).airspeed.vy),1)]),_:1}),t(o,null,{default:u(()=>[Ce]),_:1}),t(o,null,{default:u(()=>[e("span",null,f(m(n).airspeed.vsto),1)]),_:1})]),e("tr",null,[t(o,null,{default:u(()=>[ve]),_:1}),t(o,null,{default:u(()=>[e("span",null,f(m(n).airspeed.vrefTO)+" - "+f(m(n).airspeed.vrefLD),1)]),_:1}),t(o,null,{default:u(()=>[Ae]),_:1}),t(o,null,{default:u(()=>[e("span",null,f(m(n).airspeed.vsldg),1)]),_:1})])])]))}},Be={class:"border-collapse border-black border-2 table-fixed w-full"},$e=e("span",null,"Init. CLB Rate",-1),Ue=e("span",null,"CRZ CLB Rate",-1),We=e("span",null,"Ft'/Min",-1),Ne=e("span",null,"LDG Distance",-1),Oe=e("span",null,"Meter",-1),Ee=e("span",null,"Acc-Stop",-1),Le=e("span",null,"Meter",-1),Re={__name:"Performance",props:{tow:{type:b,required:!0},ldw:{type:b,required:!0}},setup(S){const r=S,n=new N,p=C({tow:a(()=>r.tow.weight<=1100?1100:r.tow.weight),ldw:a(()=>r.ldw.weight<=1100?1100:r.ldw.weight)});a(()=>r.tow.weight<=1100?1100:r.tow.weight),a(()=>r.ldw.weight<=1100?1100:r.ldw.weight);const s=a(()=>ge),i=C({temperature:15,runwayIdent:"04",windDirection:40,windSpeed:10}),w=C({initialTemperature:11,initialAltitude:2e3,cruiseClimbTemperature:-1,cruiseClimbAltitude:8e3}),c=C({temperature:15,runwayIdent:"04",windDirection:40,windSpeed:10});return n.performance={takeoff:new $(a(()=>i.temperature),0,a(()=>p.tow),s.value.TODistance,a(()=>i.runwayIdent),a(()=>i.windDirection),a(()=>i.windSpeed)),takeoff50:new $(a(()=>i.temperature),0,a(()=>p.tow),s.value.TO50Distance,a(()=>i.runwayIdent),a(()=>i.windDirection),a(()=>i.windSpeed)),initailClimb:new z(a(()=>w.initialTemperature),a(()=>w.initialAltitude),a(()=>p.tow),s.value.InitialClimbRate),cruiseClimb:new z(a(()=>w.cruiseClimbTemperature),a(()=>w.cruiseClimbAltitude),a(()=>p.tow),s.value.CruiseClimbRate),landing:new $(a(()=>c.temperature),0,a(()=>p.ldw),s.value.LDGDistance,a(()=>c.runwayIdent),a(()=>c.windDirection),a(()=>c.windSpeed)),landing50:new $(a(()=>c.temperature),0,a(()=>p.ldw),s.value.LDG50Distance,a(()=>c.runwayIdent),a(()=>c.windDirection),a(()=>c.windSpeed)),accelerateStop:a(()=>n.performance.takeoff.distance+n.performance.landing.distance+70)},a(()=>Takeoff.distance+Landing.distance+70),(h,l)=>(_(),y("table",Be,[e("tbody",null,[e("tr",null,[t(o,{class:"w-2/12 text-right pr-2",text:"T/O Distance"}),t(o,{class:"w-2/12"},{default:u(()=>[e("span",null,f(m(n).performance.takeoff.distance)+"|"+f(m(n).performance.takeoff50.distance),1)]),_:1}),t(o,{class:"w-1/12",text:"Meters"}),t(o,{class:"flex flex-row"},{default:u(()=>[t(x,{modelValue:i.temperature,"onUpdate:modelValue":l[0]||(l[0]=d=>i.temperature=d),modelModifiers:{number:!0},"input-label":"Temp."},null,8,["modelValue"]),t(x,{modelValue:i.runwayIdent,"onUpdate:modelValue":l[1]||(l[1]=d=>i.runwayIdent=d),"input-label":"RWY"},null,8,["modelValue"]),t(x,{modelValue:i.windDirection,"onUpdate:modelValue":l[2]||(l[2]=d=>i.windDirection=d),"input-label":"W. Dir"},null,8,["modelValue"]),t(x,{modelValue:i.windSpeed,"onUpdate:modelValue":l[3]||(l[3]=d=>i.windSpeed=d),modelModifiers:{number:!0},"input-label":"W. Spd"},null,8,["modelValue"])]),_:1})]),e("tr",null,[t(o,{class:"w-2/12 text-right pr-2"},{default:u(()=>[$e]),_:1}),t(o,{class:"w-2/12"},{default:u(()=>[e("span",null,f(m(n).performance.initailClimb.rate),1)]),_:1}),t(o,{class:"w-1/12",text:"Ft'/Min"}),t(o,{class:"flex flex-row"},{default:u(()=>[t(x,{modelValue:w.initialTemperature,"onUpdate:modelValue":l[4]||(l[4]=d=>w.initialTemperature=d),modelModifiers:{number:!0},"input-label":"Temp."},null,8,["modelValue"]),t(x,{modelValue:w.initialAltitude,"onUpdate:modelValue":l[5]||(l[5]=d=>w.initialAltitude=d),modelModifiers:{number:!0},"input-label":"Alt."},null,8,["modelValue"])]),_:1})]),e("tr",null,[t(o,{class:"w-2/12 text-right pr-2"},{default:u(()=>[Ue]),_:1}),t(o,{class:"w-2/12"},{default:u(()=>[e("span",null,f(m(n).performance.cruiseClimb.rate),1)]),_:1}),t(o,{class:"w-1/12"},{default:u(()=>[We]),_:1}),t(o,{class:"flex flex-row"},{default:u(()=>[t(x,{modelValue:w.cruiseClimbTemperature,"onUpdate:modelValue":l[6]||(l[6]=d=>w.cruiseClimbTemperature=d),modelModifiers:{number:!0},"input-label":"Temp."},null,8,["modelValue"]),t(x,{modelValue:w.cruiseClimbAltitude,"onUpdate:modelValue":l[7]||(l[7]=d=>w.cruiseClimbAltitude=d),"input-label":"Alt"},null,8,["modelValue"])]),_:1})]),e("tr",null,[t(o,{class:"w-2/12 text-right pr-2"},{default:u(()=>[Ne]),_:1}),t(o,{class:"w-2/12"},{default:u(()=>[e("span",null,f(m(n).performance.landing.distance)+"|"+f(m(n).performance.landing50.distance),1)]),_:1}),t(o,{class:"w-1/12"},{default:u(()=>[Oe]),_:1}),t(o,{class:"flex flex-row"},{default:u(()=>[t(x,{modelValue:c.temperature,"onUpdate:modelValue":l[8]||(l[8]=d=>c.temperature=d),modelModifiers:{number:!0},"input-label":"Temp."},null,8,["modelValue"]),t(x,{modelValue:c.runwayIdent,"onUpdate:modelValue":l[9]||(l[9]=d=>c.runwayIdent=d),"input-label":"RWY"},null,8,["modelValue"]),t(x,{modelValue:c.windDirection,"onUpdate:modelValue":l[10]||(l[10]=d=>c.windDirection=d),"input-label":"W. Dir"},null,8,["modelValue"]),t(x,{modelValue:c.windSpeed,"onUpdate:modelValue":l[11]||(l[11]=d=>c.windSpeed=d),modelModifiers:{number:!0},"input-label":"W. Spd"},null,8,["modelValue"])]),_:1})]),e("tr",null,[t(o,{class:"w-2/12 text-right pr-2"},{default:u(()=>[Ee]),_:1}),t(o,{class:"w-2/12"},{default:u(()=>[e("span",null,f(m(n).performance.accelerateStop),1)]),_:1}),t(o,{class:"w-1/12"},{default:u(()=>[Le]),_:1}),t(o,{class:""})])])]))}},Ie={__name:"ExportButton",props:{aircraftType:{type:String,default:"da40ng",required:!0},weight:{type:Object,required:!0}},setup(S){const r=S,n=N();let p={...r.weight,...n.weight};const s="/DA40NG_Form.pdf";async function i(){const w=await fetch(s).then(v=>v.arrayBuffer()),c=await ce.load(w),h=c.getForm();let l=be[r.aircraftType];l.basic.row.forEach(function(g,O){if(g[1][0])try{h.getTextField(g[1][1]).setText(n.airspeed[g[0]].toString())}catch{}}),l.weight.row.forEach(function(g,O){let T=p[g[0]];for(let E=1;E<g.length;E++){let L=g[E];if(!!L[0])try{h.getTextField(L[2]).setText(T[L[1]].toString())}catch{}}}),l.airspeed.row.forEach(function(g,O){if(g[1][0])try{h.getTextField(g[1][1]).setText(n.airspeed[g[0]].toString())}catch{}}),l.performance.row.forEach(function(g,O){if(g[1][0])try{h.getTextField(g[1][1]).setText(n.performance[g[0]].toString())}catch{}});const G=await c.save();let K=pe().format("YYYYMMDDhhmmss");we(G,`${K}-WB-DA40NG.pdf`,"application/pdf")}return(w,c)=>(_(),y("button",{class:"border rounded-sm border-black bg-gray-200",onClick:i}," Export "))}},ze={class:"h-8 border-2 border-black flex flex-row"},Pe={class:"flex-initial my-auto pl-4"},je=e("span",{class:""},"Tail Number:",-1),qe=["value"],Ye={class:"flex-initial my-auto px-4"},Ze={class:"flex-initial my-auto px-4"},Ge={class:"flex-initial my-auto justify-self-end"},Ke={class:"grid md:grid-cols-2 gap-4 grid-cols-1 pt-2"},He={class:"table-fixed border-black border-2 h-full"},Je=e("thead",null,[e("tr",null,[e("th",{class:"w-32"}),e("th",{class:"w-24"},"Mass (Kg)"),e("th",{class:"w-32"},"Lever arm (m)"),e("th",{class:"w-32"},"Moment (kg/m)")])],-1),Qe={class:"pt-2 flex flex-row"},Xe={class:"basis-4/6"},et={class:"basis-2/6"},st={__name:"Weight1",setup(S){const r=Q("B-88001"),n=a(()=>w.find(h=>h.isSameIdent(r.value))),p=C({emptyWeight:new b("Empty Weihgt",a(()=>n.value.weight),a(()=>n.value.arm),a(()=>n.value.moment)),frontSeats:new b("Front Seats",160,2.3),rearSeats:new b("Rear Seats",0,3.25),stdBaggage:new b("Std. Baggage",0,3.65),shortExtension:new b("Short Extension",0,3.97),forwardBaggage:new b("FWD Baggage",0,3.89),afterBaggage:new b("AFT Baggage",0,4.54)}),s=C({usableFuel:new R("Fuel Carried",0,a(()=>n.value.fuel[0]),2.63),taxiFuel:new R("Taxi Fuel   -",0,.64,2.63),burnFuel:new R("Trip Fuel Used   -",0,29.1,2.63)}),i=N(),w=fe.filter(c=>c.isDA40);return i.weight={zfw:new b("ZFW",a(()=>Object.values(p).reduce((c,h)=>c+h.weight,0)),0,a(()=>Object.values(p).reduce((c,h)=>c+h.moment,0))),tow:new b("TOW",a(()=>i.weight.zfw.weight+s.usableFuel.weight-s.taxiFuel.weight),0,a(()=>i.weight.zfw.moment+s.usableFuel.moment-s.taxiFuel.moment)),ldw:new b("LDW",a(()=>i.weight.tow.weight-s.burnFuel.weight),0,a(()=>i.weight.tow.moment-s.burnFuel.moment))},i.basic.aircraftIndex=a(()=>r.value),(c,h)=>(_(),y(A,null,[e("div",ze,[e("div",Pe,[je,X(e("select",{id:"aircraft-ident","onUpdate:modelValue":h[0]||(h[0]=l=>r.value=l)},[(_(!0),y(A,null,B(m(w),l=>(_(),y("option",{key:l.ident,value:l.ident},f(l.ident),9,qe))),128))],512),[[ee,r.value]])]),e("div",Ye,[e("span",null,"Fuel Tank: "+f(m(n).fuel[1]),1)]),e("div",Ze,[e("span",null,"Baggage: "+f(m(n).baggage[0]),1)]),e("div",Ge,[t(Ie,{"aircraft-type":"da40ng",weight:{...p,...s}},null,8,["weight"])])]),e("div",Ke,[e("div",null,[e("table",He,[Je,e("tbody",null,[(_(!0),y(A,null,B(p,(l,d)=>(_(),y("tr",{key:d,class:"h-1"},[e("td",null,[t(F,{text:l.label,class:"font-bold"},null,8,["text"])]),e("td",null,[t(k,{modelValue:l.weight,"onUpdate:modelValue":V=>l.weight=V,modelModifiers:{number:!0},"input-id":`${l.label}-weight`,"with-label":!1},null,8,["modelValue","onUpdate:modelValue","input-id"])]),e("td",null,[t(k,{modelValue:l.arm,"onUpdate:modelValue":V=>l.arm=V,modelModifiers:{number:!0},"input-id":`${l.label}-weight`,"with-label":!1},null,8,["modelValue","onUpdate:modelValue","input-id"])]),e("td",null,[d=="emptyWeight"?(_(),I(k,{key:0,modelValue:l.moment,"onUpdate:modelValue":V=>l.moment=V,modelModifiers:{number:!0},"input-id":`${l.label}-moment`,"with-label":!1},null,8,["modelValue","onUpdate:modelValue","input-id"])):(_(),I(F,{key:1,text:l.moment},null,8,["text"]))])]))),128)),(_(!0),y(A,null,B(s,(l,d)=>(_(),y("tr",{key:d,class:"h-1"},[e("td",null,[t(F,{text:l.label,class:"font-bold"},null,8,["text"])]),e("td",null,[t(k,{modelValue:l.weight,"onUpdate:modelValue":V=>l.weight=V,modelModifiers:{number:!0},"input-id":`${l.label}-weight`,"with-label":!1},null,8,["modelValue","onUpdate:modelValue","input-id"])]),e("td",null,[t(k,{modelValue:l.arm,"onUpdate:modelValue":V=>l.arm=V,modelModifiers:{number:!0},"input-id":`${l.label}-arm`,"with-label":!1},null,8,["modelValue","onUpdate:modelValue","input-id"])]),e("td",null,[t(F,{text:l.moment},null,8,["text"])])]))),128)),(_(!0),y(A,null,B(m(i).weight,(l,d)=>(_(),y("tr",{key:d,class:"h-1"},[e("td",null,[t(F,{text:l.label,class:"font-bold"},null,8,["text"])]),e("td",null,[t(F,{text:l.weight},null,8,["text"])]),e("td",null,[t(F,{text:l.cg},null,8,["text"])]),e("td",null,[t(F,{text:l.moment},null,8,["text"])])]))),128))])])]),t(xe,{zfw:m(i).weight.zfw,tow:m(i).weight.tow,ldw:m(i).weight.ldw,"dataset-id-key":"weight","css-classes":"h-full"},null,8,["zfw","tow","ldw"])]),e("div",Qe,[e("div",Xe,[t(Re,{tow:m(i).weight.tow,ldw:m(i).weight.ldw},null,8,["tow","ldw"])]),e("div",et,[t(ke,{tow:m(i).weight.tow,ldw:m(i).weight.ldw},null,8,["tow","ldw"])])])],64))}};export{st as default};

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"+pnj":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,a=e["export"],o=Object(r["useApiData"])(t),i=Object(n["useContext"])(r["context"]),d=i.locale,m=/^zh|cn$/i.test(d)?c["zh-CN"]:c["en-US"];return l.a.createElement(l.a.Fragment,null,o&&l.a.createElement("table",{style:{marginTop:24}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,m.name),l.a.createElement("th",null,m.description),l.a.createElement("th",null,m.type),l.a.createElement("th",null,m["default"]))),l.a.createElement("tbody",null,o[a].map((function(e){return l.a.createElement("tr",{key:e.identifier},l.a.createElement("td",null,e.identifier),l.a.createElement("td",null,e.description||"--"),l.a.createElement("td",null,l.a.createElement("code",null,e.type)),l.a.createElement("td",null,l.a.createElement("code",null,e["default"]||e.required&&m.required||"--")))})))))}},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},oTdM:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("Zxc8"),o=a("H1Ra"),i=a("+pnj"),d=a("Rsk4"),m=l.a.memo(d["default"]["Button-demo"].component),u=l.a.memo(d["default"]["Button-demo-1"].component),s=l.a.memo(d["default"]["Button-demo-2"].component),E=l.a.memo(d["default"]["Button-demo-3"].component),p=l.a.memo(d["default"]["Button-demo-4"].component);t["default"]=e=>(l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"button"},l.a.createElement(r["AnchorLink"],{to:"#button","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Button"),l.a.createElement(o["a"],{code:"import { Button } from '@webapp-suite/elements-react';",lang:"js"}),l.a.createElement("h2",{id:"default"},l.a.createElement(r["AnchorLink"],{to:"#default","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Default")),l.a.createElement(c["default"],d["default"]["Button-demo"].previewerProps,l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"type"},l.a.createElement(r["AnchorLink"],{to:"#type","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Type"),l.a.createElement("p",null,"The ",l.a.createElement("code",null,"default")," and ",l.a.createElement("code",null,"primary")," buttons are used in most cases, you can also use other types in specific scenarios.")),l.a.createElement(c["default"],d["default"]["Button-demo-1"].previewerProps,l.a.createElement(u,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"size"},l.a.createElement(r["AnchorLink"],{to:"#size","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Size"),l.a.createElement("p",null,"Besides default ",l.a.createElement("code",null,"md")," size, Button component provides three additional sizes for you to choose among different scenarios.")),l.a.createElement(c["default"],d["default"]["Button-demo-2"].previewerProps,l.a.createElement(s,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"click"},l.a.createElement(r["AnchorLink"],{to:"#click","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Click"),l.a.createElement("p",null,"Bind the click event on the Button.")),l.a.createElement(c["default"],d["default"]["Button-demo-3"].previewerProps,l.a.createElement(E,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"disabled"},l.a.createElement(r["AnchorLink"],{to:"#disabled","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Disabled"),l.a.createElement("p",null,"Determine if the button is disabled. ",l.a.createElement("code",null,"onClick")," event won't be dispatched.")),l.a.createElement(c["default"],d["default"]["Button-demo-4"].previewerProps,l.a.createElement(p,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(i["a"],{identifier:"Button",export:"default"})))))}}]);
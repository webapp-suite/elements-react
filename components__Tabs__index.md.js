(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"+pnj":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("dEAq"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};a["a"]=function(e){var a=e.identifier,t=e["export"],i=Object(r["useApiData"])(a),d=Object(n["useContext"])(r["context"]),o=d.locale,m=/^zh|cn$/i.test(o)?c["zh-CN"]:c["en-US"];return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement("table",{style:{marginTop:24}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,m.name),l.a.createElement("th",null,m.description),l.a.createElement("th",null,m.type),l.a.createElement("th",null,m["default"]))),l.a.createElement("tbody",null,i[t].map((function(e){return l.a.createElement("tr",{key:e.identifier},l.a.createElement("td",null,e.identifier),l.a.createElement("td",null,e.description||"--"),l.a.createElement("td",null,l.a.createElement("code",null,e.type)),l.a.createElement("td",null,l.a.createElement("code",null,e["default"]||e.required&&m.required||"--")))})))))}},"9kvl":function(e,a,t){"use strict";var n=t("FfOG");t.d(a,"a",(function(){return n["b"]}));t("bCY9")},rO1w:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("dEAq"),c=t("Zxc8"),i=t("H1Ra"),d=t("+pnj"),o=t("Rsk4"),m=l.a.memo(o["default"]["Tabs-demo"].component);a["default"]=e=>(l.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"tabs"},l.a.createElement(r["AnchorLink"],{to:"#tabs","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Tabs"),l.a.createElement(i["a"],{code:"import { Tabs, Tab } from '@webapp-suite/elements-react';",lang:"js"}),l.a.createElement("h2",{id:"basic"},l.a.createElement(r["AnchorLink"],{to:"#basic","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Basic")),l.a.createElement(c["default"],o["default"]["Tabs-demo"].previewerProps,l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement("h3",{id:"tabs-1"},l.a.createElement(r["AnchorLink"],{to:"#tabs-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Tabs"),l.a.createElement(d["a"],{hidetitle:"",identifier:"Tabs",export:"default"}),l.a.createElement("h3",{id:"tab"},l.a.createElement(r["AnchorLink"],{to:"#tab","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Tab"),l.a.createElement(d["a"],{src:"../Tab/index.tsx",hidetitle:"",identifier:"Tab",export:"default"})))))}}]);
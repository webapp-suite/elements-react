(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"+pnj":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,a=e["export"],i=Object(r["useApiData"])(t),d=Object(n["useContext"])(r["context"]),o=d.locale,u=/^zh|cn$/i.test(o)?c["zh-CN"]:c["en-US"];return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement("table",{style:{marginTop:24}},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,u.name),l.a.createElement("th",null,u.description),l.a.createElement("th",null,u.type),l.a.createElement("th",null,u["default"]))),l.a.createElement("tbody",null,i[a].map((function(e){return l.a.createElement("tr",{key:e.identifier},l.a.createElement("td",null,e.identifier),l.a.createElement("td",null,e.description||"--"),l.a.createElement("td",null,l.a.createElement("code",null,e.type)),l.a.createElement("td",null,l.a.createElement("code",null,e["default"]||e.required&&u.required||"--")))})))))}},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},HqbM:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("Zxc8"),i=a("+pnj"),d=a("Rsk4"),o=l.a.memo(d["default"]["Aside-demo"].component);t["default"]=e=>(l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"aside"},l.a.createElement(r["AnchorLink"],{to:"#aside","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Aside"),l.a.createElement("h2",{id:"default"},l.a.createElement(r["AnchorLink"],{to:"#default","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Default")),l.a.createElement(c["default"],d["default"]["Aside-demo"].previewerProps,l.a.createElement(o,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"api"},l.a.createElement(r["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"API"),l.a.createElement(i["a"],{identifier:"Aside",export:"default"})))))}}]);
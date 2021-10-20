(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[17,1],{"/7QA":function(e,t,i){"use strict";i.r(t),i.d(t,"Root",(function(){return s})),i.d(t,"Button",(function(){return I})),i.d(t,"Icon",(function(){return x})),i.d(t,"Tooltip",(function(){return M})),i.d(t,"Header",(function(){return F})),i.d(t,"Modal",(function(){return Z})),i.d(t,"Aside",(function(){return ie})),i.d(t,"Dialog",(function(){return se})),i.d(t,"Space",(function(){return de})),i.d(t,"Tab",(function(){return pe})),i.d(t,"Tabs",(function(){return he}));var n,o=i("q1tI"),r=i.n(o),a=(i("w/Yt"),e=>r.a.createElement("ts-root",null,e.children)),s=a,l=(i("bs0R"),i("wx14")),d=i("ODXe"),c=i("VTBJ"),p=i("Ff2n"),u={include:[/^ui5-/],exclude:[]},h=new Map,f=()=>n,m=e=>{if(!h.has(e)){var t=u.include.some((t=>e.match(t)))&&!u.exclude.some((t=>e.match(t)));h.set(e,t)}return h.get(e)},y=e=>{if(m(e))return f()},b=e=>{var t=Object(o["useRef"])(null),i=Object(o["useMemo"])((()=>e&&"function"!==typeof e?e:t),[e]);return Object(o["useEffect"])((()=>{"function"===typeof e&&e(i.current)}),[i.current]),i},v=i("Esv4"),E=e=>e===Object(e),g=e=>!!e&&"object"===typeof e&&e.constructor===Object,w=e=>e.charAt(0).toUpperCase()+e.slice(1),C=e=>e.replace(/([A-Z])/g,((e,t)=>"-".concat(t.toLowerCase()))),S=e=>e.replace(/([A-Z])/g,((e,t)=>"_".concat(t.toLowerCase()))),O=e=>e.replace(/([-_]\w)/g,(e=>e[1].toUpperCase())),A=(e,t)=>Array.isArray(e)?e.map((e=>A(e,t))):g(e)?Object.keys(e).reduce(((i,n)=>{if(!n)return i;var o=e[n];return Object(c["a"])(Object(c["a"])({},i),{},{[t(n)]:A(o,t)})}),{}):e,R=v["constants"].colors,j=v["constants"].colorModifiers,D={DEFAULT:"default",INVERTED:"inverted",PRIMARY:"primary",DANGER:"danger",ERROR:"error",SUCCESS:"success",ACTIVE:"active",INFO:"info",FOCUS:"focus",WARNING:"warning",DISABLED:"disabled",DISABLED_CHECKED:"disabled-checked",SUGGESTED:"suggested",SLATE_LIGHTEST:"slate-lightest",GRAY_DARKER:"gray-darker",ACTION:"action"},N={SMALL:"small",MEDIUM:"medium",LARGE:"large",EXTRA_LARGE:"extra-large"},T=(D.DEFAULT,R.SLATE,D.INVERTED,R.WHITE,D.DANGER,R.RED,D.ERROR,R.RED,D.SUCCESS,R.GREEN,D.PRIMARY,R.BLUE,D.ACTIVE,R.BLUE,D.INFO,R.BLUE,D.FOCUS,R.BLUE,D.WARNING,R.ORANGE,D.DISABLED,R.GRAY,j.LIGHTER,D.SUGGESTED,R.PURPLE,D.DISABLED_CHECKED,R.GRAY,j.LIGHT,D.SLATE_LIGHTEST,R.SLATE,j.LIGHTEST,D.GRAY_DARKER,R.GRAY,j.DARKER,D.ACTION,R.GRAY,e=>"on".concat(w(O(e)))),U=(e,t,i,n,a,s)=>{var u=Object(o["forwardRef"])(((u,h)=>{var f=u.className,m=(u.tooltip,u.children),v=Object(p["a"])(u,["className","tooltip","children"]),g=b(h),w=Object(o["useRef"])({}),O=t.reduce(((e,t)=>{var i;return v.hasOwnProperty(t)?Object(c["a"])(Object(c["a"])({},e),{},{[null!==(i=s[t])&&void 0!==i?i:C(t)]:E(v[t])?JSON.stringify(A(v[t],S)):v[t]}):e}),{}),R=i.reduce(((e,t)=>{var i;return!0===v[t]||"true"===v[t]?Object(c["a"])(Object(c["a"])({},e),{},{[null!==(i=s[t])&&void 0!==i?i:C(t)]:!0}):e}),{}),j=n.reduce(((e,t)=>{var i=v[t];if(!i)return e;var n=[],a=0,s=e=>{var i;e&&(e.type===r.a.Fragment?o["Children"].toArray(null===(i=e.props)||void 0===i?void 0:i.children).filter(Boolean).forEach((e=>{s(e)})):(n.push(Object(o["cloneElement"])(e,{key:"".concat(t,"-").concat(a),slot:t})),a++))};return Array.isArray(i)?i.forEach((e=>{s(e)})):s(i),[...e,...n]}),[]);Object(o["useEffect"])((()=>(a.forEach((e=>{var t,i,n=v[T(e)];"function"===typeof n&&(w.current[e]=n,null===(t=g.current)||void 0===t||t.addEventListener(null!==(i=s[e])&&void 0!==i?i:e,w.current[e]))})),()=>{for(var e in w.current){var t,i;null===(t=g.current)||void 0===t||t.removeEventListener(null!==(i=s[e])&&void 0!==i?i:e,w.current[e])}})),a.map((e=>v[T(e)])));var D=Object.entries(v).filter((e=>{var i=Object(d["default"])(e,1),n=i[0];return!t.includes(n)})).filter((e=>{var t=Object(d["default"])(e,1),i=t[0];return!n.includes(i)})).filter((e=>{var t=Object(d["default"])(e,1),n=t[0];return!i.includes(n)})).filter((e=>{var t=Object(d["default"])(e,1),i=t[0];return!a.map((e=>T(e))).includes(i)})).reduce(((e,t)=>{var i=Object(d["default"])(t,2),n=i[0],o=i[1];return Object(c["a"])(Object(c["a"])({},e),{},{[n]:o})}),{}),N=y(e),U=N?"".concat(e,"-").concat(N):e;return r.a.createElement(U,Object(l["a"])({ref:g},R,O,D,{class:f}),j,m)}));return u.displayName="WithWebComponent(".concat(e,")"),u},k=U("ts-button",["type","size","dir","icon"],["busy","disabled","grouped","focused"],["default"],["click"],{click:"button-click"});k.displayName="Button",k.defaultProps={type:"secondary",busy:!1,dir:"ltr",disabled:!1,grouped:!1,focused:!1};var I=k,L=(i("cvOl"),U("ts-icon",["icon","size","type","rotate","flip"],["circular"],[],[],{}));L.defaultProps={size:N.MEDIUM,type:D.DEFAULT,circular:!1};var x=L,B=(i("dBmI"),i("hNQ9")),P=Object(B["a"])("ts-tooltip",{className:"class"}),M=P,G=(i("e22/"),U("ts-header",["dir","color","icon","title"],[],[],[],{}));G.displayName="Header",G.defaultProps={dir:"ltr",color:"white"};var H,F=G,z=i("h4VS"),K=(i("Hz3o"),i("i8i4")),Y=i.n(K),W=i("vOnD"),_=W["a"].div(H||(H=Object(z["a"])(["\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    box-sizing: border-box;\n    background-color: #eff3f5;\n    height: 60px;\n    border-top: 1px solid rgb(203, 215, 220);\n    > ts-button {\n        margin-right: 10px;\n    }\n"])));class q extends r.a.Component{constructor(e){super(e),this.container=void 0,this.container=document.createElement("div")}componentDidUpdate(e){!e.visible&&this.props.visible&&(document.body.appendChild(this.container),document.body.setAttribute("style","width: 100%;height: 100%;position: fixed;overflow: hidden;")),e.visible&&!this.props.visible&&(document.body.removeChild(this.container),document.body.removeAttribute("style"))}componentWillUnmount(){document.body.contains(this.container)&&(document.body.removeChild(this.container),document.body.removeAttribute("style"))}render(){return Object(K["createPortal"])(r.a.createElement(J,this.props,this.props.children),this.container)}}q.defaultProps=void 0;var J=U("ts-modal",["title","dir","size","width"],["visible","noCloseOnEscKey","hideHeader","noPadding"],["note","main","footer"],["opened","closed","open","close"],{title:"data-title",width:"data-width",dir:"data-dir",size:"data-size",visible:"data-visible"}),V=e=>e.appendOnBody?r.a.createElement(q,e):r.a.createElement(J,e);V.defaultProps={visible:!1,title:"",dir:"ltr",size:"medium",noCloseOnEscKey:!1,hideHeader:!1,noPadding:!1,appendOnBody:!1};var Q=e=>{var t=e.children,i=Object(p["a"])(e,["children"]);return r.a.createElement("div",Object(l["a"])({slot:"main"},i),t)},X=e=>{var t=e.children,i=Object(p["a"])(e,["children"]);return r.a.createElement("div",Object(l["a"])({slot:"footer"},i),r.a.createElement(_,null,t))};V.ModalBody=Q,V.ModalFooter=X;var Z=V;i("nE20");class $ extends r.a.Component{constructor(e){super(e),this.container=void 0,this.container=document.createElement("div")}componentDidUpdate(e){!e.visible&&this.props.visible&&(document.body.appendChild(this.container),document.body.setAttribute("style","width: 100%;height: 100%;position: fixed;overflow: hidden;")),e.visible&&!this.props.visible&&(document.body.removeChild(this.container),document.body.removeAttribute("style"))}componentWillUnmount(){document.body.contains(this.container)&&(document.body.removeChild(this.container),document.body.removeAttribute("style"))}render(){return Object(K["createPortal"])(r.a.createElement(ee,this.props,this.props.children),this.container)}}$.defaultProps=void 0;var ee=U("ts-aside",["title","dir","size","busy"],["visible","noCloseOnEscKey"],["note","main","footer","platform-object"],["opened","closed","open","close"],{title:"data-title",visible:"data-visible",busy:"data-busy"}),te=e=>e.appendOnBody?r.a.createElement($,e):r.a.createElement(ee,e);te.defaultProps={visible:!1,title:"",dir:"ltr",noCloseOnEscKey:!1,appendOnBody:!1};var ie=te,ne=(i("B+T4"),U("ts-dialog",["text","icon","type","translations","focused","primary"],["visible"],[],["accept","cancel"],{visible:"data-visible"}));ne.displayName="Dialog",ne.defaultProps={visible:!1,text:"",type:"info",translations:{acceptButton:"OK",cancelButton:"Cancel"},focused:"cancel"};var oe=ne,re=oe,ae=e=>{var t,i=e.text,n=e.translations,o=e.focused,a=e.onAccept,s=e.onCancel,l=e.type,d=document.createElement("div"),c=null!==(t=document.querySelector("ts-root"))&&void 0!==t?t:document.body;return c.appendChild(d),Y.a.render(r.a.createElement(oe,{visible:!0,text:i,type:l,translations:n,focused:o,onAccept:a,onCancel:s}),d)};re.info=function(e){return ae(Object(c["a"])(Object(c["a"])({},e),{},{type:"info"}))},re.warning=function(e){return ae(Object(c["a"])(Object(c["a"])({},e),{},{type:"warning"}))},re.danger=function(e){return ae(Object(c["a"])(Object(c["a"])({},e),{},{type:"danger"}))};var se=re,le=e=>{var t=e.children;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{float:"left"}},r.a.Children.map(t,((e,i)=>r.a.createElement("span",{key:i,style:{marginRight:Array.isArray(t)&&i===t.length?0:10}},e)))))},de=le,ce=(i("0xes"),U("ts-tab",["dir","icon","label","counter"],["selected"],["default"],["change"],{change:"tab-prop-change"}));ce.displayName="Tab",ce.defaultProps={dir:"ltr"};var pe=ce,ue=(i("v27i"),U("ts-tabs",["dir"],[],["default"],["click"],{click:"tab-click"}));ue.displayName="Tabs",ue.defaultProps={dir:"ltr"};var he=ue},"9kvl":function(e,t,i){"use strict";var n=i("FfOG");i.d(t,"a",(function(){return n["b"]}));i("bCY9")},TFQZ:function(e,t,i){"use strict";i.r(t);var n=i("/7QA"),o=i("JBu9"),r=i("q1tI"),a=i.n(r),s=i("Ty5D");class l extends r["Component"]{componentDidUpdate(e){if(this.props.location.pathname!==e.location.pathname){var t,i,n=document.querySelector("ts-root");null===n||void 0===n||null===(t=n.shadowRoot)||void 0===t||null===(i=t.querySelector('[part="content-main"]'))||void 0===i||i.scrollTo(0,0)}}render(){return this.props.children}}var d=Object(s["n"])(l);i("jlma"),t["default"]=e=>a.a.createElement(d,null,a.a.createElement(n["Root"],null,a.a.createElement(o["a"],e)))},jlma:function(e,t,i){},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/components":[{"title":"Aside","path":"/components/aside","meta":{},"children":[]},{"title":"Button","path":"/components/button","meta":{},"children":[]},{"title":"Dialog","path":"/components/dialog","meta":{},"children":[]},{"title":"Header","path":"/components/header","meta":{},"children":[]},{"title":"Modal","path":"/components/modal","meta":{},"children":[]},{"title":"Tabs","path":"/components/tabs","meta":{},"children":[]}],"*":[{"path":"/","title":"dumi - A doc tool can assist you to develop libraries & write docs.","meta":{"order":10}}],"/design":[{"path":"/design","title":"Color","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"path":"/design","title":"Design"},{"path":"/components","title":"Components"}]},"title":"elements-react","logo":"/elements-react/images/logo.png","mode":"site","repository":{"url":"","branch":"master"},"theme":{}}')},x2v5:function(e){e.exports=JSON.parse('{"Aside":{"default":[{"identifier":"visible","description":"Show/hide aside","type":"boolean","default":"false"},{"identifier":"title","description":"Aside header title","type":"string","default":""},{"identifier":"dir","description":"Direction of the component \'rtl\' or \'ltr\'","type":"\\"rtl\\" | \\"ltr\\" | \\"auto\\"","default":"ltr"},{"identifier":"busy","description":"If it exist as an attribute, the aside would show a spinner in it with the provided value of this attribute as the message of it","type":"string"},{"identifier":"noCloseOnEscKey","description":"Disable closing the aside with escape key","type":"boolean","default":"false"},{"identifier":"appendOnBody","description":"Whether append aside on the body as the last children","type":"boolean","default":"false"},{"identifier":"onOpen","description":"Emitted when the aside is about to be opened","type":"(event: CustomEvent<any>) => void"},{"identifier":"onClose","description":"Emitted when the aside is about to be closed","type":"(event: CustomEvent<any>) => void"},{"identifier":"onOpened","description":"Emitted when the aside has been opened","type":"(event: CustomEvent<any>) => void"},{"identifier":"onClosed","description":"Emitted when the aside has been closed","type":"(event: CustomEvent<any>) => void"},{"identifier":"ref","type":"Ref<any>"},{"identifier":"style","description":"Element style which will be appended to the most outer element of a component.\\nUse this prop carefully, some css properties might break the component.","type":"CSSProperties"},{"identifier":"className","description":"CSS Class Name which will be appended to the most outer element of a component.\\nUse this prop carefully, overwriting CSS rules might break the component.","type":"string"},{"identifier":"tooltip","description":"A tooltip which will be shown on hover","type":"string"}]},"Button":{"default":[{"identifier":"type","description":"Button type to have different style","type":"\\"primary\\" | \\"secondary\\" | \\"text\\" | \\"accept\\" | \\"warning\\" | \\"danger\\"","default":"secondary"},{"identifier":"size","description":"Size of the button","type":"\\"macro\\" | \\"micro\\""},{"identifier":"dir","description":"Direction of the component","type":"\\"rtl\\" | \\"ltr\\"","default":"ltr"},{"identifier":"icon","description":"Icon name, see the list of available icons in ts-icon component. Also note that it will hide the slot content unless the type is text","type":"string"},{"identifier":"busy","description":"Show busy/loading animation","type":"boolean","default":"false"},{"identifier":"disabled","description":"Determine if the button is disabled. `onClick` event won\'t be dispatched","type":"boolean","default":"false"},{"identifier":"grouped","description":"For internal use in `ts-button-group` component","type":"boolean","default":"false"},{"identifier":"focused","description":"Make the button focused","type":"boolean","default":"false"},{"identifier":"onClick","type":"MouseEventHandler<HTMLElement>"},{"identifier":"ref","type":"Ref<any>"},{"identifier":"style","description":"Element style which will be appended to the most outer element of a component.\\nUse this prop carefully, some css properties might break the component.","type":"CSSProperties"},{"identifier":"className","description":"CSS Class Name which will be appended to the most outer element of a component.\\nUse this prop carefully, overwriting CSS rules might break the component.","type":"string"},{"identifier":"tooltip","description":"A tooltip which will be shown on hover","type":"string"}]},"Dialog":{},"Header":{"default":[{"identifier":"dir","description":"Direction of the button `rtl`, `ltr`","type":"\\"rtl\\" | \\"ltr\\" | \\"auto\\"","default":"ltr"},{"identifier":"icon","description":"Icon shows in the header","type":"string"},{"identifier":"title","description":"Title shows in the header","type":"string"},{"identifier":"color","description":"Colors of the header","type":"string","default":"white"},{"identifier":"ref","type":"Ref<any>"},{"identifier":"style","description":"Element style which will be appended to the most outer element of a component.\\nUse this prop carefully, some css properties might break the component.","type":"CSSProperties"},{"identifier":"className","description":"CSS Class Name which will be appended to the most outer element of a component.\\nUse this prop carefully, overwriting CSS rules might break the component.","type":"string"},{"identifier":"tooltip","description":"A tooltip which will be shown on hover","type":"string"}]},"Modal":{"default":[{"identifier":"visible","type":"boolean","default":"false"},{"identifier":"title","type":"string","default":""},{"identifier":"width","type":"string"},{"identifier":"dir","type":"\\"rtl\\" | \\"ltr\\" | \\"auto\\"","default":"ltr"},{"identifier":"size","type":"\\"small\\" | \\"medium\\" | \\"large\\"","default":"medium"},{"identifier":"noCloseOnEscKey","type":"boolean","default":"false"},{"identifier":"hideHeader","type":"boolean","default":"false"},{"identifier":"noPadding","type":"boolean","default":"false"},{"identifier":"appendOnBody","description":"Whether append aside on the body as the last children","type":"boolean","default":"false"},{"identifier":"onOpened","type":"(event: CustomEvent<any>) => void"},{"identifier":"onClosed","type":"(event: CustomEvent<any>) => void"},{"identifier":"onOpen","type":"(event: CustomEvent<any>) => void"},{"identifier":"onClose","type":"(event: CustomEvent<any>) => void"},{"identifier":"ref","type":"Ref<any>"},{"identifier":"style","description":"Element style which will be appended to the most outer element of a component.\\nUse this prop carefully, some css properties might break the component.","type":"CSSProperties"},{"identifier":"className","description":"CSS Class Name which will be appended to the most outer element of a component.\\nUse this prop carefully, overwriting CSS rules might break the component.","type":"string"},{"identifier":"tooltip","description":"A tooltip which will be shown on hover","type":"string"}],"ModalBody":[{"identifier":"style","description":"Element style which will be appended to the most outer element of a component.\\nUse this prop carefully, some css properties might break the component.","type":"CSSProperties"},{"identifier":"className","description":"CSS Class Name which will be appended to the most outer element of a component.\\nUse this prop carefully, overwriting CSS rules might break the component.","type":"string"},{"identifier":"tooltip","description":"A tooltip which will be shown on hover","type":"string"},{"identifier":"ref","type":"Ref<any>"}],"ModalFooter":[{"identifier":"style","description":"Element style which will be appended to the most outer element of a component.\\nUse this prop carefully, some css properties might break the component.","type":"CSSProperties"},{"identifier":"className","description":"CSS Class Name which will be appended to the most outer element of a component.\\nUse this prop carefully, overwriting CSS rules might break the component.","type":"string"},{"identifier":"tooltip","description":"A tooltip which will be shown on hover","type":"string"},{"identifier":"ref","type":"Ref<any>"}]},"Tabs":{"default":[{"identifier":"dir","description":"Direction `rtl`, `ltr`","type":"\\"rtl\\" | \\"ltr\\" | \\"auto\\"","default":"ltr"},{"identifier":"onClick","type":"MouseEventHandler<HTMLElement>"},{"identifier":"ref","type":"Ref<any>"},{"identifier":"style","description":"Element style which will be appended to the most outer element of a component.\\nUse this prop carefully, some css properties might break the component.","type":"CSSProperties"},{"identifier":"className","description":"CSS Class Name which will be appended to the most outer element of a component.\\nUse this prop carefully, overwriting CSS rules might break the component.","type":"string"},{"identifier":"tooltip","description":"A tooltip which will be shown on hover","type":"string"}]},"Tab":{"default":[{"identifier":"dir","description":"Direction `rtl`, `ltr`","type":"\\"rtl\\" | \\"ltr\\" | \\"auto\\"","default":"ltr"},{"identifier":"label","description":"The label text for the tab","type":"string","required":true},{"identifier":"selected","description":"Make the tab selected","type":"boolean"},{"identifier":"icon","description":"Icon name from the available icons in the icon component","type":"string"},{"identifier":"counter","description":"Number for counter badge next to the label","type":"number"},{"identifier":"onChange","description":"(Internal) Emitted when property of the tab is changed, it\'s used to let the tabs know about the attribute changes.","type":"MouseEventHandler<HTMLElement>"},{"identifier":"ref","type":"Ref<any>"},{"identifier":"style","description":"Element style which will be appended to the most outer element of a component.\\nUse this prop carefully, some css properties might break the component.","type":"CSSProperties"},{"identifier":"className","description":"CSS Class Name which will be appended to the most outer element of a component.\\nUse this prop carefully, overwriting CSS rules might break the component.","type":"string"},{"identifier":"tooltip","description":"A tooltip which will be shown on hover","type":"string"}]}}')}}]);
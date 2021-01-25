(this["webpackJsonpsimple-utility-app"]=this["webpackJsonpsimple-utility-app"]||[]).push([[0],{29:function(t,e,a){},30:function(t,e,a){},60:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(1),c=a.n(r),l=a(21),s=a.n(l),i=(a(29),a(30),a(2)),d=a(8),o=a(4),u=a(3),j=a(11),b=(a(33),function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props.tabitmes,e=t.map((function(t,e){return Object(n.jsx)(j.a,{style:{background:t.bgcolor},children:t.name},e)})),a=t.map((function(t,e){return Object(n.jsx)(j.c,{children:t.panel},e)}));return Object(n.jsxs)(j.d,{defaultIndex:0,children:[Object(n.jsx)(j.b,{children:e}),a]})}}]),a}(r.Component)),h=a(23),m=function(t){var e=t.label,a=t.isSelected,r=t.onCheckboxChange;return Object(n.jsxs)("label",{children:[e,Object(n.jsx)("input",{type:"checkbox",name:e,checked:a,onChange:r})]})},x=function(t){var e=t.checkedArr,a=t.handler,r=e.map((function(t,e){return Object(n.jsx)(m,{label:e.toString(10).padStart(2,"0"),isSelected:t,onCheckboxChange:a},e.toString(10).padStart(2,"0"))}));return Object(n.jsx)("div",{className:"f5 flex flex-row-reverse ma1",children:r})},p=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).componentDidMount=function(){r.updateValues()},r.handleCheckboxChange=function(t){var e=Number(t.target.name),a=Object(h.a)(r.state.checkedArr);a[e]=!a[e],r.updateValues(t.target.name,a[e],a)},r.handleRandomize=function(){for(var t=0,e=[],a=0;a<32;a++){var n=Math.random()>.5;e.push(n),n&&(t+=Math.pow(2,a))}r.bitsVal=t,r.updateValues(-1,null,e)},r.handleResetAll=function(){r.bitsVal=0,r.updateValues(-1,null,Array(32).fill(!1))},r.handleCheckAll=function(){r.bitsVal=4294967295,r.updateValues(-1,null,Array(32).fill(!0))},r.updateValues=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(-1!==t){var n=Math.pow(2,t);e?r.bitsVal+=n:r.bitsVal-=n}r.setState(Object.assign({binaryValue:r.bitsVal.toString(2).toUpperCase().padStart(32,"0"),decimalValue:r.bitsVal.toString(10).toUpperCase().padStart(10,"0"),hexValue:r.bitsVal.toString(16).toUpperCase().padStart(8,"0")},null===a?{}:{checkedArr:a}))},r.OutputTable=function(){return Object(n.jsx)("table",{className:"center",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Binary"}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{type:"text",name:"binary",readOnly:!0,maxLength:"32",size:"32",style:{textAlign:"right"},value:r.state.binaryValue})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Decimal"}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{type:"text",name:"decimal",readOnly:!0,maxLength:"32",size:"32",style:{textAlign:"right"},value:r.state.decimalValue})})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"Hex"}),Object(n.jsx)("td",{children:Object(n.jsx)("input",{type:"text",name:"Hex",readOnly:!0,maxLength:"32",size:"32",style:{textAlign:"right"},value:r.state.hexValue})})]})]})})},r.bitsVal=0,r.state={binaryValue:"",decimalValue:"",hexValue:"",checkedArr:Array(32).fill(!1)},r}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("fieldset",{className:"ba br3 ma3 w-60 center",children:[Object(n.jsx)("legend",{children:"Inputs"}),Object(n.jsx)(x,{checkedArr:this.state.checkedArr,handler:this.handleCheckboxChange})]}),Object(n.jsxs)("fieldset",{className:"ba br3 ma3 w-60 center",children:[Object(n.jsx)("legend",{children:"Outputs"}),Object(n.jsx)(this.OutputTable,{})]}),Object(n.jsxs)("fieldset",{className:"ba br3 ma3 justify-center w-60 center",children:[Object(n.jsx)("legend",{children:"Buttons"}),Object(n.jsx)("button",{className:"br3 ma1 pointer",onClick:this.handleRandomize,children:"Randomize"}),Object(n.jsx)("button",{className:"br3 ma1 pointer",onClick:this.handleResetAll,children:"Reset all"}),Object(n.jsx)("button",{className:"br3 ma1 pointer",onClick:this.handleCheckAll,children:"Check all"})]})]})}}]),a}(r.Component),O=a(22),f=a.n(O),g=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).inputHandler=function(t){switch(t.type){case"keydown":"Enter"===t.key&&(t.preventDefault(),r.qrcodeHandler());break;case"change":r.setState({inputText:t.target.value})}},r.clearHandler=function(t){r.setState({imgsrc:"",inputText:"",log:""})},r.qrcodeHandler=function(){var t=r.state.inputText;0!==t.length?f.a.toDataURL(t).then((function(e){return r.setState({imgsrc:e,log:"".concat(t.length)})})).catch((function(t){return console.log(t)})):r.setState({imgsrc:"",log:"No input"})},r.render=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("fieldset",{className:"w-60 center flex ma3 ba br3 pa3 ma3",children:[Object(n.jsx)("legend",{children:" Input String "}),Object(n.jsx)("textarea",{className:"tc f4 br3 center w-80",rows:"4",cols:"64",maxLength:"256",value:r.state.inputText,onChange:r.inputHandler,onKeyDown:r.inputHandler}),Object(n.jsx)("button",{className:"br3 w-20",onClick:r.qrcodeHandler,children:" GO "}),Object(n.jsx)("button",{className:"br3 w-20",onClick:r.clearHandler,children:" Clear "})]}),Object(n.jsxs)("fieldset",{className:"flex flex-column w-60 center flex ma3 ba br3",children:[Object(n.jsx)("legend",{children:" QR Code "}),Object(n.jsx)("img",{className:"center",src:r.state.imgsrc,alt:"",width:"30%"}),Object(n.jsx)("h2",{className:"center",children:r.state.log})]})]})},r.state={imgsrc:"",inputText:"",log:""},r}return a}(r.Component),S=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).componentDidMount=function(){r.totalStr=r.makeTimeString(0),r.lapStr=r.makeTimeString(0),r.updateTime()},r.makeTimeString=function(t){var e=t%1e3,a=(t=(t-e)/1e3)%60;return"".concat(((t-a)/60).toString(10).padStart(2,"0"),":").concat(a.toString(10).padStart(2,"0"),".").concat(e.toString(10).padStart(3,"0"))},r.updateTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;r.setState(Object.assign({totalTime:r.totalStr,lapTime:r.lapStr},null===t?{}:{startButtonText:t}))},r.handleStart=function(){switch(r.startButtonState){case"start":r.tTotalStart=(new Date).getTime(),r.tLapStart=r.tTotalStart,r.timerID=setInterval((function(){r.tTotalElpased=(new Date).getTime()-r.tTotalStart+r.tPrevElpased;var t=(new Date).getTime()-r.tLapStart;r.totalStr=r.makeTimeString(r.tTotalElpased),r.lapStr=r.makeTimeString(t),r.updateTime("Stop")}),10),r.startButtonState="stop",r.setState({enBtnReset:!0,enBtnStart:!0,enBtnLap:!0});break;case"stop":r.handlePause()}},r.handlePause=function(){null!=r.timerID&&(clearInterval(r.timerID),r.timerID=null),r.tPrevElpased=r.tTotalElpased,r.startButtonState="start",r.updateTime("Start"),r.setState({enBtnReset:!0,enBtnStart:!0,enBtnLap:!1}),r.addResult(r.resultIndex++,r.totalStr,r.lapStr)},r.handleLap=function(){r.tLapStart=(new Date).getTime(),r.addResult(r.resultIndex++,r.totalStr,r.lapStr)},r.handleReset=function(){null!=r.timerID&&(clearInterval(r.timerID),r.timerID=null),r.tTotalStart=0,r.tTotalElpased=0,r.tLapStart=0,r.tPrevElpased=0,r.startButtonState="start",r.resultIndex=0,r.totalStr=r.makeTimeString(0),r.lapStr=r.makeTimeString(0),r.updateTime("Start"),r.setState({resultRows:[],enBtnReset:!1,enBtnStart:!0,enBtnLap:!1})},r.addResult=function(t,e,a){var c=Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:"#".concat((t+1).toString().padStart(3,"0"))}),Object(n.jsx)("td",{children:e}),Object(n.jsx)("td",{children:a})]});r.setState({resultRows:[c,r.state.resultRows]})},r.timerID=null,r.tTotalStart=0,r.tTotalElpased=0,r.tLapStart=0,r.tPrevElpased=0,r.startButtonState="start",r.resultIndex=0,r.totalStr="",r.lapStr="",r.state={totalTime:"",lapTime:"",startButtonText:"Start",resultRows:Object(n.jsx)("tr",{}),enBtnReset:!1,enBtnStart:!0,enBtnLap:!1},r}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"flex flex-row ma3 w-60 center",children:[Object(n.jsxs)("fieldset",{className:"w-50 ma3 br3",children:[Object(n.jsx)("legend",{children:"Total"}),Object(n.jsx)("h1",{children:this.state.totalTime})]}),Object(n.jsxs)("fieldset",{className:"w-50 ma3 br3",children:[Object(n.jsx)("legend",{children:"LAP"}),Object(n.jsx)("h1",{children:this.state.lapTime})]})]}),Object(n.jsxs)("div",{className:"flex flex-row ma3 w-60 center justify-center",children:[Object(n.jsx)("button",{className:"br3 w-20 pa3 ma3",disabled:!this.state.enBtnReset,onClick:this.handleReset,children:"Reset"}),Object(n.jsx)("button",{className:"br3 w-20 pa3 ma3",disabled:!this.state.enBtnStart,onClick:this.handleStart,children:this.state.startButtonText}),Object(n.jsx)("button",{className:"br3 w-20 pa3 ma3",disabled:!this.state.enBtnLap,onClick:this.handleLap,children:"LAP"})]}),Object(n.jsxs)("fieldset",{className:"flex flex-row ma3 w-60 center br3",children:[Object(n.jsx)("legend",{children:" Results "}),Object(n.jsxs)("table",{className:"center f3 w-90",children:[Object(n.jsxs)("thead",{children:[Object(n.jsx)("td",{children:"No."}),Object(n.jsx)("td",{children:"Total"}),Object(n.jsx)("td",{children:"LAP"})]}),Object(n.jsx)("tbody",{children:this.state.resultRows})]})]})]})}}]),a}(r.Component),v=a(12),w=["\u57fa\u9686\u5e02","\u81fa\u5317\u5e02","\u65b0\u5317\u5e02","\u6843\u5712\u5e02","\u65b0\u7af9\u5e02","\u65b0\u7af9\u7e23","\u82d7\u6817\u7e23","\u81fa\u4e2d\u5e02","\u5f70\u5316\u7e23","\u5357\u6295\u7e23","\u96f2\u6797\u7e23","\u5609\u7fa9\u5e02","\u5609\u7fa9\u7e23","\u81fa\u5357\u5e02","\u9ad8\u96c4\u5e02","\u5c4f\u6771\u7e23","\u5b9c\u862d\u7e23","\u82b1\u84ee\u7e23","\u81fa\u6771\u7e23","\u6f8e\u6e56\u7e23","\u91d1\u9580\u7e23","\u9023\u6c5f\u7e23"],T=function(t){var e=t.records,a=t.index;if(!e.location)return Object(n.jsx)("div",{});var r=e.location[0].weatherElement,c=r.map((function(t){return t.time[a].parameter.parameterName})),l=Object(v.a)(c,5),s=l[0],i=l[1],d=l[2],o=l[3],u=l[4],j=r[0].time[a],b=j.startTime,h=j.endTime,m=r[0].time[a].parameter.parameterValue;return Object(n.jsxs)("div",{className:"flex flex-column ba ma3 br3 pa3",style:{width:"150px",height:"200px"},children:[Object(n.jsx)("div",{children:k(b,h)}),Object(n.jsx)("img",{src:y(m),alt:s,title:s,height:"100px"}),Object(n.jsxs)("div",{children:["\ud83c\udf21\ufe0f ",d," - ",u,"\u2103"]}),Object(n.jsxs)("div",{children:["\u2602 ",i,"%"]}),Object(n.jsx)("div",{children:o})]})},k=function(t,e){var a=(new Date).toISOString().substring(0,10),n=t.split(" "),r=Object(v.a)(n,2),c=r[0],l=r[1];return c!==a||"06:00:00"!==l&&"12:00:00"!==l?c===a&&"18:00:00"===l?"\u4eca\u665a\u660e\u6668":c!==a&&"06:00:00"===l?"\u660e\u65e5\u767d\u5929":(console.log("\u3007\u3007\u3007\u3007",c,l),"\u3007\u3007\u3007\u3007"):"\u4eca\u65e5\u767d\u5929"},y=function(t){return"".concat("/simple-utility-app","/images/").concat(t.toString().padStart(2,"0"),".svg")},N=function(){var t=Object(r.useState)("\u81fa\u5317\u5e02"),e=Object(v.a)(t,2),a=e[0],c=e[1],l=Object(r.useState)(null),s=Object(v.a)(l,2),i=s[0],d=s[1];if(Object(r.useEffect)((function(){var t=!0;return fetch(encodeURI("".concat("https://simple-utility-api.herokuapp.com/weatherfc","/").concat(a))).then((function(t){return t.json()})).then((function(e){var a=e.records;t&&d(a)})).catch((function(t){return console.log(t)})),function(){t=!1}}),[a]),!i)return Object(n.jsx)("div",{});var o=i.location[0].locationName;return Object(n.jsxs)("div",{className:"flex flex-column w-40 center",children:[Object(n.jsxs)("select",{className:"pa3 ma3 br3",onChange:function(t){c(t.target.value)},defaultValue:a,children:[Object(n.jsx)("option",{value:"",disabled:!0,children:"\u9078\u64c7\u7e23\u5e02"}),w.map((function(t,e){return Object(n.jsx)("option",{value:t,children:t},e)}))]}),Object(n.jsxs)("fieldset",{className:"flex flex-row justify-center pa3 ma3 br3",children:[Object(n.jsx)("legend",{children:o}),Object(n.jsx)(T,{records:i,index:0}),Object(n.jsx)(T,{records:i,index:1}),Object(n.jsx)(T,{records:i,index:2})]})]})};var C=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(b,{tabitmes:[{name:"binary-converter",bgcolor:"aliceblue",panel:Object(n.jsx)(p,{})},{name:"QR-Code",bgcolor:"cornsilk",panel:Object(n.jsx)(g,{})},{name:"Stopwatch",bgcolor:"yellowgreen",panel:Object(n.jsx)(S,{})},{name:"Weather",bgcolor:"wheat",panel:Object(n.jsx)(N,{})}]})})};a(59);s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.a7f57d61.chunk.js.map
(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[118],{412:function(e,t,n){"use strict";var a=n(5),i=n(3),c=n(0),r=n.n(c),o=n(250),s=n(260),l=n(485),d=n(818),b=n(326),j=n(91),u=n(444),m=n(116),p=n(334),O=n(7),x=n(2),h=Object(s.a)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))(l.a);t.a=Object(s.a)((function(e){return Object(o.a)(Object(i.a)(Object(i.a)({seeMore:{marginTop:e.spacing(3)},paper:{display:"flex",overflow:"auto",flexDirection:"column",paddingTop:15,boxShadow:"none"},addSideBar:{width:"320px",padding:"20px"},tableToolbar:{paddingLeft:e.spacing(2),paddingRight:e.spacing(0)},wrapCell:{maxWidth:"200px",whiteSpace:"normal",wordWrap:"break-word"},minTableHeader:{color:"#393939","& tr":{"& th":{fontWeight:"bold"}}},noFound:{textAlign:"center",padding:"10px 0"},tableContainer:{maxHeight:200},stickyHeader:{backgroundColor:"#fff"},actionsTitle:{fontWeight:600,color:"#081C42",fontSize:16,alignSelf:"center"},tableBlock:{marginTop:15},filterField:{width:375,fontWeight:600,"& .input":{"&::placeholder":{fontWeight:600,color:"#081C42"}}},divContainer:{marginBottom:20},indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},m.a),m.i))}))((function(e){var t=e.label,n=void 0===t?"":t,i=e.onChange,c=e.value,o=e.id,s=e.name,l=e.checked,m=void 0!==l&&l,f=e.disabled,g=void 0!==f&&f,v=e.switchOnly,C=void 0!==v&&v,k=e.tooltip,y=void 0===k?"":k,S=e.description,w=void 0===S?"":S,F=e.classes,N=e.indicatorLabels,A=Object(x.jsxs)(r.a.Fragment,{children:[!C&&Object(x.jsx)("span",{className:Object(O.a)(F.indicatorLabel,Object(a.a)({},F.indicatorLabelOn,!m)),children:N&&N.length>1?N[1]:"OFF"}),Object(x.jsx)(h,{checked:m,onChange:i,color:"primary",name:s,inputProps:{"aria-label":"primary checkbox"},disabled:g,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:c}),!C&&Object(x.jsx)("span",{className:Object(O.a)(F.indicatorLabel,Object(a.a)({},F.indicatorLabelOn,m)),children:N?N[0]:"ON"})]});return C?A:Object(x.jsx)("div",{className:F.divContainer,children:Object(x.jsxs)(u.a,{container:!0,alignItems:"center",children:[Object(x.jsx)(u.a,{item:!0,xs:!0,children:Object(x.jsxs)(u.a,{container:!0,children:[Object(x.jsx)(u.a,{item:!0,xs:12,sm:4,md:3,children:""!==n&&Object(x.jsxs)(d.a,{htmlFor:o,className:F.inputLabel,children:[Object(x.jsx)("span",{children:n}),""!==y&&Object(x.jsx)("div",{className:F.tooltipContainer,children:Object(x.jsx)(b.a,{title:y,placement:"top-start",children:Object(x.jsx)("div",{className:F.tooltip,children:Object(x.jsx)(p.a,{})})})})]})}),Object(x.jsx)(u.a,{item:!0,xs:12,sm:!0,textAlign:"left",children:""!==w&&Object(x.jsx)(j.a,{component:"p",className:F.fieldDescription,children:w})})]})}),Object(x.jsx)(u.a,{item:!0,xs:12,sm:2,textAlign:"right",className:F.switchContainer,children:A})]})})}))},528:function(e,t,n){"use strict";var a=n(0),i=n.n(a),c=n(91),r=n(250),o=n(260),s=n(2);t.a=Object(o.a)((function(e){var t;return Object(r.a)({errorBlock:{color:(null===(t=e.palette)||void 0===t?void 0:t.error.main)||"#C83B51"}})}))((function(e){var t=e.classes,n=e.errorMessage,a=e.withBreak,r=void 0===a||a;return Object(s.jsxs)(i.a.Fragment,{children:[r&&Object(s.jsx)("br",{}),Object(s.jsx)(c.a,{component:"p",variant:"body1",className:t.errorBlock,children:n})]})}))},590:function(e,t,n){"use strict";var a=n(15),i=n(3),c=n(0),r=n.n(c),o=n(45),s=n.n(o),l=n(444),d=n(818),b=n(326),j=n(328),u=n(650),m=n.n(u),p=n(649),O=n.n(p),x=n(250),h=n(260),f=n(116),g=n(334),v=n(528),C=n(2);t.a=Object(h.a)((function(e){return Object(x.a)(Object(i.a)(Object(i.a)(Object(i.a)({},f.i),f.D),{},{textBoxContainer:{flexGrow:1,position:"relative",display:"flex",flexWrap:"nowrap",height:48},errorState:{color:"#b53b4b",fontSize:14,position:"absolute",top:7,right:7},errorText:{margin:"0",fontSize:"0.75rem",marginTop:3,textAlign:"left",fontFamily:"Lato,sans-serif",fontWeight:400,lineHeight:"1.66",color:"#dc1f2e"},valueString:{maxWidth:350,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginTop:2},fileReselect:{display:"flex",alignItems:"center",height:48},fieldBottom:{borderBottom:"#9c9c9c 1px solid"},fileInputField:{margin:"13px 0"}}))}))((function(e){var t=e.label,n=e.classes,i=e.onChange,o=e.id,u=e.name,p=e.disabled,x=void 0!==p&&p,h=e.tooltip,f=void 0===h?"":h,k=e.required,y=e.error,S=void 0===y?"":y,w=e.accept,F=void 0===w?"":w,N=e.value,A=void 0===N?"":N,B=Object(c.useState)(!1),T=Object(a.a)(B,2),D=T[0],L=T[1];return Object(C.jsx)(r.a.Fragment,{children:Object(C.jsxs)(l.a,{item:!0,xs:12,className:"".concat(n.fileInputField," ").concat(n.fieldBottom," ").concat(n.fieldContainer," ").concat(""!==S?n.errorInField:""),children:[""!==t&&Object(C.jsxs)(d.a,{htmlFor:o,className:"".concat(""!==S?n.fieldLabelError:""," ").concat(n.inputLabel),children:[Object(C.jsxs)("span",{children:[t,k?"*":""]}),""!==f&&Object(C.jsx)("div",{className:n.tooltipContainer,children:Object(C.jsx)(b.a,{title:f,placement:"top-start",children:Object(C.jsx)("div",{className:n.tooltip,children:Object(C.jsx)(g.a,{})})})})]}),D||""===A?Object(C.jsxs)("div",{className:n.textBoxContainer,children:[Object(C.jsx)("input",{type:"file",name:u,onChange:function(e){var t=s()(e,"target.files[0].name","");!function(e,t){var n=e.target.files[0],a=new FileReader;a.readAsDataURL(n),a.onload=function(){var e=a.result;if(e){var n=e.toString().split("base64,");2===n.length&&t(n[1])}}}(e,(function(e){i(e,t)}))},accept:F,required:k,disabled:x,className:n.fileInputField}),""!==A&&Object(C.jsx)(j.a,{color:"primary","aria-label":"upload picture",component:"span",onClick:function(){L(!1)},disableRipple:!1,disableFocusRipple:!1,size:"large",children:Object(C.jsx)(O.a,{})}),""!==S&&Object(C.jsx)(v.a,{errorMessage:S})]}):Object(C.jsxs)("div",{className:n.fileReselect,children:[Object(C.jsx)("div",{className:n.valueString,children:A}),Object(C.jsx)(j.a,{color:"primary","aria-label":"upload picture",component:"span",onClick:function(){L(!0)},disableRipple:!1,disableFocusRipple:!1,size:"large",children:Object(C.jsx)(m.a,{})})]})]})})}))},918:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n(14),c=n(15),r=n(3),o=n(250),s=n(260),l=n(116),d=n(327),b=n(444),j=n(789),u=n(0),m=n.n(u),p=n(554),O=n.n(p),x=n(412),h=n(531),f=n(330),g=n(91),v=n(590),C=n(50),k=n(30),y=n(38),S=n(482),w=n(417),F=n(418),N=n(419),A=n(316),B=n(474),T=n(463),D=n(2),L=Object(s.a)((function(e){return Object(o.a)(Object(r.a)(Object(r.a)({},l.B),Object(l.f)(e.spacing(4))))}))((function(e){e.classes;var t=e.open,n=e.cancelLabel,a=e.okLabel,i=e.onClose,r=e.cancelOnClick,o=e.okOnClick,s=e.title,l=e.description,d=Object(u.useState)(!1),b=Object(c.a)(d,2),j=b[0],m=b[1];return t?Object(D.jsxs)(w.a,{open:t,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(D.jsx)(F.a,{id:"alert-dialog-title",children:s}),Object(D.jsxs)(N.a,{children:[j&&Object(D.jsx)(A.a,{}),Object(D.jsx)(B.a,{id:"alert-dialog-description",children:l})]}),Object(D.jsxs)(T.a,{children:[Object(D.jsx)(f.a,{onClick:r,color:"primary",disabled:j,children:n||"Cancel"}),Object(D.jsx)(f.a,{onClick:function(){m(!0),null!==o&&o(),m(!1)},color:"secondary",autoFocus:!0,children:a||"Ok"})]})]}):null})),R={setErrorSnackMessage:k.e,setTenantDetailsLoad:S.p},I=Object(y.b)((function(e){return{loadingTenant:e.tenants.tenantDetails.loadingTenant,selectedTenant:e.tenants.tenantDetails.currentTenant,tenant:e.tenants.tenantDetails.tenantInfo}}),R);t.default=Object(s.a)((function(e){return Object(o.a)(Object(r.a)(Object(r.a)({},l.B),{},{loaderAlign:{textAlign:"center"},title:{marginTop:35},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"},underline:{textDecorationLine:"underline"},paperContainer:{padding:"15px 15px 15px 50px"},verifiedIcon:{width:96,position:"absolute",right:0,bottom:29},noUnderLine:{textDecoration:"none"},certificateInfo:{height:"auto",margin:5},certificateInfoName:{fontWeight:"bold"}},Object(l.f)(e.spacing(4))))}))(I((function(e){var t=e.classes,n=e.tenant,o=e.loadingTenant,s=e.setErrorSnackMessage,l=(e.setTenantDetailsLoad,Object(u.useState)(!1)),p=Object(c.a)(l,2),k=p[0],y=p[1],S=Object(u.useState)(!1),w=Object(c.a)(S,2),F=w[0],N=w[1],A=Object(u.useState)(!1),B=Object(c.a)(A,2),T=B[0],R=B[1],I=Object(u.useState)(!1),E=Object(c.a)(I,2),M=E[0],W=E[1],_=Object(u.useState)([]),Y=Object(c.a)(_,2),z=Y[0],H=Y[1],$=Object(u.useState)([]),K=Object(c.a)($,2),q=K[0],G=K[1],J=Object(u.useState)([]),P=Object(c.a)(J,2),U=P[0],V=P[1],X=Object(u.useState)([]),Q=Object(c.a)(X,2),Z=Q[0],ee=Q[1],te=Object(u.useState)([]),ne=Object(c.a)(te,2),ae=ne[0],ie=ne[1],ce=Object(u.useCallback)((function(){C.a.invoke("GET","/api/v1/namespaces/".concat(null===n||void 0===n?void 0:n.namespace,"/tenants/").concat(null===n||void 0===n?void 0:n.name,"/security")).then((function(e){R(e.autoCert),(e.customCertificates.minio||e.customCertificates.minioCAs)&&W(!0),ee(e.customCertificates.minio||[]),ie(e.customCertificates.minioCAs||[])})).catch((function(e){s(e)}))}),[n,s]);Object(u.useEffect)((function(){n&&ce()}),[n,ce]);var re=function(e){H([].concat(Object(i.a)(z),[e.name]));var t=Z.filter((function(t){return t.name!==e.name})),n=ae.filter((function(t){return t.name!==e.name}));ee(t),ie(n)},oe=function(e,t,n,i,c){var o=q,s=function(){};switch(e){case"minio":o=q,s=G;break;case"minioCAs":o=U,s=V}s(o.map((function(e){var o;return e.id===t?Object(r.a)(Object(r.a)({},e),{},(o={},Object(a.a)(o,n,i),Object(a.a)(o,"encoded_".concat(n),c),o)):e})))},se=function(e,t){var n=q,a=function(){};switch(e){case"minio":n=q,a=G;break;case"minioCAs":n=U,a=V}n.length>1&&a(n.filter((function(e){return e.id!==t})))},le=function(e){var t=q,n=function(){};switch(e){case"minio":t=q,n=G;break;case"minioCAs":t=U,n=V}n([].concat(Object(i.a)(t),[{id:Date.now().toString(),key:"",cert:"",encoded_key:"",encoded_cert:""}]))};return Object(D.jsxs)(m.a.Fragment,{children:[Object(D.jsx)(L,{open:F,title:"Save and Restart",description:"Are you sure you want to save the changes and restart the service?",onClose:function(){return N(!1)},cancelOnClick:function(){return N(!1)},okOnClick:function(){y(!0);var e={autoCert:T,customCertificates:{}};e.customCertificates=M?{secretsToBeDeleted:z,minio:q.map((function(e){return{crt:e.encoded_cert,key:e.encoded_key}})).filter((function(e){return e.crt&&e.key})),minioCAs:U.map((function(e){return e.encoded_cert})).filter((function(e){return e}))}:{secretsToBeDeleted:[].concat(Object(i.a)(Z.map((function(e){return e.name}))),Object(i.a)(ae.map((function(e){return e.name})))),minio:[],minioCAs:[]},C.a.invoke("POST","/api/v1/namespaces/".concat(null===n||void 0===n?void 0:n.namespace,"/tenants/").concat(null===n||void 0===n?void 0:n.name,"/security"),e).then((function(){y(!1),N(!1),G([{cert:"",encoded_cert:"",encoded_key:"",id:Date.now().toString(),key:""}]),V([{cert:"",encoded_cert:"",encoded_key:"",id:Date.now().toString(),key:""}]),ce()})).catch((function(e){s(e),y(!1)}))},cancelLabel:"Cancel",okLabel:"Restart"}),o?Object(D.jsx)(d.a,{className:t.paperContainer,children:Object(D.jsx)("div",{className:t.loaderAlign,children:Object(D.jsx)(h.a,{})})}):Object(D.jsxs)(u.Fragment,{children:[Object(D.jsx)("h1",{className:t.sectionTitle,children:"Security"}),Object(D.jsxs)(d.a,{className:t.paperContainer,children:[Object(D.jsxs)(b.a,{item:!0,xs:12,className:t.title,children:[Object(D.jsx)(x.a,{value:"enableAutoCert",id:"enableAutoCert",name:"enableAutoCert",checked:T,onChange:function(e){var t=e.target.checked;R(t)},label:"TLS",description:"The internode certificates will be generated and managed by MinIO Operator"}),Object(D.jsx)(x.a,{value:"enableCustomCerts",id:"enableCustomCerts",name:"enableCustomCerts",checked:M,onChange:function(e){var t=e.target.checked;W(t)},label:"Custom Certificates"})]}),Object(D.jsx)(b.a,{item:!0,xs:12,className:t.buttonContainer,children:Object(D.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",disabled:F||k,onClick:function(){return N(!0)},children:"Save"})})]}),M&&Object(D.jsxs)(u.Fragment,{children:[Object(D.jsx)("br",{}),Object(D.jsx)(d.a,{className:t.paperContainer,children:Object(D.jsxs)(b.a,{container:!0,children:[Object(D.jsx)(b.a,{container:!0,item:!0,xs:12,children:Object(D.jsx)(g.a,{variant:"h5",display:"block",gutterBottom:!0,children:"MinIO Certificates"})}),Object(D.jsx)(b.a,{container:!0,item:!0,xs:12,children:Z.map((function(e){return Object(D.jsx)(j.a,{variant:"outlined",color:"primary",className:t.certificateInfo,label:Object(D.jsxs)("div",{children:[Object(D.jsx)(g.a,{variant:"subtitle1",display:"block",gutterBottom:!0,children:e.name}),Object(D.jsx)(g.a,{className:t.italic,variant:"caption",display:"block",gutterBottom:!0,children:e.domains&&e.domains.map((function(e){return Object(D.jsx)("div",{children:e})}))}),Object(D.jsx)(g.a,{className:t.bold,variant:"overline",gutterBottom:!0,children:"Expiry:\xa0"}),Object(D.jsx)(g.a,{variant:"caption",gutterBottom:!0,children:Object(D.jsx)(O.a,{format:"YYYY-MM-DD",children:e.expiry})})]}),onDelete:function(){return re(e)}},e.name)}))}),Object(D.jsx)(b.a,{container:!0,item:!0,xs:12,children:Object(D.jsx)("br",{})}),Object(D.jsx)(b.a,{container:!0,item:!0,xs:12,children:q.map((function(e){return Object(D.jsxs)(u.Fragment,{children:[Object(D.jsx)(b.a,{item:!0,xs:5,children:Object(D.jsx)(v.a,{onChange:function(t,n){return oe("minio",e.id,"cert",n,t)},accept:".cer,.crt,.cert,.pem",id:"tlsCert",name:"tlsCert",label:"Cert",value:e.cert})}),Object(D.jsx)(b.a,{item:!0,xs:5,children:Object(D.jsx)(v.a,{onChange:function(t,n){return oe("minio",e.id,"key",n,t)},accept:".key,.pem",id:"tlsKey",name:"tlsKey",label:"Key",value:e.key})}),Object(D.jsx)(b.a,{item:!0,xs:1,children:Object(D.jsx)(f.a,{onClick:function(){return se("minio",e.id)},color:"secondary",children:"Remove"})})]},e.id)}))}),Object(D.jsx)(b.a,{container:!0,item:!0,xs:12,children:Object(D.jsx)(f.a,{onClick:function(){return le("minio")},color:"primary",children:"Add Certificate"})}),Object(D.jsx)(b.a,{container:!0,item:!0,xs:12,children:Object(D.jsx)("br",{})}),Object(D.jsx)(b.a,{container:!0,item:!0,xs:12,children:Object(D.jsx)(g.a,{variant:"h6",display:"block",gutterBottom:!0,children:"MinIO CA Certificates"})}),Object(D.jsx)(b.a,{container:!0,item:!0,xs:12,children:ae.map((function(e){return Object(D.jsx)(j.a,{variant:"outlined",color:"primary",className:t.certificateInfo,label:Object(D.jsxs)("div",{children:[Object(D.jsx)(g.a,{variant:"subtitle1",display:"block",gutterBottom:!0,children:e.name}),Object(D.jsx)(g.a,{className:t.italic,variant:"caption",display:"block",gutterBottom:!0,children:e.domains&&e.domains.map((function(e){return Object(D.jsx)("div",{children:e})}))}),Object(D.jsx)(g.a,{className:t.bold,variant:"overline",gutterBottom:!0,children:"Expiry:\xa0"}),Object(D.jsx)(g.a,{variant:"caption",gutterBottom:!0,children:Object(D.jsx)(O.a,{format:"YYYY-MM-DD",children:e.expiry})})]}),onDelete:function(){return re(e)}},e.name)}))}),Object(D.jsx)(b.a,{container:!0,item:!0,xs:12,children:Object(D.jsx)("br",{})}),Object(D.jsx)(b.a,{container:!0,item:!0,xs:12,children:U.map((function(e){return Object(D.jsxs)(u.Fragment,{children:[Object(D.jsx)(b.a,{item:!0,xs:10,children:Object(D.jsx)(v.a,{onChange:function(t,n){return oe("minioCAs",e.id,"cert",n,t)},accept:".cer,.crt,.cert,.pem",id:"tlsCert",name:"tlsCert",label:"Cert",value:e.cert})}),Object(D.jsx)(b.a,{item:!0,xs:1,children:Object(D.jsx)(f.a,{onClick:function(){return se("minioCAs",e.id)},color:"secondary",children:"Remove"})})]},e.id)}))}),Object(D.jsx)(b.a,{container:!0,item:!0,xs:12,children:Object(D.jsx)(f.a,{onClick:function(){return le("minioCAs")},color:"primary",children:"Add CA Certificate"})}),Object(D.jsx)(b.a,{item:!0,xs:12,className:t.buttonContainer,children:Object(D.jsx)(f.a,{type:"submit",variant:"contained",color:"primary",disabled:F||k,onClick:function(){return N(!0)},children:"Save"})})]})})]})]})]})})))}}]);
//# sourceMappingURL=118.75e137ea.chunk.js.map
"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[1507],{92217:function(e,n,t){var a=t(1413),i=t(72791),o=t(61889),r=t(30829),s=t(20068),c=t(64554),l=t(11135),d=t(25787),u=t(84570),m=t(23814),p=t(75900),x=t(40603),f=t(78029),h=t.n(f),g=t(88406),Z=t(33168),j=t(80184);n.Z=(0,d.Z)((function(e){return(0,l.Z)((0,a.Z)({},m.YI))}))((function(e){var n=e.value,t=e.label,a=void 0===t?"":t,l=e.tooltip,d=void 0===l?"":l,m=e.mode,f=void 0===m?"json":m,v=e.classes,b=e.onBeforeChange,y=(e.readOnly,e.editorHeight),C=void 0===y?"250px":y,S=(0,Z.$)().t;return(0,j.jsxs)(i.Fragment,{children:[(0,j.jsx)(o.ZP,{item:!0,xs:12,sx:{marginBottom:"10px"},children:(0,j.jsxs)(r.Z,{className:v.inputLabel,children:[(0,j.jsx)("span",{children:a}),""!==d&&(0,j.jsx)("div",{className:v.tooltipContainer,children:(0,j.jsx)(s.Z,{title:d,placement:"top-start",children:(0,j.jsx)("div",{className:v.tooltip,children:(0,j.jsx)(u.Z,{})})})})]})}),(0,j.jsx)(o.ZP,{item:!0,xs:12,style:{maxHeight:C,overflow:"auto",border:"1px solid #eaeaea"},children:(0,j.jsx)(g.Z,{value:n,language:f,onChange:function(e){b(null,null,e.target.value)},id:"code_wrapper",padding:15,style:{fontSize:12,backgroundColor:"#fefefe",fontFamily:"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",minHeight:C||"initial",color:"#000000"}})}),(0,j.jsx)(o.ZP,{item:!0,xs:12,sx:{background:"#f7f7f7",border:"1px solid #eaeaea",borderTop:0},children:(0,j.jsx)(c.Z,{sx:{display:"flex",alignItems:"center",padding:"2px",paddingRight:"5px",justifyContent:"flex-end","& button":{height:"26px",width:"26px",padding:"2px"," .min-icon":{marginLeft:"0"}}},children:(0,j.jsx)(h(),{text:n,children:(0,j.jsx)(x.Z,{tooltip:S("copy_to_clipboard"),onClick:function(){},text:"",icon:(0,j.jsx)(p.TIy,{}),color:"primary",variant:"outlined"})})})})]})}))},82859:function(e,n,t){t.r(n);var a=t(29439),i=t(1413),o=t(72791),r=t(60364),s=t(16871),c=t(61889),l=t(40986),d=t(36151),u=t(11135),m=t(25787),p=t(81207),x=t(23814),f=t(92217),h=t(87995),g=t(25469),Z=t(82295),j=t(50896),v=t(80184);n.default=(0,m.Z)((function(e){return(0,u.Z)((0,i.Z)((0,i.Z)({errorState:{color:"#b53b4b",fontSize:14,fontWeight:"bold"},codeMirrorContainer:{marginBottom:20,paddingLeft:15,"& label":{marginBottom:".5rem"},"& label + div":{display:"none"}}},x.ID),x.YI))}))((function(e){var n=e.classes,t=(0,g.TL)(),i=(0,s.s0)(),u=(0,r.v9)((function(e){return e.tenants.currentTenant})),m=(0,r.v9)((function(e){return e.tenants.currentNamespace})),x=(0,o.useState)(!1),b=(0,a.Z)(x,2),y=b[0],C=b[1],S=(0,o.useState)(!1),k=(0,a.Z)(S,2),P=k[0],T=k[1],L=(0,o.useState)(""),M=(0,a.Z)(L,2),w=M[0],B=M[1],F=(0,o.useState)(""),I=(0,a.Z)(F,2),N=I[0],_=I[1];(0,o.useEffect)((function(){p.Z.invoke("GET","/api/v1/namespaces/".concat(m,"/tenants/").concat(u,"/yaml")).then((function(e){T(!1),B(e.yaml)})).catch((function(e){T(!1),t((0,h.zb)(e))}))}),[u,m,t]),(0,o.useEffect)((function(){}),[]);var H=""!==w.trim();return(0,v.jsxs)(o.Fragment,{children:[y||P&&(0,v.jsx)(c.ZP,{item:!0,xs:12,children:(0,v.jsx)(l.Z,{})}),""!==N&&(0,v.jsx)("div",{className:n.errorState,children:N}),!P&&(0,v.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),y||(C(!0),_(""),p.Z.invoke("PUT","/api/v1/namespaces/".concat(m,"/tenants/").concat(u,"/yaml"),{yaml:w}).then((function(e){C(!1),t((0,Z.v)()),_(""),i("/namespaces/".concat(m,"/tenants/").concat(u,"/summary"))})).catch((function(e){C(!1),_(e.errorMessage)})))},children:(0,v.jsxs)(c.ZP,{container:!0,children:[(0,v.jsx)(c.ZP,{item:!0,xs:12,children:(0,v.jsx)(j.Z,{children:"Tenant Specification"})}),(0,v.jsx)(c.ZP,{item:!0,xs:12,children:(0,v.jsx)(f.Z,{value:w,mode:"yaml",onBeforeChange:function(e,n,t){B(t)},editorHeight:"550px"})}),(0,v.jsxs)(c.ZP,{item:!0,xs:12,style:{textAlign:"right",paddingTop:16},children:[(0,v.jsx)(d.Z,{type:"button",variant:"outlined",color:"primary",disabled:y,onClick:function(){i("/namespaces/".concat(m,"/tenants/").concat(u,"/summary"))},children:"Cancel"}),(0,v.jsx)(d.Z,{type:"submit",variant:"contained",color:"primary",disabled:y||!H,style:{marginLeft:8},children:"Save"})]})]})})]})}))}}]);
//# sourceMappingURL=1507.e77d8b13.chunk.js.map
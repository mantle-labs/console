"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[9031],{88896:function(e,n,t){t.r(n);var r=t(37762),o=t(29439),l=(t(72791),t(51691)),u=t(2148),c=t(9505),i=t(75900),a=t(87995),s=t(25469),f=t(33168),d=t(80184);n.default=function(e){var n=e.selectedGroups,t=e.deleteOpen,p=e.closeDeleteModalAndRefresh,h=(0,s.TL)(),v=(0,f.$)().t,g=(0,c.Z)((function(){return p(!0)}),(function(e){h((0,a.Ih)(e)),p(!1)})),x=(0,o.Z)(g,2),_=x[0],j=x[1];if(!n)return null;var m=n.map((function(e){return(0,d.jsx)("div",{children:(0,d.jsx)("b",{children:e})},e)}));return(0,d.jsx)(u.Z,{title:"".concat(v("delete_group")).concat(n.length>1?"s":""),confirmText:v("delete"),isOpen:t,titleIcon:(0,d.jsx)(i.NvT,{}),isLoading:_,onConfirm:function(){var e,t=(0,r.Z)(n);try{for(t.s();!(e=t.n()).done;){var o=e.value;j("DELETE","/api/v1/group?name=".concat(o))}}catch(l){t.e(l)}finally{t.f()}},onClose:function(){return p(!1)},confirmationContent:(0,d.jsxs)(l.Z,{children:[v("are_you_sure_delete")," ",n.length," ",v("group"),n.length>1?"s?":"?",m]})})}}}]);
//# sourceMappingURL=9031.972c6592.chunk.js.map
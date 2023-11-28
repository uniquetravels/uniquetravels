(()=>{"use strict";var e={738:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var n=r(885),a=r(702);const i=r.p+"static/media/crysta.5e6f5b38c34045d989ef.jpg",s=r.p+"static/media/innova.7b586899807a7841c660.jpg",c=r.p+"static/media/sedan.1786a76c456a0553d5b6.jpg";var o=r(911),l=o.default.form`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  //   border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 250px;
  width: 40vw;
`,d=o.default.div`
  margin-bottom: 10px;

  label {
    display: block;
    font-weight: 500;
  }

  input,
  select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`,u=o.default.button`
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #0062cc;
  }
`,f=o.default.header`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
`,m=o.default.img`
  height: 50px;
  margin-right: 20px;
`,p=o.default.h1`
  font-size: 24px;
`,g=o.default.footer`
  background: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  justify-content: center;
`;const h=r.p+"static/media/logo.4cf9b2b9f3ff4cf27aff.jpg";var x=r(446);const j=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(f,{children:[(0,x.jsx)(m,{src:h}),(0,x.jsx)(p,{children:"Unique Car Rentals"})]}),(0,x.jsxs)("h2",{className:"service-heading",children:[(0,x.jsx)("span",{children:" Pune to Mumbai "}),(0,x.jsx)("span",{children:"Mumbai to Pune "}),(0,x.jsx)("span",{children:" One way cab service "})]})]})};const v=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:"One way limit is 170 Km. (After 170 KM, Extra Charges)"}),(0,x.jsx)("li",{children:"Sedan Rs.12/Km,Ertiga Rs,15/Km,Innova Rs.16/Km"}),(0,x.jsx)("li",{children:"Innova Crysta Rs. 19/Km"}),(0,x.jsx)("li",{children:"Toll-Tax & Parking Charges are Excluded."}),(0,x.jsx)("li",{children:"Additional Pickup & drop Charges will be Rs.300."}),(0,x.jsx)("li",{children:"There are no waiting charges up to the first 30 minutes. After 30Min. Waiting Charges will be RS.150 per hour."}),(0,x.jsx)("li",{children:"12 % GST is Applicable on Billing Amount."})]}),(0,x.jsx)(g,{className:"footer",children:"Contact - Aniket Jagtap 9763823232 / 9049183232, uniquetravels3232@gmail.com"})]})},b=r.p+"static/media/innova_old.42f68a62fcc56033eaac.jpg",y=r.p+"static/media/traveller.fbc4fbd66dd67c801348.jpg",O=r.p+"static/media/bus.d741d79cb1dd942d2dae.jpg";var w=r(942);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,w.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const P=function(){var e=(0,a.useState)({from:"",to:"",date:"",time:"",passengers:1,contact:"",car:"sedan"}),t=(0,n.default)(e,2),r=t[0],i=t[1],s=(0,a.useState)({}),c=(0,n.default)(s,2),o=c[0],f=c[1],m=function(e){return!!e};return(0,x.jsxs)(l,{onSubmit:function(e){if(e.preventDefault(),function(){var e,t={};return m(r.from)||(t.from="*"),m(r.to)||(t.to="*"),m(r.date)||(t.date="*"),m(r.time)||(t.time="*"),e=r.contact,/^\d{10}$/.test(e)||(t.contact="Invalid contact"),f((function(e){return C(C({},e),t)})),Object.keys(t).length>0}())console.log("inside");else{var t=`Hi Aniket, New Enquiry for cab: \nFrom: ${r.from}\nTo: ${r.to}\nDate: ${r.date}\nTime: ${r.time}\nPassengers: ${r.passengers}\nContact: ${r.contact}\nCar: ${r.car} \n Please reach out to me for any more details, looking forward to hear from you`,n=`https://wa.me/+919049183232?text=${encodeURIComponent(t)}`;window.open(n)}},className:"booking-form",children:[(0,x.jsx)("h4",{children:" Please fill out the below form for booking enquiry"}),(0,x.jsxs)(d,{children:[(0,x.jsx)("label",{children:"From"}),(0,x.jsx)("input",{value:r.from,onChange:function(e){return i(C(C({},r),{},{from:e.target.value}))}}),o.from&&(0,x.jsx)("span",{children:o.from},"from-error")]}),(0,x.jsxs)(d,{children:[(0,x.jsx)("label",{children:"To"}),(0,x.jsx)("input",{value:r.to,onChange:function(e){return i(C(C({},r),{},{to:e.target.value}))}}),o.to&&(0,x.jsx)("span",{children:o.to},"from-to")]}),(0,x.jsxs)(d,{children:[(0,x.jsx)("label",{children:"Date"}),(0,x.jsx)("input",{type:"date",value:r.date,onChange:function(e){return i(C(C({},r),{},{date:e.target.value}))}}),o.date&&(0,x.jsx)("span",{children:o.date},"from-date")]}),(0,x.jsxs)(d,{children:[(0,x.jsx)("label",{children:"Time"}),(0,x.jsx)("input",{type:"time",value:r.time,onChange:function(e){return i(C(C({},r),{},{time:e.target.value}))}}),o.time&&(0,x.jsx)("span",{children:o.time},"from-time")]}),(0,x.jsxs)(d,{children:[(0,x.jsx)("label",{children:"Passengers"}),(0,x.jsx)("input",{type:"number",value:r.passengers,onChange:function(e){return i(C(C({},r),{},{passengers:e.target.value}))}}),o.passengers&&(0,x.jsx)("span",{children:o.passengers},"from-passengers")]}),(0,x.jsxs)(d,{children:[(0,x.jsx)("label",{children:"Contact"}),(0,x.jsx)("input",{type:"number",maxLength:10,value:r.contact,onChange:function(e){return i(C(C({},r),{},{contact:e.target.value}))}}),o.contact&&(0,x.jsx)("span",{children:o.contact},"from-contact")]}),(0,x.jsxs)(d,{children:[(0,x.jsx)("label",{children:"Car"}),(0,x.jsx)("select",{value:r.car,onChange:function(e){return i(C(C({},r),{},{car:e.target.value}))},children:[{key:"sedan",text:"Sedan",value:"sedan"},{key:"suv",text:"SUV",value:"suv"},{key:"traveller",text:"Traveller",value:"traveller"},{key:"bus",text:"Bus",value:"bus"}].map((function(e){return(0,x.jsx)("option",{value:e.value,children:e.text},e.value)}))})]}),(0,x.jsx)(u,{type:"submit",children:"Enquire now"})]})};const N=function(){var e=(0,a.useState)({from:"",to:"",date:"",time:"",passengers:1,contact:"",car:""}),t=(0,n.default)(e,2),r=(t[0],t[1],(0,a.useState)(1)),o=(0,n.default)(r,2);o[0],o[1];return(0,x.jsxs)("div",{children:[(0,x.jsx)(j,{}),(0,x.jsxs)("div",{className:"container",onClick:function(){window.scrollTo(0,document.body.scrollHeight)},children:[(0,x.jsx)("div",{className:"left",children:(0,x.jsx)("img",{src:i,className:"car-image"})}),(0,x.jsx)("div",{children:(0,x.jsx)("img",{className:"car-image ",src:c})}),(0,x.jsx)("div",{className:"right",children:(0,x.jsx)("img",{className:"car-image right-image",src:s})}),(0,x.jsx)("div",{className:"right",children:(0,x.jsx)("img",{className:"car-image right-image",src:b})}),(0,x.jsx)("div",{className:"right",children:(0,x.jsx)("img",{className:"car-image right-image",src:y})}),(0,x.jsx)("div",{className:"right",children:(0,x.jsx)("img",{className:"car-image right-image",src:O})})]}),(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)(P,{}),(0,x.jsx)(v,{})]})]})}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,i)=>{if(!n){var s=1/0;for(d=0;d<e.length;d++){for(var[n,a,i]=e[d],c=!0,o=0;o<n.length;o++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[o])))?n.splice(o--,1):(c=!1,i<s&&(s=i));if(c){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,a,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/cab-inquiry/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,i,[s,c,o]=n,l=0;if(s.some((t=>0!==e[t]))){for(a in c)r.o(c,a)&&(r.m[a]=c[a]);if(o)var d=o(r)}for(t&&t(n);l<s.length;l++)i=s[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.nc=void 0;var n=r.O(void 0,[790],(()=>r(939)));n=r.O(n)})();
//# sourceMappingURL=main.ccc76346.js.map
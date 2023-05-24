import{h as o,p as y}from"./hooks.module.9ee1d4a4.js";import{h as N,a as v}from"./http.1ee0e3a2.js";import{p as k}from"./page.d4f83d9f.js";import{o as e}from"./jsxRuntime.module.8b00cb04.js";import"./preact.module.f1575aff.js";import"./jwt.2bcbdb7f.js";function $(){const[n,b]=o(""),[c,u]=o(""),[l,m]=o(""),[d,p]=o(""),[f,a]=o(""),[w,g]=o(""),[h,r]=o(!0),x=async s=>{if(s.preventDefault(),r(!0),a(""),g(""),l!==d){a("Passwords do not match"),r(!1);return}const{response:i,error:t}=await N("https://api.roadmap.sh/v1-update-password",{oldPassword:n==="email"?c:"social-auth",password:l,confirmPassword:d});if(t){a(t.message||"Something went wrong"),r(!1);return}a(""),u(""),m(""),p(""),g("Password updated successfully"),r(!1)},P=async()=>{r(!0);const{error:s,response:i}=await v("https://api.roadmap.sh/v1-me");if(s||!i){r(!1),a(s?.message||"Something went wrong");return}const{authProvider:t}=i;b(t),r(!1)};return y(()=>{P().finally(()=>{k.set("")})},[]),e("form",{onSubmit:x,children:[e("div",{class:"hidden md:block mb-8",children:[e("h2",{className:"text-3xl font-bold sm:text-4xl",children:"Password"}),e("p",{className:"mt-2",children:"Use the form below to update your password."})]}),e("div",{className:"space-y-4",children:[n==="email"&&e("div",{className:"flex w-full flex-col",children:[e("label",{for:"current-password",className:"text-sm leading-none text-slate-500",children:"Current Password"}),e("input",{disabled:n!=="email",type:"password",name:"current-password",id:"current-password",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-100",required:!0,minLength:6,placeholder:"Current password",value:c,onInput:s=>u(s.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"new-password",className:"text-sm leading-none text-slate-500",children:"New Password"}),e("input",{type:"password",name:"new-password",id:"new-password",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,minLength:6,placeholder:"New password",value:l,onInput:s=>m(s.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"new-password-confirmation",className:"text-sm leading-none text-slate-500",children:"Confirm New Password"}),e("input",{type:"password",name:"new-password-confirmation",id:"new-password-confirmation",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,minLength:6,placeholder:"Confirm New Password",value:d,onInput:s=>p(s.target.value)})]}),f&&e("p",{class:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:f}),w&&e("p",{class:"mt-2 rounded-lg bg-green-100 p-2 text-green-700",children:w}),e("button",{type:"submit",disabled:h,className:"inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",children:h?"Please wait...":"Update Password"})]})]})}export{$ as default};

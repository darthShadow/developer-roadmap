import{TeamDropdown as C}from"./TeamDropdown.d6e36f0d.js";import{D as T}from"./dropdown.d1f25819.js";import{u as w}from"./use-team-id.e5a3dc07.js";import{G as b}from"./group.ff3a3bf4.js";import{_ as x,h as n,p as $}from"./hooks.module.a8b17ad8.js";import{u as I}from"./index.ba97eea8.js";import{b as F}from"./team.12f2469e.js";import{u as E}from"./use-outside-click.01d1cb6f.js";import{u as P}from"./use-keydown.bd05fadb.js";import{h as _}from"./http.82ebf0f1.js";import{C as j}from"./CheckIcon.46047c78.js";import{o as e}from"./jsxRuntime.module.60258b2e.js";import{k as y}from"./preact.module.e5fe34f1.js";import"./use-auth.13ac07ad.js";import"./jwt.f0e0aa9c.js";import"./Spinner.402490df.js";import"./use-toast.fb52de5d.js";import"./toast.1fe7142d.js";import"./index.a98c85f5.js";const D="/_astro/team-progress.cad98aeb.svg",z="/_astro/cog.8b137a0f.svg",g="/_astro/chat.366065bd.svg",A="/_astro/map.6fd5e39b.svg";function M(s){const{onClose:c}=s,i=x(null),p=x(null),[d,m]=n(!1),[o,r]=n(""),[a,t]=n(""),[l,v]=n(!1),{teamId:k}=w();E(i,()=>{c()}),P("Escape",()=>{c()}),$(()=>{p.current?.focus()},[]);const N=async u=>{u.preventDefault(),m(!0),r("");const{response:S,error:f}=await _(`https://api.roadmap.sh/v1-submit-team-feedback/${k}`,{feedback:a});if(f||!S){m(!1),r(f?.message||"Something went wrong");return}v(!0)},h=()=>{m(!1),r(""),t(""),c()};return e("div",{class:"fixed left-0 right-0 top-0 z-50 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50",children:e("div",{class:"relative h-full w-full max-w-md p-4 md:h-auto",children:e("div",{ref:i,class:"popup-body relative rounded-lg bg-white p-4 shadow",children:[!l&&e(y,{children:[e("h2",{class:"text-xl font-semibold mb-1 text-black",children:"Enter your feedback"}),e("p",{className:"text-sm text-gray-500",children:"Help us improve your experience."}),e("form",{onSubmit:N,children:[e("div",{className:"my-4",children:[e("textarea",{ref:p,name:"submit-feedback",id:"submit-feedback",className:"mt-2 block min-h-[150px] w-full rounded-md border border-gray-300 px-3 py-2 outline-none placeholder:text-gray-400 resize-none",placeholder:"Enter your feedback",required:!0,autoFocus:!0,value:a,onInput:u=>t(u.target.value)}),o&&e("p",{className:"mt-2 rounded-md bg-red-100 p-2 text-red-700",children:o})]}),e("div",{className:"flex items-center gap-2",children:[e("button",{type:"button",disabled:d,onClick:h,className:"flex-grow cursor-pointer rounded-md bg-gray-200 py-2 text-center",children:"Cancel"}),e("button",{disabled:d,type:"submit",className:"flex-grow cursor-pointer rounded-md bg-black py-2 text-white disabled:opacity-40",children:d?"Please wait ..":"Send"})]})]})]}),l&&e("div",{className:"flex w-full flex-col items-center",children:[e(j,{additionalClasses:"w-14 h-14 text-green-500 mt-4"}),e("h1",{className:"mt-4 text-xl font-semibold text-black sm:text-2xl",children:"Feedback Submitted"}),e("p",{className:"text-center text-sm text-gray-500 sm:text-base",children:"Thank you for submitting your feedback."}),e("button",{type:"button",onClick:h,className:"mt-4 w-full flex-grow cursor-pointer rounded-lg bg-black py-2 text-center text-white disabled:opacity-40",children:"Close"})]})]})})})}const se=({activePageId:s,children:c})=>{const[i,p]=n(!1),d=I(F),[m,o]=n(!1),{teamId:r}=w(),a=[{title:"Progress",href:`/team/progress?t=${r}`,id:"progress",icon:D},{title:"Roadmaps",href:`/team/roadmaps?t=${r}`,id:"roadmaps",icon:A,hasWarning:d?.roadmaps?.length===0},{title:"Members",href:`/team/members?t=${r}`,id:"members",icon:b},{title:"Settings",href:`/team/settings?t=${r}`,id:"settings",icon:z}];return e(y,{children:[e("div",{class:"relative mb-5 block border-b p-4 shadow-inner md:hidden",children:[e("button",{class:"flex h-10 w-full items-center justify-between rounded-md border bg-white px-2 text-center text-sm font-medium text-gray-900",id:"settings-menu","aria-haspopup":"true","aria-expanded":"true",onClick:()=>p(!i),children:[a.find(t=>t.id===s)?.title,e("img",{alt:"menu",src:T,class:"h-4 w-4"})]}),i&&e("ul",{id:"settings-menu-dropdown",class:"absolute left-0 right-0 z-50 mt-1 space-y-1.5 bg-white p-2 shadow-lg",children:[e("li",{children:e("a",{href:"/team",class:`flex w-full items-center rounded px-3 py-1.5 text-sm text-slate-900 hover:bg-slate-200 ${s==="team"?"bg-slate-100":""}`,children:[e("img",{alt:"teams",src:b,class:"mr-2 h-4 w-4"}),"Personal Account / Teams"]})}),a.map(t=>{const l=s===t.id;return e("li",{children:e("a",{href:t.href,class:`flex w-full items-center rounded px-3 py-1.5 text-sm text-slate-900 hover:bg-slate-200 ${l?"bg-slate-100":""}`,children:[e("img",{alt:"menu icon",src:t.icon,className:"mr-2 h-4 w-4"}),t.title]})})}),e("li",{children:e("button",{className:"flex w-full items-center rounded px-3 py-1.5 text-sm text-slate-900 hover:bg-slate-200",onClick:()=>o(!0),children:[e("img",{alt:"menu icon",src:g,className:"mr-2 h-4 w-4"}),"Send Feedback"]})})]})]}),m&&e(M,{onClose:()=>{o(!1)}}),e("div",{class:"container flex min-h-screen items-stretch",children:[e("aside",{class:"hidden w-44 shrink-0 border-r border-slate-200 py-10 md:block",children:[e(C,{}),e("nav",{children:[e("ul",{class:"space-y-1",children:a.map(t=>{const l=s===t.id;return e("li",{children:e("a",{href:t.href,class:`font-regular flex w-full items-center border-r-2 px-2 py-1.5 text-sm ${l?"border-r-black bg-gray-100 text-black":"border-r-transparent text-gray-500 hover:border-r-gray-300"}`,children:e("span",{class:"flex flex-grow items-center justify-between",children:[e("span",{className:"flex",children:[e("img",{alt:"menu icon",src:t.icon,className:"relative top-[2px] mr-2 h-4 w-4"}),t.title]}),t.hasWarning&&e("span",{class:"relative mr-1 flex items-center",children:[e("span",{class:"relative rounded-full bg-red-200 p-1 text-xs"}),e("span",{class:"absolute bottom-0 left-0 right-0 top-0 animate-ping rounded-full bg-red-400 p-1 text-xs"})]})]})})})})}),e("button",{className:"mr-3 mt-4 flex items-center justify-center rounded-md border p-2 text-sm text-gray-500 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-black",onClick:()=>o(!0),children:[e("img",{src:g,className:"mr-2 h-4 w-4"}),"Send Feedback"]})]})]}),e("div",{className:"grow px-0 py-0 md:px-10 md:py-10",children:c})]})]})};export{se as TeamSidebar};

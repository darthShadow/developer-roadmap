import{r as n}from"./index.ed373d49.js";function w(e,t,s=[]){n.useEffect(()=>{const r=o=>{!e.startsWith("mod_")&&o.key.toLowerCase()===e.toLowerCase()?t():e.startsWith("mod_")&&o.metaKey&&o.key.toLowerCase()===e.replace("mod_","").toLowerCase()&&(o.preventDefault(),t())};return window.addEventListener("keydown",r),()=>{window.removeEventListener("keydown",r)}},s)}export{w as u};

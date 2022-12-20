import{u as _,A as g,g as v,a as o,w as c,o as V,d as r,b as e,e as f,n as b,t as y,f as k}from"./app-7cb71123.js";import{_ as n,a as i,b as d}from"./TextInput-5a2f6c0a.js";import{_ as x,a as h}from"./SecondaryButton-96a092a7.js";import{_ as $}from"./PrimaryButton-e4775d1b.js";const C={class:"space-y-6"},S=["onSubmit"],E=r("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Edit User ",-1),N={class:"my-6 space-y-4"},U={class:"flex justify-end"},q={__name:"Edit",props:{show:Boolean,user:Object},emits:["close"],setup(w,{emit:u}){const m=w,s=_({name:"",email:"",password:"",password_confirmation:""}),p=()=>{var t;s.put(route("user.update",(t=m.user)==null?void 0:t.id),{preserveScroll:!0,onSuccess:()=>{u("close"),s.reset()},onError:()=>null,onFinish:()=>null})};return g(()=>{var t,a;m.show&&(s.name=(t=m.user)==null?void 0:t.name,s.email=(a=m.user)==null?void 0:a.email)}),(t,a)=>(V(),v("section",C,[o(x,{show:m.show,onClose:a[5]||(a[5]=l=>u("close"))},{default:c(()=>[r("form",{class:"p-6",onSubmit:k(p,["prevent"])},[E,r("div",N,[r("div",null,[o(n,{for:"name",value:"Name"}),o(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(s).name,"onUpdate:modelValue":a[0]||(a[0]=l=>e(s).name=l),required:"",placeholder:"Your Name"},null,8,["modelValue"]),o(d,{class:"mt-2",message:e(s).errors.name},null,8,["message"])]),r("div",null,[o(n,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[1]||(a[1]=l=>e(s).email=l),placeholder:"email@email.com"},null,8,["modelValue"]),o(d,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),r("div",null,[o(n,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[2]||(a[2]=l=>e(s).password=l),placeholder:"********"},null,8,["modelValue"]),o(d,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),r("div",null,[o(n,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=l=>e(s).password_confirmation=l),placeholder:"********"},null,8,["modelValue"]),o(d,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])])]),r("div",U,[o(h,{disabled:e(s).processing,onClick:a[4]||(a[4]=l=>u("close"))},{default:c(()=>[f(" Close ")]),_:1},8,["disabled"]),o($,{class:b(["ml-3",{"opacity-25":e(s).processing}]),disabled:e(s).processing,onClick:p},{default:c(()=>[f(y(e(s).processing?"Save...":"Save"),1)]),_:1},8,["class","disabled"])])],40,S)]),_:1},8,["show"])]))}};export{q as default};

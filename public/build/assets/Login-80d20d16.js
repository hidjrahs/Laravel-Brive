import{y as b,h as w,C as x,b as s,o as d,g as h,m as v,u as V,c,w as m,a as t,H as C,t as u,i as f,d as r,L as $,e as p,n as B,f as L}from"./app-c8340b05.js";import{_ as N}from"./GuestLayout-65aadcfa.js";import{_ as g,a as _}from"./InputLabel-ce79452e.js";import{_ as R}from"./PrimaryButton-1ed464db.js";import{_ as k}from"./TextInput-50db1fbb.js";import"./index-666e5077.js";const S=["value"],U={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const i=l,n=b({get(){return i.checked},set(a){e("update:checked",a)}});return(a,o)=>w((d(),h("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=y=>v(n)?n.value=y:null),class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"},null,8,S)),[[x,s(n)]])}},q={key:0,class:"mb-4 font-medium text-sm text-green-600"},F=["onSubmit"],P={class:"mt-4"},D={class:"block mt-4"},E={class:"flex items-center"},H=r("span",{class:"ml-2 text-sm text-gray-600 dark:text-gray-400"},"Remember me",-1),M={class:"flex items-center justify-between mt-4"},J={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=V({email:"",password:"",remember:!1}),i=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(n,a)=>(d(),c(N,null,{default:m(()=>[t(s(C),{title:"Log in"}),l.status?(d(),h("div",q,u(l.status),1)):f("",!0),r("form",{onSubmit:L(i,["prevent"])},[r("div",null,[t(g,{for:"email",value:"Email"}),t(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[0]||(a[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username",placeholder:"email@email.com"},null,8,["modelValue"]),t(_,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",P,[t(g,{for:"password",value:"Password"}),t(k,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[1]||(a[1]=o=>s(e).password=o),required:"",autocomplete:"current-password",placeholder:"********"},null,8,["modelValue"]),t(_,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",D,[r("label",E,[t(U,{name:"remember",checked:s(e).remember,"onUpdate:checked":a[2]||(a[2]=o=>s(e).remember=o)},null,8,["checked"]),H])]),r("div",M,[l.canResetPassword?(d(),c(s($),{key:0,href:n.route("password.request"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:m(()=>[p(" Forgot your password? ")]),_:1},8,["href"])):f("",!0),t(R,{class:B(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[p(u(s(e).processing?"Log in...":"Log in"),1)]),_:1},8,["class","disabled"])])],40,F)]),_:1}))}};export{J as default};

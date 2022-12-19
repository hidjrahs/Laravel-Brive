import{u as c,c as u,w as r,o as i,a,b as s,H as _,g as f,t as m,i as p,d as t,e as w,n as g,f as k}from"./app-c8340b05.js";import{_ as x}from"./GuestLayout-65aadcfa.js";import{_ as y,a as b}from"./InputLabel-ce79452e.js";import{_ as h}from"./PrimaryButton-1ed464db.js";import{_ as V}from"./TextInput-50db1fbb.js";import"./index-666e5077.js";const v=t("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},R={__name:"ForgotPassword",props:{status:String},setup(o){const e=c({email:""}),n=()=>{e.post(route("password.email"))};return(E,l)=>(i(),u(x,null,{default:r(()=>[a(s(_),{title:"Forgot Password"}),v,o.status?(i(),f("div",N,m(o.status),1)):p("",!0),t("form",{onSubmit:k(n,["prevent"])},[t("div",null,[a(y,{for:"email",value:"Email"}),a(V,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":l[0]||(l[0]=d=>s(e).email=d),required:"",autofocus:"",autocomplete:"username",placeholder:"email@email.com"},null,8,["modelValue"]),a(b,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",B,[a(h,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:r(()=>[w(m(s(e).processing?"Email Password Reset Link...":"Email Password Reset Link"),1)]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{R as default};

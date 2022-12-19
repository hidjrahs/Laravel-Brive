import{u as p,c as f,w as n,o as _,a,b as s,H as w,d as l,e as d,L as g,t as V,n as y,f as v}from"./app-c8340b05.js";import{_ as b}from"./GuestLayout-65aadcfa.js";import{_ as t,a as m}from"./InputLabel-ce79452e.js";import{_ as k}from"./PrimaryButton-1ed464db.js";import{_ as i}from"./TextInput-50db1fbb.js";import"./index-666e5077.js";const x=["onSubmit"],h={class:"mt-4"},N={class:"mt-4"},$={class:"mt-4"},q={class:"flex items-center justify-between mt-4"},L={__name:"Register",setup(R){const e=p({name:"",email:"",password:"",password_confirmation:"",terms:!1}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(c,o)=>(_(),f(b,null,{default:n(()=>[a(s(w),{title:"Register"}),l("form",{onSubmit:v(u,["prevent"])},[l("div",null,[a(t,{for:"name",value:"Name"}),a(i,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).name=r),required:"",autofocus:"",autocomplete:"name",placeholder:"Your Name"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),l("div",h,[a(t,{for:"email",value:"Email"}),a(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).email=r),required:"",autocomplete:"username",placeholder:"email@email.com"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),l("div",N,[a(t,{for:"password",value:"Password"}),a(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).password=r),required:"",autocomplete:"new-password",placeholder:"********"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),l("div",$,[a(t,{for:"password_confirmation",value:"Confirm Password"}),a(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>s(e).password_confirmation=r),required:"",autocomplete:"new-password",placeholder:"********"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),l("div",q,[a(s(g),{href:c.route("login"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:n(()=>[d(" Already registered? ")]),_:1},8,["href"]),a(k,{class:y(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[d(V(s(e).processing?"Register...":"Register"),1)]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{L as default};

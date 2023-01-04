import{P as j,R as I,z as V,S as b,U as B,g,a as r,b as d,w as u,F as k,o as i,H as P,d as t,j as p,v as m,e as x,t as n,c as w,E as D,C as U,D as N}from"./app-676579bc.js";import{_ as E,a as A,e as F}from"./AuthenticatedLayout-c0e69c2a.js";import{a as H}from"./TextInput-aa998ce8.js";import{_ as z}from"./PrimaryButton-66c0d4db.js";import{r as $,a as _,_ as L,b as M,c as R}from"./InfoButton-6eb0934c.js";import{_ as T}from"./SelectInput-f4b711b9.js";import{_ as O}from"./DangerButton-e24411f3.js";import q from"./Create-ef3ef980.js";import G from"./Edit-9ace66a9.js";import J from"./Delete-4beaa7b4.js";import K from"./DeleteBulk-b76d8c81.js";import{_ as Q}from"./Checkbox-e04162d6.js";import"./index-88aa58d5.js";import"./SecondaryButton-b5e13768.js";const W={class:"space-y-4"},X={class:"px-4 sm:px-0"},Y={class:"rounded-lg overflow-hidden w-fit"},Z={class:"relative bg-white dark:bg-gray-800 shadow sm:rounded-lg"},ee={class:"flex justify-between p-2"},te={class:"flex space-x-2"},se={class:"overflow-x-auto scrollbar-table"},le={class:"w-full"},ae={class:"uppercase text-sm border-t border-gray-200 dark:border-gray-700"},re={class:"dark:bg-gray-900/50 text-left"},oe={class:"px-2 py-4 text-center"},ne=t("th",{class:"px-2 py-4 text-center"},"#",-1),de={class:"flex justify-between items-center"},ie={class:"flex justify-between items-center"},pe={class:"px-2 py-4"},ce={class:"flex justify-between items-center"},ue={class:"flex justify-between items-center"},me=t("th",{class:"px-2 py-4 sr-only"},"Action",-1),fe={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},he=["value"],_e={class:"whitespace-nowrap py-4 px-2 sm:py-3 text-center"},ye={class:"whitespace-nowrap py-4 px-2 sm:py-3"},be={class:"flex justify-start items-center"},ge={class:"whitespace-nowrap py-4 px-2 sm:py-3"},we={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ve={class:"whitespace-nowrap py-4 px-2 sm:py-3"},ke={class:"whitespace-nowrap py-4 px-2 sm:py-3"},xe={class:"whitespace-nowrap py-4 px-2 sm:py-3"},$e={class:"flex justify-center items-center"},Oe={class:"rounded-md overflow-hidden"},Ce={class:"flex justify-between items-center p-2 border-t border-gray-200 dark:border-gray-700"},Le={__name:"Index",props:{title:String,filters:Object,users:Object,roles:Object,breadcrumbs:Object,perPage:Number},setup(f){const o=f,e=j({params:{search:o.filters.search,field:o.filters.field,order:o.filters.order,perPage:o.perPage},selectedId:[],multipleSelect:!1,createOpen:!1,editOpen:!1,deleteOpen:!1,deleteBulkOpen:!1,user:null,dataSet:I().props.value.app.perpage}),h=a=>{e.params.field=a,e.params.order=e.params.order==="asc"?"desc":"asc"};V(()=>b.exports._.cloneDeep(e.params),b.exports.debounce(()=>{let a=b.exports.pickBy(e.params);B.Inertia.get(route("user.index"),a,{replace:!0,preserveState:!0,preserveScroll:!0})},150));const C=a=>{var s;a.target.checked===!1?e.selectedId=[]:(s=o.users)==null||s.data.forEach(c=>{e.selectedId.push(c.id)})},S=()=>{var a;((a=o.users)==null?void 0:a.data.length)==e.selectedId.length?e.multipleSelect=!0:e.multipleSelect=!1};return(a,s)=>{const c=U("tooltip");return i(),g(k,null,[r(d(P),{title:o.title},null,8,["title"]),r(E,null,{default:u(()=>[r(A,{title:f.title,breadcrumbs:f.breadcrumbs},null,8,["title","breadcrumbs"]),t("div",W,[t("div",X,[t("div",Y,[p(r(z,{class:"rounded-none",onClick:s[0]||(s[0]=l=>e.createOpen=!0)},{default:u(()=>[x(n(a.lang().button.add),1)]),_:1},512),[[m,a.can(["create user"])]]),r(q,{show:e.createOpen,onClose:s[1]||(s[1]=l=>e.createOpen=!1),roles:o.roles,title:o.title},null,8,["show","roles","title"]),r(G,{show:e.editOpen,onClose:s[2]||(s[2]=l=>e.editOpen=!1),user:e.user,roles:o.roles,title:o.title},null,8,["show","user","roles","title"]),r(J,{show:e.deleteOpen,onClose:s[3]||(s[3]=l=>e.deleteOpen=!1),user:e.user,title:o.title},null,8,["show","user","title"]),r(K,{show:e.deleteBulkOpen,onClose:s[4]||(s[4]=l=>(e.deleteBulkOpen=!1,e.multipleSelect=!1,e.selectedId=[])),selectedId:e.selectedId,title:o.title},null,8,["show","selectedId","title"])])]),t("div",Z,[t("div",ee,[t("div",te,[r(T,{modelValue:e.params.perPage,"onUpdate:modelValue":s[5]||(s[5]=l=>e.params.perPage=l),dataSet:e.dataSet},null,8,["modelValue","dataSet"]),p((i(),w(O,{onClick:s[6]||(s[6]=l=>e.deleteBulkOpen=!0),class:"px-3 py-1.5"},{default:u(()=>[r(d($),{class:"w-5 h-5"})]),_:1})),[[m,e.selectedId.length!=0&&a.can(["delete user"])],[c,a.lang().tooltip.delete_selected]])]),r(H,{modelValue:e.params.search,"onUpdate:modelValue":s[7]||(s[7]=l=>e.params.search=l),type:"text",class:"block w-3/6 md:w-2/6 lg:w-1/6 rounded-lg",placeholder:a.lang().placeholder.search},null,8,["modelValue","placeholder"])]),t("div",se,[t("table",le,[t("thead",ae,[t("tr",re,[t("th",oe,[r(Q,{checked:e.multipleSelect,"onUpdate:checked":s[8]||(s[8]=l=>e.multipleSelect=l),onChange:C},null,8,["checked"])]),ne,t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[9]||(s[9]=l=>h("name"))},[t("div",de,[t("span",null,n(a.lang().label.name),1),r(d(_),{class:"w-4 h-4"})])]),t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[10]||(s[10]=l=>h("email"))},[t("div",ie,[t("span",null,n(a.lang().label.email),1),r(d(_),{class:"w-4 h-4"})])]),t("th",pe,n(a.lang().label.role),1),t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[11]||(s[11]=l=>h("created_at"))},[t("div",ce,[t("span",null,n(a.lang().label.created),1),r(d(_),{class:"w-4 h-4"})])]),t("th",{class:"px-2 py-4 cursor-pointer",onClick:s[12]||(s[12]=l=>h("updated_at"))},[t("div",ue,[t("span",null,n(a.lang().label.updated),1),r(d(_),{class:"w-4 h-4"})])]),me])]),t("tbody",null,[(i(!0),g(k,null,D(f.users.data,(l,v)=>(i(),g("tr",{key:v,class:"border-t border-gray-200 dark:border-gray-700 hover:bg-gray-200/30 hover:dark:bg-gray-900/20"},[t("td",fe,[p(t("input",{class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-primary dark:text-primary shadow-sm focus:ring-primary/80 dark:focus:ring-primary dark:focus:ring-offset-gray-800 dark:checked:bg-primary dark:checked:border-primary",type:"checkbox",onChange:S,value:l.id,"onUpdate:modelValue":s[13]||(s[13]=y=>e.selectedId=y)},null,40,he),[[N,e.selectedId]])]),t("td",_e,n(++v),1),t("td",ye,[t("span",be,[x(n(l.name)+" ",1),p(r(d(F),{class:"ml-[2px] w-4 h-4 text-primary dark:text-white"},null,512),[[m,l.email_verified_at]])])]),t("td",ge,n(l.email),1),t("td",we,n(l.roles.length==0?"not selected":l.roles[0].name),1),t("td",ve,n(l.created_at),1),t("td",ke,n(l.updated_at),1),t("td",xe,[t("div",$e,[t("div",Oe,[p((i(),w(M,{type:"button",onClick:y=>(e.editOpen=!0,e.user=l),class:"px-2 py-1.5 rounded-none"},{default:u(()=>[r(d(R),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[m,a.can(["update user"])],[c,a.lang().tooltip.edit]]),p((i(),w(O,{type:"button",onClick:y=>(e.deleteOpen=!0,e.user=l),class:"px-2 py-1.5 rounded-none"},{default:u(()=>[r(d($),{class:"w-4 h-4"})]),_:2},1032,["onClick"])),[[m,a.can(["delete user"])],[c,a.lang().tooltip.delete]])])])])]))),128))])])]),t("div",Ce,[r(L,{links:o.users,filters:e.params},null,8,["links","filters"])])])])]),_:1})],64)}}};export{Le as default};

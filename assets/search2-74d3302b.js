import{_ as f,a as y}from"./027_02-2-2a4a0246.js";import{_ as d}from"./QueryTable-acb810f9.js";import{u as b,l as i,m as k,o as a,c as u,d as s,f as o,n as m,F as g,b as _,k as C}from"./index-55faa955.js";import"./11_08-ed8f2ac7.js";const P={key:0},V=_("td",{style:{"line-height":"0"}},[_("img",{src:y,width:"800",height:"49"})],-1),B=[V],L={__name:"search2",setup(N){const n=b(),t=i(1),c=i([]);function h(e){let l={year:e.year,branchCity:e.branchCity,branchCityArea:e.branchCityArea,brancName:e.branchName};C.post("/api/form/closes",l).then(r=>{r&&r.length>=1?(c.value=r,t.value++):alert("尚無資料")}).catch(r=>{console.log("err",r)})}return k(()=>n.stepValue,e=>{e==1&&(t.value=e),n.stepValue=0}),(e,l)=>{const r=d,p=f;return a(),u(g,null,[s(t)==1?(a(),u("tr",P,B)):o("",!0),s(t)==1?(a(),m(r,{key:1,onParser:h,queryMode:!0})):o("",!0),s(t)==2?(a(),m(p,{key:2,modelValue:s(c),onParser:e.searchParser,queryMode:!0},null,8,["modelValue","onParser"])):o("",!0)],64)}}};export{L as default};

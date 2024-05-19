"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[2538],{1129:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var n=t(5893),r=t(1151),i=t(1824);const a={sidebar_position:1},l="Getting Started",d={id:"getting-started",title:"Getting Started",description:"Overview",source:"@site/docs/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/kube-green/kube-green.github.io/edit/main/docs/getting-started.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"How it works",permalink:"/docs/lifecycle"}},o={},u=[{value:"Overview",id:"overview",level:2},{value:"Tutorials",id:"tutorials",level:2},{value:"Install",id:"install",level:2},{value:"Create and deploy SleepInfo",id:"create-and-deploy-sleepinfo",level:2},{value:"Real use cases",id:"real-use-cases",level:2}];function c(e){const s={a:"a",br:"br",em:"em",h1:"h1",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(s.p,{children:["How many of your dev/preview pods stay on during weekends? Or at night? It's a waste of resources! And money! But fear not, ",(0,n.jsx)(s.em,{children:"kube-green"})," is here to the rescue."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.em,{children:"kube-green"})," is a simple k8s addon that automatically shuts down (some of) your resources when you don't need them."]}),"\n",(0,n.jsxs)(s.p,{children:["How many CO2 produces yearly a pod?",(0,n.jsx)(s.br,{}),"\n","By our assumption, it's about 11 Kg CO2eq per year per pod (",(0,n.jsx)(s.a,{href:"/docs/FAQ#how-many-co2-is-produced-by-pod",children:"here"})," the calculation)."]}),"\n",(0,n.jsx)(s.p,{children:"Use this tool to calculate it:"}),"\n","\n",(0,n.jsx)(i.Z,{}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(s.p,{children:["Keep reading to find out how to use it, and if you have ideas on how to improve ",(0,n.jsx)(s.em,{children:"kube-green"}),", ",(0,n.jsx)(s.a,{href:"https://github.com/kube-green/kube-green/issues/new",children:"open an issue"})," or ",(0,n.jsx)(s.a,{href:"https://github.com/kube-green/kube-green/discussions/new",children:"start a discussion"}),", we'd love to hear them!"]}),"\n",(0,n.jsx)(s.h2,{id:"tutorials",children:"Tutorials"}),"\n",(0,n.jsxs)(s.p,{children:["Try our tutorials to get started. Are available ",(0,n.jsx)(s.a,{href:"/docs/tutorials/kind",children:"here"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"install",children:"Install"}),"\n",(0,n.jsxs)(s.p,{children:["To start using kube-green, you need to install it in a kubernetes cluster.\n",(0,n.jsx)(s.a,{href:"/docs/install",children:"Click here"})," to see how to install."]}),"\n",(0,n.jsx)(s.h2,{id:"create-and-deploy-sleepinfo",children:"Create and deploy SleepInfo"}),"\n",(0,n.jsxs)(s.p,{children:["You can take a look at example configuration ",(0,n.jsx)(s.a,{href:"https://github.com/kube-green/kube-green/tree/main/testdata",children:"available here"}),", or create it with the docs ",(0,n.jsx)(s.a,{href:"/docs/configuration",children:"here"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["And that's it! Now, let ",(0,n.jsx)(s.em,{children:"kube-green"})," to sleep your pods and to save CO2!"]}),"\n",(0,n.jsx)(s.h2,{id:"real-use-cases",children:"Real use cases"}),"\n",(0,n.jsxs)(s.p,{children:["To see the real use case example, check ",(0,n.jsx)(s.a,{href:"/docs/real-usecase/first-usage",children:"here"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1824:(e,s,t)=>{t.d(s,{Z:()=>o});var n=t(7294),r=t(9887),i=t.n(r),a=t(512);const l={inputCalc:"inputCalc_Frxq",inputWrapper:"inputWrapper_O3Zi",card:"card_c9eN",cardBody:"cardBody_FCxH",subTitle:"subTitle_Vwj9"};var d=t(5893);function o(){const[e,s]=n.useState(new(i())(11)),[t,r]=n.useState(new(i())(100)),[o,u]=n.useState(new(i())(100)),[p,g]=n.useState(new(i())(128)),x=n.useMemo((()=>c(e,t,o,p)),[e,t,o,p]),m=n.useMemo((()=>c(e,t,o,new(i())(0))),[e,t,o]),b=n.useMemo((()=>new(i())(x).minus(m).dividedBy(m).mul(100).toDecimalPlaces(1).abs().toString()),[m,x]);return(0,d.jsxs)("div",{className:(0,a.Z)(l.card,"card"),children:[(0,d.jsx)("div",{className:"card__header",children:(0,d.jsx)("h2",{children:"CO2 Calculator"})}),(0,d.jsxs)("div",{className:"card__body",children:[(0,d.jsxs)("div",{className:l.cardBody,children:[(0,d.jsx)(h,{label:"CO2 per pods per year (kg CO2eq)",onInputChange:s,value:e}),(0,d.jsx)(h,{label:"Total number of pods",onInputChange:r,value:t}),(0,d.jsx)(h,{label:"Total pods when kube-green active",onInputChange:u,value:o}),(0,d.jsx)(h,{label:"Hour of sleep per week",onInputChange:g,value:p})]}),(0,d.jsxs)("h3",{children:["Results",(0,d.jsx)("div",{className:l.subTitle,children:"Total (Kg CO2eq/week)"})]}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("b",{children:[b,"% CO2 saved"]})," ","with kube-green"]}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:["without kube-green:"," ",m.toString()]}),(0,d.jsx)("div",{children:(0,d.jsxs)("b",{children:["with kube-green:"," ",x.toString()]})})]})]})]})}const u=new(i())(7).mul(new(i())(24));function c(e,s,t,n){const r=e.dividedBy(365).dividedBy(24),i=r.mul(s.minus(t)).mul(n),a=r.mul(s).mul(u.minus(n));return i.plus(a).toDecimalPlaces(0)}function h(e){let{label:s,value:t,onInputChange:n}=e;return(0,d.jsxs)("div",{className:l.inputWrapper,children:[(0,d.jsx)("div",{children:s}),(0,d.jsx)("div",{children:(0,d.jsx)("input",{className:l.inputCalc,onChange:e=>n(new(i())(e.target.value||0)),type:"number",value:t.toString()})})]})}}}]);
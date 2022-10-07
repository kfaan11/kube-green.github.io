"use strict";(self.webpackChunkkube_green_github_io=self.webpackChunkkube_green_github_io||[]).push([[3565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=o(n),d=l,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:1},i="Usage with kind",s={unversionedId:"tutorials/kind",id:"tutorials/kind",title:"Usage with kind",description:"You could try kube-green locally, to test how it works.",source:"@site/docs/tutorials/kind.md",sourceDirName:"tutorials",slug:"/tutorials/kind",permalink:"/docs/tutorials/kind",draft:!1,editUrl:"https://github.com/kube-green/kube-green.github.io/edit/main/docs/tutorials/kind.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cluster downscale",permalink:"/docs/real-usecase/node-downscale"},next:{title:"Uninstall",permalink:"/docs/advanced/uninstall"}},p={},o=[{value:"Install tools",id:"install-tools",level:2},{value:"Create a cluster",id:"create-a-cluster",level:2},{value:"Install the cert-manager",id:"install-the-cert-manager",level:2},{value:"Install kube-green",id:"install-kube-green",level:2},{value:"Test usage",id:"test-usage",level:2},{value:"Setup namespace",id:"setup-namespace",level:3},{value:"Setup kube-green in application namespace",id:"setup-kube-green-in-application-namespace",level:3}],c={toc:o};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"usage-with-kind"},"Usage with kind"),(0,l.kt)("p",null,"You could try ",(0,l.kt)("em",{parentName:"p"},"kube-green")," locally, to test how it works."),(0,l.kt)("p",null,"In this tutorial we will use ",(0,l.kt)("inlineCode",{parentName:"p"},"kind")," to have a kubernetes cluster running locally, but you can use any other alternatives."),(0,l.kt)("h2",{id:"install-tools"},"Install tools"),(0,l.kt)("p",null,"To follow this guide, you should have ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"kind")," installed locally."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The kubernetes command line tool: ",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"kubectl")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"docker")),(0,l.kt)("li",{parentName:"ul"},"Run kubernetes locally: ",(0,l.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installation"},"kind"))),(0,l.kt)("p",null,"Now you have all the tools needed, let's go!"),(0,l.kt)("h2",{id:"create-a-cluster"},"Create a cluster"),(0,l.kt)("p",null,"Create a cluster with kind is very simple, just"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kind create cluster --name kube-green\n")),(0,l.kt)("h2",{id:"install-the-cert-manager"},"Install the cert-manager"),(0,l.kt)("p",null,"With this command, the latest release of ",(0,l.kt)("em",{parentName:"p"},"cert-manager")," will be installed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://github.com/jetstack/cert-manager/releases/latest/download/cert-manager.yaml\n")),(0,l.kt)("p",null,"You can check the correct ",(0,l.kt)("em",{parentName:"p"},"cert-manager")," deploy verifying that all the pods are correctly running."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n cert-manager get pods\n")),(0,l.kt)("h2",{id:"install-kube-green"},"Install kube-green"),(0,l.kt)("p",null,"Install ",(0,l.kt)("em",{parentName:"p"},"kube-green")," with default static install. ",(0,l.kt)("a",{parentName:"p",href:"/docs/install"},"Click here")," to see the different install methods supported."),(0,l.kt)("p",null,"Install ",(0,l.kt)("em",{parentName:"p"},"kube-green")," with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://github.com/kube-green/kube-green/releases/latest/download/kube-green.yaml\n")),(0,l.kt)("p",null,"This command create a ",(0,l.kt)("em",{parentName:"p"},"kube-green")," namespace and deploy a ",(0,l.kt)("em",{parentName:"p"},"kube-green-controller-manager"),".\nYou can check that the pod is correctly running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n kube-green get pods\n")),(0,l.kt)("h2",{id:"test-usage"},"Test usage"),(0,l.kt)("p",null,"To test ",(0,l.kt)("em",{parentName:"p"},"kube-green"),", we reproduce a correctly working namespace with some pod active handled by Deployment.\nAt this point, set the CRD and show the changes in the namespace."),(0,l.kt)("h3",{id:"setup-namespace"},"Setup namespace"),(0,l.kt)("p",null,"So, create a namespace ",(0,l.kt)("em",{parentName:"p"},"sleep-test")," and install two simple Deployment with replicas set to 1 and another with replicas more than 1.\nIn this tutorial, it is used the ",(0,l.kt)("inlineCode",{parentName:"p"},"davidebianchi/echo-service")," service."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns sleepme\nkubectl -n sleepme create deploy echo-service-replica-1 --image=davidebianchi/echo-service\nkubectl -n sleepme create deploy do-not-sleep --image=davidebianchi/echo-service\nkubectl -n sleepme create deploy echo-service-replica-4 --image=davidebianchi/echo-service --replicas 4\n")),(0,l.kt)("p",null,"You should have 6 pods running in the namespace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n sleepme get pods\n")),(0,l.kt)("p",null,"Should output something like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"NAME                                      READY   STATUS    RESTARTS   AGE\ndo-not-sleep-5b88f75df7-wmms2             1/1     Running   0          107s\necho-service-replica-1-6845b564c6-zvt7x   1/1     Running   0          102s\necho-service-replica-4-5f97664965-22kmw   1/1     Running   0          115s\necho-service-replica-4-5f97664965-2x9dj   1/1     Running   0          115s\necho-service-replica-4-5f97664965-6wpb7   1/1     Running   0          115s\necho-service-replica-4-5f97664965-pcl6q   1/1     Running   0          115s\n")),(0,l.kt)("h3",{id:"setup-kube-green-in-application-namespace"},"Setup kube-green in application namespace"),(0,l.kt)("p",null,"To setup ",(0,l.kt)("em",{parentName:"p"},"kube-green"),", the SleepInfo resource must be created in ",(0,l.kt)("em",{parentName:"p"},"sleepme")," namespace."),(0,l.kt)("p",null,"The desired configuration is:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"echo-service-replica-1")," sleep"),(0,l.kt)("li",{parentName:"ul"},"all replicas of ",(0,l.kt)("em",{parentName:"li"},"echo-service-replica-4")," sleep"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"do-not-sleep")," pod is unchanged")),(0,l.kt)("p",null,"At the sleep, ",(0,l.kt)("em",{parentName:"p"},"echo-service-replica-1")," will wake up with the previous 1 replica, and ",(0,l.kt)("em",{parentName:"p"},"echo-service-replica-4")," will wake up with 4 replicas as before.",(0,l.kt)("br",{parentName:"p"}),"\n","So, after the sleep, we expect 1 pod active and at after the wake up we still expect 6 pods active."),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"SleepInfo")," could be written in this way to sleep every 5th minute and wake up every 7th minute."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kube-green.com/v1alpha1\nkind: SleepInfo\nmetadata:\n  name: sleep-test\nspec:\n  weekdays: "*"\n  sleepAt: "*:*/5"\n  wakeUpAt: "*:*/7"\n  excludeRef:\n    - apiVersion: "apps/v1"\n      kind:       Deployment\n      name:       do-not-sleep\n')),(0,l.kt)("p",null,"It is possible to change the configuration in a more realistic way adding fixed interval. So, if now it's the 16:00 in Italy, for example, we could set to sleep at 16:03 and wake up at 16:05."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: kube-green.com/v1alpha1\nkind: SleepInfo\nmetadata:\n  name: sleep-test\nspec:\n  weekdays: "*"\n  sleepAt: "16:03"\n  wakeUpAt: "16:05"\n  timeZone: "Europe/Rome"\n  excludeRef:\n    - apiVersion: "apps/v1"\n      kind:       Deployment\n      name:       do-not-sleep\n')),(0,l.kt)("p",null,"So, copy and modify the configuration file you want in a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"sleepinfo.yaml"),", and apply to the ",(0,l.kt)("em",{parentName:"p"},"sleepme")," namespace and watch the pod in namespace"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n sleepme apply -f sleepinfo.yaml\n")),(0,l.kt)("p",null,"And watch the pods in namespace. If you have configured ",(0,l.kt)("inlineCode",{parentName:"p"},"watch")," command, you could use"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"watch kubectl -n sleepme get pods\n")),(0,l.kt)("p",null,"otherwise"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n sleepme get pods -w\n")),(0,l.kt)("p",null,"At the time set in the configuration for the sleep, all pods except the ",(0,l.kt)("em",{parentName:"p"},"do-not-sleep")," should sleep. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"NAME                            READY   STATUS    RESTARTS   AGE\ndo-not-sleep-5b88f75df7-wmms2   1/1     Running   0          13m\n")),(0,l.kt)("p",null,"At the time set in the configuration for the wake up, all pods will wake up at the initial number of replicas"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"NAME                                      READY   STATUS    RESTARTS   AGE\ndo-not-sleep-5b88f75df7-wmms2             1/1     Running   0          16m\necho-service-replica-1-6845b564c6-hbjv9   1/1     Running   0          92s\necho-service-replica-4-5f97664965-42xbs   1/1     Running   0          92s\necho-service-replica-4-5f97664965-9wbqn   1/1     Running   0          92s\necho-service-replica-4-5f97664965-c4kzf   1/1     Running   0          92s\necho-service-replica-4-5f97664965-n72tr   1/1     Running   0          92s\n")))}u.isMDXComponent=!0}}]);
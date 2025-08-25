import{_,N as w}from"./OuterLeagueLogo-Bq_WKjt0.js";import{d as b,T as L}from"./marked.esm-Cupjb65a.js";import{_ as m,c as p,o as h,a as s,b as T,d as v,e as f,f as c,g as d}from"./index-B2-VNebP.js";const y={name:"LePrecipiRules",setup(){const i=`
# Le Precipi Information:

Welcome to **Le Precipi**! The Outer God *Oedon* needs your help in taking over the Lands Between, and doesn't want to disturb The Capital, who owns access to the Dectus Lift, just yet. So to have better access to Altus and Liurnia he needs you to clear out the *Red Bear* blocking the Elevator at "**Le Precipi**". 

Oedon will be handing out **Cosmic Embers** for those who can overcome this challenge.

The Goal is simple: Complete **Le Precipi** Hitless. Due to *Oedon's* Arrival, some items and weapons work differently, so make sure to test everything out to accomplish a run. 

All Tools are Allowed for Testing such as Souls Speedruns Save Organizer and ERTool. In fact it's highly encouraged.

You can get a **Cosmic Ember** to your name by:
- Completing Le Precipi Hitless (No Deadline)
- Defeating the All Enemies in Le Precipi Hitless (No Deadline)
- Completing Le Precipi in under 4 minutes and 50 seconds

This does mean that an Individual Player can get a total of 3 **Cosmic Embers** 


**Rules:**
- No Leveling
- No Roundtable
- No Gathering Items or Resources Outside Le Precipi (Anything Before the Platform where the Starting Grace is)
- You are Allowed to Kill the Golem Archer and the Wolves, but they will not count toward the Defeated Enemies
- No Glitches or Cheats
- Players are allowed to attempt as many times as they want
- I will be Referring to The Team Hitless Rules, So obvious stuff like No Quitouts
- Completing Le Precipi means to get to and Defeat the Makar Replacement Hitless using a Fresh New Character, You are allowed to Quit Out when you see "RUN COMPLETED" (This Text Replaces the "Enemy Felled" Text)
    `,e=T("");function l(a){return a.replace(/<t:(\d+)(?::([a-zA-Z]))?>/g,(t,o,u)=>{const n=new Date(parseInt(o,10)*1e3);switch(u){case"t":return n.toLocaleTimeString();case"T":return n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"});case"d":return n.toLocaleDateString();case"D":return n.toLocaleDateString([],{year:"numeric",month:"long",day:"numeric"});case"f":return n.toLocaleString([],{dateStyle:"long",timeStyle:"short"});case"F":return n.toLocaleString([],{dateStyle:"full",timeStyle:"long"});case"R":return r(n);default:return n.toLocaleString()}})}function r(a){const t=(a.getTime()-Date.now())/1e3,o=new Intl.RelativeTimeFormat("en",{numeric:"auto"});return Math.abs(t)<60?o.format(Math.round(t),"seconds"):Math.abs(t)<3600?o.format(Math.round(t/60),"minutes"):Math.abs(t)<86400?o.format(Math.round(t/3600),"hours"):o.format(Math.round(t/86400),"days")}return v(()=>{const a=l(i);e.value=b.parse(a)}),{parsedText:e}}},D={class:"rules-container"},P=["innerHTML"];function $(i,e,l,r,a,t){return h(),p("div",D,[s("div",{innerHTML:r.parsedText},null,8,P)])}const S=m(y,[["render",$],["__scopeId","data-v-53d427b4"]]),C=f({name:"GithubDownloadCard",methods:{openGithub(){window.open("https://github.com/ignitesouls/Outer-League/releases/tag/Le-Precipi","_blank")}}}),G={class:"card"};function N(i,e,l,r,a,t){return h(),p("div",G,[e[1]||(e[1]=s("h2",{class:"title"},"Le Precipi",-1)),e[2]||(e[2]=s("p",{class:"description"},"Click below to download the latest version from GitHub.",-1)),s("button",{onClick:e[0]||(e[0]=(...o)=>i.openGithub&&i.openGithub(...o)),class:"download-btn"}," Download from GitHub ")])}const I=m(C,[["render",N],["__scopeId","data-v-9f1e5181"]]),R=f({name:"LePrecipi",components:{Navigation:w,Table:L,Info:S,GithubDownload:I}}),M={class:"page-container"},k={class:"main-container"};function E(i,e,l,r,a,t){const o=d("Navigation"),u=d("Table"),n=d("Info"),g=d("GithubDownload");return h(),p("div",M,[c(o),s("div",k,[e[0]||(e[0]=s("div",{class:"top-image-container"},[s("img",{src:_,class:"logo"})],-1)),c(u),c(n),c(g)])])}const x=m(R,[["render",E],["__scopeId","data-v-623601f7"]]);export{x as default};

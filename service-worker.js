if(!self.define){let e,r={};const l=(l,i)=>(l=new URL(l+".js",i).href,r[l]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=r,document.head.appendChild(e)}else e=l,importScripts(l),r()})).then((()=>{let e=r[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(i,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(r[s])return;let n={};const f=e=>l(e,s),u={module:{uri:s},exports:n,require:f};r[s]=Promise.all(i.map((e=>u[e]||f(e)))).then((e=>(o(...e),n)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"profile"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/profile/404.html",revision:"56222731b27052b97f9857d44f6c65c4"},{url:"/profile/css/app.fde2f5ad.css",revision:null},{url:"/profile/css/chunk-vendors.c8889d2a.css",revision:null},{url:"/profile/fonts/MaterialIcons-Regular.14b0bb77.woff",revision:null},{url:"/profile/fonts/MaterialIcons-Regular.a973ee76.eot",revision:null},{url:"/profile/fonts/MaterialIcons-Regular.d1b99623.woff2",revision:null},{url:"/profile/fonts/MaterialIcons-Regular.fa58bcb9.ttf",revision:null},{url:"/profile/img/logo.4d6033c9.svg",revision:null},{url:"/profile/img/pro.42ee62dc.jpg",revision:null},{url:"/profile/index.html",revision:"0df68673eeb6ae6a9114742434712611"},{url:"/profile/js/app.878b2e53.js",revision:null},{url:"/profile/js/chunk-vendors.4612535f.js",revision:null},{url:"/profile/manifest.json",revision:"08f199186ff87f287606684c5e58ffe7"},{url:"/profile/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,l)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const u=e=>r(e,i),t={module:{uri:i},exports:o,require:u};s[i]=Promise.all(n.map((e=>t[e]||u(e)))).then((e=>(l(...e),o)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"profile"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.98de30d9.css",revision:null},{url:"/css/chunk-vendors.000375d0.css",revision:null},{url:"/fonts/MaterialIcons-Regular.14b0bb77.woff",revision:null},{url:"/fonts/MaterialIcons-Regular.a973ee76.eot",revision:null},{url:"/fonts/MaterialIcons-Regular.d1b99623.woff2",revision:null},{url:"/fonts/MaterialIcons-Regular.fa58bcb9.ttf",revision:null},{url:"/img/logo.4d6033c9.svg",revision:null},{url:"/img/pro.c422dcb6.jpg",revision:null},{url:"/index.html",revision:"a6ace82323c0ae4e43fcb9ea2f192df4"},{url:"/js/app.5e876af1.js",revision:null},{url:"/js/chunk-vendors.560ef236.js",revision:null},{url:"/manifest.json",revision:"08f199186ff87f287606684c5e58ffe7"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
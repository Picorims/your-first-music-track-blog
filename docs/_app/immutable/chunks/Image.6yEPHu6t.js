import{a as y,t as b}from"./disclose-version.BLDzyfDt.js";import{E,F as ne,A as Q,z as ie,ag as W,H as le,I as q,J as z,K as L,L as M,ac as oe,B as Z,C as O,D as _e,aq as U,w as G,ar as ve,as as fe,at as ce,a0 as ue,m as K,au as de,av as he,af as ge,aw as pe,ax as j,aa as me,G as ke,ai as ye,ay as be,y as V,az as xe,p as $,j as g,k as p,t as T,i as ee,s as A,g as w,h as Ae,f as Te}from"./runtime.p8atZLvP.js";import{i as P,p as Y}from"./props.63sEdPN1.js";import{a as D}from"./store.BHCrUTY-.js";let F=null;function Ee(t,e){return e}function Ce(t,e,a,r){for(var s=[],n=e.length,i=0;i<n;i++)he(e[i].e,s,!0);var o=n>0&&s.length===0&&a!==null;if(o){var v=a.parentNode;ge(v),v.append(a),r.clear(),I(t,e[0].prev,e[n-1].next)}pe(s,()=>{for(var l=0;l<n;l++){var f=e[l];o||(r.delete(f.k),I(t,f.prev,f.next)),j(f.e,!o)}})}function Ie(t,e,a,r,s,n=null){var i=t,o={flags:e,items:new Map,first:null};E&&ne();var v=null,l=!1;Q(()=>{var f=a(),_=ie(f)?f:f==null?[]:W(f),c=_.length;if(l&&c===0)return;l=c===0;let h=!1;if(E){var d=i.data===le;d!==(c===0)&&(i=q(),z(i),L(!1),h=!0)}if(E){for(var m=null,u,k=0;k<c;k++){if(M.nodeType===8&&M.data===oe){i=M,h=!0,L(!1);break}var B=_[k],C=r(B,k);u=ae(M,o,m,null,B,C,k,s,e),o.items.set(C,u),m=u}c>0&&z(q())}E||Ne(_,o,i,s,e,r),n!==null&&(c===0?v?Z(v):v=O(()=>n(i)):v!==null&&_e(v,()=>{v=null})),h&&L(!0),a()}),E&&(i=M)}function Ne(t,e,a,r,s,n){var i=t.length,o=e.items,v=e.first,l=v,f,_=null,c=[],h=[],d,m,u,k;for(k=0;k<i;k+=1){if(d=t[k],m=n(d,k),u=o.get(m),u===void 0){var B=l?l.e.nodes_start:a;_=ae(B,e,_,_===null?e.first:_.next,d,m,k,r,s),o.set(m,_),c=[],h=[],l=_.next;continue}if(we(u,d,k),u.e.f&U&&Z(u.e),u!==l){if(f!==void 0&&f.has(u)){if(c.length<h.length){var C=h[0],x;_=C.prev;var R=c[0],S=c[c.length-1];for(x=0;x<c.length;x+=1)J(c[x],C,a);for(x=0;x<h.length;x+=1)f.delete(h[x]);I(e,R.prev,S.next),I(e,_,R),I(e,S,C),l=C,_=S,k-=1,c=[],h=[]}else f.delete(u),J(u,l,a),I(e,u.prev,u.next),I(e,u,_===null?e.first:_.next),I(e,_,u),_=u;continue}for(c=[],h=[];l!==null&&l.k!==m;)l.e.f&U||(f??(f=new Set)).add(l),h.push(l),l=l.next;if(l===null)continue;u=l}c.push(u),_=u,l=u.next}if(l!==null||f!==void 0){for(var H=f===void 0?[]:W(f);l!==null;)l.e.f&U||H.push(l),l=l.next;var re=H.length;if(re>0){var se=null;Ce(e,H,se,o)}}G.first=e.first&&e.first.e,G.last=_&&_.e}function we(t,e,a,r){ve(t.v,e),t.i=a}function ae(t,e,a,r,s,n,i,o,v){var l=F;try{var f=(v&fe)!==0,_=(v&ce)===0,c=f?_?ue(s):K(s):s,h=v&de?K(i):i,d={i:h,v:c,k:n,a:null,e:null,prev:a,next:r};return F=d,d.e=O(()=>o(t,c,h),E),d.e.prev=a&&a.e,d.e.next=r&&r.e,a===null?e.first=d:(a.next=d,a.e.next=d.e),r!==null&&(r.prev=d,r.e.prev=d.e),d}finally{F=l}}function J(t,e,a){for(var r=t.next?t.next.e.nodes_start:a,s=e?e.e.nodes_start:a,n=t.e.nodes_start;n!==r;){var i=me(n);s.before(n),n=i}}function I(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function te(t,e,...a){var r=t,s=ye,n;Q(()=>{s!==(s=e())&&(n&&(j(n),n=null),n=O(()=>s(r,...a)))},ke),E&&(r=M)}function N(t,e,a,r){var s=t.__attributes??(t.__attributes={});E&&(s[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||s[e]!==(s[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[be]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Pe(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var X=new Map;function Pe(t){var e=X.get(t.nodeName);if(e)return e;X.set(t.nodeName,e=[]);for(var a,r=V(t),s=Element.prototype;s!==r;){a=xe(r);for(var n in a)a[n].set&&e.push(n);r=V(r)}return e}function De(t,e){var a=t.__className,r=Be(e);E&&t.className===r?t.__className=r:(a!==r||E&&t.className!==r)&&(e==null?t.removeAttribute("class"):t.className=r,t.__className=r)}function Be(t){return t??""}const aa={title:"Your First Music Track",titleUrl:"https://your-first-music-track.weebly.com/",theme:"custom-theme",authorDescription:"I'm Charly - an apprentice IT engineer passionate about music. I started teaching myself music composition out of curiosity many years ago after starting to learn playing the guitar. I created this blog to share the knowledge I accumulated throughout the years and will try to give you the basis for starting this journey yourself!",noBodySpacing:!0,urlAllPosts:"https://your-first-music-track.weebly.com/blog"};var Me=b('<a target="_blank" rel="noopener noreferrer"><!></a>');function ta(t,e){$(e,!0);var a=Me(),r=g(a);te(r,()=>e.children),p(a),T(()=>N(a,"href",e.href)),y(t,a),ee()}var Re=b('<div class="__sbk__aside-block"><h2>Author</h2> <p> </p></div>'),Se=b('<aside class="__sbk__page-aside svelte-e2v6kz"><!></aside>');function He(t,e){var a=Se(),r=g(a);P(r,()=>e.authorDescription,s=>{var n=Re(),i=A(g(n),2),o=g(i,!0);p(i),p(n),T(()=>D(o,e.authorDescription)),y(s,n)}),p(a),y(t,a)}var Le=b('<a class="__sbk__blog-header-title"> </a>'),Ue=b('<span class="__sbk__blog-header-title"> </span>'),Fe=b('<header class="__sbk__blog-header"><div class="header-content svelte-kfrs05"><!></div></header>');function Oe(t,e){let a=Y(e,"title",3,"Page Title");var r=Fe(),s=g(r),n=g(s);P(n,()=>e.titleUrl,i=>{var o=Le(),v=g(o,!0);p(o),T(()=>{N(o,"href",e.titleUrl),D(v,a())}),y(i,o)},i=>{var o=Ue(),v=g(o,!0);p(o),T(()=>D(v,a())),y(i,o)}),p(s),p(r),y(t,r)}var Ye=b('<a class="__sbk__all-posts-link">Back to all posts</a>'),qe=b("<span> </span>"),ze=b('<span class="__sbk__post-categories"><span>Categories:</span> <!></span>'),Ge=b('<a class="__sbk__comments-link">Comments</a>'),Ke=b('<main class="__sbk__page-main svelte-1nn5vfk"><!> <h1 class="__sbk__post-title"> </h1> <div class="metadata __sbk__post-metadata svelte-1nn5vfk"><span class="__sbk__post-date"> </span> <!></div> <hr class="__sbk__post-header-separator"> <article class="__sbk__post-content svelte-1nn5vfk"><!></article> <!></main>');function Ve(t,e){$(e,!0);let a=Y(e,"categories",19,()=>[]);var r=Ke(),s=g(r);P(s,()=>e.urlAllPosts,d=>{var m=Ye();T(()=>N(m,"href",e.urlAllPosts)),y(d,m)});var n=A(s,2),i=g(n,!0);p(n);var o=A(n,2),v=g(o),l=g(v,!0);p(v);var f=A(v,2);P(f,()=>a().length>0,d=>{var m=ze(),u=A(g(m),2);Ie(u,17,a,Ee,(k,B,C)=>{var x=qe(),R=g(x,!0);p(x),T(()=>D(R,w(B)+(C<a().length-1?", ":""))),y(k,x)}),p(m),y(d,m)}),p(o);var _=A(o,4),c=g(_);te(c,()=>e.postContent),p(_);var h=A(_,2);P(h,()=>e.urlComments,d=>{var m=Ge();T(()=>N(m,"href",e.urlComments)),y(d,m)}),p(r),T(()=>{D(i,e.postTitle),D(l,e.date)}),y(t,r),ee()}var Je=b(`<style>body {
			margin: 0;
			padding: 0;
		}</style>`),Xe=b('<div><!> <div class="page-content __sbk__page-content svelte-1nvquhh"><!> <!></div></div> <!>',1);function ra(t,e){const a={title:"Page Title",theme:"sbk-theme-default",noBodySpacing:!0};let r=Y(e,"categories",19,()=>[]),s=Te(()=>({...a,...e.config}));var n=Xe(),i=Ae(n),o=g(i);Oe(o,{get title(){return w(s).title},get titleUrl(){return w(s).titleUrl}});var v=A(o,2),l=g(v);Ve(l,{get postTitle(){return e.postTitle},get date(){return e.date},get postContent(){return e.postContent},get categories(){return r()},get urlAllPosts(){return w(s).urlAllPosts},get urlComments(){return e.urlComments}});var f=A(l,2);He(f,{get authorDescription(){return w(s).authorDescription}}),p(v),p(i);var _=A(i,2);P(_,()=>w(s).noBodySpacing,c=>{var h=Je();y(c,h)}),T(()=>De(i,`${w(s).theme??""} svelte-1nvquhh`)),y(t,n)}var Qe=b('<figcaption class="svelte-nl6xx5"> </figcaption>'),We=b('<figure class="__sbk__component-image svelte-nl6xx5"><img class="svelte-nl6xx5"> <!></figure>');function sa(t,e){var a=We(),r=g(a),s=A(r,2);P(s,()=>e.caption,n=>{var i=Qe(),o=g(i,!0);p(i),T(()=>D(o,e.caption)),y(n,i)}),p(a),T(()=>{N(r,"src",e.src),N(r,"alt",e.alt),N(r,"width",e.width),N(r,"height",e.height)}),y(t,a)}export{ra as B,ta as E,sa as I,N as a,aa as c,te as s};
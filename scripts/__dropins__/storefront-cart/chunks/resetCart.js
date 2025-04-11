/*! Copyright 2025 Adobe
All Rights Reserved. */
import{FetchGraphQL as s}from"@dropins/tools/fetch-graphql.js";import"@dropins/tools/event-bus.js";import{g as u}from"./persisted-data.js";function d(r){const e=document.cookie.split(";");for(let a=0;a<e.length;a++){const n=e[a].trim();if(n.indexOf(`${r}=`)===0)return n.substring(r.length+1)}return null}const l=(()=>{const r=u();return{cartId:null,authenticated:r?!r.isGuestCart:!1}})(),i=new Proxy(l,{set(r,e,a){var n;if(r[e]=a,e==="cartId"){if(a===i.cartId)return!0;if(a===null)return document.cookie="DROPIN__CART__CART-ID=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/",!0;const c=(n=i.config)==null?void 0:n.cartExpiresInDays;c||console.warn('Missing "expiresInDays" config. Cookie expiration will default to 30 days.');const t=new Date;t.setDate(t.getDate()+(c??30)),document.cookie=`DROPIN__CART__CART-ID=${a}; expires=${t.toUTCString()}; path=/`}return!0},get(r,e){return e==="cartId"?d("DROPIN__CART__CART-ID"):r[e]}}),{setEndpoint:C,setFetchGraphQlHeader:I,removeFetchGraphQlHeader:D,setFetchGraphQlHeaders:m,fetchGraphQl:_,getConfig:T}=new s().getMethods(),R=r=>{const e=r.findIndex(({extensions:t})=>(t==null?void 0:t.category)==="graphql-authorization")>-1,a=r.findIndex(({path:t,extensions:o})=>(o==null?void 0:o.category)==="graphql-no-such-entity"&&!(t!=null&&t.includes("applyCouponsToCart")))>-1,n=r.map(t=>t.message).join(" "),c=r.findIndex(({path:t,extensions:o})=>(o==null?void 0:o.category)==="graphql-input"&&(t==null?void 0:t.includes("cart")))>-1;if(e||a||c)return g(),console.error(n),null;throw Error(n)},g=()=>(i.cartId=null,i.authenticated=!1,Promise.resolve(null));export{C as a,I as b,m as c,g as d,_ as f,T as g,R as h,D as r,i as s};

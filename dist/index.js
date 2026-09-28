"use strict";var q=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var d=q(function(I,y){
var P=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/math-base-assert-is-positive-zero/dist');function j(i,e,n,o,t,s){var u,v,c,a,r,f;if(u=e.data,v=e.accessors[0],i===1||n===0)return r=t.call(s,v(u,o),0,o,u),r===void 0?NaN:r;for(a=o,f=0;f<i&&(c=t.call(s,v(u,a),f,a,u),c===void 0);f++)a+=n;if(f===i)return NaN;for(f+=1,f;f<i;f++)if(a+=n,r=t.call(s,v(u,a),f,a,u),r!==void 0){if(P(r))return r;(r>c||r===c&&Z(r))&&(c=r)}return c}y.exports=j
});var l=q(function(J,m){
var N=require('@stdlib/math-base-assert-is-nan/dist'),O=require('@stdlib/math-base-assert-is-positive-zero/dist'),R=require('@stdlib/array-base-arraylike2object/dist'),w=d();function z(i,e,n,o,t,s){var u,v,c,a,r;if(i<=0)return NaN;if(c=R(e),c.accessorProtocol)return w(i,c,n,o,t,s);if(i===1||n===0)return a=t.call(s,e[o],0,o,e),a===void 0?NaN:a;for(v=o,r=0;r<i&&(u=t.call(s,e[v],r,v,e),u===void 0);r++)v+=n;if(r===i)return NaN;for(r+=1,r;r<i;r++)if(v+=n,a=t.call(s,e[v],r,v,e),a!==void 0){if(N(a))return a;(a>u||a===u&&O(a))&&(u=a)}return u}m.exports=z
});var p=q(function(K,x){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=l();function E(i,e,n,o,t){return D(i,e,n,C(i,n),o,t)}x.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=p(),G=l();F(B,"ndarray",G);module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

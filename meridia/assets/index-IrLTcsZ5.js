var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=typeof window<`u`,r=n?window:null,i=n?document:null,a={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},o={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},s={NONE:0,AUTO:1,FORCE:2},c={replace:0,none:1,blend:2},l=Symbol(),u=Symbol(),d=Symbol(),f=Symbol(),p=Symbol(),m=1e-11,h=0xe8d4a51000,g=1e3,_=[],v=(()=>{let e=new Map;return e.set(`x`,`translateX`),e.set(`y`,`translateY`),e.set(`z`,`translateZ`),e})(),y=[`perspective`,`translateX`,`translateY`,`translateZ`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`scale`,`scaleX`,`scaleY`,`scaleZ`,`skew`,`skewX`,`skewY`],b=y.reduce((e,t)=>({...e,[t]:t+`(`}),{}),x=()=>{},S=e=>e,C=/\)\s*[-.\d]/,w=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,T=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,E=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,D=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,O=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,k=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,A=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,j=/([a-z])([A-Z])/g,M=/(\*=|\+=|-=)/,N=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/,P={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:240,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:g,delay:0,loopDelay:0,ease:`out(2)`,composition:c.replace,modifier:S,onBegin:x,onBeforeUpdate:x,onUpdate:x,onLoop:x,onPause:x,onComplete:x,onRender:x},F={current:null,root:i},I={defaults:P,precision:4,timeScale:1,tickThreshold:200,editor:null},L={version:`4.5.0`,engine:null};n&&(r.AnimeJS||=[],r.AnimeJS.push(L));var ee=e=>e.replace(j,`$1-$2`).toLowerCase(),te=(e,t)=>e.indexOf(t)===0,ne=Date.now,R=Array.isArray,re=e=>e&&e.constructor===Object,z=e=>typeof e==`number`&&!isNaN(e),ie=e=>typeof e==`string`,ae=e=>typeof e==`function`,B=e=>e===void 0,V=e=>B(e)||e===null,oe=e=>n&&e instanceof SVGElement,se=e=>w.test(e),H=e=>te(e,`rgb`),ce=e=>te(e,`hsl`),le=e=>se(e)||(H(e)||ce(e))&&(e[e.length-1]===`)`||!C.test(e)),ue=e=>!I.defaults.hasOwnProperty(e),de=[`opacity`,`rotate`,`overflow`,`color`],U=(e,t)=>{if(de.includes(t))return!1;if(e.getAttribute(t)||t in e){if(t===`scale`){let t=e.parentNode;return t&&t.tagName===`filter`}return!0}},fe=e=>ie(e)?parseFloat(e):e,pe=Math.pow,W=Math.sqrt,me=Math.sin,G=Math.cos,he=Math.abs,K=Math.exp,ge=Math.floor,_e=Math.asin,q=Math.PI,ve=Math.round,ye=(e,t,n)=>e<t?t:e>n?n:e,be=(e,t)=>{if(t<0)return e;if(!t)return ve(e);let n=10**t;return ve(e*n)/n},xe=(e,t)=>R(t)?t.reduce((t,n)=>he(n-e)<he(t-e)?n:t):t?ve(e/t)*t:e,Se=(e,t,n)=>n===1?t:n===0?e:e+(t-e)*n,Ce=e=>e===1/0?h:e===-1/0?-h:e,we=e=>e<=1e-11?m:Ce(be(e,11)),Te=e=>R(e)?[...e]:e,Ee=(e,t)=>{let n={...e};for(let r in t){let i=e[r];n[r]=B(i)?t[r]:i}return n},De=(e,t,n,r=`_prev`,i=`_next`)=>{let a=e._head,o=i;for(n&&(a=e._tail,o=r);a;){let e=a[o];t(a),a=e}},Oe=(e,t,n=`_prev`,r=`_next`)=>{let i=t[n],a=t[r];i?i[r]=a:e._head=a,a?a[n]=i:e._tail=i,t[n]=null,t[r]=null},ke=(e,t,n,r=`_prev`,i=`_next`)=>{let a=e._tail;for(;a&&n&&n(a,t);)a=a[r];let o=a?a[i]:e._head;a?a[i]=t:e._head=t,o?o[r]=t:e._tail=t,t[r]=a,t[i]=o},Ae=(e,t,n)=>{let r=e.style.transform;if(r){let i=e[f],a=0,o=r.length,s;for(;a<o;){for(;a<o&&r.charCodeAt(a)===32;)a++;if(a>=o)break;let e=a;for(;a<o&&r.charCodeAt(a)!==40;)a++;if(a>=o)break;let t=r.substring(e,a),n=1,c=a+1,l=-1,u=-1;for(a++;a<o&&n>0;){let e=r.charCodeAt(a);e===40?n++:e===41?n--:e===44&&n===1&&(l===-1?l=a:u===-1&&(u=a)),a++}let d=a-1;t===`translate`||t===`translate3d`?(l===-1?i.translateX=r.substring(c,d).trim():(i.translateX=r.substring(c,l).trim(),u===-1?i.translateY=r.substring(l+1,d).trim():(i.translateY=r.substring(l+1,u).trim(),i.translateZ=r.substring(u+1,d).trim())),s=r.substring(c,d)):t===`scale`||t===`scale3d`?l===-1?i.scale=r.substring(c,d).trim():(i.scaleX=r.substring(c,l).trim(),u===-1?i.scaleY=r.substring(l+1,d).trim():(i.scaleY=r.substring(l+1,u).trim(),i.scaleZ=r.substring(u+1,d).trim())):i[t]=r.substring(c,d)}if(t===`translate3d`&&s)return n&&(n[t]=s),s;let c=i[t];if(!B(c))return n&&(n[t]=c),c}return t===`translate3d`?`0px, 0px, 0px`:t===`rotate3d`?`0, 0, 0, 0deg`:te(t,`scale`)?`1`:te(t,`rotate`)||te(t,`skew`)?`0deg`:`0px`},je=e=>{let t=``;for(let n=0,r=y.length;n<r;n++){let r=y[n],i=e[r];if(i!==void 0){if(r===`translateX`){let r=e.translateY;if(r!==void 0){let a=e.translateZ;a===void 0?(t+=`translate(${i},${r}) `,n+=1):(t+=`translate3d(${i},${r},${a}) `,n+=2);continue}}if(r===`scaleX`&&e.scale===void 0){let r=e.scaleY;if(r!==void 0){let a=e.scaleZ;a===void 0?(t+=`scale(${i},${r}) `,n+=1):(t+=`scale3d(${i},${r},${a}) `,n+=2);continue}}t+=`${b[r]}${i}) `}r===`rotateZ`&&e.rotate3d!==void 0&&(t+=`rotate3d(${e.rotate3d}) `)}return e.matrix!==void 0&&(t+=`matrix(${e.matrix}) `),e.matrix3d!==void 0&&(t+=`matrix3d(${e.matrix3d}) `),t},Me=[];function Ne(e,t){if(!e)return null;let n=Me.length;outer:for(let r=0;r<n;r++){let n=Me[r];if(n.detect&&!n.detect(e))continue;let i=n.targetAdapters;for(let n=0,r=i.length;n<r;n++){let r=i[n];if(r.detect(e)){let n=r.props[t];if(n&&(!n.gate||n.gate(e)))return n;break outer}}}for(let r=0;r<n;r++){let n=Me[r];if(n.detect&&!n.detect(e))continue;let i=n.propertyResolvers;for(let n=0,r=i.length;n<r;n++){let r=i[n](e,t);if(r)return r}}return null}var Pe=e=>{let t=T.exec(e)||E.exec(e),n=B(t[4])?1:+t[4];return[+t[1],+t[2],+t[3],n]},Fe=e=>{let t=e.length,n=t===4||t===5;return[+(`0x`+e[1]+e[n?1:2]),+(`0x`+e[n?2:3]+e[n?2:4]),+(`0x`+e[n?3:5]+e[n?3:6]),t===5||t===9?+((`0x`+e[n?4:7]+e[n?4:8])/255).toFixed(3):1]},Ie=(e,t,n)=>(n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e),Le=e=>{let t=D.exec(e)||O.exec(e),n=t[1]/360,r=t[2]/100,i=t[3]/100,a=B(t[4])?1:+t[4],o,s,c;if(r===0)o=s=c=i;else{let e=i<.5?i*(1+r):i+r-i*r,t=2*i-e;o=be(Ie(t,e,n+1/3)*255,0),s=be(Ie(t,e,n)*255,0),c=be(Ie(t,e,n-1/3)*255,0)}return[o,s,c,a]},Re=e=>H(e)?Pe(e):se(e)?Fe(e):ce(e)?Le(e):[0,0,0,1],ze=(e,t)=>B(e)?t:e,Be=(e,t)=>{let n=e.match(N),r=t[u]?t:document.documentElement,i=getComputedStyle(r)?.getPropertyValue(n[1]);return(!i||i.trim()===``)&&n[2]&&(i=n[2].trim()),i||0},Ve=(e,t,n,r,i,a)=>{if(ae(e)){if(!i){let i=e(t,n,r,a);return isNaN(+i)?i||0:+i}let o=()=>{let i=e(t,n,r,a);return isNaN(+i)?i||0:+i};return i.func=o,o()}if(ie(e)&&te(e,`var(`)){if(!i)return Be(e,t);let n=()=>Be(e,t);return i.func=n,n()}return e},He=(e,t)=>e[u]?e[d]&&U(e,t)?a.ATTRIBUTE:y.includes(t)||v.get(t)?a.TRANSFORM:te(t,`--`)?a.CSS_VAR:t in e.style?a.CSS:t in e?a.OBJECT:a.ATTRIBUTE:a.OBJECT,Ue=(e,t,n)=>{let r=e.style[t];r&&n&&(n[t]=r);let i=r||getComputedStyle(e[p]||e).getPropertyValue(t);return i===`auto`?`0`:i},We=(e,t,n,r)=>{let i=B(n)?He(e,t):n,o=Ne(e,t);if(o){let n=o.get(e);return n&&r&&(r[t]=n),n??0}if(i===a.OBJECT){let n=e[t];return n&&r&&(r[t]=n),n||0}if(i===a.ATTRIBUTE){let n=e.getAttribute(t);return n&&r&&(r[t]=n),n}return i===a.TRANSFORM?Ae(e,t,r):i===a.CSS_VAR?Ue(e,t,r).trimStart():Ue(e,t,r)},Ge=(e,t,n)=>n===`-`?e-t:n===`+`?e+t:e*t,Ke=()=>({t:o.NUMBER,n:0,u:null,o:null,d:null,s:null}),qe=(e,t)=>{if(t.t=o.NUMBER,t.n=0,t.u=null,t.o=null,t.d=null,t.s=null,!e)return t;let n=+e;if(!isNaN(n))return t.n=n,t;let r=e;r[1]===`=`&&(t.o=r[0],r=r.slice(2));let i=!r.includes(` `)&&A.exec(r);if(i)return t.t=o.UNIT,t.n=+i[1],t.u=i[2],t;if(t.o)return t.n=+r,t;if(le(r))return t.t=o.COLOR,t.d=Re(r),t;{let e=r.match(k);return t.t=o.COMPLEX,t.d=e?e.map(Number):[],t.s=r.split(k)||[],t}},Je=(e,t)=>(t.t=e._valueType,t.n=e._toNumber,t.u=e._unit,t.o=null,t.d=Te(e._toNumbers),t.s=Te(e._strings),t),Ye=Ke(),Xe=(e,t,n)=>{let r=e._modifier,i=e._fromNumbers,a=e._toNumbers,o=e._strings,s=o[0];for(let c=0,l=a.length;c<l;c++){let l=r(be(Se(i[c],a[c],t),n)),u=o[c+1];s+=`${u?l+u:l}`,e._numbers[c]=l}return s},Ze=(e,t,n,r,i)=>{let l=e.parent,u=e.duration,d=e.completed,p=e.iterationDuration,h=e.iterationCount,g=e._currentIteration,_=e._loopDelay,v=e._reversed,y=e._alternate,b=e._hasChildren,x=e._delay,S=e._currentTime,C=x+p,w=t-x,T=ye(S,-x,u),E=ye(w,-x,u),D=w-S,O=E>0,k=E>=u,A=u<=m,j=i===s.FORCE,M=0,N=w,P=0;if(h>1){let t=p+(k?0:_),n=~~(E/t);e._currentIteration=ye(n,0,h),k&&e._currentIteration--,M=e._currentIteration%2,N=E-n*t||0}let F=v^(y&&M),L=e._ease,ee=k?F?0:u:F?p-N:N;L&&(ee=p*L(ee/p)||0);let te=(l?l.backwards:w<S)?!F:!!F;if(e._currentTime=w,e._iterationTime=ee,e.backwards=te,O&&!e.began?(e.began=!0,!n&&(!l||!te&&l.began)&&e.onBegin(e)):w<=0&&(e.began=!1),!n&&!b&&O&&e._currentIteration!==g&&e.onLoop(e),j||i===s.AUTO&&(t>=(l&&x>0?0:x)&&t<=C||t<=x&&T>x||t>=C&&T!==u)||ee>=C&&T!==u||ee<=x&&T>0&&!k||t<=T&&T===u&&d||k&&!d&&A){if(O&&(e.computeDeltaTime(T),n||e.onBeforeUpdate(e)),!b){let t=j||(te?D*-1:D)>=I.tickThreshold,i=be(e._offset+(l?l._offset:0)+x+ee,12),s=e._head,u,d,p,m,h=0;for(;s;){let e=s._composition,n=s._currentTime,l=s._changeDuration,g=s._absoluteStartTime+s._changeDuration,_=s._nextRep,v=s._prevRep,y=e!==c.none,b=v?v._absoluteStartTime+v._changeDuration:0,x=v&&v.parent!==s.parent,S=!_||_._isOverridden?g:_.parent===s.parent?g+_._delay:_._absoluteStartTime<_._absoluteUpdateStartTime?_._absoluteStartTime:_._absoluteUpdateStartTime;if((t||(n!==l||i<=S||v&&!x&&(!_||_.parent!==s.parent))&&(n!==0||i>=s._absoluteStartTime||x&&!s._hasFromValue&&!v._isOverridden&&i>=b||_&&!_._isOverridden&&_.parent===s.parent&&_._currentTime!==0&&ee<_._startTime))&&(!v||x||ee>=s._startTime)&&(!y||!s._isOverridden&&(!s._isOverlapped||i<=g)&&(!_||_._isOverridden||i<=S)&&(!v||v._isOverridden||(x?i>=s._absoluteStartTime||!s._hasFromValue&&i>=b:i>=b+s._delay)))){let t=s._currentTime=ye(ee-s._startTime,0,l),n=s._ease(t/s._updateDuration),i=s._modifier,g=s._valueType,_=s._tweenType,v=_===a.OBJECT,b=g===o.NUMBER,x=b&&v||n===0||n===1?-1:I.precision,S,C;if(b)S=C=i(be(Se(s._fromNumber,s._toNumber,n),x));else if(g===o.UNIT)C=i(be(Se(s._fromNumber,s._toNumber,n),x)),S=`${C}${s._unit}`;else if(g===o.COLOR){let e=s._numbers,t=s._fromNumbers,a=s._toNumbers,o=1-n,c=t[0],l=t[1],u=t[2],d=a[0],f=a[1],p=a[2];e[0]=i(Math.sqrt(c*c*o+d*d*n)),e[1]=i(Math.sqrt(l*l*o+f*f*n)),e[2]=i(Math.sqrt(u*u*o+p*p*n)),e[3]=i(Se(t[3],a[3],n)),(!s._setter||r)&&(S=`rgba(${be(e[0],0)},${be(e[1],0)},${be(e[2],0)},${e[3]})`)}else g===o.COMPLEX&&(S=Xe(s,n,x));if(y&&(s._number=C),!r&&e!==c.blend){let e=s.property;u=s.target,s._setter?s._setter(u,C,s):v?u[e]=S:_===a.ATTRIBUTE?u.setAttribute(e,S):(d=u.style,_===a.TRANSFORM?(u!==p&&(p=u,m=u[f]),m[e]=S,h=1):_===a.CSS?d[e]=S:_===a.CSS_VAR&&d.setProperty(e,S)),O&&(P=1)}else s._value=S}else n&&v&&!x&&ee<s._startTime&&(s._currentTime=0);h&&s._renderTransforms&&(d.transform=je(m),h=0),s=s._next}!n&&P&&e.onRender(e)}!n&&O&&e.onUpdate(e)}return l&&A?!n&&(l.began&&!te&&w>0&&!d||te&&w<=1e-11&&d)&&(e.onComplete(e),e.completed=!te):O&&k?h===1/0?e._startTime+=e.duration:e._currentIteration>=h-1&&(e.paused=!0,!d&&!b&&(e.completed=!0,!n&&(!l||!te&&l.began)&&(e.onComplete(e),e._resolve(e)))):e.completed=!1,P},Qe=(e,t,n,r,i)=>{let a=e._currentIteration;if(Ze(e,t,n,r,i),e._hasChildren){let o=e,c=o.backwards,l=r?t:o._iterationTime,u=ne(),d=0,f=!0;if(!r&&o._currentIteration!==a){let e=o.iterationDuration;De(o,t=>{if(!c)!t.completed&&!t.backwards&&t._currentTime<t.iterationDuration&&Ze(t,e,n,1,s.FORCE),t.began=!1,t.completed=!1;else{let r=t.duration,i=t._offset+t._delay,a=i+r;!n&&r<=1e-11&&(!i||a===e)&&t.onComplete(t)}}),n||o.onLoop(o)}De(o,e=>{let t=be((l-e._offset)*e._speed,12);if(c&&t>e._delay+e.duration)return;let a=e._fps<o._fps?e.requestTick(u):i;d+=Ze(e,t,n,r,a),!e.completed&&f&&(f=!1)},c),!n&&d&&o.onRender(o),(f||c)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,n||(o.onComplete(o),o._resolve(o))))}},$e={},et=(e,t,n)=>{if(n===a.TRANSFORM)return v.get(e)||e;if(n===a.CSS||n===a.ATTRIBUTE&&oe(t)&&e in t.style){let t=$e[e];if(t)return t;{let t=e&&ee(e);return $e[e]=t,t}}return e},tt=(e,t=!1)=>{if(e._hasChildren)De(e,e=>tt(e,t),!0);else{let n=e;n.pause(),De(n,e=>{let r=e.property,i=e.target,o=e._tweenType,s=e._inlineValue,c=V(s)||s===``;if(e._setter){if(!t&&!c){if(qe(s,Ye),Ye.d){let t=Ye.d,n=e._numbers;for(let e=0,r=t.length;e<r;e++)n[e]=t[e]}else e._number=Ye.n;e._setter(e.target,e._number,e)}}else if(o===a.OBJECT)!t&&!c&&(i[r]=s);else if(i[u]){if(o===a.ATTRIBUTE)t||(c?i.removeAttribute(r):i.setAttribute(r,s));else{let t=i.style;if(o===a.TRANSFORM){let n=i[f];c?delete n[r]:n[r]=s,e._renderTransforms&&(Object.keys(n).length?t.transform=je(n):t.removeProperty(`transform`))}else c?t.removeProperty(ee(r)):t[r]=s}}i[u]&&n._tail===e&&n.targets.forEach(e=>{e.getAttribute&&e.getAttribute(`style`)===``&&e.removeAttribute(`style`)})})}return e},nt=class{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._frameDuration=g/240,this._fps=240,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){let t=+e,n=t<1e-11?m:t,r=g/n;n>P.frameRate&&(P.frameRate=n),this._fps=n,this._frameDuration=r}get speed(){return this._speed}set speed(e){let t=+e;this._speed=t<1e-11?m:t}requestTick(e){let t=this._frameDuration,n=e-this._lastTickTime,r=t*.25;return n+(r<4?r:4)<t?s.NONE:(this._lastTickTime=n>=t?e-n%t:e,s.AUTO)}computeDeltaTime(e){let t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}},rt={animation:null,update:x},it=e=>{let t=rt.animation;return t||(t={duration:m,computeDeltaTime:x,_offset:0,_delay:0,_head:null,_tail:null},rt.animation=t,rt.update=()=>{e.forEach(e=>{for(let t in e){let n=e[t],r=n._head;if(r){let e=r._valueType,t=e===o.COMPLEX||e===o.COLOR?Te(r._fromNumbers):null,i=r._fromNumber,a=n._tail;for(;a&&a!==r;){if(t)for(let e=0,n=a._numbers.length;e<n;e++)t[e]+=a._numbers[e];else i+=a._number;a=a._prevAdd}r._toNumber=i,r._toNumbers=t}}}),Ze(t,1,1,0,s.FORCE)}),t},at=n?requestAnimationFrame:setImmediate,ot=n?cancelAnimationFrame:clearImmediate,st=class extends nt{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=P,this.paused=!0,this.reqId=0}update(){let e=this._currentTime=ne();if(this.requestTick(e)){this.computeDeltaTime(e);let t=this._speed,n=this._fps,r=this._head;for(;r;){let i=r._next;r.paused?(Oe(this,r),this._hasChildren=!!this._tail,r._running=!1,r.completed&&!r._cancelled&&r.cancel()):Qe(r,(e-r._startTime)*r._speed*t,0,0,r._fps<n?r.requestTick(e):s.AUTO),r=i}rt.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(ne()),this.reqId=at(lt)),this}pause(){if(this.reqId)return this.paused=!0,ut()}resume(){if(this.paused)return this.paused=!1,De(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(I.timeScale===1?1:g)}set speed(e){let t=e*I.timeScale;this._speed!==t&&(this._speed=t,De(this,e=>e.speed=e._speed))}get timeUnit(){return I.timeScale===1?`ms`:`s`}set timeUnit(e){let t=.001,n=e===`s`,r=n?t:1;if(I.timeScale!==r){I.timeScale=r,I.tickThreshold=200*r;let e=n?t:g;this.defaults.duration*=e,this._speed*=e}}get precision(){return I.precision}set precision(e){I.precision=e}},ct=(()=>{let e=new st(ne());return n&&(L.engine=e,i.addEventListener(`visibilitychange`,()=>{e.pauseOnDocumentHidden&&(i.hidden?e.pause():e.resume())})),e})(),lt=()=>{ct._head?(ct.reqId=at(lt),ct.update()):ct.reqId=0},ut=()=>(ot(ct.reqId),ct.reqId=0,ct),dt={_rep:new WeakMap,_add:new Map},ft=(e,t,n=`_rep`)=>{let r=dt[n],i=r.get(e);return i||(i={},r.set(e,i)),i[t]?i[t]:i[t]={_head:null,_tail:null}},pt=(e,t)=>e._isOverridden||e._absoluteStartTime>t._absoluteStartTime,mt=e=>{e._isOverlapped=1,e._isOverridden=1,e._changeDuration=m,e._currentTime=m},ht=(e,t)=>{let n=e._composition;if(n===c.replace){let n=e._absoluteStartTime;ke(t,e,pt,`_prevRep`,`_nextRep`);let r=e._prevRep;if(r){let t=r.parent,i=r._absoluteEndTime;if(e.parent.id!==t.id&&t.iterationCount>1&&i+(t.duration-t.iterationDuration)>n){mt(r);let e=r._prevRep;for(;e&&e.parent.id===t.id;)mt(e),e=e._prevRep}let a=e._absoluteUpdateStartTime;if(i>a){let e=r._startTime,t=be(a-(i-(e+r._updateDuration))-e,12);r._changeDuration=t,r._currentTime=t,r._isOverlapped=1,t<1e-11&&mt(r)}let o=e.parent.parent;if(!o||o!==t.parent){let e=!0;if(De(t,t=>{t._isOverlapped||(e=!1)}),e){let e=t.parent;if(e){let n=!0;De(e,e=>{e!==t&&De(e,e=>{e._isOverlapped||(n=!1)})}),n&&e.cancel()}else t.cancel()}}}}else if(n===c.blend){let t=ft(e.target,e.property,`_add`),n=it(dt._add),r=t._head;r||(r={...e},r._composition=c.replace,r._updateDuration=m,r._startTime=0,r._numbers=Te(e._fromNumbers),r._number=0,r._next=null,r._prev=null,ke(t,r),ke(n,r));let i=e._toNumber;if(e._fromNumber=r._fromNumber-i,e._toNumber=0,e._numbers=Te(e._fromNumbers),e._number=0,r._fromNumber=i,e._toNumbers.length){let t=Te(e._toNumbers);t.forEach((t,n)=>{e._fromNumbers[n]=r._fromNumbers[n]-t,e._toNumbers[n]=0}),r._fromNumbers=t}ke(t,e,null,`_prevAdd`,`_nextAdd`)}return e},gt=e=>{let t=e._composition;if(t!==c.none){let n=e.target,r=e.property,i=dt._rep.get(n)[r];if(Oe(i,e,`_prevRep`,`_nextRep`),t===c.blend){let t=dt._add,i=t.get(n);if(!i)return;let a=i[r],o=rt.animation;Oe(a,e,`_prevAdd`,`_nextAdd`);let s=a._head;if(s&&s===a._tail){Oe(a,s,`_prevAdd`,`_nextAdd`),Oe(o,s);let e=!0;for(let t in i)if(i[t]._head){e=!1;break}e&&t.delete(n)}}}return e},_t=(e,t,n)=>{let r=!1;return De(t,i=>{let o=i.target;if(e.includes(o)){let e=i.property,s=i._tweenType,c=et(n,o,s);(!c||c&&c===e)&&(i.parent._tail===i&&i._tweenType===a.TRANSFORM&&i._prev&&i._prev._tweenType===a.TRANSFORM&&(i._prev._renderTransforms=1),Oe(t,i),gt(i),r=!0)}},!0),r},vt=(e,t,n)=>{let r=t||ct,i;if(r._hasChildren){let t=0;De(r,a=>{if(!a._hasChildren){if(i=_t(e,a,n),i&&!a._head)a.cancel(),Oe(r,a);else{let e=a._offset+a._delay+a.duration;e>t&&(t=e)}}a._head?vt(e,a,n):a._hasChildren=!1},!0),B(r.iterationDuration)||(r.iterationDuration=t)}else i=_t(e,r,n);i&&!r._head&&(r._hasChildren=!1,r.cancel&&r.cancel())},yt=e=>(e.paused=!0,e.began=!1,e.completed=!1,e),bt=e=>e._cancelled?(e._hasChildren?De(e,bt):De(e,e=>{e._composition!==c.none&&ht(e,ft(e.target,e.property))}),e._cancelled=0,e):e,xt=0,St=(e,t)=>e._priority>t._priority,Ct=class extends nt{constructor(e={},t=null,n=0){super(0),++xt;let{id:r,delay:i,duration:a,reversed:o,alternate:s,loop:c,loopDelay:l,autoplay:u,frameRate:d,playbackRate:f,priority:p,onComplete:m,onLoop:h,onPause:g,onBegin:_,onBeforeUpdate:v,onUpdate:y}=e;F.current&&F.current.register(this);let b=t?0:ct._lastTickTime,S=t?t.defaults:I.defaults,C=ae(i)||B(i)?S.delay:+i,w=ae(a)||B(a)?1/0:+a,T=ze(c,S.loop),E=ze(l,S.loopDelay),D=T===!0||T===1/0||T<0?1/0:T+1,O=0;t?O=n:(ct.reqId||ct.requestTick(ne()),O=(ct._lastTickTime-ct._startTime)*I.timeScale),this.id=B(r)?xt:r,this.parent=t,this.duration=Ce((w+E)*D-E)||1e-11,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=_||S.onBegin,this.onBeforeUpdate=v||S.onBeforeUpdate,this.onUpdate=y||S.onUpdate,this.onLoop=h||S.onLoop,this.onPause=g||S.onPause,this.onComplete=m||S.onComplete,this.iterationDuration=w,this.iterationCount=D,this._autoplay=!t&&ze(u,S.autoplay),this._offset=O,this._delay=C,this._loopDelay=E,this._iterationTime=0,this._currentIteration=0,this._resolve=x,this._running=!1,this._reversed=+ze(o,S.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=ze(s,S.alternate),this._prev=null,this._next=null,this._lastTickTime=b,this._startTime=b,this._lastTime=b,this._fps=ze(d,S.frameRate),this._speed=ze(f,S.playbackRate),this._priority=+ze(p,1)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return ye(be(this._currentTime,I.precision),-this._delay,this.duration)}set currentTime(e){let t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return ye(be(this._iterationTime,I.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return ye(be(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return ye(be(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){let t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*ye(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return bt(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,Qe(this,0,1,~~e,s.FORCE),yt(this),this._hasChildren&&De(this,yt),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&Qe(this,this.duration,1,~~e,s.FORCE),this.reset(e);let t=this._autoplay;return t===!0?this.resume():t&&!B(t.linked)&&t.link(this),this}resetTime(){let e=1/(this._speed*ct._speed);return this._startTime=ne()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=1e-11&&!this._hasChildren?Qe(this,m,0,0,s.FORCE):(this._running||=(ke(ct,this,St),ct._hasChildren=!0,!0),this.resetTime(),this._startTime-=12,ct.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,n=0){bt(this),this.completed=!1;let r=this.paused;return this.paused=!0,Qe(this,e+this._delay,~~t,~~n,s.AUTO),r?this:this.resume()}alternate(){let e=this._reversed,t=this.iterationCount,n=this.iterationDuration,r=t===1/0?ge(h/n):t;return this._reversed=+(this._alternate&&!(r%2)?e:!e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(n*r-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?De(this,e=>e.cancel(),!0):De(this,gt),this._cancelled=1,this.pause()}stretch(e){let t=this.duration,n=we(e);if(t===n)return this;let r=e/t,i=e<=m;return this.duration=i?m:n,this.iterationDuration=i?m:we(this.iterationDuration*r),this._offset*=r,this._delay*=r,this._loopDelay*=r,this}revert(){Qe(this,0,1,0,s.AUTO);let e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=x){let t=this.then,n=()=>{this.then=null,e(this),this.then=t,this._resolve=x};return new Promise(e=>(this._resolve=()=>e(n()),this.completed&&this._resolve(),this))}};function wt(e){let t=ie(e)?F.root.querySelectorAll(e):e;if(t instanceof NodeList||t instanceof HTMLCollection)return t}function Tt(e){if(V(e))return[];if(!n)return R(e)&&e.flat(1/0)||[e];if(R(e)){let t=e.flat(1/0),n=[];for(let e=0,r=t.length;e<r;e++){let r=t[e];if(!V(r)){let e=wt(r);if(e)for(let t=0,r=e.length;t<r;t++){let r=e[t];if(!V(r)){let e=!1;for(let t=0,i=n.length;t<i;t++)if(n[t]===r){e=!0;break}e||n.push(r)}}else{let e=!1;for(let t=0,i=n.length;t<i;t++)if(n[t]===r){e=!0;break}e||n.push(r)}}}return n}let t=wt(e);return t?Array.from(t):[e]}function Et(e){let t=Tt(e),n=t.length;for(let e=0;e<n;e++){let n=t[e];if(!n[l]){n[l]=!0;let e=oe(n);(n.nodeType||e)&&(n[u]=!0,n[d]=e,n[f]={})}}return t}var Dt={deg:1,rad:180/q,turn:360},Ot={},kt=(e,t,n,r=!1)=>{let a=t.u,s=t.n;if(t.t===o.UNIT&&a===n)return t;let c=s+a+n,l=Ot[c];if(!B(l)&&!r)t.n=l;else{let r;if(a in Dt)r=s*Dt[a]/Dt[n];else{let t=e.cloneNode(),o=e.parentNode,c=o&&o!==i?o:i.body;c.appendChild(t);let l=t.style;l.width=100+a;let u=t.offsetWidth||100;l.width=100+n;let d=u/(t.offsetWidth||100);c.removeChild(t),r=d*s}t.n=r,Ot[c]=r}return t.t,o.UNIT,t.u=n,t},At=e=>e,jt=(e=1.68)=>t=>pe(t,+e),Mt={in:e=>t=>e(t),out:e=>t=>1-e(1-t),inOut:e=>t=>t<.5?e(t*2)/2:1-e(t*-2+2)/2,outIn:e=>t=>t<.5?(1-e(1-t*2))/2:(e(t*2-1)+1)/2},Nt=q/2,Pt=q*2,Ft={"":jt,Quad:jt(2),Cubic:jt(3),Quart:jt(4),Quint:jt(5),Sine:e=>1-G(e*Nt),Circ:e=>1-W(1-e*e),Expo:e=>e?pe(2,10*e-10):0,Bounce:e=>{let t,n=4;for(;e<((t=pe(2,--n))-1)/11;);return 1/pe(4,3-n)-7.5625*pe((t*3-2)/22-e,2)},Back:(e=1.7)=>t=>(+e+1)*t*t*t-+e*t*t,Elastic:(e=1,t=.3)=>{let n=ye(+e,1,10),r=ye(+t,m,2),i=r/Pt*_e(1/n),a=Pt/r;return e=>e===0||e===1?e:-n*pe(2,-10*(1-e))*me((1-e-i)*a)}},It=(()=>{let e={linear:At,none:At};for(let t in Mt)for(let n in Ft){let r=Ft[n],i=Mt[t];e[t+n]=n===``||n===`Back`||n===`Elastic`?(e,t)=>i(r(e,t)):i(r)}return e})(),Lt={linear:At,none:At},Rt=e=>{if(Lt[e])return Lt[e];if(e.indexOf(`(`)<=-1){let t=Mt[e]||e.includes(`Back`)||e.includes(`Elastic`)?It[e]():It[e];return t?Lt[e]=t:At}{let t=e.slice(0,-1).split(`(`),n=It[t[0]];return n?Lt[e]=n(...t[1].split(`,`)):At}},zt=[`steps(`,`irregular(`,`linear(`,`cubicBezier(`],Bt=e=>{if(ie(e)){for(let t=0,n=zt.length;t<n;t++)if(te(e,zt[t]))return console.warn(`String syntax for \`ease: "${e}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${e}\``),At}return ae(e)?e:ie(e)?Rt(e):At},Vt=Ke(),Ht=Ke(),Ut={},Wt={func:null},Gt={func:null},Kt=[null],qt=[null,null],Jt={to:null},Yt=0,Xt=0,Zt,Qt,$t=(e,t)=>{let n={};if(R(e)){let t=[].concat(...e.map(e=>Object.keys(e))).filter(ue);for(let r=0,i=t.length;r<i;r++){let i=t[r];n[i]=e.map(e=>{let t={};for(let n in e){let r=e[n];ue(n)?n===i&&(t.to=r):t[n]=r}return t})}}else{let r=ze(t.duration,I.defaults.duration);Object.keys(e).map(t=>({o:parseFloat(t)/100,p:e[t]})).sort((e,t)=>e.o-t.o).forEach(e=>{let t=e.o,i=e.p;for(let e in i)if(ue(e)){let a=n[e];a||=n[e]=[];let o=t*r,s=a.length,c=a[s-1],l={to:i[e]},u=0;for(let e=0;e<s;e++)u+=a[e].duration;s===1&&(l.from=c.to),i.ease&&(l.ease=i.ease),l.duration=o-(s?u:0),a.push(l)}return e});for(let e in n){let t=n[e],r;for(let e=0,n=t.length;e<n;e++){let n=t[e],i=n.ease;n.ease=r||void 0,r=i}t[0].duration||t.shift()}}return n},en=class extends Ct{constructor(e,t,n,r,i=!1,s=0,l){super(t,n,r),this._head,this._tail,++Xt;let u=Et(e),d=u.length,f=t.keyframes,p=f?Ee($t(f,t),t):t,{id:h,delay:g,duration:v,ease:y,playbackEase:b,modifier:x,composition:S,onRender:C}=p,w=n?n.defaults:I.defaults,T=ze(y,w.ease),E=ze(b,w.playbackEase),D=E?Bt(E):null,O=!B(T.ease),k=O?T.ease:ze(y,D?`linear`:w.ease),A=O?T.settlingDuration:ze(v,w.duration),j=ze(g,w.delay),M=x||w.modifier,N=B(S)&&d>=1e3?c.none:B(S)?w.composition:S,P=this._offset+(n?n._offset:0);O&&(T.parent=this);let F=NaN,L=NaN,ee=0,te=0;for(let e=0;e<d;e++){let t=u[e],r=s||e,d=l||u,f=NaN,m=NaN;for(let e in p)if(ue(e)){let s=He(t,e),l=Ne(t,e),u=et(e,t,s),h=p[e],g=R(h);if(i&&!g&&(qt[0]=h,qt[1]=h,h=qt),g){let e=h.length,t=!re(h[0]);e===2&&t?(Jt.to=h,Kt[0]=Jt,Zt=Kt):e>2&&t?(Zt=[],h.forEach((e,t)=>{t?t===1?(qt[1]=e,Zt.push(qt)):Zt.push(e):qt[0]=e})):Zt=h}else Kt[0]=h,Zt=Kt;let v=null,y=null,b=NaN,x=0,S=0;for(let e=Zt.length;S<e;S++){let i=Zt[S];re(i)?Qt=i:(Jt.to=i,Qt=Jt),Wt.func=null,Gt.func=null;let a=Ve(ze(Qt.composition,N),t,r,d,null,null),f=z(a)?a:c[a];!v&&f!==c.none&&(v=ft(t,u));let p=v?v._tail:null,m=n&&p&&p.parent.parent===n?p:y,h=Ve(Qt.to,t,r,d,Wt,m),g;re(h)&&!B(h.to)?(Qt=h,g=h.to):g=h;let C=Ve(Qt.from,t,r,d,Gt,m),w=Qt.ease||k,T=Ve(w,t,r,d,null,m),E=ae(T)||ie(T)?T:w,D=!B(E)&&!B(E.ease),O=D?E.ease:E,F=D?E.settlingDuration:Ve(ze(Qt.duration,e>1?Ve(A,t,r,d,null,m)/e:A),t,r,d,null,m),I=Ve(ze(Qt.delay,S?0:j),t,r,d,null,m),L=Qt.modifier||M,ne=!B(C),oe=!B(g),se=R(g),H=se||ne&&oe,ce=y?x:0,le=y?x+I:I,ue=be(P+le,12),de=be(P+ce,12);!te&&(ne||se)&&(te=1);let U=y;if(f!==c.none){let e=v._head;for(;e&&e._absoluteStartTime<=ue;)if(e._isOverridden||(U=e),e=e._nextRep,e&&e._absoluteStartTime>=ue)for(;e;)mt(e),e=e._nextRep}if(H){qe(se?Ve(g[0],t,r,d,Gt,m):C,Vt),qe(se?Ve(g[1],t,r,d,Wt,m):g,Ht);let e=We(t,u,s,Ut);Vt.t===o.NUMBER&&(U?U._valueType===o.UNIT&&(Vt.t=o.UNIT,Vt.u=U._unit):(qe(e,Ye),Ye.t===o.UNIT&&(Vt.t=o.UNIT,Vt.u=Ye.u)))}else oe?qe(g,Ht):y?Je(y,Ht):qe(n&&U&&U.parent.parent===n?U._value:We(t,u,s,Ut),Ht),ne?qe(C,Vt):y?Je(y,Vt):qe(n&&U&&U.parent.parent===n?U._value:We(t,u,s,Ut),Vt);if(Vt.o&&(Vt.n=Ge(U?U._toNumber:qe(We(t,u,s,Ut),Ye).n,Vt.n,Vt.o)),Ht.o&&(Ht.n=Ge(Vt.n,Ht.n,Ht.o)),Vt.t!==Ht.t){if(Vt.t===o.COMPLEX||Ht.t===o.COMPLEX){let e=Vt.t===o.COMPLEX?Vt:Ht,t=Vt.t===o.COMPLEX?Ht:Vt;t.t=o.COMPLEX,t.s=Te(e.s),t.d=e.d.map(()=>t.n)}else if(Vt.t===o.UNIT||Ht.t===o.UNIT){let e=Vt.t===o.UNIT?Vt:Ht,t=Vt.t===o.UNIT?Ht:Vt;t.t=o.UNIT,t.u=e.u}else if(Vt.t===o.COLOR||Ht.t===o.COLOR){let e=Vt.t===o.COLOR?Vt:Ht,t=Vt.t===o.COLOR?Ht:Vt;t.t=o.COLOR,t.d=e.d.map(()=>0)}}if(Vt.u!==Ht.u){let e=Ht.u?Vt:Ht;e=kt(t,e,Ht.u?Ht.u:Vt.u,!1)}if(Ht.d&&Vt.d&&Ht.d.length!==Vt.d.length){let e=Vt.d.length>Ht.d.length?Vt:Ht,t=e===Vt?Ht:Vt;t.d=e.d.map((e,n)=>B(t.d[n])?0:t.d[n]),t.s=Te(e.s)}let fe=be(+F||1e-11,12),pe=Ut[u];V(pe)||(Ut[u]=null);let W=l?l.set:null;x=be(le+fe,12);let me=Vt.d,G=Ht.d,he=Ht.s,K={parent:this,id:Yt++,property:u,target:t,_value:null,_toFunc:Wt.func,_fromFunc:Gt.func,_ease:Bt(O),_fromNumbers:me?Te(me):_,_toNumbers:G?Te(G):_,_strings:he?Te(he):_,_fromNumber:Vt.n,_toNumber:Ht.n,_numbers:me?Te(me):_,_number:Vt.n,_unit:Ht.u,_modifier:L,_currentTime:0,_startTime:le,_delay:+I,_updateDuration:fe,_changeDuration:fe,_absoluteStartTime:ue,_absoluteUpdateStartTime:de,_absoluteEndTime:be(P+x,12),_hasFromValue:ne||se?1:0,_tweenType:s,_setter:W,_valueType:Ht.t,_composition:f,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:pe,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};f!==c.none&&ht(K,v);let ge=K._valueType;if(ge===o.COMPLEX)K._value=Xe(K,1,-1);else if(ge===o.UNIT)K._value=`${L(K._toNumber)}${K._unit}`;else if(ge===o.COLOR){let e=Ht.d;K._value=`rgba(${be(e[0],0)},${be(e[1],0)},${be(e[2],0)},${e[3]})`}else K._value=L(K._toNumber);isNaN(b)&&(b=K._startTime),y=K,ee++,ke(this,K)}(isNaN(L)||b<L)&&(L=b),(isNaN(F)||x>F)&&(F=x),s===a.TRANSFORM&&(f=ee-S,m=ee)}if(!isNaN(f)){let e=0;De(this,t=>{e>=f&&e<m&&(t._renderTransforms=1,t._composition===c.blend&&De(rt.animation,e=>{e.id===t.id&&(e._renderTransforms=1)})),e++})}}d||console.warn(`No target found. Make sure the element you're trying to animate is accessible before creating your animation.`),L?(De(this,e=>{e._startTime-e._delay||(e._delay-=L),e._startTime-=L}),F-=L):L=0,F||(F=m,this.iterationCount=0),this.targets=u,this.id=B(h)?Xt:h,this.duration=F===1e-11?m:Ce((F+this._loopDelay)*this.iterationCount-this._loopDelay)||1e-11,this.onRender=C||w.onRender,this._ease=D,this._delay=L,this.iterationDuration=F,!this._autoplay&&te&&this.onRender(this)}stretch(e){let t=this.duration;if(t===we(e))return this;let n=e/t;return De(this,e=>{e._updateDuration=we(e._updateDuration*n),e._changeDuration=we(e._changeDuration*n),e._currentTime*=n,e._delay*=n,e._startTime*=n,e._absoluteStartTime*=n,e._absoluteUpdateStartTime*=n,e._absoluteEndTime*=n}),super.stretch(e)}refresh(){return De(this,e=>{let t=e._toFunc,n=e._fromFunc;(t||n)&&(n?(qe(n(),Vt),Vt.u!==e._unit&&e.target[u]&&kt(e.target,Vt,e._unit,!0),e._fromNumbers=Te(Vt.d),e._fromNumber=Vt.n):t&&(qe(We(e.target,e.property,e._tweenType),Ye),e._fromNumbers=Te(Ye.d),e._fromNumber=Ye.n),t&&(qe(t(),Ht),e._toNumbers=Te(Ht.d),e._strings=Te(Ht.s),e._toNumber=Ht.o?Ge(e._fromNumber,Ht.n,Ht.o):Ht.n))}),this.duration===1e-11&&this.restart(),this}revert(){return super.revert(),tt(this)}then(e){return super.then(e)}},tn=(e,t)=>I.editor?I.editor.addAnimation(e,t):new en(e,t,null,0,!1).init(),nn=(e,t)=>{if(te(t,`<`)){let n=t[1]===`<`,r=e._tail,i=r?r._offset+r._delay:0;return n?i:i+r.duration}},rn=(e,t)=>{let n=e.iterationDuration;if(n===1e-11&&(n=0),B(t))return n;if(z(+t))return+t;let r=t,i=e?e.labels:null,a=!V(i),o=nn(e,r),s=!B(o),c=M.exec(r);if(c){let e=c[0],t=r.split(e),l=a&&t[0]?i[t[0]]:n;return Ge(s?o:a?l:n,+t[1],e[0])}return s?o:a?B(i[r])?n:i[r]:n};function an(e){return Ce((e.iterationDuration+e._loopDelay)*e.iterationCount-e._loopDelay)||1e-11}function on(e,t,n,r,i,a){let o=z(e.duration)&&e.duration<=1e-11?n-m:n;t.composition&&Qe(t,o,1,1,s.AUTO);let c=r?new en(r,e,t,o,!1,i,a):new Ct(e,t,o);return t.composition&&c.init(!0),ke(t,c),De(t,e=>{let n=e._offset+e._delay+e.duration;n>t.iterationDuration&&(t.iterationDuration=n)}),t.duration=an(t),t}var sn=0,cn=class extends Ct{constructor(e={}){super(e,null,0),++sn,this.id=B(e.id)?sn:e.id,this.duration=0,this.labels={};let t=e.defaults,n=I.defaults;this.defaults=t?Ee(t,n):n,this.composition=ze(e.composition,!0),this.onRender=e.onRender||n.onRender;let r=ze(e.playbackEase,n.playbackEase);this._ease=r?Bt(r):null,this.iterationDuration=0}add(e,t,n){let r=re(t),i=re(e);if(r||i){if(this._hasChildren=!0,r){let r=t,i=I.editor&&I.editor.addTimelineChild,a=n&&n.type===`Stagger`&&I.editor,o=ae(n)?n:null;if(o||a){let t=Tt(e),a=this.duration,s=this.iterationDuration,c=r.id,l=0,u=t.length,d=i?i(e,r,this.id,n,u):null,f=o||I.editor.resolveStagger(n.defaultValue);t.forEach(e=>{let n={...d||r};this.duration=a,this.iterationDuration=s,B(c)||(n.id=c+`-`+l);let i=rn(this,f(e,l,t,null,this));on(n,this,i,e,l,t),l++})}else{let t=i?i(e,r,this.id,n):r,a=n&&n.type?n.defaultValue:n;on(t,this,rn(this,a),e)}}else on(e,this,rn(this,t));return this.composition&&this.init(!0),this}}sync(e,t){if(B(e)||e&&B(e.pause))return this;e.pause();let n=+(e.effect?e.effect.getTiming().duration:e.duration);!B(e)&&!B(e.persist)&&(e.persist=!0);let r=I.editor,i=r&&r.addTimelineChild;r&&r.addTimelineSync&&(t=r.addTimelineSync(e,t,this.id),r.addTimelineChild=null);let a=this.add(e,{currentTime:[0,n],duration:n,delay:0,ease:`linear`,playbackEase:`linear`},t);return r&&(r.addTimelineChild=i),a}set(e,t,n){return B(t)?this:(t.duration=m,t.composition=c.replace,this.add(e,t,n))}call(e,t){return B(e)||e&&!ae(e)?this:(I.editor&&I.editor.addTimelineCall&&(t=I.editor.addTimelineCall(e,t,this.id)),this.add({duration:0,delay:0,onComplete:()=>e(this)},t))}label(e,t){return B(e)||e&&!ie(e)?this:(I.editor&&I.editor.addTimelineLabel&&(t=I.editor.addTimelineLabel(e,t,this.id)),this.labels[e]=rn(this,t),this)}remove(e,t){return vt(Tt(e),this,t),this}stretch(e){let t=this.duration;if(t===we(e))return this;let n=e/t,r=this.labels;De(this,e=>e.stretch(e.duration*n));for(let e in r)r[e]*=n;return super.stretch(e)}refresh(){return De(this,e=>{e.refresh&&e.refresh()}),this}revert(){return super.revert(),De(this,e=>e.revert,!0),tt(this)}then(e){return super.then(e)}},ln=e=>I.editor?I.editor.addTimeline(e):new cn(e).init(),un=t({clamp:()=>ye,damp:()=>vn,degToRad:()=>gn,lerp:()=>Se,mapRange:()=>hn,padEnd:()=>pn,padStart:()=>fn,radToDeg:()=>_n,round:()=>be,roundPad:()=>dn,snap:()=>xe,wrap:()=>mn}),dn=(e,t)=>(+e).toFixed(t),fn=(e,t,n)=>`${e}`.padStart(t,n),pn=(e,t,n)=>`${e}`.padEnd(t,n),mn=(e,t,n)=>((e-t)%(n-t)+(n-t))%(n-t)+t,hn=(e,t,n,r,i)=>r+(e-t)/(n-t)*(i-r),gn=e=>e*Math.PI/180,_n=e=>e*180/Math.PI,vn=(e,t,n,r)=>r?r===1?t:Se(e,t,1-Math.exp(-r*n*.1)):e,yn=g*10,bn=class{constructor(e={}){let t=!B(e.bounce)||!B(e.duration);this.timeStep=.02,this.restThreshold=5e-4,this.restDuration=200,this.maxDuration=6e4,this.maxRestSteps=this.restDuration/this.timeStep/g,this.maxIterations=this.maxDuration/this.timeStep/g,this.bn=ye(ze(e.bounce,.5),-1,1),this.pd=ye(ze(e.duration,628),10*I.timeScale,yn*I.timeScale),this.m=ye(ze(e.mass,1),1,yn),this.s=ye(ze(e.stiffness,100),m,yn),this.d=ye(ze(e.damping,10),m,yn),this.v=ye(ze(e.velocity,0),-yn,yn),this.w0=0,this.zeta=0,this.wd=0,this.b=0,this.completed=!1,this.solverDuration=0,this.settlingDuration=0,this.parent=null,this.onComplete=e.onComplete||x,t&&this.calculateSDFromBD(),this.compute(),this.ease=e=>{let t=e*this.settlingDuration,n=this.completed,r=this.pd;return t>=r&&!n&&(this.completed=!0,this.onComplete(this.parent)),t<r&&n&&(this.completed=!1),e===0||e===1?e:this.solve(e*this.solverDuration)}}solve(e){let{zeta:t,w0:n,wd:r,b:i}=this,a=e;return a=t<1?K(-a*t*n)*(1*G(r*a)+i*me(r*a)):t===1?(1+i*a)*K(-a*n):((1+i)*K((-t*n+r)*a)+(1-i)*K((-t*n-r)*a))/2,1-a}calculateSDFromBD(){let e=I.timeScale===1?this.pd/g:this.pd;this.m=1,this.v=0,this.s=pe(2*q/e,2),this.d=this.bn>=0?(1-this.bn)*4*q/e:4*q/(e*(1+this.bn)),this.s=be(ye(this.s,m,yn),3),this.d=be(ye(this.d,m,300),3)}calculateBDFromSD(){let e=2*q/W(this.s);this.pd=e*(I.timeScale===1?g:1),this.bn=this.d/(2*W(this.s))<=1?1-this.d*e/(4*q):4*q/(this.d*e)-1,this.bn=be(ye(this.bn,-1,1),3),this.pd=be(ye(this.pd,10*I.timeScale,yn*I.timeScale),3)}compute(){let{maxRestSteps:e,maxIterations:t,restThreshold:n,timeStep:r,m:i,d:a,s:o,v:s}=this,c=this.w0=ye(W(o/i),m,g),l=this.zeta=a/(2*W(o*i));l<1?(this.wd=c*W(1-l*l),this.b=(l*c+-s)/this.wd):l===1?(this.wd=0,this.b=-s+c):(this.wd=c*W(l*l-1),this.b=(l*c+-s)/this.wd);let u=0,d=0,f=0;for(;d<=e&&f<=t;)he(1-this.solve(u))<n?d++:d=0,this.solverDuration=u,u+=r,f++;this.settlingDuration=be(this.solverDuration*g,0)*I.timeScale}get bounce(){return this.bn}set bounce(e){this.bn=ye(ze(e,1),-1,1),this.calculateSDFromBD(),this.compute()}get duration(){return this.pd}set duration(e){this.pd=ye(ze(e,1),10*I.timeScale,yn*I.timeScale),this.calculateSDFromBD(),this.compute()}get stiffness(){return this.s}set stiffness(e){this.s=ye(ze(e,100),m,yn),this.calculateBDFromSD(),this.compute()}get damping(){return this.d}set damping(e){this.d=ye(ze(e,10),m,yn),this.calculateBDFromSD(),this.compute()}get mass(){return this.m}set mass(e){this.m=ye(ze(e,1),1,yn),this.compute()}get velocity(){return this.v}set velocity(e){this.v=ye(ze(e,0),-yn,yn),this.compute()}},xn=e=>(console.warn(`createSpring() is deprecated use spring() instead`),new bn(e)),Sn=(e,t)=>{if(!B(t))return I.editor&&I.editor.addSet?I.editor.addSet(e,t):(t.duration=m,t.composition=ze(t.composition,c.none),new en(e,t,null,0,!0).resume())},Cn=e=>{let t;return((...n)=>{let r,i,a,o,s;t&&(r=t.currentIteration,i=t.iterationProgress,a=t.reversed,o=t._alternate,s=t._startTime,t.revert());let c=e(...n);return c&&!ae(c)&&c.revert&&(t=c),B(i)||(t.currentIteration=r,t.iterationProgress=(o&&r%2?!a:a)?1-i:i,t._startTime=s),c||x})},wn=un,Tn={},En=(e,t=0)=>(...n)=>t?t=>e(...n,t):t=>e(t,...n),Dn=e=>(...t)=>{let n=e(...t);return new Proxy(x,{apply:(e,t,[r])=>n(r),get:(e,t)=>{if(Tn[t])return Dn((...e)=>{let r=Tn[t](...e);return e=>r(n(e))})}})},On=(e,t,n=0)=>{let r=(...e)=>(e.length<t.length?Dn(En(t,n)):t)(...e);return Tn[e]||(Tn[e]=r),r};On(`roundPad`,wn.roundPad),On(`padStart`,wn.padStart),On(`padEnd`,wn.padEnd),On(`wrap`,wn.wrap),On(`mapRange`,wn.mapRange),On(`degToRad`,wn.degToRad),On(`radToDeg`,wn.radToDeg),On(`snap`,wn.snap),On(`clamp`,wn.clamp);var kn=On(`round`,wn.round);On(`lerp`,wn.lerp,1),On(`damp`,wn.damp,1);var An=(e=0,t=1,n=0)=>{let r=10**n;return Math.floor((Math.random()*(t-e+1/r)+e)*r)/r},jn=0,Mn=(e,t=0,n=1,r=0)=>{let i=e===void 0?jn++:e;return(e=t,a=n,o=r)=>{i+=1831565813,i=Math.imul(i^i>>>15,i|1),i^=i+Math.imul(i^i>>>7,i|61);let s=10**o;return Math.floor((((i^i>>>14)>>>0)/4294967296*(a-e+1/s)+e)*s)/s}},Nn=(e,t=An)=>{let n=e.length,r,i;for(;n;)i=t(0,--n),r=e[n],e[n]=e[i],e[i]=r;return e},Pn=(e,t={})=>{let n=[],r=0,i,a=null,o=t.from,s=t.reversed,c=t.ease,l=!B(c),u=l&&!B(c.ease)?c.ease:l?Bt(c):null,d=t.grid,f=d===!0,p=t.axis,m=t.total,h=B(o)||o===0||o===`first`,g=o===`center`,_=o===`last`,v=o===`random`,y=R(o),b=R(e),x=t.use,S=fe(b?e[0]:e),C=b?fe(e[1]):0,w=A.exec((b?e[1]:e)+``),T=t.start||0+(b?S:0),E=t.seed,D=!B(E)&&E!==!1?Mn(E===!0?0:E):An,O=t.jitter,k=!B(O),j=R(O),M=j?O[0]:O||0,N=j?O[1]:O||0,P=h?0:z(o)?o:0;return(e,c,l,h,E)=>{let[O]=Et(e),A=B(m)?l.length:m,j=B(x)?!1:ae(x)?x(O,c,A):We(O,x),F=z(j)||ie(j)&&z(+j)?+j:c,I=F>=0&&F<A?F:c;if(g&&(P=(A-1)/2),_&&(P=A-1),!n.length){if(f){let e=!0,t=!1,r=1/0,i=1/0,a=1/0,s=-1/0,c=-1/0,u=-1/0,d=[],f=[],m=[];for(let n=0;n<A;n++){let o=l[n],p=0,h=0,g=0,_=!1;if(o&&ae(o.getBoundingClientRect)){let e=o.getBoundingClientRect();p=e.left+e.width/2,h=e.top+e.height/2,_=!0}else{let e=o;e&&z(e.x)&&z(e.y)&&(p=e.x,h=e.y,z(e.z)&&(g=e.z,t=!0),_=!0)}if(!_){e=!1;break}d.push(p),f.push(h),m.push(g),p<r&&(r=p),h<i&&(i=h),g<a&&(a=g),p>s&&(s=p),h>c&&(c=h),g>u&&(u=g)}if(e){let e=d[0],l=f[0],h=m[0];y?(e=r+o[0]*(s-r),l=i+o[1]*(c-i),h=t?a+(o.length>=3?o[2]:.5)*(u-a):0):g?(e=(r+s)/2,l=(i+c)/2,h=(a+u)/2):_?(e=d[A-1],l=f[A-1],h=m[A-1]):z(o)&&(e=d[o],l=f[o],h=m[o]);for(let r=0;r<A;r++){let i=e-d[r],a=l-f[r],o=h-m[r],s=W(i*i+a*a+(t?o*o:0));p===`x`&&(s=-i),p===`y`&&(s=-a),p===`z`&&(s=-o),n.push(s)}let v=1/0;for(let e=0;e<A;e++){let t=he(n[e]);t>0&&t<v&&(v=t)}if(v>0&&v<1/0)for(let e=0;e<A;e++)n[e]=n[e]/v}else for(let e=0;e<A;e++)n.push(he(P-e))}else for(let e=0;e<A;e++)if(!d)n.push(he(P-e));else{let t=d.length,r=d[0]*d[1],i,a,s;y?(i=o[0]*(d[0]-1),a=o[1]*(d[1]-1),s=t===3?(o.length>=3?o[2]:.5)*(d[2]-1):0):g?(i=(d[0]-1)/2,a=(d[1]-1)/2,s=t===3?(d[2]-1)/2:0):(i=P%d[0],a=ge(P/d[0])%d[1],s=t===3?ge(P/r):0);let c=e%d[0],l=ge(e/d[0])%d[1],u=t===3?ge(e/r):0,f=i-c,m=a-l,h=s-u,_=W(f*f+m*m+(t===3?h*h:0));p===`x`&&(_=-f),p===`y`&&(_=-m),p===`z`&&(_=-h),n.push(_)}r=n[0];for(let e=1;e<A;e++)n[e]>r&&(r=n[e]);if(u||s)for(let e=0;e<A;e++){let t=n[e];u&&(t=u(t/r)*r),s&&(t=p?-t:he(r-t)),n[e]=t}if(k){a=Array(A);for(let e=0;e<A;e++)a[e]=D(-1,1,4)}v&&(n=Nn(n,D))}let L=b?(C-S)/r:S;B(i)&&(i=E?rn(E,B(t.start)?E.iterationDuration:T):T);let ee=i+(L*be(n[I],2)||0);if(k){let e=r?n[I]/r:0,t=M+(N-M)*e;ee+=a[I]*t}return t.modifier&&(ee=t.modifier(ee)),w&&(ee=`${ee}${w[2]}`),ee}},Fn=e=>{let t=1;if(e&&e.getCTM){let n=e.getCTM();n&&(t=(W(n.a*n.a+n.b*n.b)+W(n.c*n.c+n.d*n.d))/2)}return t},In=(e,t,n)=>{let r=g,i=getComputedStyle(e),a=i.strokeLinecap,o=i.vectorEffect===`non-scaling-stroke`?e:null,s=a,c=new Proxy(e,{get(e,t){let n=e[t];return t===p?e:t===`setAttribute`?(...t)=>{if(t[0]===`draw`){let n=t[1].split(` `),i=+n[0],c=+n[1],l=Fn(o),u=i*-r*l,d=c*r*l+u,f=r*l+(i===0&&c===1||i===1&&c===0?0:10*l)-d;if(a!==`butt`){let t=i===c?`butt`:a;s!==t&&(e.style.strokeLinecap=`${t}`,s=t)}e.setAttribute(`stroke-dashoffset`,`${u}`),e.setAttribute(`stroke-dasharray`,`${d} ${f}`)}return Reflect.apply(n,e,t)}:ae(n)?(...t)=>Reflect.apply(n,e,t):n}});return e.getAttribute(`pathLength`)!==`${r}`&&(e.setAttribute(`pathLength`,`${r}`),c.setAttribute(`draw`,`${t} ${n}`)),c},Ln=(e,t=0,n=0)=>Tt(e).map(e=>In(e,t,n)),Rn=typeof Intl<`u`&&Intl.Segmenter,zn=/\{value\}/g,Bn=/\{i\}/g,Vn=/(\s+)/,Hn=/^\s+$/,Un=`line`,Wn=`word`,Gn=`char`,Kn=`data-line`,qn=null,Jn=null,Yn=null,Xn=e=>e.isWordLike||e.segment===` `||z(+e.segment),Zn=e=>e.setAttribute(`aria-hidden`,`true`),Qn=(e,t)=>[...e.querySelectorAll(`[data-${t}]:not([data-${t}] [data-${t}])`)],$n={line:`#00D672`,word:`#FF4B4B`,char:`#5A87FF`},er=e=>{if(!e.childElementCount&&!e.textContent.trim()){let t=e.parentElement;e.remove(),t&&er(t)}},tr=(e,t,n)=>{let r=e.getAttribute(Kn);if(r!==null&&+r!==t||e.tagName===`BR`){n.add(e);let t=e.previousSibling,r=e.nextSibling;t&&t.nodeType===3&&Hn.test(t.textContent)&&n.add(t),r&&r.nodeType===3&&Hn.test(r.textContent)&&n.add(r)}let i=e.childElementCount;for(;i--;)tr(e.children[i],t,n);return n},nr=(e,t={})=>{let n=``;t||={};let r=ie(t.class)?` class="${t.class}"`:``,i=ze(t.clone,!1),a=ze(t.wrap,!1),o=a?a===!0?`clip`:a:i?`clip`:!1;if(a&&(n+=`<span${o?` style="overflow:${o};"`:``}>`),n+=`<span${r}${i?` style="position:relative;"`:``} data-${e}="{i}">`,i){let e=i===`left`?`-100%`:i===`right`?`100%`:`0`,t=i===`top`?`-100%`:i===`bottom`?`100%`:`0`;n+=`<span>{value}</span>`,n+=`<span inert style="position:absolute;top:${t};left:${e};white-space:nowrap;">{value}</span>`}else n+=`{value}`;return n+=`</span>`,a&&(n+=`</span>`),n},rr=(e,t,n,r,i,a,o,s,c)=>{let l=i===Un,u=i===Gn,d=`_${i}_`,f=ae(e)?e(n):e,p=l?`block`:`inline-block`;Yn.innerHTML=f.replace(zn,`<i class="${d}"></i>`).replace(Bn,`${u?c:l?o:s}`);let m=Yn.content,h=m.firstElementChild,g=m.querySelector(`[data-${i}]`)||h,_=m.querySelectorAll(`i.${d}`),v=_.length;if(v){h.style.display=p,g.style.display=p,g.setAttribute(Kn,`${o}`),l||(g.setAttribute(`data-word`,`${s}`),u&&g.setAttribute(`data-char`,`${c}`));let e=v;for(;e--;){let t=_[e],r=t.parentElement;r.style.display=p,l?r.innerHTML=n.innerHTML:r.replaceChild(n.cloneNode(!0),t)}t.push(g),r.appendChild(m)}else console.warn(`The expression "{value}" is missing from the provided template.`);return a&&(h.style.outline=`1px dotted ${$n[i]}`),h},ir=class{constructor(e,t={}){qn||=Rn?new Rn([],{granularity:Wn}):{segment:e=>{let t=[],n=e.split(Vn);for(let e=0,r=n.length;e<r;e++){let r=n[e];t.push({segment:r,isWordLike:!Hn.test(r)})}return t}},Jn||=Rn?new Rn([],{granularity:`grapheme`}):{segment:e=>[...e].map(e=>({segment:e}))},!Yn&&n&&(Yn=i.createElement(`template`)),F.current&&F.current.register(this);let{words:r,chars:a,lines:o,accessible:s,includeSpaces:c,debug:l}=t,u=(e=R(e)?e[0]:e)&&e.nodeType?e:(wt(e)||[])[0],d=o===!0?{}:o,f=r===!0||B(r)?{}:r,p=a===!0?{}:a;this.debug=ze(l,!1),this.includeSpaces=ze(c,!1),this.accessible=ze(s,!0),this.linesOnly=d&&!f&&!p,this.lineTemplate=re(d)?nr(Un,d):d,this.wordTemplate=re(f)||this.linesOnly?nr(Wn,f):f,this.charTemplate=re(p)?nr(Gn,p):p,this.$target=u,this.html=u&&u.innerHTML,this.lines=[],this.words=[],this.chars=[],this.effects=[],this.effectsCleanups=[],this.cache=null,this.ready=!1,this.width=0,this.resizeTimeout=null;let m=()=>this.html&&(d||f||p)&&this.split();this.resizeObserver=new ResizeObserver(()=>{clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{let e=u.offsetWidth;e!==this.width&&(this.width=e,m())},150)}),this.lineTemplate&&!this.ready?i.fonts.ready.then(m):m(),u?this.resizeObserver.observe(u):console.warn(`No Text Splitter target found.`)}addEffect(e){if(!ae(e))return console.warn(`Effect must return a function.`),this;let t=Cn(e);return this.effects.push(t),this.ready&&(this.effectsCleanups[this.effects.length-1]=t(this)),this}revert(){return clearTimeout(this.resizeTimeout),this.lines.length=this.words.length=this.chars.length=0,this.resizeObserver.disconnect(),this.effectsCleanups.forEach(e=>ae(e)?e(this):e.revert&&e.revert()),this.$target.innerHTML=this.html,this}splitNode(e){let t=this.wordTemplate,n=this.charTemplate,r=this.includeSpaces,a=this.debug,o=e.nodeType;if(o===3){let o=e.nodeValue;if(o.trim()){let s=[],c=this.words,l=this.chars,u=qn.segment(o),d=i.createDocumentFragment(),f=null;for(let e of u){let t=e.segment,n=Xn(e);if(!f||n&&f&&Xn(f))s.push(t);else{let e=s.length-1,n=s[e];!Vn.test(n)&&!Vn.test(t)?s[e]+=t:s.push(t)}f=e}for(let e=0,o=s.length;e<o;e++){let o=s[e];if(o.trim()){let u=s[e+1],f=r&&u&&!u.trim(),p=o,m=n?Jn.segment(p):null,h=n?i.createDocumentFragment():i.createTextNode(f?o+`\xA0`:o);if(n){let e=[...m];for(let t=0,r=e.length;t<r;t++){let o=e[t],s=t===r-1&&f?o.segment+`\xA0`:o.segment;rr(n,l,i.createTextNode(s),h,Gn,a,-1,c.length,l.length)}}t?rr(t,c,h,d,Wn,a,-1,c.length,l.length):n?d.appendChild(h):d.appendChild(i.createTextNode(o)),f&&e++}else{if(e&&r)continue;d.appendChild(i.createTextNode(o))}}e.parentNode.replaceChild(d,e)}}else if(o===1){let t=[...e.childNodes];for(let e=0,n=t.length;e<n;e++)this.splitNode(t[e])}}split(e=!1){let t=this.$target,n=!!this.cache&&!e,r=this.lineTemplate,a=this.wordTemplate,o=this.charTemplate,s=i.fonts.status!==`loading`,c=r&&s;this.ready=!r||s,(c||e)&&this.effectsCleanups.forEach(e=>ae(e)&&e(this)),n||(e&&(t.innerHTML=this.html,this.words.length=this.chars.length=0),this.splitNode(t),this.cache=t.innerHTML),c&&(n&&(t.innerHTML=this.cache),this.lines.length=0,a&&(this.words=Qn(t,Wn))),o&&(c||a)&&(this.chars=Qn(t,Gn));let l=this.words.length?this.words:this.chars,u,d=0;for(let e=0,t=l.length;e<t;e++){let t=l[e],{top:n,height:r}=t.getBoundingClientRect();!B(u)&&n-u>r*.5&&d++,t.setAttribute(Kn,`${d}`);let i=t.querySelectorAll(`[${Kn}]`),a=i.length;for(;a--;)i[a].setAttribute(Kn,`${d}`);u=n}if(c){let e=i.createDocumentFragment(),n=new Set,s=[];for(let e=0;e<d+1;e++){let r=t.cloneNode(!0);tr(r,e,new Set).forEach(e=>{let t=e.parentNode;t&&(e.nodeType===1&&n.add(t),t.removeChild(e))}),s.push(r)}n.forEach(er);for(let t=0,n=s.length;t<n;t++)rr(r,this.lines,s[t],e,Un,this.debug,t);t.innerHTML=``,t.appendChild(e),a&&(this.words=Qn(t,Wn)),o&&(this.chars=Qn(t,Gn))}if(this.linesOnly){let e=this.words,t=e.length;for(;t--;){let n=e[t];n.replaceWith(n.textContent)}e.length=0}if(this.accessible&&(c||!n)){let e=i.createElement(`span`);e.style.cssText=`position:absolute;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;white-space:nowrap;`,e.innerHTML=this.html,t.insertBefore(e,t.firstChild),this.lines.forEach(Zn),this.words.forEach(Zn),this.chars.forEach(Zn)}return this.width=t.offsetWidth,(c||e)&&this.effects.forEach((e,t)=>this.effectsCleanups[t]=e(this)),this}refresh(){this.split(!0)}},ar=(e,t)=>(console.warn(`text.split() is deprecated, import splitText() directly, or text.splitText()`),new ir(e,t)),or=e=>{let t=``;for(let n=0,r=e.length;n<r;n++)if(n+2<r&&e[n+1]===`-`&&e.charCodeAt(n)<e.charCodeAt(n+2)){let r=e.charCodeAt(n),i=e.charCodeAt(n+2);for(let e=r;e<=i;e++)t+=String.fromCharCode(e);n+=2}else t+=e[n];return t},sr={lowercase:`a-z`,uppercase:`A-Z`,numbers:`0-9`,symbols:`!%#_|*+=`,braille:`⠀-⣿`,blocks:`▀-▟`,shades:`░-▓`},cr=new WeakMap,lr=(e={})=>{e||={};let t=e.chars,n=Bt(e.ease||`linear`),r=e.text,i=e.from,a=e.reversed||!1,o=e.perturbation||0,s=e.cursor,c=s===!0?`_`:typeof s==`number`?String.fromCharCode(s):typeof s==`string`?s:``,l=c.length,u=e.seed||0,d=e.override===void 0||e.override,f=e.revealRate||60,p=1e3*I.timeScale/f,m=e.settleDuration||300*I.timeScale,h=e.settleRate||30,g=e.duration,_=e.revealDelay,v=e.delay,y=e.onChange||x;return(e,s,f,b)=>{let x=typeof t==`function`?t(e,s,f):t||`a-zA-Z0-9!%#_`,S=or(sr[x]||x),C=S.length-1,w=typeof g==`function`?g(e,s,f):g,T=typeof _==`function`?_(e,s,f):_||0,E=typeof v==`function`?v(e,s,f):v||0,D=u?Mn(u):Mn();cr.has(e)||cr.set(e,e.textContent);let O=b?b._value:e.textContent,k=r===void 0?b?b._value:cr.get(e):typeof r==`function`?r(e,s,f):r,A=k===` `||k===`&nbsp;`?`\xA0`:k,j=O===`\xA0`?0:O.length,M=A.length,N=d===!0?S:typeof d==`string`&&d.length>0?or(sr[d]||d):null,P=N?N.length-1:0,F=d===` `?`\xA0`:null,L=d===``?M:Math.max(j,M),ee=w>0?w:(L-1)*p+m,te=be((ee+T)/I.timeScale,0)*I.timeScale,ne=T>0?be(T/te,12):0,R=i===void 0||i===`auto`?M<j?`right`:`left`:i,re=new Int32Array(L);if(R===`random`){for(let e=0;e<L;e++)re[e]=e;for(let e=L-1;e>0;e--){let t=D(0,e),n=re[e];re[e]=re[t],re[t]=n}}else{let e=R===`right`?(d===``||!j?L:j)-1:R===`center`?((d===``||!j?L:j)-1)/2:typeof R==`number`?R:0,t=Math.abs,n=Array(L);for(let e=0;e<L;e++)n[e]=e;n.sort((n,r)=>t(n-e)-t(r-e));for(let e=0;e<L;e++)re[n[e]]=e}if(a){let e=L-1;for(let t=0;t<L;t++)re[t]=e-re[t]}let z=be(m/ee,12),ie=be((1-z)/L,12),ae=l*ie,B=be(1e3*I.timeScale/(h*te),12),V=new Float32Array(L),oe=new Float32Array(L),se=o>0?o*z:0;for(let e=0;e<L;e++){let t=se>0?(D(0,2e3)-1e3)/1e3*se:0,n=se>0?(D(0,2e3)-1e3)/1e3*se:0;V[e]=re[e]*ie+t,oe[e]=Math.ceil((V[e]+z+n)/B)*B}if(M<L&&R!==`left`&&R!==`right`&&R!==`random`){let e=0;for(let t=M;t<L;t++)oe[t]>e&&(e=oe[t]);let t=Array(M);for(let e=0;e<M;e++)t[e]=e;t.sort((e,t)=>re[e]-re[t]);let n=(1-e)/M;for(let r=0;r<M;r++){let i=e+r*n;i>oe[t[r]]&&(oe[t[r]]=i)}}let H=Array(L);for(let e=0;e<L;e++)H[e]=S[D(0,C)];let ce=N?N===S?H:Array(L):null;if(ce&&ce!==H)for(let e=0;e<L;e++)ce[e]=F||N[D(0,N.length-1)];let le=O;if(!b){if(d===``)le=``;else if(N){le=``;for(let e=0;e<j;e++)le+=O[e]===` `?` `:ce[e]}}let ue=-1,de=-1,U=``,fe=d!==``,pe=!!N,W=l>0;return{from:0,to:1,duration:te,delay:E,ease:`linear`,modifier:e=>{if(e===ue)return U;if(ue=e,E>0&&e<=0)return U=O,O;if(e<=0)return U=le,le;if(e>=1)return U=A,A;U=``;let t=e/B|0,r=t!==de;r&&(de=t);let i=ne>0?(e-ne)/(1-ne):e,a=i>0?n(i):0;for(let e=0;e<L;e++){let t=V[e];if(a>=oe[e]){e<M&&(U+=A[e]);continue}if(a<=0||a<t){fe&&e<j&&(pe?O[e]===` `?U+=` `:(r&&(ce[e]=F||N[D(0,P)]),U+=ce[e]):U+=O[e]);continue}e<M&&A[e]===` `||e<j&&O[e]===` `?U+=` `:W&&a-t<ae?U+=c[l-1-((a-t)/ie|0)]:(r&&(H[e]=S[D(0,C)]),U+=H[e])}return r&&y(U,a),U}}}};function ur(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function dr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var fr={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},pr={duration:.5,overwrite:!1,delay:0},mr,hr,gr,_r=1e8,vr=1/_r,yr=Math.PI*2,br=yr/4,xr=0,Sr=Math.sqrt,Cr=Math.cos,wr=Math.sin,Tr=function(e){return typeof e==`string`},Er=function(e){return typeof e==`function`},Dr=function(e){return typeof e==`number`},Or=function(e){return e===void 0},kr=function(e){return typeof e==`object`},Ar=function(e){return e!==!1},jr=function(){return typeof window<`u`},Mr=function(e){return Er(e)||Tr(e)},Nr=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},Pr=Array.isArray,Fr=/random\([^)]+\)/g,Ir=/,\s*/g,Lr=/(?:-?\.?\d|\.)+/gi,Rr=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Br=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vr=/[+-]=-?[.\d]+/,Hr=/[^,'"\[\]\s]+/gi,Ur=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wr,Gr,Kr,qr,Jr={},Yr={},Xr,Zr=function(e){return(Yr=ki(e,Jr))&&Yo},Qr=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},$r=function(e,t){return!t&&console.warn(e)},ei=function(e,t){return e&&(Jr[e]=t)&&Yr&&(Yr[e]=t)||Jr},ti=function(){return 0},ni={suppressEvents:!0,isStart:!0,kill:!1},ri={suppressEvents:!0,kill:!1},ii={suppressEvents:!0},ai={},oi=[],si={},ci,li={},ui={},di=30,fi=[],pi=``,mi=function(e){var t=e[0],n,r;if(kr(t)||Er(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=fi.length;r--&&!fi[r].targetTest(t););n=fi[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new io(e[r],n)))||e.splice(r,1);return e},hi=function(e){return e._gsap||mi(fa(e))[0]._gsap},gi=function(e,t,n){return(n=e[t])&&Er(n)?e[t]():Or(n)&&e.getAttribute&&e.getAttribute(t)||n},_i=function(e,t){return(e=e.split(`,`)).forEach(t)||e},vi=function(e){return Math.round(e*1e5)/1e5||0},yi=function(e){return Math.round(e*1e7)/1e7||0},bi=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},xi=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Si=function(){var e=oi.length,t=oi.slice(0),n,r;for(si={},oi.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ci=function(e){return!!(e._initted||e._startAt||e.add)},wi=function(e,t,n,r){oi.length&&!hr&&Si(),e.render(t,n,r||!!(hr&&t<0&&Ci(e))),oi.length&&!hr&&Si()},Ti=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(Hr).length<2?t:Tr(e)?e.trim():e},Ei=function(e){return e},Di=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Oi=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},ki=function(e,t){for(var n in t)e[n]=t[n];return e},Ai=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=kr(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},ji=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Mi=function(e){var t=e.parent||Wr,n=e.keyframes?Oi(Pr(e.keyframes)):Di;if(Ar(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ni=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Pi=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Fi=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Ii=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Li=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ri=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},zi=function(e,t,n,r){return e._startAt&&(hr?e._startAt.revert(ri):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Bi=function e(t){return!t||t._ts&&e(t.parent)},Vi=function(e){return e._repeat?Hi(e._tTime,e=e.duration()+e._rDelay)*e:0},Hi=function(e,t){var n=Math.floor(e=yi(e/t));return e&&n===e?n-1:n},Ui=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Wi=function(e){return e._end=yi(e._start+(e._tDur/Math.abs(e._ts||e._rts||vr)||0))},Gi=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=yi(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Wi(e),n._dirty||Li(n,e)),e},Ki=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ui(e.rawTime(),t),(!t._dur||oa(0,t.totalDuration(),n)-t._tTime>vr)&&t.render(n,!0)),Li(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-vr}},qi=function(e,t,n,r){return t.parent&&Ii(t),t._start=yi((Dr(n)?n:n||e!==Wr?ra(e,n,t):e._time)+t._delay),t._end=yi(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Pi(e,t,`_first`,`_last`,e._sort?`_start`:0),Zi(t)||(e._recent=t),r||Ki(e,t),e._ts<0&&Gi(e,e._tTime),e},Ji=function(e,t){return(Jr.ScrollTrigger||Qr(`scrollTrigger`,t))&&Jr.ScrollTrigger.create(t,e)},Yi=function(e,t,n,r,i){if(mo(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!hr&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ci!==Wa.frame)return oi.push(e),e._lazy=[i,r],1},Xi=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Zi=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Qi=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&Xi(e)&&(e._initted||!Zi(e))||(e._ts<0||e._dp._ts<0)&&!Zi(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=oa(0,e._tDur,t),l=Hi(s,o),e._yoyo&&l&1&&(a=1-a),l!==Hi(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||hr||r||e._zTime===vr||!t&&e._zTime){if(!e._initted&&Yi(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?vr:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&zi(e,t,n,!0),e._onUpdate&&!n&&ka(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&ka(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ii(e,1),!n&&!hr&&(ka(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},$i=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},ea=function(e,t,n,r){var i=e._repeat,a=yi(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:yi(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Gi(e,e._tTime=e._tDur*o),e.parent&&Wi(e),n||Li(e.parent,e),e},ta=function(e){return e instanceof oo?Li(e):ea(e,e._dur)},na={_start:0,endTime:ti,totalDuration:ti},ra=function e(t,n,r){var i=t.labels,a=t._recent||na,o=t.duration()>=_r?a.endTime(!1):t._dur,s,c,l;return Tr(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(Pr(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},ia=function(e,t,n){var r=Dr(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=Ar(s.vars.inherit)&&s.parent;a.immediateRender=Ar(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new xo(t[0],a,t[i+1])},aa=function(e,t){return e||e===0?t(e):t},oa=function(e,t,n){return n<e?e:n>t?t:n},sa=function(e,t){return!Tr(e)||!(t=Ur.exec(e))?``:t[1]},ca=function(e,t,n){return aa(n,function(n){return oa(e,t,n)})},la=[].slice,ua=function(e,t){return e&&kr(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&kr(e[0]))&&!e.nodeType&&e!==Gr},da=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return Tr(e)&&!t||ua(e,1)?(r=n).push.apply(r,fa(e)):n.push(e)})||n},fa=function(e,t,n){return gr&&!t&&gr.selector?gr.selector(e):Tr(e)&&!n&&(Kr||!Ga())?la.call((t||qr).querySelectorAll(e),0):Pr(e)?da(e,n):ua(e)?la.call(e,0):e?[e]:[]},pa=function(e){return e=fa(e)[0]||$r(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return fa(t,n.querySelectorAll?n:n===e?$r(`Invalid scope`)||qr.createElement(`div`):e)}},ma=function(e){return e.sort(function(){return .5-Math.random()})},ha=function(e){if(Er(e))return e;var t=kr(e)?e:{each:e},n=$a(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return Tr(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,_r])[1],!S){for(b=-_r;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===_r?0:s?f*u/S-.5:r/S|0,b=0,x=_r,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):Sr(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&ma(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=sa(t.amount||t.each)||0,n=n&&f<0?Qa(n):n}return f=(p[e]-p.min)/p.max||0,yi(p.b+(n?n(f):f)*p.v)+p.u}},ga=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=yi(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Dr(n)?0:sa(n))}},_a=function(e,t){var n=Pr(e),r,i;return!n&&kr(e)&&(r=n=e.radius||_r,e.values?(e=fa(e.values),(i=!Dr(e[0]))&&(r*=r)):e=ga(e.increment)),aa(t,n?Er(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=_r,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||Dr(t)?s:s+sa(t)}:ga(e))},va=function(e,t,n,r){return aa(Pr(e)?!t:n===!0?!!(n=0):!r,function(){return Pr(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},ya=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},ba=function(e,t){return function(n){return e(parseFloat(n))+(t||sa(n))}},xa=function(e,t,n){return Ea(e,t,0,1,n)},Sa=function(e,t,n){return aa(n,function(n){return e[~~t(n)]})},Ca=function e(t,n,r){var i=n-t;return Pr(t)?Sa(t,e(0,t.length),n):aa(r,function(e){return(i+(e-t)%i)%i+t})},wa=function e(t,n,r){var i=n-t,a=i*2;return Pr(t)?Sa(t,e(0,t.length-1),n):aa(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Ta=function(e){return e.replace(Fr,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(Ir);return va(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},Ea=function(e,t,n,r,i){var a=t-e,o=r-n;return aa(i,function(t){return n+((t-e)/a*o||0)})},Da=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=Tr(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(Pr(t)&&!Pr(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=ki(Pr(t)?[]:{},t));if(!u){for(c in n)co.call(s,t,c,`get`,n[c]);a=function(e){return Ao(e,s)||(o?t.p:t)}}}return aa(r,a)},Oa=function(e,t,n){var r=e.labels,i=_r,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},ka=function(e,t,n){var r=e.vars,i=r[t],a=gr,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&oi.length&&Si(),o&&(gr=o),l=s?i.apply(c,s):i.call(c),gr=a,l},Aa=function(e){return Ii(e),e.scrollTrigger&&e.scrollTrigger.kill(!!hr),e.progress()<1&&ka(e,`onInterrupt`),e},ja,Ma=[],Na=function(e){if(e){if(e=!e.name&&e.default||e,jr()||e.headless){var t=e.name,n=Er(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:ti,render:Ao,add:co,kill:Mo,modifier:jo,rawVars:0},a={targetTest:0,get:0,getSetter:Eo,aliases:{},register:0};if(Ga(),e!==r){if(li[t])return;Di(r,Di(ji(e,i),a)),ki(r.prototype,ki(i,ji(e,a))),li[r.prop=t]=r,e.targetTest&&(fi.push(r),ai[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}ei(t,r),e.register&&e.register(Yo,r,Fo)}else Ma.push(e)}},Pa=255,Fa={aqua:[0,Pa,Pa],lime:[0,Pa,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pa],navy:[0,0,128],white:[Pa,Pa,Pa],olive:[128,128,0],yellow:[Pa,Pa,0],orange:[Pa,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pa,0,0],pink:[Pa,192,203],cyan:[0,Pa,Pa],transparent:[Pa,Pa,Pa,0]},Ia=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Pa+.5|0},La=function(e,t,n){var r=e?Dr(e)?[e>>16,e>>8&Pa,e&Pa]:0:Fa.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Fa[e])r=Fa[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Pa,r&Pa,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Pa,e&Pa]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(Lr),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Ia(s+1/3,i,a),r[1]=Ia(s,i,a),r[2]=Ia(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(Rr),n&&r.length<4&&(r[3]=1),r}else r=e.match(Lr)||Fa.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Pa,a=r[1]/Pa,o=r[2]/Pa,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Ra=function(e){var t=[],n=[],r=-1;return e.split(Ba).forEach(function(e){var i=e.match(zr)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},za=function(e,t,n){var r=``,i=(e+r).match(Ba),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=La(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Ra(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Ba,`1`).split(zr),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Ba),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Ba=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Fa)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Va=/hsl[a]?\(/,Ha=function(e){var t=e.join(` `),n;if(Ba.lastIndex=0,Ba.test(t))return n=Va.test(t),e[1]=za(e[1],n),e[0]=za(e[0],n,Ra(e[1])),!0},Ua,Wa=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){Xr&&(!Kr&&jr()&&(Gr=Kr=window,qr=Gr.document||{},Jr.gsap=Yo,(Gr.gsapVersions||(Gr.gsapVersions=[])).push(Yo.version),Zr(Yr||Gr.GreenSockGlobals||!Gr.gsap&&Gr||{}),Ma.forEach(Na)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Ua=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Ua=0,l=ti},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),Ga(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),Ga=function(){return!Ua&&Wa.wake()},Ka={},qa=/^[\d.\-M][\d.\-,\s]/,Ja=/["']/g,Ya=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Ja,``).trim():+c,r=s.substr(o+1).trim();return t},Xa=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Za=function(e){var t=(e+``).split(`(`),n=Ka[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Ya(t[1])]:Xa(e).split(`,`).map(Ti)):Ka._CE&&qa.test(e)?Ka._CE(``,e):n},Qa=function(e){return function(t){return 1-e(1-t)}},$a=function(e,t){return e&&(Er(e)?e:Ka[e]||Za(e))||t},eo=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return _i(e,function(e){for(var t in Ka[e]=Jr[e]=i,Ka[a=e.toLowerCase()]=n,i)Ka[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=Ka[e+`.`+t]=i[t]}),i},to=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},no=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/yr*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*wr((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:to(s);return a=yr/a,c.config=function(n,r){return e(t,n,r)},c},ro=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:to(r);return i.config=function(n){return e(t,n)},i};_i(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;eo(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),Ka.Linear.easeNone=Ka.none=Ka.Linear.easeIn,eo(`Elastic`,no(`in`),no(`out`),no()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};eo(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),eo(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),eo(`Circ`,function(e){return-(Sr(1-e*e)-1)}),eo(`Sine`,function(e){return e===1?1:-Cr(e*br)+1}),eo(`Back`,ro(`in`),ro(`out`),ro()),Ka.SteppedEase=Ka.steps=Jr.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-vr;return function(e){return((r*oa(0,a,e)|0)+i)*n}}},pr.ease=Ka[`quad.out`],_i(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return pi+=e+`,`+e+`Params,`});var io=function(e,t){this.id=xr++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:gi,this.set=t?t.getSetter:Eo},ao=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ea(this,+e.duration,1,1),this.data=e.data,gr&&(this._ctx=gr,gr.data.push(this)),Ua||Wa.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,ea(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Ga(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Gi(this,e),!n._dp||n.parent||Ki(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&qi(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===vr||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),wi(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Vi(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Vi(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Hi(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-vr?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Ui(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-vr?0:this._rts,this.totalTime(oa(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),Wi(this),Ri(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ga(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==vr&&(this._tTime-=vr)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=yi(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&qi(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(Ar(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ui(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=ii);var t=hr;return hr=e,Ci(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),hr=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,ta(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,ta(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(ra(this,e),Ar(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,Ar(t)),this._dur||(this._zTime=-vr),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-vr:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-vr,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-vr)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=Er(e)?e:Ei,a=function(){var e=t.then;t.then=null,n&&n(),Er(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Aa(this)},e}();Di(ao.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-vr,_prom:0,_ps:!1,_rts:1});var oo=function(e){dr(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=Ar(t.sortChildren),Wr&&qi(t.parent||Wr,ur(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&Ji(ur(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return ia(0,arguments,this),this},n.from=function(e,t,n){return ia(1,arguments,this),this},n.fromTo=function(e,t,n,r){return ia(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Mi(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new xo(e,t,ra(this,n),1),this},n.call=function(e,t,n){return qi(this,xo.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new xo(e,n,ra(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Mi(n).immediateRender=Ar(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Mi(r).immediateRender=Ar(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:yi(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==Wr&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=yi(o%f),o===i?(d=this._repeat,c=a):(_=yi(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=Hi(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:yi(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&ka(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=$i(this,yi(r),yi(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(ka(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-vr);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||hr&&Ci(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-vr:vr);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-vr)._zTime=c>=r?1:-1,this._ts))return this._start=g,Wi(this),this.render(e,t,n);this._onUpdate&&!t&&ka(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Ii(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(ka(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(Dr(t)||(t=ra(this,t,e)),!(e instanceof ao)){if(Pr(e))return e.forEach(function(e){return n.add(e,t)}),this;if(Tr(e))return this.addLabel(e,t);if(Er(e))e=xo.delayedCall(0,e);else return this}return this===e?this:qi(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-_r);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof xo?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return Tr(e)?this.removeLabel(e):Er(e)?this.killTweensOf(e):(e.parent===this&&Fi(this,e),e===this._recent&&(this._recent=this._last),Li(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yi(Wa.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=ra(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=xo.delayedCall(0,t||ti,n);return r.data=`isPause`,this._hasPause=1,qi(this,r,ra(this,e))},n.removePause=function(e){var t=this._first;for(e=ra(this,e);t;)t._start===e&&t.data===`isPause`&&Ii(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)fo!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=fa(e),i=this._first,a=Dr(t),o;i;)i instanceof xo?xi(i._targets,r)&&(a?(!fo||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=ra(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=xo.to(n,Di({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||vr,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&ea(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Di({startAt:{time:ra(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Oa(this,ra(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Oa(this,ra(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+vr)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=yi(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return Li(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Li(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=_r,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,qi(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=yi(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;ea(n,n===Wr&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(Wr._ts&&(wi(Wr,Ui(e,Wr)),ci=Wa.frame),Wa.frame>=di){di+=fr.autoSleep||120;var t=Wr._first;if((!t||!t._ts)&&fr.autoSleep&&Wa._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Wa.sleep()}}},t}(ao);Di(oo.prototype,{_lock:0,_hasPause:0,_forcing:0});var so=function(e,t,n,r,i,a,o){var s=new Fo(this._pt,e,t,0,1,ko,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Ta(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(Br)||[];u=Br.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?bi(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=Br.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(Vr.test(r)||g)&&(s.e=0),this._pt=s,s},co=function(e,t,n,r,i,a,o,s,c,l){Er(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?Er(u)?c?e[t.indexOf(`set`)||!Er(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=Er(u)?c?wo:Co:So,p;if(Tr(r)&&(~r.indexOf(`random(`)&&(r=Ta(r)),r.charAt(1)===`=`&&(p=bi(d,r)+(sa(d)||0),(p||p===0)&&(r=p))),!l||d!==r||po)return!isNaN(d*r)&&r!==``?(p=new Fo(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?Oo:Do,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&Qr(t,r),so.call(this,e,t,d,r,f,s||fr.stringFilter,c))},lo=function(e,t,n,r,i){if(Er(e)&&(e=vo(e,i,t,n,r)),!kr(e)||e.style&&e.nodeType||Pr(e)||Nr(e))return Tr(e)?vo(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=vo(e[o],i,t,n,r);return a},uo=function(e,t,n,r,i,a){var o,s,c,l;if(li[e]&&(o=new li[e]).init(i,o.rawVars?t[e]:lo(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Fo(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==ja))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},fo,po,mo=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!mr,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,N,P;if(b&&(!f||!a)&&(a=`none`),t._ease=$a(a,pr.ease),t._rEase=x&&($a(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?hi(g[0]).harness:0,N=k&&i[k.prop],S=ji(i,ai),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?ri:ni),h._lazy=0),o){if(Ii(t._startAt=xo.set(g,Di({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&Ar(c),startAt:null,delay:0,onUpdate:l&&function(){return ka(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(hr||!s&&!p)&&t._startAt.revert(ri),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=Di({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&Ar(c),immediateRender:s,stagger:0,parent:_},S),N&&(w[k.prop]=N),Ii(t._startAt=xo.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(hr?t._startAt.revert(ri):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,vr,vr);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&Ar(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||mi(g)[C]._gsap,t._ptLookup[C]=j={},si[O.id]&&oi.length&&Si(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,N||S,t,M,v)!==!1&&(t._pt=T=new Fo(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||N)for(w in S)li[w]&&(A=uo(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=co.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(fo=t,Wr.killTweensOf(E,j,t.globalTime(n)),P=!t.parent,fo=0),t._pt&&c&&(si[O.id]=1)}D&&Po(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!P,f&&n<=0&&b.render(_r,!0,!0)},ho=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return po=1,e.vars[t]=`+=0`,mo(e,o),po=0,s?$r(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=vi(n)+sa(u.e)),u.b&&(u.b=l.s+sa(u.b))},go=function(e,t){var n=e[0]?hi(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=ki({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},_o=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(Pr(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},vo=function(e,t,n,r,i){return Er(e)?e.call(t,n,r,i):Tr(e)&&~e.indexOf(`random(`)?Ta(e):e},yo=pi+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,bo={};_i(yo+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return bo[e]=1});var xo=function(e){dr(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:Mi(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||Wr,g=(Pr(t)||Nr(t)?Dr(t[0]):`length`in n)?[t]:fa(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?mi(g):$r(`GSAP target `+t+` not found. https://gsap.com`,!fr.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||Mr(s)||Mr(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new oo({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=ur(a),_._start=0,u||Mr(s)||Mr(c)){if(b=g.length,C=u&&ha(u),kr(u))for(x in u)~yo.indexOf(x)&&(w||={},w[x]=u[x]);for(v=0;v<b;v++)y=ji(n,bo),y.stagger=0,T&&(y.easeReverse=T),w&&ki(y,w),S=g[v],y.duration=+vo(s,ur(a),v,S,g),y.delay=(+vo(c,ur(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=Ka.none;_.duration()?s=c=0:a.timeline=0}else if(f){Mi(Di(_.vars.defaults,{ease:`none`})),_._ease=$a(f.ease||n.ease||`none`);var E=0,D,O,k;if(Pr(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||_o(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!mr&&(fo=ur(a),Wr.killTweensOf(g),fo=0),qi(h,ur(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===yi(h._time)&&Ar(l)&&Bi(ur(a))&&h.data!==`nested`)&&(a._tTime=-vr,a.render(Math.max(0,-c)||0)),m&&Ji(ur(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-vr&&!o?i:e<vr?0:e,c,l,u,d,f,p,m,h;if(!a)Qi(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=yi(s%d),s===i?(u=this._repeat,c=a):(f=yi(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=Hi(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(yi(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(Yi(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(ka(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&zi(this,e,t,n),ka(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&ka(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&zi(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Ii(this,1),!t&&(!o||r)&&(s||r||p)&&(ka(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Ua||Wa.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||mo(this,a),o=this._ease(a/this._dur),ho(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(Gi(this,0),this.parent||Pi(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Aa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hr),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,fo&&fo.vars.overwrite!==!0)._first||Aa(this),this.parent&&n!==this.timeline.totalDuration()&&ea(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?fa(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&Ni(r,i))return t===`all`&&(this._pt=0),Aa(this);for(s=this._op=this._op||[],t!==`all`&&(Tr(t)&&(d={},_i(t,function(e){return d[e]=1}),t=d),t=go(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&Fi(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Aa(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return ia(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return ia(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return Wr.killTweensOf(e,t,n)},t}(ao);Di(xo.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),_i(`staggerTo,staggerFrom,staggerFromTo`,function(e){xo[e]=function(){var t=new oo,n=la.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var So=function(e,t,n){return e[t]=n},Co=function(e,t,n){return e[t](n)},wo=function(e,t,n,r){return e[t](r.fp,n)},To=function(e,t,n){return e.setAttribute(t,n)},Eo=function(e,t){return Er(e[t])?Co:Or(e[t])&&e.setAttribute?To:So},Do=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Oo=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ko=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Ao=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},jo=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Mo=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Fi(this,t,`_pt`):t.dep||(n=1),t=r;return!n},No=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Po=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Fo=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Do,this.d=o||this,this.set=s||So,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=No,this.m=e,this.mt=n,this.tween=t},e}();_i(pi+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return ai[e]=1}),Jr.TweenMax=Jr.TweenLite=xo,Jr.TimelineLite=Jr.TimelineMax=oo,Wr=new oo({sortChildren:!1,defaults:pr,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),fr.stringFilter=Ha;var Io=[],Lo={},Ro=[],zo=0,Bo=0,Vo=function(e){return(Lo[e]||Ro).map(function(e){return e()})},Ho=function(){var e=Date.now(),t=[];e-zo>2&&(Vo(`matchMediaInit`),Io.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=Gr.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Vo(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),zo=e,Vo(`matchMedia`))},Uo=function(){function e(e,t){this.selector=t&&pa(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Bo++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){Er(e)&&(n=t,t=e,e=Er);var r=this,i=function(){var e=gr,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=pa(n)),gr=r,a=t.apply(r,arguments),Er(a)&&r._r.push(a),gr=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===Er?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=gr;gr=null,e(this),gr=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof xo&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof oo?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof xo)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=Io.length;r--;)Io[r].id===this.id&&Io.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),Wo=function(){function e(e){this.contexts=[],this.scope=e,gr&&gr.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){kr(e)||(e={matches:e});var r=new Uo(0,n||this.scope),i=r.conditions={},a,o,s;for(o in gr&&!r.selector&&(r.selector=gr.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=Gr.matchMedia(e[o]),a&&(Io.indexOf(r)<0&&Io.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Ho):a.addEventListener(`change`,Ho)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Go={registerPlugin:function(){[...arguments].forEach(function(e){return Na(e)})},timeline:function(e){return new oo(e)},getTweensOf:function(e,t){return Wr.getTweensOf(e,t)},getProperty:function(e,t,n,r){Tr(e)&&(e=fa(e)[0]);var i=hi(e||{}).get,a=n?Ei:Ti;return n===`native`&&(n=``),e&&(t?a((li[t]&&li[t].get||i)(e,t,n,r)):function(t,n,r){return a((li[t]&&li[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=fa(e),e.length>1){var r=e.map(function(e){return Yo.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=li[t],o=hi(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;ja._pt=0,r.init(e,n?t+n:t,ja,0,[e]),r.render(1,r),ja._pt&&Ao(1,ja)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Yo.to(e,Di((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return Wr.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$a(e.ease,pr.ease)),Ai(pr,e||{})},config:function(e){return Ai(fr,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!li[e]&&!Jr[e]&&$r(t+` effect requires `+e+` plugin.`)}),ui[t]=function(e,t,r){return n(fa(e),Di(t||{},i),r)},a&&(oo.prototype[t]=function(e,n,r){return this.add(ui[t](e,kr(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){Ka[e]=$a(t)},parseEase:function(e,t){return arguments.length?$a(e,t):Ka},getById:function(e){return Wr.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new oo(e),r,i;for(n.smoothChildTiming=Ar(e.smoothChildTiming),Wr.remove(n),n._dp=0,n._time=n._tTime=Wr._time,r=Wr._first;r;)i=r._next,(t||!(!r._dur&&r instanceof xo&&r.vars.onComplete===r._targets[0]))&&qi(n,r,r._start-r._delay),r=i;return qi(Wr,n,0),n},context:function(e,t){return e?new Uo(e,t):gr},matchMedia:function(e){return new Wo(e)},matchMediaRefresh:function(){return Io.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Ho()},addEventListener:function(e,t){var n=Lo[e]||(Lo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Lo[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Ca,wrapYoyo:wa,distribute:ha,random:va,snap:_a,normalize:xa,getUnit:sa,clamp:ca,splitColor:La,toArray:fa,selector:pa,mapRange:Ea,pipe:ya,unitize:ba,interpolate:Da,shuffle:ma},install:Zr,effects:ui,ticker:Wa,updateRoot:oo.updateRoot,plugins:li,globalTimeline:Wr,core:{PropTween:Fo,globals:ei,Tween:xo,Timeline:oo,Animation:ao,getCache:hi,_removeLinkedListItem:Fi,reverting:function(){return hr},context:function(e){return e&&gr&&(gr.data.push(e),e._ctx=gr),gr},suppressOverwrites:function(e){return mr=e}}};_i(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Go[e]=xo[e]}),Wa.add(oo.updateRoot),ja=Go.to({},{duration:0});var Ko=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},qo=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=Ko(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},Jo=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(Tr(n)&&(r={},_i(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}qo(e,n)}}}},Yo=Go.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)hr?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Jo(`roundProps`,ga),Jo(`modifiers`),Jo(`snap`,_a))||Go;xo.version=oo.version=Yo.version=`3.15.0`,Xr=1,jr()&&Ga(),Ka.Power0,Ka.Power1,Ka.Power2,Ka.Power3,Ka.Power4,Ka.Linear,Ka.Quad,Ka.Cubic,Ka.Quart,Ka.Quint,Ka.Strong,Ka.Elastic,Ka.Back,Ka.SteppedEase,Ka.Bounce,Ka.Sine,Ka.Expo,Ka.Circ;var Xo,Zo,Qo,$o,es,ts,ns,rs=function(){return typeof window<`u`},is={},as=180/Math.PI,os=Math.PI/180,ss=Math.atan2,cs=1e8,ls=/([A-Z])/g,us=/(left|right|width|margin|padding|x)/i,ds=/[\s,\(]\S/,fs={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},ps=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ms=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hs=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gs=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},_s=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},vs=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ys=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},bs=function(e,t,n){return e.style[t]=n},xs=function(e,t,n){return e.style.setProperty(t,n)},Ss=function(e,t,n){return e._gsap[t]=n},Cs=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ws=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Ts=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Es=`transform`,Ds=Es+`Origin`,Os=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in is&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=fs[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=qs(i,e)}):this.tfm[t]=o.x?o[t]:qs(i,t),t===Ds&&(this.tfm.zOrigin=o.zOrigin);else return fs.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Es)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Ds,n,``)),t=Es}(a||n)&&this.props.push(t,n,a[t])},ks=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},As=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(ls,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=ns(),(!i||!i.isStart)&&!n[Es]&&(ks(n),r.zOrigin&&n[Ds]&&(n[Ds]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},js=function(e,t){var n={target:e,props:[],revert:As,save:Os};return e._gsap||Yo.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Ms,Ns=function(e,t){var n=Zo.createElementNS?Zo.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Zo.createElement(e);return n&&n.style?n:Zo.createElement(e)},Ps=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(ls,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Is(n)||n,1)||``},Fs=`O,Moz,ms,Ms,Webkit`.split(`,`),Is=function(e,t,n){var r=(t||es).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Fs[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Fs[i]:``)+e},Ls=function(){rs()&&window.document&&(Xo=window,Zo=Xo.document,Qo=Zo.documentElement,es=Ns(`div`)||{style:{}},Ns(`div`),Es=Is(Es),Ds=Es+`Origin`,es.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Ms=!!Is(`perspective`),ns=Yo.core.reverting,$o=1)},Rs=function(e){var t=e.ownerSVGElement,n=Ns(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),Qo.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),Qo.removeChild(n),i},zs=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Bs=function(e){var t,n;try{t=e.getBBox()}catch{t=Rs(e),n=1}return t&&(t.width||t.height)||n||(t=Rs(e)),t&&!t.width&&!t.x&&!t.y?{x:+zs(e,[`x`,`cx`,`x1`])||0,y:+zs(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Vs=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Bs(e))},Hs=function(e,t){if(t){var n=e.style,r;t in is&&t!==Ds&&(t=Es),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(ls,`-$1`).toLowerCase())):n.removeAttribute(t)}},Us=function(e,t,n,r,i,a){var o=new Fo(e._pt,t,n,0,1,a?ys:vs);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},Ws={deg:1,rad:1,turn:1},Gs={grid:1,flex:1},Ks=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=es.style,c=us.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||Ws[i]||Ws[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Vs(t),(p||o===`%`)&&(is[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],vi(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===Zo||!h.appendChild)&&(h=Zo.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Wa.time&&!g.uncache)return vi(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Hs(t,n)}else(p||o===`%`)&&!Gs[Ps(h,`display`)]&&(s.position=Ps(t,`position`)),h===t&&(s.position=`static`),h.appendChild(es),m=es[u],h.removeChild(es),s.position=`absolute`;return c&&p&&(g=hi(h),g.time=Wa.time,g.width=h[u]),vi(f?m*a/d:m&&a?d/m*a:0)},qs=function(e,t,n,r){var i;return $o||Ls(),t in fs&&t!==`transform`&&(t=fs[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),is[t]&&t!==`transform`?(i=ac(e,r),i=t===`transformOrigin`?i.svg?i.origin:oc(Ps(e,Ds))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=Qs[t]&&Qs[t](e,t,n)||Ps(e,t)||gi(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?Ks(e,t,i,n)+n:i},Js=function(e,t,n,r){if(!n||n===`none`){var i=Is(t,e,1),a=i&&Ps(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Ps(e,`borderTopColor`))}var o=new Fo(this._pt,e.style,t,0,1,ko),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Ps(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=Ps(e,t)||r,m?e.style[t]=m:Hs(e,t)),l=[n,r],Ha(l),n=l[0],r=l[1],d=n.match(zr)||[],b=r.match(zr)||[],b.length){for(;u=zr.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=bi(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=zr.lastIndex-v.length,v||(v=v||fr.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=Ks(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?ys:vs;return Vr.test(r)&&(o.e=0),this._pt=o,o},Ys={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},Xs=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=Ys[n]||n,t[1]=Ys[r]||r,t.join(` `)},Zs=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],is[o]&&(s=1,o=o===`transformOrigin`?Ds:Es),Hs(n,o);s&&(Hs(n,Es),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,ac(n,1),a.uncache=1,ks(r)))}},Qs={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Fo(e._pt,t,n,0,0,Zs);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},$s=[1,0,0,1,0,0],ec={},tc=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},nc=function(e){var t=Ps(e,Es);return tc(t)?$s:t.substr(7).match(Rr).map(vi)},rc=function(e,t){var n=e._gsap||hi(e),r=e.style,i=nc(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?$s:i):(i===$s&&!e.offsetParent&&e!==Qo&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Qo.appendChild(e)),i=nc(e),s?r.display=s:Hs(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Qo.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},ic=function(e,t,n,r,i,a){var o=e._gsap,s=i||rc(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==$s&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Bs(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Ds]=`0px 0px`,a&&(Us(a,o,`xOrigin`,c,y),Us(a,o,`yOrigin`,l,b),Us(a,o,`xOffset`,u,o.xOffset),Us(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},ac=function(e,t){var n=e._gsap||new io(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=Ps(e,Ds)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,ee,te,ne;return n.svg=!!(e.getCTM&&Vs(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[Es]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[Es]===`none`?``:s[Es])),r.scale=r.rotate=r.translate=`none`),S=rc(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+`px `+(n.yOrigin-N.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),ic(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==$s&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?ss(D,E)*as:0,_=O||k?ss(O,k)*as+m:0,_&&(p*=Math.abs(Math.cos(_*os))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(ne=S[6],ee=S[7],F=S[8],I=S[9],L=S[10],te=S[11],l=S[12],u=S[13],d=S[14],C=ss(ne,L),h=C*as,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+F*T,N=j*w+I*T,P=ne*w+L*T,F=A*-T+F*w,I=j*-T+I*w,L=ne*-T+L*w,te=ee*-T+te*w,A=M,j=N,ne=P),C=ss(-O,L),g=C*as,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-F*T,N=D*w-I*T,P=O*w-L*T,te=k*T+te*w,E=M,D=N,O=P),C=ss(D,E),m=C*as,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,N=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=N),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=vi(Math.sqrt(E*E+D*D+O*O)),p=vi(Math.sqrt(j*j+ne*ne)),C=ss(A,j),_=Math.abs(C)>2e-4?C*as:0,y=te?1/(te<0?-te:te):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!tc(Ps(e,Es)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=vi(f),n.scaleY=vi(p),n.rotation=vi(m)+o,n.rotationX=vi(h)+o,n.rotationY=vi(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Ds]=oc(c)),n.xOffset=n.yOffset=0,n.force3D=fr.force3D,n.renderTransform=n.svg?pc:Ms?fc:cc,n.uncache=0,n},oc=function(e){return(e=e.split(` `))[0]+` `+e[1]},sc=function(e,t,n){var r=sa(t);return vi(parseFloat(t)+parseFloat(Ks(e,`x`,n+`px`,r)))+r},cc=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,fc(e,t)},lc=`0deg`,uc=`0px`,dc=`) `,fc=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==lc||l!==lc)){var x=parseFloat(l)*os,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*os,w=Math.cos(x),a=sc(_,a,S*w*-v),o=sc(_,o,-Math.sin(x)*-v),s=sc(_,s,C*w*-v+v)}h!==uc&&(y+=`perspective(`+h+dc),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==uc||o!==uc||s!==uc)&&(y+=s!==uc||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+dc),c!==lc&&(y+=`rotate(`+c+dc),l!==lc&&(y+=`rotateY(`+l+dc),u!==lc&&(y+=`rotateX(`+u+dc),(d!==lc||f!==lc)&&(y+=`skew(`+d+`, `+f+dc),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+dc),_.style[Es]=y||`translate(0, 0)`},pc=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=os,c*=os,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=os,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=vi(b),x=vi(x),S=vi(S),C=vi(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=Ks(f,`x`,a,`px`),y=Ks(f,`y`,o,`px`)),(p||m||h||g)&&(v=vi(v+p-(p*b+m*S)+h),y=vi(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=vi(v+r/100*w.width),y=vi(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Es]=w)},mc=function(e,t,n,r,i){var a=360,o=Tr(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?as:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*cs)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*cs)%a-~~(s/a)*a)),e._pt=u=new Fo(e._pt,t,n,r,s,ms),u.e=c,u.u=`deg`,e._props.push(n),u},hc=function(e,t){for(var n in t)e[n]=t[n];return e},gc=function(e,t,n){var r=hc({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Es]=t,o=ac(n,1),Hs(n,Es),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Es],a[Es]=t,o=ac(n,1),a[Es]=c),is)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=sa(c),p=sa(l),u=f===p?parseFloat(c):Ks(n,s,c,p),d=parseFloat(l),e._pt=new Fo(e._pt,o,s,u,d-u,ps),e._pt.u=p||0,e._props.push(s));hc(o,r)};_i(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});Qs[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return qs(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var _c={name:`css`,register:Ls,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in $o||Ls(),this.styles=this.styles||js(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(li[m]&&uo(m,t,n,r,e,i)))){if(f=typeof l,p=Qs[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=Ta(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,Ba.lastIndex=0,Ba.test(c)||(h=sa(c),g=sa(l),g?h!==g&&(c=Ks(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],Tr(c)&&~c.indexOf(`random(`)&&(c=Ta(c)),sa(c+``)||c===`auto`||(c+=fr.units[m]||sa(qs(e,m))||``),(c+``).charAt(1)===`=`&&(c=qs(e,m))):c=qs(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in fs&&(m===`autoAlpha`&&(d===1&&qs(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),Us(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=fs[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in is,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=Ps(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=Ps(e,`perspective`),T?e.style.perspective=T:Hs(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||ac(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new Fo(this._pt,o,Es,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new Fo(this._pt,b,`scaleY`,b.scaleY,(_?bi(b.scaleY,_+u):u)-b.scaleY||0,ps),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(Ds,0,o[Ds]),l=Xs(l),b.svg?ic(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&Us(this,b,`zOrigin`,b.zOrigin,g),Us(this,o,m,oc(c),oc(l)));continue}else if(m===`svgOrigin`){ic(e,l,1,x,0,this);continue}else if(m in ec){mc(this,b,m,d,_?bi(d,_+l):l);continue}else if(m===`smoothOrigin`){Us(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){gc(this,l,e);continue}}else m in o||(m=Is(m)||m);if(v||(u||u===0)&&(d||d===0)&&!ds.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=sa(l)||(m in fr.units?fr.units[m]:h),h!==g&&(d=Ks(e,m,c,g)),this._pt=new Fo(this._pt,v?b:o,m,d,(_?bi(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?_s:ps),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=gs):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=hs);else if(m in o)Js.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){Qr(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&Po(this)},render:function(e,t){if(t.tween._time||!ns())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:qs,aliases:fs,getSetter:function(e,t,n){var r=fs[t];return r&&r.indexOf(`,`)<0&&(t=r),t in is&&t!==Ds&&(e._gsap.x||qs(e,`x`))?n&&ts===n?t===`scale`?Cs:Ss:(ts=n||{})&&(t===`scale`?ws:Ts):e.style&&!Or(e.style[t])?bs:~t.indexOf(`-`)?xs:Eo(e,t)},core:{_removeProperty:Hs,_getMatrix:rc}};Yo.utils.checkPrefix=Is,Yo.core.getStyleSaver=js,(function(e,t,n,r){var i=_i(e+`,`+t+`,`+n,function(e){is[e]=1});_i(t,function(e){fr.units[e]=`deg`,ec[e]=1}),fs[i[13]]=e+`,`+t,_i(r,function(e){var t=e.split(`:`);fs[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),_i(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){fr.units[e]=`px`}),Yo.registerPlugin(_c);var vc=Yo.registerPlugin(_c)||Yo;vc.core.Tween;function yc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function bc(e,t,n){return t&&yc(e.prototype,t),n&&yc(e,n),e}var xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc=function(){return xc||typeof window<`u`&&(xc=window.gsap)&&xc.registerPlugin&&xc},Fc=1,Ic=[],Lc=[],Rc=[],zc=Date.now,Bc=function(e,t){return t},Vc=function(){var e=kc.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Lc),r.push.apply(r,Rc),Lc=n,Rc=r,Bc=function(e,n){return t[e](n)}},Hc=function(e,t){return~Rc.indexOf(e)&&Rc[Rc.indexOf(e)+1][t]},Uc=function(e){return!!~Ac.indexOf(e)},Wc=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:r!==!1,capture:!!i})},Gc=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Kc=`scrollLeft`,qc=`scrollTop`,Jc=function(){return jc&&jc.isPressed||Lc.cache++},Yc=function(e,t){var n=function n(r){if(r||r===0){Fc&&(Cc.history.scrollRestoration=`manual`);var i=jc&&jc.isPressed;r=n.v=Math.round(r)||(jc&&jc.iOS?1:0),e(r),n.cacheID=Lc.cache,i&&Bc(`ss`,r)}else(t||Lc.cache!==n.cacheID||Bc(`ref`))&&(n.cacheID=Lc.cache,n.v=e());return n.v+n.offset};return n.offset=0,e&&n},Xc={s:Kc,p:`left`,p2:`Left`,os:`right`,os2:`Right`,d:`width`,d2:`Width`,a:`x`,sc:Yc(function(e){return arguments.length?Cc.scrollTo(e,Zc.sc()):Cc.pageXOffset||wc[Kc]||Tc[Kc]||Ec[Kc]||0})},Zc={s:qc,p:`top`,p2:`Top`,os:`bottom`,os2:`Bottom`,d:`height`,d2:`Height`,a:`y`,op:Xc,sc:Yc(function(e){return arguments.length?Cc.scrollTo(Xc.sc(),e):Cc.pageYOffset||wc[qc]||Tc[qc]||Ec[qc]||0})},Qc=function(e,t){return(t&&t._ctx&&t._ctx.selector||xc.utils.toArray)(e)[0]||(typeof e==`string`&&xc.config().nullTargetWarn!==!1?console.warn(`Element not found:`,e):null)},$c=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},el=function(e,t){var n=t.s,r=t.sc;Uc(e)&&(e=wc.scrollingElement||Tc);var i=Lc.indexOf(e),a=r===Zc.sc?1:2;!~i&&(i=Lc.push(e)-1),Lc[i+a]||Wc(e,`scroll`,Jc);var o=Lc[i+a],s=o||(Lc[i+a]=Yc(Hc(e,n),!0)||(Uc(e)?r:Yc(function(t){return arguments.length?e[n]=t:e[n]})));return s.target=e,o||(s.smooth=xc.getProperty(e,`scrollBehavior`)===`smooth`),s},tl=function(e,t,n){var r=e,i=e,a=zc(),o=a,s=t||50,c=Math.max(500,s*3),l=function(e,t){var c=zc();t||c-a>s?(i=r,r=e,o=a,a=c):n?r+=e:r=i+(e-i)/(c-o)*(a-o)};return{update:l,reset:function(){i=r=n?0:r,o=a=0},getVelocity:function(e){var t=o,s=i,u=zc();return(e||e===0)&&e!==r&&l(e),a===o||u-o>c?0:(r+(n?s:-s))/((n?u:a)-t)*1e3}}},nl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},rl=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},il=function(){kc=xc.core.globals().ScrollTrigger,kc&&kc.core&&Vc()},al=function(e){return xc=e||Pc(),!Sc&&xc&&typeof document<`u`&&document.body&&(Cc=window,wc=document,Tc=wc.documentElement,Ec=wc.body,Ac=[Cc,wc,Tc,Ec],xc.utils.clamp,Nc=xc.core.context||function(){},Oc=`onpointerenter`in Ec?`pointer`:`mouse`,Dc=ol.isTouch=Cc.matchMedia&&Cc.matchMedia(`(hover: none), (pointer: coarse)`).matches?1:`ontouchstart`in Cc||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mc=ol.eventTypes=(`ontouchstart`in Tc?`touchstart,touchmove,touchcancel,touchend`:`onpointerdown`in Tc?`pointerdown,pointermove,pointercancel,pointerup`:`mousedown,mousemove,mouseup,mouseup`).split(`,`),setTimeout(function(){return Fc=0},500),Sc=1),kc||il(),Sc};Xc.op=Zc,Lc.cache=0;var ol=function(){function e(e){this.init(e)}var t=e.prototype;return t.init=function(e){Sc||al(xc)||console.warn(`Please gsap.registerPlugin(Observer)`),kc||il();var t=e.tolerance,n=e.dragMinimum,r=e.type,i=e.target,a=e.lineHeight,o=e.debounce,s=e.preventDefault,c=e.onStop,l=e.onStopDelay,u=e.ignore,d=e.wheelSpeed,f=e.event,p=e.onDragStart,m=e.onDragEnd,h=e.onDrag,g=e.onPress,_=e.onRelease,v=e.onRight,y=e.onLeft,b=e.onUp,x=e.onDown,S=e.onChangeX,C=e.onChangeY,w=e.onChange,T=e.onToggleX,E=e.onToggleY,D=e.onHover,O=e.onHoverEnd,k=e.onMove,A=e.ignoreCheck,j=e.isNormalizer,M=e.onGestureStart,N=e.onGestureEnd,P=e.onWheel,F=e.onEnable,I=e.onDisable,L=e.onClick,ee=e.scrollSpeed,te=e.capture,ne=e.allowClicks,R=e.lockAxis,re=e.onLockAxis;this.target=i=Qc(i)||Tc,this.vars=e,u&&=xc.utils.toArray(u),t||=1e-9,n||=0,d||=1,ee||=1,r||=`wheel,touch,pointer`,o=o!==!1,a||=parseFloat(Cc.getComputedStyle(Ec).lineHeight)||22;var z,ie,ae,B,V,oe,se,H=this,ce=0,le=0,ue=e.passive||!s&&e.passive!==!1,de=el(i,Xc),U=el(i,Zc),fe=de(),pe=U(),W=~r.indexOf(`touch`)&&!~r.indexOf(`pointer`)&&Mc[0]===`pointerdown`,me=Uc(i),G=i.ownerDocument||wc,he=[0,0,0],K=[0,0,0],ge=0,_e=function(){return ge=zc()},q=function(e,t){return(H.event=e)&&u&&$c(e.target,u)||t&&W&&e.pointerType!==`touch`||A&&A(e,t)},ve=function(){H._vx.reset(),H._vy.reset(),ie.pause(),c&&c(H)},ye=function(){var e=H.deltaX=rl(he),n=H.deltaY=rl(K),r=Math.abs(e)>=t,i=Math.abs(n)>=t;w&&(r||i)&&w(H,e,n,he,K),r&&(v&&H.deltaX>0&&v(H),y&&H.deltaX<0&&y(H),S&&S(H),T&&H.deltaX<0!=ce<0&&T(H),ce=H.deltaX,he[0]=he[1]=he[2]=0),i&&(x&&H.deltaY>0&&x(H),b&&H.deltaY<0&&b(H),C&&C(H),E&&H.deltaY<0!=le<0&&E(H),le=H.deltaY,K[0]=K[1]=K[2]=0),(B||ae)&&(k&&k(H),ae&&=(p&&ae===1&&p(H),h&&h(H),0),B=!1),oe&&!(oe=!1)&&re&&re(H),V&&=(P(H),!1),z=0},be=function(e,t,n){he[n]+=e,K[n]+=t,H._vx.update(e),H._vy.update(t),o?z||=requestAnimationFrame(ye):ye()},xe=function(e,t){R&&!se&&(H.axis=se=Math.abs(e)>Math.abs(t)?`x`:`y`,oe=!0),se!==`y`&&(he[2]+=e,H._vx.update(e,!0)),se!==`x`&&(K[2]+=t,H._vy.update(t,!0)),o?z||=requestAnimationFrame(ye):ye()},Se=function(e){if(!q(e,1)){e=nl(e,s);var t=e.clientX,r=e.clientY,i=t-H.x,a=r-H.y,o=H.isDragging;H.x=t,H.y=r,(o||(i||a)&&(Math.abs(H.startX-t)>=n||Math.abs(H.startY-r)>=n))&&(ae||=o?2:1,o||(H.isDragging=!0),xe(i,a))}},Ce=H.onPress=function(e){q(e,1)||e&&e.button||(H.axis=se=null,ie.pause(),H.isPressed=!0,e=nl(e),ce=le=0,H.startX=H.x=e.clientX,H.startY=H.y=e.clientY,H._vx.reset(),H._vy.reset(),Wc(j?i:G,Mc[1],Se,ue,!0),H.deltaX=H.deltaY=0,g&&g(H))},we=H.onRelease=function(e){if(!q(e,1)){Gc(j?i:G,Mc[1],Se,!0);var t=!isNaN(H.y-H.startY),n=H.isDragging,r=n&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),a=nl(e);!r&&t&&(H._vx.reset(),H._vy.reset(),s&&ne&&xc.delayedCall(.08,function(){if(zc()-ge>300&&!e.defaultPrevented){if(e.target.click)e.target.click();else if(G.createEvent){var t=G.createEvent(`MouseEvents`);t.initMouseEvent(`click`,!0,!0,Cc,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),e.target.dispatchEvent(t)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,c&&n&&!j&&ie.restart(!0),ae&&ye(),m&&n&&m(H),_&&_(H,r)}},Te=function(e){return e.touches&&e.touches.length>1&&(H.isGesturing=!0)&&M(e,H.isDragging)},Ee=function(){return(H.isGesturing=!1)||N(H)},De=function(e){if(!q(e)){var t=de(),n=U();be((t-fe)*ee,(n-pe)*ee,1),fe=t,pe=n,c&&ie.restart(!0)}},Oe=function(e){if(!q(e)){e=nl(e,s),P&&(V=!0);var t=(e.deltaMode===1?a:e.deltaMode===2?Cc.innerHeight:1)*d;be(e.deltaX*t,e.deltaY*t,0),c&&!j&&ie.restart(!0)}},ke=function(e){if(!q(e)){var t=e.clientX,n=e.clientY,r=t-H.x,i=n-H.y;H.x=t,H.y=n,B=!0,c&&ie.restart(!0),(r||i)&&xe(r,i)}},Ae=function(e){H.event=e,D(H)},je=function(e){H.event=e,O(H)},Me=function(e){return q(e)||nl(e,s)&&L(H)};ie=H._dc=xc.delayedCall(l||.25,ve).pause(),H.deltaX=H.deltaY=0,H._vx=tl(0,50,!0),H._vy=tl(0,50,!0),H.scrollX=de,H.scrollY=U,H.isDragging=H.isGesturing=H.isPressed=!1,Nc(this),H.enable=function(e){return H.isEnabled||(Wc(me?G:i,`scroll`,Jc),r.indexOf(`scroll`)>=0&&Wc(me?G:i,`scroll`,De,ue,te),r.indexOf(`wheel`)>=0&&Wc(i,`wheel`,Oe,ue,te),(r.indexOf(`touch`)>=0&&Dc||r.indexOf(`pointer`)>=0)&&(Wc(i,Mc[0],Ce,ue,te),Wc(G,Mc[2],we),Wc(G,Mc[3],we),ne&&Wc(i,`click`,_e,!0,!0),L&&Wc(i,`click`,Me),M&&Wc(G,`gesturestart`,Te),N&&Wc(G,`gestureend`,Ee),D&&Wc(i,Oc+`enter`,Ae),O&&Wc(i,Oc+`leave`,je),k&&Wc(i,Oc+`move`,ke)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=B=ae=!1,H._vx.reset(),H._vy.reset(),fe=de(),pe=U(),e&&e.type&&Ce(e),F&&F(H)),H},H.disable=function(){H.isEnabled&&(Ic.filter(function(e){return e!==H&&Uc(e.target)}).length||Gc(me?G:i,`scroll`,Jc),H.isPressed&&(H._vx.reset(),H._vy.reset(),Gc(j?i:G,Mc[1],Se,!0)),Gc(me?G:i,`scroll`,De,te),Gc(i,`wheel`,Oe,te),Gc(i,Mc[0],Ce,te),Gc(G,Mc[2],we),Gc(G,Mc[3],we),Gc(i,`click`,_e,!0),Gc(i,`click`,Me),Gc(G,`gesturestart`,Te),Gc(G,`gestureend`,Ee),Gc(i,Oc+`enter`,Ae),Gc(i,Oc+`leave`,je),Gc(i,Oc+`move`,ke),H.isEnabled=H.isPressed=H.isDragging=!1,I&&I(H))},H.kill=H.revert=function(){H.disable();var e=Ic.indexOf(H);e>=0&&Ic.splice(e,1),jc===H&&(jc=0)},Ic.push(H),j&&Uc(i)&&(jc=H),H.enable(f)},bc(e,[{key:`velocityX`,get:function(){return this._vx.getVelocity()}},{key:`velocityY`,get:function(){return this._vy.getVelocity()}}]),e}();ol.version=`3.15.0`,ol.create=function(e){return new ol(e)},ol.register=al,ol.getAll=function(){return Ic.slice()},ol.getById=function(e){return Ic.filter(function(t){return t.vars.id===e})[0]},Pc()&&xc.registerPlugin(ol);var J,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl=1,Vl=Date.now,Hl=Vl(),Ul=0,Wl=0,Gl=function(e,t,n){var r=su(e)&&(e.substr(0,6)===`clamp(`||e.indexOf(`max`)>-1);return n[`_`+t+`Clamp`]=r,r?e.substr(6,e.length-7):e},Kl=function(e,t){return t&&(!su(e)||e.substr(0,6)!==`clamp(`)?`clamp(`+e+`)`:e},ql=function e(){return Wl&&requestAnimationFrame(e)},Jl=function(){return yl=1},Yl=function(){return yl=0},Xl=function(e){return e},Zl=function(e){return Math.round(e*1e5)/1e5||0},Ql=function(){return typeof window<`u`},$l=function(){return J||Ql()&&(J=window.gsap)&&J.registerPlugin&&J},eu=function(e){return!!~fl.indexOf(e)},tu=function(e){return(e===`Height`?Il:cl[`inner`+e])||ul[`client`+e]||dl[`client`+e]},nu=function(e){return Hc(e,`getBoundingClientRect`)||(eu(e)?function(){return kd.width=cl.innerWidth,kd.height=Il,kd}:function(){return Mu(e)})},ru=function(e,t,n){var r=n.d,i=n.d2,a=n.a;return(a=Hc(e,`getBoundingClientRect`))?function(){return a()[r]}:function(){return(t?tu(i):e[`client`+i])||0}},iu=function(e,t){return!t||~Rc.indexOf(e)?nu(e):function(){return kd}},au=function(e,t){var n=t.s,r=t.d2,i=t.d,a=t.a;return Math.max(0,(n=`scroll`+r)&&(a=Hc(e,n))?a()-nu(e)()[i]:eu(e)?(ul[n]||dl[n])-tu(r):e[n]-e[`offset`+r])},ou=function(e,t){for(var n=0;n<wl.length;n+=3)(!t||~t.indexOf(wl[n+1]))&&e(wl[n],wl[n+1],wl[n+2])},su=function(e){return typeof e==`string`},cu=function(e){return typeof e==`function`},lu=function(e){return typeof e==`number`},uu=function(e){return typeof e==`object`},du=function(e,t,n){return e&&e.progress(+!t)&&n&&e.pause()},fu=function(e,t,n){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);r&&r.totalTime&&(e.callbackAnimation=r)}},pu=Math.abs,mu=`left`,hu=`top`,gu=`right`,_u=`bottom`,vu=`width`,yu=`height`,bu=`Right`,xu=`Left`,Su=`Top`,Cu=`Bottom`,wu=`padding`,Tu=`margin`,Eu=`Width`,Du=`Height`,Ou=`px`,ku=function(e){return cl.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Au=function(e){var t=ku(e).position;e.style.position=t===`absolute`||t===`fixed`?t:`relative`},ju=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Mu=function(e,t){var n=t&&ku(e)[bl]!==`matrix(1, 0, 0, 1, 0, 0)`&&J.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),r},Nu=function(e,t){var n=t.d2;return e[`offset`+n]||e[`client`+n]||0},Pu=function(e){var t=[],n=e.labels,r=e.duration(),i;for(i in n)t.push(n[i]/r);return t},Fu=function(e){return function(t){return J.utils.snap(Pu(e),t)}},Iu=function(e){var t=J.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(e,t){return e-t});return n?function(e,r,i){i===void 0&&(i=.001);var a;if(!r)return t(e);if(r>0){for(e-=i,a=0;a<n.length;a++)if(n[a]>=e)return n[a];return n[a-1]}for(a=n.length,e+=i;a--;)if(n[a]<=e)return n[a];return n[0]}:function(n,r,i){i===void 0&&(i=.001);var a=t(n);return!r||Math.abs(a-n)<i||a-n<0==r<0?a:t(r<0?n-e:n+e)}},Lu=function(e){return function(t,n){return Iu(Pu(e))(t,n.direction)}},Ru=function(e,t,n,r){return n.split(`,`).forEach(function(n){return e(t,n,r)})},zu=function(e,t,n,r,i){return e.addEventListener(t,n,{passive:!r,capture:!!i})},Bu=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Vu=function(e,t,n){n&&=n.wheelHandler,n&&(e(t,`wheel`,n),e(t,`touchmove`,n))},Hu={startColor:`green`,endColor:`red`,indent:0,fontSize:`16px`,fontWeight:`normal`},Uu={toggleActions:`play`,anticipatePin:0},Wu={top:0,left:0,center:.5,bottom:1,right:1},Gu=function(e,t){if(su(e)){var n=e.indexOf(`=`),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf(`%`)>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Wu?Wu[e]*t:~e.indexOf(`%`)?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ku=function(e,t,n,r,i,a,o,s){var c=i.startColor,l=i.endColor,u=i.fontSize,d=i.indent,f=i.fontWeight,p=ll.createElement(`div`),m=eu(n)||Hc(n,`pinType`)===`fixed`,h=e.indexOf(`scroller`)!==-1,g=m?dl:n.tagName===`IFRAME`?n.contentDocument.body:n,_=e.indexOf(`start`)!==-1,v=_?c:l,y=`border-color:`+v+`;font-size:`+u+`;color:`+v+`;font-weight:`+f+`;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;return y+=`position:`+((h||s)&&m?`fixed;`:`absolute;`),(h||s||!m)&&(y+=(r===Zc?gu:_u)+`:`+(a+parseFloat(d))+`px;`),o&&(y+=`box-sizing:border-box;text-align:left;width:`+o.offsetWidth+`px;`),p._isStart=_,p.setAttribute(`class`,`gsap-marker-`+e+(t?` marker-`+t:``)),p.style.cssText=y,p.innerText=t||t===0?e+`-`+t:e,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p[`offset`+r.op.d2],qu(p,0,r,_),p},qu=function(e,t,n,r){var i={display:`block`},a=n[r?`os2`:`p2`],o=n[r?`p2`:`os2`];e._isFlipped=r,i[n.a+`Percent`]=r?-100:0,i[n.a]=r?`1px`:0,i[`border`+a+Eu]=1,i[`border`+o+Eu]=0,i[n.p]=t+`px`,J.set(e,i)},Ju=[],Yu={},Xu,Zu=function(){return Vl()-Ul>34&&(Xu||=requestAnimationFrame(bd))},Qu=function(){(!Ol||!Ol.isPressed||Ol.startX>dl.clientWidth)&&(Lc.cache++,Ol?Xu||=requestAnimationFrame(bd):bd(),Ul||id(`scrollStart`),Ul=Vl())},$u=function(){jl=cl.innerWidth,Al=cl.innerHeight},ed=function(e){Lc.cache++,(e===!0||!vl&&!Dl&&!ll.fullscreenElement&&!ll.webkitFullscreenElement&&(!kl||jl!==cl.innerWidth||Math.abs(cl.innerHeight-Al)>cl.innerHeight*.25))&&pl.restart(!0)},td={},nd=[],rd=function e(){return Bu(Y,`scrollEnd`,e)||gd(!0)},id=function(e){return td[e]&&td[e].map(function(e){return e()})||nd},ad=[],od=function(e){for(var t=0;t<ad.length;t+=5)(!e||ad[t+4]&&ad[t+4].query===e)&&(ad[t].style.cssText=ad[t+1],ad[t].getBBox&&ad[t].setAttribute(`transform`,ad[t+2]||``),ad[t+3].uncache=1)},sd=function(){return Lc.forEach(function(e){return cu(e)&&++e.cacheID&&(e.rec=e())})},cd=function(e,t){var n;for(xl=0;xl<Ju.length;xl++)n=Ju[xl],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ll=!0,t&&od(t),t||id(`revert`)},ld=function(e,t){Lc.cache++,(t||!ud)&&Lc.forEach(function(e){return cu(e)&&e.cacheID++&&(e.rec=0)}),su(e)&&(cl.history.scrollRestoration=Pl=e)},ud,dd=0,fd,pd=function(){if(fd!==dd){var e=fd=dd;requestAnimationFrame(function(){return e===dd&&gd(!0)})}},md=function(){dl.appendChild(Fl),Il=!Ol&&Fl.offsetHeight||cl.innerHeight,dl.removeChild(Fl)},hd=function(e){return ml(`.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`).forEach(function(t){return t.style.display=e?`none`:`block`})},gd=function(e,t){if(ul=ll.documentElement,dl=ll.body,fl=[cl,ll,ul,dl],Ul&&!e&&!Ll){zu(Y,`scrollEnd`,rd);return}md(),ud=Y.isRefreshing=!0,Ll||sd();var n=id(`refreshInit`);Tl&&Y.sort(),t||cd(),Lc.forEach(function(e){cu(e)&&(e.smooth&&(e.target.style.scrollBehavior=`auto`),e(0))}),Ju.slice(0).forEach(function(e){return e.refresh()}),Ll=!1,Ju.forEach(function(e){if(e._subPinOffset&&e.pin){var t=e.vars.horizontal?`offsetWidth`:`offsetHeight`,n=e.pin[t];e.revert(!0,1),e.adjustPinSpacing(e.pin[t]-n),e.refresh()}}),Rl=1,hd(!0),Ju.forEach(function(e){var t=au(e.scroller,e._dir),n=e.vars.end===`max`||e._endClamp&&e.end>t,r=e._startClamp&&e.start>=t;(n||r)&&e.setPositions(r?t-1:e.start,n?Math.max(r?t:e.start+1,t):e.end,!0)}),hd(!1),Rl=0,n.forEach(function(e){return e&&e.render&&e.render(-1)}),Lc.forEach(function(e){cu(e)&&(e.smooth&&requestAnimationFrame(function(){return e.target.style.scrollBehavior=`smooth`}),e.rec&&e(e.rec))}),ld(Pl,1),pl.pause(),dd++,ud=2,bd(2),Ju.forEach(function(e){return cu(e.vars.onRefresh)&&e.vars.onRefresh(e)}),ud=Y.isRefreshing=!1,id(`refresh`)},_d=0,vd=1,yd,bd=function(e){if(e===2||!ud&&!Ll){Y.isUpdating=!0,yd&&yd.update(0);var t=Ju.length,n=Vl(),r=n-Hl>=50,i=t&&Ju[0].scroll();if(vd=_d>i?-1:1,ud||(_d=i),r&&(Ul&&!yl&&n-Ul>200&&(Ul=0,id(`scrollEnd`)),gl=Hl,Hl=n),vd<0){for(xl=t;xl-->0;)Ju[xl]&&Ju[xl].update(0,r);vd=1}else for(xl=0;xl<t;xl++)Ju[xl]&&Ju[xl].update(0,r);Y.isUpdating=!1}Xu=0},xd=[mu,hu,_u,gu,Tu+Cu,Tu+bu,Tu+Su,Tu+xu,`display`,`flexShrink`,`float`,`zIndex`,`gridColumnStart`,`gridColumnEnd`,`gridRowStart`,`gridRowEnd`,`gridArea`,`justifySelf`,`alignSelf`,`placeSelf`,`order`],Sd=xd.concat([vu,yu,`boxSizing`,`max`+Eu,`max`+Du,`position`,Tu,wu,wu+Su,wu+bu,wu+Cu,wu+xu]),Cd=function(e,t,n){Ed(n);var r=e._gsap;if(r.spacerIsNative)Ed(r.spacerState);else if(e._gsap.swappedIn){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}e._gsap.swappedIn=!1},wd=function(e,t,n,r){if(!e._gsap.swappedIn){for(var i=xd.length,a=t.style,o=e.style,s;i--;)s=xd[i],a[s]=n[s];a.position=n.position===`absolute`?`absolute`:`relative`,n.display===`inline`&&(a.display=`inline-block`),o[_u]=o[gu]=`auto`,a.flexBasis=n.flexBasis||`auto`,a.overflow=`visible`,a.boxSizing=`border-box`,a[vu]=Nu(e,Xc)+Ou,a[yu]=Nu(e,Zc)+Ou,a[wu]=o[Tu]=o[hu]=o[mu]=`0`,Ed(r),o[vu]=o[`max`+Eu]=n[vu],o[yu]=o[`max`+Du]=n[yu],o[wu]=n[wu],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Td=/([A-Z])/g,Ed=function(e){if(e){var t=e.t.style,n=e.length,r=0,i,a;for((e.t._gsap||J.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],i=e[r],a?t[i]=a:t[i]&&t.removeProperty(i.replace(Td,`-$1`).toLowerCase())}},Dd=function(e){for(var t=Sd.length,n=e.style,r=[],i=0;i<t;i++)r.push(Sd[i],n[Sd[i]]);return r.t=e,r},Od=function(e,t,n){for(var r=[],i=e.length,a=n?8:0,o;a<i;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},kd={left:0,top:0},Ad=function(e,t,n,r,i,a,o,s,c,l,u,d,f,p){cu(e)&&(e=e(s)),su(e)&&e.substr(0,3)===`max`&&(e=d+(e.charAt(4)===`=`?Gu(`0`+e.substr(3),n):0));var m=f?f.time():0,h,g,_;if(f&&f.seek(0),isNaN(e)||(e=+e),lu(e))f&&(e=J.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),o&&qu(o,n,r,!0);else{cu(t)&&(t=t(s));var v=(e||`0`).split(` `),y,b,x,S;_=Qc(t,s)||dl,y=Mu(_)||{},(!y||!y.left&&!y.top)&&ku(_).display===`none`&&(S=_.style.display,_.style.display=`block`,y=Mu(_),S?_.style.display=S:_.style.removeProperty(`display`)),b=Gu(v[0],y[r.d]),x=Gu(v[1]||`0`,n),e=y[r.p]-c[r.p]-l+b+i-x,o&&qu(o,x,r,n-x<20||o._isStart&&x>20),n-=n-x}if(p&&(s[p]=e||-.001,e<0&&(e=0)),a){var C=e+n,w=a._isStart;h=`scroll`+r.d2,qu(a,C,r,w&&C>20||!w&&(u?Math.max(dl[h],ul[h]):a.parentNode[h])<=C+1),u&&(c=Mu(o),u&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+Ou))}return f&&_&&(h=Mu(_),f.seek(d),g=Mu(_),f._caScrollDist=h[r.p]-g[r.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},jd=/(webkit|moz|length|cssText|inset)/i,Md=function(e,t,n,r){if(e.parentNode!==t){var i=e.style,a,o;if(t===dl){for(a in e._stOrig=i.cssText,o=ku(e),o)!+a&&!jd.test(a)&&o[a]&&typeof i[a]==`string`&&a!==`0`&&(i[a]=o[a]);i.top=n,i.left=r}else i.cssText=e._stOrig;J.core.getCache(e).uncache=1,t.appendChild(e)}},Nd=function(e,t,n){var r=t,i=r;return function(t){var a=Math.round(e());return a!==r&&a!==i&&Math.abs(a-r)>3&&Math.abs(a-i)>3&&(t=a,n&&n()),i=r,r=Math.round(t),r}},Pd=function(e,t,n){var r={};r[t.p]=`+=`+n,J.set(e,r)},Fd=function(e,t){var n=el(e,t),r=`_scroll`+t.p2,i=function t(i,a,o,s,c){var l=t.tween,u=a.onComplete,d={};o||=n();var f=Nd(n,o,function(){l.kill(),t.tween=0});return c=s&&c||0,s||=i-o,l&&l.kill(),a[r]=i,a.inherit=!1,a.modifiers=d,d[r]=function(){return f(o+s*l.ratio+c*l.ratio*l.ratio)},a.onUpdate=function(){Lc.cache++,t.tween&&bd()},a.onComplete=function(){t.tween=0,u&&u.call(l)},l=t.tween=J.to(e,a),l};return e[r]=n,n.wheelHandler=function(){return i.tween&&i.tween.kill()&&(i.tween=0)},zu(e,`wheel`,n.wheelHandler),Y.isTouch&&zu(e,`touchmove`,n.wheelHandler),i},Y=function(){function e(t,n){sl||e.register(J)||console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),Nl(this),this.init(t,n)}var t=e.prototype;return t.init=function(t,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Wl){this.update=this.refresh=this.kill=Xl;return}t=ju(su(t)||lu(t)||t.nodeType?{trigger:t}:t,Uu);var r=t,i=r.onUpdate,a=r.toggleClass,o=r.id,s=r.onToggle,c=r.onRefresh,l=r.scrub,u=r.trigger,d=r.pin,f=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,h=r.onScrubComplete,g=r.onSnapComplete,_=r.once,v=r.snap,y=r.pinReparent,b=r.pinSpacer,x=r.containerAnimation,S=r.fastScrollEnd,C=r.preventOverlaps,w=t.horizontal||t.containerAnimation&&t.horizontal!==!1?Xc:Zc,T=!l&&l!==0,E=Qc(t.scroller||cl),D=J.core.getCache(E),O=eu(E),k=(`pinType`in t?t.pinType:Hc(E,`pinType`)||O&&`fixed`)===`fixed`,A=[t.onEnter,t.onLeave,t.onEnterBack,t.onLeaveBack],j=T&&t.toggleActions.split(` `),M=`markers`in t?t.markers:Uu.markers,N=O?0:parseFloat(ku(E)[`border`+w.p2+Eu])||0,P=this,F=t.onRefreshInit&&function(){return t.onRefreshInit(P)},I=ru(E,O,w),L=iu(E,O),ee=0,te=0,ne=0,R=el(E,w),re,z,ie,ae,B,V,oe,se,H,ce,le,ue,de,U,fe,pe,W,me,G,he,K,ge,_e,q,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me;if(P._startClamp=P._endClamp=!1,P._dir=w,m*=45,P.scroller=E,P.scroll=x?x.time.bind(x):R,ae=R(),P.vars=t,n||=t.animation,`refreshPriority`in t&&(Tl=1,t.refreshPriority===-9999&&(yd=P)),D.tweenScroll=D.tweenScroll||{top:Fd(E,Zc),left:Fd(E,Xc)},P.tweenTo=re=D.tweenScroll[w.p],P.scrubDuration=function(e){Ee=lu(e)&&e,Ee?Te?Te.duration(e):Te=J.to(n,{ease:`expo`,totalProgress:`+=0`,inherit:!1,duration:Ee,paused:!0,onComplete:function(){return h&&h(P)}}):(Te&&Te.progress(1).kill(),Te=0)},n&&(n.vars.lazy=!1,n._initted&&!P.isReverted||n.vars.immediateRender!==!1&&t.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),P.animation=n.pause(),n.scrollTrigger=P,P.scrubDuration(l),Ce=0,o||=n.vars.id),v&&((!uu(v)||v.push)&&(v={snapTo:v}),`scrollBehavior`in dl.style&&J.set(O?[dl,ul]:E,{scrollBehavior:`auto`}),Lc.forEach(function(e){return cu(e)&&e.target===(O?ll.scrollingElement||ul:E)&&(e.smooth=!1)}),ie=cu(v.snapTo)?v.snapTo:v.snapTo===`labels`?Fu(n):v.snapTo===`labelsDirectional`?Lu(n):v.directional===!1?J.utils.snap(v.snapTo):function(e,t){return Iu(v.snapTo)(e,Vl()-te<500?0:t.direction)},De=v.duration||{min:.1,max:2},De=uu(De)?hl(De.min,De.max):hl(De,De),Oe=J.delayedCall(v.delay||Ee/2||.1,function(){var e=R(),t=Vl()-te<500,r=re.tween;if((t||Math.abs(P.getVelocity())<10)&&!r&&!yl&&ee!==e){var i=(e-V)/U,a=n&&!T?n.totalProgress():i,o=t?0:(a-we)/(Vl()-gl)*1e3||0,s=J.utils.clamp(-i,1-i,pu(o/2)*o/.185),c=i+(v.inertia===!1?0:s),l,u,d=v,f=d.onStart,p=d.onInterrupt,m=d.onComplete;if(l=ie(c,P),lu(l)||(l=c),u=Math.max(0,Math.round(V+l*U)),e<=oe&&e>=V&&u!==e){if(r&&!r._initted&&r.data<=pu(u-e))return;v.inertia===!1&&(s=l-i),re(u,{duration:De(pu(Math.max(pu(c-a),pu(l-a))*.185/o/.05||0)),ease:v.ease||`power3`,data:pu(u-e),onInterrupt:function(){return Oe.restart(!0)&&p&&fu(P,p)},onComplete:function(){P.update(),ee=R(),n&&!T&&(Te?Te.resetTo(`totalProgress`,l,n._tTime/n._tDur):n.progress(l)),Ce=we=n&&!T?n.totalProgress():P.progress,g&&g(P),m&&fu(P,m)}},e,s*U,u-e-s*U),f&&fu(P,f,re.tween)}}else P.isActive&&ee!==e&&Oe.restart(!0)}).pause()),o&&(Yu[o]=P),u=P.trigger=Qc(u||d!==!0&&d),Me=u&&u._gsap&&u._gsap.stRevert,Me&&=Me(P),d=d===!0?u:Qc(d),su(a)&&(a={targets:u,className:a}),d&&(f===!1||f===Tu||(f=!f&&d.parentNode&&d.parentNode.style&&ku(d.parentNode).display===`flex`?!1:wu),P.pin=d,z=J.core.getCache(d),z.spacer?fe=z.pinState:(b&&(b=Qc(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),z.spacerIsNative=!!b,b&&(z.spacerState=Dd(b))),z.spacer=me=b||ll.createElement(`div`),me.classList.add(`pin-spacer`),o&&me.classList.add(`pin-spacer-`+o),z.pinState=fe=Dd(d)),t.force3D!==!1&&J.set(d,{force3D:!0}),P.spacer=me=z.spacer,Se=ku(d),q=Se[f+w.os2],he=J.getProperty(d),K=J.quickSetter(d,w.a,Ou),wd(d,me,Se),W=Dd(d)),M){ue=uu(M)?ju(M,Hu):Hu,ce=Ku(`scroller-start`,o,E,w,ue,0),le=Ku(`scroller-end`,o,E,w,ue,0,ce),G=ce[`offset`+w.op.d2];var Ne=Qc(Hc(E,`content`)||E);se=this.markerStart=Ku(`start`,o,Ne,w,ue,G,0,x),H=this.markerEnd=Ku(`end`,o,Ne,w,ue,G,0,x),x&&(je=J.quickSetter([se,H],w.a,Ou)),!k&&!(Rc.length&&Hc(E,`fixedMarkers`)===!0)&&(Au(O?dl:E),J.set([ce,le],{force3D:!0}),ye=J.quickSetter(ce,w.a,Ou),xe=J.quickSetter(le,w.a,Ou))}if(x){var Pe=x.vars.onUpdate,Fe=x.vars.onUpdateParams;x.eventCallback(`onUpdate`,function(){P.update(0,0,1),Pe&&Pe.apply(x,Fe||[])})}if(P.previous=function(){return Ju[Ju.indexOf(P)-1]},P.next=function(){return Ju[Ju.indexOf(P)+1]},P.revert=function(e,t){if(!t)return P.kill(!0);var r=e!==!1||!P.enabled,i=vl;r!==P.isReverted&&(r&&(ke=Math.max(R(),P.scroll.rec||0),ne=P.progress,Ae=n&&n.progress()),se&&[se,H,ce,le].forEach(function(e){return e.style.display=r?`none`:`block`}),r&&(vl=P,P.update(r)),d&&(!y||!P.isActive)&&(r?Cd(d,me,fe):wd(d,me,ku(d),ve)),r||P.update(r),vl=i,P.isReverted=r)},P.refresh=function(r,i,a,o){if(!vl&&P.enabled||i){if(d&&r&&Ul){zu(e,`scrollEnd`,rd);return}!ud&&F&&F(P),vl=P,re.tween&&!a&&(re.tween.kill(),re.tween=0),Te&&Te.pause(),p&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(e){return e.vars.immediateRender&&e.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var s=I(),l=L(),m=x?x.duration():au(E,w),h=U<=.01||!U,g=0,_=o||0,v=uu(a)?a.end:t.end,b=t.endTrigger||u,S=uu(a)?a.start:t.start||(t.start===0||!u?0:d?`0 0`:`0 100%`),C=P.pinnedContainer=t.pinnedContainer&&Qc(t.pinnedContainer,P),D=u&&Math.max(0,Ju.indexOf(P))||0,A=D,j,z,ie,ue,G,K,q,ye,xe,Se,Ce,we,Ee;for(M&&uu(a)&&(we=J.getProperty(ce,w.p),Ee=J.getProperty(le,w.p));A-->0;)K=Ju[A],K.end||K.refresh(0,1)||(vl=P),q=K.pin,q&&(q===u||q===d||q===C)&&!K.isReverted&&(Se||=[],Se.unshift(K),K.revert(!0,!0)),K!==Ju[A]&&(D--,A--);for(cu(S)&&(S=S(P)),S=Gl(S,`start`,P),V=Ad(S,u,s,w,R(),se,ce,P,l,N,k,m,x,P._startClamp&&`_startClamp`)||(d?-.001:0),cu(v)&&(v=v(P)),su(v)&&!v.indexOf(`+=`)&&(~v.indexOf(` `)?v=(su(S)?S.split(` `)[0]:``)+v:(g=Gu(v.substr(2),s),v=su(S)?S:(x?J.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,V):V)+g,b=u)),v=Gl(v,`end`,P),oe=Math.max(V,Ad(v||(b?`100% 0`:m),b,s,w,R()+g,H,le,P,l,N,k,m,x,P._endClamp&&`_endClamp`))||-.001,g=0,A=D;A--;)K=Ju[A]||{},q=K.pin,q&&K.start-K._pinPush<=V&&!x&&K.end>0&&(j=K.end-(P._startClamp?Math.max(0,K.start):K.start),(q===u&&K.start-K._pinPush<V||q===C)&&isNaN(S)&&(g+=j*(1-K.progress)),q===d&&(_+=j));if(V+=g,oe+=g,P._startClamp&&(P._startClamp+=g),P._endClamp&&!ud&&(P._endClamp=oe||-.001,oe=Math.min(oe,au(E,w))),U=oe-V||(V-=.01)&&.001,h&&(ne=J.utils.clamp(0,1,J.utils.normalize(V,oe,ke))),P._pinPush=_,se&&g&&(j={},j[w.a]=`+=`+g,C&&(j[w.p]=`-=`+R()),J.set([se,H],j)),d&&!(Rl&&P.end>=au(E,w)))j=ku(d),ue=w===Zc,ie=R(),ge=parseFloat(he(w.a))+_,!m&&oe>1&&(Ce=(O?ll.scrollingElement||ul:E).style,Ce={style:Ce,value:Ce[`overflow`+w.a.toUpperCase()]},O&&ku(dl)[`overflow`+w.a.toUpperCase()]!==`scroll`&&(Ce.style[`overflow`+w.a.toUpperCase()]=`scroll`)),wd(d,me,j),W=Dd(d),z=Mu(d,!0),ye=k&&el(E,ue?Xc:Zc)(),f?(ve=[f+w.os2,U+_+Ou],ve.t=me,A=f===wu?Nu(d,w)+U+_:0,A&&(ve.push(w.d,A+Ou),me.style.flexBasis!==`auto`&&(me.style.flexBasis=A+Ou)),Ed(ve),C&&Ju.forEach(function(e){e.pin===C&&e.vars.pinSpacing!==!1&&(e._subPinOffset=!0)}),k&&R(ke)):(A=Nu(d,w),A&&me.style.flexBasis!==`auto`&&(me.style.flexBasis=A+Ou)),k&&(G={top:z.top+(ue?ie-V:ye)+Ou,left:z.left+(ue?ye:ie-V)+Ou,boxSizing:`border-box`,position:`fixed`},G[vu]=G[`max`+Eu]=Math.ceil(z.width)+Ou,G[yu]=G[`max`+Du]=Math.ceil(z.height)+Ou,G[Tu]=G[Tu+Su]=G[Tu+bu]=G[Tu+Cu]=G[Tu+xu]=`0`,G[wu]=j[wu],G[wu+Su]=j[wu+Su],G[wu+bu]=j[wu+bu],G[wu+Cu]=j[wu+Cu],G[wu+xu]=j[wu+xu],pe=Od(fe,G,y),ud&&R(0)),n?(xe=n._initted,El(1),n.render(n.duration(),!0,!0),_e=he(w.a)-ge+U+_,be=Math.abs(U-_e)>1,k&&be&&pe.splice(pe.length-2,2),n.render(0,!0,!0),xe||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),El(0)):_e=U,Ce&&(Ce.value?Ce.style[`overflow`+w.a.toUpperCase()]=Ce.value:Ce.style.removeProperty(`overflow-`+w.a));else if(u&&R()&&!x)for(z=u.parentNode;z&&z!==dl;)z._pinOffset&&(V-=z._pinOffset,oe-=z._pinOffset),z=z.parentNode;Se&&Se.forEach(function(e){return e.revert(!1,!0)}),P.start=V,P.end=oe,ae=B=ud?ke:R(),!x&&!ud&&(ae<ke&&R(ke),P.scroll.rec=0),P.revert(!1,!0),te=Vl(),Oe&&(ee=-1,Oe.restart(!0)),vl=0,n&&T&&(n._initted||Ae)&&n.progress()!==Ae&&n.progress(Ae||0,!0).render(n.time(),!0,!0),(h||ne!==P.progress||x||p||n&&!n._initted)&&(n&&!T&&(n._initted||ne||n.vars.immediateRender!==!1)&&n.totalProgress(x&&V<-.001&&!ne?J.utils.normalize(V,oe,0):ne,!0),P.progress=h||(ae-V)/U===ne?0:ne),d&&f&&(me._pinOffset=Math.round(P.progress*_e)),Te&&Te.invalidate(),isNaN(we)||(we-=J.getProperty(ce,w.p),Ee-=J.getProperty(le,w.p),Pd(ce,w,we),Pd(se,w,we-(o||0)),Pd(le,w,Ee),Pd(H,w,Ee-(o||0))),h&&!ud&&P.update(),c&&!ud&&!de&&(de=!0,c(P),de=!1)}},P.getVelocity=function(){return(R()-B)/(Vl()-gl)*1e3||0},P.endAnimation=function(){du(P.callbackAnimation),n&&(Te?Te.progress(1):n.paused()?T||du(n,P.direction<0,1):du(n,n.reversed()))},P.labelToScroll=function(e){return n&&n.labels&&(V||P.refresh()||V)+n.labels[e]/n.duration()*U||0},P.getTrailing=function(e){var t=Ju.indexOf(P),n=P.direction>0?Ju.slice(0,t).reverse():Ju.slice(t+1);return(su(e)?n.filter(function(t){return t.vars.preventOverlaps===e}):n).filter(function(e){return P.direction>0?e.end<=V:e.start>=oe})},P.update=function(e,t,r){if(!x||r||e){var o=ud===!0?ke:P.scroll(),c=e?0:(o-V)/U,u=c<0?0:c>1?1:c||0,p=P.progress,h,g,b,D,O,M,N,F;if(t&&(B=ae,ae=x?R():o,v&&(we=Ce,Ce=n&&!T?n.totalProgress():u)),m&&d&&!vl&&!Bl&&Ul&&(!u&&V<o+(o-B)/(Vl()-gl)*m?u=1e-4:u===1&&oe>o+(o-B)/(Vl()-gl)*m&&(u=.9999)),u!==p&&P.enabled){if(h=P.isActive=!!u&&u<1,g=!!p&&p<1,M=h!==g,O=M||!!u!=!!p,P.direction=u>p?1:-1,P.progress=u,O&&!vl&&(b=u&&!p?0:u===1?1:p===1?2:3,T&&(D=!M&&j[b+1]!==`none`&&j[b+1]||j[b],F=n&&(D===`complete`||D===`reset`||D in n))),C&&(M||F)&&(F||l||!n)&&(cu(C)?C(P):P.getTrailing(C).forEach(function(e){return e.endAnimation()})),T||(Te&&!vl&&!Bl?(Te._dp._time-Te._start!==Te._time&&Te.render(Te._dp._time-Te._start),Te.resetTo?Te.resetTo(`totalProgress`,u,n._tTime/n._tDur):(Te.vars.totalProgress=u,Te.invalidate().restart())):n&&n.totalProgress(u,!!(vl&&(te||e)))),d){if(e&&f&&(me.style[f+w.os2]=q),!k)K(Zl(ge+_e*u));else if(O){if(N=!e&&u>p&&oe+1>o&&o+1>=au(E,w),y){if(!e&&(h||N)){var I=Mu(d,!0),L=o-V;Md(d,dl,I.top+(w===Zc?L:0)+Ou,I.left+(w===Zc?0:L)+Ou)}else Md(d,me)}Ed(h||N?pe:W),be&&u<1&&h||K(ge+(u===1&&!N?_e:0))}}v&&!re.tween&&!vl&&!Bl&&Oe.restart(!0),a&&(M||_&&u&&(u<1||!zl))&&ml(a.targets).forEach(function(e){return e.classList[h||_?`add`:`remove`](a.className)}),i&&!T&&!e&&i(P),O&&!vl?(T&&(F&&(D===`complete`?n.pause().totalProgress(1):D===`reset`?n.restart(!0).pause():D===`restart`?n.restart(!0):n[D]()),i&&i(P)),(M||!zl)&&(s&&M&&fu(P,s),A[b]&&fu(P,A[b]),_&&(u===1?P.kill(!1,1):A[b]=0),M||(b=u===1?1:3,A[b]&&fu(P,A[b]))),S&&!h&&Math.abs(P.getVelocity())>(lu(S)?S:2500)&&(du(P.callbackAnimation),Te?Te.progress(1):du(n,D===`reverse`?1:!u,1))):T&&i&&!vl&&i(P)}if(xe){var ee=x?o/x.duration()*(x._caScrollDist||0):o;ye(ee+ +!!ce._isFlipped),xe(ee)}je&&je(-o/x.duration()*(x._caScrollDist||0))}},P.enable=function(t,n){P.enabled||(P.enabled=!0,zu(E,`resize`,ed),O||zu(E,`scroll`,Qu),F&&zu(e,`refreshInit`,F),t!==!1&&(P.progress=ne=0,ae=B=ee=R()),n!==!1&&P.refresh())},P.getTween=function(e){return e&&re?re.tween:Te},P.setPositions=function(e,t,n,r){if(x){var i=x.scrollTrigger,a=x.duration(),o=i.end-i.start;e=i.start+o*e/a,t=i.start+o*t/a}P.refresh(!1,!1,{start:Kl(e,n&&!!P._startClamp),end:Kl(t,n&&!!P._endClamp)},r),P.update()},P.adjustPinSpacing=function(e){if(ve&&e){var t=ve.indexOf(w.d)+1;ve[t]=parseFloat(ve[t])+e+Ou,ve[1]=parseFloat(ve[1])+e+Ou,Ed(ve)}},P.disable=function(t,n){if(t!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,n||Te&&Te.pause(),ke=0,z&&(z.uncache=1),F&&Bu(e,`refreshInit`,F),Oe&&(Oe.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!O)){for(var r=Ju.length;r--;)if(Ju[r].scroller===E&&Ju[r]!==P)return;Bu(E,`resize`,ed),O||Bu(E,`scroll`,Qu)}},P.kill=function(e,r){P.disable(e,r),Te&&!r&&Te.kill(),o&&delete Yu[o];var i=Ju.indexOf(P);i>=0&&Ju.splice(i,1),i===xl&&vd>0&&xl--,i=0,Ju.forEach(function(e){return e.scroller===P.scroller&&(i=1)}),i||ud||(P.scroll.rec=0),n&&(n.scrollTrigger=null,e&&n.revert({kill:!1}),r||n.kill()),se&&[se,H,ce,le].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),yd===P&&(yd=0),d&&(z&&(z.uncache=1),i=0,Ju.forEach(function(e){return e.pin===d&&i++}),i||(z.spacer=0)),t.onKill&&t.onKill(P)},Ju.push(P),P.enable(!1,!1),Me&&Me(P),n&&n.add&&!U){var Ie=P.update;P.update=function(){P.update=Ie,Lc.cache++,V||oe||P.refresh()},J.delayedCall(.01,P.update),U=.01,V=oe=0}else P.refresh();d&&pd()},e.register=function(t){return sl||=(J=t||$l(),Ql()&&window.document&&e.enable(),Wl),sl},e.defaults=function(e){if(e)for(var t in e)Uu[t]=e[t];return Uu},e.disable=function(e,t){Wl=0,Ju.forEach(function(n){return n[t?`kill`:`disable`](e)}),Bu(cl,`wheel`,Qu),Bu(ll,`scroll`,Qu),clearInterval(_l),Bu(ll,`touchcancel`,Xl),Bu(dl,`touchstart`,Xl),Ru(Bu,ll,`pointerdown,touchstart,mousedown`,Jl),Ru(Bu,ll,`pointerup,touchend,mouseup`,Yl),pl.kill(),ou(Bu);for(var n=0;n<Lc.length;n+=3)Vu(Bu,Lc[n],Lc[n+1]),Vu(Bu,Lc[n],Lc[n+2])},e.enable=function(){if(cl=window,ll=document,ul=ll.documentElement,dl=ll.body,J){if(ml=J.utils.toArray,hl=J.utils.clamp,Nl=J.core.context||Xl,El=J.core.suppressOverwrites||Xl,Pl=cl.history.scrollRestoration||`auto`,_d=cl.pageYOffset||0,J.core.globals(`ScrollTrigger`,e),dl){Wl=1,Fl=document.createElement(`div`),Fl.style.height=`100vh`,Fl.style.position=`absolute`,md(),ql(),ol.register(J),e.isTouch=ol.isTouch,Ml=ol.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),kl=ol.isTouch===1,zu(cl,`wheel`,Qu),fl=[cl,ll,ul,dl],J.matchMedia?(e.matchMedia=function(e){var t=J.matchMedia(),n;for(n in e)t.add(n,e[n]);return t},J.addEventListener(`matchMediaInit`,function(){sd(),cd()}),J.addEventListener(`matchMediaRevert`,function(){return od()}),J.addEventListener(`matchMedia`,function(){gd(0,1),id(`matchMedia`)}),J.matchMedia().add(`(orientation: portrait)`,function(){return $u(),$u})):console.warn(`Requires GSAP 3.11.0 or later`),$u(),zu(ll,`scroll`,Qu);var t=dl.hasAttribute(`style`),n=dl.style,r=n.borderTopStyle,i=J.core.Animation.prototype,a,o;for(i.revert||Object.defineProperty(i,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle=`solid`,a=Mu(dl),Zc.m=Math.round(a.top+Zc.sc())||0,Xc.m=Math.round(a.left+Xc.sc())||0,r?n.borderTopStyle=r:n.removeProperty(`border-top-style`),t||(dl.setAttribute(`style`,``),dl.removeAttribute(`style`)),_l=setInterval(Zu,250),J.delayedCall(.5,function(){return Bl=0}),zu(ll,`touchcancel`,Xl),zu(dl,`touchstart`,Xl),Ru(zu,ll,`pointerdown,touchstart,mousedown`,Jl),Ru(zu,ll,`pointerup,touchend,mouseup`,Yl),bl=J.utils.checkPrefix(`transform`),Sd.push(bl),sl=Vl(),pl=J.delayedCall(.2,gd).pause(),wl=[ll,`visibilitychange`,function(){var e=cl.innerWidth,t=cl.innerHeight;ll.hidden?(Sl=e,Cl=t):(Sl!==e||Cl!==t)&&ed()},ll,`DOMContentLoaded`,gd,cl,`load`,gd,cl,`resize`,ed],ou(zu),Ju.forEach(function(e){return e.enable(0,1)}),o=0;o<Lc.length;o+=3)Vu(Bu,Lc[o],Lc[o+1]),Vu(Bu,Lc[o],Lc[o+2])}else ll&&ll.addEventListener(`DOMContentLoaded`,function t(){e.enable(),ll.removeEventListener(`DOMContentLoaded`,t)})}},e.config=function(t){`limitCallbacks`in t&&(zl=!!t.limitCallbacks);var n=t.syncInterval;n&&clearInterval(_l)||(_l=n)&&setInterval(Zu,n),`ignoreMobileResize`in t&&(kl=e.isTouch===1&&t.ignoreMobileResize),`autoRefreshEvents`in t&&(ou(Bu)||ou(zu,t.autoRefreshEvents||`none`),Dl=(t.autoRefreshEvents+``).indexOf(`resize`)===-1)},e.scrollerProxy=function(e,t){var n=Qc(e),r=Lc.indexOf(n),i=eu(n);~r&&Lc.splice(r,i?6:2),t&&(i?Rc.unshift(cl,t,dl,t,ul,t):Rc.unshift(n,t))},e.clearMatchMedia=function(e){Ju.forEach(function(t){return t._ctx&&t._ctx.query===e&&t._ctx.kill(!0,!0)})},e.isInViewport=function(e,t,n){var r=(su(e)?Qc(e):e).getBoundingClientRect(),i=r[n?vu:yu]*t||0;return n?r.right-i>0&&r.left+i<cl.innerWidth:r.bottom-i>0&&r.top+i<cl.innerHeight},e.positionInViewport=function(e,t,n){su(e)&&(e=Qc(e));var r=e.getBoundingClientRect(),i=r[n?vu:yu],a=t==null?i/2:t in Wu?Wu[t]*i:~t.indexOf(`%`)?parseFloat(t)*i/100:parseFloat(t)||0;return n?(r.left+a)/cl.innerWidth:(r.top+a)/cl.innerHeight},e.killAll=function(e){if(Ju.slice(0).forEach(function(e){return e.vars.id!==`ScrollSmoother`&&e.kill()}),e!==!0){var t=td.killAll||[];td={},t.forEach(function(e){return e()})}},e}();Y.version=`3.15.0`,Y.saveStyles=function(e){return e?ml(e).forEach(function(e){if(e&&e.style){var t=ad.indexOf(e);t>=0&&ad.splice(t,5),ad.push(e,e.style.cssText,e.getBBox&&e.getAttribute(`transform`),J.core.getCache(e),Nl())}}):ad},Y.revert=function(e,t){return cd(!e,t)},Y.create=function(e,t){return new Y(e,t)},Y.refresh=function(e){return e?ed(!0):(sl||Y.register())&&gd(!0)},Y.update=function(e){return++Lc.cache&&bd(e===!0?2:0)},Y.clearScrollMemory=ld,Y.maxScroll=function(e,t){return au(e,t?Xc:Zc)},Y.getScrollFunc=function(e,t){return el(Qc(e),t?Xc:Zc)},Y.getById=function(e){return Yu[e]},Y.getAll=function(){return Ju.filter(function(e){return e.vars.id!==`ScrollSmoother`})},Y.isScrolling=function(){return!!Ul},Y.snapDirectional=Iu,Y.addEventListener=function(e,t){var n=td[e]||(td[e]=[]);~n.indexOf(t)||n.push(t)},Y.removeEventListener=function(e,t){var n=td[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},Y.batch=function(e,t){var n=[],r={},i=t.interval||.016,a=t.batchMax||1e9,o=function(e,t){var n=[],r=[],o=J.delayedCall(i,function(){t(n,r),n=[],r=[]}).pause();return function(e){n.length||o.restart(!0),n.push(e.trigger),r.push(e),a<=n.length&&o.progress(1)}},s;for(s in t)r[s]=s.substr(0,2)===`on`&&cu(t[s])&&s!==`onRefreshInit`?o(s,t[s]):t[s];return cu(a)&&(a=a(),zu(Y,`refresh`,function(){return a=t.batchMax()})),ml(e).forEach(function(e){var t={};for(s in r)t[s]=r[s];t.trigger=e,n.push(Y.create(t))}),n};var Id=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Ld=function e(t,n){n===!0?t.style.removeProperty(`touch-action`):t.style.touchAction=n===!0?`auto`:n?`pan-`+n+(ol.isTouch?` pinch-zoom`:``):`none`,t===ul&&e(dl,n)},Rd={auto:1,scroll:1},zd=function(e){var t=e.event,n=e.target,r=e.axis,i=(t.changedTouches?t.changedTouches[0]:t).target,a=i._gsap||J.core.getCache(i),o=Vl(),s;if(!a._isScrollT||o-a._isScrollT>2e3){for(;i&&i!==dl&&(i.scrollHeight<=i.clientHeight&&i.scrollWidth<=i.clientWidth||!(Rd[(s=ku(i)).overflowY]||Rd[s.overflowX]));)i=i.parentNode;a._isScroll=i&&i!==n&&!eu(i)&&(Rd[(s=ku(i)).overflowY]||Rd[s.overflowX]),a._isScrollT=o}(a._isScroll||r===`x`)&&(t.stopPropagation(),t._gsapAllow=!0)},Bd=function(e,t,n,r){return ol.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r&&=zd,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&zu(ll,ol.eventTypes[0],Ud,!1,!0)},onDisable:function(){return Bu(ll,ol.eventTypes[0],Ud,!0)}})},Vd=/(input|label|select|textarea)/i,Hd,Ud=function(e){var t=Vd.test(e.target.tagName);(t||Hd)&&(e._gsapAllow=!0,Hd=t)},Wd=function(e){uu(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type=`wheel,touch`),e.debounce=!!e.debounce,e.id=e.id||`normalizer`;var t=e,n=t.normalizeScrollX,r=t.momentum,i=t.allowNestedScroll,a=t.onRelease,o,s,c=Qc(e.target)||ul,l=J.core.globals().ScrollSmoother,u=l&&l.get(),d=Ml&&(e.content&&Qc(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=el(c,Zc),p=el(c,Xc),m=1,h=(ol.isTouch&&cl.visualViewport?cl.visualViewport.scale*cl.visualViewport.width:cl.outerWidth)/cl.innerWidth,g=0,_=cu(r)?function(){return r(o)}:function(){return r||2.8},v,y,b=Bd(c,e.type,!0,i),x=function(){return y=!1},S=Xl,C=Xl,w=function(){s=au(c,Zc),C=hl(+!!Ml,s),n&&(S=hl(0,au(c,Xc))),v=dd},T=function(){d._gsap.y=Zl(parseFloat(d._gsap.y)+f.offset)+`px`,d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+parseFloat(d._gsap.y)+`, 0, 1)`,f.offset=f.cacheID=0},E=function(){if(y){requestAnimationFrame(x);var e=Zl(o.deltaY/2),t=C(f.v-e);if(d&&t!==f.v+f.offset){f.offset=t-f.v;var n=Zl((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform=`matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, `+n+`, 0, 1)`,d._gsap.y=n+`px`,f.cacheID=Lc.cache,bd()}return!0}f.offset&&T(),y=!0},D,O,k,A,j=function(){w(),D.isActive()&&D.vars.scrollY>s&&(f()>s?D.progress(1)&&f(s):D.resetTo(`scrollY`,s))};return d&&J.set(d,{y:`+=0`}),e.ignoreCheck=function(e){return Ml&&e.type===`touchmove`&&E(e)||m>1.05&&e.type!==`touchstart`||o.isGesturing||e.touches&&e.touches.length>1},e.onPress=function(){y=!1;var e=m;m=Zl((cl.visualViewport&&cl.visualViewport.scale||1)/h),D.pause(),e!==m&&Ld(c,m>1.01||!n&&`x`),O=p(),k=f(),w(),v=dd},e.onRelease=e.onGestureStart=function(e,t){if(f.offset&&T(),!t)A.restart(!0);else{Lc.cache++;var r=_(),i,o;n&&(i=p(),o=i+r*.05*-e.velocityX/.227,r*=Id(p,i,o,au(c,Xc)),D.vars.scrollX=S(o)),i=f(),o=i+r*.05*-e.velocityY/.227,r*=Id(f,i,o,au(c,Zc)),D.vars.scrollY=C(o),D.invalidate().duration(r).play(.01),(Ml&&D.vars.scrollY>=s||i>=s-1)&&J.to({},{onUpdate:j,duration:r})}a&&a(e)},e.onWheel=function(){D._ts&&D.pause(),Vl()-g>1e3&&(v=0,g=Vl())},e.onChange=function(e,t,r,i,a){if(dd!==v&&w(),t&&n&&p(S(i[2]===t?O+(e.startX-e.x):p()+t-i[1])),r){f.offset&&T();var o=a[2]===r,s=o?k+e.startY-e.y:f()+r-a[1],c=C(s);o&&s!==c&&(k+=c-s),f(c)}(r||t)&&bd()},e.onEnable=function(){Ld(c,!n&&`x`),Y.addEventListener(`refresh`,j),zu(cl,`resize`,j),f.smooth&&=(f.target.style.scrollBehavior=`auto`,p.smooth=!1),b.enable()},e.onDisable=function(){Ld(c,!0),Bu(cl,`resize`,j),Y.removeEventListener(`refresh`,j),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new ol(e),o.iOS=Ml,Ml&&!f()&&f(1),Ml&&J.ticker.add(Xl),A=o._dc,D=J.to(o,{ease:`power4`,paused:!0,inherit:!1,scrollX:n?`+=0.1`:`+=0`,scrollY:`+=0.1`,modifiers:{scrollY:Nd(f,f(),function(){return D.pause()})},onUpdate:bd,onComplete:A.vars.onComplete}),o};Y.sort=function(e){if(cu(e))return Ju.sort(e);var t=cl.pageYOffset||0;return Y.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+cl.innerHeight}),Ju.sort(e||function(e,t){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((t.vars.containerAnimation?1e6:t._sortY)+(t.vars.refreshPriority||0)*-1e6)})},Y.observe=function(e){return new ol(e)},Y.normalizeScroll=function(e){if(e===void 0)return Ol;if(e===!0&&Ol)return Ol.enable();if(e===!1){Ol&&Ol.kill(),Ol=e;return}var t=e instanceof ol?e:Wd(e);return Ol&&Ol.target===t.target&&Ol.kill(),eu(t.target)&&(Ol=t),t},Y.core={_getVelocityProp:tl,_inputObserver:Bd,_scrollers:Lc,_proxies:Rc,bridge:{ss:function(){Ul||id(`scrollStart`),Ul=Vl()},ref:function(){return vl}}},$l()&&J.registerPlugin(Y);var Gd=`1.3.26`;function Kd(e,t,n){return Math.max(e,Math.min(t,n))}function qd(e,t,n){return(1-n)*e+n*t}function Jd(e,t,n,r){return qd(e,t,1-Math.exp(-n*r))}function Yd(e,t){return(e%t+t)%t}var Xd=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let n=Kd(0,this.currentTime/this.duration,1);t=n>=1;let r=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Jd(this.value,this.to,this.lerp*60,e),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:n,duration:r,easing:i,onStart:a,onUpdate:o}){this.from=this.value=e,this.to=t,this.lerp=n,this.duration=r,this.easing=i,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}};function Zd(e,t){let n;return function(...r){clearTimeout(n),n=setTimeout(()=>{n=void 0,e.apply(this,r)},t)}}var Qd=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(e,t,{autoResize:n=!0,debounce:r=250}={}){this.wrapper=e,this.content=t,n&&(this.debouncedResize=Zd(this.resize,r),this.wrapper instanceof Window?window.addEventListener(`resize`,this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener(`resize`,this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},$d=class{events={};emit(e,...t){let n=this.events[e]||[];for(let e=0,r=n.length;e<r;e++)n[e]?.(...t)}on(e,t){return this.events[e]?this.events[e].push(t):this.events[e]=[t],()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}off(e,t){this.events[e]=this.events[e]?.filter(e=>t!==e)}destroy(){this.events={}}},ef=100/6,tf={passive:!1};function nf(e,t){return e===1?ef:e===2?t:1}var rf=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new $d;constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){this.element=e,this.options=t,window.addEventListener(`resize`,this.onWindowResize),this.onWindowResize(),this.element.addEventListener(`wheel`,this.onWheel,tf),this.element.addEventListener(`touchstart`,this.onTouchStart,tf),this.element.addEventListener(`touchmove`,this.onTouchMove,tf),this.element.addEventListener(`touchend`,this.onTouchEnd,tf)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener(`resize`,this.onWindowResize),this.element.removeEventListener(`wheel`,this.onWheel,tf),this.element.removeEventListener(`touchstart`,this.onTouchStart,tf),this.element.removeEventListener(`touchmove`,this.onTouchMove,tf),this.element.removeEventListener(`touchend`,this.onTouchEnd,tf)}onTouchStart=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit(`scroll`,{deltaX:0,deltaY:0,event:e})};onTouchMove=e=>{let{clientX:t,clientY:n}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=n,this.lastDelta={x:r,y:i},this.emitter.emit(`scroll`,{deltaX:r,deltaY:i,event:e})};onTouchEnd=e=>{this.emitter.emit(`scroll`,{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})};onWheel=e=>{let{deltaX:t,deltaY:n,deltaMode:r}=e,i=nf(r,this.window.width),a=nf(r,this.window.height);t*=i,n*=a,t*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit(`scroll`,{deltaX:t,deltaY:n,event:e})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},af=e=>Math.min(1,1.001-2**(-10*e)),of=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia(`(prefers-reduced-motion: reduce)`);isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Xd;emitter=new $d;dimensions;virtualScroll;constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:n=e,smoothWheel:r=!0,syncTouch:i=!1,syncTouchLerp:a=.075,touchInertiaExponent:o=1.7,duration:s,easing:c,lerp:l=.1,infinite:u=!1,orientation:d=`vertical`,gestureOrientation:f=d===`horizontal`?`both`:`vertical`,touchMultiplier:p=1,wheelMultiplier:m=1,autoResize:h=!0,prevent:g,virtualScroll:_,overscroll:v=!0,autoRaf:y=!1,anchors:b=!1,autoToggle:x=!1,allowNestedScroll:S=!1,__experimental__naiveDimensions:C=!1,naiveDimensions:w=C,stopInertiaOnNavigate:T=!1,respectReducedMotion:E=!0}={}){window.lenisVersion=Gd,window.lenis||(window.lenis={}),window.lenis.version=Gd,d===`horizontal`&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!e||e===document.documentElement)&&(e=window),typeof s==`number`&&typeof c!=`function`?c=af:typeof c==`function`&&typeof s!=`number`&&(s=1),this.options={wrapper:e,content:t,eventsTarget:n,smoothWheel:r,syncTouch:i,syncTouchLerp:a,touchInertiaExponent:o,duration:s,easing:c,lerp:l,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:p,wheelMultiplier:m,autoResize:h,prevent:g,virtualScroll:_,overscroll:v,autoRaf:y,anchors:b,autoToggle:x,allowNestedScroll:S,naiveDimensions:w,stopInertiaOnNavigate:T,respectReducedMotion:E},this.dimensions=new Qd(e,t,{autoResize:h}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.addEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener(`click`,this.onClick),this.options.wrapper.addEventListener(`pointerdown`,this.onPointerDown),this.virtualScroll=new rf(n,{touchMultiplier:p,wheelMultiplier:m}),this.virtualScroll.on(`scroll`,this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener(`transitionend`,this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener(`scroll`,this.onNativeScroll),this.options.wrapper.removeEventListener(`scrollend`,this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener(`pointerdown`,this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener(`click`,this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}onScrollEnd=e=>{e instanceof CustomEvent||(this.isScrolling===`smooth`||this.isScrolling===!1)&&e.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent(`scrollend`,{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let e=this.isHorizontal?`overflow-x`:`overflow-y`;return getComputedStyle(this.rootElement)[e]}checkOverflow(){[`hidden`,`clip`].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=e=>{e.propertyName?.includes(`overflow`)&&e.target===this.rootElement&&this.checkOverflow()};setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:`instant`}):this.options.wrapper.scrollTo({top:e,behavior:`instant`})}onClick=e=>{let t=e.composedPath().filter(e=>e instanceof HTMLAnchorElement&&e.href).map(e=>new URL(e.href)),n=new URL(window.location.href);if(this.options.anchors){let e=t.find(e=>n.host===e.host&&n.pathname===e.pathname&&e.hash);if(e){let t=typeof this.options.anchors==`object`&&this.options.anchors?this.options.anchors:void 0,n=decodeURIComponent(e.hash);this.scrollTo(n,t);return}}if(this.options.stopInertiaOnNavigate&&t.some(e=>n.host===e.host&&n.pathname!==e.pathname)){this.reset();return}};onPointerDown=e=>{e.button===1&&this.reset()};isTouchOnSelectionHandle(e){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let n=e.targetTouches[0]??e.changedTouches[0];if(!n)return!1;let r=t.getRangeAt(0).getClientRects();if(r.length===0)return!1;let i=r[0],a=r[r.length-1],o=Math.hypot(n.clientX-i.left,n.clientY-i.top)<=40,s=Math.hypot(n.clientX-a.right,n.clientY-a.bottom)<=40;return o||s}onVirtualScroll=e=>{if(typeof this.options.virtualScroll==`function`&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:n,event:r}=e;if(this.emitter.emit(`virtual-scroll`,{deltaX:t,deltaY:n,event:r}),r.ctrlKey||r.lenisStopPropagation)return;let i=r.type.includes(`touch`),a=r.type.includes(`wheel`);if(i&&this.isIos&&(r.type===`touchstart`&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type===`touchend`&&(this._isDraggingSelection=!1);return}this.isTouching=r.type===`touchstart`||r.type===`touchmove`;let o=t===0&&n===0;if(this.options.syncTouch&&i&&r.type===`touchstart`&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let s=this.options.gestureOrientation===`vertical`&&n===0||this.options.gestureOrientation===`horizontal`&&t===0;if(o||s)return;let c=r.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent,u=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`;if(c.find(e=>e instanceof HTMLElement&&(typeof l==`function`&&l?.(e)||e.hasAttribute?.(`data-lenis-prevent`)||u===`vertical`&&e.hasAttribute?.(`data-lenis-prevent-vertical`)||u===`horizontal`&&e.hasAttribute?.(`data-lenis-prevent-horizontal`)||i&&e.hasAttribute?.(`data-lenis-prevent-touch`)||a&&e.hasAttribute?.(`data-lenis-prevent-wheel`)||this.options.allowNestedScroll&&this.hasNestedScroll(e,{deltaX:t,deltaY:n}))))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&a)){this.isScrolling=`native`,this.animate.stop(),r.lenisStopPropagation=!0;return}let d=n;this.options.gestureOrientation===`both`?d=Math.abs(n)>Math.abs(t)?n:t:this.options.gestureOrientation===`horizontal`&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();let f=i&&this.options.syncTouch,p=i&&r.type===`touchend`;p&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit(`scroll`,this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling===`native`){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling=`native`),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty(`overflow`);return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty(`overflow`,`clip`);return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(e,{offset:t=0,immediate:n=!1,lock:r=!1,programmatic:i=!0,lerp:a=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:s=i?this.options.easing:void 0,onStart:c,onComplete:l,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?n=!0:(a=1,o=void 0,s=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=e,p=t;if(typeof f==`string`&&[`top`,`left`,`start`,`#`].includes(f))f=0;else if(typeof f==`string`&&[`bottom`,`right`,`end`].includes(f))f=this.limit;else{let e=null;if(typeof f==`string`?(e=f.startsWith(`#`)?document.getElementById(f.slice(1)):document.querySelector(f),e||(f===`#top`?f=0:console.warn(`Lenis: Target not found`,f))):f instanceof HTMLElement&&f?.nodeType&&(e=f),e){if(this.options.wrapper!==window){let e=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?e.left:e.top}let t=e.getBoundingClientRect(),n=getComputedStyle(e),r=this.isHorizontal?Number.parseFloat(n.scrollMarginLeft):Number.parseFloat(n.scrollMarginTop),i=getComputedStyle(this.rootElement),a=this.isHorizontal?Number.parseFloat(i.scrollPaddingLeft):Number.parseFloat(i.scrollPaddingTop);f=(this.isHorizontal?t.left:t.top)+this.animatedScroll-(Number.isNaN(r)?0:r)-(Number.isNaN(a)?0:a)}}if(typeof f==`number`){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let e=f-this.animatedScroll;e>this.limit/2?f-=this.limit:e<-this.limit/2&&(f+=this.limit)}}else f=Kd(0,f,this.limit);if(f===this.targetScroll){c?.(this),l?.(this);return}if(this.userData=d??{},n){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o==`number`&&typeof s!=`function`?s=af:typeof s==`function`&&typeof o!=`number`&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:s,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=`smooth`,c?.(this)},onUpdate:(e,t)=>{this.isScrolling=`smooth`,this.lastVelocity=this.velocity,this.velocity=e-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=e,this.setScroll(this.scroll),i&&(this.targetScroll=e),t||this.emit(),t&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(e,{deltaX:t,deltaY:n}){let r=Date.now();e._lenis||={};let i=e._lenis,a,o,s,c,l,u,d,f,p,m;if(r-(i.time??0)>2e3){i.time=Date.now();let t=window.getComputedStyle(e);if(i.computedStyle=t,a=[`auto`,`overlay`,`scroll`].includes(t.overflowX),o=[`auto`,`overlay`,`scroll`].includes(t.overflowY),l=[`auto`].includes(t.overscrollBehaviorX),u=[`auto`].includes(t.overscrollBehaviorY),i.hasOverflowX=a,i.hasOverflowY=o,!(a||o))return!1;d=e.scrollWidth,f=e.scrollHeight,p=e.clientWidth,m=e.clientHeight,s=d>p,c=f>m,i.isScrollableX=s,i.isScrollableY=c,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=m,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=u}else s=i.isScrollableX,c=i.isScrollableY,a=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,m=i.clientHeight,l=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(a&&s||o&&c))return!1;let h=Math.abs(t)>=Math.abs(n)?`horizontal`:`vertical`,g,_,v,y,b,x;if(h===`horizontal`)g=Math.round(e.scrollLeft),_=d-p,v=t,y=a,b=s,x=l;else if(h===`vertical`)g=Math.round(e.scrollTop),_=f-m,v=n,y=o,b=c,x=u;else return!1;return!x&&(g>=_||g<=0)||(v>0?g<_:g>0)&&y&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?`x`:`y`]}get isHorizontal(){return this.options.orientation===`horizontal`}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?Yd(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling===`smooth`}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let e=`lenis`;return this.options.autoToggle&&(e+=` lenis-autoToggle`),this.isStopped&&(e+=` lenis-stopped`),this.isLocked&&(e+=` lenis-locked`),this.isScrolling&&(e+=` lenis-scrolling`),this.isScrolling===`smooth`&&(e+=` lenis-smooth`),e}updateClassName(){this.cleanUpClassName(),this.className.split(` `).forEach(e=>{this.rootElement.classList.add(e)})}cleanUpClassName(){for(let e of Array.from(this.rootElement.classList))(e===`lenis`||e.startsWith(`lenis-`))&&this.rootElement.classList.remove(e)}},sf=1e3,cf=1001,lf=1002,uf=1003,df=1004,ff=1005,pf=1006,mf=1007,hf=1008,gf=1009,_f=1010,vf=1011,yf=1012,bf=1013,xf=1014,Sf=1015,Cf=1016,wf=1017,Tf=1018,Ef=1020,Df=35902,Of=35899,kf=1021,Af=1022,jf=1023,Mf=1026,Nf=1027,Pf=1028,Ff=1029,If=1030,Lf=1031,Rf=1033,zf=33776,Bf=33777,Vf=33778,Hf=33779,Uf=35840,Wf=35841,Gf=35842,Kf=35843,qf=36196,Jf=37492,Yf=37496,Xf=37488,Zf=37489,Qf=37490,$f=37491,ep=37808,tp=37809,np=37810,rp=37811,ip=37812,ap=37813,op=37814,sp=37815,cp=37816,lp=37817,up=37818,dp=37819,fp=37820,pp=37821,mp=36492,hp=36494,gp=36495,_p=36283,vp=36284,yp=36285,bp=36286,xp=2300,Sp=2301,Cp=2302,wp=2303,Tp=2400,Ep=2401,Dp=2402,Op=3200,kp=`srgb`,Ap=`srgb-linear`,jp=`linear`,Mp=`srgb`,Np=7680,Pp=35044,Fp=2e3;function Ip(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Lp(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Rp(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function zp(){let e=Rp(`canvas`);return e.style.display=`block`,e}var Bp={};function Vp(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Hp(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function Up(...e){e=Hp(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Wp(...e){e=Hp(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Gp(...e){let t=e.join(` `);t in Bp||(Bp[t]=!0,Up(...e))}function Kp(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var qp={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Jp=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Yp=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Xp=1234567,Zp=Math.PI/180,Qp=180/Math.PI;function $p(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Yp[e&255]+Yp[e>>8&255]+Yp[e>>16&255]+Yp[e>>24&255]+`-`+Yp[t&255]+Yp[t>>8&255]+`-`+Yp[t>>16&15|64]+Yp[t>>24&255]+`-`+Yp[n&63|128]+Yp[n>>8&255]+`-`+Yp[n>>16&255]+Yp[n>>24&255]+Yp[r&255]+Yp[r>>8&255]+Yp[r>>16&255]+Yp[r>>24&255]).toLowerCase()}function em(e,t,n){return Math.max(t,Math.min(n,e))}function tm(e,t){return(e%t+t)%t}function nm(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function rm(e,t,n){return e===t?0:(n-e)/(t-e)}function im(e,t,n){return(1-n)*e+n*t}function am(e,t,n,r){return im(e,t,1-Math.exp(-n*r))}function om(e,t=1){return t-Math.abs(tm(e,t*2)-t)}function sm(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function cm(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function lm(e,t){return e+Math.floor(Math.random()*(t-e+1))}function um(e,t){return e+Math.random()*(t-e)}function dm(e){return e*(.5-Math.random())}function fm(e){e!==void 0&&(Xp=e);let t=Xp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pm(e){return e*Zp}function mm(e){return e*Qp}function hm(e){return!(e&e-1)&&e!==0}function gm(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function _m(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function vm(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:Up(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function ym(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function bm(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var xm={DEG2RAD:Zp,RAD2DEG:Qp,generateUUID:$p,clamp:em,euclideanModulo:tm,mapLinear:nm,inverseLerp:rm,lerp:im,damp:am,pingpong:om,smoothstep:sm,smootherstep:cm,randInt:lm,randFloat:um,randFloatSpread:dm,seededRandom:fm,degToRad:pm,radToDeg:mm,isPowerOfTwo:hm,ceilPowerOfTwo:gm,floorPowerOfTwo:_m,setQuaternionFromProperEuler:vm,normalize:bm,denormalize:ym},X=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=em(this.x,e.x,t.x),this.y=em(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=em(this.x,e,t),this.y=em(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(em(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(em(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Sm=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:Up(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(em(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=em(this.x,e.x,t.x),this.y=em(this.y,e.y,t.y),this.z=em(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=em(this.x,e,t),this.y=em(this.y,e,t),this.z=em(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(em(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cm.copy(this).projectOnVector(e),this.sub(Cm)}reflect(e){return this.sub(Cm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(em(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Cm=new Z,wm=new Sm,Tm=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Gp(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Em.makeScale(e,t)),this}rotate(e){return Gp(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Em.makeRotation(-e)),this}translate(e,t){return Gp(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Em.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Em=new Tm,Dm=new Tm().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new Tm().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function km(){let e={enabled:!0,workingColorSpace:Ap,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=jm(e.r),e.g=jm(e.g),e.b=jm(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Mm(e.r),e.g=Mm(e.g),e.b=Mm(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?jp:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Gp(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Gp(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ap]:{primaries:t,whitePoint:r,transfer:jp,toXYZ:Dm,fromXYZ:Om,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kp},outputColorSpaceConfig:{drawingBufferColorSpace:kp}},[kp]:{primaries:t,whitePoint:r,transfer:Mp,toXYZ:Dm,fromXYZ:Om,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kp}}}),e}var Am=km();function jm(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Mm(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Nm,Pm=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nm===void 0&&(Nm=Rp(`canvas`)),Nm.width=e.width,Nm.height=e.height;let t=Nm.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Nm}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Rp(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=jm(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(jm(t[e]/255)*255):t[e]=jm(t[e]);return{data:t,width:e.width,height:e.height}}return Up(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Fm=0,Im=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fm++}),this.uuid=$p(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Lm(r[t].image)):e.push(Lm(r[t]))}else e=Lm(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Lm(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Pm.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Up(`Texture: Unable to serialize Texture.`),{})}var Rm=0,zm=new Z,Bm=class e extends Jp{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=cf,i=cf,a=pf,o=hf,s=jf,c=gf,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=$p(),this.name=``,this.source=new Im(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new X(0,0),this.repeat=new X(1,1),this.center=new X(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tm,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zm).x}get height(){return this.source.getSize(zm).y}get depth(){return this.source.getSize(zm).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Up(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Up(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sf:e.x-=Math.floor(e.x);break;case cf:e.x=e.x<0?0:1;break;case lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case sf:e.y-=Math.floor(e.y);break;case cf:e.y=e.y<0?0:1;break;case lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bm.DEFAULT_IMAGE=null,Bm.DEFAULT_MAPPING=300,Bm.DEFAULT_ANISOTROPY=1;var Vm=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=em(this.x,e.x,t.x),this.y=em(this.y,e.y,t.y),this.z=em(this.z,e.z,t.z),this.w=em(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=em(this.x,e,t),this.y=em(this.y,e,t),this.z=em(this.z,e,t),this.w=em(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(em(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hm=class extends Jp{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pf,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vm(0,0,e,t),this.scissorTest=!1,this.viewport=new Vm(0,0,e,t),this.textures=[];let r=new Bm({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:pf,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Im(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Um=class extends Hm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Wm=class extends Bm{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=uf,this.minFilter=uf,this.wrapR=cf,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Gm=class extends Bm{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=uf,this.minFilter=uf,this.wrapR=cf,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Km=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/qm.setFromMatrixColumn(e,0).length(),i=1/qm.setFromMatrixColumn(e,1).length(),a=1/qm.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ym,e,Xm)}lookAt(e,t,n){let r=this.elements;return $m.subVectors(e,t),$m.lengthSq()===0&&($m.z=1),$m.normalize(),Zm.crossVectors(n,$m),Zm.lengthSq()===0&&(Math.abs(n.z)===1?$m.x+=1e-4:$m.z+=1e-4,$m.normalize(),Zm.crossVectors(n,$m)),Zm.normalize(),Qm.crossVectors($m,Zm),r[0]=Zm.x,r[4]=Qm.x,r[8]=$m.x,r[1]=Zm.y,r[5]=Qm.y,r[9]=$m.y,r[2]=Zm.z,r[6]=Qm.z,r[10]=$m.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=qm.set(r[0],r[1],r[2]).length(),o=qm.set(r[4],r[5],r[6]).length(),s=qm.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Jm.copy(this);let c=1/a,l=1/o,u=1/s;return Jm.elements[0]*=c,Jm.elements[1]*=c,Jm.elements[2]*=c,Jm.elements[4]*=l,Jm.elements[5]*=l,Jm.elements[6]*=l,Jm.elements[8]*=u,Jm.elements[9]*=u,Jm.elements[10]*=u,t.setFromRotationMatrix(Jm),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Fp,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Fp,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},qm=new Z,Jm=new Km,Ym=new Z(0,0,0),Xm=new Z(1,1,1),Zm=new Z,Qm=new Z,$m=new Z,eh=new Km,th=new Sm,nh=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(em(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-em(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(em(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-em(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(em(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-em(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:Up(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nh.DEFAULT_ORDER=`XYZ`;var rh=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},ih=0,ah=new Z,oh=new Sm,sh=new Km,ch=new Z,lh=new Z,uh=new Z,dh=new Sm,fh=new Z(1,0,0),ph=new Z(0,1,0),mh=new Z(0,0,1),hh={type:`added`},gh={type:`removed`},_h={type:`childadded`,child:null},vh={type:`childremoved`,child:null},yh=class e extends Jp{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=$p(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Z,n=new nh,r=new Sm,i=new Z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Km},normalMatrix:{value:new Tm}}),this.matrix=new Km,this.matrixWorld=new Km,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oh.setFromAxisAngle(e,t),this.quaternion.multiply(oh),this}rotateOnWorldAxis(e,t){return oh.setFromAxisAngle(e,t),this.quaternion.premultiply(oh),this}rotateX(e){return this.rotateOnAxis(fh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return ah.copy(e).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sh.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ch.copy(e):ch.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),lh.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sh.lookAt(lh,ch,this.up):sh.lookAt(ch,lh,this.up),this.quaternion.setFromRotationMatrix(sh),r&&(sh.extractRotation(r.matrixWorld),oh.setFromRotationMatrix(sh),this.quaternion.premultiply(oh.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Wp(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hh),_h.child=e,this.dispatchEvent(_h),_h.child=null):Wp(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gh),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sh.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sh.multiply(e.parent.matrixWorld)),e.applyMatrix4(sh),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hh),_h.child=e,this.dispatchEvent(_h),_h.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lh,e,uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lh,dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};yh.DEFAULT_UP=new Z(0,1,0),yh.DEFAULT_MATRIX_AUTO_UPDATE=!0,yh.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var bh=class extends yh{constructor(){super(),this.isGroup=!0,this.type=`Group`}},xh={type:`move`},Sh=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bh,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bh,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bh,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xh)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new bh;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wh={h:0,s:0,l:0},Th={h:0,s:0,l:0};function Eh(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Dh=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kp){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Am.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Am.workingColorSpace){return this.r=e,this.g=t,this.b=n,Am.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Am.workingColorSpace){if(e=tm(e,1),t=em(t,0,1),n=em(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Eh(i,r,e+1/3),this.g=Eh(i,r,e),this.b=Eh(i,r,e-1/3)}return Am.colorSpaceToWorking(this,r),this}setStyle(e,t=kp){function n(t){t!==void 0&&parseFloat(t)<1&&Up(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:Up(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);Up(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kp){let n=Ch[e.toLowerCase()];return n===void 0?Up(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jm(e.r),this.g=jm(e.g),this.b=jm(e.b),this}copyLinearToSRGB(e){return this.r=Mm(e.r),this.g=Mm(e.g),this.b=Mm(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kp){return Am.workingToColorSpace(Oh.copy(this),e),Math.round(em(Oh.r*255,0,255))*65536+Math.round(em(Oh.g*255,0,255))*256+Math.round(em(Oh.b*255,0,255))}getHexString(e=kp){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Am.workingColorSpace){Am.workingToColorSpace(Oh.copy(this),t);let n=Oh.r,r=Oh.g,i=Oh.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Am.workingColorSpace){return Am.workingToColorSpace(Oh.copy(this),t),e.r=Oh.r,e.g=Oh.g,e.b=Oh.b,e}getStyle(e=kp){Am.workingToColorSpace(Oh.copy(this),e);let t=Oh.r,n=Oh.g,r=Oh.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(wh),this.setHSL(wh.h+e,wh.s+t,wh.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wh),e.getHSL(Th);let n=im(wh.h,Th.h,t),r=im(wh.s,Th.s,t),i=im(wh.l,Th.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oh=new Dh;Dh.NAMES=Ch;var kh=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new Dh(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ah=class extends yh{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nh,this.environmentIntensity=1,this.environmentRotation=new nh,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},jh=new Z,Mh=new Z,Nh=new Z,Ph=new Z,Fh=new Z,Ih=new Z,Lh=new Z,Rh=new Z,zh=new Z,Bh=new Z,Vh=new Vm,Hh=new Vm,Uh=new Vm,Wh=class e{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),jh.subVectors(e,t),r.cross(jh);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){jh.subVectors(r,t),Mh.subVectors(n,t),Nh.subVectors(e,t);let a=jh.dot(jh),o=jh.dot(Mh),s=jh.dot(Nh),c=Mh.dot(Mh),l=Mh.dot(Nh),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ph)!==null&&Ph.x>=0&&Ph.y>=0&&Ph.x+Ph.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ph)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ph.x),s.addScaledVector(a,Ph.y),s.addScaledVector(o,Ph.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Vh.setScalar(0),Hh.setScalar(0),Uh.setScalar(0),Vh.fromBufferAttribute(e,t),Hh.fromBufferAttribute(e,n),Uh.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vh,i.x),a.addScaledVector(Hh,i.y),a.addScaledVector(Uh,i.z),a}static isFrontFacing(e,t,n,r){return jh.subVectors(n,t),Mh.subVectors(e,t),jh.cross(Mh).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jh.subVectors(this.c,this.b),Mh.subVectors(this.a,this.b),jh.cross(Mh).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Fh.subVectors(r,n),Ih.subVectors(i,n),Rh.subVectors(e,n);let s=Fh.dot(Rh),c=Ih.dot(Rh);if(s<=0&&c<=0)return t.copy(n);zh.subVectors(e,r);let l=Fh.dot(zh),u=Ih.dot(zh);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Fh,a);Bh.subVectors(e,i);let f=Fh.dot(Bh),p=Ih.dot(Bh);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ih,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Lh.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Lh,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Fh,a).addScaledVector(Ih,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gh=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qh.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qh.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,qh):qh.fromBufferAttribute(r,t),qh.applyMatrix4(e.matrixWorld),this.expandByPoint(qh);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Jh.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Jh.copy(e.boundingBox)),Jh.applyMatrix4(e.matrixWorld),this.union(Jh)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qh),qh.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tg),ng.subVectors(this.max,tg),Yh.subVectors(e.a,tg),Xh.subVectors(e.b,tg),Zh.subVectors(e.c,tg),Qh.subVectors(Xh,Yh),$h.subVectors(Zh,Xh),eg.subVectors(Yh,Zh);let t=[0,-Qh.z,Qh.y,0,-$h.z,$h.y,0,-eg.z,eg.y,Qh.z,0,-Qh.x,$h.z,0,-$h.x,eg.z,0,-eg.x,-Qh.y,Qh.x,0,-$h.y,$h.x,0,-eg.y,eg.x,0];return!ag(t,Yh,Xh,Zh,ng)||(t=[1,0,0,0,1,0,0,0,1],!ag(t,Yh,Xh,Zh,ng))?!1:(rg.crossVectors(Qh,$h),t=[rg.x,rg.y,rg.z],ag(t,Yh,Xh,Zh,ng))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qh).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qh).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kh[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kh[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kh[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kh[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kh[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kh[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kh[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kh[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kh),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Kh=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],qh=new Z,Jh=new Gh,Yh=new Z,Xh=new Z,Zh=new Z,Qh=new Z,$h=new Z,eg=new Z,tg=new Z,ng=new Z,rg=new Z,ig=new Z;function ag(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ig.fromArray(e,a);let o=i.x*Math.abs(ig.x)+i.y*Math.abs(ig.y)+i.z*Math.abs(ig.z),s=t.dot(ig),c=n.dot(ig),l=r.dot(ig);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var og=new Z,sg=new X,cg=0,lg=class extends Jp{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cg++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Pp,this.updateRanges=[],this.gpuType=Sf,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sg.fromBufferAttribute(this,t),sg.applyMatrix3(e),this.setXY(t,sg.x,sg.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)og.fromBufferAttribute(this,t),og.applyMatrix3(e),this.setXYZ(t,og.x,og.y,og.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)og.fromBufferAttribute(this,t),og.applyMatrix4(e),this.setXYZ(t,og.x,og.y,og.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)og.fromBufferAttribute(this,t),og.applyNormalMatrix(e),this.setXYZ(t,og.x,og.y,og.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)og.fromBufferAttribute(this,t),og.transformDirection(e),this.setXYZ(t,og.x,og.y,og.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ym(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bm(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ym(t,this.array)),t}setX(e,t){return this.normalized&&(t=bm(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ym(t,this.array)),t}setY(e,t){return this.normalized&&(t=bm(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ym(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bm(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ym(t,this.array)),t}setW(e,t){return this.normalized&&(t=bm(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bm(t,this.array),n=bm(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bm(t,this.array),n=bm(n,this.array),r=bm(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=bm(t,this.array),n=bm(n,this.array),r=bm(r,this.array),i=bm(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},ug=class extends lg{constructor(e,t,n){super(new Uint16Array(e),t,n)}},dg=class extends lg{constructor(e,t,n){super(new Uint32Array(e),t,n)}},fg=class extends lg{constructor(e,t,n){super(new Float32Array(e),t,n)}},pg=new Gh,mg=new Z,hg=new Z,gg=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?pg.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mg.subVectors(e,this.center);let t=mg.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(mg,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mg.copy(e.center).add(hg)),this.expandByPoint(mg.copy(e.center).sub(hg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},_g=0,vg=new Km,yg=new yh,bg=new Z,xg=new Gh,Sg=new Gh,Cg=new Z,wg=class e extends Jp{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=$p(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ip(e)?dg:ug)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Tm().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vg.makeRotationFromQuaternion(e),this.applyMatrix4(vg),this}rotateX(e){return vg.makeRotationX(e),this.applyMatrix4(vg),this}rotateY(e){return vg.makeRotationY(e),this.applyMatrix4(vg),this}rotateZ(e){return vg.makeRotationZ(e),this.applyMatrix4(vg),this}translate(e,t,n){return vg.makeTranslation(e,t,n),this.applyMatrix4(vg),this}scale(e,t,n){return vg.makeScale(e,t,n),this.applyMatrix4(vg),this}lookAt(e){return yg.lookAt(e),yg.updateMatrix(),this.applyMatrix4(yg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bg).negate(),this.translate(bg.x,bg.y,bg.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new fg(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&Up(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gh);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wp(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];xg.setFromBufferAttribute(n),this.morphTargetsRelative?(Cg.addVectors(this.boundingBox.min,xg.min),this.boundingBox.expandByPoint(Cg),Cg.addVectors(this.boundingBox.max,xg.max),this.boundingBox.expandByPoint(Cg)):(this.boundingBox.expandByPoint(xg.min),this.boundingBox.expandByPoint(xg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wp(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gg);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wp(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(xg.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Sg.setFromBufferAttribute(n),this.morphTargetsRelative?(Cg.addVectors(xg.min,Sg.min),xg.expandByPoint(Cg),Cg.addVectors(xg.max,Sg.max),xg.expandByPoint(Cg)):(xg.expandByPoint(Sg.min),xg.expandByPoint(Sg.max))}xg.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Cg.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Cg));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Cg.fromBufferAttribute(a,t),o&&(bg.fromBufferAttribute(e,t),Cg.add(bg)),r=Math.max(r,n.distanceToSquared(Cg))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Wp(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Wp(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new lg(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Z,s[e]=new Z;let c=new Z,l=new Z,u=new Z,d=new X,f=new X,p=new X,m=new Z,h=new Z;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Z,y=new Z,b=new Z,x=new Z;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new lg(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Z,i=new Z,a=new Z,o=new Z,s=new Z,c=new Z,l=new Z,u=new Z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cg.fromBufferAttribute(e,t),Cg.normalize(),e.setXYZ(t,Cg.x,Cg.y,Cg.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new lg(a,r,i)}if(this.index===null)return Up(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Tg=0,Eg=class extends Jp{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=$p(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dh(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Np,this.stencilZFail=Np,this.stencilZPass=Np,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Up(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Up(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Dh().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new X().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new X().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Dg=new Z,Og=new Z,kg=new Z,Ag=new Z,jg=new Z,Mg=new Z,Ng=new Z,Pg=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dg)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Dg.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dg.copy(this.origin).addScaledVector(this.direction,t),Dg.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Og.copy(e).add(t).multiplyScalar(.5),kg.copy(t).sub(e).normalize(),Ag.copy(this.origin).sub(Og);let i=e.distanceTo(t)*.5,a=-this.direction.dot(kg),o=Ag.dot(this.direction),s=-Ag.dot(kg),c=Ag.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Og).addScaledVector(kg,d),f}intersectSphere(e,t){Dg.subVectors(e.center,this.origin);let n=Dg.dot(this.direction),r=Dg.dot(Dg)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Dg)!==null}intersectTriangle(e,t,n,r,i){jg.subVectors(t,e),Mg.subVectors(n,e),Ng.crossVectors(jg,Mg);let a=this.direction.dot(Ng),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ag.subVectors(this.origin,e);let s=o*this.direction.dot(Mg.crossVectors(Ag,Mg));if(s<0)return null;let c=o*this.direction.dot(jg.cross(Ag));if(c<0||s+c>a)return null;let l=-o*Ag.dot(Ng);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fg=class extends Eg{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Dh(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nh,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ig=new Km,Lg=new Pg,Rg=new gg,zg=new Z,Bg=new Z,Vg=new Z,Hg=new Z,Ug=new Z,Wg=new Z,Gg=new Z,Kg=new Z,qg=class extends yh{constructor(e=new wg,t=new Fg){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Wg.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ug.fromBufferAttribute(s,e),a?Wg.addScaledVector(Ug,r):Wg.addScaledVector(Ug.sub(t),r))}t.add(Wg)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rg.copy(n.boundingSphere),Rg.applyMatrix4(i),Lg.copy(e.ray).recast(e.near),!(Rg.containsPoint(Lg.origin)===!1&&(Lg.intersectSphere(Rg,zg)===null||Lg.origin.distanceToSquared(zg)>(e.far-e.near)**2))&&(Ig.copy(i).invert(),Lg.copy(e.ray).applyMatrix4(Ig),(n.boundingBox===null||Lg.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Lg)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Yg(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Yg(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Yg(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Yg(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Jg(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Kg.copy(s),Kg.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Kg);return l<n.near||l>n.far?null:{distance:l,point:Kg.clone(),object:e}}function Yg(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Bg),e.getVertexPosition(c,Vg),e.getVertexPosition(l,Hg);let u=Jg(e,t,n,r,Bg,Vg,Hg,Gg);if(u){let e=new Z;Wh.getBarycoord(Gg,Bg,Vg,Hg,e),i&&(u.uv=Wh.getInterpolatedAttribute(i,s,c,l,e,new X)),a&&(u.uv1=Wh.getInterpolatedAttribute(a,s,c,l,e,new X)),o&&(u.normal=Wh.getInterpolatedAttribute(o,s,c,l,e,new Z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Z,materialIndex:0};Wh.getNormal(Bg,Vg,Hg,t.normal),u.face=t,u.barycoord=e}return u}var Xg=class extends Bm{constructor(e=null,t=1,n=1,r,i,a,o,s,c=uf,l=uf,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Zg=new Z,Qg=new Z,$g=new Tm,e_=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Zg.subVectors(n,t).cross(Qg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Zg),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$g.getNormalMatrix(e),r=this.coplanarPoint(Zg).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},t_=new gg,n_=new X(.5,.5),r_=new Z,i_=class{constructor(e=new e_,t=new e_,n=new e_,r=new e_,i=new e_,a=new e_){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fp,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),t_.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),t_.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(t_)}intersectsSprite(e){return t_.center.set(0,0,0),t_.radius=.7071067811865476+n_.distanceTo(e.center),t_.applyMatrix4(e.matrixWorld),this.intersectsSphere(t_)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(r_.x=r.normal.x>0?e.max.x:e.min.x,r_.y=r.normal.y>0?e.max.y:e.min.y,r_.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(r_)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},a_=class extends Bm{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},o_=class extends Bm{constructor(e,t,n=xf,r,i,a,o=uf,s=uf,c,l=Mf,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Im(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},s_=class extends o_{constructor(e,t=xf,n=301,r,i,a=uf,o=uf,s,c=Mf){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},c_=class extends Bm{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},l_=class e extends wg{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new fg(c,3)),this.setAttribute(`normal`,new fg(l,3)),this.setAttribute(`uv`,new fg(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},u_=class e extends wg{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new fg(u,3)),this.setAttribute(`normal`,new fg(d,3)),this.setAttribute(`uv`,new fg(f,2));function _(){let a=new Z,_=new Z,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new X,m=new Z,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},d_=class e extends u_{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},f_=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Up(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new X:new Z);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Z,r=[],i=[],a=[],o=new Z,s=new Km;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new Z)}i[0]=new Z,a[0]=new Z;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(em(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(em(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},p_=class extends f_{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new X){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},m_=class extends p_{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function h_(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var g_=new Z,__=new Z,v_=new h_,y_=new h_,b_=new h_,x_=class extends f_{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new Z){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(__.subVectors(r[0],r[1]).add(r[0]),c=__);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(g_.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=g_),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),v_.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),y_.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),b_.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(v_.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),y_.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),b_.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(v_.calc(s),y_.calc(s),b_.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new Z().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function S_(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function C_(e,t){let n=1-e;return n*n*t}function w_(e,t){return 2*(1-e)*e*t}function T_(e,t){return e*e*t}function E_(e,t,n,r){return C_(e,t)+w_(e,n)+T_(e,r)}function D_(e,t){let n=1-e;return n*n*n*t}function O_(e,t){let n=1-e;return 3*n*n*e*t}function k_(e,t){return 3*(1-e)*e*e*t}function A_(e,t){return e*e*e*t}function j_(e,t,n,r,i){return D_(e,t)+O_(e,n)+k_(e,r)+A_(e,i)}var M_=class extends f_{constructor(e=new X,t=new X,n=new X,r=new X){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new X){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(j_(e,r.x,i.x,a.x,o.x),j_(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},N_=class extends f_{constructor(e=new Z,t=new Z,n=new Z,r=new Z){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(j_(e,r.x,i.x,a.x,o.x),j_(e,r.y,i.y,a.y,o.y),j_(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},P_=class extends f_{constructor(e=new X,t=new X){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new X){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},F_=class extends f_{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new Z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},I_=class extends f_{constructor(e=new X,t=new X,n=new X){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new X){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(E_(e,r.x,i.x,a.x),E_(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},L_=class extends f_{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(E_(e,r.x,i.x,a.x),E_(e,r.y,i.y,a.y),E_(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},R_=class extends f_{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new X){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(S_(o,s.x,c.x,l.x,u.x),S_(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new X().fromArray(n))}return this}},z_=Object.freeze({__proto__:null,ArcCurve:m_,CatmullRomCurve3:x_,CubicBezierCurve:M_,CubicBezierCurve3:N_,EllipseCurve:p_,LineCurve:P_,LineCurve3:F_,QuadraticBezierCurve:I_,QuadraticBezierCurve3:L_,SplineCurve:R_}),B_=class extends f_{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new z_[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new z_[n.type]().fromJSON(n))}return this}},V_=class extends B_{constructor(e){super(),this.type=`Path`,this.currentPoint=new X,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new P_(this.currentPoint.clone(),new X(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new I_(this.currentPoint.clone(),new X(e,t),new X(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new M_(this.currentPoint.clone(),new X(e,t),new X(n,r),new X(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new R_([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new p_(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},H_=class extends V_{constructor(e){super(e),this.uuid=$p(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new V_().fromJSON(n))}return this}};function U_(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=W_(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Z_(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return K_(a,o,n,s,c,l,0),o}function W_(e,t,n,r,i){let a;if(i===xv(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=vv(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=vv(i/r|0,e[i],e[i+1],a);return a&&uv(a,a.next)&&(yv(a),a=a.next),a}function G_(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(uv(n,n.next)||lv(n.prev,n,n.next)===0)){if(yv(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function K_(e,t,n,r,i,a,o){if(!e)return;!o&&a&&nv(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?J_(e,r,i,a):q_(e)){t.push(c.i,e.i,l.i),yv(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Y_(G_(e),t),K_(e,t,n,r,i,a,2)):o===2&&X_(e,t,n,r,i,a):K_(G_(e),t,n,r,i,a,1);break}}}function q_(e){let t=e.prev,n=e,r=e.next;if(lv(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&sv(i,s,a,c,o,l,m.x,m.y)&&lv(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function J_(e,t,n,r){let i=e.prev,a=e,o=e.next;if(lv(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=iv(p,m,t,n,r),v=iv(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&sv(s,u,c,d,l,f,y.x,y.y)&&lv(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&sv(s,u,c,d,l,f,b.x,b.y)&&lv(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&sv(s,u,c,d,l,f,y.x,y.y)&&lv(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&sv(s,u,c,d,l,f,b.x,b.y)&&lv(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Y_(e,t){let n=e;do{let r=n.prev,i=n.next.next;!uv(r,i)&&dv(r,n,n.next,i)&&hv(r,i)&&hv(i,r)&&(t.push(r.i,n.i,i.i),yv(n),yv(n.next),n=e=i),n=n.next}while(n!==e);return G_(n)}function X_(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&cv(o,e)){let s=_v(o,e);o=G_(o,o.next),s=G_(s,s.next),K_(o,t,n,r,i,a,0),K_(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Z_(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=W_(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(av(o))}i.sort(Q_);for(let e=0;e<i.length;e++)n=$_(i[e],n);return n}function Q_(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function $_(e,t){let n=ev(e,t);if(!n)return t;let r=_v(n,e);return G_(r,r.next),G_(n,n.next)}function ev(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(uv(e,n))return n;do{if(uv(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ov(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);hv(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&tv(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function tv(e,t){return lv(e.prev,e,t.prev)<0&&lv(t.next,e,e.next)<0}function nv(e,t,n,r){let i=e;do i.z===0&&(i.z=iv(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,rv(i)}function rv(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function iv(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function av(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ov(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function sv(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ov(e,t,n,r,i,a,o,s)}function cv(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!mv(e,t)&&(hv(e,t)&&hv(t,e)&&gv(e,t)&&(lv(e.prev,e,t.prev)||lv(e,t.prev,t))||uv(e,t)&&lv(e.prev,e,e.next)>0&&lv(t.prev,t,t.next)>0)}function lv(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function uv(e,t){return e.x===t.x&&e.y===t.y}function dv(e,t,n,r){let i=pv(lv(e,t,n)),a=pv(lv(e,t,r)),o=pv(lv(n,r,e)),s=pv(lv(n,r,t));return!!(i!==a&&o!==s||i===0&&fv(e,n,t)||a===0&&fv(e,r,t)||o===0&&fv(n,e,r)||s===0&&fv(n,t,r))}function fv(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function pv(e){return e>0?1:e<0?-1:0}function mv(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&dv(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function hv(e,t){return lv(e.prev,e,e.next)<0?lv(e,t,e.next)>=0&&lv(e,e.prev,t)>=0:lv(e,t,e.prev)<0||lv(e,e.next,t)<0}function gv(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function _v(e,t){let n=bv(e.i,e.x,e.y),r=bv(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function vv(e,t,n,r){let i=bv(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function yv(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function bv(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xv(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Sv=class{static triangulate(e,t,n=2){return U_(e,t,n)}},Cv=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];wv(e),Tv(n,e);let a=e.length;t.forEach(wv);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Tv(n,t[e]);let o=Sv.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function wv(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Tv(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ev=class e extends wg{constructor(e=new H_([new X(.5,.5),new X(-.5,.5),new X(-.5,-.5),new X(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new fg(r,3)),this.setAttribute(`uv`,new fg(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Dv:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new Z,b=new Z,x=new Z}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Cv.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Cv.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||Wp(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new X(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new X(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=Cv.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);R(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);R(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=Cv.triangulateShape(e,t)}let I=F.length,L=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],L):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),R(x.x,x.y,x.z)):R(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],L):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),R(x.x,x.y,x.z)):R(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);R(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?R(i.x,i.y+g[s-1].y,g[s-1].x+n):R(i.x,i.y,c+n)}}}ee(),te();function ee(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<I;e++){let n=F[e];re(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<I;e++){let n=F[e];re(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<I;e++){let t=F[e];re(t[2],t[1],t[0])}for(let e=0;e<I;e++){let t=F[e];re(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function te(){let e=r.length/3,t=0;ne(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ne(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ne(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);z(t+r+n,t+i+n,t+i+a,t+r+a)}}}function R(e,t,n){a.push(e),a.push(t),a.push(n)}function re(e,t,i){ie(e),ie(t),ie(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ae(o[0]),ae(o[1]),ae(o[2])}function z(e,t,i,a){ie(e),ie(t),ie(a),ie(t),ie(i),ie(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ae(s[0]),ae(s[1]),ae(s[3]),ae(s[1]),ae(s[2]),ae(s[3])}function ie(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ae(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ov(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new z_[i.type]().fromJSON(i)),new e(r,t.options)}},Dv={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new X(a,o),new X(s,c),new X(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new X(o,1-c),new X(l,1-d),new X(f,1-m),new X(h,1-_)]:[new X(s,1-c),new X(u,1-d),new X(p,1-m),new X(g,1-_)]}};function Ov(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var kv=class e extends wg{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new fg(p,3)),this.setAttribute(`normal`,new fg(m,3)),this.setAttribute(`uv`,new fg(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Av=class e extends wg{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new Z,p=new X;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new fg(s,3)),this.setAttribute(`normal`,new fg(c,3)),this.setAttribute(`uv`,new fg(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},jv=class e extends wg{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new Z,d=new Z,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new fg(p,3)),this.setAttribute(`normal`,new fg(m,3)),this.setAttribute(`uv`,new fg(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Mv(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Pv(i))i.isRenderTargetTexture?(Up(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Pv(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Nv(e){let t={};for(let n=0;n<e.length;n++){let r=Mv(e[n]);for(let e in r)t[e]=r[e]}return t}function Pv(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Fv(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Iv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Am.workingColorSpace}var Lv={clone:Mv,merge:Nv},Rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bv=class extends Eg{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rv,this.fragmentShader=zv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mv(e.uniforms),this.uniformsGroups=Fv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Dh().setHex(r.value);break;case`v2`:this.uniforms[n].value=new X().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new Z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Vm().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Tm().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Km().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vv=class extends Bv{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Hv=class extends Eg{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Dh(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dh(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new X(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nh,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Uv=class extends Hv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new X(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return em(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dh(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dh(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dh(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Wv=class extends Eg{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Op,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gv=class extends Eg{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Kv(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var qv=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Jv=class extends qv{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tp,endingEnd:Tp}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ep:i=e,o=2*t-n;break;case Dp:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ep:a=e,s=2*n-t;break;case Dp:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Yv=class extends qv{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Xv=class extends qv{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zv=class extends qv{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Qv=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Kv(t,this.TimeBufferType),this.values=Kv(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Kv(e.times,Array),values:Kv(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zv(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case xp:t=this.InterpolantFactoryMethodDiscrete;break;case Sp:t=this.InterpolantFactoryMethodLinear;break;case Cp:t=this.InterpolantFactoryMethodSmooth;break;case wp:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return Up(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xp;case this.InterpolantFactoryMethodLinear:return Sp;case this.InterpolantFactoryMethodSmooth:return Cp;case this.InterpolantFactoryMethodBezier:return wp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Wp(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Wp(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Wp(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Wp(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Lp(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Wp(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Cp,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Qv.prototype.ValueTypeName=``,Qv.prototype.TimeBufferType=Float32Array,Qv.prototype.ValueBufferType=Float32Array,Qv.prototype.DefaultInterpolation=Sp;var $v=class extends Qv{constructor(e,t,n){super(e,t,n)}};$v.prototype.ValueTypeName=`bool`,$v.prototype.ValueBufferType=Array,$v.prototype.DefaultInterpolation=xp,$v.prototype.InterpolantFactoryMethodLinear=void 0,$v.prototype.InterpolantFactoryMethodSmooth=void 0;var ey=class extends Qv{constructor(e,t,n,r){super(e,t,n,r)}};ey.prototype.ValueTypeName=`color`;var ty=class extends Qv{constructor(e,t,n,r){super(e,t,n,r)}};ty.prototype.ValueTypeName=`number`;var ny=class extends qv{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Sm.slerpFlat(i,0,a,c-o,a,c,s);return i}},ry=class extends Qv{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ny(this.times,this.values,this.getValueSize(),e)}};ry.prototype.ValueTypeName=`quaternion`,ry.prototype.InterpolantFactoryMethodSmooth=void 0;var iy=class extends Qv{constructor(e,t,n){super(e,t,n)}};iy.prototype.ValueTypeName=`string`,iy.prototype.ValueBufferType=Array,iy.prototype.DefaultInterpolation=xp,iy.prototype.InterpolantFactoryMethodLinear=void 0,iy.prototype.InterpolantFactoryMethodSmooth=void 0;var ay=class extends Qv{constructor(e,t,n,r){super(e,t,n,r)}};ay.prototype.ValueTypeName=`vector`;var oy=class extends yh{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Dh(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},sy=class extends oy{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(yh.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dh(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},cy=new Km,ly=new Z,uy=new Z,dy=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new X(512,512),this.mapType=gf,this.map=null,this.mapPass=null,this.matrix=new Km,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new i_,this._frameExtents=new X(1,1),this._viewportCount=1,this._viewports=[new Vm(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ly.setFromMatrixPosition(e.matrixWorld),t.position.copy(ly),uy.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uy),t.updateMatrixWorld(),cy.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cy,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cy)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fy=new Z,py=new Sm,my=new Z,hy=class extends yh{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Km,this.projectionMatrix=new Km,this.projectionMatrixInverse=new Km,this.coordinateSystem=Fp,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fy,py,my),my.x===1&&my.y===1&&my.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fy,py,my.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fy,py,my),my.x===1&&my.y===1&&my.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fy,py,my.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},gy=new Z,_y=new X,vy=new X,yy=class extends hy{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qp*2*Math.atan(Math.tan(Zp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gy.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gy.x,gy.y).multiplyScalar(-e/gy.z),gy.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gy.x,gy.y).multiplyScalar(-e/gy.z)}getViewSize(e,t){return this.getViewBounds(e,_y,vy),t.subVectors(vy,_y)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zp*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},by=class extends dy{constructor(){super(new yy(90,1,.5,500)),this.isPointLightShadow=!0}},xy=class extends oy{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new by}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Sy=class extends hy{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Cy=class extends dy{constructor(){super(new Sy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wy=class extends oy{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(yh.DEFAULT_UP),this.updateMatrix(),this.target=new yh,this.shadow=new Cy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ty=-90,Ey=1,Dy=class extends yh{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yy(Ty,Ey,e,t);r.layers=this.layers,this.add(r);let i=new yy(Ty,Ey,e,t);i.layers=this.layers,this.add(i);let a=new yy(Ty,Ey,e,t);a.layers=this.layers,this.add(a);let o=new yy(Ty,Ey,e,t);o.layers=this.layers,this.add(o);let s=new yy(Ty,Ey,e,t);s.layers=this.layers,this.add(s);let c=new yy(Ty,Ey,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Oy=class extends yy{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ky=`\\[\\]\\.:\\/`,Ay=RegExp(`[\\[\\]\\.:\\/]`,`g`),jy=`[^\\[\\]\\.:\\/]`,My=`[^`+ky.replace(`\\.`,``)+`]`,Ny=`((?:WC+[\\/:])*)`.replace(`WC`,jy),Py=`(WCOD+)?`.replace(`WCOD`,My),Fy=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,jy),Iy=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,jy),Ly=RegExp(`^`+Ny+Py+Fy+Iy+`$`),Ry=[`material`,`materials`,`bones`,`map`],zy=class{constructor(e,t,n){let r=n||By.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},By=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ay,``)}static parseTrackName(e){let t=Ly.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ry.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Up(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Wp(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Wp(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Wp(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Wp(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Wp(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Wp(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Wp(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Wp(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Wp(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Wp(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};By.Composite=zy,By.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},By.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},By.prototype.GetterByBindingType=[By.prototype._getValue_direct,By.prototype._getValue_array,By.prototype._getValue_arrayElement,By.prototype._getValue_toArray],By.prototype.SetterByBindingTypeAndVersioning=[[By.prototype._setValue_direct,By.prototype._setValue_direct_setNeedsUpdate,By.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[By.prototype._setValue_array,By.prototype._setValue_array_setNeedsUpdate,By.prototype._setValue_array_setMatrixWorldNeedsUpdate],[By.prototype._setValue_arrayElement,By.prototype._setValue_arrayElement_setNeedsUpdate,By.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[By.prototype._setValue_fromArray,By.prototype._setValue_fromArray_setNeedsUpdate,By.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Vy(e,t,n,r){let i=Hy(r);switch(n){case kf:return e*t;case Pf:return e*t/i.components*i.byteLength;case Ff:return e*t/i.components*i.byteLength;case If:return e*t*2/i.components*i.byteLength;case Lf:return e*t*2/i.components*i.byteLength;case Af:return e*t*3/i.components*i.byteLength;case jf:return e*t*4/i.components*i.byteLength;case Rf:return e*t*4/i.components*i.byteLength;case zf:case Bf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Vf:case Hf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Wf:case Kf:return Math.max(e,16)*Math.max(t,8)/4;case Uf:case Gf:return Math.max(e,8)*Math.max(t,8)/2;case qf:case Jf:case Xf:case Zf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Yf:case Qf:case $f:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ep:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case tp:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case np:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case rp:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ip:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ap:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case op:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case sp:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case cp:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case lp:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case up:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case dp:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case fp:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case pp:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case mp:case hp:case gp:return Math.ceil(e/4)*Math.ceil(t/4)*16;case _p:case vp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case yp:case bp:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Hy(e){switch(e){case gf:case _f:return{byteLength:1,components:1};case yf:case vf:case Cf:return{byteLength:2,components:1};case wf:case Tf:return{byteLength:2,components:4};case xf:case bf:case Sf:return{byteLength:4,components:1};case Df:case Of:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?Up(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function Uy(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Wy(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Gy={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new Dh(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tm},alphaMap:{value:null},alphaMapTransform:{value:new Tm},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tm}},envmap:{envMap:{value:null},envMapRotation:{value:new Tm},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tm}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tm}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tm},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tm},normalScale:{value:new X(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tm},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tm}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tm}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tm}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dh(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Dh(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tm},alphaTest:{value:0},uvTransform:{value:new Tm}},sprite:{diffuse:{value:new Dh(16777215)},opacity:{value:1},center:{value:new X(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tm},alphaMap:{value:null},alphaMapTransform:{value:new Tm},alphaTest:{value:0}}},Ky={basic:{uniforms:Nv([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Gy.meshbasic_vert,fragmentShader:Gy.meshbasic_frag},lambert:{uniforms:Nv([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Dh(0)},envMapIntensity:{value:1}}]),vertexShader:Gy.meshlambert_vert,fragmentShader:Gy.meshlambert_frag},phong:{uniforms:Nv([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Dh(0)},specular:{value:new Dh(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gy.meshphong_vert,fragmentShader:Gy.meshphong_frag},standard:{uniforms:Nv([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new Dh(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gy.meshphysical_vert,fragmentShader:Gy.meshphysical_frag},toon:{uniforms:Nv([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new Dh(0)}}]),vertexShader:Gy.meshtoon_vert,fragmentShader:Gy.meshtoon_frag},matcap:{uniforms:Nv([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Gy.meshmatcap_vert,fragmentShader:Gy.meshmatcap_frag},points:{uniforms:Nv([Q.points,Q.fog]),vertexShader:Gy.points_vert,fragmentShader:Gy.points_frag},dashed:{uniforms:Nv([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gy.linedashed_vert,fragmentShader:Gy.linedashed_frag},depth:{uniforms:Nv([Q.common,Q.displacementmap]),vertexShader:Gy.depth_vert,fragmentShader:Gy.depth_frag},normal:{uniforms:Nv([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Gy.meshnormal_vert,fragmentShader:Gy.meshnormal_frag},sprite:{uniforms:Nv([Q.sprite,Q.fog]),vertexShader:Gy.sprite_vert,fragmentShader:Gy.sprite_frag},background:{uniforms:{uvTransform:{value:new Tm},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gy.background_vert,fragmentShader:Gy.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tm}},vertexShader:Gy.backgroundCube_vert,fragmentShader:Gy.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gy.cube_vert,fragmentShader:Gy.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gy.equirect_vert,fragmentShader:Gy.equirect_frag},distance:{uniforms:Nv([Q.common,Q.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gy.distance_vert,fragmentShader:Gy.distance_frag},shadow:{uniforms:Nv([Q.lights,Q.fog,{color:{value:new Dh(0)},opacity:{value:1}}]),vertexShader:Gy.shadow_vert,fragmentShader:Gy.shadow_frag}};Ky.physical={uniforms:Nv([Ky.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tm},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tm},clearcoatNormalScale:{value:new X(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tm},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tm},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tm},sheen:{value:0},sheenColor:{value:new Dh(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tm},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tm},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tm},transmissionSamplerSize:{value:new X},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tm},attenuationDistance:{value:0},attenuationColor:{value:new Dh(0)},specularColor:{value:new Dh(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tm},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tm},anisotropyVector:{value:new X},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tm}}]),vertexShader:Gy.meshphysical_vert,fragmentShader:Gy.meshphysical_frag};var qy={r:0,b:0,g:0},Jy=new Km,Yy=new Tm;Yy.set(-1,0,0,0,1,0,0,0,1);function Xy(e,t,n,r,i,a){let o=new Dh(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new qg(new l_(1,1,1),new Bv({name:`BackgroundCubeMaterial`,uniforms:Mv(Ky.backgroundCube.uniforms),vertexShader:Ky.backgroundCube.vertexShader,fragmentShader:Ky.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Yy),l.material.toneMapped=Am.getTransfer(i.colorSpace)!==Mp,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new qg(new kv(2,2),new Bv({name:`BackgroundMaterial`,uniforms:Mv(Ky.background.uniforms),vertexShader:Ky.background.vertexShader,fragmentShader:Ky.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Am.getTransfer(i.colorSpace)!==Mp,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(qy,Iv(e)),n.buffers.color.setClear(qy.r,qy.g,qy.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Zy(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Qy(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function $y(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(Up(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&Up(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function eb(e){let t=this,n=null,r=0,i=!1,a=!1,o=new e_,s=new Tm,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var tb=4,nb=[.125,.215,.35,.446,.526,.582],rb=20,ib=256,ab=new Sy,ob=new Dh,sb=null,cb=0,lb=0,ub=!1,db=new Z,fb=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=db}=i;sb=this._renderer.getRenderTarget(),cb=this._renderer.getActiveCubeFace(),lb=this._renderer.getActiveMipmapLevel(),ub=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sb,cb,lb),this._renderer.xr.enabled=ub,e.scissorTest=!1,hb(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sb=this._renderer.getRenderTarget(),cb=this._renderer.getActiveCubeFace(),lb=this._renderer.getActiveMipmapLevel(),ub=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pf,minFilter:pf,generateMipmaps:!1,type:Cf,format:jf,colorSpace:Ap,depthBuffer:!1},r=mb(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mb(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pb(r)),this._blurMaterial=_b(r,e,t),this._ggxMaterial=gb(r,e,t)}return r}_compileMaterial(e){let t=new qg(new wg,e);this._renderer.compile(t,ab)}_sceneToCubeUV(e,t,n,r,i){let a=new yy(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(ob),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qg(new l_,new Fg({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(ob),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;hb(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yb()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vb());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;hb(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ab)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-tb?n-d+tb:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,hb(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ab),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,hb(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ab)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&Wp(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):rb;m>rb&&Up(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rb}`);let h=[],g=0;for(let e=0;e<rb;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];hb(t,3*v*(r>_-tb?r-_+tb:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,ab)}};function pb(e){let t=[],n=[],r=[],i=e,a=e-tb+1+nb.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-tb?s=nb[o-e+tb-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new wg;h.setAttribute(`position`,new lg(f,3)),h.setAttribute(`uv`,new lg(p,2)),h.setAttribute(`faceIndex`,new lg(m,1)),r.push(new qg(h,null)),i>tb&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function mb(e,t,n){let r=new Um(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function hb(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function gb(e,t,n){return new Bv({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ib,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bb(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _b(e,t,n){let r=new Float32Array(rb),i=new Z(0,1,0);return new Bv({name:`SphericalGaussianBlur`,defines:{n:rb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bb(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vb(){return new Bv({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:bb(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yb(){return new Bv({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bb(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bb(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var xb=class extends Um{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new a_(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new l_(5,5,5),i=new Bv({name:`CubemapFromEquirect`,uniforms:Mv(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new qg(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=pf),new Dy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Sb(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new xb(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new fb(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new fb(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Cb(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Gp(`WebGLRenderer: `+e+` extension not supported.`),t}}}function wb(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?dg:ug)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Tb(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Eb(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Wp(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Db(e,t,n){let r=new WeakMap,i=new Vm;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Wm(h,p,m,u);g.type=Sf,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new X(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ob(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var kb={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ab(e,t,n,r,i,a){let o=new Um(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new o_(t,n):void 0}),s=new Um(t,n,{type:Cf,depthBuffer:!1,stencilBuffer:!1}),c=new wg;c.setAttribute(`position`,new fg([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new fg([0,2,0,0,2,0],2));let l=new Vv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new qg(c,l),d=new Sy(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},Am.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=kb[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var jb=new Bm,Mb=new o_(1,1),Nb=new Wm,Pb=new Gm,Fb=new a_,Ib=[],Lb=[],Rb=new Float32Array(16),zb=new Float32Array(9),Bb=new Float32Array(4);function Vb(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ib[i];if(a===void 0&&(a=new Float32Array(i),Ib[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Hb(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ub(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Wb(e,t){let n=Lb[t];n===void 0&&(n=new Int32Array(t),Lb[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Gb(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Kb(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Hb(n,t))return;e.uniform2fv(this.addr,t),Ub(n,t)}}function qb(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Hb(n,t))return;e.uniform3fv(this.addr,t),Ub(n,t)}}function Jb(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Hb(n,t))return;e.uniform4fv(this.addr,t),Ub(n,t)}}function Yb(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Hb(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ub(n,t)}else{if(Hb(n,r))return;Bb.set(r),e.uniformMatrix2fv(this.addr,!1,Bb),Ub(n,r)}}function Xb(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Hb(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ub(n,t)}else{if(Hb(n,r))return;zb.set(r),e.uniformMatrix3fv(this.addr,!1,zb),Ub(n,r)}}function Zb(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Hb(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ub(n,t)}else{if(Hb(n,r))return;Rb.set(r),e.uniformMatrix4fv(this.addr,!1,Rb),Ub(n,r)}}function Qb(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function $b(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Hb(n,t))return;e.uniform2iv(this.addr,t),Ub(n,t)}}function ex(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Hb(n,t))return;e.uniform3iv(this.addr,t),Ub(n,t)}}function tx(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Hb(n,t))return;e.uniform4iv(this.addr,t),Ub(n,t)}}function nx(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function rx(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Hb(n,t))return;e.uniform2uiv(this.addr,t),Ub(n,t)}}function ix(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Hb(n,t))return;e.uniform3uiv(this.addr,t),Ub(n,t)}}function ax(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Hb(n,t))return;e.uniform4uiv(this.addr,t),Ub(n,t)}}function ox(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Mb.compareFunction=n.isReversedDepthBuffer()?518:515,a=Mb):a=jb,n.setTexture2D(t||a,i)}function sx(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Pb,i)}function cx(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Fb,i)}function lx(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Nb,i)}function ux(e){switch(e){case 5126:return Gb;case 35664:return Kb;case 35665:return qb;case 35666:return Jb;case 35674:return Yb;case 35675:return Xb;case 35676:return Zb;case 5124:case 35670:return Qb;case 35667:case 35671:return $b;case 35668:case 35672:return ex;case 35669:case 35673:return tx;case 5125:return nx;case 36294:return rx;case 36295:return ix;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return cx;case 36289:case 36303:case 36311:case 36292:return lx}}function dx(e,t){e.uniform1fv(this.addr,t)}function fx(e,t){let n=Vb(t,this.size,2);e.uniform2fv(this.addr,n)}function px(e,t){let n=Vb(t,this.size,3);e.uniform3fv(this.addr,n)}function mx(e,t){let n=Vb(t,this.size,4);e.uniform4fv(this.addr,n)}function hx(e,t){let n=Vb(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function gx(e,t){let n=Vb(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function _x(e,t){let n=Vb(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function vx(e,t){e.uniform1iv(this.addr,t)}function yx(e,t){e.uniform2iv(this.addr,t)}function bx(e,t){e.uniform3iv(this.addr,t)}function xx(e,t){e.uniform4iv(this.addr,t)}function Sx(e,t){e.uniform1uiv(this.addr,t)}function Cx(e,t){e.uniform2uiv(this.addr,t)}function wx(e,t){e.uniform3uiv(this.addr,t)}function Tx(e,t){e.uniform4uiv(this.addr,t)}function Ex(e,t,n){let r=this.cache,i=t.length,a=Wb(n,i);Hb(r,a)||(e.uniform1iv(this.addr,a),Ub(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Mb:jb;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Dx(e,t,n){let r=this.cache,i=t.length,a=Wb(n,i);Hb(r,a)||(e.uniform1iv(this.addr,a),Ub(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Pb,a[e])}function Ox(e,t,n){let r=this.cache,i=t.length,a=Wb(n,i);Hb(r,a)||(e.uniform1iv(this.addr,a),Ub(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Fb,a[e])}function kx(e,t,n){let r=this.cache,i=t.length,a=Wb(n,i);Hb(r,a)||(e.uniform1iv(this.addr,a),Ub(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Nb,a[e])}function Ax(e){switch(e){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return hx;case 35675:return gx;case 35676:return _x;case 5124:case 35670:return vx;case 35667:case 35671:return yx;case 35668:case 35672:return bx;case 35669:case 35673:return xx;case 5125:return Sx;case 36294:return Cx;case 36295:return wx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return kx}}var jx=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ux(t.type)}},Mx=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ax(t.type)}},Nx=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Px=/(\w+)(\])?(\[|\.)?/g;function Fx(e,t){e.seq.push(t),e.map[t.id]=t}function Ix(e,t,n){let r=e.name,i=r.length;for(Px.lastIndex=0;;){let a=Px.exec(r),o=Px.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Fx(n,l===void 0?new jx(s,e,t):new Mx(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Nx(s),Fx(n,e)),n=e}}}var Lx=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ix(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Rx(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var zx=37297,Bx=0;function Vx(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Hx=new Tm;function Ux(e){Am._getMatrix(Hx,Am.workingColorSpace,e);let t=`mat3( ${Hx.elements.map(e=>e.toFixed(4))} )`;switch(Am.getTransfer(e)){case jp:return[t,`LinearTransferOETF`];case Mp:return[t,`sRGBTransferOETF`];default:return Up(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Wx(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Vx(e.getShaderSource(t),r)}return i}function Gx(e,t){let n=Ux(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Kx={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function qx(e,t){let n=Kx[t];return n===void 0?(Up(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Jx=new Z;function Yx(){return Am.getLuminanceCoefficients(Jx),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Jx.x.toFixed(4)}, ${Jx.y.toFixed(4)}, ${Jx.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Xx(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter($x).join(`
`)}function Zx(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Qx(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function $x(e){return e!==``}function eS(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tS(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nS=/^[ \t]*#include +<([\w\d./]+)>/gm;function rS(e){return e.replace(nS,aS)}var iS=new Map;function aS(e,t){let n=Gy[t];if(n===void 0){let e=iS.get(t);if(e!==void 0)n=Gy[e],Up(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return rS(n)}var oS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sS(e){return e.replace(oS,cS)}function cS(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function lS(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var uS={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function dS(e){return uS[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var fS={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function pS(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:fS[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var mS={302:`ENVMAP_MODE_REFRACTION`};function hS(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:mS[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var gS={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function _S(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:gS[e.combine]||`ENVMAP_BLENDING_NONE`}function vS(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function yS(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=dS(n),l=pS(n),u=hS(n),d=_S(n),f=vS(n),p=Xx(n),m=Zx(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter($x).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter($x).join(`
`),_.length>0&&(_+=`
`)):(g=[lS(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter($x).join(`
`),_=[lS(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Gy.tonemapping_pars_fragment,n.toneMapping===0?``:qx(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Gy.colorspace_pars_fragment,Gx(`linearToOutputTexel`,n.outputColorSpace),Yx(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter($x).join(`
`)),o=rS(o),o=eS(o,n),o=tS(o,n),s=rS(s),s=eS(s,n),s=tS(s,n),o=sS(o),s=sS(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Rx(i,i.VERTEX_SHADER,y),S=Rx(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Wx(i,x,`vertex`),n=Wx(i,S,`fragment`);Wp(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):Up(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Lx(i,h),T=Qx(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,zx)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bx++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var bS=0,xS=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new SS(e),t.set(e,n)),n}},SS=class{constructor(e){this.id=bS++,this.code=e,this.usedTimes=0}};function CS(e){return e===1030||e===37490||e===36285}function wS(e,t,n,r,i,a){let o=new rh,s=new xS,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&Up(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ky[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,L=!!x,ee=!!i.aoMap,te=!!i.lightMap,ne=!!i.bumpMap&&i.wireframe===!1,R=!!i.normalMap,re=!!i.displacementMap,z=!!i.emissiveMap,ie=!!i.metalnessMap,ae=!!i.roughnessMap,B=i.anisotropy>0,V=i.clearcoat>0,oe=i.dispersion>0,se=i.iridescence>0,H=i.sheen>0,ce=i.transmission>0,le=B&&!!i.anisotropyMap,ue=V&&!!i.clearcoatMap,de=V&&!!i.clearcoatNormalMap,U=V&&!!i.clearcoatRoughnessMap,fe=se&&!!i.iridescenceMap,pe=se&&!!i.iridescenceThicknessMap,W=H&&!!i.sheenColorMap,me=H&&!!i.sheenRoughnessMap,G=!!i.specularMap,he=!!i.specularColorMap,K=!!i.specularIntensityMap,ge=ce&&!!i.transmissionMap,_e=ce&&!!i.thicknessMap,q=!!i.gradientMap,ve=!!i.alphaMap,ye=i.alphaTest>0,be=!!i.alphaHash,xe=!!i.extensions,Se=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Se=e.toneMapping);let Ce={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Am.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:ee,lightMap:te,bumpMap:ne,normalMap:R,displacementMap:re,emissiveMap:z,normalMapObjectSpace:R&&i.normalMapType===1,normalMapTangentSpace:R&&i.normalMapType===0,packedNormalMap:R&&i.normalMapType===0&&CS(i.normalMap.format),metalnessMap:ie,roughnessMap:ae,anisotropy:B,anisotropyMap:le,clearcoat:V,clearcoatMap:ue,clearcoatNormalMap:de,clearcoatRoughnessMap:U,dispersion:oe,iridescence:se,iridescenceMap:fe,iridescenceThicknessMap:pe,sheen:H,sheenColorMap:W,sheenRoughnessMap:me,specularMap:G,specularColorMap:he,specularIntensityMap:K,transmission:ce,transmissionMap:ge,thicknessMap:_e,gradientMap:q,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:ve,alphaTest:ye,alphaHash:be,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:ee&&m(i.aoMap.channel),lightMapUv:te&&m(i.lightMap.channel),bumpMapUv:ne&&m(i.bumpMap.channel),normalMapUv:R&&m(i.normalMap.channel),displacementMapUv:re&&m(i.displacementMap.channel),emissiveMapUv:z&&m(i.emissiveMap.channel),metalnessMapUv:ie&&m(i.metalnessMap.channel),roughnessMapUv:ae&&m(i.roughnessMap.channel),anisotropyMapUv:le&&m(i.anisotropyMap.channel),clearcoatMapUv:ue&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:W&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:me&&m(i.sheenRoughnessMap.channel),specularMapUv:G&&m(i.specularMap.channel),specularColorMapUv:he&&m(i.specularColorMap.channel),specularIntensityMapUv:K&&m(i.specularIntensityMap.channel),transmissionMapUv:ge&&m(i.transmissionMap.channel),thicknessMapUv:_e&&m(i.thicknessMap.channel),alphaMapUv:ve&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(R||B),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||ve),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&R===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Se,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&Am.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:z&&i.emissiveMap.isVideoTexture===!0&&Am.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:xe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(xe&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ky[t];n=Lv.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new yS(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function TS(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ES(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function DS(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function OS(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||ES),r.length>1&&r.sort(t||DS),i.length>1&&i.sort(t||DS),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function kS(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new OS,e.set(t,[i])):n>=r.length?(i=new OS,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function AS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new Z,color:new Dh};break;case`SpotLight`:n={position:new Z,direction:new Z,color:new Dh,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Z,color:new Dh,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Z,skyColor:new Dh,groundColor:new Dh};break;case`RectAreaLight`:n={color:new Dh,position:new Z,halfWidth:new Z,halfHeight:new Z}}return e[t.id]=n,n}}}function jS(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new X,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var MS=0;function NS(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function PS(e){let t=new AS,n=jS(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Z);let i=new Z,a=new Km,o=new Km;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(NS);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=MS++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function FS(e){let t=new PS(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function IS(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new FS(e),t.set(n,[a])):r>=i.length?(a=new FS(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var LS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zS=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],BS=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],VS=new Km,HS=new Z,US=new Z;function WS(e,t,n){let r=new i_,i=new X,a=new X,o=new Vm,s=new Wv,c=new Gv,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Bv({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new X},radius:{value:4}},vertexShader:LS,fragmentShader:RS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new wg;m.setAttribute(`position`,new lg(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new qg(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(Up(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){Up(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){Up(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Um(i.x,i.y,{format:If,type:Cf,minFilter:pf,magFilter:pf,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new o_(i.x,i.y,Sf),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Mf,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=uf,d.map.depthTexture.magFilter=uf}else l.isPointLight?(d.map=new xb(i.x),d.map.depthTexture=new s_(i.x,xf)):(d.map=new Um(i.x,i.y),d.map.depthTexture=new o_(i.x,i.y,xf)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Mf,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=pf,d.map.depthTexture.magFilter=pf):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=uf,d.map.depthTexture.magFilter=uf);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),HS.setFromMatrixPosition(l.matrixWorld),e.position.copy(HS),US.copy(e.position),US.add(zS[t]),e.up.copy(BS[t]),e.lookAt(US),e.updateMatrixWorld(),n.makeTranslation(-HS.x,-HS.y,-HS.z),VS.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(VS,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),b(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Um(i.x,i.y,{format:If,type:Cf})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function GS(e,t){function n(){let t=!1,n=new Vm,r=null,i=new Vm(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ie(e.DEPTH_TEST):ae(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=qp[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ie(e.STENCIL_TEST):ae(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Dh(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,L={},ee=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),ne=new Vm().fromArray(ee),R=new Vm().fromArray(te);function re(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let z={};z[e.TEXTURE_2D]=re(e.TEXTURE_2D,e.TEXTURE_2D,1),z[e.TEXTURE_CUBE_MAP]=re(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[e.TEXTURE_2D_ARRAY]=re(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),z[e.TEXTURE_3D]=re(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ie(e.DEPTH_TEST),o.setFunc(3),ue(!1),de(1),ie(e.CULL_FACE),ce(0);function ie(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ae(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function B(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function V(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function oe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let se={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};se[103]=e.MIN,se[104]=e.MAX;let H={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ce(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ae(e.BLEND),g=!1);return}if(g===!1&&(ie(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Wp(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Wp(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Wp(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Wp(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(se[n],se[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(H[r],H[i],H[o],H[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function le(t,n){t.side===2?ae(e.CULL_FACE):ie(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ue(r),t.blending===1&&t.transparent===!1?ce(0):ce(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),fe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ie(e.SAMPLE_ALPHA_TO_COVERAGE):ae(e.SAMPLE_ALPHA_TO_COVERAGE)}function ue(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function de(t){t===0?ae(e.CULL_FACE):(ie(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function U(t){t!==k&&(N&&e.lineWidth(t),k=t)}function fe(t,n,r){t?(ie(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ae(e.POLYGON_OFFSET_FILL)}function pe(t){t?ie(e.SCISSOR_TEST):ae(e.SCISSOR_TEST)}function W(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function me(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=L[r];i===void 0&&(i={type:void 0,texture:void 0},L[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||z[t]),i.type=t,i.texture=n)}function G(){let t=L[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function he(){try{e.compressedTexImage2D(...arguments)}catch(e){Wp(`WebGLState:`,e)}}function K(){try{e.compressedTexImage3D(...arguments)}catch(e){Wp(`WebGLState:`,e)}}function ge(){try{e.texSubImage2D(...arguments)}catch(e){Wp(`WebGLState:`,e)}}function _e(){try{e.texSubImage3D(...arguments)}catch(e){Wp(`WebGLState:`,e)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Wp(`WebGLState:`,e)}}function ve(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Wp(`WebGLState:`,e)}}function ye(){try{e.texStorage2D(...arguments)}catch(e){Wp(`WebGLState:`,e)}}function be(){try{e.texStorage3D(...arguments)}catch(e){Wp(`WebGLState:`,e)}}function xe(){try{e.texImage2D(...arguments)}catch(e){Wp(`WebGLState:`,e)}}function Se(){try{e.texImage3D(...arguments)}catch(e){Wp(`WebGLState:`,e)}}function Ce(t){return d[t]===void 0?e.getParameter(t):d[t]}function we(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Te(t){ne.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ne.copy(t))}function Ee(t){R.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),R.copy(t))}function De(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Oe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function ke(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,L={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Dh(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ne.set(0,0,e.canvas.width,e.canvas.height),R.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ie,disable:ae,bindFramebuffer:B,drawBuffers:V,useProgram:oe,setBlending:ce,setMaterial:le,setFlipSided:ue,setCullFace:de,setLineWidth:U,setPolygonOffset:fe,setScissorTest:pe,activeTexture:W,bindTexture:me,unbindTexture:G,compressedTexImage2D:he,compressedTexImage3D:K,texImage2D:xe,texImage3D:Se,pixelStorei:we,getParameter:Ce,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:ye,texStorage3D:be,texSubImage2D:ge,texSubImage3D:_e,compressedTexSubImage2D:q,compressedTexSubImage3D:ve,scissor:Te,viewport:Ee,reset:ke}}function KS(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new X,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Rp(`canvas`)}function g(e,t,n){let r=1,i=he(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),Up(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&Up(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];Up(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||Up(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?jp:Am.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,Up(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function M(){let e=O;return e>=i.maxTextures&&Up(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function N(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function P(t,i){let a=r.get(t);if(t.isVideoTexture&&me(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)Up(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)Up(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ae(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function F(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ae(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function I(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ae(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function L(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){B(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ee={[sf]:e.REPEAT,[cf]:e.CLAMP_TO_EDGE,[lf]:e.MIRRORED_REPEAT},te={[uf]:e.NEAREST,[df]:e.NEAREST_MIPMAP_NEAREST,[ff]:e.NEAREST_MIPMAP_LINEAR,[pf]:e.LINEAR,[mf]:e.LINEAR_MIPMAP_NEAREST,[hf]:e.LINEAR_MIPMAP_LINEAR},ne={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function R(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&Up(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ee[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ee[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ee[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,te[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,te[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ne[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function re(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=N(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function z(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ie(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=z(n.start,r.width,4),c=z(t.start,r.width,4);n.start<=i+1&&a===c&&z(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ae(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=re(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Am.getPrimaries(Am.workingColorSpace),r=o.colorSpace===``?null:Am.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=G(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);R(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===Nf,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&ie(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Vy(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else Up(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?Up(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Vy(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=he(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=he(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function B(t,o,s){if(o.image.length!==6)return;let c=re(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Am.getPrimaries(Am.workingColorSpace),r=o.colorSpace===``?null:Am.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=G(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);R(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?Up(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=he(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function V(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),W(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,pe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function oe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;W(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,pe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,pe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);W(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,pe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,pe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function se(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),R(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else P(i.depthTexture,0);let u=l.__webglTexture,d=pe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)W(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)W(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function H(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)se(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?se(i.__webglFramebuffer[0],t,0):se(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),oe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),oe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ce(t,n,i){let a=r.get(t);n!==void 0&&V(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&H(t)}function le(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&W(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=pe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),oe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),R(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)V(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else V(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),R(c,a),V(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),R(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)V(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else V(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&H(t)}function ue(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let de=[],U=[];function fe(t){if(t.samples>0){if(W(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(de.length=0,U.length=0,de.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(de.push(l),U.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,U)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,de))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function pe(e){return Math.min(i.maxSamples,e.samples)}function W(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function me(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function G(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Am.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&Up(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Wp(`WebGLTextures: Unsupported texture color space:`,n)),t}function he(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=M,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=P,this.setTexture2DArray=F,this.setTexture3D=I,this.setTextureCube=L,this.rebindTextures=ce,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=V,this.useMultisampledRTT=W,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function qS(e,t){function n(n,r=``){let i,a=Am.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var JS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,XS=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new c_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bv({vertexShader:JS,fragmentShader:YS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qg(new kv(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ZS=class extends Jp{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new XS,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new X,C=null,w=new yy;w.viewport=new Vm;let T=new yy;T.viewport=new Vm;let E=[w,T],D=new Oy,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Sh,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Sh,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Sh,b[e]=t),t.getHandSpace()};function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function j(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,j),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,k=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&Up(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&Up(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,j),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Nf:Mf,a=_.stencil?Ef:xf);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Um(d.textureWidth,d.textureHeight,{format:jf,type:gf,depthTexture:new o_(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Um(f.framebufferWidth,f.framebufferHeight,{format:jf,type:gf,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ne.setContext(r),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let N=new Z,P=new Z;function F(e,t,n){N.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(P),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function I(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,(O!==D.near||k!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,k=D.far),D.layers.mask=e.layers.mask|6,w.layers.mask=D.layers.mask&-5,T.layers.mask=D.layers.mask&-3;let i=e.parent,a=D.cameras;I(D,i);for(let e=0;e<a.length;e++)I(a[e],i);a.length===2?F(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),L(e,D,i)};function L(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Qp*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let ee=null;function te(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new yy,o.layers.enable(n),o.viewport=new Vm,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),i===!0&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new c_,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ee&&ee(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ne=new Uy;ne.setAnimationLoop(te),this.setAnimationLoop=function(e){ee=e},this.dispose=function(){}}},QS=new Km,$S=new Tm;$S.set(-1,0,0,0,1,0,0,0,1);function eC(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Iv(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(QS.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply($S),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function tC(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Wp(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?Up(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):Up(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var nC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rC=null;function iC(){return rC===null&&(rC=new Xg(nC,16,16,If,Cf),rC.name=`DFG_LUT`,rC.minFilter=pf,rC.magFilter=pf,rC.wrapS=cf,rC.wrapT=cf,rC.generateMipmaps=!1,rC.needsUpdate=!0),rC}var aC=class{constructor(e={}){let{canvas:t=zp(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=gf}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Rf,Lf,Ff]),g=new Set([gf,xf,yf,Ef,wf,Tf]),_=new Uint32Array(4),v=new Int32Array(4),y=new Z,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=kp;let j=0,M=0,N=null,P=-1,F=null,I=new Vm,L=new Vm,ee=null,te=new Dh(0),ne=0,R=t.width,re=t.height,z=1,ie=null,ae=null,B=new Vm(0,0,R,re),V=new Vm(0,0,R,re),oe=!1,se=new i_,H=!1,ce=!1,le=new Km,ue=new Z,de=new Vm,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function pe(){return N===null?z:1}let W=n;function me(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,Le,!1),t.addEventListener(`webglcontextrestored`,Re,!1),t.addEventListener(`webglcontextcreationerror`,ze,!1),W===null){let t=`webgl2`;if(W=me(t,e),W===null)throw me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw Wp(`WebGLRenderer: `+e.message),e}let G,he,K,ge,_e,q,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe;function Fe(){G=new Cb(W),G.init(),Me=new qS(W,G),he=new $y(W,G,e,Me),K=new GS(W,G),he.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),O=W.createFramebuffer(),k=W.createFramebuffer(),A=W.createFramebuffer(),ge=new Eb(W),_e=new TS,q=new KS(W,G,K,_e,he,Me,ge),ve=new Sb(T),ye=new Wy(W),Ne=new Zy(W,ye),be=new wb(W,ye,ge,Ne),xe=new Ob(W,be,ye,Ne,ge),ke=new Db(W,he,q),Ee=new eb(_e),Se=new wS(T,ve,G,he,Ne,Ee),Ce=new eC(T,_e),we=new kS,Te=new IS(G),Oe=new Xy(T,ve,K,xe,p,s),De=new WS(T,xe,he),Pe=new tC(W,ge,he,K),Ae=new Qy(W,G,ge),je=new Tb(W,G,ge),ge.programs=Se.programs,T.capabilities=he,T.extensions=G,T.properties=_e,T.renderLists=we,T.shadowMap=De,T.state=K,T.info=ge}Fe(),m!==1009&&(w=new Ab(m,t.width,t.height,o,r,i));let Ie=new ZS(T,W);this.xr=Ie,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let e=G.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=G.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(e){e!==void 0&&(z=e,this.setSize(R,re,!1))},this.getSize=function(e){return e.set(R,re)},this.setSize=function(e,n,r=!0){if(Ie.isPresenting){Up(`WebGLRenderer: Can't change size while VR device is presenting.`);return}R=e,re=n,t.width=Math.floor(e*z),t.height=Math.floor(n*z),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(R*z,re*z).floor()},this.setDrawingBufferSize=function(e,n,r){R=e,re=n,z=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){Wp(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){Up(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(I)},this.getViewport=function(e){return e.copy(B)},this.setViewport=function(e,t,n,r){e.isVector4?B.set(e.x,e.y,e.z,e.w):B.set(e,t,n,r),K.viewport(I.copy(B).multiplyScalar(z).round())},this.getScissor=function(e){return e.copy(V)},this.setScissor=function(e,t,n,r){e.isVector4?V.set(e.x,e.y,e.z,e.w):V.set(e,t,n,r),K.scissor(L.copy(V).multiplyScalar(z).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(e){K.setScissorTest(oe=e)},this.setOpaqueSort=function(e){ie=e},this.setTransparentSort=function(e){ae=e},this.getClearColor=function(e){return e.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Oe.getClearColor(),r=Oe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,W.clearBufferuiv(W.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,W.clearBufferiv(W.COLOR,0,v))}else r|=W.COLOR_BUFFER_BIT}t&&(r|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&W.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Le,!1),t.removeEventListener(`webglcontextrestored`,Re,!1),t.removeEventListener(`webglcontextcreationerror`,ze,!1),Oe.dispose(),we.dispose(),Te.dispose(),_e.dispose(),ve.dispose(),xe.dispose(),Ne.dispose(),Pe.dispose(),Se.dispose(),Ie.dispose(),Ie.removeEventListener(`sessionstart`,Ke),Ie.removeEventListener(`sessionend`,qe),Je.stop()};function Le(e){e.preventDefault(),Vp(`WebGLRenderer: Context Lost.`),E=!0}function Re(){Vp(`WebGLRenderer: Context Restored.`),E=!1;let e=ge.autoReset,t=De.enabled,n=De.autoUpdate,r=De.needsUpdate,i=De.type;Fe(),ge.autoReset=e,De.enabled=t,De.autoUpdate=n,De.needsUpdate=r,De.type=i}function ze(e){Wp(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Be(e){let t=e.target;t.removeEventListener(`dispose`,Be),Ve(t)}function Ve(e){He(e),_e.remove(e)}function He(e){let t=_e.get(e).programs;t!==void 0&&(t.forEach(function(e){Se.releaseProgram(e)}),e.isShaderMaterial&&Se.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=U);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=it(e,t,n,r,i);K.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ne.setup(i,r,s,n,c);let h,g=Ae;if(c!==null&&(h=ye.get(c),g=je,g.setIndex(h)),i.isMesh)r.wireframe===!0?(K.setLineWidth(r.wireframeLinewidth*pe()),g.setMode(W.LINES)):g.setMode(W.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),K.setLineWidth(e*pe()),i.isLineSegments?g.setMode(W.LINES):i.isLineLoop?g.setMode(W.LINE_LOOP):g.setMode(W.LINE_STRIP)}else i.isPoints?g.setMode(W.POINTS):i.isSprite&&g.setMode(W.TRIANGLES);if(i.isBatchedMesh){if(G.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ye.get(c).bytesPerElement:1,o=_e.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(W,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ue(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,et(e,t,n),e.side=0,e.needsUpdate=!0,et(e,t,n),e.side=2):et(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),x=Te.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ue(a,n,e),r.add(a)}else Ue(t,n,e),r.add(t)}}),x=C.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){_e.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}G.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let We=null;function Ge(e){We&&We(e)}function Ke(){Je.stop()}function qe(){Je.start()}let Je=new Uy;Je.setAnimationLoop(Ge),typeof self<`u`&&Je.setContext(self),this.setAnimationLoop=function(e){We=e,Ie.setAnimationLoop(e),e===null?Je.stop():Je.start()},Ie.addEventListener(`sessionstart`,Ke),Ie.addEventListener(`sessionend`,qe),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Wp(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ie.enabled===!0&&Ie.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(t),t=Ie.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Te.get(e,C.length),x.init(t),x.state.textureUnits=q.getTextureUnits(),C.push(x),le.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),se.setFromProjectionMatrix(le,Fp,t.reversedDepth),ce=this.localClippingEnabled,H=Ee.init(this.clippingPlanes,ce),b=we.get(e,S.length),b.init(),S.push(b),Ie.enabled===!0&&Ie.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&Ye(e,t,-1/0,T.sortObjects)}Ye(e,t,0,T.sortObjects),b.finish(),T.sortObjects===!0&&b.sort(ie,ae,t.reversedDepth),fe=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,fe&&Oe.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),H===!0&&Ee.beginShadows();let i=x.state.shadowsArray;if(De.render(i,e,t),H===!0&&Ee.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ze(n,r,e,a)}fe&&Oe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Xe(b,e,n,n.viewport)}}else r.length>0&&Ze(n,r,e,t),fe&&Oe.render(e),Xe(b,e,t)}N!==null&&M===0&&(q.updateMultisampleRenderTarget(N),q.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Ne.resetDefaultState(),P=-1,F=null,C.pop(),C.length>0?(x=C[C.length-1],q.setTextureUnits(x.state.textureUnits),H===!0&&Ee.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function Ye(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||se.intersectsSprite(e)){r&&de.setFromMatrixPosition(e.matrixWorld).applyMatrix4(le);let t=xe.update(e),i=e.material;i.visible&&b.push(e,t,i,n,de.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||se.intersectsObject(e))){let t=xe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),de.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),de.copy(e.boundingSphere.center)),de.applyMatrix4(e.matrixWorld).applyMatrix4(le)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&b.push(e,t,s,n,de.z,o)}}else i.visible&&b.push(e,t,i,n,de.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ye(i[e],t,n,r)}function Xe(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),H===!0&&Ee.setGlobalState(T.clippingPlanes,n),r&&K.viewport(I.copy(r)),i.length>0&&Qe(i,t,n),a.length>0&&Qe(a,t,n),o.length>0&&Qe(o,t,n),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Ze(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=G.has(`EXT_color_buffer_half_float`)||G.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Um(1,1,{generateMipmaps:!0,type:e?Cf:gf,minFilter:hf,samples:Math.max(4,he.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Am.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||I;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(te),ne=T.getClearAlpha(),ne<1&&T.setClearColor(16777215,.5),T.clear(),fe&&Oe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),H===!0&&Ee.setGlobalState(T.clippingPlanes,r),Qe(e,n,r),q.updateMultisampleRenderTarget(a),q.updateRenderTargetMipmap(a),G.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,$e(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(q.updateMultisampleRenderTarget(a),q.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(te,ne),d!==void 0&&(r.viewport=d),T.toneMapping=u}function Qe(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&$e(o,t,n,s,l,c)}}function $e(e,t,n,r,i,a){e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function et(e,t,n){t.isScene!==!0&&(t=U);let r=_e.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Se.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Se.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Be),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return nt(e,s),d}else s.uniforms=Se.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Se.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ee.uniform),nt(e,s),r.needsLights=ot(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Lx.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function nt(e,t){let n=_e.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function rt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function it(e,t,n,r,i){t.isScene!==!0&&(t=U),q.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Am.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=_e.get(r),y=x.state.lights;if(H===!0&&(ce===!0||e!==F)){let t=e===F&&r.id===P;Ee.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ee.numPlanes||v.numIntersection!==Ee.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=et(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(K.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==P&&(P=r.id,w=!0),v.needsLights){let e=rt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||F!==e){K.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(W,`projectionMatrix`,e.projectionMatrix),O.setValue(W,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(W,ue.setFromMatrixPosition(e.matrixWorld)),he.logarithmicDepthBuffer&&O.setValue(W,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(W,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,w=!0,E=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&O.setValue(W,`directionalShadowMap`,y.state.directionalShadowMap,q),y.state.spotShadowMap.length>0&&O.setValue(W,`spotShadowMap`,y.state.spotShadowMap,q),y.state.pointShadowMap.length>0&&O.setValue(W,`pointShadowMap`,y.state.pointShadowMap,q)),i.isSkinnedMesh){O.setOptional(W,i,`bindMatrix`),O.setOptional(W,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(W,`boneTexture`,e.boneTexture,q))}i.isBatchedMesh&&(O.setOptional(W,i,`batchingTexture`),O.setValue(W,`batchingTexture`,i._matricesTexture,q),O.setOptional(W,i,`batchingIdTexture`),O.setValue(W,`batchingIdTexture`,i._indirectTexture,q),O.setOptional(W,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(W,`batchingColorTexture`,i._colorsTexture,q));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&ke.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(W,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=iC()),w){if(O.setValue(W,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&at(k,E),a&&r.fog===!0&&Ce.refreshFogUniforms(k,a),Ce.refreshMaterialUniforms(k,r,z,re,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}Lx.upload(W,tt(v),k,q)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Lx.upload(W,tt(v),k,q),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(W,`center`,i.center),O.setValue(W,`modelViewMatrix`,i.modelViewMatrix),O.setValue(W,`normalMatrix`,i.normalMatrix),O.setValue(W,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Pe.update(n,S),Pe.bind(n,S)}}return S}function at(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=_e.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),_e.get(e.texture).__webglTexture=t,_e.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=_e.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=_e.get(e);if(o.__useDefaultFramebuffer!==void 0){K.bindFramebuffer(W.FRAMEBUFFER,o.__webglFramebuffer),I.copy(e.viewport),L.copy(e.scissor),ee=e.scissorTest,K.viewport(I),K.scissor(L),K.setScissorTest(ee),P=-1;return}if(o.__webglFramebuffer===void 0)q.setupRenderTarget(e);else if(o.__hasExternalTextures)q.rebindTextures(e,_e.get(e.texture).__webglTexture,_e.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&_e.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);q.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=_e.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&q.useMultisampledRTT(e)===!1?_e.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,I.copy(e.viewport),L.copy(e.scissor),ee=e.scissorTest}else I.copy(B).multiplyScalar(z).floor(),L.copy(V).multiplyScalar(z).floor(),ee=oe;if(n!==0&&(r=O),K.bindFramebuffer(W.FRAMEBUFFER,r)&&K.drawBuffers(e,r),K.viewport(I),K.scissor(L),K.setScissorTest(ee),i){let r=_e.get(e.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=_e.get(e.textures[t]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=_e.get(e.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,t.__webglTexture,n)}P=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Wp(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=_e.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){K.bindFramebuffer(W.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+s),!he.textureFormatReadable(c)){Wp(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!he.textureTypeReadable(l)){Wp(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&W.readPixels(t,n,r,i,Me.convert(c),Me.convert(l),a)}finally{let e=N===null?null:_e.get(N).__webglFramebuffer;K.bindFramebuffer(W.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=_e.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){K.bindFramebuffer(W.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+s),!he.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!he.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,d),W.bufferData(W.PIXEL_PACK_BUFFER,a.byteLength,W.STREAM_READ),W.readPixels(t,n,r,i,Me.convert(l),Me.convert(u),0);let f=N===null?null:_e.get(N).__webglFramebuffer;K.bindFramebuffer(W.FRAMEBUFFER,f);let p=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Kp(W,p,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,d),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,a),W.deleteBuffer(d),W.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;q.setTexture2D(e,0),W.copyTexSubImage2D(W.TEXTURE_2D,n,0,0,o,s,i,a),K.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Me.convert(t.format),_=Me.convert(t.type),v;t.isData3DTexture?(q.setTexture3D(t,0),v=W.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(q.setTexture2DArray(t,0),v=W.TEXTURE_2D_ARRAY):(q.setTexture2D(t,0),v=W.TEXTURE_2D),K.activeTexture(W.TEXTURE0),K.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,t.flipY),K.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),K.pixelStorei(W.UNPACK_ALIGNMENT,t.unpackAlignment);let y=K.getParameter(W.UNPACK_ROW_LENGTH),b=K.getParameter(W.UNPACK_IMAGE_HEIGHT),x=K.getParameter(W.UNPACK_SKIP_PIXELS),S=K.getParameter(W.UNPACK_SKIP_ROWS),C=K.getParameter(W.UNPACK_SKIP_IMAGES);K.pixelStorei(W.UNPACK_ROW_LENGTH,h.width),K.pixelStorei(W.UNPACK_IMAGE_HEIGHT,h.height),K.pixelStorei(W.UNPACK_SKIP_PIXELS,l),K.pixelStorei(W.UNPACK_SKIP_ROWS,u),K.pixelStorei(W.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=_e.get(e),r=_e.get(t),h=_e.get(n.__renderTarget),g=_e.get(r.__renderTarget);K.bindFramebuffer(W.READ_FRAMEBUFFER,h.__webglFramebuffer),K.bindFramebuffer(W.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,_e.get(e).__webglTexture,i,d+n),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,_e.get(t).__webglTexture,a,m+n)),W.blitFramebuffer(l,u,o,s,f,p,o,s,W.DEPTH_BUFFER_BIT,W.NEAREST);K.bindFramebuffer(W.READ_FRAMEBUFFER,null),K.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||_e.has(e)){let n=_e.get(e),r=_e.get(t);K.bindFramebuffer(W.READ_FRAMEBUFFER,k),K.bindFramebuffer(W.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,n.__webglTexture,i),T?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,r.__webglTexture,a),i===0?T?W.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):W.copyTexSubImage2D(v,a,f,p,l,u,o,s):W.blitFramebuffer(l,u,o,s,f,p,o,s,W.COLOR_BUFFER_BIT,W.NEAREST);K.bindFramebuffer(W.READ_FRAMEBUFFER,null),K.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?W.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?W.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):W.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):W.texSubImage2D(W.TEXTURE_2D,a,f,p,o,s,g,_,h);K.pixelStorei(W.UNPACK_ROW_LENGTH,y),K.pixelStorei(W.UNPACK_IMAGE_HEIGHT,b),K.pixelStorei(W.UNPACK_SKIP_PIXELS,x),K.pixelStorei(W.UNPACK_SKIP_ROWS,S),K.pixelStorei(W.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&W.generateMipmap(v),K.unbindTexture()},this.initRenderTarget=function(e){_e.get(e).__webglFramebuffer===void 0&&q.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?q.setTextureCube(e,0):e.isData3DTexture?q.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?q.setTexture2DArray(e,0):q.setTexture2D(e,0),K.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,K.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Fp}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Am._getDrawingBufferColorSpace(e),t.unpackColorSpace=Am._getUnpackColorSpace()}},oC=8.6,sC=.58,cC=3.25,lC=2.7,uC=1/7,dC=(e,t=0,n=1)=>{let r=e*uC,i=uC*.94;return{t0:r+i*t/n*.72,t1:r+i*(.34+t/n*.66)}},fC={hormigon:new Hv({color:9275520,roughness:.95,metalness:0}),hormigon2:new Hv({color:10327949,roughness:.9}),bloque:new Hv({color:14274496,roughness:.85}),bloque2:new Hv({color:13616307,roughness:.88}),revoco:new Hv({color:14932681,roughness:.93,metalness:0}),madera:new Hv({color:8215356,roughness:.72}),madera2:new Hv({color:10122576,roughness:.68}),teja:new Hv({color:11031610,roughness:.8}),teja2:new Hv({color:12149576,roughness:.82}),metal:new Hv({color:4869973,roughness:.35,metalness:.85}),piedra:new Hv({color:7301731,roughness:.95}),cristal:new Uv({color:10339030,roughness:.08,metalness:.1,transparent:!0,opacity:.42,emissive:16756838,emissiveIntensity:0,clearcoat:.9,clearcoatRoughness:.1})},pC={box:new l_(1,1,1),cyl:new u_(.5,.5,1,12)},mC=0;function hC(e,t,n,[r,i,a],[o,s,c],l,u=0,d=1,f=`pieza`){let p=new qg(t,n);p.position.set(r,i,a),p.scale.set(o,s,c),p.castShadow=!0,p.receiveShadow=!0,p.name=`${f}_${mC++}`;let m=dC(l,u,d),h=mC%3-1;return p.userData.b={...m,home:p.position.clone(),scale:new Z(o,s,c),from:new Z(r+h*1.4,i+5.5+mC%7*.35,a+h*1.1),rot:new nh((mC%5-2)*.22,(mC%4-1.5)*.3,(mC%3-1)*.18)},p.visible=!1,e.add(p),p}function gC(e,{axis:t,len:n,x:r,z:i,rotY:a,openings:o,step:s,idx:c}){let l=Math.max(3,Math.round(cC/.65)),u=Math.max(3,Math.round(n/1.55)),d=cC/l,f=n/u,p=0,m=l*u;for(let a=0;a<l;a++){let c=a%2?f*.18:0;for(let l=0;l<u;l++){let u=-n/2+f*(l+.5)+c,h=sC+d*(a+.5);if(o.some(e=>u>e.u0-f*.3&&u<e.u1+f*.3&&h>.58+e.y0-d*.3&&h<.58+e.y1+d*.3)){p++;continue}let g=t===`x`?r+u:r,_=t===`x`?i:i+u,v=hC(e,pC.box,(a+l)%2?fC.bloque:fC.bloque2,[g,h,_],t===`x`?[f*.96,d*.9,.38]:[.38,d*.9,f*.96],s,p,m,`bloque`);v.userData.b.from.y=h+4+a*.3,p++}}}var _C=.46;function vC(e,{axis:t,len:n,x:r,z:i,profile:a,openings:o,i:s,n:c}){let l=new H_;l.moveTo(-n/2,0),l.lineTo(n/2,0);for(let[e,t]of a)l.lineTo(e,t);l.closePath();for(let e of o){let t=Math.max(.02,e.y0),n=new V_;n.moveTo(e.u0,t),n.lineTo(e.u1,t),n.lineTo(e.u1,e.y1),n.lineTo(e.u0,e.y1),n.closePath(),l.holes.push(n)}let u=new qg(new Ev(l,{depth:_C,bevelEnabled:!1,curveSegments:1}),fC.revoco.clone());return u.material.transparent=!0,u.material.opacity=0,u.material.depthWrite=!1,u.castShadow=!0,u.receiveShadow=!0,t===`x`?u.position.set(r,sC,i-_C/2):(u.rotation.y=-Math.PI/2,u.position.set(r+_C/2,sC,i)),u.name=`revoco_${mC++}`,u.userData.b={...dC(6,s,c),home:u.position.clone(),from:u.position.clone(),scale:new Z(1,1,1),rot:new nh(0,0,0)},u.userData.fade=!0,u.visible=!1,e.add(u),u}function yC(e,{x:t,y:n,z:r,w:i,h:a,axis:o,step:s,i:c,n:l}){let u=.1,d=[],f=o===`x`,p=(e,t)=>f?[e,t,.46]:[.46,t,e];hC(e,pC.box,fC.madera2,[t,n+a/2,r],p(i,u*1.6),s,c,l,`dintel`),hC(e,pC.box,fC.madera2,[t,n-a/2,r],p(i,u*1.6),s,c,l,`peana`);let m=f?i/2:0,h=f?0:i/2;hC(e,pC.box,fC.madera2,[t-m,n,r-h],p(u*1.6,a),s,c,l,`jamba`),hC(e,pC.box,fC.madera2,[t+m,n,r+h],p(u*1.6,a),s,c,l,`jamba`),hC(e,pC.box,fC.madera2,[t,n,r],p(u,a),s,c,l,`parteluz`);let g=hC(e,pC.box,fC.cristal,[t,n,r],p(i*.95,a*.95),s,c,l,`vidrio`);g.castShadow=!1,d.push(g);let _=n-a/2-.1,v=Math.sign(f?r:t);return hC(e,pC.box,fC.piedra,f?[t,_,r+v*.12]:[t+v*.12,_,r],f?[i+.3,.12,.78]:[.78,.12,i+.3],s,c,l,`alfeizar`),d}function bC(){let e=new bh;e.name=`casa`;let t=[],n=[];for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)(e!==0||t!==0)&&n.push([e*(11/2-.8),t*(oC/2-.7)]);n.forEach(([t,r],i)=>hC(e,pC.box,fC.hormigon,[t,.12,r],[1.45,.55,1.45],0,i,n.length,`zapata`)),hC(e,pC.box,fC.hormigon2,[0,.2,oC/2-.7],[9.8,.34,.5],0,8,12,`riostra`),hC(e,pC.box,fC.hormigon2,[0,.2,-3.5999999999999996],[9.8,.34,.5],0,9,12,`riostra`),hC(e,pC.box,fC.hormigon2,[11/2-.8,.2,0],[.5,.34,7.3999999999999995],0,10,12,`riostra`),hC(e,pC.box,fC.hormigon2,[-4.7,.2,0],[.5,.34,7.3999999999999995],0,11,12,`riostra`),hC(e,pC.box,fC.hormigon2,[0,.39999999999999997,0],[11.5,.36,9.1],1,0,8,`solera`);for(let t=0;t<6;t++)hC(e,pC.box,fC.metal,[-4.1+t*1.7,.37999999999999995,4.57],[.42,.16,.1],1,t+1,8,`respiradero`);hC(e,pC.box,fC.piedra,[0,.19999999999999996,0],[12.1,.22,9.7],1,7,8,`zocalo`);let r=[];for(let e of[-1,0,1])for(let t of[-1,1])r.push([e*(11/2-.32),t*(oC/2-.28)]);r.push([-5.18,0],[11/2-.32,0]),r.forEach(([t,n],i)=>hC(e,pC.box,fC.hormigon2,[t,2.205,n],[.36,cC,.36],2,i,r.length+6,`pilar`)),hC(e,pC.box,fC.hormigon,[0,4,oC/2-.28],[11,.34,.34],2,8,14,`jacena`),hC(e,pC.box,fC.hormigon,[0,4,-4.02],[11,.34,.34],2,9,14,`jacena`),hC(e,pC.box,fC.hormigon,[11/2-.32,4,0],[.34,.34,oC],2,10,14,`jacena`),hC(e,pC.box,fC.hormigon,[-5.18,4,0],[.34,.34,oC],2,11,14,`jacena`),hC(e,pC.box,fC.hormigon,[0,4,0],[11,.3,.3],2,12,14,`jacena`),hC(e,pC.box,fC.hormigon,[0,4,oC/4],[11,.26,.26],2,13,14,`correa`);let i=oC/2-.1,a=-4.2,o=11/2-.1,s=-5.4,c=[{u0:-1.1,u1:1.1,y0:0,y1:2.35},{u0:2.4,u1:4.6,y0:.95,y1:2.5},{u0:-4.6,u1:-2.4,y0:.95,y1:2.5}],l=[{u0:-4.3,u1:-1.6,y0:.8,y1:2.5},{u0:1.6,u1:4.3,y0:.8,y1:2.5}],u=[{u0:-1.3,u1:1.3,y0:1,y1:2.45}],d=[{u0:-1.2,u1:.4,y0:1.35,y1:2.4}];gC(e,{axis:`x`,len:11,x:0,z:i,step:3,openings:c}),gC(e,{axis:`x`,len:11,x:0,z:a,step:3,openings:l}),gC(e,{axis:`z`,len:oC,x:o,z:0,step:3,openings:u}),gC(e,{axis:`z`,len:oC,x:s,z:0,step:3,openings:d});let f=[{x:3.5,y:2.3,z:i,w:2.2,h:1.55,axis:`x`},{x:-3.5,y:2.3,z:i,w:2.2,h:1.55,axis:`x`},{x:-2.95,y:2.23,z:a,w:2.7,h:1.7,axis:`x`},{x:2.95,y:2.23,z:a,w:2.7,h:1.7,axis:`x`},{x:o,y:2.3,z:0,w:2.6,h:1.45,axis:`z`},{x:s,y:2.45,z:-.4,w:1.6,h:1.05,axis:`z`}];f.forEach((n,r)=>t.push(...yC(e,{...n,step:4,i:r,n:f.length+3})));let p=4.26;hC(e,pC.box,fC.madera,[0,1.7000000000000002,p],[1.9,2.25,.12],4,6,9,`hoja`),hC(e,pC.box,fC.madera2,[0,2.9,p],[2.3,.16,.3],4,6,9,`dintel`),hC(e,pC.box,fC.madera2,[-1.08,1.73,p],[.16,2.5,.3],4,6,9,`jamba`),hC(e,pC.box,fC.madera2,[1.08,1.73,p],[.16,2.5,.3],4,6,9,`jamba`),hC(e,pC.box,fC.metal,[.65,1.7000000000000002,4.359999999999999],[.07,.5,.07],4,7,9,`tirador`);let m=hC(e,pC.box,fC.cristal,[0,2.48,4.279999999999999],[1.3,.5,.06],4,7,9,`montante`);m.castShadow=!1,t.push(m);for(let t=0;t<3;t++)hC(e,pC.box,fC.piedra,[0,.45999999999999996-t*.18,4.75+t*.38],[2.9+t*.3,.18,.42],4,8,9,`escalon`);let h=4.85,g=Math.hypot(h,lC),_=Math.atan2(lC,h);for(let t of[1,-1])for(let n=0;n<9;n++){let r=-11/2+11/8*n,i=hC(e,pC.box,fC.madera,[r,11.04/2,t*h/2],[.16,.2,g],5,n,27,`par`);i.rotation.x=t*_,i.userData.base=i.rotation.clone()}hC(e,pC.box,fC.madera,[0,6.93,0],[11.3,.24,.24],5,0,27,`cumbrera`);for(let t of[1,-1])for(let n=0;n<6;n++){let r=(n+.5)/6,i=4.17+lC*r+.16,a=t*h*(1-r);for(let r=0;r<13;r++){let o=-6.05+12.1/12*r,s=hC(e,pC.box,(r+n)%2?fC.teja:fC.teja2,[o,i,a],[12.1/13*1.02,.11,g/6*1.22],5,9+n*13+r,91,`teja`);s.rotation.x=t*_,s.userData.base=s.rotation.clone(),s.userData.b.from.set(o+(r-13/2)*.25,i+6,a+t*3)}}for(let t=0;t<12;t++){let n=hC(e,pC.cyl,fC.teja2,[-11/2+1*t,7.11,0],[.42,.98,.42],5,400,420,`caballete`);n.rotation.z=Math.PI/2,n.userData.base=n.rotation.clone()}for(let t of[1,-1])hC(e,pC.box,fC.madera2,[0,4.12,t*h],[12.1,.26,.1],5,410,420,`alero`);let v=e=>6.87-lC*Math.abs(e)/h,y=3.59,b=v(oC/2)-sC+.06,x=6.35,S=[vC(e,{axis:`x`,len:11,x:0,z:i,i:0,n:30,openings:c,profile:[[11/2,y],[-11/2,y]]}),vC(e,{axis:`x`,len:11,x:0,z:a,i:1,n:30,openings:l,profile:[[11/2,y],[-11/2,y]]}),vC(e,{axis:`z`,len:oC,x:o,z:0,i:2,n:30,openings:u,profile:[[oC/2,b],[0,x],[-8.6/2,b]]}),vC(e,{axis:`z`,len:oC,x:s,z:0,i:3,n:30,openings:d,profile:[[oC/2,b],[0,x],[-8.6/2,b]]})];for(let t=0;t<4;t++)hC(e,pC.box,t%2?fC.bloque:fC.bloque2,[3.2,6.57+t*.48,-1.3],[.95-t*.02,.48,.95-t*.02],6,t,22,`chimenea`);hC(e,pC.box,fC.piedra,[3.2,8.53,-1.3],[1.25,.16,1.25],6,10,30,`sombrerete`),hC(e,pC.box,fC.metal,[3.2,8.75,-1.3],[.3,.3,.3],6,10,30,`tiro`);for(let t of[1,-1])hC(e,pC.box,fC.metal,[0,3.9499999999999997,t*4.93],[12.1,.14,.16],6,11,30,`canalon`),hC(e,pC.box,fC.metal,[5.8,4.75/2,t*4.8999999999999995],[.13,3.59,.13],6,12,30,`bajante`);for(let t=0;t<3;t++)hC(e,pC.box,fC.madera,[-3.4+t*1.7,1.83,6.5],[.18,2.5,.18],6,13+t,30,`poste`);hC(e,pC.box,fC.madera2,[-1.7,3.13,6.5],[3.9,.18,.3],6,16,30,`carrera`);for(let t=0;t<9;t++)hC(e,pC.box,fC.madera2,[-3.3+t*.42,1.08,6.5],[.07,.95,.07],6,17,30,`balaustre`);hC(e,pC.box,fC.madera2,[-1.7,1.6,6.5],[3.7,.1,.16],6,18,30,`pasamanos`),hC(e,pC.box,fC.piedra,[-1.7,.43999999999999995,5.7],[4.2,.2,2],6,19,30,`losa`),hC(e,pC.box,fC.metal,[1.5,2.63,4.58],[.2,.34,.2],6,20,30,`farol`),hC(e,pC.box,fC.metal,[2.15,1.9300000000000002,4.6000000000000005],[.36,.26,.18],6,21,30,`buzon`);for(let t=0;t<7;t++)hC(e,pC.box,fC.piedra,[t%2?.35:-.35,.06,6.300000000000001+t*1.15],[1.5,.12,.9],6,16+Math.floor(t/3),22,`losa`);return e.userData.glass=t,e.userData.panos=S,e.userData.bloques=e.children.filter(e=>e.name.startsWith(`bloque`)),e.userData.pieces=e.children.slice(),e}var xC=e=>1-(1-e)**3,SC=e=>1+2.2800000000000002*(e-1)**3+1.28*(e-1)**2;function CC(e,t){for(let n of e.userData.pieces){let e=n.userData.b,r=Math.max(0,Math.min(1,(t-e.t0)/Math.max(1e-4,e.t1-e.t0)));if(n.userData._t=r,r<=0){n.visible=!1;continue}if(n.visible=!0,n.userData.fade){let e=n.material;e.opacity=r;let t=r<1;e.transparent!==t&&(e.transparent=t,e.depthWrite=!t,e.needsUpdate=!0);continue}let i=xC(r);n.position.lerpVectors(e.from,e.home,i);let a=n.userData.base,o=1-i;a?n.rotation.set(a.x+e.rot.x*o,a.y+e.rot.y*o,a.z+e.rot.z*o):n.rotation.set(e.rot.x*o,e.rot.y*o,e.rot.z*o);let s=.58+.42*SC(r);n.scale.set(e.scale.x*s,e.scale.y*s,e.scale.z*s)}let n=e.userData.panos;if(n&&n.length){let t=n.every(e=>e.userData._t>=.995);if(t!==e.userData._cubierto){e.userData._cubierto=t;for(let n of e.userData.bloques)n.userData._oculto=t}if(t)for(let t of e.userData.bloques)t.visible=!1}}var wC=(e=>()=>(e=e*16807%2147483647)/2147483647)(20260904),TC=`
varying vec3 vP;
void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,EC=`
varying vec3 vP;
uniform vec3 top, mid, bot, sunCol, sunDir;
uniform float sunI;
void main(){
  vec3 d = normalize(vP);
  float h = clamp(d.y*.5+.5, 0., 1.);
  vec3 c = mix(bot, mid, smoothstep(.34,.52,h));
  c = mix(c, top, smoothstep(.5,.95,h));
  float s = max(dot(d, normalize(sunDir)), 0.);
  c += sunCol * (pow(s, 220.) * 3.2 + pow(s, 9.) * .55) * sunI;
  gl_FragColor = vec4(c,1.);
}`,DC=[{h:5,top:1251886,mid:2763846,bot:5522522,sun:16742981,i:.18,amb:2765648,ambI:.55},{h:7.5,top:3889809,mid:10190742,bot:15114353,sun:16756848,i:1.5,amb:7307176,ambI:.8},{h:12,top:6000592,mid:10272998,bot:14280434,sun:16774370,i:3.1,amb:10335952,ambI:1.15},{h:17,top:5210564,mid:11125469,bot:15783604,sun:16769200,i:2.4,amb:10465478,ambI:1},{h:18.7,top:3099264,mid:11889237,bot:15837280,sun:16747069,i:1.9,amb:8022662,ambI:.75},{h:20.5,top:1779015,mid:5256794,bot:11030874,sun:16738874,i:.7,amb:4603998,ambI:.6},{h:23,top:527386,mid:1186352,bot:1910592,sun:10467071,i:.12,amb:1778744,ambI:.45}],OC=new Dh,kC=new Dh;function AC(e){let t=DC[0],n=DC[DC.length-1],r=0;for(let i=0;i<DC.length-1;i++)if(e>=DC[i].h&&e<=DC[i+1].h){t=DC[i],n=DC[i+1],r=(e-t.h)/(n.h-t.h);break}let i=(e,t)=>OC.setHex(e).lerp(kC.setHex(t),r).getHex();return{top:i(t.top,n.top),mid:i(t.mid,n.mid),bot:i(t.bot,n.bot),sun:i(t.sun,n.sun),i:t.i+(n.i-t.i)*r,amb:i(t.amb,n.amb),ambI:t.ambI+(n.ambI-t.ambI)*r}}function jC(e){let t=new aC({canvas:e,antialias:!0,powerPreference:`high-performance`});t.setPixelRatio(Math.min(devicePixelRatio,1.75)),t.shadowMap.enabled=!0,t.shadowMap.type=2,t.shadowMap.autoUpdate=!1,t.shadowMap.needsUpdate=!0,t.toneMapping=4,t.toneMappingExposure=1.12;let n=new Ah;n.fog=new kh(10269900,210,900);let r=new yy(38,1,.5,900);r.position.set(0,26,62);let i={top:{value:new Dh(6000592)},mid:{value:new Dh(10272998)},bot:{value:new Dh(14280434)},sunCol:{value:new Dh(16774370)},sunDir:{value:new Z(1,1,1)},sunI:{value:1}},a=new qg(new jv(500,32,20),new Bv({uniforms:i,vertexShader:TC,fragmentShader:EC,side:1,depthWrite:!1}));n.add(a);let o=new wy(16774370,3);o.castShadow=!0,o.shadow.mapSize.set(2048,2048);let s=o.shadow.camera;s.near=1,s.far=120,s.left=-26,s.right=26,s.top=26,s.bottom=-26,o.shadow.bias=-4e-4,o.shadow.normalBias=.14,n.add(o,o.target);let c=new sy(10335952,8023385,1.1);n.add(c);let l=new xy(16756838,0,40,2);l.position.set(0,2.2,0),n.add(l);let u=new xy(16761466,0,20,2);u.position.set(1.5,2.6,4.5),n.add(u);let d=new qg(new kv(1400,1400),new Hv({color:6647373,roughness:1}));d.rotation.x=-Math.PI/2,d.position.y=-.02,d.receiveShadow=!0,n.add(d);let f=new qg(new kv(1600,700,1,1),new Hv({color:2902622,roughness:.12,metalness:.65}));f.rotation.x=-Math.PI/2,f.position.set(0,.05,-540),n.add(f);let p=new bh;p.name=`catastro`;let m=new l_(1,1,1),h=[7962716,8685411,7174224,9539437,7897432].map(e=>new Hv({color:e,roughness:.96})),g=new Hv({color:11774100,roughness:1}),_=[];for(let e=0;e<9;e++)for(let t=0;t<7;t++){let n=(e-4)*26,r=(t-3)*26,i=22.6-wC()*5,a=22.6-wC()*5,o=.3+wC()*.9,s=new qg(m,h[(e*3+t)%h.length]);s.position.set(n+(wC()-.5)*1.6,o/2,r+(wC()-.5)*1.6),s.scale.set(i,o,a),s.receiveShadow=!0,p.add(s),_.push({m:s,i:e,j:t,x:n,z:r,w:i,d:a})}for(let e=0;e<10;e++){let t=new qg(m,g);t.position.set((e-9/2)*26,.04,0),t.scale.set(2.2,.08,182),t.receiveShadow=!0,p.add(t)}for(let e=0;e<8;e++){let t=new qg(m,g);t.position.set(0,.04,(e-7/2)*26),t.scale.set(234,.08,2.2),t.receiveShadow=!0,p.add(t)}n.add(p);let v=_.find(e=>e.i===4&&e.j===3);v.m.material=new Hv({color:9405025,roughness:.95}),v.m.position.set(0,.12,0),v.m.scale.set(23,.24,21);let y=new bh,b=new Fg({color:14247741,toneMapped:!1});for(let e=0;e<4;e++){let t=e/4*Math.PI*2+Math.PI/4,n=new qg(m,b);n.position.set(Math.cos(t)*9.4,1.1,Math.sin(t)*8.6),n.scale.set(.26,2.2,.26),y.add(n)}let x=new qg(new Av(10.4,10.8,72),new Fg({color:14247741,side:2,transparent:!0,opacity:.85,toneMapped:!1}));x.rotation.x=-Math.PI/2,x.position.y=.3,y.add(x),y.visible=!1,n.add(y);let S=new bh,C=new Hv({color:6047282,roughness:.95}),w=[5204794,6126146,4414515,6979914].map(e=>new Hv({color:e,roughness:.95})),T=new d_(1,1,7),E=new u_(.5,.6,1,6);for(let e=0;e<130;e++){let t=wC()*Math.PI*2,n=150+wC()*250,r=Math.cos(t)*n,i=Math.sin(t)*n*.8-40;if(i<-230)continue;let a=2.6+wC()*3.4,o=new qg(E,C);o.position.set(r,a*.32,i),o.scale.set(a*.18,a*.64,a*.18);let s=new qg(T,w[e%4]);s.position.set(r,a*.64+a*.62,i),s.scale.set(a*.62,a*1.4,a*.62),S.add(o,s)}let D=[13616822,12563617,14077373].map(e=>new Hv({color:e,roughness:.9})),O=new Hv({color:10244928,roughness:.85}),k=new d_(.72,1,4);_.forEach((e,t)=>{if(Math.abs(e.i-4)+Math.abs(e.j-3)<2||wC()>.62)return;let n=6+wC()*5,r=5+wC()*4,i=3+wC()*2.4,a=new qg(m,D[t%3]);a.position.set(e.x+(wC()-.5)*5,i/2+.3,e.z+(wC()-.5)*5),a.scale.set(n,i,r),a.castShadow=!0,a.receiveShadow=!0;let o=new qg(k,O),s=Math.max(n,r)*1.06;o.position.set(a.position.x,i+.3+.95,a.position.z),o.scale.set(s,1.9+wC()*.6,s),o.rotation.y=Math.PI/4,o.castShadow=!0,S.add(a,o)}),n.add(S);let A=bC();A.position.y=0,n.add(A);let j={renderer:t,scene:n,camera:r,house:A,plots:p,mark:y,cells:_,chosen:v,nature:S,ria:f,interior:l,farol:u,sun:o,hemi:c,sky:a,hour:11,dolly:1,setBuild(e){CC(A,e),t.shadowMap.needsUpdate=!0},setHour(e){j.hour=e;let r=AC(e);i.top.value.setHex(r.top),i.mid.value.setHex(r.mid),i.bot.value.setHex(r.bot),i.sunCol.value.setHex(r.sun),i.sunI.value=Math.min(1,r.i/1.6+.12);let a=(e-5.6)/(20.6-5.6),s=Math.PI*xm.clamp(a,-.12,1.12),d=Math.sin(s);o.position.set(-Math.cos(s)*74,Math.max(-14,d*62),24+Math.cos(s)*16),o.color.setHex(r.sun),o.intensity=Math.max(0,r.i),i.sunDir.value.copy(o.position).normalize(),c.color.setHex(r.amb),c.intensity=r.ambI,n.fog.color.setHex(r.mid),t.setClearColor(r.mid);let p=xm.smoothstep(e,17.4,20.2);l.intensity=p*90,u.intensity=p*22,fC.cristal.emissiveIntensity=p*2.4,fC.cristal.opacity=.42+p*.3,f.material.color.setHex(r.mid),f.material.roughness=.1+p*.25,t.shadowMap.needsUpdate=!0},resize(e,n){let i=e/n,a=16/9;r.fov=i>=a?38:Math.min(58,2*Math.atan(Math.tan(38*Math.PI/360)*a/i)*180/Math.PI),r.aspect=i,r.updateProjectionMatrix(),t.setSize(e,n,!1),j.dolly=i<.8?1.34:i<1.25?1.16:1},render(){t.render(n,r)}};return j.setHour(11),j.setBuild(0),j}var MC=(e,t)=>Array.from({length:e},(e,n)=>t(n)).join(``),$=`stroke="currentColor" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"`,NC=`stroke="currentColor" fill="none" stroke-width="1" stroke-linecap="round"`,PC=(e,t,n,r)=>`
  <rect x="${e}" y="${t}" width="${n}" height="${r}" ${$}/>
  <path d="M${e+n/2} ${t} V${t+r} M${e} ${t+r/2} H${e+n}" ${NC}/>
  <path d="M${e-6} ${t+r+4} H${e+n+6}" ${$}/>`,FC=(e,t,n,r,i=302)=>MC(5,n=>{let a=16+n*24,o=t+r,s=Math.max(0,i-o);return`<path d="M${e+a} ${o} L${e+a+s} ${i}" stroke="currentColor" fill="none" stroke-width=".8" opacity=".22"/>`}),IC=(e,t,n=1)=>`
  <path d="M${e-16*n} ${t} h${32*n} l${-5*n} ${26*n} h${-22*n} Z" ${$}/>
  <path d="M${e-16*n} ${t+7*n} h${32*n}" ${NC}/>
  ${MC(6,r=>{let i=-1.35+r*.44,a=(30+r%3*16)*n,o=e+Math.sin(i)*a,s=t-Math.cos(i)*a;return`<path d="M${e} ${t} Q${e+Math.sin(i)*a*.5-10*n} ${t-a*.55} ${o} ${s}" ${$}/>`})}`,LC=[{name:`Salón`,meta:`34 m² · Sur · 3 ventanales`,idx:`01`,wash:`#f3ece1`,ink:`#1e2a33`,tint:`rgba(217,103,61,.10)`,art:`
      <path d="M0 300 H400" ${$}/>
      ${PC(232,52,130,150)}
      ${FC(232,52,130,150,300)}
      <!-- sofá -->
      <path d="M28 232 h164 v56 H28 Z" ${$}/>
      <path d="M28 232 v-46 q0-12 12-12 h140 q12 0 12 12 v46" ${$}/>
      ${MC(3,e=>`<path d="M${44+e*50} 232 v-52 q0-8 8-8 h20 q8 0 8 8 v52" ${NC}/>`)}
      ${MC(4,e=>`<path d="M${36+e*50} 288 v14" ${$}/>`)}
      <path d="M14 302 h196" ${NC} opacity=".5"/>
      <!-- mesa baja -->
      <path d="M92 268 h104 v10 H92 Z" ${$} transform="translate(112 -8)"/>
      <path d="M212 278 v22 M300 278 v22" ${$}/>
      <path d="M228 268 h60" ${NC}/>
      <!-- lámpara de pie -->
      <path d="M370 300 v-96" ${$}/>
      <path d="M356 300 h28" ${$}/>
      <path d="M352 204 h36 l-8-30 h-20 Z" ${$}/>
      <!-- estantería -->
      <path d="M14 60 h64 v112 H14 Z" ${$}/>
      <path d="M14 98 h64 M14 136 h64" ${NC}/>
      ${MC(9,e=>`<path d="M${20+e%5*11} ${Math.floor(e/5)*38+68} v26" ${NC}/>`)}
      <!-- cuadro y planta -->
      <path d="M116 62 h84 v66 h-84 Z" ${$}/>
      <path d="M124 118 l24-34 18 22 14-16 12 28" ${NC}/>
      ${IC(214,300,.9)}
    `},{name:`Cocina`,meta:`18 m² · Isla central · Este`,idx:`02`,wash:`#eef1ec`,ink:`#22302c`,tint:`rgba(143,176,166,.16)`,art:`
      <path d="M0 310 H400" ${$}/>
      <!-- muebles bajos -->
      <path d="M20 218 h200 v92 H20 Z" ${$}/>
      ${MC(4,e=>`<path d="M${20+e*50} 218 v92" ${NC}/>`)}
      ${MC(4,e=>`<path d="M${34+e*50} 236 h22" ${$}/>`)}
      <path d="M14 210 h212 v10 H14 Z" ${$}/>
      <!-- fregadero + grifo -->
      <path d="M46 210 h56 v-2" ${NC}/>
      <path d="M50 206 h48 v-16 h-48 Z" ${$} transform="translate(0 20)"/>
      <path d="M74 210 v-34 q0-12 14-12 t14 12 v8" ${$}/>
      <!-- azulejos -->
      ${MC(18,e=>`<path d="M${20+e%6*34} ${120+Math.floor(e/6)*30} h30 v26 h-30 Z" ${NC} opacity=".55"/>`)}
      <!-- campana -->
      <path d="M132 118 h74 l14-46 h-102 Z" ${$}/>
      <path d="M158 72 v-24" ${$}/>
      <!-- alacenas altas -->
      <path d="M236 60 h60 v78 h-60 Z" ${$}/>
      <path d="M236 99 h60" ${NC}/>
      <path d="M282 78 v18 M282 118 v14" ${$}/>
      <!-- ventana -->
      ${PC(310,92,76,108)}
      ${FC(310,92,76,108,310)}
      <!-- isla -->
      <path d="M248 244 h124 v66 H248 Z" ${$}/>
      <path d="M242 236 h136 v10 H242 Z" ${$}/>
      ${MC(3,e=>`<path d="M${278+e*34} 236 v-14 q0-10 8-10 t8 10 v14" ${NC}/>`)}
      ${MC(2,e=>`<path d="M${268+e*62} 310 v-4" ${NC}/>`)}
      <!-- tarros -->
      ${MC(3,e=>`<path d="M${34+e*20} 210 v-22 h12 v22" ${NC}/>`)}
    `},{name:`Dormitorio`,meta:`16 m² · Vestidor · Levante`,idx:`03`,wash:`#f2ecec`,ink:`#2b2530`,tint:`rgba(217,103,61,.08)`,art:`
      <path d="M0 312 H400" ${$}/>
      <!-- cabecero -->
      <path d="M96 214 v-98 q0-16 16-16 h176 q16 0 16 16 v98" ${$}/>
      ${MC(5,e=>`<path d="M${112+e*36} 214 v-108" ${NC} opacity=".6"/>`)}
      <!-- cama -->
      <path d="M88 214 h224 v58 H88 Z" ${$}/>
      <path d="M88 246 q112 -18 224 0" ${$}/>
      ${MC(6,e=>`<path d="M${104+e*34} 246 q4 16 0 26" ${NC} opacity=".5"/>`)}
      <path d="M100 272 v20 M300 272 v20" ${$}/>
      <!-- almohadas -->
      <path d="M112 214 q-6 -30 22 -30 h44 q26 0 20 30 Z" ${$}/>
      <path d="M212 214 q-6 -30 22 -30 h44 q26 0 20 30 Z" ${$}/>
      <!-- mesillas + lámparas -->
      ${MC(2,e=>{let t=e?322:26;return`<path d="M${t} 226 h52 v56 h-52 Z" ${$}/>
                <path d="M${t} 250 h52" ${NC}/>
                <path d="M${t+26} 226 v-16" ${$}/>
                <path d="M${t+10} 210 h32 l-6 -26 h-20 Z" ${$}/>
                <path d="M${t+18} 262 h16" ${$}/>`})}
      <!-- ventana con cortina -->
      ${PC(150,24,100,62)}
      <path d="M144 20 h112" ${$}/>
      ${MC(7,e=>`<path d="M${148+e*16} 24 q6 40 0 68" ${NC} opacity=".5"/>`)}
      <!-- alfombra -->
      <path d="M60 300 h280" ${NC}/>
      ${MC(10,e=>`<path d="M${64+e*28} 300 v8" ${NC} opacity=".45"/>`)}
    `},{name:`Baño`,meta:`9 m² · Bañera exenta · Cenital`,idx:`04`,wash:`#eaf0f2`,ink:`#1f2c33`,tint:`rgba(127,159,212,.14)`,art:`
      <path d="M0 308 H400" ${$}/>
      <!-- azulejo hexagonal -->
      ${MC(14,e=>`<path d="M${24+e%7*54+Math.floor(e/7)%2*27} ${322+Math.floor(e/7)*0-12} l14 8 v16 l-14 8 -14 -8 v-16 Z" ${NC} opacity=".4"/>`)}
      <!-- bañera -->
      <path d="M44 214 q0 -14 16 -14 h132 q16 0 16 14 v44 q0 20 -22 20 h-120 q-22 0 -22 -20 Z" ${$}/>
      <path d="M58 218 q0 -6 10 -6 h116 q10 0 10 6" ${NC}/>
      ${MC(4,e=>`<path d="M${62+e*42} 278 v18 l-6 12" ${$}/>`)}
      <path d="M36 232 q-16 -60 22 -60 h10" ${$}/>
      <path d="M62 172 h18" ${$}/>
      <!-- lavabo con pie -->
      <path d="M256 208 h96 q6 0 4 10 l-8 22 q-2 8 -12 8 h-64 q-10 0 -12 -8 l-8 -22 q-2 -10 4 -10 Z" ${$}/>
      <path d="M292 248 v40 q0 8 12 8 h0 q12 0 12 -8 v-40" ${$}/>
      <path d="M270 296 h68" ${$}/>
      <path d="M304 208 v-24 q0 -10 10 -10 h12" ${$}/>
      <!-- espejo -->
      <circle cx="304" cy="112" r="48" ${$}/>
      <path d="M280 76 a48 48 0 0 0 -18 30" ${NC}/>
      <path d="M304 160 v14" ${NC}/>
      <!-- apliques -->
      ${MC(2,e=>`<path d="M${242+e*124} 106 v-14 M${236+e*124} 106 h12" ${$}/>`)}
      <!-- toallero -->
      <path d="M40 122 h132" ${$}/>
      ${MC(2,e=>`<path d="M${64+e*62} 122 q-4 44 4 56 h28 q8 -12 4 -56" ${$}/>`)}
      ${MC(4,e=>`<path d="M${70+e*6} 132 v34" ${NC} opacity=".4"/>`)}
      ${IC(376,300,.7)}
    `},{name:`Terraza`,meta:`22 m² · Vistas a la ría · Poniente`,idx:`05`,wash:`#f2eee3`,ink:`#243028`,tint:`rgba(143,176,166,.2)`,art:`
      <!-- horizonte y ría -->
      <path d="M0 168 H400" ${NC} opacity=".5"/>
      ${MC(5,e=>`<path d="M${10+e*84} ${186+e%2*10} q22 -10 44 0 t44 0" ${NC} opacity=".45"/>`)}
      <circle cx="316" cy="120" r="26" ${$}/>
      ${MC(3,e=>`<path d="M${28+e*26} ${104-e*8} q10 -8 20 0 q-10 -4 -20 0" ${NC}/>`)}
      <!-- barandilla -->
      <path d="M0 236 H400 M0 214 H400" ${$}/>
      ${MC(10,e=>`<path d="M${22+e*40} 214 v56" ${NC}/>`)}
      <path d="M0 270 H400" ${$}/>
      <!-- suelo de tarima -->
      ${MC(3,e=>`<path d="M0 ${296+e*22} H400" ${NC} opacity=".3"/>`)}
      <!-- mesa y sillas -->
      <path d="M132 292 h136 v8 H132 Z" ${$}/>
      <path d="M150 300 v34 M250 300 v34" ${$}/>
      ${MC(2,e=>{let t=e?292:52;return`<path d="M${t} 300 h48 v8 h-48 Z" ${$}/>
                <path d="M${t+(e?44:0)} 300 v-46 q0 -8 6 -8" ${$}/>
                <path d="M${t+4} 308 v26 M${t+42} 308 v26" ${$}/>`})}
      <!-- macetas -->
      ${IC(198,292,.8)}
      ${IC(360,300,.6)}
      <path d="M84 292 h28 l-4 -22 h-20 Z" ${$}/>
      ${MC(3,e=>`<path d="M98 270 q${-14+e*14} -18 ${-6+e*6} -34" ${$}/>`)}
    `},{name:`Estudio`,meta:`11 m² · Doble altura · Norte`,idx:`06`,wash:`#efeee9`,ink:`#2a2a24`,tint:`rgba(217,103,61,.07)`,art:`
      <path d="M0 306 H400" ${$}/>
      ${PC(30,40,118,154)}
      ${FC(30,40,118,154,306)}
      <!-- escritorio -->
      <path d="M58 244 h182 v10 H58 Z" ${$}/>
      <path d="M70 254 v52 M228 254 v52"  ${$}/>
      <path d="M228 254 h-40 v34 h40" ${NC}/>
      ${MC(2,e=>`<path d="M196 ${264+e*14} h26" ${NC}/>`)}
      <!-- portátil y papeles -->
      <path d="M104 244 l10 -34 h52 l10 34 Z" ${$}/>
      <path d="M114 210 h52" ${NC}/>
      <path d="M76 244 l6 -12 h30 l-4 12" ${NC}/>
      <!-- flexo -->
      <path d="M222 244 v-22 l30 -34" ${$}/>
      <path d="M240 188 l24 -6 -12 22 Z" ${$}/>
      <!-- silla -->
      <path d="M256 288 h56 v10 h-56 Z" ${$}/>
      <path d="M310 288 v-64 q0 -10 -12 -10 h-22" ${$}/>
      <path d="M282 298 v18" ${$}/>
      ${MC(4,e=>`<path d="M282 316 l${-24+e*16} 12" ${NC}/>`)}
      <!-- balda con libros -->
      <path d="M256 128 h124" ${$}/>
      ${MC(11,e=>`<path d="M${262+e*10.5} 128 v${-22-e%4*7}" ${NC}/>`)}
      <path d="M300 128 v34" ${NC} opacity=".4"/>
      <!-- corcho -->
      <path d="M180 62 h96 v54 h-96 Z" ${$}/>
      ${MC(4,e=>`<path d="M${192+e%2*44} ${74+Math.floor(e/2)*24} h28 v14 h-28 Z" ${NC} opacity=".6"/>`)}
    `}],RC=[{badge:`Nueva`,t:`Casa da Braña`,loc:`Combarro · Poio`,price:`485.000 €`,tags:[`186 m²`,`4 hab`,`Cert. A`],wash:`linear-gradient(160deg,#e8dfcf,#cfc0a9)`,ink:`#2a3038`,art:`<path d="M40 250 H360" ${$}/>
      <path d="M78 250 V132 h164 v118" ${$}/>
      <path d="M62 134 L160 62 258 134" ${$}/>
      ${MC(7,e=>`<path d="M${68+e*28} ${128-e*0} L${94+e*28} 108" ${NC} opacity=".4"/>`)}
      ${MC(4,e=>`<rect x="${96+e%2*84}" y="${152+Math.floor(e/2)*54}" width="46" height="38" ${$}/>`)}
      ${MC(4,e=>`<path d="M${119+e%2*84} ${152+Math.floor(e/2)*54} v38" ${NC}/>`)}
      <path d="M244 250 v-72 h58 v72" ${$}/>
      <path d="M236 180 h74" ${$}/>
      ${MC(4,e=>`<path d="M${252+e*14} 250 v-64" ${NC} opacity=".5"/>`)}
      <path d="M206 96 v-30 h20 v42" ${$}/>
      ${IC(320,250,.8)}`},{badge:`Exclusiva`,t:`Ático Mirador`,loc:`Pontevedra centro`,price:`392.000 €`,tags:[`118 m²`,`3 hab`,`Cert. B`],wash:`linear-gradient(160deg,#dfe4e6,#bcc6cb)`,ink:`#1f2a33`,art:`<path d="M20 250 H380" ${$}/>
      <path d="M70 250 V90 h180 v160" ${$}/>
      ${MC(3,e=>`<path d="M70 ${140+e*40} h180" ${NC}/>`)}
      ${MC(9,e=>`<rect x="${86+e%3*58}" y="${104+Math.floor(e/3)*40}" width="42" height="24" ${NC}/>`)}
      <path d="M250 250 v-56 h96 v56" ${$}/>
      ${MC(10,e=>`<path d="M${258+e*9.6} 194 v56" ${NC} opacity=".45"/>`)}
      <path d="M244 194 h108" ${$}/>
      ${MC(3,e=>`<path d="M${272+e*30} 194 v-26 q0 -10 10 -10" ${NC}/>`)}
      <path d="M100 62 h40 v28" ${NC}/>
      ${IC(46,250,.7)}`},{badge:`Reformada`,t:`Bajo con huerta`,loc:`Marín · A Raña`,price:`268.000 €`,tags:[`94 m²`,`2 hab`,`Cert. C`],wash:`linear-gradient(160deg,#e4e8dd,#c5cdb8)`,ink:`#26301f`,art:`<path d="M10 252 H390" ${$}/>
      <path d="M92 252 V148 h150 v104" ${$}/>
      <path d="M76 150 L167 88 258 150" ${$}/>
      <path d="M110 252 v-58 h44 v58" ${$}/>
      <path d="M186 178 h42 v40 h-42 Z" ${$}/>
      <path d="M207 178 v40 M186 198 h42" ${NC}/>
      ${MC(6,e=>`<path d="M${300+e%3*26} 252 v-30" ${$}/>`)}
      ${MC(9,e=>`<path d="M${294+e%3*26} ${222-Math.floor(e/3)*12} q6 -8 12 0" ${NC} opacity=".6"/>`)}
      <path d="M270 252 v-84 h4" ${NC}/>
      ${MC(5,e=>`<path d="M${18+e*12} 252 v-18 q6 -10 12 0 v18" ${NC} opacity=".5"/>`)}
      ${IC(66,252,.9)}`}];vc.registerPlugin(Y);var zC=matchMedia(`(prefers-reduced-motion: reduce)`).matches,BC=(e,t=document)=>t.querySelector(e),VC=(e,t=document)=>[...t.querySelectorAll(e)],HC=e=>Math.min(1,Math.max(0,e)),UC=(e,t,n)=>e+(t-e)*n,WC=new of({duration:1.15,lerp:.1,wheelMultiplier:1,smoothWheel:!zC});WC.on(`scroll`,Y.update),vc.ticker.add(e=>WC.raf(e*1e3)),vc.ticker.lagSmoothing(0),WC.stop();function GC(e){try{let t=ar(e,{chars:{wrap:`clip`},words:!1,lines:!1});if(t?.chars?.length)return t.chars}catch{}let t=e.textContent;return e.textContent=``,[...t].map(t=>{let n=document.createElement(`span`);return n.className=`char`,n.textContent=t===` `?`\xA0`:t,e.appendChild(n),n})}function KC(e){return e.innerHTML=e.innerHTML.split(/<br\s*\/?>/i).map(e=>`<span class="rl-m" style="display:block;overflow:hidden"><span class="rl" style="display:block">${e}</span></span>`).join(``),VC(`.rl`,e)}var qC=jC(BC(`#gl`)),JC=()=>qC.resize(innerWidth,innerHeight);addEventListener(`resize`,JC),JC();var YC=[{at:0,p:[-30,82,138],t:[0,0,-18]},{at:.075,p:[-54,68,116],t:[-4,0,-14]},{at:.2,p:[-76,44,60],t:[-12,0,-6]},{at:.31,p:[-34,26,24],t:[0,1,0]},{at:.38,p:[10,16,30],t:[0,2.4,0]},{at:.46,p:[27,11,21],t:[0,3.2,0]},{at:.56,p:[22,8.5,25],t:[0,3.4,0]},{at:.66,p:[-6,7.4,28],t:[0,3.4,0]},{at:.74,p:[-25,9,16],t:[0,3.6,0]},{at:.84,p:[-20,7,23],t:[0,3.3,0]},{at:.93,p:[4,6.2,26],t:[0,3.4,0]},{at:1,p:[20,6.6,23],t:[0,3.4,0]}],XC={journey:0,build:0,hour:11,mx:0,my:0,tmx:0,tmy:0},ZC={x:-30,y:82,z:138},QC={x:0,y:0,z:-18};function $C(e){let t=YC[0],n=YC[YC.length-1],r=0;for(let i=0;i<YC.length-1;i++)if(e>=YC[i].at&&e<=YC[i+1].at){t=YC[i],n=YC[i+1],r=(e-t.at)/(n.at-t.at);break}let i=r*r*(3-2*r);return{p:t.p.map((e,t)=>UC(e,n.p[t],i)),t:t.t.map((e,t)=>UC(e,n.t[t],i))}}addEventListener(`pointermove`,e=>{XC.tmx=(e.clientX/innerWidth-.5)*2,XC.tmy=(e.clientY/innerHeight-.5)*2},{passive:!0});var ew=0;function tw(e){requestAnimationFrame(tw),ew=e*.001;let t=$C(XC.journey),n=qC.dolly||1;if(n!==1)for(let e=0;e<3;e++)t.p[e]=t.t[e]+(t.p[e]-t.t[e])*n;XC.mx=UC(XC.mx,XC.tmx,.05),XC.my=UC(XC.my,XC.tmy,.05);let r=XC.journey<.1?1:.35,i=.09;ZC.x=UC(ZC.x,t.p[0]+XC.mx*3.2*r+Math.sin(ew*.21)*1.4*r,i),ZC.y=UC(ZC.y,t.p[1]-XC.my*1.8*r+Math.sin(ew*.17)*.55*r,i),ZC.z=UC(ZC.z,t.p[2],i),QC.x=UC(QC.x,t.t[0],i),QC.y=UC(QC.y,t.t[1],i),QC.z=UC(QC.z,t.t[2],i),qC.camera.position.set(ZC.x,ZC.y,ZC.z),qC.camera.lookAt(QC.x,QC.y,QC.z),qC.mark.rotation.y=ew*.12,qC.render()}requestAnimationFrame(tw);function nw(){document.body.classList.add(`is-locked`);let e=BC(`#preloader`),t=BC(`#preCount`),n=BC(`#preBar`),r=VC(`.pm`).map(e=>Ln(e)),i={n:0},a=ln({defaults:{ease:`inOut(3)`}}).add(r,{draw:[`0 0`,`0 1`],duration:1500,delay:Pn(140)},0).add(n,{width:[`0%`,`100%`],duration:2100,ease:`inOut(2)`},0).add(i,{n:100,duration:2100,ease:`inOut(2)`,modifier:kn(0),onUpdate:()=>{t.textContent=String(Math.round(i.n)).padStart(2,`0`)}},0).add(`.pre__meta, .pre__bar`,{opacity:0,duration:400},2150).add(e,{opacity:[1,0],scale:[1,1.06],duration:900,ease:`out(3)`,onComplete:()=>{e.style.display=`none`}},2350).call(()=>{document.body.classList.remove(`is-locked`),WC.start(),rw()},2300);(zC||gw)&&(a.seek(a.duration),a.pause())}function rw(){let e=VC(`.hero__title [data-split]`).flatMap(e=>GC(e));ln({defaults:{ease:`out(4)`}}).add(e,{y:[{from:`110%`}],rotate:[{from:8}],opacity:[{from:0,to:1,duration:300}],duration:1250,delay:Pn(26,{from:`first`})},0).add(`.hero__kicker`,{opacity:[0,1],y:[16,0],duration:900},250).add(`.hero__lead, .hero__scroll`,{opacity:[0,1],y:[22,0],duration:1e3,delay:Pn(110)},700).add(`.hero__stats li`,{opacity:[0,1],y:[26,0],duration:900,delay:Pn(90)},900).add(`.hud, .chapter`,{opacity:[0,1],duration:800},400),iw(VC(`.hero__stats b`))}function iw(e){e.forEach(e=>{if(e.dataset.done)return;e.dataset.done=`1`;let t=+e.dataset.count,n=e.dataset.suffix||``,r={v:0};tn(r,{v:t,duration:1900,ease:`out(4)`,onUpdate:()=>{e.textContent=(t>=1e3?Math.round(r.v).toLocaleString(`es-ES`):Math.round(r.v))+n}})})}function aw(){VC(`[data-reveal-lines]`).forEach(e=>{let t=KC(e);Y.create({trigger:e,start:`top 82%`,once:!0,onEnter:()=>tn(t,{y:[{from:`108%`}],opacity:[{from:0,to:1,duration:200}],duration:1150,ease:`out(4)`,delay:Pn(90)})})}),VC(`[data-reveal]`).forEach(e=>Y.create({trigger:e,start:`top 86%`,once:!0,onEnter:()=>tn(e,{opacity:[0,1],y:[24,0],duration:1e3,ease:`out(3)`})})),VC(`[data-stagger]`).forEach(e=>Y.create({trigger:e,start:`top 88%`,once:!0,onEnter:()=>tn([...e.children],{opacity:[0,1],y:[26,0],scale:[{from:.96}],duration:900,ease:`out(3)`,delay:Pn(80)})})),VC(`[data-count]`).forEach(e=>Y.create({trigger:e,start:`top 90%`,once:!0,onEnter:()=>iw([e])}))}function ow(){Y.create({trigger:`#acto1`,start:`top top`,endTrigger:`#acto5`,end:`bottom bottom`,scrub:!0,onUpdate:e=>{XC.journey=e.progress}}),Y.create({trigger:`#acto2`,start:`top bottom`,end:`bottom top`,onToggle:e=>{qC.mark.visible=e.isActive},onUpdate:e=>{let t=e.progress;qC.mark.children.forEach((e,n)=>{let r=HC((t-.18-n*.04)*4.5);e.scale.y=e.name===``&&e.geometry.type===`RingGeometry`?1:2.2*r,e.visible=r>0}),qC.cells.forEach((e,n)=>{let r=Math.hypot(e.i-4,e.j-3),i=HC(t*1.5-r*.08);e.m.material.emissive?.setRGB(0,0,0),e.m.position.y=e.m.scale.y/2-(1-i)*.4})}});let e=VC(`#buildList li`);Y.create({trigger:`#acto4`,start:`top top`,end:`bottom bottom`,scrub:.6,onUpdate:t=>{let n=HC(t.progress*1.06);XC.build=n,qC.setBuild(n);let r=Math.min(e.length-1,Math.floor(n*e.length));e.forEach((e,t)=>{e.classList.toggle(`is-on`,t===r),e.classList.toggle(`is-done`,t<r)})}}),Y.create({trigger:`#acto5`,start:`top bottom`,onEnter:()=>{XC.build=1,qC.setBuild(1)}}),Y.create({trigger:`#acto3`,start:`top bottom`,onLeaveBack:()=>{qC.setBuild(0)}});let t=BC(`#clock b`),n=BC(`#clockFill`);Y.create({trigger:`#acto5`,start:`top top`,end:`bottom bottom`,scrub:.5,onUpdate:e=>{let r=11+e.progress*11.9;qC.setHour(r);let i=String(Math.floor(r)%24).padStart(2,`0`),a=String(Math.floor(r%1*60)).padStart(2,`0`);t.textContent=`${i}:${a}`,n.style.left=`calc(${e.progress*100}% - 3.5px)`}}),Y.create({trigger:`#acto5`,start:`top bottom`,end:`bottom top`,onLeaveBack:()=>qC.setHour(11),onLeave:()=>qC.setHour(18.9)})}function sw(){let e=BC(`#blueprint`),t=BC(`.bp__grid`,e),n=``;for(let e=0;e<=620;e+=20)n+=`M${e} 0 V460 `;for(let e=0;e<=460;e+=20)n+=`M0 ${e} H620 `;let r=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);r.setAttribute(`d`,n),t.appendChild(r);let i=VC(`.bp__walls path`,e).map(e=>Ln(e)),a=VC(`.bp__thin path, .bp__thin rect, .bp__thin circle`,e).map(e=>Ln(e)),o=VC(`.bp__dims path`,e).map(e=>Ln(e)),s=VC(`.bp__t`,e);Sn(s,{opacity:0}),Sn(t,{opacity:0}),Y.create({trigger:`#acto3`,start:`top 62%`,once:!0,onEnter:()=>ln({defaults:{ease:`inOut(3)`}}).add(t,{opacity:[0,.18],duration:900},0).add(i,{draw:[`0 0`,`0 1`],duration:1400,delay:Pn(120)},200).add(a,{draw:[`0 0`,`0 1`],duration:900,delay:Pn(70)},1e3).add(o,{draw:[`0 0`,`0 1`],duration:700,delay:Pn(90)},1600).add(s,{opacity:[0,.8],translateY:[6,0],duration:700,delay:Pn(80)},1500)}),vc.to(e,{rotateX:-14,rotateZ:3,scale:1.03,ease:`none`,scrollTrigger:{trigger:`#acto3`,start:`top bottom`,end:`bottom top`,scrub:1}}),vc.set(e,{transformPerspective:1200,transformOrigin:`50% 60%`})}function cw(){let e=BC(`#roomsTrack`);e.insertAdjacentHTML(`beforeend`,LC.map(e=>`
    <article class="room" style="--rw:${e.wash};--rc:${e.ink}">
      <div class="room__art">
        <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">${e.art}</svg>
        <div class="room__wash" style="background:${e.tint}"></div>
      </div>
      <div class="room__foot">
        <div><h3 class="room__name">${e.name}</h3><span class="room__meta">${e.meta}</span></div>
        <span class="room__idx">${e.idx}</span>
      </div>
    </article>`).join(``));let t=VC(`.room`,e);t.forEach(e=>{let t=VC(`.room__art svg > *`,e);if(!t.length)return;let n=t.map(e=>Ln(e));Sn(t,{opacity:0}),e.dataset.pending=`1`,e._draw=()=>{e.dataset.pending&&(delete e.dataset.pending,tn(t,{opacity:[0,1],duration:200,delay:Pn(9)}),tn(n,{draw:[`0 0`,`0 1`],duration:900,ease:`out(3)`,delay:Pn(11)}))}});let n=()=>Math.max(0,e.scrollWidth-innerWidth+80);Y.create({trigger:`#acto6`,start:`top top`,end:()=>`+=${Math.max(1,n())}`,pin:!0,pinSpacing:!0,scrub:.8,invalidateOnRefresh:!0,anticipatePin:1,onUpdate:r=>{let i=-r.progress*n();vc.set(e,{x:i}),t.forEach(e=>{let t=e.getBoundingClientRect();t.left<innerWidth*.96&&t.right>0&&e._draw?.()})}}),Y.create({trigger:`#acto6`,start:`top 60%`,once:!0,onEnter:()=>t.slice(0,2).forEach(e=>e._draw?.())})}function lw(){let e=[2016,2018,2020,2022,2024,2026],t=[1490,1620,1735,2110,2480,2840],n=e=>34+594*(e/(t.length-1)),r=e=>16+218*(1-(e-1300)/1700),i=`M${n(0)} ${r(t[0])}`;for(let e=1;e<t.length;e++){let a=n(e-1),o=n(e),s=(a+o)/2;i+=` C${s} ${r(t[e-1])} ${s} ${r(t[e])} ${o} ${r(t[e])}`}BC(`#chartLine`).setAttribute(`d`,i),BC(`#chartArea`).setAttribute(`d`,`${i} L${n(t.length-1)} 234 L${n(0)} 234 Z`);let a=``;for(let e=0;e<=4;e++){let t=16+218*e/4;a+=`M34 ${t} H628 `}let o=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);o.setAttribute(`d`,a),BC(`.chart__grid`).appendChild(o),BC(`#chartDots`).innerHTML=t.map((e,t)=>`<circle cx="${n(t)}" cy="${r(e)}" r="4.5" fill="var(--accent)"/>`).join(``),BC(`#chartX`).innerHTML=e.map(e=>`<span>${e}</span>`).join(``);let s=Ln(BC(`#chartLine`));Sn([`#chartArea`,`#chartDots circle`,`.chart__grid`],{opacity:0}),Y.create({trigger:`#chart`,start:`top 78%`,once:!0,onEnter:()=>ln().add(`.chart__grid`,{opacity:[0,.14],duration:700},0).add(s,{draw:[`0 0`,`0 1`],duration:1800,ease:`inOut(3)`},100).add(`#chartArea`,{opacity:[0,1],duration:1200,ease:`out(2)`},500).add(`#chartDots circle`,{opacity:[0,1],scale:[{from:0}],duration:700,ease:xn({stiffness:160,damping:11}),delay:Pn(120)},700)})}function uw(){let e=BC(`#marquee`),t=[`Tasación en 72 h`,`✳`,`Informe técnico`,`✳`,`Reforma llave en mano`,`✳`,`Fotografía y plano 3D`,`✳`,`Gestión hipotecaria`,`✳`].map(e=>e===`✳`?`<span><i>✳</i></span>`:`<span>${e}</span>`).join(``);e.innerHTML=t+t+t;let n=()=>e.scrollWidth/3;tn(e,{x:[0,()=>-n()],duration:22e3,ease:`linear`,loop:!0}),vc.to(e,{x:`-=260`,ease:`none`,scrollTrigger:{trigger:`.marquee`,start:`top bottom`,end:`bottom top`,scrub:1}})}function dw(){BC(`#catGrid`).innerHTML=RC.map(e=>`
    <article class="prop" data-magnetic data-cursor="Ver ficha" style="--pw:${e.wash}">
      <span class="prop__badge">${e.badge}</span>
      <div class="prop__art"><svg viewBox="0 0 400 300" style="color:${e.ink}">${e.art}</svg></div>
      <div class="prop__body">
        <h3 class="prop__t">${e.t}</h3>
        <span class="prop__loc">${e.loc}</span>
        <div class="prop__row">
          <span class="prop__price">${e.price}</span>
          <span class="prop__tags">${e.tags.map(e=>`<i style="font-style:normal">${e}</i>`).join(``)}</span>
        </div>
      </div>
    </article>`).join(``),VC(`.prop`).forEach((e,t)=>{let n=VC(`.prop__art svg > *`,e),r=n.map(e=>Ln(e));Sn(n,{opacity:0}),Y.create({trigger:e,start:`top 84%`,once:!0,onEnter:()=>{tn(e,{opacity:[0,1],y:[40,0],duration:1e3,ease:`out(3)`,delay:t*110}),tn(n,{opacity:[0,1],duration:180,delay:Pn(8,{start:300+t*110})}),tn(r,{draw:[`0 0`,`0 1`],duration:1e3,ease:`out(3)`,delay:Pn(12,{start:300+t*110})})}}),Sn(e,{opacity:0}),e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect(),r=(t.clientX-n.left)/n.width-.5,i=(t.clientY-n.top)/n.height-.5;vc.to(e,{rotateY:r*9,rotateX:-i*9,y:-8,duration:.5,transformPerspective:900,ease:`power3.out`})}),e.addEventListener(`pointerleave`,()=>vc.to(e,{rotateY:0,rotateX:0,y:0,duration:.8,ease:`elastic.out(1,.5)`}))})}function fw(){if(matchMedia(`(hover:none)`).matches)return;let e=BC(`#cursor`),t=BC(`.cursor__dot`,e),n=BC(`.cursor__ring`,e),r=BC(`.cursor__label`,e),i={x:innerWidth/2,y:innerHeight/2},a={...i};addEventListener(`pointermove`,e=>{i.x=e.clientX,i.y=e.clientY},{passive:!0});let o=()=>{a.x=UC(a.x,i.x,.18),a.y=UC(a.y,i.y,.18),t.style.transform=`translate(${i.x}px,${i.y}px) translate(-50%,-50%)`,n.style.transform=`translate(${a.x}px,${a.y}px) translate(-50%,-50%) scale(${e.dataset.big?1.9:1})`,r.style.transform=`translate(${a.x}px,${a.y+34}px) translate(-50%,-50%)`,requestAnimationFrame(o)};o();let s=`a,button,[data-cursor],.prop,.room`;document.addEventListener(`pointerover`,t=>{let i=t.target.closest(s);i&&(e.dataset.big=`1`,r.textContent=i.dataset.cursor||``,tn(r,{opacity:+!!i.dataset.cursor,duration:300}),tn(n,{opacity:.35,duration:300}))}),document.addEventListener(`pointerout`,t=>{t.target.closest(s)&&(delete e.dataset.big,tn(r,{opacity:0,duration:200}),tn(n,{opacity:1,duration:300}))}),VC(`[data-magnetic]`).forEach(e=>{e.addEventListener(`pointermove`,t=>{let n=e.getBoundingClientRect();vc.to(e,{x:(t.clientX-n.left-n.width/2)*.28,y:(t.clientY-n.top-n.height/2)*.34,duration:.5,ease:`power3.out`})}),e.addEventListener(`pointerleave`,()=>vc.to(e,{x:0,y:0,duration:1,ease:`elastic.out(1,.4)`}))})}function pw(){let e=BC(`#progressBar`),t=BC(`.chapter__n`),n=BC(`.chapter__t`);Y.create({start:0,end:`max`,scrub:!0,onUpdate:t=>{e.style.width=(t.progress*100).toFixed(2)+`%`}});let r=VC(`.sec[data-chapter]`),i=VC(`#hudNav a`),a=null,o=()=>{let e=innerHeight*.55,o=r[0];for(let t of r){let n=t.getBoundingClientRect();n.top<=e&&n.bottom>e&&(o=t)}o.id!==a&&(a=o.id,i.forEach(e=>e.classList.toggle(`is-on`,e.getAttribute(`href`)===`#`+o.id)),tn([t,n],{opacity:[1,0],y:[0,-8],duration:200,ease:`in(2)`,onComplete:()=>{t.textContent=o.dataset.chapter,n.textContent=o.dataset.title,tn([t,n],{opacity:[0,1],y:[8,0],duration:420,ease:`out(3)`})}}))};Y.create({start:0,end:`max`,onUpdate:o,onRefresh:o}),t.textContent=`I`,n.textContent=`El horizonte`,a=`acto1`,Y.create({trigger:`.foot`,start:`top 92%`,onEnter:()=>tn(`#chapter`,{opacity:0,duration:350}),onLeaveBack:()=>tn(`#chapter`,{opacity:1,duration:350})}),VC(`#hudNav a, .hud__brand, .hud__cta`).forEach(e=>e.addEventListener(`click`,t=>{let n=e.getAttribute(`href`);n?.startsWith(`#`)&&(t.preventDefault(),WC.scrollTo(n,{offset:-10,duration:1.6}))}))}function mw(){let e=BC(`#endForm`),t=BC(`#endOk`),n=VC(`.end__title [data-split]`);Y.create({trigger:`.end__title`,start:`top 82%`,once:!0,onEnter:()=>{tn(n.flatMap(GC),{y:[{from:`110%`}],opacity:[{from:0,to:1,duration:250}],duration:1200,ease:`out(4)`,delay:Pn(22)})}}),e.addEventListener(`submit`,n=>{n.preventDefault(),t.hidden=!1,tn(t,{opacity:[0,1],y:[10,0],duration:600,ease:`out(3)`}),tn(e.querySelector(`button`),{scale:[1,.94,1],duration:600,ease:xn({stiffness:190,damping:9})});try{lr?.(t,{duration:900})}catch{}})}var hw=new URLSearchParams(location.search),gw=hw.has(`y`)||hw.has(`to`)||hw.get(`pre`)===`0`;aw(),ow(),sw(),cw(),lw(),uw(),dw(),fw(),pw(),mw(),nw(),requestAnimationFrame(()=>Y.refresh()),addEventListener(`load`,()=>{if(Y.refresh(),gw){document.body.classList.remove(`is-locked`);let e=document.querySelector(`#preloader`);e&&(e.style.display=`none`),WC.start();let t=null,n=()=>{let e=hw.get(`to`),t=hw.get(`y`);if(!e&&t==null)return null;if(WC.scrollTo(0,{immediate:!0,force:!0}),Y.refresh(),e){let t=document.getElementById(e);return t?t.getBoundingClientRect().top+scrollY+ +(hw.get(`off`)||0):null}let n=document.body.scrollHeight-innerHeight;return+t<=1&&t!==`0`||t.includes(`.`)?+t*n:+t},r=()=>{t??=n(),t!=null&&WC.scrollTo(t,{immediate:!0,force:!0})};r();let i=0,a=setInterval(()=>{r(),++i>40&&clearInterval(a)},120);addEventListener(`resize`,()=>{t=null,i=0})}}),window.__M={world:qC,S:XC,CAM:YC,lenis:WC,ScrollTrigger:Y,gsap:vc};
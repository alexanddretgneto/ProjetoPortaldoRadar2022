"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9231],{46392:(t,e,r)=>{var o;Object.defineProperty(e,"__esModule",{value:!0}),e.MML=void 0;var n=r(49711),i=r(86384),l=r(60699),p=r(8559),u=r(43634),a=r(3552),c=r(5002),s=r(41554),f=r(20314),y=r(70941),M=r(28413),d=r(89774),h=r(32515),m=r(21194),b=r(84013),_=r(17059),O=r(25856),g=r(41316),v=r(94353),k=r(49545),j=r(46357),P=r(9222),A=r(12260),w=r(32419),N=r(30993),x=r(13122),T=r(20105),C=r(9894),I=r(96963),E=r(29012),L=r(19772);e.MML=((o={})[i.MmlMath.prototype.kind]=i.MmlMath,o[l.MmlMi.prototype.kind]=l.MmlMi,o[p.MmlMn.prototype.kind]=p.MmlMn,o[u.MmlMo.prototype.kind]=u.MmlMo,o[a.MmlMtext.prototype.kind]=a.MmlMtext,o[c.MmlMspace.prototype.kind]=c.MmlMspace,o[s.MmlMs.prototype.kind]=s.MmlMs,o[f.MmlMrow.prototype.kind]=f.MmlMrow,o[f.MmlInferredMrow.prototype.kind]=f.MmlInferredMrow,o[y.MmlMfrac.prototype.kind]=y.MmlMfrac,o[M.MmlMsqrt.prototype.kind]=M.MmlMsqrt,o[d.MmlMroot.prototype.kind]=d.MmlMroot,o[h.MmlMstyle.prototype.kind]=h.MmlMstyle,o[m.MmlMerror.prototype.kind]=m.MmlMerror,o[b.MmlMpadded.prototype.kind]=b.MmlMpadded,o[_.MmlMphantom.prototype.kind]=_.MmlMphantom,o[O.MmlMfenced.prototype.kind]=O.MmlMfenced,o[g.MmlMenclose.prototype.kind]=g.MmlMenclose,o[v.MmlMaction.prototype.kind]=v.MmlMaction,o[k.MmlMsub.prototype.kind]=k.MmlMsub,o[k.MmlMsup.prototype.kind]=k.MmlMsup,o[k.MmlMsubsup.prototype.kind]=k.MmlMsubsup,o[j.MmlMunder.prototype.kind]=j.MmlMunder,o[j.MmlMover.prototype.kind]=j.MmlMover,o[j.MmlMunderover.prototype.kind]=j.MmlMunderover,o[P.MmlMmultiscripts.prototype.kind]=P.MmlMmultiscripts,o[P.MmlMprescripts.prototype.kind]=P.MmlMprescripts,o[P.MmlNone.prototype.kind]=P.MmlNone,o[A.MmlMtable.prototype.kind]=A.MmlMtable,o[w.MmlMlabeledtr.prototype.kind]=w.MmlMlabeledtr,o[w.MmlMtr.prototype.kind]=w.MmlMtr,o[N.MmlMtd.prototype.kind]=N.MmlMtd,o[x.MmlMaligngroup.prototype.kind]=x.MmlMaligngroup,o[T.MmlMalignmark.prototype.kind]=T.MmlMalignmark,o[C.MmlMglyph.prototype.kind]=C.MmlMglyph,o[I.MmlSemantics.prototype.kind]=I.MmlSemantics,o[I.MmlAnnotation.prototype.kind]=I.MmlAnnotation,o[I.MmlAnnotationXML.prototype.kind]=I.MmlAnnotationXML,o[E.TeXAtom.prototype.kind]=E.TeXAtom,o[L.MathChoice.prototype.kind]=L.MathChoice,o[n.TextNode.prototype.kind]=n.TextNode,o[n.XMLNode.prototype.kind]=n.XMLNode,o)},29231:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.MmlFactory=void 0;var i=r(88872),l=r(46392),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),Object.defineProperty(e.prototype,"MML",{get:function(){return this.node},enumerable:!1,configurable:!0}),e.defaultNodes=l.MML,e}(i.AbstractNodeFactory);e.MmlFactory=p},13122:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},i.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.MmlMaligngroup=void 0;var l=r(49711),p=r(35848),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),Object.defineProperty(e.prototype,"kind",{get:function(){return"maligngroup"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isSpacelike",{get:function(){return!0},enumerable:!1,configurable:!0}),e.prototype.setChildInheritedAttributes=function(e,r,o,n){e=this.addInheritedAttributes(e,this.attributes.getAllAttributes()),t.prototype.setChildInheritedAttributes.call(this,e,r,o,n)},e.defaults=i(i({},l.AbstractMmlLayoutNode.defaults),{groupalign:p.INHERIT}),e}(l.AbstractMmlLayoutNode);e.MmlMaligngroup=u},20105:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},i.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.MmlMalignmark=void 0;var l=r(49711),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),Object.defineProperty(e.prototype,"kind",{get:function(){return"malignmark"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"arity",{get:function(){return 0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isSpacelike",{get:function(){return!0},enumerable:!1,configurable:!0}),e.defaults=i(i({},l.AbstractMmlNode.defaults),{edge:"left"}),e}(l.AbstractMmlNode);e.MmlMalignmark=p},19772:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},i.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.MathChoice=void 0;var l=r(49711),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),Object.defineProperty(e.prototype,"kind",{get:function(){return"MathChoice"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"arity",{get:function(){return 4},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"notParent",{get:function(){return!0},enumerable:!1,configurable:!0}),e.prototype.setInheritedAttributes=function(t,e,r,o){var n=e?0:Math.max(0,Math.min(r,2))+1,i=this.childNodes[n]||this.factory.create("mrow");this.parent.replaceChild(i,this),i.setInheritedAttributes(t,e,r,o)},e.defaults=i({},l.AbstractMmlBaseNode.defaults),e}(l.AbstractMmlBaseNode);e.MathChoice=p},21194:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},i.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.MmlMerror=void 0;var l=r(49711),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.texclass=l.TEXCLASS.ORD,e}return n(e,t),Object.defineProperty(e.prototype,"kind",{get:function(){return"merror"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"arity",{get:function(){return-1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"linebreakContainer",{get:function(){return!0},enumerable:!1,configurable:!0}),e.defaults=i({},l.AbstractMmlNode.defaults),e}(l.AbstractMmlNode);e.MmlMerror=p},17059:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},i.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.MmlMphantom=void 0;var l=r(49711),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.texclass=l.TEXCLASS.ORD,e}return n(e,t),Object.defineProperty(e.prototype,"kind",{get:function(){return"mphantom"},enumerable:!1,configurable:!0}),e.defaults=i({},l.AbstractMmlLayoutNode.defaults),e}(l.AbstractMmlLayoutNode);e.MmlMphantom=p},32515:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},i.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.MmlMstyle=void 0;var l=r(49711),p=r(35848),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),Object.defineProperty(e.prototype,"kind",{get:function(){return"mstyle"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"notParent",{get:function(){return this.childNodes[0]&&1===this.childNodes[0].childNodes.length},enumerable:!1,configurable:!0}),e.prototype.setChildInheritedAttributes=function(t,e,r,o){var n=this.attributes.getExplicit("scriptlevel");null!=n&&((n=n.toString()).match(/^\s*[-+]/)?r+=parseInt(n):r=parseInt(n),o=!1);var i=this.attributes.getExplicit("displaystyle");null!=i&&(e=!0===i,o=!1);var l=this.attributes.getExplicit("data-cramped");null!=l&&(o=l),t=this.addInheritedAttributes(t,this.attributes.getAllAttributes()),this.childNodes[0].setInheritedAttributes(t,e,r,o)},e.defaults=i(i({},l.AbstractMmlLayoutNode.defaults),{scriptlevel:p.INHERIT,displaystyle:p.INHERIT,scriptsizemultiplier:1/Math.sqrt(2),scriptminsize:"8px",mathbackground:p.INHERIT,mathcolor:p.INHERIT,dir:p.INHERIT,infixlinebreakstyle:"before"}),e}(l.AbstractMmlLayoutNode);e.MmlMstyle=u},88872:function(t,e,r){var o,n=this&&this.__extends||(o=function(t,e){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},o(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.AbstractNodeFactory=void 0;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.create=function(t,e,r){return void 0===e&&(e={}),void 0===r&&(r=[]),this.node[t](e,r)},e}(r(68561).AbstractFactory);e.AbstractNodeFactory=i}}]);
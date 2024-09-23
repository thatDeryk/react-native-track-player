"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3582],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),y=r,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2384:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:6},l="App Killed Playback Behavior (android-only)",p={unversionedId:"api/constants/app-killed-playback-behavior",id:"version-3.2/api/constants/app-killed-playback-behavior",title:"App Killed Playback Behavior (android-only)",description:"ContinuePlayback (default)",source:"@site/versioned_docs/version-3.2/api/constants/app-killed-playback-behavior.md",sourceDirName:"api/constants",slug:"/api/constants/app-killed-playback-behavior",permalink:"/docs/3.2/api/constants/app-killed-playback-behavior",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-3.2/api/constants/app-killed-playback-behavior.md",tags:[],version:"3.2",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"app",previous:{title:"Pitch Algorithm (ios-only)",permalink:"/docs/3.2/api/constants/pitch-algorithm"},next:{title:"iOS Category (ios-only)",permalink:"/docs/3.2/api/constants/ios-category"}},s={},u=[{value:"<code>ContinuePlayback</code> (default)",id:"continueplayback-default",level:2},{value:"<code>PausePlayback</code>",id:"pauseplayback",level:2},{value:"<code>StopPlaybackAndRemoveNotification</code>",id:"stopplaybackandremovenotification",level:2}],d={toc:u};function y(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"app-killed-playback-behavior-android-only"},"App Killed Playback Behavior (android-only)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { AppKilledPlaybackBehavior } from 'react-native-track-player';\n")),(0,o.kt)("h2",{id:"continueplayback-default"},(0,o.kt)("inlineCode",{parentName:"h2"},"ContinuePlayback")," (default)"),(0,o.kt)("p",null,"This option will continue playing audio in the background when the app is\nremoved from recents. The notification remains. This is the default."),(0,o.kt)("h2",{id:"pauseplayback"},(0,o.kt)("inlineCode",{parentName:"h2"},"PausePlayback")),(0,o.kt)("p",null,"This option will pause playing audio in the background when the app is removed\nfrom recents. The notification remains and can be used to resume playback."),(0,o.kt)("h2",{id:"stopplaybackandremovenotification"},(0,o.kt)("inlineCode",{parentName:"h2"},"StopPlaybackAndRemoveNotification")),(0,o.kt)("p",null,"This option will stop playing audio in the background when the app is removed\nfrom recents. The notification is removed and can't be used to resume playback.\nUsers would need to open the app again to start playing audio."))}y.isMDXComponent=!0}}]);
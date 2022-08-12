(globalThis.webpackChunkreact_simple_starter=globalThis.webpackChunkreact_simple_starter||[]).push([[179],{42126:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__(3012).configure)([__webpack_require__(70282)],module,!1)},89715:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parameters=void 0;var _react=__webpack_require__(3012),_StyleGlobal=__webpack_require__(20543),_StyleStorybook=__webpack_require__(50888),_jsxRuntime=__webpack_require__(85893);(0,_react.addDecorator)((function(Story){return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Source+Sans+Pro:wght@300;400;700;900&display=swap",rel:"stylesheet"}),(0,_jsxRuntime.jsx)(_StyleGlobal.GlobalStyle,{}),(0,_jsxRuntime.jsx)(_StyleStorybook.StorybookStyle,{}),(0,_jsxRuntime.jsx)(Story,{})]})}));exports.parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},44262:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var _clientApi=__webpack_require__(89913),_clientLogger=__webpack_require__(23827),config=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__(89715));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(config).forEach((function(key){var value=config[key];switch(key){case"args":case"argTypes":return _clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)}));case"parameters":return(0,_clientApi.addParameters)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,_clientApi.addArgsEnhancer)(enhancer)}));case"render":return(0,_clientApi.setGlobalRender)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,_clientApi.addParameters)(v,!1);default:return console.log(key+" was not supported :( !")}}))},76986:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";__webpack_require__(3012)},21504:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pathPrefix=exports.branchesMode=exports.baseSeo=void 0;exports.baseSeo={title:"React Simple Starter",description:"This is React Simple Starter",location:"https://kojiyamauchi.github.io/react-simple-starter",ogpSiteName:"React Simple Starter",ogpTitle:"React Simple Starter",ogpDescription:"This is React Simple Starter.",ogpImage:"ogp_image.jpg"};var pathPrefix=webpackPathPrefix?`/${webpackPathPrefix}`:"";exports.pathPrefix=pathPrefix;exports.branchesMode="🛹"},53077:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Default=void 0;var _reactRouterDom=__webpack_require__(26068),_=__webpack_require__(71777),_jsxRuntime=__webpack_require__(85893),_default={title:"Fixed Layout Component",component:_.FixedLayout};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_reactRouterDom.BrowserRouter,{children:(0,_jsxRuntime.jsx)(_.FixedLayout,{pages:"storybook"})})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:'(): JSX.Element => {\n  return (\n    <BrowserRouter>\n      <FixedLayout pages="storybook" />\n    </BrowserRouter>\n  )\n}'}},Default.parameters)},5252:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Default=void 0;var _reactRouterDom=__webpack_require__(26068),_=__webpack_require__(57246),_jsxRuntime=__webpack_require__(85893),_default={title:"Fluid Layout Component",component:_.FluidLayout};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_reactRouterDom.BrowserRouter,{children:(0,_jsxRuntime.jsx)(_.FluidLayout,{pages:"storybook"})})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:'(): JSX.Element => (\n  <BrowserRouter>\n    <FluidLayout pages="storybook" />\n  </BrowserRouter>\n)'}},Default.parameters)},24429:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Default=void 0;var _reactRouterDom=__webpack_require__(26068),_Component=__webpack_require__(49393),_jsxRuntime=__webpack_require__(85893),_default={title:"Header Container Component",component:_Component.HeaderContainer};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_reactRouterDom.BrowserRouter,{children:(0,_jsxRuntime.jsx)(_Component.HeaderContainer,{})})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:"(): JSX.Element => {\n  return (\n    <BrowserRouter>\n      <HeaderContainer />\n    </BrowserRouter>\n  )\n}"}},Default.parameters)},35991:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Default=void 0;var _Component=__webpack_require__(3987),_jsxRuntime=__webpack_require__(85893),_default={title:"Footer Component",component:_Component.Footer};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_Component.Footer,{})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:"(): JSX.Element => <Footer />"}},Default.parameters)},17989:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Default=void 0;var _Component=__webpack_require__(28386),_jsxRuntime=__webpack_require__(85893),_default={title:"GlobalHeading Component",component:_Component.GlobalHeading};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_Component.GlobalHeading,{})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:"(): JSX.Element => <GlobalHeading />"}},Default.parameters)},66781:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Default=void 0;var _reactRouterDom=__webpack_require__(26068),_Component=__webpack_require__(82788),_jsxRuntime=__webpack_require__(85893),_default={title:"Navigation Component",component:_Component.Navigation};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_reactRouterDom.BrowserRouter,{children:(0,_jsxRuntime.jsx)(_Component.Navigation,{})})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:"(): JSX.Element => {\n  return (\n    <BrowserRouter>\n      <Navigation />\n    </BrowserRouter>\n  )\n}"}},Default.parameters)},13957:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Default=void 0;var _Component=__webpack_require__(10394),_jsxRuntime=__webpack_require__(85893),_default={title:"PageHeading Component",component:_Component.PageHeading};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_Component.PageHeading,{letter:"Storybook"})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:'(): JSX.Element => <PageHeading letter="Storybook" />'}},Default.parameters)},71777:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FixedLayout=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(62723)),_HeaderContainer=__webpack_require__(1923),_Footer=__webpack_require__(67799),_logo=_interopRequireDefault(__webpack_require__(60557)),_jsxRuntime=__webpack_require__(85893);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var FixedLayoutComponent=function(_ref){var className=_ref.className,pages=_ref.pages,children=_ref.children;return(0,_jsxRuntime.jsxs)("div",{className:`${className} ${pages} layout fixed-layout`,children:[(0,_jsxRuntime.jsx)(_HeaderContainer.HeaderContainer,{}),(0,_jsxRuntime.jsx)("main",{className:"main-content",children}),(0,_jsxRuntime.jsx)(_Footer.Footer,{})]})};FixedLayoutComponent.displayName="FixedLayoutComponent";var FixedLayout=(0,_styledComponents.default)(FixedLayoutComponent).withConfig({displayName:"FixedLayout__StyledComponent",componentId:"sc-1s7c2zk-0"})(["display:flex;flex-direction:column;width:100%;min-height:100vh;padding:50px 0 20px;@supports (-webkit-touch-callout:none){min-height:-webkit-fill-available;}.main-content{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;width:100%;background-image:url(",");background-repeat:no-repeat;background-position:80% center;background-size:25% auto;}"],_logo.default);exports.FixedLayout=FixedLayout;try{FixedLayout.displayName="FixedLayout",FixedLayout.__docgenInfo={description:"",displayName:"FixedLayout",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},pages:{defaultValue:null,description:"",name:"pages",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["resource/components/Layouts/FixedLayout/index.tsx#FixedLayout"]={docgenInfo:FixedLayout.__docgenInfo,name:"FixedLayout",path:"resource/components/Layouts/FixedLayout/index.tsx#FixedLayout"})}catch(__react_docgen_typescript_loader_error){}},57246:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FluidLayout=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(62723)),_logo=_interopRequireDefault(__webpack_require__(60557)),_jsxRuntime=__webpack_require__(85893);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var FluidLayoutComponent=function(_ref){var className=_ref.className,pages=_ref.pages,children=_ref.children;return(0,_jsxRuntime.jsx)("div",{className:`${className} ${pages} layout fluid-layout`,children:(0,_jsxRuntime.jsx)("main",{className:"main-content",children})})};FluidLayoutComponent.displayName="FluidLayoutComponent";var FluidLayout=(0,_styledComponents.default)(FluidLayoutComponent).withConfig({displayName:"FluidLayout__StyledComponent",componentId:"sc-e7g0ty-0"})(["display:flex;flex-direction:column;width:100%;min-height:100vh;@supports (-webkit-touch-callout:none){min-height:-webkit-fill-available;}.main-content{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;width:100%;background-image:url(",");background-repeat:no-repeat;background-position:80% center;background-size:25% auto;}"],_logo.default);exports.FluidLayout=FluidLayout;try{FluidLayout.displayName="FluidLayout",FluidLayout.__docgenInfo={description:"",displayName:"FluidLayout",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},pages:{defaultValue:null,description:"",name:"pages",required:!0,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["resource/components/Layouts/FluidLayout/index.tsx#FluidLayout"]={docgenInfo:FluidLayout.__docgenInfo,name:"FluidLayout",path:"resource/components/Layouts/FluidLayout/index.tsx#FluidLayout"})}catch(__react_docgen_typescript_loader_error){}},49393:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HeaderContainer=void 0;var _styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(62723)),_GlobalHeading=__webpack_require__(59968),_Navigation=__webpack_require__(86924),_jsxRuntime=__webpack_require__(85893);var HeaderContainerComponent=function(_ref){var className=_ref.className;return(0,_jsxRuntime.jsxs)("header",{className,children:[(0,_jsxRuntime.jsx)(_GlobalHeading.GlobalHeading,{}),(0,_jsxRuntime.jsx)(_Navigation.Navigation,{})]})};HeaderContainerComponent.displayName="HeaderContainerComponent";var HeaderContainer=(0,_styledComponents.default)(HeaderContainerComponent).withConfig({displayName:"Component__StyledComponent",componentId:"sc-1vjoork-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;"]);exports.HeaderContainer=HeaderContainer;try{HeaderContainer.displayName="HeaderContainer",HeaderContainer.__docgenInfo={description:"",displayName:"HeaderContainer",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["resource/components/Managements/HeaderContainer/Component.tsx#HeaderContainer"]={docgenInfo:HeaderContainer.__docgenInfo,name:"HeaderContainer",path:"resource/components/Managements/HeaderContainer/Component.tsx#HeaderContainer"})}catch(__react_docgen_typescript_loader_error){}},1923:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"HeaderContainer",{enumerable:!0,get:function(){return _Component.HeaderContainer}});var _Component=__webpack_require__(49393);try{HeaderContainer.displayName="HeaderContainer",HeaderContainer.__docgenInfo={description:"",displayName:"HeaderContainer",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["resource/components/Managements/HeaderContainer/index.tsx#HeaderContainer"]={docgenInfo:HeaderContainer.__docgenInfo,name:"HeaderContainer",path:"resource/components/Managements/HeaderContainer/index.tsx#HeaderContainer"})}catch(__react_docgen_typescript_loader_error){}},3987:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Footer=void 0;var _styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(62723)),_StyleMixins=__webpack_require__(74448),_jsxRuntime=__webpack_require__(85893);var FooterComponent=function(_ref){var className=_ref.className;return(0,_jsxRuntime.jsx)("footer",{className,children:(0,_jsxRuntime.jsxs)("a",{href:"http://kojiyamauchi.com",className:"link-letter",target:"_blank",rel:"noreferrer",children:["© ",(new Date).getFullYear()," All The Small Things, All Rights Reserved."]})})};FooterComponent.displayName="FooterComponent";var Footer=(0,_styledComponents.default)(FooterComponent).withConfig({displayName:"Component__StyledComponent",componentId:"sc-er77ad-0"})(["display:flex;align-items:center;justify-content:center;width:100%;.link-letter{font-family:Lobster,cursive;font-size:1.5em;text-align:center;cursor:pointer;","}"],_StyleMixins.breakPoint.aboveLargeMobile` font-size: 2.4em `);exports.Footer=Footer;try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["resource/components/Presentations/Footer/Component.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"resource/components/Presentations/Footer/Component.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}},67799:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Footer",{enumerable:!0,get:function(){return _Component.Footer}});var _Component=__webpack_require__(3987);try{Footer.displayName="Footer",Footer.__docgenInfo={description:"",displayName:"Footer",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["resource/components/Presentations/Footer/index.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"resource/components/Presentations/Footer/index.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}},28386:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GlobalHeading=void 0;var _styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(62723)),_StyleMixins=__webpack_require__(74448),_jsxRuntime=__webpack_require__(85893);var GlobalHeadingComponent=function(_ref){var className=_ref.className;return(0,_jsxRuntime.jsx)("h1",{className:`${className} primary-heading`,children:"React Simple Starter"})};GlobalHeadingComponent.displayName="GlobalHeadingComponent";var GlobalHeading=(0,_styledComponents.default)(GlobalHeadingComponent).withConfig({displayName:"Component__StyledComponent",componentId:"sc-1bbtug-0"})(["width:100%;margin:0 0 40px 0;font-size:3em;font-weight:300;text-align:center;",""],_StyleMixins.breakPoint.aboveLargeMobile` font-size: 5.6em `);exports.GlobalHeading=GlobalHeading;try{GlobalHeading.displayName="GlobalHeading",GlobalHeading.__docgenInfo={description:"",displayName:"GlobalHeading",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["resource/components/Presentations/GlobalHeading/Component.tsx#GlobalHeading"]={docgenInfo:GlobalHeading.__docgenInfo,name:"GlobalHeading",path:"resource/components/Presentations/GlobalHeading/Component.tsx#GlobalHeading"})}catch(__react_docgen_typescript_loader_error){}},59968:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"GlobalHeading",{enumerable:!0,get:function(){return _Component.GlobalHeading}});var _Component=__webpack_require__(28386);try{GlobalHeading.displayName="GlobalHeading",GlobalHeading.__docgenInfo={description:"",displayName:"GlobalHeading",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["resource/components/Presentations/GlobalHeading/index.tsx#GlobalHeading"]={docgenInfo:GlobalHeading.__docgenInfo,name:"GlobalHeading",path:"resource/components/Presentations/GlobalHeading/index.tsx#GlobalHeading"})}catch(__react_docgen_typescript_loader_error){}},82788:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Navigation=void 0;var _reactRouterDom=__webpack_require__(26068),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(62723)),_StyleMixins=__webpack_require__(74448),_base=__webpack_require__(21504),_jsxRuntime=__webpack_require__(85893);var link=[{path:`${_base.pathPrefix}/`,letter:"Primary Page",id:1},{path:`${_base.pathPrefix}/second`,letter:"Secondary Page",id:2},{path:`${_base.pathPrefix}/third`,letter:"Third Page",id:3},{path:`${_base.pathPrefix}/fourth`,letter:"Fourth Page",id:4}],NavigationComponent=function(_ref){var className=_ref.className;return(0,_jsxRuntime.jsx)("ul",{className,children:link.map((function(info){return(0,_jsxRuntime.jsx)("li",{children:(0,_jsxRuntime.jsx)(_reactRouterDom.Link,{to:`${info.path}`,className:"link-letter",children:info.letter})},info.id)}))})};NavigationComponent.displayName="NavigationComponent";var Navigation=(0,_styledComponents.default)(NavigationComponent).withConfig({displayName:"Component__StyledComponent",componentId:"sc-rkx0ig-0"})(["display:flex;align-items:center;justify-content:space-between;width:100%;padding:0 20px;margin:0 auto;"," "," .link-letter{font-size:1.375em;font-weight:300;text-align:center;","}"],_StyleMixins.breakPoint.aboveLargeMobile` width: 60%; `,_StyleMixins.breakPoint.aboveLargeMobile` padding: 0; `,_StyleMixins.breakPoint.aboveLargeMobile` font-size: 2.2em `);exports.Navigation=Navigation;try{Navigation.displayName="Navigation",Navigation.__docgenInfo={description:"",displayName:"Navigation",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["resource/components/Presentations/Navigation/Component.tsx#Navigation"]={docgenInfo:Navigation.__docgenInfo,name:"Navigation",path:"resource/components/Presentations/Navigation/Component.tsx#Navigation"})}catch(__react_docgen_typescript_loader_error){}},86924:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Navigation",{enumerable:!0,get:function(){return _Component.Navigation}});var _Component=__webpack_require__(82788);try{Navigation.displayName="Navigation",Navigation.__docgenInfo={description:"",displayName:"Navigation",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["resource/components/Presentations/Navigation/index.tsx#Navigation"]={docgenInfo:Navigation.__docgenInfo,name:"Navigation",path:"resource/components/Presentations/Navigation/index.tsx#Navigation"})}catch(__react_docgen_typescript_loader_error){}},10394:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PageHeading=void 0;var _styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(62723)),_StyleMixins=__webpack_require__(74448),_jsxRuntime=__webpack_require__(85893);var PageHeadingComponent=function(_ref){var className=_ref.className,letter=_ref.letter;return(0,_jsxRuntime.jsxs)("h2",{className:`${className} secondary-heading`,children:["This is ",letter," Page."]})};PageHeadingComponent.displayName="PageHeadingComponent";var PageHeading=(0,_styledComponents.default)(PageHeadingComponent).withConfig({displayName:"Component__StyledComponent",componentId:"sc-ussgon-0"})(["font-size:3em;text-align:center;"," ",""],(function(props){return props.translation&&"transform: translateY(-100%);"}),_StyleMixins.breakPoint.aboveLargeMobile` font-size: 4.8em `);exports.PageHeading=PageHeading;try{PageHeading.displayName="PageHeading",PageHeading.__docgenInfo={description:"",displayName:"PageHeading",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},letter:{defaultValue:null,description:"",name:"letter",required:!0,type:{name:"string"}},translation:{defaultValue:null,description:"",name:"translation",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["resource/components/Presentations/PageHeading/Component.tsx#PageHeading"]={docgenInfo:PageHeading.__docgenInfo,name:"PageHeading",path:"resource/components/Presentations/PageHeading/Component.tsx#PageHeading"})}catch(__react_docgen_typescript_loader_error){}},45194:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GLOBAL_FONT=exports.GLOBAL_COLOR=exports.DEVICE_WIDTH=exports.BREAK_POINT=void 0;var DEVICE_WIDTH={SMALL_MOBILE:320,MIDDLE_MOBILE:414,LARGE_MOBILE:767,TABLET:1024,LAPTOP:1536,DESKTOP:1920};exports.DEVICE_WIDTH=DEVICE_WIDTH;var BREAK_POINT={aboveSmallMobile:DEVICE_WIDTH.SMALL_MOBILE+1,aboveMiddleMobile:DEVICE_WIDTH.MIDDLE_MOBILE+1,aboveLargeMobile:DEVICE_WIDTH.LARGE_MOBILE+1,aboveTablet:DEVICE_WIDTH.TABLET+1,aboveLaptop:DEVICE_WIDTH.LAPTOP+1,justDesktop:DEVICE_WIDTH.DESKTOP};exports.BREAK_POINT=BREAK_POINT;exports.GLOBAL_FONT='"Source Sans Pro", "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "游ゴシック Medium", meiryo, sans-serif';exports.GLOBAL_COLOR="#777"},20543:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GlobalStyle=void 0;var _styledComponents=__webpack_require__(62723),_StyleConstants=__webpack_require__(45194),GlobalStyle=(0,_styledComponents.createGlobalStyle)(['a,address,article,aside,audio,blockquote,button,body,canvas,caption,code,dd,div,dl,dt,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,iframe,img,input,label,li,mark,menu,nav,ol,output,p,pre,ruby,section,select,span,summary,table,tbody,td,textarea,th,time,tr,ul,video{padding:0;margin:0;font-size:100%;font-style:normal;font-weight:lighter;vertical-align:baseline;border:0;}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;overflow-wrap:break-word;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}strong{font-weight:bold;}a{color:inherit;text-decoration:none;cursor:pointer;background:transparent;}a:active,a:hover,a:link,a:visited{text-decoration:none;outline:none;}img{vertical-align:middle;}li,ol,ul{list-style-type:none;}table{table-layout:fixed;border-spacing:0;border-collapse:collapse;}button{cursor:pointer;}input[type="button"],input[type="submit"],input[type="text"],select,button{background-color:transparent;border-radius:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;&:focus{outline:none;}}textarea{resize:vertical;border-radius:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;}::selection{background:rgba();}@media screen and (-webkit-min-device-pixel-ratio:0){*{}}@media all and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm){*{}}@-moz-document url-prefix(){*{}}@media all and (-ms-high-contrast:none){*{}}html{width:100vw;font-size:62.5%;}body{position:relative;display:flex;flex-direction:column;width:100%;overflow-x:hidden;font-family:',";line-height:1;color:",";letter-spacing:0;background:#fff;-webkit-overflow-scrolling:touch;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}"],_StyleConstants.GLOBAL_FONT,_StyleConstants.GLOBAL_COLOR);exports.GlobalStyle=GlobalStyle},74448:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.breakPoint=void 0;var _styledComponents=__webpack_require__(62723),_StyleConstants=__webpack_require__(45194),breakPoint=Object.keys(_StyleConstants.BREAK_POINT).reduce((function(accumulator,current){var breakPointKey=current;return accumulator[breakPointKey]=function(args){return(0,_styledComponents.css)(["@media (min-width:","px){","}"],_StyleConstants.BREAK_POINT[breakPointKey],(0,_styledComponents.css)(args))},accumulator}),{});exports.breakPoint=breakPoint},50888:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.StorybookStyle=void 0;var StorybookStyle=(0,__webpack_require__(62723).createGlobalStyle)(["#root{display:flex;align-items:center;justify-content:center;width:100vw;height:100vh;}"]);exports.StorybookStyle=StorybookStyle},70282:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Layouts/FixedLayout/FixedLayout.stories.tsx":53077,"./Layouts/FluidLayout/FluidLayout.stories.tsx":5252,"./Managements/HeaderContainer/HeaderContainer.stories.tsx":24429,"./Presentations/Footer/Footer.stories.tsx":35991,"./Presentations/GlobalHeading/GlobalHeading.stories.tsx":17989,"./Presentations/Navigation/Navigation.stories.tsx":66781,"./Presentations/PageHeading/PageHeading.stories.tsx":13957};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=70282},60557:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/images/6d18e7bc8e22c9c35853.webp"},24654:()=>{}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[519],(()=>(__webpack_exec__(37707),__webpack_exec__(99669),__webpack_exec__(76986),__webpack_exec__(23515),__webpack_exec__(699),__webpack_exec__(84873),__webpack_exec__(62853),__webpack_exec__(59746),__webpack_exec__(81953),__webpack_exec__(22609),__webpack_exec__(64049),__webpack_exec__(21424),__webpack_exec__(44262),__webpack_exec__(42126))));__webpack_require__.O()}]);
(globalThis.webpackChunkreact_simple_starter=globalThis.webpackChunkreact_simple_starter||[]).push([[179],{42126:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__(3012).configure)([__webpack_require__(21611)],module,!1)},89715:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parameters=void 0;var _react=__webpack_require__(3012),_StyleGlobal=__webpack_require__(20543),_StyleStorybook=__webpack_require__(50888),_jsxRuntime=__webpack_require__(85893);(0,_react.addDecorator)((function(story){return(0,_jsxRuntime.jsxs)(_jsxRuntime.Fragment,{children:[(0,_jsxRuntime.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Source+Sans+Pro:wght@300;400;700;900&display=swap",rel:"stylesheet"}),(0,_jsxRuntime.jsx)(_StyleGlobal.GlobalStyle,{}),(0,_jsxRuntime.jsx)(_StyleStorybook.StorybookStyle,{}),story()]})}));exports.parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},44262:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var _clientApi=__webpack_require__(89913),_clientLogger=__webpack_require__(23827),config=function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}(__webpack_require__(89715));function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(config).forEach((function(key){var value=config[key];switch(key){case"args":case"argTypes":return _clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)}));case"parameters":return(0,_clientApi.addParameters)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,(0,_clientApi.addParameters)(v,!1);default:return console.log(key+" was not supported :( !")}}))},76986:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";__webpack_require__(3012)},21504:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.branchesMode=exports.pathPrefix=exports.baseSeo=void 0;exports.baseSeo={title:"React Simple Starter",description:"This is React Simple Starter",location:"https://kojiyamauchi.github.io/react-simple-starter",ogpSiteName:"React Simple Starter",ogpTitle:"React Simple Starter",ogpDescription:"This is React Simple Starter.",ogpImage:"ogp_image.jpg"};exports.pathPrefix=function(){return!0?"/react-simple-starter":""};exports.branchesMode="🛹"},53077:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Default=exports.default=void 0;var _=__webpack_require__(71777),_reactRouterDom=__webpack_require__(23338),_jsxRuntime=__webpack_require__(85893),_default={title:"Fixed Layout Component",component:_.FixedLayout};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_reactRouterDom.BrowserRouter,{children:(0,_jsxRuntime.jsx)(_.FixedLayout,{pages:"storybook"})})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:'(): JSX.Element => {\n  return (\n    <BrowserRouter>\n      <FixedLayout pages="storybook" />\n    </BrowserRouter>\n  )\n}'}},Default.parameters)},5252:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Default=exports.default=void 0;var _=__webpack_require__(57246),_reactRouterDom=__webpack_require__(23338),_jsxRuntime=__webpack_require__(85893),_default={title:"Fluid Layout Component",component:_.FluidLayout};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_reactRouterDom.BrowserRouter,{children:(0,_jsxRuntime.jsx)(_.FluidLayout,{pages:"storybook"})})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:'(): JSX.Element => (\n  <BrowserRouter>\n    <FluidLayout pages="storybook" />\n  </BrowserRouter>\n)'}},Default.parameters)},24429:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Default=exports.default=void 0;var _Component=__webpack_require__(49393),_reactRouterDom=__webpack_require__(23338),_jsxRuntime=__webpack_require__(85893),_default={title:"Header Container Component",component:_Component.HeaderContainer};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_reactRouterDom.BrowserRouter,{children:(0,_jsxRuntime.jsx)(_Component.HeaderContainer,{})})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:"(): JSX.Element => {\n  return (\n    <BrowserRouter>\n      <HeaderContainer />\n    </BrowserRouter>\n  )\n}"}},Default.parameters)},35991:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Default=exports.default=void 0;var _Component=__webpack_require__(3987),_jsxRuntime=__webpack_require__(85893),_default={title:"Footer Component",component:_Component.Footer};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_Component.Footer,{})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:"(): JSX.Element => <Footer />"}},Default.parameters)},17989:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Default=exports.default=void 0;var _Component=__webpack_require__(28386),_jsxRuntime=__webpack_require__(85893),_default={title:"GlobalHeading Component",component:_Component.GlobalHeading};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_Component.GlobalHeading,{})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:"(): JSX.Element => <GlobalHeading />"}},Default.parameters)},66781:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Default=exports.default=void 0;var _Component=__webpack_require__(82788),_reactRouterDom=__webpack_require__(23338),_jsxRuntime=__webpack_require__(85893),_default={title:"Navigation Component",component:_Component.Navigation};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_reactRouterDom.BrowserRouter,{children:(0,_jsxRuntime.jsx)(_Component.Navigation,{})})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:"(): JSX.Element => {\n  return (\n    <BrowserRouter>\n      <Navigation />\n    </BrowserRouter>\n  )\n}"}},Default.parameters)},13957:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Default=exports.default=void 0;var _Component=__webpack_require__(10394),_jsxRuntime=__webpack_require__(85893),_default={title:"PageHeading Component",component:_Component.PageHeading};exports.default=_default;var Default=function(){return(0,_jsxRuntime.jsx)(_Component.PageHeading,{letter:"Storybook"})};exports.Default=Default,Default.displayName="Default",Default.parameters=Object.assign({storySource:{source:'(): JSX.Element => <PageHeading letter="Storybook" />'}},Default.parameters)},71777:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FixedLayout=void 0;var _HeaderContainer=__webpack_require__(1923),_Footer=__webpack_require__(67799),_styledComponents=_interopRequireDefault(__webpack_require__(71893)),_logo=_interopRequireDefault(__webpack_require__(98579)),_jsxRuntime=__webpack_require__(85893);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var FixedLayoutComponent=function(_ref){var className=_ref.className,pages=_ref.pages,children=_ref.children;return(0,_jsxRuntime.jsxs)("div",{className:`${className} ${pages} layout fixed-layout`,children:[(0,_jsxRuntime.jsx)(_HeaderContainer.HeaderContainer,{}),(0,_jsxRuntime.jsx)("main",{className:"main-content",children}),(0,_jsxRuntime.jsx)(_Footer.Footer,{})]})};FixedLayoutComponent.displayName="FixedLayoutComponent";var FixedLayout=(0,_styledComponents.default)(FixedLayoutComponent).withConfig({displayName:"FixedLayout__StyledComponent",componentId:"sc-1s7c2zk-0"})(["display:flex;flex-direction:column;width:100%;min-height:100vh;padding:50px 0 20px;@supports (-webkit-touch-callout:none){min-height:-webkit-fill-available;}.main-content{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;width:100%;background-image:url(",");background-repeat:no-repeat;background-position:80% center;background-size:25% auto;}"],_logo.default);exports.FixedLayout=FixedLayout},57246:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.FluidLayout=void 0;var _styledComponents=_interopRequireDefault(__webpack_require__(71893)),_logo=_interopRequireDefault(__webpack_require__(98579)),_jsxRuntime=__webpack_require__(85893);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var FluidLayoutComponent=function(_ref){var className=_ref.className,pages=_ref.pages,children=_ref.children;return(0,_jsxRuntime.jsx)("div",{className:`${className} ${pages} layout fluid-layout`,children:(0,_jsxRuntime.jsx)("main",{className:"main-content",children})})};FluidLayoutComponent.displayName="FluidLayoutComponent";var FluidLayout=(0,_styledComponents.default)(FluidLayoutComponent).withConfig({displayName:"FluidLayout__StyledComponent",componentId:"e7g0ty-0"})(["display:flex;flex-direction:column;width:100%;min-height:100vh;@supports (-webkit-touch-callout:none){min-height:-webkit-fill-available;}.main-content{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;width:100%;background-image:url(",");background-repeat:no-repeat;background-position:80% center;background-size:25% auto;}"],_logo.default);exports.FluidLayout=FluidLayout},49393:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.HeaderContainer=void 0;var _GlobalHeading=__webpack_require__(59968),_Navigation=__webpack_require__(86924),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(71893)),_jsxRuntime=__webpack_require__(85893);var HeaderContainerComponent=function(_ref){var className=_ref.className;return(0,_jsxRuntime.jsxs)("header",{className,children:[(0,_jsxRuntime.jsx)(_GlobalHeading.GlobalHeading,{}),(0,_jsxRuntime.jsx)(_Navigation.Navigation,{})]})};HeaderContainerComponent.displayName="HeaderContainerComponent";var HeaderContainer=(0,_styledComponents.default)(HeaderContainerComponent).withConfig({displayName:"Component__StyledComponent",componentId:"sc-1vjoork-0"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;"]);exports.HeaderContainer=HeaderContainer},1923:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"HeaderContainer",{enumerable:!0,get:function(){return _Component.HeaderContainer}});var _Component=__webpack_require__(49393)},3987:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Footer=void 0;var _styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(71893)),_StyleMixins=__webpack_require__(74448),_jsxRuntime=__webpack_require__(85893);var FooterComponent=function(_ref){var className=_ref.className;return(0,_jsxRuntime.jsx)("footer",{className,children:(0,_jsxRuntime.jsxs)("a",{href:"http://kojiyamauchi.com",className:"link-letter",target:"_blank",rel:"noreferrer",children:["© ",(new Date).getFullYear()," All The Small Things, All Rights Reserved."]})})};FooterComponent.displayName="FooterComponent";var Footer=(0,_styledComponents.default)(FooterComponent).withConfig({displayName:"Component__StyledComponent",componentId:"er77ad-0"})(["display:flex;align-items:center;justify-content:center;width:100%;.link-letter{font-family:Lobster,cursive;font-size:1.5em;text-align:center;cursor:pointer;","}"],_StyleMixins.BreakPoint.largeMobile` font-size: 2.4em `);exports.Footer=Footer},67799:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Footer",{enumerable:!0,get:function(){return _Component.Footer}});var _Component=__webpack_require__(3987)},28386:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GlobalHeading=void 0;var _styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(71893)),_StyleMixins=__webpack_require__(74448),_jsxRuntime=__webpack_require__(85893);var GlobalHeadingComponent=function(_ref){var className=_ref.className;return(0,_jsxRuntime.jsx)("h1",{className:`${className} primary-heading`,children:"React Simple Starter"})};GlobalHeadingComponent.displayName="GlobalHeadingComponent";var GlobalHeading=(0,_styledComponents.default)(GlobalHeadingComponent).withConfig({displayName:"Component__StyledComponent",componentId:"sc-1bbtug-0"})(["width:100%;margin:0 0 40px 0;font-size:3em;font-weight:300;text-align:center;",""],_StyleMixins.BreakPoint.largeMobile` font-size: 5.6em `);exports.GlobalHeading=GlobalHeading},59968:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"GlobalHeading",{enumerable:!0,get:function(){return _Component.GlobalHeading}});var _Component=__webpack_require__(28386)},82788:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Navigation=void 0;var _reactRouterDom=__webpack_require__(23338),_styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(71893)),_StyleMixins=__webpack_require__(74448),_base=__webpack_require__(21504),_jsxRuntime=__webpack_require__(85893);var link=[{path:`${(0,_base.pathPrefix)()}/`,letter:"Primary Page",id:1},{path:`${(0,_base.pathPrefix)()}/second`,letter:"Secondary Page",id:2},{path:`${(0,_base.pathPrefix)()}/third`,letter:"Third Page",id:3},{path:`${(0,_base.pathPrefix)()}/fourth`,letter:"Fourth Page",id:4}],NavigationComponent=function(_ref){var className=_ref.className;return(0,_jsxRuntime.jsx)("ul",{className,children:link.map((function(info){return(0,_jsxRuntime.jsx)("li",{children:(0,_jsxRuntime.jsx)(_reactRouterDom.Link,{to:`${info.path}`,className:"link-letter",children:info.letter})},info.id)}))})};NavigationComponent.displayName="NavigationComponent";var Navigation=(0,_styledComponents.default)(NavigationComponent).withConfig({displayName:"Component__StyledComponent",componentId:"rkx0ig-0"})(["display:flex;align-items:center;justify-content:space-between;width:100%;padding:0 20px;margin:0 auto;"," "," .link-letter{font-size:1.375em;font-weight:300;text-align:center;","}"],_StyleMixins.BreakPoint.largeMobile` width: 60%; `,_StyleMixins.BreakPoint.largeMobile` padding: 0; `,_StyleMixins.BreakPoint.largeMobile` font-size: 2.2em `);exports.Navigation=Navigation},86924:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"Navigation",{enumerable:!0,get:function(){return _Component.Navigation}});var _Component=__webpack_require__(82788)},10394:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PageHeading=void 0;var _styledComponents=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(71893)),_StyleMixins=__webpack_require__(74448),_jsxRuntime=__webpack_require__(85893);var PageHeadingComponent=function(_ref){var className=_ref.className,letter=_ref.letter;return(0,_jsxRuntime.jsxs)("h2",{className:`${className} secondary-heading`,children:["This is ",letter," Page."]})};PageHeadingComponent.displayName="PageHeadingComponent";var PageHeading=(0,_styledComponents.default)(PageHeadingComponent).withConfig({displayName:"Component__StyledComponent",componentId:"ussgon-0"})(["font-size:3em;text-align:center;"," ",""],(function(props){return props.translation&&"transform: translateY(-100%);"}),_StyleMixins.BreakPoint.largeMobile` font-size: 4.8em `);exports.PageHeading=PageHeading},45194:(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GLOBAL_COLOR=exports.GLOBAL_FONT=exports.BREAK_POINT_WIDTH=void 0;exports.BREAK_POINT_WIDTH={smallMobile:325,mobile:480,largeMobile:768,tablet:1024,desktop:1170,largeDesktop:1392,extraLargeDesktop:1920};exports.GLOBAL_FONT='"Source Sans Pro", "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "游ゴシック Medium", meiryo, sans-serif';exports.GLOBAL_COLOR="#777"},20543:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GlobalStyle=void 0;var _styledComponents=__webpack_require__(71893),_StyleConstants=__webpack_require__(45194),GlobalStyle=_styledComponents.createGlobalStyle`
  a,
  address,
  article,
  aside,
  audio,
  blockquote,
  button,
  body,
  canvas,
  caption,
  code,
  dd,
  div,
  dl,
  dt,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  iframe,
  img,
  input,
  label,
  li,
  mark,
  menu,
  nav,
  ol,
  output,
  p,
  pre,
  ruby,
  section,
  select,
  span,
  summary,
  table,
  tbody,
  td,
  textarea,
  th,
  time,
  tr,
  ul,
  video {
    padding: 0;
    margin: 0;
    font-size: 100%;
    font-style: normal;
    font-weight: lighter;
    vertical-align: baseline;
    border: 0;
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    overflow-wrap: break-word;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  strong {
    font-weight: bold;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    background: transparent;
  }

  a:active,
  a:hover,
  a:link,
  a:visited {
    text-decoration: none;
    outline: none;
  }

  img {
    vertical-align: middle;
  }

  li,
  ol,
  ul {
    list-style-type: none;
  }

  table {
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: collapse;
  }

  button {
    cursor: pointer;
  }

  input[type="button"],
  input[type="submit"],
  input[type="text"],
  select,
  button {
    background-color: transparent;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    border-radius: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  ::selection {
    background: rgba();
  }

  ::-moz-selection {
    background: rgba();
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    /* Safari Hack */

    * {}
  }

  @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: .001dpcm) {
    /* Chrome Hack */

    * {}
  }

  @-moz-document url-prefix() {
    /* FireFox Hack */

    * {}
  }

  @media all and (-ms-high-contrast: none) {
    /* IE Hack */

    * {}
  }

  html {
    width: 100vw;
    font-size: 62.5%;
  }

  body {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
    font-family: ${_StyleConstants.GLOBAL_FONT};
    line-height: 1;
    color: ${_StyleConstants.GLOBAL_COLOR};
    letter-spacing: 0;
    background: #fff;
    -webkit-overflow-scrolling: touch;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
`;exports.GlobalStyle=GlobalStyle},74448:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BreakPoint=void 0;var _styledComponents=__webpack_require__(71893),_StyleConstants=__webpack_require__(45194),BreakPoint=Object.keys(_StyleConstants.BREAK_POINT_WIDTH).reduce((function(accumulator,current){var breakPointKey=current;return accumulator[breakPointKey]=function(args){return(0,_styledComponents.css)(["@media (min-width:","px){","}"],_StyleConstants.BREAK_POINT_WIDTH[breakPointKey],(0,_styledComponents.css)(args))},accumulator}),{});exports.BreakPoint=BreakPoint},50888:(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.StorybookStyle=void 0;var StorybookStyle=__webpack_require__(71893).createGlobalStyle`
  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }
`;exports.StorybookStyle=StorybookStyle},21611:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./Layouts/FixedLayout/FixedLayout.stories.tsx":53077,"./Layouts/FluidLayout/FluidLayout.stories.tsx":5252,"./Managements/HeaderContainer/HeaderContainer.stories.tsx":24429,"./Presentations/Footer/Footer.stories.tsx":35991,"./Presentations/GlobalHeading/GlobalHeading.stories.tsx":17989,"./Presentations/Navigation/Navigation.stories.tsx":66781,"./Presentations/PageHeading/PageHeading.stories.tsx":13957};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=21611},98579:(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__.p+"static/media/images/6d18e7bc8e22c9c35853.webp"},24654:()=>{}},__webpack_require__=>{"use strict";var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[12],(()=>(__webpack_exec__(40116),__webpack_exec__(94054),__webpack_exec__(76986),__webpack_exec__(50615),__webpack_exec__(4379),__webpack_exec__(84873),__webpack_exec__(62853),__webpack_exec__(59746),__webpack_exec__(81953),__webpack_exec__(22609),__webpack_exec__(44262),__webpack_exec__(42126))));__webpack_require__.O()}]);
//# sourceMappingURL=main.1c67583f.iframe.bundle.js.map
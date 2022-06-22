var p=Object.defineProperty;var a=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var i=(e,n,o)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,s=(e,n)=>{for(var o in n||(n={}))m.call(n,o)&&i(e,o,n[o]);if(a)for(var o of a(n))d.call(n,o)&&i(e,o,n[o]);return e};import{M as g}from"./Menu.9625e383.js";import{a as C,j as r}from"./jsx-runtime.2243d797.js";import"./iconBase.20b45ab7.js";import"./index.4eaab5d2.js";import"./index.esm.2ca5f7c9.js";import"./index.esm.f6138a6e.js";import"./Button.5bb66130.js";import"./Text.2cad5b79.js";import"./MenuItem.c231e501.js";const t=e=>{const{children:n,toggleClosed:o,closed:c}=e;return C("div",{className:"w-screen h-screen",children:[r(g,{closed:c,toggleClosed:o}),r("div",{className:"absolute inset-0 w-screen h-screen p-4 md:pl-44 flex justify-center content-center",children:r("div",{className:"flex flex-col md:w-1/2 h-full py-32 md:py-40 justify-self-center self-center",children:n})})]})};var l=t;try{t.displayName="PageContainer",t.__docgenInfo={description:"",displayName:"PageContainer",props:{closed:{defaultValue:null,description:"",name:"closed",required:!0,type:{name:"boolean"}},toggleClosed:{defaultValue:null,description:"",name:"toggleClosed",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/PageContainer/PageContainer.tsx#PageContainer"]={docgenInfo:t.__docgenInfo,name:"PageContainer",path:"src/components/PageContainer/PageContainer.tsx#PageContainer"})}catch{}var j={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import PageContainer from "./PageContainer";
import { PageContainerProps } from "./PageContainer.models";

export default {
  title: "Container/PageContainer",
  component: PageContainer,
} as ComponentMeta<typeof PageContainer>;

const Template: Story<PageContainerProps> = (args) => (
  <PageContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
`,locationsMap:{primary:{startLoc:{col:44,line:11},endLoc:{col:1,line:13},startBody:{col:44,line:11},endBody:{col:1,line:13}}}}},title:"Container/PageContainer",component:l};const P=e=>r(l,s({},e)),f=P.bind({});f.args={};const E=["Primary"];export{f as Primary,E as __namedExportsOrder,j as default};
//# sourceMappingURL=PageContainer.stories.bf0f8a05.js.map

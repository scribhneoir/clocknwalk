var s=Object.defineProperty;var t=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;var a=(o,e,n)=>e in o?s(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,d=(o,e)=>{for(var n in e||(e={}))c.call(e,n)&&a(o,n,e[n]);if(t)for(var n of t(e))i.call(e,n)&&a(o,n,e[n]);return o};import{H as l}from"./Header.3ce12692.js";import{j as H}from"./jsx-runtime.2243d797.js";import"./Text.2cad5b79.js";import"./index.4eaab5d2.js";var B={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import Header from "./Header";
import { HeaderProps } from "./Header.models";

export default {
  title: "Atoms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const H1 = Template.bind({});
H1.args = {
  h: 1,
  children: "Header",
};
export const H2 = Template.bind({});
H2.args = {
  h: 2,
  children: "Header",
};
export const H3 = Template.bind({});
H3.args = {
  h: 3,
  children: "Header",
};
`,locationsMap:{"h-1":{startLoc:{col:37,line:11},endLoc:{col:67,line:11},startBody:{col:37,line:11},endBody:{col:67,line:11}},"h-2":{startLoc:{col:37,line:11},endLoc:{col:67,line:11},startBody:{col:37,line:11},endBody:{col:67,line:11}},"h-3":{startLoc:{col:37,line:11},endLoc:{col:67,line:11},startBody:{col:37,line:11},endBody:{col:67,line:11}}}}},title:"Atoms/Header",component:l};const r=o=>H(l,d({},o)),p=r.bind({});p.args={h:1,children:"Header"};const m=r.bind({});m.args={h:2,children:"Header"};const h=r.bind({});h.args={h:3,children:"Header"};const L=["H1","H2","H3"];export{p as H1,m as H2,h as H3,L as __namedExportsOrder,B as default};
//# sourceMappingURL=Header.stories.98cfbe9d.js.map

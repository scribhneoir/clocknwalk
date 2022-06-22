var i=Object.defineProperty;var r=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var t=(n,o,e)=>o in n?i(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e,s=(n,o)=>{for(var e in o||(o={}))m.call(o,e)&&t(n,e,o[e]);if(r)for(var e of r(o))p.call(o,e)&&t(n,e,o[e]);return n};import{M as a}from"./Menu.9625e383.js";import{j as c}from"./jsx-runtime.2243d797.js";import"./iconBase.20b45ab7.js";import"./index.4eaab5d2.js";import"./index.esm.2ca5f7c9.js";import"./index.esm.f6138a6e.js";import"./Button.5bb66130.js";import"./Text.2cad5b79.js";import"./MenuItem.c231e501.js";var T={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import Menu from "./Menu";
import { MenuProps } from "./Menu.models";

export default {
  title: "Container/Menu/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Primary = Template.bind({});
Primary.args = { closed: false };
export const Closed = Template.bind({});
Closed.args = { closed: true };
`,locationsMap:{primary:{startLoc:{col:35,line:11},endLoc:{col:63,line:11},startBody:{col:35,line:11},endBody:{col:63,line:11}},closed:{startLoc:{col:35,line:11},endLoc:{col:63,line:11},startBody:{col:35,line:11},endBody:{col:63,line:11}}}}},title:"Container/Menu/Menu",component:a};const l=n=>c(a,s({},n)),d=l.bind({});d.args={closed:!1};const u=l.bind({});u.args={closed:!0};const S=["Primary","Closed"];export{u as Closed,d as Primary,S as __namedExportsOrder,T as default};
//# sourceMappingURL=Menu.stories.a14c0df5.js.map

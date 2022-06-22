var c=Object.defineProperty;var r=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var m=(n,e,o)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,l=(n,e)=>{for(var o in e||(e={}))p.call(e,o)&&m(n,o,e[o]);if(r)for(var o of r(e))d.call(e,o)&&m(n,o,e[o]);return n};import{b as i}from"./index.esm.f6138a6e.js";import{M as s}from"./MenuItem.c231e501.js";import{j as t}from"./jsx-runtime.2243d797.js";import"./iconBase.20b45ab7.js";import"./index.4eaab5d2.js";import"./Button.5bb66130.js";import"./Text.2cad5b79.js";var h={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";
import { IoPeopleCircle } from "react-icons/io5";

import MenuItem from "./MenuItem";
import { MenuItemProps } from "./MenuItem.models";

export default {
  title: "Container/Menu/MenuItem",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: Story<MenuItemProps> = (args) => <MenuItem {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: <IoPeopleCircle /> };
export const Closed = Template.bind({});
Closed.args = { children: <IoPeopleCircle />, closed: true };
`,locationsMap:{primary:{startLoc:{col:39,line:12},endLoc:{col:71,line:12},startBody:{col:39,line:12},endBody:{col:71,line:12}},closed:{startLoc:{col:39,line:12},endLoc:{col:71,line:12},startBody:{col:39,line:12},endBody:{col:71,line:12}}}}},title:"Container/Menu/MenuItem",component:s};const a=n=>t(s,l({},n)),u=a.bind({});u.args={children:t(i,{})};const M=a.bind({});M.args={children:t(i,{}),closed:!0};const B=["Primary","Closed"];export{M as Closed,u as Primary,B as __namedExportsOrder,h as default};
//# sourceMappingURL=MenuItem.stories.7ab5e7b7.js.map

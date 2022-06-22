var e=Object.defineProperty;var t=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var m=(n,o,r)=>o in n?e(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r,i=(n,o)=>{for(var r in o||(o={}))a.call(o,r)&&m(n,r,o[r]);if(t)for(var r of t(o))s.call(o,r)&&m(n,r,o[r]);return n};import{S as p}from"./SignUpForm.2884e9e1.js";import{j as g}from"./jsx-runtime.2243d797.js";import"./Button.5bb66130.js";import"./Text.2cad5b79.js";import"./Field.e56bd946.js";import"./iconBase.20b45ab7.js";import"./index.4eaab5d2.js";var u={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import SignUpForm from "./SignUpForm";
import { SignUpFormProps } from "./SignUpForm.models";

export default {
  title: "Pages/Login/Forms/Sign Up Form",
  component: SignUpForm,
} as ComponentMeta<typeof SignUpForm>;

const Template: Story<SignUpFormProps> = (args) => <SignUpForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
`,locationsMap:{primary:{startLoc:{col:41,line:11},endLoc:{col:75,line:11},startBody:{col:41,line:11},endBody:{col:75,line:11}}}}},title:"Pages/Login/Forms/Sign Up Form",component:p};const c=n=>g(p,i({},n)),l=c.bind({});l.args={};const L=["Primary"];export{l as Primary,L as __namedExportsOrder,u as default};
//# sourceMappingURL=SignUpForm.stories.3dffb300.js.map

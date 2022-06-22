var a=Object.defineProperty;var t=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var m=(n,o,r)=>o in n?a(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r,i=(n,o)=>{for(var r in o||(o={}))s.call(o,r)&&m(n,r,o[r]);if(t)for(var r of t(o))p.call(o,r)&&m(n,r,o[r]);return n};import{L as e}from"./LoginForm.2c4308e2.js";import{j as g}from"./jsx-runtime.2243d797.js";import"./Button.5bb66130.js";import"./Text.2cad5b79.js";import"./Field.e56bd946.js";import"./iconBase.20b45ab7.js";import"./index.4eaab5d2.js";var b={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import LoginForm from "./LoginForm";
import { LoginFormProps } from "./LoginForm.models";

export default {
  title: "Pages/Login/Forms/LoginForm",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
`,locationsMap:{primary:{startLoc:{col:40,line:11},endLoc:{col:73,line:11},startBody:{col:40,line:11},endBody:{col:73,line:11}}}}},title:"Pages/Login/Forms/LoginForm",component:e};const c=n=>g(e,i({},n)),l=c.bind({});l.args={};const M=["Primary"];export{l as Primary,M as __namedExportsOrder,b as default};
//# sourceMappingURL=LoginForm.stories.4a7a5bc8.js.map

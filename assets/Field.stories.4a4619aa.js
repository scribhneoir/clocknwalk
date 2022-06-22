var t=Object.defineProperty;var n=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var d=(o,e,r)=>e in o?t(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,i=(o,e)=>{for(var r in e||(e={}))s.call(e,r)&&d(o,r,e[r]);if(n)for(var r of n(e))c.call(e,r)&&d(o,r,e[r]);return o};import{F as a}from"./Field.e56bd946.js";import{j as p}from"./jsx-runtime.2243d797.js";import"./iconBase.20b45ab7.js";import"./index.4eaab5d2.js";import"./Text.2cad5b79.js";var E={parameters:{storySource:{source:`import { ComponentMeta, Story } from "@storybook/react";

import Field from "./Field";
import { FieldProps } from "./Field.models";

export default {
  title: "Atoms/Field",
  component: Field,
} as ComponentMeta<typeof Field>;

const Template: Story<FieldProps> = (args) => <Field {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Field",
  value: "",
  disabled: false,
  error: "",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Field",
  value: "Field",
  disabled: true,
  error: "",
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "Field",
  value: "Field",
  disabled: false,
  error: "Error",
};
`,locationsMap:{primary:{startLoc:{col:36,line:11},endLoc:{col:65,line:11},startBody:{col:36,line:11},endBody:{col:65,line:11}},disabled:{startLoc:{col:36,line:11},endLoc:{col:65,line:11},startBody:{col:36,line:11},endBody:{col:65,line:11}},error:{startLoc:{col:36,line:11},endLoc:{col:65,line:11},startBody:{col:36,line:11},endBody:{col:65,line:11}}}}},title:"Atoms/Field",component:a};const l=o=>p(a,i({},o)),m=l.bind({});m.args={placeholder:"Field",value:"",disabled:!1,error:""};const F=l.bind({});F.args={placeholder:"Field",value:"Field",disabled:!0,error:""};const b=l.bind({});b.args={placeholder:"Field",value:"Field",disabled:!1,error:"Error"};const h=["Primary","Disabled","Error"];export{F as Disabled,b as Error,m as Primary,h as __namedExportsOrder,E as default};
//# sourceMappingURL=Field.stories.4a4619aa.js.map

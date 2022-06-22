import Menu from "./Menu";
import { PageContainerProps } from "./PageContainer.models";
const PageContainer = (props: PageContainerProps) => {
  const { children, toggleClosed, closed } = props;
  return (
    <div className="w-screen h-screen">
      <Menu closed={closed} toggleClosed={toggleClosed} />
      <div className="absolute inset-0 w-screen h-screen p-4 md:pl-44 flex justify-center content-center">
        <div className="flex flex-col md:w-1/2 h-full py-32 md:py-40 justify-self-center self-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageContainer;

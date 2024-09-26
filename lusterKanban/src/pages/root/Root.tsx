import DesktopLayout from "../../layout/desktop/MainLayout";
import MobileLayout from "../../layout/mobile/MainLayout";

const Root = () => {
  return (
    <div>
      <DesktopLayout>
        <div style={{fontSize: 55}}> Hello world</div>
      </DesktopLayout>
      <MobileLayout>
        <div></div>
      </MobileLayout>
    </div>
  );
};

export default Root;

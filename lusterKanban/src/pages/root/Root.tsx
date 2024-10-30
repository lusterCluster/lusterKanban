import { Outlet } from "react-router-dom";
import DesktopLayout from "../../layout/desktop/MainLayout";
import MobileLayout from "../../layout/mobile/MainLayout";
import Home from "../home/Home";

const Root = () => {
  return (
    <div className="desktop"        >
      <DesktopLayout/>      
      <MobileLayout/>
      
    </div>
  );
};

export default Root;

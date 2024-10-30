import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "./paths";
import Root from "../pages/root/Root";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path:PATHS.root,
        element:<Root/>,
        children: [
            {
                path:PATHS.home,
                element:<Home/>,             
            }       
        ]
    }
])
export default router;
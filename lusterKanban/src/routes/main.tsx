import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "./paths";
import Root from "../pages/root/Root";

const router = createBrowserRouter([
    {
        path:PATHS.root,
        element:<Root/>
    }
])
export default router;
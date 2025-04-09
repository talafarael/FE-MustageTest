import { RouterProvider } from "react-router-dom";
import { router } from "./router.config.tsx";

export const Router = () => {
  return <RouterProvider router={router} />;
};

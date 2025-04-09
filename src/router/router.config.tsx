import { createBrowserRouter } from "react-router-dom";
import { Main } from "../pages/Main";
import { Registration } from "../pages/Registration";
import { Login } from "../pages/Login";
import { PrivateRoute } from "@/components/templates/PrivateRouter";
import { Layout } from "@/components/templates/Layout";


export const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout>
          <Main />
        </Layout>
      </PrivateRoute>
    ),
  },
])

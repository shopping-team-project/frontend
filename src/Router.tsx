import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "" }, { path: "login", element: <Login /> }],
  },
]);

export default router;

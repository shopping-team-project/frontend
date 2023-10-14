import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/loginpage";
import Home from "./pages/Home.tsx";
import Cart from "./pages/Cart.tsx";
import MyPage from "./pages/MyPage.tsx";
import Search from "./pages/Search.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search",
    element: <Search />,
    children: [{ path: ":item", element: "" }],
  },
  { path: "/cart", element: <Cart /> },
  { path: "/mypage", element: <MyPage />, children: [{}] },
]);

export default router;

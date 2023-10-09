import router from "./Router.tsx";
import { RouterProvider } from "react-router-dom";
import { ReactElement } from "react";

function App(): ReactElement {
  return <RouterProvider router={router} />;
}

export default App;

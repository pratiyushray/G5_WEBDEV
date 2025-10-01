import ReactDOM from "react-dom/client";
import "./Styles.css";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import AnotherBodyComponent from "./AnotherBodyComponent";
import AllProductComponent from "./AllProductComponent";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const AppComponent = () => {
  return (
    <div id="main-container">
      <HeaderComponent />
      <Outlet />
      {/* <BodyComponent /> */}
      <FooterComponent />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <AnotherBodyComponent />,
      },
      {
        path: "/products",
        element: <AllProductComponent />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
// root.render(<ReactComponent></ReactComponent>);

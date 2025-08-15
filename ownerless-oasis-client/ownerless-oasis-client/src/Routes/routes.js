import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/home";
import LogIn from "../pages/LogIn/logIn";
import Signup from "../pages/SignUp/signUp";
import Contact from "../pages/Contact/contact";
import DashBoardLayout from "../Layout/dashboardLayout";
import Orders from "../pages/dashboard/orders";
import AllUsers from "../pages/dashboard/allusers";
import Details from "../pages/products/details";
import AddProducts from "../pages/dashboard/addProducts";
import Cart from "../pages/card/Cart";
import Card2 from "./../pages/card/Card2";
import ProductDetails from "../pages/card/ProductDetails";
import AllProducts from "../pages/dashboard/allProducts";
import SalesReport from "../pages/dashboard/SalesReport";
import IndOrder from "../pages/dashboard/indOrder";
import Update from "../pages/crud/Update";
import { CartProvider } from "../pages/card/CartContext";
import Signup1 from "../pages/SignUp/Signup1";
import SuccessOrder from "../pages/card/SuccessOrder";
import Invoice from "../pages/dashboard/invioce";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <Main></Main>
      </CartProvider>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/confirm",
        element: <SuccessOrder></SuccessOrder>,
      },

      {
        path: "/products",
        element: <Card2></Card2>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/edit/:id",
        element: <Update></Update>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) => fetch(`products.json/${params.id}`),
      },
      {
        path: "/inorders/:id",
        element: <IndOrder></IndOrder>,
        // loader: ({ params }) => fetch(`products.json/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,

    children: [
      {
        path: "/dashboard",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/dashboard/allProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/dashboard/orders",
        element: <Orders></Orders>,
      },
      {
        path: "/dashboard/salesreport",
        element: <SalesReport></SalesReport>,
      },
      {
        path: "/dashboard/invoice",
        element: <Invoice></Invoice>,
      },
    ],
  },
]);
export default router;

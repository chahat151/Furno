// imports
import "./assets/css/bootstrap.min.css";
import "./assets/css/tiny-slider.css";
import "./assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Thankyou from "./pages/Thankyou";
import Error from "./pages/Error";
import LandPageLayout from "./layouts/LandPageLayout";

// Create the router instance
const router = createBrowserRouter([
  {
    element: <LandPageLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blog", element: <Blog /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/services", element: <Services /> },
      { path: "/shop", element: <Shop /> },
      { path: "/thankyou", element: <Thankyou /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

// App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Signup from "../pages/Auth/Signup/Signup";
import Login from "../pages/Auth/Login/Login";
import Jobs from "../pages/Jobs/Jobs";
import Register from "../pages/Auth/Signup/Register";
import DemoLogin from "../pages/Auth/Practices/DemoLogin";
import DemoRegister from "../pages/Auth/Practices/DemoRegister";
import UserProfile from "../pages/UserProfile/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "jobs",
        Component: Jobs,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "signup",
        Component: Signup,
      },
     
      {
        path: "login",
        Component: Login,
      },
      {
        path:"user-profile",
        Component:UserProfile
      },
      {
        path: "demo-login",
        Component: DemoLogin,
      },
      {
        path: "demo-register",
        Component: DemoRegister,
      },

    ],
  },
]);

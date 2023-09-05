import "./App.css";
import About from "./pages/About/About";
import Hero from "./pages/HeroSection/Hero";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <div className="mt-2 gap-3 flex justify-center items-center">
        <a className="bg-slate-900 text-white  p-3  rounded-md px-5" href="/">
          Home
        </a>
        <a
          className="bg-slate-900 text-white  p-3 rounded-md px-5"
          href="/about"
        >
          About
        </a>
        <a
          className="bg-slate-900 text-white  p-3 rounded-md px-5"
          href="/contact"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default App;

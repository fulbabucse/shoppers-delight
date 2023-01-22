import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

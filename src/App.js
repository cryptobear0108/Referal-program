import React from "react";
import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// ----- components import -----
import Home from "./components/home";
// ----- layout import -----
import Loader from "./layout/loader";
import ScrollToTop from "./layout/scroll-to-top";
const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Loader />
        <ScrollToTop />
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;

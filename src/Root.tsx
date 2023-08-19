import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@layouts/Main";

import Home from "@pages/Home";
import About from "@pages/About";

const Root = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Root;

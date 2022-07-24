import React from "react";
import { Route, Routes } from "react-router";
import ScrollUp from "./components/ScrollUp";
import { Footer } from "./modules";
import Bid from "./pages/Bid/Bid";
import Main from "./pages/Main/Main";


function App() {

  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <div>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/bid" element={<Bid/>} />
        </Routes>
        <ScrollUp/>
      </div>
      <Footer/>
    </div>
  );
}
export default App;

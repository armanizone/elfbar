import React from "react";
import { Route, Routes } from "react-router";
import { Footer, Navbar } from "./modules";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {/* <Navbar/> */}
      <div>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}
export default App;

import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Search from "./Component/SearchSec/Search";
import Job from "./Component/Jobs/Job";
import Value from "./Component/Values/Value";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  );
};

export default App;

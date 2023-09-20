import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Search from "./Component/SearchSec/Search";
import Job from "./Component/Jobs/Job";
import Value from "./Component/Values/Value";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  );
};

export default App;

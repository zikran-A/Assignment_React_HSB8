import React, { useState } from "react";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  // const Search = () => {
  return (
    <div className="searchDiv grid gap-10 bg-slate-100 rounded-[10px] p-4">
      <from action="">
        <div className="firtsDiv flex justify-between items-center rounded-lg gap-2 bg-white p-5 shadow-slate-200">
          <div className="flex gap-2 items-center">
            <i className="ri-search-line text-[25px] icon"></i>
            <input
              type="text"
              className="bg-transparent text-thirdBlue focus:outline-none w-[100%]"
              placeholder="Search Job Here..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <i
              className="ri-close-circle-line text-[30px] text-slate-300 hover:text-textColor icon"
              onClick={handleClearSearch}></i>
          </div>
          <div className="flex gap-2 items-center">
            <i className="ri-search-line text-[25px] icon"></i>
            <input
              type="text"
              className="bg-transparent text-thirdBlue focus:outline-none w-[100%]"
              placeholder="Search Job Here..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <i
              className="ri-close-circle-line text-[30px] text-slate-300 hover:text-textColor icon"
              onClick={handleClearSearch}></i>
          </div>
          <div className="flex gap-2 items-center">
            <i className="ri-search-line text-[25px] icon"></i>
            <input
              type="text"
              className="bg-transparent text-thirdBlue focus:outline-none w-[100%]"
              placeholder="Search Job Here..."
              value={searchQuery}
              onChange={handleInputChange}
            />
            <i
              className="ri-close-circle-line text-[30px] text-slate-300 hover:text-textColor icon"
              onClick={handleClearSearch}></i>
          </div>

          <button className="bg-secondaryBlue h-full p-5 px-10 rounded-md text-white cursor-pointer hover:bg-thirdBlue">
            Search
          </button>
        </div>
      </from>

      <div className="secDiv flex items-center gap-8 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-slate-500 font-semibold">
            Sort By:
          </label>

          <select
            name=""
            id="relevance"
            className="bg-white rounded-md px-4 py-1">
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-slate-500 font-semibold">
            Type:
          </label>

          <select name="" id="type" className="bg-white rounded-md px-4 py-1">
            <option value="">Full-Time</option>
            <option value="">Remote</option>
            <option value="">Contarct</option>
            <option value="">Part-time</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-slate-500 font-semibold">
            level :
          </label>

          <select name="" id="level" className="bg-white rounded-md px-4 py-1">
            <option value="">Beginner</option>
            <option value="">Senior</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className="text-slate-400">Clear All</span>
      </div>
    </div>
  );
}

export default Search;

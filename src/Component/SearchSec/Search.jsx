import { useState } from "react";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [companyQuery, setCompanyQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const handleInputChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleClearSearch = (setState) => {
    setState("");
  };

  return (
    <div className="searchDiv grid bg-slate-100 rounded-lg p-4 m-2">
      <from action="">
        <div className="firtsDiv justify-between items-center rounded-lg gap-2 bg-white p-2 shadow-slate-200 grid sm:grid-cols-4">
          <div className="flex gap-2 items-center">
            <i className="ri-search-line text-[25px] icon"></i>
            <input
              type="text"
              className="bg-transparent text-thirdBlue focus:outline-none w-[100%]"
              placeholder="Search Job Here..."
              value={searchQuery}
              onChange={(event) => handleInputChange(event, setSearchQuery)}
            />
            <i
              className="ri-close-circle-line text-[30px] text-slate-300 hover:text-textColor icon"
              onClick={() => handleClearSearch(setSearchQuery)}></i>
          </div>
          <div className="flex gap-2 items-center">
            <i className="ri-building-line text-[25px]"></i>
            <input
              type="text"
              className="bg-transparent text-thirdBlue focus:outline-none w-[100%]"
              placeholder="Search Company..."
              value={companyQuery}
              onChange={(event) => handleInputChange(event, setCompanyQuery)}
            />
            <i
              className="ri-close-circle-line text-[30px] text-slate-300 hover:text-textColor icon"
              onClick={() => handleClearSearch(setCompanyQuery)}></i>
          </div>
          <div className="flex gap-2 items-center">
            <i className="ri-map-pin-line text-[25px]"></i>
            <input
              type="text"
              className="bg-transparent text-thirdBlue focus:outline-none w-[100%]"
              placeholder="Search By Location..."
              value={locationQuery}
              onChange={(event) => handleInputChange(event, setLocationQuery)}
            />
            <i
              className="ri-close-circle-line text-[30px] text-slate-300 hover:text-textColor icon"
              onClick={() => handleClearSearch(setLocationQuery)}></i>
          </div>

          <button className="bg-secondaryBlue h-full p-2 px-2 m-auto rounded-md text-white cursor-pointer hover:bg-thirdBlue">
            Search
          </button>
        </div>
      </from>

      <div className="secDiv grid grid-rows md:grid-cols-2 sm:grid-cols-4 items-center gap-4 justify-betwen mt-2 m-2 ">
        <div className="singleSearch flex items-center gap-1 m-2">
          <label htmlFor="relevance" className="text-slate-500 font-base">
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

        <div className="singleSearch flex items-center gap-1 m-2">
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

        <div className="singleSearch flex items-center gap-1 m-2">
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

import React from "react";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-4 px-6">
      <h1 className="text-textColor text-[25px] py-4 px-4 pb-[3rem] font-bold w-[400px] block">
        The value that holds us true and to acccount
      </h1>

      <div className="grid gap-2 lg:grid-cols-3 items-center px-4">
        <div className="singleGrid rounded-md hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-sm bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img
                src="src/Component/Assets/simply.svg"
                alt=""
                className="w-[70%]"
              />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7rem] py-[1rem] font-semibold">
            Segala sesuatu yang menjadi indah menjadi sederhana adalah inti dari
            segala sesuatu yang kita lakukan..
          </p>
        </div>

        <div className="singleGrid rounded-md hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-sm bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img
                src="src/Component/Assets/love.svg"
                alt=""
                className="w-[70%]"
              />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7rem] py-[1rem] font-semibold">
            Kami percaya untuk menjadikan segalanya lebih baik bagi semua orang,
            meskipun hanya sedikit.
          </p>
        </div>

        <div className="singleGrid rounded-md hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-sm bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img
                src="src/Component/Assets/idea.svg"
                alt=""
                className="w-[70%]"
              />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7rem] py-[1rem] font-semibold">
            Kami bekerja atas dasar menciptakan kepercayaan yang dipupuk melalui
            originalitas dan transparansi.
          </p>
        </div>
      </div>

      <div className="mt-[2rem] flex justify-start mx-4 p-4 bg-[url('src/Component/Assets/hs.png')] bg-cover rounded-md">
        <div>
          <h1 className="text-primaryBlue text-[2rem] font-bold backdrop-blur-sm">
            Siap untuk Switch Career?
          </h1>
          <h2 className="text-textColor text-[1.7rem] font-bold backdrop-blur-sm pl-2 text-center">
            Ayo Kita Mulai!
          </h2>
          <button className="border-[2px] rounded-md py-2 px-5 text-base font-semibold items-center text-primaryBlue backdrop-blur-sm hover:bg-white border-primaryBlue">
            <a href="https://www.harisenin.com/" target="blank">
              Mulai!
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Value;

import React from "react";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-4 px-4 pb-[3rem] font-bold w-[400px] block">
        The value that holds us true and to acccount
      </h1>

      <div className="grid gap-[2rem] grid-cols-3 items-center">
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
            Things being made beautiful simple are at the heart of everything we
            do.
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
            We belive in making thing better for everyone, even if just by a
            little bit.
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

      <div className="card mt-[2rem] flex justify-between bg-secondaryBlue p-4 rounded-md">
        <div>
          <h1 className="text-primaryBlue text-[2rem] font-bold">
            Siap untuk Switch Career?
          </h1>
          <h2 className="text-textColor text-[1.7rem] font-bold">
            Ayo Kita Mulai!
          </h2>
          <button className="border-[2px] rounded-md py-2 px-5 text-base font-semibold text-primaryBlue hover:bg-white border-primaryBlue">
            Mulai!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Value;

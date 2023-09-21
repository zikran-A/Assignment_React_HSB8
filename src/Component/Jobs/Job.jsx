import React from "react";

const Job = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap item-center py-10">
        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-md  hover:bg-secondaryBlue shadow-md hover:shadow-lg shadow-shadowColor">
          <span className="flex justify-between items-center gap-3">
            <h1 className="text-5rem font-semibold text-textColor group-hover:text-white">
              Web Developer
            </h1>
            <span className="flex item-center text-[#ccc] gap-1">
              <i class="ri-time-line"></i>Now
            </span>
          </span>
          {/* mulai dari sini!! */}
          <h6>Canada</h6>
        </div>
      </div>
    </div>
  );
};

export default Job;

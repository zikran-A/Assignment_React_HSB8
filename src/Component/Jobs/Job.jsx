import icon1 from "/src/Component/Assets/icon1.svg";
import icon2 from "/src/Component/Assets/icon2.svg";
import icon3 from "/src/Component/Assets/icon3.svg";
import icon4 from "/src/Component/Assets/icon4.svg";
import icon5 from "/src/Component/Assets/icon5.svg";
import icon6 from "/src/Component/Assets/icon6.svg";
import icon7 from "/src/Component/Assets/icon7.svg";
import icon8 from "/src/Component/Assets/icon8.svg";

const Data = [
  {
    id: 1,
    image: icon1,
    title: "Web Developer",
    time: "Now",
    location: "Jakarta",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.corrupti, laboriosam!",
    company: "TokoPedia",
  },
  {
    id: 2,
    image: icon2,
    title: "Frontend Engineer",
    time: "Now",
    location: "Jakarta",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.corrupti, laboriosam!",
    company: "Go-To Gojek",
  },
  {
    id: 3,
    image: icon3,
    title: "Backend Engineer",
    time: "Now",
    location: "Jakarta",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.corrupti, laboriosam!",
    company: "Linkedin Ind.",
  },
  {
    id: 4,
    image: icon4,
    title: "Dev Ops",
    time: "15 Min Ago",
    location: "Jakarta",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.corrupti, laboriosam!",
    company: "Grab Ind.",
  },
  {
    id: 5,
    image: icon5,
    title: "Fullstack Web Developer",
    time: "30 Min Ago",
    location: "Jakarta",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.corrupti, laboriosam!",
    company: "Xiaomi Id.",
  },
  {
    id: 6,
    image: icon6,
    title: "Mobile Developer",
    time: "1 Hour Ago",
    location: "Jakarta",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.corrupti, laboriosam!",
    company: "Samsung",
  },
  {
    id: 7,
    image: icon7,
    title: "Data Analyst",
    time: "3 Hour Ago",
    location: "Jakarta",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.corrupti, laboriosam!",
    company: "Spotify",
  },
  {
    id: 8,
    image: icon8,
    title: "Junior Programmer",
    time: "2 Hour Ago",
    location: "Jakarta",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.corrupti, laboriosam!",
    company: "Bank BCA Tbk.",
  },
];

const Job = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap item-center py-10">
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-md  hover:bg-secondaryBlue shadow-md hover:shadow-lg shadow-shadowColor">
              <span className="flex justify-between items-left gap-3">
                <h1 className="text-[1rem] font-semibold text-textColor group-hover:text-white">
                  {title}
                </h1>
                <span className="flex item-right  text-[#ccc] gap-1">
                  <i className="ri-time-line text-[12px] flex">{time}</i>
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                {desc}
              </p>
              <div className="company flex item-center gap-2">
                <img src={image} alt="Company Logo" className="w-[10%]" />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>

              <button className="border-[2px] rounded-lg block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-primaryBlue">
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Job;

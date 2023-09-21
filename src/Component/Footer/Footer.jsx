import React from "react";

const Footer = () => {
  return (
    <div className="footer p-2 mb-4 bg-primaryBlue rounded-md gap-2 grid grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>Job</strong>Los
          </h1>
        </div>
        <p className="text-white pb-[13px] opacity-70 leading-7">
          Kami selalu menyediakan yang terbaik bagi para pencari kerja maupun
          penyedia kerja, temukan pekerjaan terbaik, dan kandidat terbaik di
          sini.
        </p>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-2">
          <li className="text-white opacity-[.7rem] hover:opacity-[1]">
            Tentang Kami
          </li>
          <li className="text-white opacity-[.7rem] hover:opacity-[1]">
            Layanan
          </li>
          <li className="text-white opacity-[.7rem] hover:opacity-[1]">
            Berita
          </li>
          <li className="text-white opacity-[.7rem] hover:opacity-[1]">FAQ</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Resources
        </span>
        <div className="grid gap-2">
          <li className="text-white opacity-[.7rem] hover:opacity-[1]">
            Account
          </li>
          <li className="text-white opacity-[.7rem] hover:opacity-[1]">
            Support Center
          </li>
          <li className="text-white opacity-[.7rem] hover:opacity-[1]">
            Feedback
          </li>
          <li className="text-white opacity-[.7rem] hover:opacity-[1]">
            Contact Us
          </li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Support
        </span>
        <div className="grid gap-2">
          <li className="text-white opacity-[.7rem] hover:opacity-[1]">
            Events
          </li>
          <li className="text-white opacity-[.7rem] hover:opacity-[1]">
            Promo
          </li>
          <li className="text-white opacity-[.7rem] hover:opacity-[1]">
            Req Demo
          </li>
          <li className="text-white opacity-[.7rem] hover:opacity-[1]">
            Careers
          </li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">
          Contact Info
        </span>
        <div className="">
          <small className="text-[14px] text-white">joblos@gmail.co.id</small>

          <div className="icons flex gap-4 py-[1rem]">
            <img
              src=""
              className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-secondaryBlue"
            />
            <img
              src=""
              className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-secondaryBlue"
            />
            <img
              src=""
              className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-secondaryBlue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

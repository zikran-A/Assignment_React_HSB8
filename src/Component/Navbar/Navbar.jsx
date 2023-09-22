import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar p-3 m-4 md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-between">
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-primaryBlue">
            <strong>Job</strong>los
          </h1>
        </div>
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } mt-4 md:flex md:space-x-4 md:mt-0 text-right`}>
        <li className="text-textColor hover:text-secondaryBlue">Jobs</li>
        <li className="text-textColor hover:text-secondaryBlue">Companies</li>
        <li className="text-textColor hover:text-secondaryBlue">About</li>
        <li className="text-textColor hover:text-secondaryBlue">Contact</li>
        <li className="text-textColor hover:text-secondaryBlue">Login</li>
        <li className="text-textColor hover:text-secondaryBlue">Register</li>
      </ul>
    </nav>
  );
};

export default Navbar;

{
  /* <div className="logoDiv">
        <h1 className="logo text-[25px] text-primaryBlue">
          <strong>Job</strong>los
        </h1>
      </div> */
}

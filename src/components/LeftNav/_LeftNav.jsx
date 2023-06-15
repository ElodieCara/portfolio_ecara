import { FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const LeftNav = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between itelms-center ml-[-100px] hover:ml-[-10px] duration-300">
          <a
            className="flex justify-between items-center w-full color-white text-white"
            href="https://www.linkedin.com/in/e-cara"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between itelms-center ml-[-100px] hover:ml-[-10px] duration-300 ">
          <a
            className="flex justify-between items-center w-full color-white text-white"
            href="https://github.com/ElodieCara"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between itelms-center ml-[-100px] hover:ml-[-10px] duration-300 ">
          <a
            className="flex justify-between items-center w-full  color-white text-white"
            href="mailto:caradeuc.elodie@gmail.com"
          >
            <FaTimes size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftNav;

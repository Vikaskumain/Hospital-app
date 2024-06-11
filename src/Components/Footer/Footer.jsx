import Header from "../Header/Header";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


function Footer() {
  return (
    <div className="">
  <Header/>
   <div className="bg-slate-400 h-80 flex p-6 gap-10 ">
   <div className="bg-white h-14 w-14 rounded-full flex justify-center items-center cursor-pointer">
   <FaFacebook className="cursor-pointer"/>
   </div>
   <div className="bg-white h-14 w-14 rounded-full flex justify-center items-center cursor-pointer">
   <FaGoogle className="cursor-pointer"/>
   </div>
   <div className="bg-white h-14 w-14 rounded-full flex justify-center items-center cursor-pointer">
   <FaTwitter className="cursor-pointer"/>
   </div>
    <p className="text-xl">&copy; 2023-01BQ</p>
   </div>
    </div>
  );
}

export default Footer;

import './Style.css';
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { FaGitAlt } from "react-icons/fa6";
import { VscTerminalCmd } from "react-icons/vsc";

const About = () =>{
  return (
    <div className='mx-auto w-full mt-8 z-10'>
      <div className='text-center'>
        <h1 className='font-medium text-3xl text-gray-900 border-b-2 border-rose-400 inline-block '>About </h1>
      </div>

      <div className='mx-auto mt-8 flex justify-center space-x-4'>
        <SiHtml5 size="50px" className='text-orange-400'/>
        <IoLogoCss3 size="50px" className='text-blue-500'/>
        <DiJavascript size="50px" className='text-yellow-400'/>
        <RiTailwindCssFill size="50px" className='text-blue-400'/>

        <FaReact size="50px" className='text-blue-500'/>
        <BsGithub size="50px" className='text-gray-900'/>
        <FaGitAlt size="50px" className='text-orange-500'/>
        <VscTerminalCmd size="50px" className='text-gray-900'/>
      </div>
    </div>
  );
};
export default About;

        //  y br thun lw tor mai

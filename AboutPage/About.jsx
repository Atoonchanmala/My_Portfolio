// import { CgFigma } from "react-icons/cg";
// import { VscVscode } from "react-icons/vsc";
// import { DiJavascript } from "react-icons/di";
// import { FaReact } from "react-icons/fa6";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { FaGitAlt } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import './Style.css';
const About = () => {
  return (
    <div className="mt-14 mx-auto w-full">
      <div className="flex justify-center space-x-1">
        <h1 className="font-semibold text-2xl text-gray-900">SKILLS & </h1>
        <h1 className="font-semibold text-2xl text-blue-500">EXPERTISE</h1>
      </div>

      <div className="mx-auto w-full mt-10 flex justify-center space-x-10">

        <div className='border-2 border-rose-300 bg-rose-200 rounded-md w-48 px-4 py-4'>
          <h1 className='text-lg text-rose-500 font-semibold'>COMPUTER SKILLS </h1>
          <p className='text-gray-800 font-medium px-1'>Visual studio code</p>
          <p className='text-gray-800 font-medium px-1'>Figma</p>
          <p className='text-gray-800 font-medium px-1'>Canva</p>
        </div>

        <div className='w-60 h-1/2 border-2 border-rose-300 bg-rose-200 rounded-md px-4 py-4'>
          <h1 className='text-lg text-rose-500 font-semibold'>COMPUTER  LANGUAGE </h1>
          <p className='text-gray-800 font-medium px-1'>HTML</p>
          <p className='text-gray-800 font-medium px-1'>CSS</p>
          <p className='text-gray-800 font-medium px-1'>Tailwind Css Framework</p>
          <p className='text-gray-800 font-medium px-1'>JavaScript</p>
          <p className='text-gray-800 font-medium px-1'>React js</p>
        </div>

        <div className='w-56 h-1/2 border-2 border-rose-300 bg-rose-200 rounded-md px-4 py-4'>
          <div className='flex space-x-1'>
            <h1 className='text-lg font-semibold text-rose-500'>PERSONAL |</h1>
            <h2 className='text-purple-600 font-bold pt-0.5'> ENTJ-A</h2>
          </div>
          <p className='text-gray-800 font-medium px-1'>Extraverted</p>
          <p className='text-gray-800 font-medium px-1'>Intuitive</p>
          <p className='text-gray-800 font-medium px-1'>Thinking</p>
          <p className='text-gray-800 font-medium px-1'>Judging</p>
          <p className='text-gray-800 font-medium px-1'>Assertive</p>
        </div>
      </div>
    </div>
  );
};
export default About;

        // kae kai hai pen sticky top-0 
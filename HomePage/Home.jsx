import "./Style.css";
// import { PiDogDuotone } from "react-icons/pi";
import { SiProbot } from "react-icons/si";
import { IoPawSharp } from "react-icons/io5";
const Home = () => {
  return (
    <div className="mx-auto w-full h-auto px-4 ">
      <div className="bg-white sticky top-0 h-17">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-xl text-blue-950 mt-2">AtoonPortfolio</h1>
          {/* <PiDogDuotone size="30px"/> */}
          <p className="px-3 py-3 mt-3 bg-blue-500 rounded-full"></p>
          <ul className="flex justify-end space-x-4">
            <li className="font-semibold text-base text-gray-600 pt-3">Home</li>
            <li className="font-semibold text-base text-gray-600 pt-3">About</li>
            <li className="font-semibold text-base text-gray-600 pt-3">
              Content
            </li>
          </ul>
        </div>
        <hr className="border-1 mt-8 shadow-md text-gray-500"/>
      </div>

      <div className="flex justify-center mt-24 mx-11">
        <div>
          <img src="https://i.pinimg.com/564x/2f/c9/83/2fc983dc27f30414efa1b37153092066.jpg" alt="#" className="w-3/4 h-3/4 ml-10"/>
        </div>
        <div className="mt-14">
          <p className="font-semibold text-3xl text-gray-900 mr-2 ">Hi! My name Chanmala</p>
          <div className="flex space-x-2">
            <p className="font-medium text-xl text-gray-700 pt-1">Nickname: Atoon </p>
              <IoPawSharp className="mt-2 h-6 w-5 text-rose-500"/>
          </div>
          <div className="flex space-x-1">
            <p className="text-sm py-1 text-gray-500">CEIT ROBOTIC</p>
            <SiProbot className="mt-1 text-gray-500"/>
          </div>
            <button className="mt-1 border-3 rounded-md border-rose-400 bg-blue-600 text-gray-200 font-semibold px-2 py-2 text-center">Im ENTJ</button>
        </div>
      </div>
    </div>
  );
};
export default Home;

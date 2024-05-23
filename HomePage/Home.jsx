import { useState } from "react";
import data from "./Data";
import "./Style.css";
import { SiProbot } from "react-icons/si";
import { IoPawSharp } from "react-icons/io5";
import { PiPawPrintBold } from "react-icons/pi";


const Home = () => {
  // hook Select Element
  const [selection, setSelection] = useState(null);

  const SelectiononClick = (getSelection) => {
    setSelection(getSelection === selection ? null : getSelection);
  };
  console.log(selection);

  return (
    <div className="mx-auto w-full h-auto px-4 bg-white" id="Home">
      <div className="w-full fixed top-0 z-40">
        <div className="bg-white h-17 mx-11">
          <div className="flex justify-between items-center">
            <div className="flex">
              <h1 className="font-semibold text-2xl text-gray-900 mt-2">
                Atoon
              </h1>
              <p className="mt-2 font-semibold text-2xl text-rose-450">
                Portfolio
              </p>
            </div>
            <IoPawSharp size="25px" className="mt-3 text-rose-500" />

            <ul className="flex justify-end space-x-4">
              <li
                className="font-semibold text-base text-gray-600 pt-4"
              >
                <a className="scrollSection h-screen" href="#Home">Home</a>
              </li>
              <li
                className="font-semibold text-base text-gray-600 pt-4"
              >
                <a className="scrollSection h-screen" href="#About">About</a>
              </li>
              <li
                className="font-semibold text-base text-gray-600 pt-4"
              >
                <a className="scrollSection h-screen" href="#Content">Content</a>
              </li>
            </ul>
          </div>
          <hr className="border-1 mt-5 shadow text-rose-200 border-rose-100" />
        </div>
      </div>

      <div className="flex justify-center mt-24 sm:items-center md:text-center">   
        <div className="text-center">
          <p className="font-semibold text-3xl text-gray-900 mr-2 sm:text-lg md:text-3xl">
            Hi! My name AtoonChanmala
          </p>
          <p className="font-medium text-lg text-gray-600 pt-1 mx-11 sm:text-sm md:text-lg">
            Faculty of Engineering,Computer Engineering & IT | October 2021 -
            PRESENT
          </p>
          <div className="flex justify-center space-x-1">
            <p className="text-sm py-1 text-gray-500">Member of CEIT ROBOTIC</p>
            <SiProbot className="mt-1 text-gray-500" />
            <p className="text-sm py-1 text-gray-500"> | 2022 - PRESENT</p>
          </div>
        </div>
      </div>

      <div className="mt-28 text-center flex justify-center space-x-1">
        <h1 className="font-semibold md:text-2xl sm:text-xl text-gray-900">AWARDED &</h1>
        <h1 className="font-semibold md:text-2xl sm:text-xl text-blue-500">SPONSORSHIP</h1>
      </div>
      <p className="text-center md:text-sm sm:text-xm text-gray-500 font-base ml-3 pt-1 md:block">
        Click the Icon paw to see Awarded
      </p>

              {/* Component item Awarded */}
      <div className="md:grid md:grid-cols-3 sm:grid sm:grid-cols-2">
        {data && data.length ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="flex flex-col items-center w-full"
            >
              <div className="w-1/2 ">
                <div
                  onClick={() => SelectiononClick(dataItem.id)}
                  className="flex space-x-1 mt-5 border-2 border-rose-400 rounded-md px-4 py-2"
                >
                  <h3 className="font-semibold text-sm text-gray-900 items-center ">
                    {dataItem.question}
                  </h3>
                  <PiPawPrintBold size="20px" className="mt-1 md:block" />
                </div>

                {selection === dataItem.id ? (
                  <div className="mt-3 border-2 border-blue-400 px-4 py-2 rounded-lg">
                    <h3 className="font-base text-gray-800">
                      {dataItem.answer}
                    </h3>
                  </div>
                ) : null}
              </div>
            </div>
          ))
        ) : (
          <div>
            <h3>Data not fond!!</h3>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;

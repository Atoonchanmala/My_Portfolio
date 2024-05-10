import { useState } from "react";
import data from "./Data";
import "./Style.css";
// import { PiDogDuotone } from "react-icons/pi";
import { SiProbot } from "react-icons/si";
import { IoPawSharp } from "react-icons/io5";
import { PiPawPrintBold } from "react-icons/pi";
const Home = () => {
  const [selection, setSelection] = useState(null);

  const SelectiononClick = (getSelection) => {
    setSelection(getSelection === selection ? null : getSelection);
  };
  console.log(selection);
  return (
    <div className="mx-auto w-full h-auto px-4 bg-white">
      <div className="bg-white sticky top-0 h-17 mx-11">
        <div className="flex justify-between items-center">
          <div className="flex">
            <h1 className="font-semibold text-2xl text-gray-900 mt-2">Atoon</h1>
            <p className="mt-2 font-semibold text-2xl text-rose-400">
              Portfolio
            </p>
          </div>
          {/* <PiDogDuotone size="30px"/> */}
          <IoPawSharp size="25px" className="mt-3 text-rose-500" />
          <ul className="flex justify-end space-x-4">
            <li className="font-semibold text-base text-gray-600 pt-4">Home</li>
            <li className="font-semibold text-base text-gray-600 pt-4">
              About
            </li>
            <li className="font-semibold text-base text-gray-600 pt-4">
              Content
            </li>
          </ul>
        </div>
        <hr className="border-1 mt-7 shadow text-rose-200 border-rose-100" />
      </div>

      <div className="flex justify-center mt-24">
        <div className="text-center">
          <p className="font-semibold text-3xl text-gray-900 mr-2 ">
            Hi! My name AtoonChanmala
          </p>
          <p className="font-medium text-lg text-gray-600 pt-1 md:2/3 ">
            Faculty of Engineering,Computer Engineering & IT | october 2021 -
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
        <h1 className="font-semibold text-2xl text-gray-900">AWARDED &</h1>
        <h1 className="font-semibold text-2xl text-blue-500">SPONSORSHIP</h1>
      </div>
      <p className="text-center text-sm text-gray-500 font-base ml-3 pt-1">
        Click the Icon paw to see Awarded
      </p>

      <div className="flex mt-5 w-full flex-wrap mx-">
        {data && data.length ? (
          data.map((dataItem) => (
            <div
              key={dataItem.id}
              className="flex flex-row w-1/3 justify-center"
            >
              <div className="w-1/2">
                <div
                  onClick={() => SelectiononClick(dataItem.id)}
                  className="flex space-x-1 mt-5 border-2 border-rose-400 rounded-md px-4 py-2 "
                >
                  <h3 className="font-semibold text-lg text-gray-900 items-center">{dataItem.question}</h3>
                  <PiPawPrintBold size="25px" className="mt-1" />
                </div>

                {selection === dataItem.id ? (
                  <div className="mt-3 border-2 border-blue-600 px-4 py-2 rounded-lg">
                    <h3 className="font-base text-gray-800">{dataItem.answer}</h3>
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

        // not commit to git bash
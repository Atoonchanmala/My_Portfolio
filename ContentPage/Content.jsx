import "./Style.css";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaBook } from "react-icons/fa6";
import { BiSolidCameraMovie } from "react-icons/bi";
import { BsMusicPlayerFill } from "react-icons/bs";

const Content = () => {
  return (
    <div className="w-full md:mt-27 sm:mt-20" id="Content">
      <div className="sticky bottom-0 left-0 right-0">
        <div className="bg-rose-450 px-4 py-4">
          <div className="flex justify-between mx-11">
            <h1 className="font-semibold md:text-lg sm:text-sm text-rose-100">
              INTERESTS
            </h1>
            <div className="mt-2 flex flex-col items-center md:-ml-20 sm:ml-0">
              <div className="border-2 border-rose-300 rounded-full md:w-14 md:h-14 sm:w-10 sm:h-10 flex justify-center items-center">
                <HiOutlineDesktopComputer
                  size="30px"
                  className="text-white md:block"
                />
              </div>
              <p className="pt-1 text-rose-50 md:font-base md:text-sm sm:font-semibold sm:text-xm ">
                Technology
              </p>
            </div>

            <div className="mt-2 flex flex-col items-center">
              <div className="border-2 border-rose-300 rounded-full md:w-14 md:h-14 sm:w-10 sm:h-10 flex justify-center items-center">
                <FaBook size="30px" className="text-white md:block sm:block" />
              </div>
              <p className="pt-1 text-rose-50 md:font-base md:text-sm sm:font-semibold sm:text-xm">
                RedBooks
              </p>
            </div>

            <div className="mt-2 flex flex-col items-center">
              <div className="border-2 border-rose-300 rounded-full md:w-14 md:h-14 sm:w-10 sm:h-10 flex justify-center items-center">
                <BiSolidCameraMovie size="30px" className="text-white" />
              </div>
              <p className="pt-1 text-rose-50 md:font-base md:text-sm sm:font-semibold sm:text-xm">
                Movie
              </p>
            </div>

            <div className="mt-2 flex flex-col items-center">
              <div className="border-2 border-rose-300 rounded-full md:w-14 md:h-14 sm:w-10 sm:h-10 flex justify-center items-center">
                <BsMusicPlayerFill size="30px" className="text-white" />
              </div>
              <p className="pt-1 text-rose-50 md:text-sm md:font-base sm:text-xm sm:font-semibold">
                Music
              </p>
            </div>
          </div>
          <hr className="border-1 mt-10 mx-11" />

          <div className="mt-2 mx-11">
            <h1 className="mx-2 font-semibold md:text-lg sm:text-sm text-rose-100">
              MyContent
            </h1>
          </div>
          <div className="flex justify-around space-x- items-center mx-20">
            <div className="mx-14">
              <div className="flex space-x-2">
                <h2 className="font-medium text-rose-100 ">Phone:</h2>
                <span className="text-rose-50 pt-0.5 md:text-base sm:text-xm">
                  +856 20 99 685 729
                </span>
              </div>

              <div className="flex space-x-2 mt-2">
                <h2 className="font-medium text-rose-100 ">Facebook:</h2>
                <span className="text-rose-50 md:text-base sm:text-xm">
                  chanmalakeoxaisy
                </span>
              </div>
            </div>

            <div>
              <div className="flex space-x-2">
                <h2 className="font-medium text-rose-100">Github:</h2>
                <span className="text-rose-50 md:text-base sm:text-xm">AtoonChanmala</span>
              </div>

              <div className="flex space-x-2 mt-2">
                <h2 className="font-medium text-rose-100">Gmail:</h2>
                <span className="text-rose-50 md:text-base sm:text-sm">chanmalaKeoxaisy@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;

// ການເຮັດ responsive ຂະຫນາດຫນ້າຈໍໃຫ້ພໍເໝາະກັບໂທລະສັບ (ເຂົ້າເບິ່ງວິທີໃນຍູທູເບິ່ງກໍໄດ້)

// ເກັບລາຍລະອຽດແກ້ໄຂຕໍ່

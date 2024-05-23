import "./Style.css";
const About = () => {
  return (
    <div className="mt-14 mx-auto w-full" id="About">
      <div className="flex justify-center space-x-1 md:-ml-5 sm:mx-4">
        <h1 className="font-semibold md:text-2xl sm:text-xl text-gray-900">SKILLS & </h1>
        <h1 className="font-semibold md:text-2xl text-blue-500 sm:text-xl">EXPERTISE</h1>
      </div>

      <div className="mx-auto w-full mt-10 md:flex md:justify-center md:space-x-2 sm:grid sm:justify-center sm:items-center sm:space-y-1">
        <div className="border-2 border-rose-300 bg-rose-200 rounded-md md:w-56 sm:w-48 sm:mx-4 md:-mx-0 px-4 py-4">
          <h1 className="md:text-lg sm:text-sm text-rose-500 font-semibold">
            COMPUTER SKILLS{" "}
          </h1>
          <p className="text-gray-600 font-semibold px-1 md:text-sm sm:text-xm">Visual studio code</p>
          <p className="text-gray-600 font-semibold px-1 md:text-sm sm:text-xm">Figma</p>
          <p className="text-gray-600 font-semibold  px-1 md:text-sm sm:text-xm">Canva</p>
        </div>

        <div className="md:w-60 sm:w-56 border-2 border-rose-300 bg-rose-200 rounded-md px-4 py-4">
          <h1 className="md:text-lg sm:text-sm text-rose-500 font-semibold">
            COMPUTER LANGUAGE{" "}
          </h1>
          <p className="text-gray-600 font-semibold px-1 md:text-sm sm:text-sm">HTML</p>
          <p className="text-gray-600 font-semibold px-1">CSS</p>
          <p className="text-gray-600 font-semibold px-1 md:text-sm sm:text-sm">
            Git Bash | Github | Cmd
          </p>
          <p className="text-gray-600 font-semibold px-1 md:text-sm sm:text-sm">
            Tailwind Css Framework
          </p>
          <p className="text-gray-600 font-semibold px-1 md:text-sm sm:text-sm">JavaScript</p>
          <p className="text-gray-600 font-semibold px-1 md:text-sm sm:text-sm">React js</p>
        </div>

        <div className="md:w-56 sm:w-48 sm:mx-4 md:-mx-0 border-2 border-rose-300 bg-rose-200 rounded-md px-4 py-4">
          <div className="flex space-x-1">
            <h1 className="md:text-lg sm:text-sm font-semibold text-rose-500">PERSONAL |</h1>
            <h2 className="text-purple-600 font-semibold md:pt-0.5 sm:pt-0.5 md:text-sm sm:text-xm"> ENTJ-A</h2>
          </div>
          <p className="text-gray-600 font-semibold px-1 md:text-sm sm:text-xm">Extraverted</p>
          <p className="text-gray-600 font-semibold px-1 md:text-sm sm:text-xm">Intuitive</p>
          <p className="text-gray-600 font-semibold px-1 md:text-sm sm:text-xm">Thinking</p>
          <p className="text-gray-600 font-semibold px-1 md:text-sm sm:text-xm">Judging</p>
          <p className="text-gray-600 font-semibold px-1 md:text-sm sm:text-xm">Assertive</p>
        </div>
      </div>
    </div>
  );
};
export default About;



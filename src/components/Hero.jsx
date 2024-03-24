
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative hero min-h-[calc(100vh-284px)] flex flex-col justify-center items-center space-y-5">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-extrabold">
            Wecome To
            <span className=" ml-5 font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
               ByteBlaze
            </span>
          </h1>
          <p className="py-6 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            fugit nihil harum provident repellat impedit fuga quos! Quidem, iure
            quasi.
          </p>
          <div className="space-x-3">
            <Link
              to="/blogs"
              class="cursor-pointer  relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-red-500"></span>
              <span className="relative text-black group-hover:text-white">
                Read Blogs
              </span>
            </Link>
            <Link
              to="/bookmarks"
              class="cursor-pointer relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-red-500"></span>
              <span className="relative text-black group-hover:text-white">
                BookMarks
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

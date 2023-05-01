import Image from "next/image";
import Profile from "../public/images/PROFİLE.jpg";
import {AiFillGithub,AiFillLinkedin,AiFillTwitterCircle} from "react-icons/ai";
import {GiTie} from "react-icons/gi";
import {GoLocation} from "react-icons/go";
import { useTheme } from "next-themes";

const Sidebar = () => {
  
  const { theme, setTheme } = useTheme();

  const changeTheme=()=>{
    setTheme(theme==="light"?"dark":"light")
  }

  return (
    <div>
      <Image
        src={Profile}
        alt="profile"
        width={120}
        height={120}
        className="mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-orange">Yunus Emre</span> Taşçı
      </h3>

      <p className="px-2 py-1 my-3 font-semibold bg-gray-200 rounded-full dark:bg-dark-300 font-montserrat lg:text-sm">
        Fullstack Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 font-semibold bg-gray-200 rounded-full dark:bg-dark-300 font-montserrat lg:text-sm"
        href="/assets/Yunus Emre Taşçı Resume.pdf"
        download="Yunus Emre Taşçı Resume.pdf"
      >
        {" "}
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      <div className="flex justify-around w-3/4 mx-auto my-5 text-orange md:w-full">
        <a
          href="https://github.com/Yunus-Emre-Tasci"
          aria-label="Github"
          target="_blank"
        >
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a
          href="https://twitter.com/home?lang=tr"
          aria-label="Twitter"
          target="_blank"
        >
          <AiFillTwitterCircle className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/yunus-emre-tasci/"
          aria-label="Linkedin"
          target="_blank"
        >
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-300 mx-[-1rem] rounded-xl">
        <div className="flex items-center justify-center space-x-2 font-semibold font-montserrat">
          <GoLocation />
          <span>Turkey</span>
        </div>
        <p className="my-2 font-medium text-lg md:text-lg lg:text-[0.5rem] xl:text-[0.9rem]">
          yunusemretasci092@gmail.com
        </p>
        <p className="my-2 font-semibold font-montserrat">0(535) 104 58 85</p>
      </div>
      <button
        className="w-3/4 px-5 py-2 font-semibold text-white rounded-full dark:text-dark-300 bg-gradient-to-r from-orange to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:yunusemretasci092@gmail.com")}
      >
        Email Me
      </button>
      <button
        className="w-3/4 px-5 py-2 my-4 font-semibold text-white rounded-full dark:text-dark-300 bg-gradient-to-r from-orange to-blue-400"
        onClick={changeTheme}
      >
        Theme
        {/* {theme==="light"? "Dark UI" : "Light UI"} */}
      </button>
    </div>
  );
}

export default Sidebar
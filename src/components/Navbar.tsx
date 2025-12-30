import { Link } from "react-router-dom";

const Navbar = () => {
  // CONTAINS THE ARRAY OF PAGES AND CORRESPONDING URL
  const navContent = [
    { webPage: "Home", url: "/" },
    { webPage: "About", url: "/" },
    { webPage: "Portfolio", url: "/" },
    { webPage: "Blog", url: "/" },
    { webPage: "Contact", url: "/" },
  ];

  return (
    <div>
      <nav className="xl:h-[5rem] xl:pl-[16rem] xl:pt-[1rem] 
      lg:h-[5rem] lg:pl-[10rem] lg:pt-[1rem] 
      md:h-[5rem] md:pl-[8rem] md:pt-[1rem] 
      sm:h-[5rem] sm:pl-[0rem] sm:pt-[1rem] 
      
      w-full flex justify-center text-black font-inter ">
        <div className="flex">
          {navContent.map((page, index) => (
            <button
              key={page.webPage}
              className={`px-[4vw] ${
                index === navContent.length - 1 &&
                "lg:ml-[5rem] sm:ml-[1rem] bg-highlight1 text-white font-bold"
              }`}
            >
              <Link
                className="
                xl:text-xl_heading2
                lg:text-lg_heading2
                sm:text-sm_heading2
                font-inter relative group inline-block"
                to={page.url}
              >
                {page.webPage}
                <span className="block w-0 h-[0.25rem] bg-white transition-all duration-300 group-hover:w-full group-hover:scale-x-100 group-hover:origin-center"></span>
              </Link>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

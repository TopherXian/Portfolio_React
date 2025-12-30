import React from "react";

import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio"

import profile_pic from "../assets/images/portrait.jpg"

const Homepage = () => {
  return (
    <>
      <div className="bg-background">
        {/* LAYER 1 */}
        <div className=" sm:overflow-hidden
        min-h-screen relative">
          <Navbar />
          <div className="flex md:mr-[2rem] lg:gap-[0]
          ">
            {/* INTRODUCTION */}
            <div className="xl:h-[40rem] xl:w-[50rem] xl:px-[10vw] xl:pt-[10rem]
                            lg:h-[40rem] lg:w-[40rem] lg:px-[7rem] lg:pt-[10rem]
                            md:h-[40rem] md:w-[40rem] md:pl-[4rem] md:pt-[15rem]
                            sm:h-[10rem] sm:w-[100%] sm:px-[10rem] sm:pt-[15rem] sm:items-center sm:justify-center sm:text-black sm:z-10
            ">
              <p className=" xl:text-left xl:text-xl_intro
              lg:text-left lg:text-lg_intro
              md:text-left md:text-md_intro 
              sm:text-center sm:text-sm_intro
              font-light font-inter 
              ">Hello there!</p>

              <p className=" xl:text-left xl:text-xl_heading
              lg:text-left lg:text-lg_heading
              md:text-left md:text-md_heading
              sm:text-center sm:text-sm_heading
               font-raleway font-bold">
                I’m <span>Cristopher Ian</span>
              </p>
              <p className=" xl:text-left xl:text-xl_heading
              lg:text-left lg:text-lg_heading
              md:text-left md:text-md_heading
              sm:text-center sm:text-sm_heading
              font-raleway font-bold">
                Computer Programmer
              </p>
              <p className=" xl:text-left xl:text-xl_content
              lg:text-left lg:text-lg_content
              md:text-left md:text-lg_content
              sm:text-center sm:text-sm_content
               mt-[1vh] mb-[2vh] font-normal">
                I specialize in game development, website design, and computer
                science, creating engaging games, intuitive websites, and
                innovative tech solutions.
              </p>
             <div className=" xl:justify-start xl:text-xl_heading2
             lg:justify-start lg:text-lg_heading2
             md:justify-start md:text-md_heading2
             sm:justify-center sm:text-sm_heading2
             flex gap-[2rem]"> 
               <button className=" 
               sm:mt-[1rem] sm:px-[1rem] sm:py-[1rem] sm:text-intro
               bg-highlight1 text-white mt-[1rem] px-[1rem] py-[1rem] font-inter  font-bold 
               ">
                Download CV
              </button>
              <button className="
              sm:mt-[1rem] sm:px-[1rem] sm:py-[1rem] sm:text-intro
              bg-highlight1 text-white mt-[1rem] px-[1rem] py-[1rem] font-inter font-bold
              ">
                Hire Me
              </button>
             </div>
              {/* PHOTO */}
              <div className="bg-[(../assets/images/SampleImage.png)] h-[90vh] w-[40vw]"></div>
              {/* DECORATIVE SQUARES */}
              <div className="absolute top-[20vh] left-[0vw] w-[5vw] h-[20vh] bg-object1" />
              <div className="absolute top-[30vh] right-[0vw] w-[10vw] h-[40vh] bg-object2" />
              <div className="absolute top-[90vh] right-[0vw] w-[10vw] h-[30vh] bg-object1 z-20" />
            </div>
            {/* PORTRAIT */}
            <div className="flex-shrink-0
            ">
            <div
              className="
                absolute inset-0
                z-0
                bg-center bg-cover
                opacity-50
                pointer-events-none
                xl:ml-[0rem]
                xl:static
                xl:opacity-100
                xl:w-[35rem]
                xl:aspect-[3/4]
                lg:ml-[-8rem]
                lg:static
                lg:opacity-100
                lg:w-[30.5rem]
                lg:aspect-[3/4]
                md:ml-[-14rem]
                md:static
                md:opacity-100
                md:w-[30.5rem]
                md:aspect-[3/4]
              "
              style={{ backgroundImage: `url(${profile_pic})` }}
            />
            </div>
          </div>
        </div>
        {/* LAYER 2 */}
        <div className="min-h-screen relative bg-highlight1 text-white z-10">
          <div className="xl:pt-[6rem] xl:gap-[18rem]
          lg:pt-[6rem] lg:gap-[6rem]
          md:pt-[6rem] md:gap-[6rem]
          sm:pt-[6rem] sm:gap-[3rem] sm:pb-[10rem]
          flex ">
            {/* EXPERTISE */}
            <div className="relative 
            font-raleway shrink-0 space-y-[2rem] sm:pr-[1rem]">
              <p className="xl:pl-[5rem] xl:text-xl_heading
              lg:pl-[5rem] lg:text-lg_heading
              md:pl-[3rem] md:text-md_heading
              sm:pl-[2rem] sm:text-sm_heading
            font-bold">Website Development</p>
            <p className="xl:pl-[5rem] xl:text-xl_content
            lg:pl-[5rem] lg:text-lg_content
            md:pl-[3rem] md:text-md_content
            sm:pl-[2rem] sm:text-sm_content">
              TailwindCSS, MongoDB, React, NodeJS
            </p>
              <p className="xl:pl-[5rem] xl:text-xl_heading
              lg:pl-[5rem] lg:text-lg_heading
              md:pl-[3rem] md:text-md_heading
              sm:pl-[2rem] sm:text-sm_heading
            font-bold">Game Development</p>
            <p className="xl:pl-[5rem] xl:text-xl_content
            lg:pl-[5rem] lg:text-lg_content
            md:pl-[3rem] md:text-md_content
            sm:pl-[2rem] sm:text-sm_content">
              Godot, Unreal Engine 5, RPG Maker
            </p>
              <p className="xl:pl-[5rem] xl:text-xl_content
              xl:pl-[5rem] xl:text-xl_heading
              lg:pl-[5rem] lg:text-lg_heading
              md:pl-[3rem] md:text-md_heading
              sm:pl-[2rem] sm:text-sm_heading
            font-bold">Computer Scientist</p>
            <p className="xl:pl-[5rem] xl:text-xl_content
            lg:pl-[5rem] lg:text-lg_content
            md:pl-[3rem] md:text-md_content
            sm:pl-[2rem] sm:text-sm_content">
              AI & ML using Python, Java and C++, Arduino
            </p>
            </div>
            {/* DESCRIPTION */}
          <div className="relative pr-[4rem]">
            <p className="xl:text-xl_section
            lg:text-lg_section
            md:text-md_section
            sm:text-sm_section
            font-bold font-inter">About Me</p>
            <p className="xl:text-lg_content xl:pt-[3rem]
            lg:text-lg_content lg:pt-[3rem]
            md:text-lg_content md:pt-[2rem]
            sm:text-sm_content sm:pt-[2rem]
            font-normal font-inter">I transform ideas into interactive realities by seamlessly blending creativity with technology. Through thoughtful design and purposeful engineering, I craft immersive digital experiences that are not only visually engaging but also intuitive and impactful.
              <p className="lg:pt-[2rem]
              sm:pt-[1rem]
              ">My work spans interactive applications, game development, and intelligent systems—each project driven by a commitment to innovation, usability, and performance. I enjoy exploring the intersection of imagination and logic, where creative vision meets technical precision.</p>
              <p className="lg:pt-[2rem]
              sm:pt-[1rem]
              ">By bridging the gap between concept and execution, I aim to build solutions that feel alive, meaningful, and future-ready—shaping the digital world one creation at a time.</p></p>
          </div>
            {/* DECORATIVE SQUARES */}
            <div className="absolute top-[80vh] left-[0vw] w-[20vw] h-[30vh] bg-object2" />
          </div>
        </div>

        {/* LAYER 3 */}
        <div className="min-h-screen 
        lg:py-[5rem] 
        sm:pt-[4rem]
        relative font-inter flex flex-col">
          <div className="xl:mr-[9.4vw] xl:ml-[70vw] xl:text-lg_heading xl:pr-[3rem]
          lg:mr-[9rem] lg:ml-[68vw] lg:text-lg_heading lg:pr-[2rem]
          md:mr-[7rem] md:ml-[42rem] md:text-md_heading md:pr-[1rem]
          sm:mr-[5rem] sm:ml-[32rem] sm:text-sm_heading sm:pr-[1rem]
          bg-highlight1  font-bold text-white text-right">
          <p>
            Portfolio
          </p>
          </div>
          {/* PORTFOLIO COMPONENT */}
         <Portfolio />
          
          {/* DECORATIVE SQUARES */}
          <div className="absolute top-[30vh] left-[0vw] w-[5vw] h-[30vh] bg-object1 z-10" />
          <div className="absolute top-[80vh] right-[0vw] w-[10vw] h-[40vh] bg-object2 z-10" />
        </div>

        {/* LAYER 4 */}
        <div className="xl:py-[8rem] xl:px-[4rem]
        lg:py-[6rem] lg:px-[4rem]
        md:py-[5rem] md:px-[3rem]
        sm:py-[4rem] sm:px-[2rem]
        min-h-screen relative font-inter bg-highlight1 flex ">
          {/* PHOTO */}
          <div
              className="
                bg-center bg-cover w-full 
              "
            />
          {/* FORM */}
          <div className=" xl:pt-[1rem] xl:px-[5rem]
          lg:pt-[1rem] lg:px-[4rem]
          md:pt-[3rem] md:px-[3rem]
          sm:pt-[2rem] sm:px-[2rem]

          relative h-full w-full flex flex-col justify-center ">
            <p className=" xl:text-xl_section 
            lg:text-lg_section 
            md:text-md_section 
            sm:text-sm_section
            font-bold font-inter text-white">Contact Me!</p>
            <p className="xl:text-xl_content
            lg:text-lg_content
            md:text-md_content
            sm:text-sm_content sm:pt-[1rem]
            font-inter text-white">
              Have questions, ideas, or opportunities to share? I’d love to hear from you! Whether you’re looking to collaborate, need assistance with a project, or just want to connect, feel free to reach out. Let’s bring ideas to life together!
            </p>
            {/* FORM SECTION */}
              <form className=" xl:gap-[2rem] xl:pt-[2rem]
              lg:gap-[2rem] lg:pt-[1rem]
              md:gap-[1rem] md:pt-[1rem]
              sm:gap-[1rem] sm:pt-[1rem]
              max-w-xl flex flex-col">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="xl:px-[1rem] xl:py-[1rem] xl:text-xl_content
                  lg:px-[1rem] lg:py-[1rem] lg:text-lg_content
                  md:px-[0.75rem] md:py-[0.75rem] md:text-md_content
                  sm:px-[0.5rem] sm:py-[0.5rem] sm:text-sm_content
                  w-full bg-white text-black outline-none focus:ring-2 focus:ring-highlight1 font-inter font-light "
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="xl:px-[1rem] xl:py-[1rem] xl:text-xl_content
                  lg:px-[1rem] lg:py-[1rem] lg:text-lg_content
                  md:px-[0.75rem] md:py-[0.75rem] md:text-md_content
                  sm:px-[0.5rem] sm:py-[0.5rem] sm:text-sm_content
                  w-full bg-white text-black outline-none focus:ring-2 focus:ring-highlight1 font-inter font-light"
                />
                <input
                  placeholder="Subject"
                  className="xl:px-[1rem] xl:py-[1rem] xl:text-xl_content
                  lg:px-[1rem] lg:py-[1rem] lg:text-lg_content
                  md:px-[0.75rem] md:py-[0.75rem] md:text-md_content
                  sm:px-[0.5rem] sm:py-[0.5rem] sm:text-sm_content
                  w-full bg-white text-black outline-none focus:ring-2 focus:ring-highlight1 font-inter font-light"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="xl:px-[1rem] xl:py-[1rem] xl:text-xl_content
                  lg:px-[1rem] lg:py-[1rem] lg:text-lg_content
                  md:px-[0.75rem] md:py-[0.75rem] md:text-md_content
                  sm:px-[0.5rem] sm:py-[0.5rem] sm:text-sm_content
                  w-full bg-white text-black outline-none resize-none focus:ring-2 focus:ring-highlight1 font-inter font-light"
                />
                <button
                  type="submit"
                  className=" xl:w-[15rem] xl:py-[1rem] xl:px-[2rem] xl:text-lg_content
                  lg:w-[15rem] lg:py-[1rem] lg:px-[2rem] lg:text-lg_content
                  md:w-[14rem] md:py-[1rem] md:px-[1rem] md:text-md_content
                  sm:w-[14rem] sm:py-[1rem] sm:px-[1rem] sm:text-sm_content
                  bg-object1 text-white font-bold hover:opacity-90 transition font-inter "
                >
                  Send Message
                </button>
              </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;

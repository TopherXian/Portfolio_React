import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

interface Project {
  id: string;
  title: string;
  description: string;
  imageURL: string;
}


const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        let projectsData: Project[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title ?? "",
            description: data.description ?? "",
            imageURL: data.imageURL ?? "",
            link: data.link ?? "",
          };
        });

        // Randomize and pick up to 4 projects
        projectsData = projectsData.sort(() => 0.5 - Math.random()).slice(0, 4);

        setProjects(projectsData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  if (loading) return <p>Loading projects...</p>;
  if (projects.length === 0) return <p>No projects available</p>;

  const project = projects[currentIndex];

  return (
    <div className="lg:mx-[9rem] 
    md:mx-[7rem] md:mb-[4rem] 
    mx-[2rem] mb-[1rem] bg-highlight2 relative flex-1 z-20">
      <div className="flex flex-col lg:flex-row">
  {/* PHOTO */}
  <div className="flex-shrink-0">
    <div
      className="lg:w-[35rem] lg:max-w-[28rem] lg:aspect-[3/4] 
      md:w-[100%] md:aspect-[10/4] 
      w-[100%] aspect-[10/4] bg-center bg-cover"
      style={{ backgroundImage: `url(portfolio/${project.imageURL})` }}
    />
  </div>

  {/* DESCRIPTION + SLIDER */}
<div
  className="
    lg:pt-[3rem] lg:px-[5vw] lg:h-[35rem]
    md:pt-[2rem] md:px-[4rem] md:h-[30rem] 
    pt-[2rem] px-[1rem]
    relative h-[25rem] w-full
    flex flex-col items-start
    text-left
  "
>
{/* TITLE */}
  <p className="xl:text-xl_heading 
  lg:text-lg_heading 
  md:text-md_heading 
  text-sm_heading font-raleway font-bold">
    {project.title}
  </p>
{/* DESCRIPTION */}
  <p className="xl:text-lg_content xl:mt-[1rem] 
  lg:text-lg_content lg:mt-[1rem] 
  md:text-md_content md:mt-[1rem] 
  text-sm_content mt-[1rem] font-inter overflow-y-auto flex-1">
    {project.description}
  </p>

    {/* SLIDER / CONTROLS */}
    <div className="md:mt-[2rem]

    pb-[1rem] flex justify-between items-center  w-full">
      {/* Navigation buttons */}
      <div className="flex gap-2">
              {/* See More Button */}
      <button
        className="md:mt-[2rem] md:px-[2rem] md:py-[1rem]
        mt-[0.5rem] px-[0.5rem] py-[0.5rem] text-intro bg-highlight1 text-white font-inter font-bold"
        onClick={() => window.open("https://github.com/Cristopher-Artacho-WVSU", "_blank")}
      >
        See More
      </button>

      </div>

      {/* Dots */}
      <div className="flex gap-[0.5rem]">
        {projects.map((_, idx) => (
          <div
            key={idx}
            className={` md:w-[1rem] md:h-[1rem] w-[0.5rem] h-[0.5rem] rounded-full ${
              idx === currentIndex ? "bg-object1" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

        <button className=" md:mt-[2rem] md:px-[2rem] md:py-[1rem]
        mt-[0.5rem] px-[0.5rem] py-[0.5rem] text-intro bg-highlight1 text-white font-inter font-bold " onClick={nextSlide}>
          Next
        </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Portfolio;

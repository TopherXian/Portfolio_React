import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        let projectsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

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

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  if (loading) return <p>Loading projects...</p>;
  if (projects.length === 0) return <p>No projects available</p>;

  const project = projects[currentIndex];

  return (
    <div className="lg:mx-[9rem] md:mx-[7rem] md:mb-[4rem] sm:mx-[5rem] sm:mb-[4rem] bg-highlight2 relative flex-1 z-20">
      <div className="flex flex-col lg:flex-row">
  {/* PHOTO */}
  <div className="flex-shrink-0">
    <div
      className="lg:w-[35rem] lg:max-w-[28rem] lg:aspect-[3/4] md:w-[35vw] md:max-w-[28rem] md:aspect-[3/4] sm:w-[35vw] sm:max-w-[28rem] sm:aspect-[2/4] bg-center bg-cover"
      style={{ backgroundImage: `url(portfolio/${project.imageURL})` }}
    />
  </div>

  {/* DESCRIPTION + SLIDER */}
<div
  className="
    lg:pt-[3rem] lg:px-[5vw]
    md:pt-[2.5rem] md:px-[4rem]
    sm:pt-[2rem] sm:px-[1rem]
    relative h-[35rem] w-full
    flex flex-col items-start
    text-left
  "
>
{/* TITLE */}
  <p className="xl:text-xl_heading lg:text-lg_heading md:text-md_heading sm:text-sm_heading font-raleway font-bold">
    {project.title}
  </p>
{/* DESCRIPTION */}
  <p className="xl:text-lg_content xl:mt-[1rem] lg:text-lg_content lg:mt-[1rem] md:text-md_content md:mt-[1rem] sm:text-sm_content sm:mt-[1rem] font-inter overflow-y-auto flex-1">
    {project.description}
  </p>

    {/* SLIDER / CONTROLS */}
    <div className="flex justify-between items-center mt-4 w-full">
      {/* Navigation buttons */}
      <div className="flex gap-2">
              {/* See More Button */}
      <button
        className="px-4 py-2 bg-highlight1 text-white font-inter rounded"
        onClick={() => window.open(project.link, "_blank")}
      >
        See More
      </button>

      </div>

      {/* Dots */}
      <div className="flex gap-[0.5rem]">
        {projects.map((_, idx) => (
          <div
            key={idx}
            className={`w-[1rem] h-[1rem] rounded-full ${
              idx === currentIndex ? "bg-object1" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

        <button className="px-3 py-1 bg-highlight1 text-white rounded" onClick={nextSlide}>
          Next
        </button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Portfolio;

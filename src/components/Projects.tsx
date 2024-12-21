import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { projectsData } from "../assets/assets";

function Projects() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
       const updateCardstoShow = () => {
        if(window.innerWidth >= 1024){
            setCardsToShow(projectsData.length);
        
        } else {
            setCardsToShow(1);
        
       }    
       updateCardstoShow();
       window.addEventListener('resize', updateCardstoShow);
       return () => {
        window.removeEventListener('resize', updateCardstoShow);
       }}
    }, [projectsData]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1);
    };

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 md:my-20 full overflow-hidden id="Projects"'>
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">
        Our Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-10 mx-auto max-w-80">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>
      {/* slider buttons */}
      <div className="flex justify-end items-center mb-10">
        <button className="p-3 bg-gray-200 rounded mr-2" onClick={handlePrev}>
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button className="p-3 bg-gray-200 rounded mr-2" onClick={handleNext}>
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* project slider container*/}
      <div className="overflow-hidden">
        <div className="flex  gap-8 transition-transform duration-500 ease-in-out " style={{transform: `translateX(-${(currentIndex * 100)/ cardsToShow}%)`}}>
          {projectsData.map((project, index) => (
            <div key={index} className="relative  w-full sm:w-1/4 flex-shrink-0">
              <img src={project.image} alt={project.title} className="w-full h-auto mb-14  " />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {project.price} | {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

import React from "react";
import { testimonialsData } from "../assets/assets";
import { assets } from "../assets/assets";

const Testimonails = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden id="Testimonials"'>
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-2 decoration-primary font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Real Stories from Those Who Found Home with Us
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial) => (
          <div className="max-w-[300px] border shadow-lg rounded px-8 py-12 text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.title}</p>
            <div>
              {Array.from({ length: testimonial.rating }).map((_, index) => (
                <img
                  src={assets.star_icon}
                  key={index}
                  alt="star"
                  className="w-4 h-4 inline-block mx-1"
                />
              ))}
            </div>
            <p className="text-gray-600 mt-4">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonails;

import React from "react";

const Contact = () => {
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-2">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-2 decoration-primary font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      <form action="" className="flex flex-col  gap-4 max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">
      <div className="flex flex-col text-left md:w-1/2 w-full">
            Your Name
            <input className="w-full border border-gray-300 rounded py-2 px-4 mt-2" name="name" type="text" placeholder="Your Name" required />
        </div>
        <div className="flex flex-col text-left md:w-1/2 w-full md:pl-4">
            Your Email
            <input className="w-full border border-gray-300 rounded py-2 px-4 mt-2" name="email" type="email" placeholder="Your Email" required />
        </div>
      </div>
        <div className="flex flex-col text-left w-full ">
            Message
            <textarea className="w-full border border-gray-300 rounded py-2 px-4 mt-2 h-40" name="message" placeholder="Your Message" required />
        </div>
        <button className="bg-blue-500 mx-auto text-white px-8 py-2 rounded-md">Send Message</button>
       
       
      </form>
    </div>
  );
};

export default Contact;

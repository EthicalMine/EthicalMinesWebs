import React from "react";
import Button from "./Button";
import Image from "next/image";

const Chooseus = () => {
  const services = [
    {
      img: <Image src="/person.svg" alt="person" width={150} height={100} />,
      title: "Blockchain-Based Traceability",
      text: "Implement blockchain technology to create an immutable record of the entire mining process.",
    },
    {
      img: <Image src="/hat.svg" alt="hat" width={150} height={100} />,
      title: "Real-Time Data Collection:",
      text: "Use IoT sensors to gather real-time data on mining operations, including environmental and safety metrics",
    },
    {
      img: <Image src="/chat.svg" alt="chat" width={150} height={100} />,
      title: "Ethical Sourcing Verification",
      text: " We offer certification labels for products that meet ethical sourcing criteria, allowing consumers to make informed ",
    },
    {
      img: <Image src="/timer.svg" alt="timer" width={150} height={100} />,
      title: "User-Friendly Interface",
      text: "Offer a dashboard that provides a comprehensive overview of key metrics and activities.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center py-20 bg-[#F4F7FA] font-Sarabun">
      <div className="text-center mb-5 w-full">
        <p className="text-sm text-[#F64B4B]">Why choose us</p>
        <div className="flex justify-between">
          <Image src="/Group 161.svg" alt="Group" width={50} height={50} />
          <div className="text-center  w-4/6 py-3">
            <h3 className="text-2xl font-semibold w-3/6 ">
              People choose us because we serve the best for everyone
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-1/2 my-5">
        {services.map((service, index)=> (<div key={index} className="flex w-1/2 text-sm">
            <div className="p-3">{service.img}</div>
            <div className="p-5">
                <p className="font-medium mb-3">{service.title}</p>
                <p className="opacity-50 leading-6">{service.text}</p>
            </div>
        </div>))}

        <div className="flex my-5 p-5 items-center">
        <div className="w-2/3">
            <h5 className="tex">Ready to join the movement towards ethical mining</h5>
            <p className="text-sm opacity-50 leading-6">Get in touch with us to learn more about our solutions and how we can help you achieve your ethical and sustainability goals.</p>
            </div>
            <Button>Contact us</Button>
        </div>
           
        </div>
    </div>
  );
};

export default Chooseus;
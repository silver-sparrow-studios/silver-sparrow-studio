"use client";
import React, { useState } from "react";
// Import images
import webDevelopment from "../../modules/common/assets/images/webDevelopment.svg";
import uiux from "../../modules/common/assets/images/uiux.svg";
import mobileDevelopment from "../../modules/common/assets/images/mobileDevelopment.svg";
import AiMl from "../../modules/common/assets/images/AiMl.svg";
import Image from "next/image";

interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: string;
  techIcons: string[];
  buttons: string[];
}

const services: ServiceData[] = [
  {
    id: "custom-development",
    title: "Custom Development",
    description:
      "Boost your business with custom web and mobile solutions, delivering scalable, user-friendly platforms to enhance engagement and drive growth.",
    icon: webDevelopment,
    techIcons: [
      "python",
      "javascript",
      "typescript",
      "react",
      "node",
      "vue",
      "nest",
      "next",
    ],
    buttons: ["Web Development", "Mobile Development"],
  },
  {
    id: "app-developer",
    title: "App Development",
    description:
      "Enhance user satisfaction with our innovative UI/UX design services, creating visually stunning and intuitive interfaces that captivate users and elevate your brand.",
    icon: uiux,
    techIcons: ["photoshop", "illustrator", "figma", "sketch"],
    buttons: ["App Development"],
  },
  {
    id: "mvp-development",
    title: "MVP Development",
    description:
      "Bring your idea to market quickly with our MVP development services! We help you build a minimum viable product that tests your concept while minimizing costs.",
    icon: AiMl,
    techIcons: ["photoshop", "illustrator", "figma", "sketch"],
    buttons: ["MVP Development"],
  },
  {
    id: "dedicated-teams",
    title: "Dedicated Teams",
    description:
      "Partner with our dedicated team of skilled professionals, including project managers, analysts, developers, and designers, delivering tailored solutions for your success!.",
    icon: mobileDevelopment,
    techIcons: ["photoshop", "illustrator", "figma", "sketch"],
    buttons: ["Dedicated Teams"],
  },
];

const ServiceBox = ({
  icon,
  title,
  isSelected,
  onClick,
}: {
  icon: string;
  title: string;
  isSelected: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className={`p-6 cursor-pointer transition-all duration-300 rounded-lg border-2 ${
      isSelected
        ? "border-blue-500 bg-blue-50"
        : "border-gray-200 hover:border-blue-300"
    }`}
  >
    <div className="flex flex-col items-center space-y-3">
      <div tw={`${isSelected ? "text-blue-500" : "text-gray-600"}`}>
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <p className="text-sm font-medium text-center">{title}</p>
    </div>
  </div>
);

const ServiceDetails = ({ service }: { service: ServiceData }) => (
  <div className="lg:pl-8 mt-8 lg:mt-0">
    <h2 className="text-4xl font-bold mb-2">
      <span className="text-black">{service.title.split(" ")[0]}</span>
      <span className="text-primary"> {service.title.split(" ")[1]}</span>
    </h2>
    <p className="text-black font-normal text-lg mb-6">{service.description}</p>

    <div className="flex flex-wrap gap-4 mb-8">
      {service.techIcons.map((icon, index) => (
        <div
          key={index}
          className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
        >
          <span className="text-xs text-gray-500">{icon[0].toUpperCase()}</span>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap gap-4">
      {service.buttons.map((button, index) => (
        <button
          key={index}
          className="px-6 py-2 bg-primary text-white rounded-md hover:bg-transparent hover:text-primary hover:border hover:border-primary transition-colors"
        >
          {button}
        </button>
      ))}
    </div>
  </div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState<ServiceData>(
    services[0]
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-5xl font-bold text-left mb-3">
        Custom <span className="text-primary">Software Development</span>{" "}
        Services
      </h1>
      <p className="text-left text-black font-medium text-sm sm:text-xl mb-12">
        Turning your vision into reality with ZAPTA&apos;s premium custom
        software solutions.
      </p>

      <div className="lg:flex gap-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:w-1/2">
          {services.map((service) => (
            <ServiceBox
              key={service.id}
              icon={service.icon}
              title={service.title}
              isSelected={selectedService.id === service.id}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>

        <div className="lg:w-1/2">
          <ServiceDetails service={selectedService} />
        </div>
      </div>
    </div>
  );
};
export default Services;

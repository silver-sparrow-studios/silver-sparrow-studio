"use client";
import React, { useState, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

// Import images
import logoWhite from "../../modules/common/assets/images/logoWhite.svg";
import webDevelopment from "../../modules/common/assets/images/webDevelopment.svg";
import uiux from "../../modules/common/assets/images/uiux.svg";
import mobileDevelopment from "../../modules/common/assets/images/mobileDevelopment.svg";
import AiMl from "../../modules/common/assets/images/AiMl.svg";

// Constants
const SERVICES = [
  {
    title: "Web Development",
    description:
      "Custom web development solutions to create stunning, user friendly websites.",
    icon: webDevelopment,
  },
  {
    title: "Mobile Development",
    description:
      "Expert mobile app development for iOS and Android to boost your business.",
    icon: mobileDevelopment,
  },
  {
    title: "UI UX Design",
    description:
      "Creating engaging UI UX designs that enhance user experience and satisfaction.",
    icon: uiux,
  },
  {
    title: "AI/ML Applications",
    description:
      "Developing innovative AI/ML applications to transform your business processes.",
    icon: AiMl,
  },
] as const;

// Reusable components
const NavLink = memo(
  ({
    href,
    children,
    className = "hover:text-primary",
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
);

NavLink.displayName = "NavLink";

const ServiceCard = memo(
  ({ service, href }: { service: (typeof SERVICES)[number]; href: string }) => (
    <Link
      href={href}
      className="p-3 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-start space-x-4">
        <span className="text-2xl">
          <Image
            src={service.icon}
            alt={`${service.title} icon`}
            width={50}
            height={50}
          />
        </span>
        <div>
          <h3 className="text-black font-semibold text-md">{service.title}</h3>
          <p className="text-gray-600 text-xs mt-1">{service.description}</p>
        </div>
      </div>
    </Link>
  )
);

ServiceCard.displayName = "ServiceCard";

// Desktop Services Dropdown
const ServiceDropdown = memo(() => (
  <div className="absolute top-full left-0 w-[650px] bg-white shadow-lg rounded-lg mt-1 p-4 grid grid-cols-2 gap-4 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
    {SERVICES.map((service, index) => (
      <ServiceCard
        key={index}
        service={service}
        href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}
      />
    ))}
  </div>
));

ServiceDropdown.displayName = "ServiceDropdown";

// Mobile Services Menu
const MobileServices = memo(
  ({ isOpen, services }: { isOpen: boolean; services: typeof SERVICES }) =>
    isOpen && (
      <div className="mt-2 ml-4 space-y-2">
        {services.map((service, index) => (
          <Link
            href={`/services/${service.title.toLowerCase().replace(/ /g, "-")}`}
            key={index}
            className="block hover:text-primary py-2"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={30}
                height={30}
              />
              <span>{service.title}</span>
            </div>
          </Link>
        ))}
      </div>
    )
);

MobileServices.displayName = "MobileServices";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMobileServices = () =>
    setIsMobileServicesOpen(!isMobileServicesOpen);

  return (
    <div className="relative">
      <nav className="bg-navy-900 text-white px-4 py-4 bg-black">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <NavLink href="/">
              <Image
                src={logoWhite}
                alt="Logo"
                width={135}
                height={135}
                className="w-[120px] h-[55px] sm:w-[100px] sm:h-[40px] md:w-[130px] md:h-[55px]"
                priority
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10 text-lg font-medium">
            <NavLink href="/">Home</NavLink>
            <div className="relative group">
              <button className="hover:text-primary py-4 flex justify-center items-center gap-1">
                Services <ChevronDown size={20} />
              </button>
              <ServiceDropdown />
            </div>
            <NavLink href="/">Projects</NavLink>
            <NavLink href="/">About Us</NavLink>
            <NavLink href="/">Blogs</NavLink>
            <NavLink href="/">Careers</NavLink>
            <NavLink
              href="/"
              className="hidden sm:block py-2 px-6 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-md"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 bg-black right-0 bg-navy-900 border-t border-gray-700 z-10">
            <div className="flex flex-col space-y-4 p-4">
              <NavLink href="/">Home</NavLink>
              <div>
                <button
                  className="hover:text-primary flex justify-between items-center w-full"
                  onClick={toggleMobileServices}
                >
                  Services
                  <span className="transform transition-transform duration-200">
                    {isMobileServicesOpen ? "▼" : "▶"}
                  </span>
                </button>
                <MobileServices
                  isOpen={isMobileServicesOpen}
                  services={SERVICES}
                />
              </div>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/blogs">Blogs</NavLink>
              <NavLink href="/careers">Careers</NavLink>
              <NavLink
                href="/"
                className="py-2 px-6 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-md"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

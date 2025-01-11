import React from "react";
import Image from "next/image";
import achivement1 from "@/modules/common/assets/images/achivement1.webp";
import achivement2 from "@/modules/common/assets/images/achivement2.svg";
import achivement3 from "@/modules/common/assets/images/achivement3.webp";
import achivement4 from "@/modules/common/assets/images/achivement4.webp";
import whatsappIcon from "@/modules/common/assets/images/whatsappIcon.svg";
import skypeIcon from "@/modules/common/assets/images/skypeIcon.svg";
import mailIcon from "@/modules/common/assets/images/mailIcon.svg";
import callIcon from "@/modules/common/assets/images/callIcon.svg";

///Award Images
type Award = {
  icon: string;
};

const awardedBy: Award[] = [
  { icon: achivement1.src },
  { icon: achivement2.src },
  { icon: achivement3.src },
  { icon: achivement4.src },
];

///Social Icons

type SocialButton = {
  icon: string;
  alt: string;
  bgColor: string;
};

const socialButtons: SocialButton[] = [
  {
    icon: whatsappIcon,
    alt: "WhatsApp",
    bgColor: "hover:bg-[linear-gradient(0deg,#1FAF38_-9900%,#60D669_100%)]",
  },
  {
    icon: skypeIcon,
    alt: "Skype",
    bgColor: "hover:bg-[#005BAA]",
  },
  {
    icon: mailIcon,
    alt: "Email",
    bgColor: "hover:bg-[#139CFF]",
  },
  {
    icon: callIcon,
    alt: "Phone",
    bgColor: "hover:bg-[#F37021]",
  },
];

const Banner = () => {
  return (
    <div className="relative h-auto sm:min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/videos/bannerBackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/55" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto sm:min-h-screen">
        <div className="pt-20 pb-16 sm:pt-40 sm:pb-20">
          {/* Main Content */}
          <div className="max-w-3xl">
            <p className="text-sm sm:text-base text-gray-300 font-semibold mb-4">
              FOCUSED ON YOUR SUCCESS
            </p>
            <h1 className="text-[2rem] sm:text-5xl leading-snug sm:leading-snug lg:text-6xl lg:leading-tight font-bold text-white mb-8">
              AI-Centric Custom Software Development & Seamless MVP Solutions.
            </h1>

            {/* CTA Button */}
            <div className="relative inline-block group">
              <button
                className="relative z-10 bg-transparent border-2 border-white text-white px-6 py-3 rounded-md 
                hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2"
              >
                <span>Book a Consultation - it&apos;s free</span>
                <svg
                  className="w-5 h-5 inline-block group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              {/* Button Hover Effect */}
              <div
                className="absolute inset-0 bg-white transform scale-x-0 origin-left 
                transition-transform duration-300 group-hover:scale-x-100 rounded-md"
              />
            </div>

            {/* Awards Section */}
            <div className="mt-16">
              <p className="text-gray-300 mb-4 font-bold">Awarded By</p>
              <div className="flex flex-wrap items-center gap-6">
                {awardedBy?.map((award, index) => (
                  <div
                    className="w-[4.5rem] sm:w-20 h-[4.5rem] sm:h-20 rounded-full"
                    key={index}
                  >
                    <Image
                      src={award.icon}
                      alt="Clutch Award"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 space-y-4 hidden lg:block">
              {socialButtons.map((button, index) => (
                <button
                  key={index}
                  className={`w-14 h-14 bg-white/10 rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-sm ${button.bgColor}`}
                >
                  <Image
                    src={button.icon}
                    alt={button.alt}
                    width={28}
                    height={28}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

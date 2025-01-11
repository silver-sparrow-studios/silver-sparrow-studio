"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import client1 from "@/modules/common/assets/images/client1.webp";
import client2 from "@/modules/common/assets/images/client2.webp";

// type
interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "George Goldman",
    role: "Founder",
    company: "Opentime",
    content:
      "ZAPTA Technologies has been a true partner in delivering a robust MVP, showcasing expertise, adaptability, and genuine investment in our success. As a first-time founder, I felt supported and understood every step of the way.",
    imageUrl: client1.src,
  },
  {
    id: 2,
    name: "Terry Peterson",
    role: "Founder & CEO",
    company: "DrBroker.com",
    content:
      "ZAPTA's meticulous attention to detail and unwavering commitment to deadlines fueled a fantastic project collaboration. Their consistent quality output showcases their reliability and deep understanding of the project, making them a true partner, not just a vendor. Bravo, ZAPTA!",
    imageUrl: client2.src,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-[url('/images/testimonial-bg.webp')] bg-cover bg-no-repeat">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-1 md:mb-12 leading-snug">
          <span className="text-black">Our Clients, </span>
          <span className="text-primary">Our Success Stories</span>
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex justify-between mb-6 md:mb-0">
            <div className="w-full max-w-3xl mt-6">
              <div
                className={`transform transition-all duration-500 ease-in-out ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <p className="text-black font-medium leading-normal text-base md:text-[1.40rem] mb-6">
                  {testimonials[currentIndex].content}
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold text-base md:text-[1.5rem] text-gray-900">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base font-medium mt-1">
                      {testimonials[currentIndex].role} of{" "}
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block ">
              <div className="w-80 h-72 relative rounded-lg overflow-hidden bg-blue-600">
                <Image
                  src={testimonials[currentIndex].imageUrl}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-blue-600 opacity-10"></div>
              </div>
              <p className="font-semibold text-[1.5rem] text-gray-900 text-center mt-4">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-600 text-base text-center font-medium">
                {testimonials[currentIndex].role} of{" "}
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-8 h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* <div className="absolute bottom-0 right-0 flex gap-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

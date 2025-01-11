import Header from "@/components/header";
import Banner from "@/components/landing/Banner";
import Testimonial from "@/components/landing/Testimonial";
import Services from "@/components/landing/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <Testimonial />
    </>
  );
}

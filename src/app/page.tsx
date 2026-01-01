import { Hero } from "./(site)/components/Hero";
import { Services } from "./(site)/components/Services";
import { Trust } from "./(site)/components/Trust";
import { Contact } from "./(site)/components/Contact";
import { Testimonials } from "@/app/(site)/components/Testimonials";

export default function Page() {
  return (
    <>
      
      <Hero />
      <Services />
      <Trust />
      <Testimonials />
      <Contact />
      
    </>
  );
}

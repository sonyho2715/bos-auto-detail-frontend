import { Hero, Services, WhyChooseUs, Testimonials, BlogPreview, CTA } from "@/components";
import { FAQ } from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <CTA />
    </>
  );
}

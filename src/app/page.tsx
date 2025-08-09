import { About } from "@/components/blocks/about-us";
import { ContactUs } from "@/components/blocks/contact-us";
import { Feature } from "@/components/blocks/feature";
import { Footer } from "@/components/blocks/footer";
import { Hero } from "@/components/blocks/hero";
import { Navbar } from "@/components/blocks/navbar";
import Pricing from "@/components/blocks/pricing";

// export default function HomePage() {
//   return (
//     <main className="p-10">
//       <h1 className="text-3xl font-bold mb-6">Our Pricing</h1>
//       <Pricing />
//     </main>
//   );
// }

// import {}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Pricing />
      <ContactUs />
      <Footer />
    </>
  );
}

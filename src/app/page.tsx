import Navbar from "@/modules/guitar-club/navbar";
import Hero from "@/modules/guitar-club/hero";
import About from "@/modules/guitar-club/about";
import Forms from "@/modules/guitar-club/forms";
import Merchandise from "@/modules/guitar-club/merchandise";
import Sponsors from "@/modules/guitar-club/sponsors";
import Transport from "@/modules/guitar-club/transport";
import ContactFooter from "@/modules/guitar-club/contact-footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Forms />
      <Merchandise />
      <Sponsors />
      <Transport />
      <ContactFooter />
    </main>
  );
}

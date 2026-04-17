import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { AvantApres } from "@/components/AvantApres";
import { DashboardDemo } from "@/components/DashboardDemo";
import { Catalogue } from "@/components/Catalogue";
import { Offres } from "@/components/Offres";
import { Temoignages } from "@/components/Temoignages";
import { Portfolio } from "@/components/Portfolio";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] relative overflow-hidden">
      {/* Global liquid blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/40 via-violet-200/30 to-cyan-200/40 animate-blob animate-float rounded-full blur-[80px]" />
        <div className="absolute top-[40%] -right-48 w-[600px] h-[600px] bg-gradient-to-br from-violet-200/30 via-pink-200/20 to-blue-200/30 animate-blob rounded-full blur-[100px]" style={{ animationDelay: "-4s" }} />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-cyan-200/30 via-blue-200/20 to-violet-200/30 animate-blob animate-float rounded-full blur-[80px]" style={{ animationDelay: "-8s", animationDuration: "8s" }} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Process />
        <AvantApres />
        <DashboardDemo />
        <Catalogue />
        <Offres />
        <Temoignages />
        <Portfolio />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

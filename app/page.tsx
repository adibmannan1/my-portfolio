"use client"

import Hero from "@/components/Hero";
import Hireme from "../components/Hireme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <div className="text-dark min-height-screen flex items-center justify-center flex-col">
      <Navbar/>
      <main className="px-5 sm:px-10 md:px-20 lg:px-32
      flex items-center justify-center flex-col max-auto">
        <Hero/>
      </main>
      <Footer/>
    </div>
  );
}

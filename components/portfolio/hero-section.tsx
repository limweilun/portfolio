"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
     
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
       
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
         
        />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
         
        />
      </div>

      <div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
       
      >
        {/* Profile image */}
        <div
          className={`w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center transition-all duration-1000 ${mounted ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        >
          {!imageError ? (
            <Image
              src="/images/profile.jpg"
              alt="Lim Wei Lun"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-white text-4xl font-bold">LWL</span>
          )}
        </div>

        {/* Name and title */}
        <div
          className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
         
        >
          <h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4"
           
          >
            Lim Wei Lun
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2"

          >
            Web and Automation Developer
          </p>
          <p
            className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto"

          >
            Passionate about building innovative solutions and creating exceptional user experiences
          </p>
        </div>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
         
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => scrollToSection("projects")}
           
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 border-2"
            onClick={() => scrollToSection("contact")}
           
          >
            Get In Touch
          </Button>
        </div>

        {/* Social links */}
        <div
          className={`flex justify-center gap-6 mb-12 transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
         
        >
          <a
            href="https://linkedin.com/in/limweilun"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
           
          >
            <Linkedin
              className="w-6 h-6 text-blue-600 group-hover:text-blue-700"
             
            />
          </a>
          <a
            href="https://github.com/limweilun"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
           
          >
            <Github
              className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
             
            />
          </a>
          <a
            href="mailto:limweilun.sg@gmail.com"
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
           
          >
            <Mail
              className="w-6 h-6 text-red-500 group-hover:text-red-600"
             
            />
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`transition-all duration-1000 delay-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
         
        >
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
           
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
}

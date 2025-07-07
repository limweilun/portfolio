"use client";

import { AnimatedSection } from "./animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Users, Zap } from "lucide-react";

export function AboutSection() {
  const skills = [
    "JavaScript/TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "n8n",
    "Docker",
    "PostgreSQL",
    "MongoDB",
  ];

  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description:
        "Passionate about writing clean, efficient code and staying current with the latest technologies.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description:
        "Love tackling complex challenges and finding innovative solutions to real-world problems.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Strong believer in teamwork and effective communication to deliver exceptional results.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Focused on building scalable, high-performance applications that provide great user experiences.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
     
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
             
            >
              About Me
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
             
            ></div>
          </div>
        </AnimatedSection>

        <div
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
         
        >
          <AnimatedSection delay={200}>
            <div className="space-y-6">
              <p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
               
              >
                I'm a passionate software engineer with a strong foundation in
                full-stack development. My journey in technology has been driven
                by curiosity and a desire to create meaningful solutions that
                make a difference.
              </p>
              <p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
               
              >
                With experience spanning from frontend frameworks to backend
                architectures, I enjoy the entire development lifecycle. I'm
                particularly interested in building scalable applications and
                exploring emerging technologies.
              </p>
              <p
                className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
               
              >
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="relative">
              {/* Video placeholder */}
              <div
                className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center shadow-2xl"
               
              >
                <div className="text-center">
                  <div
                    className="w-16 h-16 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                   
                  >
                    <div
                      className="w-0 h-0 border-l-[12px] border-l-blue-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"
                     
                    ></div>
                  </div>
                  <p
                    className="text-gray-600 dark:text-gray-300 font-medium"
                   
                  >
                    Introduction Video
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20"
               
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20"
               
              ></div>
            </div>
          </AnimatedSection>
        </div>

        {/* Skills */}
        <AnimatedSection delay={600}>
          <div className="mb-16">
            <h3
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
             
            >
              Technical Skills
            </h3>
            <div
              className="flex flex-wrap justify-center gap-3"
             
            >
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                 
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Highlights */}
        <AnimatedSection delay={800}>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
           
          >
            {highlights.map((highlight) => (
              <Card
                key={highlight.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
               
              >
                <CardContent className="p-6 text-center">
                  <div
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                   
                  >
                    <highlight.icon
                      className="w-6 h-6 text-white"
                     
                    />
                  </div>
                  <h4
                    className="font-semibold text-gray-900 dark:text-white mb-2"
                   
                  >
                    {highlight.title}
                  </h4>
                  <p
                    className="text-sm text-gray-600 dark:text-gray-300"
                   
                  >
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

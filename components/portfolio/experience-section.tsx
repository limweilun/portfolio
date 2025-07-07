"use client";

import { AnimatedSection } from "./animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Singapore",
      period: "April 2025 - Present",
      description:
        "Collaboration and version control platform for prompt engineering at diffyn.com. Web App UI generator at appsify.dev. Developing modern web applications and automation solutions for various clients.",
      achievements: [
        "Built collaboration platform for prompt engineering",
        "Developed web app UI generator with modern frameworks",
        "Specialized in automation development and systems integration",
      ],
    },
    {
      title: "Automation Developer",
      company: "Thomson Medical",
      location: "Singapore",
      period: "January 2025 - May 2025",
      description:
        "Development and deployment of automation solutions for finance, human resources, doctor engagement, and patient care offices. Created robust automations tailored to stakeholder needs using UiPath, .NET and VB.",
      achievements: [
        "Streamlined operational workflows through advanced automation strategies across multiple departments",
        "Facilitated seamless integration between AI-powered tools and existing systems to improve efficiency and accuracy",
        "Implemented scalable automation frameworks aligning with organizational objectives to support diverse departmental requirements",
        "Applied technical expertise to deliver reliable, high-performing automated solutions ensuring consistent stakeholder satisfaction",
      ],
    },
    {
      title: "Project Support, Factory Information Systems",
      company: "Delphi Technologies",
      location: "Singapore",
      period: "October 2018 - January 2019",
      description:
        "Aptiv and Delphi Technologies spin-off: Factory Information Systems server products migration. Worked closely with Delphi Technologies FIS team to successfully identify project's complexity and subsequently modified and migrated all components of the FIS to the new Delphi Technologies server.",
      achievements: [
        "Successfully migrated complex Factory Information Systems during company spin-off",
        "Collaborated with technical teams to minimize disruption during 5-month migration project",
        "Applied technical expertise in system migration and server management",
      ],
    },
    {
      title: "Intern, Factory Information Systems",
      company: "Delphi Technologies",
      location: "Singapore",
      period: "April 2018 - October 2018",
      description:
        "Member of the Factory Information Systems (FIS) team. Participated in New Programme Implementations, enhanced FIS scripts, wrote traceability scripts for production units, and performed testing and implementation for each affected process.",
      achievements: [
        "Participated in New Programme Implementations and system enhancements",
        "Developed traceability scripts for production unit data tracking using tcl/tk",
        "Generated test scripts and shell scripts for process automation",
        "Gained experience in Linux/Unix environments for software testing and verification",
        "Contributed to troubleshooting and debugging of production systems",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
             
            >
              Experience
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
             
            ></div>
            <p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
             
            >
              My professional journey in software development
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"
           
          ></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection
                key={exp.title}
                delay={index * 200}
               
              >
                <div className="relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block"
                   
                  ></div>

                  <Card
                    className="md:ml-16 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg"
                   
                  >
                    <CardHeader>
                      <div
                        className="flex flex-col md:flex-row md:items-center md:justify-between gap-2"
                       
                      >
                        <CardTitle
                          className="text-xl font-bold text-gray-900 dark:text-white"
                         
                        >
                          {exp.title}
                        </CardTitle>
                        <div
                          className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400"
                         
                        >
                          <div
                            className="flex items-center gap-1"
                           
                          >
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div
                            className="flex items-center gap-1"
                           
                          >
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      <p
                        className="text-lg font-semibold text-blue-600 dark:text-blue-400"
                       
                      >
                        {exp.company}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p
                        className="text-gray-600 dark:text-gray-300 mb-4"
                       
                      >
                        {exp.description}
                      </p>
                      <div className="space-y-2">
                        <h4
                          className="font-semibold text-gray-900 dark:text-white"
                         
                        >
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                             
                            >
                              <div
                                className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"
                               
                              ></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

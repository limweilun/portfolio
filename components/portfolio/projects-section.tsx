"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatedSection } from "./animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, GithubIcon as Github, Play, X } from "lucide-react";
import { youtube } from "@/lib/youtube";
import YouTube from "react-youtube";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  videoUrl?: string;
  githubUrl?: string | null;
  featured: boolean;
}

export function ProjectsSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  const projects: Project[] = [
    {
      title: "Diffyn",
      description:
        "A collaborative platform for prompt engineering with version control capabilities. Features real-time collaboration, prompt versioning, and team management for AI development workflows.",
      image: "https://img.youtube.com/vi/rWOmenCiz-c/hqdefault.jpg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Supabase",
        "Tailwind CSS",
        "OpenAI API",
        "Vercel",
      ],
      liveUrl: "https://diffyn.com",
      videoUrl: "https://youtu.be/rWOmenCiz-c?si=ocZWJNSvKZDxsk1u",
      githubUrl: null, // Closed source
      featured: true,
    },
    {
      title: "Appsify",
      description:
        "An intelligent web application UI generator that creates modern, responsive interfaces from simple descriptions. Streamlines the development process with AI-powered design generation.",
      image: "https://img.youtube.com/vi/tIfo-PjGegA/hqdefault.jpg",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Supabase", "Vercel"],
      liveUrl: "https://appsify.dev",
      videoUrl: "https://youtu.be/tIfo-PjGegA?si=DBRSNBAChpcnHLdW",
      githubUrl: null, // Closed source
      featured: true,
    },
    {
      title: "Quantegize",
      description:
        "A comprehensive quantitative analysis platform for financial markets, featuring advanced analytics, real-time data processing, and algorithmic trading capabilities.",
      image: "https://img.youtube.com/vi/-7WHYdMFSLM/hqdefault.jpg",
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Redis", "Docker", "AWS"],
      liveUrl: "#",
      videoUrl: "https://www.youtube.com/watch?v=-7WHYdMFSLM",
      githubUrl: null, // Closed source
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects and skills with smooth animations and dark mode support. Built with Next.js and Tailwind CSS.",
      image: "/api/placeholder/600/400", // Keep placeholder until video is available
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCN/UI", "Lucide React"],
      liveUrl: "#",
      videoUrl: undefined, // Will be added soon
      githubUrl: "https://github.com/limweilun/portfolio",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
     
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
             
            >
              Featured Projects
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
             
            ></div>
            <p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
             
            >
              A showcase of my recent work and personal projects
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              delay={index * 200}
             
            >
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
               
              >
                <div
                  className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                 
                >
                  <div className="relative group cursor-pointer" onClick={() => project.videoUrl && setSelectedVideo(project.videoUrl)}>
                    {/* Project image with YouTube thumbnail or placeholder */}
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative">
                      {project.image.startsWith('/api/placeholder') ? (
                        // Placeholder for projects without videos
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                              <Play className="w-8 h-8 text-blue-600" />
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 font-medium">
                              Demo Coming Soon
                            </p>
                          </div>
                        </div>
                      ) : (
                        // YouTube thumbnail
                        <>
                          <Image
                            src={project.image}
                            alt={`${project.title} demo`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            priority={index < 2}
                          />
                          {/* Play button overlay for videos */}
                          {project.videoUrl && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-20 h-20 bg-black/70 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:bg-black/80 group-hover:scale-110">
                                <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center"

                    >
                      <div className="flex gap-4">
                        {project.videoUrl && (
                          <Button
                            size="sm"
                            className="bg-white text-black hover:bg-gray-100"
                            onClick={() => setSelectedVideo(project.videoUrl!)}
                          >
                            <Play className="w-4 h-4 mr-2" />
                            Watch Demo
                          </Button>
                        )}
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <Button
                            size="sm"
                            className="bg-white text-black hover:bg-gray-100"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-black"
                            onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                 
                >
                  <div className="space-y-6">
                    <div>
                      <h3
                        className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
                       
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                       
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                         
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.videoUrl && (
                        <Button
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={() => setSelectedVideo(project.videoUrl!)}
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Watch Demo
                        </Button>
                      )}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Button
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Other Projects Grid */}
        <AnimatedSection delay={600}>
          <div className="mb-12">
            <h3
              className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8"
             
            >
              Other Projects
            </h3>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              delay={700 + index * 100}
             
            >
              <Card
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
               
              >
                <div className="relative cursor-pointer" onClick={() => project.videoUrl && setSelectedVideo(project.videoUrl)}>
                  {/* Project image with YouTube thumbnail or placeholder */}
                  <div className="aspect-video relative overflow-hidden">
                    {project.image.startsWith('/api/placeholder') ? (
                      // Placeholder for projects without videos
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                            <Play className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                            Demo Coming Soon
                          </p>
                        </div>
                      </div>
                    ) : (
                      // YouTube thumbnail
                      <>
                        <Image
                          src={project.image}
                          alt={`${project.title} demo`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        />
                        {/* Play button overlay for videos */}
                        {project.videoUrl && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:bg-black/80 group-hover:scale-110">
                              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"

                  >
                    <div className="flex gap-2">
                      {project.videoUrl && (
                        <Button
                          size="sm"
                          className="bg-white text-black hover:bg-gray-100"
                          onClick={() => setSelectedVideo(project.videoUrl!)}
                        >
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <Button
                          size="sm"
                          className="bg-white text-black hover:bg-gray-100"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-black"
                          onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle
                    className="text-xl font-bold text-gray-900 dark:text-white"
                   
                  >
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p
                    className="text-gray-600 dark:text-gray-300 mb-4"
                   
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                       
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <YouTube
              videoId={youtube.getVideoId(selectedVideo) || ''}
              opts={{
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                  rel: 0,
                  controls: 1,
                },
              }}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}

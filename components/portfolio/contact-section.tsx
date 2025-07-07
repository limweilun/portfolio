"use client";

import { useState } from "react";
import { AnimatedSection } from "./animated-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "limweilun.sg@gmail.com",
      href: "mailto:limweilun.sg@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+65 8768 1403",
      href: "tel:+6512345678",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Singapore",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com/in/limweilun",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/limweilun",
      color:
        "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:limweilun.sg@gmail.com",
      color: "text-red-500 hover:text-red-600",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
             
            >
              Get In Touch
            </h2>
            <div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"
             
            ></div>
            <p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
             
            >
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection delay={200}>
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle
                  className="text-2xl font-bold text-gray-900 dark:text-white"
                 
                >
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                 
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                       
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                        placeholder="Your name"
                       
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                       
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                        placeholder="your.email@example.com"
                       
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                     
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors"
                      placeholder="What's this about?"
                     
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                     
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello!"
                     
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                   
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={400}>
            <div className="space-y-8">
              <div>
                <h3
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                 
                >
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                     
                    >
                      <div
                        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                       
                      >
                        <info.icon
                          className="w-6 h-6 text-white"
                         
                        />
                      </div>
                      <div>
                        <p
                          className="font-medium text-gray-900 dark:text-white"
                         
                        >
                          {info.title}
                        </p>
                        <p
                          className="text-gray-600 dark:text-gray-300"
                         
                        >
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                 
                >
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                     
                    >
                      <social.icon
                        className={`w-6 h-6 ${social.color} transition-colors`}
                       
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <Card
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-0 shadow-lg"
               
              >
                <CardContent className="p-6 text-center">
                  <h4
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                   
                  >
                    Let's work together!
                  </h4>
                  <p
                    className="text-gray-600 dark:text-gray-300 mb-4"
                   
                  >
                    I'm always interested in hearing about new projects and
                    opportunities.
                  </p>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    onClick={() => document.getElementById("email")?.focus()}
                   
                  >
                    Start a conversation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

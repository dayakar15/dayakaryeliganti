'use client';

import { motion } from 'framer-motion';

import { SectionHeader } from '@/components/ui/section-header';
import { fadeIn } from '@/lib/motion';

export function ProjectsSection() {
  const projects = [
    {
      title: "Farmers Logistic Truck Sharing",
      description:
        "Farmers can share trucks with other farmers using this platform, reducing transportation costs and improving logistics efficiency.",
      image: "/image1.png",
      github: "https://github.com/dayakar15/Farmers-Logistic-Truck-Sharing",g",
      demo: "https://github.com/dayakar15/Farmers-Logistic-Truck-Sharing",,
      tech: ["Python", "HTML", "CSS", "Django"],
    },
    {
      title: "Python Trading Bot",
      description:
        "A trading bot for Binance Futures Testnet supporting Market and Limit orders with CLI input, logging, and error handling.",
      image: "/image2.png",
      github: "https://github.com/dayakar15/pythondevelopment_intern.git",
      demo: "#",
      tech: ["Python"],
    },
    {
      title: "Cyber Crime Security",
      description:
        "Predictive analytics framework to forecast cybercrime cash withdrawal locations, enabling proactive intervention and actionable intelligence.",
      image: "/image3.png",
      github: "https://github.com/dayakar15/SIH-Hackathon.git",
      demo: "#",
      tech: ["Python", "Data Analytics"],
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <SectionHeader
          title="My Projects"
          description="Here are some of the projects I have worked on."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.2 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >

              {/* IMAGE */}
              <div className="relative w-full h-40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mt-2">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>

                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-sm text-green-500 hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

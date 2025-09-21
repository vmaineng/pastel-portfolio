import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform built with React, TypeScript, and Stripe integration. Features include product filtering, shopping cart, and secure checkout.",
      image:
        "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODQ2OTIyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
      color: "from-pink-400 to-rose-400",
    },
    {
      title: "Data Dashboard",
      description:
        "Interactive data visualization dashboard with real-time updates, charts, and analytics. Built for tracking key business metrics.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg0MjI0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React", "D3.js", "Node.js", "MongoDB"],
      color: "from-blue-400 to-indigo-400",
    },
    {
      title: "Mobile Banking App",
      description:
        "Cross-platform mobile banking application with biometric authentication, transaction history, and budget tracking features.",
      image:
        "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4NDQ2MTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      color: "from-green-400 to-emerald-400",
    },
    {
      title: "Project Management Tool",
      description:
        "Collaborative project management application with task tracking, team communication, and deadline management features.",
      image:
        "https://images.unsplash.com/photo-1554306274-f23873d9a26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzU4NDI2NzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tech: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io"],
      color: "from-purple-400 to-violet-400",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my favorite projects that showcase my skills and
            passion for creating amazing user experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                {/* <Image
                  height={100}
                  width={100}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                /> */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-4 h-4 text-gray-600" />
                  </motion.button>
                  <motion.button
                    className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub className="w-4 h-4 text-gray-600" />
                  </motion.button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.1 + techIndex * 0.1 + 0.5,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

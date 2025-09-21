import { motion } from "motion/react";
import { useState } from "react";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", level: 90, color: "from-blue-500 to-indigo-600" },
        { name: "Vue.js", level: 85, color: "from-green-400 to-green-600" },
        { name: "Tailwind CSS", level: 92, color: "from-cyan-400 to-cyan-600" },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 88, color: "from-orange-400 to-red-500" },
        { name: "Webpack", level: 78, color: "from-blue-400 to-purple-500" },
        { name: "Jest", level: 82, color: "from-red-400 to-pink-500" },
        { name: "Figma", level: 85, color: "from-purple-400 to-pink-500" },
      ],
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js", level: 80, color: "from-green-500 to-green-600" },
        { name: "Express.js", level: 75, color: "from-gray-500 to-gray-700" },
        { name: "MongoDB", level: 70, color: "from-green-600 to-green-700" },
        { name: "PostgreSQL", level: 72, color: "from-blue-600 to-indigo-700" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's my toolkit for bringing ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-2xl mb-6 text-center text-gray-800">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <motion.span
                        className="text-sm text-gray-500"
                        animate={{
                          scale: hoveredSkill === skill.name ? 1.1 : 1,
                          color:
                            hoveredSkill === skill.name ? "#6366f1" : "#6b7280",
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          boxShadow: "0 0 20px rgba(99, 102, 241, 0.4)",
                          scale: 1.02,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating skill icons */}
        <div className="relative mt-16">
          <motion.div
            className="absolute top-0 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full flex items-center justify-center opacity-70"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-2xl">⚛️</span>
          </motion.div>

          <motion.div
            className="absolute top-10 right-1/3 w-12 h-12 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full flex items-center justify-center opacity-70"
            animate={{
              y: [0, 15, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-lg">💚</span>
          </motion.div>

          <motion.div
            className="absolute top-5 right-1/4 w-14 h-14 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full flex items-center justify-center opacity-70"
            animate={{
              y: [0, -15, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-xl">🎨</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { useState } from "react";

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", color: "from-blue-400 to-blue-600" },
        { name: "TypeScript", color: "from-blue-500 to-indigo-600" },
        { name: "Vue.js", color: "from-green-400 to-green-600" },
        { name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600" },
        { name: "Next.js", color: "from-gray-600 to-black" },
        { name: "HTML/CSS", color: "from-orange-400 to-red-500" },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", color: "from-orange-400 to-red-500" },
        { name: "Webpack", color: "from-blue-400 to-purple-500" },
        { name: "Jest", color: "from-red-400 to-pink-500" },
        { name: "Figma", color: "from-purple-400 to-pink-500" },
        { name: "Vercel", color: "from-black to-gray-700" },
      ],
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js", color: "from-green-500 to-green-600" },
        { name: "Express.js", color: "from-gray-500 to-gray-700" },
        { name: "MongoDB", color: "from-green-600 to-green-700" },
        { name: "PostgreSQL", color: "from-blue-600 to-indigo-700" },
        { name: "Python", color: "from-yellow-500 to-blue-500" },
        { name: "REST APIs", color: "from-indigo-400 to-purple-500" },
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
            Here&apos;s my toolkit for bringing ideas to life
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

              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={`px-4 py-2 bg-gradient-to-r ${skill.color} text-white rounded-full text-sm font-medium cursor-pointer relative overflow-hidden group`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow:
                        "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />

                    {skill.name}

                    {/* Tooltip for additional info (optional) */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded-md whitespace-nowrap"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                      >
                        {/* Add any tooltip content here if needed */}
                        {/* Example: {skill.level}% proficiency */}
                      </motion.div>
                    )}
                  </motion.div>
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

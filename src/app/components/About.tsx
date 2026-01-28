import { motion } from "motion/react";
import { Code, Coffee, Zap } from "lucide-react";
import Image from "next/image";

export function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable and scalable code that follows best practices",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized applications ",
    },
    {
      icon: Coffee,
      title: "Collaboration",
      description:
        "Great team player who loves brainstorming and problem-solving",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-15"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-sm uppercase tracking-wider text-indigo-600 font-semibold mb-4">
            Software Engineer & Creative Developer
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Specialized in transforming design concepts into production-ready
            code using modern AI-assisted workflows
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-15 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="w-96 h-96 bg-gradient-to-br from-purple-200 via-pink-300 to-indigo-300 rounded-3xl mx-auto shadow-xl"
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-2 bg-white rounded-3xl flex items-center justify-center overflow-hidden shadow-inner">
                  <Image
                    src="/profile.png"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    alt="Profile Picture"
                  />
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center text-2xl shadow-lg"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full flex items-center justify-center text-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                💫
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              Hi, I&apos;m Mai :)
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I&apos;m a software engineer who loves turning ideas into
              beautiful, functional web applications.
            </p>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              I specialize in{" "}
              <span className="font-semibold text-indigo-600">Python</span>,
              <span className="font-semibold text-indigo-600">React</span>,
              <span className="font-semibold text-indigo-600">TypeScript</span>,
              and <span className="font-semibold text-indigo-600">Next.js</span>{" "}
              Always striving to create user experiences that are both
              delightful and accessible.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

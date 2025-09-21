import { motion } from "motion/react";
import { Code, Coffee, Zap } from "lucide-react";
import Image from "next/image";

export function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "I write maintainable, scalable code that follows best practices",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized applications with lightning-fast load times",
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
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Frontend engineer specialized in implementation of design into code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-purple-200 via-pink-200 to-indigo-200 rounded-3xl mx-auto"
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-4 bg-white rounded-3xl flex items-center justify-center overflow-hidden">
                  <Image
                    src="/profile.png"
                    width={400}
                    height={400}
                    className="object-cover"
                    alt="Profile Picture"
                  />
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl mb-6 text-gray-800">Hi, I&apos;m Mai :)</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I&apos;m a frontend engineer who loves turning ideas into
              beautiful, functional web applications. When I&apos;m not coding,
              you&apos;ll find me exploring new technologies, contributing to
              open source, or enjoying a good cup of coffee while planning my
              next project.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I specialize in React, TypeScript, and modern web technologies,
              always striving to create user experiences that are both
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

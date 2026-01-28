import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export function Contact() {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/vmaineng",
      label: "GitHub",
      color: "hover:text-gray-800",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/mai-vang-swe/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/MaiVangSWE",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "United States",
      color: "from-blue-400 to-indigo-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6 text-gray-800">Get in Touch</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I&apos;m open to discussing new opportunities, interesting
                projects, or just having a friendly chat about technology and
                development.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.text}
                    className="flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div
                      className={`p-3 bg-gradient-to-r ${info.color} text-white rounded-lg`}
                    >
                      <info.icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-700">{info.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-xl mb-4 text-gray-800">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`p-3 bg-white/60 backdrop-blur-sm rounded-lg text-gray-600 ${social.color} transition-colors shadow-lg`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

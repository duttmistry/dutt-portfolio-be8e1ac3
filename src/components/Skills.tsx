
import { motion } from "framer-motion";

export const Skills = () => {
  const skills = {
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Redux", "Next.js"],
    "Backend": ["Node.js", "Express", "Python", "Django", "RESTful APIs"],
    "Database": ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    "Tools": ["Git", "Docker", "AWS", "CI/CD", "Jest"]
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent mb-12"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-sm text-gray-700 rounded-full border border-gray-200 shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

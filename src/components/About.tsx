
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Layout } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const expertise = [
    {
      icon: Layout,
      title: "Frontend Development",
      description: "Crafting responsive and intuitive user interfaces using React and modern web technologies."
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Developing robust server-side applications and scalable RESTful APIs."
    },
    {
      icon: Code2,
      title: "Full Stack Integration",
      description: "Seamlessly connecting frontend and backend to create comprehensive web solutions."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-blue-50 to-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-800 mb-12">About Dutt</h2>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-600 text-lg leading-relaxed">
              A passionate full stack developer with a keen eye for creating innovative web applications. 
              I specialize in building efficient, scalable solutions that bridge design and functionality.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className="border-none bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="text-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                        viewport={{ once: true }}
                        className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 text-blue-900 mb-6"
                      >
                        <item.icon className="h-8 w-8" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-900 to-purple-800 bg-clip-text text-transparent">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

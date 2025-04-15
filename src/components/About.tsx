
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
    <section id="about" className="py-24 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-12">About Dutt</h2>
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
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="pt-8">
                    <div className="text-center">
                      <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-900 mb-6">
                        <item.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-blue-900">{item.title}</h3>
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

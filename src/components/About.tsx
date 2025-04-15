
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Layout } from "lucide-react";

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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">About Dutt</h2>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-gray-600 text-lg">
            A passionate full stack developer with a keen eye for creating innovative web applications. 
            I specialize in building efficient, scalable solutions that bridge design and functionality.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


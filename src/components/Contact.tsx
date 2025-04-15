
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-blue-900 mb-8">Contact Information</h3>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <span className="text-gray-600 text-lg">dutt.mistry@example.com</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                    <Phone className="h-6 w-6" />
                  </div>
                  <span className="text-gray-600 text-lg">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-all duration-300">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <span className="text-gray-600 text-lg">San Francisco, CA</span>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input placeholder="Your Name" className="text-lg py-6" />
                <Input type="email" placeholder="Your Email" className="text-lg py-6" />
                <Textarea placeholder="Your Message" className="h-40 text-lg" />
                <Button type="submit" className="w-full text-lg py-6 bg-blue-900 hover:bg-blue-800">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

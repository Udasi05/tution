import { motion } from "framer-motion";
import { BookOpenCheck, MapPin, Users, Target } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Personalized Attention",
    desc: "Small batch sizes ensure every student gets the focus they need to thrive."
  },
  {
    icon: Target,
    title: "Clear Concepts",
    desc: "We focus on understanding the 'why' and 'how', not just rote memorization."
  },
  {
    icon: BookOpenCheck,
    title: "Board Exam Prep",
    desc: "Strategic preparation techniques for Senior grade board examinations."
  },
  {
    icon: MapPin,
    title: "Convenient Locations",
    desc: "Easily accessible offline centers in Goregaon & Malad, Mumbai."
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground">
            Led by Bhumi Bhanushali, our coaching center is dedicated to transforming students into confident learners through engaging and effective teaching methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

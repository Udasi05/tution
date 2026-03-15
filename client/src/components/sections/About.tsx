import { motion } from "framer-motion";
import { BookOpenCheck, MapPin, Users, Target, Youtube, Instagram } from "lucide-react";
import teacherImg from "@assets/photo.png";

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
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Split layout: Photo + About Text */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Teacher Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            {/* Decorative background elements */}
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/15 rounded-full blur-2xl" />

            {/* Decorative dots pattern */}
            <div className="absolute top-4 -right-4 w-24 h-24 opacity-20">
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-primary rounded-full" />
                ))}
              </div>
            </div>

            {/* Main photo container */}
            <div className="relative z-10">
              {/* Rotating border ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-3xl border-2 border-dashed border-primary/20"
              />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/15 border-4 border-white">
                <img
                  src={teacherImg}
                  alt="Bhumi Bhanushali - Expert Educator"
                  className="w-full max-w-md h-auto object-cover"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg drop-shadow-lg">Bhumi Bhanushali</p>
                  <p className="text-white/90 text-sm drop-shadow-md">Expert Educator | MSc Zoology | B.Ed</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <span className="text-emerald-500 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">5+ Years</p>
                    <p className="text-xs text-slate-500">Teaching Exp.</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating star badge (top-left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }}
                animate={{ y: [0, -6, 0] }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <span className="text-amber-500 text-lg">⭐</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">200+</p>
                    <p className="text-xs text-slate-500">Students</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Meet Your Teacher
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                About <span className="text-primary">Bhumi Ma'am</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bhumi Bhanushali is a highly qualified educator with an MSc in Zoology and a B.Ed degree, bringing a strong academic background to every classroom. With 5 years of teaching experience, she has helped numerous students achieve their full potential through personalized coaching and innovative teaching methods.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-full text-sm font-semibold text-primary">MSc Zoology</span>
              <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20 rounded-full text-sm font-semibold text-emerald-600">B.Ed Qualified</span>
              <span className="px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-full text-sm font-semibold text-amber-600">5 Years Experience</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://youtube.com/@curiosciii"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:border-red-500 transition-all duration-300"
              >
                <Youtube className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />
                <span className="text-sm font-semibold text-red-500 group-hover:text-white transition-colors">YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/bio.withbhumi"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-pink-500/10 border border-pink-500/20 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-pink-500 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-pink-500 group-hover:text-white transition-colors" />
                <span className="text-sm font-semibold text-pink-500 group-hover:text-white transition-colors">Instagram</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
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

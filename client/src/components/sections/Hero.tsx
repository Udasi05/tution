import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, GraduationCap, Award, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const taglines = [
  "Build a Strong Academic Foundation",
  "Master Complex Science Concepts",
  "Solve Math Problems with Ease",
  "Prepare for Board Exams Confidently",
  "Unlock Your True Potential Today"
];

const statsCards = [
  { icon: Users, label: "Students Taught", value: "200+", color: "text-blue-500", bg: "bg-blue-500/10" },
  { icon: Award, label: "Board Results", value: "100%", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { icon: GraduationCap, label: "Class Modes", value: "Online & Offline", color: "text-amber-500", bg: "bg-amber-500/10" },
];

export function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000); // Change tagline every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-10">

          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Admissions Open for 2025-26</span>
          </motion.div>

          {/* Animated Heading (PureTrading style) */}
          <div className="space-y-4 w-full h-[180px] sm:h-[160px] md:h-[180px] lg:h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTagline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-[1.1] text-primary max-w-4xl"
              >
                {taglines[currentTagline]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl text-balance"
          >
            Expert tutoring by <span className="text-foreground font-medium">Bhumi Bhanushali</span> for grades 5 to 12.
            Personalized attention, clear concepts, and focused board exam preparation.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4 w-full"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full text-lg px-10 h-16 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all"
              onClick={() => window.open("https://wa.me/919022204761?text=Hello%20Bhumi%20Ma'am,%20I%20would%20like%20to%20enroll.", "_blank")}
            >
              Enroll on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full text-lg px-10 h-16 border-2 hover:bg-slate-50 transition-all group"
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Programs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Stats row - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 pt-10"
          >
            {statsCards.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-sm"
              >
                <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center shrink-0`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-left">
                  <p className={`font-bold text-lg leading-none ${stat.color}`}>{stat.value}</p>
                  <p className="text-sm font-medium text-muted-foreground mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

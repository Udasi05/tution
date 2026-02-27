import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import pamphletImg from "@assets/image_1772210763001.png";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <GraduationCap className="w-4 h-4" />
              <span>Admissions Open for 2024-25</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-[1.1] mb-6">
              Build a <span className="text-primary">Strong Academic</span> Foundation.
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 text-balance">
              Expert tutoring by Bhumi Bhanushali for grades 5 to 12. Personalized attention, clear concepts, and focused board exam preparation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto rounded-full text-base px-8 h-14 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all"
                onClick={() => window.open("https://wa.me/919022204761?text=Hello%20Bhumi%20Ma'am,%20I%20would%20like%20to%20enroll.", "_blank")}
              >
                Enroll on WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto rounded-full text-base px-8 h-14 border-2 hover:bg-slate-50 transition-all group"
                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Programs
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto lg:ml-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border-4 border-white">
              {/* Fallback image incase the specific asset doesn't load instantly, though Vite handles this */}
              <img 
                src={pamphletImg} 
                alt="Coaching by Bhumi Bhanushali Pamphlet" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating decoration badge */}
            <div className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl animate-bounce-slow">
              <div className="font-bold text-2xl text-primary">100%</div>
              <div className="text-sm font-medium text-slate-600">Results Focus</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

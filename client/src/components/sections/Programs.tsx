import { motion } from "framer-motion";
<<<<<<< HEAD
import { Calculator, Dna, PencilRuler, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
=======
import { Calculator, Dna, PencilRuler } from "lucide-react";
>>>>>>> 2d9b74cd38be16a3d07df8233c2a4e8979d98185

const programs = [
  {
    id: "junior",
    icon: PencilRuler,
    title: "Junior Program",
    grades: "Grades 5 to 8",
    color: "from-blue-400 to-primary",
    subjects: "All Subjects",
<<<<<<< HEAD
    features: ["Strong Basics Foundation", "Fun & Engaging Learning", "Clear Concepts"],
    popular: false,
    extras: ["Personalized Mentorship", "Weekly Assessments", "Online & Offline Options"]
=======
    features: ["Strong Basics Foundation", "Fun & Engaging Learning", "Clear Concepts"]
>>>>>>> 2d9b74cd38be16a3d07df8233c2a4e8979d98185
  },
  {
    id: "senior",
    icon: Calculator,
    title: "Senior Program",
    grades: "Grades 9 to 12",
    color: "from-amber-400 to-orange-500",
    subjects: "Science & Maths",
<<<<<<< HEAD
    features: ["Advanced Problem Solving", "Board Exam Preparation", "Regular Assessments"],
    popular: true,
    extras: ["Personalized Mentorship", "Weekly Assessments", "Online & Offline Options"]
=======
    features: ["Advanced Problem Solving", "Board Exam Preparation", "Regular Assessments"]
>>>>>>> 2d9b74cd38be16a3d07df8233c2a4e8979d98185
  },
  {
    id: "biology",
    icon: Dna,
    title: "Biology Experts",
    grades: "Specialized",
    color: "from-emerald-400 to-green-600",
    subjects: "Biology (Botany & Anatomy)",
<<<<<<< HEAD
    features: ["Detailed Human Anatomy", "Comprehensive Botany", "Diagram & Practical Focus"],
    popular: false,
    extras: ["Personalized Mentorship", "Weekly Assessments", "Online & Offline Options"]
=======
    features: ["Detailed Human Anatomy", "Comprehensive Botany", "Diagram & Practical Focus"]
>>>>>>> 2d9b74cd38be16a3d07df8233c2a4e8979d98185
  }
];

export function Programs() {
<<<<<<< HEAD
  const handleContactClick = (plan: string) => {
    const text = `Hello Bhumi Ma'am, I want to know the pricing for the ${plan} program.`;
    window.open(`https://wa.me/919022204761?text=${encodeURIComponent(text)}`, '_blank');
  };

=======
>>>>>>> 2d9b74cd38be16a3d07df8233c2a4e8979d98185
  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
<<<<<<< HEAD
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Academic Programs</h2>
          <p className="text-lg text-muted-foreground">
            Affordable excellence. Tailored curriculum designed for every stage of learning. Both Online & Offline modes available.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto pt-6">
          {programs.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${
                prog.popular 
                  ? 'border-primary shadow-2xl shadow-primary/20 md:-translate-y-4' 
                  : 'border-slate-200 shadow-xl shadow-black/5'
              }`}
            >
              {/* Decorative gradient blur */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${prog.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />

              {prog.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent to-yellow-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Most Popular
                </div>
              )}
=======
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Academic Programs</h2>
          <p className="text-lg text-muted-foreground">Tailored curriculum designed for every stage of learning.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-black/5 border border-slate-100 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Decorative gradient blur */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${prog.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
>>>>>>> 2d9b74cd38be16a3d07df8233c2a4e8979d98185
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prog.color} text-white flex items-center justify-center mb-6 shadow-md`}>
                <prog.icon className="w-8 h-8" />
              </div>
              
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-semibold rounded-full mb-3">
                {prog.grades}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{prog.title}</h3>
<<<<<<< HEAD
              <p className="text-primary font-medium mb-4">{prog.subjects}</p>
              
              <ul className="space-y-3 mb-4">
                {prog.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${prog.color} shrink-0`} />
=======
              <p className="text-primary font-medium mb-6">{prog.subjects}</p>
              
              <ul className="space-y-3">
                {prog.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${prog.color}`} />
>>>>>>> 2d9b74cd38be16a3d07df8233c2a4e8979d98185
                    {feature}
                  </li>
                ))}
              </ul>
<<<<<<< HEAD

              <ul className="space-y-3 mb-8">
                {prog.extras.map((extra, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-sm text-slate-600">{extra}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => handleContactClick(prog.title)}
                className={`w-full rounded-xl py-6 text-base font-semibold ${
                  prog.popular 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                Enquire Now
              </Button>
=======
>>>>>>> 2d9b74cd38be16a3d07df8233c2a4e8979d98185
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

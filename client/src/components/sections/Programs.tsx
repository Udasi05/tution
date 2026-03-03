import { motion } from "framer-motion";
import { Calculator, Dna, PencilRuler } from "lucide-react";

const programs = [
  {
    id: "junior",
    icon: PencilRuler,
    title: "Junior Program",
    grades: "Grades 5 to 8",
    color: "from-blue-400 to-primary",
    subjects: "All Subjects",
    features: ["Strong Basics Foundation", "Fun & Engaging Learning", "Clear Concepts"]
  },
  {
    id: "senior",
    icon: Calculator,
    title: "Senior Program",
    grades: "Grades 9 to 12",
    color: "from-amber-400 to-orange-500",
    subjects: "Science & Maths",
    features: ["Advanced Problem Solving", "Board Exam Preparation", "Regular Assessments"]
  },
  {
    id: "biology",
    icon: Dna,
    title: "Biology Experts",
    grades: "Specialized",
    color: "from-emerald-400 to-green-600",
    subjects: "Biology (Botany & Anatomy)",
    features: ["Detailed Human Anatomy", "Comprehensive Botany", "Diagram & Practical Focus"]
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${prog.color} text-white flex items-center justify-center mb-6 shadow-md`}>
                <prog.icon className="w-8 h-8" />
              </div>
              
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-sm font-semibold rounded-full mb-3">
                {prog.grades}
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{prog.title}</h3>
              <p className="text-primary font-medium mb-6">{prog.subjects}</p>
              
              <ul className="space-y-3">
                {prog.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${prog.color}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

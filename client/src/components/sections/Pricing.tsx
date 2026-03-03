import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Junior Grades (5-8)",
    price: "Contact",
    desc: "Comprehensive coverage for all subjects.",
    popular: false
  },
  {
    name: "Senior Grades (9-12)",
    price: "Contact",
    desc: "Intensive Science and Maths preparation.",
    popular: true
  },
  {
    name: "Biology Special",
    price: "Contact",
    desc: "Expert guidance in Botany and Anatomy.",
    popular: false
  }
];

export function Pricing() {
  const handleContactClick = (plan: string) => {
    const text = `Hello Bhumi Ma'am, I want to know the pricing for the ${plan} program.`;
    window.open(`https://wa.me/919022204761?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-lg text-muted-foreground">
            Affordable excellence. Get in touch with us to find the right plan for your child's needs. Both Online & Offline modes available.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white rounded-3xl p-8 border ${
                tier.popular 
                  ? 'border-primary shadow-2xl shadow-primary/20 md:-translate-y-4' 
                  : 'border-slate-200 shadow-xl shadow-black/5'
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent to-yellow-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold text-center mb-2">{tier.name}</h3>
              <p className="text-slate-500 text-center text-sm mb-6">{tier.desc}</p>
              
              <div className="text-center mb-8">
                <span className="text-4xl font-black">{tier.price}</span>
                <span className="text-muted-foreground block text-sm mt-1">for Pricing</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm text-slate-600">Personalized Mentorship</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm text-slate-600">Weekly Assessments</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm text-slate-600">Online & Offline Options</span>
                </li>
              </ul>
              
              <Button 
                onClick={() => handleContactClick(tier.name)}
                className={`w-full rounded-xl py-6 text-base font-semibold ${
                  tier.popular 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                }`}
              >
                Enquire Now
              </Button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

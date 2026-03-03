import { MapPin, Phone } from "lucide-react";
import logoImg from "@assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center p-1">
                <img src={logoImg} alt="Vidyasetu Tution Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Vidyasetu<span className="text-accent">Tution</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-xs text-balance">
              Building a strong academic foundation for students across grades 5 to 12 with personalized attention and expert guidance.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-accent transition-colors">Programs</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-lg text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Goregaon & Malad<br />Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+919022204761" className="hover:text-white transition-colors">+91 90222 04761</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Vidyasetu Tution by Bhumi Bhanushali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

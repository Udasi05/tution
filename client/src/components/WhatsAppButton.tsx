import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/919022204761?text=Hello%20Bhumi%20Ma'am,%20I%20have%20an%20enquiry.", "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Pulse animation ring */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-20 -z-10" />
    </motion.button>
  );
}

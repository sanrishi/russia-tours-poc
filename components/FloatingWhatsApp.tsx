"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "917042987451";
const MESSAGE = "Hi Sveta! I'm interested in your Russia tours. Can you share more details?";

export default function FloatingWhatsApp() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      drag
      dragMomentum={false}
      dragElastic={0}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      className="fixed bottom-6 right-6 z-50 touch-none flex items-center gap-2 bg-whatsapp text-white px-5 py-3.5 rounded-full shadow-xl shadow-whatsapp/20 group"
    >
      <MessageCircle size={22} className="fill-white" />
      <span className="text-sm font-semibold hidden sm:inline group-hover:block">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}

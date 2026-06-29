"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useRef } from "react";

const WHATSAPP_NUMBER = "917042987451";
const MESSAGE = "Hi Sveta! I'm interested in your Russia tours. Can you share more details?";

export default function FloatingWhatsApp() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;
  const x = useMotionValue(0);
  const ref = useRef<HTMLAnchorElement>(null);

  const handleDragEnd = () => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const screenMid = window.innerWidth / 2;

    if (center < screenMid) {
      animate(x, 24 - rect.left, { type: "spring", stiffness: 300, damping: 30 });
    } else {
      animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      drag
      dragMomentum={false}
      style={{ x }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
      className="fixed bottom-6 right-6 z-50 touch-none flex items-center gap-2 bg-whatsapp text-white px-5 py-3.5 rounded-full shadow-xl shadow-whatsapp/20"
    >
      <MessageCircle size={22} className="fill-white" />
      <span className="text-sm font-semibold hidden sm:inline">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}

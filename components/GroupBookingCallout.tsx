"use client";

import { Phone, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "917042987451";

export default function GroupBookingCallout() {
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm planning a trip for 4+ people. Can you share group pricing and availability?")}`;

  return (
    <div className="rounded-2xl border border-whatsapp/20 bg-whatsapp/[0.02] p-6 sm:p-8 text-center">
      <div className="w-14 h-14 rounded-full bg-whatsapp/10 flex items-center justify-center mx-auto mb-4">
        <Phone size={22} className="text-whatsapp" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">
        Planning for 4+ People?
      </h3>
      <p className="text-white/50 text-sm max-w-md mx-auto mb-6">
        Get an exclusive group quote with special pricing, customized itinerary,
        and dedicated WhatsApp support.
      </p>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-2 overflow-hidden bg-whatsapp text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-shadow hover:shadow-lg hover:shadow-whatsapp/20"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffd700] via-[#ff1493] to-[#8b5cf6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Phone size={16} className="relative z-10" />
        <span className="relative z-10">Get WhatsApp Quote</span>
        <ArrowRight size={16} className="relative z-10" />
      </a>
    </div>
  );
}

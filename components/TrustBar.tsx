"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Globe, Users } from "lucide-react";

const trustItems = [
  {
    icon: Globe,
    label: "Indian-Owned & Operated",
    desc: "By Indians who know Russia",
  },
  // PLACEHOLDER — years in business: confirm actual start date with client, do not deploy as-is
  {
    icon: Clock,
    label: "10+ Years Experience",
    desc: "Thousands of happy Indian travelers",
  },
  {
    icon: Shield,
    label: "Visa Assistance Included",
    desc: "Hassle-free travel documentation",
  },
  {
    icon: Users,
    label: "Family-Friendly Tours",
    desc: "Curated for all age groups",
  },
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-white/5 bg-charcoal/50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex overflow-x-auto no-scrollbar gap-8 md:gap-0 md:grid md:grid-cols-4">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 min-w-[220px] md:min-w-0 md:justify-center"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.label}
                  </p>
                  <p className="text-xs text-white/40">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

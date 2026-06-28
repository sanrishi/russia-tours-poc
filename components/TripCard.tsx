"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, IndianRupee, Clock, Utensils, Bus, Shield } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import GroupBookingCallout from "./GroupBookingCallout";

/* PLACEHOLDER — trip data: replace with real itineraries, pricing, and images from client */
interface Day {
  day: number;
  title: string;
  meals: string;
  transport: string;
  description: string;
}

interface Trip {
  title: string;
  tagline: string;
  image: string;
  pricePerPerson: number;
  duration: string;
  groupSize: string;
  description: string;
  itinerary: Day[];
  visaInfo: string;
}

const trips: Trip[] = [
  {
    title: "Moscow & St. Petersburg Express",
    tagline: "7 Days — The Imperial Circuit",
    image: "/moscow-hero.jpg",
    pricePerPerson: 85000,
    duration: "7 days / 6 nights",
    groupSize: "4–8 people",
    description:
      "Experience Russia's two greatest cities. Walk Red Square, tour the Kremlin, cruise the Neva, and marvel at the Hermitage — with Indian cuisine and Hindi-speaking guides throughout.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Moscow",
        meals: "Dinner",
        transport: "Airport transfer by private car",
        description:
          "Arrive at SVO/DME airport. Meet your Hindi-speaking guide and transfer to hotel. Welcome dinner at an Indian restaurant.",
      },
      {
        day: 2,
        title: "Red Square & Kremlin",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Private minibus",
        description:
          "Full-day tour: Red Square, St. Basil's Cathedral, Kremlin grounds, Armoury Chamber. Lunch at a halal-friendly restaurant. Evening Moscow Metro tour.",
      },
      {
        day: 3,
        title: "Moscow Cultural Day",
        meals: "Breakfast, Lunch",
        transport: "Private minibus",
        description:
          "Tretyakov Gallery or Moscow City tour. Lunch at an Indian restaurant. Free evening for shopping at GUM or Arbat Street.",
      },
      {
        day: 4,
        title: "High-Speed Train to St. Petersburg",
        meals: "Breakfast, Dinner",
        transport: "Sapsan high-speed train (4 hrs)",
        description:
          "Morning Sapsan train to St. Petersburg. Check in, afternoon canal cruise. Dinner at an Indian restaurant.",
      },
      {
        day: 5,
        title: "Hermitage & Palace Square",
        meals: "Breakfast, Lunch, Dinner",
        transport: "Private minibus + walking",
        description:
          "Full-day Hermitage Museum tour. Lunch near Palace Square. Evening visit to Church of the Savior on Spilled Blood.",
      },
      {
        day: 6,
        title: "Peterhof & Free Evening",
        meals: "Breakfast, Lunch",
        transport: "Hydrofoil + private car",
        description:
          "Morning hydrofoil to Peterhof Palace & gardens. Lunch at a local restaurant. Evening at leisure — Nevsky Prospect shopping.",
      },
      {
        day: 7,
        title: "Departure",
        meals: "Breakfast",
        transport: "Airport transfer by private car",
        description:
          "Breakfast at hotel. Transfer to LED airport for departure flight.",
      },
    ],
    visaInfo:
      "Indian passport holders need a tourist visa. We assist with the invitation letter (visa support) included in the package. E-visa is not yet available for this route — standard visa processing takes 7–10 business days.",
  },
];

export default function TripCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      {trips.map((trip, i) => {
        const total = trip.pricePerPerson * 8;
        return (
          <motion.div
            key={trip.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-gold/20 transition-all duration-500"
          >
            <div className="relative h-56 sm:h-72">
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gold text-xs font-medium tracking-[0.15em] uppercase mb-1">
                  {trip.tagline}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {trip.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-white/50">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> {trip.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <IndianRupee size={14} /> {trip.pricePerPerson.toLocaleString("en-IN")}/person
                </span>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {trip.description}
              </p>

              {/* Visa Info */}
              <div className="flex items-start gap-3 mb-6 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <Shield size={18} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-semibold mb-0.5">
                    Visa Information
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {trip.visaInfo}
                  </p>
                </div>
              </div>

              {/* Accordion Itinerary */}
              <div className="border-t border-white/5 pt-4">
                <p className="text-xs text-white/30 uppercase tracking-wider mb-3 font-medium">
                  Day-by-Day Itinerary
                </p>
                <div className="space-y-2">
                  {trip.itinerary.map((day) => (
                    <div key={day.day} className="rounded-xl border border-white/5 overflow-hidden">
                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === day.day ? null : day.day)
                        }
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition-colors"
                      >
                        <div>
                          <p className="text-white text-sm font-semibold">
                            Day {day.day} — {day.title}
                          </p>
                          <div className="flex flex-wrap gap-3 mt-1">
                            <span className="flex items-center gap-1 text-xs text-white/40">
                              <Utensils size={11} /> {day.meals}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-white/40">
                              <Bus size={11} /> {day.transport}
                            </span>
                          </div>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`text-white/30 shrink-0 transition-transform duration-300 ${
                            openIndex === day.day ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openIndex === day.day && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="px-4 pb-4 text-sm text-white/50 leading-relaxed">
                              {day.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

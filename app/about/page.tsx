import { Mail, Phone, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="max-w-3xl mb-14">
          <span className="text-gold text-sm font-medium tracking-[0.15em] uppercase mb-3 block">
            About Me
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Your Guide to Russia
          </h1>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed">
            Helping Indian travelers experience Russia with comfort, confidence,
            and a taste of home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* PLACEHOLDER — photo: replace with actual client photo */}
          <div className="aspect-[4/5] rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center">
            <p className="text-white/20 text-sm">Your photo here</p>
          </div>

          <div className="space-y-8">
            {/* PLACEHOLDER — bio: replace with client's actual background */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3">
                {/* PLACEHOLDER — add client name here */}
                About Indosvetka
              </h2>
              <div className="space-y-4 text-white/50 text-sm leading-relaxed">
                <p>
                  {/* PLACEHOLDER — write client's story: how they moved to Russia,
                  what inspired them to start guiding Indian travelers, their
                  qualifications, languages spoken, etc. */}
                  This section will tell your story — how you came to Russia,
                  your experience with Indian travelers, and why you are the
                  right person to guide them through this incredible country.
                </p>
                <p>
                  Share your background, your language skills (Hindi, English,
                  Russian), any certifications, and what makes your tours unique.
                </p>
              </div>
            </div>

            {/* PLACEHOLDER — contact info: replace with client's actual contact details */}
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 space-y-4">
              <h3 className="text-white font-semibold text-sm">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Mail size={14} className="text-gold shrink-0" />
                  <span>your.email@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <Phone size={14} className="text-gold shrink-0" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <MapPin size={14} className="text-gold shrink-0" />
                  <span>Moscow / India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

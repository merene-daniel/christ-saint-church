import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "ዝግጅቶች | Christ Saints' Church",
};

const categoryColors: Record<string, string> = {
  worship: "bg-church-blue text-white",
  prayer: "bg-emerald-700 text-white",
  study: "bg-deep-blue text-white",
  outreach: "bg-amber-700 text-white",
  youth: "bg-purple-700 text-white",
  other: "bg-gray-600 text-white",
};

const categoryLabels: Record<string, string> = {
  worship: "አምልኮ",
  prayer: "ጸሎት",
  study: "ቃሉ ጥናት",
  outreach: "ወንጌል",
  youth: "ወጣቶች",
  other: "ሌሎች",
};

const sampleEvents = [
  {
    _id: "1",
    titleAm: "የዓቢይ ጸሎት ምሽት",
    title: "Grand Prayer Night",
    date: new Date(Date.now() + 7 * 86400000),
    time: "ምሽት 6:00",
    location: "ዋናው አዳራሽ",
    descriptionAm: "ለቤተሰብ፣ ለሀገር፣ ለቤተክርስቲያን ሁሉ አብሮ ጸሎት የምናቀርብበት ምሽት። ሁሉም ሰው እንዲቀጥቀጥ ይጋበዛሉ።",
    category: "prayer",
  },
  {
    _id: "2",
    titleAm: "ቤተሰብ ቀን",
    title: "Family Day",
    date: new Date(Date.now() + 14 * 86400000),
    time: "ቀን 10:00",
    location: "ቤተክርስቲያን ቅጥር",
    descriptionAm: "ቤተሰቦቻችን አብሮ ምግብ፣ ጨዋታ እና ምስጋና ያሳልፉ ዘንድ የተዘጋጀ ቀን።",
    category: "other",
  },
  {
    _id: "3",
    titleAm: "ወጣቶች ስብሰባ",
    title: "Youth Conference",
    date: new Date(Date.now() + 21 * 86400000),
    time: "ከሰዓት 2:00",
    location: "የወጣቶች አዳራሽ",
    descriptionAm: "ወጣቶቹ ቃሉን ሲማሩ፣ ሲዘፍኑ፣ ሲጸልዩ — ትውልዱ ለጌታ ቀርቧል።",
    category: "youth",
  },
];

async function getEvents() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/events`, {
      cache: "no-store",
    });
    if (!res.ok) return sampleEvents;
    const data = await res.json();
    return data.events?.length > 0 ? data.events : sampleEvents;
  } catch {
    return sampleEvents;
  }
}

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <>
      <section className="relative py-40 px-6 bg-hero-gradient text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,27,62,0.5)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10">
          <p className="font-accent text-gold/75 uppercase tracking-[5px] text-sm mb-4">Events</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-black">
            ቀጣይ <span className="text-shimmer">ዝግጅቶች</span>
          </h1>
          <p className="font-body text-white/50 text-base mt-3">አብሮ እናቅዳለን፣ አብሮ ደስ ይለናል</p>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeader label="Calendar" title="የሚመጡ ዝግጅቶች" />
          <div className="space-y-5">
            {events.map((event: {
              _id: string;
              titleAm: string;
              title: string;
              date: Date | string;
              time: string;
              location: string;
              descriptionAm: string;
              category: string;
            }) => {
              const d = new Date(event.date);
              return (
                <div key={event._id}
                  className="bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row overflow-hidden border-l-4 border-church-blue">
                  {/* Date block */}
                  <div className="bg-church-dark text-white flex flex-col items-center justify-center px-8 py-6 min-w-[100px]">
                    <span className="font-display text-4xl font-black text-gold">{d.getDate()}</span>
                    <span className="font-accent italic text-white/60 text-sm">
                      {d.toLocaleDateString("am-ET", { month: "short" })}
                    </span>
                    <span className="font-body text-white/40 text-xs">{d.getFullYear()}</span>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-display text-xl text-church-dark font-bold">{event.titleAm}</h3>
                      <span className={`text-xs px-3 py-1 font-body flex-shrink-0 ${categoryColors[event.category] || categoryColors.other}`}>
                        {categoryLabels[event.category] || "ሌሎች"}
                      </span>
                    </div>
                    <p className="font-body text-[#6a5a50] text-sm leading-relaxed mb-4">{event.descriptionAm}</p>
                    <div className="flex flex-wrap gap-6 text-xs font-body text-[#9a8a80]">
                      <span>⏰ {event.time}</span>
                      <span>📍 {event.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

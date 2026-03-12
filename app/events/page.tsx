import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Events | Christ Saints' Church",
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
  worship: "Worship",
  prayer: "Prayer",
  study: "Bible Study",
  outreach: "Outreach",
  youth: "Youth",
  other: "Other",
};

const sampleEvents = [
  {
    _id: "1",
    titleAm: "Grand Prayer Night",
    title: "Grand Prayer Night",
    date: new Date(Date.now() + 7 * 86400000),
    time: "6:00 PM",
    location: "Main Hall",
    descriptionAm: "An evening of united prayer for our families, our nation, and our church. Everyone is warmly invited to join.",
    description: "An evening of united prayer for our families, our nation, and our church. Everyone is warmly invited to join.",
    category: "prayer",
  },
  {
    _id: "2",
    titleAm: "Family Day",
    title: "Family Day",
    date: new Date(Date.now() + 14 * 86400000),
    time: "10:00 AM",
    location: "Church Grounds",
    descriptionAm: "A day set aside for our families to share a meal, enjoy games, and give thanks together.",
    description: "A day set aside for our families to share a meal, enjoy games, and give thanks together.",
    category: "other",
  },
  {
    _id: "3",
    titleAm: "Youth Conference",
    title: "Youth Conference",
    date: new Date(Date.now() + 21 * 86400000),
    time: "2:00 PM",
    location: "Youth Hall",
    descriptionAm: "Young people gather to study the Word, worship, and pray — a generation drawing close to the Lord.",
    description: "Young people gather to study the Word, worship, and pray — a generation drawing close to the Lord.",
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
            Upcoming <span className="text-shimmer">Events</span>
          </h1>
          <p className="font-body text-white/50 text-base mt-3">Plan together, grow together</p>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <SectionHeader label="Calendar" title="Coming Up" />
          <div className="space-y-5">
            {events.map((event: {
              _id: string;
              titleAm: string;
              title: string;
              date: Date | string;
              time: string;
              location: string;
              descriptionAm: string;
              description: string;
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
                      {d.toLocaleDateString("en-US", { month: "short" })}
                    </span>
                    <span className="font-body text-white/40 text-xs">{d.getFullYear()}</span>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-display text-xl text-church-dark font-bold">{event.title}</h3>
                      <span className={`text-xs px-3 py-1 font-body flex-shrink-0 ${categoryColors[event.category] || categoryColors.other}`}>
                        {categoryLabels[event.category] || "Other"}
                      </span>
                    </div>
                    <p className="font-body text-[#6a5a50] text-sm leading-relaxed mb-4">{event.description || event.descriptionAm}</p>
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

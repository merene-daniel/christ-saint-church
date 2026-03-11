import SectionHeader from "@/components/SectionHeader";
import { connectToDatabase } from "@/lib/mongodb";
import { Sermon } from "@/lib/models";

export const revalidate = 3600; // revalidate at most every hour

export const metadata = {
  title: "ስብከቶች | Christ Saints' Church",
};

// Sample sermons data (falls back to this if DB is empty or unavailable)
const sampleSermons = [
  {
    _id: "1",
    titleAm: "ክርስቶስ ብቸኛ መንገድ ነው",
    title: "Christ Is the Only Way",
    preacher: "ፓስተር ቤዛ ሜርኔ",
    date: new Date("2024-10-20"),
    scripture: "ዮሐ 14:6",
    descriptionAm: "ኢየሱስ ክርስቶስ ብቸኛ መንገድ፣ ሕይወት እና ዕውነት ናቸው። ሌሎች ሁሉ ሞትን ይመራሉ።",
    youtubeUrl: "https://www.youtube.com/watch?v=tNpK5rXqzv8",
  },
  {
    _id: "2",
    titleAm: "ፍቅር ሕጉ ሙሉ ነው",
    title: "Love Fulfills the Law",
    preacher: "ፓስተር ቤዛ ሜርኔ",
    date: new Date("2024-10-13"),
    scripture: "ሮሜ 13:10",
    descriptionAm: "ፍቅር የሕጉ ሙሉ ፍጻሜ ነው — ለጎረቤታቸን ፍቅር ስናሳይ ሕጉን ሁሉ ፈጽምናል።",
    youtubeUrl: "https://www.youtube.com/watch?v=tNpK5rXqzv8",
  },
  {
    _id: "3",
    titleAm: "ጸሎት ልዩ ኃይል አለው",
    title: "Prayer Has Extraordinary Power",
    preacher: "ፓስተር ቤዛ ሜርኔ",
    date: new Date("2024-10-6"),
    scripture: "ያዕቆብ 5:16",
    descriptionAm: "ጻድቃን ጸሎት ብዙ ኃይል አለው — ሕሙም ይፈወሳል፣ ታሰረ ይፈታል፣ ዘሩ ይባርካል።",
    youtubeUrl: "",
  },
];

async function getSermons() {
  try {
    const conn = await connectToDatabase();
    if (!conn) return sampleSermons;
    const sermons = await Sermon.find().sort({ date: -1 }).limit(20).lean();
    if (!sermons.length) return sampleSermons;
    return sermons.map((s: any) => ({
      ...s,
      _id: s._id?.toString(),
      date: s.date ? new Date(s.date).toISOString() : null,
    }));
  } catch {
    return sampleSermons;
  }
}

export default async function SermonsPage() {
  const sermons = await getSermons();

  return (
    <>
      <section className="relative py-40 px-6 bg-hero-gradient text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,26,26,0.3)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10">
          <p className="font-accent text-gold/75 uppercase tracking-[5px] text-sm mb-4">Sermons</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-black">
            <span className="text-shimmer">ስብከቶች</span>
          </h1>
          <p className="font-body text-white/50 text-base mt-3">ቃሉን ሰምቶ ሕይወት ይቀይሩ</p>
        </div>
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            label="ቅዱስ ቃሉ"
            title="የቅርብ ስብከቶች"
            subtitle="ፓስተር ቤዛ ሜርኔ ያቀረቧቸው ስብከቶች"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermons.map((sermon: {
              _id: string;
              titleAm: string;
              title: string;
              preacher: string;
              date: Date | string;
              scripture: string;
              descriptionAm: string;
              youtubeUrl?: string;
            }) => (
              <div key={sermon._id}
                className="bg-white border-b-4 border-church-blue shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                {/* Sermon card header */}
                <div className="p-6 bg-gradient-to-br from-church-dark to-deep-blue relative overflow-hidden">
                  <div className="absolute top-2 right-4 text-6xl font-serif text-white/5 select-none">✝</div>
                  <span className="font-accent text-gold text-xs tracking-widest uppercase block mb-2">
                    {sermon.scripture}
                  </span>
                  <h3 className="font-display text-white text-lg font-bold leading-tight">
                    {sermon.titleAm}
                  </h3>
                  <p className="font-body text-white/40 text-xs mt-1">{sermon.title}</p>
                </div>
                {/* Body */}
                <div className="p-6">
                  <p className="font-body text-[#6a5a50] text-sm leading-relaxed mb-4">
                    {sermon.descriptionAm}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span className="font-body text-church-dark text-xs font-semibold block">{sermon.preacher}</span>
                      <span className="font-accent text-[#9a8a80] text-xs italic">
                        {new Date(sermon.date).toLocaleDateString("am-ET", {
                          year: "numeric", month: "long", day: "numeric"
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                {/* YouTube embed */}
                {sermon.youtubeUrl && (() => {
                  const videoId = new URL(sermon.youtubeUrl).searchParams.get("v");
                  return videoId ? (
                    <div className="w-full aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={sermon.titleAm}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  ) : null;
                })()}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

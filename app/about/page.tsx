import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "ስለ እኛ | Christ Saints' Church",
};

const ministries = [
  { icon: "🕊️", name: "አምልኮ", desc: "ለእግዚአብሔር ምስጋናና ጸሎት አቀርቦ ቤተሰቡን ሁሉ ለፍቅሩ ቅርብ ያደርጋል።" },
  { icon: "📖", name: "ቃሉ", desc: "ቅዱስ መጽሐፍን ጥልቅ ወደሆነ ጥናት ምርምር ይመራናል።" },
  { icon: "👶", name: "ሕፃናት", desc: "ሕፃናት ኢየሱስን ቀደም ብለው ያውቁ ዘንድ ዕድሜ ለዕድሜ ትምህርት ይሰጣቸዋል።" },
  { icon: "🌍", name: "ወንጌል", desc: "ወንጌልን ወደ አካባቢው ማኅበረሰብ ማዳረስ ዋና ተልዕኮዎቻችን ናቸው።" },
  { icon: "💑", name: "ቤተሰብ", desc: "ቤተሰቦች አብሮ ወደ ክርስቶስ ሲያድጉ ቤተክርስቲያናችን ትደሰታለች።" },
  { icon: "🎵", name: "ምስጋና", desc: "ምስጋናው ቡድን ያጅብናል — ቅዱስ ዜማ ሕዝቡን ወደ ፊቱ ያቀርባል።" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-40 px-6 bg-hero-gradient text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,26,26,0.3)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="font-accent text-gold/75 uppercase tracking-[5px] text-sm mb-4">About Us</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-black mb-6">
            ስለ <span className="text-shimmer">ቤተክርስቲያናችን</span>
          </h1>
          <p className="font-body text-white/60 text-base leading-relaxed">
            ክርስቶስ ቅዱሳን ቤተክርስቲያን — ፍቅር፣ ተስፋ፣ እና ሕይወት የሚሰፍንበት ቅዱስ ቤት
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Mission */}
          <div className="mb-16">
            <span className="font-accent text-church-blue uppercase tracking-[4px] text-xs block mb-3">Mission</span>
            <h2 className="font-display text-4xl text-church-dark font-bold mb-4">ተልዕኳችን</h2>
            <div className="w-12 h-0.5 bg-church-blue mb-6" />
            <p className="font-body text-[#5a4a40] leading-relaxed mb-3 text-base">
              We exist to glorify God by leading every person to believe in Jesus Christ and by discipling them.
            </p>
            <p className="font-body text-[#5a4a40] leading-relaxed text-sm italic border-l-4 border-gold pl-4">
              በሁሉም ሥፍራ በሁሉም አጋጣሚ የክርስቶስን ኢየሱስ የማዳኑን ወንጌል ለሠዎች ሁሉ በማድረስ እግዚአብሔርን ማክበር
            </p>
          </div>

          {/* Vision */}
          <div>
            <span className="font-accent text-church-blue uppercase tracking-[4px] text-xs block mb-3">Vision</span>
            <h2 className="font-display text-4xl text-church-dark font-bold mb-4">ራዕያችን</h2>
            <div className="w-12 h-0.5 bg-church-blue mb-6" />
            <p className="font-body text-[#5a4a40] leading-relaxed mb-3 text-base">
              We are committed to helping every person to believe in Jesus and equipping them to become a disciple of Christ — we encourage multitudes through the Gospel of Jesus Christ for eternal salvation.
            </p>
            <p className="font-body text-[#5a4a40] leading-relaxed text-sm italic border-l-4 border-gold pl-4">
              ሠዎች በክርስቶስ ኢየሱስ ያምኑ ዘንድ መመስከር እና ደቀመዛሙርት እንዲሆኑ ማብቃት
            </p>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="py-24 px-6 bg-cream">
        <SectionHeader
          label="አገልግሎቶቻችን"
          title="ምን እናደርጋለን?"
          subtitle="ቤተክርስቲያናችን ብዙ ዘርፎች ይዛ ሕዝቡን ታሳድጋለች"
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((m) => (
            <div key={m.name}
              className="bg-white p-7 border-b-4 border-church-blue hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl mb-4">{m.icon}</div>
              <h3 className="font-display text-xl text-church-dark mb-2">{m.name}</h3>
              <p className="font-body text-[#6a5a50] text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Faith Statements */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <span className="font-accent text-church-blue uppercase tracking-[4px] text-xs block mb-3 text-center">What We Believe</span>
          <h2 className="font-display text-4xl text-church-dark font-bold mb-4 text-center">Faith Statements</h2>
          <div className="w-12 h-0.5 bg-church-blue mb-12 mx-auto" />
          <div className="space-y-8">
            {[
              {
                num: 1,
                en: "We believe that the Bible is the inspired, trustworthy and truth without error, word of God (2 Tim 3:16-17).",
                am: "መጽሐፍ ቅዱስ በእግዚአብሔር መንፈስ መንዳትና መሪነት የተጻፈ እንደሆነና ምንም አይነት ስህተት የሌለበት እንደሆነ እናምናለን",
              },
              {
                num: 2,
                en: "We believe there is only one God who eternally exists in three Persons: Father, Son, and Holy Spirit (Matt 28:19).",
                am: "አንድ ዘላለማዊ እና መለኮታዊ አምላክ በሶስት አካል የተገለጠ (አብ ውልድ እና መንፈስ ቅዱስ) እንደሆነ እናምናለን",
              },
              {
                num: 3,
                en: "We believe Jesus Christ is God, born of the virgin Mary, lived a sinless life, performed miracles, died on the cross for our sins, bodily resurrected, ascended, and will return with power and glory (John 1:1; Matt 1:19,25; Heb 4:15; Heb 9:15-22; 1Cor 15:1-8; Acts 1:9-11; Heb 9:27-28).",
                am: "እየሱስ ክርስቶስ አምላክ፣ የእግዚአብሔር ልጅ እንደሆነ፤ ፍጹም አምላክ፣ ፍጹም ሰው መሆኑን፣ ምንም ኃጢያት የሌለበት መሆኑን፤ በመስቀል ላይ ተሰቅሎ ሞቶ ተነስቶ እዳችንን እንደከፈለ፣ ከሞት እንደተነሣ፣ በደሙ ኃጤያታችንን ሁሉ እንዳስወገደ፤ ወደሰማይ እንዳረገ፣ በክብር ተመልሶ እንደሚመጣ እናምናለን።",
              },
              {
                num: 4,
                en: "We believe accepting Jesus Christ as Lord and personal Savior and corresponding renewal by the Holy Spirit are the only path to salvation (John 3:16; John 5:24; Titus 3:3-7).",
                am: "በኃጢአት ምክንያት ከዘላለም ሕይዎት የተለዩ ሠዎችን ሊያድን የሚችለው በክርስቶስ ኢየሱስ አዳኝነት ማመንና በመንፈስ ቅዱስ የሆነ መታደስ እንደሆነ እናምናለን",
              },
              {
                num: 5,
                en: "We believe in the present ministry of the Holy Spirit, who lives within and guides Christians so they are enabled to live godly lives (John 14:14-16; John 16:5-16; Eph 1:13-14).",
                am: "በመንፈስ ቅዱስ መሪነት፣ አስተማሪነት፣ ኃይል ሰጪነት እና አገልግሎት እናምናለን።",
              },
              {
                num: 6,
                en: "We believe in eternal life (Matt 25:31-46; 1 Thess 4:13).",
                am: "በዘላለማዊ ሕይወት እናምናለን።",
              },
              {
                num: 7,
                en: "We believe in the spiritual unity of believers in our Lord Jesus Christ — that all believers are members of His body, the church (Phil 2:1-4).",
                am: "በክርስቶስ ያመኑ አማኞች ሁሉ የክርስቶስ አካል የሆነችው ቤተክርስቲያን አካል፣ አንድ ቤተሰብ እንደሆንን እናምናለን።",
              },
              {
                num: 8,
                en: "We believe God's design for sexual intimacy is to be expressed only within the context of marriage between one man and one woman. Marriage is exclusively the union between one man and one woman (Gen 2:24; Matt 19:5-6; Mark 10:6-9; Rom 1:26-27; 1Cor 6:9).",
                am: "ጋብቻ በአንድ ሴት እና አንድ ወንድ መካከል ብቻ መሆኑን እና ግብረስጋ ግንኙነት ከተጋቡ ቡኋላ በእነሱ መካከል መሆኑን እናምናለን።",
              },
              {
                num: 9,
                en: "We believe God created all human beings in His image; therefore human life is sacred from conception to its natural end. Every person should be treated with love, dignity, and respect (Psalm 139:1-24; Isa 49:1; Jer 22:37-39; Rom 12:20-21; Gal 6:10).",
                am: "ሰው ሁሉ በእግዚአብሔር አምሳል የተፈጠረ ስለሆነ እኩል ፍቀር ሊሰጠው እንደሚገባው መንፈሳዊም ስጋዊም ፍላጎቱ ሊከበርለት እንደሚገባው እናምናለን።",
              },
              {
                num: 10,
                en: "We believe that salvation is a gift from God to man. Man can never make up for his sin by self-improvement or good works — only by trusting in Jesus Christ can man be saved. Eternal life begins at the moment one receives Jesus Christ by faith (Rom 6:23; Eph 2:8-9; John 14:6; Titus 3:5; Gal 3:26; Rom 5:1).",
                am: "ከኃጢያት እና ከዘላለም ሞት ፍርድ መዳን ሰው ፈጽሞ በመልካም ስራው በራሱ ጥረት ሊያገኘው እንደማይችል ኢየሱስን በማመን ብቻ የሚገኝ የእግዚአብሔር ነጻ ስጦታ መሆኑን እናምናለን",
              },
              {
                num: 11,
                en: "We believe the Holy Spirit is present in the world to make people aware of their need for Jesus Christ. He lives in every Christian from the moment of salvation.",
                am: "መንፈስ ቅዱስ ሰዎችን ሁሉ በኃጥያታቸው በመወቅስ እና ወደ እውነት እና ንሰኃ እንደሚመራ እናምናለን፤ እየሱስ ክርስቶስን አምነው የተቀበሉት ሁሉ ውስጥ እንደሚኖር እናምናለን",
              },
              {
                num: 12,
                en: "We believe water baptism is a biblical command and demonstration of our love and obedience to Christ. Baptism by immersion symbolizes the death, burial, and resurrection of Jesus Christ and is the public declaration that we have accepted Jesus as our personal Savior (Col 2:12; Acts 2:41; Eph 2:8-9; Matt 28:19-20).",
                am: "ጥምቀት መጽሐፍ ቅዱሳዊ ትዛዝ እንደሆነ ሁሉም እየሱስን አምኖ የተቀበለ፣ የክርስቶስን ሞትና ትንሣኤ መተባበር እንዳለበት ያመነ የሚወስደው መሆኑን እናምናለን",
              },
              {
                num: 13,
                en: "We believe in adult baptism — it is provided for those who receive Jesus Christ as their personal Savior.",
                am: "ሰዎች በኃጥያታቸው ንሰኃ ገብተው እየሱስን አምነው ተቀብለው ለመከተል ከወሰኑ ቡሓላ በማጥመቅ እናምናለን",
              },
              {
                num: 14,
                en: "We believe in Holy Communion: the Lord's Supper is an ordinance given to all believers by Jesus Christ to remember His sacrifice and symbolizes the new covenant. The bread and wine (or juice) are symbols of Christ's broken body and shed blood. Communion is not a means of salvation; it is a testimony of a believer's faith in the atoning work of the cross (Matt 26:26-30; Mark 14:22-26; Luke 22:19-20).",
                am: "የጌታ እራት ለአማኞች ኢየሱስ የከፈለልንን መከራ ለማስታወስ የተሰጠ ትዛዝ ሲሆን፣ የአዲሱ ኪዳን ምልክት ነው። ኅብስቱ እና ጽዋው የክርስቶስ አካልና ደም ምሳሌዎች ናቸው። ቁርባን ድኅነትን ለማግኘት ሳይሆን የአማኝ ሃይማኖቱን ለመመስከር የሚፈጸም ነው።",
              },
            ].map(({ num, en, am }) => (
              <div key={num} className="flex gap-6 pb-8 border-b border-gray-100 last:border-0">
                <div className="flex-shrink-0 w-8 h-8 bg-church-blue text-white text-sm font-bold font-display flex items-center justify-center">
                  {num}
                </div>
                <div>
                  <p className="font-body text-[#3a2a20] text-sm leading-relaxed mb-2">{en}</p>
                  <p className="font-body text-[#7a6a60] text-sm leading-relaxed italic">{am}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";

export const metadata = {
  title: "Pastor Beza Merne | Christ Saints' Church",
};

export default function PastorPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-40 px-6 bg-hero-gradient text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,27,62,0.5)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10">
          <p className="font-accent text-gold/75 uppercase tracking-[5px] text-sm mb-4">Meet Our Pastor</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-black">
            ፓስተር <span className="text-shimmer">ቤዛ መርኔ</span>
          </h1>
          <p className="font-body text-white/50 text-lg mt-3">Pastor Beza Merne — Lead Pastor</p>
        </div>
      </section>

      {/* Main bio */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-6 border border-gold/25" />
                <div className="relative">
                  <Image
                    src="/images/pastor.jpg"
                    alt="Pastor Beza Merne"
                    width={500}
                    height={650}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
                {/* Name card */}
                <div className="absolute -bottom-6 -right-6 bg-church-blue text-white p-5 shadow-xl">
                  <p className="font-display text-lg font-bold">ፓስተር ቤዛ መርኔ</p>
                  <p className="font-accent italic text-white/70 text-sm">Lead Pastor</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 pt-4">
              <span className="font-accent text-church-blue uppercase tracking-[4px] text-xs block mb-3">Biography</span>
              <h2 className="font-display text-4xl text-church-dark font-bold mb-6">ስለ ፓስተሩ <span className="text-2xl text-[#9a8a80] font-normal">/ About the Pastor</span></h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-church-blue to-gold mb-8" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* English */}
                <div className="space-y-5 font-body text-[#5a4a40] text-sm leading-relaxed">
                  <p>
                    Pastor Beza Taye Merne was born and raised in Eastern Ethiopia. He completed his secondary education in the city of Dire Dawa and earned a Bachelor's Degree in Theology from the Meserete Kristos Church Seminary in Bishoftu (formerly Debre Zeit), Ethiopia.
                  </p>
                  <p>
                    For sixteen years, Pastor Beza faithfully served as a pastor and church planter among Meserete Kristos churches throughout Eastern Ethiopia, dedicating his life to evangelism, discipleship, and church growth. In 2019, following God's calling and the leading of the Holy Spirit, he and his wife, Yetnait Weldegiorgis, relocated to Alexandria, Virginia. Together, they founded Christ Saints' Church, where Pastor Beza continues to serve as the founding pastor and spiritual leader.
                  </p>
                  <p>
                    Pastor Beza is a devoted husband and loving father. He is deeply committed to sharing the Gospel of Jesus Christ, equipping believers for spiritual growth, and serving people with compassion and humility. His greatest joy is seeing lives transformed by Christ, witnessing individuals come to faith, and helping them grow into mature disciples who faithfully follow Jesus. Through his ministry, he strives to glorify God and inspire others to live with faith, hope, and purpose in Christ.
                  </p>
                </div>

                {/* Amharic */}
                <div className="space-y-5 font-body text-[#5a4a40] text-sm leading-relaxed">

                  <p>
                    ፓስተር ቤዛ ታዬ  መርኔ በምስራቅ ኢትዮጵያ ተወልደው እና አድገዋል። የሁለተኛ ደረጃ ትምህርታቸውን በድሬዳዋ ከተማ አጠናቀው፣ ከመሰረተ ክርስቶስ ቤተ ክርስቲያን ሴሚናሪ (ቢሾፍቱ/ደብረ ዘይት) በሥነ መለኮት (Theology) የባችለር ዲግሪ አግኝተዋል።
                  </p>
                  <p>
                    ፓስተር ቤዛ በምስራቅ ኢትዮጵያ በሚገኙ የመሰረተ ክርስቶስ አብያተ ክርስቲያናት ውስጥ ለ16 ዓመታት በታማኝነት እንደ ፓስተርና አዲስ ቤተ ክርስቲያን ተክላይ (Church Planter) አገልግለዋል። በ2019 ዓ.ም. በእግዚአብሔር ጥሪና በመንፈስ ቅዱስ ምሪት፣ ከባለቤታቸው ከወ/ሮ የትናይት ወልደ ጊዮርጊስ ጋር ወደ አሌክሳንድሪያ፣ ቨርጂኒያ ተዛውረዋል። የክርስቶስ መሠረት ቤተክርስቲያንን  መስርተው እስከ ዛሬ ድረስ እንደ መሥራች እና ዋና ፓስተር በትጋት እያገለገሉ ይገኛሉ።
                  </p>
                  <p>

                    ፓስተር ቤዛ  ታማኝ ባልና የቤተሰብ ኃላፊ ናቸው። ወንጌልን በታማኝነት ለማወጅ፣ አማኞችን በእምነታቸው ለማሳደግ እና ሰዎችን በፍቅርና በትሕትና ለማገልገል በጥልቅ የተሰጡ ናቸው። ሰዎች ክርስቶስን እንዲያውቁ፣ ሕይወታቸው በእርሱ እንዲለወጥ እና የኢየሱስ ክርስቶስ ደቀ መዛሙርት ሆነው እንዲያድጉ ማየት ታላቅ ደስታቸው ነው። በአገልግሎታቸው ሁሉ እግዚአብሔርን ለማክበር እና ሌሎችን በእምነት፣ በተስፋ እና በክርስቶስ ዓላማ የተሞላ ሕይወት እንዲኖሩ ለማነሳሳት ይተጋሉ።
                  </p>
                </div>
              </div>

              {/* Scripture emphasis */}
              {/* <div className="mt-8 p-6 bg-cream border-l-4 border-gold">
                <p className="font-accent italic text-gold text-xl leading-relaxed mb-3">
                  &ldquo;ለእኔ ሕይወት ክርስቶስ ነው፤ ሞትም ትርፍ ነው&rdquo;
                </p>
                <cite className="font-body text-gold/50 text-sm">— ፊልጵ 1:21</cite>
              </div> */}

              {/* Traits */}
              {/* <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "ትልቅ ቃልዎ", val: "ፍቅር" },
                  { label: "ብሉይ ሮሌ", val: "ፓስተር" },
                  { label: "ቤተክርስቲያን", val: "ክርስቶስ ቅዱሳን" },
                  { label: "ሀገር", val: "ኢትዮጵያ" },
                ].map((item) => (
                  <div key={item.label} className="border border-gold/20 p-4">
                    <span className="font-accent text-xs tracking-widest uppercase text-church-blue block mb-1">{item.label}</span>
                    <span className="font-body text-church-dark font-semibold">{item.val}</span>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-accent text-church-blue uppercase tracking-[4px] text-xs block mb-4">Message from the Pastor</span>
          <h2 className="font-display text-4xl text-church-dark font-bold mb-6">A Word from the Pastor</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />
          <div className="bg-white p-10 border border-gold/20 shadow-md relative">
            <div className="absolute top-4 left-6 text-8xl font-serif text-gold/10 leading-none select-none">&ldquo;</div>
            <p className="font-body text-[#5a4a40] leading-relaxed text-sm relative z-10 mb-4">
              Welcome to Christ Saints&apos; Church. This is a house open to everyone — the long-time believer and the first-time visitor, the strong and the weary. Jesus tells us He receives all who come to Him.
            </p>
            <p className="font-body text-[#5a4a40] leading-relaxed text-sm">
              Together we grow in the Lord — hearing His Word, lifting our prayers, and extending His love to one another. Through Christ, our lives are transformed. The family is waiting for you!
            </p>
            <div className="mt-6 pt-6 border-t border-gold/20 text-right">
              <p className="font-display text-church-dark font-bold">ፓስተር ቤዛ መርኔ</p>
              <p className="font-accent italic text-church-blue text-sm">Lead Pastor, Christ Saints&apos; Church</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";

export const metadata = {
  title: "ፓስተር ቤዛ ሜርኔ | Christ Saints' Church",
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
            ፓስተር <span className="text-shimmer">ቤዛ ሜርኔ</span>
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
                  <p className="font-display text-lg font-bold">ፓስተር ቤዛ ሜርኔ</p>
                  <p className="font-accent italic text-white/70 text-sm">Lead Pastor</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 pt-4">
              <span className="font-accent text-church-blue uppercase tracking-[4px] text-xs block mb-3">Biography</span>
              <h2 className="font-display text-4xl text-church-dark font-bold mb-6">ስለ ፓስተሩ</h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-church-blue to-gold mb-8" />

              <div className="space-y-5 font-body text-[#5a4a40] text-sm leading-relaxed">
                <p>
                  ፓስተር ቤዛ ታዬ ሜርኔ በምስራቅ ኢትዮጵያ ተወለዱ። ሁለተኛ ደረጃ ትምህርታቸውን ድሬዳዋ አጠናቀቁ። ከደብረዘይት ቢሾፍቱ መሠረተ ክርስቶስ ኮሌጅ ኢትዮጵያ በሥነ መለኮት የመጀመሪያ ዲግሪ አላቸው።
                </p>
                <p>
                  ለአስራ ስድስት ዓመታት በምስራቅ ኢትዮጵያ በሚገኙ የመሠረተ ክርስቶስ አብያተ ክርስቲያናት እንደ ፓስተርና የቤተክርስቲያን መሥራች አገልግለዋል። በእግዚአብሔር ፈቃድና በመንፈስ ቅዱስ መሪነት፣ እርሳቸውና ባለቤታቸው ዮትናዬት ወልደጊዮርጊስ — ወንድሞቻቸው ቴዎድሮስ ምናሌ፣ አይነግዳ አየነው፣ ኤርምያስ ሻኒ እና እህታቸው ራሄሌ አለማየው — በ2019 ወደ ቨርጂኒያ አሌክሳንድሪያ ሄደው የክርስቶስ መሠረት ቤተክርስቲያንን መትከል ጀምረው አሁን ያገለግላሉ።
                </p>
                <p>
                  ፓስተር ቤዛ ሜርኔ የአንዲት ሚስት ባልና የአንድ ልጅ አባት ናቸው። የክርስቶስ ተከታይ፣ ቀናኢ አምባሳደር እና የሰዎች ወዳጅ የሆኑ የቅዱስ መጽሐፍ ሰባኪ ናቸው። ወንጌልን ለሰዎች ለመናገር ደስታና ክብር ይሰማቸዋል፤ ሰዎች ክርስቶስን ሲቀበሉ፣ ደስተኛ ሕይወት በክርስቶስ ሲኖሩ፣ እና የኢየሱስ ክርስቶስ ደቀ መዛሙርት ሲሆኑ ሲያዩ ደስ ይላቸዋል።
                </p>
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
          <h2 className="font-display text-4xl text-church-dark font-bold mb-6">ከፓስተሩ መልዕክት</h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />
          <div className="bg-white p-10 border border-gold/20 shadow-md relative">
            <div className="absolute top-4 left-6 text-8xl font-serif text-gold/10 leading-none select-none">&ldquo;</div>
            <p className="font-body text-[#5a4a40] leading-relaxed text-sm relative z-10 mb-4">
              ወደ ክርስቶስ ቅዱሳን ቤተክርስቲያን እንኳን ደህና መጣችሁ። ቤቱ ለሁሉ ሰው ክፍት ናት — ቀደምቱ ሆነ አዲሱ፣
              ጠንካራ ሆነ ደካማ። ኢየሱስ ሁሉንም ይቀበላቸዋል ይላናል።
            </p>
            <p className="font-body text-[#5a4a40] leading-relaxed text-sm">
              አብሮ ወደ ጌታ እናድጋለን — ቃሉን ሰምቶ፣ ጸሎት አቅርቦ፣ ፍቅር ተሰጥቶ ሕይወታችን ይቀየራል።
              ቤተሰቡ ይጠብቃቸዋል!
            </p>
            <div className="mt-6 pt-6 border-t border-gold/20 text-right">
              <p className="font-display text-church-dark font-bold">ፓስተር ቤዛ ሜርኔ</p>
              <p className="font-accent italic text-church-blue text-sm">Lead Pastor, Christ Saints&apos; Church</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

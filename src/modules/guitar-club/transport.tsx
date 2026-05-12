const METHODS = [
  {
    icon: "🚇",
    title: "捷運",
    desc: '搭乘捷運「松江南京站」（4號出口）或「南京復興站」（7號出口），步行約 5 分鐘即可抵達典空間活動會場。',
  },
  {
    icon: "🚌",
    title: "公車",
    desc: "搭乘多路公車至「南京松江路口」或「南京東路口」站下車，步行約 3-5 分鐘即可抵達。",
  },
  {
    icon: "🚗",
    title: "自行開車",
    desc: "沿南京東路三段前往，目的地為南京東路三段 28 號。附近有付費停車場可供停放，建議提早出發以避免停車不便。",
  },
];

export default function Transport() {
  return (
    <section id="transport" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-amber-400 text-xs tracking-[0.3em] uppercase text-center mb-3">
          HOW TO GET HERE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          交通指南
        </h2>
        <div className="text-center mb-4">
          <p className="text-gray-400">
            台北市中山區南京東路三段 28 號 B1（典空間 活動會場）
          </p>
        </div>
        <div className="flex justify-center mb-16">
          <a
            href="https://maps.google.com/?q=台北市中山區南京東路三段28號"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-amber-300 text-sm underline underline-offset-4 transition-colors"
          >
            在 Google Maps 上查看 →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {METHODS.map((m) => (
            <div
              key={m.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-amber-400/30 hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{m.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-3">{m.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FORMS = [
  {
    icon: "🎙️",
    title: "表演報名表單",
    desc: "想上台表演嗎？無論是吉他彈唱、樂團演出或其他才藝，都歡迎報名！",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSemIBhEsD2KZJgWKKif-3HjMOnJNmxHbKj-8v9ditimUPT0vw/viewform?usp=header",
    linkText: "前往填寫",
  },
  {
    icon: "📝",
    title: "活動報名表單",
    desc: "填寫基本資料報名參加「第三屆沐榕回娘家」，讓我們為您準備最好的活動體驗。",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfm0vjVDCYjYnq9n-aa-vORDgoN69nad200JoxptSw6meNedA/viewform",
    linkText: "前往填寫",
  },
];

export default function Forms() {
  return (
    <section id="forms" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-amber-400 text-xs tracking-[0.3em] uppercase text-center mb-3">
          REGISTRATION
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          表單填寫
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          選擇適合您的表單，一起參與這場盛會
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {FORMS.map((form) => (
            <div
              key={form.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-amber-400/30 transition-all duration-300 flex flex-col"
            >
              <div className="text-5xl mb-5">{form.icon}</div>
              <h3 className="text-white font-bold text-xl mb-3">{form.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-8">{form.desc}</p>
              <a
                href={form.link}
                target={form.link.startsWith("http") ? "_blank" : undefined}
                rel={form.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
              >
                {form.linkText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

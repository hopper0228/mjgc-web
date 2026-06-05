import Image from "next/image";
import Link from "next/link";

const FEATURES = [
  {
    icon: "🎸",
    title: "精彩表演",
    desc: "吉他社成員帶來的精彩演出，音樂串起回憶",
    href: "/features/performance",
  },
  {
    icon: "🎁",
    title: "驚喜抽獎",
    desc: "豐富獎品等你來拿，人人有機會",
    href: "/features/lottery",
  },
  {
    icon: "🤝",
    title: "世代相聚",
    desc: "歷屆學長姐學弟妹齊聚，情誼永續",
    href: "/features/community",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section label */}
        <p className="text-amber-400 text-xs tracking-[0.3em] uppercase text-center mb-3">
          ABOUT EVENT
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          活動介紹
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          沐榕回娘家已邁入第三屆，讓我們再次相聚，用音樂串起彼此的回憶
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {FEATURES.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-amber-400/40 hover:bg-white/[0.08] transition-all duration-300 block"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-amber-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{f.desc}</p>
              <span className="text-amber-400/60 text-xs group-hover:text-amber-400 transition-colors">
                了解更多 →
              </span>
            </Link>
          ))}
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              沐榕回娘家已邁入第三屆，每四年舉辦一次這場專屬於沐榕家族的盛會。由於 2022
              年因疫情緣故取消舉辦，這次相聚更顯得彌足珍貴。
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              我們誠摯邀請歷屆學長姐、學弟妹一同參與，無論你是畢業多年的前輩，還是剛加入的新血，都歡迎回娘家共襄盛舉。這是一場跨越世代的吉他社團聚會，讓我們用音樂串起彼此的回憶。
            </p>
            <p className="text-gray-300 text-base leading-relaxed mb-10">
              本屆活動精心規劃了精彩表演節目、驚喜抽獎環節，以及豐盛的美食饗宴。讓我們齊聚一堂，共同創造更多美好的回憶！
            </p>

            {/* Details */}
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-2xl mt-0.5">📅</span>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    活動日期
                  </p>
                  <p className="text-white font-medium">2026年8月22日（星期六）</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-2xl mt-0.5">🕐</span>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    活動時間
                  </p>
                  <p className="text-white font-medium">12:30 入場 / 13:00 活動開始</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-amber-400 text-2xl mt-0.5">📍</span>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                    活動地點
                  </p>
                  <p className="text-white font-medium">典空間 活動會場</p>
                  <p className="text-gray-400 text-sm">台北市中山區南京東路三段 28 號 B1</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="https://public.readdy.ai/ai/img_res/a9a1ee69458ce1b5ca7a1b020e936fc1.jpg"
              alt="活動現場"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* <Image
              src="/images/solo.png"
              alt="活動現場"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

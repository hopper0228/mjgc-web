import Image from "next/image";
import Link from "next/link"; // 1. 新增引入 Link

const NAV_LINKS = [
  { label: "活動資訊", href: "#about" },
  { label: "報名表單", href: "#forms" },
  { label: "周邊商品", href: "#merchandise" },
  { label: "贊助活動", href: "#sponsors" },
  { label: "交通資訊", href: "#transport" },
  { label: "聯絡我們", href: "#contact" },
];

const CONTACTS = [
  {
    icon: "📞",
    label: "聯絡電話",
    value: "0911-456-739",
    href: "tel:0911-456-739",
  },
  {
    icon: "💬",
    label: "LINE 官方帳號",
    value: "@rtu1096v",
    href: "https://line.me/R/ti/p/@rtu1096v",
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@33der9",
    href: "https://instagram.com/33der9",
  },
];

export default function ContactFooter() {
  return (
    <footer id="contact" className="bg-zinc-900 border-t border-white/10">
      {/* Contact Section */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <p className="text-amber-400 text-xs tracking-[0.3em] uppercase text-center mb-3">
          CONTACT
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          聯絡我們
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          有任何問題歡迎與我們聯繫
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel={c.href?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-6 hover:border-amber-400/30 hover:bg-white/[0.08] transition-all duration-300 text-center"
            >
              <span className="text-3xl">{c.icon}</span>
              <span className="text-gray-400 text-xs uppercase tracking-wider">{c.label}</span>
              <span className="text-white font-medium">{c.value}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-400/30 flex-shrink-0">
                  <Image
                    src="/images/沐榕完稿.jpg"
                    alt="Logo"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <span className="text-white font-bold">第三屆沐榕回娘家</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                沐榕回娘家活動已邁入第三屆，我們是吉他社社團，每四年舉辦一次這場專屬於沐榕家族的盛會。2022年因疫情取消舉辦，2026年讓我們再次相聚！
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">快速連結</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">
                {/* 2. 將聯絡資訊包裝成隱藏連結，加上 cursor-default 隱藏點擊手勢 */}
                <Link href="/developer" className="cursor-default">
                  聯絡資訊
                </Link>
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📞 0911-456-739</li>
                <li>💬 LINE: @rtu1096v</li>
                <li>📸 IG: @33der9</li>
                <li className="pt-2 leading-relaxed">
                  📍 台北市中山區南京東路三段 28 號 B1
                  <br />
                  （典空間 活動會場）
                </li>
              </ul>
              <div className="flex gap-4 mt-5">
                <a
                  href="https://instagram.com/33der9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
                >
                  Instagram ↗
                </a>
                <a
                  href="https://line.me/R/ti/p/@rtu1096v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
                >
                  LINE ↗
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 第三屆沐榕回娘家. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
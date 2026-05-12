export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-amber-400 text-xs tracking-[0.3em] uppercase text-center mb-3">
          SPONSORS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          贊助活動
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          您的支持是活動圓滿的重要力量
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">誠摯邀請您贊助</h3>
            <p className="text-gray-300 leading-relaxed mb-5">
              誠摯邀請大家贊助本次「第三屆沐榕回娘家」活動！您的每一份支持，都是讓這場四年一度的吉他社團聚會更加圓滿的重要力量。
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              贊助款項將用於活動場地、餐飲、表演設備及紀念品製作。請加入官方 LINE
              帳號取得匯款資訊，感謝您的鼎力相助！
            </p>
            <a
              href="https://line.me/R/ti/p/@rtu1096v"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              <span>加入官方 LINE</span>
              <span className="text-sm font-mono opacity-80">@rtu1096v</span>
              <span>→</span>
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-6xl mb-5">💝</div>
            <h4 className="text-white font-semibold text-lg mb-3">成為第一位贊助者</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              目前尚無贊助者，成為第一位支持者吧！
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-500 text-xs">取得匯款資訊請加入官方 LINE</p>
              <p className="text-amber-400 font-mono mt-2 text-lg">@rtu1096v</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

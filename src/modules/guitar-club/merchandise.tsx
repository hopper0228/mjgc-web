import Link from "next/link";

export default function Merchandise() {
  return (
    <section id="merchandise" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-amber-400 text-xs tracking-[0.3em] uppercase mb-3">
          MERCHANDISE
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">活動周邊</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-16">
          精心設計的活動周邊商品，留下珍貴紀念
        </p>

        <Link
          href="/merchandise"
          className="group border border-white/10 hover:border-amber-400/40 rounded-2xl p-16 max-w-2xl mx-auto bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 block"
        >
          <div className="text-7xl mb-6">🛍️</div>
          <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
            敬請期待
          </h3>
          <p className="text-gray-400 mb-6">週邊商品即將推出，敬請期待！</p>
          <span className="inline-block text-amber-400/60 text-sm group-hover:text-amber-400 transition-colors">
            查看詳情 →
          </span>
        </Link>
      </div>
    </section>
  );
}

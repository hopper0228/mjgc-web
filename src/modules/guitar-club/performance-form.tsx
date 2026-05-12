"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PERFORMANCE_TYPES = [
  { value: "solo", label: "個人演出" },
  { value: "duo", label: "雙人演出" },
  { value: "band", label: "樂團演出" },
];

const inputClass =
  "w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/60 transition-colors text-sm";
const labelClass = "block text-gray-400 text-xs mb-1.5 uppercase tracking-wider";

export default function PerformanceForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    contact: "",
    performanceType: "solo",
    songTitle: "",
    duration: "5",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const set = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/registration/performance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, duration: Number(form.duration) }),
      });
      const data = await res.json();
      if (data.status !== 1) throw new Error(data.message);
      setSuccess(true);
      router.refresh();
    } catch (err: any) {
      setError(err.message || "送出失敗，請再試一次");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="border border-amber-400/30 bg-amber-400/5 rounded-2xl p-10 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-white font-bold text-xl mb-2">報名成功！</h3>
        <p className="text-gray-400 text-sm">感謝您的報名，我們會盡快與您聯繫。</p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 text-amber-400 hover:text-amber-300 text-sm underline underline-offset-4"
        >
          繼續報名其他表演
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/10 rounded-2xl p-8 bg-white/[0.03] space-y-5"
    >
      <h3 className="text-white font-bold text-lg mb-2">填寫報名資料</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>姓名 *</label>
          <input
            type="text"
            className={inputClass}
            placeholder="請輸入姓名"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelClass}>聯絡方式 *</label>
          <input
            type="text"
            className={inputClass}
            placeholder="電話或 Email"
            value={form.contact}
            onChange={(e) => set("contact", e.target.value)}
            required
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>表演類型 *</label>
        <select
          className={inputClass}
          value={form.performanceType}
          onChange={(e) => set("performanceType", e.target.value)}
        >
          {PERFORMANCE_TYPES.map((t) => (
            <option key={t.value} value={t.value} className="bg-zinc-900">
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="sm:col-span-2">
          <label className={labelClass}>曲目名稱 *</label>
          <input
            type="text"
            className={inputClass}
            placeholder="請輸入演出曲目"
            value={form.songTitle}
            onChange={(e) => set("songTitle", e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelClass}>預計時長（分鐘）</label>
          <input
            type="number"
            className={inputClass}
            min={1}
            max={30}
            value={form.duration}
            onChange={(e) => set("duration", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>備註</label>
        <textarea
          className={`${inputClass} resize-none`}
          rows={3}
          placeholder="其他說明（樂器需求、人員名單等）"
          value={form.notes}
          onChange={(e) => set("notes", e.target.value)}
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black font-bold py-3 rounded-lg transition-all duration-200"
      >
        {loading ? "送出中..." : "送出報名"}
      </button>
    </form>
  );
}

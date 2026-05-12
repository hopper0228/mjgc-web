"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400/60 transition-colors text-sm";
const labelClass = "block text-gray-400 text-xs mb-1.5 uppercase tracking-wider";

export default function ActivityForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    contact: "",
    cohort: "",
    isVegetarian: false,
    guestCount: "0",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const set = (key: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/registration/activity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, guestCount: Number(form.guestCount) }),
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
        <p className="text-gray-400 text-sm">感謝您的報名，期待與您再次相聚！</p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 text-amber-400 hover:text-amber-300 text-sm underline underline-offset-4"
        >
          繼續報名其他人
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>屆別 *</label>
          <input
            type="text"
            className={inputClass}
            placeholder="例：第 12 屆、107 學年"
            value={form.cohort}
            onChange={(e) => set("cohort", e.target.value)}
            required
          />
        </div>
        <div>
          <label className={labelClass}>攜伴人數</label>
          <input
            type="number"
            className={inputClass}
            min={0}
            max={10}
            placeholder="0"
            value={form.guestCount}
            onChange={(e) => set("guestCount", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            className="w-4 h-4 accent-amber-400"
            checked={form.isVegetarian}
            onChange={(e) => set("isVegetarian", e.target.checked)}
          />
          <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
            素食需求
          </span>
        </label>
      </div>

      <div>
        <label className={labelClass}>備註</label>
        <textarea
          className={`${inputClass} resize-none`}
          rows={3}
          placeholder="其他需求或說明"
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

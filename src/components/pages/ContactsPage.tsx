import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="font-oswald text-brand-red text-xs tracking-[0.3em] mb-3">СВЯЗЬ</p>
        <h1 className="font-oswald text-5xl font-bold text-brand-white mb-16">КОНТАКТЫ</h1>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <p className="font-ibm text-brand-white/60 text-base leading-relaxed mb-10 font-light">
              Есть вопросы о заказе, доставке или хочешь стать частью нашей команды? Напиши нам — отвечаем в течение суток.
            </p>

            <div className="space-y-6">
              {[
                { icon: "Mail", label: "EMAIL", value: "hello@mestnie.kr" },
                { icon: "Phone", label: "ТЕЛЕФОН", value: "+7 (999) 000-00-00" },
                { icon: "MapPin", label: "АДРЕС", value: "Сеул, Корея / Москва, Россия" },
                { icon: "Clock", label: "РЕЖИМ РАБОТЫ", value: "Пн–Пт: 10:00–19:00" },
              ].map(c => (
                <div key={c.label} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-brand-red group-hover:text-brand-red transition-colors text-brand-white/40">
                    <Icon name={c.icon} fallback="Mail" size={16} />
                  </div>
                  <div>
                    <p className="font-oswald text-xs tracking-[0.3em] text-brand-gray mb-0.5">{c.label}</p>
                    <p className="font-ibm text-sm text-brand-white/80">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-10 pt-10 border-t border-white/5">
              <p className="font-oswald text-xs tracking-[0.3em] text-brand-gray mb-4">СОЦИАЛЬНЫЕ СЕТИ</p>
              <div className="flex gap-4">
                {["Instagram", "Telegram", "VK", "YouTube"].map(s => (
                  <button
                    key={s}
                    className="font-oswald text-xs tracking-widest border border-white/10 px-4 py-2 text-brand-white/50 hover:border-brand-red hover:text-brand-red transition-all duration-200"
                  >
                    {s.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#0f0f0f] border border-white/5 p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full min-h-64 text-center animate-fade-in">
                <div className="w-12 h-12 border border-brand-red flex items-center justify-center mb-4">
                  <Icon name="Check" size={20} className="text-brand-red" />
                </div>
                <h3 className="font-oswald text-xl text-brand-white mb-2">СООБЩЕНИЕ ОТПРАВЛЕНО</h3>
                <p className="font-ibm text-sm text-brand-gray">Ответим в течение суток.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-oswald text-xl tracking-wide text-brand-white mb-6">НАПИСАТЬ НАМ</h3>
                <div>
                  <label className="font-oswald text-xs tracking-[0.3em] text-brand-gray block mb-2">ИМЯ</label>
                  <input
                    required
                    className="w-full bg-[#1a1a1a] border border-white/10 text-brand-white font-ibm text-sm px-4 py-3 focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-gray/40"
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="font-oswald text-xs tracking-[0.3em] text-brand-gray block mb-2">EMAIL</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-[#1a1a1a] border border-white/10 text-brand-white font-ibm text-sm px-4 py-3 focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-gray/40"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="font-oswald text-xs tracking-[0.3em] text-brand-gray block mb-2">СООБЩЕНИЕ</label>
                  <textarea
                    required
                    className="w-full bg-[#1a1a1a] border border-white/10 text-brand-white font-ibm text-sm px-4 py-3 focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-gray/40 resize-none h-32"
                    placeholder="Ваш вопрос или сообщение..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-oswald tracking-widest text-sm bg-brand-red text-white py-4 hover:bg-brand-white hover:text-brand-black transition-all duration-300"
                >
                  ОТПРАВИТЬ
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
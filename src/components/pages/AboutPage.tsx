export default function AboutPage() {
  return (
    <main className="pt-16 min-h-screen">
      {/* Hero */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img
          src="https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/files/779b8bb9-e39a-448f-b6aa-5cdeb0018e5f.jpg"
          alt="О бренде"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <p className="font-oswald text-brand-red text-xs tracking-[0.3em] mb-2">ИСТОРИЯ</p>
          <h1 className="font-oswald text-5xl md:text-7xl font-bold text-brand-white">О БРЕНДЕ</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main story */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="font-oswald text-3xl font-bold text-brand-white mb-6">
              МЫ — <span className="text-brand-red">МЕСТНЫЕ</span>
            </h2>
            <p className="font-ibm text-brand-white/60 leading-relaxed mb-4 font-light">
              Бренд МЕСТНЫЕ основан в 2019 году в Сеуле группой друзей, которые хотели носить одежду, отражающую их идентичность. Не копию западных брендов, не подражание — а что-то своё, корейское, настоящее.
            </p>
            <p className="font-ibm text-brand-white/60 leading-relaxed mb-4 font-light">
              Название говорит само за себя: мы для тех, кто знает, откуда он. Для местных — везде, где ты находишься.
            </p>
            <p className="font-ibm text-brand-white/60 leading-relaxed font-light">
              Каждая вещь создаётся с вниманием к деталям: выверенный крой, качественные материалы, минималистичный дизайн, который не устаревает.
            </p>
          </div>

          <div className="bg-[#111] border border-white/5 p-8">
            <div className="grid grid-cols-2 gap-8">
              {[
                { num: "2019", label: "Год основания" },
                { num: "Сеул", label: "Место рождения" },
                { num: "50+", label: "Моделей в год" },
                { num: "4.8", label: "Средний рейтинг" },
              ].map(s => (
                <div key={s.label} className="border-b border-white/5 pb-6">
                  <p className="font-oswald text-3xl font-bold text-brand-red mb-1">{s.num}</p>
                  <p className="font-ibm text-xs text-brand-gray">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <p className="font-oswald text-brand-red text-xs tracking-[0.3em] mb-3">ПРИНЦИПЫ</p>
          <h2 className="font-oswald text-3xl font-bold text-brand-white mb-10">НАШ ПОДХОД</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "КАЧЕСТВО", icon: "Award", text: "Используем только проверенные ткани. Каждая партия проходит контроль качества перед отправкой." },
              { title: "ИДЕНТИЧНОСТЬ", icon: "Heart", text: "Наш дизайн — это разговор с культурой. Мы берём лучшее из корейской эстетики и делаем её универсальной." },
              { title: "ЧЕСТНОСТЬ", icon: "Shield", text: "Прозрачное производство, честные цены, никаких лишних наценок за лейбл." },
            ].map(v => (
              <div key={v.title} className="border border-white/5 p-6 hover:border-brand-red/30 transition-colors group">
                <p className="font-oswald text-brand-red text-xs tracking-[0.3em] mb-4">{v.title}</p>
                <p className="font-ibm text-brand-white/60 text-sm leading-relaxed font-light">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden h-64 md:h-96">
          <img
            src="https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/files/446a9f3a-5cfc-47a0-bb63-ce3cfc89dc7b.jpg"
            alt="Коллекция"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/50 flex items-center justify-center">
            <p className="font-oswald text-5xl md:text-7xl font-bold text-white/10 tracking-widest">МЕСТНЫЕ</p>
          </div>
        </div>
      </div>
    </main>
  );
}

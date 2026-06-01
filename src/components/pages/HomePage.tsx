import { Page, CartItem } from "@/App";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";

interface HomePageProps {
  setPage: (p: Page) => void;
  addToCart: (item: Omit<CartItem, "qty">) => void;
}

const marqueeItems = ["МЕСТНЫЕ", "SEOUL", "STREETWEAR", "KOREA", "LOCAL", "CULTURE", "МЕСТНЫЕ", "SEOUL", "STREETWEAR", "KOREA", "LOCAL", "CULTURE"];

export default function HomePage({ setPage, addToCart }: HomePageProps) {
  const featured = products.slice(0, 3);

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/files/779b8bb9-e39a-448f-b6aa-5cdeb0018e5f.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        {/* Big title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="font-oswald text-[18vw] font-bold text-white/5 tracking-widest select-none leading-none animate-fade-in"
            style={{ letterSpacing: "0.15em" }}
          >
            МЕСТНЫЕ
          </h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="max-w-lg animate-fade-in-up opacity-0-init" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <p className="font-oswald text-brand-red text-sm tracking-[0.3em] mb-4">СДЕЛАНО В КОРЕЕ</p>
            <h2 className="font-oswald text-5xl md:text-7xl font-bold leading-none mb-6 text-brand-white">
              ОДЕВАЙСЯ<br />
              <span className="text-brand-red">КАК</span> МЕСТНЫЙ
            </h2>
            <p className="font-ibm text-brand-white/60 text-base mb-8 font-light leading-relaxed">
              Streetwear-бренд из Сеула.<br />Одежда для тех, кто знает, откуда он.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setPage("catalog")}
                className="font-oswald tracking-widest text-sm bg-brand-red text-white px-8 py-3 hover:bg-white hover:text-brand-black transition-all duration-300"
              >
                СМОТРЕТЬ КАТАЛОГ
              </button>
              <button
                onClick={() => setPage("about")}
                className="font-oswald tracking-widest text-sm border border-white/30 text-white/70 px-8 py-3 hover:border-white hover:text-white transition-all duration-300"
              >
                О НАС
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-white/5 py-3 overflow-hidden bg-[#0f0f0f]">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <span key={i} className="font-oswald text-xs tracking-[0.4em] text-brand-white/20 mx-8">{item}</span>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-oswald text-brand-red text-xs tracking-[0.3em] mb-2">КОЛЛЕКЦИЯ</p>
            <h2 className="font-oswald text-4xl font-bold text-brand-white">НОВИНКИ</h2>
          </div>
          <button
            onClick={() => setPage("catalog")}
            className="flex items-center gap-2 font-oswald text-xs tracking-widest text-brand-white/50 hover:text-brand-red transition-colors hover-line"
          >
            ВСЕ ТОВАРЫ <Icon name="ArrowRight" size={14} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product, i) => (
            <div
              key={product.id}
              className="animate-fade-in-up opacity-0-init"
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "forwards" }}
            >
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="relative overflow-hidden mx-6 mb-20">
        <div
          className="h-64 md:h-96 bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/files/446a9f3a-5cfc-47a0-bb63-ce3cfc89dc7b.jpg)` }}
        >
          <div className="absolute inset-0 bg-brand-black/60" />
          <div className="relative z-10 px-10 max-w-7xl w-full mx-auto">
            <p className="font-oswald text-brand-red text-xs tracking-[0.3em] mb-3">СЕЗОН 2026</p>
            <h3 className="font-oswald text-4xl md:text-6xl font-bold text-white mb-6">
              НОВАЯ<br />КОЛЛЕКЦИЯ
            </h3>
            <button
              onClick={() => setPage("catalog")}
              className="font-oswald tracking-widest text-sm bg-white text-brand-black px-8 py-3 hover:bg-brand-red hover:text-white transition-all duration-300"
            >
              ОТКРЫТЬ
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "2019", label: "ОСНОВАН" },
            { num: "50+", label: "ПОЗИЦИЙ" },
            { num: "4.8★", label: "СРЕДНИЙ РЕЙТИНГ" },
            { num: "Сеул", label: "ПРОИСХОЖДЕНИЕ" },
          ].map(s => (
            <div key={s.label}>
              <p className="font-oswald text-3xl md:text-4xl font-bold text-brand-white mb-1">{s.num}</p>
              <p className="font-oswald text-xs tracking-[0.3em] text-brand-gray">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-oswald text-xl tracking-widest text-brand-white/50">МЕСТНЫЕ<span className="text-brand-red">.</span></span>
          <p className="font-ibm text-xs text-brand-gray">© 2026 МЕСТНЫЕ. Все права защищены.</p>
          <div className="flex gap-6">
            {["Instagram", "Telegram", "VK"].map(s => (
              <button key={s} className="font-oswald text-xs tracking-widest text-brand-white/30 hover:text-brand-red transition-colors">{s}</button>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

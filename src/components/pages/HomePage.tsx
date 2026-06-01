import { Page, CartItem } from "@/App";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Icon from "@/components/ui/icon";

interface HomePageProps {
  setPage: (p: Page) => void;
  addToCart: (item: Omit<CartItem, "qty">) => void;
  cartCount: number;
}

const links: { label: string; page: Page }[] = [
  { label: "ГЛАВНАЯ", page: "home" },
  { label: "КАТАЛОГ", page: "catalog" },
  { label: "О БРЕНДЕ", page: "about" },
  { label: "БЛОГ", page: "blog" },
  { label: "КОНТАКТЫ", page: "contacts" },
];

const marqueeItems = ["МЕСТНЫЕ", "SEOUL", "STREETWEAR", "KOREA", "LOCAL", "CULTURE", "МЕСТНЫЕ", "SEOUL", "STREETWEAR", "KOREA", "LOCAL", "CULTURE"];

export default function HomePage({ setPage, addToCart, cartCount }: HomePageProps) {
  const featured = products.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background logo image */}
        <div
          className="absolute inset-0 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/bucket/c8524fa2-ca69-454f-a4f8-4c13f8f858b6.jpg)`,
            backgroundSize: "55%",
            backgroundPosition: "75% center",
            opacity: 0.08,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />

        {/* Logo image — right side, large */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center pointer-events-none select-none">
          <img
            src="https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/bucket/c8524fa2-ca69-454f-a4f8-4c13f8f858b6.jpg"
            alt="МЕСТНЫЕ"
            className="w-[80%] max-w-lg object-contain opacity-15 animate-fade-in"
            style={{ filter: "invert(1)" }}
          />
        </div>

        {/* Content — left side */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full">
          <div
            className="max-w-xl animate-fade-in-up opacity-0-init"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <h1
              className="font-oswald font-bold text-brand-white leading-none mb-4"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", letterSpacing: "0.04em" }}
            >
              МЕСТНЫЕ
            </h1>
            <p
              className="font-ibm text-brand-white/50 font-light mb-10"
              style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)", letterSpacing: "0.08em" }}
            >
              Уникальный бренд из России
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setPage("catalog")}
                className="font-oswald tracking-widest text-sm bg-brand-white text-brand-black px-8 py-3 hover:bg-brand-red hover:text-white transition-all duration-300"
              >
                МЕСТНЫЕ
              </button>
              <button
                onClick={() => setPage("about")}
                className="font-oswald tracking-widest text-sm border border-white/30 text-brand-white px-8 py-3 hover:border-brand-white hover:bg-brand-white/10 transition-all duration-300"
              >
                ИЗ КОРЕИ
              </button>
            </div>
          </div>
        </div>

        {/* Bottom nav bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="flex items-center justify-between">
              {links.map((l, i) => (
                <button
                  key={l.page}
                  onClick={() => setPage(l.page)}
                  className="flex-1 font-oswald text-xs tracking-[0.25em] text-brand-white/40 hover:text-brand-white py-5 text-center transition-colors duration-200 border-r border-white/10 last:border-r-0 hover:bg-white/5"
                  style={{ animationDelay: `${0.4 + i * 0.06}s` }}
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => setPage("cart")}
                className="relative flex items-center justify-center py-5 px-6 text-brand-white/40 hover:text-brand-white transition-colors border-l border-white/10 hover:bg-white/5"
              >
                <Icon name="ShoppingBag" size={16} />
                {cartCount > 0 && (
                  <span className="absolute top-3 right-3 w-3.5 h-3.5 bg-brand-red text-white text-[9px] font-oswald flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
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
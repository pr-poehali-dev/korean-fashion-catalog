import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Page } from "@/App";

interface NavbarProps {
  page: Page;
  setPage: (p: Page) => void;
  cartCount: number;
}

const links: { label: string; page: Page }[] = [
  { label: "ГЛАВНАЯ", page: "home" },
  { label: "КАТАЛОГ", page: "catalog" },
  { label: "О БРЕНДЕ", page: "about" },
  { label: "БЛОГ", page: "blog" },
  { label: "КОНТАКТЫ", page: "contacts" },
];

export default function Navbar({ page, setPage, cartCount }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top bar — only on non-home pages */}
      {page !== "home" && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-sm border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
            <button
              onClick={() => setPage("home")}
              className="font-oswald text-xl font-bold tracking-widest text-brand-white hover:text-brand-red transition-colors duration-200"
            >
              МЕСТНЫЕ<span className="text-brand-red">.</span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {links.map(l => (
                <button
                  key={l.page}
                  onClick={() => setPage(l.page)}
                  className={`font-oswald text-xs tracking-widest hover-line transition-colors duration-200 ${
                    page === l.page ? "text-brand-red" : "text-brand-white/60 hover:text-brand-white"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setPage("cart")}
                className="relative p-2 text-brand-white/60 hover:text-brand-white transition-colors"
              >
                <Icon name="ShoppingBag" size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-red text-white text-[10px] font-oswald flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2 text-brand-white/60 hover:text-brand-white transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <Icon name={menuOpen ? "X" : "Menu"} size={18} />
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-brand-black border-t border-white/5 px-6 pb-6 pt-4 flex flex-col gap-4 animate-fade-in">
              {links.map(l => (
                <button
                  key={l.page}
                  onClick={() => { setPage(l.page); setMenuOpen(false); }}
                  className={`font-oswald text-base tracking-widest text-left ${
                    page === l.page ? "text-brand-red" : "text-brand-white/60"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </nav>
      )}
    </>
  );
}
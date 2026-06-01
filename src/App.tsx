import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import CatalogPage from "./components/pages/CatalogPage";
import AboutPage from "./components/pages/AboutPage";
import ContactsPage from "./components/pages/ContactsPage";
import CartPage from "./components/pages/CartPage";
import BlogPage from "./components/pages/BlogPage";

export type Page = "home" | "catalog" | "about" | "contacts" | "cart" | "blog";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  size: string;
  image: string;
  qty: number;
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "qty">) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id && c.size === item.size);
      if (existing) return prev.map(c => c.id === item.id && c.size === item.size ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id: number, size: string) => {
    setCart(prev => prev.filter(c => !(c.id === id && c.size === size)));
  };

  const cartCount = cart.reduce((s, c) => s + c.qty, 0);

  return (
    <TooltipProvider>
      <Toaster />
      <div className="min-h-screen bg-brand-black text-brand-white">
        <Navbar page={page} setPage={setPage} cartCount={cartCount} />
        {page === "home"     && <HomePage setPage={setPage} addToCart={addToCart} cartCount={cartCount} />}
        {page === "catalog"  && <CatalogPage addToCart={addToCart} />}
        {page === "about"    && <AboutPage />}
        {page === "contacts" && <ContactsPage />}
        {page === "cart"     && <CartPage cart={cart} removeFromCart={removeFromCart} />}
        {page === "blog"     && <BlogPage />}
      </div>
    </TooltipProvider>
  );
}
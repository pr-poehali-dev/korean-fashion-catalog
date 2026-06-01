import { useState } from "react";
import { products, categories, reviews, Product } from "@/data/products";
import { CartItem } from "@/App";
import ProductCard from "@/components/ProductCard";
import StarRating from "@/components/StarRating";
import Icon from "@/components/ui/icon";

interface CatalogPageProps {
  addToCart: (item: Omit<CartItem, "qty">) => void;
}

export default function CatalogPage({ addToCart }: CatalogPageProps) {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewAuthor, setReviewAuthor] = useState("");
  const [localReviews, setLocalReviews] = useState(reviews);
  const [reviewSent, setReviewSent] = useState(false);

  const filtered = activeCategory === "Все" ? products : products.filter(p => p.category === activeCategory);
  const productReviews = selectedProduct ? localReviews.filter(r => r.productId === selectedProduct.id) : [];

  const submitReview = () => {
    if (!reviewText.trim() || !reviewAuthor.trim() || !selectedProduct) return;
    setLocalReviews(prev => [...prev, {
      id: Date.now(),
      productId: selectedProduct.id,
      author: reviewAuthor,
      rating: reviewRating,
      text: reviewText,
      date: "1 июня 2026",
    }]);
    setReviewText("");
    setReviewAuthor("");
    setReviewSent(true);
    setTimeout(() => setReviewSent(false), 3000);
  };

  return (
    <main className="pt-16 min-h-screen">
      {/* Product modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-brand-black/95 overflow-y-auto animate-fade-in">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <button
              onClick={() => setSelectedProduct(null)}
              className="flex items-center gap-2 text-brand-white/50 hover:text-brand-white font-oswald text-sm tracking-widest mb-8 transition-colors"
            >
              <Icon name="ArrowLeft" size={16} /> НАЗАД В КАТАЛОГ
            </button>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden bg-[#111]">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center">
                <p className="font-oswald text-brand-red text-xs tracking-[0.3em] mb-2">{selectedProduct.category}</p>
                <h2 className="font-oswald text-4xl font-bold text-brand-white mb-4">{selectedProduct.name}</h2>
                <div className="flex items-center gap-3 mb-6">
                  <StarRating rating={selectedProduct.rating} size={18} />
                  <span className="font-ibm text-sm text-brand-gray">{selectedProduct.rating} ({selectedProduct.reviewCount} отзывов)</span>
                </div>
                <p className="font-ibm text-brand-white/60 leading-relaxed mb-6">{selectedProduct.description}</p>
                <p className="font-oswald text-3xl text-brand-white mb-6">{selectedProduct.price.toLocaleString()} ₽</p>

                {/* Sizes */}
                <div className="mb-6">
                  <p className="font-oswald text-xs tracking-widest text-brand-gray mb-3">РАЗМЕР</p>
                  <div className="flex gap-2 flex-wrap">
                    {selectedProduct.sizes.map(s => (
                      <button key={s} className="font-oswald text-sm px-4 py-2 border border-white/20 text-white/70 hover:border-brand-red hover:text-brand-red transition-colors">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => addToCart({ id: selectedProduct.id, name: selectedProduct.name, price: selectedProduct.price, size: selectedProduct.sizes[0], image: selectedProduct.image })}
                  className="font-oswald tracking-widest text-sm bg-brand-red text-white py-4 hover:bg-brand-white hover:text-brand-black transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Icon name="ShoppingBag" size={16} /> В КОРЗИНУ
                </button>
              </div>
            </div>

            {/* Reviews section */}
            <div className="border-t border-white/5 pt-12">
              <h3 className="font-oswald text-2xl font-bold mb-8 text-brand-white">ОТЗЫВЫ</h3>

              {/* Reviews list */}
              {productReviews.length === 0 ? (
                <p className="font-ibm text-brand-gray mb-8">Пока нет отзывов. Будьте первым!</p>
              ) : (
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {productReviews.map(r => (
                    <div key={r.id} className="bg-[#111] p-5 border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-oswald text-sm text-brand-white tracking-wide">{r.author}</span>
                        <span className="font-ibm text-xs text-brand-gray">{r.date}</span>
                      </div>
                      <StarRating rating={r.rating} size={14} />
                      <p className="font-ibm text-brand-white/70 text-sm mt-2 leading-relaxed">{r.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Add review form */}
              <div className="bg-[#0f0f0f] border border-white/5 p-6">
                <h4 className="font-oswald text-lg tracking-wide mb-5 text-brand-white">ОСТАВИТЬ ОТЗЫВ</h4>
                <div className="mb-4">
                  <p className="font-oswald text-xs tracking-widest text-brand-gray mb-2">ОЦЕНКА</p>
                  <StarRating rating={reviewRating} size={24} interactive onRate={setReviewRating} />
                </div>
                <input
                  className="w-full bg-[#1a1a1a] border border-white/10 text-brand-white font-ibm text-sm px-4 py-3 mb-3 focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-gray/50"
                  placeholder="Ваше имя"
                  value={reviewAuthor}
                  onChange={e => setReviewAuthor(e.target.value)}
                />
                <textarea
                  className="w-full bg-[#1a1a1a] border border-white/10 text-brand-white font-ibm text-sm px-4 py-3 mb-4 focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-gray/50 resize-none h-24"
                  placeholder="Ваш отзыв..."
                  value={reviewText}
                  onChange={e => setReviewText(e.target.value)}
                />
                <button
                  onClick={submitReview}
                  className="font-oswald tracking-widest text-sm bg-brand-red text-white px-8 py-3 hover:bg-brand-white hover:text-brand-black transition-all duration-300"
                >
                  {reviewSent ? "ОТЗЫВ ОТПРАВЛЕН!" : "ОТПРАВИТЬ ОТЗЫВ"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Catalog header */}
      <div className="border-b border-white/5 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-oswald text-5xl font-bold text-brand-white mb-8">КАТАЛОГ</h1>
          {/* Category filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-oswald text-xs tracking-widest px-4 py-2 transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-brand-red text-white"
                    : "border border-white/20 text-brand-white/50 hover:border-white/50 hover:text-brand-white"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="font-ibm text-xs text-brand-gray mb-8">{filtered.length} товаров</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="animate-fade-in-up opacity-0-init"
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: "forwards" }}
            >
              <ProductCard
                product={product}
                addToCart={addToCart}
                onClick={() => setSelectedProduct(product)}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

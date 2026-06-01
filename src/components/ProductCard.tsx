import { useState } from "react";
import { Product } from "@/data/products";
import { CartItem } from "@/App";
import StarRating from "./StarRating";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  product: Product;
  addToCart: (item: Omit<CartItem, "qty">) => void;
  onClick?: () => void;
}

export default function ProductCard({ product, addToCart, onClick }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const allImages = product.images?.length ? product.images : [product.image];

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    const size = selectedSize || product.sizes[0];
    addToCart({ id: product.id, name: product.name, price: product.price, size, image: allImages[0] });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      className="group cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-[#111] aspect-[3/4] mb-4">
        <img
          src={allImages[activeImg]}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
        {/* Dot nav for multiple images */}
        {allImages.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {allImages.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.stopPropagation(); setActiveImg(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === activeImg ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        )}
        {/* Prev/Next arrows on hover */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={e => { e.stopPropagation(); setActiveImg(prev => (prev - 1 + allImages.length) % allImages.length); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/80"
            >
              <Icon name="ChevronLeft" size={14} />
            </button>
            <button
              onClick={e => { e.stopPropagation(); setActiveImg(prev => (prev + 1) % allImages.length); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/80"
            >
              <Icon name="ChevronRight" size={14} />
            </button>
          </>
        )}
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-brand-red text-white font-oswald text-xs px-2 py-0.5 tracking-widest">НОВОЕ</span>
          )}
          {product.isBest && (
            <span className="bg-white text-brand-black font-oswald text-xs px-2 py-0.5 tracking-widest">ХИТ</span>
          )}
        </div>
        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-brand-black/90 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-2 mb-2 flex-wrap">
            {product.sizes.map(s => (
              <button
                key={s}
                onClick={e => { e.stopPropagation(); setSelectedSize(s); }}
                className={`text-xs font-oswald px-2 py-1 border transition-colors ${
                  selectedSize === s
                    ? "border-brand-red bg-brand-red text-white"
                    : "border-white/30 text-white/60 hover:border-white/60"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <button
            onClick={handleAdd}
            className="w-full bg-brand-white text-brand-black font-oswald text-sm py-2 tracking-widest hover:bg-brand-red hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
          >
            {added ? (
              <><Icon name="Check" size={14} /> ДОБАВЛЕНО</>
            ) : (
              <><Icon name="ShoppingBag" size={14} /> В КОРЗИНУ</>
            )}
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        <p className="text-xs text-brand-gray font-oswald tracking-widest mb-1">{product.category}</p>
        <h3 className="font-oswald text-base font-medium tracking-wide mb-1 group-hover:text-brand-red transition-colors">{product.name}</h3>
        {product.color && (
          <p className="text-xs text-brand-white/40 font-ibm mb-1">Цвет: {product.color}</p>
        )}
        <div className="flex items-center justify-between">
          <span className="font-ibm text-sm text-brand-white">{product.price.toLocaleString()} ₽</span>
          <div className="flex items-center gap-1">
            <StarRating rating={product.rating} size={12} />
            <span className="text-xs text-brand-gray">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
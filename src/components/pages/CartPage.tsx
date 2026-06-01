import { CartItem, Page } from "@/App";
import Icon from "@/components/ui/icon";

interface CartPageProps {
  cart: CartItem[];
  removeFromCart: (id: number, size: string) => void;
}

export default function CartPage({ cart, removeFromCart }: CartPageProps) {
  const total = cart.reduce((s, c) => s + c.price * c.qty, 0);

  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="font-oswald text-brand-red text-xs tracking-[0.3em] mb-3">ЗАКАЗ</p>
        <h1 className="font-oswald text-5xl font-bold text-brand-white mb-12">КОРЗИНА</h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 border border-white/10 flex items-center justify-center mb-6 text-brand-white/20">
              <Icon name="ShoppingBag" size={28} />
            </div>
            <h3 className="font-oswald text-2xl text-brand-white/30 mb-2">КОРЗИНА ПУСТА</h3>
            <p className="font-ibm text-sm text-brand-gray">Добавьте товары из каталога</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map(item => (
                <div key={`${item.id}-${item.size}`} className="flex gap-5 bg-[#0f0f0f] border border-white/5 p-4 group">
                  <div className="w-20 h-24 overflow-hidden flex-shrink-0 bg-[#111]">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-oswald text-base font-medium text-brand-white tracking-wide">{item.name}</p>
                        <p className="font-oswald text-xs text-brand-gray tracking-widest mt-0.5">РАЗМЕР: {item.size}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-brand-white/20 hover:text-brand-red transition-colors p-1"
                      >
                        <Icon name="X" size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-oswald text-xs text-brand-gray tracking-widest">× {item.qty}</span>
                      <span className="font-ibm text-sm text-brand-white">{(item.price * item.qty).toLocaleString()} ₽</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#0f0f0f] border border-white/5 p-6 sticky top-24">
                <h3 className="font-oswald text-xl font-bold text-brand-white mb-6 tracking-wide">ИТОГО</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="font-ibm text-sm text-brand-gray">Товары ({cart.reduce((s, c) => s + c.qty, 0)} шт.)</span>
                    <span className="font-ibm text-sm text-brand-white">{total.toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-ibm text-sm text-brand-gray">Доставка</span>
                    <span className="font-ibm text-sm text-brand-white">Бесплатно</span>
                  </div>
                </div>
                <div className="border-t border-white/5 pt-4 mb-6 flex justify-between">
                  <span className="font-oswald text-lg text-brand-white tracking-wide">К ОПЛАТЕ</span>
                  <span className="font-oswald text-lg text-brand-red">{total.toLocaleString()} ₽</span>
                </div>
                <button className="w-full font-oswald tracking-widest text-sm bg-brand-red text-white py-4 hover:bg-brand-white hover:text-brand-black transition-all duration-300 mb-3">
                  ОФОРМИТЬ ЗАКАЗ
                </button>
                <p className="font-ibm text-xs text-brand-gray text-center">
                  Безопасная оплата. Возврат 14 дней.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

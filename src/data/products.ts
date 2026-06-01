export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  sizes: string[];
  isNew?: boolean;
  isBest?: boolean;
  description: string;
  rating: number;
  reviewCount: number;
}

export interface Review {
  id: number;
  productId: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "HOODIE SEOUL 001",
    price: 7900,
    category: "Худи",
    image: "https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/files/019ed30d-7d06-40c4-88fa-a6906d490e12.jpg",
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
    description: "Оверсайз-худи из тяжёлого хлопка. Минималистичный дизайн, максимальный комфорт.",
    rating: 4.8,
    reviewCount: 24,
  },
  {
    id: 2,
    name: "TEE LOCAL 002",
    price: 3900,
    category: "Футболки",
    image: "https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/files/446a9f3a-5cfc-47a0-bb63-ce3cfc89dc7b.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    isBest: true,
    description: "Базовая футболка с фирменным принтом. 100% органический хлопок.",
    rating: 4.6,
    reviewCount: 41,
  },
  {
    id: 3,
    name: "JACKET KR-03",
    price: 14900,
    category: "Куртки",
    image: "https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/files/779b8bb9-e39a-448f-b6aa-5cdeb0018e5f.jpg",
    sizes: ["S", "M", "L"],
    isNew: true,
    description: "Лёгкая куртка-ветровка. Идеальна для межсезонья.",
    rating: 4.9,
    reviewCount: 17,
  },
  {
    id: 4,
    name: "PANTS WIDE 004",
    price: 6900,
    category: "Брюки",
    image: "https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/files/446a9f3a-5cfc-47a0-bb63-ce3cfc89dc7b.jpg",
    sizes: ["S", "M", "L", "XL"],
    description: "Широкие брюки с эластичным поясом. Свобода движения.",
    rating: 4.5,
    reviewCount: 29,
  },
  {
    id: 5,
    name: "LONGSLEEVE GRID",
    price: 4900,
    category: "Лонгсливы",
    image: "https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/files/019ed30d-7d06-40c4-88fa-a6906d490e12.jpg",
    sizes: ["S", "M", "L"],
    isBest: true,
    description: "Лонгслив с геометрическим принтом. Тонкий, но тёплый.",
    rating: 4.7,
    reviewCount: 33,
  },
  {
    id: 6,
    name: "CAP МЕСТНЫЕ",
    price: 2900,
    category: "Аксессуары",
    image: "https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/files/779b8bb9-e39a-448f-b6aa-5cdeb0018e5f.jpg",
    sizes: ["ONE SIZE"],
    description: "Кепка с вышитым лого. Строгий минимализм.",
    rating: 4.4,
    reviewCount: 58,
  },
];

export const reviews: Review[] = [
  { id: 1, productId: 1, author: "Артём К.", rating: 5, text: "Качество огонь, носится отлично. Брал L — сидит как надо, оверсайз без перебора.", date: "15 мая 2026" },
  { id: 2, productId: 1, author: "Маша Д.", rating: 5, text: "Люблю этот бренд! Уже третья вещь — не разочаровали. Ткань плотная, не теряет форму.", date: "10 мая 2026" },
  { id: 3, productId: 1, author: "Дима Р.", rating: 4, text: "Всё хорошо, только доставка чуть задержалась. Вещь супер.", date: "3 мая 2026" },
  { id: 4, productId: 2, author: "Лена С.", rating: 5, text: "Идеальная базовая футболка. Не вытягивается, не линяет.", date: "20 мая 2026" },
  { id: 5, productId: 2, author: "Никита П.", rating: 4, text: "Хороший крой. Размер соответствует таблице.", date: "18 мая 2026" },
  { id: 6, productId: 3, author: "Саша В.", rating: 5, text: "Куртка огонь! Лёгкая, стильная. Уже несколько комплиментов получил.", date: "22 мая 2026" },
];

export const categories = ["Все", "Худи", "Футболки", "Куртки", "Брюки", "Лонгсливы", "Аксессуары"];

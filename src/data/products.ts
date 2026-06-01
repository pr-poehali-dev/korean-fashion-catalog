export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  images?: string[];
  color?: string;
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
    name: "Женское платье МЕСТНЫЕ",
    price: 6500,
    category: "Платья",
    color: "Синий",
    image: "https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/bucket/dd40c7eb-4d18-4c3f-b9a2-eb810b4d1aa8.jpg",
    images: [
      "https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/bucket/dd40c7eb-4d18-4c3f-b9a2-eb810b4d1aa8.jpg",
      "https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/bucket/f6d3d233-347b-46da-acaa-2f544f8bc549.jpg",
      "https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/bucket/8379899e-04e2-45fc-b834-3ebd2d2f6cae.jpg",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    isNew: true,
    description: "Элегантное женское платье с длинным рукавом. Приталенный силуэт, расклешённый подол. Фирменная нашивка МЕСТНЫЕ на рукаве.",
    rating: 5.0,
    reviewCount: 1,
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

export const categories = ["Все", "Платья"];
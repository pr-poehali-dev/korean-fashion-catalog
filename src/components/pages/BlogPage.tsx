import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  image: string;
  readTime: string;
  body: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "КАК МЫ СОЗДАВАЛИ ПЕРВУЮ КОЛЛЕКЦИЮ",
    excerpt: "История о том, как идея на кухне стала реальной коллекцией одежды, которую носят в двух странах.",
    date: "28 мая 2026",
    tag: "ИСТОРИЯ",
    readTime: "5 мин",
    image: "https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/files/779b8bb9-e39a-448f-b6aa-5cdeb0018e5f.jpg",
    body: "Всё началось в 2019 году в небольшой квартире в Сеуле. Нас было четверо, и мы хотели одно: одежду, которая говорила бы о том, кто мы есть. Не брендовые лейблы, не западные копии — что-то своё.\n\nПервые три месяца ушли на поиск производителя. Мы объехали весь Dongdaemun и нашли мастера, который понял нашу идею. Первый тираж — 50 штук. Раскупили за неделю.",
  },
  {
    id: 2,
    title: "STREETWEAR И КОРЕЙСКАЯ ИДЕНТИЧНОСТЬ",
    excerpt: "Разбираем, как уличная мода стала инструментом культурного самовыражения для молодёжи Кореи.",
    date: "20 мая 2026",
    tag: "КУЛЬТУРА",
    readTime: "7 мин",
    image: "https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/files/446a9f3a-5cfc-47a0-bb63-ce3cfc89dc7b.jpg",
    body: "Корейский streetwear — это не просто одежда. Это язык. Способ заявить о себе в мегаполисе, где все одеваются по тренду, но хотят выделяться.\n\nМы изучили, как менялась уличная мода Сеула с 2000-х до наших дней, и поняли: аутентичность важнее трендов. Поэтому МЕСТНЫЕ не гонится за хайпом — мы создаём вещи, которые не устаревают.",
  },
  {
    id: 3,
    title: "ГАЙД ПО УХОДУ ЗА ОДЕЖДОЙ МЕСТНЫЕ",
    excerpt: "Как правильно стирать, хранить и носить наши вещи, чтобы они служили годами.",
    date: "10 мая 2026",
    tag: "СОВЕТЫ",
    readTime: "3 мин",
    image: "https://cdn.poehali.dev/projects/390a4b91-3cbc-43c6-bf2b-263cea2dee2d/files/019ed30d-7d06-40c4-88fa-a6906d490e12.jpg",
    body: "Правильный уход продлевает жизнь одежды в разы. Вот наши рекомендации:\n\n1. Стирайте при 30°C — не выше.\n2. Не используйте отбеливатель.\n3. Сушите в развёрнутом виде, не на вешалке.\n4. Гладьте через влажную ткань или паром.\n\nСледуя этим простым правилам, ваши вещи МЕСТНЫЕ прослужат 5+ лет без потери вида.",
  },
];

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  if (selectedPost) {
    return (
      <main className="pt-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-brand-white/50 hover:text-brand-white font-oswald text-sm tracking-widest mb-8 transition-colors"
          >
            <Icon name="ArrowLeft" size={16} /> НАЗАД В БЛОГ
          </button>

          <div className="aspect-[16/7] overflow-hidden mb-8">
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="font-oswald text-xs tracking-[0.3em] text-brand-red">{selectedPost.tag}</span>
            <span className="text-brand-white/20">|</span>
            <span className="font-ibm text-xs text-brand-gray">{selectedPost.date}</span>
            <span className="text-brand-white/20">|</span>
            <span className="font-ibm text-xs text-brand-gray">{selectedPost.readTime} чтения</span>
          </div>

          <h1 className="font-oswald text-4xl md:text-5xl font-bold text-brand-white mb-8 leading-tight">{selectedPost.title}</h1>

          <div className="font-ibm text-brand-white/70 leading-relaxed text-base font-light whitespace-pre-line">
            {selectedPost.body}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="font-oswald text-brand-red text-xs tracking-[0.3em] mb-3">ЖУРНАЛ</p>
        <h1 className="font-oswald text-5xl font-bold text-brand-white mb-12">БЛОГ</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className="group cursor-pointer animate-fade-in-up opacity-0-init"
              style={{ animationDelay: `${i * 0.12}s`, animationFillMode: "forwards" }}
              onClick={() => setSelectedPost(post)}
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#111] mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-oswald text-xs tracking-[0.3em] text-brand-red">{post.tag}</span>
                <span className="font-ibm text-xs text-brand-gray">{post.date}</span>
                <span className="font-ibm text-xs text-brand-gray">{post.readTime}</span>
              </div>
              <h2 className="font-oswald text-xl font-bold text-brand-white mb-2 leading-tight group-hover:text-brand-red transition-colors">
                {post.title}
              </h2>
              <p className="font-ibm text-sm text-brand-white/50 leading-relaxed font-light line-clamp-2">
                {post.excerpt}
              </p>
              <button className="flex items-center gap-2 font-oswald text-xs tracking-widest text-brand-white/40 hover:text-brand-red transition-colors mt-4">
                ЧИТАТЬ <Icon name="ArrowRight" size={12} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "products", label: "О продукции" },
  { id: "catalog", label: "Каталог" },
  { id: "order", label: "Как заказать" },
  { id: "recipes", label: "Рецепты" },
  { id: "about", label: "О компании" },
  { id: "contacts", label: "Контакты" },
];

const CATALOG = [
  {
    name: "Брусника с мятой",
    type: "Ягодный концентрат",
    volume: "500 мл",
    price: "490 ₽",
    emoji: "🫐",
    color: "bg-[hsl(350,30%,92%)]",
    desc: "Северная брусника с освежающей ноткой перечной мяты. 1:20 с водой.",
  },
  {
    name: "Шиповник & имбирь",
    type: "Согревающий концентрат",
    volume: "500 мл",
    price: "520 ₽",
    emoji: "🌹",
    color: "bg-[hsl(15,40%,92%)]",
    desc: "Богатый витамином C шиповник с тёплым имбирём. Идеален горячим.",
  },
  {
    name: "Облепиха & апельсин",
    type: "Витаминный концентрат",
    volume: "500 мл",
    price: "540 ₽",
    emoji: "🍊",
    color: "bg-[hsl(38,50%,92%)]",
    desc: "Солнечная облепиха с цедрой апельсина. Зарядит энергией с утра.",
  },
  {
    name: "Черника & лаванда",
    type: "Ягодный концентрат",
    volume: "500 мл",
    price: "560 ₽",
    emoji: "🫐",
    color: "bg-[hsl(260,25%,93%)]",
    desc: "Дикая черника с нежным ароматом лаванды. Расслабляет и успокаивает.",
  },
  {
    name: "Смородина & базилик",
    type: "Ягодный концентрат",
    volume: "500 мл",
    price: "490 ₽",
    emoji: "🍇",
    color: "bg-[hsl(280,20%,92%)]",
    desc: "Сочная чёрная смородина с пряным базиликом — неожиданное сочетание.",
  },
  {
    name: "Рябина & корица",
    type: "Осенний концентрат",
    volume: "500 мл",
    price: "510 ₽",
    emoji: "🍂",
    color: "bg-[hsl(20,45%,92%)]",
    desc: "Терпкая рябина со сладкой корицей. Напоминает золотую осень.",
  },
];

const RECIPES = [
  {
    title: "Летний лимонад",
    concentrate: "Брусника с мятой",
    emoji: "🍋",
    time: "5 мин",
    steps: [
      "2 ст.л. концентрата в стакан",
      "Добавить 200 мл минеральной воды",
      "Лёд, долька лимона, веточка мяты",
    ],
  },
  {
    title: "Зимний глинтвейн",
    concentrate: "Шиповник & имбирь",
    emoji: "☕",
    time: "10 мин",
    steps: [
      "3 ст.л. концентрата",
      "Нагреть с 300 мл воды до 70°C",
      "Добавить гвоздику и кардамон",
    ],
  },
  {
    title: "Смузи с утра",
    concentrate: "Облепиха & апельсин",
    emoji: "🥤",
    time: "3 мин",
    steps: [
      "2 ст.л. концентрата в блендер",
      "Банан, 150 мл йогурта",
      "Взбить и подавать сразу",
    ],
  },
  {
    title: "Вечерний чай",
    concentrate: "Черника & лаванда",
    emoji: "🫖",
    time: "5 мин",
    steps: [
      "1 ст.л. концентрата в чашку",
      "Заварить зелёным чаем",
      "Мёд по вкусу, лепестки лаванды",
    ],
  },
];

const STEPS = [
  { icon: "Phone", title: "Позвоните или напишите", desc: "Выберите удобный способ связи. Наш менеджер поможет с выбором." },
  { icon: "ShoppingBasket", title: "Оформите заказ", desc: "Выберите концентраты из каталога. Минимальный заказ — 3 бутылки." },
  { icon: "Truck", title: "Получите доставку", desc: "Доставляем по всей России за 3–7 дней. Самовывоз из Москвы." },
  { icon: "Leaf", title: "Наслаждайтесь", desc: "Разведите с водой по инструкции и откройте вкус живой природы." },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeRecipe, setActiveRecipe] = useState(0);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(36,28%,97%)" }}>
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60" style={{ backgroundColor: "hsl(36,28%,97%)", backdropFilter: "blur(8px)" }}>
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <span className="text-2xl">🌿</span>
            <span className="font-display text-2xl font-semibold" style={{ color: "hsl(24,20%,18%)" }}>Живица</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link"
                style={{ color: activeSection === item.id ? "hsl(15,55%,42%)" : undefined }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: "hsl(24,20%,18%)" }}
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border/40 px-4 py-4 flex flex-col gap-3" style={{ backgroundColor: "hsl(36,28%,97%)" }}>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left nav-link py-1"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: "hsl(15,55%,60%)" }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl" style={{ background: "hsl(350,48%,50%)" }} />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 text-sm font-body px-3 py-1 rounded-full mb-6 animate-fade-up" style={{ backgroundColor: "hsl(15,40%,92%)", color: "hsl(15,55%,42%)" }}>
              <span>🌿</span> Натуральные концентраты без консервантов
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-semibold leading-tight mb-6 animate-fade-up delay-100" style={{ color: "hsl(24,20%,18%)" }}>
              Живой вкус<br />
              <em className="not-italic" style={{ color: "hsl(15,55%,42%)" }}>природы</em><br />
              в каждом стакане
            </h1>
            <p className="font-body text-lg leading-relaxed mb-8 animate-fade-up delay-200" style={{ color: "hsl(24,15%,45%)" }}>
              Концентраты из дикорастущих ягод и трав Сибири. Разбавьте водой — получите напиток, как будто собранный руками в лесу.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up delay-300">
              <button
                onClick={() => scrollTo("catalog")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: "hsl(15,45%,35%)", color: "hsl(36,28%,97%)" }}
              >
                Смотреть каталог
                <Icon name="ArrowRight" size={18} />
              </button>
              <button
                onClick={() => scrollTo("recipes")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-medium border transition-all hover:bg-[hsl(30,35%,88%)]"
                style={{ borderColor: "hsl(30,20%,82%)", color: "hsl(24,20%,18%)" }}
              >
                Рецепты напитков
              </button>
            </div>

            <div className="mt-12 flex gap-8 animate-fade-up delay-400">
              {[["15+", "сортов"], ["100%", "натурально"], ["1:20", "разведение"]].map(([val, label]) => (
                <div key={label}>
                  <div className="font-display text-3xl font-semibold" style={{ color: "hsl(15,55%,42%)" }}>{val}</div>
                  <div className="font-body text-sm" style={{ color: "hsl(24,15%,45%)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up delay-300">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/32ce1ba6-2d08-4502-a6d8-df9c23186132/files/b25a578e-185a-4784-a297-efe2df2f784e.jpg"
                alt="Натуральные концентраты Живица"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(40,20,10,0.4) 0%, transparent 50%)" }} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="font-display text-2xl">🍓</div>
              <div className="font-body text-xs mt-1" style={{ color: "hsl(24,15%,45%)" }}>Собрано вручную</div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-organic mx-8" />

      {/* О ПРОДУКЦИИ */}
      <section id="products" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-sm uppercase tracking-widest" style={{ color: "hsl(15,55%,42%)" }}>О продукции</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2" style={{ color: "hsl(24,20%,18%)" }}>Почему наши концентраты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "Leaf", title: "Без химии", desc: "Ни консервантов, ни ароматизаторов, ни красителей. Только ягоды, вода и немного сахара для сохранения." },
              { icon: "Droplets", title: "Максимум вкуса", desc: "Технология щадящего уваривания сохраняет витамины и ароматику. Концентрация 1:20 — из 500 мл получается 10 литров напитка." },
              { icon: "Mountain", title: "Дикорастущие ягоды", desc: "Собираем в экологически чистых районах Сибири и Алтая. Без пестицидов и агрохимии — как это было всегда." },
              { icon: "ThermometerSun", title: "Горячее и холодное", desc: "Разводите с холодной водой для освежающего лимонада или с горячей для согревающего напитка и чая." },
              { icon: "Package", title: "Долгое хранение", desc: "Стеклянная тара и натуральные антиоксиданты — срок хранения 24 месяца до вскрытия, 30 дней в холодильнике." },
              { icon: "Heart", title: "Для всей семьи", desc: "Подходит детям от 3 лет. Есть варианты без сахара для диабетиков и тех, кто следит за весом." },
            ].map((item) => (
              <div
                key={item.title}
                className="card-hover rounded-2xl p-6 border"
                style={{ backgroundColor: "hsl(36,25%,96%)", borderColor: "hsl(30,20%,88%)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "hsl(15,40%,92%)" }}>
                  <Icon name={item.icon} size={20} style={{ color: "hsl(15,55%,42%)" }} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "hsl(24,20%,18%)" }}>{item.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(24,15%,45%)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider-organic mx-8" />

      {/* КАТАЛОГ */}
      <section id="catalog" className="py-16 md:py-24" style={{ backgroundColor: "hsl(30,20%,93%)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-sm uppercase tracking-widest" style={{ color: "hsl(15,55%,42%)" }}>Каталог</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2" style={{ color: "hsl(24,20%,18%)" }}>Наши концентраты</h2>
            <p className="font-body mt-3 max-w-xl mx-auto" style={{ color: "hsl(24,15%,45%)" }}>
              Каждый вкус — это отдельная история из леса. Выбирайте по настроению.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATALOG.map((item) => (
              <div key={item.name} className={`card-hover rounded-2xl overflow-hidden border border-border/40 ${item.color}`}>
                <div className="p-6">
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <div className="font-body text-xs uppercase tracking-wide mb-1" style={{ color: "hsl(24,15%,45%)" }}>{item.type}</div>
                  <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: "hsl(24,20%,18%)" }}>{item.name}</h3>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "hsl(24,15%,45%)" }}>{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-display text-2xl font-semibold" style={{ color: "hsl(15,55%,42%)" }}>{item.price}</span>
                      <span className="font-body text-xs ml-1" style={{ color: "hsl(24,15%,45%)" }}>/ {item.volume}</span>
                    </div>
                    <button
                      onClick={() => scrollTo("order")}
                      className="inline-flex items-center gap-1 text-sm font-body font-medium hover:underline"
                      style={{ color: "hsl(15,55%,42%)" }}
                    >
                      Заказать <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="font-body text-sm" style={{ color: "hsl(24,15%,45%)" }}>Это только часть ассортимента. Уточните полный каталог у менеджера.</p>
          </div>
        </div>
      </section>

      <hr className="divider-organic mx-8" />

      {/* КАК ЗАКАЗАТЬ */}
      <section id="order" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-sm uppercase tracking-widest" style={{ color: "hsl(15,55%,42%)" }}>Как заказать</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2" style={{ color: "hsl(24,20%,18%)" }}>Просто, как сбор ягод</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="relative inline-flex w-16 h-16 rounded-full items-center justify-center mb-4 mx-auto" style={{ backgroundColor: "hsl(15,40%,92%)" }}>
                  <Icon name={step.icon} size={26} style={{ color: "hsl(15,55%,42%)" }} />
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-body font-semibold" style={{ backgroundColor: "hsl(15,45%,35%)", color: "hsl(36,28%,97%)" }}>
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "hsl(24,20%,18%)" }}>{step.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(24,15%,45%)" }}>{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl p-8 md:p-12 relative overflow-hidden" style={{ backgroundColor: "hsl(15,45%,35%)" }}>
            <div className="absolute top-0 right-0 text-[200px] leading-none opacity-10 pointer-events-none select-none">🌿</div>
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold mb-3" style={{ color: "hsl(36,28%,97%)" }}>
                  Готовы попробовать?
                </h3>
                <p className="font-body leading-relaxed" style={{ color: "rgba(245,240,230,0.8)" }}>
                  Напишите нам или позвоните — поможем выбрать первый набор и расскажем об акциях для новых покупателей.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+78001234567"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-body font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: "hsl(38,80%,58%)", color: "hsl(24,20%,18%)" }}
                >
                  <Icon name="Phone" size={18} />
                  8 800 123-45-67
                </a>
                <a
                  href="https://t.me/zhivitsa"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-body font-medium border transition-all"
                  style={{ borderColor: "rgba(245,240,230,0.4)", color: "hsl(36,28%,97%)" }}
                >
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-organic mx-8" />

      {/* РЕЦЕПТЫ */}
      <section id="recipes" className="py-16 md:py-24" style={{ backgroundColor: "hsl(30,20%,93%)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-sm uppercase tracking-widest" style={{ color: "hsl(15,55%,42%)" }}>Рецепты</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2" style={{ color: "hsl(24,20%,18%)" }}>Как приготовить</h2>
            <p className="font-body mt-3" style={{ color: "hsl(24,15%,45%)" }}>Несколько идей для вдохновения. Всё готовится за несколько минут.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {RECIPES.map((r, i) => (
              <button
                key={r.title}
                onClick={() => setActiveRecipe(i)}
                className="text-left rounded-2xl p-4 transition-all font-body"
                style={{
                  backgroundColor: activeRecipe === i ? "hsl(15,45%,35%)" : "hsl(36,25%,96%)",
                  color: activeRecipe === i ? "hsl(36,28%,97%)" : "hsl(24,20%,18%)",
                  boxShadow: activeRecipe === i ? "0 4px 20px rgba(80,40,20,0.2)" : undefined,
                }}
              >
                <div className="text-3xl mb-2">{r.emoji}</div>
                <div className="font-semibold text-sm">{r.title}</div>
                <div className="text-xs mt-1" style={{ color: activeRecipe === i ? "rgba(245,240,230,0.7)" : "hsl(24,15%,45%)" }}>{r.concentrate}</div>
              </button>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden border" style={{ backgroundColor: "hsl(36,25%,96%)", borderColor: "hsl(30,20%,88%)" }}>
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10">
                <div className="text-5xl mb-4">{RECIPES[activeRecipe].emoji}</div>
                <h3 className="font-display text-3xl font-semibold mb-1" style={{ color: "hsl(24,20%,18%)" }}>{RECIPES[activeRecipe].title}</h3>
                <p className="font-body text-sm mb-6" style={{ color: "hsl(15,55%,42%)" }}>
                  Концентрат: {RECIPES[activeRecipe].concentrate} · {RECIPES[activeRecipe].time}
                </p>
                <div className="space-y-4">
                  {RECIPES[activeRecipe].steps.map((step, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-body font-semibold" style={{ backgroundColor: "hsl(15,45%,35%)", color: "hsl(36,28%,97%)" }}>
                        {i + 1}
                      </div>
                      <p className="font-body text-sm pt-1" style={{ color: "hsl(24,20%,18%)" }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[260px] md:min-h-0">
                <img
                  src="https://cdn.poehali.dev/projects/32ce1ba6-2d08-4502-a6d8-df9c23186132/files/f9c8a6be-cfd5-4696-8ecb-99028923f91b.jpg"
                  alt="Приготовление напитка"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-organic mx-8" />

      {/* ИНСТРУКЦИЯ */}
      <section id="instruction" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="font-body text-sm uppercase tracking-widest" style={{ color: "hsl(15,55%,42%)" }}>Инструкция</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2" style={{ color: "hsl(24,20%,18%)" }}>Как разводить</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Какое соотношение концентрата и воды?", a: "Стандартное разведение — 1:20 (1 часть концентрата на 20 частей воды). Это 50 мл на 1 литр напитка. Вы можете регулировать насыщенность по вкусу — от 1:15 до 1:30." },
              { q: "Можно ли разводить горячей водой?", a: "Да! Большинство концентратов отлично подходят для горячих напитков. Оптимальная температура — 70–80°C. Кипятком заливать не рекомендуется, чтобы сохранить витамины." },
              { q: "Сколько хранится после вскрытия?", a: "После вскрытия хранить в холодильнике не более 30 дней. В закрытом виде — до 24 месяцев при комнатной температуре в тёмном месте." },
              { q: "Можно ли добавлять в коктейли и смузи?", a: "Конечно! Концентраты прекрасно работают как основа для смузи, морсов, компотов, лимонадов и даже алкогольных коктейлей. В разделе рецептов есть идеи." },
              { q: "Подходит ли детям?", a: "Детям от 3 лет — да. Рекомендуем разводить 1:25 для более мягкого вкуса. Также есть линейка без сахара для детей со склонностью к аллергии." },
            ].map((item, i) => (
              <details key={i} className="group rounded-2xl border overflow-hidden" style={{ backgroundColor: "hsl(36,25%,96%)", borderColor: "hsl(30,20%,88%)" }}>
                <summary className="flex items-center justify-between p-5 cursor-pointer font-display text-lg font-medium list-none" style={{ color: "hsl(24,20%,18%)" }}>
                  {item.q}
                  <Icon name="ChevronDown" size={18} className="group-open:rotate-180 transition-transform flex-shrink-0 ml-3" style={{ color: "hsl(15,55%,42%)" }} />
                </summary>
                <div className="px-5 pb-5 font-body text-sm leading-relaxed border-t pt-4" style={{ color: "hsl(24,15%,45%)", borderColor: "hsl(30,20%,88%)" }}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider-organic mx-8" />

      {/* О КОМПАНИИ */}
      <section id="about" className="py-16 md:py-24" style={{ backgroundColor: "hsl(30,20%,93%)" }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-body text-sm uppercase tracking-widest" style={{ color: "hsl(15,55%,42%)" }}>О компании</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2 mb-6" style={{ color: "hsl(24,20%,18%)" }}>
                С 2012 года<br />мы несём вкус леса
              </h2>
              <p className="font-body leading-relaxed mb-5" style={{ color: "hsl(24,15%,45%)" }}>
                Живица началась с маленькой лаборатории в Томске. Основатели — семья потомственных сборщиков ягод, которые хотели поделиться вкусами сибирского леса со всей страной.
              </p>
              <p className="font-body leading-relaxed mb-8" style={{ color: "hsl(24,15%,45%)" }}>
                Сегодня мы работаем с более чем 40 семьями сборщиков в Томской, Новосибирской областях и на Алтае. У нас своё небольшое производство с лицензией Роспотребнадзора и два фирменных магазина в Москве.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[["2012", "год основания"], ["40+", "партнёров-сборщиков"], ["12 000+", "довольных клиентов"]].map(([val, label]) => (
                  <div key={label}>
                    <div className="font-display text-3xl font-semibold" style={{ color: "hsl(15,55%,42%)" }}>{val}</div>
                    <div className="font-body text-xs mt-1" style={{ color: "hsl(24,15%,45%)" }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl p-6 col-span-2" style={{ backgroundColor: "hsl(15,40%,92%)" }}>
                <div className="text-3xl mb-3">🌲</div>
                <h4 className="font-display text-xl font-semibold mb-2" style={{ color: "hsl(24,20%,18%)" }}>Наша миссия</h4>
                <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(24,15%,45%)" }}>
                  Вернуть людям вкус настоящих напитков. Без компромиссов с природой — ни в составе, ни в методе производства.
                </p>
              </div>
              {[
                { icon: "🏅", title: "Сертифицировано", text: "Продукция сертифицирована по ГОСТ. Все партии проходят лабораторный контроль." },
                { icon: "♻️", title: "Экоупаковка", text: "Стеклянные бутылки, бумажные этикетки, картонные коробки." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-5" style={{ backgroundColor: "hsl(36,25%,96%)" }}>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-display text-lg font-semibold mb-1" style={{ color: "hsl(24,20%,18%)" }}>{item.title}</h4>
                  <p className="font-body text-xs leading-relaxed" style={{ color: "hsl(24,15%,45%)" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-organic mx-8" />

      {/* КОНТАКТЫ */}
      <section id="contacts" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-sm uppercase tracking-widest" style={{ color: "hsl(15,55%,42%)" }}>Контакты</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2" style={{ color: "hsl(24,20%,18%)" }}>Свяжитесь с нами</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "Phone", title: "Телефон", lines: ["8 800 123-45-67", "Бесплатно по России"] },
              { icon: "Mail", title: "Email", lines: ["hello@zhivitsa.ru", "Ответим в течение дня"] },
              { icon: "MapPin", title: "Адрес", lines: ["Москва, ул. Арбат, 15", "Пн–Сб, 10:00–19:00"] },
            ].map((item) => (
              <div key={item.title} className="card-hover rounded-2xl p-7 text-center border" style={{ backgroundColor: "hsl(36,25%,96%)", borderColor: "hsl(30,20%,88%)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "hsl(15,40%,92%)" }}>
                  <Icon name={item.icon} size={22} style={{ color: "hsl(15,55%,42%)" }} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "hsl(24,20%,18%)" }}>{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p key={i} className={`font-body ${i === 0 ? "font-medium" : "text-sm"}`} style={{ color: i === 0 ? "hsl(24,20%,18%)" : "hsl(24,15%,45%)" }}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Форма */}
          <div className="max-w-xl mx-auto rounded-3xl p-8 border" style={{ backgroundColor: "hsl(36,25%,96%)", borderColor: "hsl(30,20%,88%)" }}>
            <h3 className="font-display text-2xl font-semibold mb-6 text-center" style={{ color: "hsl(24,20%,18%)" }}>Оставьте заявку</h3>
            <div className="space-y-4">
              <div>
                <label className="font-body text-sm mb-1 block" style={{ color: "hsl(24,15%,45%)" }}>Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border px-4 py-3 font-body text-sm bg-white focus:outline-none"
                  style={{ borderColor: "hsl(30,20%,82%)" }}
                />
              </div>
              <div>
                <label className="font-body text-sm mb-1 block" style={{ color: "hsl(24,15%,45%)" }}>Телефон или Email</label>
                <input
                  type="text"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full rounded-xl border px-4 py-3 font-body text-sm bg-white focus:outline-none"
                  style={{ borderColor: "hsl(30,20%,82%)" }}
                />
              </div>
              <div>
                <label className="font-body text-sm mb-1 block" style={{ color: "hsl(24,15%,45%)" }}>Сообщение</label>
                <textarea
                  placeholder="Расскажите, что вас интересует..."
                  rows={3}
                  className="w-full rounded-xl border px-4 py-3 font-body text-sm bg-white focus:outline-none resize-none"
                  style={{ borderColor: "hsl(30,20%,82%)" }}
                />
              </div>
              <button
                className="w-full py-3 rounded-xl font-body font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: "hsl(15,45%,35%)", color: "hsl(36,28%,97%)" }}
              >
                Отправить заявку
              </button>
              <p className="font-body text-xs text-center" style={{ color: "hsl(24,15%,45%)" }}>Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8" style={{ backgroundColor: "hsl(24,20%,18%)", borderColor: "hsl(24,20%,25%)" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌿</span>
              <span className="font-display text-xl font-semibold" style={{ color: "hsl(36,28%,97%)" }}>Живица</span>
            </div>
            <p className="font-body text-sm text-center" style={{ color: "rgba(245,240,230,0.4)" }}>
              © 2012–2026 ООО «Живица». Все права защищены.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="font-body text-xs transition-colors hover:opacity-80"
                  style={{ color: "rgba(245,240,230,0.5)" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
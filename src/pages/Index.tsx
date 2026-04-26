import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_LOGO = "https://cdn.poehali.dev/projects/32ce1ba6-2d08-4502-a6d8-df9c23186132/bucket/0fd4115a-f981-4939-ac44-54c00256234c.jpg";
const IMG_SMOOTHIES = "https://cdn.poehali.dev/projects/32ce1ba6-2d08-4502-a6d8-df9c23186132/files/4a95885d-4bf5-4cb0-944a-14b12ddf7cda.jpg";
const IMG_CAPSULES = "https://cdn.poehali.dev/projects/32ce1ba6-2d08-4502-a6d8-df9c23186132/files/7abe10d0-4706-4c11-803f-99f81870621e.jpg";
const IMG_HERO = "https://cdn.poehali.dev/projects/32ce1ba6-2d08-4502-a6d8-df9c23186132/files/a958ae2d-f930-4685-a342-6f70394f016b.jpg";
const IMG_FRUITS = "https://cdn.poehali.dev/projects/32ce1ba6-2d08-4502-a6d8-df9c23186132/files/c45cd9e7-8cbf-411f-a26f-f45d80ea4f98.jpg";
const IMG_TERRACE = "https://cdn.poehali.dev/projects/32ce1ba6-2d08-4502-a6d8-df9c23186132/files/30f11bae-0215-42f6-9a75-7751a59e2e4a.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "products", label: "О продукции" },
  { id: "catalog", label: "Каталог" },
  { id: "order", label: "Как заказать" },
  { id: "recipes", label: "Рецепты" },
  { id: "about", label: "О компании" },
  { id: "contacts", label: "Контакты" },
];

const CATALOG_TEAS = [
  { name: "Малина-грейпфрут", type: "Чай · капсула 90г", emoji: "🍓", accent: "hsl(340,55%,92%)", dot: "hsl(340,62%,45%)", desc: "Сочная малина и лёгкая горчинка грейпфрута. Освежающий и витаминный." },
  { name: "Облепиха-апельсин", type: "Чай · капсула 90г", emoji: "🍊", accent: "hsl(38,80%,92%)", dot: "hsl(28,90%,55%)", desc: "Солнечная облепиха с цедрой апельсина. Витаминный заряд в каждом глотке." },
  { name: "Клюква-апельсин", type: "Чай · капсула 90г", emoji: "🍊", accent: "hsl(15,55%,92%)", dot: "hsl(15,70%,45%)", desc: "Терпкая клюква и сочный апельсин — классическое зимнее сочетание." },
  { name: "Глинтвейн клюква-вишня", type: "Глинтвейн · капсула 90г", emoji: "🍷", accent: "hsl(345,45%,92%)", dot: "hsl(345,60%,40%)", desc: "Насыщенный согревающий глинтвейн из клюквы и вишни со специями." },
  { name: "Чёрная смородина-апельсин", type: "Чай · капсула 90г", emoji: "🫐", accent: "hsl(275,28%,92%)", dot: "hsl(275,40%,45%)", desc: "Яркая смородина и свежий апельсин — насыщенный витаминами дуэт." },
  { name: "Марокканский цитрусовый", type: "Чай со специями · 90г", emoji: "🌶️", accent: "hsl(30,55%,91%)", dot: "hsl(28,90%,50%)", desc: "Цитрусовый купаж с восточными специями. Тёплый и пряный аромат Марокко." },
];

const LEMONADE_BASES = [
  {
    base: "Лайм-Мята",
    emoji: "🍃",
    accent: "hsl(95,28%,91%)",
    dot: "hsl(95,38%,38%)",
    flavors: [
      { name: "Ананас-Манго", emoji: "🍍" },
      { name: "Манго-Маракуйя", emoji: "🥭" },
      { name: "Дыня-Клубника", emoji: "🍈" },
      { name: "Клубника-Манго", emoji: "🍓" },
      { name: "Дыня-Маракуйя", emoji: "🍈" },
    ],
  },
  {
    base: "Грейпфрут-Лайм-Мята",
    emoji: "🍋",
    accent: "hsl(50,75%,91%)",
    dot: "hsl(48,85%,48%)",
    flavors: [
      { name: "Малина-Маракуйя", emoji: "🍓" },
      { name: "Клубника-Крыжовник", emoji: "🍓" },
      { name: "Малина-Каламондин", emoji: "🍓" },
    ],
  },
  {
    base: "Лайм-Базилик",
    emoji: "🌿",
    accent: "hsl(100,25%,91%)",
    dot: "hsl(95,38%,36%)",
    flavors: [
      { name: "Дыня-Ананас", emoji: "🍈" },
      { name: "Малина-Грейпфрут", emoji: "🍓" },
    ],
  },
];

const CATALOG_TABS = [
  { id: "teas", label: "Чаи", emoji: "🍵" },
  { id: "lemonades", label: "Лимонады", emoji: "🍋" },
  { id: "smoothies", label: "Смузи", emoji: "🥤" },
];

const CATALOG_SMOOTHIES = [
  { name: "Пинаколада", type: "Смузи · дойпак", emoji: "🥥", accent: "hsl(48,75%,92%)", dot: "hsl(38,85%,50%)", desc: "Кокос, манго и ананас. Основа лайм-мята + кусочки фруктов." },
  { name: "Тропический чилл", type: "Смузи · дойпак", emoji: "🍓", accent: "hsl(345,50%,92%)", dot: "hsl(340,62%,45%)", desc: "Клубника, маракуйя и манго. Взрыв тропических вкусов." },
  { name: "Балийский трип", type: "Смузи · дойпак", emoji: "🥭", accent: "hsl(35,70%,92%)", dot: "hsl(28,90%,52%)", desc: "Манго и маракуйя — освежающий дуэт с острова Бали." },
  { name: "Летний бриз", type: "Смузи · дойпак", emoji: "🍉", accent: "hsl(355,50%,93%)", dot: "hsl(350,65%,48%)", desc: "Манго и арбуз — сладкий летний бриз в каждом глотке." },
  { name: "Манго шейк", type: "Смузи · дойпак", emoji: "🥭", accent: "hsl(40,70%,92%)", dot: "hsl(35,88%,52%)", desc: "Чистый манговый вкус — насыщенный, сладкий и солнечный." },
];

const RECIPES = [
  {
    title: "Как заварить чай",
    concentrate: "Капсула 90г",
    emoji: "🍵",
    time: "2 мин",
    badge: "Чай",
    accent: "hsl(30,60%,90%)",
    steps: ["Открыть капсулу", "Вылить содержимое в стакан", "Залить кипятком: 25г на 100мл воды", "Перемешать и наслаждаться"],
  },
  {
    title: "Как приготовить лимонад",
    concentrate: "Капсула 70г",
    emoji: "🍋",
    time: "3 мин",
    badge: "Лимонад",
    accent: "hsl(50,80%,88%)",
    steps: ["Открыть капсулу, добавить в стакан", "Помять содержимое мадлером", "Добавить газированную воду и лёд", "Перемешать и подавать"],
  },
  {
    title: "Как приготовить смузи",
    concentrate: "Дойпак с zip-замком",
    emoji: "🥤",
    time: "3 мин",
    badge: "Смузи",
    accent: "hsl(95,35%,88%)",
    steps: ["Открыть дойпак, добавить 200мл воды", "Перелить содержимое в блендер", "Взбить до однородности", "Перелить обратно в дойпак и взять с собой"],
  },
];

const STEPS = [
  { icon: "Phone", title: "Позвоните или напишите", desc: "Выберите удобный способ связи. Наш менеджер поможет с выбором." },
  { icon: "ShoppingBasket", title: "Оформите заказ", desc: "Выберите концентраты из каталога. Минимальный заказ — 3 бутылки." },
  { icon: "Truck", title: "Получите доставку", desc: "Доставляем по всей России за 3–7 дней. Самовывоз из Москвы." },
  { icon: "Leaf", title: "Наслаждайтесь", desc: "Разведите с водой по инструкции и откройте вкус живой природы." },
];

const BERRY = "hsl(340,62%,45%)";
const BERRY_LIGHT = "hsl(340,55%,93%)";
const SUN = "hsl(48,92%,60%)";
const CITRUS = "hsl(28,90%,55%)";
const DARK = "hsl(30,25%,14%)";
const CREAM = "hsl(44,50%,97%)";
const MUTED = "hsl(30,18%,48%)";
const BG = "hsl(45,35%,96%)";
const BORDER = "hsl(42,25%,84%)";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeRecipe, setActiveRecipe] = useState(0);
  const [activeTab, setActiveTab] = useState("teas");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG }}>

      {/* ── NAV ── */}
      <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "rgba(252,248,240,0.96)", backdropFilter: "blur(12px)", borderColor: BORDER }}>
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <button className="flex items-center gap-2.5" onClick={() => scrollTo("home")}>
            {/* Веточка SVG */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Стебель */}
              <path d="M16 28 C16 28 14 20 16 12 C18 4 16 2 16 2" stroke={BERRY} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              {/* Листья левые */}
              <path d="M16 20 C13 18 9 19 8 16 C11 14 15 16 16 20Z" fill={`hsl(95,38%,38%)`} opacity="0.85"/>
              <path d="M16 14 C13 12 10 13 9 10 C12 8 15 10 16 14Z" fill={`hsl(95,38%,38%)`} opacity="0.7"/>
              {/* Листья правые */}
              <path d="M16 22 C19 20 23 21 24 18 C21 16 17 18 16 22Z" fill={`hsl(95,38%,38%)`} opacity="0.85"/>
              <path d="M16 16 C19 14 22 15 23 12 C20 10 17 12 16 16Z" fill={`hsl(95,38%,38%)`} opacity="0.7"/>
              {/* Ягоды */}
              <circle cx="8" cy="16" r="2.2" fill={BERRY}/>
              <circle cx="24" cy="18" r="2.2" fill={BERRY}/>
              <circle cx="9" cy="10" r="1.8" fill={BERRY} opacity="0.8"/>
              <circle cx="23" cy="12" r="1.8" fill={BERRY} opacity="0.8"/>
              <circle cx="16" cy="6" r="1.8" fill={BERRY} opacity="0.7"/>
            </svg>
            <span className="font-display text-xl font-semibold tracking-tight" style={{ color: DARK }}>Море Ягод</span>
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="nav-link"
                style={{ color: activeSection === item.id ? BERRY : undefined }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="md:hidden p-2 rounded-xl" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: DARK }}>
            <Icon name={mobileOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t px-4 py-4 flex flex-col gap-3" style={{ backgroundColor: CREAM, borderColor: BORDER }}>
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left nav-link py-1">{item.label}</button>
            ))}
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="home" className="relative overflow-hidden" style={{ backgroundColor: BG }}>
        {/* background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl" style={{ background: SUN }} />
          <div className="absolute bottom-0 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: BERRY }} />
        </div>

        <div className="container mx-auto px-4 pt-14 pb-0 grid md:grid-cols-2 gap-10 items-end relative">
          {/* text col */}
          <div className="pb-16 md:pb-20">
            <div className="inline-flex items-center gap-2 text-xs font-body font-medium px-4 py-1.5 rounded-full mb-7 animate-fade-up" style={{ backgroundColor: BERRY_LIGHT, color: BERRY }}>
              🌿 Натуральные концентраты без консервантов
            </div>

            <h1 className="font-display font-semibold leading-[1.05] mb-7 animate-fade-up delay-100" style={{ fontSize: "clamp(2.4rem,5vw,4rem)", color: DARK }}>
              Вкус,{" "}
              <em className="not-italic" style={{ color: BERRY }}>которым</em>
              <br />делится{" "}
              <em className="not-italic" style={{ color: CITRUS }}>лето</em>
            </h1>

            <p className="font-body text-base leading-relaxed mb-9 max-w-md animate-fade-up delay-200" style={{ color: MUTED }}>
              Добро пожаловать в «Море Ягод» — место, где свежесть природы и здоровье встречаются в каждом глотке! Мы создаём натуральные лимонады, смузи и чаи без термической обработки, чтобы сохранить максимум витаминов, ароматов и вкуса.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up delay-300">
              <button
                onClick={() => scrollTo("catalog")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold transition-all hover:opacity-90 hover:scale-105"
                style={{ backgroundColor: BERRY, color: CREAM }}
              >
                Смотреть каталог
                <Icon name="ArrowRight" size={18} />
              </button>
              <button
                onClick={() => scrollTo("recipes")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body font-semibold border transition-all hover:bg-[hsl(42,30%,90%)]"
                style={{ borderColor: BORDER, color: DARK }}
              >
                Рецепты напитков
              </button>
            </div>

            <div className="mt-12 flex gap-10 animate-fade-up delay-400">
              {[["15+", "сортов"], ["100%", "натурально"], ["1:20", "разведение"]].map(([val, label]) => (
                <div key={label}>
                  <div className="font-display text-4xl font-semibold" style={{ color: BERRY }}>{val}</div>
                  <div className="font-body text-sm mt-0.5" style={{ color: MUTED }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* product visuals */}
          <div className="flex flex-col gap-4 pb-8 animate-fade-up delay-300">
            {/* Смузи */}
            <div className="rounded-3xl overflow-hidden border" style={{ backgroundColor: CREAM, borderColor: BORDER }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={IMG_SMOOTHIES}
                  alt="Смузи Море Ягод"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="font-body text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: MUTED }}>Дойпак · смузи</div>
                  <div className="font-display text-xl font-semibold" style={{ color: DARK }}>Манго, клубника, маракуйя</div>
                </div>
                <span className="px-3 py-1 rounded-full font-body text-xs font-semibold shrink-0 ml-3" style={{ backgroundColor: SUN, color: DARK }}>
                  Без консервантов
                </span>
              </div>
            </div>

            {/* Капсулы */}
            <div className="rounded-3xl overflow-hidden border" style={{ backgroundColor: CREAM, borderColor: BORDER }}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={IMG_CAPSULES}
                  alt="Капсулы лимонадов Море Ягод"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="font-body text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: MUTED }}>Капсула · лимонад</div>
                  <div className="font-display text-xl font-semibold" style={{ color: DARK }}>Лайм-мята, грейпфрут, базилик</div>
                </div>
                <span className="px-3 py-1 rounded-full font-body text-xs font-semibold shrink-0 ml-3" style={{ backgroundColor: BERRY_LIGHT, color: BERRY }}>
                  15+ вкусов
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* wave divider */}
        <div className="w-full overflow-hidden mt-[-2px]" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60 C360 0 1080 60 1440 0 L1440 60 Z" fill="hsl(42,30%,90%)" />
          </svg>
        </div>
      </section>

      {/* ── О ПРОДУКЦИИ ── */}
      <section id="products" className="py-16 md:py-24" style={{ backgroundColor: "hsl(42,30%,90%)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: BERRY }}>О продукции</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2" style={{ color: DARK }}>Почему наши концентраты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "Leaf", title: "Без химии", desc: "Ни консервантов, ни ароматизаторов, ни красителей. Только ягоды, вода и немного сахара.", bg: BERRY_LIGHT, ic: BERRY },
              { icon: "Droplets", title: "Максимум вкуса", desc: "Технология щадящего уваривания сохраняет витамины. Концентрация 1:20 — из 500 мл получается 10 л напитка.", bg: "hsl(50,88%,92%)", ic: "hsl(40,88%,45%)" },
              { icon: "Mountain", title: "Дикорастущие ягоды", desc: "Собираем в экологически чистых районах Сибири и Алтая. Без пестицидов — как это было всегда.", bg: "hsl(95,32%,91%)", ic: "hsl(95,42%,38%)" },
              { icon: "ThermometerSun", title: "Горячее и холодное", desc: "Разводите с холодной водой для лимонада или с горячей для чая — одинаково вкусно.", bg: "hsl(20,60%,92%)", ic: CITRUS },
              { icon: "Package", title: "Долгое хранение", desc: "Срок хранения 24 месяца до вскрытия, 30 дней в холодильнике — без потери качества.", bg: "hsl(270,25%,92%)", ic: "hsl(270,38%,45%)" },
              { icon: "Heart", title: "Для всей семьи", desc: "Подходит детям от 3 лет. Есть варианты без сахара для диабетиков и тех, кто следит за весом.", bg: BERRY_LIGHT, ic: BERRY },
            ].map((item) => (
              <div key={item.title} className="card-hover rounded-3xl p-7 border" style={{ backgroundColor: CREAM, borderColor: "transparent" }}>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: item.bg }}>
                  <Icon name={item.icon} size={22} style={{ color: item.ic }} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: DARK }}>{item.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: MUTED }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* wave */}
        <div className="w-full overflow-hidden mt-12" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0 C360 60 1080 0 1440 60 L1440 0 Z" fill={BG} />
          </svg>
        </div>
      </section>

      {/* ── КАТАЛОГ ── */}
      <section id="catalog" className="py-16 md:py-24" style={{ backgroundColor: BG }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: BERRY }}>Каталог</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2" style={{ color: DARK }}>Наши концентраты</h2>
            <p className="font-body mt-3 max-w-xl mx-auto" style={{ color: MUTED }}>
              Каждый вкус — отдельная история из леса. Выбирайте по настроению.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {CATALOG_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-body font-medium transition-all"
                style={activeTab === tab.id
                  ? { backgroundColor: BERRY, color: CREAM, boxShadow: "0 4px 18px rgba(180,40,80,0.28)" }
                  : { backgroundColor: CREAM, color: DARK, border: `1px solid ${BORDER}` }
                }
              >
                <span>{tab.emoji}</span>{tab.label}
              </button>
            ))}
          </div>

          {/* Teas */}
          {activeTab === "teas" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CATALOG_TEAS.map((item) => (
                <div key={item.name} className="card-hover rounded-3xl overflow-hidden border" style={{ backgroundColor: item.accent, borderColor: "transparent" }}>
                  <div className="p-7">
                    <div className="text-5xl mb-4">{item.emoji}</div>
                    <div className="inline-block font-body text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-3" style={{ backgroundColor: "rgba(255,255,255,0.6)", color: item.dot }}>
                      {item.type}
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: DARK }}>{item.name}</h3>
                    <p className="font-body text-sm leading-relaxed mb-5" style={{ color: MUTED }}>{item.desc}</p>
                    <button onClick={() => scrollTo("order")} className="inline-flex items-center gap-1 text-sm font-body font-semibold hover:underline" style={{ color: item.dot }}>
                      Заказать <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Lemonades */}
          {activeTab === "lemonades" && (
            <div className="flex flex-col gap-10">
              {/* Фото-баннер капсул */}
              <div className="rounded-3xl overflow-hidden border grid md:grid-cols-2 mb-2" style={{ backgroundColor: CREAM, borderColor: BORDER }}>
                <div className="overflow-hidden" style={{ maxHeight: 260 }}>
                  <img src={IMG_CAPSULES} alt="Капсулы лимонадов" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" style={{ objectPosition: "center 30%" }} />
                </div>
                <div className="p-7 flex flex-col justify-center">
                  <span className="font-body text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: MUTED }}>Капсула 70г · с кусочками фруктов</span>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3" style={{ color: DARK }}>Капсулы с разными вкусами и натуральными фруктами</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: MUTED }}>Каждая капсула содержит кусочки настоящих фруктов — без ароматизаторов и красителей.</p>
                </div>
              </div>
              {LEMONADE_BASES.map((base) => (
                <div key={base.base}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl">{base.emoji}</span>
                    <div>
                      <span className="font-body text-xs uppercase tracking-widest font-semibold" style={{ color: base.dot }}>Основа</span>
                      <h3 className="font-display text-2xl font-semibold" style={{ color: DARK }}>{base.base}</h3>
                    </div>
                    <span className="ml-auto font-body text-xs px-3 py-1 rounded-full hidden sm:inline" style={{ backgroundColor: CREAM, color: MUTED, border: `1px solid ${BORDER}` }}>
                      капсула 70г · с кусочками фруктов
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {base.flavors.map((flavor) => (
                      <div key={flavor.name} className="card-hover rounded-2xl border" style={{ backgroundColor: base.accent, borderColor: "transparent" }}>
                        <div className="p-5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{flavor.emoji}</span>
                            <div>
                              <div className="font-body text-xs mb-0.5" style={{ color: MUTED }}>{base.base}</div>
                              <div className="font-display text-lg font-semibold" style={{ color: DARK }}>{flavor.name}</div>
                            </div>
                          </div>
                          <button onClick={() => scrollTo("order")} className="inline-flex items-center gap-1 text-sm font-body font-semibold hover:underline shrink-0 ml-2" style={{ color: base.dot }}>
                            Заказать <Icon name="ArrowRight" size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Smoothies */}
          {activeTab === "smoothies" && (
            <div className="flex flex-col gap-6">
              {/* Баннер смузи */}
              <div className="rounded-3xl overflow-hidden border grid md:grid-cols-2" style={{ backgroundColor: CREAM, borderColor: BORDER }}>
                <div className="overflow-hidden" style={{ maxHeight: 260 }}>
                  <img src={IMG_SMOOTHIES} alt="Смузи Море Ягод" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" style={{ objectPosition: "center center" }} />
                </div>
                <div className="p-7 flex flex-col justify-center">
                  <span className="font-body text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: MUTED }}>Дойпак · zip-замок</span>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3" style={{ color: DARK }}>Только натуральные ягоды и тропические фрукты</h3>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: MUTED }}>Без красителей, консервантов и термической обработки.</p>
                  <span className="inline-flex w-fit px-3 py-1 rounded-full font-body text-xs font-semibold" style={{ backgroundColor: SUN, color: DARK }}>Без консервантов</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CATALOG_SMOOTHIES.map((item) => (
                <div key={item.name} className="card-hover rounded-3xl overflow-hidden border" style={{ backgroundColor: item.accent, borderColor: "transparent" }}>
                  <div className="p-7">
                    <div className="text-5xl mb-4">{item.emoji}</div>
                    <div className="inline-block font-body text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-3" style={{ backgroundColor: "rgba(255,255,255,0.6)", color: item.dot }}>
                      {item.type}
                    </div>
                    <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: DARK }}>{item.name}</h3>
                    <p className="font-body text-sm leading-relaxed mb-5" style={{ color: MUTED }}>{item.desc}</p>
                    <button onClick={() => scrollTo("order")} className="inline-flex items-center gap-1 text-sm font-body font-semibold hover:underline" style={{ color: item.dot }}>
                      Заказать <Icon name="ArrowRight" size={14} />
                    </button>
                  </div>
                </div>
              ))}
              </div>
            </div>
          )}

          <div className="text-center mt-10">
            <p className="font-body text-sm" style={{ color: MUTED }}>Это только часть ассортимента. Уточните полный каталог у менеджера.</p>
          </div>
        </div>
      </section>

      {/* ── ДОЙПАК БАННЕР ── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: "hsl(95,28%,91%)" }}>
        <div className="container mx-auto px-4">
          <div className="rounded-3xl p-8 md:p-14 relative overflow-hidden" style={{ backgroundColor: "hsl(95,32%,84%)" }}>
            <div className="absolute top-0 right-4 text-[200px] leading-none opacity-[0.08] pointer-events-none select-none">🥤</div>
            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="font-body text-xs uppercase tracking-[0.18em] font-semibold mb-3 inline-block" style={{ color: "hsl(95,42%,35%)" }}>Упаковка смузи</span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: DARK }}>
                  Дойпак — умная упаковка
                </h2>
                <p className="font-body leading-relaxed" style={{ color: MUTED }}>
                  Смузи приходят в дойпаке с zip-замком: добавил воду, взбил в блендере — и перелил обратно. Никакой лишней тары.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  { icon: "RefreshCw", title: "Вторичное использование", desc: "Zip-замок закрывается повторно — дойпак служит стаканом, бутылкой или контейнером." },
                  { icon: "Backpack", title: "Удобно брать с собой", desc: "Лёгкий, не бьётся, помещается в любую сумку. Идеально для спорта и путешествий." },
                  { icon: "Leaf", title: "Бережёт природу", desc: "Меньше пластика и стекла — одна упаковка заменяет стакан, крышку и трубочку." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start rounded-2xl p-4" style={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "hsl(95,42%,38%)" }}>
                      <Icon name={item.icon} size={18} style={{ color: CREAM }} />
                    </div>
                    <div>
                      <div className="font-display font-semibold text-base mb-0.5" style={{ color: DARK }}>{item.title}</div>
                      <div className="font-body text-sm leading-relaxed" style={{ color: MUTED }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── КАК ЗАКАЗАТЬ ── */}
      <section id="order" className="py-16 md:py-24" style={{ backgroundColor: BG }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: BERRY }}>Как заказать</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2" style={{ color: DARK }}>Просто, как сбор ягод</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="relative inline-flex w-18 h-18 rounded-full items-center justify-center mb-5 mx-auto" style={{ width: 72, height: 72, backgroundColor: BERRY_LIGHT }}>
                  <Icon name={step.icon} size={28} style={{ color: BERRY }} />
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-body font-bold" style={{ backgroundColor: BERRY, color: CREAM }}>
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: DARK }}>{step.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: MUTED }}>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="mt-16 rounded-3xl p-8 md:p-14 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${BERRY} 0%, hsl(355,65%,38%) 100%)` }}>
            <div className="absolute top-0 right-0 text-[220px] leading-none opacity-[0.07] pointer-events-none select-none">🌿</div>
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-semibold mb-3" style={{ color: CREAM }}>
                  Готовы попробовать?
                </h3>
                <p className="font-body leading-relaxed" style={{ color: "rgba(252,248,240,0.8)" }}>
                  Напишите нам или позвоните — поможем выбрать первый набор и расскажем об акциях для новых покупателей.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+78001234567"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-body font-semibold transition-all hover:opacity-90"
                  style={{ backgroundColor: SUN, color: DARK }}
                >
                  <Icon name="Phone" size={18} />
                  8 800 123-45-67
                </a>
                <a
                  href="https://t.me/zhivitsa"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-body font-semibold border transition-all hover:bg-white/10"
                  style={{ borderColor: "rgba(252,248,240,0.35)", color: CREAM }}
                >
                  Написать в Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── РЕЦЕПТЫ ── */}
      <section id="recipes" className="py-16 md:py-24" style={{ backgroundColor: "hsl(42,30%,90%)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: BERRY }}>Рецепты</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2" style={{ color: DARK }}>Как приготовить</h2>
            <p className="font-body mt-3" style={{ color: MUTED }}>Несколько идей для вдохновения. Всё готовится за несколько минут.</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8 max-w-2xl mx-auto">
            {RECIPES.map((r, i) => (
              <button
                key={r.title}
                onClick={() => setActiveRecipe(i)}
                className="text-left rounded-2xl p-4 transition-all font-body"
                style={{
                  backgroundColor: activeRecipe === i ? BERRY : CREAM,
                  color: activeRecipe === i ? CREAM : DARK,
                  boxShadow: activeRecipe === i ? "0 6px 24px rgba(180,40,80,0.28)" : undefined,
                }}
              >
                <div className="text-3xl mb-2">{r.emoji}</div>
                <div className="font-semibold text-sm leading-snug">{r.title}</div>
                <div className="text-xs mt-1.5 px-2 py-0.5 rounded-full inline-block" style={{ backgroundColor: activeRecipe === i ? "rgba(255,255,255,0.2)" : r.accent, color: activeRecipe === i ? CREAM : DARK }}>
                  {r.badge}
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: CREAM }}>
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="text-5xl mb-4">{RECIPES[activeRecipe].emoji}</div>
                <div className="inline-block font-body text-xs px-3 py-1 rounded-full mb-4" style={{ backgroundColor: RECIPES[activeRecipe].accent, color: DARK }}>
                  {RECIPES[activeRecipe].badge}
                </div>
                <h3 className="font-display text-3xl font-semibold mb-1" style={{ color: DARK }}>{RECIPES[activeRecipe].title}</h3>
                <p className="font-body text-sm mb-7" style={{ color: BERRY }}>
                  {RECIPES[activeRecipe].concentrate} · {RECIPES[activeRecipe].time}
                </p>
                <div className="space-y-4">
                  {RECIPES[activeRecipe].steps.map((step, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-body font-bold" style={{ backgroundColor: BERRY, color: CREAM }}>
                        {idx + 1}
                      </div>
                      <p className="font-body text-sm pt-1" style={{ color: DARK }}>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[280px] md:min-h-0 overflow-hidden">
                <img
                  src={IMG_FRUITS}
                  alt="Свежие фрукты"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="instruction" className="py-16 md:py-24" style={{ backgroundColor: BG }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <span className="font-body text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: BERRY }}>Вопросы и ответы</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2" style={{ color: DARK }}>Как разводить</h2>
          </div>

          <div className="space-y-3">
            {[
              { q: "Какое соотношение концентрата и воды?", a: "Стандартное разведение — 1:20 (1 часть концентрата на 20 частей воды). Это 50 мл на 1 литр напитка. Вы можете регулировать насыщенность по вкусу — от 1:15 до 1:30." },
              { q: "Можно ли разводить горячей водой?", a: "Да! Большинство концентратов отлично подходят для горячих напитков. Оптимальная температура — 70–80°C. Кипятком заливать не рекомендуется, чтобы сохранить витамины." },
              { q: "Сколько хранится после вскрытия?", a: "После вскрытия хранить в холодильнике не более 30 дней. В закрытом виде — до 24 месяцев при комнатной температуре в тёмном месте." },
              { q: "Можно ли добавлять в коктейли и смузи?", a: "Конечно! Концентраты прекрасно работают как основа для смузи, морсов, компотов, лимонадов и даже алкогольных коктейлей." },
              { q: "Подходит ли детям?", a: "Детям от 3 лет — да. Рекомендуем разводить 1:25 для более мягкого вкуса. Также есть линейка без сахара." },
            ].map((item, i) => (
              <details key={i} className="group rounded-2xl border overflow-hidden" style={{ backgroundColor: CREAM, borderColor: BORDER }}>
                <summary className="flex items-center justify-between p-5 cursor-pointer font-display text-lg font-medium list-none" style={{ color: DARK }}>
                  {item.q}
                  <Icon name="ChevronDown" size={18} className="group-open:rotate-180 transition-transform flex-shrink-0 ml-3" style={{ color: BERRY }} />
                </summary>
                <div className="px-5 pb-5 font-body text-sm leading-relaxed border-t pt-4" style={{ color: MUTED, borderColor: BORDER }}>
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── О КОМПАНИИ ── */}
      <section id="about" className="py-16 md:py-24 relative overflow-hidden" style={{ backgroundColor: "hsl(42,30%,90%)" }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* text */}
            <div>
              <span className="font-body text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: BERRY }}>О компании</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2 mb-6" style={{ color: DARK }}>
                С 2012 года<br />мы несём вкус леса
              </h2>
              <p className="font-body leading-relaxed mb-5" style={{ color: MUTED }}>
                «Море Ягод» началось с маленькой лаборатории в Томске. Основатели — семья потомственных сборщиков ягод, которые хотели поделиться вкусами сибирского леса со всей страной.
              </p>
              <p className="font-body leading-relaxed mb-10" style={{ color: MUTED }}>
                Сегодня мы работаем с более чем 40 семьями сборщиков в Томской, Новосибирской областях и на Алтае. У нас своё небольшое производство с лицензией Роспотребнадзора и два фирменных магазина в Москве.
              </p>

              <div className="flex gap-10 flex-wrap">
                {[["2012", "год основания"], ["40+", "партнёров-сборщиков"], ["12 000+", "клиентов"]].map(([val, label]) => (
                  <div key={label}>
                    <div className="font-display text-4xl font-semibold" style={{ color: BERRY }}>{val}</div>
                    <div className="font-body text-xs mt-0.5" style={{ color: MUTED }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* image + cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-3xl overflow-hidden aspect-video">
                <img src={IMG_TERRACE} alt="Терраса с фруктами" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl p-5" style={{ backgroundColor: BERRY_LIGHT }}>
                <div className="text-2xl mb-2">🌲</div>
                <h4 className="font-display text-lg font-semibold mb-1" style={{ color: DARK }}>Наша миссия</h4>
                <p className="font-body text-xs leading-relaxed" style={{ color: MUTED }}>
                  Вернуть людям вкус настоящих напитков. Без компромиссов с природой.
                </p>
              </div>
              <div className="rounded-2xl p-5" style={{ backgroundColor: "hsl(50,88%,90%)" }}>
                <div className="text-2xl mb-2">🏅</div>
                <h4 className="font-display text-lg font-semibold mb-1" style={{ color: DARK }}>Сертифицировано</h4>
                <p className="font-body text-xs leading-relaxed" style={{ color: MUTED }}>
                  Продукция сертифицирована по ГОСТ. Все партии проходят лабораторный контроль.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── КОНТАКТЫ ── */}
      <section id="contacts" className="py-16 md:py-24" style={{ backgroundColor: BG }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="font-body text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: BERRY }}>Контакты</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-2" style={{ color: DARK }}>Свяжитесь с нами</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {[
              { icon: "Phone", title: "Телефон", lines: ["8 800 123-45-67", "Бесплатно по России"] },
              { icon: "Mail", title: "Email", lines: ["hello@more-yagod.ru", "Ответим в течение дня"] },
              { icon: "MapPin", title: "Адрес", lines: ["Москва, ул. Арбат, 15", "Пн–Сб, 10:00–19:00"] },
            ].map((item) => (
              <div key={item.title} className="card-hover rounded-3xl p-7 text-center border" style={{ backgroundColor: CREAM, borderColor: BORDER }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: BERRY_LIGHT }}>
                  <Icon name={item.icon} size={24} style={{ color: BERRY }} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: DARK }}>{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p key={i} className={`font-body ${i === 0 ? "font-semibold" : "text-sm"}`} style={{ color: i === 0 ? DARK : MUTED }}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-xl mx-auto rounded-3xl p-8 md:p-10 border" style={{ backgroundColor: CREAM, borderColor: BORDER }}>
            <h3 className="font-display text-2xl font-semibold mb-6 text-center" style={{ color: DARK }}>Оставьте заявку</h3>
            <div className="space-y-4">
              <div>
                <label className="font-body text-sm mb-1.5 block font-medium" style={{ color: MUTED }}>Имя</label>
                <input type="text" placeholder="Ваше имя" className="w-full rounded-2xl border px-4 py-3 font-body text-sm bg-white focus:outline-none focus:ring-2" style={{ borderColor: BORDER, '--tw-ring-color': BERRY } as React.CSSProperties} />
              </div>
              <div>
                <label className="font-body text-sm mb-1.5 block font-medium" style={{ color: MUTED }}>Телефон или Email</label>
                <input type="text" placeholder="+7 (___) ___-__-__" className="w-full rounded-2xl border px-4 py-3 font-body text-sm bg-white focus:outline-none focus:ring-2" style={{ borderColor: BORDER, '--tw-ring-color': BERRY } as React.CSSProperties} />
              </div>
              <div>
                <label className="font-body text-sm mb-1.5 block font-medium" style={{ color: MUTED }}>Сообщение</label>
                <textarea placeholder="Расскажите, что вас интересует..." rows={3} className="w-full rounded-2xl border px-4 py-3 font-body text-sm bg-white focus:outline-none resize-none focus:ring-2" style={{ borderColor: BORDER, '--tw-ring-color': BERRY } as React.CSSProperties} />
              </div>
              <button className="w-full py-3.5 rounded-full font-body font-semibold transition-all hover:opacity-90" style={{ backgroundColor: BERRY, color: CREAM }}>
                Отправить заявку
              </button>
              <p className="font-body text-xs text-center" style={{ color: MUTED }}>Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t py-10" style={{ backgroundColor: DARK, borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-2.5">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 28 C16 28 14 20 16 12 C18 4 16 2 16 2" stroke="hsl(44,50%,90%)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                <path d="M16 20 C13 18 9 19 8 16 C11 14 15 16 16 20Z" fill="hsl(95,35%,60%)" opacity="0.9"/>
                <path d="M16 14 C13 12 10 13 9 10 C12 8 15 10 16 14Z" fill="hsl(95,35%,60%)" opacity="0.75"/>
                <path d="M16 22 C19 20 23 21 24 18 C21 16 17 18 16 22Z" fill="hsl(95,35%,60%)" opacity="0.9"/>
                <path d="M16 16 C19 14 22 15 23 12 C20 10 17 12 16 16Z" fill="hsl(95,35%,60%)" opacity="0.75"/>
                <circle cx="8" cy="16" r="2.2" fill="hsl(340,62%,68%)"/>
                <circle cx="24" cy="18" r="2.2" fill="hsl(340,62%,68%)"/>
                <circle cx="9" cy="10" r="1.8" fill="hsl(340,62%,68%)" opacity="0.85"/>
                <circle cx="23" cy="12" r="1.8" fill="hsl(340,62%,68%)" opacity="0.85"/>
                <circle cx="16" cy="6" r="1.8" fill="hsl(340,62%,68%)" opacity="0.7"/>
              </svg>
              <span className="font-display text-xl font-semibold" style={{ color: CREAM }}>Море Ягод</span>
            </div>
            <p className="font-body text-sm text-center" style={{ color: "rgba(252,248,240,0.38)" }}>
              © 2012–2026 ООО «Море Ягод». Все права защищены.
            </p>
            <div className="flex gap-5 flex-wrap justify-center">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className="font-body text-xs transition-colors hover:opacity-80" style={{ color: "rgba(252,248,240,0.48)" }}>
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
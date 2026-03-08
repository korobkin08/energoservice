import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ServiceDetail from './ServiceDetail';
import CertificatesPage from './CertificatesPage';
import ReviewsPage from './ReviewsPage';
import { SERVICES } from './servicesData';
import { TESTIMONIALS } from './reviewsData';

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const header = document.querySelector('.header');
  const offset = header ? header.getBoundingClientRect().height : 70;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

function HomePage() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="container header-inner">
        <button className="logo-block logo-block-link" onClick={() => { navigate('/'); window.scrollTo(0, 0); }}>
          <div className="logo-mark">ES</div>
          <div className="logo-text">
            <div className="logo-title">ЭнергоСервис</div>
            <div className="logo-subtitle">
              Обслуживание электроснабжения и освещения
            </div>
          </div>
        </button>
        <nav className="nav">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToId('about'); }}>О нас</a>
          <a href="#services" onClick={(e) => { e.preventDefault(); scrollToId('services'); }}>Услуги</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToId('projects'); }}>Объекты</a>
          <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToId('testimonials'); }}>Отзывы</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId('contact'); }}>Контакты</a>
        </nav>
        <div className="header-contacts">
          <button
            className="header-cert-link"
            onClick={() => scrollToId('testimonials')}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Награды
          </button>
          <button
            className="header-cert-link"
            onClick={() => { navigate('/certificates'); window.scrollTo(0, 0); }}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Сертификаты
          </button>
          <a href="tel:+375291112233" className="header-phone">
            +375 (29) 111-22-33
          </a>
          <button
            className="btn btn-header-cta"
            onClick={() => scrollToId('contact')}
          >
            Заказать звонок
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-decoration"></div>
      <div className="container hero-inner">
        <div className="hero-content">
          <h1>
            Весь комплекс работ по обслуживанию сетей электроснабжения и
            электроосвещения
          </h1>
          <p className="hero-subtitle">
            Профессиональная эксплуатация и сервис наружных и внутренних
            электрических сетей, объектов наружного освещения, трансформаторных
            подстанций и ЩУ.
          </p>
          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => scrollToId('contact')}
            >
              Оставить заявку
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToId('services')}
            >
              Смотреть услуги
            </button>
          </div>
          <div className="hero-meta">
            <div>
              <div className="hero-meta-number">10+</div>
              <div className="hero-meta-label">лет опыта</div>
            </div>
            <div>
              <div className="hero-meta-number">150+</div>
              <div className="hero-meta-label">обслуживаемых объектов</div>
            </div>
            <div>
              <div className="hero-meta-number">24/7</div>
              <div className="hero-meta-label">дежурные бригады</div>
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-panel-header">
            <div className="hero-panel-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="hero-panel-title">Ключевые направления</div>
          </div>
          <ul className="hero-panel-list">
            <li>
              <span className="hero-panel-list-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Обслуживание сетей электроснабжения 0,4–10 кВ</span>
            </li>
            <li>
              <span className="hero-panel-list-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1v6M12 17v6M23 12h-6M7 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <span>Эксплуатация наружного и архитектурного освещения</span>
            </li>
            <li>
              <span className="hero-panel-list-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              <span>Диагностика и ремонт электрооборудования</span>
            </li>
            <li>
              <span className="hero-panel-list-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              <span>Аварийно-восстановительные работы</span>
            </li>
            <li>
              <span className="hero-panel-list-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3h18v18H3z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </span>
              <span>Энергоаудит и снижение потерь</span>
            </li>
          </ul>
          <div className="hero-panel-note">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-panel-note-icon">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Работаем с промышленными объектами, складскими комплексами, бизнес-центрами, ТЦ, УКС и ЖКХ.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICE_ICONS = {
  bolt: (
    <svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  droplets: (
    <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 4 8 4 12a8 8 0 0 0 16 0c0-4-2.48-10-8-10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
  ),
  microscope: (
    <svg viewBox="0 0 24 24" fill="none"><path d="M6 18H4a2 2 0 0 1-2-2v-1h20v1a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M12 18v3M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><rect x="9" y="2" width="6" height="10" rx="1" stroke="currentColor" strokeWidth="2"/></svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M9 9h6v12H9z" stroke="currentColor" strokeWidth="2"/><path d="M9 9V7a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="2"/></svg>
  ),
  wind: (
    <svg viewBox="0 0 24 24" fill="none"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  'pencil-ruler': (
    <svg viewBox="0 0 24 24" fill="none"><path d="M15 5l4 4L7 21H3v-4L15 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 8l4 4" stroke="currentColor" strokeWidth="2"/></svg>
  ),
  'shield-check': (
    <svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
};

function ServiceCard({ service }) {
  const navigate = useNavigate();
  return (
    <div className="card service-card">
      <div className="card-icon">{SERVICE_ICONS[service.icon]}</div>
      <h3>{service.title}</h3>
      <p className="service-card-desc">{service.shortDesc}</p>
      <button
        className="btn btn-service-more"
        onClick={() => { navigate(`/services/${service.id}`); window.scrollTo(0, 0); }}
      >
        Подробнее
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();
  const stats = [
    { number: '10+', label: 'лет на рынке' },
    { number: '150+', label: 'объектов сдано' },
    { number: '40+', label: 'специалистов' },
    { number: '24/7', label: 'аварийная служба' },
  ];

  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Надёжность',
      text: 'Работаем строго по нормативам ПУЭ, ПТЭЭП и техническим регламентам РБ. Несём полную ответственность за качество выполненных работ.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Оперативность',
      text: 'Дежурные бригады на постоянной готовности. Выезд на аварийные объекты в течение 1–2 часов в любое время суток.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Опытная команда',
      text: 'Штат аттестованных инженеров и монтажников с группой допуска до V. Регулярное повышение квалификации и строгий производственный контроль.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Полный комплекс',
      text: 'От проектирования и монтажа до испытаний, ввода в эксплуатацию и последующего технического обслуживания — всё в одних руках.',
    },
  ];

  return (
    <section className="section section-about" id="about">
      <div className="container">
        {/* top: text + photo */}
        <div className="about-top">
          <div className="about-text">
            <div className="about-label">О компании</div>
            <h2 className="about-heading">
              Комплексные инженерные решения для промышленных и гражданских объектов
            </h2>
            <p>
              ЭнергоСервис — специализированная компания по монтажу, обслуживанию
              и эксплуатации инженерных систем. С 2014 года мы реализуем проекты
              в сфере электроснабжения, вентиляции, водоснабжения и комплексного
              технического обслуживания объектов в Беларуси.
            </p>
            <p>
              Собственная проектная группа, аккредитованная электролаборатория,
              монтажные бригады и аварийная служба позволяют нам вести объект
              «под ключ» — от технического задания до получения разрешения
              на ввод в эксплуатацию.
            </p>
            <div className="about-cta">
              <button className="btn btn-primary" onClick={() => scrollToId('contact')}>
                Связаться с нами
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToId('services')}>
                Наши услуги
              </button>
            </div>
          </div>

          <div className="about-photo-wrap">
            <div
              className="about-photo"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80)',
              }}
            >
              <div className="about-photo-badge">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01l-3-3" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Аккредитованная<br/>лаборатория</span>
              </div>
            </div>
          </div>
        </div>

        {/* stats row */}
        <div className="about-stats">
          {stats.map((s) => (
            <div key={s.label} className="about-stat">
              <div className="about-stat-number">{s.number}</div>
              <div className="about-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* values grid */}
        <div className="about-values">
          {values.map((v) => (
            <div key={v.title} className="about-value-card">
              <div className="about-value-icon">{v.icon}</div>
              <div>
                <div className="about-value-title">{v.title}</div>
                <div className="about-value-text">{v.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* certificates strip */}
        <div className="about-certs">
          <div className="about-certs-left">
            <div className="about-certs-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="2"/>
                <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="about-certs-title">Лицензии и сертификаты</div>
              <div className="about-certs-sub">Все разрешительные документы актуальны и доступны по запросу</div>
            </div>
          </div>
          <div className="about-certs-badges">
            <span className="about-cert-badge about-cert-badge-green">ISO 9001:2015</span>
            <span className="about-cert-badge about-cert-badge-blue">Аттестат аккредитации ЭЛ</span>
            <span className="about-cert-badge about-cert-badge-orange">Лицензия МАиС РБ</span>
            <span className="about-cert-badge about-cert-badge-purple">Допуск до 10 кВ</span>
          </div>
          <button
            className="about-certs-btn"
            onClick={() => { navigate('/certificates'); window.scrollTo(0, 0); }}
          >
            Смотреть все
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-bg-decoration"></div>
      <div className="container">
        <h2>Наши услуги</h2>
        <p className="section-intro">
          Выполняем полный комплекс строительно-монтажных и эксплуатационных работ
          по инженерным системам на объектах любой сложности.
        </p>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}


const PROJECTS = [
  {
    id: 1,
    title: 'Индустриальный парк',
    category: 'Электроснабжение',
    description: 'Полное обслуживание сетей электроснабжения 0,4–10 кВ и наружного освещения на территории промышленного парка площадью 45 га.',
    details: ['Кабельные линии 0,4–10 кВ', 'Трансформаторные подстанции × 4', 'Наружное освещение — 320 опор'],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1400&q=85',
  },
  {
    id: 2,
    title: 'Логистический центр',
    category: 'Освещение',
    description: 'Эксплуатация линий освещения складских и открытых площадок, дежурное обслуживание электрощитовых и трансформаторных подстанций.',
    details: ['Освещение 12 складских пролётов', 'Прожекторное освещение двора', 'ТП 2×630 кВА'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85',
  },
  {
    id: 3,
    title: 'Уличное освещение района',
    category: 'Наружное освещение',
    description: 'Техническое обслуживание опор и светильников уличного освещения жилого района, оперативное устранение аварийных ситуаций 24/7.',
    details: ['580 опор уличного освещения', 'LED-модернизация линий', 'Диспетчеризация АСУНО'],
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1400&q=85',
  },
  {
    id: 4,
    title: 'Торговый центр',
    category: 'Комплексное ТО',
    description: 'Обслуживание систем электроснабжения и архитектурной подсветки фасадов торгово-развлекательного комплекса общей площадью 28 000 м².',
    details: ['ГРЩ + 24 этажных щита', 'Архитектурная подсветка фасада', 'Аварийное генераторное питание'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=85',
  },
  {
    id: 5,
    title: 'Бизнес-центр',
    category: 'Электроснабжение',
    description: 'Эксплуатация внутренних сетей электроснабжения, систем освещения и автоматизации офисного комплекса класса А.',
    details: ['16 этажей, 200+ арендаторов', 'Системы ИБП и АВР', 'Коммерческий учёт АСКУЭ'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=85',
  },
];

function Projects() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = PROJECTS.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent((p) => (p + 1) % total), 5000);
    return () => clearInterval(t);
  }, [paused, total]);

  const prev = () => setCurrent((p) => (p - 1 + total) % total);
  const next = () => setCurrent((p) => (p + 1) % total);

  return (
    <section
      className="projects-slider"
      id="projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* background slides */}
      <div className="ps-backgrounds">
        {PROJECTS.map((p, i) => (
          <div
            key={p.id}
            className={`ps-bg ${i === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${p.image})` }}
          />
        ))}
        <div className="ps-overlay" />
      </div>

      {/* top label */}
      <div className="ps-top">
        <div className="ps-section-label">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Наши объекты
        </div>
        <div className="ps-counter">
          <span className="ps-counter-current">{String(current + 1).padStart(2, '0')}</span>
          <span className="ps-counter-sep"> / </span>
          <span className="ps-counter-total">{String(total).padStart(2, '0')}</span>
        </div>
      </div>

      {/* content */}
      <div className="ps-content">
        {PROJECTS.map((p, i) => (
          <div key={p.id} className={`ps-slide-content ${i === current ? 'active' : ''}`}>
            <div className="ps-category">{p.category}</div>
            <h2 className="ps-title">{p.title}</h2>
            <p className="ps-desc">{p.description}</p>
            <ul className="ps-details">
              {p.details.map((d) => (
                <li key={d}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* thumbnails bottom */}
      <div className="ps-thumbnails">
        {PROJECTS.map((p, i) => (
          <button
            key={p.id}
            className={`ps-thumb ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          >
            <div className="ps-thumb-img" style={{ backgroundImage: `url(${p.image})` }} />
            <div className="ps-thumb-label">{p.title}</div>
          </button>
        ))}
      </div>

      {/* nav arrows */}
      <button className="ps-arrow ps-arrow-prev" onClick={prev} aria-label="Назад">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="ps-arrow ps-arrow-next" onClick={next} aria-label="Вперёд">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* progress bar */}
      <div className="ps-progress-wrap">
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            className={`ps-progress-item ${i === current ? 'active' : i < current ? 'done' : ''}`}
            onClick={() => setCurrent(i)}
          >
            <div className="ps-progress-fill" />
          </button>
        ))}
      </div>
    </section>
  );
}

function StarRow({ rating }) {
  return (
    <div className="t-stars">
      {[1,2,3,4,5].map((s) => (
        <svg key={s} viewBox="0 0 24 24" fill={s <= rating ? 'currentColor' : 'none'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ))}
    </div>
  );
}

function Testimonials() {
  const navigate = useNavigate();
  const preview = TESTIMONIALS.slice(0, 3);
  return (
    <section className="section section-alt" id="testimonials">
      <div className="container">
        <h2>Отзывы заказчиков</h2>
        <p className="section-intro">
          Нам доверяют промышленные предприятия, торговые комплексы и государственные организации.
        </p>
        <div className="cards-grid cards-grid-3">
          {preview.map((t) => (
            <div key={t.id} className="card card-testimonial">
              <div className="t-card-top">
                <img src={t.avatar} alt={t.person} className="t-avatar-img" />
                <div className="t-card-meta">
                  <div className="t-company">{t.company}</div>
                  <div className="t-person">{t.person}</div>
                  <StarRow rating={t.rating} />
                </div>
              </div>
              <p className="t-text">{t.text}</p>
              <div className="t-tags">
                {t.tags.map((tag) => (
                  <span key={tag} className="t-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="section-cta">
          <button
            className="btn btn-outline"
            onClick={() => { navigate('/reviews'); window.scrollTo(0, 0); }}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Все отзывы, дипломы и благодарственные письма
          </button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно будет подключить отправку формы на сервер или в почту
    alert('Заявка отправлена (демо). Интеграция с почтой/сервером добавляется по необходимости.');
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div>
          <h2>Свяжитесь с нами</h2>
          <p className="section-intro">
            Опишите ваш объект и задачи по обслуживанию сетей
            электроснабжения и электроосвещения. Мы подготовим предложение и
            свяжемся с вами.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="contact-label">Телефон</div>
                <a href="tel:+375291112233" className="contact-value">
                  +375 (29) 111-22-33
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="contact-label">Email</div>
                <a href="mailto:info@energoservice.by" className="contact-value">
                  info@energoservice.by
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="contact-label">График работы</div>
                <div className="contact-value">Пн–Пт 09:00–18:00</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <div className="contact-label">Адрес</div>
                <div className="contact-value">
                  Беларусь, Минск, ул. Примерная, 10, офис 5
                </div>
              </div>
            </div>
          </div>

          <div className="messengers">
            <div className="messengers-label">Написать напрямую</div>
            <div className="messengers-row">
              <a
                href="https://t.me/energoservice_by"
                target="_blank"
                rel="noopener noreferrer"
                className="messenger-btn messenger-btn-tg"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 6.386a2.137 2.137 0 0 0 .068 3.993l3.263 1.176 1.837 5.538a.955.955 0 0 0 1.613.364l2.19-2.19 4.003 2.942a2.14 2.14 0 0 0 3.322-1.356l2.544-15.18a2.14 2.14 0 0 0-2.318-1.888zm-9.965 12.055-.93 2.79-.726-2.985 6.99-6.99-6.334 7.185z"
                    fill="currentColor"/>
                </svg>
                Telegram
              </a>
              <a
                href="viber://chat?number=%2B375291112233"
                className="messenger-btn messenger-btn-viber"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M11.4 1.004C8.487 1.093 3.375 1.702 1.689 7.15c-.694 2.254-.768 5.187-.768 7.28C.921 16.526.773 20.927 4.862 22c1.06.28 5.04.28 5.04.28s.367 0 .867-.011l-.022-.484c-2.04-.627-3.302-2.337-3.302-4.785 0-2.787 1.822-4.563 4.62-4.563h4.875c.014-.14.02-.28.02-.42 0-2.407-.985-3.884-2.548-4.563v-1.46c0-.701.568-1.27 1.27-1.27.7 0 1.27.569 1.27 1.27v.84c.84.42 1.54 1.12 2.001 2.001h.84c.7 0 1.27.568 1.27 1.27 0 .7-.57 1.27-1.27 1.27h-.42c.14.559.211 1.12.211 1.68 0 3.78-3.08 6.86-6.86 6.86H11.4c-.14 0-.282-.014-.42-.028l.023.504c.56.028 1.12.042 1.68.042 3.78 0 7.56-1.26 8.82-5.04.7-2.1.7-4.62.7-6.72 0-1.68-.14-4.62-.98-6.3-1.68-3.36-5.04-4.2-9.823-4.2z"
                    fill="currentColor"/>
                </svg>
                Viber
              </a>
              <a
                href="https://wa.me/375291112233"
                target="_blank"
                rel="noopener noreferrer"
                className="messenger-btn messenger-btn-wa"
              >
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
                    fill="currentColor"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Заявка на консультацию</h3>
            <label className="field">
              <span>Название организации</span>
              <input type="text" name="company" placeholder="ООО «Компания»" />
            </label>
            <label className="field">
              <span>Имя</span>
              <input type="text" name="name" placeholder="Ваше имя" />
            </label>
            <label className="field">
              <span>Телефон *</span>
              <input
                type="tel"
                name="phone"
                placeholder="+375 (__) ___-__-__"
                required
              />
            </label>
            <label className="field">
              <span>Email *</span>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                required
              />
            </label>
            <label className="field">
              <span>Комментарий</span>
              <textarea
                name="comment"
                rows="4"
                placeholder="Кратко опишите объект и требуемые работы"
              />
            </label>
            <label className="field checkbox-field">
              <input type="checkbox" required />
              <span>Я согласен на обработку персональных данных</span>
            </label>
            <button type="submit" className="btn btn-primary btn-block">
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="logo-title">ЭнергоСервис</div>
          <div className="footer-text">
            Обслуживание сетей электроснабжения и электроосвещения.
          </div>
          <div className="footer-text small">
            © {new Date().getFullYear()} Все права защищены.
          </div>
        </div>
        <div className="footer-columns">
          <div>
            <div className="footer-heading">Меню</div>
            <button className="link-button" onClick={() => scrollToId('about')}>О нас</button>
            <button
              className="link-button"
              onClick={() => scrollToId('services')}
            >
              Услуги
            </button>
            <button
              className="link-button"
              onClick={() => scrollToId('projects')}
            >
              Объекты
            </button>
            <button
              className="link-button"
              onClick={() => scrollToId('testimonials')}
            >
              Отзывы
            </button>
            <button className="link-button" onClick={() => scrollToId('contact')}>Контакты</button>
            <button
              className="link-button"
              onClick={() => { navigate('/certificates'); window.scrollTo(0, 0); }}
            >
              Сертификаты
            </button>
            <button
              className="link-button"
              onClick={() => { navigate('/reviews'); window.scrollTo(0, 0); }}
            >
              Награды и отзывы
            </button>
          </div>
          <div>
            <div className="footer-heading">Контакты</div>
            <a className="footer-link" href="tel:+375291112233">
              +375 (29) 111-22-33
            </a>
            <a className="footer-link" href="mailto:info@energoservice.by">
              info@energoservice.by
            </a>
            <div className="footer-text small">
              Пн–Пт 09:00–18:00, дежурная служба 24/7 по договору.
            </div>
          </div>
        </div>
    </div>
    </footer>
  );
}

export default App;

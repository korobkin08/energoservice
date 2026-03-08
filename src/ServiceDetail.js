import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { SERVICES } from './servicesData';
import './ServiceDetail.css';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES.find((s) => s.id === id);

  const [activeImg, setActiveImg] = useState(0);
  const [formSent, setFormSent] = useState(false);

  if (!service) {
    return (
      <div className="sd-not-found">
        <h2>Услуга не найдена</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          На главную
        </button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  const paragraphs = service.fullDesc
    .split('\n')
    .filter((line) => line.trim() !== '');

  return (
    <div className="sd-page">
      {/* ── Header ── */}
      <header className="sd-header">
        <div className="sd-header-inner">
          <button className="sd-logo-btn" onClick={() => navigate('/')}>
            <div className="logo-mark">ES</div>
            <div className="logo-text">
              <div className="logo-title">ЭнергоСервис</div>
              <div className="logo-subtitle">Обслуживание электроснабжения и освещения</div>
            </div>
          </button>
          <button className="sd-back-btn" onClick={() => { window.location.href = '/#services'; }}>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Вернуться к услугам
          </button>
        </div>
      </header>

      {/* ── Hero cover ── */}
      <div className="sd-cover" style={{ backgroundImage: `url(${service.coverImage})` }}>
        <div className="sd-cover-overlay" />
        <div className="sd-cover-content">
          <div className="sd-breadcrumb">
            <span onClick={() => navigate('/')} className="sd-breadcrumb-link">Главная</span>
            <span className="sd-breadcrumb-sep">›</span>
            <span onClick={() => { window.location.href = '/#services'; }} className="sd-breadcrumb-link">Услуги</span>
            <span className="sd-breadcrumb-sep">›</span>
            <span>{service.title}</span>
          </div>
          <h1 className="sd-cover-title">{service.title}</h1>
          <p className="sd-cover-desc">{service.shortDesc}</p>
        </div>
      </div>

      <div className="sd-container">
        <div className="sd-layout">
          {/* ── Left: content ── */}
          <div className="sd-main">
            {/* gallery */}
            <div className="sd-gallery">
              <div className="sd-gallery-main">
                <img
                  src={service.gallery[activeImg]}
                  alt={service.title}
                  className="sd-gallery-img"
                />
              </div>
              <div className="sd-gallery-thumbs">
                {service.gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`sd-thumb ${i === activeImg ? 'active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <img src={img} alt={`фото ${i + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* description */}
            <div className="sd-description">
              <h2>Описание услуги</h2>
              {paragraphs.map((para, i) => {
                if (para.startsWith('**') && para.endsWith('**')) {
                  return (
                    <h3 key={i} className="sd-sub-heading">
                      {para.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                if (para.startsWith('- ')) {
                  return (
                    <li key={i} className="sd-list-item">
                      {para.replace('- ', '')}
                    </li>
                  );
                }
                return <p key={i}>{para}</p>;
              })}
            </div>

            {/* benefits */}
            <div className="sd-benefits">
              <h2>Наши преимущества</h2>
              <div className="sd-benefits-grid">
                {service.benefits.map((b, i) => (
                  <div key={i} className="sd-benefit-card">
                    <div className="sd-benefit-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="sd-benefit-text">{b}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: contacts + form ── */}
          <aside className="sd-aside">
            <div className="sd-contact-block">
              <h3>Связаться с нами</h3>

              <a href="tel:+375291112233" className="sd-contact-row">
                <span className="sd-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <div>
                  <div className="sd-contact-label">Телефон</div>
                  <div className="sd-contact-value">+375 (29) 111-22-33</div>
                </div>
              </a>

              <a href="mailto:info@energoservice.by" className="sd-contact-row">
                <span className="sd-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M22 6 12 13 2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <div className="sd-contact-label">Email</div>
                  <div className="sd-contact-value">info@energoservice.by</div>
                </div>
              </a>

              <div className="sd-contact-row">
                <span className="sd-contact-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
                <div>
                  <div className="sd-contact-label">Режим работы</div>
                  <div className="sd-contact-value">Пн–Пт, 09:00–18:00</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="sd-form-block">
              <h3>Заявка по услуге</h3>
              <p className="sd-form-hint">Оставьте контакты — ответим в течение часа</p>
              {formSent ? (
                <div className="sd-form-success">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01l-3-3" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>Заявка отправлена! Свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="sd-form">
                  <label className="field">
                    <span>Ваше имя</span>
                    <input type="text" name="name" placeholder="Иван Иванов" required />
                  </label>
                  <label className="field">
                    <span>Телефон *</span>
                    <input type="tel" name="phone" placeholder="+375 (__) ___-__-__" required />
                  </label>
                  <label className="field">
                    <span>Email</span>
                    <input type="email" name="email" placeholder="name@example.com" />
                  </label>
                  <label className="field">
                    <span>Комментарий</span>
                    <textarea name="comment" rows="3" placeholder="Опишите задачу..." />
                  </label>
                  <label className="field checkbox-field">
                    <input type="checkbox" required />
                    <span>Согласен на обработку персональных данных</span>
                  </label>
                  <button type="submit" className="btn btn-primary btn-block">
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>

            {/* Other services */}
            <div className="sd-other-services">
              <h3>Другие услуги</h3>
              {SERVICES.filter((s) => s.id !== service.id).slice(0, 4).map((s) => (
                <button
                  key={s.id}
                  className="sd-other-item"
                  onClick={() => { navigate(`/services/${s.id}`); window.scrollTo(0, 0); }}
                >
                  <span>{s.title}</span>
                  <svg viewBox="0 0 24 24" fill="none" className="sd-arrow">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="sd-footer">
        <div className="sd-footer-inner">
          <span>© {new Date().getFullYear()} ЭнергоСервис. Все права защищены.</span>
          <button className="sd-footer-home" onClick={() => navigate('/')}>На главную</button>
        </div>
      </footer>
    </div>
  );
}

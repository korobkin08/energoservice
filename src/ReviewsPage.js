import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TESTIMONIALS, DIPLOMAS, LETTERS } from './reviewsData';
import './ReviewsPage.css';

function StarRating({ rating }) {
  return (
    <div className="rp-stars">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} viewBox="0 0 24 24" fill={s <= rating ? 'currentColor' : 'none'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ))}
    </div>
  );
}

function LetterModal({ letter, onClose }) {
  if (!letter) return null;
  return (
    <div className="rp-modal-backdrop" onClick={onClose}>
      <div className="rp-modal" onClick={(e) => e.stopPropagation()}>
        <button className="rp-modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="rp-letter-doc">
          {/* header */}
          <div className="rp-letter-header" style={{ borderColor: letter.color }}>
            <div className="rp-letter-seal" style={{ background: `${letter.color}18`, borderColor: `${letter.color}44` }}>
              <svg viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="17" stroke={letter.color} strokeWidth="1.5" strokeDasharray="3 2"/>
                <text x="20" y="17" textAnchor="middle" fontSize="5.5" fill={letter.color}
                  fontWeight="800" fontFamily="sans-serif">ЭНЕРГО</text>
                <text x="20" y="25" textAnchor="middle" fontSize="5.5" fill={letter.color}
                  fontWeight="800" fontFamily="sans-serif">СЕРВИС</text>
              </svg>
            </div>
            <div>
              <div className="rp-letter-org-name">Благодарственное письмо</div>
              <div className="rp-letter-date">Дата: {letter.date}</div>
            </div>
          </div>

          <div className="rp-letter-body">
            <p className="rp-letter-intro">Уважаемые коллеги!</p>
            <p>{letter.preview}</p>
            <p>
              На протяжении всего периода сотрудничества ваши специалисты
              демонстрируют высокий профессионализм, исполнительность и ответственный
              подход к делу. Все работы выполняются в срок и в полном объёме,
              документация оформляется без замечаний.
            </p>
            <p>
              Надеемся на дальнейшее продуктивное сотрудничество.
            </p>
          </div>

          <div className="rp-letter-footer">
            <div className="rp-letter-from">
              <div className="rp-letter-from-company">{letter.from}</div>
              <div className="rp-letter-from-person">{letter.person}</div>
            </div>
            <div className="rp-letter-stamp" style={{ borderColor: letter.color, color: letter.color }}>
              М.П.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('reviews');
  const [openLetter, setOpenLetter] = useState(null);

  const tabs = [
    { id: 'reviews', label: 'Отзывы', count: TESTIMONIALS.length },
    { id: 'diplomas', label: 'Дипломы и награды', count: DIPLOMAS.length },
    { id: 'letters', label: 'Благодарственные письма', count: LETTERS.length },
  ];

  return (
    <div className="rp-page">
      {/* Header */}
      <header className="sd-header">
        <div className="sd-header-inner">
          <button className="sd-logo-btn" onClick={() => navigate('/')}>
            <div className="rp-logo-mark">ES</div>
            <div className="logo-text">
              <div className="rp-logo-title">ЭнергоСервис</div>
              <div className="rp-logo-sub">Обслуживание электроснабжения и освещения</div>
            </div>
          </button>
          <button className="sd-back-btn" onClick={() => { window.location.href = '/#testimonials'; }}>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            На главную
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="rp-hero">
        <div className="rp-hero-overlay" />
        <div className="rp-hero-content">
          <div className="rp-breadcrumb">
            <span className="sd-breadcrumb-link" onClick={() => navigate('/')}>Главная</span>
            <span className="sd-breadcrumb-sep">›</span>
            <span>Отзывы и награды</span>
          </div>
          <h1>Отзывы, дипломы<br/>и благодарственные письма</h1>
          <p>Нам доверяют промышленные предприятия, торговые комплексы, логистические центры и государственные организации.</p>
          <div className="rp-hero-counters">
            <div className="rp-hero-counter">
              <span className="rp-hero-counter-num">{TESTIMONIALS.length}</span>
              <span className="rp-hero-counter-label">отзывов</span>
            </div>
            <div className="rp-hero-counter-sep" />
            <div className="rp-hero-counter">
              <span className="rp-hero-counter-num">{DIPLOMAS.length}</span>
              <span className="rp-hero-counter-label">диплома и награды</span>
            </div>
            <div className="rp-hero-counter-sep" />
            <div className="rp-hero-counter">
              <span className="rp-hero-counter-num">{LETTERS.length}</span>
              <span className="rp-hero-counter-label">благодарственных письма</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rp-container">
        {/* Tabs */}
        <div className="rp-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`rp-tab ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
              <span className="rp-tab-count">{t.count}</span>
            </button>
          ))}
        </div>

        {/* ── Reviews ── */}
        {activeTab === 'reviews' && (
          <div className="rp-reviews-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="rp-review-card">
                <div className="rp-review-top">
                  <img src={t.avatar} alt={t.person} className="rp-review-avatar" />
                  <div>
                    <div className="rp-review-company">{t.company}</div>
                    <div className="rp-review-person">{t.person}</div>
                    <div className="rp-review-position">{t.position}</div>
                  </div>
                  <div className="rp-review-meta">
                    <StarRating rating={t.rating} />
                    <div className="rp-review-date">{t.date}</div>
                  </div>
                </div>
                <div className="rp-review-quote">
                  <svg viewBox="0 0 24 24" fill="none" className="rp-quote-icon">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"
                      stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
                      stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <p>{t.text}</p>
                </div>
                <div className="rp-review-tags">
                  {t.tags.map((tag) => (
                    <span key={tag} className="rp-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Diplomas ── */}
        {activeTab === 'diplomas' && (
          <div className="rp-diplomas-grid">
            {DIPLOMAS.map((d) => (
              <div key={d.id} className="rp-diploma-card">
                <div className="rp-diploma-img" style={{ backgroundImage: `url(${d.image})` }}>
                  <div className="rp-diploma-img-overlay" />
                  <div className="rp-diploma-ribbon" style={{ background: d.color }}>
                    {d.year}
                  </div>
                </div>
                <div className="rp-diploma-body">
                  <span className="rp-diploma-badge" style={{ color: d.color, background: `${d.color}15`, borderColor: `${d.color}40` }}>
                    {d.categoryLabel}
                  </span>
                  <h3 className="rp-diploma-title">{d.title}</h3>
                  <div className="rp-diploma-issuer">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {d.issuer}
                  </div>
                </div>
                {/* decorative corner */}
                <div className="rp-diploma-corner" style={{ borderColor: `${d.color}30` }} />
              </div>
            ))}
          </div>
        )}

        {/* ── Letters ── */}
        {activeTab === 'letters' && (
          <div className="rp-letters-grid">
            {LETTERS.map((l) => (
              <div
                key={l.id}
                className="rp-letter-card"
                style={{ '--letter-color': l.color }}
                onClick={() => setOpenLetter(l)}
              >
                <div className="rp-letter-card-img" style={{ backgroundImage: `url(${l.image})` }}>
                  <div className="rp-letter-card-overlay" />
                  <div className="rp-letter-card-icon">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        stroke="currentColor" strokeWidth="2"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div className="rp-letter-card-body">
                  <div className="rp-letter-card-date">{l.date}</div>
                  <div className="rp-letter-card-from">{l.from}</div>
                  <div className="rp-letter-card-person">{l.person}</div>
                  <p className="rp-letter-card-preview">{l.preview}</p>
                  <button className="rp-letter-read-btn">
                    Читать письмо
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div className="rp-letter-card-accent" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="sd-footer">
        <div className="sd-footer-inner">
          <span>© {new Date().getFullYear()} ЭнергоСервис. Все права защищены.</span>
          <button className="sd-footer-home" onClick={() => navigate('/')}>На главную</button>
        </div>
      </footer>

      {openLetter && <LetterModal letter={openLetter} onClose={() => setOpenLetter(null)} />}
    </div>
  );
}

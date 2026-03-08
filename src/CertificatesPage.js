import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CERTIFICATES, CERT_CATEGORIES } from './certificatesData';
import './CertificatesPage.css';

const CATEGORY_COLORS = {
  license: { bg: '#eff6ff', border: '#3b82f6', text: '#1d4ed8' },
  admission: { bg: '#fff7ed', border: '#f97316', text: '#c2410c' },
  lab: { bg: '#f0fdf4', border: '#22c55e', text: '#15803d' },
  iso: { bg: '#fdf4ff', border: '#a855f7', text: '#7e22ce' },
  personnel: { bg: '#fefce8', border: '#eab308', text: '#854d0e' },
};

function CertCard({ cert, onOpen }) {
  const color = CATEGORY_COLORS[cert.category] || CATEGORY_COLORS.license;
  const isExpired = cert.validUntil !== 'Бессрочно' &&
    cert.validUntil !== 'Ежегодное подтверждение' &&
    new Date(cert.validUntil.split('.').reverse().join('-')) < new Date();

  return (
    <div className="cert-card" onClick={() => onOpen(cert)}>
      <div className="cert-card-img" style={{ backgroundImage: `url(${cert.image})` }}>
        <div className="cert-card-img-overlay" />
        <span
          className="cert-category-badge"
          style={{ background: color.bg, borderColor: color.border, color: color.text }}
        >
          {cert.categoryLabel}
        </span>
      </div>

      <div className="cert-card-body">
        <div className="cert-card-number">№ {cert.number}</div>
        <h3 className="cert-card-title">{cert.title}</h3>
        <div className="cert-card-issuer">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M3 21h18M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {cert.issuer}
        </div>
        <div className="cert-card-dates">
          <div className="cert-date-item">
            <span className="cert-date-label">Выдан</span>
            <span className="cert-date-value">{cert.date}</span>
          </div>
          <div className="cert-date-sep" />
          <div className="cert-date-item">
            <span className="cert-date-label">Действует до</span>
            <span className={`cert-date-value ${isExpired ? 'expired' : ''}`}>
              {cert.validUntil}
            </span>
          </div>
          <div className={`cert-status ${isExpired ? 'status-expired' : 'status-active'}`}>
            {isExpired ? 'Истёк' : 'Действующий'}
          </div>
        </div>
      </div>
    </div>
  );
}

function CertModal({ cert, onClose }) {
  if (!cert) return null;
  const color = CATEGORY_COLORS[cert.category] || CATEGORY_COLORS.license;
  const isExpired = cert.validUntil !== 'Бессрочно' &&
    cert.validUntil !== 'Ежегодное подтверждение' &&
    new Date(cert.validUntil.split('.').reverse().join('-')) < new Date();

  return (
    <div className="cert-modal-backdrop" onClick={onClose}>
      <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cert-modal-close" onClick={onClose} aria-label="Закрыть">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="cert-modal-img" style={{ backgroundImage: `url(${cert.image})` }}>
          <div className="cert-modal-img-overlay" />
          <span
            className="cert-category-badge cert-category-badge-lg"
            style={{ background: color.bg, borderColor: color.border, color: color.text }}
          >
            {cert.categoryLabel}
          </span>
        </div>

        <div className="cert-modal-body">
          {/* mock certificate design */}
          <div className="cert-doc">
            <div className="cert-doc-header">
              <div className="cert-doc-seal">
                <svg viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="36" stroke="#ff6b35" strokeWidth="2"
                    strokeDasharray="4 3"/>
                  <circle cx="40" cy="40" r="28" stroke="#ff6b35" strokeWidth="1.5"/>
                  <text x="40" y="36" textAnchor="middle" fontSize="7" fill="#ff6b35"
                    fontWeight="700" fontFamily="sans-serif">ЭНЕРГО</text>
                  <text x="40" y="46" textAnchor="middle" fontSize="7" fill="#ff6b35"
                    fontWeight="700" fontFamily="sans-serif">СЕРВИС</text>
                  <path d="M24 56 L40 62 L56 56" stroke="#ff6b35" strokeWidth="1.5"
                    fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="cert-doc-org">
                <div className="cert-doc-org-name">ЭнергоСервис</div>
                <div className="cert-doc-org-sub">Официальный документ</div>
              </div>
            </div>

            <div className="cert-doc-divider" />

            <h2 className="cert-doc-title">{cert.title}</h2>

            <div className="cert-doc-fields">
              <div className="cert-doc-field">
                <span className="cert-doc-field-label">Выдан органом</span>
                <span className="cert-doc-field-value">{cert.issuer}</span>
              </div>
              <div className="cert-doc-field">
                <span className="cert-doc-field-label">Регистрационный номер</span>
                <span className="cert-doc-field-value cert-doc-number">{cert.number}</span>
              </div>
              <div className="cert-doc-field cert-doc-field-row">
                <div>
                  <span className="cert-doc-field-label">Дата выдачи</span>
                  <span className="cert-doc-field-value">{cert.date}</span>
                </div>
                <div>
                  <span className="cert-doc-field-label">Действителен до</span>
                  <span className={`cert-doc-field-value ${isExpired ? 'expired' : 'valid'}`}>
                    {cert.validUntil}
                  </span>
                </div>
                <div className={`cert-status ${isExpired ? 'status-expired' : 'status-active'}`}>
                  {isExpired ? 'Истёк' : 'Действующий'}
                </div>
              </div>
            </div>

            <div className="cert-doc-divider" />

            <p className="cert-doc-desc">{cert.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CertificatesPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [openCert, setOpenCert] = useState(null);

  const filtered = activeCategory === 'all'
    ? CERTIFICATES
    : CERTIFICATES.filter((c) => c.category === activeCategory);

  return (
    <div className="cp-page">
      {/* ── Header ── */}
      <header className="sd-header">
        <div className="sd-header-inner">
          <button className="sd-logo-btn" onClick={() => navigate('/')}>
            <div className="cp-logo-mark">ES</div>
            <div className="logo-text">
              <div className="cp-logo-title">ЭнергоСервис</div>
              <div className="cp-logo-subtitle">Обслуживание электроснабжения и освещения</div>
            </div>
          </button>
          <button className="sd-back-btn" onClick={() => navigate('/')}>
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            На главную
          </button>
        </div>
      </header>

      {/* ── Hero ── */}
      <div className="cp-hero">
        <div className="cp-hero-overlay" />
        <div className="cp-hero-content">
          <div className="cp-breadcrumb">
            <span className="sd-breadcrumb-link" onClick={() => navigate('/')}>Главная</span>
            <span className="sd-breadcrumb-sep">›</span>
            <span>Сертификаты и лицензии</span>
          </div>
          <h1>Сертификаты и лицензии</h1>
          <p>
            Все необходимые разрешительные документы для выполнения
            электромонтажных, строительно-монтажных работ и технического
            обслуживания инженерных систем.
          </p>
          <div className="cp-hero-stats">
            <div className="cp-hero-stat">
              <div className="cp-hero-stat-num">{CERTIFICATES.length}</div>
              <div className="cp-hero-stat-label">действующих документов</div>
            </div>
            <div className="cp-hero-stat-sep" />
            <div className="cp-hero-stat">
              <div className="cp-hero-stat-num">3</div>
              <div className="cp-hero-stat-label">лицензии Минстроя</div>
            </div>
            <div className="cp-hero-stat-sep" />
            <div className="cp-hero-stat">
              <div className="cp-hero-stat-num">ISO</div>
              <div className="cp-hero-stat-label">9001:2015 сертификат</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Filters + grid ── */}
      <div className="cp-container">
        <div className="cp-filters">
          {CERT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`cp-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
              <span className="cp-filter-count">
                {cat.id === 'all'
                  ? CERTIFICATES.length
                  : CERTIFICATES.filter((c) => c.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="cp-empty">Нет документов в этой категории</div>
        ) : (
          <div className="cp-grid">
            {filtered.map((cert) => (
              <CertCard key={cert.id} cert={cert} onOpen={setOpenCert} />
            ))}
          </div>
        )}

        {/* ── Bottom note ── */}
        <div className="cp-note">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round"/>
          </svg>
          <p>
            Оригиналы документов предоставляются по запросу. Для получения
            заверенных копий свяжитесь с нами по телефону{' '}
            <a href="tel:+375291112233">+375 (29) 111-22-33</a>{' '}
            или по email{' '}
            <a href="mailto:info@energoservice.by">info@energoservice.by</a>.
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="sd-footer">
        <div className="sd-footer-inner">
          <span>© {new Date().getFullYear()} ЭнергоСервис. Все права защищены.</span>
          <button className="sd-footer-home" onClick={() => navigate('/')}>На главную</button>
        </div>
      </footer>

      {/* ── Modal ── */}
      {openCert && <CertModal cert={openCert} onClose={() => setOpenCert(null)} />}
    </div>
  );
}

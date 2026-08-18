/**
 * WORKSHOP PRECISION — industrial minimalism with warm ivory, carbon, and Signal Orange.
 * Purpose: turn service intent into a low-friction WhatsApp, call, or directions action.
 */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  ExternalLink,
  MapPin,
  Menu,
  Phone,
  Send,
  Wrench,
  X,
} from "lucide-react";

const BUSINESS = {
  phone: "+62 822-4857-1187",
  phoneHref: "tel:+6282248571187",
  whatsapp: "https://wa.me/6282248571187?text=Halo%20Z%20KOMPUTER%2C%20saya%20ingin%20konsultasi%20kendala%20laptop.",
  website: "https://zkomputer.web.id/",
  directions: "https://www.google.com/maps/dir/?api=1&destination=-5.1579042%2C119.4630589",
  mapsUrl: "https://www.google.com/maps/place/Z+KOMPUTER/@-5.1610345,119.4555691,13z/data=!4m6!3m5!1s0x2dbee30091cadadd:0xcb8911b701d56565!8m2!3d-5.1579042!4d119.4630589!16s%2Fg%2F11s5vg5zrj?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
  coordinates: { lat: -5.1579042, lng: 119.4630589 },
};

const servicePrompts = [
  { index: "01", label: "POWER / BOOT", title: "Laptop tidak menyala", detail: "Sampaikan gejalanya agar pemeriksaan awal bisa diarahkan dengan jelas." },
  { index: "02", label: "SPEED / THERMAL", title: "Performa terasa lambat", detail: "Ceritakan kapan kendala muncul dan apa yang sedang Anda kerjakan." },
  { index: "03", label: "SYSTEM / DEVICE", title: "Masalah sistem atau perangkat", detail: "Kirim foto atau detail pesan error melalui WhatsApp sebelum datang." },
];

const consultationSteps = [
  "Hubungi Z KOMPUTER lewat WhatsApp atau telepon.",
  "Jelaskan perangkat dan gejala yang Anda alami.",
  "Gunakan rute peta untuk menuju lokasi saat sudah siap.",
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand-mark" href="#beranda" aria-label="Z KOMPUTER — kembali ke atas">
      <img className="brand-mark__icon" src="/manus-storage/zkomputer-logo_dfe37cda.png" alt="Logo Z KOMPUTER" />
      {!compact && <span className="brand-mark__type"><strong>Z KOMPUTER</strong><small>LAPTOP SERVICE</small></span>}
    </a>
  );
}

function DirectionArrow() {
  return <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.2} />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-shell" id="beranda">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Navigasi utama">
            <a href="#layanan">Kendala</a><a href="#proses">Alur</a><a href="#lokasi">Lokasi</a>
          </nav>
          <a className="header-contact" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer"><Send size={16} fill="currentColor" /><span>Chat WhatsApp</span></a>
          <button className="menu-trigger" type="button" aria-label={menuOpen ? "Tutup menu" : "Buka menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
          <a href="#layanan" onClick={() => setMenuOpen(false)}>Kendala umum</a>
          <a href="#proses" onClick={() => setMenuOpen(false)}>Alur konsultasi</a>
          <a href="#lokasi" onClick={() => setMenuOpen(false)}>Lokasi workshop</a>
          <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Chat WhatsApp <DirectionArrow /></a>
        </div>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span />Z KOMPUTER / MAKASSAR</p>
            <h1 id="hero-title">Laptop bermasalah?<br /><em>Mulai dari</em> diagnosis yang jelas.</h1>
            <p className="hero-description">Hubungi Z KOMPUTER untuk menyampaikan kendala perangkat Anda, lalu dapatkan arahan menuju langkah berikutnya.</p>
            <div className="hero-actions">
              <a className="button button--signal" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer"><Send size={17} fill="currentColor" />Konsultasi via WhatsApp<DirectionArrow /></a>
              <a className="button button--quiet" href="#lokasi"><MapPin size={18} />Lihat lokasi</a>
            </div>
            <div className="hero-meta"><span><MapPin size={15} /> Batua, Makassar</span><span className="meta-divider" /><span><Phone size={14} /> {BUSINESS.phone}</span></div>
          </div>
          <div className="hero-visual" aria-label="Meja kerja teknisi laptop">
            <div className="hero-image-frame"><img src="/manus-storage/zkomputer-hero-workbench_e9dbd684.jpg" alt="Pemeriksaan laptop di meja kerja teknisi" /></div>
            <div className="inspection-card">
              <div className="inspection-card__top"><span className="signal-dot" /><span>CHECK-IN SERVIS</span></div>
              <div className="inspection-card__line" /><p>Ceritakan gejalanya sebelum datang—lebih terarah, lebih cepat mulai.</p><ArrowDownRight size={22} />
            </div>
            <div className="brand-stamp"><img src="/manus-storage/zkomputer-logo_dfe37cda.png" alt="" /><span>ZK//DIAGNOSTIC</span></div>
            <div className="corner-code">ZK/05.1579<br />119.4630</div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Informasi utama Z KOMPUTER">
          <div className="trust-strip__lead"><Wrench size={21} /><span>COMPUTER SERVICE</span></div>
          <div className="trust-strip__body"><p>Ruang komunikasi yang jelas untuk memulai penanganan perangkat Anda.</p><a href={BUSINESS.website} target="_blank" rel="noreferrer">Kunjungi website resmi <DirectionArrow /></a></div>
        </section>

        <section className="service-section section-wrap" id="layanan" aria-labelledby="service-title">
          <div className="section-kicker"><span>01</span><div /><p>KENALI KENDALANYA</p><b>ZK</b></div>
          <div className="service-heading"><h2 id="service-title">Mulai dengan apa yang <em>Anda rasakan.</em></h2><p>Tak perlu menebak penyebabnya. Pilih gambaran kendala yang paling dekat, kemudian kirim detailnya melalui WhatsApp.</p></div>
          <div className="service-list">
            {servicePrompts.map(({ index, label, title, detail }) => <a className="service-item" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" key={index}>
              <span className="service-index">{index}</span><div><div className="diagnostic-label"><span className="signal-dot" />{label}<small>JALUR CEK</small></div><h3>{title}</h3><p>{detail}</p></div><span className="service-arrow"><ChevronRight size={25} /></span>
            </a>)}
          </div>
        </section>

        <section className="process-section" id="proses" aria-labelledby="process-title">
          <div className="process-visual"><img src="/manus-storage/zkomputer-service-detail_64be131b.jpg" alt="Detail pemeriksaan komponen laptop" /><div className="process-visual__label"><span />TELITI DALAM SETIAP LANGKAH</div></div>
          <div className="process-copy">
            <div className="section-kicker section-kicker--dark"><span>02</span><div /><p>ALUR YANG SEDERHANA</p><b>ZK</b></div>
            <h2 id="process-title">Satu percakapan,<br /><em>arah yang lebih pasti.</em></h2>
            <ol className="steps-list">{consultationSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p><Check size={18} /></li>)}</ol>
            <a className="text-link text-link--light" href={BUSINESS.phoneHref}><Phone size={17} /> Telepon {BUSINESS.phone} <DirectionArrow /></a>
          </div>
        </section>

        <section className="location-section section-wrap" id="lokasi" aria-labelledby="location-title">
          <div className="location-grid">
            <div className="location-copy">
              <div className="section-kicker"><span>03</span><div /><p>DATANG KE WORKSHOP</p><b>ZK</b></div>
              <h2 id="location-title">Titik servis Anda<br /><em>di Makassar.</em></h2>
              <p className="location-address">Jl. Batua Raya XII A No.36, Batua, Kec. Manggala, Kota Makassar, Sulawesi Selatan 90234</p>
              <div className="location-hours"><Clock3 size={18} /><span>Jam operasional dapat berubah. Konfirmasi melalui WhatsApp sebelum berkunjung.</span></div>
              <div className="location-actions"><a className="button button--dark" href={BUSINESS.directions} target="_blank" rel="noreferrer"><MapPin size={18} /> Buka petunjuk arah <DirectionArrow /></a><a className="text-link" href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer">Lihat di Google Maps <ExternalLink size={15} /></a></div>
            </div>
            <div className="map-frame location-schematic" aria-label="Koordinat lokasi Z KOMPUTER di Batua, Makassar">
              <div className="schematic-route schematic-route--a" /><div className="schematic-route schematic-route--b" /><div className="schematic-route schematic-route--c" />
              <div className="map-badge"><span className="signal-dot" /> Z KOMPUTER</div>
              <div className="location-pin"><span>Z</span></div>
              <div className="coordinate-card"><small>LOCATION PIN / ACTIVE</small><strong>-5.1579042<br />119.4630589</strong><span>BATUA · MAKASSAR</span></div>
              <div className="route-status"><span className="signal-dot" /> RUTE TERSEDIA DI GOOGLE MAPS</div>
            </div>
          </div>
        </section>

        <section className="final-cta" aria-label="Mulai konsultasi servis laptop">
          <div className="final-cta__wire" /><p className="eyebrow"><span />BUTUH ARAHAN SEKARANG?</p><h2>Kendalanya sudah ada.<br /><em>Mari mulai percakapannya.</em></h2>
          <a className="button button--signal button--large" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer"><Send size={19} fill="currentColor" /> Chat Z KOMPUTER di WhatsApp <DirectionArrow /></a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__top"><BrandMark compact /><p>Z KOMPUTER · Computer service di Makassar</p><a href={BUSINESS.website} target="_blank" rel="noreferrer">zkomputer.web.id <DirectionArrow /></a></div>
        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Z KOMPUTER</span><a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a><a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer">Google Maps</a></div>
      </footer>
      <a className="floating-chat" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat Z KOMPUTER di WhatsApp"><Send size={21} fill="currentColor" /><span>WhatsApp</span></a>
    </div>
  );
}

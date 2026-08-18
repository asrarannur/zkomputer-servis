/**
 * WORKSHOP PRECISION — a direct, technical contact desk in warm ivory, carbon,
 * and Signal Orange. Every element should guide visitors to WhatsApp, phone, or route.
 */
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock3,
  ExternalLink,
  MapPin,
  Phone,
  Send,
  Wrench,
} from "lucide-react";

const BUSINESS = {
  phone: "+62 822-4857-1187",
  phoneHref: "tel:+6282248571187",
  whatsapp: "https://wa.me/6282248571187?text=Halo%20Z%20KOMPUTER%2C%20saya%20ingin%20konsultasi%20kendala%20laptop.",
  directions: "https://www.google.com/maps/dir/?api=1&destination=-5.1579042%2C119.4630589",
  mapsUrl: "https://www.google.com/maps/place/Z+KOMPUTER/@-5.1610345,119.4555691,13z/data=!4m6!3m5!1s0x2dbee30091cadadd:0xcb8911b701d56565!8m2!3d-5.1579042!4d119.4630589!16s%2Fg%2F11s5vg5zrj?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D",
};

function DirectionArrow() {
  return <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.2} />;
}

function BrandMark() {
  return (
    <a className="brand-mark" href="/" aria-label="Z KOMPUTER — kembali ke beranda">
      <img className="brand-mark__icon" src="/assets/zkomputer-logo-v2.webp" alt="Logo Z KOMPUTER" width={320} height={320} decoding="async" />
      <span className="brand-mark__type"><strong>Z KOMPUTER</strong><small>LAPTOP SERVICE</small></span>
    </a>
  );
}

export default function Contact() {
  useEffect(() => {
    document.title = "Kontak Z KOMPUTER — Laptop Service Makassar";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Hubungi Z KOMPUTER melalui WhatsApp atau telepon, atau buka rute menuju lokasi servis laptop di Makassar.");
  }, []);

  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="contact-header__inner">
          <BrandMark />
          <nav className="contact-nav" aria-label="Navigasi halaman kontak">
            <a href="/"><ArrowLeft size={15} /> Beranda</a>
            <a href="/#lokasi">Lokasi</a>
          </nav>
          <a className="contact-header__action" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer"><Send size={16} fill="currentColor" />Chat WhatsApp</a>
        </div>
      </header>

      <main>
        <section className="contact-hero" aria-labelledby="contact-title">
          <div className="contact-hero__grid" aria-hidden="true" />
          <div className="contact-hero__copy">
            <p className="contact-kicker"><span />CONTACT DESK / ZK-01</p>
            <a className="contact-back" href="/"><ArrowLeft size={16} /> Kembali ke beranda</a>
            <h1 id="contact-title">Mulai dari <em>pesan singkat.</em><br />Kami siapkan jalurnya.</h1>
            <p>Jelaskan perangkat dan gejalanya melalui kanal yang paling nyaman. Untuk kunjungan, gunakan rute yang tersedia agar Anda sampai ke workshop dengan tepat.</p>
          </div>
          <aside className="contact-signal-card" aria-label="Status kanal kontak">
            <div className="contact-signal-card__head"><span className="signal-dot" />JALUR KONTAK / AKTIF</div>
            <div className="contact-signal-card__rule" />
            <ol>
              <li><span>01</span><div><strong>WhatsApp</strong><small>Konsultasi awal &amp; foto kendala</small></div><Send size={16} /></li>
              <li><span>02</span><div><strong>Telepon</strong><small>Komunikasi langsung</small></div><Phone size={16} /></li>
              <li><span>03</span><div><strong>Petunjuk arah</strong><small>Rute menuju workshop</small></div><MapPin size={16} /></li>
            </ol>
          </aside>
          <div className="contact-hero__code">ZK / MAKASSAR<br />-5.1579 · 119.4630</div>
        </section>

        <section className="contact-channels" aria-labelledby="channel-title">
          <div className="contact-section-label"><span>01</span><div /><p>PILIH CARA MENGHUBUNGI</p><b>ZK</b></div>
          <div className="contact-channels__intro"><h2 id="channel-title">Tiga jalur yang <em>langsung.</em></h2><p>Tak ada formulir panjang. Pilih aksi di bawah sesuai kebutuhan Anda saat ini.</p></div>
          <div className="contact-channel-grid">
            <a className="contact-channel contact-channel--signal" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer">
              <div className="contact-channel__index">A / 01</div><Send size={28} fill="currentColor" /><h3>Chat WhatsApp</h3><p>Kirim merek perangkat, keluhan, atau foto pesan error untuk memulai konsultasi.</p><span>Mulai percakapan <DirectionArrow /></span>
            </a>
            <a className="contact-channel contact-channel--carbon" href={BUSINESS.phoneHref}>
              <div className="contact-channel__index">B / 02</div><Phone size={28} /><h3>Telepon langsung</h3><p>{BUSINESS.phone}<br />Gunakan bila Anda ingin berbicara langsung dengan Z KOMPUTER.</p><span>Hubungi sekarang <DirectionArrow /></span>
            </a>
            <a className="contact-channel contact-channel--paper" href={BUSINESS.directions} target="_blank" rel="noreferrer">
              <div className="contact-channel__index">C / 03</div><MapPin size={28} /><h3>Datang ke workshop</h3><p>Jl. Batua Raya XII A No.36, Batua, Kec. Manggala, Makassar.</p><span>Buka rute <DirectionArrow /></span>
            </a>
          </div>
        </section>

        <section className="contact-brief" aria-labelledby="brief-title">
          <div className="contact-brief__copy">
            <div className="contact-section-label contact-section-label--light"><span>02</span><div /><p>SUPAYA LEBIH TERARAH</p><b>ZK</b></div>
            <h2 id="brief-title">Saat menghubungi,<br /><em>mulai dari yang Anda lihat.</em></h2>
            <p>Sebutkan jenis perangkat, gejala utama, dan kapan kendala muncul. Informasi awal ini membantu percakapan pertama menjadi lebih jelas.</p>
            <a className="contact-brief__link" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer"><Send size={17} fill="currentColor" />Kirim pesan ke Z KOMPUTER <DirectionArrow /></a>
          </div>
          <ol className="contact-brief__steps">
            <li><span>01</span><div><strong>Perangkat</strong><p>Contoh: laptop, seri, atau jenis sistem yang digunakan.</p></div><Check size={18} /></li>
            <li><span>02</span><div><strong>Gejala</strong><p>Contoh: tidak menyala, lambat, panas, atau muncul pesan error.</p></div><Check size={18} /></li>
            <li><span>03</span><div><strong>Waktu kejadian</strong><p>Ceritakan kapan gejala mulai muncul dan aktivitas saat itu.</p></div><Check size={18} /></li>
          </ol>
        </section>

        <section className="contact-location" aria-labelledby="contact-location-title">
          <div className="contact-location__details">
            <div className="contact-section-label"><span>03</span><div /><p>LOKASI WORKSHOP</p><b>ZK</b></div>
            <h2 id="contact-location-title">Ketika siap datang,<br /><em>rutenya sudah ada.</em></h2>
            <address>Jl. Batua Raya XII A No.36, Batua, Kec. Manggala, Kota Makassar, Sulawesi Selatan 90234</address>
            <p className="contact-location__notice"><Clock3 size={18} />Jam operasional dapat berubah. Konfirmasi melalui WhatsApp sebelum berkunjung.</p>
            <div className="contact-location__actions"><a className="contact-route-button" href={BUSINESS.directions} target="_blank" rel="noreferrer"><MapPin size={18} />Buka petunjuk arah <DirectionArrow /></a><a href={BUSINESS.mapsUrl} target="_blank" rel="noreferrer">Lihat di Google Maps <ExternalLink size={15} /></a></div>
          </div>
          <div className="contact-map-frame"><iframe title="Peta lokasi Z KOMPUTER di Batua, Makassar" src="https://www.google.com/maps?q=-5.1579042%2C119.4630589&z=17&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
        </section>
      </main>

      <footer className="contact-footer">
        <div><a className="brand-mark" href="/"><img className="brand-mark__icon" src="/assets/zkomputer-logo-v2.webp" alt="" width={320} height={320} decoding="async" /><span className="brand-mark__type"><strong>Z KOMPUTER</strong><small>LAPTOP SERVICE</small></span></a><p>Contact desk · Makassar</p></div>
        <a href={BUSINESS.phoneHref}>{BUSINESS.phone}</a>
      </footer>
      <a className="contact-floating-chat" href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat Z KOMPUTER di WhatsApp"><Send size={21} fill="currentColor" /><span>WhatsApp</span></a>
    </div>
  );
}

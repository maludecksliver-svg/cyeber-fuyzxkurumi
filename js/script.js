// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
      navLinks.classList.remove('open');
    }
  });
}

// Service Modal
const modal = document.getElementById('serviceModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

const serviceContent = {
  penetration: {
    title: 'Penetration Testing',
    body: 'Kami melakukan simulasi serangan realistis terhadap infrastruktur, aplikasi, dan layanan digital Anda untuk menemukan celah keamanan sebelum diakses oleh pihak yang tidak berwenang. Setiap temuan dilengkapi dengan tingkat risiko, dampak bisnis, dan rekomendasi prioritas.',
    features: ['Network PenTest', 'Web & API Testing', 'Red Team Exercise', 'Social Engineering Test']
  },
  vulnerability: {
    title: 'Vulnerability Assessment',
    body: 'Layanan ini membantu Anda memetakan seluruh kerentanan berdasarkan tingkat risiko, eksposur, dan dampak. Kami menganalisis sistem, aplikasi, perangkat jaringan, hingga konfigurasi cloud untuk memastikan mitigasi yang tepat.',
    features: ['Automated Scanning', 'Manual Testing', 'Risk Prioritization', 'Remediation Guidance']
  },
  audit: {
    title: 'Security Audit & Compliance',
    body: 'Audit keamanan kami menilai kepatuhan terhadap standar industri dan regulasi, termasuk ISO 27001, GDPR, dan PCI-DSS. Kami juga membantu membangun kebijakan, kontrol keamanan, dan proses yang siap untuk audit eksternal.',
    features: ['ISO 27001 Audit', 'GDPR Compliance', 'PCI-DSS Assessment', 'Policy Development']
  },
  soc: {
    title: 'Security Monitoring & SOC',
    body: 'Dengan SOC 24/7, kami memantau ancaman secara real-time dan memastikan respons cepat terhadap peristiwa keamanan. Layanan ini mencakup log analysis, threat hunting, dan alert triage.',
    features: ['24/7 Monitoring', 'Threat Detection', 'Incident Response', 'Alert Management']
  },
  training: {
    title: 'Security Awareness Training',
    body: 'Program pelatihan kami dirancang untuk memperkuat kesadaran karyawan terhadap teknik phishing, social engineering, dan praktik keamanan digital. Kami menyesuaikan materi dengan kebutuhan organisasional Anda.',
    features: ['Corporate Training', 'Phishing Simulations', 'Certification Courses', 'Executive Briefing']
  },
  infrastructure: {
    title: 'Infrastructure Security',
    body: 'Kami merancang infrastruktur yang aman dari perangkat jaringan hingga sistem cloud. Fungsionalitas utama meliputi segmentasi jaringan, firewall review, IDS/IPS, dan implementasi kontrol keamanan yang kuat.',
    features: ['Firewall Configuration', 'IDS/IPS Implementation', 'Network Segmentation', 'DDoS Protection']
  }
};

function openServiceModal(key) {
  const content = serviceContent[key];
  if (!content) return;

  const featuresList = content.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('');

  modalBody.innerHTML = `
    <h2>${content.title}</h2>
    <p>${content.body}</p>
    <ul class="service-card" style="list-style: none; margin: 20px 0;">
      ${featuresList}
    </ul>
    <button class="btn btn-primary" onclick="document.getElementById('booking').scrollIntoView(); document.getElementById('serviceModal').classList.remove('open');">
      <i class="fas fa-calendar-check"></i> Konsultasi Gratis
    </button>
  `;

  modal.classList.add('open');
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => modal.classList.remove('open'));
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('open');
    }
  });
}

// Booking Form
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Terima kasih ${name}! Permintaan konsultasi Anda telah dikirim. Tim Cyeber FuyzXKurumi akan menghubungi Anda segera.`);
    bookingForm.reset();
  });
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Terima kasih! Email Anda telah terdaftar untuk newsletter.');
    newsletterForm.reset();
  });
}

// Dashboard Button
function goToDashboard() {
  alert('Dashboard keamanan siap digunakan. Silakan hubungi tim untuk akses login dashboard Anda.');
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('open');
      }
    }
  });
});

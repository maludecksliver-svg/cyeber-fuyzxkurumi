const menu = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (menu && navLinks) {
  menu.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

const modal = document.getElementById('serviceModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

const serviceContent = {
  penetration: {
    title: 'Penetration Testing',
    body: 'Kami melakukan simulasi serangan realistis terhadap infrastruktur, aplikasi, dan layanan digital Anda untuk menemukan celah keamanan sebelum diakses oleh pihak yang tidak berwenang. Setiap temuan dilengkapi dengan tingkat risiko, dampak bisnis, dan rekomendasi prioritas.'
  },
  vulnerability: {
    title: 'Vulnerability Assessment',
    body: 'Layanan ini membantu Anda memetakan seluruh kerentanan berdasarkan tingkat risiko, eksposur, dan dampak. Kami menganalisis sistem, aplikasi, perangkat jaringan, hingga konfigurasi cloud untuk memastikan mitigasi yang tepat.'
  },
  audit: {
    title: 'Security Audit & Compliance',
    body: 'Audit keamanan kami menilai kepatuhan terhadap standar industri dan regulasi, termasuk ISO 27001, GDPR, dan PCI-DSS. Kami juga membantu membangun kebijakan, kontrol keamanan, dan proses yang siap untuk audit eksternal.'
  },
  soc: {
    title: 'Security Monitoring & SOC',
    body: 'Dengan SOC 24/7, kami memantau ancaman secara real-time dan memastikan respons cepat terhadap peristiwa keamanan. Layanan ini mencakup log analysis, threat hunting, dan alert triage.'
  },
  training: {
    title: 'Pelatihan Keamanan & Awareness',
    body: 'Program pelatihan kami dirancang untuk memperkuat kesadaran karyawan terhadap teknik phishing, social engineering, dan praktik keamanan digital. Kami menyesuaikan materi dengan kebutuhan organisasional Anda.'
  },
  infrastructure: {
    title: 'Infrastructure Security',
    body: 'Kami merancang infrastruktur yang aman dari perangkat jaringan hingga sistem cloud. Fungsionalitas utama meliputi segmentasi jaringan, firewall review, IDS/IPS, dan implementasi kontrol keamanan yang kuat.'
  }
};

function openServiceModal(key) {
  const content = serviceContent[key];
  if (!content) return;

  modalBody.innerHTML = `
    <h2>${content.title}</h2>
    <p>${content.body}</p>
    <ul class="service-features">
      <li><i class="fas fa-check"></i> Risk Analysis</li>
      <li><i class="fas fa-check"></i> Security Review</li>
      <li><i class="fas fa-check"></i> Action Plan & Roadmap</li>
      <li><i class="fas fa-check"></i> Expert Implementation Support</li>
    </ul>
    <button class="btn btn-primary" onclick="document.getElementById('booking').scrollIntoView(); document.getElementById('serviceModal').classList.remove('open');">
      <i class="fas fa-calendar"></i> Konsultasi Gratis
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

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Permintaan konsultasi Anda berhasil dikirim. Tim Cyeber FuyzXKurumi akan segera menghubungi Anda.');
    bookingForm.reset();
  });
}

function goToDashboard() {
  alert('Dashboard keamanan siap digunakan. Silakan hubungi tim untuk akses login dashboard Anda.');
}

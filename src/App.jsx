import React, { useState, useEffect } from 'react';
import { 
  Database, 
  BarChart3, 
  Code2, 
  GitMerge, 
  Mail, 
  Linkedin,
  Phone, 
  ExternalLink, 
  ChevronRight, 
  Menu, 
  X, 
  Download,
  Terminal
} from 'lucide-react';

import fotoprofil from './assets/paramayu.jpg';
import project01 from './assets/prj01.png';
import project02 from './assets/prj02.png';
import project03 from './assets/prj03.png';
import project04 from './assets/prj04.png';
import project05 from './assets/prj05.png';
import project06 from './assets/prj06.png';
import project07 from './assets/prj07.png';
import project08 from './assets/prj08.png';
import project09 from './assets/prj09.png';

// --- DATA ---
const PORTFOLIO_DATA = {
  name: "Rr. Parama Ayu Janitra",
  nickname: "Parama Ayu",
  role: "Data Analyst",
  email: "paramajanitra04@gmail.com",
  linkedin: "https://www.linkedin.com/in/paramaayu",
  phone: "081384274661",
  profileImage: fotoprofil,
  about: "Saya Parama Ayu, seorang freshgraduate di Universitas Bina Sarana Informatika dengan antusiasme tinggi di bidang Data Analyst. Saya bersemangat menerjemahkan data menjadi solusi melalui analisis yang akurat, kreativitas dalam memecahkan masalah, dan penyajian wawasan yang mudah dipahami.",
  skills: [
    {
      title: "Database (MySQL & PostgreSQL)",
      icon: <Database className="w-8 h-8 text-blue-400" />,
      description: "Mampu menulis dan mengoptimalkan query SQL untuk mengambil, memfilter, dan menggabungkan data dari sistem database relasional seperti MySQL dan PostgreSQL."
    },
    {
      title: "Data Integration & Transformation",
      icon: <GitMerge className="w-8 h-8 text-purple-400" />,
      description: "Mampu merancang dan mengimplementasikan alur kerja ETL (Extract, Transform, Load) menggunakan Pentaho Data Integration untuk membersihkan, memproses, dan mengintegrasikan data dari berbagai sumber."
    },
    {
      title: "Microsoft Office & Google Workspace",
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      description: "Mahir menggunakan fungsi tingkat lanjut Excel (VLOOKUP, Pivot Table, Power Query, Macro/VBA) untuk membersihkan, menganalisis, dan memodelkan data secara efisien."
    },
    {
      title: "Data Visualization (Tableau, Power BI, Grafana)",
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      description: "Terampil dalam membangun dashboard interaktif dan visualisasi data yang informatif untuk menyajikan temuan analisis secara efektif dan mudah dipahami."
    }
  ],
  projects: [
    {
      id: 1,
      title: "Northwind Executive Summary & Shipping",
      context: "Studi Independen MSIB Batch 7 di Celerates",
      date: "Nov 2024",
      tools: ["DBeaver", "Pentaho", "Tableau"],
      description: "Dashboard interaktif tingkat tinggi untuk pengambil keputusan yang menyajikan wawasan pendapatan, kategori produk, supplier, serta melacak performa pengiriman harian.",
      link: "https://public.tableau.com/app/profile/rr.parama.ayu.janitra/viz/dwh_northwind_17318958716480/NorthwindShipping",
      image: project01
    },
    { 
      id: 2,
      title: "Complaint Customer Analysis",
      context: "Studi Independen MSIB Batch 7 di Celerates",
      date: "Nov 2024",
      tools: ["DBeaver", "Tableau"],
      description: "Solusi analisis dengan dua halaman dasbor interaktif untuk memonitor data komplain pelanggan secara menyeluruh, membantu identifikasi tren dan akar masalah dengan cepat.",
      link: "https://public.tableau.com/app/profile/rr.parama.ayu.janitra/viz/complaint_customer_17320885195560/Dashboard1",
      image: project02
    },
    {
      id: 3,
      title: "HR Dashboard",
      context: "Studi Independen MSIB Batch 7 di Celerates",
      date: "Nov 2024",
      tools: ["DBeaver", "Power BI"],
      description: "Dasbor komprehensif untuk memberikan wawasan kondisi SDM perusahaan, mendukung pengambilan keputusan strategis hingga operasional, dan mengelola siklus hidup karyawan.",
      image: project03
    },
    {
      id: 4,
      title: "Analisis Nutrisi & Rekomendasi Diet",
      context: "Final Project MSIB Batch 7 Celerates",
      date: "Des 2024",
      tools: ["DBeaver", "Pentaho", "Tableau"],
      description: "Asisten diet personal memanfaatkan dataset USDA. Memberdayakan pengguna untuk menjelajahi, membandingkan kandungan gizi makanan, dan membuat pilihan sesuai kebutuhan kalori.",
      link: "https://public.tableau.com/app/profile/alief.luqiakbar/viz/FinalProject_DABI_Kelompok4/Overview",
      image: project04
    },
    {
      id: 5,
      title: "Proses ETL Data DVD Rental",
      context: "Studi Independen MSIB Batch 7",
      date: "Des 2024",
      tools: ["DBeaver", "Pentaho"],
      description: "Demonstrasi proses end-to-end pengolahan data mentah (transaksional) menjadi Data Mart terstruktur menggunakan Pentaho untuk kebutuhan pelaporan Business Intelligence.",
      image: project05
    },
    {
      id: 6,
      title: "Waktu Transaksi Voucher by Device",
      context: "PKL di Mega Kreasi Tech",
      date: "Okt 2025",
      tools: ["DBeaver", "SQL", "Grafana"],
      description: "Analisis penggunaan voucher yang mengungkap puncak aktivitas pada jam siang-sore dengan dominasi pengguna Apple, memberikan insight bagi tim marketing untuk optimasi kampanye.",
      image: project06
    },
    {
      id: 7,
      title: "Okupansi Genre Film by Rentang Usia",
      context: "PKL di Mega Kreasi Tech",
      date: "Okt 2025",
      tools: ["DBeaver", "SQL", "Grafana"],
      description: "Analisis pola penonton yang menemukan bahwa usia 26-35 tahun mendominasi genre Drama & Romance, membantu penyusunan strategi promosi yang tepat sasaran berdasarkan umur.",
      image: project07
    },
    {
      id: 8,
      title: "Penjualan Kursi vs Genre di Hari Kerja",
      context: "PKL di Mega Kreasi Tech",
      date: "Okt 2025",
      tools: ["DBeaver", "SQL", "Grafana"],
      description: "Menganalisis pola penjualan tiket bioskop. Menemukan Senin sebagai hari tertinggi (Film Perang/Keluarga) dan Kamis terendah, menghasilkan rekomendasi diskon khusus untuk optimalisasi.",
      image: project08
    },
    {
      id: 9,
      title: "Cafe Sales Dashboard",
      context: "Data Analyst Project",
      date: "Aug 2026",
      tools: ["Microsoft Excel"],
      description: "Dashboard interaktif komprehensif menggunakan Excel untuk memantau performa penjualan kafe. Menyajikan KPI utama (Total Revenue, Order, AOV), tren pendapatan bulanan, produk terlaris, serta demografi metode pembayaran dan preferensi pesanan (In-store/Takeaway).",
      image: project09
    }
  ]
};

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-blue-400" />
          <span>Paramayu</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-300 hover:text-white hover:text-blue-400 transition-colors text-sm font-medium">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all shadow-lg shadow-blue-500/25">
            Mari Berdiskusi
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 p-4 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white p-2 rounded hover:bg-slate-800">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-20"></div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Terbuka untuk Peluang Baru
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Menerjemahkan <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
              Data Mentah
            </span> <br />
            Menjadi Solusi.
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Halo, saya <strong className="text-slate-200">{PORTFOLIO_DATA.name}</strong>. {PORTFOLIO_DATA.role} yang berdedikasi mengubah angka dan tren menjadi wawasan strategis untuk mendukung keputusan bisnis yang akurat.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center gap-2 transition-colors">
              Lihat Portofolio <ChevronRight className="w-4 h-4" />
            </a>
            {}
            <a 
              href="/CV_Parama_Ayu.pdf" 
              download="CV_Parama_Ayu.pdf"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4" /> Unduh CV
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square rounded-full border border-slate-800 flex items-center justify-center p-8 bg-slate-900/50 backdrop-blur-sm">
            {/* Abstract Data Viz Representation */}
            <div className="w-full h-full relative border border-slate-700/50 rounded-full flex items-center justify-center">
              <div className="absolute w-3/4 h-3/4 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute w-1/2 h-1/2 border border-purple-500/30 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
              <BarChart3 className="w-32 h-32 text-slate-700" />
              
              {/* Floating tags */}
              <div className="absolute top-10 right-10 bg-slate-800 border border-slate-700 p-3 rounded-xl shadow-xl animate-bounce">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <div className="absolute bottom-20 left-10 bg-slate-800 border border-slate-700 p-3 rounded-xl shadow-xl animate-bounce" style={{animationDelay: '1s'}}>
                <Code2 className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Bagian Foto */}
          <div className="relative group max-w-md mx-auto md:max-w-none md:pr-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 aspect-[4/5] shadow-2xl">
              <img 
                src={PORTFOLIO_DATA.profileImage} 
                alt="Foto Profil Parama Ayu" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay untuk panduan (hanya muncul saat disorot mouse) */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                  Halo, Saya Parama Ayu!
                </span>
              </div>
            </div>
          </div>

          {/* Bagian Teks */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tentang Saya</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-8"></div>
            <p className="text-lg text-slate-300 leading-relaxed bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 shadow-xl">
              {PORTFOLIO_DATA.about}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Keahlian & Tools</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Kombinasi teknis dan analitis yang saya gunakan untuk mengubah data menjadi cerita yang bermakna.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.skills.map((skill, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:-translate-y-2 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 group">
              <div className="mb-4 p-3 bg-slate-900 rounded-xl inline-block group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/30 border-y border-slate-800 relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Highlights</h2>
            <p className="text-slate-400 max-w-2xl">Kumpulan studi kasus dan proyek analitik yang telah saya kerjakan dari bootcamp hingga pengalaman PKL.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div key={project.id} className="group bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
              {/* Card Header / Image placeholder */}
              <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-slate-700">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-3 left-4 z-20 flex gap-2">
                  <span className="px-2.5 py-1 text-xs font-semibold bg-blue-600 text-white rounded-md shadow-sm">
                    {project.date}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-emerald-400 text-xs font-bold tracking-wider uppercase mb-2">
                  {project.context}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack & Link */}
                <div className="mt-auto pt-4 border-t border-slate-700 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 3).map((tool, i) => (
                      <span key={i} className="text-xs font-medium text-slate-300 bg-slate-700/50 px-2 py-1 rounded">
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && <span className="text-xs font-medium text-slate-500">+{project.tools.length - 3}</span>}
                  </div>
                  
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white p-2 bg-slate-800 rounded-full transition-colors group-hover:bg-blue-600">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Tertarik Bekerja Sama?</h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Saya selalu terbuka untuk mendiskusikan peluang baru, proyek analisis data, atau sekadar berbagi wawasan mengenai dunia data.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href={`mailto:${PORTFOLIO_DATA.email}`} className="flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-600/25 w-full sm:w-auto justify-center">
            <Mail className="w-5 h-5" />
            Kirim Email
          </a>
          <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium transition-all w-full sm:w-auto justify-center">
            <Linkedin className="w-5 h-5 text-[#0A66C2]" />
            LinkedIn
          </a>
          <a href={`https://wa.me/${PORTFOLIO_DATA.phone}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium transition-all w-full sm:w-auto justify-center">
            <Phone className="w-5 h-5 text-emerald-500" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with passion in my life.
      </p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

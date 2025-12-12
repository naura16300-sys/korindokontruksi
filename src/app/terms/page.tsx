"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Building2, 
  FileText,
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
  Gavel,
  Scale,
  Calendar,
  Mail,
  Phone
} from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lastUpdated = "1 Desember 2024";

  const sections = [
    {
      icon: FileText,
      title: "Penerimaan Syarat dan Ketentuan",
      content: [
        {
          subtitle: "Kesepakatan Mengikat",
          text: "Dengan mengakses dan menggunakan website PT KORINDO KONSTRUKSI, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini, Kebijakan Privasi kami, dan semua peraturan perundang-undangan yang berlaku di Indonesia."
        },
        {
          subtitle: "Perubahan Syarat",
          text: "Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan berlaku efektif segera setelah dipublikasikan di website ini. Penggunaan website Anda setelah perubahan merupakan penerimaan terhadap syarat yang baru."
        },
        {
          subtitle: "Usia Pengguna",
          text: "Website ini ditujukan untuk pengguna yang berusia minimal 18 tahun atau telah menikah sesuai hukum yang berlaku di Indonesia. Pengguna di bawah usia tersebut harus diawasi oleh orang tua atau wali."
        }
      ]
    },
    {
      icon: Users,
      title: "Hak dan Kewajiban Pengguna",
      content: [
        {
          subtitle: "Hak Pengguna",
          text: "Anda berhak mengakses informasi tentang layanan kami, menghubungi kami untuk konsultasi, dan menggunakan fitur-fitur yang tersedia di website sesuai dengan tujuan yang ditentukan."
        },
        {
          subtitle: "Kewajiban Pengguna",
          text: "Anda wajib memberikan informasi yang akurat dan lengkap, tidak menggunakan website untuk tujuan ilegal atau tidak etis, menghormati hak kekayaan intelektual, dan tidak mengganggu operasional website."
        },
        {
          subtitle: "Larangan Penggunaan",
          text: "Dilarang keras melakukan hacking, menyebarkan malware, spam, phishing, atau aktivitas ilegal lainnya. Dilarang pula menyalin, mendistribusikan, atau memodifikasi konten tanpa izin tertulis."
        }
      ]
    },
    {
      icon: Building2,
      title: "Layanan dan Informasi",
      content: [
        {
          subtitle: "Deskripsi Layanan",
          text: "PT KORINDO KONSTRUKSI menyediakan informasi tentang jasa konstruksi fasilitas pelabuhan, termasuk pembangunan dermaga, terminal, gudang, dan fasilitas pendukung lainnya."
        },
        {
          subtitle: "Akurasi Informasi",
          text: "Kami berusaha menyediakan informasi yang akurat dan terkini, namun tidak menjamin kelengkapan atau ketepatan semua informasi. Informasi dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu."
        },
        {
          subtitle: "Ketersediaan Layanan",
          text: "Kami tidak menjamin website akan tersedia 24/7 tanpa gangguan. Pemeliharaan atau perbaikan dapat menyebabkan website tidak dapat diakses sementara waktu."
        }
      ]
    },
    {
      icon: Shield,
      title: "Hak Kekayaan Intelektual",
      content: [
        {
          subtitle: "Konten Website",
          text: "Semua konten di website ini, termasuk teks, gambar, logo, desain, dan materi lainnya dilindungi oleh hak cipta dan merek dagang milik PT KORINDO KONSTRUKSI atau pihak ketiga yang berwenang."
        },
        {
          subtitle: "Penggunaan Terbatas",
          text: "Anda diperbolehkan melihat, mencetak, atau mengunduh konten untuk penggunaan pribadi dan non-komersial. Penggunaan komersial atau redistribusi memerlukan izin tertulis dari kami."
        },
        {
          subtitle: "Merek Dagang",
          text: "Nama PT KORINDO KONSTRUKSI, logo, dan merek dagang lainnya adalah properti eksklusif kami dan tidak boleh digunakan tanpa izin tertulis."
        }
      ]
    },
    {
      icon: AlertTriangle,
      title: "Batasan Tanggung Jawab",
      content: [
        {
          subtitle: "Kerugian Langsung",
          text: "Kami tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang timbul dari penggunaan atau ketidakmampuan penggunaan website, termasuk kehilangan data atau keuntungan bisnis."
        },
        {
          subtitle: "Link Pihak Ketiga",
          text: "Website kami mungkin mengandung link ke website pihak ketiga. Kami tidak bertanggung jawab atas konten, privasi, atau praktik bisnis website tersebut."
        },
        {
          subtitle: "Ketergantungan Informasi",
          text: "Informasi di website ini tidak boleh dijadikan satu-satunya acuan untuk pengambilan keputusan bisnis penting. Selalu lakukan verifikasi independen dan konsultasi dengan profesional."
        }
      ]
    },
    {
      icon: Gavel,
      title: "Privasi dan Data Pribadi",
      content: [
        {
          subtitle: "Pengumpulan Data",
          text: "Pengumpulan dan penggunaan data pribadi Anda diatur oleh Kebijakan Privasi kami yang merupakan bagian tidak terpisahkan dari Syarat dan Ketentuan ini."
        },
        {
          subtitle: "Keamanan Data",
          text: "Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data pribadi Anda, namun tidak dapat menjamin keamanan absolut terhadap serangan cyber."
        },
        {
          subtitle: "Cookie",
          text: "Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna. Anda dapat mengatur preferensi cookie melalui pengaturan browser."
        }
      ]
    },
    {
      icon: Scale,
      title: "Penyelesaian Sengketa",
      content: [
        {
          subtitle: "Yurisdiksi",
          text: "Syarat dan Ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa akan diselesaikan melalui perundingan musyawarah terlebih dahulu."
        },
        {
          subtitle: "Kompensasi",
          text: "Anda setuju untuk mengganti rugi PT KORINDO KONSTRUKSI dari segala klaim, kerugian, atau biaya yang timbul dari pelanggaran Anda terhadap Syarat dan Ketentuan ini."
        },
        {
          subtitle: "Force Majeure",
          text: "Kami tidak bertanggung jawab atas kegagalan pelaksanaan kewajiban yang disebabkan oleh kejadian di luar kendali kami, termasuk bencana alam, perang, atau tindakan pemerintah."
        }
      ]
    },
    {
      icon: CheckCircle,
      title: "Proyek dan Kontrak",
      content: [
        {
          subtitle: "Informasi Proyek",
          text: "Informasi tentang proyek yang ditampilkan di website adalah untuk tujuan informasi saja dan tidak merupakan penawaran kontrak yang mengikat."
        },
        {
          subtitle: "Proses Kontrak",
          text: "Setiap proyek konstruksi memerlukan perjanjian tertulis yang terpisah dengan syarat dan ketentuan khusus yang berlaku untuk proyek tersebut."
        },
        {
          subtitle: "Standar Industri",
          text: "Semua proyek akan dilaksanakan sesuai dengan standar industri yang berlaku, peraturan pemerintah, dan spesifikasi teknis yang disepakati."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">PT KORINDO KONSTRUKSI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">Beranda</Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">Tentang</Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">Layanan</Link>
              <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Kontak</Link>
            </div>

            <Link href="/">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-2">
              ⚖️ Syarat & Ketentuan
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Syarat & Ketentuan
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Aturan penggunaan website, hak dan kewajiban pengguna dan perusahaan.
            </p>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 text-muted-foreground">
            <Calendar className="w-5 h-5" />
            <span>Terakhir diperbarui: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <Card className="mb-12 border-0 bg-card shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Pengantar</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Selamat datang di website PT KORINDO KONSTRUKSI. Syarat dan Ketentuan ini mengatur penggunaan website kami dan layanan yang tersedia melalui platform ini. Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PT KORINDO KONSTRUKSI adalah perusahaan konstruksi yang bergerak di bidang pembangunan fasilitas pelabuhan umum. Website ini disediakan untuk memberikan informasi tentang layanan kami dan sebagai sarana komunikasi dengan klien potensial.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Harap baca Syarat dan Ketentuan ini dengan cermat. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, jangan menggunakan website kami.
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
          {sections.map((section, index) => (
            <Card key={index} className="mb-8 border-0 bg-card shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{section.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="text-lg font-semibold mb-2 text-foreground">{item.subtitle}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Contact Information */}
          <Card className="mt-12 border-0 bg-gradient-primary">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary-foreground">Hubungi Kami</h3>
              <p className="text-primary-foreground/90 mb-6">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center text-primary-foreground">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>legal@korindokonstruksi.co.id</span>
                </div>
                <div className="flex items-center text-primary-foreground">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+62 853-5388-7260</span>
                </div>
                <div className="flex items-center text-primary-foreground">
                  <Building2 className="w-5 h-5 mr-3" />
                  <span>Gedung Korindo, Jl. MT Haryono Kav. 62</span>
                </div>
                <div className="flex items-center text-primary-foreground">
                  <Gavel className="w-5 h-5 mr-3" />
                  <span>Attention: Legal Department</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agreement Statement */}
          <Card className="mt-8 border-0 bg-card shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Pernyataan Persetujuan</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dengan menggunakan website PT KORINDO KONSTRUKSI, Anda menyatakan bahwa:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Anda telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Anda berusia minimal 18 tahun atau memiliki persetujuan orang tua/wali</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Anda akan menggunakan website ini sesuai dengan hukum dan peraturan yang berlaku</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Anda memahami dan menyetujui Kebijakan Privasi kami</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold text-foreground">PT KORINDO KONSTRUKSI</span>
              </div>
              <p className="text-muted-foreground">
                Solusi konstruksi fasilitas pelabuhan terintegrasi dan berstandar tinggi
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Link Cepat</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition-colors">Beranda</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">Tentang</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Layanan</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Kontak</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 PT KORINDO KONSTRUKSI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
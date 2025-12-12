"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Building2, 
  Shield,
  Eye,
  Database,
  FileText,
  Lock,
  UserCheck,
  Globe,
  Calendar,
  Mail,
  Phone
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
      icon: Database,
      title: "Data yang Kami Kumpulkan",
      content: [
        {
          subtitle: "Informasi Identitas Pribadi",
          text: "Nama lengkap, alamat email, nomor telepon, nama perusahaan, jabatan, dan informasi kontak lainnya yang Anda berikan secara sukarela melalui formulir kontak atau komunikasi dengan kami."
        },
        {
          subtitle: "Informasi Teknis",
          text: "Alamat IP, tipe browser, sistem operasi, informasi perangkat, waktu akses, dan halaman yang dikunjungi untuk keperluan analisis dan peningkatan layanan."
        },
        {
          subtitle: "Informasi Penggunaan",
          text: "Cara Anda berinteraksi dengan website kami, termasuk halaman yang dikunjungi, waktu yang dihabiskan, dan fitur yang digunakan."
        },
        {
          subtitle: "Informasi Bisnis",
          text: "Informasi perusahaan, proyek, dan kebutuhan konstruksi yang Anda bagikan kepada kami untuk tujuan konsultasi dan penawaran layanan."
        }
      ]
    },
    {
      icon: Eye,
      title: "Bagaimana Kami Menggunakan Data Anda",
      content: [
        {
          subtitle: "Menyediakan Layanan",
          text: "Untuk merespons pertanyaan Anda, memberikan konsultasi, dan menyediakan informasi tentang layanan konstruksi pelabuhan yang Anda butuhkan."
        },
        {
          subtitle: "Komunikasi",
          text: "Untuk mengirimkan informasi tentang layanan kami, penawaran khusus, dan update terkait proyek yang mungkin menarik bagi Anda."
        },
        {
          subtitle: "Analisis dan Peningkatan",
          text: "Untuk menganalisis penggunaan website dan meningkatkan kualitas layanan yang kami berikan."
        },
        {
          subtitle: "Kepatuhan Hukum",
          text: "Untuk mematuhi kewajiban hukum dan regulasi yang berlaku di Indonesia."
        }
      ]
    },
    {
      icon: Shield,
      title: "Keamanan Data",
      content: [
        {
          subtitle: "Enkripsi Data",
          text: "Semua data yang dikirim melalui website kami dilindungi dengan enkripsi SSL/TLS untuk mencegah akses tidak sah."
        },
        {
          subtitle: "Akses Terbatas",
          text: "Hanya personel yang berwenang yang memiliki akses ke data pribadi Anda, dan mereka terikat oleh perjanjian kerahasiaan."
        },
        {
          subtitle: "Keamanan Server",
          text: "Server kami dilindungi dengan firewall, sistem deteksi intrusi, dan pembaruan keamanan rutin."
        },
        {
          subtitle: "Backup Data",
          text: "Data dilindungi dengan sistem backup yang aman untuk mencegah kehilangan data."
        }
      ]
    },
    {
      icon: Globe,
      title: "Berbagi Data dengan Pihak Ketiga",
      content: [
        {
          subtitle: "Layanan Hosting",
          text: "Kami menggunakan penyedia layanan hosting terpercaya yang mematuhi standar keamanan internasional untuk menyimpan data website."
        },
        {
          subtitle: "Analytics",
          text: "Kami menggunakan layanan analytics untuk memahami penggunaan website, namun semua data di-anonimkan dan tidak dapat diidentifikasi secara personal."
        },
        {
          subtitle: "Partner Bisnis",
          text: "Data hanya akan dibagikan dengan partner bisnis jika diperlukan untuk penyediaan layanan dan dengan persetujuan Anda terlebih dahulu."
        },
        {
          subtitle: "Otoritas Hukum",
          text: "Data dapat dibagikan dengan otoritas hukum jika diwajibkan oleh undang-undang yang berlaku."
        }
      ]
    },
    {
      icon: UserCheck,
      title: "Hak Anda Sebagai Pengguna",
      content: [
        {
          subtitle: "Hak Akses",
          text: "Anda berhak mengetahui data pribadi apa yang kami simpan tentang Anda."
        },
        {
          subtitle: "Hak Koreksi",
          text: "Anda berhak memperbaiki data pribadi yang tidak akurat atau tidak lengkap."
        },
        {
          subtitle: "Hak Penghapusan",
          text: "Anda berhak meminta penghapusan data pribadi Anda dari sistem kami, dengan pengecualian untuk data yang diperlukan untuk kepatuhan hukum."
        },
        {
          subtitle: "Hak Pembatasan",
          text: "Anda berhak membatasi pengolahan data pribadi Anda dalam keadaan tertentu."
        },
        {
          subtitle: "Hak Portabilitas",
          text: "Anda berhak menerima data pribadi Anda dalam format yang terstruktur dan dapat dibaca oleh mesin."
        }
      ]
    },
    {
      icon: Calendar,
      title: "Retensi Data",
      content: [
        {
          subtitle: "Periode Penyimpanan",
          text: "Data pribadi akan kami simpan selama diperlukan untuk tujuan pengumpulan data atau sesuai dengan periode yang diwajibkan oleh hukum."
        },
        {
          subtitle: "Kriteria Penghapusan",
          text: "Data akan dihapus ketika tidak lagi diperlukan untuk tujuan bisnis, berdasarkan permintaan Anda, atau sesuai dengan kebijakan retensi kami."
        },
        {
          subtitle: "Anonimasi",
          text: "Data yang tidak lagi diperlukan untuk identifikasi personal akan di-anonimkan untuk keperluan analisis."
        }
      ]
    },
    {
      icon: Lock,
      title: "Cookies dan Tracking",
      content: [
        {
          subtitle: "Essential Cookies",
          text: "Cookies yang diperlukan untuk fungsi dasar website seperti keamanan, manajemen sesi, dan preferensi pengguna."
        },
        {
          subtitle: "Analytics Cookies",
          text: "Cookies yang membantu kami memahami bagaimana pengguna berinteraksi dengan website kami."
        },
        {
          subtitle: "Marketing Cookies",
          text: "Cookies yang digunakan untuk menampilkan iklan yang relevan dan mengukur efektivitas kampanye marketing."
        },
        {
          subtitle: "Pengelolaan Cookies",
          text: "Anda dapat mengatur preferensi cookies melalui pengaturan browser atau banner cookies yang tersedia di website."
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
              🔒 Kebijakan Privasi
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Kebijakan Privasi
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kami berkomitmen untuk melindungi privasi dan data pribadi Anda sesuai standar internasional GDPR.
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

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <Card className="mb-12 border-0 bg-card shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Pengantar</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                PT KORINDO KONSTRUKSI ("kami") sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi yang Anda percayakan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagi data pribadi Anda saat Anda menggunakan website kami.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Dengan menggunakan website kami, Anda menyetujui pengumpulan dan penggunaan data sesuai dengan kebijakan ini. Kebijakan ini dirancang untuk mematuhi General Data Protection Regulation (GDPR) dan peraturan perlindungan data pribadi Indonesia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Website ini dimiliki dan dioperasikan oleh PT KORINDO KONSTRUKSI, perusahaan konstruksi yang bergerak di bidang pembangunan fasilitas pelabuhan.
              </p>
            </CardContent>
          </Card>

          {/* Policy Sections */}
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
              <h3 className="text-2xl font-bold mb-6 text-primary-foreground">Hubungi Kami untuk Privasi Data</h3>
              <p className="text-primary-foreground/90 mb-6">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi kami atau ingin menggunakan hak privasi Anda, silakan hubungi kami:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center text-primary-foreground">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>privacy@korindokonstruksi.co.id</span>
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
                  <FileText className="w-5 h-5 mr-3" />
                  <span>Attention: Data Protection Officer</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card className="mt-8 border-0 bg-card shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Perubahan Kebijakan</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau perubahan dalam hukum yang berlaku. Setiap perubahan akan diposting di halaman ini dengan tanggal "Terakhir Diperbarui" yang diperbarui.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Perubahan material akan diberlakukan segera setelah diposting. Kami menyarankan Anda untuk secara berkala meninjau Kebijakan Privasi ini untuk tetap mendapat informasi tentang bagaimana kami melindungi data Anda.
              </p>
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
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  Building2,
  Ship,
  HardHat,
  Award,
  Clock,
  Shield
} from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Building2,
      title: "Pembangunan Dermaga",
      description: "Konstruksi dermaga dan trestle dengan standar internasional"
    },
    {
      icon: Ship,
      title: "Terminal Peti Kemas",
      description: "Terminal modern untuk mendukung logistik laut"
    },
    {
      icon: HardHat,
      title: "Fasilitas Pendukung",
      description: "Gudang, area bongkar muat, dan akses transportasi"
    },
    {
      icon: Shield,
      title: "Proteksi Pantai",
      description: "Breakwater dan seawall untuk keamanan pesisir"
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Sertifikasi Terjamin",
      description: "Material bersertifikat dan standar keselamatan ketat"
    },
    {
      icon: Clock,
      title: "Tepat Waktu",
      description: "Proyek selesai sesuai jadwal dengan kualitas optimal"
    },
    {
      icon: Shield,
      title: "Bergaransi",
      description: "Jaminan kualitas dan perawatan pasca-konstruksi"
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
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Beranda</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">Tentang</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Layanan</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kontak</a>
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Hubungi Kami
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 p-4 bg-background rounded-lg shadow-lg">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-foreground hover:text-primary transition-colors">Beranda</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">Tentang</a>
                <a href="#services" className="text-foreground hover:text-primary transition-colors">Layanan</a>
                <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kontak</a>
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity w-full">
                  Hubungi Kami
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-2">
              🏗️ Konstruksi Fasilitas Pelabuhan Terpercaya
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
              PT KORINDO KONSTRUKSI
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-muted-foreground max-w-4xl mx-auto">
              Solusi Konstruksi Fasilitas Pelabuhan yang Terintegrasi, Inovatif, dan Berstandar Tinggi
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Perusahaan konstruksi sipil dan pembangunan infrastruktur pelabuhan non-perikanan dengan dukungan tenaga ahli berpengalaman, material bersertifikat, serta standar keselamatan kerja yang ketat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6">
                Hubungi Kami
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 text-lg px-8 py-6">
                Lihat Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Layanan Utama Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kompetensi lengkap dalam perencanaan, pembangunan, hingga penyempurnaan fasilitas pelabuhan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Mengapa Memilih PT KORINDO KONSTRUKSI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Dengan dukungan tenaga ahli berpengalaman, penggunaan material bersertifikat, serta penerapan standar keselamatan kerja yang ketat, perusahaan kami memastikan setiap proyek diselesaikan dengan ketepatan waktu, kualitas optimal, dan efisiensi biaya.
              </p>
              
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <advantage.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{advantage.title}</h3>
                      <p className="text-muted-foreground">{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
                <div className="w-full h-full bg-card rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <Building2 className="w-24 h-24 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">15+ Tahun</h3>
                    <p className="text-muted-foreground">Pengalaman dalam Konstruksi Pelabuhan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Siap Mewujudkan Proyek Pelabuhan Anda?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Konsultasikan kebutuhan konstruksi fasilitas pelabuhan Anda dengan tim ahli kami
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Phone className="mr-2 w-5 h-5" />
            Hubungi Kami Sekarang
          </Button>
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
              <h3 className="text-lg font-semibold mb-4 text-foreground">Kontak</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Jl. MT Haryono Kav. 62, Jakarta Selatan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>085353887260</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@korindokonstruksi.co.id</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Layanan</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Pembangunan Dermaga</li>
                <li>Terminal Peti Kemas</li>
                <li>Fasilitas Pendukung</li>
                <li>Proteksi Pantai</li>
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
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Building2, 
  Ship, 
  HardHat,
  Shield,
  Anchor,
  Warehouse,
  Truck,
  Waves,
  Wrench,
  CheckCircle,
  Clock,
  Users,
  Award,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainServices = [
    {
      icon: Building2,
      title: "Pembangunan Dermaga dan Trestle",
      description: "Konstruksi dermaga dan trestle dengan desain struktur yang kokoh dan tahan lama",
      features: [
        "Desain struktur sesuai kondisi laut",
        "Material berkualitas tinggi",
        "Sistem drainase yang efisien",
        "Kapasitas beban sesuai kebutuhan"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      icon: Ship,
      title: "Terminal Penumpang dan Terminal Peti Kemas",
      description: "Pembangunan terminal modern dengan fasilitas lengkap untuk operasional optimal",
      features: [
        "Area parkir yang luas",
        "Sistem keamanan modern",
        "Fasilitas penumpang yang nyaman",
        "Sistem loading/unloading efisien"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      icon: Warehouse,
      title: "Gudang dan Area Bongkar Muat",
      description: "Konstruksi gudang dan area bongkar muat dengan layout yang efisien",
      features: [
        "Sistem ventilasi baik",
        "Lantai beton berkualitas",
        "Sistem pemadam kebakaran",
        "Akses kendaraan yang mudah"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      icon: Anchor,
      title: "Sistem Fender, Bollard, dan Perlengkapan Tambat",
      description: "Instalasi perlengkapan tambat kapal dengan standar internasional",
      features: [
        "Fender karet berkualitas",
        "Bollard berkapasitas tinggi",
        "Sistem tambat yang aman",
        "Material tahan korosi"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      icon: Waves,
      title: "Breakwater, Seawall, dan Proteksi Pantai",
      description: "Konstruksi struktur proteksi pantai untuk menjaga stabilitas pesisir",
      features: [
        "Desain hidrodinamis",
        "Material tahan gelombang",
        "Perlindungan abrasi",
        "Monitoring struktur berkala"
      ],
      image: "/api/placeholder/400/300"
    },
    {
      icon: Truck,
      title: "Jalan Akses dan Fasilitas Pendukung",
      description: "Pembangunan infrastruktur pendukung operasional pelabuhan",
      features: [
        "Jalan aspal berkualitas",
        "Sistem drainase baik",
        "Penerapan jalan yang memadai",
        "Marka jalan yang jelas"
      ],
      image: "/api/placeholder/400/300"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Perencanaan & Desain",
      description: "Analisis kebutuhan, survei lokasi, dan pembuatan desain teknis yang komprehensif"
    },
    {
      step: "02",
      title: "Perizinan & Persiapan",
      description: "Pengurusan perizinan, persiapan lokasi, dan mobilisasi peralatan"
    },
    {
      step: "03",
      title: "Konstruksi",
      description: "Pelaksanaan konstruksi dengan standar keselamatan dan kualitas tinggi"
    },
    {
      step: "04",
      title: "Quality Control & Testing",
      description: "Pemeriksaan kualitas, pengujian struktur, dan verifikasi standar"
    },
    {
      step: "05",
      title: "Handover & Training",
      description: "Serah terima proyek dan pelatihan operasional untuk tim pelabuhan"
    }
  ];

  const advantages = [
    {
      icon: Users,
      title: "Tim Profesional",
      description: "Tenaga ahli berpengalaman dan bersertifikasi dalam konstruksi pelabuhan"
    },
    {
      icon: Shield,
      title: "Standar Keselamatan",
      description: "Penerapan K3 yang ketat dan sesuai regulasi internasional"
    },
    {
      icon: Clock,
      title: "Tepat Waktu",
      description: "Manajemen proyek yang efisien untuk menjamin deadline terpenuhi"
    },
    {
      icon: Award,
      title: "Kualitas Terjamin",
      description: "Material bersertifikat dan kontrol kualitas yang ketat"
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
              <Link href="/services" className="text-primary font-semibold">Layanan</Link>
              <Link href="/portfolio" className="text-foreground hover:text-primary transition-colors">Portfolio</Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Kontak</Link>
              <Link href="/contact">
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Hubungi Kami
                </Button>
              </Link>
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-accent text-accent-foreground px-4 py-2">
              🏗️ Layanan Konstruksi Pelabuhan
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Layanan Kami
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kami memiliki kompetensi dalam perencanaan, pembangunan, hingga penyempurnaan fasilitas dermaga dan struktur pelabuhan dengan standar internasional.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Layanan Utama Konstruksi Pelabuhan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solusi konstruksi terintegrasi untuk mendukung operasional pelabuhan yang aman, efisien, dan berkelanjutan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Pelajari Lebih Lanjut
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <div className="relative h-48 md:h-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Proses Kerja Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Metodologi kerja yang sistematis untuk memastikan hasil terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center border-0 bg-card">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
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
                Mengapa Memilih Layanan Kami?
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
              <Card className="border-0 bg-gradient-to-br from-primary/10 to-accent/10 p-8">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Wrench className="w-24 h-24 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-4">Solusi Terintegrasi</h3>
                    <p className="text-muted-foreground mb-6">
                      Dari perencanaan hingga pemeliharaan, kami menyediakan layanan konstruksi pelabuhan yang komprehensif dan terintegrasi.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-left">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-2" />
                        <span className="text-sm">Desain Struktur</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-2" />
                        <span className="text-sm">Konstruksi Sipil</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-2" />
                        <span className="text-sm">Instalasi Peralatan</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-2" />
                        <span className="text-sm">Pemeliharaan</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Siap Memulai Proyek Pelabuhan Anda?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Konsultasikan kebutuhan konstruksi fasilitas pelabuhan Anda dengan tim ahli kami dan dapatkan solusi terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Users className="mr-2 w-5 h-5" />
                Konsultasi Gratis
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-2 text-primary-foreground text-lg px-8 py-6 hover:bg-primary-foreground hover:text-primary">
                Lihat Portfolio
              </Button>
            </Link>
          </div>
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
              <h3 className="text-lg font-semibold mb-4 text-foreground">Layanan Utama</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Pembangunan Dermaga</li>
                <li>Terminal Peti Kemas</li>
                <li>Fasilitas Pendukung</li>
                <li>Proteksi Pantai</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Kontak</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4" />
                  <span>Jl. MT Haryono Kav. 62, Jakarta Selatan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>085353887260</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Anchor className="w-4 h-4" />
                  <span>info@korindokonstruksi.co.id</span>
                </div>
              </div>
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
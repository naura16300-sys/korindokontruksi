"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Award,
  Building2,
  Users,
  Target,
  Shield,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  FileText
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const milestones = [
    {
      year: "2009",
      title: "Berdiri",
      description: "PT KORINDO KONSTRUKSI didirikan dengan fokus pada konstruksi sipil"
    },
    {
      year: "2012",
      title: "Proyek Pertama",
      description: "Menyelesaikan proyek dermaga pertama di Pelabuhan Tanjung Priok"
    },
    {
      year: "2015",
      title: "Ekspansi",
      description: "Memperluas layanan ke pembangunan terminal peti kemas"
    },
    {
      year: "2018",
      title: "Sertifikasi ISO",
      description: "Mendapatkan sertifikasi ISO 9001:2015 untuk manajemen mutu"
    },
    {
      year: "2020",
      title: "Inovasi",
      description: "Mengimplementasikan teknologi konstruksi modern dan berkelanjutan"
    },
    {
      year: "2024",
      title: "15 Tahun Pengalaman",
      description: "Menjadi leader dalam konstruksi fasilitas pelabuhan di Indonesia"
    }
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Sistem Manajemen Mutu",
      icon: Award
    },
    {
      name: "ISO 45001:2018",
      description: "Sistem Manajemen K3",
      icon: Shield
    },
    {
      name: "ISO 14001:2015",
      description: "Sistem Manajemen Lingkungan",
      icon: Globe
    },
    {
      name: "SBU Konstruksi",
      description: "Sertifikat Badan Usaha Konstruksi",
      icon: Building2
    }
  ];

  const values = [
    {
      title: "Integritas",
      description: "Komitmen pada kejujuran dan transparansi dalam setiap aspek bisnis",
      icon: Shield
    },
    {
      title: "Profesionalisme",
      description: "Standar kerja tinggi dengan pendekatan yang sistematis dan terukur",
      icon: Users
    },
    {
      title: "Inovasi",
      description: "Terus mengembangkan solusi kreatif dan teknologi terbaru",
      icon: TrendingUp
    },
    {
      title: "Kualitas",
      description: "Hasil kerja yang memenuhi atau melampaui ekspektasi klien",
      icon: Award
    }
  ];

  const stats = [
    {
      number: "50+",
      label: "Proyek Selesai",
      description: "Pembangunan fasilitas pelabuhan di seluruh Indonesia"
    },
    {
      number: "15+",
      label: "Tahun Pengalaman",
      description: "Dedikasi dalam industri konstruksi pelabuhan"
    },
    {
      number: "100+",
      label: "Tim Profesional",
      description: "Tenaga ahli berpengalaman dan bersertifikasi"
    },
    {
      number: "98%",
      label: "Kepuasan Klien",
      description: "Tingkat kepuasan pelanggan yang tinggi"
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
              <Link href="/about" className="text-primary font-semibold">Tentang</Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">Layanan</Link>
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
              Tentang Perusahaan
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Tentang PT KORINDO KONSTRUKSI
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Perusahaan konstruksi sipil terpercaya dengan pengalaman 15+ tahun dalam pembangunan infrastruktur pelabuhan non-perikanan yang berstandar internasional.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 bg-card">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold mb-2 text-foreground">{stat.label}</div>
                  <p className="text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 bg-card shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Visi Kami</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Menjadi perusahaan konstruksi fasilitas pelabuhan terdepan di Indonesia yang mengutamakan kualitas, keamanan, dan keberlanjutan dalam setiap proyek.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Misi Kami</h2>
                </div>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Menyediakan solusi konstruksi yang inovatif dan berstandar internasional</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Memprioritaskan keselamatan kerja dan keberlanjutan lingkungan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Membangun kemitraan jangka panjang dengan klien dan stakeholders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span>Terus mengembangkan kompetensi tim dan teknologi konstruksi</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Nilai-Nilai Perusahaan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prinsip-prinsip yang memandu setiap keputusan dan tindakan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Perjalanan Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              15+ tahun dedikasi dalam industri konstruksi pelabuhan Indonesia
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-1'}`}>
                    <Card className="border-0 bg-card shadow-lg">
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-primary text-primary-foreground">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-accent rounded-full border-4 border-background z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Sertifikasi & Legalitas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Komitmen kami pada standar kualitas dan kepatuhan regulasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <cert.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{cert.name}</h3>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Bergabunglah dengan Kami
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Mari wujudkan proyek infrastruktur pelabuhan yang berkualitas dan berkelanjutan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Hubungi Kami
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
                  <FileText className="w-4 h-4" />
                  <span>info@korindokonstruksi.co.id</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">Link Cepat</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition-colors">Beranda</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">Tentang</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Layanan</Link></li>
                <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Kontak</Link></li>
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
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  Building2, 
  Phone, 
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Navigation,
  Users,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Building2,
      title: "Alamat Kantor",
      details: [
        "Gedung Korindo, Jl. MT Haryono Kav. 62",
        "Kel. Pancoran, Kec. Pancoran",
        "Kota Adm. Jakarta Selatan, DKI Jakarta"
      ]
    },
    {
      icon: Phone,
      title: "Telepon",
      details: ["+62 853-5388-7260", "+62 21-8379-1234"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@korindokonstruksi.co.id", "marketing@korindokonstruksi.co.id"]
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 12:00", "Minggu: Tutup"]
    }
  ];

  const departments = [
    {
      name: "Business Development",
      email: "bd@korindokonstruksi.co.id",
      phone: "+62 812-3456-7890",
      description: "Untuk diskusi proyek dan kerjasama bisnis"
    },
    {
      name: "Technical Support",
      email: "technical@korindokonstruksi.co.id",
      phone: "+62 813-4567-8901",
      description: "Untuk konsultasi teknis dan dukungan proyek"
    },
    {
      name: "HR Department",
      email: "hr@korindokonstruksi.co.id",
      phone: "+62 814-5678-9012",
      description: "Untuk karir dan rekrutmen"
    },
    {
      name: "Finance & Admin",
      email: "finance@korindokonstruksi.co.id",
      phone: "+62 815-6789-0123",
      description: "Untuk administrasi dan keuangan"
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
              <Link href="/contact" className="text-primary font-semibold">Kontak</Link>
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Hubungi Kami
              </Button>
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
              📞 Hubungi Kami
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Kontak Kami
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Siap membantu mewujudkan proyek infrastruktur pelabuhan Anda dengan solusi terintegrasi dan profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 bg-card">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 bg-card shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-primary" />
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telepon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+62 812-3456-7890"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Perusahaan</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="PT Example"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subjek *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Konsultasi Proyek Pelabuhan"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Pesan *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Jelaskan kebutuhan proyek Anda secara detail..."
                    />
                  </div>
                  
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                      Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Mengirim..."
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="space-y-6">
              <Card className="border-0 bg-card shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-foreground mb-2">Lokasi Kantor</h3>
                        <p className="text-muted-foreground mb-4">
                          Gedung Korindo, Jl. MT Haryono Kav. 62<br/>
                          Jakarta Selatan, DKI Jakarta
                        </p>
                        <Button variant="outline" className="mb-2">
                          <Navigation className="w-4 h-4 mr-2" />
                          Buka di Google Maps
                        </Button>
                        <p className="text-sm text-muted-foreground">
                          Koordinat: -6.2297° S, 106.8295° E
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 bg-card shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-primary" />
                    Kontak Cepat
                  </h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Phone className="w-4 h-4 mr-2" />
                      +62 853-5388-7260
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="w-4 h-4 mr-2" />
                      info@korindokonstruksi.co.id
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp Business
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Hubungi Departemen Terkait
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tim kami siap membantu kebutuhan spesifik Anda dengan keahlian masing-masing departemen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{dept.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Mail className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-muted-foreground">{dept.email}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="w-4 h-4 mr-2 text-primary" />
                      <span className="text-muted-foreground">{dept.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pertanyaan yang sering diajukan tentang layanan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Berapa lama waktu pengerjaan proyek?
                </h3>
                <p className="text-muted-foreground">
                  Waktu pengerjaan bervariasi tergantung skala dan kompleksitas proyek. Proyek dermaga umumnya memakan waktu 12-24 bulan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Apakah menerima proyek di luar Jawa?
                </h3>
                <p className="text-muted-foreground">
                  Ya, kami melayani proyek di seluruh Indonesia dengan tim dan peralatan yang memadai.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Bagaimana sistem pembayarannya?
                </h3>
                <p className="text-muted-foreground">
                  Kami menggunakan sistem termin pembayaran sesuai progress pekerjaan dengan persetujuan bank garansi.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  Apakah ada garansi untuk proyek?
                </h3>
                <p className="text-muted-foreground">
                  Ya, kami memberikan garansi konstruksi sesuai standar industri dan peraturan yang berlaku.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Tim ahli kami siap membantu mewujudkan proyek infrastruktur pelabuhan Anda dengan hasil terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Calendar className="mr-2 w-5 h-5" />
              Jadwalkan Meeting
            </Button>
            <Button size="lg" variant="outline" className="border-2 text-primary-foreground text-lg px-8 py-6 hover:bg-primary-foreground hover:text-primary">
              Download Company Profile
            </Button>
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
              <h3 className="text-lg font-semibold mb-4 text-foreground">Jam Operasional</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Senin - Jumat: 08:00 - 17:00</p>
                <p>Sabtu: 08:00 - 12:00</p>
                <p>Minggu: Tutup</p>
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
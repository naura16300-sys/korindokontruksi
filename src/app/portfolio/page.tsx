"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  Calendar,
  MapPin,
  ExternalLink,
  Filter,
  Grid3X3,
  List
} from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Dermaga Multipurpose Tanjung Priok",
      category: "dermaga",
      location: "Jakarta Utara",
      year: "2023",
      duration: "18 bulan",
      description: "Pembangunan dermaga multipurpose dengan panjang 500 meter dan kapasitas 50.000 DWT untuk mendukung operasional pelabuhan kontainer.",
      features: ["Struktur beton bertulang", "Fender karet super cone", "Sistem tambat kapal", "Penerapan LED lighting"],
      status: "completed",
      image: "/api/placeholder/600/400"
    },
    {
      id: 2,
      title: "Terminal Peti Kemas Koja",
      category: "terminal",
      location: "Jakarta Utara",
      year: "2022",
      duration: "24 bulan",
      description: "Pengembangan terminal peti kemas dengan area 20 hektar dan kapasitas 1 juta TEU per tahun untuk meningkatkan throughput pelabuhan.",
      features: ["RTG Crane 41 ton", "Yard area seluas 15 ha", "Gudang bonded", "Sistem keamanan canggih"],
      status: "completed",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "Breakwater Pelabuhan Merak",
      category: "proteksi",
      location: "Cilegon",
      year: "2023",
      duration: "30 bulan",
      description: "Konstruksi breakwater sepanjang 2.5 km dengan sistem Xbloc untuk melindungi pelabuhan dari gelombang tinggi dan abrasi.",
      features: ["Struktur Xbloc", "Depth -12m", "Tahan gelombang 5m", "Monitoring real-time"],
      status: "completed",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "Fasilitas Bongkar Muat Curah",
      category: "gudang",
      location: "Cilacap",
      year: "2021",
      duration: "15 bulan",
      description: "Pembangunan fasilitas bongkar muat barang curah dengan conveyor system dan storage tank untuk produk pertanian.",
      features: ["Conveyor 2km", "Storage tank 5000 ton", "Dust control system", "Loading facility"],
      status: "completed",
      image: "/api/placeholder/600/400"
    },
    {
      id: 5,
      title: "Rehabilitasi Dermaga Utama",
      category: "dermaga",
      location: "Surabaya",
      year: "2022",
      duration: "12 bulan",
      description: "Rehabilitasi dan strengthening dermaga utama yang sudah berusia 30 tahun untuk meningkatkan kapasitas beban hingga 70%.",
      features: ["Concrete jacketing", "FRP wrapping", "New fender system", "Upgraded lighting"],
      status: "completed",
      image: "/api/placeholder/600/400"
    },
    {
      id: 6,
      title: "Jalan Akses Pelabuhan",
      category: "infrastruktur",
      location: "Batam",
      year: "2023",
      duration: "18 bulan",
      description: "Pembangunan jalan akses sepanjang 15 km dengan 6 lane untuk menghubungkan pelabuhan dengan kawasan industri.",
      features: ["6 lane highway", "Drainase system", "Street lighting", "Traffic management"],
      status: "completed",
      image: "/api/placeholder/600/400"
    },
    {
      id: 7,
      title: "Terminal Penumpang Bali",
      category: "terminal",
      location: "Benoa, Bali",
      year: "2021",
      duration: "20 bulan",
      description: "Pembangunan terminal penumpang modern dengan fasilitas commercial area untuk mendukung pariwisata bahari.",
      features: ["3 floor terminal", "Commercial area", "Waiting lounge", "Security system"],
      status: "completed",
      image: "/api/placeholder/600/400"
    },
    {
      id: 8,
      title: "Seawall Industrial Estate",
      category: "proteksi",
      location: "Banten",
      year: "2022",
      duration: "22 bulan",
      description: "Konstruksi seawall sepanjang 5 km untuk melindungi kawasan industri pesisir dari abrasi dan rob.",
      features: ["Sheet pile wall", "Rock revetment", "Monitoring system", "Access road"],
      status: "completed",
      image: "/api/placeholder/600/400"
    },
    {
      id: 9,
      title: "Gudang Logistik Modern",
      category: "gudang",
      location: "Karawang",
      year: "2023",
      duration: "14 bulan",
      description: "Pembangunan gudang logistik modern dengan sistem otomasi untuk mendukung supply chain industri.",
      features: ["Automated WMS", "Cold storage", "Loading docks", "Solar panel roof"],
      status: "completed",
      image: "/api/placeholder/600/400"
    }
  ];

  const categories = [
    { id: "all", name: "Semua", icon: Grid3X3 },
    { id: "dermaga", name: "Dermaga", icon: Anchor },
    { id: "terminal", name: "Terminal", icon: Ship },
    { id: "gudang", name: "Gudang", icon: Warehouse },
    { id: "proteksi", name: "Proteksi Pantai", icon: Shield },
    { id: "infrastruktur", name: "Infrastruktur", icon: Building2 }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : Building2;
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Selesai</Badge>;
      case "ongoing":
        return <Badge className="bg-blue-100 text-blue-800">Berjalan</Badge>;
      case "planning":
        return <Badge className="bg-yellow-100 text-yellow-800">Perencanaan</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Status</Badge>;
    }
  };

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
              <Link href="/portfolio" className="text-primary font-semibold">Portfolio</Link>
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
              🏆 Portfolio Proyek
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Proyek-Proyek Kami
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Karya nyata kami dalam membangun infrastruktur pelabuhan yang mendukung pertumbuhan ekonomi maritim Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-lg font-semibold text-foreground">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-lg font-semibold text-foreground">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-lg font-semibold text-foreground">Pelabuhan</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg font-semibold text-foreground">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                    <category.icon className="w-4 h-4" />
                    <span className="hidden md:inline">{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {(() => {
                        const Icon = getCategoryIcon(project.category);
                        return <Icon className="w-24 h-24 text-primary/30" />;
                      })()}
                    </div>
                    <div className="absolute top-4 right-4">
                      {getStatusBadge(project.status)}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="capitalize">
                        {categories.find(cat => cat.id === project.category)?.name}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {project.duration}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Lihat Detail
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="aspect-video md:aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {(() => {
                          const Icon = getCategoryIcon(project.category);
                          return <Icon className="w-24 h-24 text-primary/30" />;
                        })()}
                      </div>
                      <div className="absolute top-4 right-4">
                        {getStatusBadge(project.status)}
                      </div>
                    </div>
                    <div className="md:col-span-3 p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="capitalize">
                            {categories.find(cat => cat.id === project.category)?.name}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.year}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {project.location}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {project.duration}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Lihat Detail
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Tertarik dengan Proyek Kami?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Mari diskusikan kebutuhan proyek infrastruktur pelabuhan Anda dengan tim ahli kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Building2 className="mr-2 w-5 h-5" />
                Mulai Proyek
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-2 text-primary-foreground text-lg px-8 py-6 hover:bg-primary-foreground hover:text-primary">
                Lihat Layanan
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
              <h3 className="text-lg font-semibold mb-4 text-foreground">Portfolio</h3>
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
                  <MapPin className="w-4 h-4" />
                  <span>085353887260</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
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
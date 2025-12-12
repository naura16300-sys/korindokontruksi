import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PT KORINDO KONSTRUKSI - Jasa Konstruksi Fasilitas Pelabuhan",
  description: "Perusahaan konstruksi sipil dan pembangunan infrastruktur pelabuhan non-perikanan dengan solusi terintegrasi, inovatif, dan berstandar tinggi.",
  keywords: ["konstruksi", "pelabuhan", "infrastruktur", "dermaga", "terminal", "PT KORINDO KONSTRUKSI"],
  authors: [{ name: "PT KORINDO KONSTRUKSI" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "PT KORINDO KONSTRUKSI - Jasa Konstruksi Fasilitas Pelabuhan",
    description: "Solusi konstruksi fasilitas pelabuhan yang terintegrasi, inovatif, dan berstandar tinggi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT KORINDO KONSTRUKSI",
    description: "Jasa Konstruksi Fasilitas Pelabuhan Terpercaya",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${poppins.variable} font-poppins antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

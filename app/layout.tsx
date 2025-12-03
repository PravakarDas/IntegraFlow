import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'light dark',
}

export const metadata: Metadata = {
  title: {
    default: "IntegraFlow - Complete Business Management Solution",
    template: "%s | IntegraFlow"
  },
  description: "Comprehensive Enterprise Resource Planning (ERP) system for inventory management, sales orders, financial tracking, HR management, and business analytics. Streamline your operations with our modern, scalable ERP solution.",
  keywords: [
    "ERP",
    "Enterprise Resource Planning",
    "Business Management",
    "Inventory Management",
    "Sales Orders",
    "Financial Management",
    "HR Management",
    "Business Analytics",
    "Supply Chain",
    "Purchase Orders",
    "Accounting Software",
    "Business Intelligence"
  ],
  authors: [{ name: "PravakarDas" }],
  creator: "PravakarDas",
  publisher: "IntegraFlow",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://erp-system.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://erp-system.com',
    title: 'IntegraFlow - Complete Business Management Solution',
    description: 'Comprehensive Enterprise Resource Planning system for inventory, sales, finance, HR, and analytics. Modern, scalable business management software.',
    siteName: 'IntegraFlow',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'IntegraFlow Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IntegraFlow - Complete Business Management Solution',
    description: 'Comprehensive business management system for inventory, sales, finance, HR, and analytics. Modern ERP software.',
    images: ['/og-image.svg'],
    creator: '@erp_system',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg' },
    ],
    shortcut: '/favicon.svg',
  },
  manifest: '/manifest.json',
  category: 'business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "IntegraFlow",
    "description": "Comprehensive Enterprise Resource Planning system for inventory management, sales orders, financial tracking, HR management, and business analytics.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "PravakarDas"
    },
    "publisher": {
      "@type": "Organization",
      "name": "IntegraFlow"
    },
    "featureList": [
      "Inventory Management",
      "Sales Order Processing",
      "Financial Tracking",
      "HR Management",
      "Business Analytics",
      "Purchase Order Management",
      "Reporting & Dashboards"
    ],
    "screenshot": "https://erp-system.com/og-image.svg",
    "url": "https://erp-system.com",
    "sameAs": [
      "https://github.com/PravakarDas/IntegraFlow"
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="canonical" href="https://erp-system.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

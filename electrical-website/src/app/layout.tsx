// import NavBar from "./components/navbar/navbar";
import ContactWidget from "./components/widgets/contact-float";
import '@/app/globals.css'
import NavBar from "./components/navbar/navbar";
import FooterBanner from "./components/banner/nexa-banner";
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script';
import Footer from "./components/footer/footer";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";

export const metadata = {
  title: 'Everything Electrical Sydney | Licensed Electricians for Sydney NSW',
  description: 'Everything Electricals provides expert residential and commercial electrical services in Camden, Campbelltown, Oran Park, and nearby suburbs. Emergency callouts, installations & more.',
  applicationName: 'Everything Electricals',
  keywords: [
    'electrician Camden',
    'emergency electrician Campbelltown',
    'licensed electricians Oran Park',
    'residential electrical services',
    'commercial electrical contractor',
    'electrical installations',
    'Camden electricians',
  ],
  authors: [{ name: 'Everything Electricals' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://everythingelectricalsydney.com.au/',
    siteName: 'Everything Electricals',
    title: 'Everything Electrical Sydney | Licensed Electricians for Sydney NSW',
    description: 'Everything Electricals provides expert residential and commercial electrical services in Camden, Campbelltown, Liverpool, and nearby suburbs. Emergency callouts, installations & more.',
    images: [
      {
        url: 'https://everythingelectricalsydney.com.au/images/electrical_og.png',
        width: 1200,
        height: 630,
        alt: 'Everything Electricals - Local Electricians in Camden & Campbelltown',
        type: 'image/png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nosnippet: false,
    noimageindex: false,
    noarchive: false,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  icons: {
    icon: '/favicon.ico',
    apple: 'https://everythingelectricalsydney.com.au/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.everythingelectricalsydney.com.au/',
    languages: {
      en: 'https://www.everythingelectricalsydney.com.au/',
    },
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      
      <body>
        {/* Google Tag Manager */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MP2GJLD');`,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MP2GJLD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <NavBar />
        
        <main className="pt-[6rem]">
        <GoogleCaptchaWrapper>
          {children}
        </GoogleCaptchaWrapper>
        </main>
        <ContactWidget />
        <Footer />
        
        <FooterBanner />
        <Analytics />
      </body>
    </html>
  );
}

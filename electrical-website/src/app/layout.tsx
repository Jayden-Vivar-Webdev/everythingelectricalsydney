// import NavBar from "./components/navbar/navbar";
import ContactWidget from "./components/widgets/contact-float";
import '@/app/globals.css'
import NavBar from "./components/navbar/navbar";
import FooterBanner from "./components/banner/nexa-banner";
import { Analytics } from "@vercel/analytics/next"
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
      
      <body
        
      >
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

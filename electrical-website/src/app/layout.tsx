import NavBar from "./components/navbar/navbar";

import '@/app/globals.css'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <NavBar />
        <main className="pt-[6rem]">
          {children}
        </main>
        
      </body>
    </html>
  );
}

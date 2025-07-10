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
        {children}
      </body>
    </html>
  );
}

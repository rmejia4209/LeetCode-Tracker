import "./globals.css";
import NavBar from "./_components/navigation/NavBar";
import Footer from "./_components/navigation/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body className="flex flex-col min-h-screen">
        <NavBar/>
        <main className="flex flex-grow justify-center mx-10">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

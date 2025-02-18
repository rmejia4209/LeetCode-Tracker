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
      <body className="bg-red-50">
        <NavBar/>
        <main className="mx-10">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

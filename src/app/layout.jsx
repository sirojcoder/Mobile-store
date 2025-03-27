
import "./globals.css";
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Category from '@/Components/Category'
export default function RootLayout({ }) {
  return (
    <html lang="uz">
      <body>
        <Navbar />
        <Header />
        <Category />
        <Footer />
      </body>
    </html>
  );
}

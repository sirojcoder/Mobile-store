import "./globals.css";
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
export const metadata = {
  title: 'Mobile store',
 }
export default function RootLayout({ children }) {
  
  return (
    <html lang="uz">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

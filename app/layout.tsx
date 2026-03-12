import './globals.css';
import Navbar from '../components/Navbar';
import FloatingWA from '../components/FloatingWA';
import ThreeScene from '../components/ThreeScene';

export const metadata = {
  title: 'Raj Dubey | AI Developer & Automation Engineer',
  description: 'Portfolio of Raj Dubey, Senior Full-Stack AI Developer & Automation Engineer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased min-h-screen">
        <ThreeScene />
        <Navbar />
        <main className="relative z-10 pt-16 min-h-screen">
          {children}
        </main>
        <FloatingWA />
      </body>
    </html>
  );
}
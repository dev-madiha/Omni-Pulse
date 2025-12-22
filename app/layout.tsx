import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
export const metadata = {
  title: "Omni Pulse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6 bg-gray-50 min-h-screen">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}

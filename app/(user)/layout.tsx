// Bringing TailwindCSS
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="max-w-7xl mx-auto bg-[#F6F5DA]">
        {/* Header */}
        <Header />
        {/* Banner */}
        <Banner />
        {children}
      </body>
    </html>
  );
}

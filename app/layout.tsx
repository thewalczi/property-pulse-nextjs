import { FC, ReactNode } from "react";
import "@/assets/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Property Pulse",
  keywords: "rental, property, management, real estate",
  description: "Your go-to platform for rental property management.",
};

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;

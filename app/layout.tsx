import { FC, ReactNode } from "react";
import "@/assets/styles/globals.css";

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
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;

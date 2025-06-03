import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const isMobile = useIsMobile();
  
  // Add a class to the body element based on viewport size
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('is-mobile');
      document.body.classList.remove('is-desktop');
    } else {
      document.body.classList.add('is-desktop');
      document.body.classList.remove('is-mobile');
    }
    
    return () => {
      document.body.classList.remove('is-mobile', 'is-desktop');
    };
  }, [isMobile]);
  
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

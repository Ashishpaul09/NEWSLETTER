import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto px-4 py-6 border-b border-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center w-full md:w-auto justify-between mb-4 md:mb-0">
          <Link href="/">
            <h1 className="text-2xl font-heading font-bold cursor-pointer">
              <span className="text-primary">Discovery</span><span className="text-slate-900">creative</span>
            </h1>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:space-x-6`}>
          <div className={`text-slate-900 hover:text-primary transition duration-300 ${location === '/' ? 'text-primary font-medium' : ''}`}>
            <Link href="/">Home</Link>
          </div>
          <div className={`text-slate-900 hover:text-primary transition duration-300 ${location === '/archives' ? 'text-primary font-medium' : ''}`}>
            <Link href="/archives">Archives</Link>
          </div>
          <div className={`text-slate-900 hover:text-primary transition duration-300 ${location === '/subscribe' ? 'text-primary font-medium' : ''}`}>
            <Link href="/subscribe">Subscribe</Link>
          </div>
          <div className={`text-slate-900 hover:text-primary transition duration-300 ${location === '/about' ? 'text-primary font-medium' : ''}`}>
            <Link href="/about">About</Link>
          </div>
          <div className={`text-slate-900 hover:text-primary transition duration-300 ${location === '/contact' ? 'text-primary font-medium' : ''}`}>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

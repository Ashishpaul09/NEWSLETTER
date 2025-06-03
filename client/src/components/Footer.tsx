import { Link } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Footer() {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-4 sm:py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
          <div className="mb-4 sm:mb-0">
            <div className="font-heading font-bold text-primary text-lg">
              Discovery<span className="text-slate-900">creative</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 mb-4 sm:mb-0">
            <div className="text-sm text-slate-700 hover:text-primary transition duration-300">
              <Link href="/">Home</Link>
            </div>
            <div className="text-sm text-slate-700 hover:text-primary transition duration-300">
              <Link href="/archives">Archives</Link>
            </div>
            <div className="text-sm text-slate-700 hover:text-primary transition duration-300">
              <Link href="/subscribe">Subscribe</Link>
            </div>
            <div className="text-sm text-slate-700 hover:text-primary transition duration-300">
              <Link href="/about">About</Link>
            </div>
            <div className="text-sm text-slate-700 hover:text-primary transition duration-300">
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer">
              <span className="text-xs">in</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer">
              <span className="text-xs">tw</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer">
              <span className="text-xs">fb</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex space-x-4 mb-2 sm:mb-0">
            <span>123 </span>
            <a href="mailto:hello@discoverycreative.com" className="hover:text-primary">
              Ashish Paul
            </a>
          </div>
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Discovery Creative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

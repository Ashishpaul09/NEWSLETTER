import { format } from "date-fns";
import { useIsMobile } from "@/hooks/use-mobile";

export default function NewsletterHeader() {
  const currentDate = new Date();
  const formattedYear = format(currentDate, 'yyyy');
  const formattedDate = format(currentDate, 'MMMM d').toUpperCase();
  const isMobile = useIsMobile();
  
  return (
    <section className="paper-texture container mx-auto px-4 pt-4 pb-0">
      <div className="relative mb-6">
        <div className="flex items-center justify-between pb-2">
          <div className="w-1/5 sm:w-1/4 border-t-2 border-black"></div>
          <div className="w-3/5 sm:w-2/4 px-2 sm:px-4 text-center">
            <div className="text-lg sm:text-xl font-heading font-black text-primary tracking-tighter">DiscoveryCreative</div>
          </div>
          <div className="w-1/5 sm:w-1/4 border-t-2 border-black"></div>
        </div>
        
        <div className="relative">
          <div className="flex justify-center items-center">
            <div className="text-left w-1/4 sm:w-1/3 pr-2 sm:pr-4">
              <div className="border-b-2 border-black w-full mb-1"></div>
              <p className="uppercase text-[10px] sm:text-xs font-bold tracking-wide">APRIL 20</p>
            </div>
            
            <div className="w-2/4 sm:w-1/3">
              <h2 className="text-center">
                <div className="diagonal-stripes text-5xl sm:text-6xl md:text-8xl font-heading font-black tracking-tighter text-transparent bg-clip-text leading-none">
                  NEWS<br/>LETTER
                </div>
              </h2>
            </div>
            
            <div className="text-right w-1/4 sm:w-1/3 pl-2 sm:pl-4">
              <div className="border-b-2 border-black w-full mb-1"></div>
              <p className="uppercase text-[10px] sm:text-xs font-bold tracking-wide">{formattedYear}</p>
            </div>
          </div>
          
          {/* Year tag */}
          <div className="absolute -top-2 right-0 transform rotate-6">
            <div className="bg-primary text-white font-heading text-xs font-bold py-0.5 px-2 vintage-shadow">
              {formattedYear}
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-4 sm:py-5 text-center border-t-2 border-b-2 border-black">
        <p className="newsletter-quote text-lg sm:text-xl md:text-2xl font-quote text-primary">
          "Genius is born—not paid"
        </p>
        <p className="text-xs sm:text-sm text-slate-900 mt-1 italic">—Ashish Paul</p>
      </div>
    </section>
  );
}

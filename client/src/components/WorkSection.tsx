import { Article } from "@shared/schema";
import { useIsMobile } from "@/hooks/use-mobile";

interface WorkSectionProps {
  articles: Article[];
}

export default function WorkSection({ articles = [] }: WorkSectionProps) {
  const isMobile = useIsMobile();
  
  return (
    <section className="container mx-auto px-4 py-6 sm:py-8 border-t-2 border-b-2 border-black">
      <div className="mb-4 sm:mb-6 relative">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black text-primary tracking-tighter">WORK</h2>
        <h3 className="text-lg sm:text-xl text-slate-900 font-heading uppercase font-bold tracking-wide">WE'VE DONE</h3>
        
        {/* Section marker */}
        <div className="absolute -top-4 -left-2 transform rotate-6 z-10">
          <div className="bg-black text-white font-heading text-xs font-bold py-0.5 px-2 vintage-shadow">
            01
          </div>
        </div>
      </div>
      
      <div className="mb-4 sm:mb-6">
        <p className="mb-4 text-base sm:text-lg font-medium">
          Houston, we have a website. Among other things. We're also proud to be launching 
          our very first newsletter. Stay tuned, we'll be sending out updates every month.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {articles.length > 0 ? (
          articles.map((article) => (
            <div className="work-item group" key={article.id}>
              <div className="relative overflow-hidden vintage-shadow mb-3">
                <img 
                  src={article.imageUrl || ''} 
                  alt={article.title} 
                  className="w-full h-40 sm:h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-2 border-black pointer-events-none"></div>
              </div>
              <p className="text-xs text-slate-900 italic">Copy here. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur cursus.</p>
            </div>
          ))
        ) : (
          // Loading state
          Array.from({ length: isMobile ? 2 : 3 }).map((_, index) => (
            <div className="work-item animate-pulse" key={index}>
              <div className="w-full h-40 sm:h-48 bg-gray-200 mb-3 vintage-shadow"></div>
              <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 w-full"></div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

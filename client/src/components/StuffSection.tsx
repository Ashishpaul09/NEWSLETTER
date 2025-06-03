import { Article } from "@shared/schema";

interface StuffSectionProps {
  articles: Article[];
}

export default function StuffSection({ articles = [] }: StuffSectionProps) {
  return (
    <section className="container mx-auto px-4 py-8 border-b-2 border-black">
      <div className="mb-6 relative">
        <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter">
          <span className="gradient-text">STUFF</span>
        </h2>
        <h3 className="text-xl text-slate-900 font-heading uppercase font-bold tracking-wide">WE'VE LIKED</h3>
        
        {/* Section marker */}
        <div className="absolute -top-4 right-24 transform rotate-6 z-10">
          <div className="bg-black text-white font-heading text-xs font-bold py-0.5 px-2 vintage-shadow">
            03
          </div>
        </div>
        
        <div className="absolute right-0 bottom-0 flex items-center text-xs bg-white py-1 px-2 border-2 border-black vintage-shadow transform rotate-2">
          <span className="text-slate-900 mr-2 font-bold">→</span>
          <span className="text-slate-900 font-medium">What? You went off the list? Say it ain't so.</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div className="stuff-item group" key={article.id}>
              <div className="relative overflow-hidden vintage-shadow mb-3">
                <img 
                  src={article.imageUrl || ''} 
                  alt={article.title} 
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 border-2 border-black pointer-events-none"></div>
                
                {/* Number tag */}
                <div className="absolute top-2 left-2 bg-white text-black text-xs font-bold w-5 h-5 flex items-center justify-center border border-black">
                  {index + 1}
                </div>
              </div>
              <p className="text-xs text-slate-900 italic">Copy here. Per conubia nostra, per inceptos him eiusmod. Curabitur cursus. Duis eiam ligula, forquat</p>
            </div>
          ))
        ) : (
          // Loading state
          Array.from({ length: 3 }).map((_, index) => (
            <div className="stuff-item animate-pulse" key={index}>
              <div className="w-full h-48 bg-gray-200 mb-3 vintage-shadow"></div>
              <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 w-full"></div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

import { Article } from "@shared/schema";

interface IdeasSectionProps {
  articles: Article[];
}

export default function IdeasSection({ articles = [] }: IdeasSectionProps) {
  return (
    <section className="container mx-auto px-4 py-8 border-b-2 border-black">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.length > 0 ? (
              articles.map((article) => (
                <div className="idea-item group" key={article.id}>
                  <div className="relative overflow-hidden vintage-shadow mb-3">
                    <img 
                      src={article.imageUrl || ''} 
                      alt={article.title} 
                      className="w-full h-40 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border-2 border-black pointer-events-none"></div>
                  </div>
                  <p className="text-xs text-slate-900 italic">Copy here. Litora torquent per conubia nostra, per inceptos himenaeos. Curabitur.</p>
                </div>
              ))
            ) : (
              // Loading state
              Array.from({ length: 3 }).map((_, index) => (
                <div className="idea-item animate-pulse" key={index}>
                  <div className="w-full h-40 bg-gray-200 mb-3 vintage-shadow"></div>
                  <div className="h-4 bg-gray-200 w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 w-full"></div>
                </div>
              ))
            )}
          </div>
        </div>
        
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 relative">
          <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter">IDEAS</h2>
          <h3 className="text-xl text-slate-900 font-heading uppercase font-bold tracking-wide mb-6">WE'VE HAD</h3>
          
          {/* Section marker */}
          <div className="absolute -top-4 right-0 transform rotate-6 z-10">
            <div className="bg-primary text-white font-heading text-xs font-bold py-0.5 px-2 vintage-shadow">
              02
            </div>
          </div>
          
          <p className="mb-4 text-lg font-medium">
            Pitches and ideas you've never seen, etc. Click away. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vestibulum.
          </p>
          
          <p className="mb-4 text-lg font-medium">
            Pitches and ideas you've never seen, etc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vestibulum. Praesent iaculis lacus eu.
          </p>
          
          <div className="inline-block mt-2 transform -rotate-2">
            <div className="border-2 border-black py-2 px-4 bg-[hsl(var(--light))] italic text-sm font-medium vintage-shadow">
              "Our best ideas come from collaborative thinking"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

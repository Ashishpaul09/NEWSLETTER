import { useIsMobile } from "@/hooks/use-mobile";

export default function FeaturedNews() {
  const isMobile = useIsMobile();
  
  return (
    <section className="container mx-auto px-4 py-4">
      <div className="bg-primary text-white overflow-hidden vintage-shadow">
        <div className="p-4 sm:p-6 md:p-8 border-2 border-primary-light border-dashed">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 mb-4 md:mb-0 relative">
              <img 
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Computer monitor showing website" 
                className="w-full h-auto vintage-shadow mx-auto md:mx-0"
                style={{ maxWidth: isMobile ? "250px" : "100%" }}
              />
              <div className="absolute top-2 -left-2 transform -rotate-2 bg-white text-primary text-xs font-bold py-0.5 px-1.5 vintage-shadow">
                FEATURED
              </div>
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h3 className="text-xl sm:text-2xl font-heading font-black mb-2 sm:mb-3 uppercase tracking-tight">
                HOUSTON, WE HAVE A WEBSITE.
              </h3>
              <p className="mb-2 sm:mb-3 font-medium text-sm sm:text-base">
                Featured item or news goes here. Proin augum vestibulum. Praesent iaculis luctus eu. Duis semper comm odo lectus. In posuere lorem at est. Sed elit nisl, ullamcorper sagittis, luctus.
              </p>
              <p className="font-medium text-sm sm:text-base">
                Stay tuned for regular updates on our work, thought-provoking articles, 
                and creative inspiration to fuel your next project. We'll be publishing 
                new content monthly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

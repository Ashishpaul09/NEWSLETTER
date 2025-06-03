import { Newsletter } from "@shared/schema";
import { Link } from "wouter";
import { format } from "date-fns";

interface ArchiveSectionProps {
  newsletters: Newsletter[];
}

export default function ArchiveSection({ newsletters = [] }: ArchiveSectionProps) {
  return (
    <section className="container mx-auto px-4 py-8 border-t border-gray-200">
      <div className="flex items-center mb-4">
        <h2 className="text-3xl font-heading font-bold text-slate-900 uppercase">NEWSLETTER ARCHIVES</h2>
        <div className="border-t border-gray-300 flex-grow ml-4"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {newsletters.length > 0 ? (
          newsletters.map((newsletter) => (
            <div 
              key={newsletter.id} 
              className="archive-item border border-gray-200 overflow-hidden hover:shadow-md transition duration-300"
            >
              <div className="bg-gray-200 h-40 flex items-center justify-center">
                <span className="text-2xl font-heading font-bold">{newsletter.title}</span>
              </div>
              <div className="p-4">
                <h3 className="font-heading font-bold text-lg mb-1">{newsletter.title}</h3>
                <p className="text-xs text-gray-600 mb-2">
                  {format(new Date(newsletter.issueDate), 'MMMM d, yyyy')}
                </p>
                <p className="text-xs text-gray-600 mb-3 italic">{newsletter.content}</p>
                <p className="text-primary text-sm font-medium">Read Issue →</p>
              </div>
            </div>
          ))
        ) : (
          // Loading state
          Array.from({ length: 3 }).map((_, index) => (
            <div className="archive-item border border-gray-200 overflow-hidden animate-pulse" key={index}>
              <div className="bg-gray-200 h-40"></div>
              <div className="p-4">
                <div className="h-5 bg-gray-200 w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 w-1/4 mb-2"></div>
                <div className="h-4 bg-gray-200 w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 w-1/4"></div>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-4 text-right mb-6">
        <div className="inline-block">
          <Link href="/archives">
            <div className="inline-flex items-center text-primary font-medium cursor-pointer hover:underline">
              <span className="mr-1">What? You want off the list? Say it ain't so.</span>
              <span className="text-xs border border-primary p-1">Unsubscribe here</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

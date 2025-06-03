import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Newsletter } from "@shared/schema";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";

export default function ArchivePage() {
  const { data: newsletters = [], isLoading } = useQuery<Newsletter[]>({
    queryKey: ["/api/newsletters"],
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-heading font-bold mb-2">NEWSLETTER ARCHIVES</h1>
      <p className="text-lg text-gray-600 mb-8">Browse our previous newsletter issues</p>
      
      <Separator className="mb-8" />
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="h-64 animate-pulse">
              <CardContent className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-6"></div>
                <div className="h-24 bg-gray-200 rounded mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsletters.map((newsletter) => (
            <Card key={newsletter.id} className="border border-gray-200 hover:shadow-md transition duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="font-heading font-bold text-xl">{newsletter.title}</CardTitle>
                <p className="text-sm text-gray-500">{format(new Date(newsletter.issueDate), 'MMMM d, yyyy')}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{newsletter.content}</p>
                <a href="#" className="text-primary font-medium hover:underline">Read Issue →</a>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

import SubscriptionForm from "@/components/SubscriptionForm";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function SubscribePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-heading font-bold mb-2">SUBSCRIBE TO OUR NEWSLETTER</h1>
        <p className="text-lg text-gray-600 mb-8">
          Stay updated with the latest design trends, creative work, and industry insights.
          We send out new issues on the 20th of each month.
        </p>
        
        <Card>
          <CardHeader>
            <CardTitle>Join our mailing list</CardTitle>
            <CardDescription>
              Subscribe to receive our monthly newsletter and never miss an update.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SubscriptionForm />
          </CardContent>
        </Card>
        
        <div className="mt-12">
          <h2 className="text-2xl font-heading font-bold mb-4">What to expect in our newsletter</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Design trends and industry insights</li>
            <li>Showcases of our latest work</li>
            <li>Creative ideas and inspiration</li>
            <li>Useful resources and tools</li>
            <li>Exclusive content for subscribers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

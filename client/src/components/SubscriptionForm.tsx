import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertSubscriberSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const subscriptionSchema = insertSubscriberSchema.extend({
  agreement: z.boolean().refine(val => val === true, {
    message: "You must agree to receive newsletters."
  })
});

type SubscriptionFormValues = z.infer<typeof subscriptionSchema>;

export default function SubscriptionForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMobile = useIsMobile();
  
  const form = useForm<SubscriptionFormValues>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: {
      email: "",
      name: "",
      agreement: false
    },
  });

  async function onSubmit(data: SubscriptionFormValues) {
    setIsSubmitting(true);
    
    try {
      const { agreement, ...subscriberData } = data;
      await apiRequest("POST", "/api/subscribers", subscriberData);
      
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Subscription error:", error);
      
      toast({
        variant: "destructive",
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl">
        <div className="flex flex-col space-y-3 mb-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-row border border-gray-300">
                    <div className="bg-gray-100 px-2 sm:px-3 py-2 text-xs uppercase font-medium border-r border-gray-300 flex items-center min-w-[60px] justify-center">
                      Name
                    </div>
                    <Input
                      placeholder="Your name"
                      className="w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                      {...field}
                      value={field.value || ""}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-row border border-gray-300">
                    <div className="bg-gray-100 px-2 sm:px-3 py-2 text-xs uppercase font-medium border-r border-gray-300 flex items-center min-w-[60px] justify-center">
                      Email
                    </div>
                    <Input 
                      placeholder="Your email address" 
                      type="email" 
                      className="w-full border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm" 
                      {...field} 
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
          <FormField
            control={form.control}
            name="agreement"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-2 mb-3 sm:mb-0">
                <FormControl>
                  <Checkbox 
                    checked={field.value} 
                    onCheckedChange={field.onChange}
                    id="agreement"
                    className="mt-1"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <Label 
                    htmlFor="agreement" 
                    className="font-normal text-xs text-gray-600 cursor-pointer"
                  >
                    I agree to receive monthly newsletters from Discovery Creative.
                  </Label>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="bg-primary hover:bg-primary-light text-white px-4 py-2 text-sm uppercase w-full sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe →"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

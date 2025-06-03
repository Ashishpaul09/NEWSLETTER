import { apiRequest, queryClient } from "./queryClient";
import { InsertSubscriber, Subscriber } from "@shared/schema";

// Subscriber related API functions
export async function subscribeToNewsletter(data: InsertSubscriber): Promise<Subscriber> {
  const response = await apiRequest("POST", "/api/subscribers", data);
  const subscriber = await response.json();
  return subscriber;
}

// Invalidate cache after mutations
export function invalidateArticles() {
  return queryClient.invalidateQueries({ queryKey: ['/api/articles'] });
}

export function invalidateNewsletters() {
  return queryClient.invalidateQueries({ queryKey: ['/api/newsletters'] });
}

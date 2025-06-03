import { 
  Subscriber, InsertSubscriber, 
  Newsletter, InsertNewsletter,
  Article, InsertArticle,
  mockArticles, mockNewsletters
} from "@shared/schema";

export interface IStorage {
  // Subscribers
  getSubscribers(): Promise<Subscriber[]>;
  getSubscriber(id: number): Promise<Subscriber | undefined>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  
  // Newsletters
  getNewsletters(): Promise<Newsletter[]>;
  getNewsletter(id: number): Promise<Newsletter | undefined>;
  getLatestNewsletter(): Promise<Newsletter | undefined>;
  createNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  
  // Articles
  getArticles(section?: string): Promise<Article[]>;
  getArticle(id: number): Promise<Article | undefined>;
  createArticle(article: InsertArticle): Promise<Article>;
}

export class MemStorage implements IStorage {
  private subscribers: Map<number, Subscriber>;
  private newsletters: Map<number, Newsletter>;
  private articles: Map<number, Article>;
  
  private subscriberId: number = 1;
  private newsletterId: number = 1;
  private articleId: number = 1;

  constructor() {
    this.subscribers = new Map();
    this.newsletters = new Map();
    this.articles = new Map();
    
    // Initialize with mock data
    mockArticles.forEach(article => {
      this.articles.set(article.id, article);
      if (article.id >= this.articleId) {
        this.articleId = article.id + 1;
      }
    });
    
    mockNewsletters.forEach(newsletter => {
      this.newsletters.set(newsletter.id, newsletter);
      if (newsletter.id >= this.newsletterId) {
        this.newsletterId = newsletter.id + 1;
      }
    });
  }

  // Subscribers
  async getSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values());
  }

  async getSubscriber(id: number): Promise<Subscriber | undefined> {
    return this.subscribers.get(id);
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email === email
    );
  }

  async createSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.subscriberId++;
    const subscriber: Subscriber = {
      ...insertSubscriber,
      name: insertSubscriber.name || null,
      id,
      subscribed: true,
      createdAt: new Date()
    };
    this.subscribers.set(id, subscriber);
    return subscriber;
  }

  // Newsletters
  async getNewsletters(): Promise<Newsletter[]> {
    return Array.from(this.newsletters.values())
      .sort((a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime());
  }

  async getNewsletter(id: number): Promise<Newsletter | undefined> {
    return this.newsletters.get(id);
  }

  async getLatestNewsletter(): Promise<Newsletter | undefined> {
    const newsletters = await this.getNewsletters();
    return newsletters.length > 0 ? newsletters[0] : undefined;
  }

  async createNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.newsletterId++;
    const newsletter: Newsletter = {
      ...insertNewsletter,
      published: insertNewsletter.published ?? false,
      id,
      createdAt: new Date()
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }

  // Articles
  async getArticles(section?: string): Promise<Article[]> {
    const articles = Array.from(this.articles.values());
    if (section) {
      return articles.filter(article => article.section === section && article.published);
    }
    return articles.filter(article => article.published);
  }

  async getArticle(id: number): Promise<Article | undefined> {
    return this.articles.get(id);
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = this.articleId++;
    const article: Article = {
      ...insertArticle,
      imageUrl: insertArticle.imageUrl || null,
      published: insertArticle.published ?? false,
      id,
      createdAt: new Date()
    };
    this.articles.set(id, article);
    return article;
  }
}

export const storage = new MemStorage();

import { type Express } from "express";
import { Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  const server = new Server(app);

  // API Routes
  app.get("/api/articles", async (req, res) => {
    const section = req.query.section as string | undefined;
    const articles = await storage.getArticles(section);
    res.json(articles);
  });

  app.get("/api/articles/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid article ID" });
    }
    
    const article = await storage.getArticle(id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    
    res.json(article);
  });

  app.get("/api/newsletters", async (_req, res) => {
    const newsletters = await storage.getNewsletters();
    res.json(newsletters);
  });

  app.get("/api/newsletters/latest", async (_req, res) => {
    const newsletter = await storage.getLatestNewsletter();
    if (!newsletter) {
      return res.status(404).json({ message: "No newsletters found" });
    }
    
    res.json(newsletter);
  });

  app.get("/api/newsletters/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid newsletter ID" });
    }
    
    const newsletter = await storage.getNewsletter(id);
    if (!newsletter) {
      return res.status(404).json({ message: "Newsletter not found" });
    }
    
    res.json(newsletter);
  });

  app.post("/api/subscribers", async (req, res) => {
    const { email, name } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    
    // Check if subscriber already exists
    const existingSubscriber = await storage.getSubscriberByEmail(email);
    if (existingSubscriber) {
      return res.status(409).json({ message: "Email already subscribed" });
    }
    
    const subscriber = await storage.createSubscriber({ email, name });
    res.status(201).json(subscriber);
  });

  return server;
}
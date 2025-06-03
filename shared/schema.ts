import { pgTable, text, serial, integer, boolean, date, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Subscriber model
export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  subscribed: boolean("subscribed").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertSubscriberSchema = createInsertSchema(subscribers).pick({
  email: true,
  name: true,
});

// Newsletter model
export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  issueDate: date("issue_date").notNull(),
  content: text("content").notNull(),
  published: boolean("published").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertNewsletterSchema = createInsertSchema(newsletters).pick({
  title: true,
  issueDate: true,
  content: true,
  published: true,
});

// Article model
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url"),
  section: text("section").notNull(), // e.g. work, ideas, stuff
  published: boolean("published").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertArticleSchema = createInsertSchema(articles).pick({
  title: true,
  content: true,
  imageUrl: true,
  section: true,
  published: true,
});

// Types
export type Subscriber = typeof subscribers.$inferSelect;
export type InsertSubscriber = z.infer<typeof insertSubscriberSchema>;

export type Newsletter = typeof newsletters.$inferSelect;
export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;

export type Article = typeof articles.$inferSelect;
export type InsertArticle = z.infer<typeof insertArticleSchema>;

// Mock Data For Initial Render
export const mockArticles: Article[] = [
  // Work Section
  {
    id: 1,
    title: "New Corporate Website",
    content: "Our new corporate website features a clean, modern interface with intuitive navigation and responsive design that adapts to all devices.",
    imageUrl: "https://images.unsplash.com/photo-1547119957-637f8679db1e",
    section: "work",
    published: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Brand Identity Redesign",
    content: "Brand identity redesign for Libra Industries featuring updated logo design, color palette, and comprehensive brand guidelines.",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    section: "work",
    published: true,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "Office Space Redesign",
    content: "Office space redesign for Pixel Media featuring collaborative zones, creative thinking spaces, and technology integration.",
    imageUrl: "https://images.unsplash.com/photo-1497215842964-222b430dc094",
    section: "work",
    published: true,
    createdAt: new Date(),
  },
  
  // Ideas Section
  {
    id: 4,
    title: "Interactive Workshops",
    content: "Interactive workshop facilitation for teams looking to unlock creative potential and develop innovative solutions.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    section: "ideas",
    published: true,
    createdAt: new Date(),
  },
  {
    id: 5,
    title: "Experimental Design",
    content: "Experimental design approaches combining traditional techniques with modern digital tools for unique visual experiences.",
    imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634",
    section: "ideas",
    published: true,
    createdAt: new Date(),
  },
  {
    id: 6,
    title: "Email Marketing Strategies",
    content: "Email marketing strategies that combine visual storytelling with targeted content for maximum engagement.",
    imageUrl: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f",
    section: "ideas",
    published: true,
    createdAt: new Date(),
  },
  
  // Stuff Section
  {
    id: 7,
    title: "Digital Art Exhibition",
    content: "Digital art exhibition featuring dynamic color fields and geometric compositions that challenge spatial perception.",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    section: "stuff",
    published: true,
    createdAt: new Date(),
  },
  {
    id: 8,
    title: "Visual Perception Research",
    content: "Visual perception research exploring how design elements influence user attention patterns and cognitive processing.",
    imageUrl: "https://images.unsplash.com/photo-1544923246-77307dd654cb",
    section: "stuff",
    published: true,
    createdAt: new Date(),
  },
  {
    id: 9,
    title: "Workstation Optimization",
    content: "Workstation optimization guidance for creative professionals, combining ergonomics with accessibility and workflow efficiency.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    section: "stuff",
    published: true,
    createdAt: new Date(),
  },
];

export const mockNewsletters: Newsletter[] = [
  {
    id: 1,
    title: "March 2023",
    issueDate: "2023-03-20",
    content: "Featuring our spring collection, design trends, and creative inspiration.",
    published: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "February 2023",
    issueDate: "2023-02-20",
    content: "Exploring typography innovation, color theory, and client case studies.",
    published: true,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: "January 2023",
    issueDate: "2023-01-20",
    content: "New year creativity kickstart, industry predictions, and workspace inspiration.",
    published: true,
    createdAt: new Date(),
  },
];

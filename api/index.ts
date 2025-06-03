import type { VercelRequest, VercelResponse } from '@vercel/node';

// Simple API handler for Vercel
export default function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Basic routing
  const { url } = req;
  
  if (url?.startsWith('/api/articles')) {
    return handleArticles(req, res);
  }
  
  if (url?.startsWith('/api/newsletters')) {
    return handleNewsletters(req, res);
  }
  
  if (url?.startsWith('/api/subscribers')) {
    return handleSubscribers(req, res);
  }

  // Default response
  res.status(404).json({ message: 'API endpoint not found' });
}

// Mock data (same as in your server)
const mockArticles = [
  {
    id: 1,
    title: "New Corporate Website",
    content: "Our new corporate website features a clean, modern interface with intuitive navigation and responsive design that adapts to all devices.",
    imageUrl: "https://images.unsplash.com/photo-1547119957-637f8679db1e",
    section: "work",
    published: true,
    createdAt: new Date()
  },
  {
    id: 2,
    title: "Brand Identity Redesign",
    content: "Brand identity redesign for Libra Industries featuring updated logo design, color palette, and comprehensive brand guidelines.",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    section: "work",
    published: true,
    createdAt: new Date()
  },
  {
    id: 3,
    title: "Office Space Redesign",
    content: "Office space redesign for Pixel Media featuring collaborative zones, creative thinking spaces, and technology integration.",
    imageUrl: "https://images.unsplash.com/photo-1497215842964-222b430dc094",
    section: "work",
    published: true,
    createdAt: new Date()
  },
  {
    id: 4,
    title: "Interactive Workshops",
    content: "Interactive workshop facilitation for teams looking to unlock creative potential and develop innovative solutions.",
    imageUrl: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    section: "ideas",
    published: true,
    createdAt: new Date()
  },
  {
    id: 5,
    title: "Experimental Design",
    content: "Experimental design approaches combining traditional techniques with modern digital tools for unique visual experiences.",
    imageUrl: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634",
    section: "ideas",
    published: true,
    createdAt: new Date()
  },
  {
    id: 6,
    title: "Email Marketing Strategies",
    content: "Email marketing strategies that combine visual storytelling with targeted content for maximum engagement.",
    imageUrl: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f",
    section: "ideas",
    published: true,
    createdAt: new Date()
  },
  {
    id: 7,
    title: "Digital Art Exhibition",
    content: "Digital art exhibition featuring dynamic color fields and geometric compositions that challenge spatial perception.",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
    section: "stuff",
    published: true,
    createdAt: new Date()
  },
  {
    id: 8,
    title: "Visual Perception Research",
    content: "Visual perception research exploring how design elements influence user attention patterns and cognitive processing.",
    imageUrl: "https://images.unsplash.com/photo-1544923246-77307dd654cb",
    section: "stuff",
    published: true,
    createdAt: new Date()
  },
  {
    id: 9,
    title: "Workstation Optimization",
    content: "Workstation optimization guidance for creative professionals, combining ergonomics with accessibility and workflow efficiency.",
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
    section: "stuff",
    published: true,
    createdAt: new Date()
  }
];

const mockNewsletters = [
  {
    id: 1,
    title: "March 2023",
    issueDate: "2023-03-20",
    content: "Featuring our spring collection, design trends, and creative inspiration.",
    published: true,
    createdAt: new Date()
  },
  {
    id: 2,
    title: "February 2023",
    issueDate: "2023-02-20",
    content: "Exploring typography innovation, color theory, and client case studies.",
    published: true,
    createdAt: new Date()
  },
  {
    id: 3,
    title: "January 2023",
    issueDate: "2023-01-20",
    content: "New year creativity kickstart, industry predictions, and workspace inspiration.",
    published: true,
    createdAt: new Date()
  }
];

function handleArticles(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const section = req.query.section as string;
    let articles = mockArticles.filter(article => article.published);
    
    if (section) {
      articles = articles.filter(article => article.section === section);
    }
    
    res.status(200).json(articles);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

function handleNewsletters(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const newsletters = mockNewsletters.sort((a, b) => 
      new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
    );
    res.status(200).json(newsletters);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

function handleSubscribers(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    // Simple subscription handler
    const { email, name } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    
    // Mock successful subscription
    res.status(201).json({
      id: Date.now(),
      email,
      name: name || '',
      subscribed: true,
      createdAt: new Date()
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

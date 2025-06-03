export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-heading font-bold mb-2">ABOUT DISCOVERY CREATIVE</h1>
        <p className="text-xl text-primary font-quote italic mb-8">
          "We're a creative studio focused on design, branding, and digital experiences that make meaningful connections."
        </p>
        
        <div className="prose prose-lg">
          <p>
            Discovery Creative was founded in 2015 with a simple mission: to create meaningful 
            design that communicates clearly, functions intuitively, and connects emotionally 
            with audiences.
          </p>
          
          <p>
            Our team combines strategic thinking with creative execution to deliver work that 
            not only looks good but also performs exceptionally well. We believe that great 
            design should be both beautiful and effective.
          </p>
          
          <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Our Philosophy</h2>
          <p>
            We believe that the best creative work comes from a deep understanding of the 
            problem at hand, the audience we're communicating with, and the goals our clients 
            are trying to achieve. Our approach is collaborative, iterative, and focused on 
            results.
          </p>
          
          <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Our Services</h2>
          <ul>
            <li>Branding and Identity</li>
            <li>Website Design and Development</li>
            <li>User Experience (UX) Design</li>
            <li>Print and Digital Marketing</li>
            <li>Content Strategy and Creation</li>
            <li>Creative Direction</li>
          </ul>
          
          <h2 className="text-2xl font-heading font-bold mt-8 mb-4">Our Newsletter</h2>
          <p>
            In 2023, we launched our monthly newsletter to share our work, insights, and creative 
            inspiration with a wider audience. Each issue features a curated collection of our latest 
            projects, design trends, and ideas we're excited about.
          </p>
        </div>
      </div>
    </div>
  );
}

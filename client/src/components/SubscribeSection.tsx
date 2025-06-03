import SubscriptionForm from "./SubscriptionForm";

export default function SubscribeSection() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="border-2 border-black p-6 vintage-shadow relative">
        <div className="absolute -top-3 -left-3 bg-primary text-white font-heading font-bold text-sm py-1 px-3 uppercase tracking-wider vintage-shadow">
          Stay Updated
        </div>
      
        <h2 className="text-3xl font-heading font-black text-slate-900 mt-4 mb-2 uppercase tracking-tight">SUBSCRIBE</h2>
        <div className="border-t-2 border-black mb-4"></div>
        <p className="mb-4 text-base font-medium">
          Get fresh Discovery Creative news delivered to your inbox. We send out new issues on the 20th of each month.
        </p>
        
        <SubscriptionForm />
        
        <div className="flex items-center justify-end mt-6">
          <div className="text-xs font-heading uppercase text-slate-600 tracking-wide mr-1">Follow Us</div>
          <div className="flex space-x-2">
            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer">in</div>
            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer">tw</div>
            <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer">fb</div>
          </div>
        </div>
      </div>
    </section>
  );
}

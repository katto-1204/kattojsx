import { Button } from "@/components/ui/button";
import { Github, Facebook, Instagram, Mail, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 text-white py-32 relative overflow-hidden">
      <div className="container max-w-7xl px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <h2 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-[0.8] uppercase">
              LET'S <span className="text-primary-gradient">TALK</span><br />SHOP
            </h2>
            <p className="text-xl text-zinc-400 max-w-md font-medium leading-relaxed">
              Available for full-time opportunities or selective freelance projects. 
              Let's build something that breaks the internet.
            </p>
          </div>
          <div className="flex flex-col justify-end items-center md:items-end">
            <Button 
              size="lg" 
              className="bg-primary-gradient hover:opacity-90 text-white rounded-full text-xl px-14 py-12 mb-12 group w-full sm:w-auto font-black shadow-[0_20px_50px_rgba(249,115,22,0.3)] border-none"
              asChild
            >
              <a href="mailto:g11arnadoc@gmail.com">
                GET IN TOUCH <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform w-8 h-8" />
              </a>
            </Button>
            <div className="text-center md:text-right space-y-3 mb-12 w-full">
              <p className="text-zinc-600 uppercase tracking-[0.4em] text-[10px] font-black mb-2">Direct Line</p>
              <a href="mailto:g11arnadoc@gmail.com" className="block text-2xl sm:text-4xl hover:text-orange-500 transition-all font-black tracking-tighter">g11arnadoc@gmail.com</a>
              <a href="tel:+639056829865" className="block text-xl text-zinc-500 hover:text-white transition-all font-bold">+63 905 682 9865</a>
            </div>
            <div className="flex gap-4 justify-center md:justify-end w-full">
              {[
                { icon: Github, href: "https://github.com/katto-1204", color: "hover:bg-zinc-800" },
                { icon: Facebook, href: "https://facebook.com/katto.jsx", color: "hover:bg-blue-600" },
                { icon: Instagram, href: "https://instagram.com/katto.jsx", color: "hover:bg-pink-600" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank"
                  rel="noreferrer"
                  className={`w-16 h-16 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center transition-all duration-500 hover:scale-110 hover:border-orange-500/50 hover:bg-orange-500/10 ${social.color}`}
                >
                  <social.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 w-full">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-black tracking-[0.1em] text-white uppercase tracking-tighter">KATTO<span className="text-primary-gradient">.JSX</span></h3>
            <p className="text-zinc-600 text-xs font-black uppercase tracking-[0.2em] mt-2">Design Engineer & Creative Developer</p>
          </div>
          <div className="text-right">
            <p className="text-zinc-600 text-xs font-bold uppercase tracking-widest">© 2025 Catherine Arnado. Built with Precision.</p>
          </div>
        </div>
      </div>
      
      {/* Footer Ambient Background */}
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -top-48 -left-48 w-[600px] h-[600px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
    </footer>
  );
}

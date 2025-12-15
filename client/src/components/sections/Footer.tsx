import { Button } from "@/components/ui/button";
import { Github, Facebook, Instagram, Mail, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-8 leading-none">
              LET'S<br />HAVE A<br /><span className="text-primary">CHAT</span>
            </h2>
            <p className="text-xl text-white/60 max-w-md">
              Want to chat design, products, anything digital? Hit me up!
            </p>
          </div>
          
          <div className="flex flex-col justify-end items-start md:items-end">
            <Button size="lg" className="rounded-full text-lg px-8 py-8 mb-8 group">
              Get in Touch <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-right space-y-2 mb-8">
              <a href="mailto:g11arnadoc@gmail.com" className="block text-2xl hover:text-primary transition-colors">g11arnadoc@gmail.com</a>
              <a href="tel:+9056829865" className="block text-xl text-white/60 hover:text-white transition-colors">+905 682 9865</a>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-2xl font-bold tracking-widest mb-4 md:mb-0">KATTO.JSX</h3>
          <p className="text-white/40 text-sm">© 2025 Catherine Arnado. All rights reserved.</p>
        </div>
      </div>
      
      {/* Footer Ambient Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent blur-3xl opacity-30 pointer-events-none" />
    </footer>
  );
}

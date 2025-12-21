import { Button } from "@/components/ui/button";
import { Github, Facebook, Instagram, Mail, Phone, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="container max-w-full px-4 sm:px-6 md:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-24">
          <div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold tracking-tighter mb-4 sm:mb-8 leading-none text-center md:text-left">
              LET'S<br />HAVE A<br /><span className="text-primary">CHAT</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-xs sm:max-w-md mx-auto md:mx-0 text-center md:text-left">
              Want to chat design, products, anything digital? Hit me up!
            </p>
          </div>
          <div className="flex flex-col justify-end items-center md:items-end">
            <Button size="lg" className="rounded-full text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-8 mb-6 sm:mb-8 group w-full sm:w-auto">
              Get in Touch <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="text-center md:text-right space-y-1 sm:space-y-2 mb-6 sm:mb-8 w-full">
              <a href="mailto:g11arnadoc@gmail.com" className="block text-lg sm:text-2xl hover:text-primary transition-colors break-all">g11arnadoc@gmail.com</a>
              <a href="tel:+9056829865" className="block text-base sm:text-xl text-white/60 hover:text-white transition-colors">+905 682 9865</a>
            </div>
            <div className="flex gap-3 sm:gap-4 justify-center md:justify-end w-full">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 w-full">
          <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold tracking-widest mb-2 sm:mb-0 text-center sm:text-left">KATTO.JSX</h3>
          <p className="text-white/40 text-xs sm:text-sm md:text-base text-center sm:text-right">© 2025 Catherine Arnado. All rights reserved.</p>
        </div>
      </div>
      {/* Footer Ambient Background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent blur-3xl opacity-30 pointer-events-none" />
    </footer>
  );
}

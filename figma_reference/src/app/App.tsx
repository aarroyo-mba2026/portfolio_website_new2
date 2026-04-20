import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { Capabilities } from "./components/Capabilities";
import { About } from "./components/About";
import { ProductLab } from "./components/ProductLab";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SelectedWork />
      <Capabilities />
      <About />
      <ProductLab />
      <Contact />

      <footer className="py-12 px-6 lg:px-12 border-t border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Made with curiosity & late nights
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:bg-gradient-to-r hover:from-[#ff6b6b] hover:to-[#a78bfa] hover:bg-clip-text hover:text-transparent transition-all">
              Twitter
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:bg-gradient-to-r hover:from-[#4ecdc4] hover:to-[#ffd93d] hover:bg-clip-text hover:text-transparent transition-all">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
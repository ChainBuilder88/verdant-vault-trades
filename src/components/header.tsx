import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="border-b border-border bg-gradient-glass backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Carbon Credit Marketplace" 
              className="w-10 h-10 animate-float"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">
                FHE-Powered Sustainable Finance
              </h1>
              <p className="text-sm text-muted-foreground">
                Encrypted Carbon Credit Trading
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="/marketplace" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Marketplace
            </a>
            <a href="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="/audit" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Audit
            </a>
          </nav>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Connect Wallet
            </Button>
            <Button variant="default" size="sm" className="bg-gradient-eco hover:opacity-90">
              Trade Credits
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
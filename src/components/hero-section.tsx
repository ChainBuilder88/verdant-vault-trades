import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-eco bg-clip-text text-transparent animate-float">
            Private Carbon Credit Marketplace
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Carbon offset trades encrypted to avoid double-counting and prevent manipulation until retirement. 
            <span className="text-primary"> Regulators can decrypt for audit.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-eco hover:opacity-90 shadow-eco">
              Start Trading
            </Button>
            <Button variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 bg-gradient-glass border-border shadow-glass">
              <div className="text-3xl mb-4 animate-encrypt-glow">🔒</div>
              <h3 className="font-semibold mb-2">FHE Encryption</h3>
              <p className="text-sm text-muted-foreground">
                Fully homomorphic encryption ensures trade privacy while enabling verification
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-glass border-border shadow-glass">
              <div className="text-3xl mb-4 animate-co2-pulse">📊</div>
              <h3 className="font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Live CO₂ metrics and automated compliance tracking
              </p>
            </Card>
            
            <Card className="p-6 bg-gradient-glass border-border shadow-glass">
              <div className="text-3xl mb-4 animate-leaf-sway">🌱</div>
              <h3 className="font-semibold mb-2">Verified Impact</h3>
              <p className="text-sm text-muted-foreground">
                Blockchain-verified carbon retirement and impact measurement
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
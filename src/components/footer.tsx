export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/40 border-t border-border overflow-hidden">
      {/* Animated Leaf Vines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full h-16">
          <svg 
            viewBox="0 0 1200 100" 
            className="w-full h-full animate-leaf-sway"
            fill="currentColor"
          >
            <path 
              d="M0,60 Q150,30 300,50 T600,45 T900,55 T1200,40 L1200,100 L0,100 Z" 
              className="text-primary/30"
            />
            <path 
              d="M0,80 Q200,50 400,70 T800,65 T1200,60 L1200,100 L0,100 Z" 
              className="text-accent/20"
            />
          </svg>
        </div>
        
        {/* Floating leaf elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-primary/20 animate-float`}
            style={{
              left: `${15 + i * 15}%`,
              bottom: `${10 + (i % 3) * 10}px`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${1.2 + (i % 2) * 0.3}rem`
            }}
          >
            🍃
          </div>
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Platform</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Marketplace</div>
              <div>Dashboard</div>
              <div>API Documentation</div>
              <div>White Paper</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Security</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>FHE Encryption</div>
              <div>Audit Reports</div>
              <div>Compliance</div>
              <div>Bug Bounty</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Carbon Standards</div>
              <div>Verification</div>
              <div>Impact Reports</div>
              <div>Community</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>Twitter</div>
              <div>Discord</div>
              <div>GitHub</div>
              <div>Newsletter</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 FHE Carbon Credit Marketplace. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
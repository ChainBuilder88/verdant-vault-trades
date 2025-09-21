import { Card } from "@/components/ui/card";
import { CarbonMeter } from "@/components/ui/carbon-meter";
import { Button } from "@/components/ui/button";

export function DashboardSection() {
  return (
    <section id="dashboard" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Carbon Credit Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time monitoring of your carbon portfolio with encrypted transaction tracking
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <CarbonMeter
            label="Total Credits Owned"
            value={12450}
            maxValue={20000}
            unit="tCO₂"
            trend="up"
          />
          <CarbonMeter
            label="Monthly Offset"
            value={890}
            maxValue={1200}
            unit="tCO₂"
            trend="down"
          />
          <CarbonMeter
            label="Verified Retirements"
            value={7850}
            maxValue={10000}
            unit="tCO₂"
            trend="neutral"
          />
          <CarbonMeter
            label="Portfolio Value"
            value={186500}
            maxValue={250000}
            unit="USD"
            trend="up"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-glass border-border shadow-glass">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Active Trades</h3>
              <div className="w-3 h-3 bg-success rounded-full animate-co2-pulse"></div>
            </div>
            
            <div className="space-y-4">
              {[
                { type: "Buy Order", amount: "500 tCO₂", price: "$15.50", status: "Encrypted" },
                { type: "Sell Order", amount: "250 tCO₂", price: "$16.25", status: "Pending" },
                { type: "Retirement", amount: "100 tCO₂", price: "—", status: "Processing" },
              ].map((trade, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-medium">{trade.type}</div>
                    <div className="text-sm text-muted-foreground">{trade.amount}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{trade.price}</div>
                    <div className="text-sm text-primary animate-encrypt-glow">{trade.status}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="w-full mt-6 bg-gradient-eco hover:opacity-90">
              View All Trades
            </Button>
          </Card>
          
          <Card className="p-8 bg-gradient-glass border-border shadow-glass">
            <h3 className="text-2xl font-semibold mb-6">Encryption Status</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center">
                  <span className="text-success animate-encrypt-glow">🔐</span>
                </div>
                <div>
                  <div className="font-medium">FHE Protection Active</div>
                  <div className="text-sm text-muted-foreground">All trades fully encrypted</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center">
                  <span className="text-warning animate-co2-pulse">👁️</span>
                </div>
                <div>
                  <div className="font-medium">Regulator Access</div>
                  <div className="text-sm text-muted-foreground">Audit-ready decryption available</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary animate-float">⚡</span>
                </div>
                <div>
                  <div className="font-medium">Zero-Knowledge Proofs</div>
                  <div className="text-sm text-muted-foreground">Verify without revealing</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
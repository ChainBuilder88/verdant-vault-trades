import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Marketplace = () => {
  const carbonCredits = [
    {
      id: 1,
      project: "Amazon Rainforest Conservation",
      type: "Forest Protection",
      credits: 1500,
      price: 15.50,
      verification: "Verra VCS",
      location: "Brazil",
      vintage: "2024"
    },
    {
      id: 2,
      project: "Solar Farm Development",
      type: "Renewable Energy",
      credits: 2000,
      price: 12.75,
      verification: "Gold Standard",
      location: "India",
      vintage: "2024"
    },
    {
      id: 3,
      project: "Wind Power Generation",
      type: "Renewable Energy",
      credits: 3500,
      price: 14.20,
      verification: "CDM",
      location: "Denmark",
      vintage: "2023"
    },
    {
      id: 4,
      project: "Reforestation Initiative",
      type: "Afforestation",
      credits: 1200,
      price: 18.90,
      verification: "CAR",
      location: "Kenya",
      vintage: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              Carbon Credit Marketplace
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trade verified carbon credits with full encryption. All transactions are private until retirement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {carbonCredits.map((credit) => (
              <Card key={credit.id} className="p-6 bg-gradient-glass border-border shadow-glass hover:shadow-eco transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {credit.type}
                  </Badge>
                  <div className="w-3 h-3 bg-success rounded-full animate-co2-pulse"></div>
                </div>
                
                <h3 className="font-semibold mb-2 text-foreground">{credit.project}</h3>
                <p className="text-sm text-muted-foreground mb-4">{credit.location}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Available Credits:</span>
                    <span className="font-medium">{credit.credits.toLocaleString()} tCO₂</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Price per tCO₂:</span>
                    <span className="font-medium text-primary">${credit.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Verification:</span>
                    <span className="font-medium">{credit.verification}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Vintage:</span>
                    <span className="font-medium">{credit.vintage}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-eco hover:opacity-90" size="sm">
                    Buy Credits
                  </Button>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-glass border-border shadow-glass max-w-2xl mx-auto">
              <div className="text-3xl mb-4 animate-encrypt-glow">🔐</div>
              <h3 className="text-2xl font-semibold mb-4">Encrypted Trading</h3>
              <p className="text-muted-foreground mb-6">
                All trades are encrypted using FHE technology. Trade details remain private until retirement, 
                preventing double-counting and market manipulation while maintaining regulatory compliance.
              </p>
              <Button className="bg-gradient-eco hover:opacity-90">
                Learn More About FHE
              </Button>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
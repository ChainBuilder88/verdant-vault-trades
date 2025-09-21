import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Audit = () => {
  const auditLogs = [
    {
      id: "AUD-001",
      type: "Trade Verification",
      entity: "Global Carbon Fund",
      timestamp: "2024-01-15 14:32:00",
      status: "Completed",
      credits: 2500,
      description: "Verified purchase of renewable energy credits"
    },
    {
      id: "AUD-002", 
      type: "Retirement Audit",
      entity: "Environmental Protection Agency",
      timestamp: "2024-01-14 09:15:00",
      status: "In Progress",
      credits: 1800,
      description: "Audit of credit retirement for compliance"
    },
    {
      id: "AUD-003",
      type: "Double-spending Check",
      entity: "Carbon Registry Authority",
      timestamp: "2024-01-13 16:45:00", 
      status: "Completed",
      credits: 3200,
      description: "Verification of no double-counting in trades"
    }
  ];

  const complianceMetrics = [
    { label: "Total Audited Credits", value: "45,680 tCO₂", status: "verified" },
    { label: "Compliance Rate", value: "99.7%", status: "excellent" },
    { label: "Pending Audits", value: "3", status: "normal" },
    { label: "Failed Audits", value: "0", status: "excellent" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              Regulatory Audit Portal
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent audit trail with selective decryption for regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {complianceMetrics.map((metric, index) => (
              <Card key={index} className="p-6 bg-gradient-glass border-border shadow-glass">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground mb-3">{metric.label}</div>
                  <Badge 
                    variant={metric.status === "excellent" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {metric.status === "excellent" ? "✓ Excellent" : 
                     metric.status === "verified" ? "✓ Verified" : "⏳ Normal"}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          <Tabs defaultValue="audit-logs" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="audit-logs">Audit Logs</TabsTrigger>
              <TabsTrigger value="decryption">Selective Decryption</TabsTrigger>
              <TabsTrigger value="compliance">Compliance Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="audit-logs" className="space-y-6">
              <Card className="p-6 bg-gradient-glass border-border shadow-glass">
                <h3 className="text-xl font-semibold mb-6">Recent Audit Activities</h3>
                <div className="space-y-4">
                  {auditLogs.map((log) => (
                    <div key={log.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {log.id}
                          </Badge>
                          <span className="font-medium">{log.type}</span>
                          <Badge 
                            variant={log.status === "Completed" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {log.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {log.entity} • {log.credits.toLocaleString()} tCO₂
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {log.description}
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        {log.timestamp}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="decryption" className="space-y-6">
              <Card className="p-8 bg-gradient-glass border-border shadow-glass">
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4 animate-encrypt-glow">🔓</div>
                  <h3 className="text-2xl font-semibold mb-4">Selective Decryption Portal</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Authorized regulators can decrypt specific transactions for audit purposes 
                    while maintaining overall market privacy.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 border-warning/20">
                    <h4 className="font-semibold mb-4 text-warning">Pending Decryption Requests</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-warning/10 rounded">
                        <span className="text-sm">Trade ID: TXN-2024-001547</span>
                        <Button size="sm" variant="outline">Decrypt</Button>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-warning/10 rounded">
                        <span className="text-sm">Trade ID: TXN-2024-001548</span>
                        <Button size="sm" variant="outline">Decrypt</Button>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 border-success/20">
                    <h4 className="font-semibold mb-4 text-success">Authorized Access</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-sm">EPA Compliance Officer</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-sm">Carbon Registry Authority</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">Financial Auditor</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="compliance" className="space-y-6">
              <Card className="p-8 bg-gradient-glass border-border shadow-glass">
                <h3 className="text-2xl font-semibold mb-6">Compliance Reports</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Monthly Compliance Summary</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between p-3 bg-muted/20 rounded">
                        <span>January 2024</span>
                        <Badge variant="default">✓ Compliant</Badge>
                      </div>
                      <div className="flex justify-between p-3 bg-muted/20 rounded">
                        <span>December 2023</span>
                        <Badge variant="default">✓ Compliant</Badge>
                      </div>
                      <div className="flex justify-between p-3 bg-muted/20 rounded">
                        <span>November 2023</span>
                        <Badge variant="default">✓ Compliant</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Download Reports</h4>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        📊 Q4 2023 Compliance Report
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        📋 Annual Audit Summary 2023
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        🔍 Transaction Verification Log
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Audit;
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DashboardSection } from "@/components/dashboard-section";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <DashboardSection />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
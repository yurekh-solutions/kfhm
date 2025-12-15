import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/PageBanner";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <PageBanner 
        title="Page Not Found" 
        subtitle="404 - The page you're looking for doesn't exist"
        backgroundImage="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&h=600&fit=crop"
      />

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container flex items-center justify-center min-h-[50vh]">
          <div className="text-center px-4 animate-fade-in">
            <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Oops! Page Not Found</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto glass-effect p-4 rounded-xl">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track!
            </p>
            <Button asChild size="lg" className="px-8">
              <Link to="/" className="inline-flex items-center gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;

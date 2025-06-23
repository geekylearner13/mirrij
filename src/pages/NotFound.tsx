
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-academic-blue mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back to exploring MIRRIJ's research content.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link to="/">
              <Home className="mr-2 w-4 h-4" />
              Go to Homepage
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link to="/about-journal">
              <ArrowLeft className="mr-2 w-4 h-4" />
              About MIRRIJ
            </Link>
          </Button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4">Popular Pages</h3>
          <div className="space-y-2 text-sm">
            <Link to="/current-issue" className="block text-academic-blue hover:underline">
              Current Issue
            </Link>
            <Link to="/how-to-submit" className="block text-academic-blue hover:underline">
              Submit Your Research
            </Link>
            <Link to="/archive" className="block text-academic-blue hover:underline">
              Browse Archive
            </Link>
            <Link to="/ethics" className="block text-academic-blue hover:underline">
              Publication Ethics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
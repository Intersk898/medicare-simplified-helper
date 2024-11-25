import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import BusinessHeader from "@/components/BusinessHeader";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <BusinessHeader />
      <Navbar />
      <div className="pt-28 flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
          <p className="text-gray-600 max-w-md">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="mt-4 bg-primary hover:bg-primary/90"
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
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
  );
};

export default NotFound;
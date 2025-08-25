import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: This conductor goes nowhere!",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! You have stumbled upon a non-existent conductor
        </p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Patch me back to the homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;

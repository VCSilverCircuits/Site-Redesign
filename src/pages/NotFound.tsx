import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Page not found at", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6 transition-colors duration-300">
      <motion.div
        className="bg-white dark:bg-gray-950 shadow-xl rounded-2xl p-10 max-w-lg w-full text-center transition-colors duration-300"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-16 h-16 text-yellow-500" />
        </div>
        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
          404
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
          Oops! Looks like you have stumbled across a non existent conductor.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-5 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          <Home className="w-5 h-5" />
          Patch me back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;

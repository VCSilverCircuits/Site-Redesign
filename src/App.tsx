import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Team from "./pages/Team";
import ITDRobot from "./pages/2025Robot";
import CSRobot from "./pages/2024Robot";
import PPlayRobot from "./pages/2023Robot";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Team />} />
            <Route path="/robot" element={<ITDRobot />} />
            <Route path="/into-the-deep-robot" element={<ITDRobot />} />
            <Route path="/center-stage-robot" element={<CSRobot />} />
            <Route path="/power-play-robot" element={<PPlayRobot />} />
            <Route path="/media" element={<Media />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

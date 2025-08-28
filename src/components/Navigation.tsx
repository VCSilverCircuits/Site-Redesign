import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Team" },
    { href: "/into-the-deep-robot", label: "Robots" },
    { href: "/media", label: "Media" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";

    if (path === "/team") {
      return location.pathname.startsWith("/team") || location.pathname.startsWith("/gallery");
    }

    if (path === "/into-the-deep-robot") {
      return (
        location.pathname.startsWith("/into-the-deep-robot") ||
        location.pathname.startsWith("/center-stage-robot") ||
        location.pathname.startsWith("/power-play-robot")
      );
    }

    return location.pathname.startsWith(path);
  };


  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-text">
              VC Silver Circuits
            </div>
            <div className="text-sm text-muted-foreground hidden sm:block">
              #16158
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) =>
              item.label === "Robots" ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={isActive(item.href) ? "default" : "ghost"}
                    >
                      {item.label}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem asChild>
                      <Link to="/into-the-deep-robot">2024-2025 Into The Deep</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/center-stage-robot">2023-2024 Center Stage</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/power-play-robot">2022-2023 Power Play</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : item.label === "Team" ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={isActive(item.href) ? "default" : "ghost"}
                    >
                      {item.label}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    <DropdownMenuItem asChild>
                      <Link to="/team">Our Members</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/gallery">Gallery</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={item.href}
                  variant={isActive(item.href) ? "default" : "ghost"}
                  asChild
                >
                  <Link to={item.href}>{item.label}</Link>
                </Button>
              )
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) =>
                item.label === "Robots" ? (
                  <div key={item.href} className="flex flex-col">
                    <Button
                      variant={isActive(item.href) ? "default" : "ghost"}
                      className="justify-start"
                      asChild
                    >
                      <Link to="/into-the-deep-robot">{item.label}</Link>
                    </Button>
                    <div className="pl-4 flex flex-col space-y-1">
                      <Button variant="ghost" className="justify-start" asChild>
                        <Link to="/into-the-deep-robot">2024-2025 Into The Deep</Link>
                      </Button>
                      <Button variant="ghost" className="justify-start" asChild>
                        <Link to="/center-stage-robot">2023-2024 Center Stage</Link>
                      </Button>
                      <Button variant="ghost" className="justify-start" asChild>
                        <Link to="/power-play-robot">2022-2023 Power Play</Link>
                      </Button>
                    </div>
                  </div>
                ) : item.label === "Team" ? (
                  <div key={item.href} className="flex flex-col">
                    <Button
                      variant={isActive(item.href) ? "default" : "ghost"}
                      className="justify-start"
                      asChild
                    >
                      <Link to="/team">{item.label}</Link>
                    </Button>
                    <div className="pl-4 flex flex-col space-y-1">
                      <Button variant="ghost" className="justify-start" asChild>
                        <Link to="/team">Our Members</Link>
                      </Button>
                      <Button variant="ghost" className="justify-start" asChild>
                        <Link to="/gallery">Gallery</Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    key={item.href}
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className="justify-start"
                    asChild
                    onClick={() => setIsOpen(false)}
                  >
                    <Link to={item.href}>{item.label}</Link>
                  </Button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

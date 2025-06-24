
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-academic-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg"><img src="https://github.com/geekylearner13/mirrij/blob/main/public/assets/Narayan%20Research%20and%20Education%20Logo-edit.png?raw=true" alt="company-logo" /></span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-semibold text-gray-900">Narayan Research</h1>
              <p className="text-sm text-academic-gray">& Education</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive("/") ? "text-academic-blue" : "text-gray-700 hover:text-academic-blue"
              }`}
            >
              Home
            </Link>

            {/* Journal Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 font-medium text-gray-700 hover:text-academic-blue transition-colors">
                <span>Journal</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/about-journal" className="cursor-pointer">About the Journal</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/instructions-to-authors" className="cursor-pointer">Instructions to Authors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/how-to-submit" className="cursor-pointer">How to Submit Paper</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Editorial Leadership Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 font-medium text-gray-700 hover:text-academic-blue transition-colors">
                <span>Editorial Leadership</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/chief-editor" className="cursor-pointer">Chief Editor</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/editorial-secretary" className="cursor-pointer">Editorial Secretary</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/advisory-board" className="cursor-pointer">Advisory Board</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Issues Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 font-medium text-gray-700 hover:text-academic-blue transition-colors">
                <span>Issues</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/current-issue" className="cursor-pointer">Current Issue</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/archive" className="cursor-pointer">Archive</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/special-issue" className="cursor-pointer">Special Issue</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              to="/ethics" 
              className={`font-medium transition-colors ${
                isActive("/ethics") ? "text-academic-blue" : "text-gray-700 hover:text-academic-blue"
              }`}
            >
              Ethics
            </Link>

            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${
                isActive("/contact") ? "text-academic-blue" : "text-gray-700 hover:text-academic-blue"
              }`}
            >
              Contact Us
            </Link>

            <Link 
              to="/register" 
              className={`font-medium transition-colors ${
                isActive("/register") ? "text-academic-blue" : "text-gray-700 hover:text-academic-blue"
              }`}
            >
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-academic-blue transition-colors"
                onClick={handleMobileLinkClick}
              >
                Home
              </Link>
              <div className="space-y-2">
                <p className="font-medium text-gray-900">Journal</p>
                <Link 
                  to="/about-journal" 
                  className="block pl-4 text-gray-700 hover:text-academic-blue transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  About the Journal
                </Link>
                <Link 
                  to="/instructions-to-authors" 
                  className="block pl-4 text-gray-700 hover:text-academic-blue transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  Instructions to Authors
                </Link>
                <Link 
                  to="/how-to-submit" 
                  className="block pl-4 text-gray-700 hover:text-academic-blue transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  How to Submit Paper
                </Link>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-gray-900">Editorial Leadership</p>
                <Link 
                  to="/chief-editor" 
                  className="block pl-4 text-gray-700 hover:text-academic-blue transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  Chief Editor
                </Link>
                <Link 
                  to="/editorial-secretary" 
                  className="block pl-4 text-gray-700 hover:text-academic-blue transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  Editorial Secretary
                </Link>
                <Link 
                  to="/advisory-board" 
                  className="block pl-4 text-gray-700 hover:text-academic-blue transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  Advisory Board
                </Link>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-gray-900">Issues</p>
                <Link 
                  to="/current-issue" 
                  className="block pl-4 text-gray-700 hover:text-academic-blue transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  Current Issue
                </Link>
                <Link 
                  to="/archive" 
                  className="block pl-4 text-gray-700 hover:text-academic-blue transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  Archive
                </Link>
                <Link 
                  to="/special-issue" 
                  className="block pl-4 text-gray-700 hover:text-academic-blue transition-colors"
                  onClick={handleMobileLinkClick}
                >
                  Special Issue
                </Link>
              </div>
              <Link 
                to="/ethics" 
                className="text-gray-700 hover:text-academic-blue transition-colors"
                onClick={handleMobileLinkClick}
              >
                Ethics
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-academic-blue transition-colors"
                onClick={handleMobileLinkClick}
              >
                Contact Us
              </Link>
              <Link 
                to="/register" 
                className="text-gray-700 hover:text-academic-blue transition-colors"
                onClick={handleMobileLinkClick}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
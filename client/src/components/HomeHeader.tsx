import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import OmniXLogo from "./logo/OmniXLogo";

export default function HomeHeader() {
  return (
    <header className="bg-white border-b border-neutral-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <OmniXLogo size="sm" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-neutral-600 hover:text-primary font-medium">
              Solutions
            </a>
            <a href="#" className="text-neutral-600 hover:text-primary font-medium">
              Products
            </a>
            <a href="#" className="text-neutral-600 hover:text-primary font-medium">
              Resources
            </a>
            <a href="#" className="text-neutral-600 hover:text-primary font-medium">
              About
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 hidden md:inline-flex">
                Login
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="hidden md:inline-flex">
                Try Demo
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-neutral-600" aria-label="Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
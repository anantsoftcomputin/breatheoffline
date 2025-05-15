"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "Categories", href: "/categories" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-emerald-50 text-gray-700 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2"
              aria-label="BreatheOffline homepage"
            >
              <img
                src="/breatheoffline.png"
                alt="BreatheOffline logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <nav
            className="hidden md:flex items-center space-x-8"
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-emerald-700 font-semibold border-b-2 border-emerald-700"
                      : "text-gray-700 hover:text-emerald-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-emerald-700 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu-nav"
              aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav
            id="mobile-menu-nav"
            className="md:hidden py-4 border-t border-emerald-100"
            aria-label="Main navigation mobile"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md transition-colors duration-200 ${
                      isActive
                        ? "text-emerald-700 font-semibold bg-emerald-100"
                        : "text-gray-700 hover:text-emerald-700 hover:bg-emerald-100"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, ArrowUpCircle } from "lucide-react";
import AdUnit from "@/components/AdUnit/AdUnit";

const footerLinks = {
  company: [
    { name: "About Us", href: "/aboutUs" },
    { name: "Contact Us", href: "/contactUs" },
  ],
  resources: [
    { name: "Blogs", href: "/blogs" },
    { name: "Categories", href: "/categories" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacyPolicy" },
    { name: "Terms & Conditions", href: "/terms&condition" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/people/BreatheOffline-Travel/61571280080816/",
  },
  { name: "Twitter", icon: Twitter, href: "https://x.com/breatheoffline" },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/breatheoffline/",
  },
];

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <AdUnit />
      <footer className="bg-purple-600 text-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src="/breatheoffline.png"
                  alt="BreatheOffline"
                  className="h-8 w-auto"
                />
              </Link>
              <p className="mt-4 text-gray-200">
                Empowering mindful technology use for a balanced digital
                lifestyle.
              </p>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-300 transition-colors duration-200"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">{name}</span>
                  </a>
                ))}
              </div>
            </div>
            {Object.entries(footerLinks).map(([section, links], index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4 capitalize text-white">
                  {section}
                </h3>
                <ul className="space-y-2">
                  {links.map(({ name, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-white hover:text-purple-300 transition-colors duration-200"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-purple-500 pt-8 mt-8 text-center">
            <p className="text-gray-200 text-sm">
              {currentYear
                ? `© ${currentYear} BreatheOffline. All rights reserved.`
                : "Loading..."}
            </p>
          </div>
        </div>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-600 text-white shadow-lg transition-all duration-300 hover:bg-purple-700"
          >
            <ArrowUpCircle className="h-6 w-6" />
          </button>
        )}
      </footer>
    </div>
  );
};

export default Footer;

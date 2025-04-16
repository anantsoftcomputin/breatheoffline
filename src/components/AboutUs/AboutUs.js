"use client";
import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Leaf,
  BrainCircuit,
  Users,
  Zap,
  EyeOff,
  Sun,
  CalendarCheck,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    number: "25K+",
    label: "Mindful Members",
    icon: <Leaf className="h-6 w-6 text-emerald-600" />,
    bgColor: "bg-emerald-100",
  },
  {
    number: "1M+",
    label: "Screen Hours Saved",
    icon: <Smartphone className="h-6 w-6 text-emerald-600" />,
    bgColor: "bg-emerald-100",
  },
  {
    number: "100+",
    label: "Expert Guides",
    icon: <BrainCircuit className="h-6 w-6 text-emerald-600" />,
    bgColor: "bg-emerald-100",
  },
  {
    number: "50+",
    label: "Detox Challenges",
    icon: <Zap className="h-6 w-6 text-emerald-600" />,
    bgColor: "bg-emerald-100",
  },
];

const resources = [
  {
    icon: EyeOff,
    title: "Digital Detox Plans",
    description:
      "Step-by-step programs to help you reduce screen time and reclaim your focus.",
  },
  {
    icon: BrainCircuit,
    title: "Mindful Tech Strategies",
    description:
      "Neuroscience-backed approaches to build healthier digital habits.",
  },
  {
    icon: CalendarCheck,
    title: "30-Day Challenges",
    description:
      "Structured programs to help you establish lasting digital wellness routines.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Intentional Technology Use",
    description:
      "We help you develop conscious engagement with technology using it with purpose rather than by habit.",
  },
  {
    icon: Sun,
    title: "Digital Wellbeing",
    description:
      "Our approach combines mindfulness and behavioral science to create sustainable tech-life balance.",
  },
  {
    icon: Users,
    title: "Supportive Community",
    description:
      "Join thousands who are reclaiming their attention and living more present lives.",
  },
];

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="pt-12 min-h-screen bg-gray-50">
      <section className="relative py-20 bg-emerald-100">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Reclaim Your Attention
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              At BreatheOffline, we're building a movement of mindful technology
              use helping people break free from digital overload and rediscover
              life beyond screens.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label + index}
                className={`text-center p-6 bg-emerald-50 rounded-xl border border-emerald-100 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`mx-auto mb-4 w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-800 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">
                Our Purpose
              </h3>
              <p className="text-gray-800 text-lg mb-8">
                In a world of constant connectivity, we help you establish
                healthy boundaries with technology. Through research-based
                content and practical tools, we empower you to:
              </p>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-600 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Person enjoying nature without phone"
                  className="w-full h-auto rounded-2xl object-cover transition-all duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
            Our Digital Wellness Resources
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Practical tools and knowledge to help you cultivate a balanced
            relationship with technology
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className={`bg-emerald-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
              >
                <div className="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center mb-5">
                  <resource.icon className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-600 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-5">{resource.description}</p>
                <Link
                  href="/blogs"
                  className="inline-flex items-center text-gray-600 hover:text-emerald-600 font-medium transition-colors"
                >
                  Explore resources
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-emerald-800 mb-6">
            Ready to Transform Your Tech Habits?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our community of mindful technology users and start your
            journey toward digital balance today.
          </p>
          <Link
            href=""
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors duration-300"
          >
            Begin Your Detox Journey
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;

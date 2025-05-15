"use client";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  BrainCircuit,
  Smartphone,
  Users,
  Shield,
  BookOpen,
  Hourglass,
  CalendarDays,
  LampDesk,
} from "lucide-react";

const coreBenefits = [
  {
    id: "core-benefit-1",
    icon: (
      <BrainCircuit className="h-5 w-5 text-emerald-600" aria-hidden="true" />
    ),
    label: "Science-Backed Techniques",
  },
  {
    id: "core-benefit-2",
    icon: <Hourglass className="h-5 w-5 text-emerald-600" aria-hidden="true" />,
    label: "Screen Time Reduction",
  },
  {
    id: "core-benefit-3",
    icon: <Users className="h-5 w-5 text-emerald-600" aria-hidden="true" />,
    label: "Supportive Community",
  },
];

const features = [
  {
    id: "feature-1",
    icon: (
      <Smartphone className="h-6 w-6 text-emerald-600" aria-hidden="true" />
    ),
    bgColor: "bg-emerald-100",
    title: "Digital Detox Plans",
    description:
      "Step-by-step guides to reduce screen time and break digital addiction cycles.",
  },
  {
    id: "feature-2",
    icon: <BookOpen className="h-6 w-6 text-emerald-600" aria-hidden="true" />,
    bgColor: "bg-emerald-100",
    title: "Mindful Tech Journaling",
    description:
      "Reflective exercises to understand and improve your digital habits.",
  },
  {
    id: "feature-3",
    icon: (
      <CalendarDays className="h-6 w-6 text-emerald-600" aria-hidden="true" />
    ),
    bgColor: "bg-emerald-100",
    title: "30-Day Challenges",
    description:
      "Structured programs to build lasting digital wellness habits.",
  },
  {
    id: "feature-4",
    icon: <LampDesk className="h-6 w-6 text-emerald-600" aria-hidden="true" />,
    bgColor: "bg-emerald-100",
    title: "Focus Enhancement",
    description: "Techniques to improve concentration and deep work sessions.",
  },
  {
    id: "feature-5",
    icon: <Shield className="h-6 w-6 text-emerald-600" aria-hidden="true" />,
    bgColor: "bg-emerald-100",
    title: "Digital Boundaries",
    description: "Learn to set healthy limits with your devices and apps.",
  },
  {
    id: "feature-6",
    icon: (
      <BrainCircuit className="h-6 w-6 text-emerald-600" aria-hidden="true" />
    ),
    bgColor: "bg-emerald-100",
    title: "Neuroscience Insights",
    description: "Understand how technology affects your brain and wellbeing.",
  },
];

const Hero = () => {
  return (
    <>
      <section
        aria-labelledby="hero-main-heading"
        className="relative overflow-hidden bg-emerald-50 py-20 lg:py-28"
      >
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
          <Leaf
            className="absolute text-emerald-200 floating-animation"
            style={{
              width: "45px",
              height: "45px",
              top: "10%",
              left: "15%",
              animationDuration: "8s",
              animationDelay: "0s",
              transform: "rotate(15deg)",
            }}
            aria-hidden="true"
          />
          <BrainCircuit
            className="absolute text-emerald-200 floating-animation-alt"
            style={{
              width: "35px",
              height: "35px",
              top: "30%",
              right: "10%",
              animationDuration: "10s",
              animationDelay: "1s",
            }}
            aria-hidden="true"
          />
          <BookOpen
            className="absolute text-emerald-200 floating-animation"
            style={{
              width: "55px",
              height: "55px",
              top: "55%",
              left: "5%",
              animationDuration: "7s",
              animationDelay: "2.5s",
              transform: "rotate(-25deg)",
            }}
            aria-hidden="true"
          />
          <Smartphone
            className="absolute text-emerald-200 floating-animation-alt"
            style={{
              width: "30px",
              height: "30px",
              bottom: "15%",
              right: "20%",
              animationDuration: "9s",
              animationDelay: "4s",
            }}
            aria-hidden="true"
          />
          <Hourglass
            className="absolute text-emerald-200 floating-animation"
            style={{
              width: "50px",
              height: "50px",
              bottom: "25%",
              left: "30%",
              animationDuration: "11s",
              animationDelay: "5.5s",
              transform: "rotate(5deg)",
            }}
            aria-hidden="true"
          />
          <Leaf
            className="absolute text-emerald-200 floating-animation-alt"
            style={{
              width: "25px",
              height: "25px",
              top: "75%",
              right: "8%",
              animationDuration: "6s",
              animationDelay: "1.5s",
              transform: "rotate(60deg) scaleX(-1)",
            }}
            aria-hidden="true"
          />
        </div>
        <div className="relative container mx-auto px-6 pt-12 pb-12 text-center z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 mb-6 shadow-sm">
              <Leaf
                className="h-4 w-4 text-emerald-600 mr-2"
                aria-hidden="true"
              />
              <span className="text-sm font-medium">Digital Wellness</span>
            </div>
            <h1
              id="hero-main-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Reclaim Your Focus in the Digital Age
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              BreatheOffline provides evidence-based strategies to help you
              reduce screen time, improve concentration, and cultivate a more
              intentional relationship with technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/blogs"
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center shadow hover:shadow-md"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/about-us"
                className="px-8 py-3 border border-emerald-600 text-emerald-700 rounded-lg font-medium hover:bg-emerald-100 transition-colors duration-300"
              >
                Our Philosophy
              </Link>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 text-gray-600">
              {coreBenefits.map((benefit) => (
                <div key={benefit.id} className="flex items-center gap-2">
                  {benefit.icon}
                  <span className="text-sm font-medium">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="digital-wellness-resources" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Practical Digital Wellness Resources
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Research-backed tools and methods to help you build healthier tech
              habits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {features.map((feature) => (
              <article
                key={feature.id}
                className="p-6 bg-white rounded-xl border border-emerald-200/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                aria-labelledby={`feature-title-${feature.id}`}
              >
                <div
                  className={`${feature.bgColor} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <h3
                  id={`feature-title-${feature.id}`}
                  className="text-xl font-semibold text-emerald-700 mb-2"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {feature.description}
                </p>
                <Link
                  href="/blogs"
                  className="inline-flex items-center text-gray-600 hover:text-emerald-600 transition-colors mt-auto"
                  aria-label={`Explore ${feature.title}`}
                >
                  Explore Now
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
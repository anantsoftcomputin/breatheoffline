"use client";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Brain,
  Zap,
  Users,
  ShieldCheck,
  Feather,
  Sun,
} from "lucide-react";

const coreBenefits = [
  {
    icon: <Brain className="h-5 w-5 text-emerald-600" />,
    label: "Expert Mindfulness Guidance",
  },
  {
    icon: <Zap className="h-5 w-5 text-emerald-600" />,
    label: "Practical Detox Strategies",
  },
  {
    icon: <Users className="h-5 w-5 text-emerald-600" />,
    label: "Supportive Community",
  },
];

const feature = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
    bgColor: "bg-emerald-100",
    title: "Digital Wellness Tools",
    description:
      "Apps and techniques to monitor and improve your digital habits.",
  },
  {
    icon: <Brain className="h-6 w-6 text-emerald-600" />,
    bgColor: "bg-emerald-100",
    title: "Mindfulness Practices",
    description:
      "Simple meditation and mindfulness exercises for digital balance.",
  },
  {
    icon: <Users className="h-6 w-6 text-emerald-600" />,
    bgColor: "bg-emerald-100",
    title: "Community Support",
    description: "Connect with others on similar digital wellness journeys.",
  },
];

const Hero = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-50 py-20 lg:py-28">
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
          />
          <Brain
            className="absolute text-emerald-200 floating-animation-alt"
            style={{
              width: "35px",
              height: "35px",
              top: "30%",
              right: "10%",
              animationDuration: "10s",
              animationDelay: "1s",
            }}
          />
          <Feather
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
          />
          <Zap
            className="absolute text-emerald-200 floating-animation-alt"
            style={{
              width: "30px",
              height: "30px",
              bottom: "15%",
              right: "20%",
              animationDuration: "9s",
              animationDelay: "4s",
            }}
          />
          <Sun
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
          />
        </div>
        <div className="relative container mx-auto px-6 pt-12 pb-12 text-center z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 mb-6 shadow-sm">
              <Leaf className="h-4 w-4 text-emerald-600 mr-2" />
              <span className="text-sm font-medium">Mindful Tech Living</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Rediscover Presence in a Connected World
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              BreatheOffline is your guide to digital wellbeing. Explore mindful
              strategies, expert insights, and community support to reduce
              screen time, enhance focus, and reconnect with what truly matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/blogs"
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center shadow hover:shadow-md"
              >
                Explore Strategies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/aboutUs"
                className="px-8 py-3 border border-emerald-600 text-emerald-700 rounded-lg font-medium hover:bg-emerald-100 transition-colors duration-300"
              >
                Learn About Us
              </Link>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 text-gray-600">
              {coreBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  {benefit.icon}
                  <span className="text-sm font-medium">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="content-section" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Digital Wellness Toolkit
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Simple tools and practices to help you cultivate a healthier
              relationship with technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {feature.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-emerald-200/60 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`${feature.bgColor} p-3 rounded-lg w-12 h-12 flex features-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-emerald-700 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link
                  href="/blogs"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-800 transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

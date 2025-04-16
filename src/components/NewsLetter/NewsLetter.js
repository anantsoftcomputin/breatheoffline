"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ajaxCall from "@/helpers/ajaxCall";
import { Mail, CheckCircle, Smartphone, Leaf, BrainCircuit, Clock, CalendarCheck } from "lucide-react";

const benefits = [
  "Weekly screen time reduction tips",
  "Exclusive digital detox guides",
  "Early access to mindfulness techniques",
  "Monthly focus challenges",
  "App usage analytics insights",
  "Productivity hacks for deep work"
];

const NewsLetter = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await ajaxCall("/subscription/subscribe-create/", {
        method: "POST",
        data: { email: data.email, site: "3" },
      });
      if (response.status === 200 || response.status === 201) {
        toast.success("Welcome to our mindful community! 🌿");
        reset();
      } else {
        toast.error("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="newsletter-section" className="relative py-20 overflow-hidden">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="absolute inset-0 bg-emerald-50">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
      </div>
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 transition-all duration-700">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 mb-6 shadow-sm">
              <Leaf className="h-4 w-4 text-emerald-600 mr-2" />
              <span className="text-sm font-medium">Mindful Tech Living</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">
              Reclaim Your Focus With Our Newsletter
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Join thousands who receive our research-backed strategies for reducing screen time, 
              improving concentration, and building healthier digital habits.
            </p>
          </div>
          <div className="max-w-lg mx-auto transition-all duration-700 delay-200">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative flex flex-col sm:flex-row gap-4"
            >
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      placeholder="Your best email address"
                      className="w-full pl-12 pr-4 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 pl-4">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors duration-300 disabled:opacity-70"
              >
                {isLoading ? "Joining..." : "Join Free"}
                <CheckCircle className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-700 delay-400">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-700 bg-white/50 p-3 rounded-lg border border-emerald-100"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200">
                  {index === 0 && <Smartphone className="h-4 w-4 text-emerald-600" />}
                  {index === 1 && <BrainCircuit className="h-4 w-4 text-emerald-600" />}
                  {index === 2 && <Leaf className="h-4 w-4 text-emerald-600" />}
                  {index === 3 && <Clock className="h-4 w-4 text-emerald-600" />}
                  {index === 4 && <CalendarCheck className="h-4 w-4 text-emerald-600" />}
                  {index === 5 && <CheckCircle className="h-4 w-4 text-emerald-600" />}
                </div>
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500 transition-all duration-700 delay-500">
            We'll never spam you. Unsubscribe with one click anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
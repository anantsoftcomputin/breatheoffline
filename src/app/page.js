export const metadata = {
  title: "BreatheOffline - Balance Your Digital Life, Embrace Wellness",
  description:
    "BreatheOffline offers insights on achieving harmony in a tech-driven world. Find resources for mindfulness, self-care, and a healthier connection to technology.",
};

import Hero from "@/components/Hero/Hero";
import TrendingBlogs from "@/components/TrendingBlogs/TrendingBlogs";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <div className="blob-container">
      <Hero />
      <TrendingBlogs />
      <LatestBlogs />
      <NewsLetter />
    </div>
  );
}

import Hero from "@/components/Hero/Hero";
import TrendingBlogs from "@/components/TrendingBlogs/TrendingBlogs";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BreatheOffline",
    url: "https://breatheoffline.com",
    logo: "https://breatheoffline.com/breatheoffline.png",
    sameAs: [
      "https://www.facebook.com/people/BreatheOffline-Travel/61571280080816/",
      "https://www.instagram.com/breatheoffline/",
      "https://x.com/breatheoffline",
    ],
    description:
      "BreatheOffline offers insights on achieving harmony in a tech-driven world. Find resources for mindfulness, self-care, and a healthier connection to technology.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <div className="blob-container">
        <Hero />
        <TrendingBlogs />
        <LatestBlogs />
        <NewsLetter />
      </div>
    </>
  );
}

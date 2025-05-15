export const metadata = {
  title: "BreatheOffline Blog - Insights on Mindfulness and Digital Wellness",
  description:
    "Explore the BreatheOffline Blog for expert tips, inspiring stories, and practical advice on mindfulness, digital detox, and creating a balanced lifestyle.",
  openGraph: {
    title: "BreatheOffline Blog - Insights on Mindfulness and Digital Wellness",
    description:
      "Explore the BreatheOffline Blog for expert tips, inspiring stories, and practical advice on mindfulness, digital detox, and creating a balanced lifestyle.",
    images: [
      {
        url: "https://breatheoffline.com/breatheoffline.png",
        alt: "BreatheOffline Logo",
        width: 800,
        height: 600,
      },
    ],
    siteName: "BreatheOffline",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BreatheOffline Blog - Insights on Mindfulness and Digital Wellness",
    description:
      "Explore the BreatheOffline Blog for expert tips, inspiring stories, and practical advice on mindfulness, digital detox, and creating a balanced lifestyle.",
    images: [
      {
        url: "https://breatheoffline.com/breatheoffline.png",
        alt: "BreatheOffline Logo",
        width: 800,
        height: 600,
      },
    ],
  },
};

import Blog from "@/components/Blogs/Blog";

export default function Blogs() {
  return <Blog />;
}

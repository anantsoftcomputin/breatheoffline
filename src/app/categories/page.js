export const metadata = {
  title: "Explore Digital Detox Categories | Breathe Offline",
  description:
    "Discover a variety of digital detox categories at Breathe Offline. From mindful living to screen-free activities, find the best ways to unplug and reclaim your time.",
  openGraph: {
    title: "Explore Digital Detox Categories | Breathe Offline",
    description:
      "Discover a variety of digital detox categories at Breathe Offline. From mindful living to screen-free activities, find the best ways to unplug and reclaim your time.",
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
    title: "Explore Digital Detox Categories | Breathe Offline",
    description:
      "Discover a variety of digital detox categories at Breathe Offline. From mindful living to screen-free activities, find the best ways to unplug and reclaim your time.",
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

import Categories from "@/components/Categories/Categories";

export default function Category() {
  return <Categories />;
}

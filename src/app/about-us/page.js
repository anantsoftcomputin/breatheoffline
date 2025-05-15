export const metadata = {
  title: "About Us - Discover the Vision Behind BreatheOffline",
  description:
    "Learn more about BreatheOffline, our mission to inspire mindful living, and our commitment to helping you unplug, reconnect, and thrive in a digital world.",
  openGraph: {
    title: "About Us - Discover the Vision Behind BreatheOffline",
    description:
      "Learn more about BreatheOffline, our mission to inspire mindful living, and our commitment to helping you unplug, reconnect, and thrive in a digital world.",
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
    title: "About Us - Discover the Vision Behind BreatheOffline",
    description:
      "Learn more about BreatheOffline, our mission to inspire mindful living, and our commitment to helping you unplug, reconnect, and thrive in a digital world.",
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

import AboutUs from "@/components/AboutUs/AboutUs";

export default function AboutPage() {
  return <AboutUs />;
}

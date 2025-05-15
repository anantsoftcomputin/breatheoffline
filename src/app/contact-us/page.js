export const metadata = {
  title: "Contact BreatheOffline - We're Here to Help",
  description:
    "Have questions or feedback? Connect with the BreatheOffline team. We’d love to hear from you and support your journey toward mindful living.",
  openGraph: {
    title: "Contact BreatheOffline - We're Here to Help",
    description:
      "Have questions or feedback? Connect with the BreatheOffline team. We’d love to hear from you and support your journey toward mindful living.",
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
    title: "Contact BreatheOffline - We're Here to Help",
    description:
      "Have questions or feedback? Connect with the BreatheOffline team. We’d love to hear from you and support your journey toward mindful living.",
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

import ContactUs from "@/components/ContactUs/ContactUs";

export default function contactUs() {
  return <ContactUs />;
}

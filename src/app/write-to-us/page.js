export const metadata = {
  title: "Write for Us - Guest Post Guidelines | BreatheOffline.com",
  description:
    "Share your insights on digital detox, mindfulness, and offline living. Submit guest post pitches to BreatheOffline.com and reach our engaged audience.",

  openGraph: {
    title: "Write for Us - Guest Post Guidelines | BreatheOffline.com",
    description:
      "Share your insights on digital detox and mindfulness. Submit guest post pitches to BreatheOffline.com and reach our engaged audience.",
    images: [
      {
        url: "https://breatheoffline.com/breatheoffline.png",
        alt: "BreatheOffline",
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
    title: "Write for Us - Guest Post Guidelines | BreatheOffline.com",
    description:
      "Share your insights on digital detox and mindfulness. Submit guest post pitches to BreatheOffline.com and reach our engaged audience.",
    images: [
      {
        url: "https://breatheoffline.com/breatheoffline.png",
        alt: "BreatheOffline",
        width: 800,
        height: 600,
      },
    ],
  },
};

import WriteToUs from "@/components/WriteToUs/WriteToUs";

export default function writeToUs() {
  return <WriteToUs />;
}

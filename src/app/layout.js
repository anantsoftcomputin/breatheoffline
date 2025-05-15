import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "BreatheOffline - Balance Your Digital Life, Embrace Wellness",
  description:
    "BreatheOffline offers insights on achieving harmony in a tech-driven world. Find resources for mindfulness, self-care, and a healthier connection to technology.",
  icons: {
    icon: [
      { url: "/breatheoffline.png" },
      { url: "/breatheoffline.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/breatheoffline.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "BreatheOffline - Balance Your Digital Life, Embrace Wellness",
    description:
      "BreatheOffline offers insights on achieving harmony in a tech-driven world. Find resources for mindfulness, self-care, and a healthier connection to technology.",
    images: [
      {
        url: "https://breatheoffline.com/breatheoffline.png",
        width: 800,
        height: 600,
        alt: "BreatheOffline Logo",
      },
    ],
    siteName: "BreatheOffline",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BreatheOffline: Your Guide to Mindful Digital Detox and Wellness",
    description:
      "Discover the benefits of digital detox with BreatheOffline. Explore expert tips, resources, and strategies to disconnect, recharge, and find balance in a tech-driven world.",
    images: [
      {
        url: "https://breatheoffline.com/breatheoffline.png",
        width: 800,
        height: 600,
        alt: "BreatheOffline Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BSHXQS3J84"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-BSHXQS3J84');
            `,
          }}
        ></Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2283636579212292"
          crossorigin="anonymous"
        ></Script>
        <meta
          name="google-site-verification"
          content="-vEQwCv3N-7CYJlks9qASX9zmgZ-7sbhBPfH4JKkxT4"
        ></meta>
        <meta
          name="google-adsense-account"
          content="ca-pub-2283636579212292"
        ></meta>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

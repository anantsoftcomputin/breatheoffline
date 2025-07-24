import Link from "next/link";

export const metadata = {
  title: "How BreatheOffline Uses Cookies on This Site | Cookie Policy",
  description:
    "Learn how BreatheOffline uses cookies to enhance your Browse experience, analyze site traffic, and personalize content on this website. Understand your choices regarding cookie usage.",
  openGraph: {
    title: "How BreatheOffline Uses Cookies on This Site | Cookie Policy",
    description:
      "Learn how BreatheOffline uses cookies to enhance your Browse experience, analyze site traffic, and personalize content on this website. Understand your choices regarding cookie usage.",
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
    title: "How BreatheOffline Uses Cookies on This Site | Cookie Policy",
    description:
      "Learn how BreatheOffline uses cookies to enhance your Browse experience, analyze site traffic, and personalize content on this website. Understand your choices regarding cookie usage.",
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

export default function CookiesPolicy() {
  return (
    <main className="py-12 min-h-screen px-4 sm:px-6 lg:px-12">
      <div className="relative py-16 sm:py-20">
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Cookie Policy
            </h1>
          </div>
          <div className="space-y-6">
            <section
              aria-labelledby="introduction-heading"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="introduction-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  1. Introduction
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  breatheoffline.com (hereinafter referred to as "the Site,"
                  "we," "us," or "our") uses cookies and other similar
                  technologies to enhance your Browse experience. This Cookie
                  Policy explains what cookies are, how we use them, and your
                  choices regarding cookies.
                </p>
              </div>
            </section>

            <section
              aria-labelledby="what-are-cookies-heading"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="what-are-cookies-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  2. What Are Cookies?
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Cookies are small text files that are placed on your computer
                  or mobile device when you visit a website. They are widely
                  used to make websites work more efficiently, as well as to
                  provide information to the website owners.
                </p>
              </div>
            </section>

            <section
              aria-labelledby="how-we-use-cookies-heading"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="how-we-use-cookies-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  3. How We Use Cookies
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Essential Cookies :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      These cookies are necessary for the operation of our Site.
                      They enable you to navigate the Site and use its features.
                    </li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 mt-4">
                    Analytics Cookies :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      We use analytics cookies, such as those provided by Google
                      Analytics, to collect information about how visitors use
                      our Site. This helps us analyze website traffic and
                      improve our Site's performance. These cookies collect
                      information in an anonymous form, including the number of
                      visitors, where visitors have come to the Site from, and
                      the pages they visited.
                    </li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 mt-4">
                    Functionality Cookies :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      These cookies allow our Site to remember choices you make
                      (such as your language preference) and provide enhanced
                      features.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    Third-Party Cookies :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      We may also use third-party cookies, such as those from
                      social media platforms or advertising networks, to provide
                      certain features or to display targeted advertisements.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="types-of-cookies-heading"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="types-of-cookies-heading"
                  className="text-xl font-semibold text-gray-900 "
                >
                  4. Types of Cookies We Use
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 ">
                    Session Cookies :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      These are temporary cookies that are stored in your
                      browser's memory and are deleted when you close your
                      browser.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900  mt-4">
                    Persistent Cookies :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      These cookies remain on your device for a longer period or
                      until you delete them.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="your-cookie-choices-heading"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="your-cookie-choices-heading"
                  className="text-xl font-semibold text-gray-900 "
                >
                  5. Your Cookie Choices
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 ">
                    Browser Settings :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      You can control and manage cookies through your browser
                      settings. Most browsers allow you to block or delete
                      cookies. However, please note that blocking cookies may
                      affect your ability to use certain features of our Site.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    Opt-Out Tools :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      Some third-party services provide opt-out tools that allow
                      you to disable their cookies. For example, you can opt-out
                      of Google Analytics by installing the Google Analytics
                      Opt-out Browser Add-on.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    Cookie Consent Banner :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      Upon your first visit to our site, you will be presented
                      with a cookie consent banner, that allows you to accept or
                      deny the use of non-essential cookies.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="third-party-cookies-policy-heading"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="third-party-cookies-policy-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  6. Third-Party Cookies
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 ">
                  We may use third-party services that set cookies on our Site.
                  We do not have control over these cookies, and we encourage
                  you to review the cookie policies of these third parties.
                </p>
              </div>
            </section>

            <section
              aria-labelledby="changes-to-policy-heading"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="changes-to-policy-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  7. Changes to This Cookie Policy
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  We may update this Cookie Policy from time to time. We will
                  notify you of any changes by posting the new Cookie Policy on
                  this page. You are advised to review this Cookie Policy
                  periodically for any changes.
                </p>
              </div>
            </section>

            <section
              aria-labelledby="contact-us-heading"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="contact-us-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  8. Contact Us
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  If you have any questions or concerns about these Terms and
                  Conditions, please contact us at:
                </p>
                <address className="mt-2 text-gray-600 not-italic">
                  Email:{" "}
                  <a
                    href="mailto:breatheoffline@gmail.com"
                    className="text-emerald-600 hover:text-emerald-700 hover:underline"
                  >
                    breatheoffline@gmail.com
                  </a>
                  <br />
                  Contact: Available on{" "}
                  <Link
                    href="/contact-us"
                    className="text-emerald-600 hover:text-emerald-700 hover:underline"
                  >
                    breatheoffline.com
                  </Link>
                  <br />
                  Address: Alkapuri, Vadodara, Gujarat, India 390007.
                </address>
              </div>
            </section>

            <section
              aria-labelledby="governing-law-heading"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="governing-law-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  9. Governing Law
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  This Cookie Policy shall be governed by and construed in
                  accordance with the laws of Vadodara, Gujarat, India.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

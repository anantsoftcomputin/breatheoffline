"use client";
import { PenSquare, Check, X } from "lucide-react";

const WriteForUs = () => {
  return (
    <main className="py-12 min-h-screen px-4 sm:px-6 lg:px-12">
      <div className="relative py-16 sm:py-20">
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Write for Us – Guest Post Guidelines
            </h1>
            <p className="text-lg text-gray-700 mx-auto">
              Share Your Voice on BreatheOffline.com
            </p>
          </div>
          <div className="space-y-6">
            <section
              aria-label="Introduction to writing for us"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <p className="text-gray-600">
                  At BreatheOffline.com, we're passionate about helping people
                  disconnect from digital overload and reconnect with mindful,
                  intentional living. If you share our mission and have insights
                  to offer, we'd love to feature your guest post!
                </p>
              </div>
            </section>

            <section
              aria-labelledby="why-write-for-us-heading"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="why-write-for-us-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  Why Write for Us?
                </h2>
              </div>
              <div className="p-6">
                <ul className="list-disc list-inside space-y-3 text-gray-600 pl-1">
                  <li>
                    Reach an engaged audience interested in digital detox,
                    mindfulness, mental wellness, and offline living.
                  </li>
                  <li>
                    Grow your personal or professional brand with a byline and
                    backlink (if applicable).
                  </li>
                  <li>
                    Contribute to meaningful conversations about balance,
                    self-care, and tech-free lifestyles.
                  </li>
                </ul>
              </div>
            </section>

            <section
              aria-labelledby="topics-we-love-heading"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="topics-we-love-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  Topics We Love
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <p className="font-semibold text-gray-900">
                    We welcome original, well-researched articles on:
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Digital minimalism & screen-time reduction</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Mindfulness practices (meditation, journaling, etc.)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        Offline hobbies (reading, nature, analog activities)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Mental health and tech's impact on wellbeing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Productivity without burnout</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-red-50 rounded-lg">
                    <p className="font-medium text-gray-800 flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        We do NOT accept: Promotional content, AI-generated
                        posts, or topics unrelated to our niche.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="submission-guidelines-heading"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="submission-guidelines-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  Submission Guidelines
                </h2>
              </div>
              <div className="p-6 space-y-6 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <PenSquare className="h-5 w-5 text-emerald-500 mr-2" />
                    Pitch First:
                  </h3>
                  <p className="mb-3">
                    Send a brief (1–2 paragraph) pitch to{" "}
                    <a
                      href="mailto:breatheoffline@gmail.com"
                      className="text-emerald-600 hover:underline"
                    >
                      breatheoffline@gmail.com
                    </a>{" "}
                    with "Guest Post Pitch" in the subject line. Include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 pl-1">
                    <li>Proposed headline + key takeaways</li>
                    <li>A writing sample or portfolio link</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    If Approved:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 pl-1">
                    <li>
                      <strong>Length:</strong> 800–1,500 words.
                    </li>
                    <li>
                      <strong>Original:</strong> Unpublished elsewhere (we
                      check!).
                    </li>
                    <li>
                      <strong>Tone:</strong> Conversational yet insightful.
                      Avoid jargon.
                    </li>
                    <li>
                      <strong>Formatting:</strong> Use subheadings, bullet
                      points, and short paragraphs.
                    </li>
                    <li>
                      <strong>Editing:</strong> We reserve the right to edit for
                      clarity or style.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="ready-to-submit-heading"
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-gray-200">
                <h2
                  id="ready-to-submit-heading"
                  className="text-xl font-semibold text-gray-900"
                >
                  Ready to Submit?
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Email us at{" "}
                  <a
                    href="mailto:breatheoffline@gmail.com"
                    className="text-emerald-600 hover:underline font-medium"
                  >
                    breatheoffline@gmail.com
                  </a>{" "}
                  with your pitch or finalized draft (DOC/Google Doc). We'll
                  respond within 5–7 business days.
                </p>
                <div className="mt-4 p-3 bg-white rounded-lg border border-emerald-600">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> We prioritize quality over quantity.
                    No link placements in content (author bios allowed).
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WriteForUs;

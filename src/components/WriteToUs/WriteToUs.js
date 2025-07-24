"use client";
import {
  Sparkles,
  BookOpen,
  ThumbsUp,
  Send,
  PenSquare,
  Check,
  X,
} from "lucide-react";

const WriteToUs = () => {
  return (
    <>
      <main className="py-12 min-h-screen px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="relative py-16 sm:py-20">
          <div
            className="absolute inset-0 bg-grid-white/[0.05]"
            aria-hidden="true"
          />
          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Write for Us – Guest Post Guidelines
              </h1>
              <p className="text-lg text-gray-700 mx-auto">
                Share Your Voice on BreatheOffline.com
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 mb-12">
              <p className="text-lg text-gray-700 mb-8">
                At BreatheOffline.com, we're passionate about helping people
                disconnect from digital overload and reconnect with mindful,
                intentional living. If you share our mission and have insights
                to offer, we'd love to feature your guest post!
              </p>

              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Sparkles className="h-6 w-6 text-emerald-600 mr-3" />
                    Why Write for Us?
                  </h2>
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
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <BookOpen className="h-6 w-6 text-emerald-600 mr-3" />
                    Topics We Love
                  </h2>
                  <p className="text-gray-600 mb-4">
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
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <ThumbsUp className="h-6 w-6 text-emerald-600 mr-3" />
                    Submission Guidelines
                  </h2>
                  <div className="space-y-6 text-gray-600">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <PenSquare className="h-5 w-5 text-emerald-500 mr-2" />
                        Pitch First:
                      </h3>
                      <p className="mb-3">
                        Send a brief (1–2 paragraph) pitch to{" "}
                        <a
                          href="mailto:support@breatheoffline.com"
                          className="text-emerald-600 hover:underline"
                        >
                          support@breatheoffline.com
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
                          <strong>Editing:</strong> We reserve the right to edit
                          for clarity or style.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="bg-emerald-50 rounded-xl p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <Send className="h-5 w-5 text-emerald-600 mr-3" />
                    Ready to Submit?
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Email us at{" "}
                    <a
                      href="mailto:support@breatheoffline.com"
                      className="text-emerald-600 hover:underline font-medium"
                    >
                      support@breatheoffline.com
                    </a>{" "}
                    with your pitch or finalized draft (DOC/Google Doc). We'll
                    respond within 5–7 business days.
                  </p>
                  <div className="mt-4 p-3 bg-white rounded-lg border border-emerald-100">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> We prioritize quality over
                      quantity. No link placements in content (author bios
                      allowed).
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WriteToUs;

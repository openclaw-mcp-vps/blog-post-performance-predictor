export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Content Analysis
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Predict Blog Post Success{" "}
          <span className="text-[#58a6ff]">Before You Publish</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          Analyze title strength, content structure, and keyword density to forecast social shares, organic traffic, and reader engagement — in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Predicting — $11/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[
            ["Readability Score", "Flesch-Kincaid & SMOG analysis"],
            ["SEO Strength", "Keyword density & structure audit"],
            ["Engagement Forecast", "Predicted shares & time-on-page"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$11</div>
          <div className="text-[#8b949e] text-sm mb-8">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited post analyses",
              "Real-time scoring dashboard",
              "Actionable SEO recommendations",
              "Historical performance tracking",
              "Title A/B comparison tool",
              "Email digest of insights"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            [
              "How does the prediction engine work?",
              "We use NLP models trained on millions of blog posts to score your content across readability, SEO signals, and structural patterns correlated with high-performing articles."
            ],
            [
              "What types of content can I analyze?",
              "Any long-form written content — blog posts, newsletter issues, landing page copy, or articles. Paste your text or connect your CMS via our API."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Cancel with one click from your dashboard. You keep access until the end of your billing period with no questions asked."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Blog Post Performance Predictor. All rights reserved.
      </footer>
    </main>
  );
}

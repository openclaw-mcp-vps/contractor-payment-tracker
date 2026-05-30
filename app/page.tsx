export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR Tools for Small Business
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Contractor Payments &amp;<br className="hidden sm:block" /> Tax Obligations Automatically
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor every contractor payment, generate 1099s at tax time, stay compliant, and send automated payment reminders — all in one place.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Free Trial — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required to start. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">💸</div>
            <h3 className="font-semibold text-white mb-1">Payment Tracking</h3>
            <p className="text-sm text-[#8b949e]">Log every contractor payment with dates, amounts, and project details in seconds.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📄</div>
            <h3 className="font-semibold text-white mb-1">1099 Generation</h3>
            <p className="text-sm text-[#8b949e]">Auto-generate IRS-ready 1099 forms for every contractor when tax season arrives.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔔</div>
            <h3 className="font-semibold text-white mb-1">Automated Reminders</h3>
            <p className="text-sm text-[#8b949e]">Send payment reminders automatically so invoices never fall through the cracks.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple, Transparent Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <p className="text-[#8b949e] mb-6">per month, billed monthly</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited contractors',
              'Automated 1099 generation',
              'Payment reminders via email',
              'Tax obligation dashboard',
              'CSV & PDF exports',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Who is this tool for?</h3>
            <p className="text-sm text-[#8b949e]">Small business owners and HR managers who pay independent contractors and need to stay on top of 1099 filings and tax obligations without hiring an accountant.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does it handle IRS 1099 requirements?</h3>
            <p className="text-sm text-[#8b949e]">Yes. The app tracks cumulative payments per contractor and flags anyone who crosses the $600 IRS threshold, then generates a ready-to-file 1099-NEC form automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. There are no long-term contracts. Cancel from your account dashboard at any time and you won't be charged again.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Contractor Payment Tracker. All rights reserved.
      </footer>
    </main>
  )
}

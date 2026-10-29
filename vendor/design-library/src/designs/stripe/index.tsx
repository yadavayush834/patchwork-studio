import React, { useState } from 'react';
import {
  CreditCard,
  ShieldCheck,
  Zap,
  Globe,
  ArrowRight,
  ExternalLink,
  Check,
  Copy,
  Terminal,
  Lock,
  ChevronRight,
  Building,
  Smartphone,
  RefreshCw,
  Coins,
  Receipt,
  Users,
} from 'lucide-react';

type SdkLanguage = 'node' | 'python' | 'ruby' | 'go' | 'curl';

const codeSnippets: Record<SdkLanguage, string> = {
  node: `import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const paymentIntent = await stripe.paymentIntents.create({
  amount: 4900, // $49.00 USD
  currency: 'usd',
  automatic_payment_methods: { enabled: true },
  metadata: { order_id: 'order_9832_enterprise' },
});

console.log('Client secret:', paymentIntent.client_secret);`,

  python: `import stripe
stripe.api_key = os.environ.get("STRIPE_SECRET_KEY")

payment_intent = stripe.PaymentIntent.create(
    amount=4900,  # $49.00 USD
    currency="usd",
    automatic_payment_methods={"enabled": True},
    metadata={"order_id": "order_9832_enterprise"}
)

print("Client secret:", payment_intent.client_secret)`,

  ruby: `require "stripe"
Stripe.api_key = ENV["STRIPE_SECRET_KEY"]

payment_intent = Stripe::PaymentIntent.create({
  amount: 4900,
  currency: "usd",
  automatic_payment_methods: { enabled: true },
  metadata: { order_id: "order_9832_enterprise" }
})

puts "Client secret: #{payment_intent.client_secret}"`,

  go: `import (
  "github.com/stripe/stripe-go/v78"
  "github.com/stripe/stripe-go/v78/paymentintent"
)

stripe.Key = os.Getenv("STRIPE_SECRET_KEY")
params := &stripe.PaymentIntentParams{
  Amount:   stripe.Int64(4900),
  Currency: stripe.String(string(stripe.CurrencyUSD)),
  AutomaticPaymentMethods: &stripe.PaymentIntentAutomaticPaymentMethodsParams{
    Enabled: stripe.Bool(true),
  },
}
pi, _ := paymentintent.New(params)`,

  curl: `curl https://api.stripe.com/v1/payment_intents \\
  -u sk_test_your_key: \\
  -d amount=4900 \\
  -d currency=usd \\
  -d "automatic_payment_methods[enabled]"=true \\
  -d "metadata[order_id]"=order_9832_enterprise`,
};

export function StripeRecreation({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activeLang, setActiveLang] = useState<SdkLanguage>('node');
  const [copied, setCopied] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState<number>(49);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'succeeded'>('idle');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [cardExp, setCardExp] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('314');
  const [monthlyVolume, setMonthlyVolume] = useState<number>(150000);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStatus('processing');
    setTimeout(() => {
      setPaymentStatus('succeeded');
    }, 1200);
  };

  const estimatedSavings = Math.round(monthlyVolume * 0.0042);

  return (
    <div className="min-h-screen bg-white text-[#0a2540] font-sans selection:bg-[#635bff] selection:text-white relative overflow-hidden">
      {/* STRIPE SIGNATURE TILTED GRADIENT MESH HEADER */}
      <div className="relative overflow-hidden bg-[#0a2540] text-white pb-36 pt-4">
        {/* Angled background mesh */}
        <div
          className="absolute inset-0 pointer-events-none opacity-90 mix-blend-screen"
          style={{
            background:
              'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.4), transparent), linear-gradient(135deg, #635bff 0%, #a259ff 25%, #00d4b2 60%, #ffd159 100%)',
            transform: 'skewY(-6deg) scale(1.15)',
            transformOrigin: 'top left',
          }}
        />

        {/* Floating gradient wave overlay */}
        <div
          className="absolute -bottom-24 left-0 right-0 h-48 bg-white"
          style={{ transform: 'skewY(-6deg)', transformOrigin: 'bottom right' }}
        />

        {/* Stripe Header Navigation */}
        <header className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Stripe Wordmark */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="text-2xl font-black tracking-tight text-white select-none">stripe</span>
            </div>

            <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-white/90">
              <span className="hover:text-white cursor-pointer transition-colors">Products</span>
              <span className="hover:text-white cursor-pointer transition-colors">Solutions</span>
              <span className="hover:text-white cursor-pointer transition-colors">Developers</span>
              <span className="hover:text-white cursor-pointer transition-colors">Resources</span>
              <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {onBackToGallery && (
              <button
                onClick={onBackToGallery}
                className="text-xs px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur-md transition-all cursor-pointer border border-white/20"
              >
                Back to Interface studies
              </button>
            )}
            <a
              href="https://stripe.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs text-white/80 hover:text-white transition-colors"
            >
              <span>stripe.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button className="text-sm font-medium text-white hover:text-white/80 px-2 py-1">
              Sign in
            </button>
            <button className="text-xs px-3.5 py-1.5 rounded-full bg-white text-[#0a2540] hover:bg-slate-100 font-semibold transition-all shadow-md">
              Contact sales
            </button>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Hero Headline & Description */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-md text-xs font-medium text-white">
                <span className="w-2 h-2 rounded-full bg-[#00d4b2]" />
                <span>Stripe Agentic Commerce & Instant Settlements</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Financial infrastructure to grow your revenue.
              </h1>

              <p className="text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed font-normal">
                Join millions of companies of all sizes—from startups to Fortune 500 enterprises—that use Stripe’s software and APIs to accept payments, send payouts, and manage business finances online.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button className="px-5 py-3 rounded-full bg-[#0a2540] text-white hover:bg-[#123961] font-semibold text-sm transition-all flex items-center gap-2 shadow-lg cursor-pointer">
                  <span>Start now</span>
                  <ArrowRight className="w-4 h-4 text-[#00d4b2]" />
                </button>
                <button className="px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-sm backdrop-blur-md transition-all border border-white/20 cursor-pointer">
                  <span>Contact sales</span>
                </button>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-white/70">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00d4b2]" />
                  <span>PCI-DSS Level 1 Certified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#ffd159]" />
                  <span>99.999% Historical Uptime</span>
                </div>
              </div>
            </div>

            {/* Right Column: Signature Interactive Payment Checkout Simulation */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-white text-[#0a2540] p-6 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.15)] border border-slate-100">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#635bff] text-white flex items-center justify-center font-bold text-xs">
                      S
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0a2540] block">Rocketship SaaS Pro</span>
                      <span className="text-[11px] text-slate-500">Monthly Workspace Subscription</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-[#0a2540]">${paymentAmount}.00</span>
                    <span className="text-[10px] text-slate-400 block font-mono-tech">USD</span>
                  </div>
                </div>

                {/* Amount Toggle for demo */}
                <div className="mb-4">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">Select Tier</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[29, 49, 199].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => {
                          setPaymentAmount(amt);
                          setPaymentStatus('idle');
                        }}
                        className={`py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          paymentAmount === amt
                            ? 'bg-[#635bff] text-white border-[#635bff]'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        ${amt} / mo
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Payment Sheet Form */}
                <form onSubmit={handleSimulatePayment} className="space-y-3.5">
                  <button
                    type="button"
                    onClick={() => {
                      setPaymentStatus('processing');
                      setTimeout(() => setPaymentStatus('succeeded'), 900);
                    }}
                    className="w-full py-2.5 rounded-lg bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-slate-900 transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Pay with</span>
                    <span className="font-bold tracking-wider">Pay</span>
                  </button>

                  <div className="flex items-center gap-2 my-2">
                    <div className="h-px bg-slate-200 flex-1" />
                    <span className="text-[11px] text-slate-400 font-medium">Or pay with card</span>
                    <div className="h-px bg-slate-200 flex-1" />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Card number</label>
                    <div className="relative">
                      <CreditCard className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-mono-tech text-slate-700 focus:outline-none focus:border-[#635bff] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Expiration</label>
                      <input
                        type="text"
                        value={cardExp}
                        onChange={(e) => setCardExp(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-mono-tech text-slate-700 focus:outline-none focus:border-[#635bff] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">CVC</label>
                      <input
                        type="text"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-xs font-mono-tech text-slate-700 focus:outline-none focus:border-[#635bff] focus:bg-white"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={paymentStatus === 'processing'}
                    className="w-full py-2.5 rounded-lg bg-[#635bff] hover:bg-[#5349e0] disabled:bg-slate-300 text-white text-xs font-bold transition-all shadow-md shadow-[#635bff]/25 flex items-center justify-center gap-2 cursor-pointer mt-4"
                  >
                    {paymentStatus === 'processing' ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Authorizing with issuing bank...</span>
                      </>
                    ) : paymentStatus === 'succeeded' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Payment Confirmed (${paymentAmount}.00)</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-3.5 h-3.5" />
                        <span>Pay ${paymentAmount}.00</span>
                      </>
                    )}
                  </button>

                  {paymentStatus === 'succeeded' && (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 flex items-center justify-between animate-in fade-in">
                      <span>✓ Intent <code className="font-mono-tech">pi_3P7eK92</code> captured</span>
                      <button
                        onClick={() => setPaymentStatus('idle')}
                        className="text-emerald-700 underline text-[10px]"
                      >
                        Reset demo
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DEVELOPERS SECTION: Multi-language Code Toggle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-[#635bff] tracking-wider uppercase">Developers First</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2540] tracking-tight">
              The world’s most powerful, easy-to-use APIs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We obsess over developer experience. Our client and server libraries are designed from the ground up for safety, speed, and maintainability across Node, Python, Ruby, Go, and more.
            </p>

            <div className="space-y-3 pt-2 text-sm text-[#0a2540]">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#635bff]" />
                <span className="font-medium">Automatic retries with exponential backoff</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#635bff]" />
                <span className="font-medium">Strict idempotency keys prevent duplicate charges</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#635bff]" />
                <span className="font-medium">Real-time webhook simulator & event streaming</span>
              </div>
            </div>
          </div>

          {/* Interactive Code Editor Block */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0a2540] text-slate-200 shadow-2xl overflow-hidden border border-slate-800">
              {/* Language Selector Bar */}
              <div className="bg-[#07192c] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1 overflow-x-auto">
                  {(['node', 'python', 'ruby', 'go', 'curl'] as SdkLanguage[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setActiveLang(lang)}
                      className={`px-3 py-1 rounded-md text-xs font-mono-tech font-semibold transition-all cursor-pointer ${
                        activeLang === lang
                          ? 'bg-[#635bff] text-white shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {lang === 'node' ? 'Node.js' : lang.toUpperCase()}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800/70 border border-slate-700 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code display */}
              <div className="p-5 font-code text-xs leading-relaxed overflow-x-auto bg-[#0a2540]">
                <pre className="text-slate-300">
                  <code>{codeSnippets[activeLang]}</code>
                </pre>
              </div>

              {/* Terminal footer */}
              <div className="bg-[#081b30] px-4 py-2 border-t border-slate-800 text-[11px] text-slate-400 font-mono-tech flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-[#00d4b2]" />
                  <span>POST /v1/payment_intents (200 OK)</span>
                </span>
                <span className="text-slate-500">Latency: 42ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUME & SAVINGS CALCULATOR SLIDER */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-[#635bff] tracking-wider uppercase block mb-2">Global Scale</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a2540] mb-4">
            Reliable, extensible infrastructure for every stack
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mb-10">
            See how much your business can optimize in transaction authorization rates and interchange savings with Stripe&apos;s machine learning network.
          </p>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200 max-w-2xl mx-auto text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-600 uppercase">Monthly Processing Volume</span>
              <span className="text-xl font-extrabold text-[#635bff] font-mono-tech">
                ${monthlyVolume.toLocaleString()} USD
              </span>
            </div>

            <input
              type="range"
              min={10000}
              max={1000000}
              step={10000}
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#635bff] mb-6"
            />

            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div>
                <span className="text-xs text-slate-500 block">Est. Revenue Uplift</span>
                <span className="text-2xl font-black text-emerald-600 font-mono-tech">
                  +${estimatedSavings.toLocaleString()}
                </span>
                <span className="text-[11px] text-slate-400 block">via smart retries & adaptive 3DS</span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Authorization Rate</span>
                <span className="text-2xl font-black text-[#0a2540] font-mono-tech">98.4%</span>
                <span className="text-[11px] text-slate-400 block">+2.3% above industry average</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-14 text-xs text-slate-500 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black text-[#0a2540]">stripe</span>
            <span className="text-slate-400">·</span>
            <span>Financial infrastructure for the internet</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://stripe.com" target="_blank" rel="noreferrer" className="text-[#635bff] hover:underline">Official stripe.com</a>
            <span>·</span>
            <span>UI Recreation Lab</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default StripeRecreation;

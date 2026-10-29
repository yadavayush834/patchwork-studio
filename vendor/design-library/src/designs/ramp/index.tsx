import React, { useState } from 'react';
import {
  CreditCard,
  ShieldCheck,
  TrendingDown,
  DollarSign,
  Receipt,
  Check,
  Lock,
  Unlock,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Clock,
  Sparkles,
  Zap,
  Building,
  Sliders,
  Scan,
} from 'lucide-react';

export function RampRecreation({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [spendLimit, setSpendLimit] = useState<number>(25000);
  const [isCardFrozen, setIsCardFrozen] = useState(false);
  const [cardHolder, setCardHolder] = useState('ALEXANDRA CHEN');
  const [employeeCount, setEmployeeCount] = useState<number>(85);
  const [isScanningReceipt, setIsScanningReceipt] = useState(false);
  const [receiptMatched, setReceiptMatched] = useState(true);

  // Spend policy category toggles
  const [policyCategories, setPolicyCategories] = useState({
    saas: true,
    travel: true,
    dining: true,
    hardware: false,
  });

  const handleTogglePolicy = (cat: keyof typeof policyCategories) => {
    setPolicyCategories((prev) => ({ ...prev, [cat]: !prev[cat] }));
  };

  const handleSimulateScan = () => {
    setIsScanningReceipt(true);
    setTimeout(() => {
      setIsScanningReceipt(false);
      setReceiptMatched(true);
    }, 900);
  };

  // Savings calculation
  const estimatedAnnualSavings = Math.round(employeeCount * 1850);
  const hoursSavedPerMonth = Math.round(employeeCount * 3.8);

  return (
    <div className="min-h-screen bg-[#f7f8f6] text-[#111612] font-sans selection:bg-[#16a34a] selection:text-white relative overflow-hidden">
      {/* Top Application Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#f7f8f6]/90 border-b border-[#e2e5df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Ramp Wordmark */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="font-black text-2xl tracking-tighter text-[#111612]">ramp</span>
            </div>

            <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-[#444a42]">
              <span className="hover:text-black cursor-pointer transition-colors">Corporate Cards</span>
              <span className="hover:text-black cursor-pointer transition-colors">Expense Management</span>
              <span className="hover:text-black cursor-pointer transition-colors">Bill Pay</span>
              <span className="hover:text-black cursor-pointer transition-colors">Procurement</span>
              <span className="hover:text-black cursor-pointer transition-colors">Pricing</span>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {onBackToGallery && (
              <button
                onClick={onBackToGallery}
                className="text-xs px-2.5 py-1.5 rounded-full bg-slate-200/70 hover:bg-slate-300/70 text-slate-800 font-medium transition-colors cursor-pointer border border-slate-300"
              >
                Back to Interface studies
              </button>
            )}
            <a
              href="https://ramp.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs text-slate-600 hover:text-black transition-colors"
            >
              <span>ramp.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button className="text-sm font-semibold text-slate-700 hover:text-black px-2 py-1">
              Sign In
            </button>
            <button className="text-xs px-4 py-2 rounded-full bg-[#111612] text-white hover:bg-black font-bold transition-all shadow-md">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative z-10">
        <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8eae4] border border-[#d8dcd3] text-xs font-semibold text-[#2f352d] mb-6 hover:border-[#16a34a] cursor-pointer transition-all">
            <span className="w-2 h-2 rounded-full bg-[#16a34a]" />
            <span>Join 70,000+ companies saving an average of 5% on spend</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#111612] max-w-4xl mx-auto leading-[1.05] mb-6">
            Time is money. Save both.
          </h1>

          <p className="text-base sm:text-xl text-[#4a5247] max-w-2xl mx-auto mb-8 leading-relaxed">
            One unified platform for corporate cards, expense automation, travel booking, and accounts payable. Built with AI agents that work around the clock.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="px-6 py-3 rounded-full bg-[#16a34a] hover:bg-[#149041] text-white font-bold text-sm transition-all shadow-lg shadow-[#16a34a]/25 flex items-center gap-2 cursor-pointer">
              <span>Start saving with Ramp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 border border-[#d8dcd3] text-[#111612] font-semibold text-sm transition-all shadow-sm">
              See 2-min product tour
            </button>
          </div>
        </section>

        {/* SIGNATURE INTERACTIVE DEMO: Ramp Corporate Card Controls & Policy Engine */}
        <section className="max-w-6xl mx-auto px-4 mb-24">
          <div className="rounded-3xl border border-[#d8dcd3] bg-white shadow-xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Visual Corporate Card Render */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div
                  className={`w-full max-w-sm aspect-[1.586/1] rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden transition-all duration-300 ${
                    isCardFrozen
                      ? 'bg-gradient-to-tr from-slate-700 to-slate-900 grayscale opacity-80'
                      : 'bg-gradient-to-tr from-[#111612] via-[#1a211b] to-[#253027]'
                  }`}
                >
                  {/* Neon Edge Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#00ff75]" />

                  <div className="flex items-center justify-between mb-8">
                    <span className="font-black text-xl tracking-tighter">ramp</span>
                    <span className="text-[10px] font-mono-tech uppercase tracking-widest text-slate-300 px-2 py-0.5 rounded bg-white/10">
                      Corporate Visa
                    </span>
                  </div>

                  <div className="mb-6">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-0.5 font-mono-tech">Monthly Limit</span>
                    <span className="text-2xl font-bold font-mono-tech text-white">
                      ${spendLimit.toLocaleString()} USD
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-mono-tech tracking-wider text-slate-300 font-semibold">{cardHolder}</span>
                    <span className="text-xs font-mono-tech text-slate-400">•••• 8924</span>
                  </div>
                </div>

                {/* Freeze / Unfreeze Switch */}
                <button
                  onClick={() => setIsCardFrozen(!isCardFrozen)}
                  className={`mt-4 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    isCardFrozen
                      ? 'bg-rose-100 text-rose-800 border border-rose-300'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300'
                  }`}
                >
                  {isCardFrozen ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5 text-emerald-600" />}
                  <span>{isCardFrozen ? 'Card Frozen (Click to Unfreeze)' : 'Card Active (Click to Freeze)'}</span>
                </button>
              </div>

              {/* Right Column: Real-Time Spend Controls Simulator */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase text-[#444a42] tracking-wider">Dynamic Spend Limit</label>
                    <span className="text-sm font-bold font-mono-tech text-[#16a34a]">${spendLimit.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={5000}
                    max={100000}
                    step={5000}
                    value={spendLimit}
                    onChange={(e) => setSpendLimit(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#16a34a]"
                  />
                </div>

                {/* Policy Category Toggles */}
                <div>
                  <span className="text-xs font-bold uppercase text-[#444a42] tracking-wider block mb-3">Pre-Approved Expense Categories</span>
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      onClick={() => handleTogglePolicy('saas')}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        policyCategories.saas ? 'bg-emerald-50/50 border-emerald-300' : 'bg-slate-50 border-slate-200 opacity-60'
                      }`}
                    >
                      <span className="text-xs font-semibold text-slate-800">Software & SaaS</span>
                      <Check className={`w-4 h-4 ${policyCategories.saas ? 'text-emerald-600' : 'text-slate-300'}`} />
                    </div>

                    <div
                      onClick={() => handleTogglePolicy('travel')}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        policyCategories.travel ? 'bg-emerald-50/50 border-emerald-300' : 'bg-slate-50 border-slate-200 opacity-60'
                      }`}
                    >
                      <span className="text-xs font-semibold text-slate-800">Flights & Hotels</span>
                      <Check className={`w-4 h-4 ${policyCategories.travel ? 'text-emerald-600' : 'text-slate-300'}`} />
                    </div>

                    <div
                      onClick={() => handleTogglePolicy('dining')}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        policyCategories.dining ? 'bg-emerald-50/50 border-emerald-300' : 'bg-slate-50 border-slate-200 opacity-60'
                      }`}
                    >
                      <span className="text-xs font-semibold text-slate-800">Team Dinners</span>
                      <Check className={`w-4 h-4 ${policyCategories.dining ? 'text-emerald-600' : 'text-slate-300'}`} />
                    </div>

                    <div
                      onClick={() => handleTogglePolicy('hardware')}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        policyCategories.hardware ? 'bg-emerald-50/50 border-emerald-300' : 'bg-slate-50 border-slate-200 opacity-60'
                      }`}
                    >
                      <span className="text-xs font-semibold text-slate-800">Hardware & Gadgets</span>
                      <Check className={`w-4 h-4 ${policyCategories.hardware ? 'text-emerald-600' : 'text-slate-300'}`} />
                    </div>
                  </div>
                </div>

                {/* Instant OCR Receipt Matching Demo */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <Receipt className="w-3.5 h-3.5 text-[#16a34a]" />
                      <span>Automatic Receipt Reconciliation (OCR)</span>
                    </span>
                    <button
                      onClick={handleSimulateScan}
                      disabled={isScanningReceipt}
                      className="px-2.5 py-1 rounded bg-[#111612] text-white text-[11px] font-semibold hover:bg-black transition-colors cursor-pointer"
                    >
                      {isScanningReceipt ? 'Scanning...' : 'Test OCR Receipt'}
                    </button>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono-tech">
                    {isScanningReceipt ? (
                      <span className="text-amber-600">Extracting vendor, sales tax, and line items...</span>
                    ) : receiptMatched ? (
                      <span className="text-emerald-700">✓ Delta Airlines ($1,420.50) matched with policy #204 in 0.4s</span>
                    ) : (
                      <span>Ready to scan receipt image</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANNUAL SAVINGS CALCULATOR SLIDER */}
        <section className="max-w-4xl mx-auto px-4 py-16 border-t border-[#d8dcd3] text-center">
          <span className="text-xs font-bold text-[#16a34a] uppercase tracking-wider block mb-2">ROI Calculator</span>
          <h2 className="text-3xl font-extrabold text-[#111612] mb-3">Calculate Your Company&apos;s Return</h2>
          <p className="text-sm text-slate-600 mb-8 max-w-lg mx-auto">
            See how much your organization will save every year using Ramp&apos;s automated finance workflows.
          </p>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-md max-w-xl mx-auto text-left">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-700 uppercase">Total Employees</span>
              <span className="text-lg font-black font-mono-tech text-[#111612]">{employeeCount} team members</span>
            </div>
            <input
              type="range"
              min={10}
              max={500}
              step={5}
              value={employeeCount}
              onChange={(e) => setEmployeeCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#16a34a] mb-6"
            />

            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-emerald-50/50 border border-emerald-100">
              <div>
                <span className="text-xs text-slate-500 block">Est. Annual Direct Savings</span>
                <span className="text-2xl font-black font-mono-tech text-emerald-700">
                  ${estimatedAnnualSavings.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Accounting Hours Saved</span>
                <span className="text-2xl font-black font-mono-tech text-[#111612]">
                  {hoursSavedPerMonth} hrs / mo
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#d8dcd3] py-12 bg-[#f7f8f6] text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-black font-bold text-sm">ramp</span>
            <span>— Spend management, corporate cards, and accounts payable</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://ramp.com" target="_blank" rel="noreferrer" className="text-black hover:underline">Official ramp.com</a>
            <span>·</span>
            <span>UI Recreation Lab</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default RampRecreation;

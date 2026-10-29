import React, { useState } from 'react';
import {
  ArrowLeft,
  Grid,
  Eye,
  Download,
  FileText,
  Activity,
  ChevronDown,
  ChevronUp,
  Check,
  Search,
  ArrowRight,
  Database,
  BarChart2,
} from 'lucide-react';

interface Publication {
  id: string;
  doi: string;
  col: string;
  title: string;
  leadAuthor: string;
  laboratory: string;
  year: string;
  citations: number;
  complexity: string;
  abstract: string;
}

export function SwissGridWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [showGridOverlay, setShowGridOverlay] = useState(false);
  const [expandedPaper, setExpandedPaper] = useState<string | null>('pub-1');
  const [filterLab, setFilterLab] = useState<string>('all');
  const [accreditationSubmitted, setAccreditationSubmitted] = useState(false);
  const [visitorName, setVisitorName] = useState('');
  const [visitorEmail, setVisitorEmail] = useState('');
  const [visitorAffiliation, setVisitorAffiliation] = useState('');

  const publications: Publication[] = [
    {
      id: 'pub-1',
      doi: '10.1007/s00454-026-0418-2',
      col: 'COL.01 — 06',
      title: 'Topological Persistence of High-Dimensional Calabi-Yau Manifolds Under Symplectic Flow',
      leadAuthor: 'Prof. Dr. H. Zbinden & Dr. K. Meier',
      laboratory: 'Algorithmic Topology & Geometry',
      year: '2026',
      citations: 142,
      complexity: 'O(n · log n)',
      abstract:
        'We formulate an exact polynomial-time algorithm for computing persistent Betti numbers on triangulated 6-dimensional Calabi-Yau varieties. By exploiting symplectic symmetries, our decomposition guarantees boundary preservation within sub-second thresholds on distributed clusters.',
    },
    {
      id: 'pub-2',
      doi: '10.1137/24M1589021',
      col: 'COL.07 — 12',
      title: 'Stochastic Navier-Stokes Tensor Visualizations on Curvilinear Non-Euclidean Meshes',
      leadAuthor: 'Dr. C. V. Müller & M. Favre',
      laboratory: 'Computational Fluid Morphogenesis',
      year: '2025',
      citations: 98,
      complexity: 'O(V² · E)',
      abstract:
        'A unified tensor field visualization framework mapping turbulent vorticity transitions onto hyperbolic manifolds. Provides rigorous bounds on visual occlusion while maintaining divergence-free velocity invariants across boundary layers.',
    },
    {
      id: 'pub-3',
      doi: '10.1145/3641519.3657410',
      col: 'COL.01 — 06',
      title: 'Optimal Coordinate Projections for 12-Dimensional Lie Algebras in Planar Displays',
      leadAuthor: 'Prof. Dr. A. Fontana & J. S. Weber',
      laboratory: 'Mathematical Representation Theory',
      year: '2026',
      citations: 67,
      complexity: 'O(k³ · d)',
      abstract:
        'Investigating the perceptual fidelity of isometric vs orthographic projections when embedding exceptional Lie algebras (E8, G2) into calibrated 2D planar graphic canvases. Validated via eye-tracking trials across 40 geometricians.',
    },
    {
      id: 'pub-4',
      doi: '10.48550/arXiv.2602.08194',
      col: 'COL.07 — 12',
      title: 'Information Geometry of Neural Diffusion Latent Spaces: A Riemannian Metric Approach',
      leadAuthor: 'Dr. B. L. Steiner & Dr. S. Rey',
      laboratory: 'Statistical Information Geometry',
      year: '2025',
      citations: 215,
      complexity: 'O(d² · log N)',
      abstract:
        'Deriving the explicit Fisher-Rao metric tensor along trajectories of non-equilibrium generative diffusion processes. Demonstrates how curved geodesics reveal topological phase transitions in generative representation models.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#111215] font-sans selection:bg-[#e63946] selection:text-white relative">
      {/* Interactive 12-Column Grid Lines Overlay */}
      {showGridOverlay && (
        <div className="fixed inset-0 pointer-events-none z-50 flex max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="w-full h-full grid grid-cols-12 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-full border-x border-[#e63946]/20 bg-[#e63946]/5 flex flex-col justify-between p-1 font-mono text-[9px] text-[#e63946] font-bold"
              >
                <span>COL.{String(i + 1).padStart(2, '0')}</span>
                <span>WIDTH: 8.33%</span>
                <span>COL.{String(i + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Return to Gallery Navigation Bar */}
      <div className="border-b border-[#e2e2df] bg-[#f0f0ee] px-4 py-2.5 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-1.5 px-3 py-1 rounded border border-[#cfcfcb] hover:bg-[#e4e4e0] text-[#111215] transition-colors cursor-pointer font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#e63946]" />
            <span>RETURN TO GALLERY</span>
          </button>
          <span className="hidden sm:inline-block text-[#999]">•</span>
          <span className="hidden sm:inline-block text-[#555]">
            WEBSITE #19 // RIGOROUS SWISS 12-COLUMN GRID DESIGN
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowGridOverlay(!showGridOverlay)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded border text-xs font-mono font-bold transition-colors cursor-pointer ${
              showGridOverlay
                ? 'bg-[#e63946] text-white border-[#e63946]'
                : 'bg-white text-[#111215] border-[#cfcfcb] hover:bg-[#f5f5f3]'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>{showGridOverlay ? 'DISABLE GRID GUIDE' : 'SHOW 12-COL GRID GUIDE'}</span>
          </button>
        </div>
      </div>

      {/* Swiss Institutional Masthead */}
      <header className="border-b-2 border-black bg-[#fafaf9]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          {/* Top Metadata Strip */}
          <div className="grid grid-cols-12 border-b border-[#e2e2df] py-3 text-xs font-mono text-[#555]">
            <div className="col-span-12 sm:col-span-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#e63946]" />
              <span className="font-bold text-black uppercase">SWISS FEDERAL RESEARCH COUNCIL</span>
            </div>
            <div className="col-span-6 sm:col-span-4 hidden sm:block">
              INSTITUTE REGISTRATION: CH-4051 BASEL // ISO 9001
            </div>
            <div className="col-span-6 sm:col-span-4 text-right">
              LAT 47.5596° N // LON 7.5886° E
            </div>
          </div>

          {/* Main Masthead Banner */}
          <div className="py-8 grid grid-cols-12 gap-4 items-baseline">
            <div className="col-span-12 lg:col-span-8">
              <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e63946] font-bold">
                INSTITUT FÜR MATHEMATISCHE VISUALISIERUNG BASEL
              </div>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-black font-grotesk mt-1 uppercase">
                IMV BASEL // 2026
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4 text-xs font-mono text-[#444] space-y-1">
              <div>SECTION 01: TOPOLOGICAL PERSISTENCE</div>
              <div>SECTION 02: STOCHASTIC TENSOR FIELDS</div>
              <div>SECTION 03: PEER-REVIEWED ARCHIVE</div>
            </div>
          </div>

          {/* Nav Anchors with Strict Modular Alignment */}
          <div className="grid grid-cols-12 border-t border-black text-xs font-mono uppercase font-bold text-black">
            <a href="#overview" className="col-span-6 sm:col-span-3 py-3 border-r border-[#e2e2df] hover:bg-black hover:text-white transition-colors text-center">
              01 // Disciplinary Overview
            </a>
            <a href="#formula" className="col-span-6 sm:col-span-3 py-3 sm:border-r border-[#e2e2df] hover:bg-black hover:text-white transition-colors text-center">
              02 // Tensor Formulation
            </a>
            <a href="#archive" className="col-span-6 sm:col-span-3 py-3 border-r border-[#e2e2df] hover:bg-black hover:text-white transition-colors text-center">
              03 // Publications (4)
            </a>
            <a href="#colloquium" className="col-span-6 sm:col-span-3 py-3 hover:bg-black hover:text-white transition-colors text-center">
              04 // Colloquium RSVP
            </a>
          </div>
        </div>
      </header>

      {/* DISCIPLINARY OVERVIEW SECTION: Strict 12-Column Modular Division */}
      <section id="overview" className="max-w-[1400px] mx-auto px-6 sm:px-12 py-16 border-b border-[#e2e2df]">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Col 01–04: Section Anchor & Tenet */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="text-xs font-mono text-[#e63946] font-bold uppercase tracking-wider">
              SECTION 01.00 // THE RIGOR OF PROJECTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black font-grotesk uppercase leading-tight">
              Objective Structure Over Subjective Ornament.
            </h2>
            <p className="text-xs sm:text-sm text-[#444] leading-relaxed">
              At the Institute for Mathematical Visualization in Basel, the graphic surface is not an expressive canvas; it is a coordinate system. Every millimeter of space, every font size increment, and every horizontal division is derived mathematically from the underlying dimensional dataset.
            </p>
          </div>

          {/* Col 05–12: 4 Research Laboratories in Strict Table Format */}
          <div className="col-span-12 lg:col-span-8 border border-black bg-white">
            <div className="grid grid-cols-12 bg-black text-white p-3 font-mono text-xs font-bold uppercase">
              <span className="col-span-2">LAB #</span>
              <span className="col-span-6">RESEARCH DISCIPLINE</span>
              <span className="col-span-4 text-right">DIRECTOR</span>
            </div>

            <div className="divide-y divide-[#e2e2df] font-mono text-xs">
              <div className="grid grid-cols-12 p-4 items-center hover:bg-[#f5f5f3] transition-colors">
                <span className="col-span-2 font-bold text-[#e63946]">LAB 01</span>
                <span className="col-span-6 font-bold text-black">Algorithmic Topology & Geometry</span>
                <span className="col-span-4 text-right text-[#555]">Prof. Dr. H. Zbinden</span>
              </div>
              <div className="grid grid-cols-12 p-4 items-center hover:bg-[#f5f5f3] transition-colors">
                <span className="col-span-2 font-bold text-[#e63946]">LAB 02</span>
                <span className="col-span-6 font-bold text-black">Computational Fluid Morphogenesis</span>
                <span className="col-span-4 text-right text-[#555]">Dr. C. V. Müller</span>
              </div>
              <div className="grid grid-cols-12 p-4 items-center hover:bg-[#f5f5f3] transition-colors">
                <span className="col-span-2 font-bold text-[#e63946]">LAB 03</span>
                <span className="col-span-6 font-bold text-black">Mathematical Representation Theory</span>
                <span className="col-span-4 text-right text-[#555]">Prof. Dr. A. Fontana</span>
              </div>
              <div className="grid grid-cols-12 p-4 items-center hover:bg-[#f5f5f3] transition-colors">
                <span className="col-span-2 font-bold text-[#e63946]">LAB 04</span>
                <span className="col-span-6 font-bold text-black">Statistical Information Geometry</span>
                <span className="col-span-4 text-right text-[#555]">Dr. B. L. Steiner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULA & GEOMETRIC TOPOLOGY SECTION */}
      <section id="formula" className="max-w-[1400px] mx-auto px-6 sm:px-12 py-16 border-b border-[#e2e2df] bg-[#f5f5f3]">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Mathematical CAD Visualization Canvas */}
          <div className="col-span-12 lg:col-span-8 bg-white border border-black p-6 sm:p-10 space-y-6 shadow-sm">
            <div className="flex justify-between items-center text-xs font-mono border-b border-black pb-3">
              <span className="font-bold text-black">FIG. 04.2 // CALABI-YAU VARIETY PROJECTION MATRIX</span>
              <span className="text-[#e63946] font-bold">DIM(V) = 6 // BETTI(3) = 204</span>
            </div>

            {/* Geometric SVG Vector Drawing */}
            <div className="w-full aspect-[16/8] bg-[#fafaf9] border border-[#e2e2df] flex items-center justify-center relative overflow-hidden">
              <svg className="w-full h-full max-w-lg p-6" viewBox="0 0 400 200" fill="none" stroke="currentColor">
                {/* Precise Mathematical Hairlines */}
                <circle cx="200" cy="100" r="80" stroke="#111215" strokeWidth="1" strokeDasharray="3 3" />
                <ellipse cx="200" cy="100" rx="140" ry="60" stroke="#111215" strokeWidth="1" />
                <ellipse cx="200" cy="100" rx="60" ry="140" stroke="#111215" strokeWidth="0.5" />
                <line x1="20" y1="100" x2="380" y2="100" stroke="#e63946" strokeWidth="1" />
                <line x1="200" y1="10" x2="200" y2="190" stroke="#e63946" strokeWidth="1" />
                <polygon points="120,40 280,40 320,160 80,160" stroke="#111215" strokeWidth="1.5" />
                <polygon points="200,20 340,100 200,180 60,100" stroke="#e63946" strokeWidth="1" strokeDasharray="4 2" />
                <circle cx="200" cy="100" r="4" fill="#e63946" />
                <circle cx="120" cy="40" r="3" fill="#111215" />
                <circle cx="280" cy="40" r="3" fill="#111215" />
                <circle cx="320" cy="160" r="3" fill="#111215" />
                <circle cx="80" cy="160" r="3" fill="#111215" />
              </svg>
              <div className="absolute bottom-2 right-3 font-mono text-[10px] text-[#777]">
                ORTHOGONAL HOMOLOGY EMBEDDING // EPSILON &lt; 10⁻⁸
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4 text-xs font-mono text-[#555]">
              <div className="col-span-6 sm:col-span-4">
                <span className="font-bold text-black block">COORDINATE AXIS:</span>
                <span>ξ₁ = Re(ω) ∧ Im(Ω)</span>
              </div>
              <div className="col-span-6 sm:col-span-4">
                <span className="font-bold text-black block">CONVERGENCE:</span>
                <span className="text-[#e63946] font-bold">1.48 ms @ 10,000 Nodes</span>
              </div>
              <div className="col-span-12 sm:col-span-4">
                <span className="font-bold text-black block">VERIFICATION:</span>
                <span>Swiss HPC Piz Daint Cluster</span>
              </div>
            </div>
          </div>

          {/* Col 09–12: Analytical Formulations */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="text-xs font-mono text-[#e63946] font-bold uppercase tracking-wider">
              SECTION 02.00 // TENSOR EQUATIONS
            </div>
            <h3 className="text-2xl font-black text-black font-grotesk uppercase">
              Governing Invariants
            </h3>
            <div className="p-4 bg-white border border-black font-mono text-xs space-y-3">
              <div className="border-b border-[#e2e2df] pb-2 font-bold text-black">
                EQUATION (1.4): RIEMANNIAN CURVATURE
              </div>
              <div className="text-sm font-bold text-[#e63946]">
                R(X, Y)Z = ∇_X ∇_Y Z - ∇_Y ∇_X Z - ∇_[X, Y] Z
              </div>
              <p className="text-[11px] text-[#555] leading-relaxed">
                Where ∇ represents the Levi-Civita connection on the Riemannian bundle M, guaranteeing parallel transport invariance along closed curves.
              </p>
            </div>
            <div className="p-4 bg-white border border-black font-mono text-xs space-y-2">
              <div className="font-bold text-black uppercase">DATASET VOLUME</div>
              <div className="flex justify-between border-b border-[#e2e2df] pb-1">
                <span>Total Manifolds Analyzed:</span>
                <span className="font-bold">472,910</span>
              </div>
              <div className="flex justify-between border-b border-[#e2e2df] pb-1">
                <span>Active GPU Nodes:</span>
                <span className="font-bold">128 × NVIDIA H100</span>
              </div>
              <div className="flex justify-between">
                <span>Repository DOI:</span>
                <span className="text-[#e63946] font-bold">10.5281/zenodo.9482</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS ARCHIVE: Strict 12-Column Grid Table */}
      <section id="archive" className="max-w-[1400px] mx-auto px-6 sm:px-12 py-16 border-b border-[#e2e2df]">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-black pb-4">
            <div>
              <span className="text-xs font-mono text-[#e63946] font-bold uppercase tracking-widest">
                SECTION 03.00 // PEER-REVIEWED ARCHIVE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-black font-grotesk uppercase mt-1">
                Selected Scientific Publications
              </h2>
            </div>
            <div className="text-xs font-mono text-[#555]">
              SORTED BY PEER CITATION VELOCITY // OPEN ACCESS (CC-BY 4.0)
            </div>
          </div>

          <div className="space-y-4">
            {publications.map((paper) => {
              const isExpanded = expandedPaper === paper.id;
              return (
                <div key={paper.id} className="border border-black bg-white transition-all">
                  <div
                    onClick={() => setExpandedPaper(isExpanded ? null : paper.id)}
                    className="p-5 cursor-pointer hover:bg-[#f5f5f3] flex flex-col lg:flex-row lg:items-center justify-between gap-4 font-mono text-xs"
                  >
                    <div className="space-y-1 lg:max-w-2xl">
                      <div className="flex items-center gap-2 text-[10px] text-[#e63946] font-bold">
                        <span>{paper.col}</span>
                        <span>•</span>
                        <span>DOI: {paper.doi}</span>
                      </div>
                      <div className="text-sm font-bold text-black font-sans leading-snug">
                        {paper.title}
                      </div>
                      <div className="text-[#666]">
                        {paper.leadAuthor} // <span className="font-bold text-black">{paper.laboratory}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between lg:justify-end gap-6 text-xs shrink-0">
                      <div>
                        <span className="text-[#777] block text-[10px]">CITATIONS:</span>
                        <span className="font-bold text-black">{paper.citations}</span>
                      </div>
                      <div>
                        <span className="text-[#777] block text-[10px]">COMPLEXITY:</span>
                        <span className="font-bold text-[#e63946]">{paper.complexity}</span>
                      </div>
                      <button className="p-2 border border-black hover:bg-black hover:text-white transition-colors">
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-6 border-t border-[#e2e2df] bg-[#fafaf9] space-y-4 font-mono text-xs">
                      <div>
                        <span className="font-bold text-black block mb-1">SCIENTIFIC ABSTRACT:</span>
                        <p className="font-sans text-xs sm:text-sm text-[#333] leading-relaxed max-w-3xl">
                          {paper.abstract}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 pt-2">
                        <button className="flex items-center gap-1.5 px-4 py-2 bg-black text-white hover:bg-[#e63946] font-bold text-xs transition-colors cursor-pointer">
                          <Download className="w-3.5 h-3.5" />
                          <span>Download Paper PDF (14.2 MB)</span>
                        </button>
                        <button className="flex items-center gap-1.5 px-4 py-2 border border-black hover:bg-[#f0f0ee] text-black font-bold text-xs transition-colors cursor-pointer">
                          <FileText className="w-3.5 h-3.5" />
                          <span>BibTeX Citation</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COLLOQUIUM & ACCREDITATION SECTION */}
      <section id="colloquium" className="max-w-[1400px] mx-auto px-6 sm:px-12 py-16">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <div className="text-xs font-mono text-[#e63946] font-bold uppercase tracking-widest">
              SECTION 04.00 // SCIENTIFIC COLLOQUIUM
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black font-grotesk uppercase leading-tight">
              Colloquium & Research Residency
            </h2>
            <p className="text-xs sm:text-sm text-[#444] leading-relaxed">
              The IMV hosts bi-weekly doctoral seminars in Basel. Academics, mathematical software engineers, and visiting fellows may apply for seasonal laboratory access.
            </p>

            <div className="p-4 bg-white border border-black space-y-2 font-mono text-xs">
              <div className="font-bold text-black uppercase">SEMINAR VENUE</div>
              <div className="text-[#555]">Auditorium Leonhard Euler, Petersplatz 1, Basel</div>
              <div className="text-[#e63946] font-bold">THURSDAYS 16:15 CET // HYBRID BROADCAST</div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="p-8 border-2 border-black bg-white space-y-6 shadow-sm">
              <div className="border-b border-black pb-3">
                <h3 className="font-grotesk text-2xl font-black text-black uppercase">
                  Accreditation Registration
                </h3>
                <p className="font-mono text-xs text-[#666]">
                  Request researcher badge and laboratory terminal access.
                </p>
              </div>

              {accreditationSubmitted ? (
                <div className="p-6 border border-[#e63946] bg-[#e63946]/5 space-y-2 font-mono text-xs text-black">
                  <div className="font-bold text-[#e63946] flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>ACCREDITATION DOSSIER RECEIVED // BADGE #IMV-2026-CH</span>
                  </div>
                  <p>
                    Thank you, <span className="font-bold">{visitorName}</span> ({visitorAffiliation}). Your request has been logged. Formal credentials will be dispatched to <span className="font-bold">{visitorEmail}</span>.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (visitorName && visitorEmail) setAccreditationSubmitted(true);
                  }}
                  className="space-y-4 font-mono text-xs"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-black mb-1">
                        Full Name & Academic Title
                      </label>
                      <input
                        type="text"
                        required
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        placeholder="e.g. Dr. H. Bernoulli"
                        className="w-full p-2.5 border border-black bg-[#fafaf9] focus:outline-none focus:border-[#e63946]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-black mb-1">
                        Institutional Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={visitorEmail}
                        onChange={(e) => setVisitorEmail(e.target.value)}
                        placeholder="bernoulli@unibas.ch"
                        className="w-full p-2.5 border border-black bg-[#fafaf9] focus:outline-none focus:border-[#e63946]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-black mb-1">
                      Academic Affiliation / Laboratory
                    </label>
                    <input
                      type="text"
                      required
                      value={visitorAffiliation}
                      onChange={(e) => setVisitorAffiliation(e.target.value)}
                      placeholder="e.g. ETH Zürich / Max Planck Institute"
                      className="w-full p-2.5 border border-black bg-[#fafaf9] focus:outline-none focus:border-[#e63946]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-black hover:bg-[#e63946] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Formal Accreditation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Swiss Colophon Footer */}
      <footer className="border-t-2 border-black bg-[#fafaf9] py-12 font-mono text-xs">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-[#555]">
          <div>
            <span className="font-black text-black uppercase">
              INSTITUT FÜR MATHEMATISCHE VISUALISIERUNG BASEL
            </span>
            <div className="text-[11px]">
              CONFEDERATIO HELVETICA // RESEARCH CODE CH-840-2026
            </div>
          </div>
          <div className="flex items-center gap-6 text-[11px] uppercase">
            <span>IMPRESSUM</span>
            <span>·</span>
            <span>DATENSCHUTZ</span>
            <span>·</span>
            <span>OPEN SCIENCE ARCHIVE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

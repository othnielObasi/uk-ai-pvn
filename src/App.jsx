import React, { useMemo, useState } from "react";

const iconPaths = {
  arrowRight: "M5 12h14M13 5l7 7-7 7",
  building: "M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16M9 8h1M13 8h1M9 12h1M13 12h1M9 16h1M3 21h18",
  checkCircle: "M9 12l2 2 4-5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  clipboard: "M9 5h6M9 3h6a2 2 0 0 1 2 2v1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1V5a2 2 0 0 1 2-2ZM9 14l2 2 4-5",
  landmark: "M3 21h18M5 21V10M19 21V10M2 10l10-7 10 7H2Zm5 4h2m2 0h2m2 0h2",
  lock: "M7 11V8a5 5 0 0 1 10 0v3M6 11h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Zm6 4v3",
  menu: "M4 6h16M4 12h16M4 18h16",
  network: "M12 5a3 3 0 1 0 0.01 0M5 19a3 3 0 1 0 0.01 0M19 19a3 3 0 1 0 0.01 0M10 7.5 6.5 16.5M14 7.5l3.5 9M8 19h8",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-5",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  x: "M6 6l12 12M18 6 6 18",
};

const Icon = ({ name, className = "", strokeWidth = 2 }) => {
  const path = iconPaths[name] || iconPaths.checkCircle;
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
};

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base = "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white";
  const variants = {
    primary: "bg-blue-950 text-white hover:bg-blue-900 focus:ring-blue-950",
    secondary: "border border-slate-300 bg-white text-slate-950 hover:bg-slate-50 focus:ring-slate-500",
    accent: "bg-white text-blue-950 hover:bg-slate-100 focus:ring-white",
  };
  return <button className={`${base} ${variants[variant] || variants.primary} ${className}`} {...props}>{children}</button>;
};

const Section = ({ id, eyebrow, title, subtitle, children, className = "" }) => (
  <section id={id} className={`relative scroll-mt-24 py-20 sm:py-24 ${className}`}>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {(eyebrow || title || subtitle) && (
        <div className="mx-auto mb-12 max-w-4xl text-center">
          {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-950">{eyebrow}</p>}
          {title && <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{title}</h2>}
          {subtitle && <p className="mt-5 text-lg leading-8 text-slate-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  </section>
);

const Panel = ({ children, className = "" }) => <div className={`rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-900/5 ${className}`}>{children}</div>;
const IconBadge = ({ name, className = "" }) => <div className={`flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-950 ring-1 ring-blue-100 ${className}`}><Icon name={name} className="h-5 w-5" /></div>;

const navItems = [
  { label: "Case", href: "#problem" },
  { label: "Why now", href: "#why-now" },
  { label: "Model", href: "#model" },
  { label: "Framework", href: "#framework" },
  { label: "Pilot", href: "#pilot" },
];

const problemCards = [
  ["building", "Organisations need evidence", "AI adoption is risky without proof of capability, deployment feasibility, governance, and control over data and infrastructure."],
  ["users", "Builders need fairer pathways", "Current challenge models often undervalue technical labour and provide weak feedback, proof assets, or follow-on opportunities."],
  ["landmark", "The UK needs capability infrastructure", "The country needs trusted pathways that convert AI talent into sovereign, commercially useful adoption across regions and sectors."],
];

const whyNowItems = [
  ["AI adoption pressure is rising", "Organisations are moving from experimentation to operational decisions, but many lack practical validation routes."],
  ["Assurance is becoming a market", "Responsible AI is shifting from principles to evidence: logs, scorecards, risk reviews, and audit-ready outputs."],
  ["Sovereignty is now strategic", "Data residency, model dependency, infrastructure control, and portability are becoming adoption criteria, not afterthoughts."],
  ["Builders need real pathways", "The UK can retain and activate AI talent by connecting builders to credible problems, fairer recognition, and follow-up opportunities."],
];

const validationSteps = [
  ["01", "Challenge brief", "A real adoption problem with sector, data, risk, and sovereignty requirements."],
  ["02", "Builder cohort", "Vetted builders create solutions against a defined evidence standard."],
  ["03", "Validation layer", "Technical, safety, governance, data handling, and deployment-readiness review."],
  ["04", "Sovereignty assurance", "Residency, portability, infrastructure control, auditability, and lock-in review."],
  ["05", "Evidence and follow-up", "Reports and recommendations support partner review, pilot scoping, or refinement."],
];

const sovereigntyChecks = [
  "Where is data stored and processed?",
  "Which model providers and cloud regions are used?",
  "Can the product run in UK, EU, private, or hybrid environments?",
  "Are logs, reports, and validation artifacts exportable?",
  "Can the system switch cloud or model providers?",
  "Does the solution avoid unnecessary vendor lock-in?",
];

const audiences = [
  ["Government & public sector", "Validate AI safely before procurement or deployment."],
  ["Companies & SMEs", "Test real AI use cases with structured evidence and lower-risk pilot routes."],
  ["AI builders & startups", "Access real problems, fairer opportunities, validation reports, and follow-up visibility."],
  ["Universities & AI societies", "Connect talent and research with practical industry adoption challenges."],
  ["Infrastructure & assurance partners", "Support trusted, sovereign, evidence-led AI adoption across sensitive sectors."],
];

const nationalPillars = [
  ["Trusted adoption", "Organisations compare validated prototypes, review risk evidence, and identify which solutions deserve pilot scoping or controlled testing.", ["Less hype-driven procurement", "Safer public-sector testing", "Better evidence before deployment"]],
  ["Sovereign control", "Validation makes data residency, infrastructure dependency, model portability, and audit evidence visible from the start.", ["Reduced vendor lock-in", "UK/EU/private deployment paths", "Exportable logs and reports"]],
  ["Talent and commercialisation", "Builders, universities, and startups gain access to real problems, proof assets, mentors, and follow-on opportunities.", ["Stronger AI talent pipeline", "University-to-industry bridge", "Better startup proof"]],
  ["Regional and economic growth", "SMEs, local innovation hubs, investors, and public bodies can participate in practical AI adoption beyond London.", ["SME adoption support", "Regional innovation", "Better investment signals"]],
];

const scorecard = [
  { label: "Technical execution", value: 15 },
  { label: "AI capability", value: 15 },
  { label: "Safety & governance", value: 15 },
  { label: "Problem fit", value: 10 },
  { label: "User experience", value: 10 },
  { label: "Data handling", value: 10 },
  { label: "Sovereignty & control", value: 10 },
  { label: "Deployment readiness", value: 10 },
  { label: "Commercial viability", value: 3 },
  { label: "Evidence quality", value: 2 },
];

const proofOutputs = [
  ["Technical validation report", "Capability, architecture, integrations, and implementation quality."],
  ["Governance scorecard", "Safety controls, oversight, risk handling, and auditability."],
  ["Sovereignty scorecard", "Data residency, portability, dependency risk, and operational continuity."],
  ["Follow-up recommendation", "Clear next step: partner review, pilot scoping, further refinement, or no follow-up."],
];

const coalitionNodes = [
  ["Government / public sector", "problem ownership and trusted adoption pathways"],
  ["Companies / SMEs", "real use cases and operational feedback"],
  ["Universities", "talent pipeline and research translation"],
  ["Builders", "solution development and technical execution"],
  ["Infrastructure partners", "compute, hosting, and deployment pathways"],
  ["Assurance partners", "governance, evaluation, and evidence standards"],
  ["Investors", "commercialisation and scale pathways"],
];

const partnerCtas = [
  ["Discuss a public-sector pilot", "For government, public bodies, and policy-aligned innovation teams."],
  ["Submit an AI challenge", "For companies, SMEs, and institutions with practical adoption problems."],
  ["Register as a builder", "For AI engineers, startups, students, researchers, and product builders."],
  ["Become a founding partner", "For universities, infrastructure providers, assurance partners, and investors."],
];

const institutionalMarkers = [
  ["Purpose", "Trusted AI adoption infrastructure"],
  ["Method", "Evidence before procurement or deployment"],
  ["Standard", "Capability, governance, sovereignty, and readiness"],
  ["Status", "Seeking founding conversations and pilot partners"],
];

const interestOptions = [
  "Government / public-sector stakeholder",
  "Company / challenge sponsor",
  "AI builder / startup",
  "University / AI society",
  "Infrastructure partner",
  "Responsible AI / assurance partner",
  "Investor / accelerator",
  "General supporter",
];

const conceptNoteHref = "/UK-Sovereign-AI-Validation-Concept-Note.pdf";

const runSelfChecks = () => {
  const assert = (condition, message) => { if (!condition) throw new Error(`Website configuration error: ${message}`); };
  assert(navItems.length === 5, "navigation should expose five main sections");
  assert(problemCards.length === 3, "problem section should contain three core tensions");
  assert(whyNowItems.length === 4, "why-now section should contain four timing drivers");
  assert(validationSteps.length === 5, "validation model should contain five steps");
  assert(sovereigntyChecks.length >= 6, "sovereignty checklist should contain at least six checks");
  assert(audiences.length === 5, "audience matrix should contain five stakeholder groups");
  assert(nationalPillars.length === 4, "national benefits should be grouped into four pillars");
  assert(scorecard.reduce((sum, item) => sum + item.value, 0) === 100, "scorecard weights must total 100");
  assert(proofOutputs.length === 4, "proof outputs should be grouped into four evidence categories");
  assert(partnerCtas.length === 4, "partner CTA pathways should contain four routes");
  assert(institutionalMarkers.length === 4, "institutional marker strip should contain four credibility markers");
  assert(interestOptions.length === 8, "interest form should contain eight stakeholder options");
  assert(conceptNoteHref.endsWith(".pdf"), "concept note download should point to a PDF file");
};

if (typeof window !== "undefined") runSelfChecks();

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="UK Sovereign AI Product Validation Network home">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-950 text-white"><Icon name="network" className="h-5 w-5" /></div>
          <div className="leading-tight"><p className="text-sm font-bold text-slate-950">UK Sovereign AI</p><p className="text-xs text-slate-500">Product Validation Network</p></div>
        </a>
        <div className="hidden items-center gap-8 lg:flex">{navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 hover:text-blue-950">{item.label}</a>)}</div>
        <div className="hidden items-center gap-3 lg:flex"><a href={conceptNoteHref} download className="text-sm font-semibold text-blue-950 hover:text-blue-900">Download PDF</a><a href="#contact" className="text-sm font-semibold text-blue-950 hover:text-blue-900">Register interest</a><a href="#pilot"><Button className="py-2.5">Explore the pilot</Button></a></div>
        <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation"><Icon name={open ? "x" : "menu"} className="h-5 w-5" /></button>
      </nav>
      {open && <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-4">{navItems.map((item) => <a key={item.href} href={item.href} className="text-base font-medium text-slate-700" onClick={() => setOpen(false)}>{item.label}</a>)}<a href="#contact" onClick={() => setOpen(false)}><Button className="w-full">Register interest</Button></a></div></div>}
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative rounded-lg border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5">
      <div className="rounded-md border border-slate-200 bg-white p-5">
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-slate-200 pb-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-950">Validation architecture</p><p className="mt-1 text-xl font-bold text-slate-950">From AI prototype to adoption evidence</p></div><div className="rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-950 ring-1 ring-blue-100">UK-aligned</div></div>
        <div className="space-y-2.5">{validationSteps.map(([number, title, body]) => <div key={number} className="grid grid-cols-[2.75rem_1fr] gap-3 rounded-md border border-slate-200 bg-slate-50 p-3"><div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-950 text-xs font-bold text-white">{number}</div><div><p className="text-sm font-bold text-slate-950">{title}</p><p className="mt-0.5 text-xs leading-5 text-slate-600">{body}</p></div></div>)}</div>
        <div className="mt-5 rounded-md border border-blue-100 bg-blue-50 p-4"><p className="text-sm font-bold text-slate-950">Evidence before procurement or deployment</p><p className="mt-1 text-sm leading-6 text-slate-700">The process helps partners decide what merits deeper follow-up, not just what looks impressive in a demo.</p></div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-slate-200 bg-white pt-32 pb-20 sm:pt-36 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-950"><Icon name="shield" className="h-4 w-4" />Sovereign validation infrastructure for UK AI adoption</div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">From AI prototypes to trusted, sovereign deployment.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">A proposed UK-facing validation network helping organisations assess AI products for capability, safety, governance, sovereignty, and deployment readiness before procurement or deployment.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#pilot"><Button className="w-full sm:w-auto">Explore the pilot <Icon name="arrowRight" className="h-4 w-4" /></Button></a><a href={conceptNoteHref} download><Button variant="secondary" className="w-full sm:w-auto">Download concept note</Button></a><a href="#contact"><Button variant="secondary" className="w-full sm:w-auto">Register interest</Button></a></div>
          <div className="mt-6 grid max-w-2xl grid-cols-1 gap-2 text-sm text-slate-600 sm:grid-cols-2">{["Evidence before procurement", "Sovereignty before scale", "Fairer builder participation", "Partner-led follow-up pathways"].map((item) => <div key={item} className="flex items-center gap-2"><Icon name="checkCircle" className="h-4 w-4 text-blue-950" /><span>{item}</span></div>)}</div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function InstitutionalStrip() {
  return <section className="border-b border-slate-200 bg-slate-50"><div className="mx-auto max-w-7xl px-6 py-5 lg:px-8"><div className="grid gap-4 md:grid-cols-4">{institutionalMarkers.map(([label, value]) => <div key={label} className="border-l border-blue-950/25 pl-4"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p><p className="mt-1 text-sm font-semibold leading-6 text-blue-950">{value}</p></div>)}</div></div></section>;
}

function Problem() {
  return <Section id="problem" eyebrow="The case" title="The missing layer is not another hackathon. It is evidence before adoption." subtitle="AI adoption is moving faster than many organisations can evaluate. The UK needs a practical mechanism that tests usefulness, safety, sovereignty, and deployment readiness before organisations commit." className="bg-white"><div className="grid gap-5 lg:grid-cols-3">{problemCards.map(([icon, title, body]) => <Panel key={title} className="h-full"><IconBadge name={icon} /><h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{body}</p></Panel>)}</div></Section>;
}

function WhyNow() {
  return <Section id="why-now" eyebrow="Why now for the UK" title="The timing is strategic: adoption, assurance, sovereignty, and talent are converging." subtitle="The initiative is strongest when positioned as practical national capability, not as an event platform." className="bg-slate-50"><div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-900/5">{whyNowItems.map(([title, body], index) => <div key={title} className="grid gap-4 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[0.2fr_0.4fr_1fr] md:items-start md:p-6"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-950">0{index + 1}</p><h3 className="text-xl font-bold text-slate-950">{title}</h3><p className="leading-7 text-slate-600">{body}</p></div>)}</div></Section>;
}

function Model() {
  return <Section id="model" eyebrow="Operating model" title="A national validation pathway from real challenge to adoption evidence." subtitle="The model is deliberately simple: real problems, vetted builders, structured validation, sovereignty review, and targeted follow-up with relevant partners." className="bg-white"><div className="mb-10 grid gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm shadow-slate-900/5 lg:grid-cols-4 lg:p-6">{partnerCtas.map(([title, body]) => <a key={title} href="#contact" className="group border-l border-blue-950/25 pl-4 first:border-l-0 first:pl-0"><p className="font-bold text-slate-950 group-hover:text-blue-950">{title}</p><p className="mt-2 text-sm leading-6 text-slate-600">{body}</p></a>)}</div><div className="mx-auto max-w-5xl space-y-5">{validationSteps.map(([number, title, body]) => <div key={number} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5 lg:grid-cols-[3.5rem_1fr] lg:p-5"><div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-950 text-xs font-bold text-white">{number}</div><div><h3 className="text-xl font-bold text-slate-950">{title}</h3><p className="mt-1.5 leading-6 text-slate-600">{body}</p></div></div>)}</div></Section>;
}

function Sovereignty() {
  return <Section id="sovereignty" className="overflow-hidden bg-blue-950 text-white"><div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">Sovereignty principle</p><h2 className="text-3xl font-bold tracking-tight sm:text-5xl">AI validation for the UK must prove capability without sacrificing control.</h2><p className="mt-6 text-lg leading-8 text-blue-100/80">The platform assesses whether AI products can be trusted, controlled, audited, migrated, and operated under UK-aligned requirements. Capability matters, but control is part of readiness.</p><div className="mt-8 border-l border-blue-200 pl-6"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Core judgement question</p><p className="mt-3 text-xl font-semibold leading-8 text-white">Can this AI product be operated safely under real organisational, regulatory, data, and infrastructure constraints?</p></div></div><div className="overflow-hidden rounded-lg border border-white/10 bg-white/5"><div className="border-b border-white/10 p-5"><div className="flex items-center gap-3"><IconBadge name="lock" className="bg-white/10 text-blue-100 ring-white/10" /><div><h3 className="text-xl font-bold">Sovereignty audit panel</h3><p className="text-sm text-blue-100/60">Required in every serious validation challenge</p></div></div></div><div className="grid md:grid-cols-2">{sovereigntyChecks.map((check, index) => <div key={check} className={`flex items-start gap-3 border-white/10 p-5 ${index % 2 === 0 ? "md:border-r" : ""} ${index < 4 ? "border-b" : ""}`}><Icon name="checkCircle" className="mt-0.5 h-5 w-5 flex-none text-blue-100" /><p className="text-sm leading-6 text-blue-50/90">{check}</p></div>)}</div></div></div></Section>;
}

function Ecosystem() {
  return <Section id="ecosystem" eyebrow="Who it serves" title="Designed for the full UK AI ecosystem." subtitle="The initiative connects demand, builders, talent, infrastructure, assurance, and capital into one validation pathway." className="bg-white"><div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-900/5">{audiences.map(([title, body], index) => <div key={title} className="grid gap-4 border-b border-slate-200 p-5 last:border-b-0 md:grid-cols-[0.35fr_1fr_auto] md:items-center md:p-6"><div className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-950">0{index + 1}</div><div><h3 className="text-xl font-bold text-slate-950">{title}</h3><p className="mt-1 leading-7 text-slate-600">{body}</p></div><a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-950 hover:text-blue-900">Start conversation <Icon name="arrowRight" className="h-4 w-4" /></a></div>)}</div></Section>;
}

function NationalBenefits() {
  return <Section id="benefits" eyebrow="National benefit" title="Turning AI experimentation into trusted national capability." subtitle="Instead of scattering AI prototypes across short-lived competitions, the UK can convert them into evidence, skills, procurement confidence, and sovereign control." className="bg-slate-50"><div className="grid gap-8 lg:grid-cols-4">{nationalPillars.map(([title, body, points]) => <div key={title} className="border-l border-blue-950/25 pl-6"><h3 className="text-2xl font-bold tracking-tight text-slate-950">{title}</h3><p className="mt-4 leading-7 text-slate-600">{body}</p><ul className="mt-5 space-y-3">{points.map((point) => <li key={point} className="flex items-start gap-2 text-sm font-semibold text-slate-700"><Icon name="checkCircle" className="mt-0.5 h-4 w-4 flex-none text-blue-950" />{point}</li>)}</ul></div>)}</div><div className="mt-12 rounded-lg bg-blue-950 p-8 text-white lg:p-10"><p className="max-w-5xl text-2xl font-semibold leading-10 tracking-tight">The UK benefits by turning AI experimentation into trusted, sovereign, commercially useful adoption — while strengthening national talent, assurance capability, and infrastructure resilience.</p></div></Section>;
}

function Framework() {
  const max = useMemo(() => Math.max(...scorecard.map((item) => item.value)), []);
  return <Section id="framework" eyebrow="Validation framework" title="A serious validation rubric, not a leaderboard." subtitle="The platform turns prototypes into structured evidence for decision-making, procurement, investment, and adoption-readiness review." className="bg-white"><div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"><Panel><div className="flex items-center gap-3"><IconBadge name="clipboard" className="bg-blue-950 text-white ring-blue-900" /><div><h3 className="text-2xl font-bold text-slate-950">Weighted validation scorecard</h3><p className="mt-1 text-sm font-semibold text-slate-700">Normalised to 100%</p></div></div><div className="mt-7 space-y-4">{scorecard.map((item) => <div key={item.label}><div className="mb-2 flex items-center justify-between text-sm"><span className="font-semibold text-slate-900">{item.label}</span><span className="font-bold text-blue-950">{item.value}%</span></div><div className="h-2.5 overflow-hidden rounded-md bg-slate-200"><div className="h-full rounded-md bg-blue-950" style={{ width: `${(item.value / max) * 100}%` }} /></div></div>)}</div></Panel><div className="rounded-lg border border-slate-200 bg-slate-50 p-5 lg:p-6"><h3 className="text-2xl font-bold text-slate-950">Evidence pack produced for strong submissions</h3><p className="mt-3 leading-7 text-slate-600">The output should be useful after the challenge ends: for procurement discussions, investment review, partner follow-up, university commercialisation, and public-sector assurance.</p><div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">{proofOutputs.map(([title, body]) => <div key={title} className="grid gap-2 p-4 md:grid-cols-[0.4fr_1fr] md:p-5"><p className="font-bold text-slate-950">{title}</p><p className="leading-7 text-slate-600">{body}</p></div>)}</div></div></div></Section>;
}

function Pilot() {
  return <Section id="pilot" eyebrow="First pilot programme" title="UK Trusted and Sovereign AI Product Challenge" subtitle="A focused pilot can validate the model before building a full platform. The goal is to produce credible evidence, not just event activity." className="bg-blue-950 text-white"><div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]"><div className="rounded-lg border border-white/10 bg-white/5 p-5 sm:p-6"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Pilot outcome promise</p><h3 className="mt-3 text-3xl font-bold tracking-tight">A small cohort of validated solutions with clear follow-up recommendations.</h3><p className="mt-4 leading-8 text-blue-100/80">Designed to bring together vetted builders, real challenge briefs, mentor sessions, assurance review, sovereignty assessment, and a final evidence report that helps partners decide which solutions merit deeper follow-up.</p><div className="mt-8 grid gap-4 sm:grid-cols-2">{["20–30 selected builders", "1–3 real challenge briefs", "5–7 day sprint or 4–8 week programme", "Validation reports for finalists", "Governance and sovereignty review", "Follow-up recommendations"].map((item) => <div key={item} className="flex items-start gap-3 border-t border-white/10 pt-4"><Icon name="checkCircle" className="mt-0.5 h-5 w-5 flex-none text-blue-100" /><p className="text-sm leading-6 text-blue-50/90">{item}</p></div>)}</div></div><div className="rounded-lg border border-white/10 bg-white/5 p-5 sm:p-6"><h3 className="text-2xl font-bold">Founding coalition</h3><p className="mt-3 leading-7 text-blue-100/80">The first pilot should be backed by a small credible coalition, not launched as a standalone website alone.</p><div className="mt-6 space-y-3">{coalitionNodes.slice(0, 6).map(([title, role]) => <div key={title} className="rounded-md bg-white/5 p-4 ring-1 ring-white/10"><p className="font-semibold text-white">{title}</p><p className="mt-1 text-sm text-blue-100/70">{role}</p></div>)}</div><a href="#contact" className="mt-8 inline-flex"><Button variant="accent">Become a founding pilot partner <Icon name="arrowRight" className="h-4 w-4" /></Button></a></div></div></Section>;
}

function Coalition() {
  return <Section id="partners" eyebrow="Coalition model" title="Strategic support matters more than platform ownership." subtitle="The initiative should begin by aligning credible ecosystem actors around a shared public-interest validation model for UK AI adoption." className="bg-white"><div className="relative mx-auto max-w-6xl rounded-lg border border-slate-200 bg-slate-50 p-6 lg:p-10"><div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-md bg-blue-950 text-white shadow-sm shadow-slate-900/10"><Icon name="network" className="h-8 w-8" /></div><div className="mx-auto mb-10 max-w-2xl text-center"><h3 className="text-2xl font-bold text-slate-950">Validation Network</h3><p className="mt-3 leading-7 text-slate-600">A neutral coordination layer where challenge demand, builder capability, assurance standards, infrastructure, and follow-up pathways meet.</p></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{coalitionNodes.map(([title, role], index) => <div key={title} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5"><div className="mb-3 flex items-center gap-3"><div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-950 text-xs font-bold text-white">{index + 1}</div><h3 className="font-bold text-slate-950">{title}</h3></div><p className="text-sm leading-6 text-slate-600">{role}</p></div>)}</div></div></Section>;
}

function ConceptNoteCta() {
  return <section className="bg-blue-950 py-16 text-white"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-100">Concept note</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Download the partner-ready concept note.</h2><p className="mt-4 max-w-3xl leading-8 text-blue-100/80">Use the website to create belief, then use the PDF concept note for government-adjacent bodies, AI leaders, universities, infrastructure providers, and assurance partners.</p><p className="mt-3 text-sm leading-6 text-blue-100/70">Deployment note: place the PDF at <span className="font-semibold text-white">public/UK-Sovereign-AI-Validation-Concept-Note.pdf</span> so this download button works in production.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><a href={conceptNoteHref} download><Button variant="accent" className="w-full">Download PDF <Icon name="arrowRight" className="h-4 w-4" /></Button></a><a href="#contact"><Button variant="accent" className="w-full">Request partner discussion</Button></a></div></div></div></section>;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return <Section id="contact" eyebrow="Register interest" title="Start with a conversation." subtitle="Register interest as a public-sector stakeholder, company, builder, university, infrastructure partner, assurance partner, investor, or supporter." className="bg-slate-50"><div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]"><Panel><h3 className="text-2xl font-bold text-slate-950">What happens next?</h3><div className="mt-6 space-y-5">{[["Validate demand", "Speak with AI leaders, companies, builders, universities, and government-adjacent stakeholders."], ["Form a founding coalition", "Bring together infrastructure, university, assurance, sponsor, and builder-community partners."], ["Run the first pilot", "Launch a focused UK Trusted and Sovereign AI Product Challenge with measurable outputs."]].map(([title, body], index) => <div key={title} className="flex gap-4"><div className="flex h-8 w-8 flex-none items-center justify-center rounded-md bg-blue-950 text-sm font-bold text-white">{index + 1}</div><div><p className="font-semibold text-slate-950">{title}</p><p className="mt-1 text-sm leading-6 text-slate-600">{body}</p></div></div>)}</div></Panel><Panel>{submitted ? <div className="flex min-h-[28rem] flex-col items-center justify-center text-center"><div className="flex h-16 w-16 items-center justify-center rounded-md bg-blue-50 text-blue-950"><Icon name="checkCircle" className="h-8 w-8" /></div><h3 className="mt-5 text-2xl font-bold text-slate-950">Interest registered</h3><p className="mt-3 max-w-md leading-7 text-slate-600">Thank you. Your details have been captured for follow-up about the UK Sovereign AI Product Validation Network.</p><Button className="mt-6" onClick={() => setSubmitted(false)}>Submit another response</Button></div> : <form className="space-y-5" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><div className="grid gap-5 sm:grid-cols-2"><label className="block"><span className="text-sm font-semibold text-slate-800">Name</span><input required type="text" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-950 focus:ring-4 focus:ring-blue-50" placeholder="Your name" /></label><label className="block"><span className="text-sm font-semibold text-slate-800">Email</span><input required type="email" className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-950 focus:ring-4 focus:ring-blue-50" placeholder="you@example.com" /></label></div><label className="block"><span className="text-sm font-semibold text-slate-800">I am interested as</span><select required className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-950 focus:ring-4 focus:ring-blue-50"><option value="">Select one</option>{interestOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label><label className="block"><span className="text-sm font-semibold text-slate-800">Message</span><textarea rows={5} className="mt-2 w-full resize-none rounded-md border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-950 focus:ring-4 focus:ring-blue-50" placeholder="Tell us what you would like to explore..." /></label><Button type="submit" className="w-full">Register interest <Icon name="arrowRight" className="h-4 w-4" /></Button><p className="text-xs leading-5 text-slate-500">We will only use your details to follow up about this initiative and related conversations.</p></form>}</Panel></div></Section>;
}

function Footer() {
  return <footer className="border-t border-slate-200 bg-white py-10"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-950 text-white"><Icon name="network" className="h-5 w-5" /></div><div><p className="font-bold text-slate-950">UK Sovereign AI Product Validation Network</p><p className="text-sm text-slate-500">Trusted AI adoption. Evidence before deployment.</p></div></div><div className="flex flex-wrap gap-4 text-sm text-slate-500"><a href="#problem" className="hover:text-blue-950">Case</a><a href="#why-now" className="hover:text-blue-950">Why now</a><a href="#model" className="hover:text-blue-950">Model</a><a href="#framework" className="hover:text-blue-950">Framework</a><a href={conceptNoteHref} download className="hover:text-blue-950">Download PDF</a><a href="#contact" className="hover:text-blue-950">Contact</a></div></div></footer>;
}

export default function UKSovereignAIValidationWebsite() {
  return <main className="min-h-screen bg-white font-sans text-slate-900"><Header /><Hero /><InstitutionalStrip /><Problem /><WhyNow /><Model /><Sovereignty /><Ecosystem /><NationalBenefits /><Framework /><Pilot /><Coalition /><ConceptNoteCta /><Contact /><Footer /></main>;
}

import { Link } from '@tanstack/react-router';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  Compass,
  FileBadge2,
  Mic,
  Sparkles,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import { ROUTES } from '@/lib/constants';

const stats = [
  { label: 'Faster interviews', value: '2.4x' },
  { label: 'Offer-ready resumes', value: '97%' },
  { label: 'Live practice sessions', value: '24/7' },
];

const steps = [
  {
    title: 'Define where you want to go',
    description:
      'Tell the coach your next role, target companies, and timeline—it builds a roadmap in seconds.',
    icon: Compass,
  },
  {
    title: 'Train with live scenarios',
    description:
      'Practice interviews, negotiation runs, and portfolio critiques tuned to your seniority.',
    icon: Mic,
  },
  {
    title: 'Ship assets that stand out',
    description:
      'Get rewrites for resumes, outreach, and LinkedIn updates that are already ATS-friendly.',
    icon: FileBadge2,
  },
];

const focusAreas = [
  {
    title: 'Role switch accelerators',
    details: ['Map transferable skills', 'Rewrite your narrative', 'Target the right companies'],
    icon: Briefcase,
  },
  {
    title: 'Interview control rooms',
    details: ['Behavioral drills', 'System design walk-throughs', 'Follow-up templates'],
    icon: Mic,
  },
  {
    title: 'Offer + negotiation',
    details: ['Comp research', 'Counter-offer scripts', 'Decision frameworks'],
    icon: BarChart3,
  },
  {
    title: 'Weekly coaching cadence',
    details: ['Set goals in minutes', 'Track momentum', 'Rescope when priorities shift'],
    icon: CalendarClock,
  },
];

const chatPreview = [
  {
    author: 'You',
    content: 'I want to pivot from design to product this quarter. Where do I start?',
  },
  {
    author: 'AI Coach',
    content:
      "Let's ship a 6-week plan: 1) Reframe your portfolio for PM impact, 2) Build 3 case studies with measurable outcomes, 3) Run weekly mock interviews with feedback.",
  },
  {
    author: 'You',
    content: 'Can you rewrite my headline for senior PM roles?',
  },
  {
    author: 'AI Coach',
    content:
      "Absolutely. Here's a first pass: \"Senior Product Partner | Scales 0→1 experiences through research-led roadmaps | Proven at bridging design + engineering.\"",
  },
];

const wins = [
  'ATS-safe rewrites for resumes and LinkedIn',
  'Company-specific interview prep and drills',
  'Outbound messages that get quick replies',
  'Negotiation scripts tailored to your range',
];

export function Home() {
  const { t } = useTranslation();
  const appName = t('common.appName');

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#050712] via-[#0c1724] to-[#050712] text-slate-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-10 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24 space-y-20">
        <section className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-emerald-500/10">
              <Badge className="bg-emerald-500/20 text-emerald-100 ring-emerald-400/30">
                AI Career Coach
              </Badge>
              <span className="text-white/70">Built to get you hired faster</span>
            </div>

            <div className="space-y-4">
              <p className="text-lg uppercase tracking-[0.2em] text-emerald-200/80">Career Lab</p>
              <h1 className="text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
                Chart your next career move with a coach that works as hard as you do.
              </h1>
              <p className="max-w-2xl text-lg text-slate-200/80">
                {appName} pairs live coaching simulations with tailored assets—so you can pivot
                roles, nail interviews, and negotiate offers without guessing the next step.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to={ROUTES.LOGIN} search={{ mode: 'sign-up' }}>
                <Button size="lg" className="gap-2 shadow-lg shadow-emerald-500/25">
                  Start for free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to={ROUTES.ABOUT}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  See how it works
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              {stats.map(item => (
                <div key={item.label}>
                  <div className="text-3xl font-semibold text-white">{item.value}</div>
                  <div className="text-sm text-slate-300/80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 blur-2xl" />
            <Card className="relative overflow-hidden border-white/15 bg-white/10 text-white backdrop-blur-xl shadow-2xl shadow-emerald-500/20">
              <CardHeader className="border-b border-white/10">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Sparkles className="h-5 w-5 text-emerald-300" />
                  Live coaching preview
                </CardTitle>
                <CardDescription className="text-slate-200/80">
                  Each thread keeps context, goals, and the assets you need to ship this week.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm leading-relaxed">
                  {chatPreview.map(message => (
                    <div
                      key={message.content}
                      className="mb-3 last:mb-0 rounded-lg bg-white/5 p-3 shadow-inner shadow-black/20"
                    >
                      <p className="mb-1 text-xs uppercase tracking-wide text-emerald-200/80">
                        {message.author}
                      </p>
                      <p className="text-slate-100/90">{message.content}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-50">
                  <div className="flex items-center gap-2 font-medium">
                    <Target className="h-4 w-4" />
                    Next move recommendation
                  </div>
                  <p className="mt-2 text-emerald-100/80">
                    Add one mock behavioral interview and a LinkedIn rewrite before Friday. I'll
                    track both and unblock you with examples.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-3 text-emerald-200">
            <CheckCircle2 className="h-5 w-5" />
            <p className="text-sm uppercase tracking-[0.3em]">How coaching works</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map(step => (
              <Card
                key={step.title}
                className="border-white/10 bg-white/5 text-white backdrop-blur-md shadow-lg shadow-emerald-500/10"
              >
                <CardHeader className="space-y-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-100">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription className="text-slate-200/80">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3 text-emerald-200">
            <Sparkles className="h-5 w-5" />
            <p className="text-sm uppercase tracking-[0.3em]">Deep dives</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {focusAreas.map(area => (
              <Card
                key={area.title}
                className="border-white/10 bg-gradient-to-br from-white/10 to-white/5 text-white backdrop-blur"
              >
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div>
                    <CardTitle>{area.title}</CardTitle>
                    <CardDescription className="text-slate-200/80">
                      Targeted drills, scripts, and assets.
                    </CardDescription>
                  </div>
                  <div className="rounded-full bg-emerald-500/15 p-3 text-emerald-100">
                    <area.icon className="h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-slate-100/90">
                  {area.details.map(detail => (
                    <div key={detail} className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <Badge className="bg-emerald-500/20 text-emerald-100">Momentum you can measure</Badge>
            <h2 className="text-3xl font-semibold leading-tight">
              Every session produces something you can send today.
            </h2>
            <p className="text-slate-200/80">
              No more guessing what to do next. We keep a running list of artifacts, confidence
              boosters, and outreach that moves you closer to an offer.
            </p>
            <div className="space-y-2 text-sm text-slate-100/90">
              {wins.map(item => (
                <div key={item} className="flex items-start gap-3 rounded-lg bg-white/5 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4 rounded-2xl border border-white/10 bg-black/30 p-6 shadow-xl shadow-emerald-500/10">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-200">
              <Sparkles className="h-4 w-4" />
              Real-time playbooks
            </div>
            <div className="space-y-4">
              {[
                'Rewrite your resume summary for Staff PM roles with metrics.',
                'Run a mock system design for "designing a notifications service".',
                'Draft a cold outreach to a hiring manager at Figma with a 2-line pitch.',
                'Plan a 15-minute salary conversation for a competing offer.',
              ].map(task => (
                <div key={task} className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <p className="text-slate-100/90">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-600/50 via-emerald-500/30 to-cyan-500/20 p-10 shadow-2xl shadow-emerald-500/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_45%)]" />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-100/80">Ready?</p>
              <h3 className="text-2xl font-semibold text-white">
                Step into your next role with a coach that keeps pace.
              </h3>
              <p className="text-slate-100/80">
                Start a thread, set your target role, and ship your first asset in under 10 minutes.
              </p>
            </div>
            <Link to={ROUTES.LOGIN} search={{ mode: 'sign-up' }}>
              <Button size="lg" className="gap-2 bg-white text-emerald-900 hover:bg-white/90">
                Start coaching now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}


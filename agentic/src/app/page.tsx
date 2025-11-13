import { PostCard } from "@/components/PostCard";
import { getDailyPosts } from "@/lib/postGenerator";

const cadenceHighlights = [
  "Front-load a strong hook — the first 140 characters determine dwell time.",
  "Anchor insights to business impact so senior leaders keep reading.",
  "End with a conversation starter to nudge meaningful engagement.",
];

export default async function Home() {
  const posts = await getDailyPosts(5);
  const hashtagHeatmap = Array.from(
    new Set(posts.flatMap((post) => post.hashtags))
  ).slice(0, 10);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:px-10">
        <header className="flex flex-col gap-6 rounded-[36px] border border-white/10 bg-slate-900/70 p-10 shadow-2xl shadow-slate-900/40 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-sky-400">
              Daily AI Signal
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Ready-to-post LinkedIn narratives for fast-moving AI leaders
            </h1>
            <p className="text-lg text-slate-200">
              Fresh hooks, strategic insights, and visual storytelling crafted from today&apos;s AI
              headlines. Each card is a complete post aligned to LinkedIn engagement dynamics.
            </p>
          </div>
          <a
            href={posts[0]?.articleUrl ?? "#"}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border border-sky-500/50 bg-sky-500/15 px-6 text-sm font-semibold text-sky-100 transition hover:border-sky-300/70 hover:bg-sky-400/20"
          >
            View today&apos;s top source
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-400/20 text-base text-sky-200 transition group-hover:bg-sky-400/30 group-hover:text-white">
              ↗
            </span>
          </a>
        </header>

        <section className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="grid gap-10">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          <aside className="flex flex-col gap-8">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-400">
                Publishing cadence
              </p>
              <ul className="mt-4 space-y-4 text-sm text-slate-200">
                {posts.map((post) => (
                  <li
                    key={`${post.id}-calendar`}
                    className="flex flex-col gap-1 rounded-2xl border border-slate-800/80 bg-slate-900/80 px-4 py-3"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                      {post.displayDate}
                    </span>
                    <span className="text-base font-semibold text-white">{post.theme}</span>
                    <span className="text-sm text-slate-400">{post.headline}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-sky-500/40 bg-sky-500/10 p-6 text-sky-100 shadow-xl shadow-sky-900/20 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                Hashtag heatmap
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {hashtagHeatmap.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-sky-900/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-amber-500/40 bg-amber-500/10 p-6 text-amber-100 shadow-xl shadow-amber-900/20 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                Playbook reminders
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                {cadenceHighlights.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-amber-300" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import type { DailyPost } from "@/lib/postGenerator";

type PostCardProps = {
  post: DailyPost;
};

export function PostCard({ post }: PostCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(post.copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/50 p-6 shadow-xl shadow-slate-900/40 backdrop-blur sm:p-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10">
        <Image
          src={post.imageUrl}
          alt={`Concept illustration for ${post.headline}`}
          width={1200}
          height={675}
          priority
          className="h-48 w-full object-cover sm:h-60"
        />
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-300 ring-1 ring-sky-500/30 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          {post.theme}
        </div>
      </div>

      <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400 sm:text-sm">
            {post.displayDate}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">{post.hook}</h2>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 self-start rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200 transition hover:border-sky-300/60 hover:bg-sky-400/10 hover:text-white"
        >
          {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
          {copied ? "Copied" : "Copy post"}
        </button>
      </header>

      <p className="text-sm text-slate-400">{post.source}</p>

      <ul className="space-y-3 text-base leading-relaxed text-slate-100 sm:text-lg">
        {post.insights.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="mt-1.5 inline-block h-2 w-2 flex-none rounded-full bg-sky-400" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 px-4 py-4 text-amber-100">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-200/90">Call to action</p>
        <p className="mt-2 text-base leading-relaxed text-amber-50">{post.callToAction}</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-200">
        <div className="flex flex-wrap gap-2">
          {post.hashtags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700/80 bg-slate-800/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={post.articleUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sky-300 transition hover:text-sky-100"
        >
          Read source
          <ArrowIcon className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}

type IconProps = {
  className?: string;
};

function CopyIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l4 4 10-10" />
    </svg>
  );
}

function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10" />
      <path d="M9 4l4 4-4 4" />
    </svg>
  );
}

export default PostCard;


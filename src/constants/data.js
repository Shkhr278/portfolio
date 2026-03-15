import { AlignCenter } from "lucide-react";

export const bentoProjects = [
  {
    id: 1,
    title: "CareerVision AI",
    description:
      "A full-stack AI-powered career platform featuring LangChain-based personalized recommendations, an ATS resume builder, and real-time AI interview simulations.",
    tags: ["React", "Node.js", "FastAPI", "MongoDB", "LangChain"],
    colSpan: "col-span-1 md:col-span-2 md:col-start-2 md:row-start-1",
    color: "from-[var(--color-neon-purple)] to-[var(--color-neon-blue)]",
    titleClass: "text-3xl font-bold tracking-tight text-white",
    descClass: "text-lg font-light text-gray-300 max-w-md mt-4",
    bgOpacityClass: "opacity-[0.15] group-hover:opacity-[0.25]",
    tagClass:
      "text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 bg-black/40 text-subtle",
    hasExternalLink: true,
    linkColor: "hover:text-[var(--color-neon-blue)]",
    link: "https://careervision.vercel.app",
  },
  {
    id: 2,
    title: "FairFare",
    description:
      "A comprehensive full-stack expense management application with real-time balance tracking, group settlements, push notifications, and a natural-language AI assistant.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    colSpan: "col-span-1 md:col-span-2 md:col-start-1 md:row-start-2",
    color: "from-[var(--color-neon-pink)] to-[var(--color-neon-purple)]",
    titleClass: "text-3xl font-bold tracking-tight text-white",
    descClass: "text-lg font-light text-gray-300 max-w-md mt-auto mb-6",
    bgOpacityClass: "opacity-[0.12] group-hover:opacity-[0.25]",
    tagClass:
      "text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 bg-black/40 text-subtle",
    hasExternalLink: true,
    linkColor: "hover:text-[var(--color-neon-pink)]",
    link: "https://fair-fare-phi.vercel.app",
  },
  {
    id: 3,
    title: "FairFare Admin Panel",
    description:
      "A comprehensive full-stack expense management application with real-time balance tracking, group settlements, push notifications, and a natural-language AI assistant.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    colSpan: "col-span-1 md:col-span-2 md:col-start-3 md:row-start-2",
    color: "from-[var(--color-neon-blue)] to-[var(--color-neon-pink)]",
    titleClass:
      "text-3xl font-bold tracking-tight text-white text-right w-full",
    descClass:
      "text-lg font-light text-gray-300 max-w-md mt-auto mb-6 ml-auto text-right",
    bgOpacityClass: "opacity-[0.12] group-hover:opacity-[0.25]",
    tagClass:
      "text-xs font-mono px-3 py-1.5 rounded-full border border-white/10 bg-black/40 text-subtle",
    hasExternalLink: true,
    linkColor: "hover:text-[var(--color-neon-pink)]",
    link: "https://fairfare-admin.vercel.app",
  },
];

/** Canonical public links from "Connect with me everywhere". Single source for footer, contact, about. */

export type SocialLink = {
  name: string
  href: string
  group: "developer" | "professional" | "academic" | "social"
}

export const socialLinks: SocialLink[] = [
  { name: "g.dev/ompramod", href: "https://g.dev/ompramod", group: "developer" },
  { name: "GitHub", href: "https://github.com/om-pramod", group: "developer" },
  { name: "Dev.to", href: "https://dev.to/om-pramod", group: "developer" },
  { name: "Hashnode", href: "https://hashnode.com/@omkarpramod", group: "developer" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ompramod", group: "professional" },
  { name: "Substack", href: "https://substack.com/@ompramod", group: "professional" },
  { name: "Medium", href: "https://ompramod.medium.com/", group: "professional" },
  { name: "Bluesky", href: "https://bsky.app/profile/ompramod.substack.com", group: "professional" },
  { name: "ResearchGate", href: "https://www.researchgate.net/profile/Omkar-Hankare", group: "academic" },
  { name: "ORCID", href: "https://orcid.org/0009-0005-2241-4858", group: "academic" },
  { name: "Google Scholar", href: "https://scholar.google.com/citations?user=W3A9ur4AAAAJ", group: "academic" },
  { name: "X (Twitter)", href: "https://x.com/omritmo", group: "social" },
  { name: "Instagram", href: "https://instagram.com/omritmo", group: "social" },
  { name: "Threads", href: "https://threads.net/@omritmo", group: "social" },
]

export const primaryLinks = {
  linkedin: "https://www.linkedin.com/in/ompramod",
  github: "https://github.com/om-pramod",
  medium: "https://ompramod.medium.com/",
  substack: "https://substack.com/@ompramod",
  scholar: "https://scholar.google.com/citations?user=W3A9ur4AAAAJ",
  orcid: "https://orcid.org/0009-0005-2241-4858",
  x: "https://x.com/omritmo",
} as const

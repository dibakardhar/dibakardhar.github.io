import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Email",
        href: "mailto:dibakardhar07@gmail.com",
        linkTitle: `Send an email to Dibakar Dhar`,
        isActive: true,
    },
    {
        name: "Email CERN",
        href: "mailto:dibakar.dhar@cern.ch",
        linkTitle: `Send an email to Dibakar Dhar (CERN)`,
        isActive: true,
    },
    {
        name: "GitHub",
        href: "https://github.com/dibakardhar",
        linkTitle: `Follow Dibakar Dhar on GitHub`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/dibakar-x01-dhar/",
        linkTitle: `Connect with Dibakar Dhar on LinkedIn`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=V0pm7XQAAAAJ&hl=en",
        linkTitle: `Dibakar Dhar on Google Scholar`,
        isActive: true,
    },
    {
        name: "ResearchGate",
        href: "https://www.researchgate.net/profile/Dibakar-Dhar",
        linkTitle: `Dibakar Dhar on ResearchGate`,
        isActive: true,
    },
    {
        name: "INSPIRE-HEP",
        href: "https://inspirehep.net/authors/2870903",
        linkTitle: `Dibakar Dhar on INSPIRE-HEP`,
        isActive: true,
    },
    {
        name: "Scopus",
        href: "https://www.scopus.com/authid/detail.uri?authorId=59303501300",
        linkTitle: `Dibakar Dhar on Scopus`,
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0009-0002-1135-0105",
        linkTitle: `Dibakar Dhar on ORCID`,
        isActive: true,
    },
    {
        name: "Twitter/X",
        href: "https://x.com/DibakarDhar7",
        linkTitle: `Follow Dibakar Dhar on Twitter/X`,
        isActive: true,
    },
    {
        name: "About Me",
        href: "https://about.me/dibakardhar",
        linkTitle: `Dibakar Dhar on About Me`,
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Email: "Mail",
    "Email CERN": "Mail",
    GitHub: "Github",
    LinkedIn: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ResearchGate: "ResearchGate",
    "INSPIRE-HEP": "Database",
    Scopus: "Search",
    ORCID: "ORCID",
    "Twitter/X": "Twitter",
    "About Me": "Globe",
    RSS: "RSS",
};

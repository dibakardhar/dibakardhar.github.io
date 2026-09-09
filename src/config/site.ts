import type { SiteConfig, ThemeConfig, SettingsConfig, UmamiAnalyticsConfig, AnalyticsConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://dibakardhar.github.io",
    author: "Dibakar Dhar",
    desc: "High Energy Physics | Astro-Particle Research Scholar exploring multiparticle production, compact stars, and AI applications in Physics.",
    title: "Dibakar Dhar",
    ogImage: "profile.jpg",  // Changed from shannon.webp to your profile photo
    postPerPage: 5,
    favicon: "/profile.jpg",
    lang: "en",
};

export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: true,
    themeLight: "light_default",
    themeDark: "dark_modern",  // This gives a beautiful dark theme
    // Alternative dark themes you can try:
    // "dark_modern", "dark_vintage", "dark_contrast", "dark_notepad"
};

export const SETTINGS: SettingsConfig = {
    showTagsInNavbar: true,
    showRSSInFooter: true,
    addDevToolsInProduction: false,  // Changed to false for production
};

const umami: UmamiAnalyticsConfig = {
    websiteId: "", // Leave empty for now, add later if you want analytics
    src: "https://cloud.umami.is/script.js",
}

export const ANALYTICS: AnalyticsConfig = {
    ga4Id: "",  // Leave empty for now
    umami: umami
};

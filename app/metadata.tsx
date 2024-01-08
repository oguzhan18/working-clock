import { Metadata } from "next";

export const meta: Metadata = {
  title: "Working Clock",
  description: `Experience the Working Clock, a timer application for effective time management. Customize session and break lengths to enhance your productivity. Stay on track with this interactive countdown timer.`,
  authors: [{ name: "Working Clock", url: "https://oguzhancart.dev/" }],
  applicationName: "Working Clock",
  keywords: [
    "Timer app",
    "Productivity tool",
    "Time management",
    "Session length",
    "Break length",
    "Countdown timer",
    "Interactive clock",
    "Customizable timer",
    "Web application",
    "Frontend project",
    "React app",
    "Working clock"
  ],
  creator: "OguzhanCart",
  publisher: "OguzhanCart",
};

// Additional Twitter metadata
export const twitterMeta = {
  card: "summary",
  site: "@oguzhancart", // Replace with your actual Twitter handle
  title: "Working Clock - Timer Application",
  description:
    "Enhance your productivity with the Working Clock timer app. Customize session and break lengths for effective time management.",
  image: "/social.png", // Replace with an actual image URL
};

export default meta;

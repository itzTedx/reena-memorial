import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Reena Memorial - In Loving Memory of a Compassionate Nurse",
    short_name: "Reena Memorial",
    description:
      "Honoring the life and legacy of Reena, a dedicated nurse who touched countless lives with compassion and kindness. Supporting nursing students and community health initiatives in her memory.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0ea5e9",
    categories: ["memorial", "healthcare", "charity", "education"],
    lang: "en",
    orientation: "portrait",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}

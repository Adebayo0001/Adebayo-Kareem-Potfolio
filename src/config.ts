/**
 * Unified Editorial Portfolio Configuration Location
 * Adebayo Kareem Strategic Portfolio
 *
 * Configurable parameters for all contact channels, media links, and tracking integrations.
 */

export const PORTFOLIO_CONFIG = {
  // Primary Contact Configurations
  email: "a.abidemi0777@gmail.com",
  whatsappNumber: "447400123456", // E.164 format, numbers only for perfect WhatsApp link generation
  bookingUrl: "https://calendly.com/adebayokareem/consultation",
  portraitImage: "/portrait.jpg", // Public folder portrait image

  // YouTube / Masterclass Videos
  youtubeUrls: {
    workshopDemo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Masterclass code compile video anchor
  },

  // Social Channels Directory
  socialLinks: [
    { label: "LINKEDIN", url: "https://linkedin.com/in/adebayokareem" },
    { label: "TWITTER", url: "https://twitter.com/adebayokareem" },
    { label: "GITHUB", url: "https://github.com/adebayokareem" },
    { label: "MEDIUM", url: "https://medium.com/@adebayokareem" }
  ],

  // Client-Safe Analytics Integration Configuration
  analytics: {
    enabled: true,
    logToConsole: true, // Outputs tracking telemetry directly to console for quick audit verification
    endpoint: "/api/event-telemetry", // Hidden proxy API route placeholder for absolute security
    environment: "production"
  }
};

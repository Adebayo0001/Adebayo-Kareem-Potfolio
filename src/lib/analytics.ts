import { PORTFOLIO_CONFIG } from "../config";

export interface AnalyticsEvent {
  event: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

/**
 * Robust analytics dispatcher for the portfolio.
 * Dispatches to standard data layers, proxies, and developer diagnostic logs.
 */
export function dispatchAnalyticsEvent(eventName: string, metadata?: Record<string, any>) {
  const { enabled, logToConsole, endpoint } = PORTFOLIO_CONFIG.analytics;

  if (!enabled) return;

  const eventPayload: AnalyticsEvent = {
    event: eventName,
    timestamp: new Date().toISOString(),
    metadata: metadata || {}
  };

  // Push to a safe window dataLayer array (standard integration path for Google Tag Manager, etc.)
  if (typeof window !== "undefined") {
    const win = window as any;
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push(eventPayload);
  }

  // Developer diagnostic logs (highly useful for checking clicks without database inspects)
  if (logToConsole) {
    console.log(`[ANALYTICS_DISPATCH: ${eventName}]`, eventPayload);
  }

  // Dispatch to secure tracking endpoint safely without blocking the main UI thread
  if (endpoint) {
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventPayload),
    }).catch(() => {
      // Quietly suppress failures in development to protect the user experience
    });
  }
}

// Named exports for explicit analytics actions as requested
export const trackEmailClick = () => {
  dispatchAnalyticsEvent("email_click");
};

export const trackWhatsappClick = (projectName?: string) => {
  dispatchAnalyticsEvent("whatsapp_click", {
    sourceProject: projectName || "general_portfolio_gateway"
  });
};

export const trackBookingClick = () => {
  dispatchAnalyticsEvent("booking_click");
};

export const trackProjectView = (projectId: string) => {
  dispatchAnalyticsEvent("project_view", { projectId });
};

export const trackWorkshopView = () => {
  dispatchAnalyticsEvent("workshop_view");
};

export const trackCaseStudyView = (projectId: string) => {
  dispatchAnalyticsEvent("case_study_view", { projectId });
};

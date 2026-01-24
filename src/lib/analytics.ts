type EventParams = Record<string, any>;

export function trackEvent(eventName: string, params: EventParams = {}) {
  // Meta Pixel
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("trackCustom", eventName, params);
  }

  // Google Analytics 4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  }
}

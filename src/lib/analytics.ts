type EventParams = Record<string, any>;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export function trackGA(event: string, params?: EventParams) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, params || {});
  }
}

export function trackMeta(event: string, params?: EventParams) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", event, params || {});
  }
}

export function track(event: string, params?: EventParams) {
  trackGA(event, params);
  trackMeta(event, params);
}

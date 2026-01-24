declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, any>
) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, params || {});
  }
}

export function trackEvent(
  eventName: string,
  params: Record<string, any> = {}
) {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("trackCustom", eventName, params);
  }

  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  }
}

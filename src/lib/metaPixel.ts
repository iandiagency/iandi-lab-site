declare global {
  interface Window {
    fbq?: FbqFunction;
    _fbq?: FbqFunction;
  }
}

type FbqFunction = {
  (...args: any[]): void;
  callMethod?: (...args: any[]) => void;
  queue?: any[];
  loaded?: boolean;
  version?: string;
};

export function initMetaPixel(pixelId: string) {
  if (typeof window === "undefined") return;
  if (window.fbq) return; // já inicializado

  const fbq: FbqFunction = function (...args: any[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue?.push(args);
    }
  };

  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";

  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";

  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode?.insertBefore(script, firstScript);

  fbq("init", pixelId);
  fbq("track", "PageView");
}

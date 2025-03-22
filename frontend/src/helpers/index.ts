export function normalizeUrl(url: string): string {
  if (!url || !url.includes("://")) {
    return url || '';
  }

  const [protocol, rest] = url.split("://");

  return `${protocol}://${rest.replace(/\/{2,}/g, "/")}`;
}

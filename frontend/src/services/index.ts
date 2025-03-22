import { normalizeUrl } from "../helpers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function httpGet<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  console.log("httpGet", API_URL);
  const response = await fetch(`${API_URL}/${normalizeUrl(url)}`, {
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

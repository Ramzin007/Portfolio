import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function readingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en", {
    notation: value > 999 ? "compact" : "standard",
  }).format(value);
}

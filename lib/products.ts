import type { StaticImageData } from "next/image";
import forerunner165MusicImage from "@/app/assets/products/forerunner-165-music-ia.webp";
import forerunner165MusicBgImage from "@/app/assets/products/garmin-forerunner-165-music-bg-black.webp";
import pulseTracerImage from "@/app/assets/products/pulse-tracer.png";
import velocitaX1Image from "@/app/assets/products/velocita-x1.png";

export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductMetric = {
  label: string;
  value: string;
  accent: "primary" | "secondary";
};

export type Product = {
  id: string;
  name: string;
  description: string;
  detailHeadline: string;
  detailSummary: string;
  price: number;
  image: StaticImageData;
  catalogImage?: StaticImageData;
  tags: readonly string[];
  soldOut: boolean;
  features: readonly string[];
  specs: readonly ProductSpec[];
  metrics: readonly ProductMetric[];
};

export type CartProductInput = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export function toCartProduct(product: Product): CartProductInput {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image: (product.catalogImage ?? product.image).src,
  };
}

export const products: ReadonlyArray<Product> = [
  {
    id: "velocita-x1",
    name: "Velocita X-1",
    description: "Ultra-light marathon racer with embedded telemetry chip.",
    detailHeadline: "Race-day propulsion with telemetry-grade precision.",
    detailSummary:
      "Velocita X-1 is engineered for runners who want carbon-plated snap, low-weight transitions, and race-surface intelligence in a single silhouette.",
    price: 285,
    image: velocitaX1Image,
    tags: ["C-PLATE V3", "GPS SYNC"],
    soldOut: true,
    features: [
      "Carbon-plate geometry tuned for half and full marathon cadence.",
      "Embedded telemetry cavity for stride and impact tracking modules.",
      "Featherweight engineered mesh upper with locked heel collar.",
    ],
    specs: [
      { label: "Weight", value: "198 G" },
      { label: "Drop", value: "6 MM" },
      { label: "Plate", value: "CARBON V3" },
      { label: "Use Case", value: "RACE DAY" },
    ],
    metrics: [
      { label: "Energy Return", value: "92%", accent: "primary" },
      { label: "Stride Lock", value: "4.8/5", accent: "secondary" },
      { label: "Ground Signal", value: "LOW", accent: "secondary" },
    ],
  },
  {
    id: "pulse-tracer",
    name: "Pulse Tracer",
    description: "Daily trainer with integrated biometric feedback loop.",
    detailHeadline: "Daily-mileage control with recovery-aware feedback.",
    detailSummary:
      "Pulse Tracer blends cushioned repeatability with biometric-ready internals so base-building sessions stay measurable, stable, and efficient.",
    price: 220,
    image: pulseTracerImage,
    tags: ["HR SENSOR"],
    soldOut: true,
    features: [
      "Stable midsole tuned for repeatable daily training volume.",
      "Integrated biometric feedback loop prepared for pulse and stress modules.",
      "Abrasion-resistant outsole for mixed urban and treadmill usage.",
    ],
    specs: [
      { label: "Weight", value: "244 G" },
      { label: "Drop", value: "8 MM" },
      { label: "Support", value: "NEUTRAL" },
      { label: "Use Case", value: "DAILY TRAINER" },
    ],
    metrics: [
      { label: "Shock Buffer", value: "88%", accent: "primary" },
      { label: "Heart Sync", value: "READY", accent: "secondary" },
      { label: "Longevity", value: "780 KM", accent: "secondary" },
    ],
  },
  {
    id: "garmin-forerunner-165-music",
    name: "Garmin Forerunner 165 Music",
    description:
      "Advanced sports watch with integrated music and fitness tracking.",
    detailHeadline: "Multi-GNSS wrist telemetry built for autonomous training.",
    detailSummary:
      "Forerunner 165 Music keeps workouts, pacing, route confidence, and on-device playlists in one lightweight watch built for structured endurance blocks.",
    price: 350,
    image: forerunner165MusicImage,
    catalogImage: forerunner165MusicBgImage,
    tags: ["MULTI-GNSS", "MUSIC"],
    soldOut: false,
    features: [
      "Built-in music playback for phone-free training sessions.",
      "Multi-GNSS tracking with crisp pacing and route confidence.",
      "High-contrast AMOLED display for quick-glance metrics in motion.",
    ],
    specs: [
      { label: "Display", value: "AMOLED" },
      { label: "Battery", value: "11 DAYS" },
      { label: "GPS", value: "MULTI-GNSS" },
      { label: "Storage", value: "MUSIC READY" },
    ],
    metrics: [
      { label: "Signal Lock", value: "FAST", accent: "primary" },
      { label: "Recovery", value: "ADVANCED", accent: "secondary" },
      { label: "Music Sync", value: "ONBOARD", accent: "secondary" },
    ],
  },
] as const;

export const featuredProducts: ReadonlyArray<Product> = products;

export const catalogProducts: ReadonlyArray<Product> = products;

export function getProductById(productId: string): Product | undefined {
  return products.find((product) => product.id === productId);
}

export function getProductHref(productId: string): string {
  return `/catalog/${productId}`;
}

export function getProductCardImage(product: Product): StaticImageData {
  return product.catalogImage ?? product.image;
}

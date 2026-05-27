import type { StaticImageData } from "next/image";
import forerunner165MusicImage from "@/app/assets/products/forerunner-165-music-ia.webp";
import forerunner165MusicBgImage from "@/app/assets/products/garmin-forerunner-165-music-bg-black.webp";
import pulseTracerImage from "@/app/assets/products/pulse-tracer.png";
import velocitaX1Image from "@/app/assets/products/velocita-x1.png";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
};

export type CatalogProduct = Product & {
  tags: string[];
};

export const featuredProducts: ReadonlyArray<Product> = [
  {
    id: "velocita-x1",
    name: "Velocita X-1",
    description: "Ultra-light marathon racer with embedded telemetry chip.",
    price: 285,
    image: velocitaX1Image,
  },
  {
    id: "pulse-tracer",
    name: "Pulse Tracer",
    description: "Daily trainer with integrated biometric feedback loop.",
    price: 220,
    image: pulseTracerImage,
  },
  {
    id: "garmin-forerunner-165-music",
    name: "Garmin Forerunner 165 Music",
    description:
      "Advanced sports watch with integrated music and fitness tracking.",
    price: 350,
    image: forerunner165MusicImage,
  },
] as const;

export const catalogProducts: ReadonlyArray<CatalogProduct> = [
  {
    id: "velocita-x1",
    name: "Velocita X-1",
    description: "Ultra-light marathon racer with embedded telemetry chip.",
    price: 285,
    tags: ["C-PLATE V3", "GPS SYNC"],
    image: velocitaX1Image,
  },
  {
    id: "pulse-tracer",
    name: "Pulse Tracer",
    description: "Daily trainer with integrated biometric feedback loop.",
    price: 220,
    tags: ["HR SENSOR"],
    image: pulseTracerImage,
  },
  {
    id: "garmin-forerunner-165-music",
    name: "Garmin Forerunner 165 Music",
    description:
      "Advanced sports watch with integrated music and fitness tracking.",
    price: 350,
    tags: ["MULTI-GNSS", "MUSIC"],
    image: forerunner165MusicBgImage,
  },
] as const;

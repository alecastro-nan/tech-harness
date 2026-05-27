import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Finalize your Cyber-Run order with a frictionless checkout flow and live cart summary.",
  alternates: {
    canonical: "/checkout",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

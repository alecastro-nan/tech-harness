import { getARSPrice } from "@/lib/currency";

type ProductPriceProps = {
  amountUsd: number;
  className?: string;
};

export function ProductPrice({ amountUsd, className }: ProductPriceProps) {
  return <span className={className}>{getARSPrice(amountUsd)}</span>;
}

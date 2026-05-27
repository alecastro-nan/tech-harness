/**
 * Currency conversion and formatting utilities
 */

const ARS_CONVERSION_RATE = 1420;

/**
 * Convert USD price to ARS
 */
export function convertToARS(usdPrice: number): number {
  return Math.round(usdPrice * ARS_CONVERSION_RATE);
}

/**
 * Format price in ARS currency
 */
export function formatARS(amount: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Get display price in ARS with conversion
 */
export function getARSPrice(usdPrice: number): string {
  return formatARS(convertToARS(usdPrice));
}

export function isValidNumber(input: string): number | null {
  const trimmed = input.trim();
  
  const numberRegex = /^-?\d+([.,]\d+)?$/;
  
  if (!numberRegex.test(trimmed)) {
    return null;
  }
  
  const normalized = trimmed.replace(',', '.');
  
  const parsed = parseFloat(normalized);
  
  return isNaN(parsed) ? null : parsed;
}
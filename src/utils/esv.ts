export function buildEsvUrl(reference: string) {
  const normalizedReference = reference
    .trim()
    .replace(/\s*\(ESV\)\s*$/i, "")
    .replace(/[–\u2014]/g, "-")
    .replace(/\s+/g, "+");

  return `https://www.esv.org/${normalizedReference}/`;
}

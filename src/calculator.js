export function add(numbers) {
  if (numbers === "") return 0;

  numbers = numbers.replace(/\\n/g, '\n');
  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split('\n');
    const customDelimiter = parts[0].substring(2);
    delimiter = new RegExp(`[${escapeRegExp(customDelimiter)}\n,]`);
    numbers = parts.slice(1).join('\n');
  }

  const parts = numbers.split(delimiter).map(Number);
  const negatives = parts.filter(n => n < 0);

  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed: " + negatives.join(','));
  }

  return parts.reduce((sum, num) => sum + num, 0);
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
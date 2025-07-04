function add(numbers) {
  if (numbers === "") return 0;
  if (!numbers.includes(',')) return parseInt(numbers);

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) 
  {
    const parts = numbers.split('\n');
    delimiter = new RegExp(parts[0][2]);
    numbers = parts[1];
  }

  const parts = numbers.split(delimiter).map(Number);
  const negatives = parts.filter(n => n < 0);

  if (negatives.length > 0) 
  {
    throw new Error("negative numbers not allowed: " + negatives.join(','));
  }

  return parts.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };


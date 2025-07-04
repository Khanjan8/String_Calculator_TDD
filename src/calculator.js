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

  const parts = numbers.split(delimiter);
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };


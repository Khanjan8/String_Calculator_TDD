function add(numbers) {
  if (numbers === "") return 0;
  if (!numbers.includes(',')) return parseInt(numbers);

  const parts = numbers.split(',');
  return parts.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };


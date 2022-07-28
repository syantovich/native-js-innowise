let elements = [
  { name: "water", weight: 3, need: 10 },
  { name: "books", weight: 1, need: 3 },
  { name: "eat", weight: 2, need: 9 },
  { name: "jacket", weight: 2, need: 5 },
  { name: "camera", weight: 1, need: 6 },
];
const weightShopper = 6;
function gcd(number1, number2) {
  if (number1 === number2) return number1;

  let max = Math.max(number1, number2);
  let min = Math.min(number1, number2);

  let remainder = max % min;

  while (remainder) {
    max = remainder;
    if (max < min) [min, max] = [max, min];
    remainder = max % min;
  }

  return min;
}

function dynamicHike(elements, weightShopper) {
  let size = elements.map((item) => item.weight).sort((a, b) => a - b);
  const table = [];
  let minSize = gcd(weightShopper, size[0]);
  size.forEach((e) => gcd(minSize, e));
  let cols = weightShopper / minSize,
    rows = elements.length;
  for (let i = 0; i < rows; i++) {
    table.push([]);
    let currentNeed = elements[i].need;
    let currentWeight = elements[i].weight;
    for (let j = 0; j < cols; j++) {
      let availableWeight = (j + 1) * minSize;
      let prev;
      if (i > 0) {
        prev = table[i - 1][j];
      }
      if (currentWeight > availableWeight) {
        table[i][j] = prev;
      } else {
        let space = availableWeight - currentWeight;
        let spaceCell;
        if (space && i > 0) {
          spaceCell = table[i - 1][j - currentWeight / minSize];
        }
        let totalWeight = currentNeed + (spaceCell ? spaceCell.need : 0);
        let spaceCellItems = spaceCell ? spaceCell.elements : [];

        if (!prev || prev.need < totalWeight) {
          table[i][j] = {
            need: totalWeight,
            elements: [...spaceCellItems, elements[i].name],
          };
        } else {
          table[i][j] = prev;
        }
      }
    }
  }

  return table[table.length - 1][table[table.length - 1].length - 1];
}
console.log(dynamicHike(elements, weightShopper));
